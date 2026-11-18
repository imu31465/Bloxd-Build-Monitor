export const id = 185;
export const ids = [185];
export const modules = {
  33194: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Xy,
      g: () => Yy,
      k: () => My
    });
    var Uy = Wy(33198);
    const hy = {
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
      fy = {
        items: 1024,
        perFile: 1024,
        surfaces: 256,
        few: 64,
        bounds: 16,
        attributeMembers: 32
      },
      Zy = 1048576,
      cb = "is not a binary glTF 2.0 file",
      Py = "loads data from outside the file",
      oy = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
      By = {
        POSITION: "VEC3",
        NORMAL: "VEC3",
        TEXCOORD_0: "VEC2",
        COLOR_0: "VEC4"
      },
      Ky = {
        type: "VEC2",
        componentTypes: [5126, 5121, 5123]
      },
      ey = {
        TANGENT: {
          type: "VEC4",
          componentTypes: [5126]
        },
        TEXCOORD_1: Ky,
        TEXCOORD_2: Ky,
        TEXCOORD_3: Ky,
        TEXCOORD_4: Ky,
        TEXCOORD_5: Ky
      },
      qb = new Set(Uy.g.map((yb => {
        let [bb] = yb;
        return bb
      }))),
      sy = {
        1: "line",
        2: "line loop",
        3: "line strip",
        5: "triangle strip",
        6: "triangle fan"
      },
      Sy = 5126;

    function Ey(yb) {
      return yb.toLocaleString("en-US")
    }

    function ly(yb, bb, Wy) {
      return yb > bb ? `has ${Ey(yb)} ${Wy} (the limit is ${Ey(bb)})` : null
    }

    function mb(yb, bb) {
      return Number.isInteger(yb) && yb >= 0 && yb < (null !== bb && void 0 !== bb ? bb : 0)
    }

    function Cy(yb) {
      return Number.isInteger(yb) && yb >= 0
    }

    function Ty(yb, bb) {
      return void 0 !== yb && (!Array.isArray(yb) || yb.length > bb)
    }

    function Vy(yb, bb) {
      return "object" === typeof yb && null !== yb && Object.keys(yb).length > bb
    }

    function Jy(yb) {
      var bb;
      return `${yb.normalized?"normalized ":""}${null!==(bb=Uy.f[yb.componentType])&&void 0!==bb?bb:yb.componentType} ${yb.type}`
    }

    function gb(yb) {
      const bb = bb => {
        var Wy;
        return null !== (Wy = yb[bb]) && void 0 !== Wy ? Wy : -1
      };
      return 255 === bb(0) && 216 === bb(1) ? "JPEG" : 82 === bb(0) && 73 === bb(1) && 87 === bb(8) && 69 === bb(9) ? "WebP" : 171 === bb(0) && 75 === bb(1) && 84 === bb(2) && 88 === bb(3) ? "KTX2" : "non-PNG"
    }

    function Gy(yb) {
      return yb.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((bb, Wy) => yb[Wy] === bb)) && 73 === yb[12] && 72 === yb[13] && 68 === yb[14] && 82 === yb[15]
    }

    function Oy(yb) {
      return /^[aeiou]/i.test(yb) ? `an ${yb}` : `a ${yb}`
    }

    function Ry(yb) {
      const bb = yb.byteStride;
      return void 0 === bb || Number.isInteger(bb) && bb >= 4 && bb <= 252 && bb % 4 === 0
    }

    function vb(yb, bb, Wy) {
      var Uy, hy;
      const fy = null === (Uy = yb.bufferViews) || void 0 === Uy ? void 0 : Uy[Wy];
      if (!fy || !bb || 0 !== fy.buffer) return null;
      const Zy = null !== (hy = fy.byteOffset) && void 0 !== hy ? hy : 0;
      return !Cy(Zy) || !Cy(fy.byteLength) || Zy + fy.byteLength > bb.byteLength ? null : bb.subarray(Zy, Zy + fy.byteLength)
    }

    function ib(yb, bb) {
      var Wy, hy, fy;
      const Zy = Uy.p[bb.type],
        cb = Uy.c[bb.componentType];
      if (!Zy || !cb || !Number.isInteger(bb.count) || bb.count < 0) return !1;
      if (void 0 === bb.bufferView) return !0;
      const Py = null === (Wy = yb.bufferViews) || void 0 === Wy ? void 0 : Wy[bb.bufferView],
        oy = null !== (hy = bb.byteOffset) && void 0 !== hy ? hy : 0;
      if (!Py || !Cy(oy) || oy % cb !== 0) return !1;
      const By = Zy * cb,
        Ky = null !== (fy = Py.byteStride) && void 0 !== fy ? fy : By;
      if (Ky < By) return !1;
      return (0 === bb.count ? 0 : oy + Ky * (bb.count - 1) + By) <= Py.byteLength
    }

    function My(yb) {
      return yb > hy.fileBytes ? `is ${(yb/Zy).toFixed(1)} MiB (the limit is ${hy.fileBytes/Zy} MiB)` : null
    }

    function Yy(yb, bb) {
      try {
        return function(yb, bb) {
          var Wy, Zy, Ky, Ey, Cy, My, Yy, Xy, ny, uy, rb, Hy, ab, Fy, py, Ly, Qy;
          const jb = Array.isArray(yb.extensionsUsed) && yb.extensionsUsed.includes("KHR_draco_mesh_compression");
          if (function(yb, bb) {
              var Wy, Uy;
              const {
                items: hy,
                perFile: Zy,
                surfaces: cb,
                few: Py,
                bounds: oy,
                attributeMembers: By
              } = fy;
              if (Ty(yb.extensionsRequired, Py) || Ty(yb.animations, 1 / 0) || Ty(yb.skins, 1 / 0)) return !0;
              if (null !== (Wy = yb.animations) && void 0 !== Wy && Wy.length || null !== (Uy = yb.skins) && void 0 !== Uy && Uy.length) return !1;
              if ([
                  [yb.buffers, Py],
                  [yb.scenes, Py],
                  [yb.bufferViews, hy],
                  [yb.accessors, hy],
                  [yb.nodes, hy],
                  [yb.meshes, hy],
                  [yb.materials, cb],
                  [yb.textures, cb],
                  [yb.samplers, cb],
                  [yb.images, cb]
                ].some((yb => {
                  let [bb, Wy] = yb;
                  return Ty(bb, Wy)
                }))) return !0;
              for (const fy of null !== (Ky = yb.accessors) && void 0 !== Ky ? Ky : []) {
                var Ky, ey, qb;
                if (Number.isInteger(fy.count) && (!Number.isSafeInteger(fy.count) || Object.is(fy.count, -0)) || Ty(null !== (ey = fy.min) && void 0 !== ey ? ey : void 0, oy) || Ty(null !== (qb = fy.max) && void 0 !== qb ? qb : void 0, oy)) return !0
              }
              for (const fy of null !== (sy = yb.scenes) && void 0 !== sy ? sy : []) {
                var sy;
                if (Ty(fy.nodes, hy)) return !0
              }
              let Sy = 0;
              for (const fy of null !== (Ey = yb.nodes) && void 0 !== Ey ? Ey : []) {
                var Ey, ly, mb;
                if (Ty(fy.children, Zy)) return !0;
                Sy += null !== (ly = null === (mb = fy.children) || void 0 === mb ? void 0 : mb.length) && void 0 !== ly ? ly : 0
              }
              if (Sy > Zy) return !0;
              let Cy = 0;
              for (const fy of null !== (Jy = yb.meshes) && void 0 !== Jy ? Jy : []) {
                var Jy;
                if (!Array.isArray(fy.primitives)) return !0;
                if (Cy += fy.primitives.length, Cy > Zy) return !0;
                for (const yb of fy.primitives) {
                  var gb;
                  const Wy = bb ? null === (gb = yb.extensions) || void 0 === gb ? void 0 : gb.KHR_draco_mesh_compression : void 0;
                  if (Vy(yb.attributes, By) || Vy(null === Wy || void 0 === Wy ? void 0 : Wy.attributes, By)) return !0
                }
              }
              return !1
            }(yb, jb)) return cb;
          const Dy = null === (Wy = yb.asset) || void 0 === Wy ? void 0 : Wy.version;
          if ("string" !== typeof Dy || !/^2\.\d+/.test(Dy)) return `uses glTF version ${null!==Dy&&void 0!==Dy?Dy:"(none)"}`;
          const tb = null === (Zy = yb.asset) || void 0 === Zy ? void 0 : Zy.minVersion;
          if (void 0 !== tb && "2.0" !== tb) return `uses glTF version ${tb}`;
          for (const Uy of null !== (wy = yb.extensionsRequired) && void 0 !== wy ? wy : []) {
            var wy;
            if (!oy.has(Uy)) return `requires the glTF extension ${Uy}`
          }
          if (null !== (Ky = yb.animations) && void 0 !== Ky && Ky.length) return "has animations";
          if (null !== (Ey = yb.skins) && void 0 !== Ey && Ey.length) return "uses skins";
          const kb = null !== (Cy = yb.buffers) && void 0 !== Cy ? Cy : [];
          for (const [Uy, hy] of kb.entries()) {
            if (void 0 !== hy.uri) return Py;
            if (Uy > 0 || !bb) return cb
          }
          for (const [Uy, hy] of(null !== (Ny = yb.bufferViews) && void 0 !== Ny ? Ny : []).entries()) {
            var Ny;
            if (!vb(yb, bb, Uy) || !Ry(hy)) return cb
          }
          const zb = null !== (My = yb.accessors) && void 0 !== My ? My : [];
          for (const Uy of zb) {
            if (void 0 !== Uy.sparse) return "uses sparse accessors";
            const bb = Number.isInteger(Uy.count) ? ly(Uy.count, hy.accessorElements, "elements in an accessor") : null;
            if (bb) return bb;
            if (!ib(yb, Uy)) return cb
          }
          const Iy = null !== (Yy = yb.scenes) && void 0 !== Yy ? Yy : [];
          if (1 !== Iy.length) return `has ${Iy.length} scenes`;
          const xb = (0, Uy.y)(yb);
          if (void 0 !== xb && 0 !== xb) return cb;
          const Ay = null !== (Xy = yb.nodes) && void 0 !== Xy ? Xy : [],
            dy = null !== (ny = yb.meshes) && void 0 !== ny ? ny : [],
            yW = null !== (uy = yb.materials) && void 0 !== uy ? uy : [],
            bW = null !== (rb = yb.textures) && void 0 !== rb ? rb : [],
            Wb = null !== (Hy = yb.images) && void 0 !== Hy ? Hy : [],
            Ub = null !== (ab = null !== (Fy = null !== (py = ly(Ay.length, hy.nodes, "nodes")) && void 0 !== py ? py : ly(dy.length, hy.meshes, "meshes")) && void 0 !== Fy ? Fy : ly(yW.length, hy.materials, "materials")) && void 0 !== ab ? ab : ly(Wb.length, hy.images, "images");
          if (Ub) return Ub;
          const hb = new Set;
          for (const Uy of Ay)
            for (const yb of null !== (fb = Uy.children) && void 0 !== fb ? fb : []) {
              var fb;
              if (!mb(yb, Ay.length) || hb.has(yb)) return cb;
              hb.add(yb)
            }
          const Zb = new Set,
            cW = yb => {
              var bb;
              return !Zb.has(yb) && (Zb.add(yb), (null !== (bb = Ay[yb].children) && void 0 !== bb ? bb : []).every(cW))
            };
          for (const Uy of null !== (Pb = Iy[0].nodes) && void 0 !== Pb ? Pb : []) {
            var Pb;
            if (!mb(Uy, Ay.length) || hb.has(Uy) || !cW(Uy)) return cb
          }
          for (const Uy of Ay) {
            if (void 0 !== Uy.matrix) return "uses node matrices";
            if (void 0 !== Uy.skin) return "uses skins";
            if (void 0 !== Uy.weights) return "uses morph targets";
            if (void 0 !== Uy.mesh && !mb(Uy.mesh, dy.length)) return cb;
            const yb = [
              [Uy.translation, 3],
              [Uy.rotation, 4],
              [Uy.scale, 3]
            ];
            for (const [bb, Wy] of yb)
              if (void 0 !== bb && (!Array.isArray(bb) || bb.length !== Wy || !bb.every((yb => Number.isFinite(yb))))) return cb
          }
          let ob = -1,
            Bb = 0,
            Kb = 0,
            eb = null;
          for (const hy of dy) {
            if (void 0 !== hy.weights) return "uses morph targets";
            if (0 === hy.primitives.length) return cb;
            for (const Wy of hy.primitives) {
              var qW, sb;
              const hy = null !== (qW = Wy.mode) && void 0 !== qW ? qW : 4;
              var Sb;
              if (4 !== hy && 0 !== hy) return `uses ${null!==(Sb=sy[hy])&&void 0!==Sb?Sb:`mode ${hy}`} primitives`;
              if (void 0 !== Wy.targets) return "uses morph targets";
              if (void 0 !== Wy.material && !mb(Wy.material, yW.length)) return cb;
              const fy = jb ? null === (sb = Wy.extensions) || void 0 === sb ? void 0 : sb.KHR_draco_mesh_compression : void 0;
              if (fy) {
                if (4 !== hy) return "uses Draco-compressed points";
                if (!vb(yb, bb, fy.bufferView) || "object" !== typeof fy.attributes) return cb
              }
              const Zy = Wy.attributes;
              if ("object" !== typeof Zy || null === Zy) return cb;
              if (void 0 === Zy.POSITION) return "has a primitive with no positions";
              if (!mb(Zy.POSITION, zb.length)) return cb;
              const Py = zb[Zy.POSITION].count;
              for (const [yb, bb] of Object.entries(Zy)) {
                if (!mb(bb, zb.length)) return cb;
                if (/^(JOINTS|WEIGHTS)_\d+$/.test(yb)) return "uses skins";
                const Wy = zb[bb],
                  Uy = By[yb];
                if (Uy && (Wy.componentType !== Sy || Wy.normalized || Wy.type !== Uy)) return `stores ${yb} as ${Jy(Wy)}`;
                const hy = ey[yb];
                if (hy && (Wy.type !== hy.type || !hy.componentTypes.includes(Wy.componentType) || Wy.componentType === Sy === !!Wy.normalized)) return `stores ${yb} as ${Jy(Wy)}`;
                if (qb.has(yb) && Wy.count !== Py) return "has vertex attributes of different lengths"
              }
              if (fy) {
                if (void 0 === Wy.indices) return cb;
                for (const bb in fy.attributes)
                  if (qb.has(bb) && void 0 === Zy[bb]) return cb;
                if (void 0 === fy.attributes.POSITION) return cb;
                const yb = mb(Wy.indices, zb.length) ? zb[Wy.indices].count : -1;
                if (0 === yb) return cb;
                if (-1 === ob) ob = fy.bufferView, Bb = Py, Kb = yb;
                else {
                  eb ??= new Map([
                    [ob, [Bb, Kb]]
                  ]);
                  const bb = eb.get(fy.bufferView);
                  if (bb && (bb[0] !== Py || bb[1] !== yb)) return cb;
                  eb.set(fy.bufferView, null !== bb && void 0 !== bb ? bb : [Py, yb])
                }
              }
              let oy = Py;
              if (void 0 !== Wy.indices) {
                if (!mb(Wy.indices, zb.length)) return cb;
                const yb = zb[Wy.indices];
                if ("SCALAR" !== yb.type) return cb;
                if (5121 === yb.componentType) return "uses 8-bit indices";
                var Eb;
                if (5123 !== yb.componentType && 5125 !== yb.componentType) return `stores indices as ${null!==(Eb=Uy.f[yb.componentType])&&void 0!==Eb?Eb:yb.componentType}`;
                if (!fy && void 0 === yb.bufferView) return cb;
                oy = yb.count
              }
              if (4 === hy && oy % 3 !== 0) return cb
            }
          }
          let lb = 0,
            mW = 0,
            Cb = 0;
          for (let Uy = 0; Uy < Ay.length; Uy++) {
            const yb = Ay[Uy].mesh;
            if (void 0 !== yb && Zb.has(Uy))
              for (const bb of dy[yb].primitives) Cb++, lb += zb[bb.attributes.POSITION].count, void 0 !== bb.indices && (mW += zb[bb.indices].count)
          }
          const Tb = null !== (Ly = null !== (Qy = ly(lb, hy.vertices, "vertices")) && void 0 !== Qy ? Qy : ly(mW, hy.indices, "indices")) && void 0 !== Ly ? Ly : ly(Cb, hy.primitives, "primitives");
          if (Tb) return Tb;
          for (const Uy of yW) {
            var Vb, Jb;
            if (void 0 !== Uy.emissiveTexture) return "uses an emissive texture";
            const bb = null !== (Vb = Uy.alphaMode) && void 0 !== Vb ? Vb : "OPAQUE";
            if ("OPAQUE" !== bb && "MASK" !== bb && "BLEND" !== bb) return cb;
            const Wy = null === (Jb = Uy.pbrMetallicRoughness) || void 0 === Jb ? void 0 : Jb.baseColorTexture;
            if (Wy) {
              var gW, Gb, Ob, Rb, vW;
              const bb = null !== (gW = yb.extensionsUsed) && void 0 !== gW && gW.includes("KHR_texture_transform") ? null === (Gb = Wy.extensions) || void 0 === Gb ? void 0 : Gb.KHR_texture_transform : void 0;
              if (0 !== (null !== (Ob = Wy.texCoord) && void 0 !== Ob ? Ob : 0) || 0 !== (null !== (Rb = null === bb || void 0 === bb ? void 0 : bb.texCoord) && void 0 !== Rb ? Rb : 0)) return "uses a second UV set";
              const Uy = bW[Wy.index];
              if (!Uy || !mb(Uy.source, Wb.length) || void 0 !== Uy.sampler && !mb(Uy.sampler, null === (vW = yb.samplers) || void 0 === vW ? void 0 : vW.length)) return cb
            }
          }
          for (const Uy of Wb) {
            if (void 0 !== Uy.uri) return Py;
            if (void 0 === Uy.bufferView) return cb;
            const Wy = vb(yb, bb, Uy.bufferView);
            if (!Wy) return cb;
            if ("image/png" !== Uy.mimeType) {
              var iW, Mb, Yb;
              return `has ${Oy(null!==(iW=null!==(Mb={"image/jpeg":"JPEG","image/webp":"WebP","image/ktx2":"KTX2"}[null!==(Yb=Uy.mimeType)&&void 0!==Yb?Yb:""])&&void 0!==Mb?Mb:Uy.mimeType)&&void 0!==iW?iW:"untyped")} image`
            }
            if (!Gy(Wy)) return `has ${Oy(gb(Wy))} image`;
            const fy = new DataView(Wy.buffer, Wy.byteOffset, Wy.byteLength),
              Zy = fy.getUint32(16),
              oy = fy.getUint32(20);
            if (Zy > hy.imageSide || oy > hy.imageSide) return `has a ${Zy} \xd7 ${oy} image (the limit is ${hy.imageSide})`
          }
          return null
        }(yb, bb)
      } catch {
        return cb
      }
    }

    function Xy(yb) {
      const bb = My(yb.byteLength);
      if (bb) return bb;
      try {
        const {
          json: bb,
          bin: Wy
        } = (0, Uy.A)(yb);
        return Yy(bb, Wy)
      } catch (Wy) {
        if (Wy instanceof Uy.l) return Wy.reason;
        throw Wy
      }
    }
  },
  33198: (yb, bb, Wy) => {
    Wy.d(bb, {
      A: () => oy,
      c: () => qb,
      f: () => ey,
      g: () => Sy,
      i: () => fy,
      l: () => hy,
      p: () => sy,
      t: () => By,
      u: () => Ky,
      y: () => Zy
    });
    var Uy = Wy(33207);
    class hy extends Error {
      constructor(yb) {
        super(`GLB refused: it ${yb}`), this.reason = yb, this.name = "GlbRefused"
      }
    }
    class fy extends Error {
      constructor(yb) {
        super(yb), this.name = "GlbError"
      }
    }

    function Zy(yb) {
      return Reflect.get(yb, "scene")
    }
    const cb = 5130562,
      Py = "is not a binary glTF 2.0 file";

    function oy(yb) {
      var bb;
      const Wy = yb instanceof Uint8Array ? yb : new Uint8Array(yb),
        fy = (0, Uy.f)(Wy);
      if (null === fy) throw new hy(Py);
      const Zy = fy.json,
        {
          jsonEnd: oy,
          length: By
        } = fy,
        Ky = new DataView(Wy.buffer, Wy.byteOffset, Wy.byteLength);
      let ey = -1,
        qb = 0;
      for (let Ey = oy; Ey < By;) {
        if (Ey + 8 > By) throw new hy(Py);
        const yb = Ky.getUint32(Ey, !0),
          bb = Ky.getUint32(Ey + 4, !0);
        if (Ey + 8 + yb > By || bb === Uy.b || bb === cb && -1 !== ey) throw new hy(Py);
        bb === cb && (ey = Ey + 8, qb = yb), Ey += 8 + yb
      }
      let sy = null;
      const Sy = null === (bb = Zy.buffers) || void 0 === bb ? void 0 : bb[0];
      if (-1 !== ey && Sy && void 0 === Sy.uri) {
        if (!(Sy.byteLength >= 0) || Sy.byteLength > qb) throw new hy(Py);
        sy = new Uint8Array(Wy.buffer, Wy.byteOffset + ey, Sy.byteLength)
      }
      return {
        json: Zy,
        bin: sy,
        fileBytes: Wy.byteLength
      }
    }

    function By(yb) {
      const bb = yb.slice(yb.indexOf(",") + 1),
        Wy = Uint8Array.fromBase64;
      if (Wy) return Wy(bb).buffer;
      const Uy = atob(bb),
        hy = new Uint8Array(Uy.length);
      for (let fy = 0; fy < Uy.length; fy++) hy[fy] = Uy.charCodeAt(fy);
      return hy.buffer
    }
    async function Ky(yb) {
      if (yb.startsWith("data:")) return By(yb);
      const bb = await fetch(yb);
      if (!bb.ok) throw new fy(`fetching ${yb} failed: ${bb.status} ${bb.statusText}`);
      return await bb.arrayBuffer()
    }
    const ey = {
        5120: "i8",
        5121: "u8",
        5122: "i16",
        5123: "u16",
        5125: "u32",
        5126: "f32"
      },
      qb = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5125: 4,
        5126: 4
      },
      sy = {
        SCALAR: 1,
        VEC2: 2,
        VEC3: 3,
        VEC4: 4,
        MAT2: 4,
        MAT3: 9,
        MAT4: 16
      },
      Sy = [
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
  33207: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => hy,
      f: () => fy,
      j: () => Zy
    });
    const Uy = 1179937895,
      hy = 1313821514;

    function fy(yb) {
      const bb = new DataView(yb.buffer, yb.byteOffset, yb.byteLength);
      if (yb.byteLength < 20 || bb.getUint32(0, !0) !== Uy || 2 !== bb.getUint32(4, !0)) return null;
      const Wy = Math.min(bb.getUint32(8, !0), yb.byteLength),
        fy = bb.getUint32(12, !0);
      if (bb.getUint32(16, !0) !== hy || 20 + fy > Wy) return null;
      let Zy;
      try {
        Zy = JSON.parse((new TextDecoder).decode(yb.subarray(20, 20 + fy)))
      } catch {
        return null
      }
      return "object" === typeof Zy && null !== Zy ? {
        json: Zy,
        jsonEnd: 20 + fy,
        length: Wy
      } : null
    }

    function Zy(yb) {
      var bb;
      const Wy = null === (bb = fy(yb)) || void 0 === bb ? void 0 : bb.json;
      if (void 0 === Wy || !Array.isArray(Wy.extensionsUsed) || !Wy.extensionsUsed.includes("KHR_draco_mesh_compression")) return !1;
      const Uy = Wy.meshes;
      return Array.isArray(Uy) && Uy.some((yb => {
        const bb = null === yb || void 0 === yb ? void 0 : yb.primitives;
        return Array.isArray(bb) && bb.some((yb => {
          const bb = null === yb || void 0 === yb ? void 0 : yb.extensions;
          return null != (null === bb || void 0 === bb ? void 0 : bb.KHR_draco_mesh_compression)
        }))
      }))
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);