import { ApplicationForm } from './application-form';

export default function ApplyPage() {
  return (
    <div className="container mx-auto max-w-4xl py-16 md:py-24">
      <div className="space-y-4 text-center">
        <h1 className="font-headline text-4xl font-bold text-primary">Apply Now</h1>
        <p className="text-foreground/80">
          Complete the form below to submit your application.
        </p>
      </div>
      <ApplicationForm />
    </div>
  );
}
