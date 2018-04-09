import * as React from 'react';

export interface Props {
    data?: string | null;
}

function Viewer({ data }: Props) {
    if (data == null) {
        return <div>Nothing to display.</div>;
    }
    return (
        <pre>
            {JSON.stringify(data, null, 2)}
        </pre>
    );
}

export default Viewer;
