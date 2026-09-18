/**
 * The Kos Living Surabaya - Integrated Application Core
 * Merah Putih Kos Living Management & Tenant Portal
 */

// Initial Mock Data
const DEFAULT_APP_STATE = {
  activeView: 'marketplace', // 'marketplace' | 'tenant-login' | 'admin-login' | 'portal' | 'tenant' | 'admin'
  user: null, // logged in user info
  authAccounts: [], // Credentials are created only by Excel/CSV import
  pinVisible: false,
  qrisSecondsLeft: 14 * 60 + 48,

  // 15 Rooms: Lantai 1 (01-08 Non-AC), Lantai 2 (09-15 Premium AC)
  rooms: [
    {
      number: '01', floor: 1, type: 'Standard (Non-AC)', price: 750000, status: 'terisi',
      tenant: 'John Doe', phone: '08123456001', paymentStatus: 'lunas', paymentMethod: 'QRIS',
      rentEnd: '31 Des 2026', electricityKwh: 35.0, plnMeterNumber: '1428-9920-1101',
      pin: '716253', wifiSsid: 'thekos_km01', wifiPass: 'thekos_km01',
      vehiclePlate: 'L 2819 AA (Honda Beat)', contractStart: '01 Jan 2026', deposit: 750000,
      emergencyContact: { name: 'Bpk. Herman (Ayah)', phone: '0812-9900-1122' }
    },
    {
      number: '02', floor: 1, type: 'Standard (Non-AC)', price: 750000, status: 'terisi',
      tenant: 'Sarah Amanda', phone: '08123456002', paymentStatus: 'pending', paymentMethod: 'Transfer',
      rentEnd: '20 Okt 2026', dueDate: '20 Sep', electricityKwh: 18.5, plnMeterNumber: '1428-9920-1102',
      pin: '829104', wifiSsid: 'thekos_km02', wifiPass: 'thekos_km02',
      vehiclePlate: 'L 9981 BB (Yamaha Scoopy)', contractStart: '20 Apr 2026', deposit: 750000,
      emergencyContact: { name: 'Ibu Linda (Ibu)', phone: '0813-8899-2233' }
    },
    {
      number: '03', floor: 1, type: 'Standard (Non-AC)', price: 750000, status: 'tersedia',
      tenant: null, phone: null, paymentStatus: null, rentEnd: null,
      electricityKwh: 5.0, plnMeterNumber: '1428-9920-1103', pin: '123456',
      wifiSsid: 'thekos_km03', wifiPass: 'thekos_km03', contractStart: null, deposit: 750000
    },
    {
      number: '04', floor: 1, type: 'Standard (Non-AC)', price: 750000, status: 'terisi',
      tenant: 'Andi Pratama', phone: '08123456004', paymentStatus: 'lunas', paymentMethod: 'Tunai',
      rentEnd: '15 Nov 2026', hasActiveTicket: true, electricityKwh: 60.0, plnMeterNumber: '1428-9920-1104',
      pin: '635241', wifiSsid: 'thekos_km04', wifiPass: 'thekos_km04',
      vehiclePlate: 'L 3102 PC (Honda Vario 125)', contractStart: '15 Mei 2026', deposit: 750000,
      emergencyContact: { name: 'Sdr. Dimas (Kakak)', phone: '0811-2233-4455' }
    },
    {
      number: '05', floor: 1, type: 'Standard (Non-AC)', price: 750000, status: 'terisi',
      tenant: 'Rian Hidayat', phone: '08123456005', paymentStatus: 'lunas', paymentMethod: 'QRIS',
      rentEnd: '31 Des 2026', electricityKwh: 42.0, plnMeterNumber: '1428-9920-1105',
      pin: '546372', wifiSsid: 'thekos_km05', wifiPass: 'thekos_km05',
      vehiclePlate: 'L 5543 KL (Suzuki Nex)', contractStart: '01 Jan 2026', deposit: 750000
    },
    {
      number: '06', floor: 1, type: 'Standard (Non-AC)', price: 750000, status: 'terisi',
      tenant: 'Fajar Nugraha', phone: '08123456006', paymentStatus: 'lunas', paymentMethod: 'Transfer',
      rentEnd: '28 Feb 2027', electricityKwh: 38.0, plnMeterNumber: '1428-9920-1106',
      pin: '837461', wifiSsid: 'thekos_km06', wifiPass: 'thekos_km06',
      contractStart: '01 Mar 2026', deposit: 750000
    },
    {
      number: '07', floor: 1, type: 'Standard (Non-AC)', price: 750000, status: 'tersedia',
      tenant: null, phone: null, paymentStatus: null, rentEnd: null,
      electricityKwh: 5.0, plnMeterNumber: '1428-9920-1107', pin: '123456',
      wifiSsid: 'thekos_km07', wifiPass: 'thekos_km07'
    },
    {
      number: '08', floor: 1, type: 'Standard (Non-AC)', price: 750000, status: 'terisi',
      tenant: 'Bagas Wicaksono', phone: '08123456008', paymentStatus: 'lunas', paymentMethod: 'QRIS',
      rentEnd: '30 Nov 2026', electricityKwh: 27.5, plnMeterNumber: '1428-9920-1108',
      pin: '918273', wifiSsid: 'thekos_km08', wifiPass: 'thekos_km08',
      contractStart: '01 Des 2025', deposit: 750000
    },

    // Lantai 2 Premium AC (Rp 1.250.000)
    {
      number: '09', floor: 2, type: 'Premium AC & KM Dalam', price: 1250000, status: 'terisi',
      tenant: 'Dimas Arya', phone: '081234567890', paymentStatus: 'pending', paymentMethod: 'QRIS',
      rentEnd: '31 Des 2026', dueDate: '10 Okt 2026', electricityKwh: 48.5, plnMeterNumber: '1428-9920-1109',
      pin: '928174', wifiSsid: 'thekos_km09', wifiPass: 'thekos_km09',
      vehiclePlate: 'L 4529 ABC (Honda Vario 160)', contractStart: '01 Jan 2026', deposit: 1250000,
      emergencyContact: { name: 'Ibu Ratna (Ibu Kandung)', phone: '0812-9876-5432' }
    },
    {
      number: '10', floor: 2, type: 'Premium AC & KM Dalam', price: 1250000, status: 'terisi',
      tenant: 'Kevin Sanjaya', phone: '08123456010', paymentStatus: 'lunas', paymentMethod: 'QRIS',
      rentEnd: '15 Jan 2027', electricityKwh: 52.0, plnMeterNumber: '1428-9920-1110',
      pin: '392817', wifiSsid: 'thekos_km10', wifiPass: 'thekos_km10',
      contractStart: '15 Jan 2026', deposit: 1250000
    },
    {
      number: '11', floor: 2, type: 'Premium AC & KM Dalam', price: 1250000, status: 'terisi',
      tenant: 'Taufik Maulana', phone: '08123456011', paymentStatus: 'lunas', paymentMethod: 'Transfer',
      rentEnd: '31 Des 2026', electricityKwh: 44.0, plnMeterNumber: '1428-9920-1111',
      pin: '483920', wifiSsid: 'thekos_km11', wifiPass: 'thekos_km11',
      contractStart: '01 Jan 2026', deposit: 1250000
    },
    {
      number: '12', floor: 2, type: 'Premium AC & KM Dalam', price: 1250000, status: 'maintenance',
      tenant: null, phone: null, paymentStatus: null, rentEnd: null,
      maintenanceNote: 'Servis AC Unit & Ganti Freon', electricityKwh: 12.0, plnMeterNumber: '1428-9920-1112',
      pin: '123456'
    },
    {
      number: '13', floor: 2, type: 'Premium AC & KM Dalam', price: 1250000, status: 'terisi',
      tenant: 'Bayu Aditya', phone: '08123456013', paymentStatus: 'lunas', paymentMethod: 'QRIS',
      rentEnd: '31 Mar 2027', electricityKwh: 68.0, plnMeterNumber: '1428-9920-1113',
      pin: '592810', wifiSsid: 'thekos_km13', wifiPass: 'thekos_km13',
      contractStart: '01 Apr 2026', deposit: 1250000
    },
    {
      number: '14', floor: 2, type: 'Premium AC & KM Dalam', price: 1250000, status: 'tersedia',
      tenant: null, phone: null, paymentStatus: null, rentEnd: null,
      electricityKwh: 5.0, plnMeterNumber: '1428-9920-1114', pin: '123456'
    },
    {
      number: '15', floor: 2, type: 'Premium AC & KM Dalam', price: 1250000, status: 'tersedia',
      tenant: null, phone: null, paymentStatus: null, rentEnd: null,
      electricityKwh: 5.0, plnMeterNumber: '1428-9920-1115', pin: '123456'
    }
  ],

  // Invoices & Payment for Room 09 (Dimas Arya)
  tenantInvoice: {
    id: 'INV-202610-KM09',
    period: 'Oktober 2026',
    dueDate: '10 Oktober 2026',
    amount: 1250000,
    status: 'pending', // 'pending' | 'verifikasi' | 'lunas'
    daysLeft: 6,
    room: '09',
    roomType: 'Kamar Premium 09 (AC, KM Dalam)',
    paidAt: null,
    paymentMethod: null
  },

  // Payment History
  paymentHistory: [
    { id: 'INV-202609-KM09', month: 'September 2026', date: '04 Sep 2026', method: 'QRIS Mandiri', amount: 1250000, status: 'lunas' },
    { id: 'INV-202608-KM09', month: 'Agustus 2026', date: '02 Agu 2026', method: 'QRIS BCA', amount: 1250000, status: 'lunas' },
    { id: 'INV-202607-KM09', month: 'Juli 2026', date: '05 Jul 2026', method: 'QRIS BCA', amount: 1250000, status: 'lunas' }
  ],

  // Maintenance & Repair Tickets
  tickets: [
    {
      id: 'TKT-104',
      room: '09',
      tenant: 'Dimas Arya',
      title: 'Pengecekan Kran Wastafel Sedikit Menetes',
      desc: 'Tim teknisi sedang menjadwalkan penggantian seal karet kran wastafel kamar mandi.',
      category: 'Air / Kran / Water Heater',
      status: 'Sedang Ditangani', // 'Sedang Ditangani' | 'Selesai' | 'Tunggu Suku Cadang'
      priority: 'MEDIUM',
      date: 'Hari ini',
      timeEstimate: 'Hari ini 16:00 WIB',
      permit: 'Boleh masuk jika saya tidak di kamar (didampingi Penjaga)',
      rating: null
    },
    {
      id: 'TKT-088',
      room: '09',
      tenant: 'Dimas Arya',
      title: 'Pembersihan Rutin Filter AC Bulanan',
      desc: 'Filter evaporator AC Sharp telah dicuci dan disemprot disinfektan. Performa udara kembali optimal.',
      category: 'AC / Pendingin Ruangan',
      status: 'Selesai',
      priority: 'LOW',
      date: '5 September 2026',
      timeEstimate: 'Selesai',
      permit: 'Hanya saat saya ada di dalam kamar',
      rating: '5.0 (Puas)'
    },
    {
      id: 'TKT-105',
      room: '12',
      tenant: 'Admin / Operasional',
      title: 'Kamar 12 — AC Tidak Dingin',
      desc: 'Freon bocor dan hembusan angin kecil. Teknisi Jaya Teknik tiba pukul 13.30 WIB.',
      category: 'AC / Pendingin Ruangan',
      status: 'Sedang Ditangani',
      priority: 'URGENT',
      date: 'Hari ini 10:15 WIB',
      timeEstimate: 'Hari ini 14:00 WIB',
      permit: 'Akses penuh perbaikan'
    },
    {
      id: 'TKT-106',
      room: '04',
      tenant: 'Andi Pratama',
      title: 'Kamar 04 — Kran Wastafel Bocor',
      desc: 'Pipa fleksibel wastafel retak menetes ke lantai. Dilaporkan oleh Andi.',
      category: 'Air / Kran / Water Heater',
      status: 'Tunggu Suku Cadang',
      priority: 'MEDIUM',
      date: 'Kemarin',
      timeEstimate: 'Besok 10:00 WIB',
      permit: 'Didampingi pengelola'
    }
  ],

  // Extra Room Services (Laundry, Housekeeping, Galon)
  services: [
    {
      id: 'SRV-101',
      room: '09',
      tenant: 'Dimas Arya',
      type: 'Laundry Kiloan',
      detail: 'Paket Regular Cuci + Wangi + Setrika (4 Kg)',
      price: 32000,
      status: 'Sedang Diproses',
      date: 'Hari ini 10:30 WIB'
    },
    {
      id: 'SRV-098',
      room: '09',
      tenant: 'Dimas Arya',
      type: 'Pesan Galon',
      detail: 'Aqua Galon Asli 19 Liter (Antar Kamar)',
      price: 20000,
      status: 'Selesai',
      date: 'Kemarin 16:00 WIB'
    }
  ],

  // Guest Permits
  guestPermits: [
    {
      id: 'GST-204',
      room: '09',
      tenant: 'Dimas Arya',
      guestName: 'Rian Saputra',
      phone: '0813-9876-1122',
      relationship: 'Teman Kuliah UBAYA',
      checkIn: '12 Okt 2026',
      checkOut: '14 Okt 2026',
      status: 'Disetujui'
    }
  ],

  // Electric Token Purchases
  electricTokensHistory: [
    {
      id: 'PLN-8821',
      room: '09',
      date: '25 Sep 2026',
      amount: 100000,
      kwh: 66.4,
      tokenNumber: '4829-1029-4820-1928-3019'
    }
  ],

  // Extra manual transactions recorded by admin
  manualTransactions: []
};

// Global App State wrapper
let appState = {};

/**
 * Initialize state from localStorage or defaults
 */
