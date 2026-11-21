export const id = 47;
export const ids = [47];
export const modules = {
  4557: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Kd
    });
    var pd = kd(22),
      Nd = kd(29),
      Wd = kd(1307),
      Pd = kd(2704);
    const Zd = 3e4,
      gd = 1e3;

    function Cd() {
      return "visible" === document.visibilityState && "inGame" === pd.d.get("gameState") && (0, Wd.s)()
    }

    function Kd(dd, Jd) {
      (0, Pd.o)() || function(dd, Jd, kd) {
        let pd = 0;
        const Nd = setInterval((() => {
          Jd() && (pd += gd, pd >= dd && (clearInterval(Nd), kd()))
        }), gd)
      }(Zd, Cd, (() => {
        Jd().then((() => {
          dd(`saved for the player after ${Zd/1e3} s of play`), (0, Pd.u)(), Nd.j.nO("chat", {
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
  4552: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      installRenderDebug: () => Qk,
      renderDebugPlayable: () => Ok,
      startRenderDebug: () => Lk,
      waitForDraw: () => ek
    });
    var pd = kd(1822),
      Nd = kd(4557),
      Wd = kd(2704);
    const Pd = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function Zd(dd) {
      return 7 & dd
    }

    function gd(dd) {
      return dd >>> 11 & 1
    }

    function Cd(dd) {
      return [1 + (dd >>> 18 & 63), 1 + (dd >>> 24 & 63)]
    }

    function Kd(dd, Jd) {
      const [kd, , pd] = dd, Nd = Zd(pd), Wd = function(dd, Jd, kd) {
        return Jd + (1 === (22 >>> dd & 1) ? 4 - kd : kd) & 3
      }(Nd, gd(pd), Jd), Pd = Nd >>> 1, [Kd, od] = Cd(kd), ld = 1 === Wd || 2 === Wd ? Kd : 0, Qd = Wd >= 2 ? od : 0, Ld = [63 & kd, kd >>> 6 & 63, kd >>> 12 & 63];
      return Ld[2 === Pd ? 0 : 2] += ld, Ld[1 === Pd ? 0 : 1] += Qd, Ld
    }

    function od(dd) {
      const Jd = Math.max(...Cd(dd[0]));
      return 1 === Jd ? "1" : Jd <= 4 ? "2-4" : Jd <= 16 ? "5-16" : "17-64"
    }
    const ld = 16;

    function Qd(dd) {
      let Jd = 2166136261;
      for (let kd = 0; kd < dd.length; kd++) Jd = Math.imul(Jd ^ dd[kd], 16777619);
      return Jd >>> 0
    }

    function Ld(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const pd = Math.max(0, Jd - kd),
        Nd = Math.min(dd.length, Jd + kd),
        Wd = [];
      for (let Pd = pd; Pd < Nd; Pd++) {
        const kd = dd[Pd].toString(16).padStart(2, "0");
        Wd.push(Pd === Jd ? `[${kd}]` : kd)
      }
      return Wd.join(" ")
    }
    const Od = {
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
      ed = "_vs2fs_location0",
      Rd = 0,
      Id = 4,
      Gd = 6,
      vd = [0, 1, 2, 0, 2, 3],
      xd = 2048,
      qd = 4,
      Bd = 256,
      sd = 64,
      ad = 268435456,
      Md = 65536,
      Fd = /^#version [^\n]*\/\/ program (\S+)$/m;

    function Yd(dd) {
      return null === dd.name ? `#${dd.id}` : `#${dd.id} ${dd.name}`
    }
    const md = [],
      bd = new WeakMap,
      Sd = new WeakMap,
      jd = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let Xd = 1;
    const fd = new WeakMap;

    function nd(dd) {
      if (null === dd) return 0;
      let Jd = fd.get(dd);
      return void 0 === Jd && (Jd = Xd++, fd.set(dd, Jd)), Jd
    }
    class Ud {
      constructor(dd, Jd) {
        this.print = dd, this.now = Jd, this.shown = 0, this.EC = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.qQ = [], this.dropped = 0
      }
      line(dd) {
        const Jd = this.now();
        if (Jd - this.second >= 1e3 && (this.second = Jd, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.EC++, void this.store(dd);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${dd} (the last line here: the rest go to bloxdDebug.save())` : dd)
      }
      keep(dd) {
        this.sections++, this.store(dd)
      }
      store(dd) {
        this.qQ.push(`${new Date(Date.now()).toISOString()} ${dd}`), this.qQ.length > 2e4 && (this.qQ.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.EC} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.qQ].join("\n")
      }
    }
    let yd = null;

    function Dd() {
      if (null === yd) {
        const dd = new Ud((dd => {
          (0, Wd.h)("render", dd)
        }), (() => performance.now()));
        (0, Wd.g)("render", (() => dd.dump())), yd = dd
      }
      return yd
    }

    function Td(dd) {
      Dd().line(dd)
    }

    function Ed(dd) {
      Dd().keep(dd)
    }

    function cd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return dd.length <= Jd ? dd : `${dd.slice(0,Jd)}... (${dd.length-Jd} more characters)`
    }

    function hd(dd, Jd, kd, pd, Nd, Wd) {
      const Pd = jd.pendingCheck;
      if (null === Pd) return;
      const Zd = "undefined" !== typeof WebGL2RenderingContext && dd instanceof WebGL2RenderingContext,
        gd = {
          gl: dd,
          program: kd,
          call: pd,
          UO: Nd,
          instances: Wd,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (Pd.draws.push(gd), Zd) try {
        const pd = function(dd) {
          const Jd = [],
            kd = new Map,
            pd = Math.min(16, dd.getParameter(Od.MAX_VERTEX_ATTRIBS));
          for (let Nd = 0; Nd < pd; Nd++) {
            if (!dd.getVertexAttrib(Nd, Od.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const pd = dd.getVertexAttrib(Nd, Od.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              Wd = dd.getVertexAttribOffset(Nd, Od.VERTEX_ATTRIB_ARRAY_POINTER),
              Pd = dd.getVertexAttrib(Nd, Od.VERTEX_ATTRIB_ARRAY_STRIDE),
              Zd = dd.getVertexAttrib(Nd, Od.VERTEX_ATTRIB_ARRAY_SIZE),
              gd = dd.getVertexAttrib(Nd, Od.VERTEX_ATTRIB_ARRAY_TYPE),
              Cd = "VERTEX_ATTRIB_ARRAY_INTEGER" in dd && dd.getVertexAttrib(Nd, Od.VERTEX_ATTRIB_ARRAY_INTEGER),
              Kd = "VERTEX_ATTRIB_ARRAY_DIVISOR" in dd ? dd.getVertexAttrib(Nd, Od.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            kd.set(Nd, {
              buffer: pd,
              offset: Wd,
              stride: Pd
            }), Jd.push(`@${Nd} buf#${nd(pd)} +${Wd} stride ${Pd} ${Zd}x0x${gd.toString(16)}${Cd?" int":""} div ${Kd}`)
          }
          return {
            lines: Jd,
            byLocation: kd
          }
        }(dd);
        if (gd.attributes = pd.lines, "inst" === kd.terrain) {
          const {
            group: Nd,
            chunk: Zd
          } = function(dd, Jd, kd) {
            const pd = Jd.get(Gd),
              Nd = dd.getVertexAttrib(Gd, Od.CURRENT_VERTEX_ATTRIB),
              Wd = pd ? `+${pd.offset}` : Nd ? Array.from(Nd).slice(0, 3).join(",") : "?";
            let Pd = kd.groups.get(Wd);
            return void 0 === Pd && (Pd = kd.groups.size, kd.groups.set(Wd, Pd)), {
              group: Pd,
              chunk: Wd
            }
          }(dd, pd.byLocation, Pd);
          gd.group = Nd, gd.chunk = Zd;
          for (const dd of [Rd, Id]) {
            var Cd;
            const Jd = null === (Cd = pd.byLocation.get(dd)) || void 0 === Cd ? void 0 : Cd.buffer;
            Jd && gd.pages.push({
              kind: "buf",
              buffer: Jd
            })
          }! function(dd, Jd, kd, pd, Nd, Wd, Pd) {
            const Zd = pd.get(Rd),
              gd = Pd.parts.get(Wd);
            if (void 0 === gd && Pd.parts.size >= qd) return;
            const Cd = Math.min(Nd, sd, Bd - (null !== gd && void 0 !== gd ? gd : 0));
            if (null === Zd || void 0 === Zd || !Zd.buffer || Cd <= 0) return;
            const Kd = rd(dd, Jd, kd);
            if (!Kd) return;
            const od = Zd.stride || 12,
              ld = Hd(dd, Zd.buffer, Zd.offset, (Cd - 1) * od + 12),
              Qd = new DataView(ld.buffer),
              Ld = function(dd, Jd) {
                const kd = function(dd) {
                    const Jd = dJ.get(dd);
                    if (void 0 !== Jd && (null === Jd || dd.isProgram(Jd))) return Jd;
                    jd.inProbe = !0;
                    let kd = null;
                    try {
                      kd = ud(dd, wd, Ad, "fed", "the record feed")
                    } finally {
                      jd.inProbe = !1
                    }
                    return dJ.set(dd, kd), kd
                  }(dd),
                  pd = kd ? zd(dd, kd, Jd, (() => {
                    dd.drawArraysInstanced(Od.POINTS, 0, 1, Jd)
                  }), "decode probe input (the record feed)") : null;
                return pd ? new Uint32Array(pd.buffer) : null
              }(dd, Cd);
            Ld || Pd.fed.failed++;
            const ed = zd(dd, Kd, 4 * Cd, (() => {
              dd.drawArraysInstanced(Od.POINTS, 0, 4, Cd)
            }));
            if (!ed) return;
            Pd.parts.set(Wd, (null !== gd && void 0 !== gd ? gd : 0) + Cd);
            for (let Od = 0; Od < Cd; Od++) {
              const dd = Od * od,
                Jd = [Qd.getUint32(dd, !0), Qd.getUint32(dd + 4, !0), Qd.getUint32(dd + 8, !0)],
                kd = Ld ? [Ld[3 * Od], Ld[3 * Od + 1], Ld[3 * Od + 2]] : Jd;
              Ld && (Pd.fed.records++, kd.some(((dd, kd) => dd !== Jd[kd])) && (Pd.fed.differing++, Pd.fed.first.length < 8 && Pd.fed.first.push(`part ${Wd} instance ${Od}: fed ${kd.map(WJ).join(" ")} buffer ${Jd.map(WJ).join(" ")}`)));
              for (let pd = 0; pd < 4; pd++) {
                const dd = 3 * (4 * Od + pd);
                Pd.vertices.push({
                  record: kd,
                  slot: pd,
                  group: Wd,
                  gpu: [ed[dd], ed[dd + 1], ed[dd + 2]]
                })
              }
            }
          }(dd, Jd, kd, pd.byLocation, Wd, Nd, Pd)
        } else {
          const pd = JJ(dd, Jd, 16),
            Wd = JJ(dd, Jd, 8);
          for (const dd of [pd, Wd]) dd && gd.pages.push({
            kind: "tex",
            texture: dd
          });
          pd && function(dd, Jd, kd, pd, Nd, Wd) {
            if (Wd.parts.size >= qd) return;
            const Pd = rd(dd, Jd, kd);
            if (!Pd) return;
            let Zd = 6 * Bd;
            const gd = [];
            for (const [Qd, Ld] of Nd) {
              const dd = Math.min(Ld, Zd, Math.max(6, 6 * Math.floor(Bd / Nd.length)));
              dd > 0 && (gd.push([Qd, dd]), Zd -= dd)
            }
            const Cd = gd.reduce(((dd, Jd) => {
                let [, kd] = Jd;
                return dd + kd
              }), 0),
              Kd = zd(dd, Pd, Cd, (() => {
                for (const [Jd, kd] of gd) dd.drawArrays(Od.POINTS, Jd, kd)
              }));
            if (!Kd) return;
            let od = 0;
            for (const [Qd, Ld] of gd) {
              const Jd = Math.floor(Qd / 6),
                kd = Math.floor((Qd + Ld - 1) / 6) - Jd + 1,
                Nd = kJ(dd, pd, xd, Jd, kd);
              for (let dd = Qd; dd < Qd + Ld; dd++, od++) {
                var ld;
                const kd = 4 * (Math.floor(dd / 6) - Jd),
                  pd = [Nd[kd], Nd[kd + 1], Nd[kd + 2]];
                Wd.parts.set(Nd[kd + 3], (null !== (ld = Wd.parts.get(Nd[kd + 3])) && void 0 !== ld ? ld : 0) + (dd % 6 === 0 ? 1 : 0)), Wd.vertices.push({
                  record: pd,
                  slot: vd[dd % 6],
                  group: Nd[kd + 3],
                  gpu: [Kd[3 * od], Kd[3 * od + 1], Kd[3 * od + 2]]
                })
              }
            }
          }(dd, Jd, kd, pd, Nd, Pd)
        }
      } catch (Kd) {
        Td(`decode probe failed on program ${Yd(kd)}: ${String(Kd)}`)
      }
    }

    function rd(dd, Jd, kd) {
      if (void 0 !== kd.probe) return kd.probe && td(dd, Jd, kd.probe), kd.probe;
      kd.probe = null, jd.inProbe = !0;
      try {
        kd.probe = function(dd, Jd) {
          return ud(dd, Jd.vertex, Jd.fragment, ed, `program ${Yd(Jd)}'s twin`)
        }(dd, kd)
      } finally {
        jd.inProbe = !1
      }
      return kd.probe && td(dd, Jd, kd.probe), kd.probe
    }

    function ud(dd, Jd, kd, pd, Nd) {
      const Wd = [dd.createShader(Od.VERTEX_SHADER), dd.createShader(Od.FRAGMENT_SHADER)],
        Pd = dd.createProgram();
      if (!Pd || !Wd[0] || !Wd[1]) return null;
      dd.shaderSource(Wd[0], Jd), dd.shaderSource(Wd[1], kd);
      for (const gd of Wd) dd.compileShader(gd), dd.attachShader(Pd, gd);
      dd.transformFeedbackVaryings(Pd, [pd], Od.INTERLEAVED_ATTRIBS), dd.linkProgram(Pd);
      for (const gd of Wd) dd.deleteShader(gd);
      var Zd;
      return dd.getProgramParameter(Pd, Od.LINK_STATUS) ? Pd : (Td(`decode probe: ${Nd} failed to link: ${cd(null!==(Zd=dd.getProgramInfoLog(Pd))&&void 0!==Zd?Zd:"",300)}`), dd.deleteProgram(Pd), null)
    }

    function td(dd, Jd, kd) {
      const pd = dd.getProgramParameter(Jd, Od.ACTIVE_UNIFORM_BLOCKS);
      for (let Zd = 0; Zd < pd; Zd++) {
        const pd = dd.getActiveUniformBlockName(Jd, Zd),
          Nd = null === pd ? Od.INVALID_INDEX : dd.getUniformBlockIndex(kd, pd);
        Nd !== Od.INVALID_INDEX && dd.uniformBlockBinding(kd, Nd, dd.getActiveUniformBlockParameter(Jd, Zd, Od.UNIFORM_BLOCK_BINDING))
      }
      const Nd = dd.getParameter(Od.CURRENT_PROGRAM);
      dd.useProgram(kd);
      const Wd = dd.getProgramParameter(Jd, Od.ACTIVE_UNIFORMS),
        Pd = dd.getActiveUniforms(Jd, [...Array(Wd).keys()], Od.UNIFORM_BLOCK_INDEX);
      for (let Zd = 0; Zd < Wd; Zd++) {
        const pd = dd.getActiveUniform(Jd, Zd);
        if (!pd || -1 !== Pd[Zd]) continue;
        const Nd = pd.name.replace(/\[0\]$/, "");
        for (let Wd = 0; Wd < pd.size; Wd++) {
          const Pd = pd.size > 1 ? `${Nd}[${Wd}]` : pd.name,
            Zd = dd.getUniformLocation(Jd, Pd),
            gd = dd.getUniformLocation(kd, Pd);
          Zd && gd && Vd(dd, gd, pd.type, dd.getUniform(Jd, Zd))
        }
      }
      dd.useProgram(Nd)
    }

    function Vd(dd, Jd, kd, pd) {
      const Nd = ArrayBuffer.isView(pd) ? Array.from(pd) : [Number(pd)];
      switch (kd) {
        case Od.FLOAT:
          return void dd.uniform1f(Jd, Nd[0]);
        case Od.FLOAT_VEC2:
          return void dd.uniform2fv(Jd, Nd);
        case Od.FLOAT_VEC3:
          return void dd.uniform3fv(Jd, Nd);
        case Od.FLOAT_VEC4:
          return void dd.uniform4fv(Jd, Nd);
        case Od.FLOAT_MAT3:
          return void dd.uniformMatrix3fv(Jd, !1, Nd);
        case Od.FLOAT_MAT4:
          return void dd.uniformMatrix4fv(Jd, !1, Nd);
        case Od.UNSIGNED_INT:
          return void dd.uniform1ui(Jd, Nd[0]);
        case Od.UNSIGNED_INT_VEC2:
          return void dd.uniform2uiv(Jd, Nd);
        case Od.UNSIGNED_INT_VEC3:
          return void dd.uniform3uiv(Jd, Nd);
        case Od.UNSIGNED_INT_VEC4:
          return void dd.uniform4uiv(Jd, Nd);
        case Od.INT_VEC2:
          return void dd.uniform2iv(Jd, Nd);
        case Od.INT_VEC3:
          return void dd.uniform3iv(Jd, Nd);
        case Od.INT_VEC4:
          return void dd.uniform4iv(Jd, Nd);
        default:
          dd.uniform1i(Jd, Nd[0])
      }
    }

    function zd(dd, Jd, kd, pd) {
      let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const Wd = dd.getParameter(Od.CURRENT_PROGRAM),
        Pd = dd.getParameter(Od.TRANSFORM_FEEDBACK_BINDING),
        Zd = dd.getParameter(Od.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        gd = dd.getParameter(Od.COPY_READ_BUFFER_BINDING),
        Cd = dd.isEnabled(Od.RASTERIZER_DISCARD),
        Kd = dd.createTransformFeedback(),
        od = dd.createBuffer();
      jd.inProbe = !0;
      try {
        const Wd = dd.getError();
        Wd !== Od.NO_ERROR && Td(`GL error 0x${Wd.toString(16)} pending before the decode probe (the renderer's)`), dd.useProgram(Jd), dd.bindTransformFeedback(Od.TRANSFORM_FEEDBACK, Kd), dd.bindBuffer(Od.TRANSFORM_FEEDBACK_BUFFER, od), dd.bufferData(Od.TRANSFORM_FEEDBACK_BUFFER, 12 * kd, Od.STREAM_READ), dd.bindBufferBase(Od.TRANSFORM_FEEDBACK_BUFFER, 0, od), dd.enable(Od.RASTERIZER_DISCARD), dd.beginTransformFeedback(Od.POINTS), pd(), dd.endTransformFeedback(), dd.bindBufferBase(Od.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const Pd = dd.getError();
        if (Pd !== Od.NO_ERROR) return Td(`${Nd}: GL error 0x${Pd.toString(16)} on the feedback draw`), null;
        const Zd = new Float32Array(3 * kd);
        return dd.bindBuffer(Od.COPY_READ_BUFFER, od), dd.getBufferSubData(Od.COPY_READ_BUFFER, 0, Zd), Zd
      } finally {
        Cd || dd.disable(Od.RASTERIZER_DISCARD), dd.bindTransformFeedback(Od.TRANSFORM_FEEDBACK, Pd), dd.bindBuffer(Od.TRANSFORM_FEEDBACK_BUFFER, Zd), dd.bindBuffer(Od.COPY_READ_BUFFER, gd), dd.deleteTransformFeedback(Kd), dd.deleteBuffer(od), dd.useProgram(Wd), jd.inProbe = !1
      }
    }

    function Hd(dd, Jd, kd, pd) {
      const Nd = dd.getParameter(Od.COPY_READ_BUFFER_BINDING),
        Wd = new Uint8Array(pd);
      return dd.bindBuffer(Od.COPY_READ_BUFFER, Jd), dd.getBufferSubData(Od.COPY_READ_BUFFER, kd, Wd), dd.bindBuffer(Od.COPY_READ_BUFFER, Nd), Wd
    }
    const wd = `#version 300 es\nlayout(location = ${Rd}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      Ad = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      dJ = new WeakMap;

    function JJ(dd, Jd, kd) {
      const pd = dd.getProgramParameter(Jd, Od.ACTIVE_UNIFORMS),
        Nd = dd.getParameter(Od.ACTIVE_TEXTURE);
      try {
        for (let Nd = 0; Nd < pd; Nd++) {
          const pd = dd.getActiveUniform(Jd, Nd);
          if ((null === pd || void 0 === pd ? void 0 : pd.type) !== Od.UNSIGNED_INT_SAMPLER_2D) continue;
          const Wd = dd.getUniformLocation(Jd, pd.name),
            Pd = Wd ? dd.getUniform(Jd, Wd) : -1;
          if (Pd < 0) continue;
          dd.activeTexture(Od.TEXTURE0 + Pd);
          const Zd = dd.getParameter(Od.TEXTURE_BINDING_2D);
          if (Zd && Sd.get(Zd) === kd) return Zd
        }
        return null
      } finally {
        dd.activeTexture(Nd)
      }
    }

    function kJ(dd, Jd, kd, pd, Nd) {
      const Wd = new Uint32Array(4 * Nd),
        Pd = dd.getParameter(Od.READ_FRAMEBUFFER_BINDING),
        Zd = dd.createFramebuffer();
      dd.bindFramebuffer(Od.READ_FRAMEBUFFER, Zd), dd.framebufferTexture2D(Od.READ_FRAMEBUFFER, Od.COLOR_ATTACHMENT0, Od.TEXTURE_2D, Jd, 0);
      try {
        let Jd = 0;
        for (; Jd < Nd;) {
          const Pd = pd + Jd,
            Zd = Pd % kd,
            gd = Math.min(Nd - Jd, kd - Zd);
          dd.readPixels(Zd, Math.floor(Pd / kd), gd, 1, Od.RGBA_INTEGER, Od.UNSIGNED_INT, Wd.subarray(4 * Jd, 4 * (Jd + gd))), Jd += gd
        }
      } finally {
        dd.bindFramebuffer(Od.READ_FRAMEBUFFER, Pd), dd.deleteFramebuffer(Zd)
      }
      return Wd
    }

    function pJ(dd, Jd, kd) {
      let pd = 0,
        Nd = 0;
      for (let gd = 0; gd < Jd.bytes.length; gd += Md) {
        pd++;
        const dd = Math.min(gd + Md, Jd.bytes.length);
        Qd(Jd.bytes.subarray(gd, dd)) !== Qd(kd.subarray(gd, dd)) && Nd++
      }
      const Wd = `${dd} ${Jd.bytes.length} B cpu ${Qd(Jd.bytes).toString(16)} gpu ${Qd(kd).toString(16)}, ${Nd}/${pd} blocks differ${Jd.missed?`, ${Jd.missed} GPU-side writes uncopied`:""}`;
      if (0 === Nd) return Wd;
      const {
        count: Pd,
        offsets: Zd
      } = function(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const pd = Math.min(dd.length, Jd.length);
        let Nd = Math.abs(dd.length - Jd.length);
        const Wd = [];
        for (let Pd = 0; Pd < pd; Pd++) dd[Pd] !== Jd[Pd] && (Nd++, Wd.length < kd && Wd.push(Pd));
        return {
          count: Nd,
          offsets: Wd
        }
      }(Jd.bytes, kd);
      return Ed([`${Wd}: ${Pd} bytes differ`, ...Zd.map((dd => `  +${dd}: cpu ${Ld(Jd.bytes,dd)} | gpu ${Ld(kd,dd)}`))].join("\n")), `${Wd}: ${Pd} bytes differ, first at ${Zd.join(", ")} (context in the saved file)`
    }

    function NJ(dd) {
      if (0 === dd.vertices.length) return void Td(`decode probe (${dd.reason}): no terrain draw probed (${dd.draws.length} seen)`);
      const Jd = function(dd) {
          const Jd = new Map;
          for (const pd of dd) {
            const dd = Jd.get(pd.group);
            dd ? dd.push(pd) : Jd.set(pd.group, [pd])
          }
          const kd = {
            vertices: dd.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [pd, Nd] of Jd) {
            const dd = new Map,
              Jd = Nd.map((Jd => {
                const kd = Kd(Jd.record, Jd.slot),
                  pd = [Jd.gpu[0] - kd[0], Jd.gpu[1] - kd[1], Jd.gpu[2] - kd[2]],
                  Nd = pd.map((dd => Math.round(64 * dd))).join(","),
                  Wd = dd.get(Nd);
                return Wd ? Wd.count++ : dd.set(Nd, {
                  count: 1,
                  offset: pd
                }), kd
              }));
            let Wd = [0, 0, 0],
              Pd = 0;
            for (const kd of dd.values()) kd.count > Pd && (Pd = kd.count, Wd = kd.offset);
            kd.translations.set(pd, Wd), Nd.forEach(((dd, pd) => {
              var Nd;
              const Pd = [Jd[pd][0] + Wd[0], Jd[pd][1] + Wd[1], Jd[pd][2] + Wd[2]];
              if (Pd.every(((Jd, kd) => {
                  return pd = dd.gpu[kd], Nd = Jd, Math.abs(pd - Nd) <= Math.max(.001, 1e-6 * Math.abs(Nd));
                  var pd, Nd
                }))) return;
              kd.mismatches++, kd.byDirection[Zd(dd.record[2])]++, kd.byDiagonal[gd(dd.record[2])]++;
              const Cd = od(dd.record);
              kd.byBand[Cd] = (null !== (Nd = kd.byBand[Cd]) && void 0 !== Nd ? Nd : 0) + 1, kd.first.length < ld && kd.first.push({
                ...dd,
                expected: Pd
              })
            }))
          }
          return kd
        }(dd.vertices),
        kd = Jd.byDirection.map(((dd, Jd) => dd ? `${Pd[Jd]} ${dd}` : "")).filter(Boolean).join(" "),
        pd = Object.entries(Jd.byBand).map((dd => {
          let [Jd, kd] = dd;
          return `${Jd}: ${kd}`
        })).join(" ");
      if (Td(`decode probe (${dd.reason}): ${Jd.mismatches}/${Jd.vertices} vertices differ from the CPU decode over ${dd.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (Jd.mismatches ? ` by direction [${kd}] diagonal [0: ${Jd.byDiagonal[0]} 1: ${Jd.byDiagonal[1]}] extent [${pd}]` : "")), dd.fed.records > 0 || dd.fed.failed > 0) {
        Td(`decode probe input: ${dd.fed.differing}/${dd.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (dd.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (dd.fed.failed ? `; the feed failed on ${dd.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const Jd of dd.fed.first) Td(`  ${Jd}`)
      }
      for (const Nd of Jd.first) {
        const [dd, Jd, kd] = Nd.record;
        Td(`  mismatch part ${Nd.group} r0 ${dd.toString(16)} r1 ${Jd.toString(16)} r2 ${kd.toString(16)} slot ${Nd.slot} (${Pd[Zd(kd)]}): expected ${Nd.expected.map(PJ).join(",")} gpu ${Nd.gpu.map(PJ).join(",")}`)
      }
      Ed(`decode probe translations: ${[...Jd.translations].map((dd=>{let[Jd,kd]=dd;return`${Jd}: ${kd.map(PJ).join(",")}`})).join("; ")}`)
    }

    function WJ(dd) {
      return dd.toString(16)
    }

    function PJ(dd) {
      return Number.isInteger(dd) ? String(dd) : dd.toFixed(3)
    }

    function ZJ(dd) {
      return null !== jd.pendingCheck ? Promise.resolve() : new Promise((Jd => {
        let kd = !1;
        const pd = {
          reason: dd,
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
        jd.pendingCheck = pd;
        const Nd = () => {
            jd.pendingCheck = null;
            try {
              ! function(dd) {
                Td(`draw ranges (${dd.reason}): ${dd.terrainDraws} terrain draws in the frame, the first ${dd.draws.length} here`);
                for (const Jd of dd.draws) {
                  const dd = Jd.UO.slice(0, 8).map((dd => {
                      let [Jd, kd] = dd;
                      return `${Jd}+${kd}`
                    })).join(" "),
                    kd = Jd.UO.length > 8 ? ` (+${Jd.UO.length-8} ranges)` : "";
                  Td(`  ${Yd(Jd.program)} ${Jd.program.terrain} ${Jd.call} ${dd}${kd} x${Jd.instances}${Jd.group>=0?` part ${Jd.group} chunk ${Jd.chunk}`:""} | ${Jd.attributes.join(" | ")}`)
                }
              }(pd), NJ(pd);
              pd.draws.some((dd => "undefined" !== typeof WebGL2RenderingContext && dd.gl instanceof WebGL2RenderingContext)) || 0 === pd.draws.length ? function(dd) {
                const Jd = [],
                  kd = new Map;
                for (const pd of dd)
                  if ("undefined" !== typeof WebGL2RenderingContext && pd.gl instanceof WebGL2RenderingContext)
                    for (const dd of pd.pages) kd.set("buf" === dd.kind ? dd.buffer : dd.texture, {
                      page: dd,
                      gl: pd.gl
                    });
                for (const [pd, {
                    page: Nd,
                    gl: Wd
                  }] of kd) {
                  const dd = bd.get(pd);
                  if (!dd) {
                    Jd.push(`${Nd.kind}#${nd(pd)}: no CPU copy (${jd.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === Nd.kind) {
                    Jd.push(pJ(`buf#${dd.id}`, dd, Hd(Wd, Nd.buffer, 0, dd.bytes.length)));
                    continue
                  }
                  const kd = kJ(Wd, Nd.texture, dd.width, 0, dd.width * dd.height),
                    Pd = 16 === dd.texelBytes ? new Uint8Array(kd.buffer) : new Uint8Array(new Uint16Array(kd).buffer);
                  Jd.push(pJ(`tex#${dd.id} (${16===dd.texelBytes?"records":"light"})`, dd, Pd))
                }
                for (const pd of Jd) Td(`page readback ${pd}`)
              }(pd.draws) : Td("page readback: none on WebGL1 (no buffer readback)")
            } catch (dd) {
              Td(`check failed: ${String(dd)}`)
            }
            Jd()
          },
          Wd = () => {
            if (pd.draws.length > 0 && !kd) return kd = !0, void setTimeout(Nd, 0);
            kd || requestAnimationFrame(Wd)
          };
        requestAnimationFrame(Wd), setTimeout((() => {
          kd || (kd = !0, Nd())
        }), 5e3)
      }))
    }
    var gJ = kd(4563);
    const CJ = 20,
      KJ = 24,
      oJ = Reflect.apply;

    function lJ(dd, Jd, kd) {
      if (!dd) return;
      const pd = dd[Jd];
      if ("function" === typeof pd) {
        const Nd = kd(pd);
        dd[Jd] = Nd, (0, gJ.C)(Nd, pd)
      }
    }
    let QJ = !1;
    const LJ = new WeakMap,
      OJ = new WeakMap,
      eJ = new WeakMap,
      RJ = {
        gl: 0,
        lost: 0
      };
    let IJ = {
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
      GJ = {
        buffer: 0,
        texture: 0
      },
      vJ = 0;

    function xJ(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (dd instanceof ArrayBuffer) return new Uint8Array(dd, Jd, kd || void 0);
      if (!ArrayBuffer.isView(dd)) return null;
      const pd = "BYTES_PER_ELEMENT" in dd ? dd.BYTES_PER_ELEMENT : 1,
        Nd = dd.byteOffset + Jd * pd,
        Wd = kd ? kd * pd : dd.byteLength - Jd * pd;
      return new Uint8Array(dd.buffer, Nd, Math.max(0, Wd))
    }

    function qJ(dd, Jd) {
      const kd = function(dd) {
        switch (dd) {
          case Od.ARRAY_BUFFER:
            return Od.ARRAY_BUFFER_BINDING;
          case Od.ELEMENT_ARRAY_BUFFER:
            return Od.ELEMENT_ARRAY_BUFFER_BINDING;
          case Od.COPY_READ_BUFFER:
            return Od.COPY_READ_BUFFER_BINDING;
          case Od.COPY_WRITE_BUFFER:
            return Od.COPY_WRITE_BUFFER_BINDING;
          case Od.UNIFORM_BUFFER:
            return Od.UNIFORM_BUFFER_BINDING;
          case Od.PIXEL_UNPACK_BUFFER:
            return Od.PIXEL_UNPACK_BUFFER_BINDING;
          case Od.TRANSFORM_FEEDBACK_BUFFER:
            return Od.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(Jd);
      return kd ? dd.getParameter(kd) : null
    }

    function BJ(dd) {
      const Jd = bd.get(dd);
      Jd && (jd.shadowBytes -= Jd.bytes.length, bd.delete(dd))
    }

    function sJ(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      BJ(dd), jd.shadowBytes + Jd > ad ? jd.uncopied++ : (jd.shadowBytes += Jd, bd.set(dd, {
        id: nd(dd),
        bytes: new Uint8Array(Jd),
        width: kd,
        height: pd,
        texelBytes: Nd,
        missed: 0
      }))
    }

    function iJ(dd, Jd) {
      for (const kd of ["deleteBuffer", "deleteTexture"]) lJ(dd, kd, (dd => function() {
        for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
        return kd[0] && BJ(kd[0]), oJ(dd, this, kd)
      }));
      lJ(dd, "shaderSource", (dd => function() {
        for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
        return kd[0] && "string" === typeof kd[1] && LJ.set(kd[0], kd[1]), oJ(dd, this, kd)
      })), lJ(dd, "attachShader", (dd => function() {
        for (var Jd, kd = arguments.length, pd = new Array(kd), Nd = 0; Nd < kd; Nd++) pd[Nd] = arguments[Nd];
        const Wd = pd[0],
          Pd = null !== (Jd = OJ.get(Wd)) && void 0 !== Jd ? Jd : [];
        return Pd.push(pd[1]), OJ.set(Wd, Pd), oJ(dd, this, pd)
      })), lJ(dd, "linkProgram", (dd => function() {
        for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
        const Nd = oJ(dd, this, kd);
        return jd.inProbe || function(dd, Jd) {
          var kd, pd, Nd;
          "undefined" !== typeof HTMLCanvasElement && dd.canvas instanceof HTMLCanvasElement && function(dd) {
            if (bJ.has(dd)) return;
            bJ.add(dd);
            for (const Jd of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) dd.addEventListener(Jd, (dd => {
              RJ.lost < CJ && (RJ.lost++, Td(`${Jd}${"statusMessage"in dd?`: ${String(dd.statusMessage)}`:""}`))
            }))
          }(dd.canvas);
          jd.context ??= dd;
          const Wd = null !== (kd = OJ.get(Jd)) && void 0 !== kd ? kd : [];
          let Pd = "",
            Zd = "";
          for (const Kd of Wd) {
            var gd;
            const dd = null !== (gd = LJ.get(Kd)) && void 0 !== gd ? gd : "";
            /\bgl_Position\b/.test(dd) ? Pd = dd : Zd = dd
          }
          const Cd = {
            id: nd(Jd),
            name: null !== (pd = null === (Nd = Fd.exec(Pd)) || void 0 === Nd ? void 0 : Nd[1]) && void 0 !== pd ? pd : null,
            gl: dd,
            vertex: Pd,
            fragment: Zd,
            terrain: MJ(Pd),
            checked: !1,
            firstDraw: !1
          };
          if (eJ.set(Jd, Cd), md.push([Jd, Cd]), null !== Cd.terrain) {
            const Jd = Wd.map((Jd => {
              var kd;
              return null !== (kd = dd.getShaderInfoLog(Jd)) && void 0 !== kd ? kd : ""
            })).filter((dd => "" !== dd.trim()));
            Jd.length > 0 && Ed(`program ${Yd(Cd)} (${Cd.terrain}) shader logs:\n${cd(Jd.join("\n"))}`)
          }
        }(this, kd[0]), Nd
      })), lJ(dd, "bufferData", (dd => function() {
        for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
        const Nd = oJ(dd, this, kd);
        if (!jd.inProbe) {
          const dd = qJ(this, kd[0]);
          if (dd) {
            var Wd, Pd, Zd;
            const Jd = "number" === typeof kd[1] ? null : xJ(kd[1], null !== (Wd = kd[3]) && void 0 !== Wd ? Wd : 0, null !== (Pd = kd[4]) && void 0 !== Pd ? Pd : 0);
            var gd;
            if (sJ(dd, "number" === typeof kd[1] ? kd[1] : null !== (Zd = null === Jd || void 0 === Jd ? void 0 : Jd.length) && void 0 !== Zd ? Zd : 0), Jd) null === (gd = bd.get(dd)) || void 0 === gd || gd.bytes.set(Jd)
          }
        }
        return Nd
      })), lJ(dd, "bufferSubData", (dd => function() {
        for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
        const Nd = oJ(dd, this, kd);
        if (!jd.inProbe) {
          var Wd, Pd;
          const dd = qJ(this, kd[0]),
            Jd = dd ? bd.get(dd) : void 0,
            pd = xJ(kd[2], null !== (Wd = kd[3]) && void 0 !== Wd ? Wd : 0, null !== (Pd = kd[4]) && void 0 !== Pd ? Pd : 0);
          if (Jd && pd) {
            const dd = kd[1];
            Jd.bytes.set(pd.subarray(0, Math.max(0, Jd.bytes.length - dd)), dd), aJ("buffer", Jd, dd, pd.length)
          }
        }
        return Nd
      })), Jd && (lJ(dd, "copyBufferSubData", (dd => function() {
        for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
        const Nd = oJ(dd, this, kd);
        if (!jd.inProbe) {
          const [dd, Jd, pd, Nd, Wd] = kd, Pd = qJ(this, dd), Zd = qJ(this, Jd), gd = Pd ? bd.get(Pd) : void 0, Cd = Zd ? bd.get(Zd) : void 0;
          Cd && (gd ? Cd.bytes.set(gd.bytes.slice(pd, pd + Wd), Nd) : Cd.missed++)
        }
        return Nd
      })), lJ(dd, "texStorage2D", (dd => function() {
        for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
        const Nd = oJ(dd, this, kd),
          [, , Wd, Pd, Zd] = kd;
        if (!jd.inProbe && (Wd === Od.RGBA32UI || Wd === Od.RGBA16UI)) {
          const dd = this.getParameter(Od.TEXTURE_BINDING_2D),
            Jd = Wd === Od.RGBA32UI ? 16 : 8;
          dd && (Sd.set(dd, Jd), sJ(dd, Pd * Zd * Jd, Pd, Zd, Jd))
        }
        return Nd
      })), lJ(dd, "texSubImage2D", (dd => function() {
        for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
        const Nd = oJ(dd, this, kd);
        return !jd.inProbe && kd.length >= 9 && kd[0] === Od.TEXTURE_2D && 0 === kd[1] && function(dd, Jd) {
          var kd;
          const pd = dd.getParameter(Od.TEXTURE_BINDING_2D),
            Nd = pd ? bd.get(pd) : void 0;
          if (!Nd) return;
          const [, , Wd, Pd, Zd, gd] = Jd;
          let Cd = xJ(Jd[8], null !== (kd = Jd[9]) && void 0 !== kd ? kd : 0);
          if (null === Cd && "number" === typeof Jd[8]) {
            const kd = qJ(dd, Od.PIXEL_UNPACK_BUFFER),
              pd = kd ? bd.get(kd) : void 0;
            Cd = pd ? pd.bytes.subarray(Jd[8]) : null
          }
          if (null === Cd) return void Nd.missed++;
          const Kd = dd.getParameter(Od.UNPACK_ROW_LENGTH) || Zd,
            od = dd.getParameter(Od.UNPACK_SKIP_ROWS),
            ld = dd.getParameter(Od.UNPACK_SKIP_PIXELS),
            Qd = Nd.texelBytes;
          for (let Ld = 0; Ld < gd; Ld++) {
            const dd = ((od + Ld) * Kd + ld) * Qd,
              Jd = ((Pd + Ld) * Nd.width + Wd) * Qd;
            Nd.bytes.set(Cd.subarray(dd, dd + Zd * Qd), Jd)
          }
          aJ("texture", Nd, (Pd * Nd.width + Wd) * Qd, Zd * gd * Qd)
        }(this, kd), Nd
      })), lJ(dd, "copyTexSubImage2D", (dd => function() {
        for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
        const Nd = kd[0] === Od.TEXTURE_2D ? this.getParameter(Od.TEXTURE_BINDING_2D) : null,
          Wd = Nd ? bd.get(Nd) : void 0;
        return Wd && Wd.missed++, oJ(dd, this, kd)
      })));
      for (const kd of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) lJ(dd, kd, (dd => function() {
        for (var Jd = arguments.length, pd = new Array(Jd), Nd = 0; Nd < Jd; Nd++) pd[Nd] = arguments[Nd];
        const Wd = oJ(dd, this, pd);
        return jd.inProbe || YJ(this, kd, pd), Wd
      }));
      lJ(dd, "getExtension", (dd => function() {
        for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
        const Nd = oJ(dd, this, kd);
        return Nd && "object" === typeof Nd && function(dd, Jd, kd) {
          const pd = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(Jd in pd) || kd.bloxdRenderDebug) return;
          kd.bloxdRenderDebug = !0;
          for (const Nd of pd[Jd]) {
            const Jd = kd[Nd];
            "function" === typeof Jd && (kd[Nd] = function() {
              for (var pd = arguments.length, Wd = new Array(pd), Pd = 0; Pd < pd; Pd++) Wd[Pd] = arguments[Pd];
              const Zd = oJ(Jd, kd, Wd);
              return jd.inProbe || YJ(dd, Nd, Wd), Zd
            })
          }
        }(this, kd[0], Nd), Nd
      }))
    }

    function aJ(dd, Jd, kd, pd) {
      GJ[dd] += pd, vJ < 32 && Jd.bytes.length >= 1 << 20 && (vJ++, Ed(`upload ${dd} #${Jd.id} +${kd} ${pd} B`))
    }

    function MJ(dd) {
      if (!dd.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(dd) || /in uvec3 _p2vs_location0\b/.test(dd) ? "inst" : "tex"
    }

    function FJ(dd, Jd, kd) {
      var pd;
      if (kd.checked) return;
      kd.checked = !0;
      const Nd = dd.getProgramParameter(Jd, Od.LINK_STATUS),
        Wd = (null !== (pd = dd.getProgramInfoLog(Jd)) && void 0 !== pd ? pd : "").trim();
      var Pd;
      null === kd.terrain && Nd || (Td(`program ${Yd(kd)} ${null!==(Pd=kd.terrain)&&void 0!==Pd?Pd:"other"} link ${Nd?"ok":"FAILED"}${Wd?`: ${cd(Wd,300)}`:""}`), Wd && Ed(`program ${Yd(kd)} link log:\n${cd(Wd)}`))
    }

    function YJ(dd, Jd, kd) {
      var pd;
      const Nd = dd.getParameter(Od.CURRENT_PROGRAM),
        Wd = Nd ? eJ.get(Nd) : void 0;
      if (!Nd || !Wd) return;
      const Pd = null !== (pd = Wd.terrain) && void 0 !== pd ? pd : "other",
        {
          UO: Zd,
          instances: gd
        } = function(dd, Jd) {
          switch (dd) {
            case "drawArrays":
              return {
                UO: [
                  [Jd[1], Jd[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                UO: [
                  [Jd[1], Jd[2]]
                ], instances: Jd[3]
              };
            case "drawElements":
              return {
                UO: [
                  [0, Jd[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                UO: [
                  [0, Jd[1]]
                ], instances: Jd[4]
              };
            case "multiDrawArraysWEBGL": {
              const dd = Jd[1],
                kd = Jd[3],
                pd = Jd[2],
                Nd = Jd[4],
                Wd = [];
              for (let Pd = 0; Pd < Jd[5]; Pd++) Wd.push([dd[pd + Pd], kd[Nd + Pd]]);
              return {
                UO: Wd,
                instances: 1
              }
            }
            default:
              return {
                UO: [], instances: 0
              }
          }
        }(Jd, kd),
        Cd = "inst" === Wd.terrain ? gd : Zd.reduce(((dd, Jd) => {
          let [, kd] = Jd;
          return dd + kd
        }), 0) / 6;
      if (IJ[Pd].draws++, IJ[Pd].faces += Cd, null === Wd.terrain) return;
      if (jd.context = dd, !Wd.firstDraw) {
        Wd.firstDraw = !0, FJ(dd, Nd, Wd), mJ || (mJ = !0, Td(function(dd) {
          var Jd;
          const kd = dd.getParameter(Od.DEPTH_FUNC),
            pd = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let Nd = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in dd && dd.getParameter(Od.DRAW_FRAMEBUFFER_BINDING)) {
            const Jd = dd;
            Nd = Jd.getFramebufferAttachmentParameter(Od.DRAW_FRAMEBUFFER, Od.DEPTH_ATTACHMENT, Od.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(Jd.getFramebufferAttachmentParameter(Od.DRAW_FRAMEBUFFER,Od.DEPTH_ATTACHMENT,Od.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(Jd.getFramebufferAttachmentParameter(Od.DRAW_FRAMEBUFFER,Od.DEPTH_ATTACHMENT,Od.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const Wd = dd.getParameter(Od.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(Jd=pd[kd])&&void 0!==Jd?Jd:`0x${kd.toString(16)}`} clear ${Wd}${516===kd||518===kd?" (reverse-Z)":""}, samples ${String(dd.getParameter(Od.SAMPLES))}, ${Nd}`
        }(dd)));
        const kd = dd.getError();
        kd !== Od.NO_ERROR && RJ.gl < CJ && (RJ.gl++, Td(`GL error 0x${kd.toString(16)} after program ${Yd(Wd)}'s first terrain draw (${Jd})`))
      }
      const Kd = jd.pendingCheck;
      null !== Kd && (Kd.terrainDraws++, Kd.draws.length < KJ && hd(dd, Nd, Wd, Jd, Zd, gd))
    }
    let mJ = !1;
    const bJ = new WeakSet;
    var SJ = kd(4369),
      jJ = kd(4569);
    const XJ = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let fJ = !1;
    const nJ = new WeakSet,
      UJ = new WeakMap,
      yJ = new WeakMap,
      DJ = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let TJ = 0,
      EJ = !1,
      cJ = null,
      hJ = {
        draws: 0,
        faces: 0
      };

    function rJ(dd) {
      const Jd = globalThis[dd];
      return null === Jd || void 0 === Jd ? void 0 : Jd.prototype
    }

    function uJ(dd) {
      return dd && "function" === typeof dd[Symbol.iterator] ? [...dd].sort().join(" ") : ""
    }

    function tJ(dd, Jd) {
      const kd = null !== dd && void 0 !== dd ? dd : {},
        pd = null !== Jd && void 0 !== Jd ? Jd : Object.keys(Object.getPrototypeOf(kd)).concat(Object.keys(kd));
      return [...new Set(pd)].filter((dd => "number" === typeof kd[dd])).map((dd => `${dd} ${String(kd[dd])}`)).join(", ")
    }

    function VJ(dd, Jd) {
      var kd;
      const pd = null !== (kd = Jd.vertex) && void 0 !== kd ? kd : {};
      if (pd.module && nJ.has(pd.module)) {
        var Nd;
        const kd = String(null !== (Nd = pd.entryPoint) && void 0 !== Nd ? Nd : "");
        if (kd.startsWith("vs_packed") && UJ.set(dd, kd), !EJ) {
          var Wd, Pd, Zd, gd, Cd;
          EJ = !0;
          const dd = null !== (Wd = Jd.depthStencil) && void 0 !== Wd ? Wd : {},
            pd = null !== (Pd = Jd.multisample) && void 0 !== Pd ? Pd : {},
            Nd = String(null !== (Zd = dd.depthCompare) && void 0 !== Zd ? Zd : "");
          Td(`WebGPU terrain pipeline ${kd}: depth ${String(null!==(gd=dd.format)&&void 0!==gd?gd:"none")} ${Nd}${Nd.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(Cd=pd.count)&&void 0!==Cd?Cd:1)}`)
        }
      }
    }

    function zJ(dd) {
      lJ(dd, "setPipeline", (dd => function() {
        for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
        return yJ.set(this, kd[0]), oJ(dd, this, kd)
      }));
      for (const Jd of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) lJ(dd, Jd, (dd => function() {
        const kd = yJ.get(this),
          pd = kd ? UJ.get(kd) : void 0;
        for (var Nd = arguments.length, Wd = new Array(Nd), Pd = 0; Pd < Nd; Pd++) Wd[Pd] = arguments[Pd];
        return void 0 !== pd && HJ(Jd, pd, Wd), oJ(dd, this, Wd)
      }))
    }

    function HJ(dd, Jd, kd) {
      var pd;
      (hJ.draws++, "draw" === dd || "drawIndexed" === dd) && (hJ.faces += kd[0] * (null !== (pd = kd[1]) && void 0 !== pd ? pd : 1) / 6);
      if (null !== cJ && cJ.length < KJ) {
        const pd = ("draw" === dd ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === dd ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((Jd, pd) => {
          const Nd = dd.endsWith("Indirect") ? kd[1] : kd[pd];
          return `${Jd} ${String(null!==Nd&&void 0!==Nd?Nd:"instances"===Jd?1:0)}`
        }));
        cJ.push(`  ${Jd} ${dd} ${pd.join(" ")}`)
      }
    }

    function wJ() {
      if (fJ || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      fJ = !0, lJ(rJ("GPU"), "requestAdapter", (dd => function() {
        for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
        return oJ(dd, this, kd).then((dd => {
          var Jd;
          dd ? function(dd) {
            var Jd;
            const kd = null !== (Jd = dd.info) && void 0 !== Jd ? Jd : {};
            Td(`WebGPU adapter ${["vendor","architecture","device","description"].map((dd=>{var Jd;return`${dd} "${String(null!==(Jd=kd[dd])&&void 0!==Jd?Jd:"")}"`})).join(" ")}${dd.isFallbackAdapter?" (fallback)":""}`), Td(`WebGPU adapter features ${uJ(dd.features)}`), Td(`WebGPU adapter limits ${tJ(dd.limits,XJ)}`), Ed(`WebGPU adapter all limits ${tJ(dd.limits,null)}`)
          }(dd) : Td(`WebGPU requestAdapter(${JSON.stringify(null!==(Jd=kd[0])&&void 0!==Jd?Jd:{})}) gave none`);
          return dd
        }))
      })), lJ(rJ("GPUAdapter"), "requestDevice", (dd => function() {
        for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
        return oJ(dd, this, kd).then((dd => (function(dd) {
          Td(`WebGPU device features ${uJ(dd.features)}`), Td(`WebGPU device limits ${tJ(dd.limits,XJ)}`), dd.addEventListener("uncapturederror", (dd => {
            if (DJ.uncaptured < CJ) {
              var Jd, kd, pd;
              DJ.uncaptured++;
              const Nd = dd.error;
              Td(`WebGPU uncaptured ${null!==(Jd=null===Nd||void 0===Nd||null===(kd=Nd.constructor)||void 0===kd?void 0:kd.name)&&void 0!==Jd?Jd:"error"}: ${cd(String(null!==(pd=null===Nd||void 0===Nd?void 0:Nd.message)&&void 0!==pd?pd:""),600)}`)
            }
          }));
          const Jd = dd.lost;
          null === Jd || void 0 === Jd || Jd.then((dd => {
            var Jd;
            Td(`WebGPU device lost (${String(dd.reason)}): ${cd(String(null!==(Jd=dd.message)&&void 0!==Jd?Jd:""),600)}`)
          }))
        }(dd), dd)), (dd => {
          throw Td(`WebGPU requestDevice failed: ${String(dd)}`), dd
        }))
      }));
      const dd = rJ("GPUDevice");
      lJ(dd, "createShaderModule", (dd => function() {
        for (var Jd, kd, pd = arguments.length, Nd = new Array(pd), Wd = 0; Wd < pd; Wd++) Nd[Wd] = arguments[Wd];
        const Pd = oJ(dd, this, Nd);
        return function(dd, Jd) {
          const kd = Jd.includes("decodeQuad");
          kd && nJ.add(dd);
          const pd = dd.getCompilationInfo;
          null === pd || void 0 === pd || pd.call(dd).then((dd => {
            if (0 === dd.messages.length && !kd) return;
            const Jd = {};
            for (const kd of dd.messages) {
              var pd;
              Jd[String(kd.type)] = (null !== (pd = Jd[String(kd.type)]) && void 0 !== pd ? pd : 0) + 1
            }
            const Nd = dd.messages.map((dd => `${String(dd.type)} ${String(dd.lineNum)}:${String(dd.linePos)} ${String(dd.message)}`)).join("\n");
            DJ.compile < CJ && (DJ.compile++, Td(`WebGPU ${kd?"terrain ":""}shader module compiled: ${JSON.stringify(Jd)}${Nd?` first: ${cd(Nd.split("\n")[0],300)}`:""}`)), Nd && Ed(`WebGPU shader module messages:\n${cd(Nd)}`)
          }))
        }(Pd, String(null !== (Jd = (null !== (kd = Nd[0]) && void 0 !== kd ? kd : {}).code) && void 0 !== Jd ? Jd : "")), Pd
      })), lJ(dd, "createRenderPipeline", (dd => function() {
        for (var Jd, kd = arguments.length, pd = new Array(kd), Nd = 0; Nd < kd; Nd++) pd[Nd] = arguments[Nd];
        const Wd = oJ(dd, this, pd);
        return VJ(Wd, null !== (Jd = pd[0]) && void 0 !== Jd ? Jd : {}), Wd
      })), lJ(dd, "createRenderPipelineAsync", (dd => function() {
        for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
        return oJ(dd, this, kd).then((dd => {
          var Jd;
          return VJ(dd, null !== (Jd = kd[0]) && void 0 !== Jd ? Jd : {}), dd
        }), (dd => {
          var Jd;
          throw function(dd, Jd) {
            var kd, pd, Nd;
            if (DJ.rejected >= CJ) return;
            DJ.rejected++;
            const {
              reason: Wd,
              message: Pd
            } = null !== Jd && void 0 !== Jd ? Jd : {}, Zd = String(null !== (kd = (null !== (pd = dd.vertex) && void 0 !== pd ? pd : {}).entryPoint) && void 0 !== kd ? kd : "");
            Td(`WebGPU pipeline "${String(null!==(Nd=dd.label)&&void 0!==Nd?Nd:"")}" ${Zd} rejected (${String(null!==Wd&&void 0!==Wd?Wd:"no reason")}): ${cd(String(null!==Pd&&void 0!==Pd?Pd:Jd),600)}`)
          }(null !== (Jd = kd[0]) && void 0 !== Jd ? Jd : {}, dd), dd
        }))
      })), lJ(rJ("GPUCanvasContext"), "configure", (dd => function() {
        for (var Jd, kd = arguments.length, pd = new Array(kd), Nd = 0; Nd < kd; Nd++) pd[Nd] = arguments[Nd];
        const Wd = null !== (Jd = pd[0]) && void 0 !== Jd ? Jd : {};
        var Pd, Zd;
        TJ++ < 3 && Td(`WebGPU canvas ${String(Wd.format)} ${String(null!==(Pd=Wd.colorSpace)&&void 0!==Pd?Pd:"srgb")} alpha ${String(null!==(Zd=Wd.alphaMode)&&void 0!==Zd?Zd:"opaque")}`);
        return oJ(dd, this, pd)
      })), zJ(rJ("GPURenderPassEncoder")), zJ(rJ("GPURenderBundleEncoder"))
    }
    const AJ = 1e4,
      dk = 6e4,
      Jk = 5e3,
      kk = 3e3,
      pk = 100;
    let Nk = null,
      Wk = !1,
      Pk = {
        ...SJ.d
      },
      Zk = !1,
      gk = null,
      Ck = 0,
      Kk = () => {};
    const lk = new Promise((dd => {
      Kk = dd
    }));

    function Qk() {
      var dd;
      Wk || (Wk = !0, Pk = Object.assign(window.bloxdRenderDebug ??= {
        ...SJ.d
      }, {
        faceCull: "0" === (0, Wd.i)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (dd = (0, Wd.i)("adrenoProbe")) && void 0 !== dd ? dd : ""
      }), Td("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), QJ || "undefined" === typeof window || (QJ = !0, "undefined" !== typeof WebGL2RenderingContext && iJ(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && iJ(WebGLRenderingContext.prototype, !1)), wJ(), (0, Wd.b)("renderProbe", (() => {
        Gk("console")
      })), Rk(), setInterval(xk, Jk))
    }

    function Lk(dd) {
      var Jd, kd;
      Qk(), Nk = null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.backend) && void 0 !== Jd ? Jd : null;
      const pd = `, renderer param ${null!==(kd=(0,Wd.i)("renderer"))&&void 0!==kd?kd:"none"}, faceCull ${"0"===Pk.faceCull?"off (whole parts)":"on"}, adrenoProbe ${Pk.adrenoProbe||"none"}`;
      Td(`${(0,jJ.b)(dd)}${null===dd?"":pd}`)
    }

    function Ok() {
      const dd = performance.now(),
        Jd = ek(lk, AJ, dk).then((Jd => Gk(`${Math.round((performance.now()-dd)/1e3)} s after playable${Jd?"":", no terrain drawn yet"}`)));
      (0, Nd.b)(Td, (async () => {
        await Jd, await gk
      }))
    }
    async function ek(dd, Jd, kd) {
      const Nd = (0, pd.e)(kd).then((() => !1));
      return await (0, pd.e)(Jd), Promise.race([dd.then((() => !0)), Nd])
    }

    function Rk() {
      requestAnimationFrame((() => {
        Ck++, Rk()
      }))
    }

    function Ik() {
      var dd, Jd, kd;
      if (Zk) return;
      (Zk = !0, Td(`renderer caps ${null!==(dd=Pk.caps)&&void 0!==dd?dd:"(not noted)"}; terrain fetch ${null!==(Jd=Pk.fetch)&&void 0!==Jd?Jd:"(not noted)"}`), Pk.adrenoProbe) && Td(`adrenoProbe ${Pk.adrenoProbe} asked; in force (storage fetch only): ${null!==(kd=Pk.probe)&&void 0!==kd?kd:"(not noted)"}`);
      const pd = jd.context;
      if (pd) {
        for (const dd of function(dd) {
            var Jd;
            const kd = [],
              pd = dd.getExtension("WEBGL_debug_renderer_info"),
              Nd = pd ? dd.getParameter(pd.UNMASKED_VENDOR_WEBGL) : "(masked)",
              Wd = pd ? dd.getParameter(pd.UNMASKED_RENDERER_WEBGL) : "(masked)";
            kd.push(`GL ${String(dd.getParameter(dd.VERSION))} | ${String(dd.getParameter(dd.SHADING_LANGUAGE_VERSION))} | ${String(dd.getParameter(dd.VENDOR))} / ${String(dd.getParameter(dd.RENDERER))}`), kd.push(`GL unmasked ${Nd} / ${Wd}`);
            const Pd = [
              ["MAX_TEXTURE_SIZE", dd.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", dd.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", dd.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", dd.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", dd.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", dd.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", dd.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in dd && Pd.push(["MAX_UNIFORM_BLOCK_SIZE", dd.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", dd.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", dd.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", dd.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), kd.push(`GL limits ${Pd.map((Jd=>{let[kd,pd]=Jd;return`${kd} ${String(dd.getParameter(pd))}`})).join(", ")}`);
            const Zd = (Jd, kd) => {
              const pd = dd.getShaderPrecisionFormat(Jd, dd.HIGH_FLOAT),
                Nd = dd.getShaderPrecisionFormat(Jd, dd.HIGH_INT);
              return `${kd} highp float ${pd?`${pd.rangeMin}/${pd.rangeMax}/${pd.precision}`:"?"} int ${Nd?`${Nd.rangeMin}/${Nd.rangeMax}/${Nd.precision}`:"?"}`
            };
            kd.push(`GL precision ${Zd(dd.VERTEX_SHADER,"VS")}, ${Zd(dd.FRAGMENT_SHADER,"FS")}`);
            const gd = dd.getContextAttributes();
            return kd.push(`GL context ${JSON.stringify(gd)} drawingBuffer ${dd.drawingBufferWidth}x${dd.drawingBufferHeight}${"drawingBufferFormat"in dd?` format 0x${Number(dd.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in dd?` ${String(dd.drawingBufferColorSpace)}`:""}`), kd.push(`GL extensions ${(null!==(Jd=dd.getSupportedExtensions())&&void 0!==Jd?Jd:[]).join(" ")}`), kd
          }(pd)) Td(dd);
        ! function() {
          if (!jd.context) return;
          let dd = 0,
            Jd = 0;
          for (const [kd, pd] of md) !pd.gl.isContextLost() && pd.gl.isProgram(kd) && (Jd++, FJ(pd.gl, kd, pd), null !== pd.terrain && dd++);
          Td(`programs: ${Jd} live of ${md.length} linked, ${dd} packed terrain; CPU page copies ${Math.round(jd.shadowBytes/1048576)} MiB (${jd.uncopied} over budget)`)
        }()
      }
    }

    function Gk(dd) {
      return gk ??= async function(dd) {
        Ik(), "webgpu" === Nk ? (vk(), "1" === Pk.slotCheck && Td("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), Pk.slotCheck = "1", await
          function(dd) {
            if (null !== cJ) return Promise.resolve();
            const Jd = [];
            return cJ = Jd, new Promise((kd => {
              setTimeout((() => {
                cJ = null, Td(`WebGPU draw ranges (${dd}): ${Jd.length} terrain draws recorded in a second (first ${KJ}; bundles replay without new ones)`);
                for (const dd of Jd) Td(dd);
                kd()
              }), 1e3)
            }))
          }(dd), await async function() {
            if (await (0, SJ.l)(Pk, "slotCheck", ["1"], kk, pk), "1" === Pk.slotCheck) return void Td(`slot check: no answer in ${kk} ms (only the storage fetch has one; a later answer logs on its own)`);
            vk()
          }()) : await ZJ(dd);
        Td(`check (${dd}) done: bloxdDebug.save() downloads it all`)
      }(dd).catch((Jd => {
        Td(`check (${dd}) failed: ${String(Jd)}`)
      })).finally((() => {
        gk = null
      })), gk
    }

    function vk() {
      void 0 !== Pk.slotCheck && "1" !== Pk.slotCheck && (Td(Pk.slotCheck), delete Pk.slotCheck)
    }

    function xk() {
      const dd = dd => Ck ? (dd / Ck).toFixed(1) : "0",
        Jd = function() {
          const dd = hJ;
          return hJ = {
            draws: 0,
            faces: 0
          }, dd
        }(),
        kd = function() {
          const dd = IJ;
          return IJ = {
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
          }, dd
        }(),
        pd = function() {
          const dd = GJ;
          return GJ = {
            buffer: 0,
            texture: 0
          }, dd
        }();
      vk(), ("webgpu" === Nk ? Jd.draws : kd.inst.draws + kd.tex.draws) > 0 && Kk();
      const Nd = "webgpu" === Nk ? [`terrain ${dd(Jd.draws)} draws ${dd(Jd.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((dd => kd[dd].draws > 0)).map((Jd => `${Jd} ${dd(kd[Jd].draws)} draws ${dd(kd[Jd].faces)} faces a frame`));
      Td(`${Ck} frames: ${Nd.join(", ")||"no draws"}; uploaded ${Math.round(pd.buffer/1024)} KiB to buffers, ${Math.round(pd.texture/1024)} KiB to data textures`), Ck = 0
    }
  },
  4569: (dd, Jd, kd) => {
    function pd(dd) {
      if (null === dd) return "backend: none picked (no renderer build)";
      const Jd = dd.adapter ? `${dd.adapter.vendor}/${dd.adapter.architecture}` : "none";
      return `backend ${dd.backend}: reason ${dd.reason}, source ${dd.source}, adapter ${Jd}`
    }
    kd.d(Jd, {
      b: () => pd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);