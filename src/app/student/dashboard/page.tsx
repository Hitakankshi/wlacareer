import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Briefcase, UserCircle } from 'lucide-react';
import Link from 'next/link';

export default function StudentDashboardPage() {
  return (
    <div className="container mx-auto max-w-7xl py-16 md:py-24">
      <div className="space-y-4 mb-12">
        <h1 className="font-headline text-4xl font-bold text-primary">Student Dashboard</h1>
        <p className="text-foreground/80 max-w-2xl">
          Welcome back! Here's an overview of your learning and career journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="border-primary/20 bg-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-1.5">
              <CardTitle className="font-headline text-xl text-primary">My Courses</CardTitle>
              <CardDescription>Your enrolled courses</CardDescription>
            </div>
            <BookOpen className="h-8 w-8 text-primary/50" />
          </CardHeader>
          <CardContent>
            <p>You are currently enrolled in 3 courses.</p>
            <Button asChild variant="link" className="p-0 mt-2">
                <Link href="/courses">View Courses &rarr;</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-1.5">
                <CardTitle className="font-headline text-xl text-primary">My Applications</CardTitle>
                <CardDescription>Track your job applications</CardDescription>
            </div>
            <Briefcase className="h-8 w-8 text-primary/50" />
          </CardHeader>
          <CardContent>
            <p>You have 2 pending applications.</p>
            <Button asChild variant="link" className="p-0 mt-2">
                <Link href="#">View Applications &rarr;</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-1.5">
                <CardTitle className="font-headline text-xl text-primary">My Profile</CardTitle>
                <CardDescription>Manage your profile</CardDescription>
            </div>
            <UserCircle className="h-8 w-8 text-primary/50" />
          </CardHeader>
          <CardContent>
            <p>Your profile is 80% complete.</p>
            <Button asChild variant="link" className="p-0 mt-2">
                <Link href="#">Edit Profile &rarr;</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
