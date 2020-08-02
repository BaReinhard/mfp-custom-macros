const fetch = require('node-fetch');
const MFP_USER_ID = process.env.MFP_USER_ID;
const MFP_CLIENT_ID = "mfp-main-js";
const BEARER_TOKEN = process.env.BEARER_TOKEN;
let CALORIES = {
    carb: 4,
    fat: 9,
    protein: 4,
    alcohol: 7
};
let fat_ratio_of_leftover = .4;
let carb_ratio_of_leftover = .6;

let v = { "item": { "valid_from": "2020-08-01", "daily_goals": [{ "day_of_week": "monday", "energy": { "value": 2060, "unit": "calories" }, "carbohydrates": 258, "protein": 103, "fat": 69, "saturated_fat": 13, "polyunsaturated_fat": 0, "monounsaturated_fat": 0, "trans_fat": 0, "fiber": 25, "sugar": 45, "cholesterol": 300, "sodium": 2300, "potassium": 3500, "vitamin_a": 100, "vitamin_c": 100, "calcium": 100, "iron": 100, "assign_exercise_energy": "nutrient_goal", "meal_goals": [] }, { "day_of_week": "tuesday", "energy": { "value": 2060, "unit": "calories" }, "carbohydrates": 258, "protein": 103, "fat": 69, "saturated_fat": 13, "polyunsaturated_fat": 0, "monounsaturated_fat": 0, "trans_fat": 0, "fiber": 25, "sugar": 45, "cholesterol": 300, "sodium": 2300, "potassium": 3500, "vitamin_a": 100, "vitamin_c": 100, "calcium": 100, "iron": 100, "assign_exercise_energy": "nutrient_goal", "meal_goals": [] }, { "day_of_week": "wednesday", "energy": { "value": 2060, "unit": "calories" }, "carbohydrates": 258, "protein": 103, "fat": 69, "saturated_fat": 13, "polyunsaturated_fat": 0, "monounsaturated_fat": 0, "trans_fat": 0, "fiber": 25, "sugar": 45, "cholesterol": 300, "sodium": 2300, "potassium": 3500, "vitamin_a": 100, "vitamin_c": 100, "calcium": 100, "iron": 100, "assign_exercise_energy": "nutrient_goal", "meal_goals": [] }, { "day_of_week": "thursday", "energy": { "value": 2060, "unit": "calories" }, "carbohydrates": 258, "protein": 103, "fat": 69, "saturated_fat": 13, "polyunsaturated_fat": 0, "monounsaturated_fat": 0, "trans_fat": 0, "fiber": 25, "sugar": 45, "cholesterol": 300, "sodium": 2300, "potassium": 3500, "vitamin_a": 100, "vitamin_c": 100, "calcium": 100, "iron": 100, "assign_exercise_energy": "nutrient_goal", "meal_goals": [] }, { "day_of_week": "friday", "energy": { "value": 2060, "unit": "calories" }, "carbohydrates": 258, "protein": 103, "fat": 69, "saturated_fat": 13, "polyunsaturated_fat": 0, "monounsaturated_fat": 0, "trans_fat": 0, "fiber": 25, "sugar": 45, "cholesterol": 300, "sodium": 2300, "potassium": 3500, "vitamin_a": 100, "vitamin_c": 100, "calcium": 100, "iron": 100, "assign_exercise_energy": "nutrient_goal", "meal_goals": [] }, { "day_of_week": "saturday", "energy": { "value": 2060, "unit": "calories" }, "carbohydrates": 258, "protein": 103, "fat": 69, "saturated_fat": 13, "polyunsaturated_fat": 0, "monounsaturated_fat": 0, "trans_fat": 0, "fiber": 25, "sugar": 45, "cholesterol": 300, "sodium": 2300, "potassium": 3500, "vitamin_a": 100, "vitamin_c": 100, "calcium": 100, "iron": 100, "assign_exercise_energy": "nutrient_goal", "meal_goals": [] }, { "day_of_week": "sunday", "energy": { "value": 2060, "unit": "calories" }, "carbohydrates": 258, "protein": 103, "fat": 69, "saturated_fat": 13, "polyunsaturated_fat": 0, "monounsaturated_fat": 0, "trans_fat": 0, "fiber": 25, "sugar": 45, "cholesterol": 300, "sodium": 2300, "potassium": 3500, "vitamin_a": 100, "vitamin_c": 100, "calcium": 100, "iron": 100, "assign_exercise_energy": "nutrient_goal", "meal_goals": [] }], "default_goal": { "energy": { "value": 2060, "unit": "calories" }, "carbohydrates": 258, "protein": 103, "fat": 69, "saturated_fat": 13, "polyunsaturated_fat": 0, "monounsaturated_fat": 0, "trans_fat": 0, "fiber": 25, "sugar": 45, "cholesterol": 300, "sodium": 2300, "potassium": 3500, "vitamin_a": 100, "vitamin_c": 100, "calcium": 100, "iron": 100, "assign_exercise_energy": "nutrient_goal", "meal_goals": [] } } }

let calories = 2060;
let protein = 115;

let leftover_calories = calories - (CALORIES.protein * protein);
let fat = (leftover_calories * fat_ratio_of_leftover) / CALORIES.fat;
let carbs = (leftover_calories * carb_ratio_of_leftover) / CALORIES.carb;

