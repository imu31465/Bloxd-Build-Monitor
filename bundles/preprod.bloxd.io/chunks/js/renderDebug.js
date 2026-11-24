export const id = 49;
export const ids = [49];
export const modules = {
  4785: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Dp
    });
    var Op = cp(25),
      op = cp(34),
      Ip = cp(1308),
      Sp = cp(2908);
    const xp = 3e4,
      Lp = 1e3;

    function Yp() {
      return "visible" === document.visibilityState && "inGame" === Op.c.get("gameState") && (0, Ip.t)()
    }

    function Dp(pp, ip) {
      (0, Sp.v)() || function(pp, ip, cp) {
        let Op = 0;
        const op = setInterval((() => {
          ip() && (Op += Lp, Op >= pp && (clearInterval(op), cp()))
        }), Lp)
      }(xp, Yp, (() => {
        ip().then((() => {
          pp(`saved for the player after ${xp/1e3} s of play`), (0, Sp.F)(), op.m.GA("chat", {
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
  4776: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      installRenderDebug: () => yc,
      renderDebugPlayable: () => wc,
      startRenderDebug: () => Uc,
      waitForDraw: () => vc
    });
    var Op = cp(1838),
      op = cp(4785),
      Ip = cp(2908);
    const Sp = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function xp(pp) {
      return 7 & pp
    }

    function Lp(pp) {
      return pp >>> 11 & 1
    }

    function Yp(pp) {
      return [1 + (pp >>> 18 & 63), 1 + (pp >>> 24 & 63)]
    }

    function Dp(pp, ip) {
      const [cp, , Op] = pp, op = xp(Op), Ip = function(pp, ip, cp) {
        return ip + (1 === (22 >>> pp & 1) ? 4 - cp : cp) & 3
      }(op, Lp(Op), ip), Sp = op >>> 1, [Dp, Ap] = Yp(cp), Pp = 1 === Ip || 2 === Ip ? Dp : 0, Wp = Ip >= 2 ? Ap : 0, yp = [63 & cp, cp >>> 6 & 63, cp >>> 12 & 63];
      return yp[2 === Sp ? 0 : 2] += Pp, yp[1 === Sp ? 0 : 1] += Wp, yp
    }

    function Ap(pp) {
      const ip = Math.max(...Yp(pp[0]));
      return 1 === ip ? "1" : ip <= 4 ? "2-4" : ip <= 16 ? "5-16" : "17-64"
    }
    const Pp = 16;

    function Wp(pp) {
      let ip = 2166136261;
      for (let cp = 0; cp < pp.length; cp++) ip = Math.imul(ip ^ pp[cp], 16777619);
      return ip >>> 0
    }

    function yp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const Op = Math.max(0, ip - cp),
        op = Math.min(pp.length, ip + cp),
        Ip = [];
      for (let Sp = Op; Sp < op; Sp++) {
        const cp = pp[Sp].toString(16).padStart(2, "0");
        Ip.push(Sp === ip ? `[${cp}]` : cp)
      }
      return Ip.join(" ")
    }
    const Up = {
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
      wp = "_vs2fs_location0";
    const vp = 0,
      tp = 4,
      Hp = 6,
      dp = [0, 1, 2, 0, 2, 3],
      ep = 2048,
      jp = 4,
      kp = 256,
      mp = 64,
      Rp = 268435456,
      qp = 65536,
      Mp = /^#version [^\n]*\/\/ program (\S+)$/m;

    function Cp(pp) {
      return null === pp.name ? `#${pp.id}` : `#${pp.id} ${pp.name}`
    }
    const Ep = [],
      Xp = new WeakMap,
      lp = new WeakMap,
      Qp = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let Jp = 1;
    const Bp = new WeakMap;

    function Np(pp) {
      if (null === pp) return 0;
      let ip = Bp.get(pp);
      return void 0 === ip && (ip = Jp++, Bp.set(pp, ip)), ip
    }
    class Tp {
      constructor(pp, ip) {
        this.print = pp, this.now = ip, this.shown = 0, this.sx = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.aW = [], this.dropped = 0
      }
      line(pp) {
        const ip = this.now();
        if (ip - this.second >= 1e3 && (this.second = ip, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.sx++, void this.store(pp);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${pp} (the last line here: the rest go to bloxdDebug.save())` : pp)
      }
      keep(pp) {
        this.sections++, this.store(pp)
      }
      store(pp) {
        this.aW.push(`${new Date(Date.now()).toISOString()} ${pp}`), this.aW.length > 2e4 && (this.aW.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.sx} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.aW].join("\n")
      }
    }
    let fp = null;

    function bp() {
      if (null === fp) {
        const pp = new Tp((pp => {
          (0, Ip.n)("render", pp)
        }), (() => performance.now()));
        (0, Ip.k)("render", (() => pp.dump())), fp = pp
      }
      return fp
    }

    function hp(pp) {
      bp().line(pp)
    }

    function ap(pp) {
      bp().keep(pp)
    }

    function np(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return pp.length <= ip ? pp : `${pp.slice(0,ip)}... (${pp.length-ip} more characters)`
    }

    function Fp(pp, ip, cp, Op, op, Ip) {
      const Sp = Qp.pendingCheck;
      if (null === Sp) return;
      const xp = "undefined" !== typeof WebGL2RenderingContext && pp instanceof WebGL2RenderingContext,
        Lp = {
          gl: pp,
          program: cp,
          call: Op,
          By: op,
          instances: Ip,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (Sp.draws.push(Lp), xp) try {
        const Op = function(pp) {
          const ip = [],
            cp = new Map,
            Op = Math.min(16, pp.getParameter(Up.MAX_VERTEX_ATTRIBS));
          for (let op = 0; op < Op; op++) {
            if (!pp.getVertexAttrib(op, Up.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const Op = pp.getVertexAttrib(op, Up.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              Ip = pp.getVertexAttribOffset(op, Up.VERTEX_ATTRIB_ARRAY_POINTER),
              Sp = pp.getVertexAttrib(op, Up.VERTEX_ATTRIB_ARRAY_STRIDE),
              xp = pp.getVertexAttrib(op, Up.VERTEX_ATTRIB_ARRAY_SIZE),
              Lp = pp.getVertexAttrib(op, Up.VERTEX_ATTRIB_ARRAY_TYPE),
              Yp = "VERTEX_ATTRIB_ARRAY_INTEGER" in pp && pp.getVertexAttrib(op, Up.VERTEX_ATTRIB_ARRAY_INTEGER),
              Dp = "VERTEX_ATTRIB_ARRAY_DIVISOR" in pp ? pp.getVertexAttrib(op, Up.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            cp.set(op, {
              buffer: Op,
              offset: Ip,
              stride: Sp
            }), ip.push(`@${op} buf#${Np(Op)} +${Ip} stride ${Sp} ${xp}x0x${Lp.toString(16)}${Yp?" int":""} div ${Dp}`)
          }
          return {
            lines: ip,
            byLocation: cp
          }
        }(pp);
        if (Lp.attributes = Op.lines, "inst" === cp.terrain) {
          const {
            group: op,
            chunk: xp
          } = function(pp, ip, cp) {
            const Op = ip.get(Hp),
              op = pp.getVertexAttrib(Hp, Up.CURRENT_VERTEX_ATTRIB),
              Ip = Op ? `+${Op.offset}` : op ? Array.from(op).slice(0, 3).join(",") : "?";
            let Sp = cp.groups.get(Ip);
            return void 0 === Sp && (Sp = cp.groups.size, cp.groups.set(Ip, Sp)), {
              group: Sp,
              chunk: Ip
            }
          }(pp, Op.byLocation, Sp);
          Lp.group = op, Lp.chunk = xp;
          for (const pp of [vp, tp]) {
            var Yp;
            const ip = null === (Yp = Op.byLocation.get(pp)) || void 0 === Yp ? void 0 : Yp.buffer;
            ip && Lp.pages.push({
              kind: "buf",
              buffer: ip
            })
          }! function(pp, ip, cp, Op, op, Ip, Sp) {
            const xp = Op.get(vp),
              Lp = Sp.parts.get(Ip);
            if (void 0 === Lp && Sp.parts.size >= jp) return;
            const Yp = Math.min(op, mp, kp - (null !== Lp && void 0 !== Lp ? Lp : 0));
            if (null === xp || void 0 === xp || !xp.buffer || Yp <= 0) return;
            const Dp = gp(pp, ip, cp);
            if (!Dp) return;
            const Ap = xp.stride || 12,
              Pp = sp(pp, xp.buffer, xp.offset, (Yp - 1) * Ap + 12),
              Wp = new DataView(Pp.buffer),
              yp = function(pp, ip) {
                const cp = function(pp) {
                    const ip = ii.get(pp);
                    if (void 0 !== ip && (null === ip || pp.isProgram(ip))) return ip;
                    Qp.inProbe = !0;
                    let cp = null;
                    try {
                      cp = Gp(pp, Kp, Vp, "fed", "the record feed")
                    } finally {
                      Qp.inProbe = !1
                    }
                    return ii.set(pp, cp), cp
                  }(pp),
                  Op = cp ? zp(pp, cp, ip, (() => {
                    pp.drawArraysInstanced(Up.POINTS, 0, 1, ip)
                  }), "decode probe input (the record feed)") : null;
                return Op ? new Uint32Array(Op.buffer) : null
              }(pp, Yp);
            yp || Sp.fed.failed++;
            const wp = zp(pp, Dp, 4 * Yp, (() => {
              pp.drawArraysInstanced(Up.POINTS, 0, 4, Yp)
            }));
            if (!wp) return;
            Sp.parts.set(Ip, (null !== Lp && void 0 !== Lp ? Lp : 0) + Yp);
            for (let Up = 0; Up < Yp; Up++) {
              const pp = Up * Ap,
                ip = [Wp.getUint32(pp, !0), Wp.getUint32(pp + 4, !0), Wp.getUint32(pp + 8, !0)],
                cp = yp ? [yp[3 * Up], yp[3 * Up + 1], yp[3 * Up + 2]] : ip;
              yp && (Sp.fed.records++, cp.some(((pp, cp) => pp !== ip[cp])) && (Sp.fed.differing++, Sp.fed.first.length < 8 && Sp.fed.first.push(`part ${Ip} instance ${Up}: fed ${cp.map(Si).join(" ")} buffer ${ip.map(Si).join(" ")}`)));
              for (let Op = 0; Op < 4; Op++) {
                const pp = 3 * (4 * Up + Op);
                Sp.vertices.push({
                  record: cp,
                  slot: Op,
                  group: Ip,
                  gpu: [wp[pp], wp[pp + 1], wp[pp + 2]]
                })
              }
            }
          }(pp, ip, cp, Op.byLocation, Ip, op, Sp)
        } else {
          const Op = ci(pp, ip, 16),
            Ip = ci(pp, ip, 8);
          for (const pp of [Op, Ip]) pp && Lp.pages.push({
            kind: "tex",
            texture: pp
          });
          Op && function(pp, ip, cp, Op, op, Ip) {
            if (Ip.parts.size >= jp) return;
            const Sp = gp(pp, ip, cp);
            if (!Sp) return;
            let xp = 6 * kp;
            const Lp = [];
            for (const [Wp, yp] of op) {
              const pp = Math.min(yp, xp, Math.max(6, 6 * Math.floor(kp / op.length)));
              pp > 0 && (Lp.push([Wp, pp]), xp -= pp)
            }
            const Yp = Lp.reduce(((pp, ip) => {
                let [, cp] = ip;
                return pp + cp
              }), 0),
              Dp = zp(pp, Sp, Yp, (() => {
                for (const [ip, cp] of Lp) pp.drawArrays(Up.POINTS, ip, cp)
              }));
            if (!Dp) return;
            let Ap = 0;
            for (const [Wp, yp] of Lp) {
              const ip = Math.floor(Wp / 6),
                cp = Math.floor((Wp + yp - 1) / 6) - ip + 1,
                op = Oi(pp, Op, ep, ip, cp);
              for (let pp = Wp; pp < Wp + yp; pp++, Ap++) {
                var Pp;
                const cp = 4 * (Math.floor(pp / 6) - ip),
                  Op = [op[cp], op[cp + 1], op[cp + 2]];
                Ip.parts.set(op[cp + 3], (null !== (Pp = Ip.parts.get(op[cp + 3])) && void 0 !== Pp ? Pp : 0) + (pp % 6 === 0 ? 1 : 0)), Ip.vertices.push({
                  record: Op,
                  slot: dp[pp % 6],
                  group: op[cp + 3],
                  gpu: [Dp[3 * Ap], Dp[3 * Ap + 1], Dp[3 * Ap + 2]]
                })
              }
            }
          }(pp, ip, cp, Op, op, Sp)
        }
      } catch (Dp) {
        hp(`decode probe failed on program ${Cp(cp)}: ${String(Dp)}`)
      }
    }

    function gp(pp, ip, cp) {
      if (void 0 !== cp.probe) return cp.probe && rp(pp, ip, cp.probe), cp.probe;
      cp.probe = null, Qp.inProbe = !0;
      try {
        cp.probe = function(pp, ip) {
          return Gp(pp, (cp = ip.vertex, cp.replace(`\nvec3 ${wp} = vec3(0);\n`, `\nout vec3 ${wp};\n`)), ip.fragment, wp, `program ${Cp(ip)}'s twin`);
          var cp
        }(pp, cp)
      } finally {
        Qp.inProbe = !1
      }
      return cp.probe && rp(pp, ip, cp.probe), cp.probe
    }

    function Gp(pp, ip, cp, Op, op) {
      const Ip = [pp.createShader(Up.VERTEX_SHADER), pp.createShader(Up.FRAGMENT_SHADER)],
        Sp = pp.createProgram();
      if (!Sp || !Ip[0] || !Ip[1]) return null;
      pp.shaderSource(Ip[0], ip), pp.shaderSource(Ip[1], cp);
      for (const Lp of Ip) pp.compileShader(Lp), pp.attachShader(Sp, Lp);
      pp.transformFeedbackVaryings(Sp, [Op], Up.INTERLEAVED_ATTRIBS), pp.linkProgram(Sp);
      for (const Lp of Ip) pp.deleteShader(Lp);
      var xp;
      return pp.getProgramParameter(Sp, Up.LINK_STATUS) ? Sp : (hp(`decode probe: ${op} failed to link: ${np(null!==(xp=pp.getProgramInfoLog(Sp))&&void 0!==xp?xp:"",300)}`), pp.deleteProgram(Sp), null)
    }

    function rp(pp, ip, cp) {
      const Op = pp.getProgramParameter(ip, Up.ACTIVE_UNIFORM_BLOCKS);
      for (let xp = 0; xp < Op; xp++) {
        const Op = pp.getActiveUniformBlockName(ip, xp),
          op = null === Op ? Up.INVALID_INDEX : pp.getUniformBlockIndex(cp, Op);
        op !== Up.INVALID_INDEX && pp.uniformBlockBinding(cp, op, pp.getActiveUniformBlockParameter(ip, xp, Up.UNIFORM_BLOCK_BINDING))
      }
      const op = pp.getParameter(Up.CURRENT_PROGRAM);
      pp.useProgram(cp);
      const Ip = pp.getProgramParameter(ip, Up.ACTIVE_UNIFORMS),
        Sp = pp.getActiveUniforms(ip, [...Array(Ip).keys()], Up.UNIFORM_BLOCK_INDEX);
      for (let xp = 0; xp < Ip; xp++) {
        const Op = pp.getActiveUniform(ip, xp);
        if (!Op || -1 !== Sp[xp]) continue;
        const op = Op.name.replace(/\[0\]$/, "");
        for (let Ip = 0; Ip < Op.size; Ip++) {
          const Sp = Op.size > 1 ? `${op}[${Ip}]` : Op.name,
            xp = pp.getUniformLocation(ip, Sp),
            Lp = pp.getUniformLocation(cp, Sp);
          xp && Lp && Zp(pp, Lp, Op.type, pp.getUniform(ip, xp))
        }
      }
      pp.useProgram(op)
    }

    function Zp(pp, ip, cp, Op) {
      const op = ArrayBuffer.isView(Op) ? Array.from(Op) : [Number(Op)];
      switch (cp) {
        case Up.FLOAT:
          return void pp.uniform1f(ip, op[0]);
        case Up.FLOAT_VEC2:
          return void pp.uniform2fv(ip, op);
        case Up.FLOAT_VEC3:
          return void pp.uniform3fv(ip, op);
        case Up.FLOAT_VEC4:
          return void pp.uniform4fv(ip, op);
        case Up.FLOAT_MAT3:
          return void pp.uniformMatrix3fv(ip, !1, op);
        case Up.FLOAT_MAT4:
          return void pp.uniformMatrix4fv(ip, !1, op);
        case Up.UNSIGNED_INT:
          return void pp.uniform1ui(ip, op[0]);
        case Up.UNSIGNED_INT_VEC2:
          return void pp.uniform2uiv(ip, op);
        case Up.UNSIGNED_INT_VEC3:
          return void pp.uniform3uiv(ip, op);
        case Up.UNSIGNED_INT_VEC4:
          return void pp.uniform4uiv(ip, op);
        case Up.INT_VEC2:
          return void pp.uniform2iv(ip, op);
        case Up.INT_VEC3:
          return void pp.uniform3iv(ip, op);
        case Up.INT_VEC4:
          return void pp.uniform4iv(ip, op);
        default:
          pp.uniform1i(ip, op[0])
      }
    }

    function zp(pp, ip, cp, Op) {
      let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const Ip = pp.getParameter(Up.CURRENT_PROGRAM),
        Sp = pp.getParameter(Up.TRANSFORM_FEEDBACK_BINDING),
        xp = pp.getParameter(Up.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        Lp = pp.getParameter(Up.COPY_READ_BUFFER_BINDING),
        Yp = pp.isEnabled(Up.RASTERIZER_DISCARD),
        Dp = pp.createTransformFeedback(),
        Ap = pp.createBuffer();
      Qp.inProbe = !0;
      try {
        const Ip = pp.getError();
        Ip !== Up.NO_ERROR && hp(`GL error 0x${Ip.toString(16)} pending before the decode probe (the renderer's)`), pp.useProgram(ip), pp.bindTransformFeedback(Up.TRANSFORM_FEEDBACK, Dp), pp.bindBuffer(Up.TRANSFORM_FEEDBACK_BUFFER, Ap), pp.bufferData(Up.TRANSFORM_FEEDBACK_BUFFER, 12 * cp, Up.STREAM_READ), pp.bindBufferBase(Up.TRANSFORM_FEEDBACK_BUFFER, 0, Ap), pp.enable(Up.RASTERIZER_DISCARD), pp.beginTransformFeedback(Up.POINTS), Op(), pp.endTransformFeedback(), pp.bindBufferBase(Up.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const Sp = pp.getError();
        if (Sp !== Up.NO_ERROR) return hp(`${op}: GL error 0x${Sp.toString(16)} on the feedback draw`), null;
        const xp = new Float32Array(3 * cp);
        return pp.bindBuffer(Up.COPY_READ_BUFFER, Ap), pp.getBufferSubData(Up.COPY_READ_BUFFER, 0, xp), xp
      } finally {
        Yp || pp.disable(Up.RASTERIZER_DISCARD), pp.bindTransformFeedback(Up.TRANSFORM_FEEDBACK, Sp), pp.bindBuffer(Up.TRANSFORM_FEEDBACK_BUFFER, xp), pp.bindBuffer(Up.COPY_READ_BUFFER, Lp), pp.deleteTransformFeedback(Dp), pp.deleteBuffer(Ap), pp.useProgram(Ip), Qp.inProbe = !1
      }
    }

    function sp(pp, ip, cp, Op) {
      const op = pp.getParameter(Up.COPY_READ_BUFFER_BINDING),
        Ip = new Uint8Array(Op);
      return pp.bindBuffer(Up.COPY_READ_BUFFER, ip), pp.getBufferSubData(Up.COPY_READ_BUFFER, cp, Ip), pp.bindBuffer(Up.COPY_READ_BUFFER, op), Ip
    }
    const Kp = `#version 300 es\nlayout(location = ${vp}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      Vp = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      ii = new WeakMap;

    function ci(pp, ip, cp) {
      const Op = pp.getProgramParameter(ip, Up.ACTIVE_UNIFORMS),
        op = pp.getParameter(Up.ACTIVE_TEXTURE);
      try {
        for (let op = 0; op < Op; op++) {
          const Op = pp.getActiveUniform(ip, op);
          if ((null === Op || void 0 === Op ? void 0 : Op.type) !== Up.UNSIGNED_INT_SAMPLER_2D) continue;
          const Ip = pp.getUniformLocation(ip, Op.name),
            Sp = Ip ? pp.getUniform(ip, Ip) : -1;
          if (Sp < 0) continue;
          pp.activeTexture(Up.TEXTURE0 + Sp);
          const xp = pp.getParameter(Up.TEXTURE_BINDING_2D);
          if (xp && lp.get(xp) === cp) return xp
        }
        return null
      } finally {
        pp.activeTexture(op)
      }
    }

    function Oi(pp, ip, cp, Op, op) {
      const Ip = new Uint32Array(4 * op),
        Sp = pp.getParameter(Up.READ_FRAMEBUFFER_BINDING),
        xp = pp.createFramebuffer();
      pp.bindFramebuffer(Up.READ_FRAMEBUFFER, xp), pp.framebufferTexture2D(Up.READ_FRAMEBUFFER, Up.COLOR_ATTACHMENT0, Up.TEXTURE_2D, ip, 0);
      try {
        let ip = 0;
        for (; ip < op;) {
          const Sp = Op + ip,
            xp = Sp % cp,
            Lp = Math.min(op - ip, cp - xp);
          pp.readPixels(xp, Math.floor(Sp / cp), Lp, 1, Up.RGBA_INTEGER, Up.UNSIGNED_INT, Ip.subarray(4 * ip, 4 * (ip + Lp))), ip += Lp
        }
      } finally {
        pp.bindFramebuffer(Up.READ_FRAMEBUFFER, Sp), pp.deleteFramebuffer(xp)
      }
      return Ip
    }

    function oi(pp, ip, cp) {
      let Op = 0,
        op = 0;
      for (let Lp = 0; Lp < ip.bytes.length; Lp += qp) {
        Op++;
        const pp = Math.min(Lp + qp, ip.bytes.length);
        Wp(ip.bytes.subarray(Lp, pp)) !== Wp(cp.subarray(Lp, pp)) && op++
      }
      const Ip = `${pp} ${ip.bytes.length} B cpu ${Wp(ip.bytes).toString(16)} gpu ${Wp(cp).toString(16)}, ${op}/${Op} blocks differ${ip.missed?`, ${ip.missed} GPU-side writes uncopied`:""}`;
      if (0 === op) return Ip;
      const {
        count: Sp,
        offsets: xp
      } = function(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const Op = Math.min(pp.length, ip.length);
        let op = Math.abs(pp.length - ip.length);
        const Ip = [];
        for (let Sp = 0; Sp < Op; Sp++) pp[Sp] !== ip[Sp] && (op++, Ip.length < cp && Ip.push(Sp));
        return {
          count: op,
          offsets: Ip
        }
      }(ip.bytes, cp);
      return ap([`${Ip}: ${Sp} bytes differ`, ...xp.map((pp => `  +${pp}: cpu ${yp(ip.bytes,pp)} | gpu ${yp(cp,pp)}`))].join("\n")), `${Ip}: ${Sp} bytes differ, first at ${xp.join(", ")} (context in the saved file)`
    }

    function Ii(pp) {
      if (0 === pp.vertices.length) return void hp(`decode probe (${pp.reason}): no terrain draw probed (${pp.draws.length} seen)`);
      const ip = function(pp) {
          const ip = new Map;
          for (const Op of pp) {
            const pp = ip.get(Op.group);
            pp ? pp.push(Op) : ip.set(Op.group, [Op])
          }
          const cp = {
            vertices: pp.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [Op, op] of ip) {
            const pp = new Map,
              ip = op.map((ip => {
                const cp = Dp(ip.record, ip.slot),
                  Op = [ip.gpu[0] - cp[0], ip.gpu[1] - cp[1], ip.gpu[2] - cp[2]],
                  op = Op.map((pp => Math.round(64 * pp))).join(","),
                  Ip = pp.get(op);
                return Ip ? Ip.count++ : pp.set(op, {
                  count: 1,
                  offset: Op
                }), cp
              }));
            let Ip = [0, 0, 0],
              Sp = 0;
            for (const cp of pp.values()) cp.count > Sp && (Sp = cp.count, Ip = cp.offset);
            cp.translations.set(Op, Ip), op.forEach(((pp, Op) => {
              var op;
              const Sp = [ip[Op][0] + Ip[0], ip[Op][1] + Ip[1], ip[Op][2] + Ip[2]];
              if (Sp.every(((ip, cp) => {
                  return Op = pp.gpu[cp], op = ip, Math.abs(Op - op) <= Math.max(.001, 1e-6 * Math.abs(op));
                  var Op, op
                }))) return;
              cp.mismatches++, cp.byDirection[xp(pp.record[2])]++, cp.byDiagonal[Lp(pp.record[2])]++;
              const Yp = Ap(pp.record);
              cp.byBand[Yp] = (null !== (op = cp.byBand[Yp]) && void 0 !== op ? op : 0) + 1, cp.first.length < Pp && cp.first.push({
                ...pp,
                expected: Sp
              })
            }))
          }
          return cp
        }(pp.vertices),
        cp = ip.byDirection.map(((pp, ip) => pp ? `${Sp[ip]} ${pp}` : "")).filter(Boolean).join(" "),
        Op = Object.entries(ip.byBand).map((pp => {
          let [ip, cp] = pp;
          return `${ip}: ${cp}`
        })).join(" ");
      if (hp(`decode probe (${pp.reason}): ${ip.mismatches}/${ip.vertices} vertices differ from the CPU decode over ${pp.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (ip.mismatches ? ` by direction [${cp}] diagonal [0: ${ip.byDiagonal[0]} 1: ${ip.byDiagonal[1]}] extent [${Op}]` : "")), pp.fed.records > 0 || pp.fed.failed > 0) {
        hp(`decode probe input: ${pp.fed.differing}/${pp.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (pp.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (pp.fed.failed ? `; the feed failed on ${pp.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const ip of pp.fed.first) hp(`  ${ip}`)
      }
      for (const op of ip.first) {
        const [pp, ip, cp] = op.record;
        hp(`  mismatch part ${op.group} r0 ${pp.toString(16)} r1 ${ip.toString(16)} r2 ${cp.toString(16)} slot ${op.slot} (${Sp[xp(cp)]}): expected ${op.expected.map(xi).join(",")} gpu ${op.gpu.map(xi).join(",")}`)
      }
      ap(`decode probe translations: ${[...ip.translations].map((pp=>{let[ip,cp]=pp;return`${ip}: ${cp.map(xi).join(",")}`})).join("; ")}`)
    }

    function Si(pp) {
      return pp.toString(16)
    }

    function xi(pp) {
      return Number.isInteger(pp) ? String(pp) : pp.toFixed(3)
    }

    function Li(pp) {
      return null !== Qp.pendingCheck ? Promise.resolve() : new Promise((ip => {
        let cp = !1;
        const Op = {
          reason: pp,
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
        Qp.pendingCheck = Op;
        const op = () => {
            Qp.pendingCheck = null;
            try {
              ! function(pp) {
                hp(`draw ranges (${pp.reason}): ${pp.terrainDraws} terrain draws in the frame, the first ${pp.draws.length} here`);
                for (const ip of pp.draws) {
                  const pp = ip.By.slice(0, 8).map((pp => {
                      let [ip, cp] = pp;
                      return `${ip}+${cp}`
                    })).join(" "),
                    cp = ip.By.length > 8 ? ` (+${ip.By.length-8} ranges)` : "";
                  hp(`  ${Cp(ip.program)} ${ip.program.terrain} ${ip.call} ${pp}${cp} x${ip.instances}${ip.group>=0?` part ${ip.group} chunk ${ip.chunk}`:""} | ${ip.attributes.join(" | ")}`)
                }
              }(Op), Ii(Op);
              Op.draws.some((pp => "undefined" !== typeof WebGL2RenderingContext && pp.gl instanceof WebGL2RenderingContext)) || 0 === Op.draws.length ? function(pp) {
                const ip = [],
                  cp = new Map;
                for (const Op of pp)
                  if ("undefined" !== typeof WebGL2RenderingContext && Op.gl instanceof WebGL2RenderingContext)
                    for (const pp of Op.pages) cp.set("buf" === pp.kind ? pp.buffer : pp.texture, {
                      page: pp,
                      gl: Op.gl
                    });
                for (const [Op, {
                    page: op,
                    gl: Ip
                  }] of cp) {
                  const pp = Xp.get(Op);
                  if (!pp) {
                    ip.push(`${op.kind}#${Np(Op)}: no CPU copy (${Qp.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === op.kind) {
                    ip.push(oi(`buf#${pp.id}`, pp, sp(Ip, op.buffer, 0, pp.bytes.length)));
                    continue
                  }
                  const cp = Oi(Ip, op.texture, pp.width, 0, pp.width * pp.height),
                    Sp = 16 === pp.texelBytes ? new Uint8Array(cp.buffer) : new Uint8Array(new Uint16Array(cp).buffer);
                  ip.push(oi(`tex#${pp.id} (${16===pp.texelBytes?"records":"light"})`, pp, Sp))
                }
                for (const Op of ip) hp(`page readback ${Op}`)
              }(Op.draws) : hp("page readback: none on WebGL1 (no buffer readback)")
            } catch (pp) {
              hp(`check failed: ${String(pp)}`)
            }
            ip()
          },
          Ip = () => {
            if (Op.draws.length > 0 && !cp) return cp = !0, void setTimeout(op, 0);
            cp || requestAnimationFrame(Ip)
          };
        requestAnimationFrame(Ip), setTimeout((() => {
          cp || (cp = !0, op())
        }), 5e3)
      }))
    }
    var Yi = cp(4791);
    const Di = 20,
      Ai = 24,
      Pi = Reflect.apply;

    function Wi(pp, ip, cp) {
      if (!pp) return;
      const Op = pp[ip];
      if ("function" === typeof Op) {
        const op = cp(Op);
        pp[ip] = op, (0, Yi.u)(op, Op)
      }
    }
    let yi = !1;
    const Ui = new WeakMap,
      wi = new WeakMap,
      vi = new WeakMap,
      ti = {
        gl: 0,
        lost: 0
      };
    let Hi = {
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
      di = {
        buffer: 0,
        texture: 0
      },
      ei = 0;

    function ui(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (pp instanceof ArrayBuffer) return new Uint8Array(pp, ip, cp || void 0);
      if (!ArrayBuffer.isView(pp)) return null;
      const Op = "BYTES_PER_ELEMENT" in pp ? pp.BYTES_PER_ELEMENT : 1,
        op = pp.byteOffset + ip * Op,
        Ip = cp ? cp * Op : pp.byteLength - ip * Op;
      return new Uint8Array(pp.buffer, op, Math.max(0, Ip))
    }

    function ji(pp, ip) {
      const cp = function(pp) {
        switch (pp) {
          case Up.ARRAY_BUFFER:
            return Up.ARRAY_BUFFER_BINDING;
          case Up.ELEMENT_ARRAY_BUFFER:
            return Up.ELEMENT_ARRAY_BUFFER_BINDING;
          case Up.COPY_READ_BUFFER:
            return Up.COPY_READ_BUFFER_BINDING;
          case Up.COPY_WRITE_BUFFER:
            return Up.COPY_WRITE_BUFFER_BINDING;
          case Up.UNIFORM_BUFFER:
            return Up.UNIFORM_BUFFER_BINDING;
          case Up.PIXEL_UNPACK_BUFFER:
            return Up.PIXEL_UNPACK_BUFFER_BINDING;
          case Up.TRANSFORM_FEEDBACK_BUFFER:
            return Up.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(ip);
      return cp ? pp.getParameter(cp) : null
    }

    function ki(pp) {
      const ip = Xp.get(pp);
      ip && (Qp.shadowBytes -= ip.bytes.length, Xp.delete(pp))
    }

    function mi(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      ki(pp), Qp.shadowBytes + ip > Rp ? Qp.uncopied++ : (Qp.shadowBytes += ip, Xp.set(pp, {
        id: Np(pp),
        bytes: new Uint8Array(ip),
        width: cp,
        height: Op,
        texelBytes: op,
        missed: 0
      }))
    }

    function Ri(pp, ip) {
      for (const cp of ["deleteBuffer", "deleteTexture"]) Wi(pp, cp, (pp => function() {
        for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
        return cp[0] && ki(cp[0]), Pi(pp, this, cp)
      }));
      Wi(pp, "shaderSource", (pp => function() {
        for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
        return cp[0] && "string" === typeof cp[1] && Ui.set(cp[0], cp[1]), Pi(pp, this, cp)
      })), Wi(pp, "attachShader", (pp => function() {
        for (var ip, cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
        const Ip = Op[0],
          Sp = null !== (ip = wi.get(Ip)) && void 0 !== ip ? ip : [];
        return Sp.push(Op[1]), wi.set(Ip, Sp), Pi(pp, this, Op)
      })), Wi(pp, "linkProgram", (pp => function() {
        for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
        const op = Pi(pp, this, cp);
        return Qp.inProbe || function(pp, ip) {
          var cp, Op, op;
          "undefined" !== typeof HTMLCanvasElement && pp.canvas instanceof HTMLCanvasElement && function(pp) {
            if (li.has(pp)) return;
            li.add(pp);
            for (const ip of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) pp.addEventListener(ip, (pp => {
              ti.lost < Di && (ti.lost++, hp(`${ip}${"statusMessage"in pp?`: ${String(pp.statusMessage)}`:""}`))
            }))
          }(pp.canvas);
          Qp.context ??= pp;
          const Ip = null !== (cp = wi.get(ip)) && void 0 !== cp ? cp : [];
          let Sp = "",
            xp = "";
          for (const Dp of Ip) {
            var Lp;
            const pp = null !== (Lp = Ui.get(Dp)) && void 0 !== Lp ? Lp : "";
            /\bgl_Position\b/.test(pp) ? Sp = pp : xp = pp
          }
          const Yp = {
            id: Np(ip),
            name: null !== (Op = null === (op = Mp.exec(Sp)) || void 0 === op ? void 0 : op[1]) && void 0 !== Op ? Op : null,
            gl: pp,
            vertex: Sp,
            fragment: xp,
            terrain: Mi(Sp),
            checked: !1,
            firstDraw: !1
          };
          if (vi.set(ip, Yp), Ep.push([ip, Yp]), null !== Yp.terrain) {
            const ip = Ip.map((ip => {
              var cp;
              return null !== (cp = pp.getShaderInfoLog(ip)) && void 0 !== cp ? cp : ""
            })).filter((pp => "" !== pp.trim()));
            ip.length > 0 && ap(`program ${Cp(Yp)} (${Yp.terrain}) shader logs:\n${np(ip.join("\n"))}`)
          }
        }(this, cp[0]), op
      })), Wi(pp, "bufferData", (pp => function() {
        for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
        const op = Pi(pp, this, cp);
        if (!Qp.inProbe) {
          const pp = ji(this, cp[0]);
          if (pp) {
            var Ip, Sp, xp;
            const ip = "number" === typeof cp[1] ? null : ui(cp[1], null !== (Ip = cp[3]) && void 0 !== Ip ? Ip : 0, null !== (Sp = cp[4]) && void 0 !== Sp ? Sp : 0);
            var Lp;
            if (mi(pp, "number" === typeof cp[1] ? cp[1] : null !== (xp = null === ip || void 0 === ip ? void 0 : ip.length) && void 0 !== xp ? xp : 0), ip) null === (Lp = Xp.get(pp)) || void 0 === Lp || Lp.bytes.set(ip)
          }
        }
        return op
      })), Wi(pp, "bufferSubData", (pp => function() {
        for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
        const op = Pi(pp, this, cp);
        if (!Qp.inProbe) {
          var Ip, Sp;
          const pp = ji(this, cp[0]),
            ip = pp ? Xp.get(pp) : void 0,
            Op = ui(cp[2], null !== (Ip = cp[3]) && void 0 !== Ip ? Ip : 0, null !== (Sp = cp[4]) && void 0 !== Sp ? Sp : 0);
          if (ip && Op) {
            const pp = cp[1];
            ip.bytes.set(Op.subarray(0, Math.max(0, ip.bytes.length - pp)), pp), qi("buffer", ip, pp, Op.length)
          }
        }
        return op
      })), ip && (Wi(pp, "copyBufferSubData", (pp => function() {
        for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
        const op = Pi(pp, this, cp);
        if (!Qp.inProbe) {
          const [pp, ip, Op, op, Ip] = cp, Sp = ji(this, pp), xp = ji(this, ip), Lp = Sp ? Xp.get(Sp) : void 0, Yp = xp ? Xp.get(xp) : void 0;
          Yp && (Lp ? Yp.bytes.set(Lp.bytes.slice(Op, Op + Ip), op) : Yp.missed++)
        }
        return op
      })), Wi(pp, "texStorage2D", (pp => function() {
        for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
        const op = Pi(pp, this, cp),
          [, , Ip, Sp, xp] = cp;
        if (!Qp.inProbe && (Ip === Up.RGBA32UI || Ip === Up.RGBA16UI)) {
          const pp = this.getParameter(Up.TEXTURE_BINDING_2D),
            ip = Ip === Up.RGBA32UI ? 16 : 8;
          pp && (lp.set(pp, ip), mi(pp, Sp * xp * ip, Sp, xp, ip))
        }
        return op
      })), Wi(pp, "texSubImage2D", (pp => function() {
        for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
        const op = Pi(pp, this, cp);
        return !Qp.inProbe && cp.length >= 9 && cp[0] === Up.TEXTURE_2D && 0 === cp[1] && function(pp, ip) {
          var cp;
          const Op = pp.getParameter(Up.TEXTURE_BINDING_2D),
            op = Op ? Xp.get(Op) : void 0;
          if (!op) return;
          const [, , Ip, Sp, xp, Lp] = ip;
          let Yp = ui(ip[8], null !== (cp = ip[9]) && void 0 !== cp ? cp : 0);
          if (null === Yp && "number" === typeof ip[8]) {
            const cp = ji(pp, Up.PIXEL_UNPACK_BUFFER),
              Op = cp ? Xp.get(cp) : void 0;
            Yp = Op ? Op.bytes.subarray(ip[8]) : null
          }
          if (null === Yp) return void op.missed++;
          const Dp = pp.getParameter(Up.UNPACK_ROW_LENGTH) || xp,
            Ap = pp.getParameter(Up.UNPACK_SKIP_ROWS),
            Pp = pp.getParameter(Up.UNPACK_SKIP_PIXELS),
            Wp = op.texelBytes;
          for (let yp = 0; yp < Lp; yp++) {
            const pp = ((Ap + yp) * Dp + Pp) * Wp,
              ip = ((Sp + yp) * op.width + Ip) * Wp;
            op.bytes.set(Yp.subarray(pp, pp + xp * Wp), ip)
          }
          qi("texture", op, (Sp * op.width + Ip) * Wp, xp * Lp * Wp)
        }(this, cp), op
      })), Wi(pp, "copyTexSubImage2D", (pp => function() {
        for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
        const op = cp[0] === Up.TEXTURE_2D ? this.getParameter(Up.TEXTURE_BINDING_2D) : null,
          Ip = op ? Xp.get(op) : void 0;
        return Ip && Ip.missed++, Pi(pp, this, cp)
      })));
      for (const cp of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) Wi(pp, cp, (pp => function() {
        for (var ip = arguments.length, Op = new Array(ip), op = 0; op < ip; op++) Op[op] = arguments[op];
        const Ip = Pi(pp, this, Op);
        return Qp.inProbe || Ei(this, cp, Op), Ip
      }));
      Wi(pp, "getExtension", (pp => function() {
        for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
        const op = Pi(pp, this, cp);
        return op && "object" === typeof op && function(pp, ip, cp) {
          const Op = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(ip in Op) || cp.bloxdRenderDebug) return;
          cp.bloxdRenderDebug = !0;
          for (const op of Op[ip]) {
            const ip = cp[op];
            "function" === typeof ip && (cp[op] = function() {
              for (var Op = arguments.length, Ip = new Array(Op), Sp = 0; Sp < Op; Sp++) Ip[Sp] = arguments[Sp];
              const xp = Pi(ip, cp, Ip);
              return Qp.inProbe || Ei(pp, op, Ip), xp
            })
          }
        }(this, cp[0], op), op
      }))
    }

    function qi(pp, ip, cp, Op) {
      di[pp] += Op, ei < 32 && ip.bytes.length >= 1 << 20 && (ei++, ap(`upload ${pp} #${ip.id} +${cp} ${Op} B`))
    }

    function Mi(pp) {
      if (!pp.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(pp) || /in uvec3 _p2vs_location0\b/.test(pp) ? "inst" : "tex"
    }

    function Ci(pp, ip, cp) {
      var Op;
      if (cp.checked) return;
      cp.checked = !0;
      const op = pp.getProgramParameter(ip, Up.LINK_STATUS),
        Ip = (null !== (Op = pp.getProgramInfoLog(ip)) && void 0 !== Op ? Op : "").trim();
      var Sp;
      null === cp.terrain && op || (hp(`program ${Cp(cp)} ${null!==(Sp=cp.terrain)&&void 0!==Sp?Sp:"other"} link ${op?"ok":"FAILED"}${Ip?`: ${np(Ip,300)}`:""}`), Ip && ap(`program ${Cp(cp)} link log:\n${np(Ip)}`))
    }

    function Ei(pp, ip, cp) {
      var Op;
      const op = pp.getParameter(Up.CURRENT_PROGRAM),
        Ip = op ? vi.get(op) : void 0;
      if (!op || !Ip) return;
      const Sp = null !== (Op = Ip.terrain) && void 0 !== Op ? Op : "other",
        {
          By: xp,
          instances: Lp
        } = function(pp, ip) {
          switch (pp) {
            case "drawArrays":
              return {
                By: [
                  [ip[1], ip[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                By: [
                  [ip[1], ip[2]]
                ], instances: ip[3]
              };
            case "drawElements":
              return {
                By: [
                  [0, ip[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                By: [
                  [0, ip[1]]
                ], instances: ip[4]
              };
            case "multiDrawArraysWEBGL": {
              const pp = ip[1],
                cp = ip[3],
                Op = ip[2],
                op = ip[4],
                Ip = [];
              for (let Sp = 0; Sp < ip[5]; Sp++) Ip.push([pp[Op + Sp], cp[op + Sp]]);
              return {
                By: Ip,
                instances: 1
              }
            }
            default:
              return {
                By: [], instances: 0
              }
          }
        }(ip, cp),
        Yp = "inst" === Ip.terrain ? Lp : xp.reduce(((pp, ip) => {
          let [, cp] = ip;
          return pp + cp
        }), 0) / 6;
      if (Hi[Sp].draws++, Hi[Sp].faces += Yp, null === Ip.terrain) return;
      if (Qp.context = pp, !Ip.firstDraw) {
        Ip.firstDraw = !0, Ci(pp, op, Ip), Xi || (Xi = !0, hp(function(pp) {
          var ip;
          const cp = pp.getParameter(Up.DEPTH_FUNC),
            Op = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let op = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in pp && pp.getParameter(Up.DRAW_FRAMEBUFFER_BINDING)) {
            const ip = pp;
            op = ip.getFramebufferAttachmentParameter(Up.DRAW_FRAMEBUFFER, Up.DEPTH_ATTACHMENT, Up.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(ip.getFramebufferAttachmentParameter(Up.DRAW_FRAMEBUFFER,Up.DEPTH_ATTACHMENT,Up.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(ip.getFramebufferAttachmentParameter(Up.DRAW_FRAMEBUFFER,Up.DEPTH_ATTACHMENT,Up.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const Ip = pp.getParameter(Up.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(ip=Op[cp])&&void 0!==ip?ip:`0x${cp.toString(16)}`} clear ${Ip}${516===cp||518===cp?" (reverse-Z)":""}, samples ${String(pp.getParameter(Up.SAMPLES))}, ${op}`
        }(pp)));
        const cp = pp.getError();
        cp !== Up.NO_ERROR && ti.gl < Di && (ti.gl++, hp(`GL error 0x${cp.toString(16)} after program ${Cp(Ip)}'s first terrain draw (${ip})`))
      }
      const Dp = Qp.pendingCheck;
      null !== Dp && (Dp.terrainDraws++, Dp.draws.length < Ai && Fp(pp, op, Ip, ip, xp, Lp))
    }
    let Xi = !1;
    const li = new WeakSet;
    var Qi = cp(4596),
      Ji = cp(4794);
    const Bi = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let Ni = !1;
    const Ti = new WeakSet,
      fi = new WeakMap,
      bi = new WeakMap,
      ai = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let ni = 0,
      Fi = !1,
      gi = null,
      Gi = {
        draws: 0,
        faces: 0
      };

    function ri(pp) {
      const ip = globalThis[pp];
      return null === ip || void 0 === ip ? void 0 : ip.prototype
    }

    function Zi(pp) {
      return pp && "function" === typeof pp[Symbol.iterator] ? [...pp].sort().join(" ") : ""
    }

    function zi(pp, ip) {
      const cp = null !== pp && void 0 !== pp ? pp : {},
        Op = null !== ip && void 0 !== ip ? ip : Object.keys(Object.getPrototypeOf(cp)).concat(Object.keys(cp));
      return [...new Set(Op)].filter((pp => "number" === typeof cp[pp])).map((pp => `${pp} ${String(cp[pp])}`)).join(", ")
    }

    function si(pp, ip) {
      var cp;
      const Op = null !== (cp = ip.vertex) && void 0 !== cp ? cp : {};
      if (Op.module && Ti.has(Op.module)) {
        var op;
        const cp = String(null !== (op = Op.entryPoint) && void 0 !== op ? op : "");
        if (cp.startsWith("vs_packed") && fi.set(pp, cp), !Fi) {
          var Ip, Sp, xp, Lp, Yp;
          Fi = !0;
          const pp = null !== (Ip = ip.depthStencil) && void 0 !== Ip ? Ip : {},
            Op = null !== (Sp = ip.multisample) && void 0 !== Sp ? Sp : {},
            op = String(null !== (xp = pp.depthCompare) && void 0 !== xp ? xp : "");
          hp(`WebGPU terrain pipeline ${cp}: depth ${String(null!==(Lp=pp.format)&&void 0!==Lp?Lp:"none")} ${op}${op.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(Yp=Op.count)&&void 0!==Yp?Yp:1)}`)
        }
      }
    }

    function Ki(pp) {
      Wi(pp, "setPipeline", (pp => function() {
        for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
        return bi.set(this, cp[0]), Pi(pp, this, cp)
      }));
      for (const ip of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) Wi(pp, ip, (pp => function() {
        const cp = bi.get(this),
          Op = cp ? fi.get(cp) : void 0;
        for (var op = arguments.length, Ip = new Array(op), Sp = 0; Sp < op; Sp++) Ip[Sp] = arguments[Sp];
        return void 0 !== Op && Vi(ip, Op, Ip), Pi(pp, this, Ip)
      }))
    }

    function Vi(pp, ip, cp) {
      var Op;
      (Gi.draws++, "draw" === pp || "drawIndexed" === pp) && (Gi.faces += cp[0] * (null !== (Op = cp[1]) && void 0 !== Op ? Op : 1) / 6);
      if (null !== gi && gi.length < Ai) {
        const Op = ("draw" === pp ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === pp ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((ip, Op) => {
          const op = pp.endsWith("Indirect") ? cp[1] : cp[Op];
          return `${ip} ${String(null!==op&&void 0!==op?op:"instances"===ip?1:0)}`
        }));
        gi.push(`  ${ip} ${pp} ${Op.join(" ")}`)
      }
    }

    function pc() {
      if (Ni || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      Ni = !0, Wi(ri("GPU"), "requestAdapter", (pp => function() {
        for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
        return Pi(pp, this, cp).then((pp => {
          var ip;
          pp ? function(pp) {
            var ip;
            const cp = null !== (ip = pp.info) && void 0 !== ip ? ip : {};
            hp(`WebGPU adapter ${["vendor","architecture","device","description"].map((pp=>{var ip;return`${pp} "${String(null!==(ip=cp[pp])&&void 0!==ip?ip:"")}"`})).join(" ")}${pp.isFallbackAdapter?" (fallback)":""}`), hp(`WebGPU adapter features ${Zi(pp.features)}`), hp(`WebGPU adapter limits ${zi(pp.limits,Bi)}`), ap(`WebGPU adapter all limits ${zi(pp.limits,null)}`)
          }(pp) : hp(`WebGPU requestAdapter(${JSON.stringify(null!==(ip=cp[0])&&void 0!==ip?ip:{})}) gave none`);
          return pp
        }))
      })), Wi(ri("GPUAdapter"), "requestDevice", (pp => function() {
        for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
        return Pi(pp, this, cp).then((pp => (function(pp) {
          hp(`WebGPU device features ${Zi(pp.features)}`), hp(`WebGPU device limits ${zi(pp.limits,Bi)}`), pp.addEventListener("uncapturederror", (pp => {
            if (ai.uncaptured < Di) {
              var ip, cp, Op;
              ai.uncaptured++;
              const op = pp.error;
              hp(`WebGPU uncaptured ${null!==(ip=null===op||void 0===op||null===(cp=op.constructor)||void 0===cp?void 0:cp.name)&&void 0!==ip?ip:"error"}: ${np(String(null!==(Op=null===op||void 0===op?void 0:op.message)&&void 0!==Op?Op:""),600)}`)
            }
          }));
          const ip = pp.lost;
          null === ip || void 0 === ip || ip.then((pp => {
            var ip;
            hp(`WebGPU device lost (${String(pp.reason)}): ${np(String(null!==(ip=pp.message)&&void 0!==ip?ip:""),600)}`)
          }))
        }(pp), pp)), (pp => {
          throw hp(`WebGPU requestDevice failed: ${String(pp)}`), pp
        }))
      }));
      const pp = ri("GPUDevice");
      Wi(pp, "createShaderModule", (pp => function() {
        for (var ip, cp, Op = arguments.length, op = new Array(Op), Ip = 0; Ip < Op; Ip++) op[Ip] = arguments[Ip];
        const Sp = Pi(pp, this, op);
        return function(pp, ip) {
          const cp = ip.includes("decodeQuad");
          cp && Ti.add(pp);
          const Op = pp.getCompilationInfo;
          null === Op || void 0 === Op || Op.call(pp).then((pp => {
            if (0 === pp.messages.length && !cp) return;
            const ip = {};
            for (const cp of pp.messages) {
              var Op;
              ip[String(cp.type)] = (null !== (Op = ip[String(cp.type)]) && void 0 !== Op ? Op : 0) + 1
            }
            const op = pp.messages.map((pp => `${String(pp.type)} ${String(pp.lineNum)}:${String(pp.linePos)} ${String(pp.message)}`)).join("\n");
            ai.compile < Di && (ai.compile++, hp(`WebGPU ${cp?"terrain ":""}shader module compiled: ${JSON.stringify(ip)}${op?` first: ${np(op.split("\n")[0],300)}`:""}`)), op && ap(`WebGPU shader module messages:\n${np(op)}`)
          }))
        }(Sp, String(null !== (ip = (null !== (cp = op[0]) && void 0 !== cp ? cp : {}).code) && void 0 !== ip ? ip : "")), Sp
      })), Wi(pp, "createRenderPipeline", (pp => function() {
        for (var ip, cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
        const Ip = Pi(pp, this, Op);
        return si(Ip, null !== (ip = Op[0]) && void 0 !== ip ? ip : {}), Ip
      })), Wi(pp, "createRenderPipelineAsync", (pp => function() {
        for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
        return Pi(pp, this, cp).then((pp => {
          var ip;
          return si(pp, null !== (ip = cp[0]) && void 0 !== ip ? ip : {}), pp
        }), (pp => {
          var ip;
          throw function(pp, ip) {
            var cp, Op, op;
            if (ai.rejected >= Di) return;
            ai.rejected++;
            const {
              reason: Ip,
              message: Sp
            } = null !== ip && void 0 !== ip ? ip : {}, xp = String(null !== (cp = (null !== (Op = pp.vertex) && void 0 !== Op ? Op : {}).entryPoint) && void 0 !== cp ? cp : "");
            hp(`WebGPU pipeline "${String(null!==(op=pp.label)&&void 0!==op?op:"")}" ${xp} rejected (${String(null!==Ip&&void 0!==Ip?Ip:"no reason")}): ${np(String(null!==Sp&&void 0!==Sp?Sp:ip),600)}`)
          }(null !== (ip = cp[0]) && void 0 !== ip ? ip : {}, pp), pp
        }))
      })), Wi(ri("GPUCanvasContext"), "configure", (pp => function() {
        for (var ip, cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
        const Ip = null !== (ip = Op[0]) && void 0 !== ip ? ip : {};
        var Sp, xp;
        ni++ < 3 && hp(`WebGPU canvas ${String(Ip.format)} ${String(null!==(Sp=Ip.colorSpace)&&void 0!==Sp?Sp:"srgb")} alpha ${String(null!==(xp=Ip.alphaMode)&&void 0!==xp?xp:"opaque")}`);
        return Pi(pp, this, Op)
      })), Ki(ri("GPURenderPassEncoder")), Ki(ri("GPURenderBundleEncoder"))
    }
    const ic = 1e4,
      cc = 6e4,
      Oc = 5e3,
      oc = 3e3,
      Ic = 100;
    let Sc = null,
      xc = !1,
      Lc = {
        ...Qi.d
      },
      Yc = !1,
      Dc = null,
      Ac = 0,
      Pc = () => {};
    const Wc = new Promise((pp => {
      Pc = pp
    }));

    function yc() {
      var pp;
      xc || (xc = !0, Lc = Object.assign(window.bloxdRenderDebug ??= {
        ...Qi.d
      }, {
        faceCull: "0" === (0, Ip.o)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (pp = (0, Ip.o)("adrenoProbe")) && void 0 !== pp ? pp : ""
      }), hp("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), yi || "undefined" === typeof window || (yi = !0, "undefined" !== typeof WebGL2RenderingContext && Ri(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && Ri(WebGLRenderingContext.prototype, !1)), pc(), (0, Ip.e)("renderProbe", (() => {
        dc("console")
      })), tc(), setInterval(uc, Oc))
    }

    function Uc(pp) {
      var ip, cp;
      yc(), Sc = null !== (ip = null === pp || void 0 === pp ? void 0 : pp.backend) && void 0 !== ip ? ip : null;
      const Op = `, renderer param ${null!==(cp=(0,Ip.o)("renderer"))&&void 0!==cp?cp:"none"}, faceCull ${"0"===Lc.faceCull?"off (whole parts)":"on"}, adrenoProbe ${Lc.adrenoProbe||"none"}`;
      hp(`${(0,Ji.e)(pp)}${null===pp?"":Op}`)
    }

    function wc() {
      const pp = performance.now(),
        ip = vc(Wc, ic, cc).then((ip => dc(`${Math.round((performance.now()-pp)/1e3)} s after playable${ip?"":", no terrain drawn yet"}`)));
      (0, op.c)(hp, (async () => {
        await ip, await Dc
      }))
    }
    async function vc(pp, ip, cp) {
      const op = (0, Op.e)(cp).then((() => !1));
      return await (0, Op.e)(ip), Promise.race([pp.then((() => !0)), op])
    }

    function tc() {
      requestAnimationFrame((() => {
        Ac++, tc()
      }))
    }

    function Hc() {
      var pp, ip, cp;
      if (Yc) return;
      (Yc = !0, hp(`renderer caps ${null!==(pp=Lc.caps)&&void 0!==pp?pp:"(not noted)"}; terrain fetch ${null!==(ip=Lc.fetch)&&void 0!==ip?ip:"(not noted)"}`), Lc.adrenoProbe) && hp(`adrenoProbe ${Lc.adrenoProbe} asked; in force (storage fetch only): ${null!==(cp=Lc.probe)&&void 0!==cp?cp:"(not noted)"}`);
      const Op = Qp.context;
      if (Op) {
        for (const pp of function(pp) {
            var ip;
            const cp = [],
              Op = pp.getExtension("WEBGL_debug_renderer_info"),
              op = Op ? pp.getParameter(Op.UNMASKED_VENDOR_WEBGL) : "(masked)",
              Ip = Op ? pp.getParameter(Op.UNMASKED_RENDERER_WEBGL) : "(masked)";
            cp.push(`GL ${String(pp.getParameter(pp.VERSION))} | ${String(pp.getParameter(pp.SHADING_LANGUAGE_VERSION))} | ${String(pp.getParameter(pp.VENDOR))} / ${String(pp.getParameter(pp.RENDERER))}`), cp.push(`GL unmasked ${op} / ${Ip}`);
            const Sp = [
              ["MAX_TEXTURE_SIZE", pp.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", pp.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", pp.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", pp.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", pp.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", pp.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", pp.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in pp && Sp.push(["MAX_UNIFORM_BLOCK_SIZE", pp.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", pp.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", pp.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", pp.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), cp.push(`GL limits ${Sp.map((ip=>{let[cp,Op]=ip;return`${cp} ${String(pp.getParameter(Op))}`})).join(", ")}`);
            const xp = (ip, cp) => {
              const Op = pp.getShaderPrecisionFormat(ip, pp.HIGH_FLOAT),
                op = pp.getShaderPrecisionFormat(ip, pp.HIGH_INT);
              return `${cp} highp float ${Op?`${Op.rangeMin}/${Op.rangeMax}/${Op.precision}`:"?"} int ${op?`${op.rangeMin}/${op.rangeMax}/${op.precision}`:"?"}`
            };
            cp.push(`GL precision ${xp(pp.VERTEX_SHADER,"VS")}, ${xp(pp.FRAGMENT_SHADER,"FS")}`);
            const Lp = pp.getContextAttributes();
            return cp.push(`GL context ${JSON.stringify(Lp)} drawingBuffer ${pp.drawingBufferWidth}x${pp.drawingBufferHeight}${"drawingBufferFormat"in pp?` format 0x${Number(pp.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in pp?` ${String(pp.drawingBufferColorSpace)}`:""}`), cp.push(`GL extensions ${(null!==(ip=pp.getSupportedExtensions())&&void 0!==ip?ip:[]).join(" ")}`), cp
          }(Op)) hp(pp);
        ! function() {
          if (!Qp.context) return;
          let pp = 0,
            ip = 0;
          for (const [cp, Op] of Ep) !Op.gl.isContextLost() && Op.gl.isProgram(cp) && (ip++, Ci(Op.gl, cp, Op), null !== Op.terrain && pp++);
          hp(`programs: ${ip} live of ${Ep.length} linked, ${pp} packed terrain; CPU page copies ${Math.round(Qp.shadowBytes/1048576)} MiB (${Qp.uncopied} over budget)`)
        }()
      }
    }

    function dc(pp) {
      return Dc ??= async function(pp) {
        Hc(), "webgpu" === Sc ? (ec(), "1" === Lc.slotCheck && hp("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), Lc.slotCheck = "1", await
          function(pp) {
            if (null !== gi) return Promise.resolve();
            const ip = [];
            return gi = ip, new Promise((cp => {
              setTimeout((() => {
                gi = null, hp(`WebGPU draw ranges (${pp}): ${ip.length} terrain draws recorded in a second (first ${Ai}; bundles replay without new ones)`);
                for (const pp of ip) hp(pp);
                cp()
              }), 1e3)
            }))
          }(pp), await async function() {
            if (await (0, Qi.i)(Lc, "slotCheck", ["1"], oc, Ic), "1" === Lc.slotCheck) return void hp(`slot check: no answer in ${oc} ms (only the storage fetch has one; a later answer logs on its own)`);
            ec()
          }()) : await Li(pp);
        hp(`check (${pp}) done: bloxdDebug.save() downloads it all`)
      }(pp).catch((ip => {
        hp(`check (${pp}) failed: ${String(ip)}`)
      })).finally((() => {
        Dc = null
      })), Dc
    }

    function ec() {
      void 0 !== Lc.slotCheck && "1" !== Lc.slotCheck && (hp(Lc.slotCheck), delete Lc.slotCheck)
    }

    function uc() {
      const pp = pp => Ac ? (pp / Ac).toFixed(1) : "0",
        ip = function() {
          const pp = Gi;
          return Gi = {
            draws: 0,
            faces: 0
          }, pp
        }(),
        cp = function() {
          const pp = Hi;
          return Hi = {
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
          }, pp
        }(),
        Op = function() {
          const pp = di;
          return di = {
            buffer: 0,
            texture: 0
          }, pp
        }();
      ec(), ("webgpu" === Sc ? ip.draws : cp.inst.draws + cp.tex.draws) > 0 && Pc();
      const op = "webgpu" === Sc ? [`terrain ${pp(ip.draws)} draws ${pp(ip.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((pp => cp[pp].draws > 0)).map((ip => `${ip} ${pp(cp[ip].draws)} draws ${pp(cp[ip].faces)} faces a frame`));
      hp(`${Ac} frames: ${op.join(", ")||"no draws"}; uploaded ${Math.round(Op.buffer/1024)} KiB to buffers, ${Math.round(Op.texture/1024)} KiB to data textures`), Ac = 0
    }
  },
  4794: (pp, ip, cp) => {
    function Op(pp) {
      if (null === pp) return "backend: none picked (no renderer build)";
      const ip = pp.adapter ? `${pp.adapter.vendor}/${pp.adapter.architecture}` : "none";
      return `backend ${pp.backend}: reason ${pp.reason}, source ${pp.source}, adapter ${ip}`
    }
    cp.d(ip, {
      e: () => Op
    })
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);