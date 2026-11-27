export const id = 227;
export const ids = [227];
export const modules = {
  34984: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ye,
      i: () => Ae,
      l: () => Pe
    });
    var ye = He(34988);
    const be = {
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
      Me = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      Ke = 1048576,
      Ue = "is not a binary glTF 2.0 file",
      Fe = "loads data from outside the file",
      Je = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      oe = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      Re = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      ke = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: Re,
        TEXCOORD_2: Re,
        TEXCOORD_3: Re,
        TEXCOORD_4: Re,
        TEXCOORD_5: Re
      },
      qe = new Set(ye.e.map((ee => {
        let [ie] = ee;
        return ie
      }))),
      fe = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      Te = 5126;

    function pe(ee) {
      return ee.toLocaleString("en-US")
    }

    function Xe(ee, ie, He) {
      return ee > ie ? `has ${pe(ee)} ${He} (the limit is ${pe(ie)})` : null
    }

    function ze(ee, ie) {
      return Number.isInteger(ee) && ee >= 0 && ee < (null !== ie && void 0 !== ie ? ie : 0)
    }

    function Be(ee) {
      return Number.isInteger(ee) && ee >= 0
    }

    function Ee(ee, ie) {
      return void 0 !== ee && (!Array.isArray(ee) || ee.length > ie)
    }

    function ge(ee, ie) {
      return "object" === typeof ee && null !== ee && Object.keys(ee).length > ie
    }

    function Oe(ee) {
      var ie;
      return `${ee.normalized?"normalized ":""}${null!==(ie=ye.d[ee.componentType])&&void 0!==ie?ie:ee.componentType} ${ee.type}`
    }

    function de(ee) {
      const ie = ie => {
        var He;
        return null !== (He = ee[ie]) && void 0 !== He ? He : -1
      };
      return 255 === ie(0) && 216 === ie(1) ? "JPEG" : 82 === ie(0) && 73 === ie(1) && 87 === ie(8) && 69 === ie(9) ? "WebP" : 171 === ie(0) && 75 === ie(1) && 84 === ie(2) && 88 === ie(3) ? "KTX2" : "non-PNG"
    }

    function We(ee) {
      return ee.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((ie, He) => ee[He] === ie)) && 73 === ee[12] && 72 === ee[13] && 68 === ee[14] && 82 === ee[15]
    }

    function te(ee) {
      return /^[aeiou]/i.test(ee) ? `an ${ee}` : `a ${ee}`
    }

    function Ze(ee) {
      const ie = ee.byteStride;
      return void 0 === ie || Number.isInteger(ie) && ie >= 4 && ie <= 252 && ie % 4 === 0
    }

    function we(ee, ie, He) {
      var ye, be;
      const Me = null === (ye = ee.bufferViews) || void 0 === ye ? void 0 : ye[He];
      if (!Me || !ie || 0 !== Me.buffer) return null;
      const Ke = null !== (be = Me.byteOffset) && void 0 !== be ? be : 0;
      return !Be(Ke) || !Be(Me.byteLength) || Ke + Me.byteLength > ie.byteLength ? null : ie.subarray(Ke, Ke + Me.byteLength)
    }

    function De(ee, ie) {
      var He, be, Me;
      const Ke = ye.m[ie.type],
        Ue = ye.c[ie.componentType];
      if (!Ke || !Ue || !Number.isInteger(ie.count) || ie.count < 0) return !1;
      if (void 0 === ie.bufferView) return !0;
      const Fe = null === (He = ee.bufferViews) || void 0 === He ? void 0 : He[ie.bufferView],
        Je = null !== (be = ie.byteOffset) && void 0 !== be ? be : 0;
      if (!Fe || !Be(Je) || Je % Ue !== 0) return !1;
      const oe = Ke * Ue,
        Re = null !== (Me = Fe.byteStride) && void 0 !== Me ? Me : oe;
      if (Re < oe) return !1;
      return (0 === ie.count ? 0 : Je + Re * (ie.count - 1) + oe) <= Fe.byteLength
    }

    function Pe(ee) {
      return ee > be.fileBytes ? `is ${(ee/Ke).toFixed(1)} MiB (the limit is ${be.fileBytes/Ke} MiB)` : null
    }

    function Ae(ee, ie) {
      try {
        return function(ee, ie) {
          var He, Ke, Re, pe, Be, Pe, Ae, Ye, Ve, ae, ce, xe, Le, Ce, ve, ue, me;
          const le = Array.isArray(ee.extensionsUsed) && ee.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(ee, ie) {
              var He, ye;
              const {
                items: be,
                perFile: Ke,
                surfaces: Ue,
                few: Fe,
                bounds: Je,
                attributeMembers: oe
              } = Me;
              if (Ee(ee.extensionsRequired, Fe) || Ee(ee.animations, 1 / 0) || Ee(ee.skins, 1 / 0)) return !0;
              if (null !== (He = ee.animations) && void 0 !== He && He.length || null !== (ye = ee.skins) && void 0 !== ye && ye.length) return !1;
              if ([
                  [ee.buffers, Fe],
                  [ee.scenes, Fe],
                  [ee.bufferViews, be],
                  [ee.accessors, be],
                  [ee.nodes, be],
                  [ee.meshes, be],
                  [ee.materials, Ue],
                  [ee.textures, Ue],
                  [ee.samplers, Ue],
                  [ee.images, Ue]
                ].some((ee => {
                  let [ie, He] = ee;
                  return Ee(ie, He)
                }))) return !0;
              for (const Me of null !== (Re = ee.accessors) && void 0 !== Re ? Re : []) {
                var Re, ke, qe;
                if (Number.isInteger(Me.count) && (!Number.isSafeInteger(Me.count) || Object.is(Me.count, -0)) || Ee(null !== (ke = Me.min) && void 0 !== ke ? ke : void 0, Je) || Ee(null !== (qe = Me.max) && void 0 !== qe ? qe : void 0, Je)) return !0
              }
              for (const Me of null !== (fe = ee.scenes) && void 0 !== fe ? fe : []) {
                var fe;
                if (Ee(Me.nodes, be)) return !0
              }
              let Te = 0;
              for (const Me of null !== (pe = ee.nodes) && void 0 !== pe ? pe : []) {
                var pe, Xe, ze;
                if (Ee(Me.children, Ke)) return !0;
                Te += null !== (Xe = null === (ze = Me.children) || void 0 === ze ? void 0 : ze.length) && void 0 !== Xe ? Xe : 0
              }
              if (Te > Ke) return !0;
              let Be = 0;
              for (const Me of null !== (Oe = ee.meshes) && void 0 !== Oe ? Oe : []) {
                var Oe;
                if (!Array.isArray(Me.primitives)) return !0;
                if (Be += Me.primitives.length, Be > Ke) return !0;
                for (const ee of Me.primitives) {
                  var de;
                  const He = ie ? null === (de = ee.extensions) || void 0 === de ? void 0 : de.KHR_draco_mesh_compression : void 0;
                  if (ge(ee.attributes, oe) || ge(null === He || void 0 === He ? void 0 : He.attributes, oe)) return !0
                }
              }
              return !1
            }(ee, le)) return Ue;
          const Se = null === (He = ee.asset) || void 0 === He ? void 0 : He.version;
          if ("string" !== typeof Se || !/^2\.\d+/.test(Se)) return `uses glTF version ${null!==Se&&void 0!==Se?Se:"(none)"}`;
          const ne = null === (Ke = ee.asset) || void 0 === Ke ? void 0 : Ke.minVersion;
          if (void 0 !== ne && "2.0" !== ne) return `uses glTF version ${ne}`;
          for (const ye of null !== (je = ee.extensionsRequired) && void 0 !== je ? je : []) {
            var je;
            if (!Je.has(ye)) return `requires the glTF extension ${ye}`
          }
          if (null !== (Re = ee.animations) && void 0 !== Re && Re.length) return "has animations";
          if (null !== (pe = ee.skins) && void 0 !== pe && pe.length) return "uses skins";
          const se = null !== (Be = ee.buffers) && void 0 !== Be ? Be : [];
          for (const [ye, be] of se.entries()) {
            if (void 0 !== be.uri) return Fe;
            if (ye > 0 || !ie) return Ue
          }
          for (const [ye, be] of(null !== (Ie = ee.bufferViews) && void 0 !== Ie ? Ie : []).entries()) {
            var Ie;
            if (!we(ee, ie, ye) || !Ze(be)) return Ue
          }
          const he = null !== (Pe = ee.accessors) && void 0 !== Pe ? Pe : [];
          for (const ye of he) {
            if (void 0 !== ye.sparse) return "uses sparse accessors";
            const ie = Number.isInteger(ye.count) ? Xe(ye.count, be.accessorElements, "elements in an accessor") : null;
            if (ie) return ie;
            if (!De(ee, ye)) return Ue
          }
          const Ne = null !== (Ae = ee.scenes) && void 0 !== Ae ? Ae : [];
          if (1 !== Ne.length) return `has ${Ne.length} scenes`;
          const Ge = (0, ye.u)(ee);
          if (void 0 !== Ge && 0 !== Ge) return Ue;
          const re = null !== (Ye = ee.nodes) && void 0 !== Ye ? Ye : [],
            Qe = null !== (Ve = ee.meshes) && void 0 !== Ve ? Ve : [],
            ei = null !== (ae = ee.materials) && void 0 !== ae ? ae : [],
            ii = null !== (ce = ee.textures) && void 0 !== ce ? ce : [],
            Hi = null !== (xe = ee.images) && void 0 !== xe ? xe : [],
            yi = null !== (Le = null !== (Ce = null !== (ve = Xe(re.length, be.nodes, "nodes")) && void 0 !== ve ? ve : Xe(Qe.length, be.meshes, "meshes")) && void 0 !== Ce ? Ce : Xe(ei.length, be.materials, "materials")) && void 0 !== Le ? Le : Xe(Hi.length, be.images, "images");
          if (yi) return yi;
          const bi = new Set;
          for (const ye of re)
            for (const ee of null !== (Mi = ye.children) && void 0 !== Mi ? Mi : []) {
              var Mi;
              if (!ze(ee, re.length) || bi.has(ee)) return Ue;
              bi.add(ee)
            }
          const Ki = new Set,
            Ui = ee => {
              var ie;
              return !Ki.has(ee) && (Ki.add(ee), (null !== (ie = re[ee].children) && void 0 !== ie ? ie : []).every(Ui))
            };
          for (const ye of null !== (Fi = Ne[0].nodes) && void 0 !== Fi ? Fi : []) {
            var Fi;
            if (!ze(ye, re.length) || bi.has(ye) || !Ui(ye)) return Ue
          }
          for (const ye of re) {
            if (void 0 !== ye.matrix) return "uses node matrices";
            if (void 0 !== ye.skin) return "uses skins";
            if (void 0 !== ye.weights) return "uses morph targets";
            if (void 0 !== ye.mesh && !ze(ye.mesh, Qe.length)) return Ue;
            const ee = [
              [ye.translation, 3],
              [ye.rotation, 4],
              [ye.scale, 3]
            ];
            for (const [ie, He] of ee)
              if (void 0 !== ie && (!Array.isArray(ie) || ie.length !== He || !ie.every((ee => Number.isFinite(ee))))) return Ue
          }
          let Ji = -1,
            oi = 0,
            Ri = 0,
            ki = null;
          for (const be of Qe) {
            if (void 0 !== be.weights) return "uses morph targets";
            if (0 === be.primitives.length) return Ue;
            for (const He of be.primitives) {
              var qi, fi;
              const be = null !== (qi = He.mode) && void 0 !== qi ? qi : 4;
              var Ti;
              if (4 !== be && 0 !== be) return `uses ${null!==(Ti=fe[be])&&void 0!==Ti?Ti:`mode ${be}`} primitives`;
              if (void 0 !== He.targets) return "uses morph targets";
              if (void 0 !== He.material && !ze(He.material, ei.length)) return Ue;
              const Me = le ? null === (fi = He.extensions) || void 0 === fi ? void 0 : fi.KHR_draco_mesh_compression : void 0;
              if (Me) {
                if (4 !== be) return "uses Draco-compressed points";
                if (!we(ee, ie, Me.bufferView) || "object" !== typeof Me.attributes) return Ue
              }
              const Ke = He.attributes;
              if ("object" !== typeof Ke || null === Ke) return Ue;
              if (void 0 === Ke.POSITION) return "has a primitive with no positions";
              if (!ze(Ke.POSITION, he.length)) return Ue;
              const Fe = he[Ke.POSITION].count;
              for (const [ee, ie] of Object.entries(Ke)) {
                if (!ze(ie, he.length)) return Ue;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(ee)) return "uses skins";
                const He = he[ie],
                  ye = oe[ee];
                if (ye && (He.componentType !== Te || He.normalized || He.type !== ye)) return `stores ${ee} as ${Oe(He)}`;
                const be = ke[ee];
                if (be && (He.type !== be.type || !be.componentTypes.includes(He.componentType) || He.componentType === Te === !!He.normalized)) return `stores ${ee} as ${Oe(He)}`;
                if (qe.has(ee) && He.count !== Fe) return "has vertex attributes of different lengths"
              }
              if (Me) {
                if (void 0 === He.indices) return Ue;
                for (const ie in Me.attributes)
                  if (qe.has(ie) && void 0 === Ke[ie]) return Ue;
                if (void 0 === Me.attributes.POSITION) return Ue;
                const ee = ze(He.indices, he.length) ? he[He.indices].count : -1;
                if (0 === ee) return Ue;
                if (-1 === Ji) Ji = Me.bufferView, oi = Fe, Ri = ee;
                else {
                  ki ??= new Map([
                    [Ji, [oi, Ri]]
                  ]);
                  const ie = ki.get(Me.bufferView);
                  if (ie && (ie[0] !== Fe || ie[1] !== ee)) return Ue;
                  ki.set(Me.bufferView, null !== ie && void 0 !== ie ? ie : [Fe, ee])
                }
              }
              let Je = Fe;
              if (void 0 !== He.indices) {
                if (!ze(He.indices, he.length)) return Ue;
                const ee = he[He.indices];
                if ("SCALAR" !== ee.type) return Ue;
                if (5121 === ee.componentType) return "uses 8-bit indices";
                var Xi;
                if (5123 !== ee.componentType && 5125 !== ee.componentType) return `stores indices as ${null!==(Xi=ye.d[ee.componentType])&&void 0!==Xi?Xi:ee.componentType}`;
                if (!Me && void 0 === ee.bufferView) return Ue;
                Je = ee.count
              }
              if (4 === be && Je % 3 !== 0) return Ue
            }
          }
          let zi = 0,
            Bi = 0,
            Ei = 0;
          for (let ye = 0; ye < re.length; ye++) {
            const ee = re[ye].mesh;
            if (void 0 !== ee && Ki.has(ye))
              for (const ie of Qe[ee].primitives) Ei++, zi += he[ie.attributes.POSITION].count, void 0 !== ie.indices && (Bi += he[ie.indices].count)
          }
          const gi = null !== (ue = null !== (me = Xe(zi, be.vertices, "vertices")) && void 0 !== me ? me : Xe(Bi, be.indices, "indices")) && void 0 !== ue ? ue : Xe(Ei, be.primitives, "primitives");
          if (gi) return gi;
          for (const ye of ei) {
            var Oi, di;
            if (void 0 !== ye.emissiveTexture) return "uses an emissive texture";
            const ie = null !== (Oi = ye.alphaMode) && void 0 !== Oi ? Oi : "OPAQUE";
            if ("OPAQUE" !== ie && "MASK" !== ie && "BLEND" !== ie) return Ue;
            const He = null === (di = ye.pbrMetallicRoughness) || void 0 === di ? void 0 : di.baseColorTexture;
            if (He) {
              var Wi, ti, Zi, wi, Di;
              const ie = null !== (Wi = ee.extensionsUsed) && void 0 !== Wi && Wi.includes("KHR_texture_transform") ? null === (ti = He.extensions) || void 0 === ti ? void 0 : ti.KHR_texture_transform : void 0;
              if (0 !== (null !== (Zi = He.texCoord) && void 0 !== Zi ? Zi : 0) || 0 !== (null !== (wi = null === ie || void 0 === ie ? void 0 : ie.texCoord) && void 0 !== wi ? wi : 0)) return "uses a second UV set";
              const ye = ii[He.index];
              if (!ye || !ze(ye.source, Hi.length) || void 0 !== ye.sampler && !ze(ye.sampler, null === (Di = ee.samplers) || void 0 === Di ? void 0 : Di.length)) return Ue
            }
          }
          for (const ye of Hi) {
            if (void 0 !== ye.uri) return Fe;
            if (void 0 === ye.bufferView) return Ue;
            const He = we(ee, ie, ye.bufferView);
            if (!He) return Ue;
            if ("image/png" !== ye.mimeType) {
              var Pi, Ai, Yi;
              return `has ${te(null!==(Pi=null!==(Ai={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(Yi=ye.mimeType)&&void 0!==Yi?Yi:""])&&void 0!==Ai?Ai:ye.mimeType)&&void 0!==Pi?Pi:"untyped")} image`
            }
            if (!We(He)) return `has ${te(de(He))} image`;
            const Me = new DataView(He.buffer, He.byteOffset, He.byteLength),
              Ke = Me.getUint32(16),
              Je = Me.getUint32(20);
            if (Ke > be.imageSide || Je > be.imageSide) return `has a ${Ke} \xd7 ${Je} image (the limit is ${be.imageSide})`
          }
          return null
        }(ee, ie)
      } catch {
        return Ue
      }
    }

    function Ye(ee) {
      const ie = Pe(ee.byteLength);
      if (ie) return ie;
      try {
        const {
          json: ie,
          bin: He
        } = (0, ye.y)(ee);
        return Ae(ie, He)
      } catch (He) {
        if (He instanceof ye.k) return He.reason;
        throw He
      }
    }
  },
  34988: (ee, ie, He) => {
    He.d(ie, {
      c: () => fe,
      d: () => qe,
      e: () => pe,
      i: () => Ke,
      k: () => Me,
      m: () => Te,
      p: () => Re,
      s: () => ke,
      u: () => Ue,
      y: () => oe
    });
    const ye = 1179937895,
      be = 1313821514;
    class Me extends Error {
      constructor(ee) {
        super(`GLB refused: it ${ee}`), this.reason = ee, this.name = "GlbRefused"
      }
    }
    class Ke extends Error {
      constructor(ee) {
        super(ee), this.name = "GlbError"
      }
    }

    function Ue(ee) {
      return Reflect.get(ee, "scene")
    }
    const Fe = 5130562,
      Je = "is not a binary glTF 2.0 file";

    function oe(ee) {
      var ie;
      const He = ee instanceof Uint8Array ? ee : new Uint8Array(ee),
        Ke = function(ee) {
          const ie = new DataView(ee.buffer, ee.byteOffset, ee.byteLength);
          if (ee.byteLength < 20 || ie.getUint32(0, !0) !== ye || 2 !== ie.getUint32(4, !0)) return null;
          const He = Math.min(ie.getUint32(8, !0), ee.byteLength),
            Me = ie.getUint32(12, !0);
          if (ie.getUint32(16, !0) !== be || 20 + Me > He) return null;
          let Ke;
          try {
            Ke = JSON.parse((new TextDecoder).decode(ee.subarray(20, 20 + Me)))
          } catch {
            return null
          }
          return "object" === typeof Ke && null !== Ke ? {
            json: Ke,
            jsonEnd: 20 + Me,
            length: He
          } : null
        }(He);
      if (null === Ke) throw new Me(Je);
      const Ue = Ke.json,
        {
          jsonEnd: oe,
          length: Re
        } = Ke,
        ke = new DataView(He.buffer, He.byteOffset, He.byteLength);
      let qe = -1,
        fe = 0;
      for (let ye = oe; ye < Re;) {
        if (ye + 8 > Re) throw new Me(Je);
        const ee = ke.getUint32(ye, !0),
          ie = ke.getUint32(ye + 4, !0);
        if (ye + 8 + ee > Re || ie === be || ie === Fe && -1 !== qe) throw new Me(Je);
        ie === Fe && (qe = ye + 8, fe = ee), ye += 8 + ee
      }
      let Te = null;
      const pe = null === (ie = Ue.buffers) || void 0 === ie ? void 0 : ie[0];
      if (-1 !== qe && pe && void 0 === pe.uri) {
        if (!(pe.byteLength >= 0) || pe.byteLength > fe) throw new Me(Je);
        Te = new Uint8Array(He.buffer, He.byteOffset + qe, pe.byteLength)
      }
      return {
        json: Ue,
        bin: Te,
        fileBytes: He.byteLength
      }
    }

    function Re(ee) {
      const ie = ee.slice(ee.indexOf(",") + 1),
        He = Uint8Array.fromBase64;
      if (He) return He(ie).buffer;
      const ye = atob(ie),
        be = new Uint8Array(ye.length);
      for (let Me = 0; Me < ye.length; Me++) be[Me] = ye.charCodeAt(Me);
      return be.buffer
    }
    async function ke(ee) {
      if (ee.startsWith("data:")) return Re(ee);
      const ie = await fetch(ee);
      if (!ie.ok) throw new Ke(`fetching ${ee} failed: ${ie.status} ${ie.statusText}`);
      return await ie.arrayBuffer()
    }
    const qe = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      fe = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      Te = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      pe = [
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
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);