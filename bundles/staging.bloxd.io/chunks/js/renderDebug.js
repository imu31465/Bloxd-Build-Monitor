export const id = 47;
export const ids = [47];
export const modules = {
  4418: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => fb
    });
    var kb = sb(19),
      Wb = sb(26),
      ab = sb(1287),
      Tb = sb(2680);
    const Ub = 3e4,
      Ib = 1e3;

    function Hb() {
      return "visible" === document.visibilityState && "inGame" === kb.d.get("gameState") && (0, ab.r)()
    }

    function fb(bb, cb) {
      (0, Tb.s)() || function(bb, cb, sb) {
        let kb = 0;
        const Wb = setInterval((() => {
          cb() && (kb += Ib, kb >= bb && (clearInterval(Wb), sb()))
        }), Ib)
      }(Ub, Hb, (() => {
        cb().then((() => {
          bb(`saved for the player after ${Ub/1e3} s of play`), (0, Tb.B)(), Wb.j.QQ("chat", {
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
  4414: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      installRenderDebug: () => Ms,
      renderDebugPlayable: () => ns,
      startRenderDebug: () => Xs,
      waitForDraw: () => ms
    });
    var kb = sb(1767),
      Wb = sb(4418),
      ab = sb(2680);
    const Tb = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function Ub(bb) {
      return 7 & bb
    }

    function Ib(bb) {
      return bb >>> 11 & 1
    }

    function Hb(bb) {
      return [1 + (bb >>> 18 & 63), 1 + (bb >>> 24 & 63)]
    }

    function fb(bb, cb) {
      const [sb, , kb] = bb, Wb = Ub(kb), ab = function(bb, cb, sb) {
        return cb + (1 === (22 >>> bb & 1) ? 4 - sb : sb) & 3
      }(Wb, Ib(kb), cb), Tb = Wb >>> 1, [fb, Mb] = Hb(sb), Xb = 1 === ab || 2 === ab ? fb : 0, nb = ab >= 2 ? Mb : 0, mb = [63 & sb, sb >>> 6 & 63, sb >>> 12 & 63];
      return mb[2 === Tb ? 0 : 2] += Xb, mb[1 === Tb ? 0 : 1] += nb, mb
    }

    function Mb(bb) {
      const cb = Math.max(...Hb(bb[0]));
      return 1 === cb ? "1" : cb <= 4 ? "2-4" : cb <= 16 ? "5-16" : "17-64"
    }
    const Xb = 16;

    function nb(bb) {
      let cb = 2166136261;
      for (let sb = 0; sb < bb.length; sb++) cb = Math.imul(cb ^ bb[sb], 16777619);
      return cb >>> 0
    }

    function mb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const kb = Math.max(0, cb - sb),
        Wb = Math.min(bb.length, cb + sb),
        ab = [];
      for (let Tb = kb; Tb < Wb; Tb++) {
        const sb = bb[Tb].toString(16).padStart(2, "0");
        ab.push(Tb === cb ? `[${sb}]` : sb)
      }
      return ab.join(" ")
    }
    const lb = {
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
      Qb = "_vs2fs_location0",
      eb = 0,
      Cb = 4,
      Nb = 6,
      Vb = [0, 1, 2, 0, 2, 3],
      Lb = 2048,
      ub = 4,
      Yb = 256,
      hb = 64,
      Jb = 268435456,
      gb = 65536,
      Bb = /^#version [^\n]*\/\/ program (\S+)$/m;

    function tb(bb) {
      return null === bb.name ? `#${bb.id}` : `#${bb.id} ${bb.name}`
    }
    const yb = [],
      Pb = new WeakMap,
      Db = new WeakMap,
      Eb = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let ib = 1;
    const Ob = new WeakMap;

    function Gb(bb) {
      if (null === bb) return 0;
      let cb = Ob.get(bb);
      return void 0 === cb && (cb = ib++, Ob.set(bb, cb)), cb
    }
    class Kb {
      constructor(bb, cb) {
        this.print = bb, this.now = cb, this.shown = 0, this.qU = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.vn = [], this.dropped = 0
      }
      line(bb) {
        const cb = this.now();
        if (cb - this.second >= 1e3 && (this.second = cb, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.qU++, void this.store(bb);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${bb} (the last line here: the rest go to bloxdDebug.save())` : bb)
      }
      keep(bb) {
        this.sections++, this.store(bb)
      }
      store(bb) {
        this.vn.push(`${new Date(Date.now()).toISOString()} ${bb}`), this.vn.length > 2e4 && (this.vn.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.qU} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.vn].join("\n")
      }
    }
    let Zb = null;

    function zb() {
      if (null === Zb) {
        const bb = new Kb((bb => {
          (0, ab.m)("render", bb)
        }), (() => performance.now()));
        (0, ab.k)("render", (() => bb.dump())), Zb = bb
      }
      return Zb
    }

    function qb(bb) {
      zb().line(bb)
    }

    function db(bb) {
      zb().keep(bb)
    }

    function Ab(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return bb.length <= cb ? bb : `${bb.slice(0,cb)}... (${bb.length-cb} more characters)`
    }

    function wb(bb, cb, sb, kb, Wb, ab) {
      const Tb = Eb.pendingCheck;
      if (null === Tb) return;
      const Ub = "undefined" !== typeof WebGL2RenderingContext && bb instanceof WebGL2RenderingContext,
        Ib = {
          gl: bb,
          program: sb,
          call: kb,
          uQ: Wb,
          instances: ab,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (Tb.draws.push(Ib), Ub) try {
        const kb = function(bb) {
          const cb = [],
            sb = new Map,
            kb = Math.min(16, bb.getParameter(lb.MAX_VERTEX_ATTRIBS));
          for (let Wb = 0; Wb < kb; Wb++) {
            if (!bb.getVertexAttrib(Wb, lb.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const kb = bb.getVertexAttrib(Wb, lb.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              ab = bb.getVertexAttribOffset(Wb, lb.VERTEX_ATTRIB_ARRAY_POINTER),
              Tb = bb.getVertexAttrib(Wb, lb.VERTEX_ATTRIB_ARRAY_STRIDE),
              Ub = bb.getVertexAttrib(Wb, lb.VERTEX_ATTRIB_ARRAY_SIZE),
              Ib = bb.getVertexAttrib(Wb, lb.VERTEX_ATTRIB_ARRAY_TYPE),
              Hb = "VERTEX_ATTRIB_ARRAY_INTEGER" in bb && bb.getVertexAttrib(Wb, lb.VERTEX_ATTRIB_ARRAY_INTEGER),
              fb = "VERTEX_ATTRIB_ARRAY_DIVISOR" in bb ? bb.getVertexAttrib(Wb, lb.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            sb.set(Wb, {
              buffer: kb,
              offset: ab,
              stride: Tb
            }), cb.push(`@${Wb} buf#${Gb(kb)} +${ab} stride ${Tb} ${Ub}x0x${Ib.toString(16)}${Hb?" int":""} div ${fb}`)
          }
          return {
            lines: cb,
            byLocation: sb
          }
        }(bb);
        if (Ib.attributes = kb.lines, "inst" === sb.terrain) {
          const {
            group: Wb,
            chunk: Ub
          } = function(bb, cb, sb) {
            const kb = cb.get(Nb),
              Wb = bb.getVertexAttrib(Nb, lb.CURRENT_VERTEX_ATTRIB),
              ab = kb ? `+${kb.offset}` : Wb ? Array.from(Wb).slice(0, 3).join(",") : "?";
            let Tb = sb.groups.get(ab);
            return void 0 === Tb && (Tb = sb.groups.size, sb.groups.set(ab, Tb)), {
              group: Tb,
              chunk: ab
            }
          }(bb, kb.byLocation, Tb);
          Ib.group = Wb, Ib.chunk = Ub;
          for (const bb of [eb, Cb]) {
            var Hb;
            const cb = null === (Hb = kb.byLocation.get(bb)) || void 0 === Hb ? void 0 : Hb.buffer;
            cb && Ib.pages.push({
              kind: "buf",
              buffer: cb
            })
          }! function(bb, cb, sb, kb, Wb, ab, Tb) {
            const Ub = kb.get(eb),
              Ib = Tb.parts.get(ab);
            if (void 0 === Ib && Tb.parts.size >= ub) return;
            const Hb = Math.min(Wb, hb, Yb - (null !== Ib && void 0 !== Ib ? Ib : 0));
            if (null === Ub || void 0 === Ub || !Ub.buffer || Hb <= 0) return;
            const fb = rb(bb, cb, sb);
            if (!fb) return;
            const Mb = Ub.stride || 12,
              Xb = Fb(bb, Ub.buffer, Ub.offset, (Hb - 1) * Mb + 12),
              nb = new DataView(Xb.buffer),
              mb = function(bb, cb) {
                const sb = function(bb) {
                    const cb = pb.get(bb);
                    if (void 0 !== cb && (null === cb || bb.isProgram(cb))) return cb;
                    Eb.inProbe = !0;
                    let sb = null;
                    try {
                      sb = ob(bb, xb, jb, "fed", "the record feed")
                    } finally {
                      Eb.inProbe = !1
                    }
                    return pb.set(bb, sb), sb
                  }(bb),
                  kb = sb ? vb(bb, sb, cb, (() => {
                    bb.drawArraysInstanced(lb.POINTS, 0, 1, cb)
                  }), "decode probe input (the record feed)") : null;
                return kb ? new Uint32Array(kb.buffer) : null
              }(bb, Hb);
            mb || Tb.fed.failed++;
            const Qb = vb(bb, fb, 4 * Hb, (() => {
              bb.drawArraysInstanced(lb.POINTS, 0, 4, Hb)
            }));
            if (!Qb) return;
            Tb.parts.set(ab, (null !== Ib && void 0 !== Ib ? Ib : 0) + Hb);
            for (let lb = 0; lb < Hb; lb++) {
              const bb = lb * Mb,
                cb = [nb.getUint32(bb, !0), nb.getUint32(bb + 4, !0), nb.getUint32(bb + 8, !0)],
                sb = mb ? [mb[3 * lb], mb[3 * lb + 1], mb[3 * lb + 2]] : cb;
              mb && (Tb.fed.records++, sb.some(((bb, sb) => bb !== cb[sb])) && (Tb.fed.differing++, Tb.fed.first.length < 8 && Tb.fed.first.push(`part ${ab} instance ${lb}: fed ${sb.map(Wc).join(" ")} buffer ${cb.map(Wc).join(" ")}`)));
              for (let kb = 0; kb < 4; kb++) {
                const bb = 3 * (4 * lb + kb);
                Tb.vertices.push({
                  record: sb,
                  slot: kb,
                  group: ab,
                  gpu: [Qb[bb], Qb[bb + 1], Qb[bb + 2]]
                })
              }
            }
          }(bb, cb, sb, kb.byLocation, ab, Wb, Tb)
        } else {
          const kb = bc(bb, cb, 16),
            ab = bc(bb, cb, 8);
          for (const bb of [kb, ab]) bb && Ib.pages.push({
            kind: "tex",
            texture: bb
          });
          kb && function(bb, cb, sb, kb, Wb, ab) {
            if (ab.parts.size >= ub) return;
            const Tb = rb(bb, cb, sb);
            if (!Tb) return;
            let Ub = 6 * Yb;
            const Ib = [];
            for (const [nb, mb] of Wb) {
              const bb = Math.min(mb, Ub, Math.max(6, 6 * Math.floor(Yb / Wb.length)));
              bb > 0 && (Ib.push([nb, bb]), Ub -= bb)
            }
            const Hb = Ib.reduce(((bb, cb) => {
                let [, sb] = cb;
                return bb + sb
              }), 0),
              fb = vb(bb, Tb, Hb, (() => {
                for (const [cb, sb] of Ib) bb.drawArrays(lb.POINTS, cb, sb)
              }));
            if (!fb) return;
            let Mb = 0;
            for (const [nb, mb] of Ib) {
              const cb = Math.floor(nb / 6),
                sb = Math.floor((nb + mb - 1) / 6) - cb + 1,
                Wb = cc(bb, kb, Lb, cb, sb);
              for (let bb = nb; bb < nb + mb; bb++, Mb++) {
                var Xb;
                const sb = 4 * (Math.floor(bb / 6) - cb),
                  kb = [Wb[sb], Wb[sb + 1], Wb[sb + 2]];
                ab.parts.set(Wb[sb + 3], (null !== (Xb = ab.parts.get(Wb[sb + 3])) && void 0 !== Xb ? Xb : 0) + (bb % 6 === 0 ? 1 : 0)), ab.vertices.push({
                  record: kb,
                  slot: Vb[bb % 6],
                  group: Wb[sb + 3],
                  gpu: [fb[3 * Mb], fb[3 * Mb + 1], fb[3 * Mb + 2]]
                })
              }
            }
          }(bb, cb, sb, kb, Wb, Tb)
        }
      } catch (fb) {
        qb(`decode probe failed on program ${tb(sb)}: ${String(fb)}`)
      }
    }

    function rb(bb, cb, sb) {
      if (void 0 !== sb.probe) return sb.probe && Sb(bb, cb, sb.probe), sb.probe;
      sb.probe = null, Eb.inProbe = !0;
      try {
        sb.probe = function(bb, cb) {
          return ob(bb, cb.vertex, cb.fragment, Qb, `program ${tb(cb)}'s twin`)
        }(bb, sb)
      } finally {
        Eb.inProbe = !1
      }
      return sb.probe && Sb(bb, cb, sb.probe), sb.probe
    }

    function ob(bb, cb, sb, kb, Wb) {
      const ab = [bb.createShader(lb.VERTEX_SHADER), bb.createShader(lb.FRAGMENT_SHADER)],
        Tb = bb.createProgram();
      if (!Tb || !ab[0] || !ab[1]) return null;
      bb.shaderSource(ab[0], cb), bb.shaderSource(ab[1], sb);
      for (const Ib of ab) bb.compileShader(Ib), bb.attachShader(Tb, Ib);
      bb.transformFeedbackVaryings(Tb, [kb], lb.INTERLEAVED_ATTRIBS), bb.linkProgram(Tb);
      for (const Ib of ab) bb.deleteShader(Ib);
      var Ub;
      return bb.getProgramParameter(Tb, lb.LINK_STATUS) ? Tb : (qb(`decode probe: ${Wb} failed to link: ${Ab(null!==(Ub=bb.getProgramInfoLog(Tb))&&void 0!==Ub?Ub:"",300)}`), bb.deleteProgram(Tb), null)
    }

    function Sb(bb, cb, sb) {
      const kb = bb.getProgramParameter(cb, lb.ACTIVE_UNIFORM_BLOCKS);
      for (let Ub = 0; Ub < kb; Ub++) {
        const kb = bb.getActiveUniformBlockName(cb, Ub),
          Wb = null === kb ? lb.INVALID_INDEX : bb.getUniformBlockIndex(sb, kb);
        Wb !== lb.INVALID_INDEX && bb.uniformBlockBinding(sb, Wb, bb.getActiveUniformBlockParameter(cb, Ub, lb.UNIFORM_BLOCK_BINDING))
      }
      const Wb = bb.getParameter(lb.CURRENT_PROGRAM);
      bb.useProgram(sb);
      const ab = bb.getProgramParameter(cb, lb.ACTIVE_UNIFORMS),
        Tb = bb.getActiveUniforms(cb, [...Array(ab).keys()], lb.UNIFORM_BLOCK_INDEX);
      for (let Ub = 0; Ub < ab; Ub++) {
        const kb = bb.getActiveUniform(cb, Ub);
        if (!kb || -1 !== Tb[Ub]) continue;
        const Wb = kb.name.replace(/\[0\]$/, "");
        for (let ab = 0; ab < kb.size; ab++) {
          const Tb = kb.size > 1 ? `${Wb}[${ab}]` : kb.name,
            Ub = bb.getUniformLocation(cb, Tb),
            Ib = bb.getUniformLocation(sb, Tb);
          Ub && Ib && Rb(bb, Ib, kb.type, bb.getUniform(cb, Ub))
        }
      }
      bb.useProgram(Wb)
    }

    function Rb(bb, cb, sb, kb) {
      const Wb = ArrayBuffer.isView(kb) ? Array.from(kb) : [Number(kb)];
      switch (sb) {
        case lb.FLOAT:
          return void bb.uniform1f(cb, Wb[0]);
        case lb.FLOAT_VEC2:
          return void bb.uniform2fv(cb, Wb);
        case lb.FLOAT_VEC3:
          return void bb.uniform3fv(cb, Wb);
        case lb.FLOAT_VEC4:
          return void bb.uniform4fv(cb, Wb);
        case lb.FLOAT_MAT3:
          return void bb.uniformMatrix3fv(cb, !1, Wb);
        case lb.FLOAT_MAT4:
          return void bb.uniformMatrix4fv(cb, !1, Wb);
        case lb.UNSIGNED_INT:
          return void bb.uniform1ui(cb, Wb[0]);
        case lb.UNSIGNED_INT_VEC2:
          return void bb.uniform2uiv(cb, Wb);
        case lb.UNSIGNED_INT_VEC3:
          return void bb.uniform3uiv(cb, Wb);
        case lb.UNSIGNED_INT_VEC4:
          return void bb.uniform4uiv(cb, Wb);
        case lb.INT_VEC2:
          return void bb.uniform2iv(cb, Wb);
        case lb.INT_VEC3:
          return void bb.uniform3iv(cb, Wb);
        case lb.INT_VEC4:
          return void bb.uniform4iv(cb, Wb);
        default:
          bb.uniform1i(cb, Wb[0])
      }
    }

    function vb(bb, cb, sb, kb) {
      let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const ab = bb.getParameter(lb.CURRENT_PROGRAM),
        Tb = bb.getParameter(lb.TRANSFORM_FEEDBACK_BINDING),
        Ub = bb.getParameter(lb.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        Ib = bb.getParameter(lb.COPY_READ_BUFFER_BINDING),
        Hb = bb.isEnabled(lb.RASTERIZER_DISCARD),
        fb = bb.createTransformFeedback(),
        Mb = bb.createBuffer();
      Eb.inProbe = !0;
      try {
        const ab = bb.getError();
        ab !== lb.NO_ERROR && qb(`GL error 0x${ab.toString(16)} pending before the decode probe (the renderer's)`), bb.useProgram(cb), bb.bindTransformFeedback(lb.TRANSFORM_FEEDBACK, fb), bb.bindBuffer(lb.TRANSFORM_FEEDBACK_BUFFER, Mb), bb.bufferData(lb.TRANSFORM_FEEDBACK_BUFFER, 12 * sb, lb.STREAM_READ), bb.bindBufferBase(lb.TRANSFORM_FEEDBACK_BUFFER, 0, Mb), bb.enable(lb.RASTERIZER_DISCARD), bb.beginTransformFeedback(lb.POINTS), kb(), bb.endTransformFeedback(), bb.bindBufferBase(lb.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const Tb = bb.getError();
        if (Tb !== lb.NO_ERROR) return qb(`${Wb}: GL error 0x${Tb.toString(16)} on the feedback draw`), null;
        const Ub = new Float32Array(3 * sb);
        return bb.bindBuffer(lb.COPY_READ_BUFFER, Mb), bb.getBufferSubData(lb.COPY_READ_BUFFER, 0, Ub), Ub
      } finally {
        Hb || bb.disable(lb.RASTERIZER_DISCARD), bb.bindTransformFeedback(lb.TRANSFORM_FEEDBACK, Tb), bb.bindBuffer(lb.TRANSFORM_FEEDBACK_BUFFER, Ub), bb.bindBuffer(lb.COPY_READ_BUFFER, Ib), bb.deleteTransformFeedback(fb), bb.deleteBuffer(Mb), bb.useProgram(ab), Eb.inProbe = !1
      }
    }

    function Fb(bb, cb, sb, kb) {
      const Wb = bb.getParameter(lb.COPY_READ_BUFFER_BINDING),
        ab = new Uint8Array(kb);
      return bb.bindBuffer(lb.COPY_READ_BUFFER, cb), bb.getBufferSubData(lb.COPY_READ_BUFFER, sb, ab), bb.bindBuffer(lb.COPY_READ_BUFFER, Wb), ab
    }
    const xb = `#version 300 es\nlayout(location = ${eb}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      jb = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      pb = new WeakMap;

    function bc(bb, cb, sb) {
      const kb = bb.getProgramParameter(cb, lb.ACTIVE_UNIFORMS),
        Wb = bb.getParameter(lb.ACTIVE_TEXTURE);
      try {
        for (let Wb = 0; Wb < kb; Wb++) {
          const kb = bb.getActiveUniform(cb, Wb);
          if ((null === kb || void 0 === kb ? void 0 : kb.type) !== lb.UNSIGNED_INT_SAMPLER_2D) continue;
          const ab = bb.getUniformLocation(cb, kb.name),
            Tb = ab ? bb.getUniform(cb, ab) : -1;
          if (Tb < 0) continue;
          bb.activeTexture(lb.TEXTURE0 + Tb);
          const Ub = bb.getParameter(lb.TEXTURE_BINDING_2D);
          if (Ub && Db.get(Ub) === sb) return Ub
        }
        return null
      } finally {
        bb.activeTexture(Wb)
      }
    }

    function cc(bb, cb, sb, kb, Wb) {
      const ab = new Uint32Array(4 * Wb),
        Tb = bb.getParameter(lb.READ_FRAMEBUFFER_BINDING),
        Ub = bb.createFramebuffer();
      bb.bindFramebuffer(lb.READ_FRAMEBUFFER, Ub), bb.framebufferTexture2D(lb.READ_FRAMEBUFFER, lb.COLOR_ATTACHMENT0, lb.TEXTURE_2D, cb, 0);
      try {
        let cb = 0;
        for (; cb < Wb;) {
          const Tb = kb + cb,
            Ub = Tb % sb,
            Ib = Math.min(Wb - cb, sb - Ub);
          bb.readPixels(Ub, Math.floor(Tb / sb), Ib, 1, lb.RGBA_INTEGER, lb.UNSIGNED_INT, ab.subarray(4 * cb, 4 * (cb + Ib))), cb += Ib
        }
      } finally {
        bb.bindFramebuffer(lb.READ_FRAMEBUFFER, Tb), bb.deleteFramebuffer(Ub)
      }
      return ab
    }

    function sc(bb, cb, sb) {
      let kb = 0,
        Wb = 0;
      for (let Ib = 0; Ib < cb.bytes.length; Ib += gb) {
        kb++;
        const bb = Math.min(Ib + gb, cb.bytes.length);
        nb(cb.bytes.subarray(Ib, bb)) !== nb(sb.subarray(Ib, bb)) && Wb++
      }
      const ab = `${bb} ${cb.bytes.length} B cpu ${nb(cb.bytes).toString(16)} gpu ${nb(sb).toString(16)}, ${Wb}/${kb} blocks differ${cb.missed?`, ${cb.missed} GPU-side writes uncopied`:""}`;
      if (0 === Wb) return ab;
      const {
        count: Tb,
        offsets: Ub
      } = function(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const kb = Math.min(bb.length, cb.length);
        let Wb = Math.abs(bb.length - cb.length);
        const ab = [];
        for (let Tb = 0; Tb < kb; Tb++) bb[Tb] !== cb[Tb] && (Wb++, ab.length < sb && ab.push(Tb));
        return {
          count: Wb,
          offsets: ab
        }
      }(cb.bytes, sb);
      return db([`${ab}: ${Tb} bytes differ`, ...Ub.map((bb => `  +${bb}: cpu ${mb(cb.bytes,bb)} | gpu ${mb(sb,bb)}`))].join("\n")), `${ab}: ${Tb} bytes differ, first at ${Ub.join(", ")} (context in the saved file)`
    }

    function kc(bb) {
      if (0 === bb.vertices.length) return void qb(`decode probe (${bb.reason}): no terrain draw probed (${bb.draws.length} seen)`);
      const cb = function(bb) {
          const cb = new Map;
          for (const kb of bb) {
            const bb = cb.get(kb.group);
            bb ? bb.push(kb) : cb.set(kb.group, [kb])
          }
          const sb = {
            vertices: bb.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [kb, Wb] of cb) {
            const bb = new Map,
              cb = Wb.map((cb => {
                const sb = fb(cb.record, cb.slot),
                  kb = [cb.gpu[0] - sb[0], cb.gpu[1] - sb[1], cb.gpu[2] - sb[2]],
                  Wb = kb.map((bb => Math.round(64 * bb))).join(","),
                  ab = bb.get(Wb);
                return ab ? ab.count++ : bb.set(Wb, {
                  count: 1,
                  offset: kb
                }), sb
              }));
            let ab = [0, 0, 0],
              Tb = 0;
            for (const sb of bb.values()) sb.count > Tb && (Tb = sb.count, ab = sb.offset);
            sb.translations.set(kb, ab), Wb.forEach(((bb, kb) => {
              var Wb;
              const Tb = [cb[kb][0] + ab[0], cb[kb][1] + ab[1], cb[kb][2] + ab[2]];
              if (Tb.every(((cb, sb) => {
                  return kb = bb.gpu[sb], Wb = cb, Math.abs(kb - Wb) <= Math.max(.001, 1e-6 * Math.abs(Wb));
                  var kb, Wb
                }))) return;
              sb.mismatches++, sb.byDirection[Ub(bb.record[2])]++, sb.byDiagonal[Ib(bb.record[2])]++;
              const Hb = Mb(bb.record);
              sb.byBand[Hb] = (null !== (Wb = sb.byBand[Hb]) && void 0 !== Wb ? Wb : 0) + 1, sb.first.length < Xb && sb.first.push({
                ...bb,
                expected: Tb
              })
            }))
          }
          return sb
        }(bb.vertices),
        sb = cb.byDirection.map(((bb, cb) => bb ? `${Tb[cb]} ${bb}` : "")).filter(Boolean).join(" "),
        kb = Object.entries(cb.byBand).map((bb => {
          let [cb, sb] = bb;
          return `${cb}: ${sb}`
        })).join(" ");
      if (qb(`decode probe (${bb.reason}): ${cb.mismatches}/${cb.vertices} vertices differ from the CPU decode over ${bb.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (cb.mismatches ? ` by direction [${sb}] diagonal [0: ${cb.byDiagonal[0]} 1: ${cb.byDiagonal[1]}] extent [${kb}]` : "")), bb.fed.records > 0 || bb.fed.failed > 0) {
        qb(`decode probe input: ${bb.fed.differing}/${bb.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (bb.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (bb.fed.failed ? `; the feed failed on ${bb.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const cb of bb.fed.first) qb(`  ${cb}`)
      }
      for (const Wb of cb.first) {
        const [bb, cb, sb] = Wb.record;
        qb(`  mismatch part ${Wb.group} r0 ${bb.toString(16)} r1 ${cb.toString(16)} r2 ${sb.toString(16)} slot ${Wb.slot} (${Tb[Ub(sb)]}): expected ${Wb.expected.map(ac).join(",")} gpu ${Wb.gpu.map(ac).join(",")}`)
      }
      db(`decode probe translations: ${[...cb.translations].map((bb=>{let[cb,sb]=bb;return`${cb}: ${sb.map(ac).join(",")}`})).join("; ")}`)
    }

    function Wc(bb) {
      return bb.toString(16)
    }

    function ac(bb) {
      return Number.isInteger(bb) ? String(bb) : bb.toFixed(3)
    }

    function Tc(bb) {
      return null !== Eb.pendingCheck ? Promise.resolve() : new Promise((cb => {
        let sb = !1;
        const kb = {
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
        Eb.pendingCheck = kb;
        const Wb = () => {
            Eb.pendingCheck = null;
            try {
              ! function(bb) {
                qb(`draw ranges (${bb.reason}): ${bb.terrainDraws} terrain draws in the frame, the first ${bb.draws.length} here`);
                for (const cb of bb.draws) {
                  const bb = cb.uQ.slice(0, 8).map((bb => {
                      let [cb, sb] = bb;
                      return `${cb}+${sb}`
                    })).join(" "),
                    sb = cb.uQ.length > 8 ? ` (+${cb.uQ.length-8} ranges)` : "";
                  qb(`  ${tb(cb.program)} ${cb.program.terrain} ${cb.call} ${bb}${sb} x${cb.instances}${cb.group>=0?` part ${cb.group} chunk ${cb.chunk}`:""} | ${cb.attributes.join(" | ")}`)
                }
              }(kb), kc(kb);
              kb.draws.some((bb => "undefined" !== typeof WebGL2RenderingContext && bb.gl instanceof WebGL2RenderingContext)) || 0 === kb.draws.length ? function(bb) {
                const cb = [],
                  sb = new Map;
                for (const kb of bb)
                  if ("undefined" !== typeof WebGL2RenderingContext && kb.gl instanceof WebGL2RenderingContext)
                    for (const bb of kb.pages) sb.set("buf" === bb.kind ? bb.buffer : bb.texture, {
                      page: bb,
                      gl: kb.gl
                    });
                for (const [kb, {
                    page: Wb,
                    gl: ab
                  }] of sb) {
                  const bb = Pb.get(kb);
                  if (!bb) {
                    cb.push(`${Wb.kind}#${Gb(kb)}: no CPU copy (${Eb.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === Wb.kind) {
                    cb.push(sc(`buf#${bb.id}`, bb, Fb(ab, Wb.buffer, 0, bb.bytes.length)));
                    continue
                  }
                  const sb = cc(ab, Wb.texture, bb.width, 0, bb.width * bb.height),
                    Tb = 16 === bb.texelBytes ? new Uint8Array(sb.buffer) : new Uint8Array(new Uint16Array(sb).buffer);
                  cb.push(sc(`tex#${bb.id} (${16===bb.texelBytes?"records":"light"})`, bb, Tb))
                }
                for (const kb of cb) qb(`page readback ${kb}`)
              }(kb.draws) : qb("page readback: none on WebGL1 (no buffer readback)")
            } catch (bb) {
              qb(`check failed: ${String(bb)}`)
            }
            cb()
          },
          ab = () => {
            if (kb.draws.length > 0 && !sb) return sb = !0, void setTimeout(Wb, 0);
            sb || requestAnimationFrame(ab)
          };
        requestAnimationFrame(ab), setTimeout((() => {
          sb || (sb = !0, Wb())
        }), 5e3)
      }))
    }
    var Uc = sb(4425);
    const Ic = 20,
      Hc = 24,
      fc = Reflect.apply;

    function Mc(bb, cb, sb) {
      if (!bb) return;
      const kb = bb[cb];
      if ("function" === typeof kb) {
        const Wb = sb(kb);
        bb[cb] = Wb, (0, Uc.t)(Wb, kb)
      }
    }
    let Xc = !1;
    const nc = new WeakMap,
      mc = new WeakMap,
      lc = new WeakMap,
      Qc = {
        gl: 0,
        lost: 0
      };
    let ec = {
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
      Cc = {
        buffer: 0,
        texture: 0
      },
      Nc = 0;

    function Vc(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (bb instanceof ArrayBuffer) return new Uint8Array(bb, cb, sb || void 0);
      if (!ArrayBuffer.isView(bb)) return null;
      const kb = "BYTES_PER_ELEMENT" in bb ? bb.BYTES_PER_ELEMENT : 1,
        Wb = bb.byteOffset + cb * kb,
        ab = sb ? sb * kb : bb.byteLength - cb * kb;
      return new Uint8Array(bb.buffer, Wb, Math.max(0, ab))
    }

    function Lc(bb, cb) {
      const sb = function(bb) {
        switch (bb) {
          case lb.ARRAY_BUFFER:
            return lb.ARRAY_BUFFER_BINDING;
          case lb.ELEMENT_ARRAY_BUFFER:
            return lb.ELEMENT_ARRAY_BUFFER_BINDING;
          case lb.COPY_READ_BUFFER:
            return lb.COPY_READ_BUFFER_BINDING;
          case lb.COPY_WRITE_BUFFER:
            return lb.COPY_WRITE_BUFFER_BINDING;
          case lb.UNIFORM_BUFFER:
            return lb.UNIFORM_BUFFER_BINDING;
          case lb.PIXEL_UNPACK_BUFFER:
            return lb.PIXEL_UNPACK_BUFFER_BINDING;
          case lb.TRANSFORM_FEEDBACK_BUFFER:
            return lb.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(cb);
      return sb ? bb.getParameter(sb) : null
    }

    function uc(bb) {
      const cb = Pb.get(bb);
      cb && (Eb.shadowBytes -= cb.bytes.length, Pb.delete(bb))
    }

    function Yc(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      uc(bb), Eb.shadowBytes + cb > Jb ? Eb.uncopied++ : (Eb.shadowBytes += cb, Pb.set(bb, {
        id: Gb(bb),
        bytes: new Uint8Array(cb),
        width: sb,
        height: kb,
        texelBytes: Wb,
        missed: 0
      }))
    }

    function hc(bb, cb) {
      for (const sb of ["deleteBuffer", "deleteTexture"]) Mc(bb, sb, (bb => function() {
        for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
        return sb[0] && uc(sb[0]), fc(bb, this, sb)
      }));
      Mc(bb, "shaderSource", (bb => function() {
        for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
        return sb[0] && "string" === typeof sb[1] && nc.set(sb[0], sb[1]), fc(bb, this, sb)
      })), Mc(bb, "attachShader", (bb => function() {
        for (var cb, sb = arguments.length, kb = new Array(sb), Wb = 0; Wb < sb; Wb++) kb[Wb] = arguments[Wb];
        const ab = kb[0],
          Tb = null !== (cb = mc.get(ab)) && void 0 !== cb ? cb : [];
        return Tb.push(kb[1]), mc.set(ab, Tb), fc(bb, this, kb)
      })), Mc(bb, "linkProgram", (bb => function() {
        for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
        const Wb = fc(bb, this, sb);
        return Eb.inProbe || function(bb, cb) {
          var sb, kb, Wb;
          "undefined" !== typeof HTMLCanvasElement && bb.canvas instanceof HTMLCanvasElement && function(bb) {
            if (Pc.has(bb)) return;
            Pc.add(bb);
            for (const cb of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) bb.addEventListener(cb, (bb => {
              Qc.lost < Ic && (Qc.lost++, qb(`${cb}${"statusMessage"in bb?`: ${String(bb.statusMessage)}`:""}`))
            }))
          }(bb.canvas);
          Eb.context ??= bb;
          const ab = null !== (sb = mc.get(cb)) && void 0 !== sb ? sb : [];
          let Tb = "",
            Ub = "";
          for (const fb of ab) {
            var Ib;
            const bb = null !== (Ib = nc.get(fb)) && void 0 !== Ib ? Ib : "";
            /\bgl_Position\b/.test(bb) ? Tb = bb : Ub = bb
          }
          const Hb = {
            id: Gb(cb),
            name: null !== (kb = null === (Wb = Bb.exec(Tb)) || void 0 === Wb ? void 0 : Wb[1]) && void 0 !== kb ? kb : null,
            gl: bb,
            vertex: Tb,
            fragment: Ub,
            terrain: gc(Tb),
            checked: !1,
            firstDraw: !1
          };
          if (lc.set(cb, Hb), yb.push([cb, Hb]), null !== Hb.terrain) {
            const cb = ab.map((cb => {
              var sb;
              return null !== (sb = bb.getShaderInfoLog(cb)) && void 0 !== sb ? sb : ""
            })).filter((bb => "" !== bb.trim()));
            cb.length > 0 && db(`program ${tb(Hb)} (${Hb.terrain}) shader logs:\n${Ab(cb.join("\n"))}`)
          }
        }(this, sb[0]), Wb
      })), Mc(bb, "bufferData", (bb => function() {
        for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
        const Wb = fc(bb, this, sb);
        if (!Eb.inProbe) {
          const bb = Lc(this, sb[0]);
          if (bb) {
            var ab, Tb, Ub;
            const cb = "number" === typeof sb[1] ? null : Vc(sb[1], null !== (ab = sb[3]) && void 0 !== ab ? ab : 0, null !== (Tb = sb[4]) && void 0 !== Tb ? Tb : 0);
            var Ib;
            if (Yc(bb, "number" === typeof sb[1] ? sb[1] : null !== (Ub = null === cb || void 0 === cb ? void 0 : cb.length) && void 0 !== Ub ? Ub : 0), cb) null === (Ib = Pb.get(bb)) || void 0 === Ib || Ib.bytes.set(cb)
          }
        }
        return Wb
      })), Mc(bb, "bufferSubData", (bb => function() {
        for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
        const Wb = fc(bb, this, sb);
        if (!Eb.inProbe) {
          var ab, Tb;
          const bb = Lc(this, sb[0]),
            cb = bb ? Pb.get(bb) : void 0,
            kb = Vc(sb[2], null !== (ab = sb[3]) && void 0 !== ab ? ab : 0, null !== (Tb = sb[4]) && void 0 !== Tb ? Tb : 0);
          if (cb && kb) {
            const bb = sb[1];
            cb.bytes.set(kb.subarray(0, Math.max(0, cb.bytes.length - bb)), bb), Jc("buffer", cb, bb, kb.length)
          }
        }
        return Wb
      })), cb && (Mc(bb, "copyBufferSubData", (bb => function() {
        for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
        const Wb = fc(bb, this, sb);
        if (!Eb.inProbe) {
          const [bb, cb, kb, Wb, ab] = sb, Tb = Lc(this, bb), Ub = Lc(this, cb), Ib = Tb ? Pb.get(Tb) : void 0, Hb = Ub ? Pb.get(Ub) : void 0;
          Hb && (Ib ? Hb.bytes.set(Ib.bytes.slice(kb, kb + ab), Wb) : Hb.missed++)
        }
        return Wb
      })), Mc(bb, "texStorage2D", (bb => function() {
        for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
        const Wb = fc(bb, this, sb),
          [, , ab, Tb, Ub] = sb;
        if (!Eb.inProbe && (ab === lb.RGBA32UI || ab === lb.RGBA16UI)) {
          const bb = this.getParameter(lb.TEXTURE_BINDING_2D),
            cb = ab === lb.RGBA32UI ? 16 : 8;
          bb && (Db.set(bb, cb), Yc(bb, Tb * Ub * cb, Tb, Ub, cb))
        }
        return Wb
      })), Mc(bb, "texSubImage2D", (bb => function() {
        for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
        const Wb = fc(bb, this, sb);
        return !Eb.inProbe && sb.length >= 9 && sb[0] === lb.TEXTURE_2D && 0 === sb[1] && function(bb, cb) {
          var sb;
          const kb = bb.getParameter(lb.TEXTURE_BINDING_2D),
            Wb = kb ? Pb.get(kb) : void 0;
          if (!Wb) return;
          const [, , ab, Tb, Ub, Ib] = cb;
          let Hb = Vc(cb[8], null !== (sb = cb[9]) && void 0 !== sb ? sb : 0);
          if (null === Hb && "number" === typeof cb[8]) {
            const sb = Lc(bb, lb.PIXEL_UNPACK_BUFFER),
              kb = sb ? Pb.get(sb) : void 0;
            Hb = kb ? kb.bytes.subarray(cb[8]) : null
          }
          if (null === Hb) return void Wb.missed++;
          const fb = bb.getParameter(lb.UNPACK_ROW_LENGTH) || Ub,
            Mb = bb.getParameter(lb.UNPACK_SKIP_ROWS),
            Xb = bb.getParameter(lb.UNPACK_SKIP_PIXELS),
            nb = Wb.texelBytes;
          for (let mb = 0; mb < Ib; mb++) {
            const bb = ((Mb + mb) * fb + Xb) * nb,
              cb = ((Tb + mb) * Wb.width + ab) * nb;
            Wb.bytes.set(Hb.subarray(bb, bb + Ub * nb), cb)
          }
          Jc("texture", Wb, (Tb * Wb.width + ab) * nb, Ub * Ib * nb)
        }(this, sb), Wb
      })), Mc(bb, "copyTexSubImage2D", (bb => function() {
        for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
        const Wb = sb[0] === lb.TEXTURE_2D ? this.getParameter(lb.TEXTURE_BINDING_2D) : null,
          ab = Wb ? Pb.get(Wb) : void 0;
        return ab && ab.missed++, fc(bb, this, sb)
      })));
      for (const sb of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) Mc(bb, sb, (bb => function() {
        for (var cb = arguments.length, kb = new Array(cb), Wb = 0; Wb < cb; Wb++) kb[Wb] = arguments[Wb];
        const ab = fc(bb, this, kb);
        return Eb.inProbe || tc(this, sb, kb), ab
      }));
      Mc(bb, "getExtension", (bb => function() {
        for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
        const Wb = fc(bb, this, sb);
        return Wb && "object" === typeof Wb && function(bb, cb, sb) {
          const kb = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(cb in kb) || sb.bloxdRenderDebug) return;
          sb.bloxdRenderDebug = !0;
          for (const Wb of kb[cb]) {
            const cb = sb[Wb];
            "function" === typeof cb && (sb[Wb] = function() {
              for (var kb = arguments.length, ab = new Array(kb), Tb = 0; Tb < kb; Tb++) ab[Tb] = arguments[Tb];
              const Ub = fc(cb, sb, ab);
              return Eb.inProbe || tc(bb, Wb, ab), Ub
            })
          }
        }(this, sb[0], Wb), Wb
      }))
    }

    function Jc(bb, cb, sb, kb) {
      Cc[bb] += kb, Nc < 32 && cb.bytes.length >= 1 << 20 && (Nc++, db(`upload ${bb} #${cb.id} +${sb} ${kb} B`))
    }

    function gc(bb) {
      if (!bb.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(bb) || /in uvec3 _p2vs_location0\b/.test(bb) ? "inst" : "tex"
    }

    function Bc(bb, cb, sb) {
      var kb;
      if (sb.checked) return;
      sb.checked = !0;
      const Wb = bb.getProgramParameter(cb, lb.LINK_STATUS),
        ab = (null !== (kb = bb.getProgramInfoLog(cb)) && void 0 !== kb ? kb : "").trim();
      var Tb;
      null === sb.terrain && Wb || (qb(`program ${tb(sb)} ${null!==(Tb=sb.terrain)&&void 0!==Tb?Tb:"other"} link ${Wb?"ok":"FAILED"}${ab?`: ${Ab(ab,300)}`:""}`), ab && db(`program ${tb(sb)} link log:\n${Ab(ab)}`))
    }

    function tc(bb, cb, sb) {
      var kb;
      const Wb = bb.getParameter(lb.CURRENT_PROGRAM),
        ab = Wb ? lc.get(Wb) : void 0;
      if (!Wb || !ab) return;
      const Tb = null !== (kb = ab.terrain) && void 0 !== kb ? kb : "other",
        {
          uQ: Ub,
          instances: Ib
        } = function(bb, cb) {
          switch (bb) {
            case "drawArrays":
              return {
                uQ: [
                  [cb[1], cb[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                uQ: [
                  [cb[1], cb[2]]
                ], instances: cb[3]
              };
            case "drawElements":
              return {
                uQ: [
                  [0, cb[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                uQ: [
                  [0, cb[1]]
                ], instances: cb[4]
              };
            case "multiDrawArraysWEBGL": {
              const bb = cb[1],
                sb = cb[3],
                kb = cb[2],
                Wb = cb[4],
                ab = [];
              for (let Tb = 0; Tb < cb[5]; Tb++) ab.push([bb[kb + Tb], sb[Wb + Tb]]);
              return {
                uQ: ab,
                instances: 1
              }
            }
            default:
              return {
                uQ: [], instances: 0
              }
          }
        }(cb, sb),
        Hb = "inst" === ab.terrain ? Ib : Ub.reduce(((bb, cb) => {
          let [, sb] = cb;
          return bb + sb
        }), 0) / 6;
      if (ec[Tb].draws++, ec[Tb].faces += Hb, null === ab.terrain) return;
      if (Eb.context = bb, !ab.firstDraw) {
        ab.firstDraw = !0, Bc(bb, Wb, ab), yc || (yc = !0, qb(function(bb) {
          var cb;
          const sb = bb.getParameter(lb.DEPTH_FUNC),
            kb = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let Wb = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in bb && bb.getParameter(lb.DRAW_FRAMEBUFFER_BINDING)) {
            const cb = bb;
            Wb = cb.getFramebufferAttachmentParameter(lb.DRAW_FRAMEBUFFER, lb.DEPTH_ATTACHMENT, lb.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(cb.getFramebufferAttachmentParameter(lb.DRAW_FRAMEBUFFER,lb.DEPTH_ATTACHMENT,lb.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(cb.getFramebufferAttachmentParameter(lb.DRAW_FRAMEBUFFER,lb.DEPTH_ATTACHMENT,lb.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const ab = bb.getParameter(lb.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(cb=kb[sb])&&void 0!==cb?cb:`0x${sb.toString(16)}`} clear ${ab}${516===sb||518===sb?" (reverse-Z)":""}, samples ${String(bb.getParameter(lb.SAMPLES))}, ${Wb}`
        }(bb)));
        const sb = bb.getError();
        sb !== lb.NO_ERROR && Qc.gl < Ic && (Qc.gl++, qb(`GL error 0x${sb.toString(16)} after program ${tb(ab)}'s first terrain draw (${cb})`))
      }
      const fb = Eb.pendingCheck;
      null !== fb && (fb.terrainDraws++, fb.draws.length < Hc && wb(bb, Wb, ab, cb, Ub, Ib))
    }
    let yc = !1;
    const Pc = new WeakSet;
    var Dc = sb(4247),
      Ec = sb(4430);
    const ic = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let Oc = !1;
    const Gc = new WeakSet,
      Kc = new WeakMap,
      Zc = new WeakMap,
      zc = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let qc = 0,
      dc = !1,
      Ac = null,
      wc = {
        draws: 0,
        faces: 0
      };

    function rc(bb) {
      const cb = globalThis[bb];
      return null === cb || void 0 === cb ? void 0 : cb.prototype
    }

    function oc(bb) {
      return bb && "function" === typeof bb[Symbol.iterator] ? [...bb].sort().join(" ") : ""
    }

    function Sc(bb, cb) {
      const sb = null !== bb && void 0 !== bb ? bb : {},
        kb = null !== cb && void 0 !== cb ? cb : Object.keys(Object.getPrototypeOf(sb)).concat(Object.keys(sb));
      return [...new Set(kb)].filter((bb => "number" === typeof sb[bb])).map((bb => `${bb} ${String(sb[bb])}`)).join(", ")
    }

    function Rc(bb, cb) {
      var sb;
      const kb = null !== (sb = cb.vertex) && void 0 !== sb ? sb : {};
      if (kb.module && Gc.has(kb.module)) {
        var Wb;
        const sb = String(null !== (Wb = kb.entryPoint) && void 0 !== Wb ? Wb : "");
        if (sb.startsWith("vs_packed") && Kc.set(bb, sb), !dc) {
          var ab, Tb, Ub, Ib, Hb;
          dc = !0;
          const bb = null !== (ab = cb.depthStencil) && void 0 !== ab ? ab : {},
            kb = null !== (Tb = cb.multisample) && void 0 !== Tb ? Tb : {},
            Wb = String(null !== (Ub = bb.depthCompare) && void 0 !== Ub ? Ub : "");
          qb(`WebGPU terrain pipeline ${sb}: depth ${String(null!==(Ib=bb.format)&&void 0!==Ib?Ib:"none")} ${Wb}${Wb.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(Hb=kb.count)&&void 0!==Hb?Hb:1)}`)
        }
      }
    }

    function vc(bb) {
      Mc(bb, "setPipeline", (bb => function() {
        for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
        return Zc.set(this, sb[0]), fc(bb, this, sb)
      }));
      for (const cb of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) Mc(bb, cb, (bb => function() {
        const sb = Zc.get(this),
          kb = sb ? Kc.get(sb) : void 0;
        for (var Wb = arguments.length, ab = new Array(Wb), Tb = 0; Tb < Wb; Tb++) ab[Tb] = arguments[Tb];
        return void 0 !== kb && Fc(cb, kb, ab), fc(bb, this, ab)
      }))
    }

    function Fc(bb, cb, sb) {
      var kb;
      (wc.draws++, "draw" === bb || "drawIndexed" === bb) && (wc.faces += sb[0] * (null !== (kb = sb[1]) && void 0 !== kb ? kb : 1) / 6);
      if (null !== Ac && Ac.length < Hc) {
        const kb = ("draw" === bb ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === bb ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((cb, kb) => {
          const Wb = bb.endsWith("Indirect") ? sb[1] : sb[kb];
          return `${cb} ${String(null!==Wb&&void 0!==Wb?Wb:"instances"===cb?1:0)}`
        }));
        Ac.push(`  ${cb} ${bb} ${kb.join(" ")}`)
      }
    }

    function xc() {
      if (Oc || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      Oc = !0, Mc(rc("GPU"), "requestAdapter", (bb => function() {
        for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
        return fc(bb, this, sb).then((bb => {
          var cb;
          bb ? function(bb) {
            var cb;
            const sb = null !== (cb = bb.info) && void 0 !== cb ? cb : {};
            qb(`WebGPU adapter ${["vendor","architecture","device","description"].map((bb=>{var cb;return`${bb} "${String(null!==(cb=sb[bb])&&void 0!==cb?cb:"")}"`})).join(" ")}${bb.isFallbackAdapter?" (fallback)":""}`), qb(`WebGPU adapter features ${oc(bb.features)}`), qb(`WebGPU adapter limits ${Sc(bb.limits,ic)}`), db(`WebGPU adapter all limits ${Sc(bb.limits,null)}`)
          }(bb) : qb(`WebGPU requestAdapter(${JSON.stringify(null!==(cb=sb[0])&&void 0!==cb?cb:{})}) gave none`);
          return bb
        }))
      })), Mc(rc("GPUAdapter"), "requestDevice", (bb => function() {
        for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
        return fc(bb, this, sb).then((bb => (function(bb) {
          qb(`WebGPU device features ${oc(bb.features)}`), qb(`WebGPU device limits ${Sc(bb.limits,ic)}`), bb.addEventListener("uncapturederror", (bb => {
            if (zc.uncaptured < Ic) {
              var cb, sb, kb;
              zc.uncaptured++;
              const Wb = bb.error;
              qb(`WebGPU uncaptured ${null!==(cb=null===Wb||void 0===Wb||null===(sb=Wb.constructor)||void 0===sb?void 0:sb.name)&&void 0!==cb?cb:"error"}: ${Ab(String(null!==(kb=null===Wb||void 0===Wb?void 0:Wb.message)&&void 0!==kb?kb:""),600)}`)
            }
          }));
          const cb = bb.lost;
          null === cb || void 0 === cb || cb.then((bb => {
            var cb;
            qb(`WebGPU device lost (${String(bb.reason)}): ${Ab(String(null!==(cb=bb.message)&&void 0!==cb?cb:""),600)}`)
          }))
        }(bb), bb)), (bb => {
          throw qb(`WebGPU requestDevice failed: ${String(bb)}`), bb
        }))
      }));
      const bb = rc("GPUDevice");
      Mc(bb, "createShaderModule", (bb => function() {
        for (var cb, sb, kb = arguments.length, Wb = new Array(kb), ab = 0; ab < kb; ab++) Wb[ab] = arguments[ab];
        const Tb = fc(bb, this, Wb);
        return function(bb, cb) {
          const sb = cb.includes("decodeQuad");
          sb && Gc.add(bb);
          const kb = bb.getCompilationInfo;
          null === kb || void 0 === kb || kb.call(bb).then((bb => {
            if (0 === bb.messages.length && !sb) return;
            const cb = {};
            for (const sb of bb.messages) {
              var kb;
              cb[String(sb.type)] = (null !== (kb = cb[String(sb.type)]) && void 0 !== kb ? kb : 0) + 1
            }
            const Wb = bb.messages.map((bb => `${String(bb.type)} ${String(bb.lineNum)}:${String(bb.linePos)} ${String(bb.message)}`)).join("\n");
            zc.compile < Ic && (zc.compile++, qb(`WebGPU ${sb?"terrain ":""}shader module compiled: ${JSON.stringify(cb)}${Wb?` first: ${Ab(Wb.split("\n")[0],300)}`:""}`)), Wb && db(`WebGPU shader module messages:\n${Ab(Wb)}`)
          }))
        }(Tb, String(null !== (cb = (null !== (sb = Wb[0]) && void 0 !== sb ? sb : {}).code) && void 0 !== cb ? cb : "")), Tb
      })), Mc(bb, "createRenderPipeline", (bb => function() {
        for (var cb, sb = arguments.length, kb = new Array(sb), Wb = 0; Wb < sb; Wb++) kb[Wb] = arguments[Wb];
        const ab = fc(bb, this, kb);
        return Rc(ab, null !== (cb = kb[0]) && void 0 !== cb ? cb : {}), ab
      })), Mc(bb, "createRenderPipelineAsync", (bb => function() {
        for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
        return fc(bb, this, sb).then((bb => {
          var cb;
          return Rc(bb, null !== (cb = sb[0]) && void 0 !== cb ? cb : {}), bb
        }), (bb => {
          var cb;
          throw function(bb, cb) {
            var sb, kb, Wb;
            if (zc.rejected >= Ic) return;
            zc.rejected++;
            const {
              reason: ab,
              message: Tb
            } = null !== cb && void 0 !== cb ? cb : {}, Ub = String(null !== (sb = (null !== (kb = bb.vertex) && void 0 !== kb ? kb : {}).entryPoint) && void 0 !== sb ? sb : "");
            qb(`WebGPU pipeline "${String(null!==(Wb=bb.label)&&void 0!==Wb?Wb:"")}" ${Ub} rejected (${String(null!==ab&&void 0!==ab?ab:"no reason")}): ${Ab(String(null!==Tb&&void 0!==Tb?Tb:cb),600)}`)
          }(null !== (cb = sb[0]) && void 0 !== cb ? cb : {}, bb), bb
        }))
      })), Mc(rc("GPUCanvasContext"), "configure", (bb => function() {
        for (var cb, sb = arguments.length, kb = new Array(sb), Wb = 0; Wb < sb; Wb++) kb[Wb] = arguments[Wb];
        const ab = null !== (cb = kb[0]) && void 0 !== cb ? cb : {};
        var Tb, Ub;
        qc++ < 3 && qb(`WebGPU canvas ${String(ab.format)} ${String(null!==(Tb=ab.colorSpace)&&void 0!==Tb?Tb:"srgb")} alpha ${String(null!==(Ub=ab.alphaMode)&&void 0!==Ub?Ub:"opaque")}`);
        return fc(bb, this, kb)
      })), vc(rc("GPURenderPassEncoder")), vc(rc("GPURenderBundleEncoder"))
    }
    const jc = 1e4,
      pc = 6e4,
      bs = 5e3,
      cs = 3e3,
      ss = 100;
    let ks = null,
      Ws = !1,
      as = {
        ...Dc.c
      },
      Ts = !1,
      Us = null,
      Is = 0,
      Hs = () => {};
    const fs = new Promise((bb => {
      Hs = bb
    }));

    function Ms() {
      var bb;
      Ws || (Ws = !0, as = Object.assign(window.bloxdRenderDebug ??= {
        ...Dc.c
      }, {
        faceCull: "0" === (0, ab.p)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (bb = (0, ab.p)("adrenoProbe")) && void 0 !== bb ? bb : ""
      }), qb("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), Xc || "undefined" === typeof window || (Xc = !0, "undefined" !== typeof WebGL2RenderingContext && hc(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && hc(WebGLRenderingContext.prototype, !1)), xc(), (0, ab.e)("renderProbe", (() => {
        es("console")
      })), ls(), setInterval(Ns, bs))
    }

    function Xs(bb) {
      var cb, sb;
      Ms(), ks = null !== (cb = null === bb || void 0 === bb ? void 0 : bb.backend) && void 0 !== cb ? cb : null;
      const kb = `, renderer param ${null!==(sb=(0,ab.p)("renderer"))&&void 0!==sb?sb:"none"}, faceCull ${"0"===as.faceCull?"off (whole parts)":"on"}, adrenoProbe ${as.adrenoProbe||"none"}`;
      qb(`${(0,Ec.c)(bb)}${null===bb?"":kb}`)
    }

    function ns() {
      const bb = performance.now(),
        cb = ms(fs, jc, pc).then((cb => es(`${Math.round((performance.now()-bb)/1e3)} s after playable${cb?"":", no terrain drawn yet"}`)));
      (0, Wb.d)(qb, (async () => {
        await cb, await Us
      }))
    }
    async function ms(bb, cb, sb) {
      const Wb = (0, kb.e)(sb).then((() => !1));
      return await (0, kb.e)(cb), Promise.race([bb.then((() => !0)), Wb])
    }

    function ls() {
      requestAnimationFrame((() => {
        Is++, ls()
      }))
    }

    function Qs() {
      var bb, cb, sb;
      if (Ts) return;
      (Ts = !0, qb(`renderer caps ${null!==(bb=as.caps)&&void 0!==bb?bb:"(not noted)"}; terrain fetch ${null!==(cb=as.fetch)&&void 0!==cb?cb:"(not noted)"}`), as.adrenoProbe) && qb(`adrenoProbe ${as.adrenoProbe} asked; in force (storage fetch only): ${null!==(sb=as.probe)&&void 0!==sb?sb:"(not noted)"}`);
      const kb = Eb.context;
      if (kb) {
        for (const bb of function(bb) {
            var cb;
            const sb = [],
              kb = bb.getExtension("WEBGL_debug_renderer_info"),
              Wb = kb ? bb.getParameter(kb.UNMASKED_VENDOR_WEBGL) : "(masked)",
              ab = kb ? bb.getParameter(kb.UNMASKED_RENDERER_WEBGL) : "(masked)";
            sb.push(`GL ${String(bb.getParameter(bb.VERSION))} | ${String(bb.getParameter(bb.SHADING_LANGUAGE_VERSION))} | ${String(bb.getParameter(bb.VENDOR))} / ${String(bb.getParameter(bb.RENDERER))}`), sb.push(`GL unmasked ${Wb} / ${ab}`);
            const Tb = [
              ["MAX_TEXTURE_SIZE", bb.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", bb.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", bb.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", bb.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", bb.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", bb.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", bb.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in bb && Tb.push(["MAX_UNIFORM_BLOCK_SIZE", bb.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", bb.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", bb.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", bb.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), sb.push(`GL limits ${Tb.map((cb=>{let[sb,kb]=cb;return`${sb} ${String(bb.getParameter(kb))}`})).join(", ")}`);
            const Ub = (cb, sb) => {
              const kb = bb.getShaderPrecisionFormat(cb, bb.HIGH_FLOAT),
                Wb = bb.getShaderPrecisionFormat(cb, bb.HIGH_INT);
              return `${sb} highp float ${kb?`${kb.rangeMin}/${kb.rangeMax}/${kb.precision}`:"?"} int ${Wb?`${Wb.rangeMin}/${Wb.rangeMax}/${Wb.precision}`:"?"}`
            };
            sb.push(`GL precision ${Ub(bb.VERTEX_SHADER,"VS")}, ${Ub(bb.FRAGMENT_SHADER,"FS")}`);
            const Ib = bb.getContextAttributes();
            return sb.push(`GL context ${JSON.stringify(Ib)} drawingBuffer ${bb.drawingBufferWidth}x${bb.drawingBufferHeight}${"drawingBufferFormat"in bb?` format 0x${Number(bb.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in bb?` ${String(bb.drawingBufferColorSpace)}`:""}`), sb.push(`GL extensions ${(null!==(cb=bb.getSupportedExtensions())&&void 0!==cb?cb:[]).join(" ")}`), sb
          }(kb)) qb(bb);
        ! function() {
          if (!Eb.context) return;
          let bb = 0,
            cb = 0;
          for (const [sb, kb] of yb) !kb.gl.isContextLost() && kb.gl.isProgram(sb) && (cb++, Bc(kb.gl, sb, kb), null !== kb.terrain && bb++);
          qb(`programs: ${cb} live of ${yb.length} linked, ${bb} packed terrain; CPU page copies ${Math.round(Eb.shadowBytes/1048576)} MiB (${Eb.uncopied} over budget)`)
        }()
      }
    }

    function es(bb) {
      return Us ??= async function(bb) {
        Qs(), "webgpu" === ks ? (Cs(), "1" === as.slotCheck && qb("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), as.slotCheck = "1", await
          function(bb) {
            if (null !== Ac) return Promise.resolve();
            const cb = [];
            return Ac = cb, new Promise((sb => {
              setTimeout((() => {
                Ac = null, qb(`WebGPU draw ranges (${bb}): ${cb.length} terrain draws recorded in a second (first ${Hc}; bundles replay without new ones)`);
                for (const bb of cb) qb(bb);
                sb()
              }), 1e3)
            }))
          }(bb), await async function() {
            for (let bb = 0;
              "1" === as.slotCheck && bb < cs; bb += ss) await (0, kb.e)(ss);
            if ("1" === as.slotCheck) return void qb(`slot check: no answer in ${cs} ms (only the storage fetch has one; a later answer logs on its own)`);
            Cs()
          }()) : await Tc(bb);
        qb(`check (${bb}) done: bloxdDebug.save() downloads it all`)
      }(bb).catch((cb => {
        qb(`check (${bb}) failed: ${String(cb)}`)
      })).finally((() => {
        Us = null
      })), Us
    }

    function Cs() {
      void 0 !== as.slotCheck && "1" !== as.slotCheck && (qb(as.slotCheck), delete as.slotCheck)
    }

    function Ns() {
      const bb = bb => Is ? (bb / Is).toFixed(1) : "0",
        cb = function() {
          const bb = wc;
          return wc = {
            draws: 0,
            faces: 0
          }, bb
        }(),
        sb = function() {
          const bb = ec;
          return ec = {
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
        kb = function() {
          const bb = Cc;
          return Cc = {
            buffer: 0,
            texture: 0
          }, bb
        }();
      Cs(), ("webgpu" === ks ? cb.draws : sb.inst.draws + sb.tex.draws) > 0 && Hs();
      const Wb = "webgpu" === ks ? [`terrain ${bb(cb.draws)} draws ${bb(cb.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((bb => sb[bb].draws > 0)).map((cb => `${cb} ${bb(sb[cb].draws)} draws ${bb(sb[cb].faces)} faces a frame`));
      qb(`${Is} frames: ${Wb.join(", ")||"no draws"}; uploaded ${Math.round(kb.buffer/1024)} KiB to buffers, ${Math.round(kb.texture/1024)} KiB to data textures`), Is = 0
    }
  },
  4430: (bb, cb, sb) => {
    function kb(bb) {
      if (null === bb) return "backend: none picked (no renderer build)";
      const cb = bb.adapter ? `${bb.adapter.vendor}/${bb.adapter.architecture}` : "none";
      return `backend ${bb.backend}: reason ${bb.reason}, source ${bb.source}, adapter ${cb}`
    }
    sb.d(cb, {
      c: () => kb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);