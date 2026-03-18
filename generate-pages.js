const fs = require('fs');
const path = require('path');

const routes = [
    { path: '/dashboard/courses', title: 'My Courses' },
    { path: '/dashboard/qbanks/previous', title: 'Previous Tests' },
    { path: '/dashboard/qbanks/generate', title: 'Generate Quiz' },
    { path: '/dashboard/qbanks/search', title: 'Search Questions' },
    { path: '/dashboard/assessments', title: 'Self Assessments' },
    { path: '/dashboard/assessments/report', title: 'Assessment Report' },
    { path: '/dashboard/assessments/predictor', title: 'Score Predictor' },
    { path: '/dashboard/performance/overall', title: 'Overall Performance' },
    { path: '/dashboard/performance/ranking', title: 'Peer Ranking' },
    { path: '/dashboard/performance/ai-analysis', title: 'AI Test Analysis' },
    { path: '/dashboard/performance/calculator', title: 'Score Calculator' },
    { path: '/dashboard/performance/graphs', title: 'Performance Graphs' },
    { path: '/dashboard/notes', title: 'My Notes' },
    { path: '/dashboard/notebook', title: 'My Notebook' },
    { path: '/dashboard/library', title: 'Medical Library' },
    { path: '/dashboard/planner', title: 'Study Planner' },
    { path: '/dashboard/flashcards/my-decks', title: 'My Flashcard Decks' },
    { path: '/dashboard/flashcards/ready-decks', title: 'Ready Decks' },
    { path: '/dashboard/flashcards/ai-decks', title: 'AI Generated Decks' },
    { path: '/dashboard/account/renewal', title: 'Account Renewal' },
    { path: '/dashboard/account/reset', title: 'Reset Account' },
    { path: '/dashboard/referral', title: 'Referral Program' },
];

routes.forEach(route => {
    const dir = path.join(process.cwd(), 'src/app', route.path);
    fs.mkdirSync(dir, { recursive: true });

    const content = `import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function Page() {
    const session = await auth()

    if (!session) {
        redirect("/login")
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="rounded-xl border bg-white p-6 shadow-sm">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">${route.title}</h1>
                <p className="text-gray-600">
                    This page is currently under construction. Check back later for updates!
                </p>
            </div>
        </div>
    )
}
`;

    fs.writeFileSync(path.join(dir, 'page.tsx'), content);
});
console.log('Pages generated successfully!');