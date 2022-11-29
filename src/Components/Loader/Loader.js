import React from 'react';
import "./Loader.css";

const Loader = () => {
    return (
        <div className="h-[80vh] grid place-items-center">
            <div className="tvdd overflow-hidden relative w-[16em] h-[16em]" role="img" aria-label="Three intersecting rings of twelve pulsing dots that never collide">
                <div className="tvdd__ring">
                    <div className="tvdd__ring-dots">
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                    </div>
                </div>
                <div className="tvdd__ring">
                    <div className="tvdd__ring-dots">
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                    </div>
                </div>
                <div className="tvdd__ring">
                    <div className="tvdd__ring-dots">
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                        <div className="tvdd__ring-dot"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;