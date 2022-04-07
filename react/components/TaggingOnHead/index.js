import React from 'react'
import { Helmet, useRuntime } from 'vtex.render-runtime'

export default function TaggingOnHead({
    tagsOnHeadProd,
    tagsAfterBodyProd,
    tagsOnHeadDev,
    tagsAfterBodyDev,
}) {
    const runtime = useRuntime()

    return (
        <>
            {!runtime?.production ? (
                <>
                    <Helmet>
                        <script
                            type="text/javascript"
                            src={tagsOnHeadProd}
                        ></script>
                    </Helmet>
                    <script
                        type="text/javascript"
                        src={tagsAfterBodyProd}
                    ></script>
                </>
            ) : (
                <>
                    <Helmet>
                        <script
                            type="text/javascript"
                            src={tagsOnHeadDev}
                        ></script>
                    </Helmet>
                    <script
                        type="text/javascript"
                        src={tagsAfterBodyDev}
                    ></script>
                </>
            )}
        </>
    )
}
