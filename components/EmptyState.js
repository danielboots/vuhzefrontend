import DashboardShell from "./DashboardShell";

const EmptyState = () => {
  return (
    <DashboardShell>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        {/* Replace with your content */}
        <div className="px-4 py-8 sm:px-0">
          {" "}
          Empty state for testing purposes
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
        </div>
        {/* /End replace */}
      </div>
    </DashboardShell>
  );
};

export default EmptyState;
