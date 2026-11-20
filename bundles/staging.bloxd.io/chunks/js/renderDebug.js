export const id = 47;
export const ids = [47];
export const modules = {
  4516: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => uq
    });
    var Yq = gq(24),
      lq = gq(31),
      Oq = gq(1274),
      mq = gq(2733);
    const xq = 3e4,
      Aq = 1e3;

    function cq() {
      return "visible" === document.visibilityState && "inGame" === Yq.b.get("gameState") && (0, Oq.p)()
    }

    function uq(qq, Eq) {
      (0, mq.v)() || function(qq, Eq, gq) {
        let Yq = 0;
        const lq = setInterval((() => {
          Eq() && (Yq += Aq, Yq >= qq && (clearInterval(lq), gq()))
        }), Aq)
      }(xq, cq, (() => {
        Eq().then((() => {
          qq(`saved for the player after ${xq/1e3} s of play`), (0, mq.C)(), lq.i.TV("chat", {
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
  4511: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      installRenderDebug: () => Bg,
      renderDebugPlayable: () => Ng,
      startRenderDebug: () => Wg,
      waitForDraw: () => ag
    });
    var Yq = gq(1789),
      lq = gq(4516),
      Oq = gq(2733);
    const mq = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function xq(qq) {
      return 7 & qq
    }

    function Aq(qq) {
      return qq >>> 11 & 1
    }

    function cq(qq) {
      return [1 + (qq >>> 18 & 63), 1 + (qq >>> 24 & 63)]
    }

    function uq(qq, Eq) {
      const [gq, , Yq] = qq, lq = xq(Yq), Oq = function(qq, Eq, gq) {
        return Eq + (1 === (22 >>> qq & 1) ? 4 - gq : gq) & 3
      }(lq, Aq(Yq), Eq), mq = lq >>> 1, [uq, Bq] = cq(gq), Wq = 1 === Oq || 2 === Oq ? uq : 0, Nq = Oq >= 2 ? Bq : 0, aq = [63 & gq, gq >>> 6 & 63, gq >>> 12 & 63];
      return aq[2 === mq ? 0 : 2] += Wq, aq[1 === mq ? 0 : 1] += Nq, aq
    }

    function Bq(qq) {
      const Eq = Math.max(...cq(qq[0]));
      return 1 === Eq ? "1" : Eq <= 4 ? "2-4" : Eq <= 16 ? "5-16" : "17-64"
    }
    const Wq = 16;

    function Nq(qq) {
      let Eq = 2166136261;
      for (let gq = 0; gq < qq.length; gq++) Eq = Math.imul(Eq ^ qq[gq], 16777619);
      return Eq >>> 0
    }

    function aq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const Yq = Math.max(0, Eq - gq),
        lq = Math.min(qq.length, Eq + gq),
        Oq = [];
      for (let mq = Yq; mq < lq; mq++) {
        const gq = qq[mq].toString(16).padStart(2, "0");
        Oq.push(mq === Eq ? `[${gq}]` : gq)
      }
      return Oq.join(" ")
    }
    const Vq = {
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
      dq = "_vs2fs_location0",
      jq = 0,
      Hq = 4,
      oq = 6,
      Pq = [0, 1, 2, 0, 2, 3],
      Qq = 2048,
      yq = 4,
      tq = 256,
      rq = 64,
      vq = 268435456,
      hq = 65536,
      nq = /^#version [^\n]*\/\/ program (\S+)$/m;

    function bq(qq) {
      return null === qq.name ? `#${qq.id}` : `#${qq.id} ${qq.name}`
    }
    const iq = [],
      Zq = new WeakMap,
      fq = new WeakMap,
      Mq = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let Tq = 1;
    const zq = new WeakMap;

    function Sq(qq) {
      if (null === qq) return 0;
      let Eq = zq.get(qq);
      return void 0 === Eq && (Eq = Tq++, zq.set(qq, Eq)), Eq
    }
    class pq {
      constructor(qq, Eq) {
        this.print = qq, this.now = Eq, this.shown = 0, this.Fc = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.jN = [], this.dropped = 0
      }
      line(qq) {
        const Eq = this.now();
        if (Eq - this.second >= 1e3 && (this.second = Eq, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.Fc++, void this.store(qq);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${qq} (the last line here: the rest go to bloxdDebug.save())` : qq)
      }
      keep(qq) {
        this.sections++, this.store(qq)
      }
      store(qq) {
        this.jN.push(`${new Date(Date.now()).toISOString()} ${qq}`), this.jN.length > 2e4 && (this.jN.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.Fc} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.jN].join("\n")
      }
    }
    let Gq = null;

    function Lq() {
      if (null === Gq) {
        const qq = new pq((qq => {
          (0, Oq.m)("render", qq)
        }), (() => performance.now()));
        (0, Oq.j)("render", (() => qq.dump())), Gq = qq
      }
      return Gq
    }

    function Jq(qq) {
      Lq().line(qq)
    }

    function kq(qq) {
      Lq().keep(qq)
    }

    function Rq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return qq.length <= Eq ? qq : `${qq.slice(0,Eq)}... (${qq.length-Eq} more characters)`
    }

    function Uq(qq, Eq, gq, Yq, lq, Oq) {
      const mq = Mq.pendingCheck;
      if (null === mq) return;
      const xq = "undefined" !== typeof WebGL2RenderingContext && qq instanceof WebGL2RenderingContext,
        Aq = {
          gl: qq,
          program: gq,
          call: Yq,
          zV: lq,
          instances: Oq,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (mq.draws.push(Aq), xq) try {
        const Yq = function(qq) {
          const Eq = [],
            gq = new Map,
            Yq = Math.min(16, qq.getParameter(Vq.MAX_VERTEX_ATTRIBS));
          for (let lq = 0; lq < Yq; lq++) {
            if (!qq.getVertexAttrib(lq, Vq.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const Yq = qq.getVertexAttrib(lq, Vq.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              Oq = qq.getVertexAttribOffset(lq, Vq.VERTEX_ATTRIB_ARRAY_POINTER),
              mq = qq.getVertexAttrib(lq, Vq.VERTEX_ATTRIB_ARRAY_STRIDE),
              xq = qq.getVertexAttrib(lq, Vq.VERTEX_ATTRIB_ARRAY_SIZE),
              Aq = qq.getVertexAttrib(lq, Vq.VERTEX_ATTRIB_ARRAY_TYPE),
              cq = "VERTEX_ATTRIB_ARRAY_INTEGER" in qq && qq.getVertexAttrib(lq, Vq.VERTEX_ATTRIB_ARRAY_INTEGER),
              uq = "VERTEX_ATTRIB_ARRAY_DIVISOR" in qq ? qq.getVertexAttrib(lq, Vq.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            gq.set(lq, {
              buffer: Yq,
              offset: Oq,
              stride: mq
            }), Eq.push(`@${lq} buf#${Sq(Yq)} +${Oq} stride ${mq} ${xq}x0x${Aq.toString(16)}${cq?" int":""} div ${uq}`)
          }
          return {
            lines: Eq,
            byLocation: gq
          }
        }(qq);
        if (Aq.attributes = Yq.lines, "inst" === gq.terrain) {
          const {
            group: lq,
            chunk: xq
          } = function(qq, Eq, gq) {
            const Yq = Eq.get(oq),
              lq = qq.getVertexAttrib(oq, Vq.CURRENT_VERTEX_ATTRIB),
              Oq = Yq ? `+${Yq.offset}` : lq ? Array.from(lq).slice(0, 3).join(",") : "?";
            let mq = gq.groups.get(Oq);
            return void 0 === mq && (mq = gq.groups.size, gq.groups.set(Oq, mq)), {
              group: mq,
              chunk: Oq
            }
          }(qq, Yq.byLocation, mq);
          Aq.group = lq, Aq.chunk = xq;
          for (const qq of [jq, Hq]) {
            var cq;
            const Eq = null === (cq = Yq.byLocation.get(qq)) || void 0 === cq ? void 0 : cq.buffer;
            Eq && Aq.pages.push({
              kind: "buf",
              buffer: Eq
            })
          }! function(qq, Eq, gq, Yq, lq, Oq, mq) {
            const xq = Yq.get(jq),
              Aq = mq.parts.get(Oq);
            if (void 0 === Aq && mq.parts.size >= yq) return;
            const cq = Math.min(lq, rq, tq - (null !== Aq && void 0 !== Aq ? Aq : 0));
            if (null === xq || void 0 === xq || !xq.buffer || cq <= 0) return;
            const uq = Fq(qq, Eq, gq);
            if (!uq) return;
            const Bq = xq.stride || 12,
              Wq = Cq(qq, xq.buffer, xq.offset, (cq - 1) * Bq + 12),
              Nq = new DataView(Wq.buffer),
              aq = function(qq, Eq) {
                const gq = function(qq) {
                    const Eq = Dq.get(qq);
                    if (void 0 !== Eq && (null === Eq || qq.isProgram(Eq))) return Eq;
                    Mq.inProbe = !0;
                    let gq = null;
                    try {
                      gq = sq(qq, Iq, eq, "fed", "the record feed")
                    } finally {
                      Mq.inProbe = !1
                    }
                    return Dq.set(qq, gq), gq
                  }(qq),
                  Yq = gq ? Kq(qq, gq, Eq, (() => {
                    qq.drawArraysInstanced(Vq.POINTS, 0, 1, Eq)
                  }), "decode probe input (the record feed)") : null;
                return Yq ? new Uint32Array(Yq.buffer) : null
              }(qq, cq);
            aq || mq.fed.failed++;
            const dq = Kq(qq, uq, 4 * cq, (() => {
              qq.drawArraysInstanced(Vq.POINTS, 0, 4, cq)
            }));
            if (!dq) return;
            mq.parts.set(Oq, (null !== Aq && void 0 !== Aq ? Aq : 0) + cq);
            for (let Vq = 0; Vq < cq; Vq++) {
              const qq = Vq * Bq,
                Eq = [Nq.getUint32(qq, !0), Nq.getUint32(qq + 4, !0), Nq.getUint32(qq + 8, !0)],
                gq = aq ? [aq[3 * Vq], aq[3 * Vq + 1], aq[3 * Vq + 2]] : Eq;
              aq && (mq.fed.records++, gq.some(((qq, gq) => qq !== Eq[gq])) && (mq.fed.differing++, mq.fed.first.length < 8 && mq.fed.first.push(`part ${Oq} instance ${Vq}: fed ${gq.map(lE).join(" ")} buffer ${Eq.map(lE).join(" ")}`)));
              for (let Yq = 0; Yq < 4; Yq++) {
                const qq = 3 * (4 * Vq + Yq);
                mq.vertices.push({
                  record: gq,
                  slot: Yq,
                  group: Oq,
                  gpu: [dq[qq], dq[qq + 1], dq[qq + 2]]
                })
              }
            }
          }(qq, Eq, gq, Yq.byLocation, Oq, lq, mq)
        } else {
          const Yq = qE(qq, Eq, 16),
            Oq = qE(qq, Eq, 8);
          for (const qq of [Yq, Oq]) qq && Aq.pages.push({
            kind: "tex",
            texture: qq
          });
          Yq && function(qq, Eq, gq, Yq, lq, Oq) {
            if (Oq.parts.size >= yq) return;
            const mq = Fq(qq, Eq, gq);
            if (!mq) return;
            let xq = 6 * tq;
            const Aq = [];
            for (const [Nq, aq] of lq) {
              const qq = Math.min(aq, xq, Math.max(6, 6 * Math.floor(tq / lq.length)));
              qq > 0 && (Aq.push([Nq, qq]), xq -= qq)
            }
            const cq = Aq.reduce(((qq, Eq) => {
                let [, gq] = Eq;
                return qq + gq
              }), 0),
              uq = Kq(qq, mq, cq, (() => {
                for (const [Eq, gq] of Aq) qq.drawArrays(Vq.POINTS, Eq, gq)
              }));
            if (!uq) return;
            let Bq = 0;
            for (const [Nq, aq] of Aq) {
              const Eq = Math.floor(Nq / 6),
                gq = Math.floor((Nq + aq - 1) / 6) - Eq + 1,
                lq = EE(qq, Yq, Qq, Eq, gq);
              for (let qq = Nq; qq < Nq + aq; qq++, Bq++) {
                var Wq;
                const gq = 4 * (Math.floor(qq / 6) - Eq),
                  Yq = [lq[gq], lq[gq + 1], lq[gq + 2]];
                Oq.parts.set(lq[gq + 3], (null !== (Wq = Oq.parts.get(lq[gq + 3])) && void 0 !== Wq ? Wq : 0) + (qq % 6 === 0 ? 1 : 0)), Oq.vertices.push({
                  record: Yq,
                  slot: Pq[qq % 6],
                  group: lq[gq + 3],
                  gpu: [uq[3 * Bq], uq[3 * Bq + 1], uq[3 * Bq + 2]]
                })
              }
            }
          }(qq, Eq, gq, Yq, lq, mq)
        }
      } catch (uq) {
        Jq(`decode probe failed on program ${bq(gq)}: ${String(uq)}`)
      }
    }

    function Fq(qq, Eq, gq) {
      if (void 0 !== gq.probe) return gq.probe && Xq(qq, Eq, gq.probe), gq.probe;
      gq.probe = null, Mq.inProbe = !0;
      try {
        gq.probe = function(qq, Eq) {
          return sq(qq, Eq.vertex, Eq.fragment, dq, `program ${bq(Eq)}'s twin`)
        }(qq, gq)
      } finally {
        Mq.inProbe = !1
      }
      return gq.probe && Xq(qq, Eq, gq.probe), gq.probe
    }

    function sq(qq, Eq, gq, Yq, lq) {
      const Oq = [qq.createShader(Vq.VERTEX_SHADER), qq.createShader(Vq.FRAGMENT_SHADER)],
        mq = qq.createProgram();
      if (!mq || !Oq[0] || !Oq[1]) return null;
      qq.shaderSource(Oq[0], Eq), qq.shaderSource(Oq[1], gq);
      for (const Aq of Oq) qq.compileShader(Aq), qq.attachShader(mq, Aq);
      qq.transformFeedbackVaryings(mq, [Yq], Vq.INTERLEAVED_ATTRIBS), qq.linkProgram(mq);
      for (const Aq of Oq) qq.deleteShader(Aq);
      var xq;
      return qq.getProgramParameter(mq, Vq.LINK_STATUS) ? mq : (Jq(`decode probe: ${lq} failed to link: ${Rq(null!==(xq=qq.getProgramInfoLog(mq))&&void 0!==xq?xq:"",300)}`), qq.deleteProgram(mq), null)
    }

    function Xq(qq, Eq, gq) {
      const Yq = qq.getProgramParameter(Eq, Vq.ACTIVE_UNIFORM_BLOCKS);
      for (let xq = 0; xq < Yq; xq++) {
        const Yq = qq.getActiveUniformBlockName(Eq, xq),
          lq = null === Yq ? Vq.INVALID_INDEX : qq.getUniformBlockIndex(gq, Yq);
        lq !== Vq.INVALID_INDEX && qq.uniformBlockBinding(gq, lq, qq.getActiveUniformBlockParameter(Eq, xq, Vq.UNIFORM_BLOCK_BINDING))
      }
      const lq = qq.getParameter(Vq.CURRENT_PROGRAM);
      qq.useProgram(gq);
      const Oq = qq.getProgramParameter(Eq, Vq.ACTIVE_UNIFORMS),
        mq = qq.getActiveUniforms(Eq, [...Array(Oq).keys()], Vq.UNIFORM_BLOCK_INDEX);
      for (let xq = 0; xq < Oq; xq++) {
        const Yq = qq.getActiveUniform(Eq, xq);
        if (!Yq || -1 !== mq[xq]) continue;
        const lq = Yq.name.replace(/\[0\]$/, "");
        for (let Oq = 0; Oq < Yq.size; Oq++) {
          const mq = Yq.size > 1 ? `${lq}[${Oq}]` : Yq.name,
            xq = qq.getUniformLocation(Eq, mq),
            Aq = qq.getUniformLocation(gq, mq);
          xq && Aq && wq(qq, Aq, Yq.type, qq.getUniform(Eq, xq))
        }
      }
      qq.useProgram(lq)
    }

    function wq(qq, Eq, gq, Yq) {
      const lq = ArrayBuffer.isView(Yq) ? Array.from(Yq) : [Number(Yq)];
      switch (gq) {
        case Vq.FLOAT:
          return void qq.uniform1f(Eq, lq[0]);
        case Vq.FLOAT_VEC2:
          return void qq.uniform2fv(Eq, lq);
        case Vq.FLOAT_VEC3:
          return void qq.uniform3fv(Eq, lq);
        case Vq.FLOAT_VEC4:
          return void qq.uniform4fv(Eq, lq);
        case Vq.FLOAT_MAT3:
          return void qq.uniformMatrix3fv(Eq, !1, lq);
        case Vq.FLOAT_MAT4:
          return void qq.uniformMatrix4fv(Eq, !1, lq);
        case Vq.UNSIGNED_INT:
          return void qq.uniform1ui(Eq, lq[0]);
        case Vq.UNSIGNED_INT_VEC2:
          return void qq.uniform2uiv(Eq, lq);
        case Vq.UNSIGNED_INT_VEC3:
          return void qq.uniform3uiv(Eq, lq);
        case Vq.UNSIGNED_INT_VEC4:
          return void qq.uniform4uiv(Eq, lq);
        case Vq.INT_VEC2:
          return void qq.uniform2iv(Eq, lq);
        case Vq.INT_VEC3:
          return void qq.uniform3iv(Eq, lq);
        case Vq.INT_VEC4:
          return void qq.uniform4iv(Eq, lq);
        default:
          qq.uniform1i(Eq, lq[0])
      }
    }

    function Kq(qq, Eq, gq, Yq) {
      let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const Oq = qq.getParameter(Vq.CURRENT_PROGRAM),
        mq = qq.getParameter(Vq.TRANSFORM_FEEDBACK_BINDING),
        xq = qq.getParameter(Vq.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        Aq = qq.getParameter(Vq.COPY_READ_BUFFER_BINDING),
        cq = qq.isEnabled(Vq.RASTERIZER_DISCARD),
        uq = qq.createTransformFeedback(),
        Bq = qq.createBuffer();
      Mq.inProbe = !0;
      try {
        const Oq = qq.getError();
        Oq !== Vq.NO_ERROR && Jq(`GL error 0x${Oq.toString(16)} pending before the decode probe (the renderer's)`), qq.useProgram(Eq), qq.bindTransformFeedback(Vq.TRANSFORM_FEEDBACK, uq), qq.bindBuffer(Vq.TRANSFORM_FEEDBACK_BUFFER, Bq), qq.bufferData(Vq.TRANSFORM_FEEDBACK_BUFFER, 12 * gq, Vq.STREAM_READ), qq.bindBufferBase(Vq.TRANSFORM_FEEDBACK_BUFFER, 0, Bq), qq.enable(Vq.RASTERIZER_DISCARD), qq.beginTransformFeedback(Vq.POINTS), Yq(), qq.endTransformFeedback(), qq.bindBufferBase(Vq.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const mq = qq.getError();
        if (mq !== Vq.NO_ERROR) return Jq(`${lq}: GL error 0x${mq.toString(16)} on the feedback draw`), null;
        const xq = new Float32Array(3 * gq);
        return qq.bindBuffer(Vq.COPY_READ_BUFFER, Bq), qq.getBufferSubData(Vq.COPY_READ_BUFFER, 0, xq), xq
      } finally {
        cq || qq.disable(Vq.RASTERIZER_DISCARD), qq.bindTransformFeedback(Vq.TRANSFORM_FEEDBACK, mq), qq.bindBuffer(Vq.TRANSFORM_FEEDBACK_BUFFER, xq), qq.bindBuffer(Vq.COPY_READ_BUFFER, Aq), qq.deleteTransformFeedback(uq), qq.deleteBuffer(Bq), qq.useProgram(Oq), Mq.inProbe = !1
      }
    }

    function Cq(qq, Eq, gq, Yq) {
      const lq = qq.getParameter(Vq.COPY_READ_BUFFER_BINDING),
        Oq = new Uint8Array(Yq);
      return qq.bindBuffer(Vq.COPY_READ_BUFFER, Eq), qq.getBufferSubData(Vq.COPY_READ_BUFFER, gq, Oq), qq.bindBuffer(Vq.COPY_READ_BUFFER, lq), Oq
    }
    const Iq = `#version 300 es\nlayout(location = ${jq}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      eq = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      Dq = new WeakMap;

    function qE(qq, Eq, gq) {
      const Yq = qq.getProgramParameter(Eq, Vq.ACTIVE_UNIFORMS),
        lq = qq.getParameter(Vq.ACTIVE_TEXTURE);
      try {
        for (let lq = 0; lq < Yq; lq++) {
          const Yq = qq.getActiveUniform(Eq, lq);
          if ((null === Yq || void 0 === Yq ? void 0 : Yq.type) !== Vq.UNSIGNED_INT_SAMPLER_2D) continue;
          const Oq = qq.getUniformLocation(Eq, Yq.name),
            mq = Oq ? qq.getUniform(Eq, Oq) : -1;
          if (mq < 0) continue;
          qq.activeTexture(Vq.TEXTURE0 + mq);
          const xq = qq.getParameter(Vq.TEXTURE_BINDING_2D);
          if (xq && fq.get(xq) === gq) return xq
        }
        return null
      } finally {
        qq.activeTexture(lq)
      }
    }

    function EE(qq, Eq, gq, Yq, lq) {
      const Oq = new Uint32Array(4 * lq),
        mq = qq.getParameter(Vq.READ_FRAMEBUFFER_BINDING),
        xq = qq.createFramebuffer();
      qq.bindFramebuffer(Vq.READ_FRAMEBUFFER, xq), qq.framebufferTexture2D(Vq.READ_FRAMEBUFFER, Vq.COLOR_ATTACHMENT0, Vq.TEXTURE_2D, Eq, 0);
      try {
        let Eq = 0;
        for (; Eq < lq;) {
          const mq = Yq + Eq,
            xq = mq % gq,
            Aq = Math.min(lq - Eq, gq - xq);
          qq.readPixels(xq, Math.floor(mq / gq), Aq, 1, Vq.RGBA_INTEGER, Vq.UNSIGNED_INT, Oq.subarray(4 * Eq, 4 * (Eq + Aq))), Eq += Aq
        }
      } finally {
        qq.bindFramebuffer(Vq.READ_FRAMEBUFFER, mq), qq.deleteFramebuffer(xq)
      }
      return Oq
    }

    function gE(qq, Eq, gq) {
      let Yq = 0,
        lq = 0;
      for (let Aq = 0; Aq < Eq.bytes.length; Aq += hq) {
        Yq++;
        const qq = Math.min(Aq + hq, Eq.bytes.length);
        Nq(Eq.bytes.subarray(Aq, qq)) !== Nq(gq.subarray(Aq, qq)) && lq++
      }
      const Oq = `${qq} ${Eq.bytes.length} B cpu ${Nq(Eq.bytes).toString(16)} gpu ${Nq(gq).toString(16)}, ${lq}/${Yq} blocks differ${Eq.missed?`, ${Eq.missed} GPU-side writes uncopied`:""}`;
      if (0 === lq) return Oq;
      const {
        count: mq,
        offsets: xq
      } = function(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const Yq = Math.min(qq.length, Eq.length);
        let lq = Math.abs(qq.length - Eq.length);
        const Oq = [];
        for (let mq = 0; mq < Yq; mq++) qq[mq] !== Eq[mq] && (lq++, Oq.length < gq && Oq.push(mq));
        return {
          count: lq,
          offsets: Oq
        }
      }(Eq.bytes, gq);
      return kq([`${Oq}: ${mq} bytes differ`, ...xq.map((qq => `  +${qq}: cpu ${aq(Eq.bytes,qq)} | gpu ${aq(gq,qq)}`))].join("\n")), `${Oq}: ${mq} bytes differ, first at ${xq.join(", ")} (context in the saved file)`
    }

    function YE(qq) {
      if (0 === qq.vertices.length) return void Jq(`decode probe (${qq.reason}): no terrain draw probed (${qq.draws.length} seen)`);
      const Eq = function(qq) {
          const Eq = new Map;
          for (const Yq of qq) {
            const qq = Eq.get(Yq.group);
            qq ? qq.push(Yq) : Eq.set(Yq.group, [Yq])
          }
          const gq = {
            vertices: qq.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [Yq, lq] of Eq) {
            const qq = new Map,
              Eq = lq.map((Eq => {
                const gq = uq(Eq.record, Eq.slot),
                  Yq = [Eq.gpu[0] - gq[0], Eq.gpu[1] - gq[1], Eq.gpu[2] - gq[2]],
                  lq = Yq.map((qq => Math.round(64 * qq))).join(","),
                  Oq = qq.get(lq);
                return Oq ? Oq.count++ : qq.set(lq, {
                  count: 1,
                  offset: Yq
                }), gq
              }));
            let Oq = [0, 0, 0],
              mq = 0;
            for (const gq of qq.values()) gq.count > mq && (mq = gq.count, Oq = gq.offset);
            gq.translations.set(Yq, Oq), lq.forEach(((qq, Yq) => {
              var lq;
              const mq = [Eq[Yq][0] + Oq[0], Eq[Yq][1] + Oq[1], Eq[Yq][2] + Oq[2]];
              if (mq.every(((Eq, gq) => {
                  return Yq = qq.gpu[gq], lq = Eq, Math.abs(Yq - lq) <= Math.max(.001, 1e-6 * Math.abs(lq));
                  var Yq, lq
                }))) return;
              gq.mismatches++, gq.byDirection[xq(qq.record[2])]++, gq.byDiagonal[Aq(qq.record[2])]++;
              const cq = Bq(qq.record);
              gq.byBand[cq] = (null !== (lq = gq.byBand[cq]) && void 0 !== lq ? lq : 0) + 1, gq.first.length < Wq && gq.first.push({
                ...qq,
                expected: mq
              })
            }))
          }
          return gq
        }(qq.vertices),
        gq = Eq.byDirection.map(((qq, Eq) => qq ? `${mq[Eq]} ${qq}` : "")).filter(Boolean).join(" "),
        Yq = Object.entries(Eq.byBand).map((qq => {
          let [Eq, gq] = qq;
          return `${Eq}: ${gq}`
        })).join(" ");
      if (Jq(`decode probe (${qq.reason}): ${Eq.mismatches}/${Eq.vertices} vertices differ from the CPU decode over ${qq.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (Eq.mismatches ? ` by direction [${gq}] diagonal [0: ${Eq.byDiagonal[0]} 1: ${Eq.byDiagonal[1]}] extent [${Yq}]` : "")), qq.fed.records > 0 || qq.fed.failed > 0) {
        Jq(`decode probe input: ${qq.fed.differing}/${qq.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (qq.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (qq.fed.failed ? `; the feed failed on ${qq.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const Eq of qq.fed.first) Jq(`  ${Eq}`)
      }
      for (const lq of Eq.first) {
        const [qq, Eq, gq] = lq.record;
        Jq(`  mismatch part ${lq.group} r0 ${qq.toString(16)} r1 ${Eq.toString(16)} r2 ${gq.toString(16)} slot ${lq.slot} (${mq[xq(gq)]}): expected ${lq.expected.map(OE).join(",")} gpu ${lq.gpu.map(OE).join(",")}`)
      }
      kq(`decode probe translations: ${[...Eq.translations].map((qq=>{let[Eq,gq]=qq;return`${Eq}: ${gq.map(OE).join(",")}`})).join("; ")}`)
    }

    function lE(qq) {
      return qq.toString(16)
    }

    function OE(qq) {
      return Number.isInteger(qq) ? String(qq) : qq.toFixed(3)
    }

    function mE(qq) {
      return null !== Mq.pendingCheck ? Promise.resolve() : new Promise((Eq => {
        let gq = !1;
        const Yq = {
          reason: qq,
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
        Mq.pendingCheck = Yq;
        const lq = () => {
            Mq.pendingCheck = null;
            try {
              ! function(qq) {
                Jq(`draw ranges (${qq.reason}): ${qq.terrainDraws} terrain draws in the frame, the first ${qq.draws.length} here`);
                for (const Eq of qq.draws) {
                  const qq = Eq.zV.slice(0, 8).map((qq => {
                      let [Eq, gq] = qq;
                      return `${Eq}+${gq}`
                    })).join(" "),
                    gq = Eq.zV.length > 8 ? ` (+${Eq.zV.length-8} ranges)` : "";
                  Jq(`  ${bq(Eq.program)} ${Eq.program.terrain} ${Eq.call} ${qq}${gq} x${Eq.instances}${Eq.group>=0?` part ${Eq.group} chunk ${Eq.chunk}`:""} | ${Eq.attributes.join(" | ")}`)
                }
              }(Yq), YE(Yq);
              Yq.draws.some((qq => "undefined" !== typeof WebGL2RenderingContext && qq.gl instanceof WebGL2RenderingContext)) || 0 === Yq.draws.length ? function(qq) {
                const Eq = [],
                  gq = new Map;
                for (const Yq of qq)
                  if ("undefined" !== typeof WebGL2RenderingContext && Yq.gl instanceof WebGL2RenderingContext)
                    for (const qq of Yq.pages) gq.set("buf" === qq.kind ? qq.buffer : qq.texture, {
                      page: qq,
                      gl: Yq.gl
                    });
                for (const [Yq, {
                    page: lq,
                    gl: Oq
                  }] of gq) {
                  const qq = Zq.get(Yq);
                  if (!qq) {
                    Eq.push(`${lq.kind}#${Sq(Yq)}: no CPU copy (${Mq.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === lq.kind) {
                    Eq.push(gE(`buf#${qq.id}`, qq, Cq(Oq, lq.buffer, 0, qq.bytes.length)));
                    continue
                  }
                  const gq = EE(Oq, lq.texture, qq.width, 0, qq.width * qq.height),
                    mq = 16 === qq.texelBytes ? new Uint8Array(gq.buffer) : new Uint8Array(new Uint16Array(gq).buffer);
                  Eq.push(gE(`tex#${qq.id} (${16===qq.texelBytes?"records":"light"})`, qq, mq))
                }
                for (const Yq of Eq) Jq(`page readback ${Yq}`)
              }(Yq.draws) : Jq("page readback: none on WebGL1 (no buffer readback)")
            } catch (qq) {
              Jq(`check failed: ${String(qq)}`)
            }
            Eq()
          },
          Oq = () => {
            if (Yq.draws.length > 0 && !gq) return gq = !0, void setTimeout(lq, 0);
            gq || requestAnimationFrame(Oq)
          };
        requestAnimationFrame(Oq), setTimeout((() => {
          gq || (gq = !0, lq())
        }), 5e3)
      }))
    }
    var xE = gq(4524);
    const AE = 20,
      cE = 24,
      uE = Reflect.apply;

    function BE(qq, Eq, gq) {
      if (!qq) return;
      const Yq = qq[Eq];
      if ("function" === typeof Yq) {
        const lq = gq(Yq);
        qq[Eq] = lq, (0, xE.B)(lq, Yq)
      }
    }
    let WE = !1;
    const NE = new WeakMap,
      aE = new WeakMap,
      VE = new WeakMap,
      dE = {
        gl: 0,
        lost: 0
      };
    let jE = {
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
      HE = {
        buffer: 0,
        texture: 0
      },
      oE = 0;

    function PE(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (qq instanceof ArrayBuffer) return new Uint8Array(qq, Eq, gq || void 0);
      if (!ArrayBuffer.isView(qq)) return null;
      const Yq = "BYTES_PER_ELEMENT" in qq ? qq.BYTES_PER_ELEMENT : 1,
        lq = qq.byteOffset + Eq * Yq,
        Oq = gq ? gq * Yq : qq.byteLength - Eq * Yq;
      return new Uint8Array(qq.buffer, lq, Math.max(0, Oq))
    }

    function QE(qq, Eq) {
      const gq = function(qq) {
        switch (qq) {
          case Vq.ARRAY_BUFFER:
            return Vq.ARRAY_BUFFER_BINDING;
          case Vq.ELEMENT_ARRAY_BUFFER:
            return Vq.ELEMENT_ARRAY_BUFFER_BINDING;
          case Vq.COPY_READ_BUFFER:
            return Vq.COPY_READ_BUFFER_BINDING;
          case Vq.COPY_WRITE_BUFFER:
            return Vq.COPY_WRITE_BUFFER_BINDING;
          case Vq.UNIFORM_BUFFER:
            return Vq.UNIFORM_BUFFER_BINDING;
          case Vq.PIXEL_UNPACK_BUFFER:
            return Vq.PIXEL_UNPACK_BUFFER_BINDING;
          case Vq.TRANSFORM_FEEDBACK_BUFFER:
            return Vq.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(Eq);
      return gq ? qq.getParameter(gq) : null
    }

    function yE(qq) {
      const Eq = Zq.get(qq);
      Eq && (Mq.shadowBytes -= Eq.bytes.length, Zq.delete(qq))
    }

    function tE(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      yE(qq), Mq.shadowBytes + Eq > vq ? Mq.uncopied++ : (Mq.shadowBytes += Eq, Zq.set(qq, {
        id: Sq(qq),
        bytes: new Uint8Array(Eq),
        width: gq,
        height: Yq,
        texelBytes: lq,
        missed: 0
      }))
    }

    function rE(qq, Eq) {
      for (const gq of ["deleteBuffer", "deleteTexture"]) BE(qq, gq, (qq => function() {
        for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
        return gq[0] && yE(gq[0]), uE(qq, this, gq)
      }));
      BE(qq, "shaderSource", (qq => function() {
        for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
        return gq[0] && "string" === typeof gq[1] && NE.set(gq[0], gq[1]), uE(qq, this, gq)
      })), BE(qq, "attachShader", (qq => function() {
        for (var Eq, gq = arguments.length, Yq = new Array(gq), lq = 0; lq < gq; lq++) Yq[lq] = arguments[lq];
        const Oq = Yq[0],
          mq = null !== (Eq = aE.get(Oq)) && void 0 !== Eq ? Eq : [];
        return mq.push(Yq[1]), aE.set(Oq, mq), uE(qq, this, Yq)
      })), BE(qq, "linkProgram", (qq => function() {
        for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
        const lq = uE(qq, this, gq);
        return Mq.inProbe || function(qq, Eq) {
          var gq, Yq, lq;
          "undefined" !== typeof HTMLCanvasElement && qq.canvas instanceof HTMLCanvasElement && function(qq) {
            if (ZE.has(qq)) return;
            ZE.add(qq);
            for (const Eq of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) qq.addEventListener(Eq, (qq => {
              dE.lost < AE && (dE.lost++, Jq(`${Eq}${"statusMessage"in qq?`: ${String(qq.statusMessage)}`:""}`))
            }))
          }(qq.canvas);
          Mq.context ??= qq;
          const Oq = null !== (gq = aE.get(Eq)) && void 0 !== gq ? gq : [];
          let mq = "",
            xq = "";
          for (const uq of Oq) {
            var Aq;
            const qq = null !== (Aq = NE.get(uq)) && void 0 !== Aq ? Aq : "";
            /\bgl_Position\b/.test(qq) ? mq = qq : xq = qq
          }
          const cq = {
            id: Sq(Eq),
            name: null !== (Yq = null === (lq = nq.exec(mq)) || void 0 === lq ? void 0 : lq[1]) && void 0 !== Yq ? Yq : null,
            gl: qq,
            vertex: mq,
            fragment: xq,
            terrain: hE(mq),
            checked: !1,
            firstDraw: !1
          };
          if (VE.set(Eq, cq), iq.push([Eq, cq]), null !== cq.terrain) {
            const Eq = Oq.map((Eq => {
              var gq;
              return null !== (gq = qq.getShaderInfoLog(Eq)) && void 0 !== gq ? gq : ""
            })).filter((qq => "" !== qq.trim()));
            Eq.length > 0 && kq(`program ${bq(cq)} (${cq.terrain}) shader logs:\n${Rq(Eq.join("\n"))}`)
          }
        }(this, gq[0]), lq
      })), BE(qq, "bufferData", (qq => function() {
        for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
        const lq = uE(qq, this, gq);
        if (!Mq.inProbe) {
          const qq = QE(this, gq[0]);
          if (qq) {
            var Oq, mq, xq;
            const Eq = "number" === typeof gq[1] ? null : PE(gq[1], null !== (Oq = gq[3]) && void 0 !== Oq ? Oq : 0, null !== (mq = gq[4]) && void 0 !== mq ? mq : 0);
            var Aq;
            if (tE(qq, "number" === typeof gq[1] ? gq[1] : null !== (xq = null === Eq || void 0 === Eq ? void 0 : Eq.length) && void 0 !== xq ? xq : 0), Eq) null === (Aq = Zq.get(qq)) || void 0 === Aq || Aq.bytes.set(Eq)
          }
        }
        return lq
      })), BE(qq, "bufferSubData", (qq => function() {
        for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
        const lq = uE(qq, this, gq);
        if (!Mq.inProbe) {
          var Oq, mq;
          const qq = QE(this, gq[0]),
            Eq = qq ? Zq.get(qq) : void 0,
            Yq = PE(gq[2], null !== (Oq = gq[3]) && void 0 !== Oq ? Oq : 0, null !== (mq = gq[4]) && void 0 !== mq ? mq : 0);
          if (Eq && Yq) {
            const qq = gq[1];
            Eq.bytes.set(Yq.subarray(0, Math.max(0, Eq.bytes.length - qq)), qq), vE("buffer", Eq, qq, Yq.length)
          }
        }
        return lq
      })), Eq && (BE(qq, "copyBufferSubData", (qq => function() {
        for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
        const lq = uE(qq, this, gq);
        if (!Mq.inProbe) {
          const [qq, Eq, Yq, lq, Oq] = gq, mq = QE(this, qq), xq = QE(this, Eq), Aq = mq ? Zq.get(mq) : void 0, cq = xq ? Zq.get(xq) : void 0;
          cq && (Aq ? cq.bytes.set(Aq.bytes.slice(Yq, Yq + Oq), lq) : cq.missed++)
        }
        return lq
      })), BE(qq, "texStorage2D", (qq => function() {
        for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
        const lq = uE(qq, this, gq),
          [, , Oq, mq, xq] = gq;
        if (!Mq.inProbe && (Oq === Vq.RGBA32UI || Oq === Vq.RGBA16UI)) {
          const qq = this.getParameter(Vq.TEXTURE_BINDING_2D),
            Eq = Oq === Vq.RGBA32UI ? 16 : 8;
          qq && (fq.set(qq, Eq), tE(qq, mq * xq * Eq, mq, xq, Eq))
        }
        return lq
      })), BE(qq, "texSubImage2D", (qq => function() {
        for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
        const lq = uE(qq, this, gq);
        return !Mq.inProbe && gq.length >= 9 && gq[0] === Vq.TEXTURE_2D && 0 === gq[1] && function(qq, Eq) {
          var gq;
          const Yq = qq.getParameter(Vq.TEXTURE_BINDING_2D),
            lq = Yq ? Zq.get(Yq) : void 0;
          if (!lq) return;
          const [, , Oq, mq, xq, Aq] = Eq;
          let cq = PE(Eq[8], null !== (gq = Eq[9]) && void 0 !== gq ? gq : 0);
          if (null === cq && "number" === typeof Eq[8]) {
            const gq = QE(qq, Vq.PIXEL_UNPACK_BUFFER),
              Yq = gq ? Zq.get(gq) : void 0;
            cq = Yq ? Yq.bytes.subarray(Eq[8]) : null
          }
          if (null === cq) return void lq.missed++;
          const uq = qq.getParameter(Vq.UNPACK_ROW_LENGTH) || xq,
            Bq = qq.getParameter(Vq.UNPACK_SKIP_ROWS),
            Wq = qq.getParameter(Vq.UNPACK_SKIP_PIXELS),
            Nq = lq.texelBytes;
          for (let aq = 0; aq < Aq; aq++) {
            const qq = ((Bq + aq) * uq + Wq) * Nq,
              Eq = ((mq + aq) * lq.width + Oq) * Nq;
            lq.bytes.set(cq.subarray(qq, qq + xq * Nq), Eq)
          }
          vE("texture", lq, (mq * lq.width + Oq) * Nq, xq * Aq * Nq)
        }(this, gq), lq
      })), BE(qq, "copyTexSubImage2D", (qq => function() {
        for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
        const lq = gq[0] === Vq.TEXTURE_2D ? this.getParameter(Vq.TEXTURE_BINDING_2D) : null,
          Oq = lq ? Zq.get(lq) : void 0;
        return Oq && Oq.missed++, uE(qq, this, gq)
      })));
      for (const gq of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) BE(qq, gq, (qq => function() {
        for (var Eq = arguments.length, Yq = new Array(Eq), lq = 0; lq < Eq; lq++) Yq[lq] = arguments[lq];
        const Oq = uE(qq, this, Yq);
        return Mq.inProbe || bE(this, gq, Yq), Oq
      }));
      BE(qq, "getExtension", (qq => function() {
        for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
        const lq = uE(qq, this, gq);
        return lq && "object" === typeof lq && function(qq, Eq, gq) {
          const Yq = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(Eq in Yq) || gq.bloxdRenderDebug) return;
          gq.bloxdRenderDebug = !0;
          for (const lq of Yq[Eq]) {
            const Eq = gq[lq];
            "function" === typeof Eq && (gq[lq] = function() {
              for (var Yq = arguments.length, Oq = new Array(Yq), mq = 0; mq < Yq; mq++) Oq[mq] = arguments[mq];
              const xq = uE(Eq, gq, Oq);
              return Mq.inProbe || bE(qq, lq, Oq), xq
            })
          }
        }(this, gq[0], lq), lq
      }))
    }

    function vE(qq, Eq, gq, Yq) {
      HE[qq] += Yq, oE < 32 && Eq.bytes.length >= 1 << 20 && (oE++, kq(`upload ${qq} #${Eq.id} +${gq} ${Yq} B`))
    }

    function hE(qq) {
      if (!qq.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(qq) || /in uvec3 _p2vs_location0\b/.test(qq) ? "inst" : "tex"
    }

    function nE(qq, Eq, gq) {
      var Yq;
      if (gq.checked) return;
      gq.checked = !0;
      const lq = qq.getProgramParameter(Eq, Vq.LINK_STATUS),
        Oq = (null !== (Yq = qq.getProgramInfoLog(Eq)) && void 0 !== Yq ? Yq : "").trim();
      var mq;
      null === gq.terrain && lq || (Jq(`program ${bq(gq)} ${null!==(mq=gq.terrain)&&void 0!==mq?mq:"other"} link ${lq?"ok":"FAILED"}${Oq?`: ${Rq(Oq,300)}`:""}`), Oq && kq(`program ${bq(gq)} link log:\n${Rq(Oq)}`))
    }

    function bE(qq, Eq, gq) {
      var Yq;
      const lq = qq.getParameter(Vq.CURRENT_PROGRAM),
        Oq = lq ? VE.get(lq) : void 0;
      if (!lq || !Oq) return;
      const mq = null !== (Yq = Oq.terrain) && void 0 !== Yq ? Yq : "other",
        {
          zV: xq,
          instances: Aq
        } = function(qq, Eq) {
          switch (qq) {
            case "drawArrays":
              return {
                zV: [
                  [Eq[1], Eq[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                zV: [
                  [Eq[1], Eq[2]]
                ], instances: Eq[3]
              };
            case "drawElements":
              return {
                zV: [
                  [0, Eq[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                zV: [
                  [0, Eq[1]]
                ], instances: Eq[4]
              };
            case "multiDrawArraysWEBGL": {
              const qq = Eq[1],
                gq = Eq[3],
                Yq = Eq[2],
                lq = Eq[4],
                Oq = [];
              for (let mq = 0; mq < Eq[5]; mq++) Oq.push([qq[Yq + mq], gq[lq + mq]]);
              return {
                zV: Oq,
                instances: 1
              }
            }
            default:
              return {
                zV: [], instances: 0
              }
          }
        }(Eq, gq),
        cq = "inst" === Oq.terrain ? Aq : xq.reduce(((qq, Eq) => {
          let [, gq] = Eq;
          return qq + gq
        }), 0) / 6;
      if (jE[mq].draws++, jE[mq].faces += cq, null === Oq.terrain) return;
      if (Mq.context = qq, !Oq.firstDraw) {
        Oq.firstDraw = !0, nE(qq, lq, Oq), iE || (iE = !0, Jq(function(qq) {
          var Eq;
          const gq = qq.getParameter(Vq.DEPTH_FUNC),
            Yq = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let lq = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in qq && qq.getParameter(Vq.DRAW_FRAMEBUFFER_BINDING)) {
            const Eq = qq;
            lq = Eq.getFramebufferAttachmentParameter(Vq.DRAW_FRAMEBUFFER, Vq.DEPTH_ATTACHMENT, Vq.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(Eq.getFramebufferAttachmentParameter(Vq.DRAW_FRAMEBUFFER,Vq.DEPTH_ATTACHMENT,Vq.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(Eq.getFramebufferAttachmentParameter(Vq.DRAW_FRAMEBUFFER,Vq.DEPTH_ATTACHMENT,Vq.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const Oq = qq.getParameter(Vq.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(Eq=Yq[gq])&&void 0!==Eq?Eq:`0x${gq.toString(16)}`} clear ${Oq}${516===gq||518===gq?" (reverse-Z)":""}, samples ${String(qq.getParameter(Vq.SAMPLES))}, ${lq}`
        }(qq)));
        const gq = qq.getError();
        gq !== Vq.NO_ERROR && dE.gl < AE && (dE.gl++, Jq(`GL error 0x${gq.toString(16)} after program ${bq(Oq)}'s first terrain draw (${Eq})`))
      }
      const uq = Mq.pendingCheck;
      null !== uq && (uq.terrainDraws++, uq.draws.length < cE && Uq(qq, lq, Oq, Eq, xq, Aq))
    }
    let iE = !1;
    const ZE = new WeakSet;
    var fE = gq(4340),
      ME = gq(4527);
    const TE = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let zE = !1;
    const SE = new WeakSet,
      pE = new WeakMap,
      GE = new WeakMap,
      LE = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let JE = 0,
      kE = !1,
      RE = null,
      UE = {
        draws: 0,
        faces: 0
      };

    function FE(qq) {
      const Eq = globalThis[qq];
      return null === Eq || void 0 === Eq ? void 0 : Eq.prototype
    }

    function sE(qq) {
      return qq && "function" === typeof qq[Symbol.iterator] ? [...qq].sort().join(" ") : ""
    }

    function XE(qq, Eq) {
      const gq = null !== qq && void 0 !== qq ? qq : {},
        Yq = null !== Eq && void 0 !== Eq ? Eq : Object.keys(Object.getPrototypeOf(gq)).concat(Object.keys(gq));
      return [...new Set(Yq)].filter((qq => "number" === typeof gq[qq])).map((qq => `${qq} ${String(gq[qq])}`)).join(", ")
    }

    function wE(qq, Eq) {
      var gq;
      const Yq = null !== (gq = Eq.vertex) && void 0 !== gq ? gq : {};
      if (Yq.module && SE.has(Yq.module)) {
        var lq;
        const gq = String(null !== (lq = Yq.entryPoint) && void 0 !== lq ? lq : "");
        if (gq.startsWith("vs_packed") && pE.set(qq, gq), !kE) {
          var Oq, mq, xq, Aq, cq;
          kE = !0;
          const qq = null !== (Oq = Eq.depthStencil) && void 0 !== Oq ? Oq : {},
            Yq = null !== (mq = Eq.multisample) && void 0 !== mq ? mq : {},
            lq = String(null !== (xq = qq.depthCompare) && void 0 !== xq ? xq : "");
          Jq(`WebGPU terrain pipeline ${gq}: depth ${String(null!==(Aq=qq.format)&&void 0!==Aq?Aq:"none")} ${lq}${lq.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(cq=Yq.count)&&void 0!==cq?cq:1)}`)
        }
      }
    }

    function KE(qq) {
      BE(qq, "setPipeline", (qq => function() {
        for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
        return GE.set(this, gq[0]), uE(qq, this, gq)
      }));
      for (const Eq of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) BE(qq, Eq, (qq => function() {
        const gq = GE.get(this),
          Yq = gq ? pE.get(gq) : void 0;
        for (var lq = arguments.length, Oq = new Array(lq), mq = 0; mq < lq; mq++) Oq[mq] = arguments[mq];
        return void 0 !== Yq && CE(Eq, Yq, Oq), uE(qq, this, Oq)
      }))
    }

    function CE(qq, Eq, gq) {
      var Yq;
      (UE.draws++, "draw" === qq || "drawIndexed" === qq) && (UE.faces += gq[0] * (null !== (Yq = gq[1]) && void 0 !== Yq ? Yq : 1) / 6);
      if (null !== RE && RE.length < cE) {
        const Yq = ("draw" === qq ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === qq ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((Eq, Yq) => {
          const lq = qq.endsWith("Indirect") ? gq[1] : gq[Yq];
          return `${Eq} ${String(null!==lq&&void 0!==lq?lq:"instances"===Eq?1:0)}`
        }));
        RE.push(`  ${Eq} ${qq} ${Yq.join(" ")}`)
      }
    }

    function IE() {
      if (zE || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      zE = !0, BE(FE("GPU"), "requestAdapter", (qq => function() {
        for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
        return uE(qq, this, gq).then((qq => {
          var Eq;
          qq ? function(qq) {
            var Eq;
            const gq = null !== (Eq = qq.info) && void 0 !== Eq ? Eq : {};
            Jq(`WebGPU adapter ${["vendor","architecture","device","description"].map((qq=>{var Eq;return`${qq} "${String(null!==(Eq=gq[qq])&&void 0!==Eq?Eq:"")}"`})).join(" ")}${qq.isFallbackAdapter?" (fallback)":""}`), Jq(`WebGPU adapter features ${sE(qq.features)}`), Jq(`WebGPU adapter limits ${XE(qq.limits,TE)}`), kq(`WebGPU adapter all limits ${XE(qq.limits,null)}`)
          }(qq) : Jq(`WebGPU requestAdapter(${JSON.stringify(null!==(Eq=gq[0])&&void 0!==Eq?Eq:{})}) gave none`);
          return qq
        }))
      })), BE(FE("GPUAdapter"), "requestDevice", (qq => function() {
        for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
        return uE(qq, this, gq).then((qq => (function(qq) {
          Jq(`WebGPU device features ${sE(qq.features)}`), Jq(`WebGPU device limits ${XE(qq.limits,TE)}`), qq.addEventListener("uncapturederror", (qq => {
            if (LE.uncaptured < AE) {
              var Eq, gq, Yq;
              LE.uncaptured++;
              const lq = qq.error;
              Jq(`WebGPU uncaptured ${null!==(Eq=null===lq||void 0===lq||null===(gq=lq.constructor)||void 0===gq?void 0:gq.name)&&void 0!==Eq?Eq:"error"}: ${Rq(String(null!==(Yq=null===lq||void 0===lq?void 0:lq.message)&&void 0!==Yq?Yq:""),600)}`)
            }
          }));
          const Eq = qq.lost;
          null === Eq || void 0 === Eq || Eq.then((qq => {
            var Eq;
            Jq(`WebGPU device lost (${String(qq.reason)}): ${Rq(String(null!==(Eq=qq.message)&&void 0!==Eq?Eq:""),600)}`)
          }))
        }(qq), qq)), (qq => {
          throw Jq(`WebGPU requestDevice failed: ${String(qq)}`), qq
        }))
      }));
      const qq = FE("GPUDevice");
      BE(qq, "createShaderModule", (qq => function() {
        for (var Eq, gq, Yq = arguments.length, lq = new Array(Yq), Oq = 0; Oq < Yq; Oq++) lq[Oq] = arguments[Oq];
        const mq = uE(qq, this, lq);
        return function(qq, Eq) {
          const gq = Eq.includes("decodeQuad");
          gq && SE.add(qq);
          const Yq = qq.getCompilationInfo;
          null === Yq || void 0 === Yq || Yq.call(qq).then((qq => {
            if (0 === qq.messages.length && !gq) return;
            const Eq = {};
            for (const gq of qq.messages) {
              var Yq;
              Eq[String(gq.type)] = (null !== (Yq = Eq[String(gq.type)]) && void 0 !== Yq ? Yq : 0) + 1
            }
            const lq = qq.messages.map((qq => `${String(qq.type)} ${String(qq.lineNum)}:${String(qq.linePos)} ${String(qq.message)}`)).join("\n");
            LE.compile < AE && (LE.compile++, Jq(`WebGPU ${gq?"terrain ":""}shader module compiled: ${JSON.stringify(Eq)}${lq?` first: ${Rq(lq.split("\n")[0],300)}`:""}`)), lq && kq(`WebGPU shader module messages:\n${Rq(lq)}`)
          }))
        }(mq, String(null !== (Eq = (null !== (gq = lq[0]) && void 0 !== gq ? gq : {}).code) && void 0 !== Eq ? Eq : "")), mq
      })), BE(qq, "createRenderPipeline", (qq => function() {
        for (var Eq, gq = arguments.length, Yq = new Array(gq), lq = 0; lq < gq; lq++) Yq[lq] = arguments[lq];
        const Oq = uE(qq, this, Yq);
        return wE(Oq, null !== (Eq = Yq[0]) && void 0 !== Eq ? Eq : {}), Oq
      })), BE(qq, "createRenderPipelineAsync", (qq => function() {
        for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
        return uE(qq, this, gq).then((qq => {
          var Eq;
          return wE(qq, null !== (Eq = gq[0]) && void 0 !== Eq ? Eq : {}), qq
        }), (qq => {
          var Eq;
          throw function(qq, Eq) {
            var gq, Yq, lq;
            if (LE.rejected >= AE) return;
            LE.rejected++;
            const {
              reason: Oq,
              message: mq
            } = null !== Eq && void 0 !== Eq ? Eq : {}, xq = String(null !== (gq = (null !== (Yq = qq.vertex) && void 0 !== Yq ? Yq : {}).entryPoint) && void 0 !== gq ? gq : "");
            Jq(`WebGPU pipeline "${String(null!==(lq=qq.label)&&void 0!==lq?lq:"")}" ${xq} rejected (${String(null!==Oq&&void 0!==Oq?Oq:"no reason")}): ${Rq(String(null!==mq&&void 0!==mq?mq:Eq),600)}`)
          }(null !== (Eq = gq[0]) && void 0 !== Eq ? Eq : {}, qq), qq
        }))
      })), BE(FE("GPUCanvasContext"), "configure", (qq => function() {
        for (var Eq, gq = arguments.length, Yq = new Array(gq), lq = 0; lq < gq; lq++) Yq[lq] = arguments[lq];
        const Oq = null !== (Eq = Yq[0]) && void 0 !== Eq ? Eq : {};
        var mq, xq;
        JE++ < 3 && Jq(`WebGPU canvas ${String(Oq.format)} ${String(null!==(mq=Oq.colorSpace)&&void 0!==mq?mq:"srgb")} alpha ${String(null!==(xq=Oq.alphaMode)&&void 0!==xq?xq:"opaque")}`);
        return uE(qq, this, Yq)
      })), KE(FE("GPURenderPassEncoder")), KE(FE("GPURenderBundleEncoder"))
    }
    const eE = 1e4,
      DE = 6e4,
      qg = 5e3,
      Eg = 3e3,
      gg = 100;
    let Yg = null,
      lg = !1,
      Og = {
        ...fE.b
      },
      mg = !1,
      xg = null,
      Ag = 0,
      cg = () => {};
    const ug = new Promise((qq => {
      cg = qq
    }));

    function Bg() {
      var qq;
      lg || (lg = !0, Og = Object.assign(window.bloxdRenderDebug ??= {
        ...fE.b
      }, {
        faceCull: "0" === (0, Oq.o)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (qq = (0, Oq.o)("adrenoProbe")) && void 0 !== qq ? qq : ""
      }), Jq("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), WE || "undefined" === typeof window || (WE = !0, "undefined" !== typeof WebGL2RenderingContext && rE(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && rE(WebGLRenderingContext.prototype, !1)), IE(), (0, Oq.c)("renderProbe", (() => {
        jg("console")
      })), Vg(), setInterval(og, qg))
    }

    function Wg(qq) {
      var Eq, gq;
      Bg(), Yg = null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.backend) && void 0 !== Eq ? Eq : null;
      const Yq = `, renderer param ${null!==(gq=(0,Oq.o)("renderer"))&&void 0!==gq?gq:"none"}, faceCull ${"0"===Og.faceCull?"off (whole parts)":"on"}, adrenoProbe ${Og.adrenoProbe||"none"}`;
      Jq(`${(0,ME.e)(qq)}${null===qq?"":Yq}`)
    }

    function Ng() {
      const qq = performance.now(),
        Eq = ag(ug, eE, DE).then((Eq => jg(`${Math.round((performance.now()-qq)/1e3)} s after playable${Eq?"":", no terrain drawn yet"}`)));
      (0, lq.d)(Jq, (async () => {
        await Eq, await xg
      }))
    }
    async function ag(qq, Eq, gq) {
      const lq = (0, Yq.b)(gq).then((() => !1));
      return await (0, Yq.b)(Eq), Promise.race([qq.then((() => !0)), lq])
    }

    function Vg() {
      requestAnimationFrame((() => {
        Ag++, Vg()
      }))
    }

    function dg() {
      var qq, Eq, gq;
      if (mg) return;
      (mg = !0, Jq(`renderer caps ${null!==(qq=Og.caps)&&void 0!==qq?qq:"(not noted)"}; terrain fetch ${null!==(Eq=Og.fetch)&&void 0!==Eq?Eq:"(not noted)"}`), Og.adrenoProbe) && Jq(`adrenoProbe ${Og.adrenoProbe} asked; in force (storage fetch only): ${null!==(gq=Og.probe)&&void 0!==gq?gq:"(not noted)"}`);
      const Yq = Mq.context;
      if (Yq) {
        for (const qq of function(qq) {
            var Eq;
            const gq = [],
              Yq = qq.getExtension("WEBGL_debug_renderer_info"),
              lq = Yq ? qq.getParameter(Yq.UNMASKED_VENDOR_WEBGL) : "(masked)",
              Oq = Yq ? qq.getParameter(Yq.UNMASKED_RENDERER_WEBGL) : "(masked)";
            gq.push(`GL ${String(qq.getParameter(qq.VERSION))} | ${String(qq.getParameter(qq.SHADING_LANGUAGE_VERSION))} | ${String(qq.getParameter(qq.VENDOR))} / ${String(qq.getParameter(qq.RENDERER))}`), gq.push(`GL unmasked ${lq} / ${Oq}`);
            const mq = [
              ["MAX_TEXTURE_SIZE", qq.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", qq.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", qq.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", qq.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", qq.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", qq.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", qq.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in qq && mq.push(["MAX_UNIFORM_BLOCK_SIZE", qq.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", qq.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", qq.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", qq.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), gq.push(`GL limits ${mq.map((Eq=>{let[gq,Yq]=Eq;return`${gq} ${String(qq.getParameter(Yq))}`})).join(", ")}`);
            const xq = (Eq, gq) => {
              const Yq = qq.getShaderPrecisionFormat(Eq, qq.HIGH_FLOAT),
                lq = qq.getShaderPrecisionFormat(Eq, qq.HIGH_INT);
              return `${gq} highp float ${Yq?`${Yq.rangeMin}/${Yq.rangeMax}/${Yq.precision}`:"?"} int ${lq?`${lq.rangeMin}/${lq.rangeMax}/${lq.precision}`:"?"}`
            };
            gq.push(`GL precision ${xq(qq.VERTEX_SHADER,"VS")}, ${xq(qq.FRAGMENT_SHADER,"FS")}`);
            const Aq = qq.getContextAttributes();
            return gq.push(`GL context ${JSON.stringify(Aq)} drawingBuffer ${qq.drawingBufferWidth}x${qq.drawingBufferHeight}${"drawingBufferFormat"in qq?` format 0x${Number(qq.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in qq?` ${String(qq.drawingBufferColorSpace)}`:""}`), gq.push(`GL extensions ${(null!==(Eq=qq.getSupportedExtensions())&&void 0!==Eq?Eq:[]).join(" ")}`), gq
          }(Yq)) Jq(qq);
        ! function() {
          if (!Mq.context) return;
          let qq = 0,
            Eq = 0;
          for (const [gq, Yq] of iq) !Yq.gl.isContextLost() && Yq.gl.isProgram(gq) && (Eq++, nE(Yq.gl, gq, Yq), null !== Yq.terrain && qq++);
          Jq(`programs: ${Eq} live of ${iq.length} linked, ${qq} packed terrain; CPU page copies ${Math.round(Mq.shadowBytes/1048576)} MiB (${Mq.uncopied} over budget)`)
        }()
      }
    }

    function jg(qq) {
      return xg ??= async function(qq) {
        dg(), "webgpu" === Yg ? (Hg(), "1" === Og.slotCheck && Jq("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), Og.slotCheck = "1", await
          function(qq) {
            if (null !== RE) return Promise.resolve();
            const Eq = [];
            return RE = Eq, new Promise((gq => {
              setTimeout((() => {
                RE = null, Jq(`WebGPU draw ranges (${qq}): ${Eq.length} terrain draws recorded in a second (first ${cE}; bundles replay without new ones)`);
                for (const qq of Eq) Jq(qq);
                gq()
              }), 1e3)
            }))
          }(qq), await async function() {
            if (await (0, fE.g)(Og, "slotCheck", ["1"], Eg, gg), "1" === Og.slotCheck) return void Jq(`slot check: no answer in ${Eg} ms (only the storage fetch has one; a later answer logs on its own)`);
            Hg()
          }()) : await mE(qq);
        Jq(`check (${qq}) done: bloxdDebug.save() downloads it all`)
      }(qq).catch((Eq => {
        Jq(`check (${qq}) failed: ${String(Eq)}`)
      })).finally((() => {
        xg = null
      })), xg
    }

    function Hg() {
      void 0 !== Og.slotCheck && "1" !== Og.slotCheck && (Jq(Og.slotCheck), delete Og.slotCheck)
    }

    function og() {
      const qq = qq => Ag ? (qq / Ag).toFixed(1) : "0",
        Eq = function() {
          const qq = UE;
          return UE = {
            draws: 0,
            faces: 0
          }, qq
        }(),
        gq = function() {
          const qq = jE;
          return jE = {
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
          }, qq
        }(),
        Yq = function() {
          const qq = HE;
          return HE = {
            buffer: 0,
            texture: 0
          }, qq
        }();
      Hg(), ("webgpu" === Yg ? Eq.draws : gq.inst.draws + gq.tex.draws) > 0 && cg();
      const lq = "webgpu" === Yg ? [`terrain ${qq(Eq.draws)} draws ${qq(Eq.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((qq => gq[qq].draws > 0)).map((Eq => `${Eq} ${qq(gq[Eq].draws)} draws ${qq(gq[Eq].faces)} faces a frame`));
      Jq(`${Ag} frames: ${lq.join(", ")||"no draws"}; uploaded ${Math.round(Yq.buffer/1024)} KiB to buffers, ${Math.round(Yq.texture/1024)} KiB to data textures`), Ag = 0
    }
  },
  4527: (qq, Eq, gq) => {
    function Yq(qq) {
      if (null === qq) return "backend: none picked (no renderer build)";
      const Eq = qq.adapter ? `${qq.adapter.vendor}/${qq.adapter.architecture}` : "none";
      return `backend ${qq.backend}: reason ${qq.reason}, source ${qq.source}, adapter ${Eq}`
    }
    gq.d(Eq, {
      e: () => Yq
    })
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);