
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const generateMilitantContent = async (section: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Génère un contenu percutant pour la section "${section}" du site "Festival des Sans Papiers – L'Allumette du Renouveau". 
      Le ton doit être urgent, galvanisant, unificateur et pragmatique.
      Le public cible : militants épuisés, citoyens solidaires, donateurs.
      Langue : Français.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            subtitle: { type: Type.STRING },
            content: { type: Type.STRING },
          },
          required: ["title", "content"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error generating content:", error);
    return null;
  }
};
