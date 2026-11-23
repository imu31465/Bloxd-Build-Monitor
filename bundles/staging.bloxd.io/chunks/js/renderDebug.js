export const id = 48;
export const ids = [48];
export const modules = {
  4684: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Lk
    });
    var Xk = Ik(25),
      Tk = Ik(34),
      ik = Ik(1270),
      yk = Ik(2744);
    const lk = 3e4,
      ak = 1e3;

    function qk() {
      return "visible" === document.visibilityState && "inGame" === Xk.d.get("gameState") && (0, ik.n)()
    }

    function Lk(kk, Fk) {
      (0, yk.p)() || function(kk, Fk, Ik) {
        let Xk = 0;
        const Tk = setInterval((() => {
          Fk() && (Xk += ak, Xk >= kk && (clearInterval(Tk), Ik()))
        }), ak)
      }(lk, qk, (() => {
        Fk().then((() => {
          kk(`saved for the player after ${lk/1e3} s of play`), (0, yk.y)(), Tk.g.GL("chat", {
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
  4676: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      installRenderDebug: () => ZI,
      renderDebugPlayable: () => eI,
      startRenderDebug: () => jI,
      waitForDraw: () => wI
    });
    var Xk = Ik(1759),
      Tk = Ik(4684),
      ik = Ik(2744);
    const yk = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function lk(kk) {
      return 7 & kk
    }

    function ak(kk) {
      return kk >>> 11 & 1
    }

    function qk(kk) {
      return [1 + (kk >>> 18 & 63), 1 + (kk >>> 24 & 63)]
    }

    function Lk(kk, Fk) {
      const [Ik, , Xk] = kk, Tk = lk(Xk), ik = function(kk, Fk, Ik) {
        return Fk + (1 === (22 >>> kk & 1) ? 4 - Ik : Ik) & 3
      }(Tk, ak(Xk), Fk), yk = Tk >>> 1, [Lk, tk] = qk(Ik), Zk = 1 === ik || 2 === ik ? Lk : 0, jk = ik >= 2 ? tk : 0, ek = [63 & Ik, Ik >>> 6 & 63, Ik >>> 12 & 63];
      return ek[2 === yk ? 0 : 2] += Zk, ek[1 === yk ? 0 : 1] += jk, ek
    }

    function tk(kk) {
      const Fk = Math.max(...qk(kk[0]));
      return 1 === Fk ? "1" : Fk <= 4 ? "2-4" : Fk <= 16 ? "5-16" : "17-64"
    }
    const Zk = 16;

    function jk(kk) {
      let Fk = 2166136261;
      for (let Ik = 0; Ik < kk.length; Ik++) Fk = Math.imul(Fk ^ kk[Ik], 16777619);
      return Fk >>> 0
    }

    function ek(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const Xk = Math.max(0, Fk - Ik),
        Tk = Math.min(kk.length, Fk + Ik),
        ik = [];
      for (let yk = Xk; yk < Tk; yk++) {
        const Ik = kk[yk].toString(16).padStart(2, "0");
        ik.push(yk === Fk ? `[${Ik}]` : Ik)
      }
      return ik.join(" ")
    }
    const wk = {
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
      Hk = "_vs2fs_location0";
    const Jk = 0,
      xk = 4,
      Pk = 6,
      Kk = [0, 1, 2, 0, 2, 3],
      Qk = 2048,
      sk = 4,
      Vk = 256,
      zk = 64,
      Sk = 268435456,
      vk = 65536,
      Ek = /^#version [^\n]*\/\/ program (\S+)$/m;

    function Ok(kk) {
      return null === kk.name ? `#${kk.id}` : `#${kk.id} ${kk.name}`
    }
    const nk = [],
      Gk = new WeakMap,
      pk = new WeakMap,
      uk = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let bk = 1;
    const Rk = new WeakMap;

    function Uk(kk) {
      if (null === kk) return 0;
      let Fk = Rk.get(kk);
      return void 0 === Fk && (Fk = bk++, Rk.set(kk, Fk)), Fk
    }
    class Ck {
      constructor(kk, Fk) {
        this.print = kk, this.now = Fk, this.shown = 0, this.eq = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.Gj = [], this.dropped = 0
      }
      line(kk) {
        const Fk = this.now();
        if (Fk - this.second >= 1e3 && (this.second = Fk, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.eq++, void this.store(kk);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${kk} (the last line here: the rest go to bloxdDebug.save())` : kk)
      }
      keep(kk) {
        this.sections++, this.store(kk)
      }
      store(kk) {
        this.Gj.push(`${new Date(Date.now()).toISOString()} ${kk}`), this.Gj.length > 2e4 && (this.Gj.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.eq} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.Gj].join("\n")
      }
    }
    let Nk = null;

    function ck() {
      if (null === Nk) {
        const kk = new Ck((kk => {
          (0, ik.g)("render", kk)
        }), (() => performance.now()));
        (0, ik.f)("render", (() => kk.dump())), Nk = kk
      }
      return Nk
    }

    function Wk(kk) {
      ck().line(kk)
    }

    function fk(kk) {
      ck().keep(kk)
    }

    function Bk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return kk.length <= Fk ? kk : `${kk.slice(0,Fk)}... (${kk.length-Fk} more characters)`
    }

    function dk(kk, Fk, Ik, Xk, Tk, ik) {
      const yk = uk.pendingCheck;
      if (null === yk) return;
      const lk = "undefined" !== typeof WebGL2RenderingContext && kk instanceof WebGL2RenderingContext,
        ak = {
          gl: kk,
          program: Ik,
          call: Xk,
          nZ: Tk,
          instances: ik,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (yk.draws.push(ak), lk) try {
        const Xk = function(kk) {
          const Fk = [],
            Ik = new Map,
            Xk = Math.min(16, kk.getParameter(wk.MAX_VERTEX_ATTRIBS));
          for (let Tk = 0; Tk < Xk; Tk++) {
            if (!kk.getVertexAttrib(Tk, wk.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const Xk = kk.getVertexAttrib(Tk, wk.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              ik = kk.getVertexAttribOffset(Tk, wk.VERTEX_ATTRIB_ARRAY_POINTER),
              yk = kk.getVertexAttrib(Tk, wk.VERTEX_ATTRIB_ARRAY_STRIDE),
              lk = kk.getVertexAttrib(Tk, wk.VERTEX_ATTRIB_ARRAY_SIZE),
              ak = kk.getVertexAttrib(Tk, wk.VERTEX_ATTRIB_ARRAY_TYPE),
              qk = "VERTEX_ATTRIB_ARRAY_INTEGER" in kk && kk.getVertexAttrib(Tk, wk.VERTEX_ATTRIB_ARRAY_INTEGER),
              Lk = "VERTEX_ATTRIB_ARRAY_DIVISOR" in kk ? kk.getVertexAttrib(Tk, wk.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            Ik.set(Tk, {
              buffer: Xk,
              offset: ik,
              stride: yk
            }), Fk.push(`@${Tk} buf#${Uk(Xk)} +${ik} stride ${yk} ${lk}x0x${ak.toString(16)}${qk?" int":""} div ${Lk}`)
          }
          return {
            lines: Fk,
            byLocation: Ik
          }
        }(kk);
        if (ak.attributes = Xk.lines, "inst" === Ik.terrain) {
          const {
            group: Tk,
            chunk: lk
          } = function(kk, Fk, Ik) {
            const Xk = Fk.get(Pk),
              Tk = kk.getVertexAttrib(Pk, wk.CURRENT_VERTEX_ATTRIB),
              ik = Xk ? `+${Xk.offset}` : Tk ? Array.from(Tk).slice(0, 3).join(",") : "?";
            let yk = Ik.groups.get(ik);
            return void 0 === yk && (yk = Ik.groups.size, Ik.groups.set(ik, yk)), {
              group: yk,
              chunk: ik
            }
          }(kk, Xk.byLocation, yk);
          ak.group = Tk, ak.chunk = lk;
          for (const kk of [Jk, xk]) {
            var qk;
            const Fk = null === (qk = Xk.byLocation.get(kk)) || void 0 === qk ? void 0 : qk.buffer;
            Fk && ak.pages.push({
              kind: "buf",
              buffer: Fk
            })
          }! function(kk, Fk, Ik, Xk, Tk, ik, yk) {
            const lk = Xk.get(Jk),
              ak = yk.parts.get(ik);
            if (void 0 === ak && yk.parts.size >= sk) return;
            const qk = Math.min(Tk, zk, Vk - (null !== ak && void 0 !== ak ? ak : 0));
            if (null === lk || void 0 === lk || !lk.buffer || qk <= 0) return;
            const Lk = Yk(kk, Fk, Ik);
            if (!Lk) return;
            const tk = lk.stride || 12,
              Zk = rk(kk, lk.buffer, lk.offset, (qk - 1) * tk + 12),
              jk = new DataView(Zk.buffer),
              ek = function(kk, Fk) {
                const Ik = function(kk) {
                    const Fk = kF.get(kk);
                    if (void 0 !== Fk && (null === Fk || kk.isProgram(Fk))) return Fk;
                    uk.inProbe = !0;
                    let Ik = null;
                    try {
                      Ik = Ak(kk, Dk, Mk, "fed", "the record feed")
                    } finally {
                      uk.inProbe = !1
                    }
                    return kF.set(kk, Ik), Ik
                  }(kk),
                  Xk = Ik ? hk(kk, Ik, Fk, (() => {
                    kk.drawArraysInstanced(wk.POINTS, 0, 1, Fk)
                  }), "decode probe input (the record feed)") : null;
                return Xk ? new Uint32Array(Xk.buffer) : null
              }(kk, qk);
            ek || yk.fed.failed++;
            const Hk = hk(kk, Lk, 4 * qk, (() => {
              kk.drawArraysInstanced(wk.POINTS, 0, 4, qk)
            }));
            if (!Hk) return;
            yk.parts.set(ik, (null !== ak && void 0 !== ak ? ak : 0) + qk);
            for (let wk = 0; wk < qk; wk++) {
              const kk = wk * tk,
                Fk = [jk.getUint32(kk, !0), jk.getUint32(kk + 4, !0), jk.getUint32(kk + 8, !0)],
                Ik = ek ? [ek[3 * wk], ek[3 * wk + 1], ek[3 * wk + 2]] : Fk;
              ek && (yk.fed.records++, Ik.some(((kk, Ik) => kk !== Fk[Ik])) && (yk.fed.differing++, yk.fed.first.length < 8 && yk.fed.first.push(`part ${ik} instance ${wk}: fed ${Ik.map(iF).join(" ")} buffer ${Fk.map(iF).join(" ")}`)));
              for (let Xk = 0; Xk < 4; Xk++) {
                const kk = 3 * (4 * wk + Xk);
                yk.vertices.push({
                  record: Ik,
                  slot: Xk,
                  group: ik,
                  gpu: [Hk[kk], Hk[kk + 1], Hk[kk + 2]]
                })
              }
            }
          }(kk, Fk, Ik, Xk.byLocation, ik, Tk, yk)
        } else {
          const Xk = FF(kk, Fk, 16),
            ik = FF(kk, Fk, 8);
          for (const kk of [Xk, ik]) kk && ak.pages.push({
            kind: "tex",
            texture: kk
          });
          Xk && function(kk, Fk, Ik, Xk, Tk, ik) {
            if (ik.parts.size >= sk) return;
            const yk = Yk(kk, Fk, Ik);
            if (!yk) return;
            let lk = 6 * Vk;
            const ak = [];
            for (const [jk, ek] of Tk) {
              const kk = Math.min(ek, lk, Math.max(6, 6 * Math.floor(Vk / Tk.length)));
              kk > 0 && (ak.push([jk, kk]), lk -= kk)
            }
            const qk = ak.reduce(((kk, Fk) => {
                let [, Ik] = Fk;
                return kk + Ik
              }), 0),
              Lk = hk(kk, yk, qk, (() => {
                for (const [Fk, Ik] of ak) kk.drawArrays(wk.POINTS, Fk, Ik)
              }));
            if (!Lk) return;
            let tk = 0;
            for (const [jk, ek] of ak) {
              const Fk = Math.floor(jk / 6),
                Ik = Math.floor((jk + ek - 1) / 6) - Fk + 1,
                Tk = IF(kk, Xk, Qk, Fk, Ik);
              for (let kk = jk; kk < jk + ek; kk++, tk++) {
                var Zk;
                const Ik = 4 * (Math.floor(kk / 6) - Fk),
                  Xk = [Tk[Ik], Tk[Ik + 1], Tk[Ik + 2]];
                ik.parts.set(Tk[Ik + 3], (null !== (Zk = ik.parts.get(Tk[Ik + 3])) && void 0 !== Zk ? Zk : 0) + (kk % 6 === 0 ? 1 : 0)), ik.vertices.push({
                  record: Xk,
                  slot: Kk[kk % 6],
                  group: Tk[Ik + 3],
                  gpu: [Lk[3 * tk], Lk[3 * tk + 1], Lk[3 * tk + 2]]
                })
              }
            }
          }(kk, Fk, Ik, Xk, Tk, yk)
        }
      } catch (Lk) {
        Wk(`decode probe failed on program ${Ok(Ik)}: ${String(Lk)}`)
      }
    }

    function Yk(kk, Fk, Ik) {
      if (void 0 !== Ik.probe) return Ik.probe && gk(kk, Fk, Ik.probe), Ik.probe;
      Ik.probe = null, uk.inProbe = !0;
      try {
        Ik.probe = function(kk, Fk) {
          return Ak(kk, (Ik = Fk.vertex, Ik.replace(`\nvec3 ${Hk} = vec3(0);\n`, `\nout vec3 ${Hk};\n`)), Fk.fragment, Hk, `program ${Ok(Fk)}'s twin`);
          var Ik
        }(kk, Ik)
      } finally {
        uk.inProbe = !1
      }
      return Ik.probe && gk(kk, Fk, Ik.probe), Ik.probe
    }

    function Ak(kk, Fk, Ik, Xk, Tk) {
      const ik = [kk.createShader(wk.VERTEX_SHADER), kk.createShader(wk.FRAGMENT_SHADER)],
        yk = kk.createProgram();
      if (!yk || !ik[0] || !ik[1]) return null;
      kk.shaderSource(ik[0], Fk), kk.shaderSource(ik[1], Ik);
      for (const ak of ik) kk.compileShader(ak), kk.attachShader(yk, ak);
      kk.transformFeedbackVaryings(yk, [Xk], wk.INTERLEAVED_ATTRIBS), kk.linkProgram(yk);
      for (const ak of ik) kk.deleteShader(ak);
      var lk;
      return kk.getProgramParameter(yk, wk.LINK_STATUS) ? yk : (Wk(`decode probe: ${Tk} failed to link: ${Bk(null!==(lk=kk.getProgramInfoLog(yk))&&void 0!==lk?lk:"",300)}`), kk.deleteProgram(yk), null)
    }

    function gk(kk, Fk, Ik) {
      const Xk = kk.getProgramParameter(Fk, wk.ACTIVE_UNIFORM_BLOCKS);
      for (let lk = 0; lk < Xk; lk++) {
        const Xk = kk.getActiveUniformBlockName(Fk, lk),
          Tk = null === Xk ? wk.INVALID_INDEX : kk.getUniformBlockIndex(Ik, Xk);
        Tk !== wk.INVALID_INDEX && kk.uniformBlockBinding(Ik, Tk, kk.getActiveUniformBlockParameter(Fk, lk, wk.UNIFORM_BLOCK_BINDING))
      }
      const Tk = kk.getParameter(wk.CURRENT_PROGRAM);
      kk.useProgram(Ik);
      const ik = kk.getProgramParameter(Fk, wk.ACTIVE_UNIFORMS),
        yk = kk.getActiveUniforms(Fk, [...Array(ik).keys()], wk.UNIFORM_BLOCK_INDEX);
      for (let lk = 0; lk < ik; lk++) {
        const Xk = kk.getActiveUniform(Fk, lk);
        if (!Xk || -1 !== yk[lk]) continue;
        const Tk = Xk.name.replace(/\[0\]$/, "");
        for (let ik = 0; ik < Xk.size; ik++) {
          const yk = Xk.size > 1 ? `${Tk}[${ik}]` : Xk.name,
            lk = kk.getUniformLocation(Fk, yk),
            ak = kk.getUniformLocation(Ik, yk);
          lk && ak && mk(kk, ak, Xk.type, kk.getUniform(Fk, lk))
        }
      }
      kk.useProgram(Tk)
    }

    function mk(kk, Fk, Ik, Xk) {
      const Tk = ArrayBuffer.isView(Xk) ? Array.from(Xk) : [Number(Xk)];
      switch (Ik) {
        case wk.FLOAT:
          return void kk.uniform1f(Fk, Tk[0]);
        case wk.FLOAT_VEC2:
          return void kk.uniform2fv(Fk, Tk);
        case wk.FLOAT_VEC3:
          return void kk.uniform3fv(Fk, Tk);
        case wk.FLOAT_VEC4:
          return void kk.uniform4fv(Fk, Tk);
        case wk.FLOAT_MAT3:
          return void kk.uniformMatrix3fv(Fk, !1, Tk);
        case wk.FLOAT_MAT4:
          return void kk.uniformMatrix4fv(Fk, !1, Tk);
        case wk.UNSIGNED_INT:
          return void kk.uniform1ui(Fk, Tk[0]);
        case wk.UNSIGNED_INT_VEC2:
          return void kk.uniform2uiv(Fk, Tk);
        case wk.UNSIGNED_INT_VEC3:
          return void kk.uniform3uiv(Fk, Tk);
        case wk.UNSIGNED_INT_VEC4:
          return void kk.uniform4uiv(Fk, Tk);
        case wk.INT_VEC2:
          return void kk.uniform2iv(Fk, Tk);
        case wk.INT_VEC3:
          return void kk.uniform3iv(Fk, Tk);
        case wk.INT_VEC4:
          return void kk.uniform4iv(Fk, Tk);
        default:
          kk.uniform1i(Fk, Tk[0])
      }
    }

    function hk(kk, Fk, Ik, Xk) {
      let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const ik = kk.getParameter(wk.CURRENT_PROGRAM),
        yk = kk.getParameter(wk.TRANSFORM_FEEDBACK_BINDING),
        lk = kk.getParameter(wk.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        ak = kk.getParameter(wk.COPY_READ_BUFFER_BINDING),
        qk = kk.isEnabled(wk.RASTERIZER_DISCARD),
        Lk = kk.createTransformFeedback(),
        tk = kk.createBuffer();
      uk.inProbe = !0;
      try {
        const ik = kk.getError();
        ik !== wk.NO_ERROR && Wk(`GL error 0x${ik.toString(16)} pending before the decode probe (the renderer's)`), kk.useProgram(Fk), kk.bindTransformFeedback(wk.TRANSFORM_FEEDBACK, Lk), kk.bindBuffer(wk.TRANSFORM_FEEDBACK_BUFFER, tk), kk.bufferData(wk.TRANSFORM_FEEDBACK_BUFFER, 12 * Ik, wk.STREAM_READ), kk.bindBufferBase(wk.TRANSFORM_FEEDBACK_BUFFER, 0, tk), kk.enable(wk.RASTERIZER_DISCARD), kk.beginTransformFeedback(wk.POINTS), Xk(), kk.endTransformFeedback(), kk.bindBufferBase(wk.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const yk = kk.getError();
        if (yk !== wk.NO_ERROR) return Wk(`${Tk}: GL error 0x${yk.toString(16)} on the feedback draw`), null;
        const lk = new Float32Array(3 * Ik);
        return kk.bindBuffer(wk.COPY_READ_BUFFER, tk), kk.getBufferSubData(wk.COPY_READ_BUFFER, 0, lk), lk
      } finally {
        qk || kk.disable(wk.RASTERIZER_DISCARD), kk.bindTransformFeedback(wk.TRANSFORM_FEEDBACK, yk), kk.bindBuffer(wk.TRANSFORM_FEEDBACK_BUFFER, lk), kk.bindBuffer(wk.COPY_READ_BUFFER, ak), kk.deleteTransformFeedback(Lk), kk.deleteBuffer(tk), kk.useProgram(ik), uk.inProbe = !1
      }
    }

    function rk(kk, Fk, Ik, Xk) {
      const Tk = kk.getParameter(wk.COPY_READ_BUFFER_BINDING),
        ik = new Uint8Array(Xk);
      return kk.bindBuffer(wk.COPY_READ_BUFFER, Fk), kk.getBufferSubData(wk.COPY_READ_BUFFER, Ik, ik), kk.bindBuffer(wk.COPY_READ_BUFFER, Tk), ik
    }
    const Dk = `#version 300 es\nlayout(location = ${Jk}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      Mk = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      kF = new WeakMap;

    function FF(kk, Fk, Ik) {
      const Xk = kk.getProgramParameter(Fk, wk.ACTIVE_UNIFORMS),
        Tk = kk.getParameter(wk.ACTIVE_TEXTURE);
      try {
        for (let Tk = 0; Tk < Xk; Tk++) {
          const Xk = kk.getActiveUniform(Fk, Tk);
          if ((null === Xk || void 0 === Xk ? void 0 : Xk.type) !== wk.UNSIGNED_INT_SAMPLER_2D) continue;
          const ik = kk.getUniformLocation(Fk, Xk.name),
            yk = ik ? kk.getUniform(Fk, ik) : -1;
          if (yk < 0) continue;
          kk.activeTexture(wk.TEXTURE0 + yk);
          const lk = kk.getParameter(wk.TEXTURE_BINDING_2D);
          if (lk && pk.get(lk) === Ik) return lk
        }
        return null
      } finally {
        kk.activeTexture(Tk)
      }
    }

    function IF(kk, Fk, Ik, Xk, Tk) {
      const ik = new Uint32Array(4 * Tk),
        yk = kk.getParameter(wk.READ_FRAMEBUFFER_BINDING),
        lk = kk.createFramebuffer();
      kk.bindFramebuffer(wk.READ_FRAMEBUFFER, lk), kk.framebufferTexture2D(wk.READ_FRAMEBUFFER, wk.COLOR_ATTACHMENT0, wk.TEXTURE_2D, Fk, 0);
      try {
        let Fk = 0;
        for (; Fk < Tk;) {
          const yk = Xk + Fk,
            lk = yk % Ik,
            ak = Math.min(Tk - Fk, Ik - lk);
          kk.readPixels(lk, Math.floor(yk / Ik), ak, 1, wk.RGBA_INTEGER, wk.UNSIGNED_INT, ik.subarray(4 * Fk, 4 * (Fk + ak))), Fk += ak
        }
      } finally {
        kk.bindFramebuffer(wk.READ_FRAMEBUFFER, yk), kk.deleteFramebuffer(lk)
      }
      return ik
    }

    function XF(kk, Fk, Ik) {
      let Xk = 0,
        Tk = 0;
      for (let ak = 0; ak < Fk.bytes.length; ak += vk) {
        Xk++;
        const kk = Math.min(ak + vk, Fk.bytes.length);
        jk(Fk.bytes.subarray(ak, kk)) !== jk(Ik.subarray(ak, kk)) && Tk++
      }
      const ik = `${kk} ${Fk.bytes.length} B cpu ${jk(Fk.bytes).toString(16)} gpu ${jk(Ik).toString(16)}, ${Tk}/${Xk} blocks differ${Fk.missed?`, ${Fk.missed} GPU-side writes uncopied`:""}`;
      if (0 === Tk) return ik;
      const {
        count: yk,
        offsets: lk
      } = function(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const Xk = Math.min(kk.length, Fk.length);
        let Tk = Math.abs(kk.length - Fk.length);
        const ik = [];
        for (let yk = 0; yk < Xk; yk++) kk[yk] !== Fk[yk] && (Tk++, ik.length < Ik && ik.push(yk));
        return {
          count: Tk,
          offsets: ik
        }
      }(Fk.bytes, Ik);
      return fk([`${ik}: ${yk} bytes differ`, ...lk.map((kk => `  +${kk}: cpu ${ek(Fk.bytes,kk)} | gpu ${ek(Ik,kk)}`))].join("\n")), `${ik}: ${yk} bytes differ, first at ${lk.join(", ")} (context in the saved file)`
    }

    function TF(kk) {
      if (0 === kk.vertices.length) return void Wk(`decode probe (${kk.reason}): no terrain draw probed (${kk.draws.length} seen)`);
      const Fk = function(kk) {
          const Fk = new Map;
          for (const Xk of kk) {
            const kk = Fk.get(Xk.group);
            kk ? kk.push(Xk) : Fk.set(Xk.group, [Xk])
          }
          const Ik = {
            vertices: kk.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [Xk, Tk] of Fk) {
            const kk = new Map,
              Fk = Tk.map((Fk => {
                const Ik = Lk(Fk.record, Fk.slot),
                  Xk = [Fk.gpu[0] - Ik[0], Fk.gpu[1] - Ik[1], Fk.gpu[2] - Ik[2]],
                  Tk = Xk.map((kk => Math.round(64 * kk))).join(","),
                  ik = kk.get(Tk);
                return ik ? ik.count++ : kk.set(Tk, {
                  count: 1,
                  offset: Xk
                }), Ik
              }));
            let ik = [0, 0, 0],
              yk = 0;
            for (const Ik of kk.values()) Ik.count > yk && (yk = Ik.count, ik = Ik.offset);
            Ik.translations.set(Xk, ik), Tk.forEach(((kk, Xk) => {
              var Tk;
              const yk = [Fk[Xk][0] + ik[0], Fk[Xk][1] + ik[1], Fk[Xk][2] + ik[2]];
              if (yk.every(((Fk, Ik) => {
                  return Xk = kk.gpu[Ik], Tk = Fk, Math.abs(Xk - Tk) <= Math.max(.001, 1e-6 * Math.abs(Tk));
                  var Xk, Tk
                }))) return;
              Ik.mismatches++, Ik.byDirection[lk(kk.record[2])]++, Ik.byDiagonal[ak(kk.record[2])]++;
              const qk = tk(kk.record);
              Ik.byBand[qk] = (null !== (Tk = Ik.byBand[qk]) && void 0 !== Tk ? Tk : 0) + 1, Ik.first.length < Zk && Ik.first.push({
                ...kk,
                expected: yk
              })
            }))
          }
          return Ik
        }(kk.vertices),
        Ik = Fk.byDirection.map(((kk, Fk) => kk ? `${yk[Fk]} ${kk}` : "")).filter(Boolean).join(" "),
        Xk = Object.entries(Fk.byBand).map((kk => {
          let [Fk, Ik] = kk;
          return `${Fk}: ${Ik}`
        })).join(" ");
      if (Wk(`decode probe (${kk.reason}): ${Fk.mismatches}/${Fk.vertices} vertices differ from the CPU decode over ${kk.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (Fk.mismatches ? ` by direction [${Ik}] diagonal [0: ${Fk.byDiagonal[0]} 1: ${Fk.byDiagonal[1]}] extent [${Xk}]` : "")), kk.fed.records > 0 || kk.fed.failed > 0) {
        Wk(`decode probe input: ${kk.fed.differing}/${kk.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (kk.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (kk.fed.failed ? `; the feed failed on ${kk.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const Fk of kk.fed.first) Wk(`  ${Fk}`)
      }
      for (const Tk of Fk.first) {
        const [kk, Fk, Ik] = Tk.record;
        Wk(`  mismatch part ${Tk.group} r0 ${kk.toString(16)} r1 ${Fk.toString(16)} r2 ${Ik.toString(16)} slot ${Tk.slot} (${yk[lk(Ik)]}): expected ${Tk.expected.map(yF).join(",")} gpu ${Tk.gpu.map(yF).join(",")}`)
      }
      fk(`decode probe translations: ${[...Fk.translations].map((kk=>{let[Fk,Ik]=kk;return`${Fk}: ${Ik.map(yF).join(",")}`})).join("; ")}`)
    }

    function iF(kk) {
      return kk.toString(16)
    }

    function yF(kk) {
      return Number.isInteger(kk) ? String(kk) : kk.toFixed(3)
    }

    function lF(kk) {
      return null !== uk.pendingCheck ? Promise.resolve() : new Promise((Fk => {
        let Ik = !1;
        const Xk = {
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
        uk.pendingCheck = Xk;
        const Tk = () => {
            uk.pendingCheck = null;
            try {
              ! function(kk) {
                Wk(`draw ranges (${kk.reason}): ${kk.terrainDraws} terrain draws in the frame, the first ${kk.draws.length} here`);
                for (const Fk of kk.draws) {
                  const kk = Fk.nZ.slice(0, 8).map((kk => {
                      let [Fk, Ik] = kk;
                      return `${Fk}+${Ik}`
                    })).join(" "),
                    Ik = Fk.nZ.length > 8 ? ` (+${Fk.nZ.length-8} ranges)` : "";
                  Wk(`  ${Ok(Fk.program)} ${Fk.program.terrain} ${Fk.call} ${kk}${Ik} x${Fk.instances}${Fk.group>=0?` part ${Fk.group} chunk ${Fk.chunk}`:""} | ${Fk.attributes.join(" | ")}`)
                }
              }(Xk), TF(Xk);
              Xk.draws.some((kk => "undefined" !== typeof WebGL2RenderingContext && kk.gl instanceof WebGL2RenderingContext)) || 0 === Xk.draws.length ? function(kk) {
                const Fk = [],
                  Ik = new Map;
                for (const Xk of kk)
                  if ("undefined" !== typeof WebGL2RenderingContext && Xk.gl instanceof WebGL2RenderingContext)
                    for (const kk of Xk.pages) Ik.set("buf" === kk.kind ? kk.buffer : kk.texture, {
                      page: kk,
                      gl: Xk.gl
                    });
                for (const [Xk, {
                    page: Tk,
                    gl: ik
                  }] of Ik) {
                  const kk = Gk.get(Xk);
                  if (!kk) {
                    Fk.push(`${Tk.kind}#${Uk(Xk)}: no CPU copy (${uk.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === Tk.kind) {
                    Fk.push(XF(`buf#${kk.id}`, kk, rk(ik, Tk.buffer, 0, kk.bytes.length)));
                    continue
                  }
                  const Ik = IF(ik, Tk.texture, kk.width, 0, kk.width * kk.height),
                    yk = 16 === kk.texelBytes ? new Uint8Array(Ik.buffer) : new Uint8Array(new Uint16Array(Ik).buffer);
                  Fk.push(XF(`tex#${kk.id} (${16===kk.texelBytes?"records":"light"})`, kk, yk))
                }
                for (const Xk of Fk) Wk(`page readback ${Xk}`)
              }(Xk.draws) : Wk("page readback: none on WebGL1 (no buffer readback)")
            } catch (kk) {
              Wk(`check failed: ${String(kk)}`)
            }
            Fk()
          },
          ik = () => {
            if (Xk.draws.length > 0 && !Ik) return Ik = !0, void setTimeout(Tk, 0);
            Ik || requestAnimationFrame(ik)
          };
        requestAnimationFrame(ik), setTimeout((() => {
          Ik || (Ik = !0, Tk())
        }), 5e3)
      }))
    }
    var aF = Ik(4692);
    const qF = 20,
      LF = 24,
      tF = Reflect.apply;

    function ZF(kk, Fk, Ik) {
      if (!kk) return;
      const Xk = kk[Fk];
      if ("function" === typeof Xk) {
        const Tk = Ik(Xk);
        kk[Fk] = Tk, (0, aF.z)(Tk, Xk)
      }
    }
    let jF = !1;
    const eF = new WeakMap,
      wF = new WeakMap,
      HF = new WeakMap,
      JF = {
        gl: 0,
        lost: 0
      };
    let xF = {
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
      PF = {
        buffer: 0,
        texture: 0
      },
      KF = 0;

    function QF(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (kk instanceof ArrayBuffer) return new Uint8Array(kk, Fk, Ik || void 0);
      if (!ArrayBuffer.isView(kk)) return null;
      const Xk = "BYTES_PER_ELEMENT" in kk ? kk.BYTES_PER_ELEMENT : 1,
        Tk = kk.byteOffset + Fk * Xk,
        ik = Ik ? Ik * Xk : kk.byteLength - Fk * Xk;
      return new Uint8Array(kk.buffer, Tk, Math.max(0, ik))
    }

    function sF(kk, Fk) {
      const Ik = function(kk) {
        switch (kk) {
          case wk.ARRAY_BUFFER:
            return wk.ARRAY_BUFFER_BINDING;
          case wk.ELEMENT_ARRAY_BUFFER:
            return wk.ELEMENT_ARRAY_BUFFER_BINDING;
          case wk.COPY_READ_BUFFER:
            return wk.COPY_READ_BUFFER_BINDING;
          case wk.COPY_WRITE_BUFFER:
            return wk.COPY_WRITE_BUFFER_BINDING;
          case wk.UNIFORM_BUFFER:
            return wk.UNIFORM_BUFFER_BINDING;
          case wk.PIXEL_UNPACK_BUFFER:
            return wk.PIXEL_UNPACK_BUFFER_BINDING;
          case wk.TRANSFORM_FEEDBACK_BUFFER:
            return wk.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(Fk);
      return Ik ? kk.getParameter(Ik) : null
    }

    function VF(kk) {
      const Fk = Gk.get(kk);
      Fk && (uk.shadowBytes -= Fk.bytes.length, Gk.delete(kk))
    }

    function zF(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      VF(kk), uk.shadowBytes + Fk > Sk ? uk.uncopied++ : (uk.shadowBytes += Fk, Gk.set(kk, {
        id: Uk(kk),
        bytes: new Uint8Array(Fk),
        width: Ik,
        height: Xk,
        texelBytes: Tk,
        missed: 0
      }))
    }

    function SF(kk, Fk) {
      for (const Ik of ["deleteBuffer", "deleteTexture"]) ZF(kk, Ik, (kk => function() {
        for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
        return Ik[0] && VF(Ik[0]), tF(kk, this, Ik)
      }));
      ZF(kk, "shaderSource", (kk => function() {
        for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
        return Ik[0] && "string" === typeof Ik[1] && eF.set(Ik[0], Ik[1]), tF(kk, this, Ik)
      })), ZF(kk, "attachShader", (kk => function() {
        for (var Fk, Ik = arguments.length, Xk = new Array(Ik), Tk = 0; Tk < Ik; Tk++) Xk[Tk] = arguments[Tk];
        const ik = Xk[0],
          yk = null !== (Fk = wF.get(ik)) && void 0 !== Fk ? Fk : [];
        return yk.push(Xk[1]), wF.set(ik, yk), tF(kk, this, Xk)
      })), ZF(kk, "linkProgram", (kk => function() {
        for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
        const Tk = tF(kk, this, Ik);
        return uk.inProbe || function(kk, Fk) {
          var Ik, Xk, Tk;
          "undefined" !== typeof HTMLCanvasElement && kk.canvas instanceof HTMLCanvasElement && function(kk) {
            if (GF.has(kk)) return;
            GF.add(kk);
            for (const Fk of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) kk.addEventListener(Fk, (kk => {
              JF.lost < qF && (JF.lost++, Wk(`${Fk}${"statusMessage"in kk?`: ${String(kk.statusMessage)}`:""}`))
            }))
          }(kk.canvas);
          uk.context ??= kk;
          const ik = null !== (Ik = wF.get(Fk)) && void 0 !== Ik ? Ik : [];
          let yk = "",
            lk = "";
          for (const Lk of ik) {
            var ak;
            const kk = null !== (ak = eF.get(Lk)) && void 0 !== ak ? ak : "";
            /\bgl_Position\b/.test(kk) ? yk = kk : lk = kk
          }
          const qk = {
            id: Uk(Fk),
            name: null !== (Xk = null === (Tk = Ek.exec(yk)) || void 0 === Tk ? void 0 : Tk[1]) && void 0 !== Xk ? Xk : null,
            gl: kk,
            vertex: yk,
            fragment: lk,
            terrain: vF(yk),
            checked: !1,
            firstDraw: !1
          };
          if (HF.set(Fk, qk), nk.push([Fk, qk]), null !== qk.terrain) {
            const Fk = ik.map((Fk => {
              var Ik;
              return null !== (Ik = kk.getShaderInfoLog(Fk)) && void 0 !== Ik ? Ik : ""
            })).filter((kk => "" !== kk.trim()));
            Fk.length > 0 && fk(`program ${Ok(qk)} (${qk.terrain}) shader logs:\n${Bk(Fk.join("\n"))}`)
          }
        }(this, Ik[0]), Tk
      })), ZF(kk, "bufferData", (kk => function() {
        for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
        const Tk = tF(kk, this, Ik);
        if (!uk.inProbe) {
          const kk = sF(this, Ik[0]);
          if (kk) {
            var ik, yk, lk;
            const Fk = "number" === typeof Ik[1] ? null : QF(Ik[1], null !== (ik = Ik[3]) && void 0 !== ik ? ik : 0, null !== (yk = Ik[4]) && void 0 !== yk ? yk : 0);
            var ak;
            if (zF(kk, "number" === typeof Ik[1] ? Ik[1] : null !== (lk = null === Fk || void 0 === Fk ? void 0 : Fk.length) && void 0 !== lk ? lk : 0), Fk) null === (ak = Gk.get(kk)) || void 0 === ak || ak.bytes.set(Fk)
          }
        }
        return Tk
      })), ZF(kk, "bufferSubData", (kk => function() {
        for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
        const Tk = tF(kk, this, Ik);
        if (!uk.inProbe) {
          var ik, yk;
          const kk = sF(this, Ik[0]),
            Fk = kk ? Gk.get(kk) : void 0,
            Xk = QF(Ik[2], null !== (ik = Ik[3]) && void 0 !== ik ? ik : 0, null !== (yk = Ik[4]) && void 0 !== yk ? yk : 0);
          if (Fk && Xk) {
            const kk = Ik[1];
            Fk.bytes.set(Xk.subarray(0, Math.max(0, Fk.bytes.length - kk)), kk), oF("buffer", Fk, kk, Xk.length)
          }
        }
        return Tk
      })), Fk && (ZF(kk, "copyBufferSubData", (kk => function() {
        for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
        const Tk = tF(kk, this, Ik);
        if (!uk.inProbe) {
          const [kk, Fk, Xk, Tk, ik] = Ik, yk = sF(this, kk), lk = sF(this, Fk), ak = yk ? Gk.get(yk) : void 0, qk = lk ? Gk.get(lk) : void 0;
          qk && (ak ? qk.bytes.set(ak.bytes.slice(Xk, Xk + ik), Tk) : qk.missed++)
        }
        return Tk
      })), ZF(kk, "texStorage2D", (kk => function() {
        for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
        const Tk = tF(kk, this, Ik),
          [, , ik, yk, lk] = Ik;
        if (!uk.inProbe && (ik === wk.RGBA32UI || ik === wk.RGBA16UI)) {
          const kk = this.getParameter(wk.TEXTURE_BINDING_2D),
            Fk = ik === wk.RGBA32UI ? 16 : 8;
          kk && (pk.set(kk, Fk), zF(kk, yk * lk * Fk, yk, lk, Fk))
        }
        return Tk
      })), ZF(kk, "texSubImage2D", (kk => function() {
        for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
        const Tk = tF(kk, this, Ik);
        return !uk.inProbe && Ik.length >= 9 && Ik[0] === wk.TEXTURE_2D && 0 === Ik[1] && function(kk, Fk) {
          var Ik;
          const Xk = kk.getParameter(wk.TEXTURE_BINDING_2D),
            Tk = Xk ? Gk.get(Xk) : void 0;
          if (!Tk) return;
          const [, , ik, yk, lk, ak] = Fk;
          let qk = QF(Fk[8], null !== (Ik = Fk[9]) && void 0 !== Ik ? Ik : 0);
          if (null === qk && "number" === typeof Fk[8]) {
            const Ik = sF(kk, wk.PIXEL_UNPACK_BUFFER),
              Xk = Ik ? Gk.get(Ik) : void 0;
            qk = Xk ? Xk.bytes.subarray(Fk[8]) : null
          }
          if (null === qk) return void Tk.missed++;
          const Lk = kk.getParameter(wk.UNPACK_ROW_LENGTH) || lk,
            tk = kk.getParameter(wk.UNPACK_SKIP_ROWS),
            Zk = kk.getParameter(wk.UNPACK_SKIP_PIXELS),
            jk = Tk.texelBytes;
          for (let ek = 0; ek < ak; ek++) {
            const kk = ((tk + ek) * Lk + Zk) * jk,
              Fk = ((yk + ek) * Tk.width + ik) * jk;
            Tk.bytes.set(qk.subarray(kk, kk + lk * jk), Fk)
          }
          oF("texture", Tk, (yk * Tk.width + ik) * jk, lk * ak * jk)
        }(this, Ik), Tk
      })), ZF(kk, "copyTexSubImage2D", (kk => function() {
        for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
        const Tk = Ik[0] === wk.TEXTURE_2D ? this.getParameter(wk.TEXTURE_BINDING_2D) : null,
          ik = Tk ? Gk.get(Tk) : void 0;
        return ik && ik.missed++, tF(kk, this, Ik)
      })));
      for (const Ik of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) ZF(kk, Ik, (kk => function() {
        for (var Fk = arguments.length, Xk = new Array(Fk), Tk = 0; Tk < Fk; Tk++) Xk[Tk] = arguments[Tk];
        const ik = tF(kk, this, Xk);
        return uk.inProbe || OF(this, Ik, Xk), ik
      }));
      ZF(kk, "getExtension", (kk => function() {
        for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
        const Tk = tF(kk, this, Ik);
        return Tk && "object" === typeof Tk && function(kk, Fk, Ik) {
          const Xk = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(Fk in Xk) || Ik.bloxdRenderDebug) return;
          Ik.bloxdRenderDebug = !0;
          for (const Tk of Xk[Fk]) {
            const Fk = Ik[Tk];
            "function" === typeof Fk && (Ik[Tk] = function() {
              for (var Xk = arguments.length, ik = new Array(Xk), yk = 0; yk < Xk; yk++) ik[yk] = arguments[yk];
              const lk = tF(Fk, Ik, ik);
              return uk.inProbe || OF(kk, Tk, ik), lk
            })
          }
        }(this, Ik[0], Tk), Tk
      }))
    }

    function oF(kk, Fk, Ik, Xk) {
      PF[kk] += Xk, KF < 32 && Fk.bytes.length >= 1 << 20 && (KF++, fk(`upload ${kk} #${Fk.id} +${Ik} ${Xk} B`))
    }

    function vF(kk) {
      if (!kk.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(kk) || /in uvec3 _p2vs_location0\b/.test(kk) ? "inst" : "tex"
    }

    function EF(kk, Fk, Ik) {
      var Xk;
      if (Ik.checked) return;
      Ik.checked = !0;
      const Tk = kk.getProgramParameter(Fk, wk.LINK_STATUS),
        ik = (null !== (Xk = kk.getProgramInfoLog(Fk)) && void 0 !== Xk ? Xk : "").trim();
      var yk;
      null === Ik.terrain && Tk || (Wk(`program ${Ok(Ik)} ${null!==(yk=Ik.terrain)&&void 0!==yk?yk:"other"} link ${Tk?"ok":"FAILED"}${ik?`: ${Bk(ik,300)}`:""}`), ik && fk(`program ${Ok(Ik)} link log:\n${Bk(ik)}`))
    }

    function OF(kk, Fk, Ik) {
      var Xk;
      const Tk = kk.getParameter(wk.CURRENT_PROGRAM),
        ik = Tk ? HF.get(Tk) : void 0;
      if (!Tk || !ik) return;
      const yk = null !== (Xk = ik.terrain) && void 0 !== Xk ? Xk : "other",
        {
          nZ: lk,
          instances: ak
        } = function(kk, Fk) {
          switch (kk) {
            case "drawArrays":
              return {
                nZ: [
                  [Fk[1], Fk[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                nZ: [
                  [Fk[1], Fk[2]]
                ], instances: Fk[3]
              };
            case "drawElements":
              return {
                nZ: [
                  [0, Fk[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                nZ: [
                  [0, Fk[1]]
                ], instances: Fk[4]
              };
            case "multiDrawArraysWEBGL": {
              const kk = Fk[1],
                Ik = Fk[3],
                Xk = Fk[2],
                Tk = Fk[4],
                ik = [];
              for (let yk = 0; yk < Fk[5]; yk++) ik.push([kk[Xk + yk], Ik[Tk + yk]]);
              return {
                nZ: ik,
                instances: 1
              }
            }
            default:
              return {
                nZ: [], instances: 0
              }
          }
        }(Fk, Ik),
        qk = "inst" === ik.terrain ? ak : lk.reduce(((kk, Fk) => {
          let [, Ik] = Fk;
          return kk + Ik
        }), 0) / 6;
      if (xF[yk].draws++, xF[yk].faces += qk, null === ik.terrain) return;
      if (uk.context = kk, !ik.firstDraw) {
        ik.firstDraw = !0, EF(kk, Tk, ik), nF || (nF = !0, Wk(function(kk) {
          var Fk;
          const Ik = kk.getParameter(wk.DEPTH_FUNC),
            Xk = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let Tk = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in kk && kk.getParameter(wk.DRAW_FRAMEBUFFER_BINDING)) {
            const Fk = kk;
            Tk = Fk.getFramebufferAttachmentParameter(wk.DRAW_FRAMEBUFFER, wk.DEPTH_ATTACHMENT, wk.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(Fk.getFramebufferAttachmentParameter(wk.DRAW_FRAMEBUFFER,wk.DEPTH_ATTACHMENT,wk.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(Fk.getFramebufferAttachmentParameter(wk.DRAW_FRAMEBUFFER,wk.DEPTH_ATTACHMENT,wk.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const ik = kk.getParameter(wk.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(Fk=Xk[Ik])&&void 0!==Fk?Fk:`0x${Ik.toString(16)}`} clear ${ik}${516===Ik||518===Ik?" (reverse-Z)":""}, samples ${String(kk.getParameter(wk.SAMPLES))}, ${Tk}`
        }(kk)));
        const Ik = kk.getError();
        Ik !== wk.NO_ERROR && JF.gl < qF && (JF.gl++, Wk(`GL error 0x${Ik.toString(16)} after program ${Ok(ik)}'s first terrain draw (${Fk})`))
      }
      const Lk = uk.pendingCheck;
      null !== Lk && (Lk.terrainDraws++, Lk.draws.length < LF && dk(kk, Tk, ik, Fk, lk, ak))
    }
    let nF = !1;
    const GF = new WeakSet;
    var pF = Ik(4502),
      uF = Ik(4696);
    const bF = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let RF = !1;
    const UF = new WeakSet,
      CF = new WeakMap,
      NF = new WeakMap,
      cF = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let WF = 0,
      fF = !1,
      BF = null,
      dF = {
        draws: 0,
        faces: 0
      };

    function YF(kk) {
      const Fk = globalThis[kk];
      return null === Fk || void 0 === Fk ? void 0 : Fk.prototype
    }

    function AF(kk) {
      return kk && "function" === typeof kk[Symbol.iterator] ? [...kk].sort().join(" ") : ""
    }

    function gF(kk, Fk) {
      const Ik = null !== kk && void 0 !== kk ? kk : {},
        Xk = null !== Fk && void 0 !== Fk ? Fk : Object.keys(Object.getPrototypeOf(Ik)).concat(Object.keys(Ik));
      return [...new Set(Xk)].filter((kk => "number" === typeof Ik[kk])).map((kk => `${kk} ${String(Ik[kk])}`)).join(", ")
    }

    function mF(kk, Fk) {
      var Ik;
      const Xk = null !== (Ik = Fk.vertex) && void 0 !== Ik ? Ik : {};
      if (Xk.module && UF.has(Xk.module)) {
        var Tk;
        const Ik = String(null !== (Tk = Xk.entryPoint) && void 0 !== Tk ? Tk : "");
        if (Ik.startsWith("vs_packed") && CF.set(kk, Ik), !fF) {
          var ik, yk, lk, ak, qk;
          fF = !0;
          const kk = null !== (ik = Fk.depthStencil) && void 0 !== ik ? ik : {},
            Xk = null !== (yk = Fk.multisample) && void 0 !== yk ? yk : {},
            Tk = String(null !== (lk = kk.depthCompare) && void 0 !== lk ? lk : "");
          Wk(`WebGPU terrain pipeline ${Ik}: depth ${String(null!==(ak=kk.format)&&void 0!==ak?ak:"none")} ${Tk}${Tk.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(qk=Xk.count)&&void 0!==qk?qk:1)}`)
        }
      }
    }

    function hF(kk) {
      ZF(kk, "setPipeline", (kk => function() {
        for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
        return NF.set(this, Ik[0]), tF(kk, this, Ik)
      }));
      for (const Fk of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) ZF(kk, Fk, (kk => function() {
        const Ik = NF.get(this),
          Xk = Ik ? CF.get(Ik) : void 0;
        for (var Tk = arguments.length, ik = new Array(Tk), yk = 0; yk < Tk; yk++) ik[yk] = arguments[yk];
        return void 0 !== Xk && rF(Fk, Xk, ik), tF(kk, this, ik)
      }))
    }

    function rF(kk, Fk, Ik) {
      var Xk;
      (dF.draws++, "draw" === kk || "drawIndexed" === kk) && (dF.faces += Ik[0] * (null !== (Xk = Ik[1]) && void 0 !== Xk ? Xk : 1) / 6);
      if (null !== BF && BF.length < LF) {
        const Xk = ("draw" === kk ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === kk ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((Fk, Xk) => {
          const Tk = kk.endsWith("Indirect") ? Ik[1] : Ik[Xk];
          return `${Fk} ${String(null!==Tk&&void 0!==Tk?Tk:"instances"===Fk?1:0)}`
        }));
        BF.push(`  ${Fk} ${kk} ${Xk.join(" ")}`)
      }
    }

    function DF() {
      if (RF || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      RF = !0, ZF(YF("GPU"), "requestAdapter", (kk => function() {
        for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
        return tF(kk, this, Ik).then((kk => {
          var Fk;
          kk ? function(kk) {
            var Fk;
            const Ik = null !== (Fk = kk.info) && void 0 !== Fk ? Fk : {};
            Wk(`WebGPU adapter ${["vendor","architecture","device","description"].map((kk=>{var Fk;return`${kk} "${String(null!==(Fk=Ik[kk])&&void 0!==Fk?Fk:"")}"`})).join(" ")}${kk.isFallbackAdapter?" (fallback)":""}`), Wk(`WebGPU adapter features ${AF(kk.features)}`), Wk(`WebGPU adapter limits ${gF(kk.limits,bF)}`), fk(`WebGPU adapter all limits ${gF(kk.limits,null)}`)
          }(kk) : Wk(`WebGPU requestAdapter(${JSON.stringify(null!==(Fk=Ik[0])&&void 0!==Fk?Fk:{})}) gave none`);
          return kk
        }))
      })), ZF(YF("GPUAdapter"), "requestDevice", (kk => function() {
        for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
        return tF(kk, this, Ik).then((kk => (function(kk) {
          Wk(`WebGPU device features ${AF(kk.features)}`), Wk(`WebGPU device limits ${gF(kk.limits,bF)}`), kk.addEventListener("uncapturederror", (kk => {
            if (cF.uncaptured < qF) {
              var Fk, Ik, Xk;
              cF.uncaptured++;
              const Tk = kk.error;
              Wk(`WebGPU uncaptured ${null!==(Fk=null===Tk||void 0===Tk||null===(Ik=Tk.constructor)||void 0===Ik?void 0:Ik.name)&&void 0!==Fk?Fk:"error"}: ${Bk(String(null!==(Xk=null===Tk||void 0===Tk?void 0:Tk.message)&&void 0!==Xk?Xk:""),600)}`)
            }
          }));
          const Fk = kk.lost;
          null === Fk || void 0 === Fk || Fk.then((kk => {
            var Fk;
            Wk(`WebGPU device lost (${String(kk.reason)}): ${Bk(String(null!==(Fk=kk.message)&&void 0!==Fk?Fk:""),600)}`)
          }))
        }(kk), kk)), (kk => {
          throw Wk(`WebGPU requestDevice failed: ${String(kk)}`), kk
        }))
      }));
      const kk = YF("GPUDevice");
      ZF(kk, "createShaderModule", (kk => function() {
        for (var Fk, Ik, Xk = arguments.length, Tk = new Array(Xk), ik = 0; ik < Xk; ik++) Tk[ik] = arguments[ik];
        const yk = tF(kk, this, Tk);
        return function(kk, Fk) {
          const Ik = Fk.includes("decodeQuad");
          Ik && UF.add(kk);
          const Xk = kk.getCompilationInfo;
          null === Xk || void 0 === Xk || Xk.call(kk).then((kk => {
            if (0 === kk.messages.length && !Ik) return;
            const Fk = {};
            for (const Ik of kk.messages) {
              var Xk;
              Fk[String(Ik.type)] = (null !== (Xk = Fk[String(Ik.type)]) && void 0 !== Xk ? Xk : 0) + 1
            }
            const Tk = kk.messages.map((kk => `${String(kk.type)} ${String(kk.lineNum)}:${String(kk.linePos)} ${String(kk.message)}`)).join("\n");
            cF.compile < qF && (cF.compile++, Wk(`WebGPU ${Ik?"terrain ":""}shader module compiled: ${JSON.stringify(Fk)}${Tk?` first: ${Bk(Tk.split("\n")[0],300)}`:""}`)), Tk && fk(`WebGPU shader module messages:\n${Bk(Tk)}`)
          }))
        }(yk, String(null !== (Fk = (null !== (Ik = Tk[0]) && void 0 !== Ik ? Ik : {}).code) && void 0 !== Fk ? Fk : "")), yk
      })), ZF(kk, "createRenderPipeline", (kk => function() {
        for (var Fk, Ik = arguments.length, Xk = new Array(Ik), Tk = 0; Tk < Ik; Tk++) Xk[Tk] = arguments[Tk];
        const ik = tF(kk, this, Xk);
        return mF(ik, null !== (Fk = Xk[0]) && void 0 !== Fk ? Fk : {}), ik
      })), ZF(kk, "createRenderPipelineAsync", (kk => function() {
        for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
        return tF(kk, this, Ik).then((kk => {
          var Fk;
          return mF(kk, null !== (Fk = Ik[0]) && void 0 !== Fk ? Fk : {}), kk
        }), (kk => {
          var Fk;
          throw function(kk, Fk) {
            var Ik, Xk, Tk;
            if (cF.rejected >= qF) return;
            cF.rejected++;
            const {
              reason: ik,
              message: yk
            } = null !== Fk && void 0 !== Fk ? Fk : {}, lk = String(null !== (Ik = (null !== (Xk = kk.vertex) && void 0 !== Xk ? Xk : {}).entryPoint) && void 0 !== Ik ? Ik : "");
            Wk(`WebGPU pipeline "${String(null!==(Tk=kk.label)&&void 0!==Tk?Tk:"")}" ${lk} rejected (${String(null!==ik&&void 0!==ik?ik:"no reason")}): ${Bk(String(null!==yk&&void 0!==yk?yk:Fk),600)}`)
          }(null !== (Fk = Ik[0]) && void 0 !== Fk ? Fk : {}, kk), kk
        }))
      })), ZF(YF("GPUCanvasContext"), "configure", (kk => function() {
        for (var Fk, Ik = arguments.length, Xk = new Array(Ik), Tk = 0; Tk < Ik; Tk++) Xk[Tk] = arguments[Tk];
        const ik = null !== (Fk = Xk[0]) && void 0 !== Fk ? Fk : {};
        var yk, lk;
        WF++ < 3 && Wk(`WebGPU canvas ${String(ik.format)} ${String(null!==(yk=ik.colorSpace)&&void 0!==yk?yk:"srgb")} alpha ${String(null!==(lk=ik.alphaMode)&&void 0!==lk?lk:"opaque")}`);
        return tF(kk, this, Xk)
      })), hF(YF("GPURenderPassEncoder")), hF(YF("GPURenderBundleEncoder"))
    }
    const MF = 1e4,
      kI = 6e4,
      FI = 5e3,
      II = 3e3,
      XI = 100;
    let TI = null,
      iI = !1,
      yI = {
        ...pF.e
      },
      lI = !1,
      aI = null,
      qI = 0,
      LI = () => {};
    const tI = new Promise((kk => {
      LI = kk
    }));

    function ZI() {
      var kk;
      iI || (iI = !0, yI = Object.assign(window.bloxdRenderDebug ??= {
        ...pF.e
      }, {
        faceCull: "0" === (0, ik.k)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (kk = (0, ik.k)("adrenoProbe")) && void 0 !== kk ? kk : ""
      }), Wk("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), jF || "undefined" === typeof window || (jF = !0, "undefined" !== typeof WebGL2RenderingContext && SF(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && SF(WebGLRenderingContext.prototype, !1)), DF(), (0, ik.b)("renderProbe", (() => {
        xI("console")
      })), HI(), setInterval(KI, FI))
    }

    function jI(kk) {
      var Fk, Ik;
      ZI(), TI = null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.backend) && void 0 !== Fk ? Fk : null;
      const Xk = `, renderer param ${null!==(Ik=(0,ik.k)("renderer"))&&void 0!==Ik?Ik:"none"}, faceCull ${"0"===yI.faceCull?"off (whole parts)":"on"}, adrenoProbe ${yI.adrenoProbe||"none"}`;
      Wk(`${(0,uF.b)(kk)}${null===kk?"":Xk}`)
    }

    function eI() {
      const kk = performance.now(),
        Fk = wI(tI, MF, kI).then((Fk => xI(`${Math.round((performance.now()-kk)/1e3)} s after playable${Fk?"":", no terrain drawn yet"}`)));
      (0, Tk.d)(Wk, (async () => {
        await Fk, await aI
      }))
    }
    async function wI(kk, Fk, Ik) {
      const Tk = (0, Xk.b)(Ik).then((() => !1));
      return await (0, Xk.b)(Fk), Promise.race([kk.then((() => !0)), Tk])
    }

    function HI() {
      requestAnimationFrame((() => {
        qI++, HI()
      }))
    }

    function JI() {
      var kk, Fk, Ik;
      if (lI) return;
      (lI = !0, Wk(`renderer caps ${null!==(kk=yI.caps)&&void 0!==kk?kk:"(not noted)"}; terrain fetch ${null!==(Fk=yI.fetch)&&void 0!==Fk?Fk:"(not noted)"}`), yI.adrenoProbe) && Wk(`adrenoProbe ${yI.adrenoProbe} asked; in force (storage fetch only): ${null!==(Ik=yI.probe)&&void 0!==Ik?Ik:"(not noted)"}`);
      const Xk = uk.context;
      if (Xk) {
        for (const kk of function(kk) {
            var Fk;
            const Ik = [],
              Xk = kk.getExtension("WEBGL_debug_renderer_info"),
              Tk = Xk ? kk.getParameter(Xk.UNMASKED_VENDOR_WEBGL) : "(masked)",
              ik = Xk ? kk.getParameter(Xk.UNMASKED_RENDERER_WEBGL) : "(masked)";
            Ik.push(`GL ${String(kk.getParameter(kk.VERSION))} | ${String(kk.getParameter(kk.SHADING_LANGUAGE_VERSION))} | ${String(kk.getParameter(kk.VENDOR))} / ${String(kk.getParameter(kk.RENDERER))}`), Ik.push(`GL unmasked ${Tk} / ${ik}`);
            const yk = [
              ["MAX_TEXTURE_SIZE", kk.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", kk.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", kk.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", kk.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", kk.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", kk.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", kk.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in kk && yk.push(["MAX_UNIFORM_BLOCK_SIZE", kk.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", kk.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", kk.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", kk.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), Ik.push(`GL limits ${yk.map((Fk=>{let[Ik,Xk]=Fk;return`${Ik} ${String(kk.getParameter(Xk))}`})).join(", ")}`);
            const lk = (Fk, Ik) => {
              const Xk = kk.getShaderPrecisionFormat(Fk, kk.HIGH_FLOAT),
                Tk = kk.getShaderPrecisionFormat(Fk, kk.HIGH_INT);
              return `${Ik} highp float ${Xk?`${Xk.rangeMin}/${Xk.rangeMax}/${Xk.precision}`:"?"} int ${Tk?`${Tk.rangeMin}/${Tk.rangeMax}/${Tk.precision}`:"?"}`
            };
            Ik.push(`GL precision ${lk(kk.VERTEX_SHADER,"VS")}, ${lk(kk.FRAGMENT_SHADER,"FS")}`);
            const ak = kk.getContextAttributes();
            return Ik.push(`GL context ${JSON.stringify(ak)} drawingBuffer ${kk.drawingBufferWidth}x${kk.drawingBufferHeight}${"drawingBufferFormat"in kk?` format 0x${Number(kk.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in kk?` ${String(kk.drawingBufferColorSpace)}`:""}`), Ik.push(`GL extensions ${(null!==(Fk=kk.getSupportedExtensions())&&void 0!==Fk?Fk:[]).join(" ")}`), Ik
          }(Xk)) Wk(kk);
        ! function() {
          if (!uk.context) return;
          let kk = 0,
            Fk = 0;
          for (const [Ik, Xk] of nk) !Xk.gl.isContextLost() && Xk.gl.isProgram(Ik) && (Fk++, EF(Xk.gl, Ik, Xk), null !== Xk.terrain && kk++);
          Wk(`programs: ${Fk} live of ${nk.length} linked, ${kk} packed terrain; CPU page copies ${Math.round(uk.shadowBytes/1048576)} MiB (${uk.uncopied} over budget)`)
        }()
      }
    }

    function xI(kk) {
      return aI ??= async function(kk) {
        JI(), "webgpu" === TI ? (PI(), "1" === yI.slotCheck && Wk("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), yI.slotCheck = "1", await
          function(kk) {
            if (null !== BF) return Promise.resolve();
            const Fk = [];
            return BF = Fk, new Promise((Ik => {
              setTimeout((() => {
                BF = null, Wk(`WebGPU draw ranges (${kk}): ${Fk.length} terrain draws recorded in a second (first ${LF}; bundles replay without new ones)`);
                for (const kk of Fk) Wk(kk);
                Ik()
              }), 1e3)
            }))
          }(kk), await async function() {
            if (await (0, pF.h)(yI, "slotCheck", ["1"], II, XI), "1" === yI.slotCheck) return void Wk(`slot check: no answer in ${II} ms (only the storage fetch has one; a later answer logs on its own)`);
            PI()
          }()) : await lF(kk);
        Wk(`check (${kk}) done: bloxdDebug.save() downloads it all`)
      }(kk).catch((Fk => {
        Wk(`check (${kk}) failed: ${String(Fk)}`)
      })).finally((() => {
        aI = null
      })), aI
    }

    function PI() {
      void 0 !== yI.slotCheck && "1" !== yI.slotCheck && (Wk(yI.slotCheck), delete yI.slotCheck)
    }

    function KI() {
      const kk = kk => qI ? (kk / qI).toFixed(1) : "0",
        Fk = function() {
          const kk = dF;
          return dF = {
            draws: 0,
            faces: 0
          }, kk
        }(),
        Ik = function() {
          const kk = xF;
          return xF = {
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
        Xk = function() {
          const kk = PF;
          return PF = {
            buffer: 0,
            texture: 0
          }, kk
        }();
      PI(), ("webgpu" === TI ? Fk.draws : Ik.inst.draws + Ik.tex.draws) > 0 && LI();
      const Tk = "webgpu" === TI ? [`terrain ${kk(Fk.draws)} draws ${kk(Fk.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((kk => Ik[kk].draws > 0)).map((Fk => `${Fk} ${kk(Ik[Fk].draws)} draws ${kk(Ik[Fk].faces)} faces a frame`));
      Wk(`${qI} frames: ${Tk.join(", ")||"no draws"}; uploaded ${Math.round(Xk.buffer/1024)} KiB to buffers, ${Math.round(Xk.texture/1024)} KiB to data textures`), qI = 0
    }
  },
  4696: (kk, Fk, Ik) => {
    function Xk(kk) {
      if (null === kk) return "backend: none picked (no renderer build)";
      const Fk = kk.adapter ? `${kk.adapter.vendor}/${kk.adapter.architecture}` : "none";
      return `backend ${kk.backend}: reason ${kk.reason}, source ${kk.source}, adapter ${Fk}`
    }
    Ik.d(Fk, {
      b: () => Xk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);