function initAppState() {
  const saved = localStorage.getItem('the_kos_app_state');
  if (saved) {
    try {
      appState = JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to parse saved state, resetting to default', e);
      appState = JSON.parse(JSON.stringify(DEFAULT_APP_STATE));
    }
  } else {
    appState = JSON.parse(JSON.stringify(DEFAULT_APP_STATE));
  }

  // Ensure default props exist and merge room enhancements gracefully
  if (!appState.rooms || appState.rooms.length === 0) {
    appState.rooms = JSON.parse(JSON.stringify(DEFAULT_APP_STATE.rooms));
  } else {
    appState.rooms.forEach(r => {
      const def = DEFAULT_APP_STATE.rooms.find(d => d.number === r.number);
      if (def) {
        if (r.electricityKwh === undefined) r.electricityKwh = def.electricityKwh || 35.0;
        if (!r.plnMeterNumber) r.plnMeterNumber = def.plnMeterNumber || ('1428-9920-11' + r.number);
        if (!r.pin) r.pin = def.pin || '123456';
        if (!r.wifiSsid) r.wifiSsid = def.wifiSsid || ('thekos_km' + r.number);
        if (!r.wifiPass) r.wifiPass = def.wifiPass || ('thekos_km' + r.number);
        if (!r.rentEnd) r.rentEnd = def.rentEnd || '31 Des 2026';
        if (!r.contractStart) r.contractStart = def.contractStart || '01 Jan 2026';
        if (!r.deposit) r.deposit = def.deposit || r.price;
        if (!r.vehiclePlate && def.vehiclePlate) r.vehiclePlate = def.vehiclePlate;
        if (!r.emergencyContact && def.emergencyContact) r.emergencyContact = def.emergencyContact;
      }
    });
  }

  if (!appState.tenantInvoice) {
    appState.tenantInvoice = JSON.parse(JSON.stringify(DEFAULT_APP_STATE.tenantInvoice));
  }
  if (!appState.tickets) {
    appState.tickets = JSON.parse(JSON.stringify(DEFAULT_APP_STATE.tickets));
  }
  if (!appState.paymentHistory) {
    appState.paymentHistory = JSON.parse(JSON.stringify(DEFAULT_APP_STATE.paymentHistory));
  }
  if (!appState.services) {
    appState.services = JSON.parse(JSON.stringify(DEFAULT_APP_STATE.services));
  }
  if (!appState.guestPermits) {
    appState.guestPermits = JSON.parse(JSON.stringify(DEFAULT_APP_STATE.guestPermits));
  }
  if (!appState.electricTokensHistory) {
    appState.electricTokensHistory = JSON.parse(JSON.stringify(DEFAULT_APP_STATE.electricTokensHistory));
  }
  if (!Array.isArray(appState.authAccounts)) {
    appState.authAccounts = [];
  }

  // Bootstrap the current mock data once so the login can be tested immediately.
  if (appState.authAccounts.length === 0) {
    appState.authAccounts = createCurrentDataAuthAccounts();
  }

  if (appState.user) {
    const sessionIsImported = appState.user.role === 'tenant'
      ? appState.authAccounts.some(account => account.role === 'tenant' && account.room === appState.user.room)
      : appState.authAccounts.some(account => account.role === 'admin' && account.name === appState.user.name);
    if (!sessionIsImported) {
      appState.user = null;
      appState.activeView = 'marketplace';
    }
  }
}

function createCurrentDataAuthAccounts() {
  const tenantAccounts = appState.rooms
    .filter(room => room.status === 'terisi' && room.tenant && room.phone)
    .map(room => ({
      role: 'tenant',
      phone: room.phone,
      username: null,
      email: null,
      password: `${String(room.pin || '123456').replace(/[^a-zA-Z0-9]/g, '').slice(0, 8).padEnd(8, '0')}`,
      name: room.tenant,
      title: 'Penghuni',
      room: room.number
    }));

  return [
    ...tenantAccounts,
    {
      role: 'admin',
      email: 'admin.surabaya@thekos.co.id',
      username: 'admin.surabaya',
      password: 'kosadmin',
      name: 'Budi Santoso',
      title: 'Head Manager / Admin Operasional',
      room: null
    }
  ];
}

/**
 * Keep derived data consistent before it is persisted.
 * Room payment/status data is the source of truth for related views.
 */
function synchronizeRelatedData() {
  const rooms = Array.isArray(appState.rooms) ? appState.rooms : [];
  const tickets = Array.isArray(appState.tickets) ? appState.tickets : [];
  const paymentHistory = Array.isArray(appState.paymentHistory) ? appState.paymentHistory : [];

  rooms.forEach(room => {
    if (room.status === 'tersedia') {
      room.tenant = null;
      room.phone = null;
      room.paymentStatus = null;
      room.paymentMethod = null;
    } else if (room.status === 'terisi' && !room.paymentStatus) {
      room.paymentStatus = 'pending';
    }

    room.hasActiveTicket = tickets.some(ticket =>
      ticket.room === room.number && ticket.status !== 'Selesai'
    );
  });

  appState.rooms = rooms;
  appState.tickets = tickets;
  appState.paymentHistory = paymentHistory;

  paymentHistory.forEach(payment => {
    const roomNumber = payment.room || String(payment.id || '').match(/KM(\d+)/i)?.[1];
    const room = rooms.find(item => item.number === roomNumber);
    if (!room) return;

    payment.room = room.number;
    payment.roomType = payment.roomType || room.type;
    payment.tenant = payment.tenant || room.tenant || '-';
  });

  const invoiceRoomNumber = appState.tenantInvoice?.room || '09';
  const invoiceRoom = rooms.find(room => room.number === invoiceRoomNumber);
  if (invoiceRoom && appState.tenantInvoice) {
    appState.tenantInvoice.room = invoiceRoom.number;
    appState.tenantInvoice.roomType = invoiceRoom.type;
    appState.tenantInvoice.amount = invoiceRoom.price;
    if (invoiceRoom.paymentStatus === 'lunas') {
      appState.tenantInvoice.status = 'lunas';
    } else if (appState.tenantInvoice.status !== 'verifikasi') {
      appState.tenantInvoice.status = 'pending';
    }
  }

  const importedTenantAccounts = (appState.authAccounts || []).filter(account => {
    if (account.role !== 'tenant') return true;
    return rooms.some(room => room.number === account.room && room.status === 'terisi' && room.tenant);
  });

  rooms.filter(room => room.status === 'terisi' && room.tenant && room.phone).forEach(room => {
    const account = importedTenantAccounts.find(item => item.role === 'tenant' && item.room === room.number);
    if (account) {
      account.name = room.tenant;
      account.phone = room.phone;
      return;
    }

    importedTenantAccounts.push({
      role: 'tenant',
      phone: room.phone,
      username: null,
      email: null,
      password: `${String(room.pin || '123456').replace(/[^a-zA-Z0-9]/g, '').slice(0, 8).padEnd(8, '0')}`,
      name: room.tenant,
      title: 'Penghuni',
      room: room.number
    });
  });

  appState.authAccounts = importedTenantAccounts;
}

/**
 * Persist current state to localStorage
 */
function saveState() {
  try {
    synchronizeRelatedData();
    localStorage.setItem('the_kos_app_state', JSON.stringify(appState));
  } catch (e) {
    console.error('Error saving state:', e);
  }
}

/**
 * Reset state to factory default
 */
function resetState() {
  localStorage.removeItem('the_kos_app_state');
  appState = JSON.parse(JSON.stringify(DEFAULT_APP_STATE));
  appState.authAccounts = createCurrentDataAuthAccounts();
  saveState();
  showToast('State berhasil di-reset ke kondisi awal!', 'info');
  renderAll();
  navigateTo(appState.activeView || 'portal');
}

/**
 * Toast Notification System
 */
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium shadow-lg transition-all transform duration-300 max-w-md ${type === 'success'
      ? 'bg-emerald-600 text-white'
      : type === 'error'
        ? 'bg-red-600 text-white'
        : type === 'warning'
          ? 'bg-amber-500 text-white'
          : 'bg-slate-900 text-white'
    }`;

  const icon =
    type === 'success'
      ? 'check_circle'
      : type === 'error'
        ? 'error'
        : type === 'warning'
          ? 'warning'
          : 'info';

  toast.innerHTML = `
    <span class="material-symbols-outlined text-[20px] shrink-0">${icon}</span>
    <span class="flex-1 text-xs md:text-sm font-medium leading-snug">${message}</span>
    <button onclick="this.parentElement.remove()" class="text-white/80 hover:text-white p-0.5 rounded-md">
      <span class="material-symbols-outlined text-[16px]">close</span>
    </button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px) scale(0.95)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/**
 * Router / View Navigation
 */
function navigateTo(viewName) {
  if (viewName === 'portal') {
    viewName = 'marketplace';
  }
  if (viewName === 'tenant' && (!appState.user || appState.user.role !== 'tenant')) {
    viewName = 'tenant-login';
  }
  if (viewName === 'admin' && (!appState.user || appState.user.role !== 'admin')) {
    viewName = 'admin-login';
  }
  if (!['marketplace', 'tenant-login', 'admin-login', 'portal', 'tenant', 'admin'].includes(viewName)) {
    viewName = 'marketplace';
  }

  appState.activeView = viewName;
  saveState();

  // Hide all views first
  document.querySelectorAll('.view-container').forEach(el => {
    el.classList.remove('active');
    el.style.display = '';
  });

  // Show target view
  const target = document.getElementById(`view-${viewName}`);
  if (target) {
    target.classList.add('active');
    // Admin view is flex-row (sidebar + main), others are flex-col
    // CSS handles this via .active rules in style.css
  }

  // Update hash without triggering hashchange listener
  window.location.hash = viewName;

  // Scroll to top
  window.scrollTo(0, 0);

  // Update floating switcher UI
  updateFloatingSwitcher();

  // Close mobile sidebar if open
  closeAdminMobileSidebar();

  // Reset active navigation indicator
  if (viewName === 'tenant') {
    setActiveTenantNav('tenant-beranda');
  } else if (viewName === 'admin') {
    setActiveAdminNav('admin-dashboard');
  } else if (viewName === 'marketplace') {
    renderMarketplaceRooms();
  }

  // Render view-specific content
  renderAll();
}

/**
 * Helper to get currently active room object
 */
function getActiveTenantRoom() {
  const roomNum = (appState.user && appState.user.room) || '09';
  let room = appState.rooms.find(r => r.number === roomNum);
  if (!room) {
    room = appState.rooms.find(r => r.number === '09') || appState.rooms[0];
  }
  return room;
}

/**
 * Handle floating demo switch
 */
function updateFloatingSwitcher() {
  const current = appState.activeView;
  const currentLabel = document.querySelector('.floating-role-current');
  const roleLabels = {
    marketplace: 'Portal Masuk',
    'tenant-login': 'Login Penghuni',
    'admin-login': 'Login Admin',
    tenant: 'Dashboard Penghuni',
    admin: 'Console Admin'
  };
  if (currentLabel) currentLabel.textContent = roleLabels[current] || 'Pilih akses cepat';

  document.querySelectorAll('.floating-btn').forEach(btn => {
    const target = btn.getAttribute('data-target');
    if (target === current) {
      btn.className = 'floating-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-primary text-white shadow-sm flex items-center gap-1.5 transition-all';
    } else {
      btn.className = 'floating-btn px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-100 flex items-center gap-1.5 transition-all';
    }
  });
}

/**
 * Toggle floating bar collapsed/expanded
 */
function toggleFloatingBar() {
  const bar = document.getElementById('floating-demo-bar');
  const toggleIcon = document.getElementById('floating-toggle-icon');
  const toggleButton = document.getElementById('floating-role-toggle');
  const options = document.getElementById('floating-role-options');
  if (bar) {
    const isExpanded = bar.classList.toggle('is-expanded');
    if (toggleButton) toggleButton.setAttribute('aria-expanded', String(isExpanded));
    if (options) options.setAttribute('aria-hidden', String(!isExpanded));
    if (toggleIcon) {
      toggleIcon.textContent = isExpanded ? 'expand_more' : 'expand_less';
    }
  }
}

/**
 * Auth actions
 */
function loginAsTenant(roomNumber = '09') {
  const room = appState.rooms.find(r => r.number === roomNumber) || appState.rooms.find(r => r.number === '09');
  if (!room || room.status !== 'terisi' || !room.tenant) {
    showToast('Unit ini belum terdaftar sebagai kamar penghuni. Silakan lihat penawaran kamar.', 'warning');
    navigateTo('marketplace');
    return;
  }
  const tenantName = room.tenant;

  appState.user = {
    role: 'tenant',
    name: tenantName,
    room: room.number,
    roomType: room.type,
    phone: room.phone || '0812-3456-7890'
  };
  saveState();
  showToast(`Selamat datang kembali, ${tenantName} (Kamar ${room.number})!`, 'success');
  navigateTo('tenant');
}

function loginAsAdmin() {
  appState.user = {
    role: 'admin',
    name: 'Budi Santoso',
    title: 'Head Manager / Admin Operasional'
  };
  saveState();
  showToast('Berhasil masuk ke Console Pengelola Kos!', 'success');
  navigateTo('admin');
}

function handlePublicTenantLogin(phone, password) {
  const account = findAuthAccountByPhone('tenant', phone, password);
  const room = account && appState.rooms.find(item => item.number === account.room);

  if (!account || !room || room.status !== 'terisi' || !room.tenant) {
    showToast('Login ditolak. Akun pelanggan harus berasal dari data Excel yang diimpor admin.', 'error');
    return;
  }

  loginAsTenant(room.number);
}

function findAuthAccountByPhone(role, phone, password) {
  const normalizedPhone = String(phone || '').replace(/\D/g, '');
  const normalizedPassword = String(password || '');
  return (appState.authAccounts || []).find(account => {
    const accountPhone = String(account.phone || '').replace(/\D/g, '');
    return account.role === role && accountPhone && accountPhone === normalizedPhone && account.password === normalizedPassword;
  });
}

function handlePublicAdminLogin(email, password) {
  const account = findAuthAccount('admin', email, password);
  if (!account) {
    showToast('Login ditolak. Akun admin harus berasal dari data Excel yang diimpor.', 'error');
    return;
  }

  appState.user = {
    role: 'admin',
    name: account.name || account.username || account.email,
    title: account.title || 'Admin Operasional'
  };
  saveState();
  showToast(`Berhasil masuk sebagai ${appState.user.name}.`, 'success');
  navigateTo('admin');
}

function findAuthAccount(role, username, password) {
  const normalizedUsername = String(username || '').trim().toLowerCase();
  const normalizedPassword = String(password || '');
  return (appState.authAccounts || []).find(account => {
    const sameRole = account.role === role;
    const sameUsername = [account.username, account.email].filter(Boolean)
      .some(value => String(value).trim().toLowerCase() === normalizedUsername);
    return sameRole && sameUsername && account.password === normalizedPassword;
  });
}

function renderMarketplaceRooms() {
  const container = document.getElementById('marketplace-room-list');
  if (!container) return;

  const query = String(document.getElementById('marketplace-search')?.value || '').toLowerCase().trim();
  const filter = document.getElementById('marketplace-filter')?.value || 'all';
  const rooms = appState.rooms.filter(room => {
    const matchesQuery = !query || `${room.number} ${room.type} ${room.floor}`.toLowerCase().includes(query);
    const matchesFilter = filter === 'all' || room.status === filter;
    return matchesQuery && matchesFilter;
  });

  if (rooms.length === 0) {
    container.innerHTML = '<div class="col-span-full p-8 text-center text-secondary bg-white rounded-2xl border border-slate-200">Kamar yang dicari belum tersedia.</div>';
    return;
  }

  container.innerHTML = rooms.map(room => {
    const available = room.status === 'tersedia';
    const maintenance = room.status === 'maintenance';
    const statusText = available ? 'Tersedia untuk disewa' : (maintenance ? 'Sedang disiapkan' : 'Sudah berpenghuni');
    const statusClass = available ? 'bg-emerald-subtle text-emerald-active' : (maintenance ? 'bg-amber-subtle text-amber-pending' : 'bg-slate-100 text-secondary');
    const action = available
      ? `<a href="https://wa.me/6281234567890?text=Halo%20The%20Kos,%20saya%20tertarik%20dengan%20Kamar%20${room.number}" target="_blank" class="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-crimson-deep transition-colors"><span class="material-symbols-outlined text-[16px]">chat</span>Ajukan Sewa</a>`
      : '<span class="text-[11px] text-secondary">Hubungi pengelola untuk alternatif unit</span>';

    return `<article class="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
      <div class="flex items-start justify-between gap-3">
        <div><span class="text-[11px] uppercase tracking-wider text-primary font-bold">Lantai ${room.floor}</span><h3 class="text-lg font-bold text-on-surface">Kamar ${room.number}</h3><p class="text-xs text-secondary">${room.type}</p></div>
        <span class="px-2.5 py-1 rounded-full text-[10px] font-bold ${statusClass}">${statusText}</span>
      </div>
      <div class="grid grid-cols-2 gap-2 text-xs text-secondary">
        <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-[16px] text-primary">wifi</span>Wi-Fi</span>
        <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-[16px] text-primary">${room.floor === 2 ? 'ac_unit' : 'light_mode'}</span>${room.floor === 2 ? 'AC' : 'Non-AC'}</span>
        <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-[16px] text-primary">security</span>Akses aman</span>
        <span class="flex items-center gap-1.5"><span class="material-symbols-outlined text-[16px] text-primary">cleaning_services</span>Bersih rutin</span>
      </div>
      <div class="pt-3 border-t border-slate-100 flex items-end justify-between gap-3"><div><span class="text-[10px] text-secondary block">Mulai dari</span><strong class="text-base text-on-surface">Rp ${room.price.toLocaleString('id-ID')}</strong><span class="text-[10px] text-secondary"> / bulan</span></div><div class="text-right">${action}</div></div>
    </article>`;
  }).join('');
}

