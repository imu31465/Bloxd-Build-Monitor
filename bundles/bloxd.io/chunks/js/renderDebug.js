export const id = 47;
export const ids = [47];
export const modules = {
  4421: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => sk
    });
    var Rk = Bk(22),
      tk = Bk(29),
      ak = Bk(1239),
      Xk = Bk(2711);
    const bk = 3e4,
      wk = 1e3;

    function dk() {
      return "visible" === document.visibilityState && "inGame" === Rk.c.get("gameState") && (0, ak.o)()
    }

    function sk(kk, Fk) {
      (0, Xk.s)() || function(kk, Fk, Bk) {
        let Rk = 0;
        const tk = setInterval((() => {
          Fk() && (Rk += wk, Rk >= kk && (clearInterval(tk), Bk()))
        }), wk)
      }(bk, dk, (() => {
        Fk().then((() => {
          kk(`saved for the player after ${bk/1e3} s of play`), (0, Xk.B)(), tk.o.Hf("chat", {
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
  4416: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      installRenderDebug: () => JB,
      renderDebugPlayable: () => eB,
      startRenderDebug: () => AB,
      waitForDraw: () => yB
    });
    var Rk = Bk(1727),
      tk = Bk(4421),
      ak = Bk(2711);
    const Xk = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function bk(kk) {
      return 7 & kk
    }

    function wk(kk) {
      return kk >>> 11 & 1
    }

    function dk(kk) {
      return [1 + (kk >>> 18 & 63), 1 + (kk >>> 24 & 63)]
    }

    function sk(kk, Fk) {
      const [Bk, , Rk] = kk, tk = bk(Rk), ak = function(kk, Fk, Bk) {
        return Fk + (1 === (22 >>> kk & 1) ? 4 - Bk : Bk) & 3
      }(tk, wk(Rk), Fk), Xk = tk >>> 1, [sk, Vk] = dk(Bk), Jk = 1 === ak || 2 === ak ? sk : 0, Ak = ak >= 2 ? Vk : 0, ek = [63 & Bk, Bk >>> 6 & 63, Bk >>> 12 & 63];
      return ek[2 === Xk ? 0 : 2] += Jk, ek[1 === Xk ? 0 : 1] += Ak, ek
    }

    function Vk(kk) {
      const Fk = Math.max(...dk(kk[0]));
      return 1 === Fk ? "1" : Fk <= 4 ? "2-4" : Fk <= 16 ? "5-16" : "17-64"
    }
    const Jk = 16;

    function Ak(kk) {
      let Fk = 2166136261;
      for (let Bk = 0; Bk < kk.length; Bk++) Fk = Math.imul(Fk ^ kk[Bk], 16777619);
      return Fk >>> 0
    }

    function ek(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const Rk = Math.max(0, Fk - Bk),
        tk = Math.min(kk.length, Fk + Bk),
        ak = [];
      for (let Xk = Rk; Xk < tk; Xk++) {
        const Bk = kk[Xk].toString(16).padStart(2, "0");
        ak.push(Xk === Fk ? `[${Bk}]` : Bk)
      }
      return ak.join(" ")
    }
    const yk = {
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
      fk = "_vs2fs_location0",
      mk = 0,
      Wk = 4,
      vk = 6,
      ik = [0, 1, 2, 0, 2, 3],
      Yk = 2048,
      Lk = 4,
      Ok = 256,
      Ek = 64,
      Sk = 268435456,
      Nk = 65536,
      Hk = /^#version [^\n]*\/\/ program (\S+)$/m;

    function uk(kk) {
      return null === kk.name ? `#${kk.id}` : `#${kk.id} ${kk.name}`
    }
    const Mk = [],
      gk = new WeakMap,
      Uk = new WeakMap,
      ck = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let Gk = 1;
    const Tk = new WeakMap;

    function rk(kk) {
      if (null === kk) return 0;
      let Fk = Tk.get(kk);
      return void 0 === Fk && (Fk = Gk++, Tk.set(kk, Fk)), Fk
    }
    class Dk {
      constructor(kk, Fk) {
        this.print = kk, this.now = Fk, this.shown = 0, this.Hb = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.lA = [], this.dropped = 0
      }
      line(kk) {
        const Fk = this.now();
        if (Fk - this.second >= 1e3 && (this.second = Fk, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.Hb++, void this.store(kk);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${kk} (the last line here: the rest go to bloxdDebug.save())` : kk)
      }
      keep(kk) {
        this.sections++, this.store(kk)
      }
      store(kk) {
        this.lA.push(`${new Date(Date.now()).toISOString()} ${kk}`), this.lA.length > 2e4 && (this.lA.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.Hb} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.lA].join("\n")
      }
    }
    let zk = null;

    function Pk() {
      if (null === zk) {
        const kk = new Dk((kk => {
          (0, ak.k)("render", kk)
        }), (() => performance.now()));
        (0, ak.i)("render", (() => kk.dump())), zk = kk
      }
      return zk
    }

    function hk(kk) {
      Pk().line(kk)
    }

    function qk(kk) {
      Pk().keep(kk)
    }

    function Ck(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return kk.length <= Fk ? kk : `${kk.slice(0,Fk)}... (${kk.length-Fk} more characters)`
    }

    function Zk(kk, Fk, Bk, Rk, tk, ak) {
      const Xk = ck.pendingCheck;
      if (null === Xk) return;
      const bk = "undefined" !== typeof WebGL2RenderingContext && kk instanceof WebGL2RenderingContext,
        wk = {
          gl: kk,
          program: Bk,
          call: Rk,
          hb: tk,
          instances: ak,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (Xk.draws.push(wk), bk) try {
        const Rk = function(kk) {
          const Fk = [],
            Bk = new Map,
            Rk = Math.min(16, kk.getParameter(yk.MAX_VERTEX_ATTRIBS));
          for (let tk = 0; tk < Rk; tk++) {
            if (!kk.getVertexAttrib(tk, yk.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const Rk = kk.getVertexAttrib(tk, yk.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              ak = kk.getVertexAttribOffset(tk, yk.VERTEX_ATTRIB_ARRAY_POINTER),
              Xk = kk.getVertexAttrib(tk, yk.VERTEX_ATTRIB_ARRAY_STRIDE),
              bk = kk.getVertexAttrib(tk, yk.VERTEX_ATTRIB_ARRAY_SIZE),
              wk = kk.getVertexAttrib(tk, yk.VERTEX_ATTRIB_ARRAY_TYPE),
              dk = "VERTEX_ATTRIB_ARRAY_INTEGER" in kk && kk.getVertexAttrib(tk, yk.VERTEX_ATTRIB_ARRAY_INTEGER),
              sk = "VERTEX_ATTRIB_ARRAY_DIVISOR" in kk ? kk.getVertexAttrib(tk, yk.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            Bk.set(tk, {
              buffer: Rk,
              offset: ak,
              stride: Xk
            }), Fk.push(`@${tk} buf#${rk(Rk)} +${ak} stride ${Xk} ${bk}x0x${wk.toString(16)}${dk?" int":""} div ${sk}`)
          }
          return {
            lines: Fk,
            byLocation: Bk
          }
        }(kk);
        if (wk.attributes = Rk.lines, "inst" === Bk.terrain) {
          const {
            group: tk,
            chunk: bk
          } = function(kk, Fk, Bk) {
            const Rk = Fk.get(vk),
              tk = kk.getVertexAttrib(vk, yk.CURRENT_VERTEX_ATTRIB),
              ak = Rk ? `+${Rk.offset}` : tk ? Array.from(tk).slice(0, 3).join(",") : "?";
            let Xk = Bk.groups.get(ak);
            return void 0 === Xk && (Xk = Bk.groups.size, Bk.groups.set(ak, Xk)), {
              group: Xk,
              chunk: ak
            }
          }(kk, Rk.byLocation, Xk);
          wk.group = tk, wk.chunk = bk;
          for (const kk of [mk, Wk]) {
            var dk;
            const Fk = null === (dk = Rk.byLocation.get(kk)) || void 0 === dk ? void 0 : dk.buffer;
            Fk && wk.pages.push({
              kind: "buf",
              buffer: Fk
            })
          }! function(kk, Fk, Bk, Rk, tk, ak, Xk) {
            const bk = Rk.get(mk),
              wk = Xk.parts.get(ak);
            if (void 0 === wk && Xk.parts.size >= Lk) return;
            const dk = Math.min(tk, Ek, Ok - (null !== wk && void 0 !== wk ? wk : 0));
            if (null === bk || void 0 === bk || !bk.buffer || dk <= 0) return;
            const sk = pk(kk, Fk, Bk);
            if (!sk) return;
            const Vk = bk.stride || 12,
              Jk = nk(kk, bk.buffer, bk.offset, (dk - 1) * Vk + 12),
              Ak = new DataView(Jk.buffer),
              ek = function(kk, Fk) {
                const Bk = function(kk) {
                    const Fk = kF.get(kk);
                    if (void 0 !== Fk && (null === Fk || kk.isProgram(Fk))) return Fk;
                    ck.inProbe = !0;
                    let Bk = null;
                    try {
                      Bk = Kk(kk, Ik, Qk, "fed", "the record feed")
                    } finally {
                      ck.inProbe = !1
                    }
                    return kF.set(kk, Bk), Bk
                  }(kk),
                  Rk = Bk ? lk(kk, Bk, Fk, (() => {
                    kk.drawArraysInstanced(yk.POINTS, 0, 1, Fk)
                  }), "decode probe input (the record feed)") : null;
                return Rk ? new Uint32Array(Rk.buffer) : null
              }(kk, dk);
            ek || Xk.fed.failed++;
            const fk = lk(kk, sk, 4 * dk, (() => {
              kk.drawArraysInstanced(yk.POINTS, 0, 4, dk)
            }));
            if (!fk) return;
            Xk.parts.set(ak, (null !== wk && void 0 !== wk ? wk : 0) + dk);
            for (let yk = 0; yk < dk; yk++) {
              const kk = yk * Vk,
                Fk = [Ak.getUint32(kk, !0), Ak.getUint32(kk + 4, !0), Ak.getUint32(kk + 8, !0)],
                Bk = ek ? [ek[3 * yk], ek[3 * yk + 1], ek[3 * yk + 2]] : Fk;
              ek && (Xk.fed.records++, Bk.some(((kk, Bk) => kk !== Fk[Bk])) && (Xk.fed.differing++, Xk.fed.first.length < 8 && Xk.fed.first.push(`part ${ak} instance ${yk}: fed ${Bk.map(aF).join(" ")} buffer ${Fk.map(aF).join(" ")}`)));
              for (let Rk = 0; Rk < 4; Rk++) {
                const kk = 3 * (4 * yk + Rk);
                Xk.vertices.push({
                  record: Bk,
                  slot: Rk,
                  group: ak,
                  gpu: [fk[kk], fk[kk + 1], fk[kk + 2]]
                })
              }
            }
          }(kk, Fk, Bk, Rk.byLocation, ak, tk, Xk)
        } else {
          const Rk = FF(kk, Fk, 16),
            ak = FF(kk, Fk, 8);
          for (const kk of [Rk, ak]) kk && wk.pages.push({
            kind: "tex",
            texture: kk
          });
          Rk && function(kk, Fk, Bk, Rk, tk, ak) {
            if (ak.parts.size >= Lk) return;
            const Xk = pk(kk, Fk, Bk);
            if (!Xk) return;
            let bk = 6 * Ok;
            const wk = [];
            for (const [Ak, ek] of tk) {
              const kk = Math.min(ek, bk, Math.max(6, 6 * Math.floor(Ok / tk.length)));
              kk > 0 && (wk.push([Ak, kk]), bk -= kk)
            }
            const dk = wk.reduce(((kk, Fk) => {
                let [, Bk] = Fk;
                return kk + Bk
              }), 0),
              sk = lk(kk, Xk, dk, (() => {
                for (const [Fk, Bk] of wk) kk.drawArrays(yk.POINTS, Fk, Bk)
              }));
            if (!sk) return;
            let Vk = 0;
            for (const [Ak, ek] of wk) {
              const Fk = Math.floor(Ak / 6),
                Bk = Math.floor((Ak + ek - 1) / 6) - Fk + 1,
                tk = BF(kk, Rk, Yk, Fk, Bk);
              for (let kk = Ak; kk < Ak + ek; kk++, Vk++) {
                var Jk;
                const Bk = 4 * (Math.floor(kk / 6) - Fk),
                  Rk = [tk[Bk], tk[Bk + 1], tk[Bk + 2]];
                ak.parts.set(tk[Bk + 3], (null !== (Jk = ak.parts.get(tk[Bk + 3])) && void 0 !== Jk ? Jk : 0) + (kk % 6 === 0 ? 1 : 0)), ak.vertices.push({
                  record: Rk,
                  slot: ik[kk % 6],
                  group: tk[Bk + 3],
                  gpu: [sk[3 * Vk], sk[3 * Vk + 1], sk[3 * Vk + 2]]
                })
              }
            }
          }(kk, Fk, Bk, Rk, tk, Xk)
        }
      } catch (sk) {
        hk(`decode probe failed on program ${uk(Bk)}: ${String(sk)}`)
      }
    }

    function pk(kk, Fk, Bk) {
      if (void 0 !== Bk.probe) return Bk.probe && xk(kk, Fk, Bk.probe), Bk.probe;
      Bk.probe = null, ck.inProbe = !0;
      try {
        Bk.probe = function(kk, Fk) {
          return Kk(kk, Fk.vertex, Fk.fragment, fk, `program ${uk(Fk)}'s twin`)
        }(kk, Bk)
      } finally {
        ck.inProbe = !1
      }
      return Bk.probe && xk(kk, Fk, Bk.probe), Bk.probe
    }

    function Kk(kk, Fk, Bk, Rk, tk) {
      const ak = [kk.createShader(yk.VERTEX_SHADER), kk.createShader(yk.FRAGMENT_SHADER)],
        Xk = kk.createProgram();
      if (!Xk || !ak[0] || !ak[1]) return null;
      kk.shaderSource(ak[0], Fk), kk.shaderSource(ak[1], Bk);
      for (const wk of ak) kk.compileShader(wk), kk.attachShader(Xk, wk);
      kk.transformFeedbackVaryings(Xk, [Rk], yk.INTERLEAVED_ATTRIBS), kk.linkProgram(Xk);
      for (const wk of ak) kk.deleteShader(wk);
      var bk;
      return kk.getProgramParameter(Xk, yk.LINK_STATUS) ? Xk : (hk(`decode probe: ${tk} failed to link: ${Ck(null!==(bk=kk.getProgramInfoLog(Xk))&&void 0!==bk?bk:"",300)}`), kk.deleteProgram(Xk), null)
    }

    function xk(kk, Fk, Bk) {
      const Rk = kk.getProgramParameter(Fk, yk.ACTIVE_UNIFORM_BLOCKS);
      for (let bk = 0; bk < Rk; bk++) {
        const Rk = kk.getActiveUniformBlockName(Fk, bk),
          tk = null === Rk ? yk.INVALID_INDEX : kk.getUniformBlockIndex(Bk, Rk);
        tk !== yk.INVALID_INDEX && kk.uniformBlockBinding(Bk, tk, kk.getActiveUniformBlockParameter(Fk, bk, yk.UNIFORM_BLOCK_BINDING))
      }
      const tk = kk.getParameter(yk.CURRENT_PROGRAM);
      kk.useProgram(Bk);
      const ak = kk.getProgramParameter(Fk, yk.ACTIVE_UNIFORMS),
        Xk = kk.getActiveUniforms(Fk, [...Array(ak).keys()], yk.UNIFORM_BLOCK_INDEX);
      for (let bk = 0; bk < ak; bk++) {
        const Rk = kk.getActiveUniform(Fk, bk);
        if (!Rk || -1 !== Xk[bk]) continue;
        const tk = Rk.name.replace(/\[0\]$/, "");
        for (let ak = 0; ak < Rk.size; ak++) {
          const Xk = Rk.size > 1 ? `${tk}[${ak}]` : Rk.name,
            bk = kk.getUniformLocation(Fk, Xk),
            wk = kk.getUniformLocation(Bk, Xk);
          bk && wk && jk(kk, wk, Rk.type, kk.getUniform(Fk, bk))
        }
      }
      kk.useProgram(tk)
    }

    function jk(kk, Fk, Bk, Rk) {
      const tk = ArrayBuffer.isView(Rk) ? Array.from(Rk) : [Number(Rk)];
      switch (Bk) {
        case yk.FLOAT:
          return void kk.uniform1f(Fk, tk[0]);
        case yk.FLOAT_VEC2:
          return void kk.uniform2fv(Fk, tk);
        case yk.FLOAT_VEC3:
          return void kk.uniform3fv(Fk, tk);
        case yk.FLOAT_VEC4:
          return void kk.uniform4fv(Fk, tk);
        case yk.FLOAT_MAT3:
          return void kk.uniformMatrix3fv(Fk, !1, tk);
        case yk.FLOAT_MAT4:
          return void kk.uniformMatrix4fv(Fk, !1, tk);
        case yk.UNSIGNED_INT:
          return void kk.uniform1ui(Fk, tk[0]);
        case yk.UNSIGNED_INT_VEC2:
          return void kk.uniform2uiv(Fk, tk);
        case yk.UNSIGNED_INT_VEC3:
          return void kk.uniform3uiv(Fk, tk);
        case yk.UNSIGNED_INT_VEC4:
          return void kk.uniform4uiv(Fk, tk);
        case yk.INT_VEC2:
          return void kk.uniform2iv(Fk, tk);
        case yk.INT_VEC3:
          return void kk.uniform3iv(Fk, tk);
        case yk.INT_VEC4:
          return void kk.uniform4iv(Fk, tk);
        default:
          kk.uniform1i(Fk, tk[0])
      }
    }

    function lk(kk, Fk, Bk, Rk) {
      let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const ak = kk.getParameter(yk.CURRENT_PROGRAM),
        Xk = kk.getParameter(yk.TRANSFORM_FEEDBACK_BINDING),
        bk = kk.getParameter(yk.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        wk = kk.getParameter(yk.COPY_READ_BUFFER_BINDING),
        dk = kk.isEnabled(yk.RASTERIZER_DISCARD),
        sk = kk.createTransformFeedback(),
        Vk = kk.createBuffer();
      ck.inProbe = !0;
      try {
        const ak = kk.getError();
        ak !== yk.NO_ERROR && hk(`GL error 0x${ak.toString(16)} pending before the decode probe (the renderer's)`), kk.useProgram(Fk), kk.bindTransformFeedback(yk.TRANSFORM_FEEDBACK, sk), kk.bindBuffer(yk.TRANSFORM_FEEDBACK_BUFFER, Vk), kk.bufferData(yk.TRANSFORM_FEEDBACK_BUFFER, 12 * Bk, yk.STREAM_READ), kk.bindBufferBase(yk.TRANSFORM_FEEDBACK_BUFFER, 0, Vk), kk.enable(yk.RASTERIZER_DISCARD), kk.beginTransformFeedback(yk.POINTS), Rk(), kk.endTransformFeedback(), kk.bindBufferBase(yk.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const Xk = kk.getError();
        if (Xk !== yk.NO_ERROR) return hk(`${tk}: GL error 0x${Xk.toString(16)} on the feedback draw`), null;
        const bk = new Float32Array(3 * Bk);
        return kk.bindBuffer(yk.COPY_READ_BUFFER, Vk), kk.getBufferSubData(yk.COPY_READ_BUFFER, 0, bk), bk
      } finally {
        dk || kk.disable(yk.RASTERIZER_DISCARD), kk.bindTransformFeedback(yk.TRANSFORM_FEEDBACK, Xk), kk.bindBuffer(yk.TRANSFORM_FEEDBACK_BUFFER, bk), kk.bindBuffer(yk.COPY_READ_BUFFER, wk), kk.deleteTransformFeedback(sk), kk.deleteBuffer(Vk), kk.useProgram(ak), ck.inProbe = !1
      }
    }

    function nk(kk, Fk, Bk, Rk) {
      const tk = kk.getParameter(yk.COPY_READ_BUFFER_BINDING),
        ak = new Uint8Array(Rk);
      return kk.bindBuffer(yk.COPY_READ_BUFFER, Fk), kk.getBufferSubData(yk.COPY_READ_BUFFER, Bk, ak), kk.bindBuffer(yk.COPY_READ_BUFFER, tk), ak
    }
    const Ik = `#version 300 es\nlayout(location = ${mk}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      Qk = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      kF = new WeakMap;

    function FF(kk, Fk, Bk) {
      const Rk = kk.getProgramParameter(Fk, yk.ACTIVE_UNIFORMS),
        tk = kk.getParameter(yk.ACTIVE_TEXTURE);
      try {
        for (let tk = 0; tk < Rk; tk++) {
          const Rk = kk.getActiveUniform(Fk, tk);
          if ((null === Rk || void 0 === Rk ? void 0 : Rk.type) !== yk.UNSIGNED_INT_SAMPLER_2D) continue;
          const ak = kk.getUniformLocation(Fk, Rk.name),
            Xk = ak ? kk.getUniform(Fk, ak) : -1;
          if (Xk < 0) continue;
          kk.activeTexture(yk.TEXTURE0 + Xk);
          const bk = kk.getParameter(yk.TEXTURE_BINDING_2D);
          if (bk && Uk.get(bk) === Bk) return bk
        }
        return null
      } finally {
        kk.activeTexture(tk)
      }
    }

    function BF(kk, Fk, Bk, Rk, tk) {
      const ak = new Uint32Array(4 * tk),
        Xk = kk.getParameter(yk.READ_FRAMEBUFFER_BINDING),
        bk = kk.createFramebuffer();
      kk.bindFramebuffer(yk.READ_FRAMEBUFFER, bk), kk.framebufferTexture2D(yk.READ_FRAMEBUFFER, yk.COLOR_ATTACHMENT0, yk.TEXTURE_2D, Fk, 0);
      try {
        let Fk = 0;
        for (; Fk < tk;) {
          const Xk = Rk + Fk,
            bk = Xk % Bk,
            wk = Math.min(tk - Fk, Bk - bk);
          kk.readPixels(bk, Math.floor(Xk / Bk), wk, 1, yk.RGBA_INTEGER, yk.UNSIGNED_INT, ak.subarray(4 * Fk, 4 * (Fk + wk))), Fk += wk
        }
      } finally {
        kk.bindFramebuffer(yk.READ_FRAMEBUFFER, Xk), kk.deleteFramebuffer(bk)
      }
      return ak
    }

    function RF(kk, Fk, Bk) {
      let Rk = 0,
        tk = 0;
      for (let wk = 0; wk < Fk.bytes.length; wk += Nk) {
        Rk++;
        const kk = Math.min(wk + Nk, Fk.bytes.length);
        Ak(Fk.bytes.subarray(wk, kk)) !== Ak(Bk.subarray(wk, kk)) && tk++
      }
      const ak = `${kk} ${Fk.bytes.length} B cpu ${Ak(Fk.bytes).toString(16)} gpu ${Ak(Bk).toString(16)}, ${tk}/${Rk} blocks differ${Fk.missed?`, ${Fk.missed} GPU-side writes uncopied`:""}`;
      if (0 === tk) return ak;
      const {
        count: Xk,
        offsets: bk
      } = function(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const Rk = Math.min(kk.length, Fk.length);
        let tk = Math.abs(kk.length - Fk.length);
        const ak = [];
        for (let Xk = 0; Xk < Rk; Xk++) kk[Xk] !== Fk[Xk] && (tk++, ak.length < Bk && ak.push(Xk));
        return {
          count: tk,
          offsets: ak
        }
      }(Fk.bytes, Bk);
      return qk([`${ak}: ${Xk} bytes differ`, ...bk.map((kk => `  +${kk}: cpu ${ek(Fk.bytes,kk)} | gpu ${ek(Bk,kk)}`))].join("\n")), `${ak}: ${Xk} bytes differ, first at ${bk.join(", ")} (context in the saved file)`
    }

    function tF(kk) {
      if (0 === kk.vertices.length) return void hk(`decode probe (${kk.reason}): no terrain draw probed (${kk.draws.length} seen)`);
      const Fk = function(kk) {
          const Fk = new Map;
          for (const Rk of kk) {
            const kk = Fk.get(Rk.group);
            kk ? kk.push(Rk) : Fk.set(Rk.group, [Rk])
          }
          const Bk = {
            vertices: kk.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [Rk, tk] of Fk) {
            const kk = new Map,
              Fk = tk.map((Fk => {
                const Bk = sk(Fk.record, Fk.slot),
                  Rk = [Fk.gpu[0] - Bk[0], Fk.gpu[1] - Bk[1], Fk.gpu[2] - Bk[2]],
                  tk = Rk.map((kk => Math.round(64 * kk))).join(","),
                  ak = kk.get(tk);
                return ak ? ak.count++ : kk.set(tk, {
                  count: 1,
                  offset: Rk
                }), Bk
              }));
            let ak = [0, 0, 0],
              Xk = 0;
            for (const Bk of kk.values()) Bk.count > Xk && (Xk = Bk.count, ak = Bk.offset);
            Bk.translations.set(Rk, ak), tk.forEach(((kk, Rk) => {
              var tk;
              const Xk = [Fk[Rk][0] + ak[0], Fk[Rk][1] + ak[1], Fk[Rk][2] + ak[2]];
              if (Xk.every(((Fk, Bk) => {
                  return Rk = kk.gpu[Bk], tk = Fk, Math.abs(Rk - tk) <= Math.max(.001, 1e-6 * Math.abs(tk));
                  var Rk, tk
                }))) return;
              Bk.mismatches++, Bk.byDirection[bk(kk.record[2])]++, Bk.byDiagonal[wk(kk.record[2])]++;
              const dk = Vk(kk.record);
              Bk.byBand[dk] = (null !== (tk = Bk.byBand[dk]) && void 0 !== tk ? tk : 0) + 1, Bk.first.length < Jk && Bk.first.push({
                ...kk,
                expected: Xk
              })
            }))
          }
          return Bk
        }(kk.vertices),
        Bk = Fk.byDirection.map(((kk, Fk) => kk ? `${Xk[Fk]} ${kk}` : "")).filter(Boolean).join(" "),
        Rk = Object.entries(Fk.byBand).map((kk => {
          let [Fk, Bk] = kk;
          return `${Fk}: ${Bk}`
        })).join(" ");
      if (hk(`decode probe (${kk.reason}): ${Fk.mismatches}/${Fk.vertices} vertices differ from the CPU decode over ${kk.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (Fk.mismatches ? ` by direction [${Bk}] diagonal [0: ${Fk.byDiagonal[0]} 1: ${Fk.byDiagonal[1]}] extent [${Rk}]` : "")), kk.fed.records > 0 || kk.fed.failed > 0) {
        hk(`decode probe input: ${kk.fed.differing}/${kk.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (kk.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (kk.fed.failed ? `; the feed failed on ${kk.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const Fk of kk.fed.first) hk(`  ${Fk}`)
      }
      for (const tk of Fk.first) {
        const [kk, Fk, Bk] = tk.record;
        hk(`  mismatch part ${tk.group} r0 ${kk.toString(16)} r1 ${Fk.toString(16)} r2 ${Bk.toString(16)} slot ${tk.slot} (${Xk[bk(Bk)]}): expected ${tk.expected.map(XF).join(",")} gpu ${tk.gpu.map(XF).join(",")}`)
      }
      qk(`decode probe translations: ${[...Fk.translations].map((kk=>{let[Fk,Bk]=kk;return`${Fk}: ${Bk.map(XF).join(",")}`})).join("; ")}`)
    }

    function aF(kk) {
      return kk.toString(16)
    }

    function XF(kk) {
      return Number.isInteger(kk) ? String(kk) : kk.toFixed(3)
    }

    function bF(kk) {
      return null !== ck.pendingCheck ? Promise.resolve() : new Promise((Fk => {
        let Bk = !1;
        const Rk = {
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
        ck.pendingCheck = Rk;
        const tk = () => {
            ck.pendingCheck = null;
            try {
              ! function(kk) {
                hk(`draw ranges (${kk.reason}): ${kk.terrainDraws} terrain draws in the frame, the first ${kk.draws.length} here`);
                for (const Fk of kk.draws) {
                  const kk = Fk.hb.slice(0, 8).map((kk => {
                      let [Fk, Bk] = kk;
                      return `${Fk}+${Bk}`
                    })).join(" "),
                    Bk = Fk.hb.length > 8 ? ` (+${Fk.hb.length-8} ranges)` : "";
                  hk(`  ${uk(Fk.program)} ${Fk.program.terrain} ${Fk.call} ${kk}${Bk} x${Fk.instances}${Fk.group>=0?` part ${Fk.group} chunk ${Fk.chunk}`:""} | ${Fk.attributes.join(" | ")}`)
                }
              }(Rk), tF(Rk);
              Rk.draws.some((kk => "undefined" !== typeof WebGL2RenderingContext && kk.gl instanceof WebGL2RenderingContext)) || 0 === Rk.draws.length ? function(kk) {
                const Fk = [],
                  Bk = new Map;
                for (const Rk of kk)
                  if ("undefined" !== typeof WebGL2RenderingContext && Rk.gl instanceof WebGL2RenderingContext)
                    for (const kk of Rk.pages) Bk.set("buf" === kk.kind ? kk.buffer : kk.texture, {
                      page: kk,
                      gl: Rk.gl
                    });
                for (const [Rk, {
                    page: tk,
                    gl: ak
                  }] of Bk) {
                  const kk = gk.get(Rk);
                  if (!kk) {
                    Fk.push(`${tk.kind}#${rk(Rk)}: no CPU copy (${ck.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === tk.kind) {
                    Fk.push(RF(`buf#${kk.id}`, kk, nk(ak, tk.buffer, 0, kk.bytes.length)));
                    continue
                  }
                  const Bk = BF(ak, tk.texture, kk.width, 0, kk.width * kk.height),
                    Xk = 16 === kk.texelBytes ? new Uint8Array(Bk.buffer) : new Uint8Array(new Uint16Array(Bk).buffer);
                  Fk.push(RF(`tex#${kk.id} (${16===kk.texelBytes?"records":"light"})`, kk, Xk))
                }
                for (const Rk of Fk) hk(`page readback ${Rk}`)
              }(Rk.draws) : hk("page readback: none on WebGL1 (no buffer readback)")
            } catch (kk) {
              hk(`check failed: ${String(kk)}`)
            }
            Fk()
          },
          ak = () => {
            if (Rk.draws.length > 0 && !Bk) return Bk = !0, void setTimeout(tk, 0);
            Bk || requestAnimationFrame(ak)
          };
        requestAnimationFrame(ak), setTimeout((() => {
          Bk || (Bk = !0, tk())
        }), 5e3)
      }))
    }
    var wF = Bk(4425);
    const dF = 20,
      sF = 24,
      VF = Reflect.apply;

    function JF(kk, Fk, Bk) {
      if (!kk) return;
      const Rk = kk[Fk];
      if ("function" === typeof Rk) {
        const tk = Bk(Rk);
        kk[Fk] = tk, (0, wF.t)(tk, Rk)
      }
    }
    let AF = !1;
    const eF = new WeakMap,
      yF = new WeakMap,
      fF = new WeakMap,
      mF = {
        gl: 0,
        lost: 0
      };
    let WF = {
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
      vF = {
        buffer: 0,
        texture: 0
      },
      iF = 0;

    function YF(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (kk instanceof ArrayBuffer) return new Uint8Array(kk, Fk, Bk || void 0);
      if (!ArrayBuffer.isView(kk)) return null;
      const Rk = "BYTES_PER_ELEMENT" in kk ? kk.BYTES_PER_ELEMENT : 1,
        tk = kk.byteOffset + Fk * Rk,
        ak = Bk ? Bk * Rk : kk.byteLength - Fk * Rk;
      return new Uint8Array(kk.buffer, tk, Math.max(0, ak))
    }

    function oF(kk, Fk) {
      const Bk = function(kk) {
        switch (kk) {
          case yk.ARRAY_BUFFER:
            return yk.ARRAY_BUFFER_BINDING;
          case yk.ELEMENT_ARRAY_BUFFER:
            return yk.ELEMENT_ARRAY_BUFFER_BINDING;
          case yk.COPY_READ_BUFFER:
            return yk.COPY_READ_BUFFER_BINDING;
          case yk.COPY_WRITE_BUFFER:
            return yk.COPY_WRITE_BUFFER_BINDING;
          case yk.UNIFORM_BUFFER:
            return yk.UNIFORM_BUFFER_BINDING;
          case yk.PIXEL_UNPACK_BUFFER:
            return yk.PIXEL_UNPACK_BUFFER_BINDING;
          case yk.TRANSFORM_FEEDBACK_BUFFER:
            return yk.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(Fk);
      return Bk ? kk.getParameter(Bk) : null
    }

    function LF(kk) {
      const Fk = gk.get(kk);
      Fk && (ck.shadowBytes -= Fk.bytes.length, gk.delete(kk))
    }

    function OF(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      LF(kk), ck.shadowBytes + Fk > Sk ? ck.uncopied++ : (ck.shadowBytes += Fk, gk.set(kk, {
        id: rk(kk),
        bytes: new Uint8Array(Fk),
        width: Bk,
        height: Rk,
        texelBytes: tk,
        missed: 0
      }))
    }

    function EF(kk, Fk) {
      for (const Bk of ["deleteBuffer", "deleteTexture"]) JF(kk, Bk, (kk => function() {
        for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
        return Bk[0] && LF(Bk[0]), VF(kk, this, Bk)
      }));
      JF(kk, "shaderSource", (kk => function() {
        for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
        return Bk[0] && "string" === typeof Bk[1] && eF.set(Bk[0], Bk[1]), VF(kk, this, Bk)
      })), JF(kk, "attachShader", (kk => function() {
        for (var Fk, Bk = arguments.length, Rk = new Array(Bk), tk = 0; tk < Bk; tk++) Rk[tk] = arguments[tk];
        const ak = Rk[0],
          Xk = null !== (Fk = yF.get(ak)) && void 0 !== Fk ? Fk : [];
        return Xk.push(Rk[1]), yF.set(ak, Xk), VF(kk, this, Rk)
      })), JF(kk, "linkProgram", (kk => function() {
        for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
        const tk = VF(kk, this, Bk);
        return ck.inProbe || function(kk, Fk) {
          var Bk, Rk, tk;
          "undefined" !== typeof HTMLCanvasElement && kk.canvas instanceof HTMLCanvasElement && function(kk) {
            if (gF.has(kk)) return;
            gF.add(kk);
            for (const Fk of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) kk.addEventListener(Fk, (kk => {
              mF.lost < dF && (mF.lost++, hk(`${Fk}${"statusMessage"in kk?`: ${String(kk.statusMessage)}`:""}`))
            }))
          }(kk.canvas);
          ck.context ??= kk;
          const ak = null !== (Bk = yF.get(Fk)) && void 0 !== Bk ? Bk : [];
          let Xk = "",
            bk = "";
          for (const sk of ak) {
            var wk;
            const kk = null !== (wk = eF.get(sk)) && void 0 !== wk ? wk : "";
            /\bgl_Position\b/.test(kk) ? Xk = kk : bk = kk
          }
          const dk = {
            id: rk(Fk),
            name: null !== (Rk = null === (tk = Hk.exec(Xk)) || void 0 === tk ? void 0 : tk[1]) && void 0 !== Rk ? Rk : null,
            gl: kk,
            vertex: Xk,
            fragment: bk,
            terrain: NF(Xk),
            checked: !1,
            firstDraw: !1
          };
          if (fF.set(Fk, dk), Mk.push([Fk, dk]), null !== dk.terrain) {
            const Fk = ak.map((Fk => {
              var Bk;
              return null !== (Bk = kk.getShaderInfoLog(Fk)) && void 0 !== Bk ? Bk : ""
            })).filter((kk => "" !== kk.trim()));
            Fk.length > 0 && qk(`program ${uk(dk)} (${dk.terrain}) shader logs:\n${Ck(Fk.join("\n"))}`)
          }
        }(this, Bk[0]), tk
      })), JF(kk, "bufferData", (kk => function() {
        for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
        const tk = VF(kk, this, Bk);
        if (!ck.inProbe) {
          const kk = oF(this, Bk[0]);
          if (kk) {
            var ak, Xk, bk;
            const Fk = "number" === typeof Bk[1] ? null : YF(Bk[1], null !== (ak = Bk[3]) && void 0 !== ak ? ak : 0, null !== (Xk = Bk[4]) && void 0 !== Xk ? Xk : 0);
            var wk;
            if (OF(kk, "number" === typeof Bk[1] ? Bk[1] : null !== (bk = null === Fk || void 0 === Fk ? void 0 : Fk.length) && void 0 !== bk ? bk : 0), Fk) null === (wk = gk.get(kk)) || void 0 === wk || wk.bytes.set(Fk)
          }
        }
        return tk
      })), JF(kk, "bufferSubData", (kk => function() {
        for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
        const tk = VF(kk, this, Bk);
        if (!ck.inProbe) {
          var ak, Xk;
          const kk = oF(this, Bk[0]),
            Fk = kk ? gk.get(kk) : void 0,
            Rk = YF(Bk[2], null !== (ak = Bk[3]) && void 0 !== ak ? ak : 0, null !== (Xk = Bk[4]) && void 0 !== Xk ? Xk : 0);
          if (Fk && Rk) {
            const kk = Bk[1];
            Fk.bytes.set(Rk.subarray(0, Math.max(0, Fk.bytes.length - kk)), kk), SF("buffer", Fk, kk, Rk.length)
          }
        }
        return tk
      })), Fk && (JF(kk, "copyBufferSubData", (kk => function() {
        for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
        const tk = VF(kk, this, Bk);
        if (!ck.inProbe) {
          const [kk, Fk, Rk, tk, ak] = Bk, Xk = oF(this, kk), bk = oF(this, Fk), wk = Xk ? gk.get(Xk) : void 0, dk = bk ? gk.get(bk) : void 0;
          dk && (wk ? dk.bytes.set(wk.bytes.slice(Rk, Rk + ak), tk) : dk.missed++)
        }
        return tk
      })), JF(kk, "texStorage2D", (kk => function() {
        for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
        const tk = VF(kk, this, Bk),
          [, , ak, Xk, bk] = Bk;
        if (!ck.inProbe && (ak === yk.RGBA32UI || ak === yk.RGBA16UI)) {
          const kk = this.getParameter(yk.TEXTURE_BINDING_2D),
            Fk = ak === yk.RGBA32UI ? 16 : 8;
          kk && (Uk.set(kk, Fk), OF(kk, Xk * bk * Fk, Xk, bk, Fk))
        }
        return tk
      })), JF(kk, "texSubImage2D", (kk => function() {
        for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
        const tk = VF(kk, this, Bk);
        return !ck.inProbe && Bk.length >= 9 && Bk[0] === yk.TEXTURE_2D && 0 === Bk[1] && function(kk, Fk) {
          var Bk;
          const Rk = kk.getParameter(yk.TEXTURE_BINDING_2D),
            tk = Rk ? gk.get(Rk) : void 0;
          if (!tk) return;
          const [, , ak, Xk, bk, wk] = Fk;
          let dk = YF(Fk[8], null !== (Bk = Fk[9]) && void 0 !== Bk ? Bk : 0);
          if (null === dk && "number" === typeof Fk[8]) {
            const Bk = oF(kk, yk.PIXEL_UNPACK_BUFFER),
              Rk = Bk ? gk.get(Bk) : void 0;
            dk = Rk ? Rk.bytes.subarray(Fk[8]) : null
          }
          if (null === dk) return void tk.missed++;
          const sk = kk.getParameter(yk.UNPACK_ROW_LENGTH) || bk,
            Vk = kk.getParameter(yk.UNPACK_SKIP_ROWS),
            Jk = kk.getParameter(yk.UNPACK_SKIP_PIXELS),
            Ak = tk.texelBytes;
          for (let ek = 0; ek < wk; ek++) {
            const kk = ((Vk + ek) * sk + Jk) * Ak,
              Fk = ((Xk + ek) * tk.width + ak) * Ak;
            tk.bytes.set(dk.subarray(kk, kk + bk * Ak), Fk)
          }
          SF("texture", tk, (Xk * tk.width + ak) * Ak, bk * wk * Ak)
        }(this, Bk), tk
      })), JF(kk, "copyTexSubImage2D", (kk => function() {
        for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
        const tk = Bk[0] === yk.TEXTURE_2D ? this.getParameter(yk.TEXTURE_BINDING_2D) : null,
          ak = tk ? gk.get(tk) : void 0;
        return ak && ak.missed++, VF(kk, this, Bk)
      })));
      for (const Bk of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) JF(kk, Bk, (kk => function() {
        for (var Fk = arguments.length, Rk = new Array(Fk), tk = 0; tk < Fk; tk++) Rk[tk] = arguments[tk];
        const ak = VF(kk, this, Rk);
        return ck.inProbe || uF(this, Bk, Rk), ak
      }));
      JF(kk, "getExtension", (kk => function() {
        for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
        const tk = VF(kk, this, Bk);
        return tk && "object" === typeof tk && function(kk, Fk, Bk) {
          const Rk = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(Fk in Rk) || Bk.bloxdRenderDebug) return;
          Bk.bloxdRenderDebug = !0;
          for (const tk of Rk[Fk]) {
            const Fk = Bk[tk];
            "function" === typeof Fk && (Bk[tk] = function() {
              for (var Rk = arguments.length, ak = new Array(Rk), Xk = 0; Xk < Rk; Xk++) ak[Xk] = arguments[Xk];
              const bk = VF(Fk, Bk, ak);
              return ck.inProbe || uF(kk, tk, ak), bk
            })
          }
        }(this, Bk[0], tk), tk
      }))
    }

    function SF(kk, Fk, Bk, Rk) {
      vF[kk] += Rk, iF < 32 && Fk.bytes.length >= 1 << 20 && (iF++, qk(`upload ${kk} #${Fk.id} +${Bk} ${Rk} B`))
    }

    function NF(kk) {
      if (!kk.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(kk) || /in uvec3 _p2vs_location0\b/.test(kk) ? "inst" : "tex"
    }

    function HF(kk, Fk, Bk) {
      var Rk;
      if (Bk.checked) return;
      Bk.checked = !0;
      const tk = kk.getProgramParameter(Fk, yk.LINK_STATUS),
        ak = (null !== (Rk = kk.getProgramInfoLog(Fk)) && void 0 !== Rk ? Rk : "").trim();
      var Xk;
      null === Bk.terrain && tk || (hk(`program ${uk(Bk)} ${null!==(Xk=Bk.terrain)&&void 0!==Xk?Xk:"other"} link ${tk?"ok":"FAILED"}${ak?`: ${Ck(ak,300)}`:""}`), ak && qk(`program ${uk(Bk)} link log:\n${Ck(ak)}`))
    }

    function uF(kk, Fk, Bk) {
      var Rk;
      const tk = kk.getParameter(yk.CURRENT_PROGRAM),
        ak = tk ? fF.get(tk) : void 0;
      if (!tk || !ak) return;
      const Xk = null !== (Rk = ak.terrain) && void 0 !== Rk ? Rk : "other",
        {
          hb: bk,
          instances: wk
        } = function(kk, Fk) {
          switch (kk) {
            case "drawArrays":
              return {
                hb: [
                  [Fk[1], Fk[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                hb: [
                  [Fk[1], Fk[2]]
                ], instances: Fk[3]
              };
            case "drawElements":
              return {
                hb: [
                  [0, Fk[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                hb: [
                  [0, Fk[1]]
                ], instances: Fk[4]
              };
            case "multiDrawArraysWEBGL": {
              const kk = Fk[1],
                Bk = Fk[3],
                Rk = Fk[2],
                tk = Fk[4],
                ak = [];
              for (let Xk = 0; Xk < Fk[5]; Xk++) ak.push([kk[Rk + Xk], Bk[tk + Xk]]);
              return {
                hb: ak,
                instances: 1
              }
            }
            default:
              return {
                hb: [], instances: 0
              }
          }
        }(Fk, Bk),
        dk = "inst" === ak.terrain ? wk : bk.reduce(((kk, Fk) => {
          let [, Bk] = Fk;
          return kk + Bk
        }), 0) / 6;
      if (WF[Xk].draws++, WF[Xk].faces += dk, null === ak.terrain) return;
      if (ck.context = kk, !ak.firstDraw) {
        ak.firstDraw = !0, HF(kk, tk, ak), MF || (MF = !0, hk(function(kk) {
          var Fk;
          const Bk = kk.getParameter(yk.DEPTH_FUNC),
            Rk = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let tk = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in kk && kk.getParameter(yk.DRAW_FRAMEBUFFER_BINDING)) {
            const Fk = kk;
            tk = Fk.getFramebufferAttachmentParameter(yk.DRAW_FRAMEBUFFER, yk.DEPTH_ATTACHMENT, yk.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(Fk.getFramebufferAttachmentParameter(yk.DRAW_FRAMEBUFFER,yk.DEPTH_ATTACHMENT,yk.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(Fk.getFramebufferAttachmentParameter(yk.DRAW_FRAMEBUFFER,yk.DEPTH_ATTACHMENT,yk.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const ak = kk.getParameter(yk.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(Fk=Rk[Bk])&&void 0!==Fk?Fk:`0x${Bk.toString(16)}`} clear ${ak}${516===Bk||518===Bk?" (reverse-Z)":""}, samples ${String(kk.getParameter(yk.SAMPLES))}, ${tk}`
        }(kk)));
        const Bk = kk.getError();
        Bk !== yk.NO_ERROR && mF.gl < dF && (mF.gl++, hk(`GL error 0x${Bk.toString(16)} after program ${uk(ak)}'s first terrain draw (${Fk})`))
      }
      const sk = ck.pendingCheck;
      null !== sk && (sk.terrainDraws++, sk.draws.length < sF && Zk(kk, tk, ak, Fk, bk, wk))
    }
    let MF = !1;
    const gF = new WeakSet;
    var UF = Bk(4252),
      cF = Bk(4428);
    const GF = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let TF = !1;
    const rF = new WeakSet,
      DF = new WeakMap,
      zF = new WeakMap,
      PF = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let hF = 0,
      qF = !1,
      CF = null,
      ZF = {
        draws: 0,
        faces: 0
      };

    function pF(kk) {
      const Fk = globalThis[kk];
      return null === Fk || void 0 === Fk ? void 0 : Fk.prototype
    }

    function KF(kk) {
      return kk && "function" === typeof kk[Symbol.iterator] ? [...kk].sort().join(" ") : ""
    }

    function xF(kk, Fk) {
      const Bk = null !== kk && void 0 !== kk ? kk : {},
        Rk = null !== Fk && void 0 !== Fk ? Fk : Object.keys(Object.getPrototypeOf(Bk)).concat(Object.keys(Bk));
      return [...new Set(Rk)].filter((kk => "number" === typeof Bk[kk])).map((kk => `${kk} ${String(Bk[kk])}`)).join(", ")
    }

    function jF(kk, Fk) {
      var Bk;
      const Rk = null !== (Bk = Fk.vertex) && void 0 !== Bk ? Bk : {};
      if (Rk.module && rF.has(Rk.module)) {
        var tk;
        const Bk = String(null !== (tk = Rk.entryPoint) && void 0 !== tk ? tk : "");
        if (Bk.startsWith("vs_packed") && DF.set(kk, Bk), !qF) {
          var ak, Xk, bk, wk, dk;
          qF = !0;
          const kk = null !== (ak = Fk.depthStencil) && void 0 !== ak ? ak : {},
            Rk = null !== (Xk = Fk.multisample) && void 0 !== Xk ? Xk : {},
            tk = String(null !== (bk = kk.depthCompare) && void 0 !== bk ? bk : "");
          hk(`WebGPU terrain pipeline ${Bk}: depth ${String(null!==(wk=kk.format)&&void 0!==wk?wk:"none")} ${tk}${tk.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(dk=Rk.count)&&void 0!==dk?dk:1)}`)
        }
      }
    }

    function lF(kk) {
      JF(kk, "setPipeline", (kk => function() {
        for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
        return zF.set(this, Bk[0]), VF(kk, this, Bk)
      }));
      for (const Fk of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) JF(kk, Fk, (kk => function() {
        const Bk = zF.get(this),
          Rk = Bk ? DF.get(Bk) : void 0;
        for (var tk = arguments.length, ak = new Array(tk), Xk = 0; Xk < tk; Xk++) ak[Xk] = arguments[Xk];
        return void 0 !== Rk && nF(Fk, Rk, ak), VF(kk, this, ak)
      }))
    }

    function nF(kk, Fk, Bk) {
      var Rk;
      (ZF.draws++, "draw" === kk || "drawIndexed" === kk) && (ZF.faces += Bk[0] * (null !== (Rk = Bk[1]) && void 0 !== Rk ? Rk : 1) / 6);
      if (null !== CF && CF.length < sF) {
        const Rk = ("draw" === kk ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === kk ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((Fk, Rk) => {
          const tk = kk.endsWith("Indirect") ? Bk[1] : Bk[Rk];
          return `${Fk} ${String(null!==tk&&void 0!==tk?tk:"instances"===Fk?1:0)}`
        }));
        CF.push(`  ${Fk} ${kk} ${Rk.join(" ")}`)
      }
    }

    function IF() {
      if (TF || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      TF = !0, JF(pF("GPU"), "requestAdapter", (kk => function() {
        for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
        return VF(kk, this, Bk).then((kk => {
          var Fk;
          kk ? function(kk) {
            var Fk;
            const Bk = null !== (Fk = kk.info) && void 0 !== Fk ? Fk : {};
            hk(`WebGPU adapter ${["vendor","architecture","device","description"].map((kk=>{var Fk;return`${kk} "${String(null!==(Fk=Bk[kk])&&void 0!==Fk?Fk:"")}"`})).join(" ")}${kk.isFallbackAdapter?" (fallback)":""}`), hk(`WebGPU adapter features ${KF(kk.features)}`), hk(`WebGPU adapter limits ${xF(kk.limits,GF)}`), qk(`WebGPU adapter all limits ${xF(kk.limits,null)}`)
          }(kk) : hk(`WebGPU requestAdapter(${JSON.stringify(null!==(Fk=Bk[0])&&void 0!==Fk?Fk:{})}) gave none`);
          return kk
        }))
      })), JF(pF("GPUAdapter"), "requestDevice", (kk => function() {
        for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
        return VF(kk, this, Bk).then((kk => (function(kk) {
          hk(`WebGPU device features ${KF(kk.features)}`), hk(`WebGPU device limits ${xF(kk.limits,GF)}`), kk.addEventListener("uncapturederror", (kk => {
            if (PF.uncaptured < dF) {
              var Fk, Bk, Rk;
              PF.uncaptured++;
              const tk = kk.error;
              hk(`WebGPU uncaptured ${null!==(Fk=null===tk||void 0===tk||null===(Bk=tk.constructor)||void 0===Bk?void 0:Bk.name)&&void 0!==Fk?Fk:"error"}: ${Ck(String(null!==(Rk=null===tk||void 0===tk?void 0:tk.message)&&void 0!==Rk?Rk:""),600)}`)
            }
          }));
          const Fk = kk.lost;
          null === Fk || void 0 === Fk || Fk.then((kk => {
            var Fk;
            hk(`WebGPU device lost (${String(kk.reason)}): ${Ck(String(null!==(Fk=kk.message)&&void 0!==Fk?Fk:""),600)}`)
          }))
        }(kk), kk)), (kk => {
          throw hk(`WebGPU requestDevice failed: ${String(kk)}`), kk
        }))
      }));
      const kk = pF("GPUDevice");
      JF(kk, "createShaderModule", (kk => function() {
        for (var Fk, Bk, Rk = arguments.length, tk = new Array(Rk), ak = 0; ak < Rk; ak++) tk[ak] = arguments[ak];
        const Xk = VF(kk, this, tk);
        return function(kk, Fk) {
          const Bk = Fk.includes("decodeQuad");
          Bk && rF.add(kk);
          const Rk = kk.getCompilationInfo;
          null === Rk || void 0 === Rk || Rk.call(kk).then((kk => {
            if (0 === kk.messages.length && !Bk) return;
            const Fk = {};
            for (const Bk of kk.messages) {
              var Rk;
              Fk[String(Bk.type)] = (null !== (Rk = Fk[String(Bk.type)]) && void 0 !== Rk ? Rk : 0) + 1
            }
            const tk = kk.messages.map((kk => `${String(kk.type)} ${String(kk.lineNum)}:${String(kk.linePos)} ${String(kk.message)}`)).join("\n");
            PF.compile < dF && (PF.compile++, hk(`WebGPU ${Bk?"terrain ":""}shader module compiled: ${JSON.stringify(Fk)}${tk?` first: ${Ck(tk.split("\n")[0],300)}`:""}`)), tk && qk(`WebGPU shader module messages:\n${Ck(tk)}`)
          }))
        }(Xk, String(null !== (Fk = (null !== (Bk = tk[0]) && void 0 !== Bk ? Bk : {}).code) && void 0 !== Fk ? Fk : "")), Xk
      })), JF(kk, "createRenderPipeline", (kk => function() {
        for (var Fk, Bk = arguments.length, Rk = new Array(Bk), tk = 0; tk < Bk; tk++) Rk[tk] = arguments[tk];
        const ak = VF(kk, this, Rk);
        return jF(ak, null !== (Fk = Rk[0]) && void 0 !== Fk ? Fk : {}), ak
      })), JF(kk, "createRenderPipelineAsync", (kk => function() {
        for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
        return VF(kk, this, Bk).then((kk => {
          var Fk;
          return jF(kk, null !== (Fk = Bk[0]) && void 0 !== Fk ? Fk : {}), kk
        }), (kk => {
          var Fk;
          throw function(kk, Fk) {
            var Bk, Rk, tk;
            if (PF.rejected >= dF) return;
            PF.rejected++;
            const {
              reason: ak,
              message: Xk
            } = null !== Fk && void 0 !== Fk ? Fk : {}, bk = String(null !== (Bk = (null !== (Rk = kk.vertex) && void 0 !== Rk ? Rk : {}).entryPoint) && void 0 !== Bk ? Bk : "");
            hk(`WebGPU pipeline "${String(null!==(tk=kk.label)&&void 0!==tk?tk:"")}" ${bk} rejected (${String(null!==ak&&void 0!==ak?ak:"no reason")}): ${Ck(String(null!==Xk&&void 0!==Xk?Xk:Fk),600)}`)
          }(null !== (Fk = Bk[0]) && void 0 !== Fk ? Fk : {}, kk), kk
        }))
      })), JF(pF("GPUCanvasContext"), "configure", (kk => function() {
        for (var Fk, Bk = arguments.length, Rk = new Array(Bk), tk = 0; tk < Bk; tk++) Rk[tk] = arguments[tk];
        const ak = null !== (Fk = Rk[0]) && void 0 !== Fk ? Fk : {};
        var Xk, bk;
        hF++ < 3 && hk(`WebGPU canvas ${String(ak.format)} ${String(null!==(Xk=ak.colorSpace)&&void 0!==Xk?Xk:"srgb")} alpha ${String(null!==(bk=ak.alphaMode)&&void 0!==bk?bk:"opaque")}`);
        return VF(kk, this, Rk)
      })), lF(pF("GPURenderPassEncoder")), lF(pF("GPURenderBundleEncoder"))
    }
    const QF = 1e4,
      kB = 6e4,
      FB = 5e3,
      BB = 3e3,
      RB = 100;
    let tB = null,
      aB = !1,
      XB = {
        ...UF.e
      },
      bB = !1,
      wB = null,
      dB = 0,
      sB = () => {};
    const VB = new Promise((kk => {
      sB = kk
    }));

    function JB() {
      var kk;
      aB || (aB = !0, XB = Object.assign(window.bloxdRenderDebug ??= {
        ...UF.e
      }, {
        faceCull: "0" === (0, ak.m)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (kk = (0, ak.m)("adrenoProbe")) && void 0 !== kk ? kk : ""
      }), hk("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), AF || "undefined" === typeof window || (AF = !0, "undefined" !== typeof WebGL2RenderingContext && EF(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && EF(WebGLRenderingContext.prototype, !1)), IF(), (0, ak.d)("renderProbe", (() => {
        WB("console")
      })), fB(), setInterval(iB, FB))
    }

    function AB(kk) {
      var Fk, Bk;
      JB(), tB = null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.backend) && void 0 !== Fk ? Fk : null;
      const Rk = `, renderer param ${null!==(Bk=(0,ak.m)("renderer"))&&void 0!==Bk?Bk:"none"}, faceCull ${"0"===XB.faceCull?"off (whole parts)":"on"}, adrenoProbe ${XB.adrenoProbe||"none"}`;
      hk(`${(0,cF.c)(kk)}${null===kk?"":Rk}`)
    }

    function eB() {
      const kk = performance.now(),
        Fk = yB(VB, QF, kB).then((Fk => WB(`${Math.round((performance.now()-kk)/1e3)} s after playable${Fk?"":", no terrain drawn yet"}`)));
      (0, tk.b)(hk, (async () => {
        await Fk, await wB
      }))
    }
    async function yB(kk, Fk, Bk) {
      const tk = (0, Rk.b)(Bk).then((() => !1));
      return await (0, Rk.b)(Fk), Promise.race([kk.then((() => !0)), tk])
    }

    function fB() {
      requestAnimationFrame((() => {
        dB++, fB()
      }))
    }

    function mB() {
      var kk, Fk, Bk;
      if (bB) return;
      (bB = !0, hk(`renderer caps ${null!==(kk=XB.caps)&&void 0!==kk?kk:"(not noted)"}; terrain fetch ${null!==(Fk=XB.fetch)&&void 0!==Fk?Fk:"(not noted)"}`), XB.adrenoProbe) && hk(`adrenoProbe ${XB.adrenoProbe} asked; in force (storage fetch only): ${null!==(Bk=XB.probe)&&void 0!==Bk?Bk:"(not noted)"}`);
      const Rk = ck.context;
      if (Rk) {
        for (const kk of function(kk) {
            var Fk;
            const Bk = [],
              Rk = kk.getExtension("WEBGL_debug_renderer_info"),
              tk = Rk ? kk.getParameter(Rk.UNMASKED_VENDOR_WEBGL) : "(masked)",
              ak = Rk ? kk.getParameter(Rk.UNMASKED_RENDERER_WEBGL) : "(masked)";
            Bk.push(`GL ${String(kk.getParameter(kk.VERSION))} | ${String(kk.getParameter(kk.SHADING_LANGUAGE_VERSION))} | ${String(kk.getParameter(kk.VENDOR))} / ${String(kk.getParameter(kk.RENDERER))}`), Bk.push(`GL unmasked ${tk} / ${ak}`);
            const Xk = [
              ["MAX_TEXTURE_SIZE", kk.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", kk.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", kk.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", kk.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", kk.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", kk.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", kk.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in kk && Xk.push(["MAX_UNIFORM_BLOCK_SIZE", kk.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", kk.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", kk.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", kk.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), Bk.push(`GL limits ${Xk.map((Fk=>{let[Bk,Rk]=Fk;return`${Bk} ${String(kk.getParameter(Rk))}`})).join(", ")}`);
            const bk = (Fk, Bk) => {
              const Rk = kk.getShaderPrecisionFormat(Fk, kk.HIGH_FLOAT),
                tk = kk.getShaderPrecisionFormat(Fk, kk.HIGH_INT);
              return `${Bk} highp float ${Rk?`${Rk.rangeMin}/${Rk.rangeMax}/${Rk.precision}`:"?"} int ${tk?`${tk.rangeMin}/${tk.rangeMax}/${tk.precision}`:"?"}`
            };
            Bk.push(`GL precision ${bk(kk.VERTEX_SHADER,"VS")}, ${bk(kk.FRAGMENT_SHADER,"FS")}`);
            const wk = kk.getContextAttributes();
            return Bk.push(`GL context ${JSON.stringify(wk)} drawingBuffer ${kk.drawingBufferWidth}x${kk.drawingBufferHeight}${"drawingBufferFormat"in kk?` format 0x${Number(kk.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in kk?` ${String(kk.drawingBufferColorSpace)}`:""}`), Bk.push(`GL extensions ${(null!==(Fk=kk.getSupportedExtensions())&&void 0!==Fk?Fk:[]).join(" ")}`), Bk
          }(Rk)) hk(kk);
        ! function() {
          if (!ck.context) return;
          let kk = 0,
            Fk = 0;
          for (const [Bk, Rk] of Mk) !Rk.gl.isContextLost() && Rk.gl.isProgram(Bk) && (Fk++, HF(Rk.gl, Bk, Rk), null !== Rk.terrain && kk++);
          hk(`programs: ${Fk} live of ${Mk.length} linked, ${kk} packed terrain; CPU page copies ${Math.round(ck.shadowBytes/1048576)} MiB (${ck.uncopied} over budget)`)
        }()
      }
    }

    function WB(kk) {
      return wB ??= async function(kk) {
        mB(), "webgpu" === tB ? (vB(), "1" === XB.slotCheck && hk("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), XB.slotCheck = "1", await
          function(kk) {
            if (null !== CF) return Promise.resolve();
            const Fk = [];
            return CF = Fk, new Promise((Bk => {
              setTimeout((() => {
                CF = null, hk(`WebGPU draw ranges (${kk}): ${Fk.length} terrain draws recorded in a second (first ${sF}; bundles replay without new ones)`);
                for (const kk of Fk) hk(kk);
                Bk()
              }), 1e3)
            }))
          }(kk), await async function() {
            for (let kk = 0;
              "1" === XB.slotCheck && kk < BB; kk += RB) await (0, Rk.b)(RB);
            if ("1" === XB.slotCheck) return void hk(`slot check: no answer in ${BB} ms (only the storage fetch has one; a later answer logs on its own)`);
            vB()
          }()) : await bF(kk);
        hk(`check (${kk}) done: bloxdDebug.save() downloads it all`)
      }(kk).catch((Fk => {
        hk(`check (${kk}) failed: ${String(Fk)}`)
      })).finally((() => {
        wB = null
      })), wB
    }

    function vB() {
      void 0 !== XB.slotCheck && "1" !== XB.slotCheck && (hk(XB.slotCheck), delete XB.slotCheck)
    }

    function iB() {
      const kk = kk => dB ? (kk / dB).toFixed(1) : "0",
        Fk = function() {
          const kk = ZF;
          return ZF = {
            draws: 0,
            faces: 0
          }, kk
        }(),
        Bk = function() {
          const kk = WF;
          return WF = {
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
        Rk = function() {
          const kk = vF;
          return vF = {
            buffer: 0,
            texture: 0
          }, kk
        }();
      vB(), ("webgpu" === tB ? Fk.draws : Bk.inst.draws + Bk.tex.draws) > 0 && sB();
      const tk = "webgpu" === tB ? [`terrain ${kk(Fk.draws)} draws ${kk(Fk.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((kk => Bk[kk].draws > 0)).map((Fk => `${Fk} ${kk(Bk[Fk].draws)} draws ${kk(Bk[Fk].faces)} faces a frame`));
      hk(`${dB} frames: ${tk.join(", ")||"no draws"}; uploaded ${Math.round(Rk.buffer/1024)} KiB to buffers, ${Math.round(Rk.texture/1024)} KiB to data textures`), dB = 0
    }
  },
  4428: (kk, Fk, Bk) => {
    function Rk(kk) {
      if (null === kk) return "backend: none picked (no renderer build)";
      const Fk = kk.adapter ? `${kk.adapter.vendor}/${kk.adapter.architecture}` : "none";
      return `backend ${kk.backend}: reason ${kk.reason}, source ${kk.source}, adapter ${Fk}`
    }
    Bk.d(Fk, {
      c: () => Rk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);