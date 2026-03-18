"use client"

import { QuizInterface } from "./QuizInterface"

const sampleQuestions = [
    {
        id: "q1",
        text: "A 45-year-old man presents to the emergency department with sudden onset of severe, tearing chest pain that radiates to his back. His blood pressure is 180/110 mmHg in the right arm and 120/80 mmHg in the left arm. A chest X-ray shows a widened mediastinum. Which of the following is the most likely diagnosis?",
        options: [
            { id: "o1", text: "Acute myocardial infarction" },
            { id: "o2", text: "Aortic dissection", isCorrect: true },
            { id: "o3", text: "Pulmonary embolism" },
            { id: "o4", text: "Esophageal rupture" }
        ],
        explanation: "The patient's presentation of sudden, severe, tearing chest pain radiating to the back, along with asymmetric blood pressures and a widened mediastinum on chest X-ray, is classic for an aortic dissection. Acute myocardial infarction typically presents with crushing chest pain radiating to the jaw or left arm. Pulmonary embolism presents with pleuritic chest pain and shortness of breath. Esophageal rupture (Boerhaave syndrome) presents with severe lower chest pain and subcutaneous emphysema after forceful vomiting."
    },
    {
        id: "q2",
        text: "Which of the following medications is considered first-line therapy for a patient with newly diagnosed type 2 diabetes mellitus, assuming no contraindications?",
        options: [
            { id: "o1", text: "Glipizide" },
            { id: "o2", text: "Sitagliptin" },
            { id: "o3", text: "Metformin", isCorrect: true },
            { id: "o4", text: "Insulin glargine" }
        ],
        explanation: "Metformin is the preferred initial pharmacologic agent for the treatment of type 2 diabetes mellitus. It is effective, safe, inexpensive, and may reduce risk of cardiovascular events. Glipizide (a sulfonylurea) and Sitagliptin (a DPP-4 inhibitor) are generally used as add-on therapies. Insulin is typically reserved for patients with severe hyperglycemia or those who do not achieve glycemic goals with oral agents."
    }
]

export function QuizDemo() {
    return (
        <div className="w-full">
            <QuizInterface questions={sampleQuestions} />
        </div>
    )
}
