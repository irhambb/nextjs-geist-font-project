module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/lib/constants.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Konstanta warna tema
__turbopack_context__.s({
    "COLORS": (()=>COLORS),
    "DEFAULT_SETTINGS": (()=>DEFAULT_SETTINGS),
    "DEMO_USERS": (()=>DEMO_USERS),
    "PERMISSIONS": (()=>PERMISSIONS)
});
const COLORS = {
    primary: '#4169E1',
    secondary: '#ffffff',
    accent: '#f8fafc',
    text: '#1e293b',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444'
};
const PERMISSIONS = {
    'super-admin': {
        canControlDevices: true,
        canViewSettings: true,
        canEditSettings: true,
        canViewTemperature: true
    },
    'admin': {
        canControlDevices: true,
        canViewSettings: false,
        canEditSettings: false,
        canViewTemperature: true
    },
    'user': {
        canControlDevices: false,
        canViewSettings: false,
        canEditSettings: false,
        canViewTemperature: true
    }
};
const DEMO_USERS = [
    {
        id: '1',
        name: 'Super Admin',
        role: 'super-admin',
        email: 'superadmin@dinaspendidikan.go.id',
        password: 'admin123'
    },
    {
        id: '2',
        name: 'Admin Kantor',
        role: 'admin',
        email: 'admin@dinaspendidikan.go.id',
        password: 'admin123'
    },
    {
        id: '3',
        name: 'Pegawai',
        role: 'user',
        email: 'user@dinaspendidikan.go.id',
        password: 'user123'
    }
];
const DEFAULT_SETTINGS = {
    autoOffDelay: 30,
    motionSensorEnabled: true,
    temperatureSettings: {
        targetTemperature: 24,
        autoMode: true,
        temperatureMapping: [
            {
                environmentTemp: 30,
                acTemp: 22
            },
            {
                environmentTemp: 28,
                acTemp: 24
            },
            {
                environmentTemp: 26,
                acTemp: 26
            }
        ]
    }
};
}}),
"[project]/src/contexts/AuthContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthProvider": (()=>AuthProvider),
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Cek apakah user sudah login saat aplikasi dimuat
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedUser = localStorage.getItem('ruang-cerdas-user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setIsLoading(false);
    }, []);
    const login = (email, password)=>{
        const foundUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEMO_USERS"].find((u)=>u.email === email && u.password === password);
        if (foundUser) {
            const userWithoutPassword = {
                id: foundUser.id,
                name: foundUser.name,
                role: foundUser.role,
                email: foundUser.email
            };
            setUser(userWithoutPassword);
            localStorage.setItem('ruang-cerdas-user', JSON.stringify(userWithoutPassword));
            return true;
        }
        return false;
    };
    const logout = ()=>{
        setUser(null);
        localStorage.removeItem('ruang-cerdas-user');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            login,
            logout,
            isLoading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/AuthContext.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
}}),
"[project]/src/lib/deviceSimulator.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DeviceSimulator": (()=>DeviceSimulator),
    "deviceSimulator": (()=>deviceSimulator)
});
class DeviceSimulator {
    devices = [
        {
            id: 'light-1',
            name: 'Lampu Ruang Kepala',
            type: 'light',
            status: 'off',
            room: 'Ruang Kepala Dinas',
            lastUpdated: new Date()
        },
        {
            id: 'light-2',
            name: 'Lampu Ruang Rapat',
            type: 'light',
            status: 'off',
            room: 'Ruang Rapat',
            lastUpdated: new Date()
        },
        {
            id: 'ac-1',
            name: 'AC Ruang Kepala',
            type: 'ac',
            status: 'off',
            room: 'Ruang Kepala Dinas',
            lastUpdated: new Date()
        },
        {
            id: 'ac-2',
            name: 'AC Ruang Rapat',
            type: 'ac',
            status: 'off',
            room: 'Ruang Rapat',
            lastUpdated: new Date()
        }
    ];
    currentTemperature = 28;
    motionDetected = false;
    // Mendapatkan semua perangkat
    getDevices() {
        return [
            ...this.devices
        ];
    }
    // Mengontrol perangkat (on/off)
    toggleDevice(deviceId) {
        const deviceIndex = this.devices.findIndex((d)=>d.id === deviceId);
        if (deviceIndex === -1) return null;
        this.devices[deviceIndex] = {
            ...this.devices[deviceIndex],
            status: this.devices[deviceIndex].status === 'on' ? 'off' : 'on',
            lastUpdated: new Date()
        };
        return this.devices[deviceIndex];
    }
    // Mendapatkan data sensor
    getSensorData() {
        // Simulasi perubahan suhu secara random
        this.currentTemperature += (Math.random() - 0.5) * 0.5;
        this.currentTemperature = Math.max(20, Math.min(35, this.currentTemperature));
        // Simulasi deteksi gerakan secara random
        this.motionDetected = Math.random() > 0.7;
        return {
            temperature: Math.round(this.currentTemperature * 10) / 10,
            motionDetected: this.motionDetected,
            timestamp: new Date()
        };
    }
    // Mengatur suhu AC berdasarkan suhu lingkungan
    setACTemperature(deviceId, temperature) {
        const device = this.devices.find((d)=>d.id === deviceId && d.type === 'ac');
        if (!device) return false;
        // Simulasi pengaturan suhu AC
        console.log(`AC ${device.name} diatur ke suhu ${temperature}°C`);
        return true;
    }
    // Auto-off perangkat jika tidak ada gerakan
    autoOffDevices(delayMinutes) {
        if (!this.motionDetected) {
            setTimeout(()=>{
                this.devices.forEach((device, index)=>{
                    if (device.status === 'on') {
                        this.devices[index] = {
                            ...device,
                            status: 'off',
                            lastUpdated: new Date()
                        };
                    }
                });
            }, delayMinutes * 60 * 1000); // Convert menit ke milidetik
        }
    }
}
const deviceSimulator = new DeviceSimulator();
}}),
"[project]/src/contexts/DeviceContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DeviceProvider": (()=>DeviceProvider),
    "useDevice": (()=>useDevice)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceSimulator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/deviceSimulator.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const DeviceContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function DeviceProvider({ children }) {
    const [devices, setDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sensorData, setSensorData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        temperature: 28,
        motionDetected: false,
        timestamp: new Date()
    });
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"]);
    // Load data awal saat komponen dimuat
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setDevices(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceSimulator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deviceSimulator"].getDevices());
        refreshSensorData();
        // Update sensor data setiap 5 detik
        const interval = setInterval(()=>{
            refreshSensorData();
        }, 5000);
        return ()=>clearInterval(interval);
    }, []);
    // Fungsi untuk toggle perangkat (on/off)
    const toggleDevice = (deviceId)=>{
        const updatedDevice = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceSimulator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deviceSimulator"].toggleDevice(deviceId);
        if (updatedDevice) {
            setDevices(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceSimulator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deviceSimulator"].getDevices());
        }
    };
    // Fungsi untuk update pengaturan sistem
    const updateSettings = (newSettings)=>{
        setSettings((prev)=>({
                ...prev,
                ...newSettings
            }));
        // Simpan ke localStorage
        localStorage.setItem('ruang-cerdas-settings', JSON.stringify({
            ...settings,
            ...newSettings
        }));
    };
    // Fungsi untuk refresh data sensor
    const refreshSensorData = ()=>{
        const newSensorData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceSimulator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deviceSimulator"].getSensorData();
        setSensorData(newSensorData);
        // Auto-off perangkat jika tidak ada gerakan dan fitur diaktifkan
        if (settings.motionSensorEnabled && !newSensorData.motionDetected) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceSimulator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deviceSimulator"].autoOffDevices(settings.autoOffDelay);
        }
        // Auto-adjust AC temperature berdasarkan suhu lingkungan
        if (settings.temperatureSettings.autoMode) {
            const mapping = settings.temperatureSettings.temperatureMapping.find((m)=>Math.abs(m.environmentTemp - newSensorData.temperature) <= 1);
            if (mapping) {
                devices.forEach((device)=>{
                    if (device.type === 'ac' && device.status === 'on') {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$deviceSimulator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deviceSimulator"].setACTemperature(device.id, mapping.acTemp);
                    }
                });
            }
        }
    };
    // Load pengaturan dari localStorage saat aplikasi dimuat
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedSettings = localStorage.getItem('ruang-cerdas-settings');
        if (savedSettings) {
            setSettings(JSON.parse(savedSettings));
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DeviceContext.Provider, {
        value: {
            devices,
            sensorData,
            settings,
            toggleDevice,
            updateSettings,
            refreshSensorData
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/DeviceContext.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
function useDevice() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(DeviceContext);
    if (context === undefined) {
        throw new Error('useDevice must be used within a DeviceProvider');
    }
    return context;
}
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__bd2b9875._.js.map