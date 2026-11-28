export const id = 57;
export const ids = [57];
export const modules = {
  5419: (dd, Od, md) => {
    md.d(Od, {
      c: () => Qd
    });
    var Wd = md(29),
      Fd = md(32),
      Rd = md(1349),
      Xd = md(3903);
    const Kd = 3e4,
      hd = 1e3;

    function vd() {
      return "visible" === document.visibilityState && "inGame" === Wd.e.get("gameState") && (0, Rd.y)()
    }

    function Qd(dd, Od) {
      (0, Xd.q)() || function(dd, Od, md) {
        let Wd = 0;
        const Fd = setInterval((() => {
          Od() && (Wd += hd, Wd >= dd && (clearInterval(Fd), md()))
        }), hd)
      }(Kd, vd, (() => {
        Od().then((() => {
          dd(`saved for the player after ${Kd/1e3} s of play`), (0, Xd.F)(), Fd.j.lQ("chat", {
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
  5410: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      installRenderDebug: () => qm,
      renderDebugPlayable: () => ym,
      startRenderDebug: () => Hm,
      waitForDraw: () => bm
    });
    var Wd = md(1965),
      Fd = md(5419),
      Rd = md(3903);
    const Xd = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function Kd(dd) {
      return 7 & dd
    }

    function hd(dd) {
      return dd >>> 11 & 1
    }

    function vd(dd) {
      return [1 + (dd >>> 18 & 63), 1 + (dd >>> 24 & 63)]
    }

    function Qd(dd, Od) {
      const [md, , Wd] = dd, Fd = Kd(Wd), Rd = function(dd, Od, md) {
        return Od + (1 === (22 >>> dd & 1) ? 4 - md : md) & 3
      }(Fd, hd(Wd), Od), Xd = Fd >>> 1, [Qd, td] = vd(md), od = 1 === Rd || 2 === Rd ? Qd : 0, Nd = Rd >= 2 ? td : 0, qd = [63 & md, md >>> 6 & 63, md >>> 12 & 63];
      return qd[2 === Xd ? 0 : 2] += od, qd[1 === Xd ? 0 : 1] += Nd, qd
    }

    function td(dd) {
      const Od = Math.max(...vd(dd[0]));
      return 1 === Od ? "1" : Od <= 4 ? "2-4" : Od <= 16 ? "5-16" : "17-64"
    }
    const od = 16;

    function Nd(dd) {
      let Od = 2166136261;
      for (let md = 0; md < dd.length; md++) Od = Math.imul(Od ^ dd[md], 16777619);
      return Od >>> 0
    }

    function qd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const Wd = Math.max(0, Od - md),
        Fd = Math.min(dd.length, Od + md),
        Rd = [];
      for (let Xd = Wd; Xd < Fd; Xd++) {
        const md = dd[Xd].toString(16).padStart(2, "0");
        Rd.push(Xd === Od ? `[${md}]` : md)
      }
      return Rd.join(" ")
    }
    const Hd = {
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
      yd = "_vs2fs_location0";
    const bd = 0,
      Td = 4,
      pd = 6,
      Yd = [0, 1, 2, 0, 2, 3],
      gd = 2048,
      wd = 4,
      Ed = 256,
      Jd = 64,
      Ud = 268435456,
      xd = 65536,
      Bd = /^#version [^\n]*\/\/ program (\S+)$/m;

    function Sd(dd) {
      return null === dd.name ? `#${dd.id}` : `#${dd.id} ${dd.name}`
    }
    const sd = [],
      ud = new WeakMap,
      Vd = new WeakMap,
      Ad = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let rd = 1;
    const Gd = new WeakMap;

    function nd(dd) {
      if (null === dd) return 0;
      let Od = Gd.get(dd);
      return void 0 === Od && (Od = rd++, Gd.set(dd, Od)), Od
    }
    class Ld {
      constructor(dd, Od) {
        this.print = dd, this.now = Od, this.shown = 0, this.jK = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.kQ = [], this.dropped = 0
      }
      line(dd) {
        const Od = this.now();
        if (Od - this.second >= 1e3 && (this.second = Od, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.jK++, void this.store(dd);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${dd} (the last line here: the rest go to bloxdDebug.save())` : dd)
      }
      keep(dd) {
        this.sections++, this.store(dd)
      }
      store(dd) {
        this.kQ.push(`${new Date(Date.now()).toISOString()} ${dd}`), this.kQ.length > 2e4 && (this.kQ.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.jK} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.kQ].join("\n")
      }
    }
    let Pd = null;

    function zd() {
      if (null === Pd) {
        const dd = new Ld((dd => {
          (0, Rd.k)("render", dd)
        }), (() => performance.now()));
        (0, Rd.g)("render", (() => dd.dump())), Pd = dd
      }
      return Pd
    }

    function cd(dd) {
      zd().line(dd)
    }

    function jd(dd) {
      zd().keep(dd)
    }

    function Dd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return dd.length <= Od ? dd : `${dd.slice(0,Od)}... (${dd.length-Od} more characters)`
    }

    function ed(dd, Od, md, Wd, Fd, Rd) {
      const Xd = Ad.pendingCheck;
      if (null === Xd) return;
      const Kd = "undefined" !== typeof WebGL2RenderingContext && dd instanceof WebGL2RenderingContext,
        hd = {
          gl: dd,
          program: md,
          call: Wd,
          By: Fd,
          instances: Rd,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (Xd.draws.push(hd), Kd) try {
        const Wd = function(dd) {
          const Od = [],
            md = new Map,
            Wd = Math.min(16, dd.getParameter(Hd.MAX_VERTEX_ATTRIBS));
          for (let Fd = 0; Fd < Wd; Fd++) {
            if (!dd.getVertexAttrib(Fd, Hd.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const Wd = dd.getVertexAttrib(Fd, Hd.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              Rd = dd.getVertexAttribOffset(Fd, Hd.VERTEX_ATTRIB_ARRAY_POINTER),
              Xd = dd.getVertexAttrib(Fd, Hd.VERTEX_ATTRIB_ARRAY_STRIDE),
              Kd = dd.getVertexAttrib(Fd, Hd.VERTEX_ATTRIB_ARRAY_SIZE),
              hd = dd.getVertexAttrib(Fd, Hd.VERTEX_ATTRIB_ARRAY_TYPE),
              vd = "VERTEX_ATTRIB_ARRAY_INTEGER" in dd && dd.getVertexAttrib(Fd, Hd.VERTEX_ATTRIB_ARRAY_INTEGER),
              Qd = "VERTEX_ATTRIB_ARRAY_DIVISOR" in dd ? dd.getVertexAttrib(Fd, Hd.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            md.set(Fd, {
              buffer: Wd,
              offset: Rd,
              stride: Xd
            }), Od.push(`@${Fd} buf#${nd(Wd)} +${Rd} stride ${Xd} ${Kd}x0x${hd.toString(16)}${vd?" int":""} div ${Qd}`)
          }
          return {
            lines: Od,
            byLocation: md
          }
        }(dd);
        if (hd.attributes = Wd.lines, "inst" === md.terrain) {
          const {
            group: Fd,
            chunk: Kd
          } = function(dd, Od, md) {
            const Wd = Od.get(pd),
              Fd = dd.getVertexAttrib(pd, Hd.CURRENT_VERTEX_ATTRIB),
              Rd = Wd ? `+${Wd.offset}` : Fd ? Array.from(Fd).slice(0, 3).join(",") : "?";
            let Xd = md.groups.get(Rd);
            return void 0 === Xd && (Xd = md.groups.size, md.groups.set(Rd, Xd)), {
              group: Xd,
              chunk: Rd
            }
          }(dd, Wd.byLocation, Xd);
          hd.group = Fd, hd.chunk = Kd;
          for (const dd of [bd, Td]) {
            var vd;
            const Od = null === (vd = Wd.byLocation.get(dd)) || void 0 === vd ? void 0 : vd.buffer;
            Od && hd.pages.push({
              kind: "buf",
              buffer: Od
            })
          }! function(dd, Od, md, Wd, Fd, Rd, Xd) {
            const Kd = Wd.get(bd),
              hd = Xd.parts.get(Rd);
            if (void 0 === hd && Xd.parts.size >= wd) return;
            const vd = Math.min(Fd, Jd, Ed - (null !== hd && void 0 !== hd ? hd : 0));
            if (null === Kd || void 0 === Kd || !Kd.buffer || vd <= 0) return;
            const Qd = Id(dd, Od, md);
            if (!Qd) return;
            const td = Kd.stride || 12,
              od = fd(dd, Kd.buffer, Kd.offset, (vd - 1) * td + 12),
              Nd = new DataView(od.buffer),
              qd = function(dd, Od) {
                const md = function(dd) {
                    const Od = OO.get(dd);
                    if (void 0 !== Od && (null === Od || dd.isProgram(Od))) return Od;
                    Ad.inProbe = !0;
                    let md = null;
                    try {
                      md = ld(dd, Md, dO, "fed", "the record feed")
                    } finally {
                      Ad.inProbe = !1
                    }
                    return OO.set(dd, md), md
                  }(dd),
                  Wd = md ? kd(dd, md, Od, (() => {
                    dd.drawArraysInstanced(Hd.POINTS, 0, 1, Od)
                  }), "decode probe input (the record feed)") : null;
                return Wd ? new Uint32Array(Wd.buffer) : null
              }(dd, vd);
            qd || Xd.fed.failed++;
            const yd = kd(dd, Qd, 4 * vd, (() => {
              dd.drawArraysInstanced(Hd.POINTS, 0, 4, vd)
            }));
            if (!yd) return;
            Xd.parts.set(Rd, (null !== hd && void 0 !== hd ? hd : 0) + vd);
            for (let Hd = 0; Hd < vd; Hd++) {
              const dd = Hd * td,
                Od = [Nd.getUint32(dd, !0), Nd.getUint32(dd + 4, !0), Nd.getUint32(dd + 8, !0)],
                md = qd ? [qd[3 * Hd], qd[3 * Hd + 1], qd[3 * Hd + 2]] : Od;
              qd && (Xd.fed.records++, md.some(((dd, md) => dd !== Od[md])) && (Xd.fed.differing++, Xd.fed.first.length < 8 && Xd.fed.first.push(`part ${Rd} instance ${Hd}: fed ${md.map(XO).join(" ")} buffer ${Od.map(XO).join(" ")}`)));
              for (let Wd = 0; Wd < 4; Wd++) {
                const dd = 3 * (4 * Hd + Wd);
                Xd.vertices.push({
                  record: md,
                  slot: Wd,
                  group: Rd,
                  gpu: [yd[dd], yd[dd + 1], yd[dd + 2]]
                })
              }
            }
          }(dd, Od, md, Wd.byLocation, Rd, Fd, Xd)
        } else {
          const Wd = mO(dd, Od, 16),
            Rd = mO(dd, Od, 8);
          for (const dd of [Wd, Rd]) dd && hd.pages.push({
            kind: "tex",
            texture: dd
          });
          Wd && function(dd, Od, md, Wd, Fd, Rd) {
            if (Rd.parts.size >= wd) return;
            const Xd = Id(dd, Od, md);
            if (!Xd) return;
            let Kd = 6 * Ed;
            const hd = [];
            for (const [Nd, qd] of Fd) {
              const dd = Math.min(qd, Kd, Math.max(6, 6 * Math.floor(Ed / Fd.length)));
              dd > 0 && (hd.push([Nd, dd]), Kd -= dd)
            }
            const vd = hd.reduce(((dd, Od) => {
                let [, md] = Od;
                return dd + md
              }), 0),
              Qd = kd(dd, Xd, vd, (() => {
                for (const [Od, md] of hd) dd.drawArrays(Hd.POINTS, Od, md)
              }));
            if (!Qd) return;
            let td = 0;
            for (const [Nd, qd] of hd) {
              const Od = Math.floor(Nd / 6),
                md = Math.floor((Nd + qd - 1) / 6) - Od + 1,
                Fd = WO(dd, Wd, gd, Od, md);
              for (let dd = Nd; dd < Nd + qd; dd++, td++) {
                var od;
                const md = 4 * (Math.floor(dd / 6) - Od),
                  Wd = [Fd[md], Fd[md + 1], Fd[md + 2]];
                Rd.parts.set(Fd[md + 3], (null !== (od = Rd.parts.get(Fd[md + 3])) && void 0 !== od ? od : 0) + (dd % 6 === 0 ? 1 : 0)), Rd.vertices.push({
                  record: Wd,
                  slot: Yd[dd % 6],
                  group: Fd[md + 3],
                  gpu: [Qd[3 * td], Qd[3 * td + 1], Qd[3 * td + 2]]
                })
              }
            }
          }(dd, Od, md, Wd, Fd, Xd)
        }
      } catch (Qd) {
        cd(`decode probe failed on program ${Sd(md)}: ${String(Qd)}`)
      }
    }

    function Id(dd, Od, md) {
      if (void 0 !== md.probe) return md.probe && Cd(dd, Od, md.probe), md.probe;
      md.probe = null, Ad.inProbe = !0;
      try {
        md.probe = function(dd, Od) {
          return ld(dd, (md = Od.vertex, md.replace(`\nvec3 ${yd} = vec3(0);\n`, `\nout vec3 ${yd};\n`)), Od.fragment, yd, `program ${Sd(Od)}'s twin`);
          var md
        }(dd, md)
      } finally {
        Ad.inProbe = !1
      }
      return md.probe && Cd(dd, Od, md.probe), md.probe
    }

    function ld(dd, Od, md, Wd, Fd) {
      const Rd = [dd.createShader(Hd.VERTEX_SHADER), dd.createShader(Hd.FRAGMENT_SHADER)],
        Xd = dd.createProgram();
      if (!Xd || !Rd[0] || !Rd[1]) return null;
      dd.shaderSource(Rd[0], Od), dd.shaderSource(Rd[1], md);
      for (const hd of Rd) dd.compileShader(hd), dd.attachShader(Xd, hd);
      dd.transformFeedbackVaryings(Xd, [Wd], Hd.INTERLEAVED_ATTRIBS), dd.linkProgram(Xd);
      for (const hd of Rd) dd.deleteShader(hd);
      var Kd;
      return dd.getProgramParameter(Xd, Hd.LINK_STATUS) ? Xd : (cd(`decode probe: ${Fd} failed to link: ${Dd(null!==(Kd=dd.getProgramInfoLog(Xd))&&void 0!==Kd?Kd:"",300)}`), dd.deleteProgram(Xd), null)
    }

    function Cd(dd, Od, md) {
      const Wd = dd.getProgramParameter(Od, Hd.ACTIVE_UNIFORM_BLOCKS);
      for (let Kd = 0; Kd < Wd; Kd++) {
        const Wd = dd.getActiveUniformBlockName(Od, Kd),
          Fd = null === Wd ? Hd.INVALID_INDEX : dd.getUniformBlockIndex(md, Wd);
        Fd !== Hd.INVALID_INDEX && dd.uniformBlockBinding(md, Fd, dd.getActiveUniformBlockParameter(Od, Kd, Hd.UNIFORM_BLOCK_BINDING))
      }
      const Fd = dd.getParameter(Hd.CURRENT_PROGRAM);
      dd.useProgram(md);
      const Rd = dd.getProgramParameter(Od, Hd.ACTIVE_UNIFORMS),
        Xd = dd.getActiveUniforms(Od, [...Array(Rd).keys()], Hd.UNIFORM_BLOCK_INDEX);
      for (let Kd = 0; Kd < Rd; Kd++) {
        const Wd = dd.getActiveUniform(Od, Kd);
        if (!Wd || -1 !== Xd[Kd]) continue;
        const Fd = Wd.name.replace(/\[0\]$/, "");
        for (let Rd = 0; Rd < Wd.size; Rd++) {
          const Xd = Wd.size > 1 ? `${Fd}[${Rd}]` : Wd.name,
            Kd = dd.getUniformLocation(Od, Xd),
            hd = dd.getUniformLocation(md, Xd);
          Kd && hd && Zd(dd, hd, Wd.type, dd.getUniform(Od, Kd))
        }
      }
      dd.useProgram(Fd)
    }

    function Zd(dd, Od, md, Wd) {
      const Fd = ArrayBuffer.isView(Wd) ? Array.from(Wd) : [Number(Wd)];
      switch (md) {
        case Hd.FLOAT:
          return void dd.uniform1f(Od, Fd[0]);
        case Hd.FLOAT_VEC2:
          return void dd.uniform2fv(Od, Fd);
        case Hd.FLOAT_VEC3:
          return void dd.uniform3fv(Od, Fd);
        case Hd.FLOAT_VEC4:
          return void dd.uniform4fv(Od, Fd);
        case Hd.FLOAT_MAT3:
          return void dd.uniformMatrix3fv(Od, !1, Fd);
        case Hd.FLOAT_MAT4:
          return void dd.uniformMatrix4fv(Od, !1, Fd);
        case Hd.UNSIGNED_INT:
          return void dd.uniform1ui(Od, Fd[0]);
        case Hd.UNSIGNED_INT_VEC2:
          return void dd.uniform2uiv(Od, Fd);
        case Hd.UNSIGNED_INT_VEC3:
          return void dd.uniform3uiv(Od, Fd);
        case Hd.UNSIGNED_INT_VEC4:
          return void dd.uniform4uiv(Od, Fd);
        case Hd.INT_VEC2:
          return void dd.uniform2iv(Od, Fd);
        case Hd.INT_VEC3:
          return void dd.uniform3iv(Od, Fd);
        case Hd.INT_VEC4:
          return void dd.uniform4iv(Od, Fd);
        default:
          dd.uniform1i(Od, Fd[0])
      }
    }

    function kd(dd, Od, md, Wd) {
      let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const Rd = dd.getParameter(Hd.CURRENT_PROGRAM),
        Xd = dd.getParameter(Hd.TRANSFORM_FEEDBACK_BINDING),
        Kd = dd.getParameter(Hd.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        hd = dd.getParameter(Hd.COPY_READ_BUFFER_BINDING),
        vd = dd.isEnabled(Hd.RASTERIZER_DISCARD),
        Qd = dd.createTransformFeedback(),
        td = dd.createBuffer();
      Ad.inProbe = !0;
      try {
        const Rd = dd.getError();
        Rd !== Hd.NO_ERROR && cd(`GL error 0x${Rd.toString(16)} pending before the decode probe (the renderer's)`), dd.useProgram(Od), dd.bindTransformFeedback(Hd.TRANSFORM_FEEDBACK, Qd), dd.bindBuffer(Hd.TRANSFORM_FEEDBACK_BUFFER, td), dd.bufferData(Hd.TRANSFORM_FEEDBACK_BUFFER, 12 * md, Hd.STREAM_READ), dd.bindBufferBase(Hd.TRANSFORM_FEEDBACK_BUFFER, 0, td), dd.enable(Hd.RASTERIZER_DISCARD), dd.beginTransformFeedback(Hd.POINTS), Wd(), dd.endTransformFeedback(), dd.bindBufferBase(Hd.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const Xd = dd.getError();
        if (Xd !== Hd.NO_ERROR) return cd(`${Fd}: GL error 0x${Xd.toString(16)} on the feedback draw`), null;
        const Kd = new Float32Array(3 * md);
        return dd.bindBuffer(Hd.COPY_READ_BUFFER, td), dd.getBufferSubData(Hd.COPY_READ_BUFFER, 0, Kd), Kd
      } finally {
        vd || dd.disable(Hd.RASTERIZER_DISCARD), dd.bindTransformFeedback(Hd.TRANSFORM_FEEDBACK, Xd), dd.bindBuffer(Hd.TRANSFORM_FEEDBACK_BUFFER, Kd), dd.bindBuffer(Hd.COPY_READ_BUFFER, hd), dd.deleteTransformFeedback(Qd), dd.deleteBuffer(td), dd.useProgram(Rd), Ad.inProbe = !1
      }
    }

    function fd(dd, Od, md, Wd) {
      const Fd = dd.getParameter(Hd.COPY_READ_BUFFER_BINDING),
        Rd = new Uint8Array(Wd);
      return dd.bindBuffer(Hd.COPY_READ_BUFFER, Od), dd.getBufferSubData(Hd.COPY_READ_BUFFER, md, Rd), dd.bindBuffer(Hd.COPY_READ_BUFFER, Fd), Rd
    }
    const Md = `#version 300 es\nlayout(location = ${bd}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      dO = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      OO = new WeakMap;

    function mO(dd, Od, md) {
      const Wd = dd.getProgramParameter(Od, Hd.ACTIVE_UNIFORMS),
        Fd = dd.getParameter(Hd.ACTIVE_TEXTURE);
      try {
        for (let Fd = 0; Fd < Wd; Fd++) {
          const Wd = dd.getActiveUniform(Od, Fd);
          if ((null === Wd || void 0 === Wd ? void 0 : Wd.type) !== Hd.UNSIGNED_INT_SAMPLER_2D) continue;
          const Rd = dd.getUniformLocation(Od, Wd.name),
            Xd = Rd ? dd.getUniform(Od, Rd) : -1;
          if (Xd < 0) continue;
          dd.activeTexture(Hd.TEXTURE0 + Xd);
          const Kd = dd.getParameter(Hd.TEXTURE_BINDING_2D);
          if (Kd && Vd.get(Kd) === md) return Kd
        }
        return null
      } finally {
        dd.activeTexture(Fd)
      }
    }

    function WO(dd, Od, md, Wd, Fd) {
      const Rd = new Uint32Array(4 * Fd),
        Xd = dd.getParameter(Hd.READ_FRAMEBUFFER_BINDING),
        Kd = dd.createFramebuffer();
      dd.bindFramebuffer(Hd.READ_FRAMEBUFFER, Kd), dd.framebufferTexture2D(Hd.READ_FRAMEBUFFER, Hd.COLOR_ATTACHMENT0, Hd.TEXTURE_2D, Od, 0);
      try {
        let Od = 0;
        for (; Od < Fd;) {
          const Xd = Wd + Od,
            Kd = Xd % md,
            hd = Math.min(Fd - Od, md - Kd);
          dd.readPixels(Kd, Math.floor(Xd / md), hd, 1, Hd.RGBA_INTEGER, Hd.UNSIGNED_INT, Rd.subarray(4 * Od, 4 * (Od + hd))), Od += hd
        }
      } finally {
        dd.bindFramebuffer(Hd.READ_FRAMEBUFFER, Xd), dd.deleteFramebuffer(Kd)
      }
      return Rd
    }

    function FO(dd, Od, md) {
      let Wd = 0,
        Fd = 0;
      for (let hd = 0; hd < Od.bytes.length; hd += xd) {
        Wd++;
        const dd = Math.min(hd + xd, Od.bytes.length);
        Nd(Od.bytes.subarray(hd, dd)) !== Nd(md.subarray(hd, dd)) && Fd++
      }
      const Rd = `${dd} ${Od.bytes.length} B cpu ${Nd(Od.bytes).toString(16)} gpu ${Nd(md).toString(16)}, ${Fd}/${Wd} blocks differ${Od.missed?`, ${Od.missed} GPU-side writes uncopied`:""}`;
      if (0 === Fd) return Rd;
      const {
        count: Xd,
        offsets: Kd
      } = function(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const Wd = Math.min(dd.length, Od.length);
        let Fd = Math.abs(dd.length - Od.length);
        const Rd = [];
        for (let Xd = 0; Xd < Wd; Xd++) dd[Xd] !== Od[Xd] && (Fd++, Rd.length < md && Rd.push(Xd));
        return {
          count: Fd,
          offsets: Rd
        }
      }(Od.bytes, md);
      return jd([`${Rd}: ${Xd} bytes differ`, ...Kd.map((dd => `  +${dd}: cpu ${qd(Od.bytes,dd)} | gpu ${qd(md,dd)}`))].join("\n")), `${Rd}: ${Xd} bytes differ, first at ${Kd.join(", ")} (context in the saved file)`
    }

    function RO(dd) {
      if (0 === dd.vertices.length) return void cd(`decode probe (${dd.reason}): no terrain draw probed (${dd.draws.length} seen)`);
      const Od = function(dd) {
          const Od = new Map;
          for (const Wd of dd) {
            const dd = Od.get(Wd.group);
            dd ? dd.push(Wd) : Od.set(Wd.group, [Wd])
          }
          const md = {
            vertices: dd.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [Wd, Fd] of Od) {
            const dd = new Map,
              Od = Fd.map((Od => {
                const md = Qd(Od.record, Od.slot),
                  Wd = [Od.gpu[0] - md[0], Od.gpu[1] - md[1], Od.gpu[2] - md[2]],
                  Fd = Wd.map((dd => Math.round(64 * dd))).join(","),
                  Rd = dd.get(Fd);
                return Rd ? Rd.count++ : dd.set(Fd, {
                  count: 1,
                  offset: Wd
                }), md
              }));
            let Rd = [0, 0, 0],
              Xd = 0;
            for (const md of dd.values()) md.count > Xd && (Xd = md.count, Rd = md.offset);
            md.translations.set(Wd, Rd), Fd.forEach(((dd, Wd) => {
              var Fd;
              const Xd = [Od[Wd][0] + Rd[0], Od[Wd][1] + Rd[1], Od[Wd][2] + Rd[2]];
              if (Xd.every(((Od, md) => {
                  return Wd = dd.gpu[md], Fd = Od, Math.abs(Wd - Fd) <= Math.max(.001, 1e-6 * Math.abs(Fd));
                  var Wd, Fd
                }))) return;
              md.mismatches++, md.byDirection[Kd(dd.record[2])]++, md.byDiagonal[hd(dd.record[2])]++;
              const vd = td(dd.record);
              md.byBand[vd] = (null !== (Fd = md.byBand[vd]) && void 0 !== Fd ? Fd : 0) + 1, md.first.length < od && md.first.push({
                ...dd,
                expected: Xd
              })
            }))
          }
          return md
        }(dd.vertices),
        md = Od.byDirection.map(((dd, Od) => dd ? `${Xd[Od]} ${dd}` : "")).filter(Boolean).join(" "),
        Wd = Object.entries(Od.byBand).map((dd => {
          let [Od, md] = dd;
          return `${Od}: ${md}`
        })).join(" ");
      if (cd(`decode probe (${dd.reason}): ${Od.mismatches}/${Od.vertices} vertices differ from the CPU decode over ${dd.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (Od.mismatches ? ` by direction [${md}] diagonal [0: ${Od.byDiagonal[0]} 1: ${Od.byDiagonal[1]}] extent [${Wd}]` : "")), dd.fed.records > 0 || dd.fed.failed > 0) {
        cd(`decode probe input: ${dd.fed.differing}/${dd.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (dd.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (dd.fed.failed ? `; the feed failed on ${dd.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const Od of dd.fed.first) cd(`  ${Od}`)
      }
      for (const Fd of Od.first) {
        const [dd, Od, md] = Fd.record;
        cd(`  mismatch part ${Fd.group} r0 ${dd.toString(16)} r1 ${Od.toString(16)} r2 ${md.toString(16)} slot ${Fd.slot} (${Xd[Kd(md)]}): expected ${Fd.expected.map(KO).join(",")} gpu ${Fd.gpu.map(KO).join(",")}`)
      }
      jd(`decode probe translations: ${[...Od.translations].map((dd=>{let[Od,md]=dd;return`${Od}: ${md.map(KO).join(",")}`})).join("; ")}`)
    }

    function XO(dd) {
      return dd.toString(16)
    }

    function KO(dd) {
      return Number.isInteger(dd) ? String(dd) : dd.toFixed(3)
    }

    function hO(dd) {
      return null !== Ad.pendingCheck ? Promise.resolve() : new Promise((Od => {
        let md = !1;
        const Wd = {
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
        Ad.pendingCheck = Wd;
        const Fd = () => {
            Ad.pendingCheck = null;
            try {
              ! function(dd) {
                cd(`draw ranges (${dd.reason}): ${dd.terrainDraws} terrain draws in the frame, the first ${dd.draws.length} here`);
                for (const Od of dd.draws) {
                  const dd = Od.By.slice(0, 8).map((dd => {
                      let [Od, md] = dd;
                      return `${Od}+${md}`
                    })).join(" "),
                    md = Od.By.length > 8 ? ` (+${Od.By.length-8} ranges)` : "";
                  cd(`  ${Sd(Od.program)} ${Od.program.terrain} ${Od.call} ${dd}${md} x${Od.instances}${Od.group>=0?` part ${Od.group} chunk ${Od.chunk}`:""} | ${Od.attributes.join(" | ")}`)
                }
              }(Wd), RO(Wd);
              Wd.draws.some((dd => "undefined" !== typeof WebGL2RenderingContext && dd.gl instanceof WebGL2RenderingContext)) || 0 === Wd.draws.length ? function(dd) {
                const Od = [],
                  md = new Map;
                for (const Wd of dd)
                  if ("undefined" !== typeof WebGL2RenderingContext && Wd.gl instanceof WebGL2RenderingContext)
                    for (const dd of Wd.pages) md.set("buf" === dd.kind ? dd.buffer : dd.texture, {
                      page: dd,
                      gl: Wd.gl
                    });
                for (const [Wd, {
                    page: Fd,
                    gl: Rd
                  }] of md) {
                  const dd = ud.get(Wd);
                  if (!dd) {
                    Od.push(`${Fd.kind}#${nd(Wd)}: no CPU copy (${Ad.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === Fd.kind) {
                    Od.push(FO(`buf#${dd.id}`, dd, fd(Rd, Fd.buffer, 0, dd.bytes.length)));
                    continue
                  }
                  const md = WO(Rd, Fd.texture, dd.width, 0, dd.width * dd.height),
                    Xd = 16 === dd.texelBytes ? new Uint8Array(md.buffer) : new Uint8Array(new Uint16Array(md).buffer);
                  Od.push(FO(`tex#${dd.id} (${16===dd.texelBytes?"records":"light"})`, dd, Xd))
                }
                for (const Wd of Od) cd(`page readback ${Wd}`)
              }(Wd.draws) : cd("page readback: none on WebGL1 (no buffer readback)")
            } catch (dd) {
              cd(`check failed: ${String(dd)}`)
            }
            Od()
          },
          Rd = () => {
            if (Wd.draws.length > 0 && !md) return md = !0, void setTimeout(Fd, 0);
            md || requestAnimationFrame(Rd)
          };
        requestAnimationFrame(Rd), setTimeout((() => {
          md || (md = !0, Fd())
        }), 5e3)
      }))
    }
    var vO = md(5426);
    const QO = 20,
      tO = 24,
      oO = Reflect.apply;

    function NO(dd, Od, md) {
      if (!dd) return;
      const Wd = dd[Od];
      if ("function" === typeof Wd) {
        const Fd = md(Wd);
        dd[Od] = Fd, (0, vO.t)(Fd, Wd)
      }
    }
    let qO = !1;
    const HO = new WeakMap,
      yO = new WeakMap,
      bO = new WeakMap,
      TO = {
        gl: 0,
        lost: 0
      };
    let pO = {
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
      YO = {
        buffer: 0,
        texture: 0
      },
      gO = 0;

    function wO(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (dd instanceof ArrayBuffer) return new Uint8Array(dd, Od, md || void 0);
      if (!ArrayBuffer.isView(dd)) return null;
      const Wd = "BYTES_PER_ELEMENT" in dd ? dd.BYTES_PER_ELEMENT : 1,
        Fd = dd.byteOffset + Od * Wd,
        Rd = md ? md * Wd : dd.byteLength - Od * Wd;
      return new Uint8Array(dd.buffer, Fd, Math.max(0, Rd))
    }

    function aO(dd, Od) {
      const md = function(dd) {
        switch (dd) {
          case Hd.ARRAY_BUFFER:
            return Hd.ARRAY_BUFFER_BINDING;
          case Hd.ELEMENT_ARRAY_BUFFER:
            return Hd.ELEMENT_ARRAY_BUFFER_BINDING;
          case Hd.COPY_READ_BUFFER:
            return Hd.COPY_READ_BUFFER_BINDING;
          case Hd.COPY_WRITE_BUFFER:
            return Hd.COPY_WRITE_BUFFER_BINDING;
          case Hd.UNIFORM_BUFFER:
            return Hd.UNIFORM_BUFFER_BINDING;
          case Hd.PIXEL_UNPACK_BUFFER:
            return Hd.PIXEL_UNPACK_BUFFER_BINDING;
          case Hd.TRANSFORM_FEEDBACK_BUFFER:
            return Hd.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(Od);
      return md ? dd.getParameter(md) : null
    }

    function EO(dd) {
      const Od = ud.get(dd);
      Od && (Ad.shadowBytes -= Od.bytes.length, ud.delete(dd))
    }

    function JO(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      EO(dd), Ad.shadowBytes + Od > Ud ? Ad.uncopied++ : (Ad.shadowBytes += Od, ud.set(dd, {
        id: nd(dd),
        bytes: new Uint8Array(Od),
        width: md,
        height: Wd,
        texelBytes: Fd,
        missed: 0
      }))
    }

    function UO(dd, Od) {
      for (const md of ["deleteBuffer", "deleteTexture"]) NO(dd, md, (dd => function() {
        for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
        return md[0] && EO(md[0]), oO(dd, this, md)
      }));
      NO(dd, "shaderSource", (dd => function() {
        for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
        return md[0] && "string" === typeof md[1] && HO.set(md[0], md[1]), oO(dd, this, md)
      })), NO(dd, "attachShader", (dd => function() {
        for (var Od, md = arguments.length, Wd = new Array(md), Fd = 0; Fd < md; Fd++) Wd[Fd] = arguments[Fd];
        const Rd = Wd[0],
          Xd = null !== (Od = yO.get(Rd)) && void 0 !== Od ? Od : [];
        return Xd.push(Wd[1]), yO.set(Rd, Xd), oO(dd, this, Wd)
      })), NO(dd, "linkProgram", (dd => function() {
        for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
        const Fd = oO(dd, this, md);
        return Ad.inProbe || function(dd, Od) {
          var md, Wd, Fd;
          "undefined" !== typeof HTMLCanvasElement && dd.canvas instanceof HTMLCanvasElement && function(dd) {
            if (VO.has(dd)) return;
            VO.add(dd);
            for (const Od of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) dd.addEventListener(Od, (dd => {
              TO.lost < QO && (TO.lost++, cd(`${Od}${"statusMessage"in dd?`: ${String(dd.statusMessage)}`:""}`))
            }))
          }(dd.canvas);
          Ad.context ??= dd;
          const Rd = null !== (md = yO.get(Od)) && void 0 !== md ? md : [];
          let Xd = "",
            Kd = "";
          for (const Qd of Rd) {
            var hd;
            const dd = null !== (hd = HO.get(Qd)) && void 0 !== hd ? hd : "";
            /\bgl_Position\b/.test(dd) ? Xd = dd : Kd = dd
          }
          const vd = {
            id: nd(Od),
            name: null !== (Wd = null === (Fd = Bd.exec(Xd)) || void 0 === Fd ? void 0 : Fd[1]) && void 0 !== Wd ? Wd : null,
            gl: dd,
            vertex: Xd,
            fragment: Kd,
            terrain: BO(Xd),
            checked: !1,
            firstDraw: !1
          };
          if (bO.set(Od, vd), sd.push([Od, vd]), null !== vd.terrain) {
            const Od = Rd.map((Od => {
              var md;
              return null !== (md = dd.getShaderInfoLog(Od)) && void 0 !== md ? md : ""
            })).filter((dd => "" !== dd.trim()));
            Od.length > 0 && jd(`program ${Sd(vd)} (${vd.terrain}) shader logs:\n${Dd(Od.join("\n"))}`)
          }
        }(this, md[0]), Fd
      })), NO(dd, "bufferData", (dd => function() {
        for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
        const Fd = oO(dd, this, md);
        if (!Ad.inProbe) {
          const dd = aO(this, md[0]);
          if (dd) {
            var Rd, Xd, Kd;
            const Od = "number" === typeof md[1] ? null : wO(md[1], null !== (Rd = md[3]) && void 0 !== Rd ? Rd : 0, null !== (Xd = md[4]) && void 0 !== Xd ? Xd : 0);
            var hd;
            if (JO(dd, "number" === typeof md[1] ? md[1] : null !== (Kd = null === Od || void 0 === Od ? void 0 : Od.length) && void 0 !== Kd ? Kd : 0), Od) null === (hd = ud.get(dd)) || void 0 === hd || hd.bytes.set(Od)
          }
        }
        return Fd
      })), NO(dd, "bufferSubData", (dd => function() {
        for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
        const Fd = oO(dd, this, md);
        if (!Ad.inProbe) {
          var Rd, Xd;
          const dd = aO(this, md[0]),
            Od = dd ? ud.get(dd) : void 0,
            Wd = wO(md[2], null !== (Rd = md[3]) && void 0 !== Rd ? Rd : 0, null !== (Xd = md[4]) && void 0 !== Xd ? Xd : 0);
          if (Od && Wd) {
            const dd = md[1];
            Od.bytes.set(Wd.subarray(0, Math.max(0, Od.bytes.length - dd)), dd), xO("buffer", Od, dd, Wd.length)
          }
        }
        return Fd
      })), Od && (NO(dd, "copyBufferSubData", (dd => function() {
        for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
        const Fd = oO(dd, this, md);
        if (!Ad.inProbe) {
          const [dd, Od, Wd, Fd, Rd] = md, Xd = aO(this, dd), Kd = aO(this, Od), hd = Xd ? ud.get(Xd) : void 0, vd = Kd ? ud.get(Kd) : void 0;
          vd && (hd ? vd.bytes.set(hd.bytes.slice(Wd, Wd + Rd), Fd) : vd.missed++)
        }
        return Fd
      })), NO(dd, "texStorage2D", (dd => function() {
        for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
        const Fd = oO(dd, this, md),
          [, , Rd, Xd, Kd] = md;
        if (!Ad.inProbe && (Rd === Hd.RGBA32UI || Rd === Hd.RGBA16UI)) {
          const dd = this.getParameter(Hd.TEXTURE_BINDING_2D),
            Od = Rd === Hd.RGBA32UI ? 16 : 8;
          dd && (Vd.set(dd, Od), JO(dd, Xd * Kd * Od, Xd, Kd, Od))
        }
        return Fd
      })), NO(dd, "texSubImage2D", (dd => function() {
        for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
        const Fd = oO(dd, this, md);
        return !Ad.inProbe && md.length >= 9 && md[0] === Hd.TEXTURE_2D && 0 === md[1] && function(dd, Od) {
          var md;
          const Wd = dd.getParameter(Hd.TEXTURE_BINDING_2D),
            Fd = Wd ? ud.get(Wd) : void 0;
          if (!Fd) return;
          const [, , Rd, Xd, Kd, hd] = Od;
          let vd = wO(Od[8], null !== (md = Od[9]) && void 0 !== md ? md : 0);
          if (null === vd && "number" === typeof Od[8]) {
            const md = aO(dd, Hd.PIXEL_UNPACK_BUFFER),
              Wd = md ? ud.get(md) : void 0;
            vd = Wd ? Wd.bytes.subarray(Od[8]) : null
          }
          if (null === vd) return void Fd.missed++;
          const Qd = dd.getParameter(Hd.UNPACK_ROW_LENGTH) || Kd,
            td = dd.getParameter(Hd.UNPACK_SKIP_ROWS),
            od = dd.getParameter(Hd.UNPACK_SKIP_PIXELS),
            Nd = Fd.texelBytes;
          for (let qd = 0; qd < hd; qd++) {
            const dd = ((td + qd) * Qd + od) * Nd,
              Od = ((Xd + qd) * Fd.width + Rd) * Nd;
            Fd.bytes.set(vd.subarray(dd, dd + Kd * Nd), Od)
          }
          xO("texture", Fd, (Xd * Fd.width + Rd) * Nd, Kd * hd * Nd)
        }(this, md), Fd
      })), NO(dd, "copyTexSubImage2D", (dd => function() {
        for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
        const Fd = md[0] === Hd.TEXTURE_2D ? this.getParameter(Hd.TEXTURE_BINDING_2D) : null,
          Rd = Fd ? ud.get(Fd) : void 0;
        return Rd && Rd.missed++, oO(dd, this, md)
      })));
      for (const md of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) NO(dd, md, (dd => function() {
        for (var Od = arguments.length, Wd = new Array(Od), Fd = 0; Fd < Od; Fd++) Wd[Fd] = arguments[Fd];
        const Rd = oO(dd, this, Wd);
        return Ad.inProbe || sO(this, md, Wd), Rd
      }));
      NO(dd, "getExtension", (dd => function() {
        for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
        const Fd = oO(dd, this, md);
        return Fd && "object" === typeof Fd && function(dd, Od, md) {
          const Wd = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(Od in Wd) || md.bloxdRenderDebug) return;
          md.bloxdRenderDebug = !0;
          for (const Fd of Wd[Od]) {
            const Od = md[Fd];
            "function" === typeof Od && (md[Fd] = function() {
              for (var Wd = arguments.length, Rd = new Array(Wd), Xd = 0; Xd < Wd; Xd++) Rd[Xd] = arguments[Xd];
              const Kd = oO(Od, md, Rd);
              return Ad.inProbe || sO(dd, Fd, Rd), Kd
            })
          }
        }(this, md[0], Fd), Fd
      }))
    }

    function xO(dd, Od, md, Wd) {
      YO[dd] += Wd, gO < 32 && Od.bytes.length >= 1 << 20 && (gO++, jd(`upload ${dd} #${Od.id} +${md} ${Wd} B`))
    }

    function BO(dd) {
      if (!dd.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(dd) || /in uvec3 _p2vs_location0\b/.test(dd) ? "inst" : "tex"
    }

    function SO(dd, Od, md) {
      var Wd;
      if (md.checked) return;
      md.checked = !0;
      const Fd = dd.getProgramParameter(Od, Hd.LINK_STATUS),
        Rd = (null !== (Wd = dd.getProgramInfoLog(Od)) && void 0 !== Wd ? Wd : "").trim();
      var Xd;
      null === md.terrain && Fd || (cd(`program ${Sd(md)} ${null!==(Xd=md.terrain)&&void 0!==Xd?Xd:"other"} link ${Fd?"ok":"FAILED"}${Rd?`: ${Dd(Rd,300)}`:""}`), Rd && jd(`program ${Sd(md)} link log:\n${Dd(Rd)}`))
    }

    function sO(dd, Od, md) {
      var Wd;
      const Fd = dd.getParameter(Hd.CURRENT_PROGRAM),
        Rd = Fd ? bO.get(Fd) : void 0;
      if (!Fd || !Rd) return;
      const Xd = null !== (Wd = Rd.terrain) && void 0 !== Wd ? Wd : "other",
        {
          By: Kd,
          instances: hd
        } = function(dd, Od) {
          switch (dd) {
            case "drawArrays":
              return {
                By: [
                  [Od[1], Od[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                By: [
                  [Od[1], Od[2]]
                ], instances: Od[3]
              };
            case "drawElements":
              return {
                By: [
                  [0, Od[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                By: [
                  [0, Od[1]]
                ], instances: Od[4]
              };
            case "multiDrawArraysWEBGL": {
              const dd = Od[1],
                md = Od[3],
                Wd = Od[2],
                Fd = Od[4],
                Rd = [];
              for (let Xd = 0; Xd < Od[5]; Xd++) Rd.push([dd[Wd + Xd], md[Fd + Xd]]);
              return {
                By: Rd,
                instances: 1
              }
            }
            default:
              return {
                By: [], instances: 0
              }
          }
        }(Od, md),
        vd = "inst" === Rd.terrain ? hd : Kd.reduce(((dd, Od) => {
          let [, md] = Od;
          return dd + md
        }), 0) / 6;
      if (pO[Xd].draws++, pO[Xd].faces += vd, null === Rd.terrain) return;
      if (Ad.context = dd, !Rd.firstDraw) {
        Rd.firstDraw = !0, SO(dd, Fd, Rd), uO || (uO = !0, cd(function(dd) {
          var Od;
          const md = dd.getParameter(Hd.DEPTH_FUNC),
            Wd = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let Fd = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in dd && dd.getParameter(Hd.DRAW_FRAMEBUFFER_BINDING)) {
            const Od = dd;
            Fd = Od.getFramebufferAttachmentParameter(Hd.DRAW_FRAMEBUFFER, Hd.DEPTH_ATTACHMENT, Hd.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(Od.getFramebufferAttachmentParameter(Hd.DRAW_FRAMEBUFFER,Hd.DEPTH_ATTACHMENT,Hd.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(Od.getFramebufferAttachmentParameter(Hd.DRAW_FRAMEBUFFER,Hd.DEPTH_ATTACHMENT,Hd.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const Rd = dd.getParameter(Hd.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(Od=Wd[md])&&void 0!==Od?Od:`0x${md.toString(16)}`} clear ${Rd}${516===md||518===md?" (reverse-Z)":""}, samples ${String(dd.getParameter(Hd.SAMPLES))}, ${Fd}`
        }(dd)));
        const md = dd.getError();
        md !== Hd.NO_ERROR && TO.gl < QO && (TO.gl++, cd(`GL error 0x${md.toString(16)} after program ${Sd(Rd)}'s first terrain draw (${Od})`))
      }
      const Qd = Ad.pendingCheck;
      null !== Qd && (Qd.terrainDraws++, Qd.draws.length < tO && ed(dd, Fd, Rd, Od, Kd, hd))
    }
    let uO = !1;
    const VO = new WeakSet;
    var iO = md(5169),
      AO = md(5431);
    const rO = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let GO = !1;
    const nO = new WeakSet,
      LO = new WeakMap,
      PO = new WeakMap,
      zO = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let cO = 0,
      jO = !1,
      DO = null,
      eO = {
        draws: 0,
        faces: 0
      };

    function IO(dd) {
      const Od = globalThis[dd];
      return null === Od || void 0 === Od ? void 0 : Od.prototype
    }

    function lO(dd) {
      return dd && "function" === typeof dd[Symbol.iterator] ? [...dd].sort().join(" ") : ""
    }

    function CO(dd, Od) {
      const md = null !== dd && void 0 !== dd ? dd : {},
        Wd = null !== Od && void 0 !== Od ? Od : Object.keys(Object.getPrototypeOf(md)).concat(Object.keys(md));
      return [...new Set(Wd)].filter((dd => "number" === typeof md[dd])).map((dd => `${dd} ${String(md[dd])}`)).join(", ")
    }

    function ZO(dd, Od) {
      var md;
      const Wd = null !== (md = Od.vertex) && void 0 !== md ? md : {};
      if (Wd.module && nO.has(Wd.module)) {
        var Fd;
        const md = String(null !== (Fd = Wd.entryPoint) && void 0 !== Fd ? Fd : "");
        if (md.startsWith("vs_packed") && LO.set(dd, md), !jO) {
          var Rd, Xd, Kd, hd, vd;
          jO = !0;
          const dd = null !== (Rd = Od.depthStencil) && void 0 !== Rd ? Rd : {},
            Wd = null !== (Xd = Od.multisample) && void 0 !== Xd ? Xd : {},
            Fd = String(null !== (Kd = dd.depthCompare) && void 0 !== Kd ? Kd : "");
          cd(`WebGPU terrain pipeline ${md}: depth ${String(null!==(hd=dd.format)&&void 0!==hd?hd:"none")} ${Fd}${Fd.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(vd=Wd.count)&&void 0!==vd?vd:1)}`)
        }
      }
    }

    function kO(dd) {
      NO(dd, "setPipeline", (dd => function() {
        for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
        return PO.set(this, md[0]), oO(dd, this, md)
      }));
      for (const Od of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) NO(dd, Od, (dd => function() {
        const md = PO.get(this),
          Wd = md ? LO.get(md) : void 0;
        for (var Fd = arguments.length, Rd = new Array(Fd), Xd = 0; Xd < Fd; Xd++) Rd[Xd] = arguments[Xd];
        return void 0 !== Wd && fO(Od, Wd, Rd), oO(dd, this, Rd)
      }))
    }

    function fO(dd, Od, md) {
      var Wd;
      (eO.draws++, "draw" === dd || "drawIndexed" === dd) && (eO.faces += md[0] * (null !== (Wd = md[1]) && void 0 !== Wd ? Wd : 1) / 6);
      if (null !== DO && DO.length < tO) {
        const Wd = ("draw" === dd ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === dd ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((Od, Wd) => {
          const Fd = dd.endsWith("Indirect") ? md[1] : md[Wd];
          return `${Od} ${String(null!==Fd&&void 0!==Fd?Fd:"instances"===Od?1:0)}`
        }));
        DO.push(`  ${Od} ${dd} ${Wd.join(" ")}`)
      }
    }

    function MO() {
      if (GO || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      GO = !0, NO(IO("GPU"), "requestAdapter", (dd => function() {
        for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
        return oO(dd, this, md).then((dd => {
          var Od;
          dd ? function(dd) {
            var Od;
            const md = null !== (Od = dd.info) && void 0 !== Od ? Od : {};
            cd(`WebGPU adapter ${["vendor","architecture","device","description"].map((dd=>{var Od;return`${dd} "${String(null!==(Od=md[dd])&&void 0!==Od?Od:"")}"`})).join(" ")}${dd.isFallbackAdapter?" (fallback)":""}`), cd(`WebGPU adapter features ${lO(dd.features)}`), cd(`WebGPU adapter limits ${CO(dd.limits,rO)}`), jd(`WebGPU adapter all limits ${CO(dd.limits,null)}`)
          }(dd) : cd(`WebGPU requestAdapter(${JSON.stringify(null!==(Od=md[0])&&void 0!==Od?Od:{})}) gave none`);
          return dd
        }))
      })), NO(IO("GPUAdapter"), "requestDevice", (dd => function() {
        for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
        return oO(dd, this, md).then((dd => (function(dd) {
          cd(`WebGPU device features ${lO(dd.features)}`), cd(`WebGPU device limits ${CO(dd.limits,rO)}`), dd.addEventListener("uncapturederror", (dd => {
            if (zO.uncaptured < QO) {
              var Od, md, Wd;
              zO.uncaptured++;
              const Fd = dd.error;
              cd(`WebGPU uncaptured ${null!==(Od=null===Fd||void 0===Fd||null===(md=Fd.constructor)||void 0===md?void 0:md.name)&&void 0!==Od?Od:"error"}: ${Dd(String(null!==(Wd=null===Fd||void 0===Fd?void 0:Fd.message)&&void 0!==Wd?Wd:""),600)}`)
            }
          }));
          const Od = dd.lost;
          null === Od || void 0 === Od || Od.then((dd => {
            var Od;
            cd(`WebGPU device lost (${String(dd.reason)}): ${Dd(String(null!==(Od=dd.message)&&void 0!==Od?Od:""),600)}`)
          }))
        }(dd), dd)), (dd => {
          throw cd(`WebGPU requestDevice failed: ${String(dd)}`), dd
        }))
      }));
      const dd = IO("GPUDevice");
      NO(dd, "createShaderModule", (dd => function() {
        for (var Od, md, Wd = arguments.length, Fd = new Array(Wd), Rd = 0; Rd < Wd; Rd++) Fd[Rd] = arguments[Rd];
        const Xd = oO(dd, this, Fd);
        return function(dd, Od) {
          const md = Od.includes("decodeQuad");
          md && nO.add(dd);
          const Wd = dd.getCompilationInfo;
          null === Wd || void 0 === Wd || Wd.call(dd).then((dd => {
            if (0 === dd.messages.length && !md) return;
            const Od = {};
            for (const md of dd.messages) {
              var Wd;
              Od[String(md.type)] = (null !== (Wd = Od[String(md.type)]) && void 0 !== Wd ? Wd : 0) + 1
            }
            const Fd = dd.messages.map((dd => `${String(dd.type)} ${String(dd.lineNum)}:${String(dd.linePos)} ${String(dd.message)}`)).join("\n");
            zO.compile < QO && (zO.compile++, cd(`WebGPU ${md?"terrain ":""}shader module compiled: ${JSON.stringify(Od)}${Fd?` first: ${Dd(Fd.split("\n")[0],300)}`:""}`)), Fd && jd(`WebGPU shader module messages:\n${Dd(Fd)}`)
          }))
        }(Xd, String(null !== (Od = (null !== (md = Fd[0]) && void 0 !== md ? md : {}).code) && void 0 !== Od ? Od : "")), Xd
      })), NO(dd, "createRenderPipeline", (dd => function() {
        for (var Od, md = arguments.length, Wd = new Array(md), Fd = 0; Fd < md; Fd++) Wd[Fd] = arguments[Fd];
        const Rd = oO(dd, this, Wd);
        return ZO(Rd, null !== (Od = Wd[0]) && void 0 !== Od ? Od : {}), Rd
      })), NO(dd, "createRenderPipelineAsync", (dd => function() {
        for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
        return oO(dd, this, md).then((dd => {
          var Od;
          return ZO(dd, null !== (Od = md[0]) && void 0 !== Od ? Od : {}), dd
        }), (dd => {
          var Od;
          throw function(dd, Od) {
            var md, Wd, Fd;
            if (zO.rejected >= QO) return;
            zO.rejected++;
            const {
              reason: Rd,
              message: Xd
            } = null !== Od && void 0 !== Od ? Od : {}, Kd = String(null !== (md = (null !== (Wd = dd.vertex) && void 0 !== Wd ? Wd : {}).entryPoint) && void 0 !== md ? md : "");
            cd(`WebGPU pipeline "${String(null!==(Fd=dd.label)&&void 0!==Fd?Fd:"")}" ${Kd} rejected (${String(null!==Rd&&void 0!==Rd?Rd:"no reason")}): ${Dd(String(null!==Xd&&void 0!==Xd?Xd:Od),600)}`)
          }(null !== (Od = md[0]) && void 0 !== Od ? Od : {}, dd), dd
        }))
      })), NO(IO("GPUCanvasContext"), "configure", (dd => function() {
        for (var Od, md = arguments.length, Wd = new Array(md), Fd = 0; Fd < md; Fd++) Wd[Fd] = arguments[Fd];
        const Rd = null !== (Od = Wd[0]) && void 0 !== Od ? Od : {};
        var Xd, Kd;
        cO++ < 3 && cd(`WebGPU canvas ${String(Rd.format)} ${String(null!==(Xd=Rd.colorSpace)&&void 0!==Xd?Xd:"srgb")} alpha ${String(null!==(Kd=Rd.alphaMode)&&void 0!==Kd?Kd:"opaque")}`);
        return oO(dd, this, Wd)
      })), kO(IO("GPURenderPassEncoder")), kO(IO("GPURenderBundleEncoder"))
    }
    const dm = 1e4,
      Om = 6e4,
      mm = 5e3,
      Wm = 3e3,
      Fm = 100;
    let Rm = null,
      Xm = !1,
      Km = {
        ...iO.e
      },
      hm = !1,
      Qm = null,
      tm = 0,
      om = () => {};
    const Nm = new Promise((dd => {
      om = dd
    }));

    function qm() {
      var dd;
      Xm || (Xm = !0, Km = Object.assign(window.bloxdRenderDebug ??= {
        ...iO.e
      }, {
        faceCull: "0" === (0, Rd.m)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (dd = (0, Rd.m)("adrenoProbe")) && void 0 !== dd ? dd : ""
      }), cd("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), qO || "undefined" === typeof window || (qO = !0, "undefined" !== typeof WebGL2RenderingContext && UO(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && UO(WebGLRenderingContext.prototype, !1)), MO(), (0, Rd.b)("renderProbe", (() => {
        Ym("console")
      })), Tm(), setInterval(wm, mm))
    }

    function Hm(dd) {
      var Od, md;
      qm(), Rm = null !== (Od = null === dd || void 0 === dd ? void 0 : dd.backend) && void 0 !== Od ? Od : null;
      const Wd = `, renderer param ${null!==(md=(0,Rd.m)("renderer"))&&void 0!==md?md:"none"}, faceCull ${"0"===Km.faceCull?"off (whole parts)":"on"}, adrenoProbe ${Km.adrenoProbe||"none"}`;
      cd(`${(0,AO.e)(dd)}${null===dd?"":Wd}`)
    }

    function ym() {
      const dd = performance.now(),
        Od = bm(Nm, dm, Om).then((Od => Ym(`${Math.round((performance.now()-dd)/1e3)} s after playable${Od?"":", no terrain drawn yet"}`)));
      (0, Fd.c)(cd, (async () => {
        await Od, await Qm
      }))
    }
    async function bm(dd, Od, md) {
      const Fd = (0, Wd.c)(md).then((() => !1));
      return await (0, Wd.c)(Od), Promise.race([dd.then((() => !0)), Fd])
    }

    function Tm() {
      requestAnimationFrame((() => {
        tm++, Tm()
      }))
    }

    function pm() {
      var dd, Od, md;
      if (hm) return;
      (hm = !0, cd(`renderer caps ${null!==(dd=Km.caps)&&void 0!==dd?dd:"(not noted)"}; terrain fetch ${null!==(Od=Km.fetch)&&void 0!==Od?Od:"(not noted)"}`), Km.adrenoProbe) && cd(`adrenoProbe ${Km.adrenoProbe} asked; in force (storage fetch only): ${null!==(md=Km.probe)&&void 0!==md?md:"(not noted)"}`);
      const Wd = Ad.context;
      if (Wd) {
        for (const dd of function(dd) {
            var Od;
            const md = [],
              Wd = dd.getExtension("WEBGL_debug_renderer_info"),
              Fd = Wd ? dd.getParameter(Wd.UNMASKED_VENDOR_WEBGL) : "(masked)",
              Rd = Wd ? dd.getParameter(Wd.UNMASKED_RENDERER_WEBGL) : "(masked)";
            md.push(`GL ${String(dd.getParameter(dd.VERSION))} | ${String(dd.getParameter(dd.SHADING_LANGUAGE_VERSION))} | ${String(dd.getParameter(dd.VENDOR))} / ${String(dd.getParameter(dd.RENDERER))}`), md.push(`GL unmasked ${Fd} / ${Rd}`);
            const Xd = [
              ["MAX_TEXTURE_SIZE", dd.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", dd.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", dd.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", dd.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", dd.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", dd.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", dd.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in dd && Xd.push(["MAX_UNIFORM_BLOCK_SIZE", dd.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", dd.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", dd.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", dd.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), md.push(`GL limits ${Xd.map((Od=>{let[md,Wd]=Od;return`${md} ${String(dd.getParameter(Wd))}`})).join(", ")}`);
            const Kd = (Od, md) => {
              const Wd = dd.getShaderPrecisionFormat(Od, dd.HIGH_FLOAT),
                Fd = dd.getShaderPrecisionFormat(Od, dd.HIGH_INT);
              return `${md} highp float ${Wd?`${Wd.rangeMin}/${Wd.rangeMax}/${Wd.precision}`:"?"} int ${Fd?`${Fd.rangeMin}/${Fd.rangeMax}/${Fd.precision}`:"?"}`
            };
            md.push(`GL precision ${Kd(dd.VERTEX_SHADER,"VS")}, ${Kd(dd.FRAGMENT_SHADER,"FS")}`);
            const hd = dd.getContextAttributes();
            return md.push(`GL context ${JSON.stringify(hd)} drawingBuffer ${dd.drawingBufferWidth}x${dd.drawingBufferHeight}${"drawingBufferFormat"in dd?` format 0x${Number(dd.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in dd?` ${String(dd.drawingBufferColorSpace)}`:""}`), md.push(`GL extensions ${(null!==(Od=dd.getSupportedExtensions())&&void 0!==Od?Od:[]).join(" ")}`), md
          }(Wd)) cd(dd);
        ! function() {
          if (!Ad.context) return;
          let dd = 0,
            Od = 0;
          for (const [md, Wd] of sd) !Wd.gl.isContextLost() && Wd.gl.isProgram(md) && (Od++, SO(Wd.gl, md, Wd), null !== Wd.terrain && dd++);
          cd(`programs: ${Od} live of ${sd.length} linked, ${dd} packed terrain; CPU page copies ${Math.round(Ad.shadowBytes/1048576)} MiB (${Ad.uncopied} over budget)`)
        }()
      }
    }

    function Ym(dd) {
      return Qm ??= async function(dd) {
        pm(), "webgpu" === Rm ? (gm(), "1" === Km.slotCheck && cd("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), Km.slotCheck = "1", await
          function(dd) {
            if (null !== DO) return Promise.resolve();
            const Od = [];
            return DO = Od, new Promise((md => {
              setTimeout((() => {
                DO = null, cd(`WebGPU draw ranges (${dd}): ${Od.length} terrain draws recorded in a second (first ${tO}; bundles replay without new ones)`);
                for (const dd of Od) cd(dd);
                md()
              }), 1e3)
            }))
          }(dd), await async function() {
            if (await (0, iO.j)(Km, "slotCheck", ["1"], Wm, Fm), "1" === Km.slotCheck) return void cd(`slot check: no answer in ${Wm} ms (only the storage fetch has one; a later answer logs on its own)`);
            gm()
          }()) : await hO(dd);
        cd(`check (${dd}) done: bloxdDebug.save() downloads it all`)
      }(dd).catch((Od => {
        cd(`check (${dd}) failed: ${String(Od)}`)
      })).finally((() => {
        Qm = null
      })), Qm
    }

    function gm() {
      void 0 !== Km.slotCheck && "1" !== Km.slotCheck && (cd(Km.slotCheck), delete Km.slotCheck)
    }

    function wm() {
      const dd = dd => tm ? (dd / tm).toFixed(1) : "0",
        Od = function() {
          const dd = eO;
          return eO = {
            draws: 0,
            faces: 0
          }, dd
        }(),
        md = function() {
          const dd = pO;
          return pO = {
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
        Wd = function() {
          const dd = YO;
          return YO = {
            buffer: 0,
            texture: 0
          }, dd
        }();
      gm(), ("webgpu" === Rm ? Od.draws : md.inst.draws + md.tex.draws) > 0 && om();
      const Fd = "webgpu" === Rm ? [`terrain ${dd(Od.draws)} draws ${dd(Od.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((dd => md[dd].draws > 0)).map((Od => `${Od} ${dd(md[Od].draws)} draws ${dd(md[Od].faces)} faces a frame`));
      cd(`${tm} frames: ${Fd.join(", ")||"no draws"}; uploaded ${Math.round(Wd.buffer/1024)} KiB to buffers, ${Math.round(Wd.texture/1024)} KiB to data textures`), tm = 0
    }
  },
  5431: (dd, Od, md) => {
    function Wd(dd) {
      if (null === dd) return "backend: none picked (no renderer build)";
      const Od = dd.adapter ? `${dd.adapter.vendor}/${dd.adapter.architecture}` : "none";
      return `backend ${dd.backend}: reason ${dd.reason}, source ${dd.source}, adapter ${Od}`
    }
    md.d(Od, {
      e: () => Wd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);