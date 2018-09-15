console.clear();
var json = [{
    "foods": [
        {
            "food_name": "Fromage Nacho Cheese Flavored Tortilla Chips",
            "brand_name": "Doritos",
            "serving_qty": 1,
            "serving_unit": "package",
            "serving_weight_grams": 28,
            "nf_calories": 150,
            "nf_total_fat": 8,
            "nf_saturated_fat": 1,
            "nf_cholesterol": null,
            "nf_sodium": 210,
            "nf_total_carbohydrate": 18,
            "nf_dietary_fiber": 1,
            "nf_sugars": 1,
            "nf_protein": 2,
            "nf_potassium": null,
            "nf_p": null,
            "full_nutrients": [
                {
                    "attr_id": 203,
                    "value": 2
                },
                {
                    "attr_id": 204,
                    "value": 8
                },
                {
                    "attr_id": 205,
                    "value": 18
                },
                {
                    "attr_id": 208,
                    "value": 150
                },
                {
                    "attr_id": 269,
                    "value": 1
                },
                {
                    "attr_id": 291,
                    "value": 1
                },
                {
                    "attr_id": 301,
                    "value": 40
                },
                {
                    "attr_id": 303,
                    "value": 0.36
                },
                {
                    "attr_id": 307,
                    "value": 210
                },
                {
                    "attr_id": 606,
                    "value": 1
                }
            ],
            "nix_brand_name": "Doritos",
            "nix_brand_id": "51db37cb176fe9790a8998e9",
            "nix_item_name": "Fromage Nacho Cheese Flavored Tortilla Chips",
            "nix_item_id": "54734a6eb08d033c5fa6d4f4",
            "metadata": {},
            "source": 8,
            "ndb_no": null,
            "tags": null,
            "alt_measures": null,
            "photo": {
                "thumb": "https://d1r9wva3zcpswd.cloudfront.net/547350e0fbb1332854527391.jpeg",
                "highres": null,
                "is_user_uploaded": false
            },
            "updated_at": "2016-04-05T14:12:27+00:00",
            "nf_ingredient_statement": "Corn, Vegetable Oil (Sunflower, Canola and/Or Canola Oil), Maltodextrin (Made from Corn), Salt, Cheddar Cheese (Milk, Cheese Cultures, Salt, Enzymes), Whey, Monosodium Glutamate, Buttermilk, Romano Cheese (Part-Skim Cow's Milk, Cheese Cultures, Salt, Enzymes), Whey Protein Concentrate, Onion Powder, Corn Flour, Natural and Artificial Flavor, Dextrose, Tomato Powder, Lactose, Spices, Artificial Color (Including Yellow 6, Yellow 5 and Red 40), Lactic Acid, Citric Acid, Sugar, Garlic Powder, Skim Milk, Red and Green Bell Pepper Powder, Disodium Inosinate, and Disodium Guanylate. Contains Milk Ingredients."
        },
        {
            "food_name": "Sandwich Crackers, Peanut Butter",
            "brand_name": "Ritz",
            "serving_qty": 1,
            "serving_unit": "pack",
            "serving_weight_grams": 39,
            "nf_calories": 200,
            "nf_total_fat": 11,
            "nf_saturated_fat": 2,
            "nf_cholesterol": null,
            "nf_sodium": 310,
            "nf_total_carbohydrate": 22,
            "nf_dietary_fiber": 0.5,
            "nf_sugars": 5,
            "nf_protein": 4,
            "nf_potassium": 85,
            "nf_p": null,
            "full_nutrients": [
                {
                    "attr_id": 203,
                    "value": 4
                },
                {
                    "attr_id": 204,
                    "value": 11
                },
                {
                    "attr_id": 205,
                    "value": 22
                },
                {
                    "attr_id": 208,
                    "value": 200
                },
                {
                    "attr_id": 269,
                    "value": 5
                },
                {
                    "attr_id": 291,
                    "value": 0.5
                },
                {
                    "attr_id": 301,
                    "value": 40
                },
                {
                    "attr_id": 303,
                    "value": 1.08
                },
                {
                    "attr_id": 306,
                    "value": 85
                },
                {
                    "attr_id": 307,
                    "value": 310
                },
                {
                    "attr_id": 606,
                    "value": 2
                }
            ],
            "nix_brand_name": "Ritz",
            "nix_brand_id": "51db37ba176fe9790a898d4d",
            "nix_item_name": "Sandwich Crackers, Peanut Butter",
            "nix_item_id": "51c3f0f497c3e6de73cbca08",
            "metadata": {},
            "source": 8,
            "ndb_no": null,
            "tags": null,
            "alt_measures": null,
            "photo": {
                "thumb": "https://d1r9wva3zcpswd.cloudfront.net/58c8ea462b28e394413764b2.jpeg",
                "highres": null,
                "is_user_uploaded": false
            },
            "updated_at": "2017-03-15T07:08:08+00:00",
            "nf_ingredient_statement": "Enriched Flour (Wheat Flour, Niacin, Reduced Iron, Thiamine Mononitrate, {Vitamin B1}, Riboflavin {Vitamin B2}, Folic Acid), Peanuts Canola Oil and/or Palm Oil and/or Soybean Oil, Sugar, Dextrose, Salt, High Fructose Corn Syrup, Leavening (Baking Soda and Calcium Phosphate), Soy Lecithin (Emulsifier), Cornstarch."
        }
    ]
}];
var t_calories = 0;

for (var i = 0; i <  json[0].foods.length; i++) {
var obj = json[0].foods[i];

t_calories += obj.nf_calories;
    /*
    t_calories += obj.foods[i].nf_calories;
    console.log("json " + json.length);
    console.log(obj.foods[i].nf_calories );
    console.log(obj.foods[i].nf_sodium);
    console.log("total c" + t_calories) */
    console.log(t_calories);


}; 

console.log(t_calories);
