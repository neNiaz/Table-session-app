import { cn } from '../../../../../../../../shared/hooks';

export function DesktopTableLoading() {
  return (
    <div
      className={cn(
        'absolute h-[calc(100%-48px)] w-[calc(100%-8px)] left-1 top-6 flex',
      )}
    >
      <span>loading...</span>
    </div>
  );
}
