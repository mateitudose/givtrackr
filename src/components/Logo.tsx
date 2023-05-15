export const Logo = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="32"
            height="32"
            viewBox="0 0 199 199"
        >
            <defs>
                <path
                    id="path_1"
                    d="M0 99.5C0 44.548 44.548 0 99.5 0S199 44.548 199 99.5 154.452 199 99.5 199 0 154.452 0 99.5z"
                ></path>
                <clipPath id="clip_1">
                    <use xlinkHref="#path_1"></use>
                </clipPath>
                <image
                    id="img_1"
                    width="200"
                    height="200"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAEadJREFUeJztnetxIzcSxxtX9928CDyOwHIES0ew6wjEi0C6CEhHIF0E5EWwcgSkIhAVAWcj4CiC/31o0JzVUoPGi5hH/6pYq9ohgQYGjW68GkSKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoiiKoihKLKa0AFMGwCciquznhohm9tHp/9rU9kNE1BDR/vR/xpjnjGJOGlWQKwFgRkSfiGhuPzeJs9gT0c5+no0xTeL0FSUtAGYAbgFscX22Nu+ZW1JFuSIA5gDWBZTiI9YA5qXrRZk44B77pagqdPMC4LZ0PSkTA6wYh6JN348DVFGU3AC4QZnxRSq2AFJPFihTBzz4fijbtpPyAB3MKykAD8CPmRvsBq2eHWypNpnzPEIH8koMAJaZG+keHS4PWFH2mWVYXrNOlREAdqlyz07tIXBzrCy5lWQrkUVRTr12qEu1Ef5WpBwtmaRKckS4a3aEDuCVLhCuHBsAFYCF4LsNgCpAtsr+1sXCfjdEUVRJlMvYhuWrHE9oNXbI1ka+RMj4RZD+ofX9ysrowxHAIq42lVEhbHhtGrxr6JBZj6cEskoa/OJC+STWp02wIisjAv5u1RMujB/gth5BrtWFfCSu1uHC72bwsybqbk0d+CvH4oN0JBZolVDulSC/ixYAwL1HeVVJpgq4R5UqR9PVUODumRsknEa1srusyKbj93PB708cU8quDATI91S5lGMmSGOVQX6JFfmwYYOtp1RJtqnlV3qMsHEBvPZQOdKSuCydaQSWoRLke+9Iw2elfpW6DEoPAbsXEkRuEdwr7tEzVx15u1y7F0EaEnftxDxXWZQeYBvDQdAQOt2qd+m5yDZdCtnkgETJpe7WQZKeMlAAPAoagbhRw732kT2QgqBhL4TpSNeCHjMXSSkBuJeUsPBI0+XibPKV6G8ZXFtKxC4eZIudwIinficb9gfsj4/2xV6ZnTHm99JC5OAfpQUogbUKqhzpmGOkA/ZJWhDw1ouqtBwjY5RWZHIWBDzgrkrLMUJGaUUmpyBEdFdagBEzuuO6k3Kx7GyLc7FMieI3Y8y+tBCpmJoF6dxqoSRhVHU8GQsCXvE90PmKASUPjTHmX6WFUDwRLnoFTf0C2DnSvXqvCvcGzF1gupIF1kXa0pRjSi6Wa7vIa4Tv/JPjeQmffJcjUVtHr46v6fHcoZGz1xOkXaUriVgm5/b3iLRd1viYsixKZiDb0h40NsnZEGPJWGbJruV54uIUYSoulsvkx1xZVrnSDkw3Ba68g8Zctq5cac9D0u4bU1EQV0OIOcRUOZ6XvCvQlXcVkbarzuYRafeGqSjIJ8fzXUTaleN5yUUzV95VRNo7x3NXnQ+C0SsI3FO3b2Na+b0Wts7eur6DApMTqRm9glD+Ht6lgHVk+jG4XKzYLf+uuhv8kYIpKIjrJe0i03fNBNWR6cfgasCxuwp2jueqIAPA9ZJKDqKHTm4LVZwpKIirl4x1sX52PK8j04/B1YBdsrvIbaGK88/SAvSAbea1vEPBtUIXVcmFzCEwBQuiKMGMfru79pBlMcYMuo2pBVGUDlRBFKUDVRBF6WAKClJyN+3UGXzdT0FBFCUYVRCi300ERPTNkf4vMelHyvabQ7ZvkemPLpLie6agILm3Q9SO51Vk+jHk3ic2+m08U1CQ0W+HKEjubTzFUQWJP/mW89ReLLl7+LnjuSrIAKgdz3+NTD/nqb1YcvfwrrqrI9MvzugVxLhPC84Epw6Vd9g661RAQd33ntEriMUV6GwekXbteF5S+XKedpw7nrvqfBBMRUF2jucxkQBrx/OSkwA5Z7HmjufZrrtWEgMNHJe6zJMJHDcZBC90kTHtKl1JxDKVDD06miMGU3GxiIj+cjyPuXnK5W9XEWmH4sozZp/UreO5q64Hw5QUxOUT3yB8NquPwQuy5Gmt4dzxtdGMPwZ92ssHsL9dk/uqAiWONyKqTHis414xGQtiX9hoerYe8zQW5SCakIJYHksLMAE2pQVIyaQUxK7sDv4QT495NsbsSguRkkkpiEWtSD42pQVIzWQG6W0A1BQfVVD5nm/GmKq0EKmZogUhIlqVFmCErEoLkINJWhAiIgB7it/qrjDPxph5aSGUhEB23zfgsQUFwJMjrU2+Ev0tw8Yhg3iqG8C9sI7mGYuklALAo7ABiHb7ogfXIwM4OmRYCNORbPAErqD0SiHAu1JrQSM4QrANBbJdrjFb6135fxHk79zBC7auLkUDgEaSnjJgIO8pj8LGtXekk201H24Xz3nCD6zkB2GdzHOVRekRAFbCBvECx9Z1yPz2zjQCy+Dc3g7g3pHGjS2jBF1PmhIAdsKG0eluQeZmrTLIL1HyDy0g5G4VILBEysiwDbsRNpAjOtwLuF0dkbvmKburcW86fj8X/P5EgxFc76wEAO5FpUoCABcPWUE2WF4llFtiPS5ODgC48yhvA40AM23gryRfccEawD07dkSCnhg89nD1/vWF382s7D5km4FTBgRkFuB9Y//yLg3nuW0AXxPIKmnkiwvlk7pUF9NQJo5t4D6WBLaxVq00JGsswb0yZIpct75fAdh6lglQ5VAuAX9368TaNkaJFQlytSBzrWBlqKxMvuiYQ+kG4UoC2ygljfgFHrNa4PGDZL3iiDDFAFQ5FCm2QUrXSUIRKQnkyhHDTiKLonwH5CvuobygexHSZ6U7FF0hV8IBL6qFulxS1gA+tfL8hHBXSUoDncZVUgB2c6Rb5YfAI9SlUlIDdnlyj01ysofuyFVyA55Klax59IUaurahXBuworjOg5REFcOTwQVtAA9eK/s5XQM2o+5gzQ2d7+Or7achor0xJnkgObDbsiC+mKd0LOA34pCrG9+gbuBxya/Ewao/quO9/TwbY+oYQZUAAHwG8IC805sH8CzRLdJvQ1/Avf09Bzubt1d5wOOq0PreQsc0+QErxVf4b6hLxRaA6w4M3zLNwHunHpHHDdvbtL2naq1sd0jXCa1T1l1JeuNigfcj3RG7Jn2ZcmyIw2n+N4f7AO5tT65L+9bYin6M/PhK53tITi7jnoia0Hi4YOtyR0T3lL7O90T0+5givRcB7NZsE/VcOVljRGsF4HrPbaE3HfnfgK3WGpff/wHsRdyOqd5FgHeXPlzhBaXmCGBZuv5iADfM7RXrrHqX9wPkUVPaLDF2RcF5bDF0OvdM9RHwOOOhQF3dg61AivGNKD5ZSrKPQcBaf0vs51a587siDRH9xxizKS2IC/DA/YHGUf8NEf1xrXtIsikI8g26v9F5gLonO3DtqjCrpKee5zQYntu/Y9cpNsaYf0emkQX7DtbkvnTTxSsR7YjXj9ohf2bEaz1JZ/wENET02zXWXZIrCHhm5o644lLxF/Fi1y51peB8a+ucwhf2eqck4LFSzOzUX8TlckaCBA/Gr60kT8aYPz56CF5QntN5UfnEqVO97m1YCf3MEzXYf73awAznhb2QdYpezP2Dt+OHvocGfObFd3GxyM7mdzLMwG3QZ4x7QM7BP84LTIeE5d6gB6ux4IbmqyjFlATxg3BvxbD5LiPyjMLmP0f8WZkfotKkeBlLpJumrRH4gnID/+gmV1cShIXxObFDWNCI2NONDXgLzgIXOkRbJlcHlXr7Udy7Q3h0jI94wgBOsdly+1iTqygJwsP4ANxAF4H5LgPzBDzeOfzjk6XA/90hjRk70YB91spbkMLAfXtTXEX7yXKHcKsRdIIQcQq5gec7hyxifQ5k5/LBirFNlGmNgN2lfQOFlQRxrk3wCUKEK2SQC9cqayk+XpBE2v1ROwzAjfIBfkpyMXZvQJ4xg/AGgcGyERbD95RnTNTI0HxT8eP0NlgxDoky2GBg2zF8gJ+SHMGNuwrM60vEe4npwUMH/8F5Rubbpga7kguwJ3T6+EzjVyeB5kijGKd59ODKGRIIC9jwAuEOVcT1osE9eES+DRy3WGUsL3CeDa0EeUnWbu5P05ix9HaaNifgFxpz+Okr2LevLqR99UG4zTe0s9wjwmOA3yU+79khYEYO7g7uiSKEAjQIQAolOfECdsM+I3z8VyN8EB4zxllF1l9ovlFhi+CeJdtRoGCjG3jHgHRKEsMqQv7QmbEUVuMQkG/wGs4FGTrL56sgO/RgG0hfQZk9SbED4mVgvjFuXIzV2ITme0EOkQWRvFTvRZ6pAp6BqQNffghbcGNbgmP4fpK8K4RbjWA3zuYbYzWSei1wByPfudwDVYxA0M9oi1v7WSNs7BnceyPOajyF5tshj2SV/vH05Rtb+AYeU2WKG5SLi5WS2EW/3lgNK4/0jpXRruP1DnCPdY/yg3lfgntv9MxqtORaC/Kvc+StCMD5/sIn5L9rJIaYRb9eWY2WXGuhHItcMiie2Ma0Qv/GLEGbLdFPqzGDXDl2OWRQEgC2LieF2aG8hRErCcJnxnJbDV+5dOwxJOwLXqCc0jhdLYSvp2SzGlYu342Pi/bvexObV/ED51BG1bsP0eXYvrH8cimiDLi3XVP39ROXeCOihSRqSgi2ftbkF13nf8aYRQ55lJ6Ds+v2BWdL5MPmQppLzzRORK3+C8oaMkHwQ/mUiYNzmCPp5EBlfxcz1gieGROWJ2SCYJNLJmUkQHg+AuOyGoAqhyIFeVb8+2o1ku0IViYC0gdJ6KvVqKFTuUoIiRSjr1YDyDytrIycBMrRV6uRdTFSmQCIC9SmVmMq4MdryrawB5JKy5YTuA8QfYRajakAWXSNLVhhPmMkPRM4ikoIq4wyxViNrEo7WRAWUeQADuGzBCtNVbocUhAeRSUqYINArhirkczV071YLcDW4JgwyR2d7zQ//UtE9GaM2X/0oxzYsv1K39/LPqewG6j+NMaskgnXwsp5uh3Ll2fi/V11KnlUQd4BfH9zkfIdr8QNMItyg4NBrMn/stE3IloZY2RR2T34R+oER8BraQF6yp/GmJscygE71iCiLfkrxzMR3eRQDuUC4Bms0oeU+sQe/Z2hyjatrHQAXg/YpGtjg2WPvEdgdYZq6IDPTzxieNFIYsnmskCtxjgB93p9Oi+egw0yTd9igFZDZ7EisS+tPW1aUfrjrrl5JZ6Sfkw5RdoGPZyhkqAKkgnbC8+IlYaIFWjW+vunAmK9Eq/H1K3PkzGmyZUherauoSi9AeFXx+lYQxkviLtKTWeoQoFHeH+lDAi/gFOthi/gjXRrfGymD/b5bWlZpw7UalwHW9FL+PdCR6ssVekyTA2o1bgOiLvZtc1X6FVx2YFajesAXnwLCUTmYguNXpEFqNXID+JWVn1YQ3urJID3qanVyA3C9+PEsNYXFA7CXWC1GlJwPavRxRqqKGLAVmMbWNdqNaQg3mrUSLtJcImRBF3IBeKshkYUkYC42Y4GF27dRbpLMY9QRfkBxFkNjUMlBeGzHQArhrOiwZbJ976L96iiWBC2DgWo1ZCDAnPkSKcodxmqpPcg/N4PQK2GHMgvan9PktkOpFGUAya0hQXh936o1fAFYSEsn5B4tgPs3klvT/qIA0asKIhbpN1ArYY/8Ou9s/dA8Ltm7CMOGJGiIG66vYZu5QkH8pmlq/qtSKMo26E3DsRNtz9e852NErjvuyvqt4IVJXYtZYuBKQrYaqwDy6tWIxX2RXxkRXrRA1kZV5iIogC4Rfh0ey/e2aiwDXDTaoC7PjYkjFxR8ONdJz5kjeCuDIiEivIVPdh7hPPBs1BWpcug9BCkCzu6RiFFQXg0EYAtvVoNpZshKgri9k/plnTFn8SKkjOk5zJCtuSLtMrEACvKU7SacA//OaFcMef4a+g2ESUlSLPPC+AxwgMCrApYWZeIO1ujU7cCNDZvIOAp3RURpbgauiYOHr23n9d2vFyw+/MzcZzf0yeUZyK6v/YdicpEQTqLkhsdhCvlQL8VRXfdKv0A/VIU3T+l9BOUVZQGuhKuDAHwXqgU6yhixYC6U8rQwHmvV+x5lEvU4GnbqnQ5FSUasFVJEbJoA13oy4qugxQG7A7dtD6VfdS+x/DZ/tuQXS8xxuyuJqSiKIqiKIqiKIqiKIqiKIqiKIoyOv4P3jDUgaQjToAAAAAASUVORK5CYII="
                ></image>
            </defs>
            <g fillOpacity="1">
                <path
                    fill="none"
                    fillRule="evenodd"
                    stroke="none"
                    d="M0 0h199v199H0V0z"
                ></path>
                <g>
                    <use fill="#08F" fillRule="evenodd" xlinkHref="#path_1"></use>
                    <g clipPath="url(#clip_1)">
                        <use
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="2"
                            xlinkHref="#path_1"
                        ></use>
                    </g>
                </g>
                <use
                    fill="#FFF"
                    transform="matrix(.68 0 0 .68 31 31)"
                    xlinkHref="#img_1"
                ></use>
            </g>
        </svg>
    );
}
