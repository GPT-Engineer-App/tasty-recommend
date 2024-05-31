import { useState } from "react";
import { Container, VStack, Text, Input, Button, Checkbox, CheckboxGroup, Stack, IconButton, Image } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
  const [flavorPreferences, setFlavorPreferences] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = () => {
    // Mock API call to get recipes based on user input
    const mockRecipes = [
      {
        title: "Vegan Spicy Tacos",
        image: "https://images.unsplash.com/photo-1588556008426-af415581d44b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2ZWdhbiUyMHRhY29zfGVufDB8fHx8MTcxNzExODY0NHww&ixlib=rb-4.0.3&q=80&w=1080",
        description: "Delicious vegan tacos with a spicy kick.",
      },
      {
        title: "Gluten-Free Sweet Pancakes",
        image: "https://images.unsplash.com/photo-1504387432042-8aca549e4729?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnbHV0ZW4tZnJlZSUyMHBhbmNha2VzfGVufDB8fHx8MTcxNzExODY0NHww&ixlib=rb-4.0.3&q=80&w=1080",
        description: "Fluffy gluten-free pancakes with a sweet touch.",
      },
    ];
    setRecipes(mockRecipes);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          AI Recipe Recommendations
        </Text>
        <Text>Personalize your recipe suggestions based on your dietary needs, flavor preferences, and available ingredients.</Text>

        <CheckboxGroup colorScheme="green" onChange={setDietaryRestrictions}>
          <Stack spacing={2} direction="row">
            <Checkbox value="vegan">Vegan</Checkbox>
            <Checkbox value="gluten-free">Gluten-Free</Checkbox>
            <Checkbox value="vegetarian">Vegetarian</Checkbox>
            <Checkbox value="keto">Keto</Checkbox>
          </Stack>
        </CheckboxGroup>

        <Input placeholder="Flavor Preferences (e.g., spicy, sweet)" value={flavorPreferences} onChange={(e) => setFlavorPreferences(e.target.value)} />
        <Input placeholder="Ingredients you have (e.g., tomatoes, chicken)" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />

        <IconButton aria-label="Search Recipes" icon={<FaSearch />} size="lg" onClick={handleSearch} />

        {recipes.length > 0 && (
          <VStack spacing={4} width="100%" mt={8}>
            {recipes.map((recipe, index) => (
              <VStack key={index} spacing={2} align="start" width="100%" borderWidth="1px" borderRadius="lg" p={4}>
                <Image src={recipe.image} alt={recipe.title} borderRadius="md" />
                <Text fontSize="xl" fontWeight="bold">
                  {recipe.title}
                </Text>
                <Text>{recipe.description}</Text>
              </VStack>
            ))}
          </VStack>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