function logout() {
  appState.user = null;
  saveState();
  showToast('Anda telah keluar dari akun.', 'info');
  navigateTo('marketplace');
}

/**
 * Copy to clipboard with toast
 */
function copyText(text, label = 'Teks') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label} disalin ke clipboard!`, 'success');
    }).catch(() => {
      fallbackCopy(text, label);
    });
  } else {
    fallbackCopy(text, label);
  }
}

function fallbackCopy(text, label) {
  const input = document.createElement('textarea');
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  showToast(`${label} disalin ke clipboard!`, 'success');
}

/**
 * Toggle Digital PIN visibility
 */
function togglePinVisibility() {
  appState.pinVisible = !appState.pinVisible;
  saveState();
  renderRoomDetails();
}

/**
 * QRIS Countdown Timer
 */
let qrisInterval = null;
function startQRISTimer() {
  if (qrisInterval) clearInterval(qrisInterval);

  qrisInterval = setInterval(() => {
    if (appState.qrisSecondsLeft > 0) {
      appState.qrisSecondsLeft--;
      updateQRISTimerDisplay();
    } else {
      const el = document.getElementById('qris-countdown');
      if (el) el.textContent = 'Kedaluwarsa (Muat Ulang)';
    }
  }, 1000);
}

function updateQRISTimerDisplay() {
  const mins = Math.floor(appState.qrisSecondsLeft / 60);
  const secs = appState.qrisSecondsLeft % 60;
  const str = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')} Menit`;

  const el = document.getElementById('qris-countdown');
  if (el) el.textContent = str;
  const elModal = document.getElementById('modal-qris-countdown');
  if (elModal) elModal.textContent = str;
}

/**
 * Simulate Payment via QRIS (Instant Success)
 */
function simulateQRISPaymentSuccess() {
  const room = getActiveTenantRoom();
  if (room.paymentStatus === 'lunas') {
    showToast(`Tagihan Kamar ${room.number} untuk periode ini sudah lunas!`, 'info');
    return;
  }

  room.paymentStatus = 'lunas';
  room.paymentMethod = 'QRIS Dinamis BI';

  if (room.number === '09') {
    appState.tenantInvoice.status = 'lunas';
    appState.tenantInvoice.paidAt = 'Hari ini ' + new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB';
    appState.tenantInvoice.paymentMethod = 'QRIS Dinamis BI';
  }

  // Prepend to history if not already there
  const invId = `INV-202610-KM${room.number}`;
  const exists = appState.paymentHistory.find(h => h.id === invId);
  if (!exists) {
    appState.paymentHistory.unshift({
      id: invId,
      month: 'Oktober 2026',
      date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
      method: 'QRIS Dinamis BI',
      amount: room.price,
      status: 'lunas'
    });
  }

  saveState();
  closeModal('modal-qris-fullscreen');
  renderAll();

  showToast(`Pembayaran QRIS Rp ${room.price.toLocaleString('id-ID')} (Kamar ${room.number}) BERHASIL & Kuitansi Terbit!`, 'success');
}

/**
 * Handle Manual Transfer Submission
 */
function handleManualTransferSubmit(e) {
  e.preventDefault();
  const room = getActiveTenantRoom();
  const senderName = document.getElementById('transfer-sender-name').value || room.tenant || 'Dimas Arya';

  room.paymentStatus = 'pending';
  room.paymentMethod = 'Transfer Manual';

  if (room.number === '09') {
    appState.tenantInvoice.status = 'verifikasi';
    appState.tenantInvoice.paymentMethod = 'Transfer BCA (Manual)';
  }

  saveState();
  closeModal('manual-upload-modal');
  renderAll();

  showToast(`Bukti transfer atas nama ${senderName} (Kamar ${room.number}) berhasil dikirim! Menunggu verifikasi admin.`, 'success');
}

/**
 * Verify Payment from Admin Table
 */
function verifyPaymentAdmin(roomNumber) {
  const room = appState.rooms.find(r => r.number === roomNumber);
  if (!room) return;

  room.paymentStatus = 'lunas';
  room.paymentMethod = room.paymentMethod || 'Transfer BCA';

  if (roomNumber === '09') {
    appState.tenantInvoice.status = 'lunas';
    appState.tenantInvoice.paidAt = 'Diverifikasi Admin';
    appState.tenantInvoice.paymentMethod = 'Transfer BCA (Diverifikasi)';
  }

  // Add to history if not exists
  const invId = `INV-202610-KM${room.number}`;
  const exists = appState.paymentHistory.find(h => h.id === invId);
  if (!exists) {
    appState.paymentHistory.unshift({
      id: invId,
      month: 'Oktober 2026',
      date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
      method: 'Transfer BCA (Diverifikasi)',
      amount: room.price,
      status: 'lunas'
    });
  }

  saveState();
  renderAll();
  showToast(`Pembayaran ${room.tenant} (Kamar ${room.number}) berhasil diverifikasi LUNAS!`, 'success');
}

/**
 * Handle Create New Maintenance Ticket
 */
function handleCreateTicketSubmit(e) {
  e.preventDefault();
  const category = document.getElementById('ticket-category').value;
  const desc = document.getElementById('ticket-desc').value;
  const permitEls = document.getElementsByName('access-permission');
  let permit = 'Boleh masuk jika saya tidak di kamar (didampingi Penjaga)';
  for (const r of permitEls) {
    if (r.checked) {
      permit = r.parentElement.textContent.trim();
      break;
    }
  }

  const room = getActiveTenantRoom();
  const nextNumber = 107 + Math.floor(Math.random() * 90);
  const newTicket = {
    id: `TKT-${nextNumber}`,
    room: room.number,
    tenant: (appState.user && appState.user.name) || room.tenant || 'Penghuni',
    title: `${category.split('/')[0].trim()} — Gangguan Kamar ${room.number}`,
    desc: desc,
    category: category,
    status: 'Sedang Ditangani',
    priority: 'MEDIUM',
    date: 'Hari ini',
    timeEstimate: 'Respon teknisi dalam 30 menit',
    permit: permit,
    rating: null
  };

  appState.tickets.unshift(newTicket);
  room.hasActiveTicket = true;
  saveState();

  closeModal('quick-report-modal');
  document.getElementById('ticket-desc').value = '';
  renderAll();

  showToast(`Tiket #${newTicket.id} berhasil dikirim ke tim operasional!`, 'success');
}

/**
 * Update Ticket Status (Admin)
 */
function updateTicketStatus(ticketId) {
  const t = appState.tickets.find(item => item.id === ticketId);
  if (!t) return;

  if (t.status === 'Sedang Ditangani') {
    t.status = 'Selesai';
    t.rating = '5.0 (Puas)';
    showToast(`Tiket #${ticketId} ditandai sebagai Selesai!`, 'success');
  } else if (t.status === 'Tunggu Suku Cadang') {
    t.status = 'Sedang Ditangani';
    showToast(`Tiket #${ticketId} status diubah ke Sedang Ditangani!`, 'info');
  } else {
    t.status = 'Sedang Ditangani';
    showToast(`Tiket #${ticketId} dibuka kembali untuk tindak lanjut.`, 'info');
  }

  saveState();
  renderAll();
}

/**
 * =================================================================
 * TENANT INTERACTIVE FUNCTIONS
 * =================================================================
 */

/**
 * 1. PERPANJANGAN SEWA (RENEW CONTRACT)
 */
function updateRenewCalculation() {
  const room = getActiveTenantRoom();
  const monthsSelect = document.getElementById('renew-months-select');
  if (!monthsSelect) return;

  const months = parseInt(monthsSelect.value, 10) || 1;
  const monthlyRate = room.price;
  let discountRate = 0;
  let bonusText = 'Termasuk Wi-Fi & Kebersihan';

  if (months === 3) {
    discountRate = 0.05; // 5%
    bonusText = 'Diskon 5% Hemat Biaya Sewa';
  } else if (months === 6) {
    discountRate = 0.10; // 10%
    bonusText = 'Diskon 10% + Bonus 1x Laundry 5Kg';
  } else if (months === 12) {
    discountRate = 0.15; // 15%
    bonusText = 'Diskon 15% + Gratis 1x Deep Clean Kamar';
  }

  const rawTotal = monthlyRate * months;
  const discountAmount = rawTotal * discountRate;
  const grandTotal = rawTotal - discountAmount;

  const elSubtotal = document.getElementById('renew-subtotal');
  const elDiscount = document.getElementById('renew-discount');
  const elTotal = document.getElementById('renew-grandtotal');
  const elBonus = document.getElementById('renew-bonus');

  if (elSubtotal) elSubtotal.textContent = `Rp ${rawTotal.toLocaleString('id-ID')}`;
  if (elDiscount) elDiscount.textContent = discountAmount > 0 ? `-Rp ${discountAmount.toLocaleString('id-ID')} (${discountRate * 100}%)` : 'Rp 0';
  if (elTotal) elTotal.textContent = `Rp ${grandTotal.toLocaleString('id-ID')}`;
  if (elBonus) elBonus.textContent = bonusText;
}

function handleRenewContractSubmit(e) {
  e.preventDefault();
  const room = getActiveTenantRoom();
  const monthsSelect = document.getElementById('renew-months-select');
  const methodSelect = document.getElementById('renew-payment-method');
  const months = parseInt(monthsSelect ? monthsSelect.value : '3', 10);
  const method = methodSelect ? methodSelect.value : 'QRIS Dinamis';

  // Calculate new end date
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  let currentEndDate = new Date(2026, 11, 31); // 31 Des 2026 default
  if (room.rentEnd) {
    const parts = room.rentEnd.split(' ');
    if (parts.length === 3) {
      const d = parseInt(parts[0], 10);
      const m = monthNames.indexOf(parts[1]);
      const y = parseInt(parts[2], 10);
      if (!isNaN(d) && m !== -1 && !isNaN(y)) {
        currentEndDate = new Date(y, m, d);
      }
    }
  }

  currentEndDate.setMonth(currentEndDate.getMonth() + months);
  const newEndFormatted = `${currentEndDate.getDate()} ${monthNames[currentEndDate.getMonth()]} ${currentEndDate.getFullYear()}`;

  room.rentEnd = newEndFormatted;

  // Add transaction to history
  const monthlyRate = room.price;
  const discount = months === 12 ? 0.15 : (months === 6 ? 0.10 : (months === 3 ? 0.05 : 0));
  const totalPaid = (monthlyRate * months) * (1 - discount);

  appState.paymentHistory.unshift({
    id: `INV-RNW-KM${room.number}-${Date.now().toString().slice(-4)}`,
    month: `Perpanjangan ${months} Bulan (${newEndFormatted})`,
    date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
    method: method,
    amount: totalPaid,
    status: 'lunas'
  });

  saveState();
  closeModal('modal-perpanjang-sewa');
  renderAll();

  showToast(`Selamat! Masa sewa Kamar ${room.number} berhasil diperpanjang ${months} bulan hingga ${newEndFormatted}!`, 'success');
}

/**
 * 2. BELI & ISI TOKEN LISTRIK PLN PRABAYAR
 */
let lastGeneratedPlnToken = '';

function updateElectricTokenAmount() {
  const nominalSelect = document.getElementById('electric-nominal-select');
  if (!nominalSelect) return;
  const val = parseInt(nominalSelect.value, 10);
  let kwh = 66.4;
  if (val === 50000) kwh = 33.2;
  else if (val === 100000) kwh = 66.4;
  else if (val === 200000) kwh = 133.0;
  else if (val === 500000) kwh = 335.0;

  const kwhBadge = document.getElementById('electric-kwh-gain-badge');
  if (kwhBadge) {
    kwhBadge.textContent = `+${kwh} kWh Tambahan Kuota`;
  }
}

function handleBuyElectricTokenSubmit(e) {
  e.preventDefault();
  const room = getActiveTenantRoom();
  const nominalSelect = document.getElementById('electric-nominal-select');
  const amount = parseInt(nominalSelect ? nominalSelect.value : '100000', 10);

  let kwh = 66.4;
  if (amount === 50000) kwh = 33.2;
  else if (amount === 100000) kwh = 66.4;
  else if (amount === 200000) kwh = 133.0;
  else if (amount === 500000) kwh = 335.0;

  // Generate 20-digit token: 5 groups of 4 numbers
  const blocks = [];
  for (let i = 0; i < 5; i++) {
    blocks.push(String(Math.floor(1000 + Math.random() * 9000)));
  }
  const tokenString = blocks.join('-');
  lastGeneratedPlnToken = tokenString;

  // Update room electric balance
  room.electricityKwh = parseFloat(((room.electricityKwh || 48.5) + kwh).toFixed(1));

  // Record into history
  appState.electricTokensHistory.unshift({
    id: `PLN-${Date.now().toString().slice(-4)}`,
    room: room.number,
    date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
    amount: amount,
    kwh: kwh,
    tokenNumber: tokenString
  });

  saveState();

  // Show result card in modal
  const formEl = document.getElementById('electric-purchase-form');
  const resultEl = document.getElementById('electric-purchase-result');
  const tokenDisplayEl = document.getElementById('electric-result-token-display');
  const kwhGainDisplayEl = document.getElementById('electric-result-kwh-gain');

  if (formEl) formEl.classList.add('hidden');
  if (resultEl) resultEl.classList.remove('hidden');
  if (tokenDisplayEl) tokenDisplayEl.textContent = tokenString;
  if (kwhGainDisplayEl) kwhGainDisplayEl.textContent = `+${kwh} kWh`;

  renderTenantHeaderAndHero();
  renderTenantElectricityHistory();

  showToast(`Token PLN Rp ${amount.toLocaleString('id-ID')} terbit! Saldo bertambah +${kwh} kWh.`, 'success');
}

function resetElectricTokenModal() {
  const formEl = document.getElementById('electric-purchase-form');
  const resultEl = document.getElementById('electric-purchase-result');
  if (formEl) formEl.classList.remove('hidden');
  if (resultEl) resultEl.classList.add('hidden');
  closeModal('modal-beli-token-listrik');
}

