import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export const Timer = ({duration, isPlaying, key, handleCancel}) => {
    return (
        <>
            <CountdownCircleTimer
                isPlaying={isPlaying}
                duration={duration}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[60, 30, 10, 0]}
                onComplete={() => {
                    handleCancel()
                    return { shouldRepeat: true, delay: 60} // repeat animation in 1.5 seconds
                }}
                key={key}
            >
                {({ remainingTime }) => <h2>{remainingTime}</h2>}
            </CountdownCircleTimer>
        </>
    )
}