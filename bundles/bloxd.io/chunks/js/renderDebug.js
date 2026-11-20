export const id = 47;
export const ids = [47];
export const modules = {
  4368: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => vb
    });
    var Ab = Ub(19),
      Mb = Ub(22),
      Tb = Ub(1216),
      Eb = Ub(2621);
    const Yb = 3e4,
      Bb = 1e3;

    function eb() {
      return "visible" === document.visibilityState && "inGame" === Ab.c.get("gameState") && (0, Tb.i)()
    }

    function vb(bb, ab) {
      (0, Eb.u)() || function(bb, ab, Ub) {
        let Ab = 0;
        const Mb = setInterval((() => {
          ab() && (Ab += Bb, Ab >= bb && (clearInterval(Mb), Ub()))
        }), Bb)
      }(Yb, eb, (() => {
        ab().then((() => {
          bb(`saved for the player after ${Yb/1e3} s of play`), (0, Eb.C)(), Mb.m.IR("chat", {
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
  4363: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      installRenderDebug: () => LU,
      renderDebugPlayable: () => XU,
      startRenderDebug: () => PU,
      waitForDraw: () => jU
    });
    var Ab = Ub(1704),
      Mb = Ub(4368),
      Tb = Ub(2621);
    const Eb = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function Yb(bb) {
      return 7 & bb
    }

    function Bb(bb) {
      return bb >>> 11 & 1
    }

    function eb(bb) {
      return [1 + (bb >>> 18 & 63), 1 + (bb >>> 24 & 63)]
    }

    function vb(bb, ab) {
      const [Ub, , Ab] = bb, Mb = Yb(Ab), Tb = function(bb, ab, Ub) {
        return ab + (1 === (22 >>> bb & 1) ? 4 - Ub : Ub) & 3
      }(Mb, Bb(Ab), ab), Eb = Mb >>> 1, [vb, Lb] = eb(Ub), Pb = 1 === Tb || 2 === Tb ? vb : 0, Xb = Tb >= 2 ? Lb : 0, jb = [63 & Ub, Ub >>> 6 & 63, Ub >>> 12 & 63];
      return jb[2 === Eb ? 0 : 2] += Pb, jb[1 === Eb ? 0 : 1] += Xb, jb
    }

    function Lb(bb) {
      const ab = Math.max(...eb(bb[0]));
      return 1 === ab ? "1" : ab <= 4 ? "2-4" : ab <= 16 ? "5-16" : "17-64"
    }
    const Pb = 16;

    function Xb(bb) {
      let ab = 2166136261;
      for (let Ub = 0; Ub < bb.length; Ub++) ab = Math.imul(ab ^ bb[Ub], 16777619);
      return ab >>> 0
    }

    function jb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const Ab = Math.max(0, ab - Ub),
        Mb = Math.min(bb.length, ab + Ub),
        Tb = [];
      for (let Eb = Ab; Eb < Mb; Eb++) {
        const Ub = bb[Eb].toString(16).padStart(2, "0");
        Tb.push(Eb === ab ? `[${Ub}]` : Ub)
      }
      return Tb.join(" ")
    }
    const Rb = {
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
      kb = "_vs2fs_location0",
      yb = 0,
      Zb = 4,
      Db = 6,
      zb = [0, 1, 2, 0, 2, 3],
      xb = 2048,
      ib = 4,
      fb = 256,
      mb = 64,
      pb = 268435456,
      Nb = 65536,
      Wb = /^#version [^\n]*\/\/ program (\S+)$/m;

    function Hb(bb) {
      return null === bb.name ? `#${bb.id}` : `#${bb.id} ${bb.name}`
    }
    const Ib = [],
      db = new WeakMap,
      Fb = new WeakMap,
      hb = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let Gb = 1;
    const Qb = new WeakMap;

    function qb(bb) {
      if (null === bb) return 0;
      let ab = Qb.get(bb);
      return void 0 === ab && (ab = Gb++, Qb.set(bb, ab)), ab
    }
    class ub {
      constructor(bb, ab) {
        this.print = bb, this.now = ab, this.shown = 0, this.PY = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.RX = [], this.dropped = 0
      }
      line(bb) {
        const ab = this.now();
        if (ab - this.second >= 1e3 && (this.second = ab, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.PY++, void this.store(bb);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${bb} (the last line here: the rest go to bloxdDebug.save())` : bb)
      }
      keep(bb) {
        this.sections++, this.store(bb)
      }
      store(bb) {
        this.RX.push(`${new Date(Date.now()).toISOString()} ${bb}`), this.RX.length > 2e4 && (this.RX.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.PY} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.RX].join("\n")
      }
    }
    let rb = null;

    function Kb() {
      if (null === rb) {
        const bb = new ub((bb => {
          (0, Tb.n)("render", bb)
        }), (() => performance.now()));
        (0, Tb.j)("render", (() => bb.dump())), rb = bb
      }
      return rb
    }

    function ob(bb) {
      Kb().line(bb)
    }

    function lb(bb) {
      Kb().keep(bb)
    }

    function tb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return bb.length <= ab ? bb : `${bb.slice(0,ab)}... (${bb.length-ab} more characters)`
    }

    function wb(bb, ab, Ub, Ab, Mb, Tb) {
      const Eb = hb.pendingCheck;
      if (null === Eb) return;
      const Yb = "undefined" !== typeof WebGL2RenderingContext && bb instanceof WebGL2RenderingContext,
        Bb = {
          gl: bb,
          program: Ub,
          call: Ab,
          cj: Mb,
          instances: Tb,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (Eb.draws.push(Bb), Yb) try {
        const Ab = function(bb) {
          const ab = [],
            Ub = new Map,
            Ab = Math.min(16, bb.getParameter(Rb.MAX_VERTEX_ATTRIBS));
          for (let Mb = 0; Mb < Ab; Mb++) {
            if (!bb.getVertexAttrib(Mb, Rb.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const Ab = bb.getVertexAttrib(Mb, Rb.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              Tb = bb.getVertexAttribOffset(Mb, Rb.VERTEX_ATTRIB_ARRAY_POINTER),
              Eb = bb.getVertexAttrib(Mb, Rb.VERTEX_ATTRIB_ARRAY_STRIDE),
              Yb = bb.getVertexAttrib(Mb, Rb.VERTEX_ATTRIB_ARRAY_SIZE),
              Bb = bb.getVertexAttrib(Mb, Rb.VERTEX_ATTRIB_ARRAY_TYPE),
              eb = "VERTEX_ATTRIB_ARRAY_INTEGER" in bb && bb.getVertexAttrib(Mb, Rb.VERTEX_ATTRIB_ARRAY_INTEGER),
              vb = "VERTEX_ATTRIB_ARRAY_DIVISOR" in bb ? bb.getVertexAttrib(Mb, Rb.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            Ub.set(Mb, {
              buffer: Ab,
              offset: Tb,
              stride: Eb
            }), ab.push(`@${Mb} buf#${qb(Ab)} +${Tb} stride ${Eb} ${Yb}x0x${Bb.toString(16)}${eb?" int":""} div ${vb}`)
          }
          return {
            lines: ab,
            byLocation: Ub
          }
        }(bb);
        if (Bb.attributes = Ab.lines, "inst" === Ub.terrain) {
          const {
            group: Mb,
            chunk: Yb
          } = function(bb, ab, Ub) {
            const Ab = ab.get(Db),
              Mb = bb.getVertexAttrib(Db, Rb.CURRENT_VERTEX_ATTRIB),
              Tb = Ab ? `+${Ab.offset}` : Mb ? Array.from(Mb).slice(0, 3).join(",") : "?";
            let Eb = Ub.groups.get(Tb);
            return void 0 === Eb && (Eb = Ub.groups.size, Ub.groups.set(Tb, Eb)), {
              group: Eb,
              chunk: Tb
            }
          }(bb, Ab.byLocation, Eb);
          Bb.group = Mb, Bb.chunk = Yb;
          for (const bb of [yb, Zb]) {
            var eb;
            const ab = null === (eb = Ab.byLocation.get(bb)) || void 0 === eb ? void 0 : eb.buffer;
            ab && Bb.pages.push({
              kind: "buf",
              buffer: ab
            })
          }! function(bb, ab, Ub, Ab, Mb, Tb, Eb) {
            const Yb = Ab.get(yb),
              Bb = Eb.parts.get(Tb);
            if (void 0 === Bb && Eb.parts.size >= ib) return;
            const eb = Math.min(Mb, mb, fb - (null !== Bb && void 0 !== Bb ? Bb : 0));
            if (null === Yb || void 0 === Yb || !Yb.buffer || eb <= 0) return;
            const vb = sb(bb, ab, Ub);
            if (!vb) return;
            const Lb = Yb.stride || 12,
              Pb = cb(bb, Yb.buffer, Yb.offset, (eb - 1) * Lb + 12),
              Xb = new DataView(Pb.buffer),
              jb = function(bb, ab) {
                const Ub = function(bb) {
                    const ab = Sb.get(bb);
                    if (void 0 !== ab && (null === ab || bb.isProgram(ab))) return ab;
                    hb.inProbe = !0;
                    let Ub = null;
                    try {
                      Ub = gb(bb, Jb, nb, "fed", "the record feed")
                    } finally {
                      hb.inProbe = !1
                    }
                    return Sb.set(bb, Ub), Ub
                  }(bb),
                  Ab = Ub ? Ob(bb, Ub, ab, (() => {
                    bb.drawArraysInstanced(Rb.POINTS, 0, 1, ab)
                  }), "decode probe input (the record feed)") : null;
                return Ab ? new Uint32Array(Ab.buffer) : null
              }(bb, eb);
            jb || Eb.fed.failed++;
            const kb = Ob(bb, vb, 4 * eb, (() => {
              bb.drawArraysInstanced(Rb.POINTS, 0, 4, eb)
            }));
            if (!kb) return;
            Eb.parts.set(Tb, (null !== Bb && void 0 !== Bb ? Bb : 0) + eb);
            for (let Rb = 0; Rb < eb; Rb++) {
              const bb = Rb * Lb,
                ab = [Xb.getUint32(bb, !0), Xb.getUint32(bb + 4, !0), Xb.getUint32(bb + 8, !0)],
                Ub = jb ? [jb[3 * Rb], jb[3 * Rb + 1], jb[3 * Rb + 2]] : ab;
              jb && (Eb.fed.records++, Ub.some(((bb, Ub) => bb !== ab[Ub])) && (Eb.fed.differing++, Eb.fed.first.length < 8 && Eb.fed.first.push(`part ${Tb} instance ${Rb}: fed ${Ub.map(Ma).join(" ")} buffer ${ab.map(Ma).join(" ")}`)));
              for (let Ab = 0; Ab < 4; Ab++) {
                const bb = 3 * (4 * Rb + Ab);
                Eb.vertices.push({
                  record: Ub,
                  slot: Ab,
                  group: Tb,
                  gpu: [kb[bb], kb[bb + 1], kb[bb + 2]]
                })
              }
            }
          }(bb, ab, Ub, Ab.byLocation, Tb, Mb, Eb)
        } else {
          const Ab = ba(bb, ab, 16),
            Tb = ba(bb, ab, 8);
          for (const bb of [Ab, Tb]) bb && Bb.pages.push({
            kind: "tex",
            texture: bb
          });
          Ab && function(bb, ab, Ub, Ab, Mb, Tb) {
            if (Tb.parts.size >= ib) return;
            const Eb = sb(bb, ab, Ub);
            if (!Eb) return;
            let Yb = 6 * fb;
            const Bb = [];
            for (const [Xb, jb] of Mb) {
              const bb = Math.min(jb, Yb, Math.max(6, 6 * Math.floor(fb / Mb.length)));
              bb > 0 && (Bb.push([Xb, bb]), Yb -= bb)
            }
            const eb = Bb.reduce(((bb, ab) => {
                let [, Ub] = ab;
                return bb + Ub
              }), 0),
              vb = Ob(bb, Eb, eb, (() => {
                for (const [ab, Ub] of Bb) bb.drawArrays(Rb.POINTS, ab, Ub)
              }));
            if (!vb) return;
            let Lb = 0;
            for (const [Xb, jb] of Bb) {
              const ab = Math.floor(Xb / 6),
                Ub = Math.floor((Xb + jb - 1) / 6) - ab + 1,
                Mb = aa(bb, Ab, xb, ab, Ub);
              for (let bb = Xb; bb < Xb + jb; bb++, Lb++) {
                var Pb;
                const Ub = 4 * (Math.floor(bb / 6) - ab),
                  Ab = [Mb[Ub], Mb[Ub + 1], Mb[Ub + 2]];
                Tb.parts.set(Mb[Ub + 3], (null !== (Pb = Tb.parts.get(Mb[Ub + 3])) && void 0 !== Pb ? Pb : 0) + (bb % 6 === 0 ? 1 : 0)), Tb.vertices.push({
                  record: Ab,
                  slot: zb[bb % 6],
                  group: Mb[Ub + 3],
                  gpu: [vb[3 * Lb], vb[3 * Lb + 1], vb[3 * Lb + 2]]
                })
              }
            }
          }(bb, ab, Ub, Ab, Mb, Eb)
        }
      } catch (vb) {
        ob(`decode probe failed on program ${Hb(Ub)}: ${String(vb)}`)
      }
    }

    function sb(bb, ab, Ub) {
      if (void 0 !== Ub.probe) return Ub.probe && Cb(bb, ab, Ub.probe), Ub.probe;
      Ub.probe = null, hb.inProbe = !0;
      try {
        Ub.probe = function(bb, ab) {
          return gb(bb, ab.vertex, ab.fragment, kb, `program ${Hb(ab)}'s twin`)
        }(bb, Ub)
      } finally {
        hb.inProbe = !1
      }
      return Ub.probe && Cb(bb, ab, Ub.probe), Ub.probe
    }

    function gb(bb, ab, Ub, Ab, Mb) {
      const Tb = [bb.createShader(Rb.VERTEX_SHADER), bb.createShader(Rb.FRAGMENT_SHADER)],
        Eb = bb.createProgram();
      if (!Eb || !Tb[0] || !Tb[1]) return null;
      bb.shaderSource(Tb[0], ab), bb.shaderSource(Tb[1], Ub);
      for (const Bb of Tb) bb.compileShader(Bb), bb.attachShader(Eb, Bb);
      bb.transformFeedbackVaryings(Eb, [Ab], Rb.INTERLEAVED_ATTRIBS), bb.linkProgram(Eb);
      for (const Bb of Tb) bb.deleteShader(Bb);
      var Yb;
      return bb.getProgramParameter(Eb, Rb.LINK_STATUS) ? Eb : (ob(`decode probe: ${Mb} failed to link: ${tb(null!==(Yb=bb.getProgramInfoLog(Eb))&&void 0!==Yb?Yb:"",300)}`), bb.deleteProgram(Eb), null)
    }

    function Cb(bb, ab, Ub) {
      const Ab = bb.getProgramParameter(ab, Rb.ACTIVE_UNIFORM_BLOCKS);
      for (let Yb = 0; Yb < Ab; Yb++) {
        const Ab = bb.getActiveUniformBlockName(ab, Yb),
          Mb = null === Ab ? Rb.INVALID_INDEX : bb.getUniformBlockIndex(Ub, Ab);
        Mb !== Rb.INVALID_INDEX && bb.uniformBlockBinding(Ub, Mb, bb.getActiveUniformBlockParameter(ab, Yb, Rb.UNIFORM_BLOCK_BINDING))
      }
      const Mb = bb.getParameter(Rb.CURRENT_PROGRAM);
      bb.useProgram(Ub);
      const Tb = bb.getProgramParameter(ab, Rb.ACTIVE_UNIFORMS),
        Eb = bb.getActiveUniforms(ab, [...Array(Tb).keys()], Rb.UNIFORM_BLOCK_INDEX);
      for (let Yb = 0; Yb < Tb; Yb++) {
        const Ab = bb.getActiveUniform(ab, Yb);
        if (!Ab || -1 !== Eb[Yb]) continue;
        const Mb = Ab.name.replace(/\[0\]$/, "");
        for (let Tb = 0; Tb < Ab.size; Tb++) {
          const Eb = Ab.size > 1 ? `${Mb}[${Tb}]` : Ab.name,
            Yb = bb.getUniformLocation(ab, Eb),
            Bb = bb.getUniformLocation(Ub, Eb);
          Yb && Bb && Vb(bb, Bb, Ab.type, bb.getUniform(ab, Yb))
        }
      }
      bb.useProgram(Mb)
    }

    function Vb(bb, ab, Ub, Ab) {
      const Mb = ArrayBuffer.isView(Ab) ? Array.from(Ab) : [Number(Ab)];
      switch (Ub) {
        case Rb.FLOAT:
          return void bb.uniform1f(ab, Mb[0]);
        case Rb.FLOAT_VEC2:
          return void bb.uniform2fv(ab, Mb);
        case Rb.FLOAT_VEC3:
          return void bb.uniform3fv(ab, Mb);
        case Rb.FLOAT_VEC4:
          return void bb.uniform4fv(ab, Mb);
        case Rb.FLOAT_MAT3:
          return void bb.uniformMatrix3fv(ab, !1, Mb);
        case Rb.FLOAT_MAT4:
          return void bb.uniformMatrix4fv(ab, !1, Mb);
        case Rb.UNSIGNED_INT:
          return void bb.uniform1ui(ab, Mb[0]);
        case Rb.UNSIGNED_INT_VEC2:
          return void bb.uniform2uiv(ab, Mb);
        case Rb.UNSIGNED_INT_VEC3:
          return void bb.uniform3uiv(ab, Mb);
        case Rb.UNSIGNED_INT_VEC4:
          return void bb.uniform4uiv(ab, Mb);
        case Rb.INT_VEC2:
          return void bb.uniform2iv(ab, Mb);
        case Rb.INT_VEC3:
          return void bb.uniform3iv(ab, Mb);
        case Rb.INT_VEC4:
          return void bb.uniform4iv(ab, Mb);
        default:
          bb.uniform1i(ab, Mb[0])
      }
    }

    function Ob(bb, ab, Ub, Ab) {
      let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const Tb = bb.getParameter(Rb.CURRENT_PROGRAM),
        Eb = bb.getParameter(Rb.TRANSFORM_FEEDBACK_BINDING),
        Yb = bb.getParameter(Rb.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        Bb = bb.getParameter(Rb.COPY_READ_BUFFER_BINDING),
        eb = bb.isEnabled(Rb.RASTERIZER_DISCARD),
        vb = bb.createTransformFeedback(),
        Lb = bb.createBuffer();
      hb.inProbe = !0;
      try {
        const Tb = bb.getError();
        Tb !== Rb.NO_ERROR && ob(`GL error 0x${Tb.toString(16)} pending before the decode probe (the renderer's)`), bb.useProgram(ab), bb.bindTransformFeedback(Rb.TRANSFORM_FEEDBACK, vb), bb.bindBuffer(Rb.TRANSFORM_FEEDBACK_BUFFER, Lb), bb.bufferData(Rb.TRANSFORM_FEEDBACK_BUFFER, 12 * Ub, Rb.STREAM_READ), bb.bindBufferBase(Rb.TRANSFORM_FEEDBACK_BUFFER, 0, Lb), bb.enable(Rb.RASTERIZER_DISCARD), bb.beginTransformFeedback(Rb.POINTS), Ab(), bb.endTransformFeedback(), bb.bindBufferBase(Rb.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const Eb = bb.getError();
        if (Eb !== Rb.NO_ERROR) return ob(`${Mb}: GL error 0x${Eb.toString(16)} on the feedback draw`), null;
        const Yb = new Float32Array(3 * Ub);
        return bb.bindBuffer(Rb.COPY_READ_BUFFER, Lb), bb.getBufferSubData(Rb.COPY_READ_BUFFER, 0, Yb), Yb
      } finally {
        eb || bb.disable(Rb.RASTERIZER_DISCARD), bb.bindTransformFeedback(Rb.TRANSFORM_FEEDBACK, Eb), bb.bindBuffer(Rb.TRANSFORM_FEEDBACK_BUFFER, Yb), bb.bindBuffer(Rb.COPY_READ_BUFFER, Bb), bb.deleteTransformFeedback(vb), bb.deleteBuffer(Lb), bb.useProgram(Tb), hb.inProbe = !1
      }
    }

    function cb(bb, ab, Ub, Ab) {
      const Mb = bb.getParameter(Rb.COPY_READ_BUFFER_BINDING),
        Tb = new Uint8Array(Ab);
      return bb.bindBuffer(Rb.COPY_READ_BUFFER, ab), bb.getBufferSubData(Rb.COPY_READ_BUFFER, Ub, Tb), bb.bindBuffer(Rb.COPY_READ_BUFFER, Mb), Tb
    }
    const Jb = `#version 300 es\nlayout(location = ${yb}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      nb = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      Sb = new WeakMap;

    function ba(bb, ab, Ub) {
      const Ab = bb.getProgramParameter(ab, Rb.ACTIVE_UNIFORMS),
        Mb = bb.getParameter(Rb.ACTIVE_TEXTURE);
      try {
        for (let Mb = 0; Mb < Ab; Mb++) {
          const Ab = bb.getActiveUniform(ab, Mb);
          if ((null === Ab || void 0 === Ab ? void 0 : Ab.type) !== Rb.UNSIGNED_INT_SAMPLER_2D) continue;
          const Tb = bb.getUniformLocation(ab, Ab.name),
            Eb = Tb ? bb.getUniform(ab, Tb) : -1;
          if (Eb < 0) continue;
          bb.activeTexture(Rb.TEXTURE0 + Eb);
          const Yb = bb.getParameter(Rb.TEXTURE_BINDING_2D);
          if (Yb && Fb.get(Yb) === Ub) return Yb
        }
        return null
      } finally {
        bb.activeTexture(Mb)
      }
    }

    function aa(bb, ab, Ub, Ab, Mb) {
      const Tb = new Uint32Array(4 * Mb),
        Eb = bb.getParameter(Rb.READ_FRAMEBUFFER_BINDING),
        Yb = bb.createFramebuffer();
      bb.bindFramebuffer(Rb.READ_FRAMEBUFFER, Yb), bb.framebufferTexture2D(Rb.READ_FRAMEBUFFER, Rb.COLOR_ATTACHMENT0, Rb.TEXTURE_2D, ab, 0);
      try {
        let ab = 0;
        for (; ab < Mb;) {
          const Eb = Ab + ab,
            Yb = Eb % Ub,
            Bb = Math.min(Mb - ab, Ub - Yb);
          bb.readPixels(Yb, Math.floor(Eb / Ub), Bb, 1, Rb.RGBA_INTEGER, Rb.UNSIGNED_INT, Tb.subarray(4 * ab, 4 * (ab + Bb))), ab += Bb
        }
      } finally {
        bb.bindFramebuffer(Rb.READ_FRAMEBUFFER, Eb), bb.deleteFramebuffer(Yb)
      }
      return Tb
    }

    function Ua(bb, ab, Ub) {
      let Ab = 0,
        Mb = 0;
      for (let Bb = 0; Bb < ab.bytes.length; Bb += Nb) {
        Ab++;
        const bb = Math.min(Bb + Nb, ab.bytes.length);
        Xb(ab.bytes.subarray(Bb, bb)) !== Xb(Ub.subarray(Bb, bb)) && Mb++
      }
      const Tb = `${bb} ${ab.bytes.length} B cpu ${Xb(ab.bytes).toString(16)} gpu ${Xb(Ub).toString(16)}, ${Mb}/${Ab} blocks differ${ab.missed?`, ${ab.missed} GPU-side writes uncopied`:""}`;
      if (0 === Mb) return Tb;
      const {
        count: Eb,
        offsets: Yb
      } = function(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const Ab = Math.min(bb.length, ab.length);
        let Mb = Math.abs(bb.length - ab.length);
        const Tb = [];
        for (let Eb = 0; Eb < Ab; Eb++) bb[Eb] !== ab[Eb] && (Mb++, Tb.length < Ub && Tb.push(Eb));
        return {
          count: Mb,
          offsets: Tb
        }
      }(ab.bytes, Ub);
      return lb([`${Tb}: ${Eb} bytes differ`, ...Yb.map((bb => `  +${bb}: cpu ${jb(ab.bytes,bb)} | gpu ${jb(Ub,bb)}`))].join("\n")), `${Tb}: ${Eb} bytes differ, first at ${Yb.join(", ")} (context in the saved file)`
    }

    function Aa(bb) {
      if (0 === bb.vertices.length) return void ob(`decode probe (${bb.reason}): no terrain draw probed (${bb.draws.length} seen)`);
      const ab = function(bb) {
          const ab = new Map;
          for (const Ab of bb) {
            const bb = ab.get(Ab.group);
            bb ? bb.push(Ab) : ab.set(Ab.group, [Ab])
          }
          const Ub = {
            vertices: bb.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [Ab, Mb] of ab) {
            const bb = new Map,
              ab = Mb.map((ab => {
                const Ub = vb(ab.record, ab.slot),
                  Ab = [ab.gpu[0] - Ub[0], ab.gpu[1] - Ub[1], ab.gpu[2] - Ub[2]],
                  Mb = Ab.map((bb => Math.round(64 * bb))).join(","),
                  Tb = bb.get(Mb);
                return Tb ? Tb.count++ : bb.set(Mb, {
                  count: 1,
                  offset: Ab
                }), Ub
              }));
            let Tb = [0, 0, 0],
              Eb = 0;
            for (const Ub of bb.values()) Ub.count > Eb && (Eb = Ub.count, Tb = Ub.offset);
            Ub.translations.set(Ab, Tb), Mb.forEach(((bb, Ab) => {
              var Mb;
              const Eb = [ab[Ab][0] + Tb[0], ab[Ab][1] + Tb[1], ab[Ab][2] + Tb[2]];
              if (Eb.every(((ab, Ub) => {
                  return Ab = bb.gpu[Ub], Mb = ab, Math.abs(Ab - Mb) <= Math.max(.001, 1e-6 * Math.abs(Mb));
                  var Ab, Mb
                }))) return;
              Ub.mismatches++, Ub.byDirection[Yb(bb.record[2])]++, Ub.byDiagonal[Bb(bb.record[2])]++;
              const eb = Lb(bb.record);
              Ub.byBand[eb] = (null !== (Mb = Ub.byBand[eb]) && void 0 !== Mb ? Mb : 0) + 1, Ub.first.length < Pb && Ub.first.push({
                ...bb,
                expected: Eb
              })
            }))
          }
          return Ub
        }(bb.vertices),
        Ub = ab.byDirection.map(((bb, ab) => bb ? `${Eb[ab]} ${bb}` : "")).filter(Boolean).join(" "),
        Ab = Object.entries(ab.byBand).map((bb => {
          let [ab, Ub] = bb;
          return `${ab}: ${Ub}`
        })).join(" ");
      if (ob(`decode probe (${bb.reason}): ${ab.mismatches}/${ab.vertices} vertices differ from the CPU decode over ${bb.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (ab.mismatches ? ` by direction [${Ub}] diagonal [0: ${ab.byDiagonal[0]} 1: ${ab.byDiagonal[1]}] extent [${Ab}]` : "")), bb.fed.records > 0 || bb.fed.failed > 0) {
        ob(`decode probe input: ${bb.fed.differing}/${bb.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (bb.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (bb.fed.failed ? `; the feed failed on ${bb.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const ab of bb.fed.first) ob(`  ${ab}`)
      }
      for (const Mb of ab.first) {
        const [bb, ab, Ub] = Mb.record;
        ob(`  mismatch part ${Mb.group} r0 ${bb.toString(16)} r1 ${ab.toString(16)} r2 ${Ub.toString(16)} slot ${Mb.slot} (${Eb[Yb(Ub)]}): expected ${Mb.expected.map(Ta).join(",")} gpu ${Mb.gpu.map(Ta).join(",")}`)
      }
      lb(`decode probe translations: ${[...ab.translations].map((bb=>{let[ab,Ub]=bb;return`${ab}: ${Ub.map(Ta).join(",")}`})).join("; ")}`)
    }

    function Ma(bb) {
      return bb.toString(16)
    }

    function Ta(bb) {
      return Number.isInteger(bb) ? String(bb) : bb.toFixed(3)
    }

    function Ea(bb) {
      return null !== hb.pendingCheck ? Promise.resolve() : new Promise((ab => {
        let Ub = !1;
        const Ab = {
          reason: bb,
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
        hb.pendingCheck = Ab;
        const Mb = () => {
            hb.pendingCheck = null;
            try {
              ! function(bb) {
                ob(`draw ranges (${bb.reason}): ${bb.terrainDraws} terrain draws in the frame, the first ${bb.draws.length} here`);
                for (const ab of bb.draws) {
                  const bb = ab.cj.slice(0, 8).map((bb => {
                      let [ab, Ub] = bb;
                      return `${ab}+${Ub}`
                    })).join(" "),
                    Ub = ab.cj.length > 8 ? ` (+${ab.cj.length-8} ranges)` : "";
                  ob(`  ${Hb(ab.program)} ${ab.program.terrain} ${ab.call} ${bb}${Ub} x${ab.instances}${ab.group>=0?` part ${ab.group} chunk ${ab.chunk}`:""} | ${ab.attributes.join(" | ")}`)
                }
              }(Ab), Aa(Ab);
              Ab.draws.some((bb => "undefined" !== typeof WebGL2RenderingContext && bb.gl instanceof WebGL2RenderingContext)) || 0 === Ab.draws.length ? function(bb) {
                const ab = [],
                  Ub = new Map;
                for (const Ab of bb)
                  if ("undefined" !== typeof WebGL2RenderingContext && Ab.gl instanceof WebGL2RenderingContext)
                    for (const bb of Ab.pages) Ub.set("buf" === bb.kind ? bb.buffer : bb.texture, {
                      page: bb,
                      gl: Ab.gl
                    });
                for (const [Ab, {
                    page: Mb,
                    gl: Tb
                  }] of Ub) {
                  const bb = db.get(Ab);
                  if (!bb) {
                    ab.push(`${Mb.kind}#${qb(Ab)}: no CPU copy (${hb.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === Mb.kind) {
                    ab.push(Ua(`buf#${bb.id}`, bb, cb(Tb, Mb.buffer, 0, bb.bytes.length)));
                    continue
                  }
                  const Ub = aa(Tb, Mb.texture, bb.width, 0, bb.width * bb.height),
                    Eb = 16 === bb.texelBytes ? new Uint8Array(Ub.buffer) : new Uint8Array(new Uint16Array(Ub).buffer);
                  ab.push(Ua(`tex#${bb.id} (${16===bb.texelBytes?"records":"light"})`, bb, Eb))
                }
                for (const Ab of ab) ob(`page readback ${Ab}`)
              }(Ab.draws) : ob("page readback: none on WebGL1 (no buffer readback)")
            } catch (bb) {
              ob(`check failed: ${String(bb)}`)
            }
            ab()
          },
          Tb = () => {
            if (Ab.draws.length > 0 && !Ub) return Ub = !0, void setTimeout(Mb, 0);
            Ub || requestAnimationFrame(Tb)
          };
        requestAnimationFrame(Tb), setTimeout((() => {
          Ub || (Ub = !0, Mb())
        }), 5e3)
      }))
    }
    var Ya = Ub(4376);
    const Ba = 20,
      ea = 24,
      va = Reflect.apply;

    function La(bb, ab, Ub) {
      if (!bb) return;
      const Ab = bb[ab];
      if ("function" === typeof Ab) {
        const Mb = Ub(Ab);
        bb[ab] = Mb, (0, Ya.D)(Mb, Ab)
      }
    }
    let Pa = !1;
    const Xa = new WeakMap,
      ja = new WeakMap,
      Ra = new WeakMap,
      ka = {
        gl: 0,
        lost: 0
      };
    let ya = {
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
      Za = {
        buffer: 0,
        texture: 0
      },
      Da = 0;

    function za(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (bb instanceof ArrayBuffer) return new Uint8Array(bb, ab, Ub || void 0);
      if (!ArrayBuffer.isView(bb)) return null;
      const Ab = "BYTES_PER_ELEMENT" in bb ? bb.BYTES_PER_ELEMENT : 1,
        Mb = bb.byteOffset + ab * Ab,
        Tb = Ub ? Ub * Ab : bb.byteLength - ab * Ab;
      return new Uint8Array(bb.buffer, Mb, Math.max(0, Tb))
    }

    function xa(bb, ab) {
      const Ub = function(bb) {
        switch (bb) {
          case Rb.ARRAY_BUFFER:
            return Rb.ARRAY_BUFFER_BINDING;
          case Rb.ELEMENT_ARRAY_BUFFER:
            return Rb.ELEMENT_ARRAY_BUFFER_BINDING;
          case Rb.COPY_READ_BUFFER:
            return Rb.COPY_READ_BUFFER_BINDING;
          case Rb.COPY_WRITE_BUFFER:
            return Rb.COPY_WRITE_BUFFER_BINDING;
          case Rb.UNIFORM_BUFFER:
            return Rb.UNIFORM_BUFFER_BINDING;
          case Rb.PIXEL_UNPACK_BUFFER:
            return Rb.PIXEL_UNPACK_BUFFER_BINDING;
          case Rb.TRANSFORM_FEEDBACK_BUFFER:
            return Rb.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(ab);
      return Ub ? bb.getParameter(Ub) : null
    }

    function ia(bb) {
      const ab = db.get(bb);
      ab && (hb.shadowBytes -= ab.bytes.length, db.delete(bb))
    }

    function fa(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      ia(bb), hb.shadowBytes + ab > pb ? hb.uncopied++ : (hb.shadowBytes += ab, db.set(bb, {
        id: qb(bb),
        bytes: new Uint8Array(ab),
        width: Ub,
        height: Ab,
        texelBytes: Mb,
        missed: 0
      }))
    }

    function ma(bb, ab) {
      for (const Ub of ["deleteBuffer", "deleteTexture"]) La(bb, Ub, (bb => function() {
        for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
        return Ub[0] && ia(Ub[0]), va(bb, this, Ub)
      }));
      La(bb, "shaderSource", (bb => function() {
        for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
        return Ub[0] && "string" === typeof Ub[1] && Xa.set(Ub[0], Ub[1]), va(bb, this, Ub)
      })), La(bb, "attachShader", (bb => function() {
        for (var ab, Ub = arguments.length, Ab = new Array(Ub), Mb = 0; Mb < Ub; Mb++) Ab[Mb] = arguments[Mb];
        const Tb = Ab[0],
          Eb = null !== (ab = ja.get(Tb)) && void 0 !== ab ? ab : [];
        return Eb.push(Ab[1]), ja.set(Tb, Eb), va(bb, this, Ab)
      })), La(bb, "linkProgram", (bb => function() {
        for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
        const Mb = va(bb, this, Ub);
        return hb.inProbe || function(bb, ab) {
          var Ub, Ab, Mb;
          "undefined" !== typeof HTMLCanvasElement && bb.canvas instanceof HTMLCanvasElement && function(bb) {
            if (da.has(bb)) return;
            da.add(bb);
            for (const ab of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) bb.addEventListener(ab, (bb => {
              ka.lost < Ba && (ka.lost++, ob(`${ab}${"statusMessage"in bb?`: ${String(bb.statusMessage)}`:""}`))
            }))
          }(bb.canvas);
          hb.context ??= bb;
          const Tb = null !== (Ub = ja.get(ab)) && void 0 !== Ub ? Ub : [];
          let Eb = "",
            Yb = "";
          for (const vb of Tb) {
            var Bb;
            const bb = null !== (Bb = Xa.get(vb)) && void 0 !== Bb ? Bb : "";
            /\bgl_Position\b/.test(bb) ? Eb = bb : Yb = bb
          }
          const eb = {
            id: qb(ab),
            name: null !== (Ab = null === (Mb = Wb.exec(Eb)) || void 0 === Mb ? void 0 : Mb[1]) && void 0 !== Ab ? Ab : null,
            gl: bb,
            vertex: Eb,
            fragment: Yb,
            terrain: Na(Eb),
            checked: !1,
            firstDraw: !1
          };
          if (Ra.set(ab, eb), Ib.push([ab, eb]), null !== eb.terrain) {
            const ab = Tb.map((ab => {
              var Ub;
              return null !== (Ub = bb.getShaderInfoLog(ab)) && void 0 !== Ub ? Ub : ""
            })).filter((bb => "" !== bb.trim()));
            ab.length > 0 && lb(`program ${Hb(eb)} (${eb.terrain}) shader logs:\n${tb(ab.join("\n"))}`)
          }
        }(this, Ub[0]), Mb
      })), La(bb, "bufferData", (bb => function() {
        for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
        const Mb = va(bb, this, Ub);
        if (!hb.inProbe) {
          const bb = xa(this, Ub[0]);
          if (bb) {
            var Tb, Eb, Yb;
            const ab = "number" === typeof Ub[1] ? null : za(Ub[1], null !== (Tb = Ub[3]) && void 0 !== Tb ? Tb : 0, null !== (Eb = Ub[4]) && void 0 !== Eb ? Eb : 0);
            var Bb;
            if (fa(bb, "number" === typeof Ub[1] ? Ub[1] : null !== (Yb = null === ab || void 0 === ab ? void 0 : ab.length) && void 0 !== Yb ? Yb : 0), ab) null === (Bb = db.get(bb)) || void 0 === Bb || Bb.bytes.set(ab)
          }
        }
        return Mb
      })), La(bb, "bufferSubData", (bb => function() {
        for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
        const Mb = va(bb, this, Ub);
        if (!hb.inProbe) {
          var Tb, Eb;
          const bb = xa(this, Ub[0]),
            ab = bb ? db.get(bb) : void 0,
            Ab = za(Ub[2], null !== (Tb = Ub[3]) && void 0 !== Tb ? Tb : 0, null !== (Eb = Ub[4]) && void 0 !== Eb ? Eb : 0);
          if (ab && Ab) {
            const bb = Ub[1];
            ab.bytes.set(Ab.subarray(0, Math.max(0, ab.bytes.length - bb)), bb), pa("buffer", ab, bb, Ab.length)
          }
        }
        return Mb
      })), ab && (La(bb, "copyBufferSubData", (bb => function() {
        for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
        const Mb = va(bb, this, Ub);
        if (!hb.inProbe) {
          const [bb, ab, Ab, Mb, Tb] = Ub, Eb = xa(this, bb), Yb = xa(this, ab), Bb = Eb ? db.get(Eb) : void 0, eb = Yb ? db.get(Yb) : void 0;
          eb && (Bb ? eb.bytes.set(Bb.bytes.slice(Ab, Ab + Tb), Mb) : eb.missed++)
        }
        return Mb
      })), La(bb, "texStorage2D", (bb => function() {
        for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
        const Mb = va(bb, this, Ub),
          [, , Tb, Eb, Yb] = Ub;
        if (!hb.inProbe && (Tb === Rb.RGBA32UI || Tb === Rb.RGBA16UI)) {
          const bb = this.getParameter(Rb.TEXTURE_BINDING_2D),
            ab = Tb === Rb.RGBA32UI ? 16 : 8;
          bb && (Fb.set(bb, ab), fa(bb, Eb * Yb * ab, Eb, Yb, ab))
        }
        return Mb
      })), La(bb, "texSubImage2D", (bb => function() {
        for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
        const Mb = va(bb, this, Ub);
        return !hb.inProbe && Ub.length >= 9 && Ub[0] === Rb.TEXTURE_2D && 0 === Ub[1] && function(bb, ab) {
          var Ub;
          const Ab = bb.getParameter(Rb.TEXTURE_BINDING_2D),
            Mb = Ab ? db.get(Ab) : void 0;
          if (!Mb) return;
          const [, , Tb, Eb, Yb, Bb] = ab;
          let eb = za(ab[8], null !== (Ub = ab[9]) && void 0 !== Ub ? Ub : 0);
          if (null === eb && "number" === typeof ab[8]) {
            const Ub = xa(bb, Rb.PIXEL_UNPACK_BUFFER),
              Ab = Ub ? db.get(Ub) : void 0;
            eb = Ab ? Ab.bytes.subarray(ab[8]) : null
          }
          if (null === eb) return void Mb.missed++;
          const vb = bb.getParameter(Rb.UNPACK_ROW_LENGTH) || Yb,
            Lb = bb.getParameter(Rb.UNPACK_SKIP_ROWS),
            Pb = bb.getParameter(Rb.UNPACK_SKIP_PIXELS),
            Xb = Mb.texelBytes;
          for (let jb = 0; jb < Bb; jb++) {
            const bb = ((Lb + jb) * vb + Pb) * Xb,
              ab = ((Eb + jb) * Mb.width + Tb) * Xb;
            Mb.bytes.set(eb.subarray(bb, bb + Yb * Xb), ab)
          }
          pa("texture", Mb, (Eb * Mb.width + Tb) * Xb, Yb * Bb * Xb)
        }(this, Ub), Mb
      })), La(bb, "copyTexSubImage2D", (bb => function() {
        for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
        const Mb = Ub[0] === Rb.TEXTURE_2D ? this.getParameter(Rb.TEXTURE_BINDING_2D) : null,
          Tb = Mb ? db.get(Mb) : void 0;
        return Tb && Tb.missed++, va(bb, this, Ub)
      })));
      for (const Ub of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) La(bb, Ub, (bb => function() {
        for (var ab = arguments.length, Ab = new Array(ab), Mb = 0; Mb < ab; Mb++) Ab[Mb] = arguments[Mb];
        const Tb = va(bb, this, Ab);
        return hb.inProbe || Ha(this, Ub, Ab), Tb
      }));
      La(bb, "getExtension", (bb => function() {
        for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
        const Mb = va(bb, this, Ub);
        return Mb && "object" === typeof Mb && function(bb, ab, Ub) {
          const Ab = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(ab in Ab) || Ub.bloxdRenderDebug) return;
          Ub.bloxdRenderDebug = !0;
          for (const Mb of Ab[ab]) {
            const ab = Ub[Mb];
            "function" === typeof ab && (Ub[Mb] = function() {
              for (var Ab = arguments.length, Tb = new Array(Ab), Eb = 0; Eb < Ab; Eb++) Tb[Eb] = arguments[Eb];
              const Yb = va(ab, Ub, Tb);
              return hb.inProbe || Ha(bb, Mb, Tb), Yb
            })
          }
        }(this, Ub[0], Mb), Mb
      }))
    }

    function pa(bb, ab, Ub, Ab) {
      Za[bb] += Ab, Da < 32 && ab.bytes.length >= 1 << 20 && (Da++, lb(`upload ${bb} #${ab.id} +${Ub} ${Ab} B`))
    }

    function Na(bb) {
      if (!bb.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(bb) || /in uvec3 _p2vs_location0\b/.test(bb) ? "inst" : "tex"
    }

    function Wa(bb, ab, Ub) {
      var Ab;
      if (Ub.checked) return;
      Ub.checked = !0;
      const Mb = bb.getProgramParameter(ab, Rb.LINK_STATUS),
        Tb = (null !== (Ab = bb.getProgramInfoLog(ab)) && void 0 !== Ab ? Ab : "").trim();
      var Eb;
      null === Ub.terrain && Mb || (ob(`program ${Hb(Ub)} ${null!==(Eb=Ub.terrain)&&void 0!==Eb?Eb:"other"} link ${Mb?"ok":"FAILED"}${Tb?`: ${tb(Tb,300)}`:""}`), Tb && lb(`program ${Hb(Ub)} link log:\n${tb(Tb)}`))
    }

    function Ha(bb, ab, Ub) {
      var Ab;
      const Mb = bb.getParameter(Rb.CURRENT_PROGRAM),
        Tb = Mb ? Ra.get(Mb) : void 0;
      if (!Mb || !Tb) return;
      const Eb = null !== (Ab = Tb.terrain) && void 0 !== Ab ? Ab : "other",
        {
          cj: Yb,
          instances: Bb
        } = function(bb, ab) {
          switch (bb) {
            case "drawArrays":
              return {
                cj: [
                  [ab[1], ab[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                cj: [
                  [ab[1], ab[2]]
                ], instances: ab[3]
              };
            case "drawElements":
              return {
                cj: [
                  [0, ab[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                cj: [
                  [0, ab[1]]
                ], instances: ab[4]
              };
            case "multiDrawArraysWEBGL": {
              const bb = ab[1],
                Ub = ab[3],
                Ab = ab[2],
                Mb = ab[4],
                Tb = [];
              for (let Eb = 0; Eb < ab[5]; Eb++) Tb.push([bb[Ab + Eb], Ub[Mb + Eb]]);
              return {
                cj: Tb,
                instances: 1
              }
            }
            default:
              return {
                cj: [], instances: 0
              }
          }
        }(ab, Ub),
        eb = "inst" === Tb.terrain ? Bb : Yb.reduce(((bb, ab) => {
          let [, Ub] = ab;
          return bb + Ub
        }), 0) / 6;
      if (ya[Eb].draws++, ya[Eb].faces += eb, null === Tb.terrain) return;
      if (hb.context = bb, !Tb.firstDraw) {
        Tb.firstDraw = !0, Wa(bb, Mb, Tb), Ia || (Ia = !0, ob(function(bb) {
          var ab;
          const Ub = bb.getParameter(Rb.DEPTH_FUNC),
            Ab = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let Mb = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in bb && bb.getParameter(Rb.DRAW_FRAMEBUFFER_BINDING)) {
            const ab = bb;
            Mb = ab.getFramebufferAttachmentParameter(Rb.DRAW_FRAMEBUFFER, Rb.DEPTH_ATTACHMENT, Rb.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(ab.getFramebufferAttachmentParameter(Rb.DRAW_FRAMEBUFFER,Rb.DEPTH_ATTACHMENT,Rb.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(ab.getFramebufferAttachmentParameter(Rb.DRAW_FRAMEBUFFER,Rb.DEPTH_ATTACHMENT,Rb.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const Tb = bb.getParameter(Rb.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(ab=Ab[Ub])&&void 0!==ab?ab:`0x${Ub.toString(16)}`} clear ${Tb}${516===Ub||518===Ub?" (reverse-Z)":""}, samples ${String(bb.getParameter(Rb.SAMPLES))}, ${Mb}`
        }(bb)));
        const Ub = bb.getError();
        Ub !== Rb.NO_ERROR && ka.gl < Ba && (ka.gl++, ob(`GL error 0x${Ub.toString(16)} after program ${Hb(Tb)}'s first terrain draw (${ab})`))
      }
      const vb = hb.pendingCheck;
      null !== vb && (vb.terrainDraws++, vb.draws.length < ea && wb(bb, Mb, Tb, ab, Yb, Bb))
    }
    let Ia = !1;
    const da = new WeakSet;
    var Fa = Ub(4196),
      ha = Ub(4383);
    const Ga = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let Qa = !1;
    const qa = new WeakSet,
      ua = new WeakMap,
      ra = new WeakMap,
      Ka = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let oa = 0,
      la = !1,
      ta = null,
      wa = {
        draws: 0,
        faces: 0
      };

    function sa(bb) {
      const ab = globalThis[bb];
      return null === ab || void 0 === ab ? void 0 : ab.prototype
    }

    function ga(bb) {
      return bb && "function" === typeof bb[Symbol.iterator] ? [...bb].sort().join(" ") : ""
    }

    function Ca(bb, ab) {
      const Ub = null !== bb && void 0 !== bb ? bb : {},
        Ab = null !== ab && void 0 !== ab ? ab : Object.keys(Object.getPrototypeOf(Ub)).concat(Object.keys(Ub));
      return [...new Set(Ab)].filter((bb => "number" === typeof Ub[bb])).map((bb => `${bb} ${String(Ub[bb])}`)).join(", ")
    }

    function Va(bb, ab) {
      var Ub;
      const Ab = null !== (Ub = ab.vertex) && void 0 !== Ub ? Ub : {};
      if (Ab.module && qa.has(Ab.module)) {
        var Mb;
        const Ub = String(null !== (Mb = Ab.entryPoint) && void 0 !== Mb ? Mb : "");
        if (Ub.startsWith("vs_packed") && ua.set(bb, Ub), !la) {
          var Tb, Eb, Yb, Bb, eb;
          la = !0;
          const bb = null !== (Tb = ab.depthStencil) && void 0 !== Tb ? Tb : {},
            Ab = null !== (Eb = ab.multisample) && void 0 !== Eb ? Eb : {},
            Mb = String(null !== (Yb = bb.depthCompare) && void 0 !== Yb ? Yb : "");
          ob(`WebGPU terrain pipeline ${Ub}: depth ${String(null!==(Bb=bb.format)&&void 0!==Bb?Bb:"none")} ${Mb}${Mb.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(eb=Ab.count)&&void 0!==eb?eb:1)}`)
        }
      }
    }

    function Oa(bb) {
      La(bb, "setPipeline", (bb => function() {
        for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
        return ra.set(this, Ub[0]), va(bb, this, Ub)
      }));
      for (const ab of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) La(bb, ab, (bb => function() {
        const Ub = ra.get(this),
          Ab = Ub ? ua.get(Ub) : void 0;
        for (var Mb = arguments.length, Tb = new Array(Mb), Eb = 0; Eb < Mb; Eb++) Tb[Eb] = arguments[Eb];
        return void 0 !== Ab && ca(ab, Ab, Tb), va(bb, this, Tb)
      }))
    }

    function ca(bb, ab, Ub) {
      var Ab;
      (wa.draws++, "draw" === bb || "drawIndexed" === bb) && (wa.faces += Ub[0] * (null !== (Ab = Ub[1]) && void 0 !== Ab ? Ab : 1) / 6);
      if (null !== ta && ta.length < ea) {
        const Ab = ("draw" === bb ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === bb ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((ab, Ab) => {
          const Mb = bb.endsWith("Indirect") ? Ub[1] : Ub[Ab];
          return `${ab} ${String(null!==Mb&&void 0!==Mb?Mb:"instances"===ab?1:0)}`
        }));
        ta.push(`  ${ab} ${bb} ${Ab.join(" ")}`)
      }
    }

    function Ja() {
      if (Qa || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      Qa = !0, La(sa("GPU"), "requestAdapter", (bb => function() {
        for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
        return va(bb, this, Ub).then((bb => {
          var ab;
          bb ? function(bb) {
            var ab;
            const Ub = null !== (ab = bb.info) && void 0 !== ab ? ab : {};
            ob(`WebGPU adapter ${["vendor","architecture","device","description"].map((bb=>{var ab;return`${bb} "${String(null!==(ab=Ub[bb])&&void 0!==ab?ab:"")}"`})).join(" ")}${bb.isFallbackAdapter?" (fallback)":""}`), ob(`WebGPU adapter features ${ga(bb.features)}`), ob(`WebGPU adapter limits ${Ca(bb.limits,Ga)}`), lb(`WebGPU adapter all limits ${Ca(bb.limits,null)}`)
          }(bb) : ob(`WebGPU requestAdapter(${JSON.stringify(null!==(ab=Ub[0])&&void 0!==ab?ab:{})}) gave none`);
          return bb
        }))
      })), La(sa("GPUAdapter"), "requestDevice", (bb => function() {
        for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
        return va(bb, this, Ub).then((bb => (function(bb) {
          ob(`WebGPU device features ${ga(bb.features)}`), ob(`WebGPU device limits ${Ca(bb.limits,Ga)}`), bb.addEventListener("uncapturederror", (bb => {
            if (Ka.uncaptured < Ba) {
              var ab, Ub, Ab;
              Ka.uncaptured++;
              const Mb = bb.error;
              ob(`WebGPU uncaptured ${null!==(ab=null===Mb||void 0===Mb||null===(Ub=Mb.constructor)||void 0===Ub?void 0:Ub.name)&&void 0!==ab?ab:"error"}: ${tb(String(null!==(Ab=null===Mb||void 0===Mb?void 0:Mb.message)&&void 0!==Ab?Ab:""),600)}`)
            }
          }));
          const ab = bb.lost;
          null === ab || void 0 === ab || ab.then((bb => {
            var ab;
            ob(`WebGPU device lost (${String(bb.reason)}): ${tb(String(null!==(ab=bb.message)&&void 0!==ab?ab:""),600)}`)
          }))
        }(bb), bb)), (bb => {
          throw ob(`WebGPU requestDevice failed: ${String(bb)}`), bb
        }))
      }));
      const bb = sa("GPUDevice");
      La(bb, "createShaderModule", (bb => function() {
        for (var ab, Ub, Ab = arguments.length, Mb = new Array(Ab), Tb = 0; Tb < Ab; Tb++) Mb[Tb] = arguments[Tb];
        const Eb = va(bb, this, Mb);
        return function(bb, ab) {
          const Ub = ab.includes("decodeQuad");
          Ub && qa.add(bb);
          const Ab = bb.getCompilationInfo;
          null === Ab || void 0 === Ab || Ab.call(bb).then((bb => {
            if (0 === bb.messages.length && !Ub) return;
            const ab = {};
            for (const Ub of bb.messages) {
              var Ab;
              ab[String(Ub.type)] = (null !== (Ab = ab[String(Ub.type)]) && void 0 !== Ab ? Ab : 0) + 1
            }
            const Mb = bb.messages.map((bb => `${String(bb.type)} ${String(bb.lineNum)}:${String(bb.linePos)} ${String(bb.message)}`)).join("\n");
            Ka.compile < Ba && (Ka.compile++, ob(`WebGPU ${Ub?"terrain ":""}shader module compiled: ${JSON.stringify(ab)}${Mb?` first: ${tb(Mb.split("\n")[0],300)}`:""}`)), Mb && lb(`WebGPU shader module messages:\n${tb(Mb)}`)
          }))
        }(Eb, String(null !== (ab = (null !== (Ub = Mb[0]) && void 0 !== Ub ? Ub : {}).code) && void 0 !== ab ? ab : "")), Eb
      })), La(bb, "createRenderPipeline", (bb => function() {
        for (var ab, Ub = arguments.length, Ab = new Array(Ub), Mb = 0; Mb < Ub; Mb++) Ab[Mb] = arguments[Mb];
        const Tb = va(bb, this, Ab);
        return Va(Tb, null !== (ab = Ab[0]) && void 0 !== ab ? ab : {}), Tb
      })), La(bb, "createRenderPipelineAsync", (bb => function() {
        for (var ab = arguments.length, Ub = new Array(ab), Ab = 0; Ab < ab; Ab++) Ub[Ab] = arguments[Ab];
        return va(bb, this, Ub).then((bb => {
          var ab;
          return Va(bb, null !== (ab = Ub[0]) && void 0 !== ab ? ab : {}), bb
        }), (bb => {
          var ab;
          throw function(bb, ab) {
            var Ub, Ab, Mb;
            if (Ka.rejected >= Ba) return;
            Ka.rejected++;
            const {
              reason: Tb,
              message: Eb
            } = null !== ab && void 0 !== ab ? ab : {}, Yb = String(null !== (Ub = (null !== (Ab = bb.vertex) && void 0 !== Ab ? Ab : {}).entryPoint) && void 0 !== Ub ? Ub : "");
            ob(`WebGPU pipeline "${String(null!==(Mb=bb.label)&&void 0!==Mb?Mb:"")}" ${Yb} rejected (${String(null!==Tb&&void 0!==Tb?Tb:"no reason")}): ${tb(String(null!==Eb&&void 0!==Eb?Eb:ab),600)}`)
          }(null !== (ab = Ub[0]) && void 0 !== ab ? ab : {}, bb), bb
        }))
      })), La(sa("GPUCanvasContext"), "configure", (bb => function() {
        for (var ab, Ub = arguments.length, Ab = new Array(Ub), Mb = 0; Mb < Ub; Mb++) Ab[Mb] = arguments[Mb];
        const Tb = null !== (ab = Ab[0]) && void 0 !== ab ? ab : {};
        var Eb, Yb;
        oa++ < 3 && ob(`WebGPU canvas ${String(Tb.format)} ${String(null!==(Eb=Tb.colorSpace)&&void 0!==Eb?Eb:"srgb")} alpha ${String(null!==(Yb=Tb.alphaMode)&&void 0!==Yb?Yb:"opaque")}`);
        return va(bb, this, Ab)
      })), Oa(sa("GPURenderPassEncoder")), Oa(sa("GPURenderBundleEncoder"))
    }
    const na = 1e4,
      Sa = 6e4,
      bU = 5e3,
      aU = 3e3,
      UU = 100;
    let AU = null,
      MU = !1,
      TU = {
        ...Fa.b
      },
      EU = !1,
      YU = null,
      BU = 0,
      eU = () => {};
    const vU = new Promise((bb => {
      eU = bb
    }));

    function LU() {
      var bb;
      MU || (MU = !0, TU = Object.assign(window.bloxdRenderDebug ??= {
        ...Fa.b
      }, {
        faceCull: "0" === (0, Tb.r)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (bb = (0, Tb.r)("adrenoProbe")) && void 0 !== bb ? bb : ""
      }), ob("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), Pa || "undefined" === typeof window || (Pa = !0, "undefined" !== typeof WebGL2RenderingContext && ma(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && ma(WebGLRenderingContext.prototype, !1)), Ja(), (0, Tb.e)("renderProbe", (() => {
        yU("console")
      })), RU(), setInterval(DU, bU))
    }

    function PU(bb) {
      var ab, Ub;
      LU(), AU = null !== (ab = null === bb || void 0 === bb ? void 0 : bb.backend) && void 0 !== ab ? ab : null;
      const Ab = `, renderer param ${null!==(Ub=(0,Tb.r)("renderer"))&&void 0!==Ub?Ub:"none"}, faceCull ${"0"===TU.faceCull?"off (whole parts)":"on"}, adrenoProbe ${TU.adrenoProbe||"none"}`;
      ob(`${(0,ha.e)(bb)}${null===bb?"":Ab}`)
    }

    function XU() {
      const bb = performance.now(),
        ab = jU(vU, na, Sa).then((ab => yU(`${Math.round((performance.now()-bb)/1e3)} s after playable${ab?"":", no terrain drawn yet"}`)));
      (0, Mb.b)(ob, (async () => {
        await ab, await YU
      }))
    }
    async function jU(bb, ab, Ub) {
      const Mb = (0, Ab.b)(Ub).then((() => !1));
      return await (0, Ab.b)(ab), Promise.race([bb.then((() => !0)), Mb])
    }

    function RU() {
      requestAnimationFrame((() => {
        BU++, RU()
      }))
    }

    function kU() {
      var bb, ab, Ub;
      if (EU) return;
      (EU = !0, ob(`renderer caps ${null!==(bb=TU.caps)&&void 0!==bb?bb:"(not noted)"}; terrain fetch ${null!==(ab=TU.fetch)&&void 0!==ab?ab:"(not noted)"}`), TU.adrenoProbe) && ob(`adrenoProbe ${TU.adrenoProbe} asked; in force (storage fetch only): ${null!==(Ub=TU.probe)&&void 0!==Ub?Ub:"(not noted)"}`);
      const Ab = hb.context;
      if (Ab) {
        for (const bb of function(bb) {
            var ab;
            const Ub = [],
              Ab = bb.getExtension("WEBGL_debug_renderer_info"),
              Mb = Ab ? bb.getParameter(Ab.UNMASKED_VENDOR_WEBGL) : "(masked)",
              Tb = Ab ? bb.getParameter(Ab.UNMASKED_RENDERER_WEBGL) : "(masked)";
            Ub.push(`GL ${String(bb.getParameter(bb.VERSION))} | ${String(bb.getParameter(bb.SHADING_LANGUAGE_VERSION))} | ${String(bb.getParameter(bb.VENDOR))} / ${String(bb.getParameter(bb.RENDERER))}`), Ub.push(`GL unmasked ${Mb} / ${Tb}`);
            const Eb = [
              ["MAX_TEXTURE_SIZE", bb.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", bb.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", bb.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", bb.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", bb.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", bb.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", bb.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in bb && Eb.push(["MAX_UNIFORM_BLOCK_SIZE", bb.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", bb.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", bb.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", bb.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), Ub.push(`GL limits ${Eb.map((ab=>{let[Ub,Ab]=ab;return`${Ub} ${String(bb.getParameter(Ab))}`})).join(", ")}`);
            const Yb = (ab, Ub) => {
              const Ab = bb.getShaderPrecisionFormat(ab, bb.HIGH_FLOAT),
                Mb = bb.getShaderPrecisionFormat(ab, bb.HIGH_INT);
              return `${Ub} highp float ${Ab?`${Ab.rangeMin}/${Ab.rangeMax}/${Ab.precision}`:"?"} int ${Mb?`${Mb.rangeMin}/${Mb.rangeMax}/${Mb.precision}`:"?"}`
            };
            Ub.push(`GL precision ${Yb(bb.VERTEX_SHADER,"VS")}, ${Yb(bb.FRAGMENT_SHADER,"FS")}`);
            const Bb = bb.getContextAttributes();
            return Ub.push(`GL context ${JSON.stringify(Bb)} drawingBuffer ${bb.drawingBufferWidth}x${bb.drawingBufferHeight}${"drawingBufferFormat"in bb?` format 0x${Number(bb.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in bb?` ${String(bb.drawingBufferColorSpace)}`:""}`), Ub.push(`GL extensions ${(null!==(ab=bb.getSupportedExtensions())&&void 0!==ab?ab:[]).join(" ")}`), Ub
          }(Ab)) ob(bb);
        ! function() {
          if (!hb.context) return;
          let bb = 0,
            ab = 0;
          for (const [Ub, Ab] of Ib) !Ab.gl.isContextLost() && Ab.gl.isProgram(Ub) && (ab++, Wa(Ab.gl, Ub, Ab), null !== Ab.terrain && bb++);
          ob(`programs: ${ab} live of ${Ib.length} linked, ${bb} packed terrain; CPU page copies ${Math.round(hb.shadowBytes/1048576)} MiB (${hb.uncopied} over budget)`)
        }()
      }
    }

    function yU(bb) {
      return YU ??= async function(bb) {
        kU(), "webgpu" === AU ? (ZU(), "1" === TU.slotCheck && ob("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), TU.slotCheck = "1", await
          function(bb) {
            if (null !== ta) return Promise.resolve();
            const ab = [];
            return ta = ab, new Promise((Ub => {
              setTimeout((() => {
                ta = null, ob(`WebGPU draw ranges (${bb}): ${ab.length} terrain draws recorded in a second (first ${ea}; bundles replay without new ones)`);
                for (const bb of ab) ob(bb);
                Ub()
              }), 1e3)
            }))
          }(bb), await async function() {
            for (let bb = 0;
              "1" === TU.slotCheck && bb < aU; bb += UU) await (0, Ab.b)(UU);
            if ("1" === TU.slotCheck) return void ob(`slot check: no answer in ${aU} ms (only the storage fetch has one; a later answer logs on its own)`);
            ZU()
          }()) : await Ea(bb);
        ob(`check (${bb}) done: bloxdDebug.save() downloads it all`)
      }(bb).catch((ab => {
        ob(`check (${bb}) failed: ${String(ab)}`)
      })).finally((() => {
        YU = null
      })), YU
    }

    function ZU() {
      void 0 !== TU.slotCheck && "1" !== TU.slotCheck && (ob(TU.slotCheck), delete TU.slotCheck)
    }

    function DU() {
      const bb = bb => BU ? (bb / BU).toFixed(1) : "0",
        ab = function() {
          const bb = wa;
          return wa = {
            draws: 0,
            faces: 0
          }, bb
        }(),
        Ub = function() {
          const bb = ya;
          return ya = {
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
          }, bb
        }(),
        Ab = function() {
          const bb = Za;
          return Za = {
            buffer: 0,
            texture: 0
          }, bb
        }();
      ZU(), ("webgpu" === AU ? ab.draws : Ub.inst.draws + Ub.tex.draws) > 0 && eU();
      const Mb = "webgpu" === AU ? [`terrain ${bb(ab.draws)} draws ${bb(ab.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((bb => Ub[bb].draws > 0)).map((ab => `${ab} ${bb(Ub[ab].draws)} draws ${bb(Ub[ab].faces)} faces a frame`));
      ob(`${BU} frames: ${Mb.join(", ")||"no draws"}; uploaded ${Math.round(Ab.buffer/1024)} KiB to buffers, ${Math.round(Ab.texture/1024)} KiB to data textures`), BU = 0
    }
  },
  4383: (bb, ab, Ub) => {
    function Ab(bb) {
      if (null === bb) return "backend: none picked (no renderer build)";
      const ab = bb.adapter ? `${bb.adapter.vendor}/${bb.adapter.architecture}` : "none";
      return `backend ${bb.backend}: reason ${bb.reason}, source ${bb.source}, adapter ${ab}`
    }
    Ub.d(ab, {
      e: () => Ab
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);