/**
 * 3. GANTI / UBAH PIN DIGITAL PINTU KAMAR
 */
function handleUpdatePinSubmit(e) {
  e.preventDefault();
  const room = getActiveTenantRoom();
  const currentInput = document.getElementById('pin-current');
  const newInput = document.getElementById('pin-new');
  const confirmInput = document.getElementById('pin-confirm');

  const curVal = currentInput.value.trim();
  const newVal = newInput.value.trim();
  const confVal = confirmInput.value.trim();

  if (curVal !== room.pin) {
    showToast('PIN lama yang Anda masukkan tidak sesuai!', 'error');
    return;
  }

  if (!/^\d{6}$/.test(newVal)) {
    showToast('PIN baru harus terdiri dari 6 angka!', 'warning');
    return;
  }

  if (newVal !== confVal) {
    showToast('Konfirmasi PIN baru tidak cocok!', 'warning');
    return;
  }

  room.pin = newVal;
  saveState();

  currentInput.value = '';
  newInput.value = '';
  confirmInput.value = '';

  closeModal('modal-ganti-pin');
  renderRoomDetails();

  showToast(`PIN Kunci Digital Kamar ${room.number} berhasil diubah ke: ${newVal}`, 'success');
}

/**
 * 4. PEMESANAN LAYANAN TAMBAHAN (LAUNDRY, HOUSEKEEPING, GALON)
 */
function openServiceModal(serviceType = 'Laundry Kiloan') {
  const typeSelect = document.getElementById('service-type-select');
  if (typeSelect) {
    typeSelect.value = serviceType;
    onServiceTypeChange();
  }
  openModal('modal-pesan-layanan');
}

function onServiceTypeChange() {
  const typeSelect = document.getElementById('service-type-select');
  const variantSelect = document.getElementById('service-variant-select');
  const priceDisplay = document.getElementById('service-price-display');
  if (!typeSelect || !variantSelect || !priceDisplay) return;

  const type = typeSelect.value;
  variantSelect.innerHTML = '';

  if (type === 'Laundry Kiloan') {
    variantSelect.innerHTML = `
      <option value="Regular 3 Kg|24000">Regular Cuci + Setrika 3 Kg (Rp 24.000)</option>
      <option value="Regular 5 Kg|40000" selected>Regular Cuci + Setrika 5 Kg (Rp 40.000)</option>
      <option value="Express 1 Hari 3 Kg|36000">Express Kilat 1 Hari 3 Kg (Rp 36.000)</option>
      <option value="Bedcover / Selimut|25000">Cuci Bersih Bedcover / Selimut (Rp 25.000)</option>
    `;
    priceDisplay.textContent = 'Rp 40.000';
  } else if (type === 'Housekeeping & Clean') {
    variantSelect.innerHTML = `
      <option value="Bersih Kamar Harian|20000">Sapu Pel &amp; Buang Sampah Kamar (Rp 20.000)</option>
      <option value="Deep Clean & Kamar Mandi|35000" selected>Deep Clean Kamar Mandi &amp; Lantai (Rp 35.000)</option>
      <option value="Ganti Sprei & Cuci Bersih|25000">Ganti Sprei Bersih &amp; Rapikan Kasur (Rp 25.000)</option>
    `;
    priceDisplay.textContent = 'Rp 35.000';
  } else if (type === 'Pesan Galon Aqua') {
    variantSelect.innerHTML = `
      <option value="Aqua Galon 19L Asli|20000" selected>Aqua Galon Asli 19 Liter (Rp 20.000)</option>
      <option value="Gas Elpiji 3 Kg|24000">Gas Elpiji 3 Kg Kompor Dapur (Rp 24.000)</option>
    `;
    priceDisplay.textContent = 'Rp 20.000';
  }
}

function onServiceVariantChange() {
  const variantSelect = document.getElementById('service-variant-select');
  const priceDisplay = document.getElementById('service-price-display');
  if (!variantSelect || !priceDisplay) return;

  const parts = variantSelect.value.split('|');
  if (parts.length === 2) {
    const p = parseInt(parts[1], 10);
    priceDisplay.textContent = `Rp ${p.toLocaleString('id-ID')}`;
  }
}

function handleOrderServiceSubmit(e) {
  e.preventDefault();
  const room = getActiveTenantRoom();
  const typeSelect = document.getElementById('service-type-select');
  const variantSelect = document.getElementById('service-variant-select');
  const notesInput = document.getElementById('service-notes-input');

  const type = typeSelect ? typeSelect.value : 'Laundry Kiloan';
  const variantParts = variantSelect ? variantSelect.value.split('|') : ['Paket Pilihan', '30000'];
  const variantTitle = variantParts[0];
  const price = parseInt(variantParts[1] || '25000', 10);
  const notes = notesInput ? notesInput.value.trim() : '';

  const newService = {
    id: `SRV-${100 + Math.floor(Math.random() * 900)}`,
    room: room.number,
    tenant: (appState.user && appState.user.name) || room.tenant || 'Penghuni',
    type: type,
    detail: `${variantTitle}${notes ? ' (' + notes + ')' : ''}`,
    price: price,
    status: 'Sedang Diproses',
    date: 'Hari ini ' + new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB',
    confirmationStatus: 'Menunggu Konfirmasi',
    confirmationChannel: 'WhatsApp Admin'
  };

  appState.services.unshift(newService);
  saveState();

  closeModal('modal-pesan-layanan');
  if (notesInput) notesInput.value = '';
  renderTenantServices();

  showToast(`Pesanan ${type} (${variantTitle}) diterima! Staf pengelola segera memproses.`, 'success');
}

/**
 * 5. LAPOR IZIN TAMU MENGINAP
 */
function handleGuestPermitSubmit(e) {
  e.preventDefault();
  const room = getActiveTenantRoom();
  const nameInput = document.getElementById('guest-name-input');
  const phoneInput = document.getElementById('guest-phone-input');
  const relSelect = document.getElementById('guest-relation-select');
  const checkInInput = document.getElementById('guest-checkin-input');
  const checkOutInput = document.getElementById('guest-checkout-input');

  const guestName = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const rel = relSelect.value;
  const cin = checkInInput.value;
  const cout = checkOutInput.value;

  const newPermit = {
    id: `GST-${100 + Math.floor(Math.random() * 900)}`,
    room: room.number,
    tenant: (appState.user && appState.user.name) || room.tenant || 'Penghuni',
    guestName: guestName,
    phone: phone,
    relationship: rel,
    checkIn: cin || 'Malam ini',
    checkOut: cout || 'Besok siang',
    status: 'Disetujui'
  };

  appState.guestPermits.unshift(newPermit);
  saveState();

  closeModal('modal-izin-tamu');
  nameInput.value = '';
  phoneInput.value = '';
  renderTenantGuestPermits();

  showToast(`Izin menginap tamu (${guestName}) telah diterbitkan & tercatat di sistem pengelola kos!`, 'success');
}

/**
 * 6. RATING & ULASAN TIKET MAINTENANCE
 */
let currentRatingTicketId = null;

function openRateTicketModal(ticketId) {
  currentRatingTicketId = ticketId;
  const idDisplay = document.getElementById('rating-ticket-id-display');
  if (idDisplay) idDisplay.textContent = `#${ticketId}`;
  openModal('modal-rating-tiket');
}

function handleRateTicketSubmit(e) {
  e.preventDefault();
  if (!currentRatingTicketId) return;

  const t = appState.tickets.find(item => item.id === currentRatingTicketId);
  if (!t) return;

  const scoreSelect = document.getElementById('rating-score-select');
  const commentInput = document.getElementById('rating-comment-input');

  const score = scoreSelect ? scoreSelect.value : '5.0';
  const comment = commentInput ? commentInput.value.trim() : '';

  t.rating = `${score} (Puas)`;
  if (comment) {
    t.review = comment;
  }

  saveState();
  closeModal('modal-rating-tiket');
  if (commentInput) commentInput.value = '';
  renderTenantTickets();

  showToast(`Terima kasih! Ulasan bintang ${score} berhasil dikirim untuk tiket #${currentRatingTicketId}.`, 'success');
}

/**
 * 7. EDIT PROFIL PENGHUNI & DATA KENDARAAN
 */
function openEditProfileModal() {
  const room = getActiveTenantRoom();
  const phoneInput = document.getElementById('profile-phone-input');
  const plateInput = document.getElementById('profile-plate-input');
  const emergNameInput = document.getElementById('profile-emerg-name-input');
  const emergPhoneInput = document.getElementById('profile-emerg-phone-input');

  if (phoneInput) phoneInput.value = room.phone || '081234567890';
  if (plateInput) plateInput.value = room.vehiclePlate || 'L 4529 ABC (Honda Vario)';
  if (emergNameInput) emergNameInput.value = (room.emergencyContact && room.emergencyContact.name) || 'Ibu Ratna';
  if (emergPhoneInput) emergPhoneInput.value = (room.emergencyContact && room.emergencyContact.phone) || '0812-9876-5432';

  openModal('modal-edit-profil-tenant');
}

function handleEditProfileSubmit(e) {
  e.preventDefault();
  const room = getActiveTenantRoom();
  const phoneInput = document.getElementById('profile-phone-input');
  const plateInput = document.getElementById('profile-plate-input');
  const emergNameInput = document.getElementById('profile-emerg-name-input');
  const emergPhoneInput = document.getElementById('profile-emerg-phone-input');

  if (phoneInput) room.phone = phoneInput.value.trim();
  if (plateInput) room.vehiclePlate = plateInput.value.trim();
  room.emergencyContact = {
    name: emergNameInput ? emergNameInput.value.trim() : 'Keluarga',
    phone: emergPhoneInput ? emergPhoneInput.value.trim() : '0812-9876-5432'
  };

  saveState();
  closeModal('modal-edit-profil-tenant');
  renderTenantHeaderAndHero();

  showToast('Profil penghuni dan data stiker parkir kendaraan berhasil diperbarui!', 'success');
}

/**
 * 8. SURAT PERJANJIAN SEWA DIGITAL (e-Contract PDF/Print)
 */
function openContractModal() {
  const room = getActiveTenantRoom();
  const tenantName = (appState.user && appState.user.name) || room.tenant || 'Dimas Arya';

  const elNo = document.getElementById('contract-no');
  const elDate = document.getElementById('contract-date');
  const elTenant = document.getElementById('contract-tenant');
  const elPhone = document.getElementById('contract-phone');
  const elRoom = document.getElementById('contract-room');
  const elType = document.getElementById('contract-type');
  const elPrice = document.getElementById('contract-price');
  const elPeriod = document.getElementById('contract-period');
  const elDeposit = document.getElementById('contract-deposit');
  const elSignTenant = document.getElementById('contract-sign-tenant');

  if (elNo) elNo.textContent = `KTR-2026-KM${room.number}`;
  if (elDate) elDate.textContent = '01 Januari 2026';
  if (elTenant) elTenant.textContent = tenantName;
  if (elPhone) elPhone.textContent = room.phone || '0812-3456-7890';
  if (elRoom) elRoom.textContent = `Kamar ${room.number} (Lantai ${room.floor})`;
  if (elType) elType.textContent = room.type;
  if (elPrice) elPrice.textContent = `Rp ${room.price.toLocaleString('id-ID')} / bulan`;
  if (elPeriod) elPeriod.textContent = `${room.contractStart || '01 Jan 2026'} s/d ${room.rentEnd || '31 Des 2026'}`;
  if (elDeposit) elDeposit.textContent = `Rp ${(room.deposit || room.price).toLocaleString('id-ID')}`;
  if (elSignTenant) elSignTenant.textContent = tenantName;

  openModal('modal-kontrak-sewa');
}

/**
 * Open Renew Contract Modal - with current data pre-filled
 */
function openRenewModal() {
  const room = getActiveTenantRoom();

  // Update displayed current contract info in modal
  const contractInfoEl = document.querySelector('#modal-perpanjang-sewa .p-3.rounded-xl.bg-surface-container-low');
  if (contractInfoEl) {
    contractInfoEl.innerHTML = `
      <span class="font-bold text-secondary uppercase tracking-wider text-[10px]">Kontrak Saat Ini</span>
      <div class="flex justify-between items-center mt-1">
        <span class="text-secondary">Masa Berlaku</span>
        <span class="font-bold text-on-surface">s/d ${room.rentEnd || '31 Desember 2026'}</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-secondary">Tarif Bulanan</span>
        <span class="font-bold text-primary">Rp ${room.price.toLocaleString('id-ID')} / bulan</span>
      </div>
    `;
  }

  // Reset calculation display
  updateRenewCalculation();
  openModal('modal-perpanjang-sewa');
}

/**
 * Open Buy Token Modal - update kwh display
 */
function openBuyTokenModal() {
  const room = getActiveTenantRoom();

  // Update meter info
  const meterEl = document.querySelector('#electric-purchase-form .p-3.rounded-xl.bg-emerald-subtle\\/60');
  if (meterEl) {
    meterEl.innerHTML = `
      <span class="material-symbols-outlined text-emerald-active text-[20px]">electric_meter</span>
      <div>
        <span class="font-bold text-on-surface block">No. Meter PLN: ${room.plnMeterNumber || '1428-9920-11' + room.number}</span>
        <span class="text-secondary">Kamar ${room.number} • Saldo Saat Ini: <strong id="electric-current-kwh" class="text-emerald-active">${room.electricityKwh || 48.5} kWh</strong></span>
      </div>
    `;
  }

  // Reset form to visible state
  const formEl = document.getElementById('electric-purchase-form');
  const resultEl = document.getElementById('electric-purchase-result');
  if (formEl) formEl.classList.remove('hidden');
  if (resultEl) resultEl.classList.add('hidden');

  // Update electricity history
  renderTenantElectricityHistory();

  openModal('modal-beli-token-listrik');
}

/**
 * Room Click in Matrix (Admin modal management)
 */
let currentEditingRoom = null;
function openRoomModal(roomNumber) {
  const room = appState.rooms.find(r => r.number === roomNumber);
  if (!room) return;

  currentEditingRoom = room;

  document.getElementById('modal-room-num').textContent = room.number;
  document.getElementById('modal-room-type').textContent = room.type;
  document.getElementById('modal-room-price').textContent = `Rp ${room.price.toLocaleString('id-ID')} / bulan`;
  document.getElementById('modal-room-status').value = room.status;
  document.getElementById('modal-room-tenant').value = room.tenant || '';
  document.getElementById('modal-room-phone').value = room.phone || '';
  document.getElementById('modal-room-payment').value = room.paymentStatus || 'lunas';

  openModal('modal-manage-room');
}

function saveRoomModal() {
  if (!currentEditingRoom) return;

  const newStatus = document.getElementById('modal-room-status').value;
  const newTenant = document.getElementById('modal-room-tenant').value.trim();
  const newPhone = document.getElementById('modal-room-phone').value.trim();
  const newPayment = document.getElementById('modal-room-payment').value;

  currentEditingRoom.status = newStatus;
  currentEditingRoom.tenant = newStatus === 'tersedia' ? null : (newTenant || 'Penghuni');
  currentEditingRoom.phone = newStatus === 'tersedia' ? null : newPhone;
  currentEditingRoom.paymentStatus = newStatus === 'tersedia' ? null : newPayment;

  saveState();
  closeModal('modal-manage-room');
  renderAll();

  showToast(`Data Kamar ${currentEditingRoom.number} berhasil diperbarui!`, 'success');
}

