export const id = 47;
export const ids = [47];
export const modules = {
  4335: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz
    });
    var Fz = sz(30),
      Wz = sz(34),
      Xz = sz(1269),
      Oz = sz(2637);
    const oz = 3e4,
      vz = 1e3;

    function Uz() {
      return "visible" === document.visibilityState && "inGame" === Fz.b.get("gameState") && (0, Xz.o)()
    }

    function Kz(zz, tz) {
      (0, Oz.j)() || function(zz, tz, sz) {
        let Fz = 0;
        const Wz = setInterval((() => {
          tz() && (Fz += vz, Fz >= zz && (clearInterval(Wz), sz()))
        }), vz)
      }(oz, Uz, (() => {
        tz().then((() => {
          zz(`saved for the player after ${oz/1e3} s of play`), (0, Oz.q)(), Wz.o.Yg("chat", {
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
  4330: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      installRenderDebug: () => Ns,
      renderDebugPlayable: () => ws,
      startRenderDebug: () => bs,
      waitForDraw: () => Ds
    });
    var Fz = sz(1746),
      Wz = sz(4335),
      Xz = sz(2637);
    const Oz = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function oz(zz) {
      return 7 & zz
    }

    function vz(zz) {
      return zz >>> 11 & 1
    }

    function Uz(zz) {
      return [1 + (zz >>> 18 & 63), 1 + (zz >>> 24 & 63)]
    }

    function Kz(zz, tz) {
      const [sz, , Fz] = zz, Wz = oz(Fz), Xz = function(zz, tz, sz) {
        return tz + (1 === (22 >>> zz & 1) ? 4 - sz : sz) & 3
      }(Wz, vz(Fz), tz), Oz = Wz >>> 1, [Kz, uz] = Uz(sz), Nz = 1 === Xz || 2 === Xz ? Kz : 0, bz = Xz >= 2 ? uz : 0, wz = [63 & sz, sz >>> 6 & 63, sz >>> 12 & 63];
      return wz[2 === Oz ? 0 : 2] += Nz, wz[1 === Oz ? 0 : 1] += bz, wz
    }

    function uz(zz) {
      const tz = Math.max(...Uz(zz[0]));
      return 1 === tz ? "1" : tz <= 4 ? "2-4" : tz <= 16 ? "5-16" : "17-64"
    }
    const Nz = 16;

    function bz(zz) {
      let tz = 2166136261;
      for (let sz = 0; sz < zz.length; sz++) tz = Math.imul(tz ^ zz[sz], 16777619);
      return tz >>> 0
    }

    function wz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const Fz = Math.max(0, tz - sz),
        Wz = Math.min(zz.length, tz + sz),
        Xz = [];
      for (let Oz = Fz; Oz < Wz; Oz++) {
        const sz = zz[Oz].toString(16).padStart(2, "0");
        Xz.push(Oz === tz ? `[${sz}]` : sz)
      }
      return Xz.join(" ")
    }
    const Dz = {
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
      gz = "_vs2fs_location0",
      Hz = 0,
      Bz = 4,
      Pz = 6,
      rz = [0, 1, 2, 0, 2, 3],
      Yz = 2048,
      xz = 4,
      mz = 256,
      Jz = 64,
      Iz = 268435456,
      Cz = 65536,
      ez = /^#version [^\n]*\/\/ program (\S+)$/m;

    function Zz(zz) {
      return null === zz.name ? `#${zz.id}` : `#${zz.id} ${zz.name}`
    }
    const Gz = [],
      Tz = new WeakMap,
      cz = new WeakMap,
      jz = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let Az = 1;
    const yz = new WeakMap;

    function Mz(zz) {
      if (null === zz) return 0;
      let tz = yz.get(zz);
      return void 0 === tz && (tz = Az++, yz.set(zz, tz)), tz
    }
    class dz {
      constructor(zz, tz) {
        this.print = zz, this.now = tz, this.shown = 0, this.po = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.Ow = [], this.dropped = 0
      }
      line(zz) {
        const tz = this.now();
        if (tz - this.second >= 1e3 && (this.second = tz, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.po++, void this.store(zz);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${zz} (the last line here: the rest go to bloxdDebug.save())` : zz)
      }
      keep(zz) {
        this.sections++, this.store(zz)
      }
      store(zz) {
        this.Ow.push(`${new Date(Date.now()).toISOString()} ${zz}`), this.Ow.length > 2e4 && (this.Ow.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.po} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.Ow].join("\n")
      }
    }
    let hz = null;

    function Qz() {
      if (null === hz) {
        const zz = new dz((zz => {
          (0, Xz.g)("render", zz)
        }), (() => performance.now()));
        (0, Xz.f)("render", (() => zz.dump())), hz = zz
      }
      return hz
    }

    function kz(zz) {
      Qz().line(zz)
    }

    function iz(zz) {
      Qz().keep(zz)
    }

    function Lz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return zz.length <= tz ? zz : `${zz.slice(0,tz)}... (${zz.length-tz} more characters)`
    }

    function lz(zz, tz, sz, Fz, Wz, Xz) {
      const Oz = jz.pendingCheck;
      if (null === Oz) return;
      const oz = "undefined" !== typeof WebGL2RenderingContext && zz instanceof WebGL2RenderingContext,
        vz = {
          gl: zz,
          program: sz,
          call: Fz,
          du: Wz,
          instances: Xz,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (Oz.draws.push(vz), oz) try {
        const Fz = function(zz) {
          const tz = [],
            sz = new Map,
            Fz = Math.min(16, zz.getParameter(Dz.MAX_VERTEX_ATTRIBS));
          for (let Wz = 0; Wz < Fz; Wz++) {
            if (!zz.getVertexAttrib(Wz, Dz.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const Fz = zz.getVertexAttrib(Wz, Dz.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              Xz = zz.getVertexAttribOffset(Wz, Dz.VERTEX_ATTRIB_ARRAY_POINTER),
              Oz = zz.getVertexAttrib(Wz, Dz.VERTEX_ATTRIB_ARRAY_STRIDE),
              oz = zz.getVertexAttrib(Wz, Dz.VERTEX_ATTRIB_ARRAY_SIZE),
              vz = zz.getVertexAttrib(Wz, Dz.VERTEX_ATTRIB_ARRAY_TYPE),
              Uz = "VERTEX_ATTRIB_ARRAY_INTEGER" in zz && zz.getVertexAttrib(Wz, Dz.VERTEX_ATTRIB_ARRAY_INTEGER),
              Kz = "VERTEX_ATTRIB_ARRAY_DIVISOR" in zz ? zz.getVertexAttrib(Wz, Dz.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            sz.set(Wz, {
              buffer: Fz,
              offset: Xz,
              stride: Oz
            }), tz.push(`@${Wz} buf#${Mz(Fz)} +${Xz} stride ${Oz} ${oz}x0x${vz.toString(16)}${Uz?" int":""} div ${Kz}`)
          }
          return {
            lines: tz,
            byLocation: sz
          }
        }(zz);
        if (vz.attributes = Fz.lines, "inst" === sz.terrain) {
          const {
            group: Wz,
            chunk: oz
          } = function(zz, tz, sz) {
            const Fz = tz.get(Pz),
              Wz = zz.getVertexAttrib(Pz, Dz.CURRENT_VERTEX_ATTRIB),
              Xz = Fz ? `+${Fz.offset}` : Wz ? Array.from(Wz).slice(0, 3).join(",") : "?";
            let Oz = sz.groups.get(Xz);
            return void 0 === Oz && (Oz = sz.groups.size, sz.groups.set(Xz, Oz)), {
              group: Oz,
              chunk: Xz
            }
          }(zz, Fz.byLocation, Oz);
          vz.group = Wz, vz.chunk = oz;
          for (const zz of [Hz, Bz]) {
            var Uz;
            const tz = null === (Uz = Fz.byLocation.get(zz)) || void 0 === Uz ? void 0 : Uz.buffer;
            tz && vz.pages.push({
              kind: "buf",
              buffer: tz
            })
          }! function(zz, tz, sz, Fz, Wz, Xz, Oz) {
            const oz = Fz.get(Hz),
              vz = Oz.parts.get(Xz);
            if (void 0 === vz && Oz.parts.size >= xz) return;
            const Uz = Math.min(Wz, Jz, mz - (null !== vz && void 0 !== vz ? vz : 0));
            if (null === oz || void 0 === oz || !oz.buffer || Uz <= 0) return;
            const Kz = nz(zz, tz, sz);
            if (!Kz) return;
            const uz = oz.stride || 12,
              Nz = Rz(zz, oz.buffer, oz.offset, (Uz - 1) * uz + 12),
              bz = new DataView(Nz.buffer),
              wz = function(zz, tz) {
                const sz = function(zz) {
                    const tz = Ez.get(zz);
                    if (void 0 !== tz && (null === tz || zz.isProgram(tz))) return tz;
                    jz.inProbe = !0;
                    let sz = null;
                    try {
                      sz = az(zz, pz, fz, "fed", "the record feed")
                    } finally {
                      jz.inProbe = !1
                    }
                    return Ez.set(zz, sz), sz
                  }(zz),
                  Fz = sz ? Vz(zz, sz, tz, (() => {
                    zz.drawArraysInstanced(Dz.POINTS, 0, 1, tz)
                  }), "decode probe input (the record feed)") : null;
                return Fz ? new Uint32Array(Fz.buffer) : null
              }(zz, Uz);
            wz || Oz.fed.failed++;
            const gz = Vz(zz, Kz, 4 * Uz, (() => {
              zz.drawArraysInstanced(Dz.POINTS, 0, 4, Uz)
            }));
            if (!gz) return;
            Oz.parts.set(Xz, (null !== vz && void 0 !== vz ? vz : 0) + Uz);
            for (let Dz = 0; Dz < Uz; Dz++) {
              const zz = Dz * uz,
                tz = [bz.getUint32(zz, !0), bz.getUint32(zz + 4, !0), bz.getUint32(zz + 8, !0)],
                sz = wz ? [wz[3 * Dz], wz[3 * Dz + 1], wz[3 * Dz + 2]] : tz;
              wz && (Oz.fed.records++, sz.some(((zz, sz) => zz !== tz[sz])) && (Oz.fed.differing++, Oz.fed.first.length < 8 && Oz.fed.first.push(`part ${Xz} instance ${Dz}: fed ${sz.map(Wt).join(" ")} buffer ${tz.map(Wt).join(" ")}`)));
              for (let Fz = 0; Fz < 4; Fz++) {
                const zz = 3 * (4 * Dz + Fz);
                Oz.vertices.push({
                  record: sz,
                  slot: Fz,
                  group: Xz,
                  gpu: [gz[zz], gz[zz + 1], gz[zz + 2]]
                })
              }
            }
          }(zz, tz, sz, Fz.byLocation, Xz, Wz, Oz)
        } else {
          const Fz = zt(zz, tz, 16),
            Xz = zt(zz, tz, 8);
          for (const zz of [Fz, Xz]) zz && vz.pages.push({
            kind: "tex",
            texture: zz
          });
          Fz && function(zz, tz, sz, Fz, Wz, Xz) {
            if (Xz.parts.size >= xz) return;
            const Oz = nz(zz, tz, sz);
            if (!Oz) return;
            let oz = 6 * mz;
            const vz = [];
            for (const [bz, wz] of Wz) {
              const zz = Math.min(wz, oz, Math.max(6, 6 * Math.floor(mz / Wz.length)));
              zz > 0 && (vz.push([bz, zz]), oz -= zz)
            }
            const Uz = vz.reduce(((zz, tz) => {
                let [, sz] = tz;
                return zz + sz
              }), 0),
              Kz = Vz(zz, Oz, Uz, (() => {
                for (const [tz, sz] of vz) zz.drawArrays(Dz.POINTS, tz, sz)
              }));
            if (!Kz) return;
            let uz = 0;
            for (const [bz, wz] of vz) {
              const tz = Math.floor(bz / 6),
                sz = Math.floor((bz + wz - 1) / 6) - tz + 1,
                Wz = tt(zz, Fz, Yz, tz, sz);
              for (let zz = bz; zz < bz + wz; zz++, uz++) {
                var Nz;
                const sz = 4 * (Math.floor(zz / 6) - tz),
                  Fz = [Wz[sz], Wz[sz + 1], Wz[sz + 2]];
                Xz.parts.set(Wz[sz + 3], (null !== (Nz = Xz.parts.get(Wz[sz + 3])) && void 0 !== Nz ? Nz : 0) + (zz % 6 === 0 ? 1 : 0)), Xz.vertices.push({
                  record: Fz,
                  slot: rz[zz % 6],
                  group: Wz[sz + 3],
                  gpu: [Kz[3 * uz], Kz[3 * uz + 1], Kz[3 * uz + 2]]
                })
              }
            }
          }(zz, tz, sz, Fz, Wz, Oz)
        }
      } catch (Kz) {
        kz(`decode probe failed on program ${Zz(sz)}: ${String(Kz)}`)
      }
    }

    function nz(zz, tz, sz) {
      if (void 0 !== sz.probe) return sz.probe && qz(zz, tz, sz.probe), sz.probe;
      sz.probe = null, jz.inProbe = !0;
      try {
        sz.probe = function(zz, tz) {
          return az(zz, tz.vertex, tz.fragment, gz, `program ${Zz(tz)}'s twin`)
        }(zz, sz)
      } finally {
        jz.inProbe = !1
      }
      return sz.probe && qz(zz, tz, sz.probe), sz.probe
    }

    function az(zz, tz, sz, Fz, Wz) {
      const Xz = [zz.createShader(Dz.VERTEX_SHADER), zz.createShader(Dz.FRAGMENT_SHADER)],
        Oz = zz.createProgram();
      if (!Oz || !Xz[0] || !Xz[1]) return null;
      zz.shaderSource(Xz[0], tz), zz.shaderSource(Xz[1], sz);
      for (const vz of Xz) zz.compileShader(vz), zz.attachShader(Oz, vz);
      zz.transformFeedbackVaryings(Oz, [Fz], Dz.INTERLEAVED_ATTRIBS), zz.linkProgram(Oz);
      for (const vz of Xz) zz.deleteShader(vz);
      var oz;
      return zz.getProgramParameter(Oz, Dz.LINK_STATUS) ? Oz : (kz(`decode probe: ${Wz} failed to link: ${Lz(null!==(oz=zz.getProgramInfoLog(Oz))&&void 0!==oz?oz:"",300)}`), zz.deleteProgram(Oz), null)
    }

    function qz(zz, tz, sz) {
      const Fz = zz.getProgramParameter(tz, Dz.ACTIVE_UNIFORM_BLOCKS);
      for (let oz = 0; oz < Fz; oz++) {
        const Fz = zz.getActiveUniformBlockName(tz, oz),
          Wz = null === Fz ? Dz.INVALID_INDEX : zz.getUniformBlockIndex(sz, Fz);
        Wz !== Dz.INVALID_INDEX && zz.uniformBlockBinding(sz, Wz, zz.getActiveUniformBlockParameter(tz, oz, Dz.UNIFORM_BLOCK_BINDING))
      }
      const Wz = zz.getParameter(Dz.CURRENT_PROGRAM);
      zz.useProgram(sz);
      const Xz = zz.getProgramParameter(tz, Dz.ACTIVE_UNIFORMS),
        Oz = zz.getActiveUniforms(tz, [...Array(Xz).keys()], Dz.UNIFORM_BLOCK_INDEX);
      for (let oz = 0; oz < Xz; oz++) {
        const Fz = zz.getActiveUniform(tz, oz);
        if (!Fz || -1 !== Oz[oz]) continue;
        const Wz = Fz.name.replace(/\[0\]$/, "");
        for (let Xz = 0; Xz < Fz.size; Xz++) {
          const Oz = Fz.size > 1 ? `${Wz}[${Xz}]` : Fz.name,
            oz = zz.getUniformLocation(tz, Oz),
            vz = zz.getUniformLocation(sz, Oz);
          oz && vz && Sz(zz, vz, Fz.type, zz.getUniform(tz, oz))
        }
      }
      zz.useProgram(Wz)
    }

    function Sz(zz, tz, sz, Fz) {
      const Wz = ArrayBuffer.isView(Fz) ? Array.from(Fz) : [Number(Fz)];
      switch (sz) {
        case Dz.FLOAT:
          return void zz.uniform1f(tz, Wz[0]);
        case Dz.FLOAT_VEC2:
          return void zz.uniform2fv(tz, Wz);
        case Dz.FLOAT_VEC3:
          return void zz.uniform3fv(tz, Wz);
        case Dz.FLOAT_VEC4:
          return void zz.uniform4fv(tz, Wz);
        case Dz.FLOAT_MAT3:
          return void zz.uniformMatrix3fv(tz, !1, Wz);
        case Dz.FLOAT_MAT4:
          return void zz.uniformMatrix4fv(tz, !1, Wz);
        case Dz.UNSIGNED_INT:
          return void zz.uniform1ui(tz, Wz[0]);
        case Dz.UNSIGNED_INT_VEC2:
          return void zz.uniform2uiv(tz, Wz);
        case Dz.UNSIGNED_INT_VEC3:
          return void zz.uniform3uiv(tz, Wz);
        case Dz.UNSIGNED_INT_VEC4:
          return void zz.uniform4uiv(tz, Wz);
        case Dz.INT_VEC2:
          return void zz.uniform2iv(tz, Wz);
        case Dz.INT_VEC3:
          return void zz.uniform3iv(tz, Wz);
        case Dz.INT_VEC4:
          return void zz.uniform4iv(tz, Wz);
        default:
          zz.uniform1i(tz, Wz[0])
      }
    }

    function Vz(zz, tz, sz, Fz) {
      let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const Xz = zz.getParameter(Dz.CURRENT_PROGRAM),
        Oz = zz.getParameter(Dz.TRANSFORM_FEEDBACK_BINDING),
        oz = zz.getParameter(Dz.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        vz = zz.getParameter(Dz.COPY_READ_BUFFER_BINDING),
        Uz = zz.isEnabled(Dz.RASTERIZER_DISCARD),
        Kz = zz.createTransformFeedback(),
        uz = zz.createBuffer();
      jz.inProbe = !0;
      try {
        const Xz = zz.getError();
        Xz !== Dz.NO_ERROR && kz(`GL error 0x${Xz.toString(16)} pending before the decode probe (the renderer's)`), zz.useProgram(tz), zz.bindTransformFeedback(Dz.TRANSFORM_FEEDBACK, Kz), zz.bindBuffer(Dz.TRANSFORM_FEEDBACK_BUFFER, uz), zz.bufferData(Dz.TRANSFORM_FEEDBACK_BUFFER, 12 * sz, Dz.STREAM_READ), zz.bindBufferBase(Dz.TRANSFORM_FEEDBACK_BUFFER, 0, uz), zz.enable(Dz.RASTERIZER_DISCARD), zz.beginTransformFeedback(Dz.POINTS), Fz(), zz.endTransformFeedback(), zz.bindBufferBase(Dz.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const Oz = zz.getError();
        if (Oz !== Dz.NO_ERROR) return kz(`${Wz}: GL error 0x${Oz.toString(16)} on the feedback draw`), null;
        const oz = new Float32Array(3 * sz);
        return zz.bindBuffer(Dz.COPY_READ_BUFFER, uz), zz.getBufferSubData(Dz.COPY_READ_BUFFER, 0, oz), oz
      } finally {
        Uz || zz.disable(Dz.RASTERIZER_DISCARD), zz.bindTransformFeedback(Dz.TRANSFORM_FEEDBACK, Oz), zz.bindBuffer(Dz.TRANSFORM_FEEDBACK_BUFFER, oz), zz.bindBuffer(Dz.COPY_READ_BUFFER, vz), zz.deleteTransformFeedback(Kz), zz.deleteBuffer(uz), zz.useProgram(Xz), jz.inProbe = !1
      }
    }

    function Rz(zz, tz, sz, Fz) {
      const Wz = zz.getParameter(Dz.COPY_READ_BUFFER_BINDING),
        Xz = new Uint8Array(Fz);
      return zz.bindBuffer(Dz.COPY_READ_BUFFER, tz), zz.getBufferSubData(Dz.COPY_READ_BUFFER, sz, Xz), zz.bindBuffer(Dz.COPY_READ_BUFFER, Wz), Xz
    }
    const pz = `#version 300 es\nlayout(location = ${Hz}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      fz = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      Ez = new WeakMap;

    function zt(zz, tz, sz) {
      const Fz = zz.getProgramParameter(tz, Dz.ACTIVE_UNIFORMS),
        Wz = zz.getParameter(Dz.ACTIVE_TEXTURE);
      try {
        for (let Wz = 0; Wz < Fz; Wz++) {
          const Fz = zz.getActiveUniform(tz, Wz);
          if ((null === Fz || void 0 === Fz ? void 0 : Fz.type) !== Dz.UNSIGNED_INT_SAMPLER_2D) continue;
          const Xz = zz.getUniformLocation(tz, Fz.name),
            Oz = Xz ? zz.getUniform(tz, Xz) : -1;
          if (Oz < 0) continue;
          zz.activeTexture(Dz.TEXTURE0 + Oz);
          const oz = zz.getParameter(Dz.TEXTURE_BINDING_2D);
          if (oz && cz.get(oz) === sz) return oz
        }
        return null
      } finally {
        zz.activeTexture(Wz)
      }
    }

    function tt(zz, tz, sz, Fz, Wz) {
      const Xz = new Uint32Array(4 * Wz),
        Oz = zz.getParameter(Dz.READ_FRAMEBUFFER_BINDING),
        oz = zz.createFramebuffer();
      zz.bindFramebuffer(Dz.READ_FRAMEBUFFER, oz), zz.framebufferTexture2D(Dz.READ_FRAMEBUFFER, Dz.COLOR_ATTACHMENT0, Dz.TEXTURE_2D, tz, 0);
      try {
        let tz = 0;
        for (; tz < Wz;) {
          const Oz = Fz + tz,
            oz = Oz % sz,
            vz = Math.min(Wz - tz, sz - oz);
          zz.readPixels(oz, Math.floor(Oz / sz), vz, 1, Dz.RGBA_INTEGER, Dz.UNSIGNED_INT, Xz.subarray(4 * tz, 4 * (tz + vz))), tz += vz
        }
      } finally {
        zz.bindFramebuffer(Dz.READ_FRAMEBUFFER, Oz), zz.deleteFramebuffer(oz)
      }
      return Xz
    }

    function st(zz, tz, sz) {
      let Fz = 0,
        Wz = 0;
      for (let vz = 0; vz < tz.bytes.length; vz += Cz) {
        Fz++;
        const zz = Math.min(vz + Cz, tz.bytes.length);
        bz(tz.bytes.subarray(vz, zz)) !== bz(sz.subarray(vz, zz)) && Wz++
      }
      const Xz = `${zz} ${tz.bytes.length} B cpu ${bz(tz.bytes).toString(16)} gpu ${bz(sz).toString(16)}, ${Wz}/${Fz} blocks differ${tz.missed?`, ${tz.missed} GPU-side writes uncopied`:""}`;
      if (0 === Wz) return Xz;
      const {
        count: Oz,
        offsets: oz
      } = function(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const Fz = Math.min(zz.length, tz.length);
        let Wz = Math.abs(zz.length - tz.length);
        const Xz = [];
        for (let Oz = 0; Oz < Fz; Oz++) zz[Oz] !== tz[Oz] && (Wz++, Xz.length < sz && Xz.push(Oz));
        return {
          count: Wz,
          offsets: Xz
        }
      }(tz.bytes, sz);
      return iz([`${Xz}: ${Oz} bytes differ`, ...oz.map((zz => `  +${zz}: cpu ${wz(tz.bytes,zz)} | gpu ${wz(sz,zz)}`))].join("\n")), `${Xz}: ${Oz} bytes differ, first at ${oz.join(", ")} (context in the saved file)`
    }

    function Ft(zz) {
      if (0 === zz.vertices.length) return void kz(`decode probe (${zz.reason}): no terrain draw probed (${zz.draws.length} seen)`);
      const tz = function(zz) {
          const tz = new Map;
          for (const Fz of zz) {
            const zz = tz.get(Fz.group);
            zz ? zz.push(Fz) : tz.set(Fz.group, [Fz])
          }
          const sz = {
            vertices: zz.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [Fz, Wz] of tz) {
            const zz = new Map,
              tz = Wz.map((tz => {
                const sz = Kz(tz.record, tz.slot),
                  Fz = [tz.gpu[0] - sz[0], tz.gpu[1] - sz[1], tz.gpu[2] - sz[2]],
                  Wz = Fz.map((zz => Math.round(64 * zz))).join(","),
                  Xz = zz.get(Wz);
                return Xz ? Xz.count++ : zz.set(Wz, {
                  count: 1,
                  offset: Fz
                }), sz
              }));
            let Xz = [0, 0, 0],
              Oz = 0;
            for (const sz of zz.values()) sz.count > Oz && (Oz = sz.count, Xz = sz.offset);
            sz.translations.set(Fz, Xz), Wz.forEach(((zz, Fz) => {
              var Wz;
              const Oz = [tz[Fz][0] + Xz[0], tz[Fz][1] + Xz[1], tz[Fz][2] + Xz[2]];
              if (Oz.every(((tz, sz) => {
                  return Fz = zz.gpu[sz], Wz = tz, Math.abs(Fz - Wz) <= Math.max(.001, 1e-6 * Math.abs(Wz));
                  var Fz, Wz
                }))) return;
              sz.mismatches++, sz.byDirection[oz(zz.record[2])]++, sz.byDiagonal[vz(zz.record[2])]++;
              const Uz = uz(zz.record);
              sz.byBand[Uz] = (null !== (Wz = sz.byBand[Uz]) && void 0 !== Wz ? Wz : 0) + 1, sz.first.length < Nz && sz.first.push({
                ...zz,
                expected: Oz
              })
            }))
          }
          return sz
        }(zz.vertices),
        sz = tz.byDirection.map(((zz, tz) => zz ? `${Oz[tz]} ${zz}` : "")).filter(Boolean).join(" "),
        Fz = Object.entries(tz.byBand).map((zz => {
          let [tz, sz] = zz;
          return `${tz}: ${sz}`
        })).join(" ");
      if (kz(`decode probe (${zz.reason}): ${tz.mismatches}/${tz.vertices} vertices differ from the CPU decode over ${zz.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (tz.mismatches ? ` by direction [${sz}] diagonal [0: ${tz.byDiagonal[0]} 1: ${tz.byDiagonal[1]}] extent [${Fz}]` : "")), zz.fed.records > 0 || zz.fed.failed > 0) {
        kz(`decode probe input: ${zz.fed.differing}/${zz.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (zz.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (zz.fed.failed ? `; the feed failed on ${zz.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const tz of zz.fed.first) kz(`  ${tz}`)
      }
      for (const Wz of tz.first) {
        const [zz, tz, sz] = Wz.record;
        kz(`  mismatch part ${Wz.group} r0 ${zz.toString(16)} r1 ${tz.toString(16)} r2 ${sz.toString(16)} slot ${Wz.slot} (${Oz[oz(sz)]}): expected ${Wz.expected.map(Xt).join(",")} gpu ${Wz.gpu.map(Xt).join(",")}`)
      }
      iz(`decode probe translations: ${[...tz.translations].map((zz=>{let[tz,sz]=zz;return`${tz}: ${sz.map(Xt).join(",")}`})).join("; ")}`)
    }

    function Wt(zz) {
      return zz.toString(16)
    }

    function Xt(zz) {
      return Number.isInteger(zz) ? String(zz) : zz.toFixed(3)
    }

    function Ot(zz) {
      return null !== jz.pendingCheck ? Promise.resolve() : new Promise((tz => {
        let sz = !1;
        const Fz = {
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
        jz.pendingCheck = Fz;
        const Wz = () => {
            jz.pendingCheck = null;
            try {
              ! function(zz) {
                kz(`draw ranges (${zz.reason}): ${zz.terrainDraws} terrain draws in the frame, the first ${zz.draws.length} here`);
                for (const tz of zz.draws) {
                  const zz = tz.du.slice(0, 8).map((zz => {
                      let [tz, sz] = zz;
                      return `${tz}+${sz}`
                    })).join(" "),
                    sz = tz.du.length > 8 ? ` (+${tz.du.length-8} ranges)` : "";
                  kz(`  ${Zz(tz.program)} ${tz.program.terrain} ${tz.call} ${zz}${sz} x${tz.instances}${tz.group>=0?` part ${tz.group} chunk ${tz.chunk}`:""} | ${tz.attributes.join(" | ")}`)
                }
              }(Fz), Ft(Fz);
              Fz.draws.some((zz => "undefined" !== typeof WebGL2RenderingContext && zz.gl instanceof WebGL2RenderingContext)) || 0 === Fz.draws.length ? function(zz) {
                const tz = [],
                  sz = new Map;
                for (const Fz of zz)
                  if ("undefined" !== typeof WebGL2RenderingContext && Fz.gl instanceof WebGL2RenderingContext)
                    for (const zz of Fz.pages) sz.set("buf" === zz.kind ? zz.buffer : zz.texture, {
                      page: zz,
                      gl: Fz.gl
                    });
                for (const [Fz, {
                    page: Wz,
                    gl: Xz
                  }] of sz) {
                  const zz = Tz.get(Fz);
                  if (!zz) {
                    tz.push(`${Wz.kind}#${Mz(Fz)}: no CPU copy (${jz.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === Wz.kind) {
                    tz.push(st(`buf#${zz.id}`, zz, Rz(Xz, Wz.buffer, 0, zz.bytes.length)));
                    continue
                  }
                  const sz = tt(Xz, Wz.texture, zz.width, 0, zz.width * zz.height),
                    Oz = 16 === zz.texelBytes ? new Uint8Array(sz.buffer) : new Uint8Array(new Uint16Array(sz).buffer);
                  tz.push(st(`tex#${zz.id} (${16===zz.texelBytes?"records":"light"})`, zz, Oz))
                }
                for (const Fz of tz) kz(`page readback ${Fz}`)
              }(Fz.draws) : kz("page readback: none on WebGL1 (no buffer readback)")
            } catch (zz) {
              kz(`check failed: ${String(zz)}`)
            }
            tz()
          },
          Xz = () => {
            if (Fz.draws.length > 0 && !sz) return sz = !0, void setTimeout(Wz, 0);
            sz || requestAnimationFrame(Xz)
          };
        requestAnimationFrame(Xz), setTimeout((() => {
          sz || (sz = !0, Wz())
        }), 5e3)
      }))
    }
    var ot = sz(4344);
    const vt = 20,
      Ut = 24,
      Kt = Reflect.apply;

    function ut(zz, tz, sz) {
      if (!zz) return;
      const Fz = zz[tz];
      if ("function" === typeof Fz) {
        const Wz = sz(Fz);
        zz[tz] = Wz, (0, ot.x)(Wz, Fz)
      }
    }
    let Nt = !1;
    const bt = new WeakMap,
      wt = new WeakMap,
      Dt = new WeakMap,
      gt = {
        gl: 0,
        lost: 0
      };
    let Ht = {
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
      Bt = {
        buffer: 0,
        texture: 0
      },
      Pt = 0;

    function rt(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (zz instanceof ArrayBuffer) return new Uint8Array(zz, tz, sz || void 0);
      if (!ArrayBuffer.isView(zz)) return null;
      const Fz = "BYTES_PER_ELEMENT" in zz ? zz.BYTES_PER_ELEMENT : 1,
        Wz = zz.byteOffset + tz * Fz,
        Xz = sz ? sz * Fz : zz.byteLength - tz * Fz;
      return new Uint8Array(zz.buffer, Wz, Math.max(0, Xz))
    }

    function Yt(zz, tz) {
      const sz = function(zz) {
        switch (zz) {
          case Dz.ARRAY_BUFFER:
            return Dz.ARRAY_BUFFER_BINDING;
          case Dz.ELEMENT_ARRAY_BUFFER:
            return Dz.ELEMENT_ARRAY_BUFFER_BINDING;
          case Dz.COPY_READ_BUFFER:
            return Dz.COPY_READ_BUFFER_BINDING;
          case Dz.COPY_WRITE_BUFFER:
            return Dz.COPY_WRITE_BUFFER_BINDING;
          case Dz.UNIFORM_BUFFER:
            return Dz.UNIFORM_BUFFER_BINDING;
          case Dz.PIXEL_UNPACK_BUFFER:
            return Dz.PIXEL_UNPACK_BUFFER_BINDING;
          case Dz.TRANSFORM_FEEDBACK_BUFFER:
            return Dz.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(tz);
      return sz ? zz.getParameter(sz) : null
    }

    function xt(zz) {
      const tz = Tz.get(zz);
      tz && (jz.shadowBytes -= tz.bytes.length, Tz.delete(zz))
    }

    function mt(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      xt(zz), jz.shadowBytes + tz > Iz ? jz.uncopied++ : (jz.shadowBytes += tz, Tz.set(zz, {
        id: Mz(zz),
        bytes: new Uint8Array(tz),
        width: sz,
        height: Fz,
        texelBytes: Wz,
        missed: 0
      }))
    }

    function Jt(zz, tz) {
      for (const sz of ["deleteBuffer", "deleteTexture"]) ut(zz, sz, (zz => function() {
        for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
        return sz[0] && xt(sz[0]), Kt(zz, this, sz)
      }));
      ut(zz, "shaderSource", (zz => function() {
        for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
        return sz[0] && "string" === typeof sz[1] && bt.set(sz[0], sz[1]), Kt(zz, this, sz)
      })), ut(zz, "attachShader", (zz => function() {
        for (var tz, sz = arguments.length, Fz = new Array(sz), Wz = 0; Wz < sz; Wz++) Fz[Wz] = arguments[Wz];
        const Xz = Fz[0],
          Oz = null !== (tz = wt.get(Xz)) && void 0 !== tz ? tz : [];
        return Oz.push(Fz[1]), wt.set(Xz, Oz), Kt(zz, this, Fz)
      })), ut(zz, "linkProgram", (zz => function() {
        for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
        const Wz = Kt(zz, this, sz);
        return jz.inProbe || function(zz, tz) {
          var sz, Fz, Wz;
          "undefined" !== typeof HTMLCanvasElement && zz.canvas instanceof HTMLCanvasElement && function(zz) {
            if (Tt.has(zz)) return;
            Tt.add(zz);
            for (const tz of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) zz.addEventListener(tz, (zz => {
              gt.lost < vt && (gt.lost++, kz(`${tz}${"statusMessage"in zz?`: ${String(zz.statusMessage)}`:""}`))
            }))
          }(zz.canvas);
          jz.context ??= zz;
          const Xz = null !== (sz = wt.get(tz)) && void 0 !== sz ? sz : [];
          let Oz = "",
            oz = "";
          for (const Kz of Xz) {
            var vz;
            const zz = null !== (vz = bt.get(Kz)) && void 0 !== vz ? vz : "";
            /\bgl_Position\b/.test(zz) ? Oz = zz : oz = zz
          }
          const Uz = {
            id: Mz(tz),
            name: null !== (Fz = null === (Wz = ez.exec(Oz)) || void 0 === Wz ? void 0 : Wz[1]) && void 0 !== Fz ? Fz : null,
            gl: zz,
            vertex: Oz,
            fragment: oz,
            terrain: Ct(Oz),
            checked: !1,
            firstDraw: !1
          };
          if (Dt.set(tz, Uz), Gz.push([tz, Uz]), null !== Uz.terrain) {
            const tz = Xz.map((tz => {
              var sz;
              return null !== (sz = zz.getShaderInfoLog(tz)) && void 0 !== sz ? sz : ""
            })).filter((zz => "" !== zz.trim()));
            tz.length > 0 && iz(`program ${Zz(Uz)} (${Uz.terrain}) shader logs:\n${Lz(tz.join("\n"))}`)
          }
        }(this, sz[0]), Wz
      })), ut(zz, "bufferData", (zz => function() {
        for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
        const Wz = Kt(zz, this, sz);
        if (!jz.inProbe) {
          const zz = Yt(this, sz[0]);
          if (zz) {
            var Xz, Oz, oz;
            const tz = "number" === typeof sz[1] ? null : rt(sz[1], null !== (Xz = sz[3]) && void 0 !== Xz ? Xz : 0, null !== (Oz = sz[4]) && void 0 !== Oz ? Oz : 0);
            var vz;
            if (mt(zz, "number" === typeof sz[1] ? sz[1] : null !== (oz = null === tz || void 0 === tz ? void 0 : tz.length) && void 0 !== oz ? oz : 0), tz) null === (vz = Tz.get(zz)) || void 0 === vz || vz.bytes.set(tz)
          }
        }
        return Wz
      })), ut(zz, "bufferSubData", (zz => function() {
        for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
        const Wz = Kt(zz, this, sz);
        if (!jz.inProbe) {
          var Xz, Oz;
          const zz = Yt(this, sz[0]),
            tz = zz ? Tz.get(zz) : void 0,
            Fz = rt(sz[2], null !== (Xz = sz[3]) && void 0 !== Xz ? Xz : 0, null !== (Oz = sz[4]) && void 0 !== Oz ? Oz : 0);
          if (tz && Fz) {
            const zz = sz[1];
            tz.bytes.set(Fz.subarray(0, Math.max(0, tz.bytes.length - zz)), zz), It("buffer", tz, zz, Fz.length)
          }
        }
        return Wz
      })), tz && (ut(zz, "copyBufferSubData", (zz => function() {
        for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
        const Wz = Kt(zz, this, sz);
        if (!jz.inProbe) {
          const [zz, tz, Fz, Wz, Xz] = sz, Oz = Yt(this, zz), oz = Yt(this, tz), vz = Oz ? Tz.get(Oz) : void 0, Uz = oz ? Tz.get(oz) : void 0;
          Uz && (vz ? Uz.bytes.set(vz.bytes.slice(Fz, Fz + Xz), Wz) : Uz.missed++)
        }
        return Wz
      })), ut(zz, "texStorage2D", (zz => function() {
        for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
        const Wz = Kt(zz, this, sz),
          [, , Xz, Oz, oz] = sz;
        if (!jz.inProbe && (Xz === Dz.RGBA32UI || Xz === Dz.RGBA16UI)) {
          const zz = this.getParameter(Dz.TEXTURE_BINDING_2D),
            tz = Xz === Dz.RGBA32UI ? 16 : 8;
          zz && (cz.set(zz, tz), mt(zz, Oz * oz * tz, Oz, oz, tz))
        }
        return Wz
      })), ut(zz, "texSubImage2D", (zz => function() {
        for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
        const Wz = Kt(zz, this, sz);
        return !jz.inProbe && sz.length >= 9 && sz[0] === Dz.TEXTURE_2D && 0 === sz[1] && function(zz, tz) {
          var sz;
          const Fz = zz.getParameter(Dz.TEXTURE_BINDING_2D),
            Wz = Fz ? Tz.get(Fz) : void 0;
          if (!Wz) return;
          const [, , Xz, Oz, oz, vz] = tz;
          let Uz = rt(tz[8], null !== (sz = tz[9]) && void 0 !== sz ? sz : 0);
          if (null === Uz && "number" === typeof tz[8]) {
            const sz = Yt(zz, Dz.PIXEL_UNPACK_BUFFER),
              Fz = sz ? Tz.get(sz) : void 0;
            Uz = Fz ? Fz.bytes.subarray(tz[8]) : null
          }
          if (null === Uz) return void Wz.missed++;
          const Kz = zz.getParameter(Dz.UNPACK_ROW_LENGTH) || oz,
            uz = zz.getParameter(Dz.UNPACK_SKIP_ROWS),
            Nz = zz.getParameter(Dz.UNPACK_SKIP_PIXELS),
            bz = Wz.texelBytes;
          for (let wz = 0; wz < vz; wz++) {
            const zz = ((uz + wz) * Kz + Nz) * bz,
              tz = ((Oz + wz) * Wz.width + Xz) * bz;
            Wz.bytes.set(Uz.subarray(zz, zz + oz * bz), tz)
          }
          It("texture", Wz, (Oz * Wz.width + Xz) * bz, oz * vz * bz)
        }(this, sz), Wz
      })), ut(zz, "copyTexSubImage2D", (zz => function() {
        for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
        const Wz = sz[0] === Dz.TEXTURE_2D ? this.getParameter(Dz.TEXTURE_BINDING_2D) : null,
          Xz = Wz ? Tz.get(Wz) : void 0;
        return Xz && Xz.missed++, Kt(zz, this, sz)
      })));
      for (const sz of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) ut(zz, sz, (zz => function() {
        for (var tz = arguments.length, Fz = new Array(tz), Wz = 0; Wz < tz; Wz++) Fz[Wz] = arguments[Wz];
        const Xz = Kt(zz, this, Fz);
        return jz.inProbe || Zt(this, sz, Fz), Xz
      }));
      ut(zz, "getExtension", (zz => function() {
        for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
        const Wz = Kt(zz, this, sz);
        return Wz && "object" === typeof Wz && function(zz, tz, sz) {
          const Fz = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(tz in Fz) || sz.bloxdRenderDebug) return;
          sz.bloxdRenderDebug = !0;
          for (const Wz of Fz[tz]) {
            const tz = sz[Wz];
            "function" === typeof tz && (sz[Wz] = function() {
              for (var Fz = arguments.length, Xz = new Array(Fz), Oz = 0; Oz < Fz; Oz++) Xz[Oz] = arguments[Oz];
              const oz = Kt(tz, sz, Xz);
              return jz.inProbe || Zt(zz, Wz, Xz), oz
            })
          }
        }(this, sz[0], Wz), Wz
      }))
    }

    function It(zz, tz, sz, Fz) {
      Bt[zz] += Fz, Pt < 32 && tz.bytes.length >= 1 << 20 && (Pt++, iz(`upload ${zz} #${tz.id} +${sz} ${Fz} B`))
    }

    function Ct(zz) {
      if (!zz.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(zz) || /in uvec3 _p2vs_location0\b/.test(zz) ? "inst" : "tex"
    }

    function et(zz, tz, sz) {
      var Fz;
      if (sz.checked) return;
      sz.checked = !0;
      const Wz = zz.getProgramParameter(tz, Dz.LINK_STATUS),
        Xz = (null !== (Fz = zz.getProgramInfoLog(tz)) && void 0 !== Fz ? Fz : "").trim();
      var Oz;
      null === sz.terrain && Wz || (kz(`program ${Zz(sz)} ${null!==(Oz=sz.terrain)&&void 0!==Oz?Oz:"other"} link ${Wz?"ok":"FAILED"}${Xz?`: ${Lz(Xz,300)}`:""}`), Xz && iz(`program ${Zz(sz)} link log:\n${Lz(Xz)}`))
    }

    function Zt(zz, tz, sz) {
      var Fz;
      const Wz = zz.getParameter(Dz.CURRENT_PROGRAM),
        Xz = Wz ? Dt.get(Wz) : void 0;
      if (!Wz || !Xz) return;
      const Oz = null !== (Fz = Xz.terrain) && void 0 !== Fz ? Fz : "other",
        {
          du: oz,
          instances: vz
        } = function(zz, tz) {
          switch (zz) {
            case "drawArrays":
              return {
                du: [
                  [tz[1], tz[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                du: [
                  [tz[1], tz[2]]
                ], instances: tz[3]
              };
            case "drawElements":
              return {
                du: [
                  [0, tz[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                du: [
                  [0, tz[1]]
                ], instances: tz[4]
              };
            case "multiDrawArraysWEBGL": {
              const zz = tz[1],
                sz = tz[3],
                Fz = tz[2],
                Wz = tz[4],
                Xz = [];
              for (let Oz = 0; Oz < tz[5]; Oz++) Xz.push([zz[Fz + Oz], sz[Wz + Oz]]);
              return {
                du: Xz,
                instances: 1
              }
            }
            default:
              return {
                du: [], instances: 0
              }
          }
        }(tz, sz),
        Uz = "inst" === Xz.terrain ? vz : oz.reduce(((zz, tz) => {
          let [, sz] = tz;
          return zz + sz
        }), 0) / 6;
      if (Ht[Oz].draws++, Ht[Oz].faces += Uz, null === Xz.terrain) return;
      if (jz.context = zz, !Xz.firstDraw) {
        Xz.firstDraw = !0, et(zz, Wz, Xz), Gt || (Gt = !0, kz(function(zz) {
          var tz;
          const sz = zz.getParameter(Dz.DEPTH_FUNC),
            Fz = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let Wz = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in zz && zz.getParameter(Dz.DRAW_FRAMEBUFFER_BINDING)) {
            const tz = zz;
            Wz = tz.getFramebufferAttachmentParameter(Dz.DRAW_FRAMEBUFFER, Dz.DEPTH_ATTACHMENT, Dz.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(tz.getFramebufferAttachmentParameter(Dz.DRAW_FRAMEBUFFER,Dz.DEPTH_ATTACHMENT,Dz.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(tz.getFramebufferAttachmentParameter(Dz.DRAW_FRAMEBUFFER,Dz.DEPTH_ATTACHMENT,Dz.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const Xz = zz.getParameter(Dz.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(tz=Fz[sz])&&void 0!==tz?tz:`0x${sz.toString(16)}`} clear ${Xz}${516===sz||518===sz?" (reverse-Z)":""}, samples ${String(zz.getParameter(Dz.SAMPLES))}, ${Wz}`
        }(zz)));
        const sz = zz.getError();
        sz !== Dz.NO_ERROR && gt.gl < vt && (gt.gl++, kz(`GL error 0x${sz.toString(16)} after program ${Zz(Xz)}'s first terrain draw (${tz})`))
      }
      const Kz = jz.pendingCheck;
      null !== Kz && (Kz.terrainDraws++, Kz.draws.length < Ut && lz(zz, Wz, Xz, tz, oz, vz))
    }
    let Gt = !1;
    const Tt = new WeakSet;
    var ct = sz(4153),
      jt = sz(4349);
    const At = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let yt = !1;
    const Mt = new WeakSet,
      dt = new WeakMap,
      ht = new WeakMap,
      Qt = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let kt = 0,
      it = !1,
      Lt = null,
      lt = {
        draws: 0,
        faces: 0
      };

    function nt(zz) {
      const tz = globalThis[zz];
      return null === tz || void 0 === tz ? void 0 : tz.prototype
    }

    function qt(zz) {
      return zz && "function" === typeof zz[Symbol.iterator] ? [...zz].sort().join(" ") : ""
    }

    function St(zz, tz) {
      const sz = null !== zz && void 0 !== zz ? zz : {},
        Fz = null !== tz && void 0 !== tz ? tz : Object.keys(Object.getPrototypeOf(sz)).concat(Object.keys(sz));
      return [...new Set(Fz)].filter((zz => "number" === typeof sz[zz])).map((zz => `${zz} ${String(sz[zz])}`)).join(", ")
    }

    function Vt(zz, tz) {
      var sz;
      const Fz = null !== (sz = tz.vertex) && void 0 !== sz ? sz : {};
      if (Fz.module && Mt.has(Fz.module)) {
        var Wz;
        const sz = String(null !== (Wz = Fz.entryPoint) && void 0 !== Wz ? Wz : "");
        if (sz.startsWith("vs_packed") && dt.set(zz, sz), !it) {
          var Xz, Oz, oz, vz, Uz;
          it = !0;
          const zz = null !== (Xz = tz.depthStencil) && void 0 !== Xz ? Xz : {},
            Fz = null !== (Oz = tz.multisample) && void 0 !== Oz ? Oz : {},
            Wz = String(null !== (oz = zz.depthCompare) && void 0 !== oz ? oz : "");
          kz(`WebGPU terrain pipeline ${sz}: depth ${String(null!==(vz=zz.format)&&void 0!==vz?vz:"none")} ${Wz}${Wz.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(Uz=Fz.count)&&void 0!==Uz?Uz:1)}`)
        }
      }
    }

    function Rt(zz) {
      ut(zz, "setPipeline", (zz => function() {
        for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
        return ht.set(this, sz[0]), Kt(zz, this, sz)
      }));
      for (const tz of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) ut(zz, tz, (zz => function() {
        const sz = ht.get(this),
          Fz = sz ? dt.get(sz) : void 0;
        for (var Wz = arguments.length, Xz = new Array(Wz), Oz = 0; Oz < Wz; Oz++) Xz[Oz] = arguments[Oz];
        return void 0 !== Fz && pt(tz, Fz, Xz), Kt(zz, this, Xz)
      }))
    }

    function pt(zz, tz, sz) {
      var Fz;
      (lt.draws++, "draw" === zz || "drawIndexed" === zz) && (lt.faces += sz[0] * (null !== (Fz = sz[1]) && void 0 !== Fz ? Fz : 1) / 6);
      if (null !== Lt && Lt.length < Ut) {
        const Fz = ("draw" === zz ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === zz ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((tz, Fz) => {
          const Wz = zz.endsWith("Indirect") ? sz[1] : sz[Fz];
          return `${tz} ${String(null!==Wz&&void 0!==Wz?Wz:"instances"===tz?1:0)}`
        }));
        Lt.push(`  ${tz} ${zz} ${Fz.join(" ")}`)
      }
    }

    function ft() {
      if (yt || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      yt = !0, ut(nt("GPU"), "requestAdapter", (zz => function() {
        for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
        return Kt(zz, this, sz).then((zz => {
          var tz;
          zz ? function(zz) {
            var tz;
            const sz = null !== (tz = zz.info) && void 0 !== tz ? tz : {};
            kz(`WebGPU adapter ${["vendor","architecture","device","description"].map((zz=>{var tz;return`${zz} "${String(null!==(tz=sz[zz])&&void 0!==tz?tz:"")}"`})).join(" ")}${zz.isFallbackAdapter?" (fallback)":""}`), kz(`WebGPU adapter features ${qt(zz.features)}`), kz(`WebGPU adapter limits ${St(zz.limits,At)}`), iz(`WebGPU adapter all limits ${St(zz.limits,null)}`)
          }(zz) : kz(`WebGPU requestAdapter(${JSON.stringify(null!==(tz=sz[0])&&void 0!==tz?tz:{})}) gave none`);
          return zz
        }))
      })), ut(nt("GPUAdapter"), "requestDevice", (zz => function() {
        for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
        return Kt(zz, this, sz).then((zz => (function(zz) {
          kz(`WebGPU device features ${qt(zz.features)}`), kz(`WebGPU device limits ${St(zz.limits,At)}`), zz.addEventListener("uncapturederror", (zz => {
            if (Qt.uncaptured < vt) {
              var tz, sz, Fz;
              Qt.uncaptured++;
              const Wz = zz.error;
              kz(`WebGPU uncaptured ${null!==(tz=null===Wz||void 0===Wz||null===(sz=Wz.constructor)||void 0===sz?void 0:sz.name)&&void 0!==tz?tz:"error"}: ${Lz(String(null!==(Fz=null===Wz||void 0===Wz?void 0:Wz.message)&&void 0!==Fz?Fz:""),600)}`)
            }
          }));
          const tz = zz.lost;
          null === tz || void 0 === tz || tz.then((zz => {
            var tz;
            kz(`WebGPU device lost (${String(zz.reason)}): ${Lz(String(null!==(tz=zz.message)&&void 0!==tz?tz:""),600)}`)
          }))
        }(zz), zz)), (zz => {
          throw kz(`WebGPU requestDevice failed: ${String(zz)}`), zz
        }))
      }));
      const zz = nt("GPUDevice");
      ut(zz, "createShaderModule", (zz => function() {
        for (var tz, sz, Fz = arguments.length, Wz = new Array(Fz), Xz = 0; Xz < Fz; Xz++) Wz[Xz] = arguments[Xz];
        const Oz = Kt(zz, this, Wz);
        return function(zz, tz) {
          const sz = tz.includes("decodeQuad");
          sz && Mt.add(zz);
          const Fz = zz.getCompilationInfo;
          null === Fz || void 0 === Fz || Fz.call(zz).then((zz => {
            if (0 === zz.messages.length && !sz) return;
            const tz = {};
            for (const sz of zz.messages) {
              var Fz;
              tz[String(sz.type)] = (null !== (Fz = tz[String(sz.type)]) && void 0 !== Fz ? Fz : 0) + 1
            }
            const Wz = zz.messages.map((zz => `${String(zz.type)} ${String(zz.lineNum)}:${String(zz.linePos)} ${String(zz.message)}`)).join("\n");
            Qt.compile < vt && (Qt.compile++, kz(`WebGPU ${sz?"terrain ":""}shader module compiled: ${JSON.stringify(tz)}${Wz?` first: ${Lz(Wz.split("\n")[0],300)}`:""}`)), Wz && iz(`WebGPU shader module messages:\n${Lz(Wz)}`)
          }))
        }(Oz, String(null !== (tz = (null !== (sz = Wz[0]) && void 0 !== sz ? sz : {}).code) && void 0 !== tz ? tz : "")), Oz
      })), ut(zz, "createRenderPipeline", (zz => function() {
        for (var tz, sz = arguments.length, Fz = new Array(sz), Wz = 0; Wz < sz; Wz++) Fz[Wz] = arguments[Wz];
        const Xz = Kt(zz, this, Fz);
        return Vt(Xz, null !== (tz = Fz[0]) && void 0 !== tz ? tz : {}), Xz
      })), ut(zz, "createRenderPipelineAsync", (zz => function() {
        for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
        return Kt(zz, this, sz).then((zz => {
          var tz;
          return Vt(zz, null !== (tz = sz[0]) && void 0 !== tz ? tz : {}), zz
        }), (zz => {
          var tz;
          throw function(zz, tz) {
            var sz, Fz, Wz;
            if (Qt.rejected >= vt) return;
            Qt.rejected++;
            const {
              reason: Xz,
              message: Oz
            } = null !== tz && void 0 !== tz ? tz : {}, oz = String(null !== (sz = (null !== (Fz = zz.vertex) && void 0 !== Fz ? Fz : {}).entryPoint) && void 0 !== sz ? sz : "");
            kz(`WebGPU pipeline "${String(null!==(Wz=zz.label)&&void 0!==Wz?Wz:"")}" ${oz} rejected (${String(null!==Xz&&void 0!==Xz?Xz:"no reason")}): ${Lz(String(null!==Oz&&void 0!==Oz?Oz:tz),600)}`)
          }(null !== (tz = sz[0]) && void 0 !== tz ? tz : {}, zz), zz
        }))
      })), ut(nt("GPUCanvasContext"), "configure", (zz => function() {
        for (var tz, sz = arguments.length, Fz = new Array(sz), Wz = 0; Wz < sz; Wz++) Fz[Wz] = arguments[Wz];
        const Xz = null !== (tz = Fz[0]) && void 0 !== tz ? tz : {};
        var Oz, oz;
        kt++ < 3 && kz(`WebGPU canvas ${String(Xz.format)} ${String(null!==(Oz=Xz.colorSpace)&&void 0!==Oz?Oz:"srgb")} alpha ${String(null!==(oz=Xz.alphaMode)&&void 0!==oz?oz:"opaque")}`);
        return Kt(zz, this, Fz)
      })), Rt(nt("GPURenderPassEncoder")), Rt(nt("GPURenderBundleEncoder"))
    }
    const Et = 1e4,
      zs = 6e4,
      ts = 5e3,
      ss = 3e3,
      Fs = 100;
    let Ws = null,
      Xs = !1,
      Os = {
        ...ct.e
      },
      os = !1,
      vs = null,
      Us = 0,
      Ks = () => {};
    const us = new Promise((zz => {
      Ks = zz
    }));

    function Ns() {
      var zz;
      Xs || (Xs = !0, Os = Object.assign(window.bloxdRenderDebug ??= {
        ...ct.e
      }, {
        faceCull: "0" === (0, Xz.h)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (zz = (0, Xz.h)("adrenoProbe")) && void 0 !== zz ? zz : ""
      }), kz("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), Nt || "undefined" === typeof window || (Nt = !0, "undefined" !== typeof WebGL2RenderingContext && Jt(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && Jt(WebGLRenderingContext.prototype, !1)), ft(), (0, Xz.b)("renderProbe", (() => {
        Bs("console")
      })), gs(), setInterval(rs, ts))
    }

    function bs(zz) {
      var tz, sz;
      Ns(), Ws = null !== (tz = null === zz || void 0 === zz ? void 0 : zz.backend) && void 0 !== tz ? tz : null;
      const Fz = `, renderer param ${null!==(sz=(0,Xz.h)("renderer"))&&void 0!==sz?sz:"none"}, faceCull ${"0"===Os.faceCull?"off (whole parts)":"on"}, adrenoProbe ${Os.adrenoProbe||"none"}`;
      kz(`${(0,jt.c)(zz)}${null===zz?"":Fz}`)
    }

    function ws() {
      const zz = performance.now(),
        tz = Ds(us, Et, zs).then((tz => Bs(`${Math.round((performance.now()-zz)/1e3)} s after playable${tz?"":", no terrain drawn yet"}`)));
      (0, Wz.c)(kz, (async () => {
        await tz, await vs
      }))
    }
    async function Ds(zz, tz, sz) {
      const Wz = (0, Fz.c)(sz).then((() => !1));
      return await (0, Fz.c)(tz), Promise.race([zz.then((() => !0)), Wz])
    }

    function gs() {
      requestAnimationFrame((() => {
        Us++, gs()
      }))
    }

    function Hs() {
      var zz, tz, sz;
      if (os) return;
      (os = !0, kz(`renderer caps ${null!==(zz=Os.caps)&&void 0!==zz?zz:"(not noted)"}; terrain fetch ${null!==(tz=Os.fetch)&&void 0!==tz?tz:"(not noted)"}`), Os.adrenoProbe) && kz(`adrenoProbe ${Os.adrenoProbe} asked; in force (storage fetch only): ${null!==(sz=Os.probe)&&void 0!==sz?sz:"(not noted)"}`);
      const Fz = jz.context;
      if (Fz) {
        for (const zz of function(zz) {
            var tz;
            const sz = [],
              Fz = zz.getExtension("WEBGL_debug_renderer_info"),
              Wz = Fz ? zz.getParameter(Fz.UNMASKED_VENDOR_WEBGL) : "(masked)",
              Xz = Fz ? zz.getParameter(Fz.UNMASKED_RENDERER_WEBGL) : "(masked)";
            sz.push(`GL ${String(zz.getParameter(zz.VERSION))} | ${String(zz.getParameter(zz.SHADING_LANGUAGE_VERSION))} | ${String(zz.getParameter(zz.VENDOR))} / ${String(zz.getParameter(zz.RENDERER))}`), sz.push(`GL unmasked ${Wz} / ${Xz}`);
            const Oz = [
              ["MAX_TEXTURE_SIZE", zz.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", zz.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", zz.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", zz.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", zz.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", zz.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", zz.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in zz && Oz.push(["MAX_UNIFORM_BLOCK_SIZE", zz.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", zz.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", zz.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", zz.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), sz.push(`GL limits ${Oz.map((tz=>{let[sz,Fz]=tz;return`${sz} ${String(zz.getParameter(Fz))}`})).join(", ")}`);
            const oz = (tz, sz) => {
              const Fz = zz.getShaderPrecisionFormat(tz, zz.HIGH_FLOAT),
                Wz = zz.getShaderPrecisionFormat(tz, zz.HIGH_INT);
              return `${sz} highp float ${Fz?`${Fz.rangeMin}/${Fz.rangeMax}/${Fz.precision}`:"?"} int ${Wz?`${Wz.rangeMin}/${Wz.rangeMax}/${Wz.precision}`:"?"}`
            };
            sz.push(`GL precision ${oz(zz.VERTEX_SHADER,"VS")}, ${oz(zz.FRAGMENT_SHADER,"FS")}`);
            const vz = zz.getContextAttributes();
            return sz.push(`GL context ${JSON.stringify(vz)} drawingBuffer ${zz.drawingBufferWidth}x${zz.drawingBufferHeight}${"drawingBufferFormat"in zz?` format 0x${Number(zz.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in zz?` ${String(zz.drawingBufferColorSpace)}`:""}`), sz.push(`GL extensions ${(null!==(tz=zz.getSupportedExtensions())&&void 0!==tz?tz:[]).join(" ")}`), sz
          }(Fz)) kz(zz);
        ! function() {
          if (!jz.context) return;
          let zz = 0,
            tz = 0;
          for (const [sz, Fz] of Gz) !Fz.gl.isContextLost() && Fz.gl.isProgram(sz) && (tz++, et(Fz.gl, sz, Fz), null !== Fz.terrain && zz++);
          kz(`programs: ${tz} live of ${Gz.length} linked, ${zz} packed terrain; CPU page copies ${Math.round(jz.shadowBytes/1048576)} MiB (${jz.uncopied} over budget)`)
        }()
      }
    }

    function Bs(zz) {
      return vs ??= async function(zz) {
        Hs(), "webgpu" === Ws ? (Ps(), "1" === Os.slotCheck && kz("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), Os.slotCheck = "1", await
          function(zz) {
            if (null !== Lt) return Promise.resolve();
            const tz = [];
            return Lt = tz, new Promise((sz => {
              setTimeout((() => {
                Lt = null, kz(`WebGPU draw ranges (${zz}): ${tz.length} terrain draws recorded in a second (first ${Ut}; bundles replay without new ones)`);
                for (const zz of tz) kz(zz);
                sz()
              }), 1e3)
            }))
          }(zz), await async function() {
            for (let zz = 0;
              "1" === Os.slotCheck && zz < ss; zz += Fs) await (0, Fz.c)(Fs);
            if ("1" === Os.slotCheck) return void kz(`slot check: no answer in ${ss} ms (only the storage fetch has one; a later answer logs on its own)`);
            Ps()
          }()) : await Ot(zz);
        kz(`check (${zz}) done: bloxdDebug.save() downloads it all`)
      }(zz).catch((tz => {
        kz(`check (${zz}) failed: ${String(tz)}`)
      })).finally((() => {
        vs = null
      })), vs
    }

    function Ps() {
      void 0 !== Os.slotCheck && "1" !== Os.slotCheck && (kz(Os.slotCheck), delete Os.slotCheck)
    }

    function rs() {
      const zz = zz => Us ? (zz / Us).toFixed(1) : "0",
        tz = function() {
          const zz = lt;
          return lt = {
            draws: 0,
            faces: 0
          }, zz
        }(),
        sz = function() {
          const zz = Ht;
          return Ht = {
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
        Fz = function() {
          const zz = Bt;
          return Bt = {
            buffer: 0,
            texture: 0
          }, zz
        }();
      Ps(), ("webgpu" === Ws ? tz.draws : sz.inst.draws + sz.tex.draws) > 0 && Ks();
      const Wz = "webgpu" === Ws ? [`terrain ${zz(tz.draws)} draws ${zz(tz.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((zz => sz[zz].draws > 0)).map((tz => `${tz} ${zz(sz[tz].draws)} draws ${zz(sz[tz].faces)} faces a frame`));
      kz(`${Us} frames: ${Wz.join(", ")||"no draws"}; uploaded ${Math.round(Fz.buffer/1024)} KiB to buffers, ${Math.round(Fz.texture/1024)} KiB to data textures`), Us = 0
    }
  },
  4349: (zz, tz, sz) => {
    function Fz(zz) {
      if (null === zz) return "backend: none picked (no renderer build)";
      const tz = zz.adapter ? `${zz.adapter.vendor}/${zz.adapter.architecture}` : "none";
      return `backend ${zz.backend}: reason ${zz.reason}, source ${zz.source}, adapter ${tz}`
    }
    sz.d(tz, {
      c: () => Fz
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);