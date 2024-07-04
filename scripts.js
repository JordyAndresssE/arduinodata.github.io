document.addEventListener('DOMContentLoaded', function() {
    // Datos simulados para prueba
    const data = [
        { id: 1, iuv: 5.2, pressure: 1012, humidity: 45, temperature: 22.5, altitude: 2850, timestamp: '2024-06-27 14:00:00' },
        { id: 2, iuv: 3.1, pressure: 1010, humidity: 50, temperature: 23.0, altitude: 2850, timestamp: '2024-06-27 14:10:00' },
    ];

    const tbody = document.getElementById('sensor-data');

    // Función para determinar la clase de color basada en el valor del IUV
    function getIUVClass(value) {
        if (value >= 1 && value <= 2) {
            return 'low-iuv';
        } else if (value >= 3 && value <= 5) {
            return 'medium-iuv';
        } else if (value >= 6 && value <= 7) {
            return 'high-iuv';
        } else if (value >= 8 && value <= 10) {
            return 'very-high-iuv';
        } else if (value >= 11) {
            return 'extreme-iuv';
        } else {
            return ''; // No se aplica ninguna clase si el valor no es válido
        }
    }

    // Agregar datos a la tabla principal
    data.forEach(sensor => {
        const row = document.createElement('tr');
        const colorClass = getIUVClass(sensor.iuv); // Obtener la clase de color correspondiente
        row.innerHTML = `
            <td>${sensor.id}</td>
            <td class="iuv-cell ${colorClass}">
                <span class="iuv-dot"></span>${sensor.iuv}
            </td>
            <td class="color-cell">
                <div class="color-box ${colorClass}"></div>
            </td>
            <td>${sensor.pressure}</td>
            <td>${sensor.humidity}</td>
            <td>${sensor.temperature}</td>
            <td>${sensor.altitude}</td>
            <td>${sensor.timestamp}</td>
        `;
        tbody.appendChild(row);
    });
});

