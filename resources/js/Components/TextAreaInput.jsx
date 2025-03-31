import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'; // Add forwardRef import here

export default forwardRef(function TextAreaInput(
    { className = '', isFocused = false, children, ...props },
    ref
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <textarea
            {...props} // Spread the rest of the props (like value, name, etc.)
            className={
                'rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 ' +
                className
            }
            ref={localRef}
        >
            {children}
        </textarea>
    );
});
