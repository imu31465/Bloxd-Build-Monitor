export const id = 48;
export const ids = [48];
export const modules = {
  4624: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Mk
    });
    var Dk = ik(22),
      fk = ik(26),
      Sk = ik(1273),
      bk = ik(2752);
    const rk = 3e4,
      Pk = 1e3;

    function mk() {
      return "visible" === document.visibilityState && "inGame" === Dk.b.get("gameState") && (0, Sk.w)()
    }

    function Mk(kk, ek) {
      (0, bk.t)() || function(kk, ek, ik) {
        let Dk = 0;
        const fk = setInterval((() => {
          ek() && (Dk += Pk, Dk >= kk && (clearInterval(fk), ik()))
        }), Pk)
      }(rk, mk, (() => {
        ek().then((() => {
          kk(`saved for the player after ${rk/1e3} s of play`), (0, bk.z)(), fk.j.tm("chat", {
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
  4622: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      installRenderDebug: () => xi,
      renderDebugPlayable: () => Ui,
      startRenderDebug: () => ni,
      waitForDraw: () => Hi
    });
    var Dk = ik(1778),
      fk = ik(4624),
      Sk = ik(2752);
    const bk = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function rk(kk) {
      return 7 & kk
    }

    function Pk(kk) {
      return kk >>> 11 & 1
    }

    function mk(kk) {
      return [1 + (kk >>> 18 & 63), 1 + (kk >>> 24 & 63)]
    }

    function Mk(kk, ek) {
      const [ik, , Dk] = kk, fk = rk(Dk), Sk = function(kk, ek, ik) {
        return ek + (1 === (22 >>> kk & 1) ? 4 - ik : ik) & 3
      }(fk, Pk(Dk), ek), bk = fk >>> 1, [Mk, Kk] = mk(ik), xk = 1 === Sk || 2 === Sk ? Mk : 0, nk = Sk >= 2 ? Kk : 0, Uk = [63 & ik, ik >>> 6 & 63, ik >>> 12 & 63];
      return Uk[2 === bk ? 0 : 2] += xk, Uk[1 === bk ? 0 : 1] += nk, Uk
    }

    function Kk(kk) {
      const ek = Math.max(...mk(kk[0]));
      return 1 === ek ? "1" : ek <= 4 ? "2-4" : ek <= 16 ? "5-16" : "17-64"
    }
    const xk = 16;

    function nk(kk) {
      let ek = 2166136261;
      for (let ik = 0; ik < kk.length; ik++) ek = Math.imul(ek ^ kk[ik], 16777619);
      return ek >>> 0
    }

    function Uk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const Dk = Math.max(0, ek - ik),
        fk = Math.min(kk.length, ek + ik),
        Sk = [];
      for (let bk = Dk; bk < fk; bk++) {
        const ik = kk[bk].toString(16).padStart(2, "0");
        Sk.push(bk === ek ? `[${ik}]` : ik)
      }
      return Sk.join(" ")
    }
    const Hk = {
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
      wk = "_vs2fs_location0";
    const lk = 0,
      pk = 4,
      yk = 6,
      Yk = [0, 1, 2, 0, 2, 3],
      Lk = 2048,
      Ck = 4,
      Ak = 256,
      jk = 64,
      sk = 268435456,
      dk = 65536,
      Vk = /^#version [^\n]*\/\/ program (\S+)$/m;

    function Fk(kk) {
      return null === kk.name ? `#${kk.id}` : `#${kk.id} ${kk.name}`
    }
    const uk = [],
      qk = new WeakMap,
      Ik = new WeakMap,
      zk = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let Qk = 1;
    const vk = new WeakMap;

    function Ek(kk) {
      if (null === kk) return 0;
      let ek = vk.get(kk);
      return void 0 === ek && (ek = Qk++, vk.set(kk, ek)), ek
    }
    class hk {
      constructor(kk, ek) {
        this.print = kk, this.now = ek, this.shown = 0, this.XM = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.fU = [], this.dropped = 0
      }
      line(kk) {
        const ek = this.now();
        if (ek - this.second >= 1e3 && (this.second = ek, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.XM++, void this.store(kk);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${kk} (the last line here: the rest go to bloxdDebug.save())` : kk)
      }
      keep(kk) {
        this.sections++, this.store(kk)
      }
      store(kk) {
        this.fU.push(`${new Date(Date.now()).toISOString()} ${kk}`), this.fU.length > 2e4 && (this.fU.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.XM} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.fU].join("\n")
      }
    }
    let ak = null;

    function Wk() {
      if (null === ak) {
        const kk = new hk((kk => {
          (0, Sk.l)("render", kk)
        }), (() => performance.now()));
        (0, Sk.k)("render", (() => kk.dump())), ak = kk
      }
      return ak
    }

    function tk(kk) {
      Wk().line(kk)
    }

    function Xk(kk) {
      Wk().keep(kk)
    }

    function Bk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return kk.length <= ek ? kk : `${kk.slice(0,ek)}... (${kk.length-ek} more characters)`
    }

    function ck(kk, ek, ik, Dk, fk, Sk) {
      const bk = zk.pendingCheck;
      if (null === bk) return;
      const rk = "undefined" !== typeof WebGL2RenderingContext && kk instanceof WebGL2RenderingContext,
        Pk = {
          gl: kk,
          program: ik,
          call: Dk,
          lw: fk,
          instances: Sk,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (bk.draws.push(Pk), rk) try {
        const Dk = function(kk) {
          const ek = [],
            ik = new Map,
            Dk = Math.min(16, kk.getParameter(Hk.MAX_VERTEX_ATTRIBS));
          for (let fk = 0; fk < Dk; fk++) {
            if (!kk.getVertexAttrib(fk, Hk.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const Dk = kk.getVertexAttrib(fk, Hk.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              Sk = kk.getVertexAttribOffset(fk, Hk.VERTEX_ATTRIB_ARRAY_POINTER),
              bk = kk.getVertexAttrib(fk, Hk.VERTEX_ATTRIB_ARRAY_STRIDE),
              rk = kk.getVertexAttrib(fk, Hk.VERTEX_ATTRIB_ARRAY_SIZE),
              Pk = kk.getVertexAttrib(fk, Hk.VERTEX_ATTRIB_ARRAY_TYPE),
              mk = "VERTEX_ATTRIB_ARRAY_INTEGER" in kk && kk.getVertexAttrib(fk, Hk.VERTEX_ATTRIB_ARRAY_INTEGER),
              Mk = "VERTEX_ATTRIB_ARRAY_DIVISOR" in kk ? kk.getVertexAttrib(fk, Hk.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            ik.set(fk, {
              buffer: Dk,
              offset: Sk,
              stride: bk
            }), ek.push(`@${fk} buf#${Ek(Dk)} +${Sk} stride ${bk} ${rk}x0x${Pk.toString(16)}${mk?" int":""} div ${Mk}`)
          }
          return {
            lines: ek,
            byLocation: ik
          }
        }(kk);
        if (Pk.attributes = Dk.lines, "inst" === ik.terrain) {
          const {
            group: fk,
            chunk: rk
          } = function(kk, ek, ik) {
            const Dk = ek.get(yk),
              fk = kk.getVertexAttrib(yk, Hk.CURRENT_VERTEX_ATTRIB),
              Sk = Dk ? `+${Dk.offset}` : fk ? Array.from(fk).slice(0, 3).join(",") : "?";
            let bk = ik.groups.get(Sk);
            return void 0 === bk && (bk = ik.groups.size, ik.groups.set(Sk, bk)), {
              group: bk,
              chunk: Sk
            }
          }(kk, Dk.byLocation, bk);
          Pk.group = fk, Pk.chunk = rk;
          for (const kk of [lk, pk]) {
            var mk;
            const ek = null === (mk = Dk.byLocation.get(kk)) || void 0 === mk ? void 0 : mk.buffer;
            ek && Pk.pages.push({
              kind: "buf",
              buffer: ek
            })
          }! function(kk, ek, ik, Dk, fk, Sk, bk) {
            const rk = Dk.get(lk),
              Pk = bk.parts.get(Sk);
            if (void 0 === Pk && bk.parts.size >= Ck) return;
            const mk = Math.min(fk, jk, Ak - (null !== Pk && void 0 !== Pk ? Pk : 0));
            if (null === rk || void 0 === rk || !rk.buffer || mk <= 0) return;
            const Mk = Tk(kk, ek, ik);
            if (!Mk) return;
            const Kk = rk.stride || 12,
              xk = Nk(kk, rk.buffer, rk.offset, (mk - 1) * Kk + 12),
              nk = new DataView(xk.buffer),
              Uk = function(kk, ek) {
                const ik = function(kk) {
                    const ek = ke.get(kk);
                    if (void 0 !== ek && (null === ek || kk.isProgram(ek))) return ek;
                    zk.inProbe = !0;
                    let ik = null;
                    try {
                      ik = Zk(kk, Rk, Jk, "fed", "the record feed")
                    } finally {
                      zk.inProbe = !1
                    }
                    return ke.set(kk, ik), ik
                  }(kk),
                  Dk = ik ? Gk(kk, ik, ek, (() => {
                    kk.drawArraysInstanced(Hk.POINTS, 0, 1, ek)
                  }), "decode probe input (the record feed)") : null;
                return Dk ? new Uint32Array(Dk.buffer) : null
              }(kk, mk);
            Uk || bk.fed.failed++;
            const wk = Gk(kk, Mk, 4 * mk, (() => {
              kk.drawArraysInstanced(Hk.POINTS, 0, 4, mk)
            }));
            if (!wk) return;
            bk.parts.set(Sk, (null !== Pk && void 0 !== Pk ? Pk : 0) + mk);
            for (let Hk = 0; Hk < mk; Hk++) {
              const kk = Hk * Kk,
                ek = [nk.getUint32(kk, !0), nk.getUint32(kk + 4, !0), nk.getUint32(kk + 8, !0)],
                ik = Uk ? [Uk[3 * Hk], Uk[3 * Hk + 1], Uk[3 * Hk + 2]] : ek;
              Uk && (bk.fed.records++, ik.some(((kk, ik) => kk !== ek[ik])) && (bk.fed.differing++, bk.fed.first.length < 8 && bk.fed.first.push(`part ${Sk} instance ${Hk}: fed ${ik.map(Se).join(" ")} buffer ${ek.map(Se).join(" ")}`)));
              for (let Dk = 0; Dk < 4; Dk++) {
                const kk = 3 * (4 * Hk + Dk);
                bk.vertices.push({
                  record: ik,
                  slot: Dk,
                  group: Sk,
                  gpu: [wk[kk], wk[kk + 1], wk[kk + 2]]
                })
              }
            }
          }(kk, ek, ik, Dk.byLocation, Sk, fk, bk)
        } else {
          const Dk = ee(kk, ek, 16),
            Sk = ee(kk, ek, 8);
          for (const kk of [Dk, Sk]) kk && Pk.pages.push({
            kind: "tex",
            texture: kk
          });
          Dk && function(kk, ek, ik, Dk, fk, Sk) {
            if (Sk.parts.size >= Ck) return;
            const bk = Tk(kk, ek, ik);
            if (!bk) return;
            let rk = 6 * Ak;
            const Pk = [];
            for (const [nk, Uk] of fk) {
              const kk = Math.min(Uk, rk, Math.max(6, 6 * Math.floor(Ak / fk.length)));
              kk > 0 && (Pk.push([nk, kk]), rk -= kk)
            }
            const mk = Pk.reduce(((kk, ek) => {
                let [, ik] = ek;
                return kk + ik
              }), 0),
              Mk = Gk(kk, bk, mk, (() => {
                for (const [ek, ik] of Pk) kk.drawArrays(Hk.POINTS, ek, ik)
              }));
            if (!Mk) return;
            let Kk = 0;
            for (const [nk, Uk] of Pk) {
              const ek = Math.floor(nk / 6),
                ik = Math.floor((nk + Uk - 1) / 6) - ek + 1,
                fk = ie(kk, Dk, Lk, ek, ik);
              for (let kk = nk; kk < nk + Uk; kk++, Kk++) {
                var xk;
                const ik = 4 * (Math.floor(kk / 6) - ek),
                  Dk = [fk[ik], fk[ik + 1], fk[ik + 2]];
                Sk.parts.set(fk[ik + 3], (null !== (xk = Sk.parts.get(fk[ik + 3])) && void 0 !== xk ? xk : 0) + (kk % 6 === 0 ? 1 : 0)), Sk.vertices.push({
                  record: Dk,
                  slot: Yk[kk % 6],
                  group: fk[ik + 3],
                  gpu: [Mk[3 * Kk], Mk[3 * Kk + 1], Mk[3 * Kk + 2]]
                })
              }
            }
          }(kk, ek, ik, Dk, fk, bk)
        }
      } catch (Mk) {
        tk(`decode probe failed on program ${Fk(ik)}: ${String(Mk)}`)
      }
    }

    function Tk(kk, ek, ik) {
      if (void 0 !== ik.probe) return ik.probe && Ok(kk, ek, ik.probe), ik.probe;
      ik.probe = null, zk.inProbe = !0;
      try {
        ik.probe = function(kk, ek) {
          return Zk(kk, (ik = ek.vertex, ik.replace(`\nvec3 ${wk} = vec3(0);\n`, `\nout vec3 ${wk};\n`)), ek.fragment, wk, `program ${Fk(ek)}'s twin`);
          var ik
        }(kk, ik)
      } finally {
        zk.inProbe = !1
      }
      return ik.probe && Ok(kk, ek, ik.probe), ik.probe
    }

    function Zk(kk, ek, ik, Dk, fk) {
      const Sk = [kk.createShader(Hk.VERTEX_SHADER), kk.createShader(Hk.FRAGMENT_SHADER)],
        bk = kk.createProgram();
      if (!bk || !Sk[0] || !Sk[1]) return null;
      kk.shaderSource(Sk[0], ek), kk.shaderSource(Sk[1], ik);
      for (const Pk of Sk) kk.compileShader(Pk), kk.attachShader(bk, Pk);
      kk.transformFeedbackVaryings(bk, [Dk], Hk.INTERLEAVED_ATTRIBS), kk.linkProgram(bk);
      for (const Pk of Sk) kk.deleteShader(Pk);
      var rk;
      return kk.getProgramParameter(bk, Hk.LINK_STATUS) ? bk : (tk(`decode probe: ${fk} failed to link: ${Bk(null!==(rk=kk.getProgramInfoLog(bk))&&void 0!==rk?rk:"",300)}`), kk.deleteProgram(bk), null)
    }

    function Ok(kk, ek, ik) {
      const Dk = kk.getProgramParameter(ek, Hk.ACTIVE_UNIFORM_BLOCKS);
      for (let rk = 0; rk < Dk; rk++) {
        const Dk = kk.getActiveUniformBlockName(ek, rk),
          fk = null === Dk ? Hk.INVALID_INDEX : kk.getUniformBlockIndex(ik, Dk);
        fk !== Hk.INVALID_INDEX && kk.uniformBlockBinding(ik, fk, kk.getActiveUniformBlockParameter(ek, rk, Hk.UNIFORM_BLOCK_BINDING))
      }
      const fk = kk.getParameter(Hk.CURRENT_PROGRAM);
      kk.useProgram(ik);
      const Sk = kk.getProgramParameter(ek, Hk.ACTIVE_UNIFORMS),
        bk = kk.getActiveUniforms(ek, [...Array(Sk).keys()], Hk.UNIFORM_BLOCK_INDEX);
      for (let rk = 0; rk < Sk; rk++) {
        const Dk = kk.getActiveUniform(ek, rk);
        if (!Dk || -1 !== bk[rk]) continue;
        const fk = Dk.name.replace(/\[0\]$/, "");
        for (let Sk = 0; Sk < Dk.size; Sk++) {
          const bk = Dk.size > 1 ? `${fk}[${Sk}]` : Dk.name,
            rk = kk.getUniformLocation(ek, bk),
            Pk = kk.getUniformLocation(ik, bk);
          rk && Pk && gk(kk, Pk, Dk.type, kk.getUniform(ek, rk))
        }
      }
      kk.useProgram(fk)
    }

    function gk(kk, ek, ik, Dk) {
      const fk = ArrayBuffer.isView(Dk) ? Array.from(Dk) : [Number(Dk)];
      switch (ik) {
        case Hk.FLOAT:
          return void kk.uniform1f(ek, fk[0]);
        case Hk.FLOAT_VEC2:
          return void kk.uniform2fv(ek, fk);
        case Hk.FLOAT_VEC3:
          return void kk.uniform3fv(ek, fk);
        case Hk.FLOAT_VEC4:
          return void kk.uniform4fv(ek, fk);
        case Hk.FLOAT_MAT3:
          return void kk.uniformMatrix3fv(ek, !1, fk);
        case Hk.FLOAT_MAT4:
          return void kk.uniformMatrix4fv(ek, !1, fk);
        case Hk.UNSIGNED_INT:
          return void kk.uniform1ui(ek, fk[0]);
        case Hk.UNSIGNED_INT_VEC2:
          return void kk.uniform2uiv(ek, fk);
        case Hk.UNSIGNED_INT_VEC3:
          return void kk.uniform3uiv(ek, fk);
        case Hk.UNSIGNED_INT_VEC4:
          return void kk.uniform4uiv(ek, fk);
        case Hk.INT_VEC2:
          return void kk.uniform2iv(ek, fk);
        case Hk.INT_VEC3:
          return void kk.uniform3iv(ek, fk);
        case Hk.INT_VEC4:
          return void kk.uniform4iv(ek, fk);
        default:
          kk.uniform1i(ek, fk[0])
      }
    }

    function Gk(kk, ek, ik, Dk) {
      let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const Sk = kk.getParameter(Hk.CURRENT_PROGRAM),
        bk = kk.getParameter(Hk.TRANSFORM_FEEDBACK_BINDING),
        rk = kk.getParameter(Hk.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        Pk = kk.getParameter(Hk.COPY_READ_BUFFER_BINDING),
        mk = kk.isEnabled(Hk.RASTERIZER_DISCARD),
        Mk = kk.createTransformFeedback(),
        Kk = kk.createBuffer();
      zk.inProbe = !0;
      try {
        const Sk = kk.getError();
        Sk !== Hk.NO_ERROR && tk(`GL error 0x${Sk.toString(16)} pending before the decode probe (the renderer's)`), kk.useProgram(ek), kk.bindTransformFeedback(Hk.TRANSFORM_FEEDBACK, Mk), kk.bindBuffer(Hk.TRANSFORM_FEEDBACK_BUFFER, Kk), kk.bufferData(Hk.TRANSFORM_FEEDBACK_BUFFER, 12 * ik, Hk.STREAM_READ), kk.bindBufferBase(Hk.TRANSFORM_FEEDBACK_BUFFER, 0, Kk), kk.enable(Hk.RASTERIZER_DISCARD), kk.beginTransformFeedback(Hk.POINTS), Dk(), kk.endTransformFeedback(), kk.bindBufferBase(Hk.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const bk = kk.getError();
        if (bk !== Hk.NO_ERROR) return tk(`${fk}: GL error 0x${bk.toString(16)} on the feedback draw`), null;
        const rk = new Float32Array(3 * ik);
        return kk.bindBuffer(Hk.COPY_READ_BUFFER, Kk), kk.getBufferSubData(Hk.COPY_READ_BUFFER, 0, rk), rk
      } finally {
        mk || kk.disable(Hk.RASTERIZER_DISCARD), kk.bindTransformFeedback(Hk.TRANSFORM_FEEDBACK, bk), kk.bindBuffer(Hk.TRANSFORM_FEEDBACK_BUFFER, rk), kk.bindBuffer(Hk.COPY_READ_BUFFER, Pk), kk.deleteTransformFeedback(Mk), kk.deleteBuffer(Kk), kk.useProgram(Sk), zk.inProbe = !1
      }
    }

    function Nk(kk, ek, ik, Dk) {
      const fk = kk.getParameter(Hk.COPY_READ_BUFFER_BINDING),
        Sk = new Uint8Array(Dk);
      return kk.bindBuffer(Hk.COPY_READ_BUFFER, ek), kk.getBufferSubData(Hk.COPY_READ_BUFFER, ik, Sk), kk.bindBuffer(Hk.COPY_READ_BUFFER, fk), Sk
    }
    const Rk = `#version 300 es\nlayout(location = ${lk}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      Jk = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      ke = new WeakMap;

    function ee(kk, ek, ik) {
      const Dk = kk.getProgramParameter(ek, Hk.ACTIVE_UNIFORMS),
        fk = kk.getParameter(Hk.ACTIVE_TEXTURE);
      try {
        for (let fk = 0; fk < Dk; fk++) {
          const Dk = kk.getActiveUniform(ek, fk);
          if ((null === Dk || void 0 === Dk ? void 0 : Dk.type) !== Hk.UNSIGNED_INT_SAMPLER_2D) continue;
          const Sk = kk.getUniformLocation(ek, Dk.name),
            bk = Sk ? kk.getUniform(ek, Sk) : -1;
          if (bk < 0) continue;
          kk.activeTexture(Hk.TEXTURE0 + bk);
          const rk = kk.getParameter(Hk.TEXTURE_BINDING_2D);
          if (rk && Ik.get(rk) === ik) return rk
        }
        return null
      } finally {
        kk.activeTexture(fk)
      }
    }

    function ie(kk, ek, ik, Dk, fk) {
      const Sk = new Uint32Array(4 * fk),
        bk = kk.getParameter(Hk.READ_FRAMEBUFFER_BINDING),
        rk = kk.createFramebuffer();
      kk.bindFramebuffer(Hk.READ_FRAMEBUFFER, rk), kk.framebufferTexture2D(Hk.READ_FRAMEBUFFER, Hk.COLOR_ATTACHMENT0, Hk.TEXTURE_2D, ek, 0);
      try {
        let ek = 0;
        for (; ek < fk;) {
          const bk = Dk + ek,
            rk = bk % ik,
            Pk = Math.min(fk - ek, ik - rk);
          kk.readPixels(rk, Math.floor(bk / ik), Pk, 1, Hk.RGBA_INTEGER, Hk.UNSIGNED_INT, Sk.subarray(4 * ek, 4 * (ek + Pk))), ek += Pk
        }
      } finally {
        kk.bindFramebuffer(Hk.READ_FRAMEBUFFER, bk), kk.deleteFramebuffer(rk)
      }
      return Sk
    }

    function De(kk, ek, ik) {
      let Dk = 0,
        fk = 0;
      for (let Pk = 0; Pk < ek.bytes.length; Pk += dk) {
        Dk++;
        const kk = Math.min(Pk + dk, ek.bytes.length);
        nk(ek.bytes.subarray(Pk, kk)) !== nk(ik.subarray(Pk, kk)) && fk++
      }
      const Sk = `${kk} ${ek.bytes.length} B cpu ${nk(ek.bytes).toString(16)} gpu ${nk(ik).toString(16)}, ${fk}/${Dk} blocks differ${ek.missed?`, ${ek.missed} GPU-side writes uncopied`:""}`;
      if (0 === fk) return Sk;
      const {
        count: bk,
        offsets: rk
      } = function(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const Dk = Math.min(kk.length, ek.length);
        let fk = Math.abs(kk.length - ek.length);
        const Sk = [];
        for (let bk = 0; bk < Dk; bk++) kk[bk] !== ek[bk] && (fk++, Sk.length < ik && Sk.push(bk));
        return {
          count: fk,
          offsets: Sk
        }
      }(ek.bytes, ik);
      return Xk([`${Sk}: ${bk} bytes differ`, ...rk.map((kk => `  +${kk}: cpu ${Uk(ek.bytes,kk)} | gpu ${Uk(ik,kk)}`))].join("\n")), `${Sk}: ${bk} bytes differ, first at ${rk.join(", ")} (context in the saved file)`
    }

    function fe(kk) {
      if (0 === kk.vertices.length) return void tk(`decode probe (${kk.reason}): no terrain draw probed (${kk.draws.length} seen)`);
      const ek = function(kk) {
          const ek = new Map;
          for (const Dk of kk) {
            const kk = ek.get(Dk.group);
            kk ? kk.push(Dk) : ek.set(Dk.group, [Dk])
          }
          const ik = {
            vertices: kk.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [Dk, fk] of ek) {
            const kk = new Map,
              ek = fk.map((ek => {
                const ik = Mk(ek.record, ek.slot),
                  Dk = [ek.gpu[0] - ik[0], ek.gpu[1] - ik[1], ek.gpu[2] - ik[2]],
                  fk = Dk.map((kk => Math.round(64 * kk))).join(","),
                  Sk = kk.get(fk);
                return Sk ? Sk.count++ : kk.set(fk, {
                  count: 1,
                  offset: Dk
                }), ik
              }));
            let Sk = [0, 0, 0],
              bk = 0;
            for (const ik of kk.values()) ik.count > bk && (bk = ik.count, Sk = ik.offset);
            ik.translations.set(Dk, Sk), fk.forEach(((kk, Dk) => {
              var fk;
              const bk = [ek[Dk][0] + Sk[0], ek[Dk][1] + Sk[1], ek[Dk][2] + Sk[2]];
              if (bk.every(((ek, ik) => {
                  return Dk = kk.gpu[ik], fk = ek, Math.abs(Dk - fk) <= Math.max(.001, 1e-6 * Math.abs(fk));
                  var Dk, fk
                }))) return;
              ik.mismatches++, ik.byDirection[rk(kk.record[2])]++, ik.byDiagonal[Pk(kk.record[2])]++;
              const mk = Kk(kk.record);
              ik.byBand[mk] = (null !== (fk = ik.byBand[mk]) && void 0 !== fk ? fk : 0) + 1, ik.first.length < xk && ik.first.push({
                ...kk,
                expected: bk
              })
            }))
          }
          return ik
        }(kk.vertices),
        ik = ek.byDirection.map(((kk, ek) => kk ? `${bk[ek]} ${kk}` : "")).filter(Boolean).join(" "),
        Dk = Object.entries(ek.byBand).map((kk => {
          let [ek, ik] = kk;
          return `${ek}: ${ik}`
        })).join(" ");
      if (tk(`decode probe (${kk.reason}): ${ek.mismatches}/${ek.vertices} vertices differ from the CPU decode over ${kk.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (ek.mismatches ? ` by direction [${ik}] diagonal [0: ${ek.byDiagonal[0]} 1: ${ek.byDiagonal[1]}] extent [${Dk}]` : "")), kk.fed.records > 0 || kk.fed.failed > 0) {
        tk(`decode probe input: ${kk.fed.differing}/${kk.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (kk.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (kk.fed.failed ? `; the feed failed on ${kk.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const ek of kk.fed.first) tk(`  ${ek}`)
      }
      for (const fk of ek.first) {
        const [kk, ek, ik] = fk.record;
        tk(`  mismatch part ${fk.group} r0 ${kk.toString(16)} r1 ${ek.toString(16)} r2 ${ik.toString(16)} slot ${fk.slot} (${bk[rk(ik)]}): expected ${fk.expected.map(be).join(",")} gpu ${fk.gpu.map(be).join(",")}`)
      }
      Xk(`decode probe translations: ${[...ek.translations].map((kk=>{let[ek,ik]=kk;return`${ek}: ${ik.map(be).join(",")}`})).join("; ")}`)
    }

    function Se(kk) {
      return kk.toString(16)
    }

    function be(kk) {
      return Number.isInteger(kk) ? String(kk) : kk.toFixed(3)
    }

    function re(kk) {
      return null !== zk.pendingCheck ? Promise.resolve() : new Promise((ek => {
        let ik = !1;
        const Dk = {
          reason: kk,
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
        zk.pendingCheck = Dk;
        const fk = () => {
            zk.pendingCheck = null;
            try {
              ! function(kk) {
                tk(`draw ranges (${kk.reason}): ${kk.terrainDraws} terrain draws in the frame, the first ${kk.draws.length} here`);
                for (const ek of kk.draws) {
                  const kk = ek.lw.slice(0, 8).map((kk => {
                      let [ek, ik] = kk;
                      return `${ek}+${ik}`
                    })).join(" "),
                    ik = ek.lw.length > 8 ? ` (+${ek.lw.length-8} ranges)` : "";
                  tk(`  ${Fk(ek.program)} ${ek.program.terrain} ${ek.call} ${kk}${ik} x${ek.instances}${ek.group>=0?` part ${ek.group} chunk ${ek.chunk}`:""} | ${ek.attributes.join(" | ")}`)
                }
              }(Dk), fe(Dk);
              Dk.draws.some((kk => "undefined" !== typeof WebGL2RenderingContext && kk.gl instanceof WebGL2RenderingContext)) || 0 === Dk.draws.length ? function(kk) {
                const ek = [],
                  ik = new Map;
                for (const Dk of kk)
                  if ("undefined" !== typeof WebGL2RenderingContext && Dk.gl instanceof WebGL2RenderingContext)
                    for (const kk of Dk.pages) ik.set("buf" === kk.kind ? kk.buffer : kk.texture, {
                      page: kk,
                      gl: Dk.gl
                    });
                for (const [Dk, {
                    page: fk,
                    gl: Sk
                  }] of ik) {
                  const kk = qk.get(Dk);
                  if (!kk) {
                    ek.push(`${fk.kind}#${Ek(Dk)}: no CPU copy (${zk.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === fk.kind) {
                    ek.push(De(`buf#${kk.id}`, kk, Nk(Sk, fk.buffer, 0, kk.bytes.length)));
                    continue
                  }
                  const ik = ie(Sk, fk.texture, kk.width, 0, kk.width * kk.height),
                    bk = 16 === kk.texelBytes ? new Uint8Array(ik.buffer) : new Uint8Array(new Uint16Array(ik).buffer);
                  ek.push(De(`tex#${kk.id} (${16===kk.texelBytes?"records":"light"})`, kk, bk))
                }
                for (const Dk of ek) tk(`page readback ${Dk}`)
              }(Dk.draws) : tk("page readback: none on WebGL1 (no buffer readback)")
            } catch (kk) {
              tk(`check failed: ${String(kk)}`)
            }
            ek()
          },
          Sk = () => {
            if (Dk.draws.length > 0 && !ik) return ik = !0, void setTimeout(fk, 0);
            ik || requestAnimationFrame(Sk)
          };
        requestAnimationFrame(Sk), setTimeout((() => {
          ik || (ik = !0, fk())
        }), 5e3)
      }))
    }
    var Pe = ik(4629);
    const me = 20,
      Me = 24,
      Ke = Reflect.apply;

    function xe(kk, ek, ik) {
      if (!kk) return;
      const Dk = kk[ek];
      if ("function" === typeof Dk) {
        const fk = ik(Dk);
        kk[ek] = fk, (0, Pe.r)(fk, Dk)
      }
    }
    let ne = !1;
    const Ue = new WeakMap,
      He = new WeakMap,
      we = new WeakMap,
      le = {
        gl: 0,
        lost: 0
      };
    let pe = {
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
      ye = {
        buffer: 0,
        texture: 0
      },
      Ye = 0;

    function Le(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (kk instanceof ArrayBuffer) return new Uint8Array(kk, ek, ik || void 0);
      if (!ArrayBuffer.isView(kk)) return null;
      const Dk = "BYTES_PER_ELEMENT" in kk ? kk.BYTES_PER_ELEMENT : 1,
        fk = kk.byteOffset + ek * Dk,
        Sk = ik ? ik * Dk : kk.byteLength - ek * Dk;
      return new Uint8Array(kk.buffer, fk, Math.max(0, Sk))
    }

    function Ce(kk, ek) {
      const ik = function(kk) {
        switch (kk) {
          case Hk.ARRAY_BUFFER:
            return Hk.ARRAY_BUFFER_BINDING;
          case Hk.ELEMENT_ARRAY_BUFFER:
            return Hk.ELEMENT_ARRAY_BUFFER_BINDING;
          case Hk.COPY_READ_BUFFER:
            return Hk.COPY_READ_BUFFER_BINDING;
          case Hk.COPY_WRITE_BUFFER:
            return Hk.COPY_WRITE_BUFFER_BINDING;
          case Hk.UNIFORM_BUFFER:
            return Hk.UNIFORM_BUFFER_BINDING;
          case Hk.PIXEL_UNPACK_BUFFER:
            return Hk.PIXEL_UNPACK_BUFFER_BINDING;
          case Hk.TRANSFORM_FEEDBACK_BUFFER:
            return Hk.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(ek);
      return ik ? kk.getParameter(ik) : null
    }

    function Ae(kk) {
      const ek = qk.get(kk);
      ek && (zk.shadowBytes -= ek.bytes.length, qk.delete(kk))
    }

    function je(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      Ae(kk), zk.shadowBytes + ek > sk ? zk.uncopied++ : (zk.shadowBytes += ek, qk.set(kk, {
        id: Ek(kk),
        bytes: new Uint8Array(ek),
        width: ik,
        height: Dk,
        texelBytes: fk,
        missed: 0
      }))
    }

    function se(kk, ek) {
      for (const ik of ["deleteBuffer", "deleteTexture"]) xe(kk, ik, (kk => function() {
        for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
        return ik[0] && Ae(ik[0]), Ke(kk, this, ik)
      }));
      xe(kk, "shaderSource", (kk => function() {
        for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
        return ik[0] && "string" === typeof ik[1] && Ue.set(ik[0], ik[1]), Ke(kk, this, ik)
      })), xe(kk, "attachShader", (kk => function() {
        for (var ek, ik = arguments.length, Dk = new Array(ik), fk = 0; fk < ik; fk++) Dk[fk] = arguments[fk];
        const Sk = Dk[0],
          bk = null !== (ek = He.get(Sk)) && void 0 !== ek ? ek : [];
        return bk.push(Dk[1]), He.set(Sk, bk), Ke(kk, this, Dk)
      })), xe(kk, "linkProgram", (kk => function() {
        for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
        const fk = Ke(kk, this, ik);
        return zk.inProbe || function(kk, ek) {
          var ik, Dk, fk;
          "undefined" !== typeof HTMLCanvasElement && kk.canvas instanceof HTMLCanvasElement && function(kk) {
            if (Ie.has(kk)) return;
            Ie.add(kk);
            for (const ek of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) kk.addEventListener(ek, (kk => {
              le.lost < me && (le.lost++, tk(`${ek}${"statusMessage"in kk?`: ${String(kk.statusMessage)}`:""}`))
            }))
          }(kk.canvas);
          zk.context ??= kk;
          const Sk = null !== (ik = He.get(ek)) && void 0 !== ik ? ik : [];
          let bk = "",
            rk = "";
          for (const Mk of Sk) {
            var Pk;
            const kk = null !== (Pk = Ue.get(Mk)) && void 0 !== Pk ? Pk : "";
            /\bgl_Position\b/.test(kk) ? bk = kk : rk = kk
          }
          const mk = {
            id: Ek(ek),
            name: null !== (Dk = null === (fk = Vk.exec(bk)) || void 0 === fk ? void 0 : fk[1]) && void 0 !== Dk ? Dk : null,
            gl: kk,
            vertex: bk,
            fragment: rk,
            terrain: Ve(bk),
            checked: !1,
            firstDraw: !1
          };
          if (we.set(ek, mk), uk.push([ek, mk]), null !== mk.terrain) {
            const ek = Sk.map((ek => {
              var ik;
              return null !== (ik = kk.getShaderInfoLog(ek)) && void 0 !== ik ? ik : ""
            })).filter((kk => "" !== kk.trim()));
            ek.length > 0 && Xk(`program ${Fk(mk)} (${mk.terrain}) shader logs:\n${Bk(ek.join("\n"))}`)
          }
        }(this, ik[0]), fk
      })), xe(kk, "bufferData", (kk => function() {
        for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
        const fk = Ke(kk, this, ik);
        if (!zk.inProbe) {
          const kk = Ce(this, ik[0]);
          if (kk) {
            var Sk, bk, rk;
            const ek = "number" === typeof ik[1] ? null : Le(ik[1], null !== (Sk = ik[3]) && void 0 !== Sk ? Sk : 0, null !== (bk = ik[4]) && void 0 !== bk ? bk : 0);
            var Pk;
            if (je(kk, "number" === typeof ik[1] ? ik[1] : null !== (rk = null === ek || void 0 === ek ? void 0 : ek.length) && void 0 !== rk ? rk : 0), ek) null === (Pk = qk.get(kk)) || void 0 === Pk || Pk.bytes.set(ek)
          }
        }
        return fk
      })), xe(kk, "bufferSubData", (kk => function() {
        for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
        const fk = Ke(kk, this, ik);
        if (!zk.inProbe) {
          var Sk, bk;
          const kk = Ce(this, ik[0]),
            ek = kk ? qk.get(kk) : void 0,
            Dk = Le(ik[2], null !== (Sk = ik[3]) && void 0 !== Sk ? Sk : 0, null !== (bk = ik[4]) && void 0 !== bk ? bk : 0);
          if (ek && Dk) {
            const kk = ik[1];
            ek.bytes.set(Dk.subarray(0, Math.max(0, ek.bytes.length - kk)), kk), de("buffer", ek, kk, Dk.length)
          }
        }
        return fk
      })), ek && (xe(kk, "copyBufferSubData", (kk => function() {
        for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
        const fk = Ke(kk, this, ik);
        if (!zk.inProbe) {
          const [kk, ek, Dk, fk, Sk] = ik, bk = Ce(this, kk), rk = Ce(this, ek), Pk = bk ? qk.get(bk) : void 0, mk = rk ? qk.get(rk) : void 0;
          mk && (Pk ? mk.bytes.set(Pk.bytes.slice(Dk, Dk + Sk), fk) : mk.missed++)
        }
        return fk
      })), xe(kk, "texStorage2D", (kk => function() {
        for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
        const fk = Ke(kk, this, ik),
          [, , Sk, bk, rk] = ik;
        if (!zk.inProbe && (Sk === Hk.RGBA32UI || Sk === Hk.RGBA16UI)) {
          const kk = this.getParameter(Hk.TEXTURE_BINDING_2D),
            ek = Sk === Hk.RGBA32UI ? 16 : 8;
          kk && (Ik.set(kk, ek), je(kk, bk * rk * ek, bk, rk, ek))
        }
        return fk
      })), xe(kk, "texSubImage2D", (kk => function() {
        for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
        const fk = Ke(kk, this, ik);
        return !zk.inProbe && ik.length >= 9 && ik[0] === Hk.TEXTURE_2D && 0 === ik[1] && function(kk, ek) {
          var ik;
          const Dk = kk.getParameter(Hk.TEXTURE_BINDING_2D),
            fk = Dk ? qk.get(Dk) : void 0;
          if (!fk) return;
          const [, , Sk, bk, rk, Pk] = ek;
          let mk = Le(ek[8], null !== (ik = ek[9]) && void 0 !== ik ? ik : 0);
          if (null === mk && "number" === typeof ek[8]) {
            const ik = Ce(kk, Hk.PIXEL_UNPACK_BUFFER),
              Dk = ik ? qk.get(ik) : void 0;
            mk = Dk ? Dk.bytes.subarray(ek[8]) : null
          }
          if (null === mk) return void fk.missed++;
          const Mk = kk.getParameter(Hk.UNPACK_ROW_LENGTH) || rk,
            Kk = kk.getParameter(Hk.UNPACK_SKIP_ROWS),
            xk = kk.getParameter(Hk.UNPACK_SKIP_PIXELS),
            nk = fk.texelBytes;
          for (let Uk = 0; Uk < Pk; Uk++) {
            const kk = ((Kk + Uk) * Mk + xk) * nk,
              ek = ((bk + Uk) * fk.width + Sk) * nk;
            fk.bytes.set(mk.subarray(kk, kk + rk * nk), ek)
          }
          de("texture", fk, (bk * fk.width + Sk) * nk, rk * Pk * nk)
        }(this, ik), fk
      })), xe(kk, "copyTexSubImage2D", (kk => function() {
        for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
        const fk = ik[0] === Hk.TEXTURE_2D ? this.getParameter(Hk.TEXTURE_BINDING_2D) : null,
          Sk = fk ? qk.get(fk) : void 0;
        return Sk && Sk.missed++, Ke(kk, this, ik)
      })));
      for (const ik of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) xe(kk, ik, (kk => function() {
        for (var ek = arguments.length, Dk = new Array(ek), fk = 0; fk < ek; fk++) Dk[fk] = arguments[fk];
        const Sk = Ke(kk, this, Dk);
        return zk.inProbe || ue(this, ik, Dk), Sk
      }));
      xe(kk, "getExtension", (kk => function() {
        for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
        const fk = Ke(kk, this, ik);
        return fk && "object" === typeof fk && function(kk, ek, ik) {
          const Dk = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(ek in Dk) || ik.bloxdRenderDebug) return;
          ik.bloxdRenderDebug = !0;
          for (const fk of Dk[ek]) {
            const ek = ik[fk];
            "function" === typeof ek && (ik[fk] = function() {
              for (var Dk = arguments.length, Sk = new Array(Dk), bk = 0; bk < Dk; bk++) Sk[bk] = arguments[bk];
              const rk = Ke(ek, ik, Sk);
              return zk.inProbe || ue(kk, fk, Sk), rk
            })
          }
        }(this, ik[0], fk), fk
      }))
    }

    function de(kk, ek, ik, Dk) {
      ye[kk] += Dk, Ye < 32 && ek.bytes.length >= 1 << 20 && (Ye++, Xk(`upload ${kk} #${ek.id} +${ik} ${Dk} B`))
    }

    function Ve(kk) {
      if (!kk.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(kk) || /in uvec3 _p2vs_location0\b/.test(kk) ? "inst" : "tex"
    }

    function Fe(kk, ek, ik) {
      var Dk;
      if (ik.checked) return;
      ik.checked = !0;
      const fk = kk.getProgramParameter(ek, Hk.LINK_STATUS),
        Sk = (null !== (Dk = kk.getProgramInfoLog(ek)) && void 0 !== Dk ? Dk : "").trim();
      var bk;
      null === ik.terrain && fk || (tk(`program ${Fk(ik)} ${null!==(bk=ik.terrain)&&void 0!==bk?bk:"other"} link ${fk?"ok":"FAILED"}${Sk?`: ${Bk(Sk,300)}`:""}`), Sk && Xk(`program ${Fk(ik)} link log:\n${Bk(Sk)}`))
    }

    function ue(kk, ek, ik) {
      var Dk;
      const fk = kk.getParameter(Hk.CURRENT_PROGRAM),
        Sk = fk ? we.get(fk) : void 0;
      if (!fk || !Sk) return;
      const bk = null !== (Dk = Sk.terrain) && void 0 !== Dk ? Dk : "other",
        {
          lw: rk,
          instances: Pk
        } = function(kk, ek) {
          switch (kk) {
            case "drawArrays":
              return {
                lw: [
                  [ek[1], ek[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                lw: [
                  [ek[1], ek[2]]
                ], instances: ek[3]
              };
            case "drawElements":
              return {
                lw: [
                  [0, ek[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                lw: [
                  [0, ek[1]]
                ], instances: ek[4]
              };
            case "multiDrawArraysWEBGL": {
              const kk = ek[1],
                ik = ek[3],
                Dk = ek[2],
                fk = ek[4],
                Sk = [];
              for (let bk = 0; bk < ek[5]; bk++) Sk.push([kk[Dk + bk], ik[fk + bk]]);
              return {
                lw: Sk,
                instances: 1
              }
            }
            default:
              return {
                lw: [], instances: 0
              }
          }
        }(ek, ik),
        mk = "inst" === Sk.terrain ? Pk : rk.reduce(((kk, ek) => {
          let [, ik] = ek;
          return kk + ik
        }), 0) / 6;
      if (pe[bk].draws++, pe[bk].faces += mk, null === Sk.terrain) return;
      if (zk.context = kk, !Sk.firstDraw) {
        Sk.firstDraw = !0, Fe(kk, fk, Sk), qe || (qe = !0, tk(function(kk) {
          var ek;
          const ik = kk.getParameter(Hk.DEPTH_FUNC),
            Dk = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let fk = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in kk && kk.getParameter(Hk.DRAW_FRAMEBUFFER_BINDING)) {
            const ek = kk;
            fk = ek.getFramebufferAttachmentParameter(Hk.DRAW_FRAMEBUFFER, Hk.DEPTH_ATTACHMENT, Hk.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(ek.getFramebufferAttachmentParameter(Hk.DRAW_FRAMEBUFFER,Hk.DEPTH_ATTACHMENT,Hk.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(ek.getFramebufferAttachmentParameter(Hk.DRAW_FRAMEBUFFER,Hk.DEPTH_ATTACHMENT,Hk.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const Sk = kk.getParameter(Hk.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(ek=Dk[ik])&&void 0!==ek?ek:`0x${ik.toString(16)}`} clear ${Sk}${516===ik||518===ik?" (reverse-Z)":""}, samples ${String(kk.getParameter(Hk.SAMPLES))}, ${fk}`
        }(kk)));
        const ik = kk.getError();
        ik !== Hk.NO_ERROR && le.gl < me && (le.gl++, tk(`GL error 0x${ik.toString(16)} after program ${Fk(Sk)}'s first terrain draw (${ek})`))
      }
      const Mk = zk.pendingCheck;
      null !== Mk && (Mk.terrainDraws++, Mk.draws.length < Me && ck(kk, fk, Sk, ek, rk, Pk))
    }
    let qe = !1;
    const Ie = new WeakSet;
    var ze = ik(4449),
      Qe = ik(4637);
    const ve = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let Ee = !1;
    const he = new WeakSet,
      ae = new WeakMap,
      We = new WeakMap,
      te = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let Xe = 0,
      Be = !1,
      ce = null,
      Te = {
        draws: 0,
        faces: 0
      };

    function oe(kk) {
      const ek = globalThis[kk];
      return null === ek || void 0 === ek ? void 0 : ek.prototype
    }

    function Ze(kk) {
      return kk && "function" === typeof kk[Symbol.iterator] ? [...kk].sort().join(" ") : ""
    }

    function Oe(kk, ek) {
      const ik = null !== kk && void 0 !== kk ? kk : {},
        Dk = null !== ek && void 0 !== ek ? ek : Object.keys(Object.getPrototypeOf(ik)).concat(Object.keys(ik));
      return [...new Set(Dk)].filter((kk => "number" === typeof ik[kk])).map((kk => `${kk} ${String(ik[kk])}`)).join(", ")
    }

    function ge(kk, ek) {
      var ik;
      const Dk = null !== (ik = ek.vertex) && void 0 !== ik ? ik : {};
      if (Dk.module && he.has(Dk.module)) {
        var fk;
        const ik = String(null !== (fk = Dk.entryPoint) && void 0 !== fk ? fk : "");
        if (ik.startsWith("vs_packed") && ae.set(kk, ik), !Be) {
          var Sk, bk, rk, Pk, mk;
          Be = !0;
          const kk = null !== (Sk = ek.depthStencil) && void 0 !== Sk ? Sk : {},
            Dk = null !== (bk = ek.multisample) && void 0 !== bk ? bk : {},
            fk = String(null !== (rk = kk.depthCompare) && void 0 !== rk ? rk : "");
          tk(`WebGPU terrain pipeline ${ik}: depth ${String(null!==(Pk=kk.format)&&void 0!==Pk?Pk:"none")} ${fk}${fk.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(mk=Dk.count)&&void 0!==mk?mk:1)}`)
        }
      }
    }

    function Ge(kk) {
      xe(kk, "setPipeline", (kk => function() {
        for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
        return We.set(this, ik[0]), Ke(kk, this, ik)
      }));
      for (const ek of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) xe(kk, ek, (kk => function() {
        const ik = We.get(this),
          Dk = ik ? ae.get(ik) : void 0;
        for (var fk = arguments.length, Sk = new Array(fk), bk = 0; bk < fk; bk++) Sk[bk] = arguments[bk];
        return void 0 !== Dk && Ne(ek, Dk, Sk), Ke(kk, this, Sk)
      }))
    }

    function Ne(kk, ek, ik) {
      var Dk;
      (Te.draws++, "draw" === kk || "drawIndexed" === kk) && (Te.faces += ik[0] * (null !== (Dk = ik[1]) && void 0 !== Dk ? Dk : 1) / 6);
      if (null !== ce && ce.length < Me) {
        const Dk = ("draw" === kk ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === kk ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((ek, Dk) => {
          const fk = kk.endsWith("Indirect") ? ik[1] : ik[Dk];
          return `${ek} ${String(null!==fk&&void 0!==fk?fk:"instances"===ek?1:0)}`
        }));
        ce.push(`  ${ek} ${kk} ${Dk.join(" ")}`)
      }
    }

    function Re() {
      if (Ee || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      Ee = !0, xe(oe("GPU"), "requestAdapter", (kk => function() {
        for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
        return Ke(kk, this, ik).then((kk => {
          var ek;
          kk ? function(kk) {
            var ek;
            const ik = null !== (ek = kk.info) && void 0 !== ek ? ek : {};
            tk(`WebGPU adapter ${["vendor","architecture","device","description"].map((kk=>{var ek;return`${kk} "${String(null!==(ek=ik[kk])&&void 0!==ek?ek:"")}"`})).join(" ")}${kk.isFallbackAdapter?" (fallback)":""}`), tk(`WebGPU adapter features ${Ze(kk.features)}`), tk(`WebGPU adapter limits ${Oe(kk.limits,ve)}`), Xk(`WebGPU adapter all limits ${Oe(kk.limits,null)}`)
          }(kk) : tk(`WebGPU requestAdapter(${JSON.stringify(null!==(ek=ik[0])&&void 0!==ek?ek:{})}) gave none`);
          return kk
        }))
      })), xe(oe("GPUAdapter"), "requestDevice", (kk => function() {
        for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
        return Ke(kk, this, ik).then((kk => (function(kk) {
          tk(`WebGPU device features ${Ze(kk.features)}`), tk(`WebGPU device limits ${Oe(kk.limits,ve)}`), kk.addEventListener("uncapturederror", (kk => {
            if (te.uncaptured < me) {
              var ek, ik, Dk;
              te.uncaptured++;
              const fk = kk.error;
              tk(`WebGPU uncaptured ${null!==(ek=null===fk||void 0===fk||null===(ik=fk.constructor)||void 0===ik?void 0:ik.name)&&void 0!==ek?ek:"error"}: ${Bk(String(null!==(Dk=null===fk||void 0===fk?void 0:fk.message)&&void 0!==Dk?Dk:""),600)}`)
            }
          }));
          const ek = kk.lost;
          null === ek || void 0 === ek || ek.then((kk => {
            var ek;
            tk(`WebGPU device lost (${String(kk.reason)}): ${Bk(String(null!==(ek=kk.message)&&void 0!==ek?ek:""),600)}`)
          }))
        }(kk), kk)), (kk => {
          throw tk(`WebGPU requestDevice failed: ${String(kk)}`), kk
        }))
      }));
      const kk = oe("GPUDevice");
      xe(kk, "createShaderModule", (kk => function() {
        for (var ek, ik, Dk = arguments.length, fk = new Array(Dk), Sk = 0; Sk < Dk; Sk++) fk[Sk] = arguments[Sk];
        const bk = Ke(kk, this, fk);
        return function(kk, ek) {
          const ik = ek.includes("decodeQuad");
          ik && he.add(kk);
          const Dk = kk.getCompilationInfo;
          null === Dk || void 0 === Dk || Dk.call(kk).then((kk => {
            if (0 === kk.messages.length && !ik) return;
            const ek = {};
            for (const ik of kk.messages) {
              var Dk;
              ek[String(ik.type)] = (null !== (Dk = ek[String(ik.type)]) && void 0 !== Dk ? Dk : 0) + 1
            }
            const fk = kk.messages.map((kk => `${String(kk.type)} ${String(kk.lineNum)}:${String(kk.linePos)} ${String(kk.message)}`)).join("\n");
            te.compile < me && (te.compile++, tk(`WebGPU ${ik?"terrain ":""}shader module compiled: ${JSON.stringify(ek)}${fk?` first: ${Bk(fk.split("\n")[0],300)}`:""}`)), fk && Xk(`WebGPU shader module messages:\n${Bk(fk)}`)
          }))
        }(bk, String(null !== (ek = (null !== (ik = fk[0]) && void 0 !== ik ? ik : {}).code) && void 0 !== ek ? ek : "")), bk
      })), xe(kk, "createRenderPipeline", (kk => function() {
        for (var ek, ik = arguments.length, Dk = new Array(ik), fk = 0; fk < ik; fk++) Dk[fk] = arguments[fk];
        const Sk = Ke(kk, this, Dk);
        return ge(Sk, null !== (ek = Dk[0]) && void 0 !== ek ? ek : {}), Sk
      })), xe(kk, "createRenderPipelineAsync", (kk => function() {
        for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
        return Ke(kk, this, ik).then((kk => {
          var ek;
          return ge(kk, null !== (ek = ik[0]) && void 0 !== ek ? ek : {}), kk
        }), (kk => {
          var ek;
          throw function(kk, ek) {
            var ik, Dk, fk;
            if (te.rejected >= me) return;
            te.rejected++;
            const {
              reason: Sk,
              message: bk
            } = null !== ek && void 0 !== ek ? ek : {}, rk = String(null !== (ik = (null !== (Dk = kk.vertex) && void 0 !== Dk ? Dk : {}).entryPoint) && void 0 !== ik ? ik : "");
            tk(`WebGPU pipeline "${String(null!==(fk=kk.label)&&void 0!==fk?fk:"")}" ${rk} rejected (${String(null!==Sk&&void 0!==Sk?Sk:"no reason")}): ${Bk(String(null!==bk&&void 0!==bk?bk:ek),600)}`)
          }(null !== (ek = ik[0]) && void 0 !== ek ? ek : {}, kk), kk
        }))
      })), xe(oe("GPUCanvasContext"), "configure", (kk => function() {
        for (var ek, ik = arguments.length, Dk = new Array(ik), fk = 0; fk < ik; fk++) Dk[fk] = arguments[fk];
        const Sk = null !== (ek = Dk[0]) && void 0 !== ek ? ek : {};
        var bk, rk;
        Xe++ < 3 && tk(`WebGPU canvas ${String(Sk.format)} ${String(null!==(bk=Sk.colorSpace)&&void 0!==bk?bk:"srgb")} alpha ${String(null!==(rk=Sk.alphaMode)&&void 0!==rk?rk:"opaque")}`);
        return Ke(kk, this, Dk)
      })), Ge(oe("GPURenderPassEncoder")), Ge(oe("GPURenderBundleEncoder"))
    }
    const Je = 1e4,
      ki = 6e4,
      ei = 5e3,
      ii = 3e3,
      Di = 100;
    let fi = null,
      Si = !1,
      bi = {
        ...ze.e
      },
      ri = !1,
      Pi = null,
      mi = 0,
      Mi = () => {};
    const Ki = new Promise((kk => {
      Mi = kk
    }));

    function xi() {
      var kk;
      Si || (Si = !0, bi = Object.assign(window.bloxdRenderDebug ??= {
        ...ze.e
      }, {
        faceCull: "0" === (0, Sk.p)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (kk = (0, Sk.p)("adrenoProbe")) && void 0 !== kk ? kk : ""
      }), tk("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), ne || "undefined" === typeof window || (ne = !0, "undefined" !== typeof WebGL2RenderingContext && se(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && se(WebGLRenderingContext.prototype, !1)), Re(), (0, Sk.e)("renderProbe", (() => {
        yi("console")
      })), wi(), setInterval(Li, ei))
    }

    function ni(kk) {
      var ek, ik;
      xi(), fi = null !== (ek = null === kk || void 0 === kk ? void 0 : kk.backend) && void 0 !== ek ? ek : null;
      const Dk = `, renderer param ${null!==(ik=(0,Sk.p)("renderer"))&&void 0!==ik?ik:"none"}, faceCull ${"0"===bi.faceCull?"off (whole parts)":"on"}, adrenoProbe ${bi.adrenoProbe||"none"}`;
      tk(`${(0,Qe.d)(kk)}${null===kk?"":Dk}`)
    }

    function Ui() {
      const kk = performance.now(),
        ek = Hi(Ki, Je, ki).then((ek => yi(`${Math.round((performance.now()-kk)/1e3)} s after playable${ek?"":", no terrain drawn yet"}`)));
      (0, fk.c)(tk, (async () => {
        await ek, await Pi
      }))
    }
    async function Hi(kk, ek, ik) {
      const fk = (0, Dk.c)(ik).then((() => !1));
      return await (0, Dk.c)(ek), Promise.race([kk.then((() => !0)), fk])
    }

    function wi() {
      requestAnimationFrame((() => {
        mi++, wi()
      }))
    }

    function li() {
      var kk, ek, ik;
      if (ri) return;
      (ri = !0, tk(`renderer caps ${null!==(kk=bi.caps)&&void 0!==kk?kk:"(not noted)"}; terrain fetch ${null!==(ek=bi.fetch)&&void 0!==ek?ek:"(not noted)"}`), bi.adrenoProbe) && tk(`adrenoProbe ${bi.adrenoProbe} asked; in force (storage fetch only): ${null!==(ik=bi.probe)&&void 0!==ik?ik:"(not noted)"}`);
      const Dk = zk.context;
      if (Dk) {
        for (const kk of function(kk) {
            var ek;
            const ik = [],
              Dk = kk.getExtension("WEBGL_debug_renderer_info"),
              fk = Dk ? kk.getParameter(Dk.UNMASKED_VENDOR_WEBGL) : "(masked)",
              Sk = Dk ? kk.getParameter(Dk.UNMASKED_RENDERER_WEBGL) : "(masked)";
            ik.push(`GL ${String(kk.getParameter(kk.VERSION))} | ${String(kk.getParameter(kk.SHADING_LANGUAGE_VERSION))} | ${String(kk.getParameter(kk.VENDOR))} / ${String(kk.getParameter(kk.RENDERER))}`), ik.push(`GL unmasked ${fk} / ${Sk}`);
            const bk = [
              ["MAX_TEXTURE_SIZE", kk.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", kk.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", kk.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", kk.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", kk.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", kk.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", kk.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in kk && bk.push(["MAX_UNIFORM_BLOCK_SIZE", kk.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", kk.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", kk.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", kk.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), ik.push(`GL limits ${bk.map((ek=>{let[ik,Dk]=ek;return`${ik} ${String(kk.getParameter(Dk))}`})).join(", ")}`);
            const rk = (ek, ik) => {
              const Dk = kk.getShaderPrecisionFormat(ek, kk.HIGH_FLOAT),
                fk = kk.getShaderPrecisionFormat(ek, kk.HIGH_INT);
              return `${ik} highp float ${Dk?`${Dk.rangeMin}/${Dk.rangeMax}/${Dk.precision}`:"?"} int ${fk?`${fk.rangeMin}/${fk.rangeMax}/${fk.precision}`:"?"}`
            };
            ik.push(`GL precision ${rk(kk.VERTEX_SHADER,"VS")}, ${rk(kk.FRAGMENT_SHADER,"FS")}`);
            const Pk = kk.getContextAttributes();
            return ik.push(`GL context ${JSON.stringify(Pk)} drawingBuffer ${kk.drawingBufferWidth}x${kk.drawingBufferHeight}${"drawingBufferFormat"in kk?` format 0x${Number(kk.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in kk?` ${String(kk.drawingBufferColorSpace)}`:""}`), ik.push(`GL extensions ${(null!==(ek=kk.getSupportedExtensions())&&void 0!==ek?ek:[]).join(" ")}`), ik
          }(Dk)) tk(kk);
        ! function() {
          if (!zk.context) return;
          let kk = 0,
            ek = 0;
          for (const [ik, Dk] of uk) !Dk.gl.isContextLost() && Dk.gl.isProgram(ik) && (ek++, Fe(Dk.gl, ik, Dk), null !== Dk.terrain && kk++);
          tk(`programs: ${ek} live of ${uk.length} linked, ${kk} packed terrain; CPU page copies ${Math.round(zk.shadowBytes/1048576)} MiB (${zk.uncopied} over budget)`)
        }()
      }
    }

    function yi(kk) {
      return Pi ??= async function(kk) {
        li(), "webgpu" === fi ? (Yi(), "1" === bi.slotCheck && tk("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), bi.slotCheck = "1", await
          function(kk) {
            if (null !== ce) return Promise.resolve();
            const ek = [];
            return ce = ek, new Promise((ik => {
              setTimeout((() => {
                ce = null, tk(`WebGPU draw ranges (${kk}): ${ek.length} terrain draws recorded in a second (first ${Me}; bundles replay without new ones)`);
                for (const kk of ek) tk(kk);
                ik()
              }), 1e3)
            }))
          }(kk), await async function() {
            if (await (0, ze.i)(bi, "slotCheck", ["1"], ii, Di), "1" === bi.slotCheck) return void tk(`slot check: no answer in ${ii} ms (only the storage fetch has one; a later answer logs on its own)`);
            Yi()
          }()) : await re(kk);
        tk(`check (${kk}) done: bloxdDebug.save() downloads it all`)
      }(kk).catch((ek => {
        tk(`check (${kk}) failed: ${String(ek)}`)
      })).finally((() => {
        Pi = null
      })), Pi
    }

    function Yi() {
      void 0 !== bi.slotCheck && "1" !== bi.slotCheck && (tk(bi.slotCheck), delete bi.slotCheck)
    }

    function Li() {
      const kk = kk => mi ? (kk / mi).toFixed(1) : "0",
        ek = function() {
          const kk = Te;
          return Te = {
            draws: 0,
            faces: 0
          }, kk
        }(),
        ik = function() {
          const kk = pe;
          return pe = {
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
          }, kk
        }(),
        Dk = function() {
          const kk = ye;
          return ye = {
            buffer: 0,
            texture: 0
          }, kk
        }();
      Yi(), ("webgpu" === fi ? ek.draws : ik.inst.draws + ik.tex.draws) > 0 && Mi();
      const fk = "webgpu" === fi ? [`terrain ${kk(ek.draws)} draws ${kk(ek.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((kk => ik[kk].draws > 0)).map((ek => `${ek} ${kk(ik[ek].draws)} draws ${kk(ik[ek].faces)} faces a frame`));
      tk(`${mi} frames: ${fk.join(", ")||"no draws"}; uploaded ${Math.round(Dk.buffer/1024)} KiB to buffers, ${Math.round(Dk.texture/1024)} KiB to data textures`), mi = 0
    }
  },
  4637: (kk, ek, ik) => {
    function Dk(kk) {
      if (null === kk) return "backend: none picked (no renderer build)";
      const ek = kk.adapter ? `${kk.adapter.vendor}/${kk.adapter.architecture}` : "none";
      return `backend ${kk.backend}: reason ${kk.reason}, source ${kk.source}, adapter ${ek}`
    }
    ik.d(ek, {
      d: () => Dk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);