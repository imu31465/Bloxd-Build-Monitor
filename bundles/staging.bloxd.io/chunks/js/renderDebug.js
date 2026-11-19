export const id = 47;
export const ids = [47];
export const modules = {
  4439: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Oz
    });
    var Ez = bz(20),
      nz = bz(22),
      iz = bz(1269),
      lz = bz(2689);
    const Mz = 3e4,
      tz = 1e3;

    function Hz() {
      return "visible" === document.visibilityState && "inGame" === Ez.e.get("gameState") && (0, iz.q)()
    }

    function Oz(zz, uz) {
      (0, lz.q)() || function(zz, uz, bz) {
        let Ez = 0;
        const nz = setInterval((() => {
          uz() && (Ez += tz, Ez >= zz && (clearInterval(nz), bz()))
        }), tz)
      }(Mz, Hz, (() => {
        uz().then((() => {
          zz(`saved for the player after ${Mz/1e3} s of play`), (0, lz.y)(), nz.k.sK("chat", {
            content: [{
              str: "Saved a debug file to your downloads: please send it to us with a screenshot of the game.",
              style: {
                color: "#ffd84a"
              }
            }]
          })
        }))
      }))
    }
  },
  4430: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      installRenderDebug: () => pb,
      renderDebugPlayable: () => Fb,
      startRenderDebug: () => db,
      waitForDraw: () => Zb
    });
    var Ez = bz(1761),
      nz = bz(4439),
      iz = bz(2689);
    const lz = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function Mz(zz) {
      return 7 & zz
    }

    function tz(zz) {
      return zz >>> 11 & 1
    }

    function Hz(zz) {
      return [1 + (zz >>> 18 & 63), 1 + (zz >>> 24 & 63)]
    }

    function Oz(zz, uz) {
      const [bz, , Ez] = zz, nz = Mz(Ez), iz = function(zz, uz, bz) {
        return uz + (1 === (22 >>> zz & 1) ? 4 - bz : bz) & 3
      }(nz, tz(Ez), uz), lz = nz >>> 1, [Oz, pz] = Hz(bz), dz = 1 === iz || 2 === iz ? Oz : 0, Fz = iz >= 2 ? pz : 0, Zz = [63 & bz, bz >>> 6 & 63, bz >>> 12 & 63];
      return Zz[2 === lz ? 0 : 2] += dz, Zz[1 === lz ? 0 : 1] += Fz, Zz
    }

    function pz(zz) {
      const uz = Math.max(...Hz(zz[0]));
      return 1 === uz ? "1" : uz <= 4 ? "2-4" : uz <= 16 ? "5-16" : "17-64"
    }
    const dz = 16;

    function Fz(zz) {
      let uz = 2166136261;
      for (let bz = 0; bz < zz.length; bz++) uz = Math.imul(uz ^ zz[bz], 16777619);
      return uz >>> 0
    }

    function Zz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const Ez = Math.max(0, uz - bz),
        nz = Math.min(zz.length, uz + bz),
        iz = [];
      for (let lz = Ez; lz < nz; lz++) {
        const bz = zz[lz].toString(16).padStart(2, "0");
        iz.push(lz === uz ? `[${bz}]` : bz)
      }
      return iz.join(" ")
    }
    const Rz = {
        NO_ERROR: 0,
        POINTS: 0,
        ARRAY_BUFFER: 34962,
        ELEMENT_ARRAY_BUFFER: 34963,
        ARRAY_BUFFER_BINDING: 34964,
        ELEMENT_ARRAY_BUFFER_BINDING: 34965,
        COPY_READ_BUFFER: 36662,
        COPY_WRITE_BUFFER: 36663,
        COPY_READ_BUFFER_BINDING: 36662,
        COPY_WRITE_BUFFER_BINDING: 36663,
        UNIFORM_BUFFER: 35345,
        UNIFORM_BUFFER_BINDING: 35368,
        PIXEL_UNPACK_BUFFER: 35052,
        PIXEL_UNPACK_BUFFER_BINDING: 35055,
        TRANSFORM_FEEDBACK_BUFFER: 35982,
        TRANSFORM_FEEDBACK_BUFFER_BINDING: 35983,
        TRANSFORM_FEEDBACK: 36386,
        TRANSFORM_FEEDBACK_BINDING: 36389,
        INTERLEAVED_ATTRIBS: 35980,
        RASTERIZER_DISCARD: 35977,
        STREAM_READ: 35041,
        CURRENT_PROGRAM: 35725,
        LINK_STATUS: 35714,
        VERTEX_SHADER: 35633,
        FRAGMENT_SHADER: 35632,
        DEPTH_FUNC: 2932,
        DEPTH_CLEAR_VALUE: 2931,
        SAMPLES: 32937,
        DRAW_FRAMEBUFFER: 36009,
        DEPTH_ATTACHMENT: 36096,
        FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
        FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 33302,
        FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 33297,
        DRAW_FRAMEBUFFER_BINDING: 36006,
        ACTIVE_UNIFORMS: 35718,
        ACTIVE_UNIFORM_BLOCKS: 35382,
        UNIFORM_BLOCK_BINDING: 35391,
        UNIFORM_BLOCK_INDEX: 35386,
        INVALID_INDEX: 4294967295,
        MAX_VERTEX_ATTRIBS: 34921,
        VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
        VERTEX_ATTRIB_ARRAY_SIZE: 34339,
        VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
        VERTEX_ATTRIB_ARRAY_TYPE: 34341,
        VERTEX_ATTRIB_ARRAY_POINTER: 34373,
        VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
        VERTEX_ATTRIB_ARRAY_INTEGER: 35069,
        VERTEX_ATTRIB_ARRAY_DIVISOR: 35070,
        CURRENT_VERTEX_ATTRIB: 34342,
        TEXTURE_2D: 3553,
        TEXTURE0: 33984,
        ACTIVE_TEXTURE: 34016,
        TEXTURE_BINDING_2D: 32873,
        READ_FRAMEBUFFER: 36008,
        READ_FRAMEBUFFER_BINDING: 36010,
        COLOR_ATTACHMENT0: 36064,
        RGBA_INTEGER: 36249,
        UNSIGNED_INT: 5125,
        RGBA32UI: 36208,
        RGBA16UI: 36214,
        UNSIGNED_INT_SAMPLER_2D: 36306,
        UNPACK_ROW_LENGTH: 3314,
        UNPACK_SKIP_ROWS: 3315,
        UNPACK_SKIP_PIXELS: 3316,
        FLOAT: 5126,
        FLOAT_VEC2: 35664,
        FLOAT_VEC3: 35665,
        FLOAT_VEC4: 35666,
        INT_VEC2: 35667,
        INT_VEC3: 35668,
        INT_VEC4: 35669,
        UNSIGNED_INT_VEC2: 36294,
        UNSIGNED_INT_VEC3: 36295,
        UNSIGNED_INT_VEC4: 36296,
        FLOAT_MAT3: 35675,
        FLOAT_MAT4: 35676
      },
      Kz = "_vs2fs_location0",
      wz = 0,
      Xz = 4,
      fz = 6,
      sz = [0, 1, 2, 0, 2, 3],
      rz = 2048,
      oz = 4,
      Nz = 256,
      vz = 64,
      xz = 268435456,
      Jz = 65536,
      Az = /^#version [^\n]*\/\/ program (\S+)$/m;

    function Tz(zz) {
      return null === zz.name ? `#${zz.id}` : `#${zz.id} ${zz.name}`
    }
    const Lz = [],
      Pz = new WeakMap,
      Gz = new WeakMap,
      az = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let Vz = 1;
    const mz = new WeakMap;

    function qz(zz) {
      if (null === zz) return 0;
      let uz = mz.get(zz);
      return void 0 === uz && (uz = Vz++, mz.set(zz, uz)), uz
    }
    class hz {
      constructor(zz, uz) {
        this.print = zz, this.now = uz, this.shown = 0, this.yM = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.MZ = [], this.dropped = 0
      }
      line(zz) {
        const uz = this.now();
        if (uz - this.second >= 1e3 && (this.second = uz, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.yM++, void this.store(zz);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${zz} (the last line here: the rest go to bloxdDebug.save())` : zz)
      }
      keep(zz) {
        this.sections++, this.store(zz)
      }
      store(zz) {
        this.MZ.push(`${new Date(Date.now()).toISOString()} ${zz}`), this.MZ.length > 2e4 && (this.MZ.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.yM} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.MZ].join("\n")
      }
    }
    let Uz = null;

    function cz() {
      if (null === Uz) {
        const zz = new hz((zz => {
          (0, iz.i)("render", zz)
        }), (() => performance.now()));
        (0, iz.f)("render", (() => zz.dump())), Uz = zz
      }
      return Uz
    }

    function gz(zz) {
      cz().line(zz)
    }

    function Sz(zz) {
      cz().keep(zz)
    }

    function yz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return zz.length <= uz ? zz : `${zz.slice(0,uz)}... (${zz.length-uz} more characters)`
    }

    function Dz(zz, uz, bz, Ez, nz, iz) {
      const lz = az.pendingCheck;
      if (null === lz) return;
      const Mz = "undefined" !== typeof WebGL2RenderingContext && zz instanceof WebGL2RenderingContext,
        tz = {
          gl: zz,
          program: bz,
          call: Ez,
          al: nz,
          instances: iz,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (lz.draws.push(tz), Mz) try {
        const Ez = function(zz) {
          const uz = [],
            bz = new Map,
            Ez = Math.min(16, zz.getParameter(Rz.MAX_VERTEX_ATTRIBS));
          for (let nz = 0; nz < Ez; nz++) {
            if (!zz.getVertexAttrib(nz, Rz.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const Ez = zz.getVertexAttrib(nz, Rz.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              iz = zz.getVertexAttribOffset(nz, Rz.VERTEX_ATTRIB_ARRAY_POINTER),
              lz = zz.getVertexAttrib(nz, Rz.VERTEX_ATTRIB_ARRAY_STRIDE),
              Mz = zz.getVertexAttrib(nz, Rz.VERTEX_ATTRIB_ARRAY_SIZE),
              tz = zz.getVertexAttrib(nz, Rz.VERTEX_ATTRIB_ARRAY_TYPE),
              Hz = "VERTEX_ATTRIB_ARRAY_INTEGER" in zz && zz.getVertexAttrib(nz, Rz.VERTEX_ATTRIB_ARRAY_INTEGER),
              Oz = "VERTEX_ATTRIB_ARRAY_DIVISOR" in zz ? zz.getVertexAttrib(nz, Rz.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            bz.set(nz, {
              buffer: Ez,
              offset: iz,
              stride: lz
            }), uz.push(`@${nz} buf#${qz(Ez)} +${iz} stride ${lz} ${Mz}x0x${tz.toString(16)}${Hz?" int":""} div ${Oz}`)
          }
          return {
            lines: uz,
            byLocation: bz
          }
        }(zz);
        if (tz.attributes = Ez.lines, "inst" === bz.terrain) {
          const {
            group: nz,
            chunk: Mz
          } = function(zz, uz, bz) {
            const Ez = uz.get(fz),
              nz = zz.getVertexAttrib(fz, Rz.CURRENT_VERTEX_ATTRIB),
              iz = Ez ? `+${Ez.offset}` : nz ? Array.from(nz).slice(0, 3).join(",") : "?";
            let lz = bz.groups.get(iz);
            return void 0 === lz && (lz = bz.groups.size, bz.groups.set(iz, lz)), {
              group: lz,
              chunk: iz
            }
          }(zz, Ez.byLocation, lz);
          tz.group = nz, tz.chunk = Mz;
          for (const zz of [wz, Xz]) {
            var Hz;
            const uz = null === (Hz = Ez.byLocation.get(zz)) || void 0 === Hz ? void 0 : Hz.buffer;
            uz && tz.pages.push({
              kind: "buf",
              buffer: uz
            })
          }! function(zz, uz, bz, Ez, nz, iz, lz) {
            const Mz = Ez.get(wz),
              tz = lz.parts.get(iz);
            if (void 0 === tz && lz.parts.size >= oz) return;
            const Hz = Math.min(nz, vz, Nz - (null !== tz && void 0 !== tz ? tz : 0));
            if (null === Mz || void 0 === Mz || !Mz.buffer || Hz <= 0) return;
            const Oz = Qz(zz, uz, bz);
            if (!Oz) return;
            const pz = Mz.stride || 12,
              dz = Bz(zz, Mz.buffer, Mz.offset, (Hz - 1) * pz + 12),
              Fz = new DataView(dz.buffer),
              Zz = function(zz, uz) {
                const bz = function(zz) {
                    const uz = kz.get(zz);
                    if (void 0 !== uz && (null === uz || zz.isProgram(uz))) return uz;
                    az.inProbe = !0;
                    let bz = null;
                    try {
                      bz = Wz(zz, Cz, Yz, "fed", "the record feed")
                    } finally {
                      az.inProbe = !1
                    }
                    return kz.set(zz, bz), bz
                  }(zz),
                  Ez = bz ? Iz(zz, bz, uz, (() => {
                    zz.drawArraysInstanced(Rz.POINTS, 0, 1, uz)
                  }), "decode probe input (the record feed)") : null;
                return Ez ? new Uint32Array(Ez.buffer) : null
              }(zz, Hz);
            Zz || lz.fed.failed++;
            const Kz = Iz(zz, Oz, 4 * Hz, (() => {
              zz.drawArraysInstanced(Rz.POINTS, 0, 4, Hz)
            }));
            if (!Kz) return;
            lz.parts.set(iz, (null !== tz && void 0 !== tz ? tz : 0) + Hz);
            for (let Rz = 0; Rz < Hz; Rz++) {
              const zz = Rz * pz,
                uz = [Fz.getUint32(zz, !0), Fz.getUint32(zz + 4, !0), Fz.getUint32(zz + 8, !0)],
                bz = Zz ? [Zz[3 * Rz], Zz[3 * Rz + 1], Zz[3 * Rz + 2]] : uz;
              Zz && (lz.fed.records++, bz.some(((zz, bz) => zz !== uz[bz])) && (lz.fed.differing++, lz.fed.first.length < 8 && lz.fed.first.push(`part ${iz} instance ${Rz}: fed ${bz.map(nu).join(" ")} buffer ${uz.map(nu).join(" ")}`)));
              for (let Ez = 0; Ez < 4; Ez++) {
                const zz = 3 * (4 * Rz + Ez);
                lz.vertices.push({
                  record: bz,
                  slot: Ez,
                  group: iz,
                  gpu: [Kz[zz], Kz[zz + 1], Kz[zz + 2]]
                })
              }
            }
          }(zz, uz, bz, Ez.byLocation, iz, nz, lz)
        } else {
          const Ez = zu(zz, uz, 16),
            iz = zu(zz, uz, 8);
          for (const zz of [Ez, iz]) zz && tz.pages.push({
            kind: "tex",
            texture: zz
          });
          Ez && function(zz, uz, bz, Ez, nz, iz) {
            if (iz.parts.size >= oz) return;
            const lz = Qz(zz, uz, bz);
            if (!lz) return;
            let Mz = 6 * Nz;
            const tz = [];
            for (const [Fz, Zz] of nz) {
              const zz = Math.min(Zz, Mz, Math.max(6, 6 * Math.floor(Nz / nz.length)));
              zz > 0 && (tz.push([Fz, zz]), Mz -= zz)
            }
            const Hz = tz.reduce(((zz, uz) => {
                let [, bz] = uz;
                return zz + bz
              }), 0),
              Oz = Iz(zz, lz, Hz, (() => {
                for (const [uz, bz] of tz) zz.drawArrays(Rz.POINTS, uz, bz)
              }));
            if (!Oz) return;
            let pz = 0;
            for (const [Fz, Zz] of tz) {
              const uz = Math.floor(Fz / 6),
                bz = Math.floor((Fz + Zz - 1) / 6) - uz + 1,
                nz = uu(zz, Ez, rz, uz, bz);
              for (let zz = Fz; zz < Fz + Zz; zz++, pz++) {
                var dz;
                const bz = 4 * (Math.floor(zz / 6) - uz),
                  Ez = [nz[bz], nz[bz + 1], nz[bz + 2]];
                iz.parts.set(nz[bz + 3], (null !== (dz = iz.parts.get(nz[bz + 3])) && void 0 !== dz ? dz : 0) + (zz % 6 === 0 ? 1 : 0)), iz.vertices.push({
                  record: Ez,
                  slot: sz[zz % 6],
                  group: nz[bz + 3],
                  gpu: [Oz[3 * pz], Oz[3 * pz + 1], Oz[3 * pz + 2]]
                })
              }
            }
          }(zz, uz, bz, Ez, nz, lz)
        }
      } catch (Oz) {
        gz(`decode probe failed on program ${Tz(bz)}: ${String(Oz)}`)
      }
    }

    function Qz(zz, uz, bz) {
      if (void 0 !== bz.probe) return bz.probe && ez(zz, uz, bz.probe), bz.probe;
      bz.probe = null, az.inProbe = !0;
      try {
        bz.probe = function(zz, uz) {
          return Wz(zz, uz.vertex, uz.fragment, Kz, `program ${Tz(uz)}'s twin`)
        }(zz, bz)
      } finally {
        az.inProbe = !1
      }
      return bz.probe && ez(zz, uz, bz.probe), bz.probe
    }

    function Wz(zz, uz, bz, Ez, nz) {
      const iz = [zz.createShader(Rz.VERTEX_SHADER), zz.createShader(Rz.FRAGMENT_SHADER)],
        lz = zz.createProgram();
      if (!lz || !iz[0] || !iz[1]) return null;
      zz.shaderSource(iz[0], uz), zz.shaderSource(iz[1], bz);
      for (const tz of iz) zz.compileShader(tz), zz.attachShader(lz, tz);
      zz.transformFeedbackVaryings(lz, [Ez], Rz.INTERLEAVED_ATTRIBS), zz.linkProgram(lz);
      for (const tz of iz) zz.deleteShader(tz);
      var Mz;
      return zz.getProgramParameter(lz, Rz.LINK_STATUS) ? lz : (gz(`decode probe: ${nz} failed to link: ${yz(null!==(Mz=zz.getProgramInfoLog(lz))&&void 0!==Mz?Mz:"",300)}`), zz.deleteProgram(lz), null)
    }

    function ez(zz, uz, bz) {
      const Ez = zz.getProgramParameter(uz, Rz.ACTIVE_UNIFORM_BLOCKS);
      for (let Mz = 0; Mz < Ez; Mz++) {
        const Ez = zz.getActiveUniformBlockName(uz, Mz),
          nz = null === Ez ? Rz.INVALID_INDEX : zz.getUniformBlockIndex(bz, Ez);
        nz !== Rz.INVALID_INDEX && zz.uniformBlockBinding(bz, nz, zz.getActiveUniformBlockParameter(uz, Mz, Rz.UNIFORM_BLOCK_BINDING))
      }
      const nz = zz.getParameter(Rz.CURRENT_PROGRAM);
      zz.useProgram(bz);
      const iz = zz.getProgramParameter(uz, Rz.ACTIVE_UNIFORMS),
        lz = zz.getActiveUniforms(uz, [...Array(iz).keys()], Rz.UNIFORM_BLOCK_INDEX);
      for (let Mz = 0; Mz < iz; Mz++) {
        const Ez = zz.getActiveUniform(uz, Mz);
        if (!Ez || -1 !== lz[Mz]) continue;
        const nz = Ez.name.replace(/\[0\]$/, "");
        for (let iz = 0; iz < Ez.size; iz++) {
          const lz = Ez.size > 1 ? `${nz}[${iz}]` : Ez.name,
            Mz = zz.getUniformLocation(uz, lz),
            tz = zz.getUniformLocation(bz, lz);
          Mz && tz && jz(zz, tz, Ez.type, zz.getUniform(uz, Mz))
        }
      }
      zz.useProgram(nz)
    }

    function jz(zz, uz, bz, Ez) {
      const nz = ArrayBuffer.isView(Ez) ? Array.from(Ez) : [Number(Ez)];
      switch (bz) {
        case Rz.FLOAT:
          return void zz.uniform1f(uz, nz[0]);
        case Rz.FLOAT_VEC2:
          return void zz.uniform2fv(uz, nz);
        case Rz.FLOAT_VEC3:
          return void zz.uniform3fv(uz, nz);
        case Rz.FLOAT_VEC4:
          return void zz.uniform4fv(uz, nz);
        case Rz.FLOAT_MAT3:
          return void zz.uniformMatrix3fv(uz, !1, nz);
        case Rz.FLOAT_MAT4:
          return void zz.uniformMatrix4fv(uz, !1, nz);
        case Rz.UNSIGNED_INT:
          return void zz.uniform1ui(uz, nz[0]);
        case Rz.UNSIGNED_INT_VEC2:
          return void zz.uniform2uiv(uz, nz);
        case Rz.UNSIGNED_INT_VEC3:
          return void zz.uniform3uiv(uz, nz);
        case Rz.UNSIGNED_INT_VEC4:
          return void zz.uniform4uiv(uz, nz);
        case Rz.INT_VEC2:
          return void zz.uniform2iv(uz, nz);
        case Rz.INT_VEC3:
          return void zz.uniform3iv(uz, nz);
        case Rz.INT_VEC4:
          return void zz.uniform4iv(uz, nz);
        default:
          zz.uniform1i(uz, nz[0])
      }
    }

    function Iz(zz, uz, bz, Ez) {
      let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const iz = zz.getParameter(Rz.CURRENT_PROGRAM),
        lz = zz.getParameter(Rz.TRANSFORM_FEEDBACK_BINDING),
        Mz = zz.getParameter(Rz.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        tz = zz.getParameter(Rz.COPY_READ_BUFFER_BINDING),
        Hz = zz.isEnabled(Rz.RASTERIZER_DISCARD),
        Oz = zz.createTransformFeedback(),
        pz = zz.createBuffer();
      az.inProbe = !0;
      try {
        const iz = zz.getError();
        iz !== Rz.NO_ERROR && gz(`GL error 0x${iz.toString(16)} pending before the decode probe (the renderer's)`), zz.useProgram(uz), zz.bindTransformFeedback(Rz.TRANSFORM_FEEDBACK, Oz), zz.bindBuffer(Rz.TRANSFORM_FEEDBACK_BUFFER, pz), zz.bufferData(Rz.TRANSFORM_FEEDBACK_BUFFER, 12 * bz, Rz.STREAM_READ), zz.bindBufferBase(Rz.TRANSFORM_FEEDBACK_BUFFER, 0, pz), zz.enable(Rz.RASTERIZER_DISCARD), zz.beginTransformFeedback(Rz.POINTS), Ez(), zz.endTransformFeedback(), zz.bindBufferBase(Rz.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const lz = zz.getError();
        if (lz !== Rz.NO_ERROR) return gz(`${nz}: GL error 0x${lz.toString(16)} on the feedback draw`), null;
        const Mz = new Float32Array(3 * bz);
        return zz.bindBuffer(Rz.COPY_READ_BUFFER, pz), zz.getBufferSubData(Rz.COPY_READ_BUFFER, 0, Mz), Mz
      } finally {
        Hz || zz.disable(Rz.RASTERIZER_DISCARD), zz.bindTransformFeedback(Rz.TRANSFORM_FEEDBACK, lz), zz.bindBuffer(Rz.TRANSFORM_FEEDBACK_BUFFER, Mz), zz.bindBuffer(Rz.COPY_READ_BUFFER, tz), zz.deleteTransformFeedback(Oz), zz.deleteBuffer(pz), zz.useProgram(iz), az.inProbe = !1
      }
    }

    function Bz(zz, uz, bz, Ez) {
      const nz = zz.getParameter(Rz.COPY_READ_BUFFER_BINDING),
        iz = new Uint8Array(Ez);
      return zz.bindBuffer(Rz.COPY_READ_BUFFER, uz), zz.getBufferSubData(Rz.COPY_READ_BUFFER, bz, iz), zz.bindBuffer(Rz.COPY_READ_BUFFER, nz), iz
    }
    const Cz = `#version 300 es\nlayout(location = ${wz}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      Yz = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      kz = new WeakMap;

    function zu(zz, uz, bz) {
      const Ez = zz.getProgramParameter(uz, Rz.ACTIVE_UNIFORMS),
        nz = zz.getParameter(Rz.ACTIVE_TEXTURE);
      try {
        for (let nz = 0; nz < Ez; nz++) {
          const Ez = zz.getActiveUniform(uz, nz);
          if ((null === Ez || void 0 === Ez ? void 0 : Ez.type) !== Rz.UNSIGNED_INT_SAMPLER_2D) continue;
          const iz = zz.getUniformLocation(uz, Ez.name),
            lz = iz ? zz.getUniform(uz, iz) : -1;
          if (lz < 0) continue;
          zz.activeTexture(Rz.TEXTURE0 + lz);
          const Mz = zz.getParameter(Rz.TEXTURE_BINDING_2D);
          if (Mz && Gz.get(Mz) === bz) return Mz
        }
        return null
      } finally {
        zz.activeTexture(nz)
      }
    }

    function uu(zz, uz, bz, Ez, nz) {
      const iz = new Uint32Array(4 * nz),
        lz = zz.getParameter(Rz.READ_FRAMEBUFFER_BINDING),
        Mz = zz.createFramebuffer();
      zz.bindFramebuffer(Rz.READ_FRAMEBUFFER, Mz), zz.framebufferTexture2D(Rz.READ_FRAMEBUFFER, Rz.COLOR_ATTACHMENT0, Rz.TEXTURE_2D, uz, 0);
      try {
        let uz = 0;
        for (; uz < nz;) {
          const lz = Ez + uz,
            Mz = lz % bz,
            tz = Math.min(nz - uz, bz - Mz);
          zz.readPixels(Mz, Math.floor(lz / bz), tz, 1, Rz.RGBA_INTEGER, Rz.UNSIGNED_INT, iz.subarray(4 * uz, 4 * (uz + tz))), uz += tz
        }
      } finally {
        zz.bindFramebuffer(Rz.READ_FRAMEBUFFER, lz), zz.deleteFramebuffer(Mz)
      }
      return iz
    }

    function bu(zz, uz, bz) {
      let Ez = 0,
        nz = 0;
      for (let tz = 0; tz < uz.bytes.length; tz += Jz) {
        Ez++;
        const zz = Math.min(tz + Jz, uz.bytes.length);
        Fz(uz.bytes.subarray(tz, zz)) !== Fz(bz.subarray(tz, zz)) && nz++
      }
      const iz = `${zz} ${uz.bytes.length} B cpu ${Fz(uz.bytes).toString(16)} gpu ${Fz(bz).toString(16)}, ${nz}/${Ez} blocks differ${uz.missed?`, ${uz.missed} GPU-side writes uncopied`:""}`;
      if (0 === nz) return iz;
      const {
        count: lz,
        offsets: Mz
      } = function(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const Ez = Math.min(zz.length, uz.length);
        let nz = Math.abs(zz.length - uz.length);
        const iz = [];
        for (let lz = 0; lz < Ez; lz++) zz[lz] !== uz[lz] && (nz++, iz.length < bz && iz.push(lz));
        return {
          count: nz,
          offsets: iz
        }
      }(uz.bytes, bz);
      return Sz([`${iz}: ${lz} bytes differ`, ...Mz.map((zz => `  +${zz}: cpu ${Zz(uz.bytes,zz)} | gpu ${Zz(bz,zz)}`))].join("\n")), `${iz}: ${lz} bytes differ, first at ${Mz.join(", ")} (context in the saved file)`
    }

    function Eu(zz) {
      if (0 === zz.vertices.length) return void gz(`decode probe (${zz.reason}): no terrain draw probed (${zz.draws.length} seen)`);
      const uz = function(zz) {
          const uz = new Map;
          for (const Ez of zz) {
            const zz = uz.get(Ez.group);
            zz ? zz.push(Ez) : uz.set(Ez.group, [Ez])
          }
          const bz = {
            vertices: zz.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [Ez, nz] of uz) {
            const zz = new Map,
              uz = nz.map((uz => {
                const bz = Oz(uz.record, uz.slot),
                  Ez = [uz.gpu[0] - bz[0], uz.gpu[1] - bz[1], uz.gpu[2] - bz[2]],
                  nz = Ez.map((zz => Math.round(64 * zz))).join(","),
                  iz = zz.get(nz);
                return iz ? iz.count++ : zz.set(nz, {
                  count: 1,
                  offset: Ez
                }), bz
              }));
            let iz = [0, 0, 0],
              lz = 0;
            for (const bz of zz.values()) bz.count > lz && (lz = bz.count, iz = bz.offset);
            bz.translations.set(Ez, iz), nz.forEach(((zz, Ez) => {
              var nz;
              const lz = [uz[Ez][0] + iz[0], uz[Ez][1] + iz[1], uz[Ez][2] + iz[2]];
              if (lz.every(((uz, bz) => {
                  return Ez = zz.gpu[bz], nz = uz, Math.abs(Ez - nz) <= Math.max(.001, 1e-6 * Math.abs(nz));
                  var Ez, nz
                }))) return;
              bz.mismatches++, bz.byDirection[Mz(zz.record[2])]++, bz.byDiagonal[tz(zz.record[2])]++;
              const Hz = pz(zz.record);
              bz.byBand[Hz] = (null !== (nz = bz.byBand[Hz]) && void 0 !== nz ? nz : 0) + 1, bz.first.length < dz && bz.first.push({
                ...zz,
                expected: lz
              })
            }))
          }
          return bz
        }(zz.vertices),
        bz = uz.byDirection.map(((zz, uz) => zz ? `${lz[uz]} ${zz}` : "")).filter(Boolean).join(" "),
        Ez = Object.entries(uz.byBand).map((zz => {
          let [uz, bz] = zz;
          return `${uz}: ${bz}`
        })).join(" ");
      if (gz(`decode probe (${zz.reason}): ${uz.mismatches}/${uz.vertices} vertices differ from the CPU decode over ${zz.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (uz.mismatches ? ` by direction [${bz}] diagonal [0: ${uz.byDiagonal[0]} 1: ${uz.byDiagonal[1]}] extent [${Ez}]` : "")), zz.fed.records > 0 || zz.fed.failed > 0) {
        gz(`decode probe input: ${zz.fed.differing}/${zz.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (zz.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (zz.fed.failed ? `; the feed failed on ${zz.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const uz of zz.fed.first) gz(`  ${uz}`)
      }
      for (const nz of uz.first) {
        const [zz, uz, bz] = nz.record;
        gz(`  mismatch part ${nz.group} r0 ${zz.toString(16)} r1 ${uz.toString(16)} r2 ${bz.toString(16)} slot ${nz.slot} (${lz[Mz(bz)]}): expected ${nz.expected.map(iu).join(",")} gpu ${nz.gpu.map(iu).join(",")}`)
      }
      Sz(`decode probe translations: ${[...uz.translations].map((zz=>{let[uz,bz]=zz;return`${uz}: ${bz.map(iu).join(",")}`})).join("; ")}`)
    }

    function nu(zz) {
      return zz.toString(16)
    }

    function iu(zz) {
      return Number.isInteger(zz) ? String(zz) : zz.toFixed(3)
    }

    function lu(zz) {
      return null !== az.pendingCheck ? Promise.resolve() : new Promise((uz => {
        let bz = !1;
        const Ez = {
          reason: zz,
          terrainDraws: 0,
          draws: [],
          vertices: [],
          parts: new Map,
          groups: new Map,
          fed: {
            records: 0,
            differing: 0,
            first: [],
            failed: 0
          }
        };
        az.pendingCheck = Ez;
        const nz = () => {
            az.pendingCheck = null;
            try {
              ! function(zz) {
                gz(`draw ranges (${zz.reason}): ${zz.terrainDraws} terrain draws in the frame, the first ${zz.draws.length} here`);
                for (const uz of zz.draws) {
                  const zz = uz.al.slice(0, 8).map((zz => {
                      let [uz, bz] = zz;
                      return `${uz}+${bz}`
                    })).join(" "),
                    bz = uz.al.length > 8 ? ` (+${uz.al.length-8} ranges)` : "";
                  gz(`  ${Tz(uz.program)} ${uz.program.terrain} ${uz.call} ${zz}${bz} x${uz.instances}${uz.group>=0?` part ${uz.group} chunk ${uz.chunk}`:""} | ${uz.attributes.join(" | ")}`)
                }
              }(Ez), Eu(Ez);
              Ez.draws.some((zz => "undefined" !== typeof WebGL2RenderingContext && zz.gl instanceof WebGL2RenderingContext)) || 0 === Ez.draws.length ? function(zz) {
                const uz = [],
                  bz = new Map;
                for (const Ez of zz)
                  if ("undefined" !== typeof WebGL2RenderingContext && Ez.gl instanceof WebGL2RenderingContext)
                    for (const zz of Ez.pages) bz.set("buf" === zz.kind ? zz.buffer : zz.texture, {
                      page: zz,
                      gl: Ez.gl
                    });
                for (const [Ez, {
                    page: nz,
                    gl: iz
                  }] of bz) {
                  const zz = Pz.get(Ez);
                  if (!zz) {
                    uz.push(`${nz.kind}#${qz(Ez)}: no CPU copy (${az.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === nz.kind) {
                    uz.push(bu(`buf#${zz.id}`, zz, Bz(iz, nz.buffer, 0, zz.bytes.length)));
                    continue
                  }
                  const bz = uu(iz, nz.texture, zz.width, 0, zz.width * zz.height),
                    lz = 16 === zz.texelBytes ? new Uint8Array(bz.buffer) : new Uint8Array(new Uint16Array(bz).buffer);
                  uz.push(bu(`tex#${zz.id} (${16===zz.texelBytes?"records":"light"})`, zz, lz))
                }
                for (const Ez of uz) gz(`page readback ${Ez}`)
              }(Ez.draws) : gz("page readback: none on WebGL1 (no buffer readback)")
            } catch (zz) {
              gz(`check failed: ${String(zz)}`)
            }
            uz()
          },
          iz = () => {
            if (Ez.draws.length > 0 && !bz) return bz = !0, void setTimeout(nz, 0);
            bz || requestAnimationFrame(iz)
          };
        requestAnimationFrame(iz), setTimeout((() => {
          bz || (bz = !0, nz())
        }), 5e3)
      }))
    }
    var Mu = bz(4448);
    const tu = 20,
      Hu = 24,
      Ou = Reflect.apply;

    function pu(zz, uz, bz) {
      if (!zz) return;
      const Ez = zz[uz];
      if ("function" === typeof Ez) {
        const nz = bz(Ez);
        zz[uz] = nz, (0, Mu.y)(nz, Ez)
      }
    }
    let du = !1;
    const Fu = new WeakMap,
      Zu = new WeakMap,
      Ru = new WeakMap,
      Ku = {
        gl: 0,
        lost: 0
      };
    let wu = {
        inst: {
          draws: 0,
          faces: 0
        },
        tex: {
          draws: 0,
          faces: 0
        },
        other: {
          draws: 0,
          faces: 0
        }
      },
      Xu = {
        buffer: 0,
        texture: 0
      },
      fu = 0;

    function su(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (zz instanceof ArrayBuffer) return new Uint8Array(zz, uz, bz || void 0);
      if (!ArrayBuffer.isView(zz)) return null;
      const Ez = "BYTES_PER_ELEMENT" in zz ? zz.BYTES_PER_ELEMENT : 1,
        nz = zz.byteOffset + uz * Ez,
        iz = bz ? bz * Ez : zz.byteLength - uz * Ez;
      return new Uint8Array(zz.buffer, nz, Math.max(0, iz))
    }

    function ru(zz, uz) {
      const bz = function(zz) {
        switch (zz) {
          case Rz.ARRAY_BUFFER:
            return Rz.ARRAY_BUFFER_BINDING;
          case Rz.ELEMENT_ARRAY_BUFFER:
            return Rz.ELEMENT_ARRAY_BUFFER_BINDING;
          case Rz.COPY_READ_BUFFER:
            return Rz.COPY_READ_BUFFER_BINDING;
          case Rz.COPY_WRITE_BUFFER:
            return Rz.COPY_WRITE_BUFFER_BINDING;
          case Rz.UNIFORM_BUFFER:
            return Rz.UNIFORM_BUFFER_BINDING;
          case Rz.PIXEL_UNPACK_BUFFER:
            return Rz.PIXEL_UNPACK_BUFFER_BINDING;
          case Rz.TRANSFORM_FEEDBACK_BUFFER:
            return Rz.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(uz);
      return bz ? zz.getParameter(bz) : null
    }

    function ou(zz) {
      const uz = Pz.get(zz);
      uz && (az.shadowBytes -= uz.bytes.length, Pz.delete(zz))
    }

    function Nu(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      ou(zz), az.shadowBytes + uz > xz ? az.uncopied++ : (az.shadowBytes += uz, Pz.set(zz, {
        id: qz(zz),
        bytes: new Uint8Array(uz),
        width: bz,
        height: Ez,
        texelBytes: nz,
        missed: 0
      }))
    }

    function vu(zz, uz) {
      for (const bz of ["deleteBuffer", "deleteTexture"]) pu(zz, bz, (zz => function() {
        for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
        return bz[0] && ou(bz[0]), Ou(zz, this, bz)
      }));
      pu(zz, "shaderSource", (zz => function() {
        for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
        return bz[0] && "string" === typeof bz[1] && Fu.set(bz[0], bz[1]), Ou(zz, this, bz)
      })), pu(zz, "attachShader", (zz => function() {
        for (var uz, bz = arguments.length, Ez = new Array(bz), nz = 0; nz < bz; nz++) Ez[nz] = arguments[nz];
        const iz = Ez[0],
          lz = null !== (uz = Zu.get(iz)) && void 0 !== uz ? uz : [];
        return lz.push(Ez[1]), Zu.set(iz, lz), Ou(zz, this, Ez)
      })), pu(zz, "linkProgram", (zz => function() {
        for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
        const nz = Ou(zz, this, bz);
        return az.inProbe || function(zz, uz) {
          var bz, Ez, nz;
          "undefined" !== typeof HTMLCanvasElement && zz.canvas instanceof HTMLCanvasElement && function(zz) {
            if (Pu.has(zz)) return;
            Pu.add(zz);
            for (const uz of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) zz.addEventListener(uz, (zz => {
              Ku.lost < tu && (Ku.lost++, gz(`${uz}${"statusMessage"in zz?`: ${String(zz.statusMessage)}`:""}`))
            }))
          }(zz.canvas);
          az.context ??= zz;
          const iz = null !== (bz = Zu.get(uz)) && void 0 !== bz ? bz : [];
          let lz = "",
            Mz = "";
          for (const Oz of iz) {
            var tz;
            const zz = null !== (tz = Fu.get(Oz)) && void 0 !== tz ? tz : "";
            /\bgl_Position\b/.test(zz) ? lz = zz : Mz = zz
          }
          const Hz = {
            id: qz(uz),
            name: null !== (Ez = null === (nz = Az.exec(lz)) || void 0 === nz ? void 0 : nz[1]) && void 0 !== Ez ? Ez : null,
            gl: zz,
            vertex: lz,
            fragment: Mz,
            terrain: Ju(lz),
            checked: !1,
            firstDraw: !1
          };
          if (Ru.set(uz, Hz), Lz.push([uz, Hz]), null !== Hz.terrain) {
            const uz = iz.map((uz => {
              var bz;
              return null !== (bz = zz.getShaderInfoLog(uz)) && void 0 !== bz ? bz : ""
            })).filter((zz => "" !== zz.trim()));
            uz.length > 0 && Sz(`program ${Tz(Hz)} (${Hz.terrain}) shader logs:\n${yz(uz.join("\n"))}`)
          }
        }(this, bz[0]), nz
      })), pu(zz, "bufferData", (zz => function() {
        for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
        const nz = Ou(zz, this, bz);
        if (!az.inProbe) {
          const zz = ru(this, bz[0]);
          if (zz) {
            var iz, lz, Mz;
            const uz = "number" === typeof bz[1] ? null : su(bz[1], null !== (iz = bz[3]) && void 0 !== iz ? iz : 0, null !== (lz = bz[4]) && void 0 !== lz ? lz : 0);
            var tz;
            if (Nu(zz, "number" === typeof bz[1] ? bz[1] : null !== (Mz = null === uz || void 0 === uz ? void 0 : uz.length) && void 0 !== Mz ? Mz : 0), uz) null === (tz = Pz.get(zz)) || void 0 === tz || tz.bytes.set(uz)
          }
        }
        return nz
      })), pu(zz, "bufferSubData", (zz => function() {
        for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
        const nz = Ou(zz, this, bz);
        if (!az.inProbe) {
          var iz, lz;
          const zz = ru(this, bz[0]),
            uz = zz ? Pz.get(zz) : void 0,
            Ez = su(bz[2], null !== (iz = bz[3]) && void 0 !== iz ? iz : 0, null !== (lz = bz[4]) && void 0 !== lz ? lz : 0);
          if (uz && Ez) {
            const zz = bz[1];
            uz.bytes.set(Ez.subarray(0, Math.max(0, uz.bytes.length - zz)), zz), xu("buffer", uz, zz, Ez.length)
          }
        }
        return nz
      })), uz && (pu(zz, "copyBufferSubData", (zz => function() {
        for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
        const nz = Ou(zz, this, bz);
        if (!az.inProbe) {
          const [zz, uz, Ez, nz, iz] = bz, lz = ru(this, zz), Mz = ru(this, uz), tz = lz ? Pz.get(lz) : void 0, Hz = Mz ? Pz.get(Mz) : void 0;
          Hz && (tz ? Hz.bytes.set(tz.bytes.slice(Ez, Ez + iz), nz) : Hz.missed++)
        }
        return nz
      })), pu(zz, "texStorage2D", (zz => function() {
        for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
        const nz = Ou(zz, this, bz),
          [, , iz, lz, Mz] = bz;
        if (!az.inProbe && (iz === Rz.RGBA32UI || iz === Rz.RGBA16UI)) {
          const zz = this.getParameter(Rz.TEXTURE_BINDING_2D),
            uz = iz === Rz.RGBA32UI ? 16 : 8;
          zz && (Gz.set(zz, uz), Nu(zz, lz * Mz * uz, lz, Mz, uz))
        }
        return nz
      })), pu(zz, "texSubImage2D", (zz => function() {
        for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
        const nz = Ou(zz, this, bz);
        return !az.inProbe && bz.length >= 9 && bz[0] === Rz.TEXTURE_2D && 0 === bz[1] && function(zz, uz) {
          var bz;
          const Ez = zz.getParameter(Rz.TEXTURE_BINDING_2D),
            nz = Ez ? Pz.get(Ez) : void 0;
          if (!nz) return;
          const [, , iz, lz, Mz, tz] = uz;
          let Hz = su(uz[8], null !== (bz = uz[9]) && void 0 !== bz ? bz : 0);
          if (null === Hz && "number" === typeof uz[8]) {
            const bz = ru(zz, Rz.PIXEL_UNPACK_BUFFER),
              Ez = bz ? Pz.get(bz) : void 0;
            Hz = Ez ? Ez.bytes.subarray(uz[8]) : null
          }
          if (null === Hz) return void nz.missed++;
          const Oz = zz.getParameter(Rz.UNPACK_ROW_LENGTH) || Mz,
            pz = zz.getParameter(Rz.UNPACK_SKIP_ROWS),
            dz = zz.getParameter(Rz.UNPACK_SKIP_PIXELS),
            Fz = nz.texelBytes;
          for (let Zz = 0; Zz < tz; Zz++) {
            const zz = ((pz + Zz) * Oz + dz) * Fz,
              uz = ((lz + Zz) * nz.width + iz) * Fz;
            nz.bytes.set(Hz.subarray(zz, zz + Mz * Fz), uz)
          }
          xu("texture", nz, (lz * nz.width + iz) * Fz, Mz * tz * Fz)
        }(this, bz), nz
      })), pu(zz, "copyTexSubImage2D", (zz => function() {
        for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
        const nz = bz[0] === Rz.TEXTURE_2D ? this.getParameter(Rz.TEXTURE_BINDING_2D) : null,
          iz = nz ? Pz.get(nz) : void 0;
        return iz && iz.missed++, Ou(zz, this, bz)
      })));
      for (const bz of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) pu(zz, bz, (zz => function() {
        for (var uz = arguments.length, Ez = new Array(uz), nz = 0; nz < uz; nz++) Ez[nz] = arguments[nz];
        const iz = Ou(zz, this, Ez);
        return az.inProbe || Tu(this, bz, Ez), iz
      }));
      pu(zz, "getExtension", (zz => function() {
        for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
        const nz = Ou(zz, this, bz);
        return nz && "object" === typeof nz && function(zz, uz, bz) {
          const Ez = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(uz in Ez) || bz.bloxdRenderDebug) return;
          bz.bloxdRenderDebug = !0;
          for (const nz of Ez[uz]) {
            const uz = bz[nz];
            "function" === typeof uz && (bz[nz] = function() {
              for (var Ez = arguments.length, iz = new Array(Ez), lz = 0; lz < Ez; lz++) iz[lz] = arguments[lz];
              const Mz = Ou(uz, bz, iz);
              return az.inProbe || Tu(zz, nz, iz), Mz
            })
          }
        }(this, bz[0], nz), nz
      }))
    }

    function xu(zz, uz, bz, Ez) {
      Xu[zz] += Ez, fu < 32 && uz.bytes.length >= 1 << 20 && (fu++, Sz(`upload ${zz} #${uz.id} +${bz} ${Ez} B`))
    }

    function Ju(zz) {
      if (!zz.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(zz) || /in uvec3 _p2vs_location0\b/.test(zz) ? "inst" : "tex"
    }

    function Au(zz, uz, bz) {
      var Ez;
      if (bz.checked) return;
      bz.checked = !0;
      const nz = zz.getProgramParameter(uz, Rz.LINK_STATUS),
        iz = (null !== (Ez = zz.getProgramInfoLog(uz)) && void 0 !== Ez ? Ez : "").trim();
      var lz;
      null === bz.terrain && nz || (gz(`program ${Tz(bz)} ${null!==(lz=bz.terrain)&&void 0!==lz?lz:"other"} link ${nz?"ok":"FAILED"}${iz?`: ${yz(iz,300)}`:""}`), iz && Sz(`program ${Tz(bz)} link log:\n${yz(iz)}`))
    }

    function Tu(zz, uz, bz) {
      var Ez;
      const nz = zz.getParameter(Rz.CURRENT_PROGRAM),
        iz = nz ? Ru.get(nz) : void 0;
      if (!nz || !iz) return;
      const lz = null !== (Ez = iz.terrain) && void 0 !== Ez ? Ez : "other",
        {
          al: Mz,
          instances: tz
        } = function(zz, uz) {
          switch (zz) {
            case "drawArrays":
              return {
                al: [
                  [uz[1], uz[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                al: [
                  [uz[1], uz[2]]
                ], instances: uz[3]
              };
            case "drawElements":
              return {
                al: [
                  [0, uz[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                al: [
                  [0, uz[1]]
                ], instances: uz[4]
              };
            case "multiDrawArraysWEBGL": {
              const zz = uz[1],
                bz = uz[3],
                Ez = uz[2],
                nz = uz[4],
                iz = [];
              for (let lz = 0; lz < uz[5]; lz++) iz.push([zz[Ez + lz], bz[nz + lz]]);
              return {
                al: iz,
                instances: 1
              }
            }
            default:
              return {
                al: [], instances: 0
              }
          }
        }(uz, bz),
        Hz = "inst" === iz.terrain ? tz : Mz.reduce(((zz, uz) => {
          let [, bz] = uz;
          return zz + bz
        }), 0) / 6;
      if (wu[lz].draws++, wu[lz].faces += Hz, null === iz.terrain) return;
      if (az.context = zz, !iz.firstDraw) {
        iz.firstDraw = !0, Au(zz, nz, iz), Lu || (Lu = !0, gz(function(zz) {
          var uz;
          const bz = zz.getParameter(Rz.DEPTH_FUNC),
            Ez = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let nz = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in zz && zz.getParameter(Rz.DRAW_FRAMEBUFFER_BINDING)) {
            const uz = zz;
            nz = uz.getFramebufferAttachmentParameter(Rz.DRAW_FRAMEBUFFER, Rz.DEPTH_ATTACHMENT, Rz.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(uz.getFramebufferAttachmentParameter(Rz.DRAW_FRAMEBUFFER,Rz.DEPTH_ATTACHMENT,Rz.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(uz.getFramebufferAttachmentParameter(Rz.DRAW_FRAMEBUFFER,Rz.DEPTH_ATTACHMENT,Rz.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const iz = zz.getParameter(Rz.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(uz=Ez[bz])&&void 0!==uz?uz:`0x${bz.toString(16)}`} clear ${iz}${516===bz||518===bz?" (reverse-Z)":""}, samples ${String(zz.getParameter(Rz.SAMPLES))}, ${nz}`
        }(zz)));
        const bz = zz.getError();
        bz !== Rz.NO_ERROR && Ku.gl < tu && (Ku.gl++, gz(`GL error 0x${bz.toString(16)} after program ${Tz(iz)}'s first terrain draw (${uz})`))
      }
      const Oz = az.pendingCheck;
      null !== Oz && (Oz.terrainDraws++, Oz.draws.length < Hu && Dz(zz, nz, iz, uz, Mz, tz))
    }
    let Lu = !1;
    const Pu = new WeakSet;
    var Gu = bz(4282),
      au = bz(4454);
    const Vu = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let mu = !1;
    const qu = new WeakSet,
      hu = new WeakMap,
      Uu = new WeakMap,
      cu = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let gu = 0,
      Su = !1,
      yu = null,
      Du = {
        draws: 0,
        faces: 0
      };

    function Qu(zz) {
      const uz = globalThis[zz];
      return null === uz || void 0 === uz ? void 0 : uz.prototype
    }

    function Wu(zz) {
      return zz && "function" === typeof zz[Symbol.iterator] ? [...zz].sort().join(" ") : ""
    }

    function eu(zz, uz) {
      const bz = null !== zz && void 0 !== zz ? zz : {},
        Ez = null !== uz && void 0 !== uz ? uz : Object.keys(Object.getPrototypeOf(bz)).concat(Object.keys(bz));
      return [...new Set(Ez)].filter((zz => "number" === typeof bz[zz])).map((zz => `${zz} ${String(bz[zz])}`)).join(", ")
    }

    function ju(zz, uz) {
      var bz;
      const Ez = null !== (bz = uz.vertex) && void 0 !== bz ? bz : {};
      if (Ez.module && qu.has(Ez.module)) {
        var nz;
        const bz = String(null !== (nz = Ez.entryPoint) && void 0 !== nz ? nz : "");
        if (bz.startsWith("vs_packed") && hu.set(zz, bz), !Su) {
          var iz, lz, Mz, tz, Hz;
          Su = !0;
          const zz = null !== (iz = uz.depthStencil) && void 0 !== iz ? iz : {},
            Ez = null !== (lz = uz.multisample) && void 0 !== lz ? lz : {},
            nz = String(null !== (Mz = zz.depthCompare) && void 0 !== Mz ? Mz : "");
          gz(`WebGPU terrain pipeline ${bz}: depth ${String(null!==(tz=zz.format)&&void 0!==tz?tz:"none")} ${nz}${nz.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(Hz=Ez.count)&&void 0!==Hz?Hz:1)}`)
        }
      }
    }

    function Iu(zz) {
      pu(zz, "setPipeline", (zz => function() {
        for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
        return Uu.set(this, bz[0]), Ou(zz, this, bz)
      }));
      for (const uz of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) pu(zz, uz, (zz => function() {
        const bz = Uu.get(this),
          Ez = bz ? hu.get(bz) : void 0;
        for (var nz = arguments.length, iz = new Array(nz), lz = 0; lz < nz; lz++) iz[lz] = arguments[lz];
        return void 0 !== Ez && Bu(uz, Ez, iz), Ou(zz, this, iz)
      }))
    }

    function Bu(zz, uz, bz) {
      var Ez;
      (Du.draws++, "draw" === zz || "drawIndexed" === zz) && (Du.faces += bz[0] * (null !== (Ez = bz[1]) && void 0 !== Ez ? Ez : 1) / 6);
      if (null !== yu && yu.length < Hu) {
        const Ez = ("draw" === zz ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === zz ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((uz, Ez) => {
          const nz = zz.endsWith("Indirect") ? bz[1] : bz[Ez];
          return `${uz} ${String(null!==nz&&void 0!==nz?nz:"instances"===uz?1:0)}`
        }));
        yu.push(`  ${uz} ${zz} ${Ez.join(" ")}`)
      }
    }

    function Cu() {
      if (mu || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      mu = !0, pu(Qu("GPU"), "requestAdapter", (zz => function() {
        for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
        return Ou(zz, this, bz).then((zz => {
          var uz;
          zz ? function(zz) {
            var uz;
            const bz = null !== (uz = zz.info) && void 0 !== uz ? uz : {};
            gz(`WebGPU adapter ${["vendor","architecture","device","description"].map((zz=>{var uz;return`${zz} "${String(null!==(uz=bz[zz])&&void 0!==uz?uz:"")}"`})).join(" ")}${zz.isFallbackAdapter?" (fallback)":""}`), gz(`WebGPU adapter features ${Wu(zz.features)}`), gz(`WebGPU adapter limits ${eu(zz.limits,Vu)}`), Sz(`WebGPU adapter all limits ${eu(zz.limits,null)}`)
          }(zz) : gz(`WebGPU requestAdapter(${JSON.stringify(null!==(uz=bz[0])&&void 0!==uz?uz:{})}) gave none`);
          return zz
        }))
      })), pu(Qu("GPUAdapter"), "requestDevice", (zz => function() {
        for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
        return Ou(zz, this, bz).then((zz => (function(zz) {
          gz(`WebGPU device features ${Wu(zz.features)}`), gz(`WebGPU device limits ${eu(zz.limits,Vu)}`), zz.addEventListener("uncapturederror", (zz => {
            if (cu.uncaptured < tu) {
              var uz, bz, Ez;
              cu.uncaptured++;
              const nz = zz.error;
              gz(`WebGPU uncaptured ${null!==(uz=null===nz||void 0===nz||null===(bz=nz.constructor)||void 0===bz?void 0:bz.name)&&void 0!==uz?uz:"error"}: ${yz(String(null!==(Ez=null===nz||void 0===nz?void 0:nz.message)&&void 0!==Ez?Ez:""),600)}`)
            }
          }));
          const uz = zz.lost;
          null === uz || void 0 === uz || uz.then((zz => {
            var uz;
            gz(`WebGPU device lost (${String(zz.reason)}): ${yz(String(null!==(uz=zz.message)&&void 0!==uz?uz:""),600)}`)
          }))
        }(zz), zz)), (zz => {
          throw gz(`WebGPU requestDevice failed: ${String(zz)}`), zz
        }))
      }));
      const zz = Qu("GPUDevice");
      pu(zz, "createShaderModule", (zz => function() {
        for (var uz, bz, Ez = arguments.length, nz = new Array(Ez), iz = 0; iz < Ez; iz++) nz[iz] = arguments[iz];
        const lz = Ou(zz, this, nz);
        return function(zz, uz) {
          const bz = uz.includes("decodeQuad");
          bz && qu.add(zz);
          const Ez = zz.getCompilationInfo;
          null === Ez || void 0 === Ez || Ez.call(zz).then((zz => {
            if (0 === zz.messages.length && !bz) return;
            const uz = {};
            for (const bz of zz.messages) {
              var Ez;
              uz[String(bz.type)] = (null !== (Ez = uz[String(bz.type)]) && void 0 !== Ez ? Ez : 0) + 1
            }
            const nz = zz.messages.map((zz => `${String(zz.type)} ${String(zz.lineNum)}:${String(zz.linePos)} ${String(zz.message)}`)).join("\n");
            cu.compile < tu && (cu.compile++, gz(`WebGPU ${bz?"terrain ":""}shader module compiled: ${JSON.stringify(uz)}${nz?` first: ${yz(nz.split("\n")[0],300)}`:""}`)), nz && Sz(`WebGPU shader module messages:\n${yz(nz)}`)
          }))
        }(lz, String(null !== (uz = (null !== (bz = nz[0]) && void 0 !== bz ? bz : {}).code) && void 0 !== uz ? uz : "")), lz
      })), pu(zz, "createRenderPipeline", (zz => function() {
        for (var uz, bz = arguments.length, Ez = new Array(bz), nz = 0; nz < bz; nz++) Ez[nz] = arguments[nz];
        const iz = Ou(zz, this, Ez);
        return ju(iz, null !== (uz = Ez[0]) && void 0 !== uz ? uz : {}), iz
      })), pu(zz, "createRenderPipelineAsync", (zz => function() {
        for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
        return Ou(zz, this, bz).then((zz => {
          var uz;
          return ju(zz, null !== (uz = bz[0]) && void 0 !== uz ? uz : {}), zz
        }), (zz => {
          var uz;
          throw function(zz, uz) {
            var bz, Ez, nz;
            if (cu.rejected >= tu) return;
            cu.rejected++;
            const {
              reason: iz,
              message: lz
            } = null !== uz && void 0 !== uz ? uz : {}, Mz = String(null !== (bz = (null !== (Ez = zz.vertex) && void 0 !== Ez ? Ez : {}).entryPoint) && void 0 !== bz ? bz : "");
            gz(`WebGPU pipeline "${String(null!==(nz=zz.label)&&void 0!==nz?nz:"")}" ${Mz} rejected (${String(null!==iz&&void 0!==iz?iz:"no reason")}): ${yz(String(null!==lz&&void 0!==lz?lz:uz),600)}`)
          }(null !== (uz = bz[0]) && void 0 !== uz ? uz : {}, zz), zz
        }))
      })), pu(Qu("GPUCanvasContext"), "configure", (zz => function() {
        for (var uz, bz = arguments.length, Ez = new Array(bz), nz = 0; nz < bz; nz++) Ez[nz] = arguments[nz];
        const iz = null !== (uz = Ez[0]) && void 0 !== uz ? uz : {};
        var lz, Mz;
        gu++ < 3 && gz(`WebGPU canvas ${String(iz.format)} ${String(null!==(lz=iz.colorSpace)&&void 0!==lz?lz:"srgb")} alpha ${String(null!==(Mz=iz.alphaMode)&&void 0!==Mz?Mz:"opaque")}`);
        return Ou(zz, this, Ez)
      })), Iu(Qu("GPURenderPassEncoder")), Iu(Qu("GPURenderBundleEncoder"))
    }
    const Yu = 1e4,
      ku = 6e4,
      zb = 5e3,
      ub = 3e3,
      bb = 100;
    let Eb = null,
      nb = !1,
      ib = {
        ...Gu.e
      },
      lb = !1,
      Mb = null,
      tb = 0,
      Hb = () => {};
    const Ob = new Promise((zz => {
      Hb = zz
    }));

    function pb() {
      var zz;
      nb || (nb = !0, ib = Object.assign(window.bloxdRenderDebug ??= {
        ...Gu.e
      }, {
        faceCull: "0" === (0, iz.m)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (zz = (0, iz.m)("adrenoProbe")) && void 0 !== zz ? zz : ""
      }), gz("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), du || "undefined" === typeof window || (du = !0, "undefined" !== typeof WebGL2RenderingContext && vu(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && vu(WebGLRenderingContext.prototype, !1)), Cu(), (0, iz.c)("renderProbe", (() => {
        wb("console")
      })), Rb(), setInterval(fb, zb))
    }

    function db(zz) {
      var uz, bz;
      pb(), Eb = null !== (uz = null === zz || void 0 === zz ? void 0 : zz.backend) && void 0 !== uz ? uz : null;
      const Ez = `, renderer param ${null!==(bz=(0,iz.m)("renderer"))&&void 0!==bz?bz:"none"}, faceCull ${"0"===ib.faceCull?"off (whole parts)":"on"}, adrenoProbe ${ib.adrenoProbe||"none"}`;
      gz(`${(0,au.d)(zz)}${null===zz?"":Ez}`)
    }

    function Fb() {
      const zz = performance.now(),
        uz = Zb(Ob, Yu, ku).then((uz => wb(`${Math.round((performance.now()-zz)/1e3)} s after playable${uz?"":", no terrain drawn yet"}`)));
      (0, nz.c)(gz, (async () => {
        await uz, await Mb
      }))
    }
    async function Zb(zz, uz, bz) {
      const nz = (0, Ez.d)(bz).then((() => !1));
      return await (0, Ez.d)(uz), Promise.race([zz.then((() => !0)), nz])
    }

    function Rb() {
      requestAnimationFrame((() => {
        tb++, Rb()
      }))
    }

    function Kb() {
      var zz, uz, bz;
      if (lb) return;
      (lb = !0, gz(`renderer caps ${null!==(zz=ib.caps)&&void 0!==zz?zz:"(not noted)"}; terrain fetch ${null!==(uz=ib.fetch)&&void 0!==uz?uz:"(not noted)"}`), ib.adrenoProbe) && gz(`adrenoProbe ${ib.adrenoProbe} asked; in force (storage fetch only): ${null!==(bz=ib.probe)&&void 0!==bz?bz:"(not noted)"}`);
      const Ez = az.context;
      if (Ez) {
        for (const zz of function(zz) {
            var uz;
            const bz = [],
              Ez = zz.getExtension("WEBGL_debug_renderer_info"),
              nz = Ez ? zz.getParameter(Ez.UNMASKED_VENDOR_WEBGL) : "(masked)",
              iz = Ez ? zz.getParameter(Ez.UNMASKED_RENDERER_WEBGL) : "(masked)";
            bz.push(`GL ${String(zz.getParameter(zz.VERSION))} | ${String(zz.getParameter(zz.SHADING_LANGUAGE_VERSION))} | ${String(zz.getParameter(zz.VENDOR))} / ${String(zz.getParameter(zz.RENDERER))}`), bz.push(`GL unmasked ${nz} / ${iz}`);
            const lz = [
              ["MAX_TEXTURE_SIZE", zz.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", zz.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", zz.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", zz.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", zz.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", zz.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", zz.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in zz && lz.push(["MAX_UNIFORM_BLOCK_SIZE", zz.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", zz.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", zz.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", zz.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), bz.push(`GL limits ${lz.map((uz=>{let[bz,Ez]=uz;return`${bz} ${String(zz.getParameter(Ez))}`})).join(", ")}`);
            const Mz = (uz, bz) => {
              const Ez = zz.getShaderPrecisionFormat(uz, zz.HIGH_FLOAT),
                nz = zz.getShaderPrecisionFormat(uz, zz.HIGH_INT);
              return `${bz} highp float ${Ez?`${Ez.rangeMin}/${Ez.rangeMax}/${Ez.precision}`:"?"} int ${nz?`${nz.rangeMin}/${nz.rangeMax}/${nz.precision}`:"?"}`
            };
            bz.push(`GL precision ${Mz(zz.VERTEX_SHADER,"VS")}, ${Mz(zz.FRAGMENT_SHADER,"FS")}`);
            const tz = zz.getContextAttributes();
            return bz.push(`GL context ${JSON.stringify(tz)} drawingBuffer ${zz.drawingBufferWidth}x${zz.drawingBufferHeight}${"drawingBufferFormat"in zz?` format 0x${Number(zz.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in zz?` ${String(zz.drawingBufferColorSpace)}`:""}`), bz.push(`GL extensions ${(null!==(uz=zz.getSupportedExtensions())&&void 0!==uz?uz:[]).join(" ")}`), bz
          }(Ez)) gz(zz);
        ! function() {
          if (!az.context) return;
          let zz = 0,
            uz = 0;
          for (const [bz, Ez] of Lz) !Ez.gl.isContextLost() && Ez.gl.isProgram(bz) && (uz++, Au(Ez.gl, bz, Ez), null !== Ez.terrain && zz++);
          gz(`programs: ${uz} live of ${Lz.length} linked, ${zz} packed terrain; CPU page copies ${Math.round(az.shadowBytes/1048576)} MiB (${az.uncopied} over budget)`)
        }()
      }
    }

    function wb(zz) {
      return Mb ??= async function(zz) {
        Kb(), "webgpu" === Eb ? (Xb(), "1" === ib.slotCheck && gz("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), ib.slotCheck = "1", await
          function(zz) {
            if (null !== yu) return Promise.resolve();
            const uz = [];
            return yu = uz, new Promise((bz => {
              setTimeout((() => {
                yu = null, gz(`WebGPU draw ranges (${zz}): ${uz.length} terrain draws recorded in a second (first ${Hu}; bundles replay without new ones)`);
                for (const zz of uz) gz(zz);
                bz()
              }), 1e3)
            }))
          }(zz), await async function() {
            for (let zz = 0;
              "1" === ib.slotCheck && zz < ub; zz += bb) await (0, Ez.d)(bb);
            if ("1" === ib.slotCheck) return void gz(`slot check: no answer in ${ub} ms (only the storage fetch has one; a later answer logs on its own)`);
            Xb()
          }()) : await lu(zz);
        gz(`check (${zz}) done: bloxdDebug.save() downloads it all`)
      }(zz).catch((uz => {
        gz(`check (${zz}) failed: ${String(uz)}`)
      })).finally((() => {
        Mb = null
      })), Mb
    }

    function Xb() {
      void 0 !== ib.slotCheck && "1" !== ib.slotCheck && (gz(ib.slotCheck), delete ib.slotCheck)
    }

    function fb() {
      const zz = zz => tb ? (zz / tb).toFixed(1) : "0",
        uz = function() {
          const zz = Du;
          return Du = {
            draws: 0,
            faces: 0
          }, zz
        }(),
        bz = function() {
          const zz = wu;
          return wu = {
            inst: {
              draws: 0,
              faces: 0
            },
            tex: {
              draws: 0,
              faces: 0
            },
            other: {
              draws: 0,
              faces: 0
            }
          }, zz
        }(),
        Ez = function() {
          const zz = Xu;
          return Xu = {
            buffer: 0,
            texture: 0
          }, zz
        }();
      Xb(), ("webgpu" === Eb ? uz.draws : bz.inst.draws + bz.tex.draws) > 0 && Hb();
      const nz = "webgpu" === Eb ? [`terrain ${zz(uz.draws)} draws ${zz(uz.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((zz => bz[zz].draws > 0)).map((uz => `${uz} ${zz(bz[uz].draws)} draws ${zz(bz[uz].faces)} faces a frame`));
      gz(`${tb} frames: ${nz.join(", ")||"no draws"}; uploaded ${Math.round(Ez.buffer/1024)} KiB to buffers, ${Math.round(Ez.texture/1024)} KiB to data textures`), tb = 0
    }
  },
  4454: (zz, uz, bz) => {
    function Ez(zz) {
      if (null === zz) return "backend: none picked (no renderer build)";
      const uz = zz.adapter ? `${zz.adapter.vendor}/${zz.adapter.architecture}` : "none";
      return `backend ${zz.backend}: reason ${zz.reason}, source ${zz.source}, adapter ${uz}`
    }
    bz.d(uz, {
      d: () => Ez
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);