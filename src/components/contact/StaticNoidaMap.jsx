const verticals = [180, 330, 480, 630, 780, 930, 1080];
const horizontals = [190, 330, 470, 610];
const minorVerticals = [255, 405, 555, 705, 855, 1005];
const minorHorizontals = [260, 400, 540];

function StaticNoidaMap() {
  return (
    <svg
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label="Map showing Omnivixo Pvt. Ltd. location near Noida Electronic City Metro Station, Sector 62, Noida"
    >
      <defs>
        <pattern id="cityBlocks" width="28" height="22" patternUnits="userSpaceOnUse">
          <rect width="28" height="22" fill="#edeae2" />
          <rect x="2" y="3" width="10" height="7" rx="1.5" fill="#ddd9cc" />
          <rect x="15" y="12" width="10" height="7" rx="1.5" fill="#e0dccf" />
          <rect x="4" y="13" width="6" height="5" rx="1" fill="#d9d5c8" />
        </pattern>
      </defs>

      {/* Land base */}
      <rect width="1200" height="700" fill="#f1efe9" />

      {/* Rotated sector grid */}
      <g transform="rotate(-10 600 350)">
        <rect x="15" y="175" width="1160" height="455" fill="url(#cityBlocks)" />

        <g fill="#c9e7c1">
          <rect x="35" y="195" width="140" height="128" rx="10" />
          <rect x="485" y="335" width="138" height="128" rx="10" />
          <rect x="935" y="196" width="138" height="126" rx="10" />
        </g>

        <g strokeLinecap="round">
          <g stroke="#ebe8e1" strokeWidth="7.5">
            {minorVerticals.map((x) => (
              <line key={`mv-${x}`} x1={x} y1="-60" x2={x} y2="760" />
            ))}
            {minorHorizontals.map((y) => (
              <line key={`mh-${y}`} x1="-40" y1={y} x2="1240" y2={y} />
            ))}
          </g>
          <g stroke="#ffffff" strokeWidth="5">
            {minorVerticals.map((x) => (
              <line key={`mvw-${x}`} x1={x} y1="-60" x2={x} y2="760" />
            ))}
            {minorHorizontals.map((y) => (
              <line key={`mhw-${y}`} x1="-40" y1={y} x2="1240" y2={y} />
            ))}
          </g>
        </g>

        <g strokeLinecap="round">
          <g stroke="#dbd8cf" strokeWidth="15">
            {verticals.map((x) => (
              <line key={`v-${x}`} x1={x} y1="-80" x2={x} y2="780" />
            ))}
            {horizontals.map((y) => (
              <line key={`h-${y}`} x1="-60" y1={y} x2="1260" y2={y} />
            ))}
          </g>
          <g stroke="#ffffff" strokeWidth="11">
            {verticals.map((x) => (
              <line key={`vw-${x}`} x1={x} y1="-80" x2={x} y2="780" />
            ))}
            {horizontals.map((y) => (
              <line key={`hw-${y}`} x1="-60" y1={y} x2="1260" y2={y} />
            ))}
          </g>
        </g>
      </g>

      {/* Hindon River */}
      <path
        d="M770 -70 C 805 80, 905 145, 1015 172 S 1190 212, 1270 198"
        fill="none"
        stroke="#aadaff"
        strokeWidth="48"
        strokeLinecap="round"
      />

      {/* Biodiversity Park */}
      <path
        d="M830 525 Q 1020 462 1210 470 L 1235 725 L 865 735 Z"
        fill="#c9e7c1"
      />

      {/* Delhi Metro Blue Line + stations */}
      <path
        d="M-40 525 L 300 432 L 520 362 L 692 318"
        fill="none"
        stroke="#5c6bc0"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <g fill="#ffffff" stroke="#5c6bc0" strokeWidth="3">
        <circle cx="262" cy="442" r="5.5" />
        <circle cx="452" cy="384" r="5.5" />
        <circle cx="692" cy="318" r="5.5" />
      </g>

      {/* Expressways */}
      <g fill="none" strokeLinecap="round">
        <path d="M-50 158 C 220 136, 430 168, 660 146 S 1060 112, 1260 132" stroke="#eeb64f" strokeWidth="27" />
        <path d="M-50 158 C 220 136, 430 168, 660 146 S 1060 112, 1260 132" stroke="#fbd267" strokeWidth="19" />
        <path d="M1262 425 C 1010 468, 812 566, 618 730" stroke="#eeb64f" strokeWidth="25" />
        <path d="M1262 425 C 1010 468, 812 566, 618 730" stroke="#fbd267" strokeWidth="17" />
      </g>

      {/* POIs */}
      <g fontFamily="Roboto, Arial, sans-serif">
        <circle cx="437" cy="298" r="5" fill="#f28b82" />
        <text x="447" y="302" fontSize="11.5" fill="#5f6368" fontWeight="600">Fortis Hospital</text>
        <circle cx="588" cy="252" r="5" fill="#7baaf7" />
        <text x="598" y="256" fontSize="11.5" fill="#5f6368" fontWeight="600">Birla Institute of Technology</text>
        <circle cx="322" cy="497" r="5" fill="#7baaf7" />
        <text x="332" y="501" fontSize="11.5" fill="#5f6368" fontWeight="600">HCL Technologies</text>
      </g>

      {/* Labels */}
      <g fontFamily="Roboto, Arial, sans-serif" textAnchor="middle">
        <g fill="#80868b" fontWeight="600" letterSpacing="2" fontSize="15">
          <text x="120" y="168">SECTOR 57</text>
          <text x="152" y="268">SECTOR 58</text>
          <text x="308" y="232">SECTOR 59</text>
          <text x="528" y="248">SECTOR 60</text>
          <text x="432" y="562">SECTOR 61</text>
          <text x="872" y="298">SECTOR 63</text>
          <text x="1046" y="428">SECTOR 64</text>
          <text x="906" y="662" fontSize="13">SECTOR 70</text>
        </g>
        <text x="556" y="432" fill="#5f6368" fontWeight="700" letterSpacing="2.5" fontSize="17">
          SECTOR 62
        </text>

        <g fill="#9aa0a6" fontSize="11.5" fontWeight="500">
          <text x="212" y="486" transform="rotate(-10 212 486)">Hoshiarpur Rd</text>
          <text x="712" y="336" transform="rotate(-10 712 336)">Main Rd</text>
        </g>

        <text x="330" y="122" fill="#a2761f" fontSize="13" fontWeight="600">
          NH-9 Delhi - Meerut Expy
        </text>
        <text
          x="1002"
          y="508"
          fill="#a2761f"
          fontSize="13"
          fontWeight="600"
          transform="rotate(24 1002 508)"
        >
          Noida-Greater Noida Expy
        </text>
        <text
          x="948"
          y="142"
          fill="#4a90d9"
          fontSize="13"
          fontStyle="italic"
          transform="rotate(16 948 142)"
        >
          Hindon River
        </text>

        <g fill="#3949ab" fontSize="11" fontWeight="600">
          <text x="262" y="424">Sector 61</text>
          <text x="452" y="366">Sector 62</text>
          <text x="700" y="298">Noida Electronic City</text>
        </g>

        <text x="1010" y="598" fill="#5b8a4e" fontSize="13" fontWeight="600">
          Biodiversity Park
        </text>
        <text x="105" y="262" fill="#5b8a4e" fontSize="12" fontWeight="600">City Forest</text>
        <text x="554" y="402" fill="#5b8a4e" fontSize="12" fontWeight="600">Sector 62 Park</text>
        <text x="1004" y="262" fill="#5b8a4e" fontSize="12" fontWeight="600">Sector 63 Park</text>
      </g>
    </svg>
  );
}

export default StaticNoidaMap;
