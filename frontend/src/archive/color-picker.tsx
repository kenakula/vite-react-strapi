import { ChangeEvent, ReactElement, useMemo, useState } from 'react';

import styles from './home-page.module.css';

type StringOrNumber = string | number;

interface IScheme {
  primary: string;
  secondary: string;
  accent: string;
}

export const ColorPicker = (): ReactElement => {
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [light, setLight] = useState<StringOrNumber>(0.5);
  const [chroma, setChroma] = useState<StringOrNumber>(0.3);
  const [hue, setHue] = useState<StringOrNumber>(120);
  const [alpha, setAlpha] = useState<StringOrNumber>(1);

  const scheme: IScheme = useMemo(
    () => {
      const primary = `oklch(${light} ${chroma} ${hue} / ${alpha})`;
      const secondary = `oklch(${Number(light) + 0.3} ${Number(chroma) - 0.2} ${hue} / ${alpha})`;
      const accent = `oklch(${Number(light) + 0.2} ${Number(chroma) + 0.1} ${hue} / ${alpha})`;

      setSelectedColor(primary);

      return { primary, secondary, accent };
    },
    [light, chroma, hue, alpha]
  );

  const handleLightChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setLight(value);
  };

  const handleChromaChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setChroma(value);
  };

  const handleHueChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setHue(value);
  };

  const handleAlphaChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setAlpha(value);
  };

  return (
    <div>
      <style>
        {`
          .box {
            width: 200px;
            height: 100px;
            border-radius: var(--radius-sm);
          }
          
          .range {
            display: flex;
            gap: 40px;
            width: 100%;
          
            input {
              width: 100%;
            }
          }
        `}
      </style>
      <h2>color picker</h2>
      <input type="text" value={selectedColor} disabled />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '20px' }}>
        <div className={styles.range}>
          <label htmlFor="Light">Light</label>
          <input id="Light" type="range" min="0" max="1" step="0.01" value={light} onChange={handleLightChange}/>
        </div>
        <div className={styles.range}>
          <label htmlFor="Chroma">Chroma</label>
          <input id="Chroma" type="range" min="0" max="0.7" step="0.01" value={chroma} onChange={handleChromaChange}/>
        </div>
        <div className={styles.range}>
          <label htmlFor="Hue">Hue</label>
          <input id="Hue" type="range" min="0" max="360" step="1" value={hue} onChange={handleHueChange}/>
        </div>
        <div className={styles.range}>
          <label htmlFor="Alpha">Alpha</label>
          <input id="Alpha" type="range" min="0" max="1" step="0.01" value={alpha} onChange={handleAlphaChange}/>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <div>
            <h3>primary</h3>
            <div className={styles.box} style={{ background: scheme.primary }}/>
          </div>

          <div>
            <h3>secondary</h3>
            <div className={styles.box} style={{ background: scheme.secondary }}/>
          </div>

          <div>
            <h3>accent</h3>
            <div className={styles.box} style={{ background: scheme.accent }}/>
          </div>
        </div>
      </div>
    </div>
  );
};
