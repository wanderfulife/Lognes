export const questions = [
  {
    id: "Q1",
    text: "Avec quel moyen de déplacement êtes-vous venu en gare ce matin ?",
    options: [
      { id: 1, text: "À pied", next: "Q3" },
      { id: 2, text: "En bus/car", next: "Q3" },
      { id: 3, text: "Au volant d'une voiture", next: "Q2" },
      { id: 4, text: "Vous vous êtes fait déposer en voiture", next: "Q3" },
      { id: 5, text: "En vélo", next: "Q3" },
      { id: 6, text: "En moto/scooter", next: "Q3" },
      { id: 7, text: "En trottinette", next: "Q3" },
      { id: 8, text: "En taxi", next: "Q3" },
      { id: 9, text: "Autre", next: "Q1_autre" }
    ]
  },
  {
    id: "Q1_autre",
    text: "Précisez",
    freeText: true,
    next: "Q3"
  },
  {
    id: "Q2",
    text: "Où est garée votre voiture ?",
    options: [
      { id: 1, text: "Dans le parking à côté de la gare", next: "Q3" },
      { id: 2, text: "Dans une rue proche de la gare, au nord des voies, côté étang (cours des Lacs, boulevard de la Malvoisine...)", next: "Q3" },
      { id: 3, text: "Sur le parking du gymnase de la Maillière (derrière la boulangerie)", next: "Q3" },
      { id: 4, text: "Dans une rue proche de la gare, au sud des voies (rue Jehan Scarron, rue Nicolas Appert, rue du Suffrage Universel...)", next: "Q3" },
      { id: 5, text: "Sur le parking en face de Tang Frères (place des Libertés Publiques)", next: "Q3" },
      { id: 6, text: "Autre", next: "Q2_autre" }
    ]
  },
  {
    id: "Q2_autre",
    text: "Précisez",
    freeText: true,
    next: "Q3"
  },
  {
    id: "Q3",
    text: "De quelle commune êtes-vous parti ce matin ?",
    options: [
      { id: 1, text: "Lognes", next: "Q4" },
      { id: 2, text: "Champs-sur-Marne", next: "Q4" },
      { id: 3, text: "Chelles", next: "Q4" },
      { id: 4, text: "Collégien", next: "Q4" },
      { id: 5, text: "Croissy-Beaubourg", next: "Q4" },
      { id: 6, text: "Émerainville", next: "Q4" },
      { id: 7, text: "Lésigny", next: "Q4" },
      { id: 8, text: "Noisiel", next: "Q4" },
      { id: 9, text: "Pontault-Combault", next: "Q4" },
      { id: 10, text: "Roissy-en-Brie", next: "Q4" },
      { id: 11, text: "Serris", next: "Q4" },
      { id: 12, text: "Torcy", next: "Q4" },
      { id: 13, text: "Vaires-sur-Marne", next: "Q4" },
      { id: 14, text: "Autre", next: "Q3_autre" }
    ]
  },
  {
    id: "Q3_autre",
    text: "Précisez la commune",
    usesCommuneSelector: true,
    next: "Q4"
  },
  {
    id: "Q4",
    text: "Combien de temps vous faut-il pour venir en gare depuis votre domicile ?",
    freeText: true,
    next: "Q5"
  },
  {
    id: "Q5",
    text: "Dans quelle direction prenez-vous le RER ?",
    options: [
      { id: 1, text: "Paris", next: "Q6" },
      { id: 2, text: "Marne-la-Vallée", next: "Q6" }
    ]
  },
  {
    id: "Q6",
    text: "Pour quel motif prenez-vous le RER ce matin ?",
    options: [
      { id: 1, text: "Lieu de travail", next: "Q7" },
      { id: 2, text: "Lieu d'études", next: "Q7" },
      { id: 3, text: "Course, démarche administrative, loisir...", next: "Q7" },
      { id: 4, text: "Autre", next: "Q6_autre" }
    ]
  },
  {
    id: "Q6_autre",
    text: "Précisez",
    freeText: true,
    next: "Q7"
  },
  {
    id: "Q7",
    text: "À quelle fréquence venez-vous en gare de Lognes ?",
    options: [
      { id: 1, text: "Tous les jours ou presque", next: "Q8" },
      { id: 2, text: "2 ou 3 fois par semaine", next: "Q8" },
      { id: 3, text: "2 ou 3 fois par mois", next: "Q8" },
      { id: 4, text: "Moins souvent", next: "Q8" }
    ]
  },
  {
    id: "Q8",
    text: "Autres observations ou commentaires",
    freeText: true,
    next: "end"
  }
];