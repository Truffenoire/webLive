import React from "react";

const reviews = [
    {
        id: 1,
        name: "V. De Oliveira",
        text:
            "PDG d’une entreprise de gros œuvre et de VRD, Anne-Sophie a travaillé de nombreuses années à mes côtés. Je tenais à souligner la qualité de son travail, sa disponibilité, son côté humain, son professionnalisme et son sérieux.",
        color: "#E2F0CB",
        familyh2: 'impact',
        familyP: 'roboto'
    },
    {
        id: 2,
        name: "D. Ziani",
        text:
            "Merci d’avoir entièrement restructuré ma société. Tu l’as modernisée en me proposant de nombreux outils de communications tels que logos, site web et référencement google. Tu m’as aidée à trier, classer, bref, m’organiser. Tu as contribué au développement d’ABNET avec beaucoup de patience.",
        color: "#E6D1DE",
        familyh2: 'impact',
        familyP: 'roboto'
    },
    {
        id: 3,
        name: "André A.",
        text:
            "Je recommande cette assistante de direction à toutes les personnes qui cherchent quelqu’un de sérieux et d’efficace.",
        color: "#B7D4D3",
        familyh2: 'impact',
        familyP: 'roboto'
    },
    {
        id: 4,
        name: "G. M.",
        text:
            "Efficace, rapide et disponible, souvent dans le but de rattraper un travail mal fait par d’autres, elle a su reprendre et organiser les démarches administratives pour repartir du bon pied !",
        color: "#F7CAC9",
        familyh2: 'impact',
        familyP: 'roboto'
    },
    {
        id: 5,
        name: "Celik Z.",
        text:
            "Nous avons fait appel à Anne-Sophie pour des besoins administratifs ponctuels, notamment lors du conges maternité de mon assistante de direction. C’est une personne dynamique qui réceptionne parfaitement l’information. Elle a su gagner notre pleine confiance.",
        color: "#D5C3C8",
        familyh2: 'impact',
        familyP: 'roboto'
    }
];

const Avis = () => {
    return (
        <div className="reviews">
            {reviews.map((review) => (
                <div
                    key={review.id}
                    className="review-card"
                    style={{
                        backgroundColor: review.color,
                    }}
                >
                    <h2
                        style={{
                            fontFamily: review.familyh2
                        }}
                    >
                        {review.name}</h2>
                    <p
                    style={{
                        fontFamily: review.familyP
                    }}
                    >{review.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Avis;
