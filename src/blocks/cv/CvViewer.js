import React from 'react';

const CvViewer = ({file = '/assets/pdf/DoohoChoi_CV.pdf'}) => {
    const src = process.env.PUBLIC_URL + file;
    return (
        <section id="page-content" className="spacer p-bottom-lg">
            <div id="blog">
                <div className="cv-viewer wrapper">
                    <div className="cv-viewer-head">
                        <h4>Curriculum Vitae</h4>
                        <a className="btn has-white-color has-gray-dark-background-color cv-download"
                           href={src} target="_blank" rel="noreferrer" download>
                            Download PDF
                        </a>
                    </div>
                    <object className="cv-viewer-frame" data={src + '#view=FitH'} type="application/pdf"
                            aria-label="Dooho Choi CV PDF">
                        <p>
                            브라우저에서 PDF 미리보기를 지원하지 않습니다.&nbsp;
                            <a href={src} target="_blank" rel="noreferrer">여기서 CV를 내려받아 주세요.</a>
                        </p>
                    </object>
                </div>
            </div>
        </section>
    );
};

export default CvViewer;
