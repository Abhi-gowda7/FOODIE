const express = require('express');
const asynchHandler = require('express-async-handler');
const recipe = require('../Models/recipeModel');
const recipeRouter = express.Router();

//Create Recipe
recipeRouter.post(
  '/',

  asynchHandler(async (req, res) => {
    try {
      const Recipe = await recipe.create(req.body);
      res.status(200);
      res.json(Recipe);
    } catch (error) {
      res.status(500);
      throw new Error(error);
    }
  })
);

//Delete Recipe

recipeRouter.delete(
  '/:id',
  asynchHandler(async (req, res) => {
    try {
      const Recipe = await recipe.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send(Recipe);
    } catch (error) {
      res.status(500);
      throw new Error('Server Error');
    }
  })
);

//Update

// Update Recipe
recipeRouter.put(
  '/:id',
  async (req, res) => {
    try {
      const recipeId = req.params.id;
      const updatedData = req.body;

      // Ensure that 'cooking_time' is provided; this field is marked as required.
      if (!updatedData.cooking_time) {
        res.status(400).json({ message: 'cooking_time is required' });
        return;
      }

      // Find the recipe by ID and update it
      const updatedRecipe = await recipe.findByIdAndUpdate(recipeId, updatedData, {
        new: true, // Return the updated recipe
        runValidators: true, // Run model validators to validate the updated data
      });

      if (!updatedRecipe) {
        res.status(404).json({ message: 'Recipe not found' });
        return;
      }

      res.status(200).json(updatedRecipe);
    } catch (error) {
      console.error('Error updating recipe:', error);
      res.status(500).json({ message: 'Update failed' });
    }
  }
);


//find a recipe
recipeRouter.get(
  '/:id',
  asynchHandler(async (req, res) => {
    try {
      const Recipe = await recipe.findById(req.params.id);
      res.status(200);
      res.send(Recipe);
    } catch (error) {
      res.status(500);
      throw new Error('No Recipe found');
    }
  })
);

recipeRouter.get(
  '/user/:username',
  asynchHandler(async (req, res) => {
    try {
      const username = req.params.username;
      const recipes = await recipe.find({ username: username });
      
      if (recipes) {
        res.status(200).json(recipes);
      } else {
        res.status(404).json({ message: 'No recipes found for this username' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  })
);

//Search by title
recipeRouter.get(
  '/',
  asynchHandler(async (req, res) => {
    try {
      const { title } = req.query;
      let recipes;

      if (title) {
        // If a title query parameter is provided, search by title
        recipes = await recipe.find({
          title: {
            $regex: title,
            $options: 'i',
          },
        });
      } else {
        // If no title query parameter is provided, fetch all recipes
        recipes = await recipe.find();
      }

      if (recipes) {
        res.status(200).json(recipes);
      } else {
        res.status(404).json({ message: 'No recipes found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  })
);


module.exports = { recipeRouter };
