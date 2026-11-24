export const id = 206;
export const ids = [206];
export const modules = {
  34459: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Pt,
      f: () => It,
      g: () => Rt
    });
    var Ot = Vt(34466);
    const qt = {
        fileBytes: 4194304,
        vertices: 65535,
        indices: 196608,
        accessorElements: 196608,
        primitives: 64,
        nodes: 128,
        meshes: 64,
        materials: 8,
        images: 8,
        imageSide: 1024
      },
      Dt = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      mt = 1048576,
      dt = "is not a binary glTF 2.0 file",
      jt = "loads data from outside the file",
      Ht = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      Xt = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      Qt = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      lt = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: Qt,
        TEXCOORD_2: Qt,
        TEXCOORD_3: Qt,
        TEXCOORD_4: Qt,
        TEXCOORD_5: Qt
      },
      Et = new Set(Ot.i.map((tt => {
        let [et] = tt;
        return et
      }))),
      ft = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      wt = 5126;

    function yt(tt) {
      return tt.toLocaleString("en-US")
    }

    function Nt(tt, et, Vt) {
      return tt > et ? `has ${yt(tt)} ${Vt} (the limit is ${yt(et)})` : null
    }

    function Mt(tt, et) {
      return Number.isInteger(tt) && tt >= 0 && tt < (null !== et && void 0 !== et ? et : 0)
    }

    function bt(tt) {
      return Number.isInteger(tt) && tt >= 0
    }

    function Jt(tt, et) {
      return void 0 !== tt && (!Array.isArray(tt) || tt.length > et)
    }

    function Ct(tt, et) {
      return "object" === typeof tt && null !== tt && Object.keys(tt).length > et
    }

    function ut(tt) {
      var et;
      return `${tt.normalized?"normalized ":""}${null!==(et=Ot.f[tt.componentType])&&void 0!==et?et:tt.componentType} ${tt.type}`
    }

    function Kt(tt) {
      const et = et => {
        var Vt;
        return null !== (Vt = tt[et]) && void 0 !== Vt ? Vt : -1
      };
      return 255 === et(0) && 216 === et(1) ? "JPEG" : 82 === et(0) && 73 === et(1) && 87 === et(8) && 69 === et(9) ? "WebP" : 171 === et(0) && 75 === et(1) && 84 === et(2) && 88 === et(3) ? "KTX2" : "non-PNG"
    }

    function ht(tt) {
      return tt.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((et, Vt) => tt[Vt] === et)) && 73 === tt[12] && 72 === tt[13] && 68 === tt[14] && 82 === tt[15]
    }

    function vt(tt) {
      return /^[aeiou]/i.test(tt) ? `an ${tt}` : `a ${tt}`
    }

    function Wt(tt) {
      const et = tt.byteStride;
      return void 0 === et || Number.isInteger(et) && et >= 4 && et <= 252 && et % 4 === 0
    }

    function St(tt, et, Vt) {
      var Ot, qt;
      const Dt = null === (Ot = tt.bufferViews) || void 0 === Ot ? void 0 : Ot[Vt];
      if (!Dt || !et || 0 !== Dt.buffer) return null;
      const mt = null !== (qt = Dt.byteOffset) && void 0 !== qt ? qt : 0;
      return !bt(mt) || !bt(Dt.byteLength) || mt + Dt.byteLength > et.byteLength ? null : et.subarray(mt, mt + Dt.byteLength)
    }

    function ct(tt, et) {
      var Vt, qt, Dt;
      const mt = Ot.q[et.type],
        dt = Ot.e[et.componentType];
      if (!mt || !dt || !Number.isInteger(et.count) || et.count < 0) return !1;
      if (void 0 === et.bufferView) return !0;
      const jt = null === (Vt = tt.bufferViews) || void 0 === Vt ? void 0 : Vt[et.bufferView],
        Ht = null !== (qt = et.byteOffset) && void 0 !== qt ? qt : 0;
      if (!jt || !bt(Ht) || Ht % dt !== 0) return !1;
      const Xt = mt * dt,
        Qt = null !== (Dt = jt.byteStride) && void 0 !== Dt ? Dt : Xt;
      if (Qt < Xt) return !1;
      return (0 === et.count ? 0 : Ht + Qt * (et.count - 1) + Xt) <= jt.byteLength
    }

    function Rt(tt) {
      return tt > qt.fileBytes ? `is ${(tt/mt).toFixed(1)} MiB (the limit is ${qt.fileBytes/mt} MiB)` : null
    }

    function It(tt, et) {
      try {
        return function(tt, et) {
          var Vt, mt, Qt, yt, bt, Rt, It, Pt, Zt, Lt, Ft, kt, Gt, zt, ot, rt, Ut;
          const At = Array.isArray(tt.extensionsUsed) && tt.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(tt, et) {
              var Vt, Ot;
              const {
                items: qt,
                perFile: mt,
                surfaces: dt,
                few: jt,
                bounds: Ht,
                attributeMembers: Xt
              } = Dt;
              if (Jt(tt.extensionsRequired, jt) || Jt(tt.animations, 1 / 0) || Jt(tt.skins, 1 / 0)) return !0;
              if (null !== (Vt = tt.animations) && void 0 !== Vt && Vt.length || null !== (Ot = tt.skins) && void 0 !== Ot && Ot.length) return !1;
              if ([
                  [tt.buffers, jt],
                  [tt.scenes, jt],
                  [tt.bufferViews, qt],
                  [tt.accessors, qt],
                  [tt.nodes, qt],
                  [tt.meshes, qt],
                  [tt.materials, dt],
                  [tt.textures, dt],
                  [tt.samplers, dt],
                  [tt.images, dt]
                ].some((tt => {
                  let [et, Vt] = tt;
                  return Jt(et, Vt)
                }))) return !0;
              for (const Dt of null !== (Qt = tt.accessors) && void 0 !== Qt ? Qt : []) {
                var Qt, lt, Et;
                if (Number.isInteger(Dt.count) && (!Number.isSafeInteger(Dt.count) || Object.is(Dt.count, -0)) || Jt(null !== (lt = Dt.min) && void 0 !== lt ? lt : void 0, Ht) || Jt(null !== (Et = Dt.max) && void 0 !== Et ? Et : void 0, Ht)) return !0
              }
              for (const Dt of null !== (ft = tt.scenes) && void 0 !== ft ? ft : []) {
                var ft;
                if (Jt(Dt.nodes, qt)) return !0
              }
              let wt = 0;
              for (const Dt of null !== (yt = tt.nodes) && void 0 !== yt ? yt : []) {
                var yt, Nt, Mt;
                if (Jt(Dt.children, mt)) return !0;
                wt += null !== (Nt = null === (Mt = Dt.children) || void 0 === Mt ? void 0 : Mt.length) && void 0 !== Nt ? Nt : 0
              }
              if (wt > mt) return !0;
              let bt = 0;
              for (const Dt of null !== (ut = tt.meshes) && void 0 !== ut ? ut : []) {
                var ut;
                if (!Array.isArray(Dt.primitives)) return !0;
                if (bt += Dt.primitives.length, bt > mt) return !0;
                for (const tt of Dt.primitives) {
                  var Kt;
                  const Vt = et ? null === (Kt = tt.extensions) || void 0 === Kt ? void 0 : Kt.KHR_draco_mesh_compression : void 0;
                  if (Ct(tt.attributes, Xt) || Ct(null === Vt || void 0 === Vt ? void 0 : Vt.attributes, Xt)) return !0
                }
              }
              return !1
            }(tt, At)) return dt;
          const it = null === (Vt = tt.asset) || void 0 === Vt ? void 0 : Vt.version;
          if ("string" !== typeof it || !/^2\.\d+/.test(it)) return `uses glTF version ${null!==it&&void 0!==it?it:"(none)"}`;
          const Yt = null === (mt = tt.asset) || void 0 === mt ? void 0 : mt.minVersion;
          if (void 0 !== Yt && "2.0" !== Yt) return `uses glTF version ${Yt}`;
          for (const Ot of null !== (Bt = tt.extensionsRequired) && void 0 !== Bt ? Bt : []) {
            var Bt;
            if (!Ht.has(Ot)) return `requires the glTF extension ${Ot}`
          }
          if (null !== (Qt = tt.animations) && void 0 !== Qt && Qt.length) return "has animations";
          if (null !== (yt = tt.skins) && void 0 !== yt && yt.length) return "uses skins";
          const pt = null !== (bt = tt.buffers) && void 0 !== bt ? bt : [];
          for (const [Ot, qt] of pt.entries()) {
            if (void 0 !== qt.uri) return jt;
            if (Ot > 0 || !et) return dt
          }
          for (const [Ot, qt] of(null !== (xt = tt.bufferViews) && void 0 !== xt ? xt : []).entries()) {
            var xt;
            if (!St(tt, et, Ot) || !Wt(qt)) return dt
          }
          const Tt = null !== (Rt = tt.accessors) && void 0 !== Rt ? Rt : [];
          for (const Ot of Tt) {
            if (void 0 !== Ot.sparse) return "uses sparse accessors";
            const et = Number.isInteger(Ot.count) ? Nt(Ot.count, qt.accessorElements, "elements in an accessor") : null;
            if (et) return et;
            if (!ct(tt, Ot)) return dt
          }
          const gt = null !== (It = tt.scenes) && void 0 !== It ? It : [];
          if (1 !== gt.length) return `has ${gt.length} scenes`;
          const st = (0, Ot.w)(tt);
          if (void 0 !== st && 0 !== st) return dt;
          const nt = null !== (Pt = tt.nodes) && void 0 !== Pt ? Pt : [],
            te = null !== (Zt = tt.meshes) && void 0 !== Zt ? Zt : [],
            ee = null !== (Lt = tt.materials) && void 0 !== Lt ? Lt : [],
            Ve = null !== (Ft = tt.textures) && void 0 !== Ft ? Ft : [],
            Oe = null !== (kt = tt.images) && void 0 !== kt ? kt : [],
            qe = null !== (Gt = null !== (zt = null !== (ot = Nt(nt.length, qt.nodes, "nodes")) && void 0 !== ot ? ot : Nt(te.length, qt.meshes, "meshes")) && void 0 !== zt ? zt : Nt(ee.length, qt.materials, "materials")) && void 0 !== Gt ? Gt : Nt(Oe.length, qt.images, "images");
          if (qe) return qe;
          const De = new Set;
          for (const Ot of nt)
            for (const tt of null !== (me = Ot.children) && void 0 !== me ? me : []) {
              var me;
              if (!Mt(tt, nt.length) || De.has(tt)) return dt;
              De.add(tt)
            }
          const de = new Set,
            je = tt => {
              var et;
              return !de.has(tt) && (de.add(tt), (null !== (et = nt[tt].children) && void 0 !== et ? et : []).every(je))
            };
          for (const Ot of null !== (He = gt[0].nodes) && void 0 !== He ? He : []) {
            var He;
            if (!Mt(Ot, nt.length) || De.has(Ot) || !je(Ot)) return dt
          }
          for (const Ot of nt) {
            if (void 0 !== Ot.matrix) return "uses node matrices";
            if (void 0 !== Ot.skin) return "uses skins";
            if (void 0 !== Ot.weights) return "uses morph targets";
            if (void 0 !== Ot.mesh && !Mt(Ot.mesh, te.length)) return dt;
            const tt = [
              [Ot.translation, 3],
              [Ot.rotation, 4],
              [Ot.scale, 3]
            ];
            for (const [et, Vt] of tt)
              if (void 0 !== et && (!Array.isArray(et) || et.length !== Vt || !et.every((tt => Number.isFinite(tt))))) return dt
          }
          let Xe = -1,
            Qe = 0,
            le = 0,
            Ee = null;
          for (const qt of te) {
            if (void 0 !== qt.weights) return "uses morph targets";
            if (0 === qt.primitives.length) return dt;
            for (const Vt of qt.primitives) {
              var fe, we;
              const qt = null !== (fe = Vt.mode) && void 0 !== fe ? fe : 4;
              var ye;
              if (4 !== qt && 0 !== qt) return `uses ${null!==(ye=ft[qt])&&void 0!==ye?ye:`mode ${qt}`} primitives`;
              if (void 0 !== Vt.targets) return "uses morph targets";
              if (void 0 !== Vt.material && !Mt(Vt.material, ee.length)) return dt;
              const Dt = At ? null === (we = Vt.extensions) || void 0 === we ? void 0 : we.KHR_draco_mesh_compression : void 0;
              if (Dt) {
                if (4 !== qt) return "uses Draco-compressed points";
                if (!St(tt, et, Dt.bufferView) || "object" !== typeof Dt.attributes) return dt
              }
              const mt = Vt.attributes;
              if ("object" !== typeof mt || null === mt) return dt;
              if (void 0 === mt.POSITION) return "has a primitive with no positions";
              if (!Mt(mt.POSITION, Tt.length)) return dt;
              const jt = Tt[mt.POSITION].count;
              for (const [tt, et] of Object.entries(mt)) {
                if (!Mt(et, Tt.length)) return dt;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(tt)) return "uses skins";
                const Vt = Tt[et],
                  Ot = Xt[tt];
                if (Ot && (Vt.componentType !== wt || Vt.normalized || Vt.type !== Ot)) return `stores ${tt} as ${ut(Vt)}`;
                const qt = lt[tt];
                if (qt && (Vt.type !== qt.type || !qt.componentTypes.includes(Vt.componentType) || Vt.componentType === wt === !!Vt.normalized)) return `stores ${tt} as ${ut(Vt)}`;
                if (Et.has(tt) && Vt.count !== jt) return "has vertex attributes of different lengths"
              }
              if (Dt) {
                if (void 0 === Vt.indices) return dt;
                for (const et in Dt.attributes)
                  if (Et.has(et) && void 0 === mt[et]) return dt;
                if (void 0 === Dt.attributes.POSITION) return dt;
                const tt = Mt(Vt.indices, Tt.length) ? Tt[Vt.indices].count : -1;
                if (0 === tt) return dt;
                if (-1 === Xe) Xe = Dt.bufferView, Qe = jt, le = tt;
                else {
                  Ee ??= new Map([
                    [Xe, [Qe, le]]
                  ]);
                  const et = Ee.get(Dt.bufferView);
                  if (et && (et[0] !== jt || et[1] !== tt)) return dt;
                  Ee.set(Dt.bufferView, null !== et && void 0 !== et ? et : [jt, tt])
                }
              }
              let Ht = jt;
              if (void 0 !== Vt.indices) {
                if (!Mt(Vt.indices, Tt.length)) return dt;
                const tt = Tt[Vt.indices];
                if ("SCALAR" !== tt.type) return dt;
                if (5121 === tt.componentType) return "uses 8-bit indices";
                var Ne;
                if (5123 !== tt.componentType && 5125 !== tt.componentType) return `stores indices as ${null!==(Ne=Ot.f[tt.componentType])&&void 0!==Ne?Ne:tt.componentType}`;
                if (!Dt && void 0 === tt.bufferView) return dt;
                Ht = tt.count
              }
              if (4 === qt && Ht % 3 !== 0) return dt
            }
          }
          let ae = 0,
            Me = 0,
            be = 0;
          for (let Ot = 0; Ot < nt.length; Ot++) {
            const tt = nt[Ot].mesh;
            if (void 0 !== tt && de.has(Ot))
              for (const et of te[tt].primitives) be++, ae += Tt[et.attributes.POSITION].count, void 0 !== et.indices && (Me += Tt[et.indices].count)
          }
          const Je = null !== (rt = null !== (Ut = Nt(ae, qt.vertices, "vertices")) && void 0 !== Ut ? Ut : Nt(Me, qt.indices, "indices")) && void 0 !== rt ? rt : Nt(be, qt.primitives, "primitives");
          if (Je) return Je;
          for (const Ot of ee) {
            var Ce, ue;
            if (void 0 !== Ot.emissiveTexture) return "uses an emissive texture";
            const et = null !== (Ce = Ot.alphaMode) && void 0 !== Ce ? Ce : "OPAQUE";
            if ("OPAQUE" !== et && "MASK" !== et && "BLEND" !== et) return dt;
            const Vt = null === (ue = Ot.pbrMetallicRoughness) || void 0 === ue ? void 0 : ue.baseColorTexture;
            if (Vt) {
              var Ke, he, ve, We, Se;
              const et = null !== (Ke = tt.extensionsUsed) && void 0 !== Ke && Ke.includes("KHR_texture_transform") ? null === (he = Vt.extensions) || void 0 === he ? void 0 : he.KHR_texture_transform : void 0;
              if (0 !== (null !== (ve = Vt.texCoord) && void 0 !== ve ? ve : 0) || 0 !== (null !== (We = null === et || void 0 === et ? void 0 : et.texCoord) && void 0 !== We ? We : 0)) return "uses a second UV set";
              const Ot = Ve[Vt.index];
              if (!Ot || !Mt(Ot.source, Oe.length) || void 0 !== Ot.sampler && !Mt(Ot.sampler, null === (Se = tt.samplers) || void 0 === Se ? void 0 : Se.length)) return dt
            }
          }
          for (const Ot of Oe) {
            if (void 0 !== Ot.uri) return jt;
            if (void 0 === Ot.bufferView) return dt;
            const Vt = St(tt, et, Ot.bufferView);
            if (!Vt) return dt;
            if ("image/png" !== Ot.mimeType) {
              var ce, Re, Ie;
              return `has ${vt(null!==(ce=null!==(Re={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(Ie=Ot.mimeType)&&void 0!==Ie?Ie:""])&&void 0!==Re?Re:Ot.mimeType)&&void 0!==ce?ce:"untyped")} image`
            }
            if (!ht(Vt)) return `has ${vt(Kt(Vt))} image`;
            const Dt = new DataView(Vt.buffer, Vt.byteOffset, Vt.byteLength),
              mt = Dt.getUint32(16),
              Ht = Dt.getUint32(20);
            if (mt > qt.imageSide || Ht > qt.imageSide) return `has a ${mt} \xd7 ${Ht} image (the limit is ${qt.imageSide})`
          }
          return null
        }(tt, et)
      } catch {
        return dt
      }
    }

    function Pt(tt) {
      const et = Rt(tt.byteLength);
      if (et) return et;
      try {
        const {
          json: et,
          bin: Vt
        } = (0, Ot.z)(tt);
        return It(et, Vt)
      } catch (Vt) {
        if (Vt instanceof Ot.n) return Vt.reason;
        throw Vt
      }
    }
  },
  34466: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Et,
      f: () => lt,
      i: () => wt,
      l: () => Dt,
      n: () => qt,
      q: () => ft,
      r: () => Xt,
      t: () => Qt,
      w: () => mt,
      z: () => Ht
    });
    var Ot = Vt(34473);
    class qt extends Error {
      constructor(tt) {
        super(`GLB refused: it ${tt}`), this.reason = tt, this.name = "GlbRefused"
      }
    }
    class Dt extends Error {
      constructor(tt) {
        super(tt), this.name = "GlbError"
      }
    }

    function mt(tt) {
      return Reflect.get(tt, "scene")
    }
    const dt = 5130562,
      jt = "is not a binary glTF 2.0 file";

    function Ht(tt) {
      var et;
      const Vt = tt instanceof Uint8Array ? tt : new Uint8Array(tt),
        Dt = (0, Ot.g)(Vt);
      if (null === Dt) throw new qt(jt);
      const mt = Dt.json,
        {
          jsonEnd: Ht,
          length: Xt
        } = Dt,
        Qt = new DataView(Vt.buffer, Vt.byteOffset, Vt.byteLength);
      let lt = -1,
        Et = 0;
      for (let yt = Ht; yt < Xt;) {
        if (yt + 8 > Xt) throw new qt(jt);
        const tt = Qt.getUint32(yt, !0),
          et = Qt.getUint32(yt + 4, !0);
        if (yt + 8 + tt > Xt || et === Ot.e || et === dt && -1 !== lt) throw new qt(jt);
        et === dt && (lt = yt + 8, Et = tt), yt += 8 + tt
      }
      let ft = null;
      const wt = null === (et = mt.buffers) || void 0 === et ? void 0 : et[0];
      if (-1 !== lt && wt && void 0 === wt.uri) {
        if (!(wt.byteLength >= 0) || wt.byteLength > Et) throw new qt(jt);
        ft = new Uint8Array(Vt.buffer, Vt.byteOffset + lt, wt.byteLength)
      }
      return {
        json: mt,
        bin: ft,
        fileBytes: Vt.byteLength
      }
    }

    function Xt(tt) {
      const et = tt.slice(tt.indexOf(",") + 1),
        Vt = Uint8Array.fromBase64;
      if (Vt) return Vt(et).buffer;
      const Ot = atob(et),
        qt = new Uint8Array(Ot.length);
      for (let Dt = 0; Dt < Ot.length; Dt++) qt[Dt] = Ot.charCodeAt(Dt);
      return qt.buffer
    }
    async function Qt(tt) {
      if (tt.startsWith("data:")) return Xt(tt);
      const et = await fetch(tt);
      if (!et.ok) throw new Dt(`fetching ${tt} failed: ${et.status} ${et.statusText}`);
      return await et.arrayBuffer()
    }
    const lt = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      Et = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      ft = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      wt = [
        ["POSITION", "position"],
        ["NORMAL", "normal"],
        ["TANGENT", "tangent"],
        ["TEXCOORD_0", "uv"],
        ["TEXCOORD_1", "uv2"],
        ["TEXCOORD_2", "uv3"],
        ["TEXCOORD_3", "uv4"],
        ["TEXCOORD_4", "uv5"],
        ["TEXCOORD_5", "uv6"],
        ["COLOR_0", "color"]
      ]
  },
  34473: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt,
      g: () => Dt,
      i: () => mt
    });
    const Ot = 1179937895,
      qt = 1313821514;

    function Dt(tt) {
      const et = new DataView(tt.buffer, tt.byteOffset, tt.byteLength);
      if (tt.byteLength < 20 || et.getUint32(0, !0) !== Ot || 2 !== et.getUint32(4, !0)) return null;
      const Vt = Math.min(et.getUint32(8, !0), tt.byteLength),
        Dt = et.getUint32(12, !0);
      if (et.getUint32(16, !0) !== qt || 20 + Dt > Vt) return null;
      let mt;
      try {
        mt = JSON.parse((new TextDecoder).decode(tt.subarray(20, 20 + Dt)))
      } catch {
        return null
      }
      return "object" === typeof mt && null !== mt ? {
        json: mt,
        jsonEnd: 20 + Dt,
        length: Vt
      } : null
    }

    function mt(tt) {
      var et;
      const Vt = null === (et = Dt(tt)) || void 0 === et ? void 0 : et.json;
      if (void 0 === Vt || !Array.isArray(Vt.extensionsUsed) || !Vt.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Ot = Vt.meshes;
      return Array.isArray(Ot) && Ot.some((tt => {
        const et = null === tt || void 0 === tt ? void 0 : tt.primitives;
        return Array.isArray(et) && et.some((tt => {
          const et = null === tt || void 0 === tt ? void 0 : tt.extensions;
          return null != (null === et || void 0 === et ? void 0 : et.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);