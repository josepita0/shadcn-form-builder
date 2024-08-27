interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const FormPageWrapper = ({ children, className }: IProps) => {
  return (
    <div className="relative w-full">
      <div className="flex justify-center w-full">
        <div className={`space-y-5 ${className}`}>{children}</div>
      </div>
    </div>
  );
};
