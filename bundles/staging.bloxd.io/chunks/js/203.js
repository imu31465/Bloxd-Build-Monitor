export const id = 203;
export const ids = [203];
export const modules = {
  34357: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Nm,
      f: () => em,
      h: () => Sm
    });
    var hm = fm(34363);
    const Am = {
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
      am = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      xm = 1048576,
      wm = "is not a binary glTF 2.0 file",
      Dm = "loads data from outside the file",
      im = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      Rm = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      pm = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      Em = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: pm,
        TEXCOORD_2: pm,
        TEXCOORD_3: pm,
        TEXCOORD_4: pm,
        TEXCOORD_5: pm
      },
      om = new Set(hm.j.map((mm => {
        let [Tm] = mm;
        return Tm
      }))),
      Om = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      Ym = 5126;

    function qm(mm) {
      return mm.toLocaleString("en-US")
    }

    function jm(mm, Tm, fm) {
      return mm > Tm ? `has ${qm(mm)} ${fm} (the limit is ${qm(Tm)})` : null
    }

    function Vm(mm, Tm) {
      return Number.isInteger(mm) && mm >= 0 && mm < (null !== Tm && void 0 !== Tm ? Tm : 0)
    }

    function Im(mm) {
      return Number.isInteger(mm) && mm >= 0
    }

    function Km(mm, Tm) {
      return void 0 !== mm && (!Array.isArray(mm) || mm.length > Tm)
    }

    function Qm(mm, Tm) {
      return "object" === typeof mm && null !== mm && Object.keys(mm).length > Tm
    }

    function nm(mm) {
      var Tm;
      return `${mm.normalized?"normalized ":""}${null!==(Tm=hm.f[mm.componentType])&&void 0!==Tm?Tm:mm.componentType} ${mm.type}`
    }

    function Jm(mm) {
      const Tm = Tm => {
        var fm;
        return null !== (fm = mm[Tm]) && void 0 !== fm ? fm : -1
      };
      return 255 === Tm(0) && 216 === Tm(1) ? "JPEG" : 82 === Tm(0) && 73 === Tm(1) && 87 === Tm(8) && 69 === Tm(9) ? "WebP" : 171 === Tm(0) && 75 === Tm(1) && 84 === Tm(2) && 88 === Tm(3) ? "KTX2" : "non-PNG"
    }

    function cm(mm) {
      return mm.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((Tm, fm) => mm[fm] === Tm)) && 73 === mm[12] && 72 === mm[13] && 68 === mm[14] && 82 === mm[15]
    }

    function zm(mm) {
      return /^[aeiou]/i.test(mm) ? `an ${mm}` : `a ${mm}`
    }

    function Zm(mm) {
      const Tm = mm.byteStride;
      return void 0 === Tm || Number.isInteger(Tm) && Tm >= 4 && Tm <= 252 && Tm % 4 === 0
    }

    function km(mm, Tm, fm) {
      var hm, Am;
      const am = null === (hm = mm.bufferViews) || void 0 === hm ? void 0 : hm[fm];
      if (!am || !Tm || 0 !== am.buffer) return null;
      const xm = null !== (Am = am.byteOffset) && void 0 !== Am ? Am : 0;
      return !Im(xm) || !Im(am.byteLength) || xm + am.byteLength > Tm.byteLength ? null : Tm.subarray(xm, xm + am.byteLength)
    }

    function bm(mm, Tm) {
      var fm, Am, am;
      const xm = hm.q[Tm.type],
        wm = hm.e[Tm.componentType];
      if (!xm || !wm || !Number.isInteger(Tm.count) || Tm.count < 0) return !1;
      if (void 0 === Tm.bufferView) return !0;
      const Dm = null === (fm = mm.bufferViews) || void 0 === fm ? void 0 : fm[Tm.bufferView],
        im = null !== (Am = Tm.byteOffset) && void 0 !== Am ? Am : 0;
      if (!Dm || !Im(im) || im % wm !== 0) return !1;
      const Rm = xm * wm,
        pm = null !== (am = Dm.byteStride) && void 0 !== am ? am : Rm;
      if (pm < Rm) return !1;
      return (0 === Tm.count ? 0 : im + pm * (Tm.count - 1) + Rm) <= Dm.byteLength
    }

    function Sm(mm) {
      return mm > Am.fileBytes ? `is ${(mm/xm).toFixed(1)} MiB (the limit is ${Am.fileBytes/xm} MiB)` : null
    }

    function em(mm, Tm) {
      try {
        return function(mm, Tm) {
          var fm, xm, pm, qm, Im, Sm, em, Nm, Gm, Xm, Pm, Hm, ym, Cm, rm, sm, lm;
          const Mm = Array.isArray(mm.extensionsUsed) && mm.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(mm, Tm) {
              var fm, hm;
              const {
                items: Am,
                perFile: xm,
                surfaces: wm,
                few: Dm,
                bounds: im,
                attributeMembers: Rm
              } = am;
              if (Km(mm.extensionsRequired, Dm) || Km(mm.animations, 1 / 0) || Km(mm.skins, 1 / 0)) return !0;
              if (null !== (fm = mm.animations) && void 0 !== fm && fm.length || null !== (hm = mm.skins) && void 0 !== hm && hm.length) return !1;
              if ([
                  [mm.buffers, Dm],
                  [mm.scenes, Dm],
                  [mm.bufferViews, Am],
                  [mm.accessors, Am],
                  [mm.nodes, Am],
                  [mm.meshes, Am],
                  [mm.materials, wm],
                  [mm.textures, wm],
                  [mm.samplers, wm],
                  [mm.images, wm]
                ].some((mm => {
                  let [Tm, fm] = mm;
                  return Km(Tm, fm)
                }))) return !0;
              for (const am of null !== (pm = mm.accessors) && void 0 !== pm ? pm : []) {
                var pm, Em, om;
                if (Number.isInteger(am.count) && (!Number.isSafeInteger(am.count) || Object.is(am.count, -0)) || Km(null !== (Em = am.min) && void 0 !== Em ? Em : void 0, im) || Km(null !== (om = am.max) && void 0 !== om ? om : void 0, im)) return !0
              }
              for (const am of null !== (Om = mm.scenes) && void 0 !== Om ? Om : []) {
                var Om;
                if (Km(am.nodes, Am)) return !0
              }
              let Ym = 0;
              for (const am of null !== (qm = mm.nodes) && void 0 !== qm ? qm : []) {
                var qm, jm, Vm;
                if (Km(am.children, xm)) return !0;
                Ym += null !== (jm = null === (Vm = am.children) || void 0 === Vm ? void 0 : Vm.length) && void 0 !== jm ? jm : 0
              }
              if (Ym > xm) return !0;
              let Im = 0;
              for (const am of null !== (nm = mm.meshes) && void 0 !== nm ? nm : []) {
                var nm;
                if (!Array.isArray(am.primitives)) return !0;
                if (Im += am.primitives.length, Im > xm) return !0;
                for (const mm of am.primitives) {
                  var Jm;
                  const fm = Tm ? null === (Jm = mm.extensions) || void 0 === Jm ? void 0 : Jm.KHR_draco_mesh_compression : void 0;
                  if (Qm(mm.attributes, Rm) || Qm(null === fm || void 0 === fm ? void 0 : fm.attributes, Rm)) return !0
                }
              }
              return !1
            }(mm, Mm)) return wm;
          const um = null === (fm = mm.asset) || void 0 === fm ? void 0 : fm.version;
          if ("string" !== typeof um || !/^2\.\d+/.test(um)) return `uses glTF version ${null!==um&&void 0!==um?um:"(none)"}`;
          const Bm = null === (xm = mm.asset) || void 0 === xm ? void 0 : xm.minVersion;
          if (void 0 !== Bm && "2.0" !== Bm) return `uses glTF version ${Bm}`;
          for (const hm of null !== (Lm = mm.extensionsRequired) && void 0 !== Lm ? Lm : []) {
            var Lm;
            if (!im.has(hm)) return `requires the glTF extension ${hm}`
          }
          if (null !== (pm = mm.animations) && void 0 !== pm && pm.length) return "has animations";
          if (null !== (qm = mm.skins) && void 0 !== qm && qm.length) return "uses skins";
          const tm = null !== (Im = mm.buffers) && void 0 !== Im ? Im : [];
          for (const [hm, Am] of tm.entries()) {
            if (void 0 !== Am.uri) return Dm;
            if (hm > 0 || !Tm) return wm
          }
          for (const [hm, Am] of(null !== (Um = mm.bufferViews) && void 0 !== Um ? Um : []).entries()) {
            var Um;
            if (!km(mm, Tm, hm) || !Zm(Am)) return wm
          }
          const dm = null !== (Sm = mm.accessors) && void 0 !== Sm ? Sm : [];
          for (const hm of dm) {
            if (void 0 !== hm.sparse) return "uses sparse accessors";
            const Tm = Number.isInteger(hm.count) ? jm(hm.count, Am.accessorElements, "elements in an accessor") : null;
            if (Tm) return Tm;
            if (!bm(mm, hm)) return wm
          }
          const gm = null !== (em = mm.scenes) && void 0 !== em ? em : [];
          if (1 !== gm.length) return `has ${gm.length} scenes`;
          const Wm = (0, hm.v)(mm);
          if (void 0 !== Wm && 0 !== Wm) return wm;
          const Fm = null !== (Nm = mm.nodes) && void 0 !== Nm ? Nm : [],
            mT = null !== (Gm = mm.meshes) && void 0 !== Gm ? Gm : [],
            TT = null !== (Xm = mm.materials) && void 0 !== Xm ? Xm : [],
            fT = null !== (Pm = mm.textures) && void 0 !== Pm ? Pm : [],
            hT = null !== (Hm = mm.images) && void 0 !== Hm ? Hm : [],
            AT = null !== (ym = null !== (Cm = null !== (rm = jm(Fm.length, Am.nodes, "nodes")) && void 0 !== rm ? rm : jm(mT.length, Am.meshes, "meshes")) && void 0 !== Cm ? Cm : jm(TT.length, Am.materials, "materials")) && void 0 !== ym ? ym : jm(hT.length, Am.images, "images");
          if (AT) return AT;
          const aT = new Set;
          for (const hm of Fm)
            for (const mm of null !== (xT = hm.children) && void 0 !== xT ? xT : []) {
              var xT;
              if (!Vm(mm, Fm.length) || aT.has(mm)) return wm;
              aT.add(mm)
            }
          const wT = new Set,
            DT = mm => {
              var Tm;
              return !wT.has(mm) && (wT.add(mm), (null !== (Tm = Fm[mm].children) && void 0 !== Tm ? Tm : []).every(DT))
            };
          for (const hm of null !== (iT = gm[0].nodes) && void 0 !== iT ? iT : []) {
            var iT;
            if (!Vm(hm, Fm.length) || aT.has(hm) || !DT(hm)) return wm
          }
          for (const hm of Fm) {
            if (void 0 !== hm.matrix) return "uses node matrices";
            if (void 0 !== hm.skin) return "uses skins";
            if (void 0 !== hm.weights) return "uses morph targets";
            if (void 0 !== hm.mesh && !Vm(hm.mesh, mT.length)) return wm;
            const mm = [
              [hm.translation, 3],
              [hm.rotation, 4],
              [hm.scale, 3]
            ];
            for (const [Tm, fm] of mm)
              if (void 0 !== Tm && (!Array.isArray(Tm) || Tm.length !== fm || !Tm.every((mm => Number.isFinite(mm))))) return wm
          }
          let RT = -1,
            pT = 0,
            ET = 0,
            oT = null;
          for (const Am of mT) {
            if (void 0 !== Am.weights) return "uses morph targets";
            if (0 === Am.primitives.length) return wm;
            for (const fm of Am.primitives) {
              var OT, YT;
              const Am = null !== (OT = fm.mode) && void 0 !== OT ? OT : 4;
              var qT;
              if (4 !== Am && 0 !== Am) return `uses ${null!==(qT=Om[Am])&&void 0!==qT?qT:`mode ${Am}`} primitives`;
              if (void 0 !== fm.targets) return "uses morph targets";
              if (void 0 !== fm.material && !Vm(fm.material, TT.length)) return wm;
              const am = Mm ? null === (YT = fm.extensions) || void 0 === YT ? void 0 : YT.KHR_draco_mesh_compression : void 0;
              if (am) {
                if (4 !== Am) return "uses Draco-compressed points";
                if (!km(mm, Tm, am.bufferView) || "object" !== typeof am.attributes) return wm
              }
              const xm = fm.attributes;
              if ("object" !== typeof xm || null === xm) return wm;
              if (void 0 === xm.POSITION) return "has a primitive with no positions";
              if (!Vm(xm.POSITION, dm.length)) return wm;
              const Dm = dm[xm.POSITION].count;
              for (const [mm, Tm] of Object.entries(xm)) {
                if (!Vm(Tm, dm.length)) return wm;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(mm)) return "uses skins";
                const fm = dm[Tm],
                  hm = Rm[mm];
                if (hm && (fm.componentType !== Ym || fm.normalized || fm.type !== hm)) return `stores ${mm} as ${nm(fm)}`;
                const Am = Em[mm];
                if (Am && (fm.type !== Am.type || !Am.componentTypes.includes(fm.componentType) || fm.componentType === Ym === !!fm.normalized)) return `stores ${mm} as ${nm(fm)}`;
                if (om.has(mm) && fm.count !== Dm) return "has vertex attributes of different lengths"
              }
              if (am) {
                if (void 0 === fm.indices) return wm;
                for (const Tm in am.attributes)
                  if (om.has(Tm) && void 0 === xm[Tm]) return wm;
                if (void 0 === am.attributes.POSITION) return wm;
                const mm = Vm(fm.indices, dm.length) ? dm[fm.indices].count : -1;
                if (0 === mm) return wm;
                if (-1 === RT) RT = am.bufferView, pT = Dm, ET = mm;
                else {
                  oT ??= new Map([
                    [RT, [pT, ET]]
                  ]);
                  const Tm = oT.get(am.bufferView);
                  if (Tm && (Tm[0] !== Dm || Tm[1] !== mm)) return wm;
                  oT.set(am.bufferView, null !== Tm && void 0 !== Tm ? Tm : [Dm, mm])
                }
              }
              let im = Dm;
              if (void 0 !== fm.indices) {
                if (!Vm(fm.indices, dm.length)) return wm;
                const mm = dm[fm.indices];
                if ("SCALAR" !== mm.type) return wm;
                if (5121 === mm.componentType) return "uses 8-bit indices";
                var jT;
                if (5123 !== mm.componentType && 5125 !== mm.componentType) return `stores indices as ${null!==(jT=hm.f[mm.componentType])&&void 0!==jT?jT:mm.componentType}`;
                if (!am && void 0 === mm.bufferView) return wm;
                im = mm.count
              }
              if (4 === Am && im % 3 !== 0) return wm
            }
          }
          let VT = 0,
            IT = 0,
            KT = 0;
          for (let hm = 0; hm < Fm.length; hm++) {
            const mm = Fm[hm].mesh;
            if (void 0 !== mm && wT.has(hm))
              for (const Tm of mT[mm].primitives) KT++, VT += dm[Tm.attributes.POSITION].count, void 0 !== Tm.indices && (IT += dm[Tm.indices].count)
          }
          const QT = null !== (sm = null !== (lm = jm(VT, Am.vertices, "vertices")) && void 0 !== lm ? lm : jm(IT, Am.indices, "indices")) && void 0 !== sm ? sm : jm(KT, Am.primitives, "primitives");
          if (QT) return QT;
          for (const hm of TT) {
            var nT, JT;
            if (void 0 !== hm.emissiveTexture) return "uses an emissive texture";
            const Tm = null !== (nT = hm.alphaMode) && void 0 !== nT ? nT : "OPAQUE";
            if ("OPAQUE" !== Tm && "MASK" !== Tm && "BLEND" !== Tm) return wm;
            const fm = null === (JT = hm.pbrMetallicRoughness) || void 0 === JT ? void 0 : JT.baseColorTexture;
            if (fm) {
              var cT, zT, ZT, kT, bT;
              const Tm = null !== (cT = mm.extensionsUsed) && void 0 !== cT && cT.includes("KHR_texture_transform") ? null === (zT = fm.extensions) || void 0 === zT ? void 0 : zT.KHR_texture_transform : void 0;
              if (0 !== (null !== (ZT = fm.texCoord) && void 0 !== ZT ? ZT : 0) || 0 !== (null !== (kT = null === Tm || void 0 === Tm ? void 0 : Tm.texCoord) && void 0 !== kT ? kT : 0)) return "uses a second UV set";
              const hm = fT[fm.index];
              if (!hm || !Vm(hm.source, hT.length) || void 0 !== hm.sampler && !Vm(hm.sampler, null === (bT = mm.samplers) || void 0 === bT ? void 0 : bT.length)) return wm
            }
          }
          for (const hm of hT) {
            if (void 0 !== hm.uri) return Dm;
            if (void 0 === hm.bufferView) return wm;
            const fm = km(mm, Tm, hm.bufferView);
            if (!fm) return wm;
            if ("image/png" !== hm.mimeType) {
              var ST, eT, NT;
              return `has ${zm(null!==(ST=null!==(eT={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(NT=hm.mimeType)&&void 0!==NT?NT:""])&&void 0!==eT?eT:hm.mimeType)&&void 0!==ST?ST:"untyped")} image`
            }
            if (!cm(fm)) return `has ${zm(Jm(fm))} image`;
            const am = new DataView(fm.buffer, fm.byteOffset, fm.byteLength),
              xm = am.getUint32(16),
              im = am.getUint32(20);
            if (xm > Am.imageSide || im > Am.imageSide) return `has a ${xm} \xd7 ${im} image (the limit is ${Am.imageSide})`
          }
          return null
        }(mm, Tm)
      } catch {
        return wm
      }
    }

    function Nm(mm) {
      const Tm = Sm(mm.byteLength);
      if (Tm) return Tm;
      try {
        const {
          json: Tm,
          bin: fm
        } = (0, hm.w)(mm);
        return em(Tm, fm)
      } catch (fm) {
        if (fm instanceof hm.n) return fm.reason;
        throw fm
      }
    }
  },
  34363: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => om,
      f: () => Em,
      j: () => Ym,
      m: () => am,
      n: () => Am,
      q: () => Om,
      r: () => Rm,
      u: () => pm,
      v: () => xm,
      w: () => im
    });
    var hm = fm(34367);
    class Am extends Error {
      constructor(mm) {
        super(`GLB refused: it ${mm}`), this.reason = mm, this.name = "GlbRefused"
      }
    }
    class am extends Error {
      constructor(mm) {
        super(mm), this.name = "GlbError"
      }
    }

    function xm(mm) {
      return Reflect.get(mm, "scene")
    }
    const wm = 5130562,
      Dm = "is not a binary glTF 2.0 file";

    function im(mm) {
      var Tm;
      const fm = mm instanceof Uint8Array ? mm : new Uint8Array(mm),
        am = (0, hm.d)(fm);
      if (null === am) throw new Am(Dm);
      const xm = am.json,
        {
          jsonEnd: im,
          length: Rm
        } = am,
        pm = new DataView(fm.buffer, fm.byteOffset, fm.byteLength);
      let Em = -1,
        om = 0;
      for (let qm = im; qm < Rm;) {
        if (qm + 8 > Rm) throw new Am(Dm);
        const mm = pm.getUint32(qm, !0),
          Tm = pm.getUint32(qm + 4, !0);
        if (qm + 8 + mm > Rm || Tm === hm.b || Tm === wm && -1 !== Em) throw new Am(Dm);
        Tm === wm && (Em = qm + 8, om = mm), qm += 8 + mm
      }
      let Om = null;
      const Ym = null === (Tm = xm.buffers) || void 0 === Tm ? void 0 : Tm[0];
      if (-1 !== Em && Ym && void 0 === Ym.uri) {
        if (!(Ym.byteLength >= 0) || Ym.byteLength > om) throw new Am(Dm);
        Om = new Uint8Array(fm.buffer, fm.byteOffset + Em, Ym.byteLength)
      }
      return {
        json: xm,
        bin: Om,
        fileBytes: fm.byteLength
      }
    }

    function Rm(mm) {
      const Tm = mm.slice(mm.indexOf(",") + 1),
        fm = Uint8Array.fromBase64;
      if (fm) return fm(Tm).buffer;
      const hm = atob(Tm),
        Am = new Uint8Array(hm.length);
      for (let am = 0; am < hm.length; am++) Am[am] = hm.charCodeAt(am);
      return Am.buffer
    }
    async function pm(mm) {
      if (mm.startsWith("data:")) return Rm(mm);
      const Tm = await fetch(mm);
      if (!Tm.ok) throw new am(`fetching ${mm} failed: ${Tm.status} ${Tm.statusText}`);
      return await Tm.arrayBuffer()
    }
    const Em = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      om = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      Om = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      Ym = [
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
  34367: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am,
      d: () => am,
      g: () => xm
    });
    const hm = 1179937895,
      Am = 1313821514;

    function am(mm) {
      const Tm = new DataView(mm.buffer, mm.byteOffset, mm.byteLength);
      if (mm.byteLength < 20 || Tm.getUint32(0, !0) !== hm || 2 !== Tm.getUint32(4, !0)) return null;
      const fm = Math.min(Tm.getUint32(8, !0), mm.byteLength),
        am = Tm.getUint32(12, !0);
      if (Tm.getUint32(16, !0) !== Am || 20 + am > fm) return null;
      let xm;
      try {
        xm = JSON.parse((new TextDecoder).decode(mm.subarray(20, 20 + am)))
      } catch {
        return null
      }
      return "object" === typeof xm && null !== xm ? {
        json: xm,
        jsonEnd: 20 + am,
        length: fm
      } : null
    }

    function xm(mm) {
      var Tm;
      const fm = null === (Tm = am(mm)) || void 0 === Tm ? void 0 : Tm.json;
      if (void 0 === fm || !Array.isArray(fm.extensionsUsed) || !fm.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const hm = fm.meshes;
      return Array.isArray(hm) && hm.some((mm => {
        const Tm = null === mm || void 0 === mm ? void 0 : mm.primitives;
        return Array.isArray(Tm) && Tm.some((mm => {
          const Tm = null === mm || void 0 === mm ? void 0 : mm.extensions;
          return null != (null === Tm || void 0 === Tm ? void 0 : Tm.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);