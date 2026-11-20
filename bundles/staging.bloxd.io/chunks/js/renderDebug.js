export const id = 47;
export const ids = [47];
export const modules = {
  4459: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => ab
    });
    var Bb = hb(13),
      Ob = hb(16),
      Gb = hb(1184),
      Ub = hb(2633);
    const Lb = 3e4,
      Yb = 1e3;

    function Sb() {
      return "visible" === document.visibilityState && "inGame" === Bb.d.get("gameState") && (0, Gb.m)()
    }

    function ab(bb, ub) {
      (0, Ub.s)() || function(bb, ub, hb) {
        let Bb = 0;
        const Ob = setInterval((() => {
          ub() && (Bb += Yb, Bb >= bb && (clearInterval(Ob), hb()))
        }), Yb)
      }(Lb, Sb, (() => {
        ub().then((() => {
          bb(`saved for the player after ${Lb/1e3} s of play`), (0, Ub.B)(), Ob.i.vp("chat", {
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
  4450: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      installRenderDebug: () => Hh,
      renderDebugPlayable: () => Zh,
      startRenderDebug: () => wh,
      waitForDraw: () => Xh
    });
    var Bb = hb(1709),
      Ob = hb(4459),
      Gb = hb(2633);
    const Ub = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function Lb(bb) {
      return 7 & bb
    }

    function Yb(bb) {
      return bb >>> 11 & 1
    }

    function Sb(bb) {
      return [1 + (bb >>> 18 & 63), 1 + (bb >>> 24 & 63)]
    }

    function ab(bb, ub) {
      const [hb, , Bb] = bb, Ob = Lb(Bb), Gb = function(bb, ub, hb) {
        return ub + (1 === (22 >>> bb & 1) ? 4 - hb : hb) & 3
      }(Ob, Yb(Bb), ub), Ub = Ob >>> 1, [ab, Hb] = Sb(hb), wb = 1 === Gb || 2 === Gb ? ab : 0, Zb = Gb >= 2 ? Hb : 0, Xb = [63 & hb, hb >>> 6 & 63, hb >>> 12 & 63];
      return Xb[2 === Ub ? 0 : 2] += wb, Xb[1 === Ub ? 0 : 1] += Zb, Xb
    }

    function Hb(bb) {
      const ub = Math.max(...Sb(bb[0]));
      return 1 === ub ? "1" : ub <= 4 ? "2-4" : ub <= 16 ? "5-16" : "17-64"
    }
    const wb = 16;

    function Zb(bb) {
      let ub = 2166136261;
      for (let hb = 0; hb < bb.length; hb++) ub = Math.imul(ub ^ bb[hb], 16777619);
      return ub >>> 0
    }

    function Xb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const Bb = Math.max(0, ub - hb),
        Ob = Math.min(bb.length, ub + hb),
        Gb = [];
      for (let Ub = Bb; Ub < Ob; Ub++) {
        const hb = bb[Ub].toString(16).padStart(2, "0");
        Gb.push(Ub === ub ? `[${hb}]` : hb)
      }
      return Gb.join(" ")
    }
    const pb = {
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
      ob = "_vs2fs_location0",
      Ab = 0,
      lb = 4,
      Kb = 6,
      Wb = [0, 1, 2, 0, 2, 3],
      Cb = 2048,
      db = 4,
      rb = 256,
      jb = 64,
      nb = 268435456,
      Db = 65536,
      xb = /^#version [^\n]*\/\/ program (\S+)$/m;

    function zb(bb) {
      return null === bb.name ? `#${bb.id}` : `#${bb.id} ${bb.name}`
    }
    const gb = [],
      ib = new WeakMap,
      vb = new WeakMap,
      tb = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let Jb = 1;
    const eb = new WeakMap;

    function Nb(bb) {
      if (null === bb) return 0;
      let ub = eb.get(bb);
      return void 0 === ub && (ub = Jb++, eb.set(bb, ub)), ub
    }
    class sb {
      constructor(bb, ub) {
        this.print = bb, this.now = ub, this.shown = 0, this.MS = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.HZ = [], this.dropped = 0
      }
      line(bb) {
        const ub = this.now();
        if (ub - this.second >= 1e3 && (this.second = ub, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.MS++, void this.store(bb);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${bb} (the last line here: the rest go to bloxdDebug.save())` : bb)
      }
      keep(bb) {
        this.sections++, this.store(bb)
      }
      store(bb) {
        this.HZ.push(`${new Date(Date.now()).toISOString()} ${bb}`), this.HZ.length > 2e4 && (this.HZ.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.MS} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.HZ].join("\n")
      }
    }
    let Mb = null;

    function mb() {
      if (null === Mb) {
        const bb = new sb((bb => {
          (0, Gb.l)("render", bb)
        }), (() => performance.now()));
        (0, Gb.i)("render", (() => bb.dump())), Mb = bb
      }
      return Mb
    }

    function Ib(bb) {
      mb().line(bb)
    }

    function Pb(bb) {
      mb().keep(bb)
    }

    function qb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return bb.length <= ub ? bb : `${bb.slice(0,ub)}... (${bb.length-ub} more characters)`
    }

    function Eb(bb, ub, hb, Bb, Ob, Gb) {
      const Ub = tb.pendingCheck;
      if (null === Ub) return;
      const Lb = "undefined" !== typeof WebGL2RenderingContext && bb instanceof WebGL2RenderingContext,
        Yb = {
          gl: bb,
          program: hb,
          call: Bb,
          tp: Ob,
          instances: Gb,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (Ub.draws.push(Yb), Lb) try {
        const Bb = function(bb) {
          const ub = [],
            hb = new Map,
            Bb = Math.min(16, bb.getParameter(pb.MAX_VERTEX_ATTRIBS));
          for (let Ob = 0; Ob < Bb; Ob++) {
            if (!bb.getVertexAttrib(Ob, pb.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const Bb = bb.getVertexAttrib(Ob, pb.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              Gb = bb.getVertexAttribOffset(Ob, pb.VERTEX_ATTRIB_ARRAY_POINTER),
              Ub = bb.getVertexAttrib(Ob, pb.VERTEX_ATTRIB_ARRAY_STRIDE),
              Lb = bb.getVertexAttrib(Ob, pb.VERTEX_ATTRIB_ARRAY_SIZE),
              Yb = bb.getVertexAttrib(Ob, pb.VERTEX_ATTRIB_ARRAY_TYPE),
              Sb = "VERTEX_ATTRIB_ARRAY_INTEGER" in bb && bb.getVertexAttrib(Ob, pb.VERTEX_ATTRIB_ARRAY_INTEGER),
              ab = "VERTEX_ATTRIB_ARRAY_DIVISOR" in bb ? bb.getVertexAttrib(Ob, pb.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            hb.set(Ob, {
              buffer: Bb,
              offset: Gb,
              stride: Ub
            }), ub.push(`@${Ob} buf#${Nb(Bb)} +${Gb} stride ${Ub} ${Lb}x0x${Yb.toString(16)}${Sb?" int":""} div ${ab}`)
          }
          return {
            lines: ub,
            byLocation: hb
          }
        }(bb);
        if (Yb.attributes = Bb.lines, "inst" === hb.terrain) {
          const {
            group: Ob,
            chunk: Lb
          } = function(bb, ub, hb) {
            const Bb = ub.get(Kb),
              Ob = bb.getVertexAttrib(Kb, pb.CURRENT_VERTEX_ATTRIB),
              Gb = Bb ? `+${Bb.offset}` : Ob ? Array.from(Ob).slice(0, 3).join(",") : "?";
            let Ub = hb.groups.get(Gb);
            return void 0 === Ub && (Ub = hb.groups.size, hb.groups.set(Gb, Ub)), {
              group: Ub,
              chunk: Gb
            }
          }(bb, Bb.byLocation, Ub);
          Yb.group = Ob, Yb.chunk = Lb;
          for (const bb of [Ab, lb]) {
            var Sb;
            const ub = null === (Sb = Bb.byLocation.get(bb)) || void 0 === Sb ? void 0 : Sb.buffer;
            ub && Yb.pages.push({
              kind: "buf",
              buffer: ub
            })
          }! function(bb, ub, hb, Bb, Ob, Gb, Ub) {
            const Lb = Bb.get(Ab),
              Yb = Ub.parts.get(Gb);
            if (void 0 === Yb && Ub.parts.size >= db) return;
            const Sb = Math.min(Ob, jb, rb - (null !== Yb && void 0 !== Yb ? Yb : 0));
            if (null === Lb || void 0 === Lb || !Lb.buffer || Sb <= 0) return;
            const ab = yb(bb, ub, hb);
            if (!ab) return;
            const Hb = Lb.stride || 12,
              wb = Tb(bb, Lb.buffer, Lb.offset, (Sb - 1) * Hb + 12),
              Zb = new DataView(wb.buffer),
              Xb = function(bb, ub) {
                const hb = function(bb) {
                    const ub = Rb.get(bb);
                    if (void 0 !== ub && (null === ub || bb.isProgram(ub))) return ub;
                    tb.inProbe = !0;
                    let hb = null;
                    try {
                      hb = Vb(bb, cb, Qb, "fed", "the record feed")
                    } finally {
                      tb.inProbe = !1
                    }
                    return Rb.set(bb, hb), hb
                  }(bb),
                  Bb = hb ? kb(bb, hb, ub, (() => {
                    bb.drawArraysInstanced(pb.POINTS, 0, 1, ub)
                  }), "decode probe input (the record feed)") : null;
                return Bb ? new Uint32Array(Bb.buffer) : null
              }(bb, Sb);
            Xb || Ub.fed.failed++;
            const ob = kb(bb, ab, 4 * Sb, (() => {
              bb.drawArraysInstanced(pb.POINTS, 0, 4, Sb)
            }));
            if (!ob) return;
            Ub.parts.set(Gb, (null !== Yb && void 0 !== Yb ? Yb : 0) + Sb);
            for (let pb = 0; pb < Sb; pb++) {
              const bb = pb * Hb,
                ub = [Zb.getUint32(bb, !0), Zb.getUint32(bb + 4, !0), Zb.getUint32(bb + 8, !0)],
                hb = Xb ? [Xb[3 * pb], Xb[3 * pb + 1], Xb[3 * pb + 2]] : ub;
              Xb && (Ub.fed.records++, hb.some(((bb, hb) => bb !== ub[hb])) && (Ub.fed.differing++, Ub.fed.first.length < 8 && Ub.fed.first.push(`part ${Gb} instance ${pb}: fed ${hb.map(Ou).join(" ")} buffer ${ub.map(Ou).join(" ")}`)));
              for (let Bb = 0; Bb < 4; Bb++) {
                const bb = 3 * (4 * pb + Bb);
                Ub.vertices.push({
                  record: hb,
                  slot: Bb,
                  group: Gb,
                  gpu: [ob[bb], ob[bb + 1], ob[bb + 2]]
                })
              }
            }
          }(bb, ub, hb, Bb.byLocation, Gb, Ob, Ub)
        } else {
          const Bb = bu(bb, ub, 16),
            Gb = bu(bb, ub, 8);
          for (const bb of [Bb, Gb]) bb && Yb.pages.push({
            kind: "tex",
            texture: bb
          });
          Bb && function(bb, ub, hb, Bb, Ob, Gb) {
            if (Gb.parts.size >= db) return;
            const Ub = yb(bb, ub, hb);
            if (!Ub) return;
            let Lb = 6 * rb;
            const Yb = [];
            for (const [Zb, Xb] of Ob) {
              const bb = Math.min(Xb, Lb, Math.max(6, 6 * Math.floor(rb / Ob.length)));
              bb > 0 && (Yb.push([Zb, bb]), Lb -= bb)
            }
            const Sb = Yb.reduce(((bb, ub) => {
                let [, hb] = ub;
                return bb + hb
              }), 0),
              ab = kb(bb, Ub, Sb, (() => {
                for (const [ub, hb] of Yb) bb.drawArrays(pb.POINTS, ub, hb)
              }));
            if (!ab) return;
            let Hb = 0;
            for (const [Zb, Xb] of Yb) {
              const ub = Math.floor(Zb / 6),
                hb = Math.floor((Zb + Xb - 1) / 6) - ub + 1,
                Ob = uu(bb, Bb, Cb, ub, hb);
              for (let bb = Zb; bb < Zb + Xb; bb++, Hb++) {
                var wb;
                const hb = 4 * (Math.floor(bb / 6) - ub),
                  Bb = [Ob[hb], Ob[hb + 1], Ob[hb + 2]];
                Gb.parts.set(Ob[hb + 3], (null !== (wb = Gb.parts.get(Ob[hb + 3])) && void 0 !== wb ? wb : 0) + (bb % 6 === 0 ? 1 : 0)), Gb.vertices.push({
                  record: Bb,
                  slot: Wb[bb % 6],
                  group: Ob[hb + 3],
                  gpu: [ab[3 * Hb], ab[3 * Hb + 1], ab[3 * Hb + 2]]
                })
              }
            }
          }(bb, ub, hb, Bb, Ob, Ub)
        }
      } catch (ab) {
        Ib(`decode probe failed on program ${zb(hb)}: ${String(ab)}`)
      }
    }

    function yb(bb, ub, hb) {
      if (void 0 !== hb.probe) return hb.probe && Fb(bb, ub, hb.probe), hb.probe;
      hb.probe = null, tb.inProbe = !0;
      try {
        hb.probe = function(bb, ub) {
          return Vb(bb, ub.vertex, ub.fragment, ob, `program ${zb(ub)}'s twin`)
        }(bb, hb)
      } finally {
        tb.inProbe = !1
      }
      return hb.probe && Fb(bb, ub, hb.probe), hb.probe
    }

    function Vb(bb, ub, hb, Bb, Ob) {
      const Gb = [bb.createShader(pb.VERTEX_SHADER), bb.createShader(pb.FRAGMENT_SHADER)],
        Ub = bb.createProgram();
      if (!Ub || !Gb[0] || !Gb[1]) return null;
      bb.shaderSource(Gb[0], ub), bb.shaderSource(Gb[1], hb);
      for (const Yb of Gb) bb.compileShader(Yb), bb.attachShader(Ub, Yb);
      bb.transformFeedbackVaryings(Ub, [Bb], pb.INTERLEAVED_ATTRIBS), bb.linkProgram(Ub);
      for (const Yb of Gb) bb.deleteShader(Yb);
      var Lb;
      return bb.getProgramParameter(Ub, pb.LINK_STATUS) ? Ub : (Ib(`decode probe: ${Ob} failed to link: ${qb(null!==(Lb=bb.getProgramInfoLog(Ub))&&void 0!==Lb?Lb:"",300)}`), bb.deleteProgram(Ub), null)
    }

    function Fb(bb, ub, hb) {
      const Bb = bb.getProgramParameter(ub, pb.ACTIVE_UNIFORM_BLOCKS);
      for (let Lb = 0; Lb < Bb; Lb++) {
        const Bb = bb.getActiveUniformBlockName(ub, Lb),
          Ob = null === Bb ? pb.INVALID_INDEX : bb.getUniformBlockIndex(hb, Bb);
        Ob !== pb.INVALID_INDEX && bb.uniformBlockBinding(hb, Ob, bb.getActiveUniformBlockParameter(ub, Lb, pb.UNIFORM_BLOCK_BINDING))
      }
      const Ob = bb.getParameter(pb.CURRENT_PROGRAM);
      bb.useProgram(hb);
      const Gb = bb.getProgramParameter(ub, pb.ACTIVE_UNIFORMS),
        Ub = bb.getActiveUniforms(ub, [...Array(Gb).keys()], pb.UNIFORM_BLOCK_INDEX);
      for (let Lb = 0; Lb < Gb; Lb++) {
        const Bb = bb.getActiveUniform(ub, Lb);
        if (!Bb || -1 !== Ub[Lb]) continue;
        const Ob = Bb.name.replace(/\[0\]$/, "");
        for (let Gb = 0; Gb < Bb.size; Gb++) {
          const Ub = Bb.size > 1 ? `${Ob}[${Gb}]` : Bb.name,
            Lb = bb.getUniformLocation(ub, Ub),
            Yb = bb.getUniformLocation(hb, Ub);
          Lb && Yb && fb(bb, Yb, Bb.type, bb.getUniform(ub, Lb))
        }
      }
      bb.useProgram(Ob)
    }

    function fb(bb, ub, hb, Bb) {
      const Ob = ArrayBuffer.isView(Bb) ? Array.from(Bb) : [Number(Bb)];
      switch (hb) {
        case pb.FLOAT:
          return void bb.uniform1f(ub, Ob[0]);
        case pb.FLOAT_VEC2:
          return void bb.uniform2fv(ub, Ob);
        case pb.FLOAT_VEC3:
          return void bb.uniform3fv(ub, Ob);
        case pb.FLOAT_VEC4:
          return void bb.uniform4fv(ub, Ob);
        case pb.FLOAT_MAT3:
          return void bb.uniformMatrix3fv(ub, !1, Ob);
        case pb.FLOAT_MAT4:
          return void bb.uniformMatrix4fv(ub, !1, Ob);
        case pb.UNSIGNED_INT:
          return void bb.uniform1ui(ub, Ob[0]);
        case pb.UNSIGNED_INT_VEC2:
          return void bb.uniform2uiv(ub, Ob);
        case pb.UNSIGNED_INT_VEC3:
          return void bb.uniform3uiv(ub, Ob);
        case pb.UNSIGNED_INT_VEC4:
          return void bb.uniform4uiv(ub, Ob);
        case pb.INT_VEC2:
          return void bb.uniform2iv(ub, Ob);
        case pb.INT_VEC3:
          return void bb.uniform3iv(ub, Ob);
        case pb.INT_VEC4:
          return void bb.uniform4iv(ub, Ob);
        default:
          bb.uniform1i(ub, Ob[0])
      }
    }

    function kb(bb, ub, hb, Bb) {
      let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const Gb = bb.getParameter(pb.CURRENT_PROGRAM),
        Ub = bb.getParameter(pb.TRANSFORM_FEEDBACK_BINDING),
        Lb = bb.getParameter(pb.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        Yb = bb.getParameter(pb.COPY_READ_BUFFER_BINDING),
        Sb = bb.isEnabled(pb.RASTERIZER_DISCARD),
        ab = bb.createTransformFeedback(),
        Hb = bb.createBuffer();
      tb.inProbe = !0;
      try {
        const Gb = bb.getError();
        Gb !== pb.NO_ERROR && Ib(`GL error 0x${Gb.toString(16)} pending before the decode probe (the renderer's)`), bb.useProgram(ub), bb.bindTransformFeedback(pb.TRANSFORM_FEEDBACK, ab), bb.bindBuffer(pb.TRANSFORM_FEEDBACK_BUFFER, Hb), bb.bufferData(pb.TRANSFORM_FEEDBACK_BUFFER, 12 * hb, pb.STREAM_READ), bb.bindBufferBase(pb.TRANSFORM_FEEDBACK_BUFFER, 0, Hb), bb.enable(pb.RASTERIZER_DISCARD), bb.beginTransformFeedback(pb.POINTS), Bb(), bb.endTransformFeedback(), bb.bindBufferBase(pb.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const Ub = bb.getError();
        if (Ub !== pb.NO_ERROR) return Ib(`${Ob}: GL error 0x${Ub.toString(16)} on the feedback draw`), null;
        const Lb = new Float32Array(3 * hb);
        return bb.bindBuffer(pb.COPY_READ_BUFFER, Hb), bb.getBufferSubData(pb.COPY_READ_BUFFER, 0, Lb), Lb
      } finally {
        Sb || bb.disable(pb.RASTERIZER_DISCARD), bb.bindTransformFeedback(pb.TRANSFORM_FEEDBACK, Ub), bb.bindBuffer(pb.TRANSFORM_FEEDBACK_BUFFER, Lb), bb.bindBuffer(pb.COPY_READ_BUFFER, Yb), bb.deleteTransformFeedback(ab), bb.deleteBuffer(Hb), bb.useProgram(Gb), tb.inProbe = !1
      }
    }

    function Tb(bb, ub, hb, Bb) {
      const Ob = bb.getParameter(pb.COPY_READ_BUFFER_BINDING),
        Gb = new Uint8Array(Bb);
      return bb.bindBuffer(pb.COPY_READ_BUFFER, ub), bb.getBufferSubData(pb.COPY_READ_BUFFER, hb, Gb), bb.bindBuffer(pb.COPY_READ_BUFFER, Ob), Gb
    }
    const cb = `#version 300 es\nlayout(location = ${Ab}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      Qb = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      Rb = new WeakMap;

    function bu(bb, ub, hb) {
      const Bb = bb.getProgramParameter(ub, pb.ACTIVE_UNIFORMS),
        Ob = bb.getParameter(pb.ACTIVE_TEXTURE);
      try {
        for (let Ob = 0; Ob < Bb; Ob++) {
          const Bb = bb.getActiveUniform(ub, Ob);
          if ((null === Bb || void 0 === Bb ? void 0 : Bb.type) !== pb.UNSIGNED_INT_SAMPLER_2D) continue;
          const Gb = bb.getUniformLocation(ub, Bb.name),
            Ub = Gb ? bb.getUniform(ub, Gb) : -1;
          if (Ub < 0) continue;
          bb.activeTexture(pb.TEXTURE0 + Ub);
          const Lb = bb.getParameter(pb.TEXTURE_BINDING_2D);
          if (Lb && vb.get(Lb) === hb) return Lb
        }
        return null
      } finally {
        bb.activeTexture(Ob)
      }
    }

    function uu(bb, ub, hb, Bb, Ob) {
      const Gb = new Uint32Array(4 * Ob),
        Ub = bb.getParameter(pb.READ_FRAMEBUFFER_BINDING),
        Lb = bb.createFramebuffer();
      bb.bindFramebuffer(pb.READ_FRAMEBUFFER, Lb), bb.framebufferTexture2D(pb.READ_FRAMEBUFFER, pb.COLOR_ATTACHMENT0, pb.TEXTURE_2D, ub, 0);
      try {
        let ub = 0;
        for (; ub < Ob;) {
          const Ub = Bb + ub,
            Lb = Ub % hb,
            Yb = Math.min(Ob - ub, hb - Lb);
          bb.readPixels(Lb, Math.floor(Ub / hb), Yb, 1, pb.RGBA_INTEGER, pb.UNSIGNED_INT, Gb.subarray(4 * ub, 4 * (ub + Yb))), ub += Yb
        }
      } finally {
        bb.bindFramebuffer(pb.READ_FRAMEBUFFER, Ub), bb.deleteFramebuffer(Lb)
      }
      return Gb
    }

    function hu(bb, ub, hb) {
      let Bb = 0,
        Ob = 0;
      for (let Yb = 0; Yb < ub.bytes.length; Yb += Db) {
        Bb++;
        const bb = Math.min(Yb + Db, ub.bytes.length);
        Zb(ub.bytes.subarray(Yb, bb)) !== Zb(hb.subarray(Yb, bb)) && Ob++
      }
      const Gb = `${bb} ${ub.bytes.length} B cpu ${Zb(ub.bytes).toString(16)} gpu ${Zb(hb).toString(16)}, ${Ob}/${Bb} blocks differ${ub.missed?`, ${ub.missed} GPU-side writes uncopied`:""}`;
      if (0 === Ob) return Gb;
      const {
        count: Ub,
        offsets: Lb
      } = function(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const Bb = Math.min(bb.length, ub.length);
        let Ob = Math.abs(bb.length - ub.length);
        const Gb = [];
        for (let Ub = 0; Ub < Bb; Ub++) bb[Ub] !== ub[Ub] && (Ob++, Gb.length < hb && Gb.push(Ub));
        return {
          count: Ob,
          offsets: Gb
        }
      }(ub.bytes, hb);
      return Pb([`${Gb}: ${Ub} bytes differ`, ...Lb.map((bb => `  +${bb}: cpu ${Xb(ub.bytes,bb)} | gpu ${Xb(hb,bb)}`))].join("\n")), `${Gb}: ${Ub} bytes differ, first at ${Lb.join(", ")} (context in the saved file)`
    }

    function Bu(bb) {
      if (0 === bb.vertices.length) return void Ib(`decode probe (${bb.reason}): no terrain draw probed (${bb.draws.length} seen)`);
      const ub = function(bb) {
          const ub = new Map;
          for (const Bb of bb) {
            const bb = ub.get(Bb.group);
            bb ? bb.push(Bb) : ub.set(Bb.group, [Bb])
          }
          const hb = {
            vertices: bb.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [Bb, Ob] of ub) {
            const bb = new Map,
              ub = Ob.map((ub => {
                const hb = ab(ub.record, ub.slot),
                  Bb = [ub.gpu[0] - hb[0], ub.gpu[1] - hb[1], ub.gpu[2] - hb[2]],
                  Ob = Bb.map((bb => Math.round(64 * bb))).join(","),
                  Gb = bb.get(Ob);
                return Gb ? Gb.count++ : bb.set(Ob, {
                  count: 1,
                  offset: Bb
                }), hb
              }));
            let Gb = [0, 0, 0],
              Ub = 0;
            for (const hb of bb.values()) hb.count > Ub && (Ub = hb.count, Gb = hb.offset);
            hb.translations.set(Bb, Gb), Ob.forEach(((bb, Bb) => {
              var Ob;
              const Ub = [ub[Bb][0] + Gb[0], ub[Bb][1] + Gb[1], ub[Bb][2] + Gb[2]];
              if (Ub.every(((ub, hb) => {
                  return Bb = bb.gpu[hb], Ob = ub, Math.abs(Bb - Ob) <= Math.max(.001, 1e-6 * Math.abs(Ob));
                  var Bb, Ob
                }))) return;
              hb.mismatches++, hb.byDirection[Lb(bb.record[2])]++, hb.byDiagonal[Yb(bb.record[2])]++;
              const Sb = Hb(bb.record);
              hb.byBand[Sb] = (null !== (Ob = hb.byBand[Sb]) && void 0 !== Ob ? Ob : 0) + 1, hb.first.length < wb && hb.first.push({
                ...bb,
                expected: Ub
              })
            }))
          }
          return hb
        }(bb.vertices),
        hb = ub.byDirection.map(((bb, ub) => bb ? `${Ub[ub]} ${bb}` : "")).filter(Boolean).join(" "),
        Bb = Object.entries(ub.byBand).map((bb => {
          let [ub, hb] = bb;
          return `${ub}: ${hb}`
        })).join(" ");
      if (Ib(`decode probe (${bb.reason}): ${ub.mismatches}/${ub.vertices} vertices differ from the CPU decode over ${bb.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (ub.mismatches ? ` by direction [${hb}] diagonal [0: ${ub.byDiagonal[0]} 1: ${ub.byDiagonal[1]}] extent [${Bb}]` : "")), bb.fed.records > 0 || bb.fed.failed > 0) {
        Ib(`decode probe input: ${bb.fed.differing}/${bb.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (bb.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (bb.fed.failed ? `; the feed failed on ${bb.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const ub of bb.fed.first) Ib(`  ${ub}`)
      }
      for (const Ob of ub.first) {
        const [bb, ub, hb] = Ob.record;
        Ib(`  mismatch part ${Ob.group} r0 ${bb.toString(16)} r1 ${ub.toString(16)} r2 ${hb.toString(16)} slot ${Ob.slot} (${Ub[Lb(hb)]}): expected ${Ob.expected.map(Gu).join(",")} gpu ${Ob.gpu.map(Gu).join(",")}`)
      }
      Pb(`decode probe translations: ${[...ub.translations].map((bb=>{let[ub,hb]=bb;return`${ub}: ${hb.map(Gu).join(",")}`})).join("; ")}`)
    }

    function Ou(bb) {
      return bb.toString(16)
    }

    function Gu(bb) {
      return Number.isInteger(bb) ? String(bb) : bb.toFixed(3)
    }

    function Uu(bb) {
      return null !== tb.pendingCheck ? Promise.resolve() : new Promise((ub => {
        let hb = !1;
        const Bb = {
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
        tb.pendingCheck = Bb;
        const Ob = () => {
            tb.pendingCheck = null;
            try {
              ! function(bb) {
                Ib(`draw ranges (${bb.reason}): ${bb.terrainDraws} terrain draws in the frame, the first ${bb.draws.length} here`);
                for (const ub of bb.draws) {
                  const bb = ub.tp.slice(0, 8).map((bb => {
                      let [ub, hb] = bb;
                      return `${ub}+${hb}`
                    })).join(" "),
                    hb = ub.tp.length > 8 ? ` (+${ub.tp.length-8} ranges)` : "";
                  Ib(`  ${zb(ub.program)} ${ub.program.terrain} ${ub.call} ${bb}${hb} x${ub.instances}${ub.group>=0?` part ${ub.group} chunk ${ub.chunk}`:""} | ${ub.attributes.join(" | ")}`)
                }
              }(Bb), Bu(Bb);
              Bb.draws.some((bb => "undefined" !== typeof WebGL2RenderingContext && bb.gl instanceof WebGL2RenderingContext)) || 0 === Bb.draws.length ? function(bb) {
                const ub = [],
                  hb = new Map;
                for (const Bb of bb)
                  if ("undefined" !== typeof WebGL2RenderingContext && Bb.gl instanceof WebGL2RenderingContext)
                    for (const bb of Bb.pages) hb.set("buf" === bb.kind ? bb.buffer : bb.texture, {
                      page: bb,
                      gl: Bb.gl
                    });
                for (const [Bb, {
                    page: Ob,
                    gl: Gb
                  }] of hb) {
                  const bb = ib.get(Bb);
                  if (!bb) {
                    ub.push(`${Ob.kind}#${Nb(Bb)}: no CPU copy (${tb.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === Ob.kind) {
                    ub.push(hu(`buf#${bb.id}`, bb, Tb(Gb, Ob.buffer, 0, bb.bytes.length)));
                    continue
                  }
                  const hb = uu(Gb, Ob.texture, bb.width, 0, bb.width * bb.height),
                    Ub = 16 === bb.texelBytes ? new Uint8Array(hb.buffer) : new Uint8Array(new Uint16Array(hb).buffer);
                  ub.push(hu(`tex#${bb.id} (${16===bb.texelBytes?"records":"light"})`, bb, Ub))
                }
                for (const Bb of ub) Ib(`page readback ${Bb}`)
              }(Bb.draws) : Ib("page readback: none on WebGL1 (no buffer readback)")
            } catch (bb) {
              Ib(`check failed: ${String(bb)}`)
            }
            ub()
          },
          Gb = () => {
            if (Bb.draws.length > 0 && !hb) return hb = !0, void setTimeout(Ob, 0);
            hb || requestAnimationFrame(Gb)
          };
        requestAnimationFrame(Gb), setTimeout((() => {
          hb || (hb = !0, Ob())
        }), 5e3)
      }))
    }
    var Lu = hb(4466);
    const Yu = 20,
      Su = 24,
      au = Reflect.apply;

    function Hu(bb, ub, hb) {
      if (!bb) return;
      const Bb = bb[ub];
      if ("function" === typeof Bb) {
        const Ob = hb(Bb);
        bb[ub] = Ob, (0, Lu.u)(Ob, Bb)
      }
    }
    let wu = !1;
    const Zu = new WeakMap,
      Xu = new WeakMap,
      pu = new WeakMap,
      ou = {
        gl: 0,
        lost: 0
      };
    let Au = {
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
      lu = {
        buffer: 0,
        texture: 0
      },
      Ku = 0;

    function Wu(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (bb instanceof ArrayBuffer) return new Uint8Array(bb, ub, hb || void 0);
      if (!ArrayBuffer.isView(bb)) return null;
      const Bb = "BYTES_PER_ELEMENT" in bb ? bb.BYTES_PER_ELEMENT : 1,
        Ob = bb.byteOffset + ub * Bb,
        Gb = hb ? hb * Bb : bb.byteLength - ub * Bb;
      return new Uint8Array(bb.buffer, Ob, Math.max(0, Gb))
    }

    function Cu(bb, ub) {
      const hb = function(bb) {
        switch (bb) {
          case pb.ARRAY_BUFFER:
            return pb.ARRAY_BUFFER_BINDING;
          case pb.ELEMENT_ARRAY_BUFFER:
            return pb.ELEMENT_ARRAY_BUFFER_BINDING;
          case pb.COPY_READ_BUFFER:
            return pb.COPY_READ_BUFFER_BINDING;
          case pb.COPY_WRITE_BUFFER:
            return pb.COPY_WRITE_BUFFER_BINDING;
          case pb.UNIFORM_BUFFER:
            return pb.UNIFORM_BUFFER_BINDING;
          case pb.PIXEL_UNPACK_BUFFER:
            return pb.PIXEL_UNPACK_BUFFER_BINDING;
          case pb.TRANSFORM_FEEDBACK_BUFFER:
            return pb.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(ub);
      return hb ? bb.getParameter(hb) : null
    }

    function du(bb) {
      const ub = ib.get(bb);
      ub && (tb.shadowBytes -= ub.bytes.length, ib.delete(bb))
    }

    function ru(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      du(bb), tb.shadowBytes + ub > nb ? tb.uncopied++ : (tb.shadowBytes += ub, ib.set(bb, {
        id: Nb(bb),
        bytes: new Uint8Array(ub),
        width: hb,
        height: Bb,
        texelBytes: Ob,
        missed: 0
      }))
    }

    function ju(bb, ub) {
      for (const hb of ["deleteBuffer", "deleteTexture"]) Hu(bb, hb, (bb => function() {
        for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
        return hb[0] && du(hb[0]), au(bb, this, hb)
      }));
      Hu(bb, "shaderSource", (bb => function() {
        for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
        return hb[0] && "string" === typeof hb[1] && Zu.set(hb[0], hb[1]), au(bb, this, hb)
      })), Hu(bb, "attachShader", (bb => function() {
        for (var ub, hb = arguments.length, Bb = new Array(hb), Ob = 0; Ob < hb; Ob++) Bb[Ob] = arguments[Ob];
        const Gb = Bb[0],
          Ub = null !== (ub = Xu.get(Gb)) && void 0 !== ub ? ub : [];
        return Ub.push(Bb[1]), Xu.set(Gb, Ub), au(bb, this, Bb)
      })), Hu(bb, "linkProgram", (bb => function() {
        for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
        const Ob = au(bb, this, hb);
        return tb.inProbe || function(bb, ub) {
          var hb, Bb, Ob;
          "undefined" !== typeof HTMLCanvasElement && bb.canvas instanceof HTMLCanvasElement && function(bb) {
            if (iu.has(bb)) return;
            iu.add(bb);
            for (const ub of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) bb.addEventListener(ub, (bb => {
              ou.lost < Yu && (ou.lost++, Ib(`${ub}${"statusMessage"in bb?`: ${String(bb.statusMessage)}`:""}`))
            }))
          }(bb.canvas);
          tb.context ??= bb;
          const Gb = null !== (hb = Xu.get(ub)) && void 0 !== hb ? hb : [];
          let Ub = "",
            Lb = "";
          for (const ab of Gb) {
            var Yb;
            const bb = null !== (Yb = Zu.get(ab)) && void 0 !== Yb ? Yb : "";
            /\bgl_Position\b/.test(bb) ? Ub = bb : Lb = bb
          }
          const Sb = {
            id: Nb(ub),
            name: null !== (Bb = null === (Ob = xb.exec(Ub)) || void 0 === Ob ? void 0 : Ob[1]) && void 0 !== Bb ? Bb : null,
            gl: bb,
            vertex: Ub,
            fragment: Lb,
            terrain: Du(Ub),
            checked: !1,
            firstDraw: !1
          };
          if (pu.set(ub, Sb), gb.push([ub, Sb]), null !== Sb.terrain) {
            const ub = Gb.map((ub => {
              var hb;
              return null !== (hb = bb.getShaderInfoLog(ub)) && void 0 !== hb ? hb : ""
            })).filter((bb => "" !== bb.trim()));
            ub.length > 0 && Pb(`program ${zb(Sb)} (${Sb.terrain}) shader logs:\n${qb(ub.join("\n"))}`)
          }
        }(this, hb[0]), Ob
      })), Hu(bb, "bufferData", (bb => function() {
        for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
        const Ob = au(bb, this, hb);
        if (!tb.inProbe) {
          const bb = Cu(this, hb[0]);
          if (bb) {
            var Gb, Ub, Lb;
            const ub = "number" === typeof hb[1] ? null : Wu(hb[1], null !== (Gb = hb[3]) && void 0 !== Gb ? Gb : 0, null !== (Ub = hb[4]) && void 0 !== Ub ? Ub : 0);
            var Yb;
            if (ru(bb, "number" === typeof hb[1] ? hb[1] : null !== (Lb = null === ub || void 0 === ub ? void 0 : ub.length) && void 0 !== Lb ? Lb : 0), ub) null === (Yb = ib.get(bb)) || void 0 === Yb || Yb.bytes.set(ub)
          }
        }
        return Ob
      })), Hu(bb, "bufferSubData", (bb => function() {
        for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
        const Ob = au(bb, this, hb);
        if (!tb.inProbe) {
          var Gb, Ub;
          const bb = Cu(this, hb[0]),
            ub = bb ? ib.get(bb) : void 0,
            Bb = Wu(hb[2], null !== (Gb = hb[3]) && void 0 !== Gb ? Gb : 0, null !== (Ub = hb[4]) && void 0 !== Ub ? Ub : 0);
          if (ub && Bb) {
            const bb = hb[1];
            ub.bytes.set(Bb.subarray(0, Math.max(0, ub.bytes.length - bb)), bb), nu("buffer", ub, bb, Bb.length)
          }
        }
        return Ob
      })), ub && (Hu(bb, "copyBufferSubData", (bb => function() {
        for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
        const Ob = au(bb, this, hb);
        if (!tb.inProbe) {
          const [bb, ub, Bb, Ob, Gb] = hb, Ub = Cu(this, bb), Lb = Cu(this, ub), Yb = Ub ? ib.get(Ub) : void 0, Sb = Lb ? ib.get(Lb) : void 0;
          Sb && (Yb ? Sb.bytes.set(Yb.bytes.slice(Bb, Bb + Gb), Ob) : Sb.missed++)
        }
        return Ob
      })), Hu(bb, "texStorage2D", (bb => function() {
        for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
        const Ob = au(bb, this, hb),
          [, , Gb, Ub, Lb] = hb;
        if (!tb.inProbe && (Gb === pb.RGBA32UI || Gb === pb.RGBA16UI)) {
          const bb = this.getParameter(pb.TEXTURE_BINDING_2D),
            ub = Gb === pb.RGBA32UI ? 16 : 8;
          bb && (vb.set(bb, ub), ru(bb, Ub * Lb * ub, Ub, Lb, ub))
        }
        return Ob
      })), Hu(bb, "texSubImage2D", (bb => function() {
        for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
        const Ob = au(bb, this, hb);
        return !tb.inProbe && hb.length >= 9 && hb[0] === pb.TEXTURE_2D && 0 === hb[1] && function(bb, ub) {
          var hb;
          const Bb = bb.getParameter(pb.TEXTURE_BINDING_2D),
            Ob = Bb ? ib.get(Bb) : void 0;
          if (!Ob) return;
          const [, , Gb, Ub, Lb, Yb] = ub;
          let Sb = Wu(ub[8], null !== (hb = ub[9]) && void 0 !== hb ? hb : 0);
          if (null === Sb && "number" === typeof ub[8]) {
            const hb = Cu(bb, pb.PIXEL_UNPACK_BUFFER),
              Bb = hb ? ib.get(hb) : void 0;
            Sb = Bb ? Bb.bytes.subarray(ub[8]) : null
          }
          if (null === Sb) return void Ob.missed++;
          const ab = bb.getParameter(pb.UNPACK_ROW_LENGTH) || Lb,
            Hb = bb.getParameter(pb.UNPACK_SKIP_ROWS),
            wb = bb.getParameter(pb.UNPACK_SKIP_PIXELS),
            Zb = Ob.texelBytes;
          for (let Xb = 0; Xb < Yb; Xb++) {
            const bb = ((Hb + Xb) * ab + wb) * Zb,
              ub = ((Ub + Xb) * Ob.width + Gb) * Zb;
            Ob.bytes.set(Sb.subarray(bb, bb + Lb * Zb), ub)
          }
          nu("texture", Ob, (Ub * Ob.width + Gb) * Zb, Lb * Yb * Zb)
        }(this, hb), Ob
      })), Hu(bb, "copyTexSubImage2D", (bb => function() {
        for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
        const Ob = hb[0] === pb.TEXTURE_2D ? this.getParameter(pb.TEXTURE_BINDING_2D) : null,
          Gb = Ob ? ib.get(Ob) : void 0;
        return Gb && Gb.missed++, au(bb, this, hb)
      })));
      for (const hb of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) Hu(bb, hb, (bb => function() {
        for (var ub = arguments.length, Bb = new Array(ub), Ob = 0; Ob < ub; Ob++) Bb[Ob] = arguments[Ob];
        const Gb = au(bb, this, Bb);
        return tb.inProbe || zu(this, hb, Bb), Gb
      }));
      Hu(bb, "getExtension", (bb => function() {
        for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
        const Ob = au(bb, this, hb);
        return Ob && "object" === typeof Ob && function(bb, ub, hb) {
          const Bb = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(ub in Bb) || hb.bloxdRenderDebug) return;
          hb.bloxdRenderDebug = !0;
          for (const Ob of Bb[ub]) {
            const ub = hb[Ob];
            "function" === typeof ub && (hb[Ob] = function() {
              for (var Bb = arguments.length, Gb = new Array(Bb), Ub = 0; Ub < Bb; Ub++) Gb[Ub] = arguments[Ub];
              const Lb = au(ub, hb, Gb);
              return tb.inProbe || zu(bb, Ob, Gb), Lb
            })
          }
        }(this, hb[0], Ob), Ob
      }))
    }

    function nu(bb, ub, hb, Bb) {
      lu[bb] += Bb, Ku < 32 && ub.bytes.length >= 1 << 20 && (Ku++, Pb(`upload ${bb} #${ub.id} +${hb} ${Bb} B`))
    }

    function Du(bb) {
      if (!bb.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(bb) || /in uvec3 _p2vs_location0\b/.test(bb) ? "inst" : "tex"
    }

    function xu(bb, ub, hb) {
      var Bb;
      if (hb.checked) return;
      hb.checked = !0;
      const Ob = bb.getProgramParameter(ub, pb.LINK_STATUS),
        Gb = (null !== (Bb = bb.getProgramInfoLog(ub)) && void 0 !== Bb ? Bb : "").trim();
      var Ub;
      null === hb.terrain && Ob || (Ib(`program ${zb(hb)} ${null!==(Ub=hb.terrain)&&void 0!==Ub?Ub:"other"} link ${Ob?"ok":"FAILED"}${Gb?`: ${qb(Gb,300)}`:""}`), Gb && Pb(`program ${zb(hb)} link log:\n${qb(Gb)}`))
    }

    function zu(bb, ub, hb) {
      var Bb;
      const Ob = bb.getParameter(pb.CURRENT_PROGRAM),
        Gb = Ob ? pu.get(Ob) : void 0;
      if (!Ob || !Gb) return;
      const Ub = null !== (Bb = Gb.terrain) && void 0 !== Bb ? Bb : "other",
        {
          tp: Lb,
          instances: Yb
        } = function(bb, ub) {
          switch (bb) {
            case "drawArrays":
              return {
                tp: [
                  [ub[1], ub[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                tp: [
                  [ub[1], ub[2]]
                ], instances: ub[3]
              };
            case "drawElements":
              return {
                tp: [
                  [0, ub[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                tp: [
                  [0, ub[1]]
                ], instances: ub[4]
              };
            case "multiDrawArraysWEBGL": {
              const bb = ub[1],
                hb = ub[3],
                Bb = ub[2],
                Ob = ub[4],
                Gb = [];
              for (let Ub = 0; Ub < ub[5]; Ub++) Gb.push([bb[Bb + Ub], hb[Ob + Ub]]);
              return {
                tp: Gb,
                instances: 1
              }
            }
            default:
              return {
                tp: [], instances: 0
              }
          }
        }(ub, hb),
        Sb = "inst" === Gb.terrain ? Yb : Lb.reduce(((bb, ub) => {
          let [, hb] = ub;
          return bb + hb
        }), 0) / 6;
      if (Au[Ub].draws++, Au[Ub].faces += Sb, null === Gb.terrain) return;
      if (tb.context = bb, !Gb.firstDraw) {
        Gb.firstDraw = !0, xu(bb, Ob, Gb), gu || (gu = !0, Ib(function(bb) {
          var ub;
          const hb = bb.getParameter(pb.DEPTH_FUNC),
            Bb = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let Ob = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in bb && bb.getParameter(pb.DRAW_FRAMEBUFFER_BINDING)) {
            const ub = bb;
            Ob = ub.getFramebufferAttachmentParameter(pb.DRAW_FRAMEBUFFER, pb.DEPTH_ATTACHMENT, pb.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(ub.getFramebufferAttachmentParameter(pb.DRAW_FRAMEBUFFER,pb.DEPTH_ATTACHMENT,pb.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(ub.getFramebufferAttachmentParameter(pb.DRAW_FRAMEBUFFER,pb.DEPTH_ATTACHMENT,pb.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const Gb = bb.getParameter(pb.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(ub=Bb[hb])&&void 0!==ub?ub:`0x${hb.toString(16)}`} clear ${Gb}${516===hb||518===hb?" (reverse-Z)":""}, samples ${String(bb.getParameter(pb.SAMPLES))}, ${Ob}`
        }(bb)));
        const hb = bb.getError();
        hb !== pb.NO_ERROR && ou.gl < Yu && (ou.gl++, Ib(`GL error 0x${hb.toString(16)} after program ${zb(Gb)}'s first terrain draw (${ub})`))
      }
      const ab = tb.pendingCheck;
      null !== ab && (ab.terrainDraws++, ab.draws.length < Su && Eb(bb, Ob, Gb, ub, Lb, Yb))
    }
    let gu = !1;
    const iu = new WeakSet;
    var vu = hb(4270),
      tu = hb(4468);
    const Ju = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let eu = !1;
    const Nu = new WeakSet,
      su = new WeakMap,
      Mu = new WeakMap,
      mu = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let Iu = 0,
      Pu = !1,
      qu = null,
      Eu = {
        draws: 0,
        faces: 0
      };

    function yu(bb) {
      const ub = globalThis[bb];
      return null === ub || void 0 === ub ? void 0 : ub.prototype
    }

    function Vu(bb) {
      return bb && "function" === typeof bb[Symbol.iterator] ? [...bb].sort().join(" ") : ""
    }

    function Fu(bb, ub) {
      const hb = null !== bb && void 0 !== bb ? bb : {},
        Bb = null !== ub && void 0 !== ub ? ub : Object.keys(Object.getPrototypeOf(hb)).concat(Object.keys(hb));
      return [...new Set(Bb)].filter((bb => "number" === typeof hb[bb])).map((bb => `${bb} ${String(hb[bb])}`)).join(", ")
    }

    function fu(bb, ub) {
      var hb;
      const Bb = null !== (hb = ub.vertex) && void 0 !== hb ? hb : {};
      if (Bb.module && Nu.has(Bb.module)) {
        var Ob;
        const hb = String(null !== (Ob = Bb.entryPoint) && void 0 !== Ob ? Ob : "");
        if (hb.startsWith("vs_packed") && su.set(bb, hb), !Pu) {
          var Gb, Ub, Lb, Yb, Sb;
          Pu = !0;
          const bb = null !== (Gb = ub.depthStencil) && void 0 !== Gb ? Gb : {},
            Bb = null !== (Ub = ub.multisample) && void 0 !== Ub ? Ub : {},
            Ob = String(null !== (Lb = bb.depthCompare) && void 0 !== Lb ? Lb : "");
          Ib(`WebGPU terrain pipeline ${hb}: depth ${String(null!==(Yb=bb.format)&&void 0!==Yb?Yb:"none")} ${Ob}${Ob.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(Sb=Bb.count)&&void 0!==Sb?Sb:1)}`)
        }
      }
    }

    function ku(bb) {
      Hu(bb, "setPipeline", (bb => function() {
        for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
        return Mu.set(this, hb[0]), au(bb, this, hb)
      }));
      for (const ub of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) Hu(bb, ub, (bb => function() {
        const hb = Mu.get(this),
          Bb = hb ? su.get(hb) : void 0;
        for (var Ob = arguments.length, Gb = new Array(Ob), Ub = 0; Ub < Ob; Ub++) Gb[Ub] = arguments[Ub];
        return void 0 !== Bb && Tu(ub, Bb, Gb), au(bb, this, Gb)
      }))
    }

    function Tu(bb, ub, hb) {
      var Bb;
      (Eu.draws++, "draw" === bb || "drawIndexed" === bb) && (Eu.faces += hb[0] * (null !== (Bb = hb[1]) && void 0 !== Bb ? Bb : 1) / 6);
      if (null !== qu && qu.length < Su) {
        const Bb = ("draw" === bb ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === bb ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((ub, Bb) => {
          const Ob = bb.endsWith("Indirect") ? hb[1] : hb[Bb];
          return `${ub} ${String(null!==Ob&&void 0!==Ob?Ob:"instances"===ub?1:0)}`
        }));
        qu.push(`  ${ub} ${bb} ${Bb.join(" ")}`)
      }
    }

    function cu() {
      if (eu || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      eu = !0, Hu(yu("GPU"), "requestAdapter", (bb => function() {
        for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
        return au(bb, this, hb).then((bb => {
          var ub;
          bb ? function(bb) {
            var ub;
            const hb = null !== (ub = bb.info) && void 0 !== ub ? ub : {};
            Ib(`WebGPU adapter ${["vendor","architecture","device","description"].map((bb=>{var ub;return`${bb} "${String(null!==(ub=hb[bb])&&void 0!==ub?ub:"")}"`})).join(" ")}${bb.isFallbackAdapter?" (fallback)":""}`), Ib(`WebGPU adapter features ${Vu(bb.features)}`), Ib(`WebGPU adapter limits ${Fu(bb.limits,Ju)}`), Pb(`WebGPU adapter all limits ${Fu(bb.limits,null)}`)
          }(bb) : Ib(`WebGPU requestAdapter(${JSON.stringify(null!==(ub=hb[0])&&void 0!==ub?ub:{})}) gave none`);
          return bb
        }))
      })), Hu(yu("GPUAdapter"), "requestDevice", (bb => function() {
        for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
        return au(bb, this, hb).then((bb => (function(bb) {
          Ib(`WebGPU device features ${Vu(bb.features)}`), Ib(`WebGPU device limits ${Fu(bb.limits,Ju)}`), bb.addEventListener("uncapturederror", (bb => {
            if (mu.uncaptured < Yu) {
              var ub, hb, Bb;
              mu.uncaptured++;
              const Ob = bb.error;
              Ib(`WebGPU uncaptured ${null!==(ub=null===Ob||void 0===Ob||null===(hb=Ob.constructor)||void 0===hb?void 0:hb.name)&&void 0!==ub?ub:"error"}: ${qb(String(null!==(Bb=null===Ob||void 0===Ob?void 0:Ob.message)&&void 0!==Bb?Bb:""),600)}`)
            }
          }));
          const ub = bb.lost;
          null === ub || void 0 === ub || ub.then((bb => {
            var ub;
            Ib(`WebGPU device lost (${String(bb.reason)}): ${qb(String(null!==(ub=bb.message)&&void 0!==ub?ub:""),600)}`)
          }))
        }(bb), bb)), (bb => {
          throw Ib(`WebGPU requestDevice failed: ${String(bb)}`), bb
        }))
      }));
      const bb = yu("GPUDevice");
      Hu(bb, "createShaderModule", (bb => function() {
        for (var ub, hb, Bb = arguments.length, Ob = new Array(Bb), Gb = 0; Gb < Bb; Gb++) Ob[Gb] = arguments[Gb];
        const Ub = au(bb, this, Ob);
        return function(bb, ub) {
          const hb = ub.includes("decodeQuad");
          hb && Nu.add(bb);
          const Bb = bb.getCompilationInfo;
          null === Bb || void 0 === Bb || Bb.call(bb).then((bb => {
            if (0 === bb.messages.length && !hb) return;
            const ub = {};
            for (const hb of bb.messages) {
              var Bb;
              ub[String(hb.type)] = (null !== (Bb = ub[String(hb.type)]) && void 0 !== Bb ? Bb : 0) + 1
            }
            const Ob = bb.messages.map((bb => `${String(bb.type)} ${String(bb.lineNum)}:${String(bb.linePos)} ${String(bb.message)}`)).join("\n");
            mu.compile < Yu && (mu.compile++, Ib(`WebGPU ${hb?"terrain ":""}shader module compiled: ${JSON.stringify(ub)}${Ob?` first: ${qb(Ob.split("\n")[0],300)}`:""}`)), Ob && Pb(`WebGPU shader module messages:\n${qb(Ob)}`)
          }))
        }(Ub, String(null !== (ub = (null !== (hb = Ob[0]) && void 0 !== hb ? hb : {}).code) && void 0 !== ub ? ub : "")), Ub
      })), Hu(bb, "createRenderPipeline", (bb => function() {
        for (var ub, hb = arguments.length, Bb = new Array(hb), Ob = 0; Ob < hb; Ob++) Bb[Ob] = arguments[Ob];
        const Gb = au(bb, this, Bb);
        return fu(Gb, null !== (ub = Bb[0]) && void 0 !== ub ? ub : {}), Gb
      })), Hu(bb, "createRenderPipelineAsync", (bb => function() {
        for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
        return au(bb, this, hb).then((bb => {
          var ub;
          return fu(bb, null !== (ub = hb[0]) && void 0 !== ub ? ub : {}), bb
        }), (bb => {
          var ub;
          throw function(bb, ub) {
            var hb, Bb, Ob;
            if (mu.rejected >= Yu) return;
            mu.rejected++;
            const {
              reason: Gb,
              message: Ub
            } = null !== ub && void 0 !== ub ? ub : {}, Lb = String(null !== (hb = (null !== (Bb = bb.vertex) && void 0 !== Bb ? Bb : {}).entryPoint) && void 0 !== hb ? hb : "");
            Ib(`WebGPU pipeline "${String(null!==(Ob=bb.label)&&void 0!==Ob?Ob:"")}" ${Lb} rejected (${String(null!==Gb&&void 0!==Gb?Gb:"no reason")}): ${qb(String(null!==Ub&&void 0!==Ub?Ub:ub),600)}`)
          }(null !== (ub = hb[0]) && void 0 !== ub ? ub : {}, bb), bb
        }))
      })), Hu(yu("GPUCanvasContext"), "configure", (bb => function() {
        for (var ub, hb = arguments.length, Bb = new Array(hb), Ob = 0; Ob < hb; Ob++) Bb[Ob] = arguments[Ob];
        const Gb = null !== (ub = Bb[0]) && void 0 !== ub ? ub : {};
        var Ub, Lb;
        Iu++ < 3 && Ib(`WebGPU canvas ${String(Gb.format)} ${String(null!==(Ub=Gb.colorSpace)&&void 0!==Ub?Ub:"srgb")} alpha ${String(null!==(Lb=Gb.alphaMode)&&void 0!==Lb?Lb:"opaque")}`);
        return au(bb, this, Bb)
      })), ku(yu("GPURenderPassEncoder")), ku(yu("GPURenderBundleEncoder"))
    }
    const Qu = 1e4,
      Ru = 6e4,
      bh = 5e3,
      uh = 3e3,
      hh = 100;
    let Bh = null,
      Oh = !1,
      Gh = {
        ...vu.c
      },
      Uh = !1,
      Lh = null,
      Yh = 0,
      Sh = () => {};
    const ah = new Promise((bb => {
      Sh = bb
    }));

    function Hh() {
      var bb;
      Oh || (Oh = !0, Gh = Object.assign(window.bloxdRenderDebug ??= {
        ...vu.c
      }, {
        faceCull: "0" === (0, Gb.n)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (bb = (0, Gb.n)("adrenoProbe")) && void 0 !== bb ? bb : ""
      }), Ib("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), wu || "undefined" === typeof window || (wu = !0, "undefined" !== typeof WebGL2RenderingContext && ju(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && ju(WebGLRenderingContext.prototype, !1)), cu(), (0, Gb.b)("renderProbe", (() => {
        Ah("console")
      })), ph(), setInterval(Kh, bh))
    }

    function wh(bb) {
      var ub, hb;
      Hh(), Bh = null !== (ub = null === bb || void 0 === bb ? void 0 : bb.backend) && void 0 !== ub ? ub : null;
      const Bb = `, renderer param ${null!==(hb=(0,Gb.n)("renderer"))&&void 0!==hb?hb:"none"}, faceCull ${"0"===Gh.faceCull?"off (whole parts)":"on"}, adrenoProbe ${Gh.adrenoProbe||"none"}`;
      Ib(`${(0,tu.e)(bb)}${null===bb?"":Bb}`)
    }

    function Zh() {
      const bb = performance.now(),
        ub = Xh(ah, Qu, Ru).then((ub => Ah(`${Math.round((performance.now()-bb)/1e3)} s after playable${ub?"":", no terrain drawn yet"}`)));
      (0, Ob.d)(Ib, (async () => {
        await ub, await Lh
      }))
    }
    async function Xh(bb, ub, hb) {
      const Ob = (0, Bb.b)(hb).then((() => !1));
      return await (0, Bb.b)(ub), Promise.race([bb.then((() => !0)), Ob])
    }

    function ph() {
      requestAnimationFrame((() => {
        Yh++, ph()
      }))
    }

    function oh() {
      var bb, ub, hb;
      if (Uh) return;
      (Uh = !0, Ib(`renderer caps ${null!==(bb=Gh.caps)&&void 0!==bb?bb:"(not noted)"}; terrain fetch ${null!==(ub=Gh.fetch)&&void 0!==ub?ub:"(not noted)"}`), Gh.adrenoProbe) && Ib(`adrenoProbe ${Gh.adrenoProbe} asked; in force (storage fetch only): ${null!==(hb=Gh.probe)&&void 0!==hb?hb:"(not noted)"}`);
      const Bb = tb.context;
      if (Bb) {
        for (const bb of function(bb) {
            var ub;
            const hb = [],
              Bb = bb.getExtension("WEBGL_debug_renderer_info"),
              Ob = Bb ? bb.getParameter(Bb.UNMASKED_VENDOR_WEBGL) : "(masked)",
              Gb = Bb ? bb.getParameter(Bb.UNMASKED_RENDERER_WEBGL) : "(masked)";
            hb.push(`GL ${String(bb.getParameter(bb.VERSION))} | ${String(bb.getParameter(bb.SHADING_LANGUAGE_VERSION))} | ${String(bb.getParameter(bb.VENDOR))} / ${String(bb.getParameter(bb.RENDERER))}`), hb.push(`GL unmasked ${Ob} / ${Gb}`);
            const Ub = [
              ["MAX_TEXTURE_SIZE", bb.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", bb.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", bb.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", bb.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", bb.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", bb.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", bb.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in bb && Ub.push(["MAX_UNIFORM_BLOCK_SIZE", bb.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", bb.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", bb.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", bb.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), hb.push(`GL limits ${Ub.map((ub=>{let[hb,Bb]=ub;return`${hb} ${String(bb.getParameter(Bb))}`})).join(", ")}`);
            const Lb = (ub, hb) => {
              const Bb = bb.getShaderPrecisionFormat(ub, bb.HIGH_FLOAT),
                Ob = bb.getShaderPrecisionFormat(ub, bb.HIGH_INT);
              return `${hb} highp float ${Bb?`${Bb.rangeMin}/${Bb.rangeMax}/${Bb.precision}`:"?"} int ${Ob?`${Ob.rangeMin}/${Ob.rangeMax}/${Ob.precision}`:"?"}`
            };
            hb.push(`GL precision ${Lb(bb.VERTEX_SHADER,"VS")}, ${Lb(bb.FRAGMENT_SHADER,"FS")}`);
            const Yb = bb.getContextAttributes();
            return hb.push(`GL context ${JSON.stringify(Yb)} drawingBuffer ${bb.drawingBufferWidth}x${bb.drawingBufferHeight}${"drawingBufferFormat"in bb?` format 0x${Number(bb.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in bb?` ${String(bb.drawingBufferColorSpace)}`:""}`), hb.push(`GL extensions ${(null!==(ub=bb.getSupportedExtensions())&&void 0!==ub?ub:[]).join(" ")}`), hb
          }(Bb)) Ib(bb);
        ! function() {
          if (!tb.context) return;
          let bb = 0,
            ub = 0;
          for (const [hb, Bb] of gb) !Bb.gl.isContextLost() && Bb.gl.isProgram(hb) && (ub++, xu(Bb.gl, hb, Bb), null !== Bb.terrain && bb++);
          Ib(`programs: ${ub} live of ${gb.length} linked, ${bb} packed terrain; CPU page copies ${Math.round(tb.shadowBytes/1048576)} MiB (${tb.uncopied} over budget)`)
        }()
      }
    }

    function Ah(bb) {
      return Lh ??= async function(bb) {
        oh(), "webgpu" === Bh ? (lh(), "1" === Gh.slotCheck && Ib("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), Gh.slotCheck = "1", await
          function(bb) {
            if (null !== qu) return Promise.resolve();
            const ub = [];
            return qu = ub, new Promise((hb => {
              setTimeout((() => {
                qu = null, Ib(`WebGPU draw ranges (${bb}): ${ub.length} terrain draws recorded in a second (first ${Su}; bundles replay without new ones)`);
                for (const bb of ub) Ib(bb);
                hb()
              }), 1e3)
            }))
          }(bb), await async function() {
            if (await (0, vu.i)(Gh, "slotCheck", ["1"], uh, hh), "1" === Gh.slotCheck) return void Ib(`slot check: no answer in ${uh} ms (only the storage fetch has one; a later answer logs on its own)`);
            lh()
          }()) : await Uu(bb);
        Ib(`check (${bb}) done: bloxdDebug.save() downloads it all`)
      }(bb).catch((ub => {
        Ib(`check (${bb}) failed: ${String(ub)}`)
      })).finally((() => {
        Lh = null
      })), Lh
    }

    function lh() {
      void 0 !== Gh.slotCheck && "1" !== Gh.slotCheck && (Ib(Gh.slotCheck), delete Gh.slotCheck)
    }

    function Kh() {
      const bb = bb => Yh ? (bb / Yh).toFixed(1) : "0",
        ub = function() {
          const bb = Eu;
          return Eu = {
            draws: 0,
            faces: 0
          }, bb
        }(),
        hb = function() {
          const bb = Au;
          return Au = {
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
        Bb = function() {
          const bb = lu;
          return lu = {
            buffer: 0,
            texture: 0
          }, bb
        }();
      lh(), ("webgpu" === Bh ? ub.draws : hb.inst.draws + hb.tex.draws) > 0 && Sh();
      const Ob = "webgpu" === Bh ? [`terrain ${bb(ub.draws)} draws ${bb(ub.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((bb => hb[bb].draws > 0)).map((ub => `${ub} ${bb(hb[ub].draws)} draws ${bb(hb[ub].faces)} faces a frame`));
      Ib(`${Yh} frames: ${Ob.join(", ")||"no draws"}; uploaded ${Math.round(Bb.buffer/1024)} KiB to buffers, ${Math.round(Bb.texture/1024)} KiB to data textures`), Yh = 0
    }
  },
  4468: (bb, ub, hb) => {
    function Bb(bb) {
      if (null === bb) return "backend: none picked (no renderer build)";
      const ub = bb.adapter ? `${bb.adapter.vendor}/${bb.adapter.architecture}` : "none";
      return `backend ${bb.backend}: reason ${bb.reason}, source ${bb.source}, adapter ${ub}`
    }
    hb.d(ub, {
      e: () => Bb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);