const weatherIcons: { key: string; icon: string }[] = [
  {
    key: '01d',
    icon: '/static/weather/day.svg',
  },
  {
    key: '02d',
    icon: '/static/weather/cloudy-day-1.svg',
  },
  {
    key: '03d',
    icon: '/static/weather/cloudy-day-2.svg',
  },
  {
    key: '04d',
    icon: '/static/weather/cloudy-day-3.svg',
  },
  {
    key: '09d',
    icon: '/static/weather/rainy-4.svg',
  },
  {
    key: '10d',
    icon: '/static/weather/rainy-1.svg',
  },
  {
    key: '11d',
    icon: '/static/weather/thunder.svg',
  },
  {
    key: '13d',
    icon: '/static/weather/snowy-3.svg',
  },
  {
    key: '50d',
    icon: '/static/weather/cloudy-day-3.svg',
  },
  {
    key: '01n',
    icon: '/static/weather/night.svg',
  },
  {
    key: '02n',
    icon: '/static/weather/cloudy-night-1.svg',
  },
  {
    key: '03n',
    icon: '/static/weather/cloudy-night-2.svg',
  },
  {
    key: '04n',
    icon: '/static/weather/cloudy-night-3.svg',
  },
  {
    key: '09n',
    icon: '/static/weather/rainy-4.svg',
  },
  {
    key: '10n',
    icon: '/static/weather/rainy-5.svg',
  },
  {
    key: '11n',
    icon: '/static/weather/thunder.svg',
  },
  {
    key: '13n',
    icon: '/static/weather/snowy-5.svg',
  },
  {
    key: '50n',
    icon: '/static/weather/cloudy-day-3.svg',
  },
];

// Capitalize
export function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function lowercase(word: string) {
  return word.toLowerCase();
}

// Format price
export function formatPrice(price: string) {
  const number = parseFloat(price);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
}

// Get wind direction
export function windDirection(degree: number) {
  const sectors = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];

  degree += 22.5;

  if (degree < 0) {
    degree = 360 - (Math.abs(degree) % 360);
  } else {
    degree = degree % 360;
  }

  const which = parseInt((degree / 45).toString(), 10);
  return sectors[which];
}

// Get weather icon class
export function getWeatherIcon(code: string, size: number) {
  const icon = weatherIcons.find((weatherIcon) => weatherIcon.key === code);
  if (icon)
    return (
      <span
        style={{
          background: `none, url(${icon.icon}) no-repeat`,
          backgroundSize: 'contain',
          width: `${size}px`,
          height: ` ${size}px`,
          display: `inline-block`,
        }}
      />
    );
}

// Get weather data
export async function getWeather(city: string, country: string, days: number) {
  let forecast = undefined;
  try {
    const forecast_call = await fetch(
      `//api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${process.env.weatherApi}&cnt=${days}&units=metric`,
    )
      .then((res) => {
        if (res.ok) {
          return res;
        } else {
          throw Error(`Request rejected with status ${res.status}`);
        }
      })
      // eslint-disable-next-line
      .catch(console.error);

    if (forecast_call !== undefined) {
      forecast = await forecast_call.json();
    }

    return forecast;
  } catch (e) {
    return '';
  }
}

function toCamelCase(word: string) {
  return word
    .toLowerCase()
    .replace(/[-_]+/g, ' ')
    .replace(/[^\w\s]/g, '')
    .replace(/ (.)/g, function ($1) {
      return $1.toUpperCase();
    })
    .replace(/ /g, '');
}

export function objectToCamelCase(origObj: any) {
  //WHY: any object to Camel case
  return Object.keys(origObj).reduce(function (newObj: any, key) {
    const val = origObj[key];
    const newVal = typeof val === 'object' ? objectToCamelCase(val) : val;
    newObj[toCamelCase(key)] = newVal;
    return newObj;
  }, {});
}

export function getYears() {
  const currentYear = new Date(Date.now()).getFullYear();
  const years = [];
  for (let i = 1900; i <= currentYear; i++) {
    years.push(i);
  }
  return years;
}

export function sliceImageName(name?: string) {
  const words = name?.split('.');
  const type = String(words?.slice(-1));
  const nameText = words?.slice(0, -1)?.join('');

  if (nameText && nameText?.length > 32) {
    const newName = nameText?.slice(0, 32)?.concat('...', type);
    return newName;
  } else {
    return name;
  }
}