/**
 * Record New Offline Transaction (Admin)
 */
function handleAddTransactionSubmit(e) {
  e.preventDefault();
  const roomNum = document.getElementById('admin-tx-room').value;
  const amount = parseInt(document.getElementById('admin-tx-amount').value, 10) || 0;
  const method = document.getElementById('admin-tx-method').value;

  const room = appState.rooms.find(r => r.number === roomNum);
  if (room) {
    room.paymentStatus = 'lunas';
    room.paymentMethod = method;

    const invId = `INV-202610-KM${room.number}`;
    const exists = appState.paymentHistory.find(item => item.id === invId);
    if (!exists) {
      appState.paymentHistory.unshift({
        id: invId,
        room: room.number,
        roomType: room.type,
        tenant: room.tenant || '-',
        month: 'Oktober 2026',
        date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
        method,
        amount,
        status: 'lunas'
      });
    }
  }

  saveState();
  closeModal('modal-add-transaction');
  renderAll();

  showToast(`Transaksi Rp ${amount.toLocaleString('id-ID')} untuk Kamar ${roomNum} dicatat!`, 'success');
}

/**
 * Open Digital Receipt Modal
 */
function openKuitansiModal(invoiceId) {
  const room = getActiveTenantRoom();
  let inv = appState.paymentHistory.find(h => h.id === invoiceId);
  if (!inv) {
    inv = {
      id: invoiceId || `INV-202610-KM${room.number}`,
      month: 'Oktober 2026',
      date: new Date().toLocaleDateString('id-ID'),
      method: room.paymentMethod || 'QRIS Dinamis BI',
      amount: room.price,
      status: 'lunas'
    };
  }

  const tenantName = (appState.user && appState.user.name) || room.tenant || 'Dimas Arya';

  document.getElementById('kuitansi-no').textContent = inv.id;
  document.getElementById('kuitansi-date').textContent = inv.date || new Date().toLocaleDateString('id-ID');
  document.getElementById('kuitansi-tenant').textContent = tenantName;
  document.getElementById('kuitansi-room').textContent = `Kamar ${room.number} • ${room.type}`;
  document.getElementById('kuitansi-period').textContent = inv.month || inv.period || 'Oktober 2026';
  document.getElementById('kuitansi-amount').textContent = `Rp ${(inv.amount || room.price).toLocaleString('id-ID')}`;
  document.getElementById('kuitansi-method').textContent = inv.method || 'QRIS Dinamis BI';

  openModal('modal-kuitansi');
}

/**
 * Download Financial CSV File
 */
function downloadFinancialCSV() {
  const headers = ['No', 'Nomor Invoice', 'Kamar', 'Tipe Unit', 'Nama Penghuni', 'Periode', 'Nominal (Rp)', 'Metode Bayar', 'Status Pembayaran', 'Tanggal'];

  const historyData = (appState.paymentHistory && appState.paymentHistory.length > 0)
    ? appState.paymentHistory
    : appState.rooms.filter(r => r.status === 'terisi').map((r, i) => ({
      id: `INV-202610-KM${r.number}`,
      room: r.number,
      roomType: r.type,
      tenant: r.tenant,
      month: 'Oktober 2026',
      amount: r.price,
      method: r.paymentMethod || 'QRIS Dinamis BI',
      status: r.paymentStatus || 'lunas',
      date: '18/09/2026'
    }));

  const rows = historyData.map((p, idx) => [
    idx + 1,
    `"${p.id || '-'}"`,
    `"Kamar ${p.room || '-'}"`,
    `"${p.roomType || '-'}"`,
    `"${p.tenant || '-'}"`,
    `"${p.month || p.period || '-'}"`,
    p.amount || 0,
    `"${p.method || '-'}"`,
    `"${(p.status || 'lunas').toUpperCase()}"`,
    `"${p.date || '-'}"`
  ]);

  const csvString = [headers.join(','), ...rows.map(e => e.join(','))].join('\r\n');
  const blob = new Blob(['\uFEFF' + csvString], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Laporan_Keuangan_TheKos_Surabaya_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  closeModal('modal-unduh-rekap');
  showToast('File CSV Laporan Keuangan berhasil diunduh!', 'success');
}

/**
 * Import room and payment data from the first sheet of an Excel/CSV file.
 */
function handleExcelImportSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('excel-import-file');
  const file = input && input.files ? input.files[0] : null;
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      if (typeof XLSX === 'undefined') {
        throw new Error('Library Excel belum tersedia. Periksa koneksi internet.');
      }

      const workbook = XLSX.read(event.target.result, { type: 'array', cellDates: true });
      const rows = workbook.SheetNames.flatMap(sheetName => {
        const sheet = workbook.Sheets[sheetName];
        return XLSX.utils.sheet_to_json(sheet, { defval: '' });
      });
      const importResult = importSpreadsheetRows(rows);

      if (importResult.rooms === 0 && importResult.accounts === 0) {
        throw new Error('Tidak ada data kamar atau akun dengan kredensial yang dapat digunakan.');
      }

      saveState();
      closeModal('modal-import-excel');
      closeModal('modal-unduh-rekap');
      renderAll();
      showToast(`${importResult.rooms} kamar dan ${importResult.accounts} akun dari ${file.name} berhasil diimpor.`, 'success');
      if (input) input.value = '';
    } catch (error) {
      showToast(error.message || 'File Excel tidak dapat dibaca.', 'error');
    }
  };
  reader.onerror = () => showToast('File Excel tidak dapat dibaca.', 'error');
  reader.readAsArrayBuffer(file);
}

function normalizeSpreadsheetKey(value) {
  return String(value || '').toLowerCase().replace(/[\s_./-]+/g, '');
}

function spreadsheetValue(row, names) {
  const wanted = names.map(normalizeSpreadsheetKey);
  const key = Object.keys(row).find(key => wanted.includes(normalizeSpreadsheetKey(key)));
  return key ? row[key] : '';
}

function normalizeRoomNumber(value) {
  const match = String(value || '').match(/\d{1,2}/);
  return match ? match[0].padStart(2, '0') : '';
}

function normalizeRoomStatus(value, tenant) {
  const status = normalizeSpreadsheetKey(value);
  if (status.includes('maintenance') || status.includes('perbaikan')) return 'maintenance';
  if (status.includes('tersedia') || status.includes('kosong') || status.includes('available')) return 'tersedia';
  return tenant ? 'terisi' : 'tersedia';
}

function normalizePaymentStatus(value) {
  const status = normalizeSpreadsheetKey(value);
  return status.includes('lunas') || status.includes('paid') || status.includes('terbayar') ? 'lunas' : 'pending';
}

function importSpreadsheetRows(rows) {
  let importedRooms = 0;
  let importedAccounts = 0;

  rows.forEach(row => {
    const number = normalizeRoomNumber(spreadsheetValue(row, ['Nomor Kamar', 'Kamar', 'Room', 'No Kamar', 'No']));
    const tenant = String(spreadsheetValue(row, ['Nama Penghuni', 'Penghuni', 'Tenant', 'Nama']) || '').trim();
    const serviceType = String(spreadsheetValue(row, ['Layanan', 'Jenis Layanan', 'Service', 'Service Type']) || '').trim();
    const serviceDetail = String(spreadsheetValue(row, ['Detail Layanan', 'Detail Service', 'Rincian Layanan']) || '').trim();
    const servicePrice = Number(String(spreadsheetValue(row, ['Harga Layanan', 'Service Price', 'Biaya Layanan']) || '').replace(/[^\d]/g, ''));
    const serviceStatus = String(spreadsheetValue(row, ['Status Layanan', 'Service Status']) || 'Menunggu Konfirmasi').trim();
    const confirmationChannel = String(spreadsheetValue(row, ['Konfirmasi Via', 'Confirmation Via', 'Via']) || 'WhatsApp Admin').trim();
    const vendorPhone = String(spreadsheetValue(row, ['Nomor WA Pihak Ketiga', 'WA Vendor', 'Vendor Phone']) || '').trim();
    const roleValue = normalizeSpreadsheetKey(spreadsheetValue(row, ['Role', 'Peran', 'Jenis Akun', 'Tipe Akun']));
    const email = String(spreadsheetValue(row, ['Email', 'Email Login', 'E-mail']) || '').trim();
    const username = String(spreadsheetValue(row, ['Username', 'User', 'Nama Pengguna', 'ID Pengguna', 'ID Staf']) || '').trim();
    const importedPhone = String(spreadsheetValue(row, ['Nomor Telepon', 'Telepon', 'No Telepon', 'Phone', 'WhatsApp', 'No HP']) || '').trim();
    const password = String(spreadsheetValue(row, ['Password', 'Kata Sandi', 'Sandi', 'PIN Login', 'PIN']) || '').trim();
    const accountName = String(spreadsheetValue(row, ['Nama Lengkap', 'Nama Admin', 'Nama Pengguna', 'Nama']) || tenant).trim();
    const title = String(spreadsheetValue(row, ['Jabatan', 'Title', 'Posisi']) || '').trim();
    const role = roleValue.includes('admin') || roleValue.includes('pengelola') || roleValue.includes('staff')
      ? 'admin'
      : (number ? 'tenant' : '');

    if (role && /^[a-zA-Z0-9]{8}$/.test(password) && (role === 'admin' ? (email || username) : importedPhone)) {
      const account = {
        role,
        email: email || null,
        username: username || email,
        phone: importedPhone || null,
        password,
        name: accountName || username || email,
        title: title || (role === 'admin' ? 'Admin Operasional' : 'Penghuni'),
        room: role === 'tenant' ? number : null
      };
      appState.authAccounts = (appState.authAccounts || []).filter(existing => {
        const sameRole = existing.role === account.role;
        const sameIdentity = [existing.email, existing.username].filter(Boolean).some(identity =>
          [account.email, account.username].filter(Boolean).includes(identity)
        );
        return !(sameRole && sameIdentity);
      });
      appState.authAccounts.push(account);
      importedAccounts++;
    }

    if (!number) return;

    const room = appState.rooms.find(item => item.number === number) || {
      number,
      floor: Number(number) <= 8 ? 1 : 2,
      type: Number(number) <= 8 ? 'Standard (Non-AC)' : 'Premium AC & KM Dalam',
      price: Number(number) <= 8 ? 750000 : 1250000,
      pin: '123456',
      wifiSsid: `thekos_km${number}`,
      wifiPass: `thekos_km${number}`
    };

    const price = Number(String(spreadsheetValue(row, ['Harga', 'Harga Sewa', 'Price', 'Nominal']) || '').replace(/[^\d]/g, ''));
    const phone = String(spreadsheetValue(row, ['Telepon', 'No Telepon', 'Phone', 'WhatsApp']) || '').trim();
    const statusValue = spreadsheetValue(row, ['Status Kamar', 'Status Room', 'Status']);
    const paymentValue = spreadsheetValue(row, ['Status Pembayaran', 'Pembayaran', 'Payment Status']);
    const method = String(spreadsheetValue(row, ['Metode Pembayaran', 'Metode', 'Payment Method']) || '').trim();
    const period = String(spreadsheetValue(row, ['Periode', 'Bulan', 'Month']) || 'Impor Excel').trim();
    const date = String(spreadsheetValue(row, ['Tanggal', 'Date']) || new Date().toLocaleDateString('id-ID')).trim();

    if (serviceType || serviceDetail) {
      appState.services.unshift({
        id: String(spreadsheetValue(row, ['ID Layanan', 'Service ID']) || `SRV-IMP-${Date.now().toString().slice(-6)}`),
        room: number || '-',
        tenant: tenant || '-',
        type: serviceType || 'Layanan Tambahan',
        detail: serviceDetail || serviceType,
        price: servicePrice || 0,
        status: serviceStatus,
        date,
        confirmationStatus: normalizeSpreadsheetKey(serviceStatus).includes('konfirmasi') && !normalizeSpreadsheetKey(serviceStatus).includes('menunggu') ? 'Dikonfirmasi' : 'Menunggu Konfirmasi',
        confirmationChannel,
        vendorPhone
      });
    }

    room.tenant = tenant || null;
    room.phone = phone || null;
    room.status = normalizeRoomStatus(statusValue, tenant);
    if (price > 0) room.price = price;
    room.paymentStatus = room.status === 'terisi' ? normalizePaymentStatus(paymentValue) : null;
    room.paymentMethod = method || room.paymentMethod || null;

    if (!appState.rooms.some(item => item.number === number)) appState.rooms.push(room);
    importedRooms++;

    if (tenant || price > 0 || method) {
      appState.paymentHistory.unshift({
        id: `IMP-${Date.now().toString().slice(-6)}-${number}-${importedRooms}`,
        room: number,
        roomType: room.type,
        tenant: tenant || room.tenant || '-',
        month: period,
        date,
        method: method || room.paymentMethod || '-',
        amount: price || room.price,
        status: room.paymentStatus || 'pending'
      });
    }
  });

  return { rooms: importedRooms, accounts: importedAccounts };
}

/**
 * Open Occupancy & Room Status Report Modal (PDF / Printable)
 */
function openOccupancyReportModal() {
  closeModal('modal-unduh-rekap');

  const now = new Date();
  const dateStr = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

  const elTimestamp = document.getElementById('rekap-print-timestamp');
  if (elTimestamp) elTimestamp.textContent = `${dateStr}, ${timeStr} WIB`;

  const total = appState.rooms.length;
  const occupied = appState.rooms.filter(r => r.status === 'terisi').length;
  const vacant = appState.rooms.filter(r => r.status === 'tersedia').length;
  const maint = appState.rooms.filter(r => r.status === 'maintenance' || r.status === 'perbaikan').length;

  const elOcc = document.getElementById('rekap-occupied-count');
  const elVac = document.getElementById('rekap-vacant-count');
  const elMaint = document.getElementById('rekap-maint-count');

  if (elOcc) elOcc.textContent = `${occupied} Kamar (${Math.round((occupied / total) * 100)}%)`;
  if (elVac) elVac.textContent = `${vacant} Kamar (${Math.round((vacant / total) * 100)}%)`;
  if (elMaint) elMaint.textContent = `${maint} Kamar (${Math.round((maint / total) * 100)}%)`;

  const tbody = document.getElementById('rekap-okupansi-tbody');
  if (tbody) {
    tbody.innerHTML = appState.rooms.map(r => {
      const statusClass = r.status === 'terisi'
        ? 'text-emerald-700 bg-emerald-50 border border-emerald-200'
        : (r.status === 'tersedia'
          ? 'text-blue-700 bg-blue-50 border border-blue-200'
          : 'text-amber-700 bg-amber-50 border border-amber-200');
      const statusLabel = r.status === 'terisi' ? 'Terisi' : (r.status === 'tersedia' ? 'Tersedia' : 'Perbaikan');

      return `
        <tr class="border-b border-slate-200">
          <td class="p-2 text-center font-mono font-bold">${r.number}</td>
          <td class="p-2">${r.type} (Lt. ${r.floor})</td>
          <td class="p-2 font-medium">${r.tenant || '<span class="text-slate-400 italic">-</span>'}</td>
          <td class="p-2 text-slate-600">${r.phone || '-'}</td>
          <td class="p-2 font-mono">Rp ${r.price.toLocaleString('id-ID')}</td>
          <td class="p-2">${r.rentEnd || '-'}</td>
          <td class="p-2 text-center">
            <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase ${statusClass}">${statusLabel}</span>
          </td>
        </tr>
      `;
    }).join('');
  }

  openModal('modal-rekap-okupansi');
}


