export const id = 57;
export const ids = [57];
export const modules = {
  5578: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ib
    });
    var eb = Mb(26),
      Hb = Mb(29),
      pb = Mb(1373),
      Vb = Mb(4060);
    const gb = 3e4,
      lb = 1e3;

    function Lb() {
      return "visible" === document.visibilityState && "inGame" === eb.c.get("gameState") && (0, pb.B)()
    }

    function Ib(bb, wb) {
      (0, Vb.n)() || function(bb, wb, Mb) {
        let eb = 0;
        const Hb = setInterval((() => {
          wb() && (eb += lb, eb >= bb && (clearInterval(Hb), Mb()))
        }), lb)
      }(gb, Lb, (() => {
        wb().then((() => {
          bb(`saved for the player after ${gb/1e3} s of play`), (0, Vb.F)(), Hb.k.iI("chat", {
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
  5573: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      installRenderDebug: () => UM,
      renderDebugPlayable: () => CM,
      startRenderDebug: () => tM,
      waitForDraw: () => EM
    });
    var eb = Mb(2023),
      Hb = Mb(5578),
      pb = Mb(4060);
    const Vb = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function gb(bb) {
      return 7 & bb
    }

    function lb(bb) {
      return bb >>> 11 & 1
    }

    function Lb(bb) {
      return [1 + (bb >>> 18 & 63), 1 + (bb >>> 24 & 63)]
    }

    function Ib(bb, wb) {
      const [Mb, , eb] = bb, Hb = gb(eb), pb = function(bb, wb, Mb) {
        return wb + (1 === (22 >>> bb & 1) ? 4 - Mb : Mb) & 3
      }(Hb, lb(eb), wb), Vb = Hb >>> 1, [Ib, Ob] = Lb(Mb), Ub = 1 === pb || 2 === pb ? Ib : 0, tb = pb >= 2 ? Ob : 0, Cb = [63 & Mb, Mb >>> 6 & 63, Mb >>> 12 & 63];
      return Cb[2 === Vb ? 0 : 2] += Ub, Cb[1 === Vb ? 0 : 1] += tb, Cb
    }

    function Ob(bb) {
      const wb = Math.max(...Lb(bb[0]));
      return 1 === wb ? "1" : wb <= 4 ? "2-4" : wb <= 16 ? "5-16" : "17-64"
    }
    const Ub = 16;

    function tb(bb) {
      let wb = 2166136261;
      for (let Mb = 0; Mb < bb.length; Mb++) wb = Math.imul(wb ^ bb[Mb], 16777619);
      return wb >>> 0
    }

    function Cb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const eb = Math.max(0, wb - Mb),
        Hb = Math.min(bb.length, wb + Mb),
        pb = [];
      for (let Vb = eb; Vb < Hb; Vb++) {
        const Mb = bb[Vb].toString(16).padStart(2, "0");
        pb.push(Vb === wb ? `[${Mb}]` : Mb)
      }
      return pb.join(" ")
    }
    const Eb = {
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
      Fb = "_vs2fs_location0";
    const Bb = 0,
      sb = 4,
      mb = 6,
      hb = [0, 1, 2, 0, 2, 3],
      zb = 2048,
      Xb = 4,
      xb = 256,
      jb = 64,
      Kb = 268435456,
      rb = 65536,
      Rb = /^#version [^\n]*\/\/ program (\S+)$/m;

    function Db(bb) {
      return null === bb.name ? `#${bb.id}` : `#${bb.id} ${bb.name}`
    }
    const cb = [],
      Yb = new WeakMap,
      Zb = new WeakMap,
      fb = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let Ab = 1;
    const Wb = new WeakMap;

    function Jb(bb) {
      if (null === bb) return 0;
      let wb = Wb.get(bb);
      return void 0 === wb && (wb = Ab++, Wb.set(bb, wb)), wb
    }
    class Sb {
      constructor(bb, wb) {
        this.print = bb, this.now = wb, this.shown = 0, this.dg = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.nI = [], this.dropped = 0
      }
      line(bb) {
        const wb = this.now();
        if (wb - this.second >= 1e3 && (this.second = wb, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.dg++, void this.store(bb);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${bb} (the last line here: the rest go to bloxdDebug.save())` : bb)
      }
      keep(bb) {
        this.sections++, this.store(bb)
      }
      store(bb) {
        this.nI.push(`${new Date(Date.now()).toISOString()} ${bb}`), this.nI.length > 2e4 && (this.nI.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.dg} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.nI].join("\n")
      }
    }
    let Nb = null;

    function vb() {
      if (null === Nb) {
        const bb = new Sb((bb => {
          (0, pb.j)("render", bb)
        }), (() => performance.now()));
        (0, pb.h)("render", (() => bb.dump())), Nb = bb
      }
      return Nb
    }

    function Qb(bb) {
      vb().line(bb)
    }

    function Gb(bb) {
      vb().keep(bb)
    }

    function qb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return bb.length <= wb ? bb : `${bb.slice(0,wb)}... (${bb.length-wb} more characters)`
    }

    function ab(bb, wb, Mb, eb, Hb, pb) {
      const Vb = fb.pendingCheck;
      if (null === Vb) return;
      const gb = "undefined" !== typeof WebGL2RenderingContext && bb instanceof WebGL2RenderingContext,
        lb = {
          gl: bb,
          program: Mb,
          call: eb,
          gF: Hb,
          instances: pb,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (Vb.draws.push(lb), gb) try {
        const eb = function(bb) {
          const wb = [],
            Mb = new Map,
            eb = Math.min(16, bb.getParameter(Eb.MAX_VERTEX_ATTRIBS));
          for (let Hb = 0; Hb < eb; Hb++) {
            if (!bb.getVertexAttrib(Hb, Eb.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const eb = bb.getVertexAttrib(Hb, Eb.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              pb = bb.getVertexAttribOffset(Hb, Eb.VERTEX_ATTRIB_ARRAY_POINTER),
              Vb = bb.getVertexAttrib(Hb, Eb.VERTEX_ATTRIB_ARRAY_STRIDE),
              gb = bb.getVertexAttrib(Hb, Eb.VERTEX_ATTRIB_ARRAY_SIZE),
              lb = bb.getVertexAttrib(Hb, Eb.VERTEX_ATTRIB_ARRAY_TYPE),
              Lb = "VERTEX_ATTRIB_ARRAY_INTEGER" in bb && bb.getVertexAttrib(Hb, Eb.VERTEX_ATTRIB_ARRAY_INTEGER),
              Ib = "VERTEX_ATTRIB_ARRAY_DIVISOR" in bb ? bb.getVertexAttrib(Hb, Eb.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            Mb.set(Hb, {
              buffer: eb,
              offset: pb,
              stride: Vb
            }), wb.push(`@${Hb} buf#${Jb(eb)} +${pb} stride ${Vb} ${gb}x0x${lb.toString(16)}${Lb?" int":""} div ${Ib}`)
          }
          return {
            lines: wb,
            byLocation: Mb
          }
        }(bb);
        if (lb.attributes = eb.lines, "inst" === Mb.terrain) {
          const {
            group: Hb,
            chunk: gb
          } = function(bb, wb, Mb) {
            const eb = wb.get(mb),
              Hb = bb.getVertexAttrib(mb, Eb.CURRENT_VERTEX_ATTRIB),
              pb = eb ? `+${eb.offset}` : Hb ? Array.from(Hb).slice(0, 3).join(",") : "?";
            let Vb = Mb.groups.get(pb);
            return void 0 === Vb && (Vb = Mb.groups.size, Mb.groups.set(pb, Vb)), {
              group: Vb,
              chunk: pb
            }
          }(bb, eb.byLocation, Vb);
          lb.group = Hb, lb.chunk = gb;
          for (const bb of [Bb, sb]) {
            var Lb;
            const wb = null === (Lb = eb.byLocation.get(bb)) || void 0 === Lb ? void 0 : Lb.buffer;
            wb && lb.pages.push({
              kind: "buf",
              buffer: wb
            })
          }! function(bb, wb, Mb, eb, Hb, pb, Vb) {
            const gb = eb.get(Bb),
              lb = Vb.parts.get(pb);
            if (void 0 === lb && Vb.parts.size >= Xb) return;
            const Lb = Math.min(Hb, jb, xb - (null !== lb && void 0 !== lb ? lb : 0));
            if (null === gb || void 0 === gb || !gb.buffer || Lb <= 0) return;
            const Ib = ib(bb, wb, Mb);
            if (!Ib) return;
            const Ob = gb.stride || 12,
              Ub = yb(bb, gb.buffer, gb.offset, (Lb - 1) * Ob + 12),
              tb = new DataView(Ub.buffer),
              Cb = function(bb, wb) {
                const Mb = function(bb) {
                    const wb = kb.get(bb);
                    if (void 0 !== wb && (null === wb || bb.isProgram(wb))) return wb;
                    fb.inProbe = !0;
                    let Mb = null;
                    try {
                      Mb = ub(bb, ob, Tb, "fed", "the record feed")
                    } finally {
                      fb.inProbe = !1
                    }
                    return kb.set(bb, Mb), Mb
                  }(bb),
                  eb = Mb ? nb(bb, Mb, wb, (() => {
                    bb.drawArraysInstanced(Eb.POINTS, 0, 1, wb)
                  }), "decode probe input (the record feed)") : null;
                return eb ? new Uint32Array(eb.buffer) : null
              }(bb, Lb);
            Cb || Vb.fed.failed++;
            const Fb = nb(bb, Ib, 4 * Lb, (() => {
              bb.drawArraysInstanced(Eb.POINTS, 0, 4, Lb)
            }));
            if (!Fb) return;
            Vb.parts.set(pb, (null !== lb && void 0 !== lb ? lb : 0) + Lb);
            for (let Eb = 0; Eb < Lb; Eb++) {
              const bb = Eb * Ob,
                wb = [tb.getUint32(bb, !0), tb.getUint32(bb + 4, !0), tb.getUint32(bb + 8, !0)],
                Mb = Cb ? [Cb[3 * Eb], Cb[3 * Eb + 1], Cb[3 * Eb + 2]] : wb;
              Cb && (Vb.fed.records++, Mb.some(((bb, Mb) => bb !== wb[Mb])) && (Vb.fed.differing++, Vb.fed.first.length < 8 && Vb.fed.first.push(`part ${pb} instance ${Eb}: fed ${Mb.map(Hw).join(" ")} buffer ${wb.map(Hw).join(" ")}`)));
              for (let eb = 0; eb < 4; eb++) {
                const bb = 3 * (4 * Eb + eb);
                Vb.vertices.push({
                  record: Mb,
                  slot: eb,
                  group: pb,
                  gpu: [Fb[bb], Fb[bb + 1], Fb[bb + 2]]
                })
              }
            }
          }(bb, wb, Mb, eb.byLocation, pb, Hb, Vb)
        } else {
          const eb = bw(bb, wb, 16),
            pb = bw(bb, wb, 8);
          for (const bb of [eb, pb]) bb && lb.pages.push({
            kind: "tex",
            texture: bb
          });
          eb && function(bb, wb, Mb, eb, Hb, pb) {
            if (pb.parts.size >= Xb) return;
            const Vb = ib(bb, wb, Mb);
            if (!Vb) return;
            let gb = 6 * xb;
            const lb = [];
            for (const [tb, Cb] of Hb) {
              const bb = Math.min(Cb, gb, Math.max(6, 6 * Math.floor(xb / Hb.length)));
              bb > 0 && (lb.push([tb, bb]), gb -= bb)
            }
            const Lb = lb.reduce(((bb, wb) => {
                let [, Mb] = wb;
                return bb + Mb
              }), 0),
              Ib = nb(bb, Vb, Lb, (() => {
                for (const [wb, Mb] of lb) bb.drawArrays(Eb.POINTS, wb, Mb)
              }));
            if (!Ib) return;
            let Ob = 0;
            for (const [tb, Cb] of lb) {
              const wb = Math.floor(tb / 6),
                Mb = Math.floor((tb + Cb - 1) / 6) - wb + 1,
                Hb = ww(bb, eb, zb, wb, Mb);
              for (let bb = tb; bb < tb + Cb; bb++, Ob++) {
                var Ub;
                const Mb = 4 * (Math.floor(bb / 6) - wb),
                  eb = [Hb[Mb], Hb[Mb + 1], Hb[Mb + 2]];
                pb.parts.set(Hb[Mb + 3], (null !== (Ub = pb.parts.get(Hb[Mb + 3])) && void 0 !== Ub ? Ub : 0) + (bb % 6 === 0 ? 1 : 0)), pb.vertices.push({
                  record: eb,
                  slot: hb[bb % 6],
                  group: Hb[Mb + 3],
                  gpu: [Ib[3 * Ob], Ib[3 * Ob + 1], Ib[3 * Ob + 2]]
                })
              }
            }
          }(bb, wb, Mb, eb, Hb, Vb)
        }
      } catch (Ib) {
        Qb(`decode probe failed on program ${Db(Mb)}: ${String(Ib)}`)
      }
    }

    function ib(bb, wb, Mb) {
      if (void 0 !== Mb.probe) return Mb.probe && db(bb, wb, Mb.probe), Mb.probe;
      Mb.probe = null, fb.inProbe = !0;
      try {
        Mb.probe = function(bb, wb) {
          return ub(bb, (Mb = wb.vertex, Mb.replace(`\nvec3 ${Fb} = vec3(0);\n`, `\nout vec3 ${Fb};\n`)), wb.fragment, Fb, `program ${Db(wb)}'s twin`);
          var Mb
        }(bb, Mb)
      } finally {
        fb.inProbe = !1
      }
      return Mb.probe && db(bb, wb, Mb.probe), Mb.probe
    }

    function ub(bb, wb, Mb, eb, Hb) {
      const pb = [bb.createShader(Eb.VERTEX_SHADER), bb.createShader(Eb.FRAGMENT_SHADER)],
        Vb = bb.createProgram();
      if (!Vb || !pb[0] || !pb[1]) return null;
      bb.shaderSource(pb[0], wb), bb.shaderSource(pb[1], Mb);
      for (const lb of pb) bb.compileShader(lb), bb.attachShader(Vb, lb);
      bb.transformFeedbackVaryings(Vb, [eb], Eb.INTERLEAVED_ATTRIBS), bb.linkProgram(Vb);
      for (const lb of pb) bb.deleteShader(lb);
      var gb;
      return bb.getProgramParameter(Vb, Eb.LINK_STATUS) ? Vb : (Qb(`decode probe: ${Hb} failed to link: ${qb(null!==(gb=bb.getProgramInfoLog(Vb))&&void 0!==gb?gb:"",300)}`), bb.deleteProgram(Vb), null)
    }

    function db(bb, wb, Mb) {
      const eb = bb.getProgramParameter(wb, Eb.ACTIVE_UNIFORM_BLOCKS);
      for (let gb = 0; gb < eb; gb++) {
        const eb = bb.getActiveUniformBlockName(wb, gb),
          Hb = null === eb ? Eb.INVALID_INDEX : bb.getUniformBlockIndex(Mb, eb);
        Hb !== Eb.INVALID_INDEX && bb.uniformBlockBinding(Mb, Hb, bb.getActiveUniformBlockParameter(wb, gb, Eb.UNIFORM_BLOCK_BINDING))
      }
      const Hb = bb.getParameter(Eb.CURRENT_PROGRAM);
      bb.useProgram(Mb);
      const pb = bb.getProgramParameter(wb, Eb.ACTIVE_UNIFORMS),
        Vb = bb.getActiveUniforms(wb, [...Array(pb).keys()], Eb.UNIFORM_BLOCK_INDEX);
      for (let gb = 0; gb < pb; gb++) {
        const eb = bb.getActiveUniform(wb, gb);
        if (!eb || -1 !== Vb[gb]) continue;
        const Hb = eb.name.replace(/\[0\]$/, "");
        for (let pb = 0; pb < eb.size; pb++) {
          const Vb = eb.size > 1 ? `${Hb}[${pb}]` : eb.name,
            gb = bb.getUniformLocation(wb, Vb),
            lb = bb.getUniformLocation(Mb, Vb);
          gb && lb && Pb(bb, lb, eb.type, bb.getUniform(wb, gb))
        }
      }
      bb.useProgram(Hb)
    }

    function Pb(bb, wb, Mb, eb) {
      const Hb = ArrayBuffer.isView(eb) ? Array.from(eb) : [Number(eb)];
      switch (Mb) {
        case Eb.FLOAT:
          return void bb.uniform1f(wb, Hb[0]);
        case Eb.FLOAT_VEC2:
          return void bb.uniform2fv(wb, Hb);
        case Eb.FLOAT_VEC3:
          return void bb.uniform3fv(wb, Hb);
        case Eb.FLOAT_VEC4:
          return void bb.uniform4fv(wb, Hb);
        case Eb.FLOAT_MAT3:
          return void bb.uniformMatrix3fv(wb, !1, Hb);
        case Eb.FLOAT_MAT4:
          return void bb.uniformMatrix4fv(wb, !1, Hb);
        case Eb.UNSIGNED_INT:
          return void bb.uniform1ui(wb, Hb[0]);
        case Eb.UNSIGNED_INT_VEC2:
          return void bb.uniform2uiv(wb, Hb);
        case Eb.UNSIGNED_INT_VEC3:
          return void bb.uniform3uiv(wb, Hb);
        case Eb.UNSIGNED_INT_VEC4:
          return void bb.uniform4uiv(wb, Hb);
        case Eb.INT_VEC2:
          return void bb.uniform2iv(wb, Hb);
        case Eb.INT_VEC3:
          return void bb.uniform3iv(wb, Hb);
        case Eb.INT_VEC4:
          return void bb.uniform4iv(wb, Hb);
        default:
          bb.uniform1i(wb, Hb[0])
      }
    }

    function nb(bb, wb, Mb, eb) {
      let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const pb = bb.getParameter(Eb.CURRENT_PROGRAM),
        Vb = bb.getParameter(Eb.TRANSFORM_FEEDBACK_BINDING),
        gb = bb.getParameter(Eb.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        lb = bb.getParameter(Eb.COPY_READ_BUFFER_BINDING),
        Lb = bb.isEnabled(Eb.RASTERIZER_DISCARD),
        Ib = bb.createTransformFeedback(),
        Ob = bb.createBuffer();
      fb.inProbe = !0;
      try {
        const pb = bb.getError();
        pb !== Eb.NO_ERROR && Qb(`GL error 0x${pb.toString(16)} pending before the decode probe (the renderer's)`), bb.useProgram(wb), bb.bindTransformFeedback(Eb.TRANSFORM_FEEDBACK, Ib), bb.bindBuffer(Eb.TRANSFORM_FEEDBACK_BUFFER, Ob), bb.bufferData(Eb.TRANSFORM_FEEDBACK_BUFFER, 12 * Mb, Eb.STREAM_READ), bb.bindBufferBase(Eb.TRANSFORM_FEEDBACK_BUFFER, 0, Ob), bb.enable(Eb.RASTERIZER_DISCARD), bb.beginTransformFeedback(Eb.POINTS), eb(), bb.endTransformFeedback(), bb.bindBufferBase(Eb.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const Vb = bb.getError();
        if (Vb !== Eb.NO_ERROR) return Qb(`${Hb}: GL error 0x${Vb.toString(16)} on the feedback draw`), null;
        const gb = new Float32Array(3 * Mb);
        return bb.bindBuffer(Eb.COPY_READ_BUFFER, Ob), bb.getBufferSubData(Eb.COPY_READ_BUFFER, 0, gb), gb
      } finally {
        Lb || bb.disable(Eb.RASTERIZER_DISCARD), bb.bindTransformFeedback(Eb.TRANSFORM_FEEDBACK, Vb), bb.bindBuffer(Eb.TRANSFORM_FEEDBACK_BUFFER, gb), bb.bindBuffer(Eb.COPY_READ_BUFFER, lb), bb.deleteTransformFeedback(Ib), bb.deleteBuffer(Ob), bb.useProgram(pb), fb.inProbe = !1
      }
    }

    function yb(bb, wb, Mb, eb) {
      const Hb = bb.getParameter(Eb.COPY_READ_BUFFER_BINDING),
        pb = new Uint8Array(eb);
      return bb.bindBuffer(Eb.COPY_READ_BUFFER, wb), bb.getBufferSubData(Eb.COPY_READ_BUFFER, Mb, pb), bb.bindBuffer(Eb.COPY_READ_BUFFER, Hb), pb
    }
    const ob = `#version 300 es\nlayout(location = ${Bb}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      Tb = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      kb = new WeakMap;

    function bw(bb, wb, Mb) {
      const eb = bb.getProgramParameter(wb, Eb.ACTIVE_UNIFORMS),
        Hb = bb.getParameter(Eb.ACTIVE_TEXTURE);
      try {
        for (let Hb = 0; Hb < eb; Hb++) {
          const eb = bb.getActiveUniform(wb, Hb);
          if ((null === eb || void 0 === eb ? void 0 : eb.type) !== Eb.UNSIGNED_INT_SAMPLER_2D) continue;
          const pb = bb.getUniformLocation(wb, eb.name),
            Vb = pb ? bb.getUniform(wb, pb) : -1;
          if (Vb < 0) continue;
          bb.activeTexture(Eb.TEXTURE0 + Vb);
          const gb = bb.getParameter(Eb.TEXTURE_BINDING_2D);
          if (gb && Zb.get(gb) === Mb) return gb
        }
        return null
      } finally {
        bb.activeTexture(Hb)
      }
    }

    function ww(bb, wb, Mb, eb, Hb) {
      const pb = new Uint32Array(4 * Hb),
        Vb = bb.getParameter(Eb.READ_FRAMEBUFFER_BINDING),
        gb = bb.createFramebuffer();
      bb.bindFramebuffer(Eb.READ_FRAMEBUFFER, gb), bb.framebufferTexture2D(Eb.READ_FRAMEBUFFER, Eb.COLOR_ATTACHMENT0, Eb.TEXTURE_2D, wb, 0);
      try {
        let wb = 0;
        for (; wb < Hb;) {
          const Vb = eb + wb,
            gb = Vb % Mb,
            lb = Math.min(Hb - wb, Mb - gb);
          bb.readPixels(gb, Math.floor(Vb / Mb), lb, 1, Eb.RGBA_INTEGER, Eb.UNSIGNED_INT, pb.subarray(4 * wb, 4 * (wb + lb))), wb += lb
        }
      } finally {
        bb.bindFramebuffer(Eb.READ_FRAMEBUFFER, Vb), bb.deleteFramebuffer(gb)
      }
      return pb
    }

    function Mw(bb, wb, Mb) {
      let eb = 0,
        Hb = 0;
      for (let lb = 0; lb < wb.bytes.length; lb += rb) {
        eb++;
        const bb = Math.min(lb + rb, wb.bytes.length);
        tb(wb.bytes.subarray(lb, bb)) !== tb(Mb.subarray(lb, bb)) && Hb++
      }
      const pb = `${bb} ${wb.bytes.length} B cpu ${tb(wb.bytes).toString(16)} gpu ${tb(Mb).toString(16)}, ${Hb}/${eb} blocks differ${wb.missed?`, ${wb.missed} GPU-side writes uncopied`:""}`;
      if (0 === Hb) return pb;
      const {
        count: Vb,
        offsets: gb
      } = function(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const eb = Math.min(bb.length, wb.length);
        let Hb = Math.abs(bb.length - wb.length);
        const pb = [];
        for (let Vb = 0; Vb < eb; Vb++) bb[Vb] !== wb[Vb] && (Hb++, pb.length < Mb && pb.push(Vb));
        return {
          count: Hb,
          offsets: pb
        }
      }(wb.bytes, Mb);
      return Gb([`${pb}: ${Vb} bytes differ`, ...gb.map((bb => `  +${bb}: cpu ${Cb(wb.bytes,bb)} | gpu ${Cb(Mb,bb)}`))].join("\n")), `${pb}: ${Vb} bytes differ, first at ${gb.join(", ")} (context in the saved file)`
    }

    function ew(bb) {
      if (0 === bb.vertices.length) return void Qb(`decode probe (${bb.reason}): no terrain draw probed (${bb.draws.length} seen)`);
      const wb = function(bb) {
          const wb = new Map;
          for (const eb of bb) {
            const bb = wb.get(eb.group);
            bb ? bb.push(eb) : wb.set(eb.group, [eb])
          }
          const Mb = {
            vertices: bb.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [eb, Hb] of wb) {
            const bb = new Map,
              wb = Hb.map((wb => {
                const Mb = Ib(wb.record, wb.slot),
                  eb = [wb.gpu[0] - Mb[0], wb.gpu[1] - Mb[1], wb.gpu[2] - Mb[2]],
                  Hb = eb.map((bb => Math.round(64 * bb))).join(","),
                  pb = bb.get(Hb);
                return pb ? pb.count++ : bb.set(Hb, {
                  count: 1,
                  offset: eb
                }), Mb
              }));
            let pb = [0, 0, 0],
              Vb = 0;
            for (const Mb of bb.values()) Mb.count > Vb && (Vb = Mb.count, pb = Mb.offset);
            Mb.translations.set(eb, pb), Hb.forEach(((bb, eb) => {
              var Hb;
              const Vb = [wb[eb][0] + pb[0], wb[eb][1] + pb[1], wb[eb][2] + pb[2]];
              if (Vb.every(((wb, Mb) => {
                  return eb = bb.gpu[Mb], Hb = wb, Math.abs(eb - Hb) <= Math.max(.001, 1e-6 * Math.abs(Hb));
                  var eb, Hb
                }))) return;
              Mb.mismatches++, Mb.byDirection[gb(bb.record[2])]++, Mb.byDiagonal[lb(bb.record[2])]++;
              const Lb = Ob(bb.record);
              Mb.byBand[Lb] = (null !== (Hb = Mb.byBand[Lb]) && void 0 !== Hb ? Hb : 0) + 1, Mb.first.length < Ub && Mb.first.push({
                ...bb,
                expected: Vb
              })
            }))
          }
          return Mb
        }(bb.vertices),
        Mb = wb.byDirection.map(((bb, wb) => bb ? `${Vb[wb]} ${bb}` : "")).filter(Boolean).join(" "),
        eb = Object.entries(wb.byBand).map((bb => {
          let [wb, Mb] = bb;
          return `${wb}: ${Mb}`
        })).join(" ");
      if (Qb(`decode probe (${bb.reason}): ${wb.mismatches}/${wb.vertices} vertices differ from the CPU decode over ${bb.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (wb.mismatches ? ` by direction [${Mb}] diagonal [0: ${wb.byDiagonal[0]} 1: ${wb.byDiagonal[1]}] extent [${eb}]` : "")), bb.fed.records > 0 || bb.fed.failed > 0) {
        Qb(`decode probe input: ${bb.fed.differing}/${bb.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (bb.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (bb.fed.failed ? `; the feed failed on ${bb.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const wb of bb.fed.first) Qb(`  ${wb}`)
      }
      for (const Hb of wb.first) {
        const [bb, wb, Mb] = Hb.record;
        Qb(`  mismatch part ${Hb.group} r0 ${bb.toString(16)} r1 ${wb.toString(16)} r2 ${Mb.toString(16)} slot ${Hb.slot} (${Vb[gb(Mb)]}): expected ${Hb.expected.map(pw).join(",")} gpu ${Hb.gpu.map(pw).join(",")}`)
      }
      Gb(`decode probe translations: ${[...wb.translations].map((bb=>{let[wb,Mb]=bb;return`${wb}: ${Mb.map(pw).join(",")}`})).join("; ")}`)
    }

    function Hw(bb) {
      return bb.toString(16)
    }

    function pw(bb) {
      return Number.isInteger(bb) ? String(bb) : bb.toFixed(3)
    }

    function Vw(bb) {
      return null !== fb.pendingCheck ? Promise.resolve() : new Promise((wb => {
        let Mb = !1;
        const eb = {
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
        fb.pendingCheck = eb;
        const Hb = () => {
            fb.pendingCheck = null;
            try {
              ! function(bb) {
                Qb(`draw ranges (${bb.reason}): ${bb.terrainDraws} terrain draws in the frame, the first ${bb.draws.length} here`);
                for (const wb of bb.draws) {
                  const bb = wb.gF.slice(0, 8).map((bb => {
                      let [wb, Mb] = bb;
                      return `${wb}+${Mb}`
                    })).join(" "),
                    Mb = wb.gF.length > 8 ? ` (+${wb.gF.length-8} ranges)` : "";
                  Qb(`  ${Db(wb.program)} ${wb.program.terrain} ${wb.call} ${bb}${Mb} x${wb.instances}${wb.group>=0?` part ${wb.group} chunk ${wb.chunk}`:""} | ${wb.attributes.join(" | ")}`)
                }
              }(eb), ew(eb);
              eb.draws.some((bb => "undefined" !== typeof WebGL2RenderingContext && bb.gl instanceof WebGL2RenderingContext)) || 0 === eb.draws.length ? function(bb) {
                const wb = [],
                  Mb = new Map;
                for (const eb of bb)
                  if ("undefined" !== typeof WebGL2RenderingContext && eb.gl instanceof WebGL2RenderingContext)
                    for (const bb of eb.pages) Mb.set("buf" === bb.kind ? bb.buffer : bb.texture, {
                      page: bb,
                      gl: eb.gl
                    });
                for (const [eb, {
                    page: Hb,
                    gl: pb
                  }] of Mb) {
                  const bb = Yb.get(eb);
                  if (!bb) {
                    wb.push(`${Hb.kind}#${Jb(eb)}: no CPU copy (${fb.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === Hb.kind) {
                    wb.push(Mw(`buf#${bb.id}`, bb, yb(pb, Hb.buffer, 0, bb.bytes.length)));
                    continue
                  }
                  const Mb = ww(pb, Hb.texture, bb.width, 0, bb.width * bb.height),
                    Vb = 16 === bb.texelBytes ? new Uint8Array(Mb.buffer) : new Uint8Array(new Uint16Array(Mb).buffer);
                  wb.push(Mw(`tex#${bb.id} (${16===bb.texelBytes?"records":"light"})`, bb, Vb))
                }
                for (const eb of wb) Qb(`page readback ${eb}`)
              }(eb.draws) : Qb("page readback: none on WebGL1 (no buffer readback)")
            } catch (bb) {
              Qb(`check failed: ${String(bb)}`)
            }
            wb()
          },
          pb = () => {
            if (eb.draws.length > 0 && !Mb) return Mb = !0, void setTimeout(Hb, 0);
            Mb || requestAnimationFrame(pb)
          };
        requestAnimationFrame(pb), setTimeout((() => {
          Mb || (Mb = !0, Hb())
        }), 5e3)
      }))
    }
    var gw = Mb(5587);
    const lw = 20,
      Lw = 24,
      Iw = Reflect.apply;

    function Ow(bb, wb, Mb) {
      if (!bb) return;
      const eb = bb[wb];
      if ("function" === typeof eb) {
        const Hb = Mb(eb);
        bb[wb] = Hb, (0, gw.A)(Hb, eb)
      }
    }
    let Uw = !1;
    const tw = new WeakMap,
      Cw = new WeakMap,
      Ew = new WeakMap,
      Fw = {
        gl: 0,
        lost: 0
      };
    let Bw = {
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
      sw = {
        buffer: 0,
        texture: 0
      },
      mw = 0;

    function hw(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (bb instanceof ArrayBuffer) return new Uint8Array(bb, wb, Mb || void 0);
      if (!ArrayBuffer.isView(bb)) return null;
      const eb = "BYTES_PER_ELEMENT" in bb ? bb.BYTES_PER_ELEMENT : 1,
        Hb = bb.byteOffset + wb * eb,
        pb = Mb ? Mb * eb : bb.byteLength - wb * eb;
      return new Uint8Array(bb.buffer, Hb, Math.max(0, pb))
    }

    function zw(bb, wb) {
      const Mb = function(bb) {
        switch (bb) {
          case Eb.ARRAY_BUFFER:
            return Eb.ARRAY_BUFFER_BINDING;
          case Eb.ELEMENT_ARRAY_BUFFER:
            return Eb.ELEMENT_ARRAY_BUFFER_BINDING;
          case Eb.COPY_READ_BUFFER:
            return Eb.COPY_READ_BUFFER_BINDING;
          case Eb.COPY_WRITE_BUFFER:
            return Eb.COPY_WRITE_BUFFER_BINDING;
          case Eb.UNIFORM_BUFFER:
            return Eb.UNIFORM_BUFFER_BINDING;
          case Eb.PIXEL_UNPACK_BUFFER:
            return Eb.PIXEL_UNPACK_BUFFER_BINDING;
          case Eb.TRANSFORM_FEEDBACK_BUFFER:
            return Eb.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(wb);
      return Mb ? bb.getParameter(Mb) : null
    }

    function Xw(bb) {
      const wb = Yb.get(bb);
      wb && (fb.shadowBytes -= wb.bytes.length, Yb.delete(bb))
    }

    function xw(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      Xw(bb), fb.shadowBytes + wb > Kb ? fb.uncopied++ : (fb.shadowBytes += wb, Yb.set(bb, {
        id: Jb(bb),
        bytes: new Uint8Array(wb),
        width: Mb,
        height: eb,
        texelBytes: Hb,
        missed: 0
      }))
    }

    function jw(bb, wb) {
      for (const Mb of ["deleteBuffer", "deleteTexture"]) Ow(bb, Mb, (bb => function() {
        for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
        return Mb[0] && Xw(Mb[0]), Iw(bb, this, Mb)
      }));
      Ow(bb, "shaderSource", (bb => function() {
        for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
        return Mb[0] && "string" === typeof Mb[1] && tw.set(Mb[0], Mb[1]), Iw(bb, this, Mb)
      })), Ow(bb, "attachShader", (bb => function() {
        for (var wb, Mb = arguments.length, eb = new Array(Mb), Hb = 0; Hb < Mb; Hb++) eb[Hb] = arguments[Hb];
        const pb = eb[0],
          Vb = null !== (wb = Cw.get(pb)) && void 0 !== wb ? wb : [];
        return Vb.push(eb[1]), Cw.set(pb, Vb), Iw(bb, this, eb)
      })), Ow(bb, "linkProgram", (bb => function() {
        for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
        const Hb = Iw(bb, this, Mb);
        return fb.inProbe || function(bb, wb) {
          var Mb, eb, Hb;
          "undefined" !== typeof HTMLCanvasElement && bb.canvas instanceof HTMLCanvasElement && function(bb) {
            if (Zw.has(bb)) return;
            Zw.add(bb);
            for (const wb of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) bb.addEventListener(wb, (bb => {
              Fw.lost < lw && (Fw.lost++, Qb(`${wb}${"statusMessage"in bb?`: ${String(bb.statusMessage)}`:""}`))
            }))
          }(bb.canvas);
          fb.context ??= bb;
          const pb = null !== (Mb = Cw.get(wb)) && void 0 !== Mb ? Mb : [];
          let Vb = "",
            gb = "";
          for (const Ib of pb) {
            var lb;
            const bb = null !== (lb = tw.get(Ib)) && void 0 !== lb ? lb : "";
            /\bgl_Position\b/.test(bb) ? Vb = bb : gb = bb
          }
          const Lb = {
            id: Jb(wb),
            name: null !== (eb = null === (Hb = Rb.exec(Vb)) || void 0 === Hb ? void 0 : Hb[1]) && void 0 !== eb ? eb : null,
            gl: bb,
            vertex: Vb,
            fragment: gb,
            terrain: rw(Vb),
            checked: !1,
            firstDraw: !1
          };
          if (Ew.set(wb, Lb), cb.push([wb, Lb]), null !== Lb.terrain) {
            const wb = pb.map((wb => {
              var Mb;
              return null !== (Mb = bb.getShaderInfoLog(wb)) && void 0 !== Mb ? Mb : ""
            })).filter((bb => "" !== bb.trim()));
            wb.length > 0 && Gb(`program ${Db(Lb)} (${Lb.terrain}) shader logs:\n${qb(wb.join("\n"))}`)
          }
        }(this, Mb[0]), Hb
      })), Ow(bb, "bufferData", (bb => function() {
        for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
        const Hb = Iw(bb, this, Mb);
        if (!fb.inProbe) {
          const bb = zw(this, Mb[0]);
          if (bb) {
            var pb, Vb, gb;
            const wb = "number" === typeof Mb[1] ? null : hw(Mb[1], null !== (pb = Mb[3]) && void 0 !== pb ? pb : 0, null !== (Vb = Mb[4]) && void 0 !== Vb ? Vb : 0);
            var lb;
            if (xw(bb, "number" === typeof Mb[1] ? Mb[1] : null !== (gb = null === wb || void 0 === wb ? void 0 : wb.length) && void 0 !== gb ? gb : 0), wb) null === (lb = Yb.get(bb)) || void 0 === lb || lb.bytes.set(wb)
          }
        }
        return Hb
      })), Ow(bb, "bufferSubData", (bb => function() {
        for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
        const Hb = Iw(bb, this, Mb);
        if (!fb.inProbe) {
          var pb, Vb;
          const bb = zw(this, Mb[0]),
            wb = bb ? Yb.get(bb) : void 0,
            eb = hw(Mb[2], null !== (pb = Mb[3]) && void 0 !== pb ? pb : 0, null !== (Vb = Mb[4]) && void 0 !== Vb ? Vb : 0);
          if (wb && eb) {
            const bb = Mb[1];
            wb.bytes.set(eb.subarray(0, Math.max(0, wb.bytes.length - bb)), bb), Kw("buffer", wb, bb, eb.length)
          }
        }
        return Hb
      })), wb && (Ow(bb, "copyBufferSubData", (bb => function() {
        for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
        const Hb = Iw(bb, this, Mb);
        if (!fb.inProbe) {
          const [bb, wb, eb, Hb, pb] = Mb, Vb = zw(this, bb), gb = zw(this, wb), lb = Vb ? Yb.get(Vb) : void 0, Lb = gb ? Yb.get(gb) : void 0;
          Lb && (lb ? Lb.bytes.set(lb.bytes.slice(eb, eb + pb), Hb) : Lb.missed++)
        }
        return Hb
      })), Ow(bb, "texStorage2D", (bb => function() {
        for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
        const Hb = Iw(bb, this, Mb),
          [, , pb, Vb, gb] = Mb;
        if (!fb.inProbe && (pb === Eb.RGBA32UI || pb === Eb.RGBA16UI)) {
          const bb = this.getParameter(Eb.TEXTURE_BINDING_2D),
            wb = pb === Eb.RGBA32UI ? 16 : 8;
          bb && (Zb.set(bb, wb), xw(bb, Vb * gb * wb, Vb, gb, wb))
        }
        return Hb
      })), Ow(bb, "texSubImage2D", (bb => function() {
        for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
        const Hb = Iw(bb, this, Mb);
        return !fb.inProbe && Mb.length >= 9 && Mb[0] === Eb.TEXTURE_2D && 0 === Mb[1] && function(bb, wb) {
          var Mb;
          const eb = bb.getParameter(Eb.TEXTURE_BINDING_2D),
            Hb = eb ? Yb.get(eb) : void 0;
          if (!Hb) return;
          const [, , pb, Vb, gb, lb] = wb;
          let Lb = hw(wb[8], null !== (Mb = wb[9]) && void 0 !== Mb ? Mb : 0);
          if (null === Lb && "number" === typeof wb[8]) {
            const Mb = zw(bb, Eb.PIXEL_UNPACK_BUFFER),
              eb = Mb ? Yb.get(Mb) : void 0;
            Lb = eb ? eb.bytes.subarray(wb[8]) : null
          }
          if (null === Lb) return void Hb.missed++;
          const Ib = bb.getParameter(Eb.UNPACK_ROW_LENGTH) || gb,
            Ob = bb.getParameter(Eb.UNPACK_SKIP_ROWS),
            Ub = bb.getParameter(Eb.UNPACK_SKIP_PIXELS),
            tb = Hb.texelBytes;
          for (let Cb = 0; Cb < lb; Cb++) {
            const bb = ((Ob + Cb) * Ib + Ub) * tb,
              wb = ((Vb + Cb) * Hb.width + pb) * tb;
            Hb.bytes.set(Lb.subarray(bb, bb + gb * tb), wb)
          }
          Kw("texture", Hb, (Vb * Hb.width + pb) * tb, gb * lb * tb)
        }(this, Mb), Hb
      })), Ow(bb, "copyTexSubImage2D", (bb => function() {
        for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
        const Hb = Mb[0] === Eb.TEXTURE_2D ? this.getParameter(Eb.TEXTURE_BINDING_2D) : null,
          pb = Hb ? Yb.get(Hb) : void 0;
        return pb && pb.missed++, Iw(bb, this, Mb)
      })));
      for (const Mb of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) Ow(bb, Mb, (bb => function() {
        for (var wb = arguments.length, eb = new Array(wb), Hb = 0; Hb < wb; Hb++) eb[Hb] = arguments[Hb];
        const pb = Iw(bb, this, eb);
        return fb.inProbe || Dw(this, Mb, eb), pb
      }));
      Ow(bb, "getExtension", (bb => function() {
        for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
        const Hb = Iw(bb, this, Mb);
        return Hb && "object" === typeof Hb && function(bb, wb, Mb) {
          const eb = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(wb in eb) || Mb.bloxdRenderDebug) return;
          Mb.bloxdRenderDebug = !0;
          for (const Hb of eb[wb]) {
            const wb = Mb[Hb];
            "function" === typeof wb && (Mb[Hb] = function() {
              for (var eb = arguments.length, pb = new Array(eb), Vb = 0; Vb < eb; Vb++) pb[Vb] = arguments[Vb];
              const gb = Iw(wb, Mb, pb);
              return fb.inProbe || Dw(bb, Hb, pb), gb
            })
          }
        }(this, Mb[0], Hb), Hb
      }))
    }

    function Kw(bb, wb, Mb, eb) {
      sw[bb] += eb, mw < 32 && wb.bytes.length >= 1 << 20 && (mw++, Gb(`upload ${bb} #${wb.id} +${Mb} ${eb} B`))
    }

    function rw(bb) {
      if (!bb.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(bb) || /in uvec3 _p2vs_location0\b/.test(bb) ? "inst" : "tex"
    }

    function Rw(bb, wb, Mb) {
      var eb;
      if (Mb.checked) return;
      Mb.checked = !0;
      const Hb = bb.getProgramParameter(wb, Eb.LINK_STATUS),
        pb = (null !== (eb = bb.getProgramInfoLog(wb)) && void 0 !== eb ? eb : "").trim();
      var Vb;
      null === Mb.terrain && Hb || (Qb(`program ${Db(Mb)} ${null!==(Vb=Mb.terrain)&&void 0!==Vb?Vb:"other"} link ${Hb?"ok":"FAILED"}${pb?`: ${qb(pb,300)}`:""}`), pb && Gb(`program ${Db(Mb)} link log:\n${qb(pb)}`))
    }

    function Dw(bb, wb, Mb) {
      var eb;
      const Hb = bb.getParameter(Eb.CURRENT_PROGRAM),
        pb = Hb ? Ew.get(Hb) : void 0;
      if (!Hb || !pb) return;
      const Vb = null !== (eb = pb.terrain) && void 0 !== eb ? eb : "other",
        {
          gF: gb,
          instances: lb
        } = function(bb, wb) {
          switch (bb) {
            case "drawArrays":
              return {
                gF: [
                  [wb[1], wb[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                gF: [
                  [wb[1], wb[2]]
                ], instances: wb[3]
              };
            case "drawElements":
              return {
                gF: [
                  [0, wb[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                gF: [
                  [0, wb[1]]
                ], instances: wb[4]
              };
            case "multiDrawArraysWEBGL": {
              const bb = wb[1],
                Mb = wb[3],
                eb = wb[2],
                Hb = wb[4],
                pb = [];
              for (let Vb = 0; Vb < wb[5]; Vb++) pb.push([bb[eb + Vb], Mb[Hb + Vb]]);
              return {
                gF: pb,
                instances: 1
              }
            }
            default:
              return {
                gF: [], instances: 0
              }
          }
        }(wb, Mb),
        Lb = "inst" === pb.terrain ? lb : gb.reduce(((bb, wb) => {
          let [, Mb] = wb;
          return bb + Mb
        }), 0) / 6;
      if (Bw[Vb].draws++, Bw[Vb].faces += Lb, null === pb.terrain) return;
      if (fb.context = bb, !pb.firstDraw) {
        pb.firstDraw = !0, Rw(bb, Hb, pb), Yw || (Yw = !0, Qb(function(bb) {
          var wb;
          const Mb = bb.getParameter(Eb.DEPTH_FUNC),
            eb = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let Hb = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in bb && bb.getParameter(Eb.DRAW_FRAMEBUFFER_BINDING)) {
            const wb = bb;
            Hb = wb.getFramebufferAttachmentParameter(Eb.DRAW_FRAMEBUFFER, Eb.DEPTH_ATTACHMENT, Eb.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(wb.getFramebufferAttachmentParameter(Eb.DRAW_FRAMEBUFFER,Eb.DEPTH_ATTACHMENT,Eb.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(wb.getFramebufferAttachmentParameter(Eb.DRAW_FRAMEBUFFER,Eb.DEPTH_ATTACHMENT,Eb.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const pb = bb.getParameter(Eb.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(wb=eb[Mb])&&void 0!==wb?wb:`0x${Mb.toString(16)}`} clear ${pb}${516===Mb||518===Mb?" (reverse-Z)":""}, samples ${String(bb.getParameter(Eb.SAMPLES))}, ${Hb}`
        }(bb)));
        const Mb = bb.getError();
        Mb !== Eb.NO_ERROR && Fw.gl < lw && (Fw.gl++, Qb(`GL error 0x${Mb.toString(16)} after program ${Db(pb)}'s first terrain draw (${wb})`))
      }
      const Ib = fb.pendingCheck;
      null !== Ib && (Ib.terrainDraws++, Ib.draws.length < Lw && ab(bb, Hb, pb, wb, gb, lb))
    }
    let Yw = !1;
    const Zw = new WeakSet;
    var fw = Mb(5354),
      Aw = Mb(5590);
    const Ww = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let Jw = !1;
    const Sw = new WeakSet,
      Nw = new WeakMap,
      vw = new WeakMap,
      Qw = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let Gw = 0,
      qw = !1,
      aw = null,
      iw = {
        draws: 0,
        faces: 0
      };

    function uw(bb) {
      const wb = globalThis[bb];
      return null === wb || void 0 === wb ? void 0 : wb.prototype
    }

    function dw(bb) {
      return bb && "function" === typeof bb[Symbol.iterator] ? [...bb].sort().join(" ") : ""
    }

    function Pw(bb, wb) {
      const Mb = null !== bb && void 0 !== bb ? bb : {},
        eb = null !== wb && void 0 !== wb ? wb : Object.keys(Object.getPrototypeOf(Mb)).concat(Object.keys(Mb));
      return [...new Set(eb)].filter((bb => "number" === typeof Mb[bb])).map((bb => `${bb} ${String(Mb[bb])}`)).join(", ")
    }

    function nw(bb, wb) {
      var Mb;
      const eb = null !== (Mb = wb.vertex) && void 0 !== Mb ? Mb : {};
      if (eb.module && Sw.has(eb.module)) {
        var Hb;
        const Mb = String(null !== (Hb = eb.entryPoint) && void 0 !== Hb ? Hb : "");
        if (Mb.startsWith("vs_packed") && Nw.set(bb, Mb), !qw) {
          var pb, Vb, gb, lb, Lb;
          qw = !0;
          const bb = null !== (pb = wb.depthStencil) && void 0 !== pb ? pb : {},
            eb = null !== (Vb = wb.multisample) && void 0 !== Vb ? Vb : {},
            Hb = String(null !== (gb = bb.depthCompare) && void 0 !== gb ? gb : "");
          Qb(`WebGPU terrain pipeline ${Mb}: depth ${String(null!==(lb=bb.format)&&void 0!==lb?lb:"none")} ${Hb}${Hb.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(Lb=eb.count)&&void 0!==Lb?Lb:1)}`)
        }
      }
    }

    function yw(bb) {
      Ow(bb, "setPipeline", (bb => function() {
        for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
        return vw.set(this, Mb[0]), Iw(bb, this, Mb)
      }));
      for (const wb of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) Ow(bb, wb, (bb => function() {
        const Mb = vw.get(this),
          eb = Mb ? Nw.get(Mb) : void 0;
        for (var Hb = arguments.length, pb = new Array(Hb), Vb = 0; Vb < Hb; Vb++) pb[Vb] = arguments[Vb];
        return void 0 !== eb && ow(wb, eb, pb), Iw(bb, this, pb)
      }))
    }

    function ow(bb, wb, Mb) {
      var eb;
      (iw.draws++, "draw" === bb || "drawIndexed" === bb) && (iw.faces += Mb[0] * (null !== (eb = Mb[1]) && void 0 !== eb ? eb : 1) / 6);
      if (null !== aw && aw.length < Lw) {
        const eb = ("draw" === bb ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === bb ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((wb, eb) => {
          const Hb = bb.endsWith("Indirect") ? Mb[1] : Mb[eb];
          return `${wb} ${String(null!==Hb&&void 0!==Hb?Hb:"instances"===wb?1:0)}`
        }));
        aw.push(`  ${wb} ${bb} ${eb.join(" ")}`)
      }
    }

    function Tw() {
      if (Jw || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      Jw = !0, Ow(uw("GPU"), "requestAdapter", (bb => function() {
        for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
        return Iw(bb, this, Mb).then((bb => {
          var wb;
          bb ? function(bb) {
            var wb;
            const Mb = null !== (wb = bb.info) && void 0 !== wb ? wb : {};
            Qb(`WebGPU adapter ${["vendor","architecture","device","description"].map((bb=>{var wb;return`${bb} "${String(null!==(wb=Mb[bb])&&void 0!==wb?wb:"")}"`})).join(" ")}${bb.isFallbackAdapter?" (fallback)":""}`), Qb(`WebGPU adapter features ${dw(bb.features)}`), Qb(`WebGPU adapter limits ${Pw(bb.limits,Ww)}`), Gb(`WebGPU adapter all limits ${Pw(bb.limits,null)}`)
          }(bb) : Qb(`WebGPU requestAdapter(${JSON.stringify(null!==(wb=Mb[0])&&void 0!==wb?wb:{})}) gave none`);
          return bb
        }))
      })), Ow(uw("GPUAdapter"), "requestDevice", (bb => function() {
        for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
        return Iw(bb, this, Mb).then((bb => (function(bb) {
          Qb(`WebGPU device features ${dw(bb.features)}`), Qb(`WebGPU device limits ${Pw(bb.limits,Ww)}`), bb.addEventListener("uncapturederror", (bb => {
            if (Qw.uncaptured < lw) {
              var wb, Mb, eb;
              Qw.uncaptured++;
              const Hb = bb.error;
              Qb(`WebGPU uncaptured ${null!==(wb=null===Hb||void 0===Hb||null===(Mb=Hb.constructor)||void 0===Mb?void 0:Mb.name)&&void 0!==wb?wb:"error"}: ${qb(String(null!==(eb=null===Hb||void 0===Hb?void 0:Hb.message)&&void 0!==eb?eb:""),600)}`)
            }
          }));
          const wb = bb.lost;
          null === wb || void 0 === wb || wb.then((bb => {
            var wb;
            Qb(`WebGPU device lost (${String(bb.reason)}): ${qb(String(null!==(wb=bb.message)&&void 0!==wb?wb:""),600)}`)
          }))
        }(bb), bb)), (bb => {
          throw Qb(`WebGPU requestDevice failed: ${String(bb)}`), bb
        }))
      }));
      const bb = uw("GPUDevice");
      Ow(bb, "createShaderModule", (bb => function() {
        for (var wb, Mb, eb = arguments.length, Hb = new Array(eb), pb = 0; pb < eb; pb++) Hb[pb] = arguments[pb];
        const Vb = Iw(bb, this, Hb);
        return function(bb, wb) {
          const Mb = wb.includes("decodeQuad");
          Mb && Sw.add(bb);
          const eb = bb.getCompilationInfo;
          null === eb || void 0 === eb || eb.call(bb).then((bb => {
            if (0 === bb.messages.length && !Mb) return;
            const wb = {};
            for (const Mb of bb.messages) {
              var eb;
              wb[String(Mb.type)] = (null !== (eb = wb[String(Mb.type)]) && void 0 !== eb ? eb : 0) + 1
            }
            const Hb = bb.messages.map((bb => `${String(bb.type)} ${String(bb.lineNum)}:${String(bb.linePos)} ${String(bb.message)}`)).join("\n");
            Qw.compile < lw && (Qw.compile++, Qb(`WebGPU ${Mb?"terrain ":""}shader module compiled: ${JSON.stringify(wb)}${Hb?` first: ${qb(Hb.split("\n")[0],300)}`:""}`)), Hb && Gb(`WebGPU shader module messages:\n${qb(Hb)}`)
          }))
        }(Vb, String(null !== (wb = (null !== (Mb = Hb[0]) && void 0 !== Mb ? Mb : {}).code) && void 0 !== wb ? wb : "")), Vb
      })), Ow(bb, "createRenderPipeline", (bb => function() {
        for (var wb, Mb = arguments.length, eb = new Array(Mb), Hb = 0; Hb < Mb; Hb++) eb[Hb] = arguments[Hb];
        const pb = Iw(bb, this, eb);
        return nw(pb, null !== (wb = eb[0]) && void 0 !== wb ? wb : {}), pb
      })), Ow(bb, "createRenderPipelineAsync", (bb => function() {
        for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
        return Iw(bb, this, Mb).then((bb => {
          var wb;
          return nw(bb, null !== (wb = Mb[0]) && void 0 !== wb ? wb : {}), bb
        }), (bb => {
          var wb;
          throw function(bb, wb) {
            var Mb, eb, Hb;
            if (Qw.rejected >= lw) return;
            Qw.rejected++;
            const {
              reason: pb,
              message: Vb
            } = null !== wb && void 0 !== wb ? wb : {}, gb = String(null !== (Mb = (null !== (eb = bb.vertex) && void 0 !== eb ? eb : {}).entryPoint) && void 0 !== Mb ? Mb : "");
            Qb(`WebGPU pipeline "${String(null!==(Hb=bb.label)&&void 0!==Hb?Hb:"")}" ${gb} rejected (${String(null!==pb&&void 0!==pb?pb:"no reason")}): ${qb(String(null!==Vb&&void 0!==Vb?Vb:wb),600)}`)
          }(null !== (wb = Mb[0]) && void 0 !== wb ? wb : {}, bb), bb
        }))
      })), Ow(uw("GPUCanvasContext"), "configure", (bb => function() {
        for (var wb, Mb = arguments.length, eb = new Array(Mb), Hb = 0; Hb < Mb; Hb++) eb[Hb] = arguments[Hb];
        const pb = null !== (wb = eb[0]) && void 0 !== wb ? wb : {};
        var Vb, gb;
        Gw++ < 3 && Qb(`WebGPU canvas ${String(pb.format)} ${String(null!==(Vb=pb.colorSpace)&&void 0!==Vb?Vb:"srgb")} alpha ${String(null!==(gb=pb.alphaMode)&&void 0!==gb?gb:"opaque")}`);
        return Iw(bb, this, eb)
      })), yw(uw("GPURenderPassEncoder")), yw(uw("GPURenderBundleEncoder"))
    }
    const kw = 1e4,
      bM = 6e4,
      wM = 5e3,
      MM = 3e3,
      eM = 100;
    let HM = null,
      pM = !1,
      VM = {
        ...fw.b
      },
      gM = !1,
      lM = null,
      LM = 0,
      IM = () => {};
    const OM = new Promise((bb => {
      IM = bb
    }));

    function UM() {
      var bb;
      pM || (pM = !0, VM = Object.assign(window.bloxdRenderDebug ??= {
        ...fw.b
      }, {
        faceCull: "0" === (0, pb.k)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (bb = (0, pb.k)("adrenoProbe")) && void 0 !== bb ? bb : ""
      }), Qb("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), Uw || "undefined" === typeof window || (Uw = !0, "undefined" !== typeof WebGL2RenderingContext && jw(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && jw(WebGLRenderingContext.prototype, !1)), Tw(), (0, pb.c)("renderProbe", (() => {
        sM("console")
      })), FM(), setInterval(hM, wM))
    }

    function tM(bb) {
      var wb, Mb;
      UM(), HM = null !== (wb = null === bb || void 0 === bb ? void 0 : bb.backend) && void 0 !== wb ? wb : null;
      const eb = `, renderer param ${null!==(Mb=(0,pb.k)("renderer"))&&void 0!==Mb?Mb:"none"}, faceCull ${"0"===VM.faceCull?"off (whole parts)":"on"}, adrenoProbe ${VM.adrenoProbe||"none"}`;
      Qb(`${(0,Aw.d)(bb)}${null===bb?"":eb}`)
    }

    function CM() {
      const bb = performance.now(),
        wb = EM(OM, kw, bM).then((wb => sM(`${Math.round((performance.now()-bb)/1e3)} s after playable${wb?"":", no terrain drawn yet"}`)));
      (0, Hb.d)(Qb, (async () => {
        await wb, await lM
      }))
    }
    async function EM(bb, wb, Mb) {
      const Hb = (0, eb.c)(Mb).then((() => !1));
      return await (0, eb.c)(wb), Promise.race([bb.then((() => !0)), Hb])
    }

    function FM() {
      requestAnimationFrame((() => {
        LM++, FM()
      }))
    }

    function BM() {
      var bb, wb, Mb;
      if (gM) return;
      (gM = !0, Qb(`renderer caps ${null!==(bb=VM.caps)&&void 0!==bb?bb:"(not noted)"}; terrain fetch ${null!==(wb=VM.fetch)&&void 0!==wb?wb:"(not noted)"}`), VM.adrenoProbe) && Qb(`adrenoProbe ${VM.adrenoProbe} asked; in force (storage fetch only): ${null!==(Mb=VM.probe)&&void 0!==Mb?Mb:"(not noted)"}`);
      const eb = fb.context;
      if (eb) {
        for (const bb of function(bb) {
            var wb;
            const Mb = [],
              eb = bb.getExtension("WEBGL_debug_renderer_info"),
              Hb = eb ? bb.getParameter(eb.UNMASKED_VENDOR_WEBGL) : "(masked)",
              pb = eb ? bb.getParameter(eb.UNMASKED_RENDERER_WEBGL) : "(masked)";
            Mb.push(`GL ${String(bb.getParameter(bb.VERSION))} | ${String(bb.getParameter(bb.SHADING_LANGUAGE_VERSION))} | ${String(bb.getParameter(bb.VENDOR))} / ${String(bb.getParameter(bb.RENDERER))}`), Mb.push(`GL unmasked ${Hb} / ${pb}`);
            const Vb = [
              ["MAX_TEXTURE_SIZE", bb.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", bb.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", bb.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", bb.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", bb.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", bb.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", bb.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in bb && Vb.push(["MAX_UNIFORM_BLOCK_SIZE", bb.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", bb.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", bb.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", bb.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), Mb.push(`GL limits ${Vb.map((wb=>{let[Mb,eb]=wb;return`${Mb} ${String(bb.getParameter(eb))}`})).join(", ")}`);
            const gb = (wb, Mb) => {
              const eb = bb.getShaderPrecisionFormat(wb, bb.HIGH_FLOAT),
                Hb = bb.getShaderPrecisionFormat(wb, bb.HIGH_INT);
              return `${Mb} highp float ${eb?`${eb.rangeMin}/${eb.rangeMax}/${eb.precision}`:"?"} int ${Hb?`${Hb.rangeMin}/${Hb.rangeMax}/${Hb.precision}`:"?"}`
            };
            Mb.push(`GL precision ${gb(bb.VERTEX_SHADER,"VS")}, ${gb(bb.FRAGMENT_SHADER,"FS")}`);
            const lb = bb.getContextAttributes();
            return Mb.push(`GL context ${JSON.stringify(lb)} drawingBuffer ${bb.drawingBufferWidth}x${bb.drawingBufferHeight}${"drawingBufferFormat"in bb?` format 0x${Number(bb.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in bb?` ${String(bb.drawingBufferColorSpace)}`:""}`), Mb.push(`GL extensions ${(null!==(wb=bb.getSupportedExtensions())&&void 0!==wb?wb:[]).join(" ")}`), Mb
          }(eb)) Qb(bb);
        ! function() {
          if (!fb.context) return;
          let bb = 0,
            wb = 0;
          for (const [Mb, eb] of cb) !eb.gl.isContextLost() && eb.gl.isProgram(Mb) && (wb++, Rw(eb.gl, Mb, eb), null !== eb.terrain && bb++);
          Qb(`programs: ${wb} live of ${cb.length} linked, ${bb} packed terrain; CPU page copies ${Math.round(fb.shadowBytes/1048576)} MiB (${fb.uncopied} over budget)`)
        }()
      }
    }

    function sM(bb) {
      return lM ??= async function(bb) {
        BM(), "webgpu" === HM ? (mM(), "1" === VM.slotCheck && Qb("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), VM.slotCheck = "1", await
          function(bb) {
            if (null !== aw) return Promise.resolve();
            const wb = [];
            return aw = wb, new Promise((Mb => {
              setTimeout((() => {
                aw = null, Qb(`WebGPU draw ranges (${bb}): ${wb.length} terrain draws recorded in a second (first ${Lw}; bundles replay without new ones)`);
                for (const bb of wb) Qb(bb);
                Mb()
              }), 1e3)
            }))
          }(bb), await async function() {
            if (await (0, fw.h)(VM, "slotCheck", ["1"], MM, eM), "1" === VM.slotCheck) return void Qb(`slot check: no answer in ${MM} ms (only the storage fetch has one; a later answer logs on its own)`);
            mM()
          }()) : await Vw(bb);
        Qb(`check (${bb}) done: bloxdDebug.save() downloads it all`)
      }(bb).catch((wb => {
        Qb(`check (${bb}) failed: ${String(wb)}`)
      })).finally((() => {
        lM = null
      })), lM
    }

    function mM() {
      void 0 !== VM.slotCheck && "1" !== VM.slotCheck && (Qb(VM.slotCheck), delete VM.slotCheck)
    }

    function hM() {
      const bb = bb => LM ? (bb / LM).toFixed(1) : "0",
        wb = function() {
          const bb = iw;
          return iw = {
            draws: 0,
            faces: 0
          }, bb
        }(),
        Mb = function() {
          const bb = Bw;
          return Bw = {
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
        eb = function() {
          const bb = sw;
          return sw = {
            buffer: 0,
            texture: 0
          }, bb
        }();
      mM(), ("webgpu" === HM ? wb.draws : Mb.inst.draws + Mb.tex.draws) > 0 && IM();
      const Hb = "webgpu" === HM ? [`terrain ${bb(wb.draws)} draws ${bb(wb.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((bb => Mb[bb].draws > 0)).map((wb => `${wb} ${bb(Mb[wb].draws)} draws ${bb(Mb[wb].faces)} faces a frame`));
      Qb(`${LM} frames: ${Hb.join(", ")||"no draws"}; uploaded ${Math.round(eb.buffer/1024)} KiB to buffers, ${Math.round(eb.texture/1024)} KiB to data textures`), LM = 0
    }
  },
  5590: (bb, wb, Mb) => {
    function eb(bb) {
      if (null === bb) return "backend: none picked (no renderer build)";
      const wb = bb.adapter ? `${bb.adapter.vendor}/${bb.adapter.architecture}` : "none";
      return `backend ${bb.backend}: reason ${bb.reason}, source ${bb.source}, adapter ${wb}`
    }
    Mb.d(wb, {
      d: () => eb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);