v.item.default_goal.energy.value = calories;
v.item.default_goal.protein = protein;
v.item.default_goal.fat = fat;
v.item.default_goal.carbohydrates = carbs;
v.item.daily_goals = v.item.daily_goals.map(goal=>{
    goal.calories = calories;
    goal.protein = protein;
    goal.fat = fat;
    goal.carbohydrates = carbs;
    return goal;
})

console.log(JSON.stringify(v));
// process.exit();
// let v = {"item":{"valid_from":"2020-08-01","daily_goals":[{"day_of_week":"monday","energy":{"value":2060,"unit":"calories"},"carbohydrates":240,"protein":115,"fat":71.11111111111111,"saturated_fat":13,"polyunsaturated_fat":0,"monounsaturated_fat":0,"trans_fat":0,"fiber":25,"sugar":45,"cholesterol":300,"sodium":2300,"potassium":3500,"vitamin_a":100,"vitamin_c":100,"calcium":100,"iron":100,"assign_exercise_energy":"nutrient_goal","meal_goals":[],"calories":2060},{"day_of_week":"tuesday","energy":{"value":2060,"unit":"calories"},"carbohydrates":240,"protein":115,"fat":71.11111111111111,"saturated_fat":13,"polyunsaturated_fat":0,"monounsaturated_fat":0,"trans_fat":0,"fiber":25,"sugar":45,"cholesterol":300,"sodium":2300,"potassium":3500,"vitamin_a":100,"vitamin_c":100,"calcium":100,"iron":100,"assign_exercise_energy":"nutrient_goal","meal_goals":[],"calories":2060},{"day_of_week":"wednesday","energy":{"value":2060,"unit":"calories"},"carbohydrates":240,"protein":115,"fat":71.11111111111111,"saturated_fat":13,"polyunsaturated_fat":0,"monounsaturated_fat":0,"trans_fat":0,"fiber":25,"sugar":45,"cholesterol":300,"sodium":2300,"potassium":3500,"vitamin_a":100,"vitamin_c":100,"calcium":100,"iron":100,"assign_exercise_energy":"nutrient_goal","meal_goals":[],"calories":2060},{"day_of_week":"thursday","energy":{"value":2060,"unit":"calories"},"carbohydrates":240,"protein":115,"fat":71.11111111111111,"saturated_fat":13,"polyunsaturated_fat":0,"monounsaturated_fat":0,"trans_fat":0,"fiber":25,"sugar":45,"cholesterol":300,"sodium":2300,"potassium":3500,"vitamin_a":100,"vitamin_c":100,"calcium":100,"iron":100,"assign_exercise_energy":"nutrient_goal","meal_goals":[],"calories":2060},{"day_of_week":"friday","energy":{"value":2060,"unit":"calories"},"carbohydrates":240,"protein":115,"fat":71.11111111111111,"saturated_fat":13,"polyunsaturated_fat":0,"monounsaturated_fat":0,"trans_fat":0,"fiber":25,"sugar":45,"cholesterol":300,"sodium":2300,"potassium":3500,"vitamin_a":100,"vitamin_c":100,"calcium":100,"iron":100,"assign_exercise_energy":"nutrient_goal","meal_goals":[],"calories":2060},{"day_of_week":"saturday","energy":{"value":2060,"unit":"calories"},"carbohydrates":240,"protein":115,"fat":71.11111111111111,"saturated_fat":13,"polyunsaturated_fat":0,"monounsaturated_fat":0,"trans_fat":0,"fiber":25,"sugar":45,"cholesterol":300,"sodium":2300,"potassium":3500,"vitamin_a":100,"vitamin_c":100,"calcium":100,"iron":100,"assign_exercise_energy":"nutrient_goal","meal_goals":[],"calories":2060},{"day_of_week":"sunday","energy":{"value":2060,"unit":"calories"},"carbohydrates":240,"protein":115,"fat":71.11111111111111,"saturated_fat":13,"polyunsaturated_fat":0,"monounsaturated_fat":0,"trans_fat":0,"fiber":25,"sugar":45,"cholesterol":300,"sodium":2300,"potassium":3500,"vitamin_a":100,"vitamin_c":100,"calcium":100,"iron":100,"assign_exercise_energy":"nutrient_goal","meal_goals":[],"calories":2060}],"default_goal":{"energy":{"value":2060,"unit":"calories"},"carbohydrates":240,"protein":115,"fat":71.11111111111111,"saturated_fat":13,"polyunsaturated_fat":0,"monounsaturated_fat":0,"trans_fat":0,"fiber":25,"sugar":45,"cholesterol":300,"sodium":2300,"potassium":3500,"vitamin_a":100,"vitamin_c":100,"calcium":100,"iron":100,"assign_exercise_energy":"nutrient_goal","meal_goals":[]}}};
fetch('https://api.myfitnesspal.com/v2/nutrient-goals', {
    method: 'post',
    body: JSON.stringify(v),
    headers: {
        'mfp-client-id': MFP_CLIENT_ID,
        'mfp-user-id': MFP_USER_ID,
        authorization: `Bearer ${BEARER_TOKEN}` 
    }
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log('What:', data);
  }).catch(err => {
      console.log(err);
  })