/**
 * Modal Helpers
 */
function openModal(modalId) {
  const el = document.getElementById(modalId);
  if (el) {
    el.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const el = document.getElementById(modalId);
  if (el) {
    el.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

/**
 * Mobile Sidebar Drawer (Admin)
 */
function openAdminMobileSidebar() {
  const sidebar = document.getElementById('admin-sidebar');
  const backdrop = document.getElementById('admin-sidebar-backdrop');
  if (sidebar && backdrop) {
    sidebar.classList.remove('-translate-x-full');
    backdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeAdminMobileSidebar() {
  const sidebar = document.getElementById('admin-sidebar');
  const backdrop = document.getElementById('admin-sidebar-backdrop');
  if (sidebar && backdrop) {
    sidebar.classList.add('-translate-x-full');
    backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

/**
 * =================================================================
 * RENDER FUNCTIONS
 * =================================================================
 */

function renderAll() {
  renderTenantHeaderAndHero();
  renderTenantInvoice();
  renderRoomDetails();
  renderTenantTickets();
  renderTenantHistory();
  renderTenantServices();
  renderTenantGuestPermits();
  renderTenantElectricityHistory();
  renderAdminKPI();
  renderAdminRoomMatrix();
  renderAdminBillingTable();
  renderAdminTickets();
  renderAdminServices();
  updateQRISTimerDisplay();
}

function confirmServiceViaWhatsApp(serviceId, recipient = 'admin') {
  const service = (appState.services || []).find(item => item.id === serviceId);
  if (!service) return;

  service.confirmationStatus = 'Dikonfirmasi';
  service.confirmedVia = recipient === 'vendor' ? 'WhatsApp Pihak Ketiga' : 'WhatsApp Admin';
  service.confirmedAt = new Date().toLocaleString('id-ID');
  saveState();
  renderAll();

  const target = recipient === 'vendor' ? (service.vendorPhone || '081234567890') : '081234567890';
  const message = encodeURIComponent(
    `Konfirmasi layanan ${service.id} - Kamar ${service.room}. ` +
    `${service.type}: ${service.detail}. Status: ${service.confirmationStatus}.`
  );
  const whatsappNumber = target.replace(/\D/g, '').replace(/^0/, '').replace(/^62/, '');
  window.open(`https://wa.me/62${whatsappNumber}?text=${message}`, '_blank');
  showToast(`${service.id} dikonfirmasi melalui ${service.confirmedVia}.`, 'success');
}

function renderAdminServices() {
  const container = document.getElementById('admin-services-container');
  if (!container) return;

  const services = (appState.services || []).slice(0, 10);
  if (services.length === 0) {
    container.innerHTML = '<div class="p-4 text-center text-secondary text-xs bg-surface-container-low rounded-xl">Belum ada data layanan dari Excel.</div>';
    return;
  }

  container.innerHTML = services.map(service => {
    const confirmed = service.confirmationStatus === 'Dikonfirmasi';
    return `<div class="p-3 rounded-xl border border-slate-200 ${confirmed ? 'bg-emerald-subtle/50' : 'bg-amber-subtle/50'} flex flex-col gap-2">
      <div class="flex items-start justify-between gap-3"><div><span class="text-[10px] font-bold text-secondary">${service.id} • Kamar ${service.room}</span><strong class="block text-xs text-on-surface">${service.type}</strong><span class="text-[11px] text-secondary">${service.detail}</span></div><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${confirmed ? 'bg-emerald-active text-white' : 'bg-amber-pending text-white'}">${confirmed ? 'Dikonfirmasi' : 'Menunggu Konfirmasi'}</span></div>
      <div class="flex items-center justify-between gap-3"><span class="text-xs font-bold text-on-surface">Rp ${(service.price || 0).toLocaleString('id-ID')} <span class="text-[10px] text-secondary font-normal">• ${service.confirmedVia || service.confirmationChannel || 'Excel'}</span></span>${confirmed ? `<span class="text-[10px] text-emerald-active font-semibold">${service.confirmedAt || ''}</span>` : `<div class="flex gap-1.5"><button onclick="confirmServiceViaWhatsApp('${service.id}', 'admin')" class="px-2 py-1 rounded-lg bg-emerald-active text-white text-[10px] font-bold cursor-pointer"><span class="material-symbols-outlined text-[13px] align-middle">chat</span> Admin WA</button><button onclick="confirmServiceViaWhatsApp('${service.id}', 'vendor')" class="px-2 py-1 rounded-lg bg-blue-operational text-white text-[10px] font-bold cursor-pointer"><span class="material-symbols-outlined text-[13px] align-middle">support_agent</span> Pihak Ketiga</button></div>`}</div>
    </div>`;
  }).join('');
}

/**
 * Render Header and Welcome Banner dynamically
 */
function renderTenantHeaderAndHero() {
  const room = getActiveTenantRoom();
  const tenantName = (appState.user && appState.user.name) || room.tenant || 'Dimas Arya';
  const tenantInitials = tenantName.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || 'DA';

  // Header updates
  const elHeaderName = document.getElementById('tenant-header-name');
  const elHeaderRoom = document.getElementById('tenant-header-room');
  const elHeaderAvatar = document.getElementById('tenant-header-avatar');
  if (elHeaderName) elHeaderName.textContent = tenantName;
  if (elHeaderRoom) elHeaderRoom.textContent = `Kamar ${room.number} • ${room.floor === 1 ? 'Standard Non-AC' : 'Premium AC'}`;
  if (elHeaderAvatar) elHeaderAvatar.textContent = tenantInitials;

  // Welcome hero updates
  const elWelcomeName = document.getElementById('tenant-welcome-name');
  const elWelcomeDesc = document.getElementById('tenant-welcome-room-desc');
  if (elWelcomeName) elWelcomeName.textContent = `Selamat Datang, ${tenantName}! 👋`;
  if (elWelcomeDesc) {
    elWelcomeDesc.innerHTML = `
      <span class="material-symbols-outlined text-[18px] text-primary">apartment</span> 
      Penghuni Kamar ${room.number} (Lantai ${room.floor} — ${room.type}) • The Kos — Jl. Raya Kalirungkut, Surabaya (Dekat UBAYA)
    `;
  }

  // Contract strip updates
  const elContractEnd = document.getElementById('tenant-contract-end');
  const elContractRemaining = document.getElementById('tenant-contract-remaining');
  if (elContractEnd) elContractEnd.textContent = room.rentEnd || '31 Desember 2026';
  if (elContractRemaining) {
    elContractRemaining.textContent = `Masa Sewa Aktif (${room.rentEnd || '31 Des 2026'})`;
  }

  // Electricity strip updates
  const elElecKwh = document.getElementById('tenant-electricity-kwh');
  const elElecDesc = document.getElementById('tenant-electricity-desc');
  const kwh = room.electricityKwh !== undefined ? room.electricityKwh : 48.5;
  const daysEstimate = Math.max(1, Math.round(kwh / 4));
  if (elElecKwh) elElecKwh.textContent = `${kwh} kWh Tersisa`;
  if (elElecDesc) elElecDesc.textContent = `Meter: ${room.plnMeterNumber || ('1428-9920-11' + room.number)} • Aman ~${daysEstimate} hari`;

  // Dedicated Wi-Fi
  const elWifiSsid = document.getElementById('tenant-wifi-ssid');
  if (elWifiSsid) elWifiSsid.textContent = room.wifiSsid || `thekos_km${room.number}`;
}

/**
 * Render Tenant Invoice Card
 */
function renderTenantInvoice() {
  const room = getActiveTenantRoom();
  const isPaid = room.paymentStatus === 'lunas';
  const isPendingVerify = room.paymentStatus === 'pending' && room.paymentMethod === 'Transfer Manual';

  const statusBadge = document.getElementById('tenant-invoice-status-badge');
  const statusBanner = document.getElementById('tenant-invoice-status-banner');
  const qrisContainer = document.getElementById('tenant-qris-container');
  const actionContainer = document.getElementById('tenant-qris-actions');
  const invoiceNumEl = document.getElementById('tenant-invoice-number');
  const invoicePeriodEl = document.getElementById('tenant-invoice-period');
  const invoiceRoomTypeEl = document.getElementById('tenant-invoice-room-type');
  const invoiceAmountEl = document.getElementById('tenant-invoice-amount');
  const invoiceTotalEl = document.getElementById('tenant-invoice-total');

  if (invoiceNumEl) invoiceNumEl.textContent = `Nomor Invoice: INV-202610-KM${room.number}`;
  if (invoicePeriodEl) invoicePeriodEl.textContent = 'Oktober 2026';
  if (invoiceRoomTypeEl) invoiceRoomTypeEl.textContent = `Sewa Kamar ${room.number} (${room.floor === 1 ? 'Standard Non-AC' : 'Premium AC, KM Dalam'})`;
  if (invoiceAmountEl) invoiceAmountEl.textContent = `Rp ${room.price.toLocaleString('id-ID')}`;
  if (invoiceTotalEl) invoiceTotalEl.textContent = `Rp ${room.price.toLocaleString('id-ID')}`;

  if (!statusBadge) return;

  if (isPaid) {
    statusBadge.innerHTML = `
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-subtle text-emerald-active font-label-md font-bold">
        <span class="material-symbols-outlined text-[16px]">check_circle</span>
        Lunas Terverifikasi
      </span>
    `;

    if (statusBanner) {
      statusBanner.className = 'flex items-center justify-between px-space-md py-2.5 rounded-lg bg-emerald-subtle text-emerald-active';
      statusBanner.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-[20px]">verified</span>
          <span class="font-label-md font-semibold">Lunas via ${room.paymentMethod || 'QRIS Dinamis BI'}</span>
        </div>
        <span class="font-label-sm font-bold tracking-wide">Telah Dibayar</span>
      `;
    }

    if (qrisContainer) {
      qrisContainer.innerHTML = `
        <div class="w-full p-space-md rounded-xl bg-emerald-subtle/70 border border-emerald-200 flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div class="flex items-center gap-space-md">
            <div class="w-14 h-14 rounded-full bg-emerald-active text-white flex items-center justify-center shrink-0 shadow-md">
              <span class="material-symbols-outlined text-3xl">task_alt</span>
            </div>
            <div class="flex flex-col">
              <span class="font-headline-md text-emerald-900 font-bold">Tagihan Kamar ${room.number} Sudah Lunas</span>
              <span class="font-body-sm text-emerald-700">Terima kasih, pembayaran Anda otomatis tercatat dan kuitansi digital telah diterbitkan.</span>
            </div>
          </div>
          <button onclick="openKuitansiModal('INV-202610-KM${room.number}')" class="px-space-md py-2.5 rounded-lg bg-emerald-active hover:bg-emerald-700 text-white font-label-md flex items-center gap-2 shadow-sm shrink-0 cursor-pointer">
            <span class="material-symbols-outlined text-[18px]">receipt_long</span>
            Lihat Kuitansi Resmi
          </button>
        </div>
      `;
    }

    if (actionContainer) {
      actionContainer.classList.add('hidden');
    }

  } else if (isPendingVerify) {
    statusBadge.innerHTML = `
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-subtle text-amber-pending font-label-md font-bold">
        <span class="material-symbols-outlined text-[16px] animate-spin">hourglass_empty</span>
        Menunggu Verifikasi Admin
      </span>
    `;

    if (statusBanner) {
      statusBanner.className = 'flex items-center justify-between px-space-md py-2.5 rounded-lg bg-amber-subtle text-amber-pending';
      statusBanner.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-[20px]">info</span>
          <span class="font-label-md">Bukti Transfer Sedang Diverifikasi</span>
        </div>
        <span class="font-label-sm font-bold">Estimasi 1-2 Jam</span>
      `;
    }

    if (actionContainer) {
      actionContainer.classList.remove('hidden');
    }
  } else {
    // Pending payment
    statusBadge.innerHTML = `
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-subtle text-amber-pending font-label-md font-bold">
        <span class="w-2 h-2 rounded-full bg-amber-pending animate-ping"></span>
        Menunggu Pembayaran
      </span>
    `;

    if (statusBanner) {
      statusBanner.className = 'flex items-center justify-between px-space-md py-2.5 rounded-lg bg-crimson-subtle/80 text-primary';
      statusBanner.innerHTML = `
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-[20px]">timer</span>
          <span class="font-label-md">Jatuh Tempo: ${room.dueDate || '10 Oktober 2026'}</span>
        </div>
        <span class="font-label-sm font-bold tracking-wide">6 Hari Lagi</span>
      `;
    }

    if (actionContainer) {
      actionContainer.classList.remove('hidden');
    }
  }
}

/**
 * Render Room Details (PIN, Wi-Fi, Amenities)
 */
function renderRoomDetails() {
  const room = getActiveTenantRoom();
  const pinEl = document.getElementById('tenant-room-pin');
  const pinIcon = document.getElementById('tenant-pin-toggle-icon');
  const pin = room.pin || '928174';

  if (pinEl) {
    pinEl.textContent = appState.pinVisible ? `PIN: ${pin}` : 'PIN: ••••••';
  }
  if (pinIcon) {
    pinIcon.textContent = appState.pinVisible ? 'visibility_off' : 'visibility';
  }

  const wifiPassEl = document.getElementById('tenant-wifi-pass-val');
  if (wifiPassEl) {
    wifiPassEl.textContent = room.wifiPass || `thekos_km${room.number}`;
  }

  const roomBadge = document.getElementById('tenant-room-badge');
  const roomTitle = document.getElementById('tenant-room-title');
  if (roomBadge) roomBadge.textContent = `Lantai ${room.floor} • Unit ${room.number}`;
  if (roomTitle) roomTitle.textContent = room.floor === 1 ? 'Standard Room 3.0 × 3.5 m' : 'Premium Suite 3.5 × 4.0 m';
}

/**
 * Render Tenant Maintenance Tickets
 */
function renderTenantTickets() {
  const container = document.getElementById('tenant-tickets-container');
  if (!container) return;

  const room = getActiveTenantRoom();
  const myTickets = appState.tickets.filter(t => t.room === room.number);

  if (myTickets.length === 0) {
    container.innerHTML = `
      <div class="p-6 text-center text-slate-400 bg-slate-50 rounded-lg">
        <span class="material-symbols-outlined text-4xl mb-1">done_all</span>
        <p class="text-sm">Tidak ada tiket gangguan kamar saat ini. Semua fasilitas normal!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = myTickets.map(t => {
    const isDone = t.status === 'Selesai';
    return `
      <div class="p-space-md rounded-lg ${isDone ? 'bg-surface-container-low' : 'bg-amber-subtle/50'} flex flex-col gap-2 transition-all">
        <div class="flex items-start justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded ${isDone ? 'bg-surface-container text-secondary' : 'bg-amber-subtle text-amber-pending'} font-label-sm font-bold">
              #${t.id}
            </span>
            <span class="font-label-md text-on-surface font-semibold">${t.title}</span>
          </div>
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full ${isDone ? 'bg-emerald-subtle text-emerald-active' : 'bg-amber-pending text-white'
      } font-label-sm text-[11px] shrink-0 font-semibold">
            ${isDone ? '<span class="material-symbols-outlined text-[13px]">done_all</span> Selesai' : '<span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> ' + t.status}
          </span>
        </div>
        <p class="font-body-sm text-secondary">${t.desc}</p>
        <div class="flex items-center justify-between text-[12px] text-secondary pt-1">
          <span class="flex items-center gap-1">
            <span class="material-symbols-outlined text-[14px] ${isDone ? 'text-emerald-active' : 'text-amber-pending'}">schedule</span>
            ${isDone ? `Diselesaikan: <strong>${t.date}</strong>` : `Estimasi: <strong class="text-on-surface">${t.timeEstimate || 'Hari ini'}</strong>`}
          </span>
          ${isDone ? `
            <div class="flex items-center gap-2">
              <span class="text-tertiary flex items-center gap-1 font-label-sm font-bold">
                <span class="material-symbols-outlined text-[14px] text-amber-500">star</span>
                ${t.rating || '5.0 (Puas)'}
              </span>
              ${!t.review ? `
                <button onclick="openRateTicketModal('${t.id}')" class="text-primary hover:underline text-[11px] font-semibold cursor-pointer">
                  Beri Ulasan
                </button>
              ` : `
                <span class="text-[11px] text-secondary italic truncate max-w-[120px]">"${t.review}"</span>
              `}
            </div>
          ` : `
            <div class="flex items-center gap-2">
              <a href="https://wa.me/6281234567890?text=Halo%20Teknisi,%20saya%20penghuni%20Kamar%20${room.number}%20ingin%20tanya%20tiket%20${t.id}" target="_blank" class="text-primary font-label-sm font-semibold hover:underline cursor-pointer flex items-center gap-0.5">
                <span class="material-symbols-outlined text-[14px]">chat</span> Chat Teknisi
              </a>
            </div>
          `}
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Render Tenant Payment History
 */
function renderTenantHistory() {
  const container = document.getElementById('tenant-history-container');
  if (!container) return;

  container.innerHTML = appState.paymentHistory.map(h => {
    return `
      <div class="p-3 rounded-lg bg-surface-container-low flex items-center justify-between hover:bg-surface-container transition-colors">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-emerald-subtle flex items-center justify-center text-emerald-active shrink-0">
            <span class="material-symbols-outlined text-[18px]">check</span>
          </div>
          <div class="flex flex-col">
            <span class="font-label-md text-on-surface font-semibold">${h.month}</span>
            <span class="text-[12px] text-secondary">${h.method} • ${h.date}</span>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <span class="font-label-md text-on-surface font-bold">Rp ${(h.amount || 1250000).toLocaleString('id-ID')}</span>
          <button onclick="openKuitansiModal('${h.id}')" class="text-primary hover:bg-crimson-subtle p-1.5 rounded-lg transition-colors cursor-pointer" title="Lihat Kuitansi">
            <span class="material-symbols-outlined text-[18px]">visibility</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Render Tenant Active Services
 */
function renderTenantServices() {
  const container = document.getElementById('tenant-services-list');
  if (!container) return;

  const room = getActiveTenantRoom();
  const myServices = (appState.services || []).filter(s => s.room === room.number);

  if (myServices.length === 0) {
    container.innerHTML = `
      <div class="p-4 text-center text-slate-400 bg-surface-container-low/50 rounded-xl text-xs">
        Belum ada pesanan layanan aktif. Butuh laundry kiloan, galon, atau bersih kamar? Pesan di atas!
      </div>
    `;
    return;
  }

  container.innerHTML = myServices.map(s => {
    const isDone = s.status === 'Selesai';
    return `
      <div class="p-3 rounded-xl ${isDone ? 'bg-surface-container-low' : 'bg-emerald-subtle/50'} flex items-center justify-between gap-3 border border-slate-200/50">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-9 h-9 rounded-lg ${isDone ? 'bg-slate-200 text-slate-700' : 'bg-emerald-active text-white'} flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-[18px]">
              ${s.type.includes('Laundry') ? 'local_laundry_service' : s.type.includes('Galon') ? 'water_drop' : 'cleaning_services'}
            </span>
          </div>
          <div class="flex flex-col min-w-0">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-on-surface truncate">${s.type}</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${isDone ? 'bg-slate-200 text-slate-600' : 'bg-emerald-active text-white'}">
                ${s.status}
              </span>
            </div>
            <span class="text-[11px] text-secondary truncate">${s.detail} • ${s.date}</span>
          </div>
        </div>
        <div class="text-right shrink-0">
          <span class="text-xs font-bold text-on-surface">Rp ${s.price.toLocaleString('id-ID')}</span>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Render Tenant Guest Permits
 */
function renderTenantGuestPermits() {
  const container = document.getElementById('tenant-guest-permits-list');
  if (!container) return;

  const room = getActiveTenantRoom();
  const myGuests = (appState.guestPermits || []).filter(g => g.room === room.number);

  if (myGuests.length === 0) {
    container.innerHTML = `
      <div class="p-4 text-center text-slate-400 bg-surface-container-low/50 rounded-xl text-xs">
        Tidak ada izin tamu menginap aktif. Laporkan tamu berkunjung untuk kenyamanan bersama.
      </div>
    `;
    return;
  }

  container.innerHTML = myGuests.map(g => {
    return `
      <div class="p-3 rounded-xl bg-surface-container-low flex items-center justify-between gap-3 border border-slate-200/50">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-9 h-9 rounded-lg bg-blue-subtle text-blue-operational flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-[18px]">badge</span>
          </div>
          <div class="flex flex-col min-w-0">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-on-surface truncate">${g.guestName}</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-subtle text-blue-operational">
                Guest Pass
              </span>
            </div>
            <span class="text-[11px] text-secondary truncate">${g.relationship} • Menginap: ${g.checkIn} s/d ${g.checkOut}</span>
          </div>
        </div>
        <span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-active bg-emerald-subtle px-2.5 py-0.5 rounded-full shrink-0">
          <span class="material-symbols-outlined text-[13px]">check_circle</span> Disetujui
        </span>
      </div>
    `;
  }).join('');
}

/**
 * Render Tenant Electricity Top-up History
 */
function renderTenantElectricityHistory() {
  const container = document.getElementById('tenant-electric-history-list');
  if (!container) return;

  const room = getActiveTenantRoom();
  const tokens = (appState.electricTokensHistory || []).filter(t => t.room === room.number);

  if (tokens.length === 0) {
    container.innerHTML = `
      <div class="p-3 text-center text-slate-400 text-[11px]">
        Belum ada riwayat pembelian token listrik bulan ini.
      </div>
    `;
    return;
  }

  container.innerHTML = tokens.slice(0, 3).map(t => {
    return `
      <div class="p-2.5 rounded-lg bg-surface-container flex items-center justify-between text-xs">
        <div class="flex flex-col">
          <span class="font-bold text-on-surface">${t.date} • +${t.kwh} kWh</span>
          <span class="font-mono text-[10px] text-secondary tracking-wider">${t.tokenNumber}</span>
        </div>
        <button onclick="copyText('${t.tokenNumber}', 'Nomor Token PLN')" class="px-2 py-1 rounded bg-white text-secondary hover:text-primary text-[11px] font-bold shadow-sm cursor-pointer">
          Salin
        </button>
      </div>
    `;
  }).join('');
}

/**
 * =================================================================
 * ADMIN CONSOLE RENDERING
 * =================================================================
 */

function renderAdminKPI() {
  const totalRooms = appState.rooms.length;
  const occupiedRooms = appState.rooms.filter(r => r.status === 'terisi').length;
  const availableRooms = appState.rooms.filter(r => r.status === 'tersedia').length;
  const maintenanceRooms = appState.rooms.filter(r => r.status === 'maintenance').length;
  const occupancyRate = ((occupiedRooms / totalRooms) * 100).toFixed(1);

  // Revenue calculation
  let collectedRevenue = 0;
  let totalTargetRevenue = 0;

  appState.rooms.forEach(r => {
    if (r.status === 'terisi') {
      totalTargetRevenue += r.price;
      if (r.paymentStatus === 'lunas') {
        collectedRevenue += r.price;
      }
    }
  });

  const collectionRate = totalTargetRevenue > 0 ? ((collectedRevenue / totalTargetRevenue) * 100).toFixed(1) : '100.0';

  // Update elements
  const elOccupied = document.getElementById('admin-kpi-occupied-badge');
  const elAvailable = document.getElementById('admin-kpi-available-badge');
  const elMaint = document.getElementById('admin-kpi-maint-badge');
  const elRevenue = document.getElementById('admin-kpi-revenue');
  const elTargetRev = document.getElementById('admin-kpi-target-revenue');
  const elCollection = document.getElementById('admin-kpi-collection');
  const elCollectionGauge = document.getElementById('admin-kpi-collection-gauge');
  const elCollectionSummary = document.getElementById('admin-kpi-collection-summary');
  const elOccupancy = document.getElementById('admin-kpi-occupancy');
  const elOccupancyBar = document.getElementById('admin-kpi-occupancy-bar');

  if (elOccupied) elOccupied.textContent = `${occupiedRooms} Terisi`;
  if (elAvailable) elAvailable.textContent = `${availableRooms} Kosong`;
  if (elMaint) elMaint.textContent = `${maintenanceRooms} Maint.`;

  if (elRevenue) elRevenue.textContent = `Rp ${collectedRevenue.toLocaleString('id-ID')}`;
  if (elTargetRev) elTargetRev.textContent = `Target: Rp ${totalTargetRevenue.toLocaleString('id-ID')}`;

  if (elCollection) elCollection.textContent = `${collectionRate}%`;
  if (elCollectionGauge) {
    elCollectionGauge.setAttribute('stroke-dasharray', `${Math.round(collectionRate)}, 100`);
  }
  if (elCollectionSummary) {
    const sisa = totalTargetRevenue - collectedRevenue;
    elCollectionSummary.textContent = `Sisa: ${(sisa / 1000000).toFixed(2)}jt`;
  }

  if (elOccupancy) elOccupancy.textContent = `${occupancyRate}%`;
  if (elOccupancyBar) elOccupancyBar.style.width = `${occupancyRate}%`;

  // Update badge in sidebar
  const adminBadge = document.getElementById('admin-pending-tickets-count');
  if (adminBadge) {
    const pendingCount = appState.tickets.filter(t => t.status !== 'Selesai').length;
    adminBadge.textContent = pendingCount;
  }
}

function renderAdminRoomMatrix() {
  const floor1Container = document.getElementById('admin-matrix-floor-1');
  const floor2Container = document.getElementById('admin-matrix-floor-2');

  if (!floor1Container || !floor2Container) return;

  const floor1Rooms = appState.rooms.filter(r => r.floor === 1);
  const floor2Rooms = appState.rooms.filter(r => r.floor === 2);

  floor1Container.innerHTML = floor1Rooms.map(r => generateRoomCardHtml(r)).join('');
  floor2Container.innerHTML = floor2Rooms.map(r => generateRoomCardHtml(r)).join('');
}

function generateRoomCardHtml(room) {
  const isOccupied = room.status === 'terisi';
  const isAvailable = room.status === 'tersedia';
  const isMaint = room.status === 'maintenance';

  let bgClass = 'bg-surface-container-low hover:bg-surface-container';
  let textPrimary = 'text-on-surface';
  let dotColor = 'bg-slate-surface';
  let statusText = 'Lunas';
  let statusTextClass = 'text-emerald-active';

  if (isAvailable) {
    bgClass = 'bg-blue-subtle hover:bg-secondary-container';
    textPrimary = 'text-blue-operational';
    dotColor = 'bg-blue-operational';
    statusText = 'Buka Booking';
    statusTextClass = 'text-blue-operational underline';
  } else if (isMaint) {
    bgClass = 'bg-crimson-subtle hover:bg-error-container/40 border border-primary/30';
    textPrimary = 'text-primary';
    dotColor = 'bg-primary-container';
    statusText = 'Teknisi On-Site';
    statusTextClass = 'text-primary font-bold';
  } else if (room.paymentStatus === 'pending') {
    dotColor = 'bg-amber-pending';
    statusText = room.paymentMethod === 'Transfer Manual' ? 'Verifikasi Tf' : 'H-2 Tempo';
    statusTextClass = 'text-amber-pending font-medium';
  }

  return `
    <div onclick="openRoomModal('${room.number}')" data-status="${room.status}" class="rounded-xl p-space-sm ${bgClass} transition-all flex flex-col justify-between min-h-[110px] cursor-pointer shadow-sm group relative">
      <div class="flex items-center justify-between">
        <span class="font-headline-md text-headline-md font-bold ${textPrimary}">${room.number}</span>
        ${room.hasActiveTicket ? `
          <span class="material-symbols-outlined text-amber-pending text-base" title="Pengaduan Aktif">build</span>
        ` : `
          <span class="w-2.5 h-2.5 rounded-full ${dotColor}"></span>
        `}
      </div>
      <div class="flex flex-col min-w-0">
        <span class="font-label-sm text-label-sm font-semibold ${isAvailable ? 'text-blue-operational uppercase' : 'text-on-surface'} truncate">
          ${isAvailable ? 'TERSEDIA' : (isMaint ? 'MAINTENANCE' : (room.tenant || 'Penghuni'))}
        </span>
        <span class="font-label-sm text-label-sm text-secondary truncate">
          ${isAvailable ? `Rp ${(room.price / 1000).toFixed(0)}k` : (room.floor === 1 ? 'Standard' : 'Premium AC')}
        </span>
      </div>
      <span class="font-label-sm text-label-sm ${statusTextClass}">${statusText}</span>
    </div>
  `;
}

// Note: Enhanced renderAdminBillingTable and renderAdminTickets are defined further below

/**
 * Filter Matrix (Admin)
 */
function filterAdminMatrix(filterType) {
  const cards = document.querySelectorAll('#admin-matrix-floor-1 > div, #admin-matrix-floor-2 > div');
  cards.forEach(card => {
    const status = card.getAttribute('data-status');
    if (filterType === 'all' || status === filterType) {
      card.style.display = '';
      card.style.opacity = '1';
    } else {
      card.style.display = 'none';
    }
  });

  // Update filter button active state
  document.querySelectorAll('[onclick*="filterAdminMatrix"]').forEach(btn => {
    btn.classList.remove('bg-primary-container', 'text-white', 'shadow-sm');
    btn.classList.add('hover:bg-surface-container-high');
  });
  const activeBtn = document.querySelector(`[onclick="filterAdminMatrix('${filterType}')"]`);
  if (activeBtn) {
    activeBtn.classList.add('bg-primary-container', 'text-white', 'shadow-sm');
  }
}

/**
 * Export Rekap CSV (Admin)
 */
function exportRekapCSV() {
  const rows = [['No', 'Kamar', 'Penghuni', 'Tipe', 'Harga Sewa', 'Status', 'Pembayaran', 'Masa Sewa']];
  appState.rooms.forEach((r, i) => {
    rows.push([
      i + 1,
      r.number,
      r.tenant || '-',
      r.type,
      r.price,
      r.status,
      r.paymentStatus || '-',
      r.rentEnd || '-'
    ]);
  });

  const csvContent = rows.map(row => row.join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Rekap_TheKos_Surabaya_${new Date().toLocaleDateString('id-ID').replace(/\//g, '-')}.csv`;
  a.click();
  URL.revokeObjectURL(url);

  showToast('File CSV rekap keuangan berhasil diunduh!', 'success');
}

/**
 * Mark Ticket as Done with Rating (Admin)
 */
function adminMarkTicketDone(ticketId) {
  const t = appState.tickets.find(item => item.id === ticketId);
  if (!t) return;
  t.status = 'Selesai';
  if (!t.rating) t.rating = '5.0 (Puas)';
  saveState();
  renderAll();
  showToast(`Tiket #${ticketId} ditandai SELESAI oleh Admin!`, 'success');
}

/**
 * Delete Ticket (Admin)
 */
function adminDeleteTicket(ticketId) {
  appState.tickets = appState.tickets.filter(t => t.id !== ticketId);

  // Remove hasActiveTicket if no more tickets for room
  appState.rooms.forEach(r => {
    const hasActive = appState.tickets.some(t => t.room === r.number && t.status !== 'Selesai');
    r.hasActiveTicket = hasActive;
  });

  saveState();
  renderAll();
  showToast(`Tiket #${ticketId} telah dihapus dari sistem.`, 'info');
}

/**
 * Send WhatsApp reminder to tenant (Admin)
 */
function sendWhatsappReminder(roomNumber) {
  const room = appState.rooms.find(r => r.number === roomNumber);
  if (!room || !room.phone) {
    showToast('Nomor WhatsApp penghuni tidak ditemukan!', 'error');
    return;
  }
  const msg = encodeURIComponent(
    `Halo ${room.tenant}, ini adalah pengingat dari The Kos Living Surabaya. ` +
    `Tagihan sewa kamar ${room.number} periode Oktober 2026 sebesar Rp ${room.price.toLocaleString('id-ID')} ` +
    `belum lunas. Mohon segera melakukan pembayaran. Terima kasih! 🙏`
  );
  window.open(`https://wa.me/62${room.phone.replace(/^0/, '')}?text=${msg}`, '_blank');
  showToast(`Membuka WhatsApp untuk ${room.tenant} (Kamar ${room.number})...`, 'info');
}

/**
 * Quick login as specific tenant (Admin → View as Tenant)
 */
function viewAsTenant(roomNumber) {
  loginAsTenant(roomNumber);
}

/**
 * Set room to maintenance mode (Admin)
 */
function setRoomMaintenance(roomNumber, note = '') {
  const room = appState.rooms.find(r => r.number === roomNumber);
  if (!room) return;
  room.status = 'maintenance';
  room.maintenanceNote = note || `Perbaikan berkala Kamar ${roomNumber}`;
  saveState();
  renderAll();
  showToast(`Kamar ${roomNumber} diset ke mode Maintenance!`, 'warning');
}

/**
 * Mark room as available (Admin)
 */
function setRoomAvailable(roomNumber) {
  const room = appState.rooms.find(r => r.number === roomNumber);
  if (!room) return;
  room.status = 'tersedia';
  room.tenant = null;
  room.phone = null;
  room.paymentStatus = null;
  room.maintenanceNote = null;
  saveState();
  renderAll();
  showToast(`Kamar ${roomNumber} telah diset sebagai Tersedia / Buka Booking!`, 'success');
}

/**
 * Add new tenant to room (Admin quick-add)
 */
function quickAddTenant(roomNumber, tenantName, phone) {
  const room = appState.rooms.find(r => r.number === roomNumber);
  if (!room) return;
  room.status = 'terisi';
  room.tenant = tenantName;
  room.phone = phone;
  room.paymentStatus = 'pending';
  room.contractStart = new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
  room.rentEnd = '31 Des 2027';
  saveState();
  renderAll();
  showToast(`Penghuni baru ${tenantName} berhasil ditambahkan ke Kamar ${roomNumber}!`, 'success');
}

/**
 * Render Admin Billing Table - Enhanced Version
 */
function renderAdminBillingTable() {
  const tbody = document.getElementById('admin-billing-tbody');
  if (!tbody) return;

  const rows = appState.rooms.filter(r => r.status === 'terisi');

  tbody.innerHTML = rows.map(r => {
    const isPaid = r.paymentStatus === 'lunas';
    const isNeedsVerify = r.number === '09' && appState.tenantInvoice && appState.tenantInvoice.status === 'verifikasi';
    const isPending = r.paymentStatus === 'pending' && !isNeedsVerify;

    return `
      <tr class="${isNeedsVerify ? 'bg-amber-subtle/40 hover:bg-amber-subtle/60' : (isPending ? 'bg-red-50/50 hover:bg-red-50' : 'hover:bg-surface-container-low/50')} transition-colors border-b border-border-hairline last:border-0">
        <td class="py-3 px-3">
          <div class="flex flex-col">
            <span class="text-xs font-bold text-on-surface">${r.tenant}</span>
            <span class="text-[11px] text-secondary">Kamar ${r.number} (${r.floor === 1 ? 'Non-AC' : 'Premium AC'})</span>
          </div>
        </td>
        <td class="py-3 px-3 text-xs font-semibold text-on-surface">
          Rp ${r.price.toLocaleString('id-ID')}
        </td>
        <td class="py-3 px-3">
          ${isPaid ? `
            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-subtle text-emerald-active text-[11px] font-bold">
              <span class="material-symbols-outlined text-sm">check_circle</span> Lunas (${r.paymentMethod || 'QRIS'})
            </span>
          ` : isNeedsVerify ? `
            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-subtle text-amber-pending text-[11px] font-bold">
              <span class="material-symbols-outlined text-sm">hourglass_empty</span> Cek Bukti Transfer
            </span>
          ` : `
            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-crimson-subtle text-primary text-[11px] font-bold">
              <span class="material-symbols-outlined text-sm">schedule</span> Tempo ${r.dueDate || '10 Okt'}
            </span>
          `}
        </td>
        <td class="py-3 px-3 text-right">
          <div class="flex items-center justify-end gap-1.5">
            ${!isPaid ? `
              <button onclick="verifyPaymentAdmin('${r.number}')" class="px-2.5 py-1 rounded-md bg-primary-container text-white text-[11px] font-bold hover:bg-crimson-deep transition-all shadow-sm cursor-pointer">
                Verifikasi
              </button>
              <button onclick="sendWhatsappReminder('${r.number}')" title="Kirim Reminder WA" class="p-1 rounded-md text-emerald-active hover:bg-emerald-subtle cursor-pointer">
                <span class="material-symbols-outlined text-sm">chat</span>
              </button>
            ` : `
              <button onclick="openKuitansiModal('INV-202610-KM${r.number}')" class="p-1 rounded-md text-secondary hover:bg-surface-container-high hover:text-on-surface cursor-pointer" title="Lihat Kuitansi">
                <span class="material-symbols-outlined text-base">receipt_long</span>
              </button>
            `}
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

/**
 * Render Admin Tickets - Enhanced with admin actions
 */
function renderAdminTickets() {
  const container = document.getElementById('admin-tickets-container');
  if (!container) return;

  const tickets = appState.tickets.slice(0, 5);

  container.innerHTML = tickets.map(t => {
    const isUrgent = t.priority === 'URGENT';
    const isDone = t.status === 'Selesai';
    const isWaiting = t.status === 'Tunggu Suku Cadang';

    return `
      <div class="p-3.5 rounded-xl ${isUrgent ? 'bg-crimson-subtle border border-red-200/60' : (isDone ? 'bg-surface-container-low' : 'bg-surface-container-low/80')} flex flex-col gap-2 transition-all">
        <div class="flex items-center justify-between">
          <span class="px-2 py-0.5 rounded-full ${isUrgent ? 'bg-primary-container text-white' : (isDone ? 'bg-emerald-subtle text-emerald-active' : (isWaiting ? 'bg-blue-subtle text-blue-operational' : 'bg-amber-subtle text-amber-pending'))
      } text-[11px] font-bold">
            ${isUrgent ? '🔴 URGENT' : (isDone ? '✅ SELESAI' : (isWaiting ? '⏳ TUNGGU' : '🔧 PROSES'))}
          </span>
          <div class="flex items-center gap-1">
            <span class="text-[11px] text-secondary font-semibold">Kamar ${t.room}</span>
            ${isDone ? `
              <button onclick="updateTicketStatus('${t.id}')" title="Buka Kembali" class="p-0.5 rounded text-secondary hover:text-on-surface cursor-pointer">
                <span class="material-symbols-outlined text-[14px]">refresh</span>
              </button>
            ` : `
              <button onclick="adminMarkTicketDone('${t.id}')" title="Tandai Selesai" class="p-0.5 rounded text-emerald-active hover:bg-emerald-subtle cursor-pointer">
                <span class="material-symbols-outlined text-[14px]">check_circle</span>
              </button>
              <button onclick="updateTicketStatus('${t.id}')" title="Update Status" class="p-0.5 rounded text-amber-pending hover:bg-amber-subtle cursor-pointer">
                <span class="material-symbols-outlined text-[14px]">edit</span>
              </button>
            `}
            <button onclick="adminDeleteTicket('${t.id}')" title="Hapus Tiket" class="p-0.5 rounded text-secondary hover:text-red-600 cursor-pointer">
              <span class="material-symbols-outlined text-[14px]">delete</span>
            </button>
          </div>
        </div>
        <div class="flex flex-col">
          <span class="text-xs font-bold text-on-surface leading-tight">${t.title}</span>
          <p class="text-[11px] text-secondary mt-0.5 leading-snug line-clamp-2">${t.desc}</p>
        </div>
        <div class="flex items-center justify-between text-[11px] text-secondary">
          <span class="flex items-center gap-1">
            <span class="material-symbols-outlined text-[13px] ${isDone ? 'text-emerald-active' : 'text-amber-pending'}">schedule</span>
            ${t.date} ${!isDone ? `• Est: ${t.timeEstimate || 'Segera'}` : ''}
          </span>
          ${!isDone ? `
            <a href="https://wa.me/6281234567890?text=Update%20Tiket%20${t.id}%20Kamar%20${t.room}" target="_blank" class="text-emerald-active font-bold hover:underline flex items-center gap-0.5 cursor-pointer">
              <span class="material-symbols-outlined text-[13px]">chat</span> Teknisi WA
            </a>
          ` : `<span class="text-emerald-active font-semibold flex items-center gap-0.5"><span class="material-symbols-outlined text-[13px]">star</span>${t.rating || '5.0'}</span>`}
        </div>
      </div>
    `;
  }).join('');
}

/**
 * =================================================================
 * DYNAMIC ACTIVE NAVIGATION PILL & SCROLLSPY
 * =================================================================
 */
function setActiveTenantNav(sectionId) {
  if (!sectionId) return;

  // Desktop header links
  document.querySelectorAll('#tenant-nav .tenant-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === `#${sectionId}`) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Mobile bottom links
  document.querySelectorAll('#tenant-bottom-nav .tenant-mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === `#${sectionId}`) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function setActiveAdminNav(sectionId) {
  if (!sectionId) return;

  document.querySelectorAll('#admin-nav .admin-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === `#${sectionId}`) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function initNavigationHighlighting() {
  // 1. Tenant Desktop Navigation Clicks
  const tenantLinks = document.querySelectorAll('#tenant-nav .tenant-nav-link');
  tenantLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        setActiveTenantNav(targetId);
      }
    });
  });

  // 2. Tenant Mobile Bottom Navigation Clicks
  const tenantMobileLinks = document.querySelectorAll('#tenant-bottom-nav .tenant-mobile-nav-link');
  tenantMobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        setActiveTenantNav(targetId);
      }
    });
  });

  // 3. Admin Sidebar Navigation Clicks
  const adminLinks = document.querySelectorAll('#admin-nav .admin-nav-link');
  adminLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        setActiveAdminNav(targetId);
      }
    });
  });

  // 4. ScrollSpy Observer for Tenant Sections
  const tenantSections = [
    'tenant-beranda',
    'tenant-tagihan',
    'tenant-kamar',
    'tenant-layanan',
    'tenant-pengaduan',
    'tenant-riwayat'
  ];

  if ('IntersectionObserver' in window) {
    const tenantObserver = new IntersectionObserver((entries) => {
      if (appState.activeView !== 'tenant') return;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveTenantNav(entry.target.id);
        }
      });
    }, {
      rootMargin: '-15% 0px -55% 0px',
      threshold: 0.1
    });

    tenantSections.forEach(id => {
      const el = document.getElementById(id);
      if (el) tenantObserver.observe(el);
    });

    // 5. ScrollSpy Observer for Admin Sections
    const adminSections = [
      'admin-dashboard',
      'admin-kamar',
      'admin-tagihan',
      'admin-pengaduan',
      'admin-spotlight'
    ];

    const adminObserver = new IntersectionObserver((entries) => {
      if (appState.activeView !== 'admin') return;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveAdminNav(entry.target.id);
        }
      });
    }, {
      rootMargin: '-15% 0px -55% 0px',
      threshold: 0.1
    });

    adminSections.forEach(id => {
      const el = document.getElementById(id);
      if (el) adminObserver.observe(el);
    });
  }
}

/**
 * Window Load & Initial Setup
 */
window.addEventListener('DOMContentLoaded', () => {
  initAppState();

  if (!appState.user && ['portal', 'tenant', 'admin'].includes(appState.activeView)) {
    appState.activeView = 'marketplace';
  }

  // Determine view from hash or saved state
  const hash = window.location.hash.replace('#', '');
  if (hash.startsWith('tenant')) {
    navigateTo('tenant');
  } else if (hash.startsWith('admin')) {
    navigateTo('admin');
  } else if (hash === 'tenant-login') {
    navigateTo('tenant-login');
  } else if (hash === 'admin-login') {
    navigateTo('admin-login');
  } else if (hash === 'marketplace') {
    navigateTo('marketplace');
  } else if (hash.startsWith('portal')) {
    navigateTo('marketplace');
  } else if (appState.activeView && ['marketplace', 'tenant-login', 'admin-login', 'portal', 'tenant', 'admin'].includes(appState.activeView)) {
    navigateTo(appState.activeView);
  } else {
    navigateTo('marketplace');
  }

  // Initialize Dynamic Navigation Highlighting
  initNavigationHighlighting();

  // Start QRIS timer
  startQRISTimer();

  // Listen to hash changes
  window.addEventListener('hashchange', () => {
    const rawHash = window.location.hash.replace('#', '');
    if (['marketplace', 'tenant-login', 'admin-login', 'tenant', 'admin', 'portal'].includes(rawHash)) {
      if (rawHash !== appState.activeView) {
        navigateTo(rawHash);
      }
    }
  });
});

