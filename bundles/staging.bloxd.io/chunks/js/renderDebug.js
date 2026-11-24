export const id = 48;
export const ids = [48];
export const modules = {
  4626: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Rm
    });
    var hm = fm(23),
      Am = fm(31),
      am = fm(1286),
      xm = fm(2813);
    const wm = 3e4,
      Dm = 1e3;

    function im() {
      return "visible" === document.visibilityState && "inGame" === hm.c.get("gameState") && (0, am.r)()
    }

    function Rm(mm, Tm) {
      (0, xm.p)() || function(mm, Tm, fm) {
        let hm = 0;
        const Am = setInterval((() => {
          Tm() && (hm += Dm, hm >= mm && (clearInterval(Am), fm()))
        }), Dm)
      }(wm, im, (() => {
        Tm().then((() => {
          mm(`saved for the player after ${wm/1e3} s of play`), (0, xm.w)(), Am.j.gp("chat", {
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
  4624: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      installRenderDebug: () => of,
      renderDebugPlayable: () => Yf,
      startRenderDebug: () => Of,
      waitForDraw: () => qf
    });
    var hm = fm(1810),
      Am = fm(4626),
      am = fm(2813);
    const xm = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function wm(mm) {
      return 7 & mm
    }

    function Dm(mm) {
      return mm >>> 11 & 1
    }

    function im(mm) {
      return [1 + (mm >>> 18 & 63), 1 + (mm >>> 24 & 63)]
    }

    function Rm(mm, Tm) {
      const [fm, , hm] = mm, Am = wm(hm), am = function(mm, Tm, fm) {
        return Tm + (1 === (22 >>> mm & 1) ? 4 - fm : fm) & 3
      }(Am, Dm(hm), Tm), xm = Am >>> 1, [Rm, pm] = im(fm), Em = 1 === am || 2 === am ? Rm : 0, om = am >= 2 ? pm : 0, Om = [63 & fm, fm >>> 6 & 63, fm >>> 12 & 63];
      return Om[2 === xm ? 0 : 2] += Em, Om[1 === xm ? 0 : 1] += om, Om
    }

    function pm(mm) {
      const Tm = Math.max(...im(mm[0]));
      return 1 === Tm ? "1" : Tm <= 4 ? "2-4" : Tm <= 16 ? "5-16" : "17-64"
    }
    const Em = 16;

    function om(mm) {
      let Tm = 2166136261;
      for (let fm = 0; fm < mm.length; fm++) Tm = Math.imul(Tm ^ mm[fm], 16777619);
      return Tm >>> 0
    }

    function Om(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const hm = Math.max(0, Tm - fm),
        Am = Math.min(mm.length, Tm + fm),
        am = [];
      for (let xm = hm; xm < Am; xm++) {
        const fm = mm[xm].toString(16).padStart(2, "0");
        am.push(xm === Tm ? `[${fm}]` : fm)
      }
      return am.join(" ")
    }
    const Ym = {
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
      qm = "_vs2fs_location0";
    const jm = 0,
      Vm = 4,
      Im = 6,
      Km = [0, 1, 2, 0, 2, 3],
      Qm = 2048,
      nm = 4,
      Jm = 256,
      cm = 64,
      zm = 268435456,
      Zm = 65536,
      km = /^#version [^\n]*\/\/ program (\S+)$/m;

    function bm(mm) {
      return null === mm.name ? `#${mm.id}` : `#${mm.id} ${mm.name}`
    }
    const Sm = [],
      em = new WeakMap,
      Nm = new WeakMap,
      Gm = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let Xm = 1;
    const Pm = new WeakMap;

    function Hm(mm) {
      if (null === mm) return 0;
      let Tm = Pm.get(mm);
      return void 0 === Tm && (Tm = Xm++, Pm.set(mm, Tm)), Tm
    }
    class ym {
      constructor(mm, Tm) {
        this.print = mm, this.now = Tm, this.shown = 0, this.ni = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.mO = [], this.dropped = 0
      }
      line(mm) {
        const Tm = this.now();
        if (Tm - this.second >= 1e3 && (this.second = Tm, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.ni++, void this.store(mm);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${mm} (the last line here: the rest go to bloxdDebug.save())` : mm)
      }
      keep(mm) {
        this.sections++, this.store(mm)
      }
      store(mm) {
        this.mO.push(`${new Date(Date.now()).toISOString()} ${mm}`), this.mO.length > 2e4 && (this.mO.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.ni} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.mO].join("\n")
      }
    }
    let Cm = null;

    function rm() {
      if (null === Cm) {
        const mm = new ym((mm => {
          (0, am.g)("render", mm)
        }), (() => performance.now()));
        (0, am.f)("render", (() => mm.dump())), Cm = mm
      }
      return Cm
    }

    function sm(mm) {
      rm().line(mm)
    }

    function lm(mm) {
      rm().keep(mm)
    }

    function Mm(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return mm.length <= Tm ? mm : `${mm.slice(0,Tm)}... (${mm.length-Tm} more characters)`
    }

    function um(mm, Tm, fm, hm, Am, am) {
      const xm = Gm.pendingCheck;
      if (null === xm) return;
      const wm = "undefined" !== typeof WebGL2RenderingContext && mm instanceof WebGL2RenderingContext,
        Dm = {
          gl: mm,
          program: fm,
          call: hm,
          mo: Am,
          instances: am,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (xm.draws.push(Dm), wm) try {
        const hm = function(mm) {
          const Tm = [],
            fm = new Map,
            hm = Math.min(16, mm.getParameter(Ym.MAX_VERTEX_ATTRIBS));
          for (let Am = 0; Am < hm; Am++) {
            if (!mm.getVertexAttrib(Am, Ym.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const hm = mm.getVertexAttrib(Am, Ym.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              am = mm.getVertexAttribOffset(Am, Ym.VERTEX_ATTRIB_ARRAY_POINTER),
              xm = mm.getVertexAttrib(Am, Ym.VERTEX_ATTRIB_ARRAY_STRIDE),
              wm = mm.getVertexAttrib(Am, Ym.VERTEX_ATTRIB_ARRAY_SIZE),
              Dm = mm.getVertexAttrib(Am, Ym.VERTEX_ATTRIB_ARRAY_TYPE),
              im = "VERTEX_ATTRIB_ARRAY_INTEGER" in mm && mm.getVertexAttrib(Am, Ym.VERTEX_ATTRIB_ARRAY_INTEGER),
              Rm = "VERTEX_ATTRIB_ARRAY_DIVISOR" in mm ? mm.getVertexAttrib(Am, Ym.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            fm.set(Am, {
              buffer: hm,
              offset: am,
              stride: xm
            }), Tm.push(`@${Am} buf#${Hm(hm)} +${am} stride ${xm} ${wm}x0x${Dm.toString(16)}${im?" int":""} div ${Rm}`)
          }
          return {
            lines: Tm,
            byLocation: fm
          }
        }(mm);
        if (Dm.attributes = hm.lines, "inst" === fm.terrain) {
          const {
            group: Am,
            chunk: wm
          } = function(mm, Tm, fm) {
            const hm = Tm.get(Im),
              Am = mm.getVertexAttrib(Im, Ym.CURRENT_VERTEX_ATTRIB),
              am = hm ? `+${hm.offset}` : Am ? Array.from(Am).slice(0, 3).join(",") : "?";
            let xm = fm.groups.get(am);
            return void 0 === xm && (xm = fm.groups.size, fm.groups.set(am, xm)), {
              group: xm,
              chunk: am
            }
          }(mm, hm.byLocation, xm);
          Dm.group = Am, Dm.chunk = wm;
          for (const mm of [jm, Vm]) {
            var im;
            const Tm = null === (im = hm.byLocation.get(mm)) || void 0 === im ? void 0 : im.buffer;
            Tm && Dm.pages.push({
              kind: "buf",
              buffer: Tm
            })
          }! function(mm, Tm, fm, hm, Am, am, xm) {
            const wm = hm.get(jm),
              Dm = xm.parts.get(am);
            if (void 0 === Dm && xm.parts.size >= nm) return;
            const im = Math.min(Am, cm, Jm - (null !== Dm && void 0 !== Dm ? Dm : 0));
            if (null === wm || void 0 === wm || !wm.buffer || im <= 0) return;
            const Rm = Bm(mm, Tm, fm);
            if (!Rm) return;
            const pm = wm.stride || 12,
              Em = gm(mm, wm.buffer, wm.offset, (im - 1) * pm + 12),
              om = new DataView(Em.buffer),
              Om = function(mm, Tm) {
                const fm = function(mm) {
                    const Tm = mT.get(mm);
                    if (void 0 !== Tm && (null === Tm || mm.isProgram(Tm))) return Tm;
                    Gm.inProbe = !0;
                    let fm = null;
                    try {
                      fm = Lm(mm, Wm, Fm, "fed", "the record feed")
                    } finally {
                      Gm.inProbe = !1
                    }
                    return mT.set(mm, fm), fm
                  }(mm),
                  hm = fm ? dm(mm, fm, Tm, (() => {
                    mm.drawArraysInstanced(Ym.POINTS, 0, 1, Tm)
                  }), "decode probe input (the record feed)") : null;
                return hm ? new Uint32Array(hm.buffer) : null
              }(mm, im);
            Om || xm.fed.failed++;
            const qm = dm(mm, Rm, 4 * im, (() => {
              mm.drawArraysInstanced(Ym.POINTS, 0, 4, im)
            }));
            if (!qm) return;
            xm.parts.set(am, (null !== Dm && void 0 !== Dm ? Dm : 0) + im);
            for (let Ym = 0; Ym < im; Ym++) {
              const mm = Ym * pm,
                Tm = [om.getUint32(mm, !0), om.getUint32(mm + 4, !0), om.getUint32(mm + 8, !0)],
                fm = Om ? [Om[3 * Ym], Om[3 * Ym + 1], Om[3 * Ym + 2]] : Tm;
              Om && (xm.fed.records++, fm.some(((mm, fm) => mm !== Tm[fm])) && (xm.fed.differing++, xm.fed.first.length < 8 && xm.fed.first.push(`part ${am} instance ${Ym}: fed ${fm.map(aT).join(" ")} buffer ${Tm.map(aT).join(" ")}`)));
              for (let hm = 0; hm < 4; hm++) {
                const mm = 3 * (4 * Ym + hm);
                xm.vertices.push({
                  record: fm,
                  slot: hm,
                  group: am,
                  gpu: [qm[mm], qm[mm + 1], qm[mm + 2]]
                })
              }
            }
          }(mm, Tm, fm, hm.byLocation, am, Am, xm)
        } else {
          const hm = TT(mm, Tm, 16),
            am = TT(mm, Tm, 8);
          for (const mm of [hm, am]) mm && Dm.pages.push({
            kind: "tex",
            texture: mm
          });
          hm && function(mm, Tm, fm, hm, Am, am) {
            if (am.parts.size >= nm) return;
            const xm = Bm(mm, Tm, fm);
            if (!xm) return;
            let wm = 6 * Jm;
            const Dm = [];
            for (const [om, Om] of Am) {
              const mm = Math.min(Om, wm, Math.max(6, 6 * Math.floor(Jm / Am.length)));
              mm > 0 && (Dm.push([om, mm]), wm -= mm)
            }
            const im = Dm.reduce(((mm, Tm) => {
                let [, fm] = Tm;
                return mm + fm
              }), 0),
              Rm = dm(mm, xm, im, (() => {
                for (const [Tm, fm] of Dm) mm.drawArrays(Ym.POINTS, Tm, fm)
              }));
            if (!Rm) return;
            let pm = 0;
            for (const [om, Om] of Dm) {
              const Tm = Math.floor(om / 6),
                fm = Math.floor((om + Om - 1) / 6) - Tm + 1,
                Am = fT(mm, hm, Qm, Tm, fm);
              for (let mm = om; mm < om + Om; mm++, pm++) {
                var Em;
                const fm = 4 * (Math.floor(mm / 6) - Tm),
                  hm = [Am[fm], Am[fm + 1], Am[fm + 2]];
                am.parts.set(Am[fm + 3], (null !== (Em = am.parts.get(Am[fm + 3])) && void 0 !== Em ? Em : 0) + (mm % 6 === 0 ? 1 : 0)), am.vertices.push({
                  record: hm,
                  slot: Km[mm % 6],
                  group: Am[fm + 3],
                  gpu: [Rm[3 * pm], Rm[3 * pm + 1], Rm[3 * pm + 2]]
                })
              }
            }
          }(mm, Tm, fm, hm, Am, xm)
        }
      } catch (Rm) {
        sm(`decode probe failed on program ${bm(fm)}: ${String(Rm)}`)
      }
    }

    function Bm(mm, Tm, fm) {
      if (void 0 !== fm.probe) return fm.probe && tm(mm, Tm, fm.probe), fm.probe;
      fm.probe = null, Gm.inProbe = !0;
      try {
        fm.probe = function(mm, Tm) {
          return Lm(mm, (fm = Tm.vertex, fm.replace(`\nvec3 ${qm} = vec3(0);\n`, `\nout vec3 ${qm};\n`)), Tm.fragment, qm, `program ${bm(Tm)}'s twin`);
          var fm
        }(mm, fm)
      } finally {
        Gm.inProbe = !1
      }
      return fm.probe && tm(mm, Tm, fm.probe), fm.probe
    }

    function Lm(mm, Tm, fm, hm, Am) {
      const am = [mm.createShader(Ym.VERTEX_SHADER), mm.createShader(Ym.FRAGMENT_SHADER)],
        xm = mm.createProgram();
      if (!xm || !am[0] || !am[1]) return null;
      mm.shaderSource(am[0], Tm), mm.shaderSource(am[1], fm);
      for (const Dm of am) mm.compileShader(Dm), mm.attachShader(xm, Dm);
      mm.transformFeedbackVaryings(xm, [hm], Ym.INTERLEAVED_ATTRIBS), mm.linkProgram(xm);
      for (const Dm of am) mm.deleteShader(Dm);
      var wm;
      return mm.getProgramParameter(xm, Ym.LINK_STATUS) ? xm : (sm(`decode probe: ${Am} failed to link: ${Mm(null!==(wm=mm.getProgramInfoLog(xm))&&void 0!==wm?wm:"",300)}`), mm.deleteProgram(xm), null)
    }

    function tm(mm, Tm, fm) {
      const hm = mm.getProgramParameter(Tm, Ym.ACTIVE_UNIFORM_BLOCKS);
      for (let wm = 0; wm < hm; wm++) {
        const hm = mm.getActiveUniformBlockName(Tm, wm),
          Am = null === hm ? Ym.INVALID_INDEX : mm.getUniformBlockIndex(fm, hm);
        Am !== Ym.INVALID_INDEX && mm.uniformBlockBinding(fm, Am, mm.getActiveUniformBlockParameter(Tm, wm, Ym.UNIFORM_BLOCK_BINDING))
      }
      const Am = mm.getParameter(Ym.CURRENT_PROGRAM);
      mm.useProgram(fm);
      const am = mm.getProgramParameter(Tm, Ym.ACTIVE_UNIFORMS),
        xm = mm.getActiveUniforms(Tm, [...Array(am).keys()], Ym.UNIFORM_BLOCK_INDEX);
      for (let wm = 0; wm < am; wm++) {
        const hm = mm.getActiveUniform(Tm, wm);
        if (!hm || -1 !== xm[wm]) continue;
        const Am = hm.name.replace(/\[0\]$/, "");
        for (let am = 0; am < hm.size; am++) {
          const xm = hm.size > 1 ? `${Am}[${am}]` : hm.name,
            wm = mm.getUniformLocation(Tm, xm),
            Dm = mm.getUniformLocation(fm, xm);
          wm && Dm && Um(mm, Dm, hm.type, mm.getUniform(Tm, wm))
        }
      }
      mm.useProgram(Am)
    }

    function Um(mm, Tm, fm, hm) {
      const Am = ArrayBuffer.isView(hm) ? Array.from(hm) : [Number(hm)];
      switch (fm) {
        case Ym.FLOAT:
          return void mm.uniform1f(Tm, Am[0]);
        case Ym.FLOAT_VEC2:
          return void mm.uniform2fv(Tm, Am);
        case Ym.FLOAT_VEC3:
          return void mm.uniform3fv(Tm, Am);
        case Ym.FLOAT_VEC4:
          return void mm.uniform4fv(Tm, Am);
        case Ym.FLOAT_MAT3:
          return void mm.uniformMatrix3fv(Tm, !1, Am);
        case Ym.FLOAT_MAT4:
          return void mm.uniformMatrix4fv(Tm, !1, Am);
        case Ym.UNSIGNED_INT:
          return void mm.uniform1ui(Tm, Am[0]);
        case Ym.UNSIGNED_INT_VEC2:
          return void mm.uniform2uiv(Tm, Am);
        case Ym.UNSIGNED_INT_VEC3:
          return void mm.uniform3uiv(Tm, Am);
        case Ym.UNSIGNED_INT_VEC4:
          return void mm.uniform4uiv(Tm, Am);
        case Ym.INT_VEC2:
          return void mm.uniform2iv(Tm, Am);
        case Ym.INT_VEC3:
          return void mm.uniform3iv(Tm, Am);
        case Ym.INT_VEC4:
          return void mm.uniform4iv(Tm, Am);
        default:
          mm.uniform1i(Tm, Am[0])
      }
    }

    function dm(mm, Tm, fm, hm) {
      let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const am = mm.getParameter(Ym.CURRENT_PROGRAM),
        xm = mm.getParameter(Ym.TRANSFORM_FEEDBACK_BINDING),
        wm = mm.getParameter(Ym.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        Dm = mm.getParameter(Ym.COPY_READ_BUFFER_BINDING),
        im = mm.isEnabled(Ym.RASTERIZER_DISCARD),
        Rm = mm.createTransformFeedback(),
        pm = mm.createBuffer();
      Gm.inProbe = !0;
      try {
        const am = mm.getError();
        am !== Ym.NO_ERROR && sm(`GL error 0x${am.toString(16)} pending before the decode probe (the renderer's)`), mm.useProgram(Tm), mm.bindTransformFeedback(Ym.TRANSFORM_FEEDBACK, Rm), mm.bindBuffer(Ym.TRANSFORM_FEEDBACK_BUFFER, pm), mm.bufferData(Ym.TRANSFORM_FEEDBACK_BUFFER, 12 * fm, Ym.STREAM_READ), mm.bindBufferBase(Ym.TRANSFORM_FEEDBACK_BUFFER, 0, pm), mm.enable(Ym.RASTERIZER_DISCARD), mm.beginTransformFeedback(Ym.POINTS), hm(), mm.endTransformFeedback(), mm.bindBufferBase(Ym.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const xm = mm.getError();
        if (xm !== Ym.NO_ERROR) return sm(`${Am}: GL error 0x${xm.toString(16)} on the feedback draw`), null;
        const wm = new Float32Array(3 * fm);
        return mm.bindBuffer(Ym.COPY_READ_BUFFER, pm), mm.getBufferSubData(Ym.COPY_READ_BUFFER, 0, wm), wm
      } finally {
        im || mm.disable(Ym.RASTERIZER_DISCARD), mm.bindTransformFeedback(Ym.TRANSFORM_FEEDBACK, xm), mm.bindBuffer(Ym.TRANSFORM_FEEDBACK_BUFFER, wm), mm.bindBuffer(Ym.COPY_READ_BUFFER, Dm), mm.deleteTransformFeedback(Rm), mm.deleteBuffer(pm), mm.useProgram(am), Gm.inProbe = !1
      }
    }

    function gm(mm, Tm, fm, hm) {
      const Am = mm.getParameter(Ym.COPY_READ_BUFFER_BINDING),
        am = new Uint8Array(hm);
      return mm.bindBuffer(Ym.COPY_READ_BUFFER, Tm), mm.getBufferSubData(Ym.COPY_READ_BUFFER, fm, am), mm.bindBuffer(Ym.COPY_READ_BUFFER, Am), am
    }
    const Wm = `#version 300 es\nlayout(location = ${jm}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      Fm = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      mT = new WeakMap;

    function TT(mm, Tm, fm) {
      const hm = mm.getProgramParameter(Tm, Ym.ACTIVE_UNIFORMS),
        Am = mm.getParameter(Ym.ACTIVE_TEXTURE);
      try {
        for (let Am = 0; Am < hm; Am++) {
          const hm = mm.getActiveUniform(Tm, Am);
          if ((null === hm || void 0 === hm ? void 0 : hm.type) !== Ym.UNSIGNED_INT_SAMPLER_2D) continue;
          const am = mm.getUniformLocation(Tm, hm.name),
            xm = am ? mm.getUniform(Tm, am) : -1;
          if (xm < 0) continue;
          mm.activeTexture(Ym.TEXTURE0 + xm);
          const wm = mm.getParameter(Ym.TEXTURE_BINDING_2D);
          if (wm && Nm.get(wm) === fm) return wm
        }
        return null
      } finally {
        mm.activeTexture(Am)
      }
    }

    function fT(mm, Tm, fm, hm, Am) {
      const am = new Uint32Array(4 * Am),
        xm = mm.getParameter(Ym.READ_FRAMEBUFFER_BINDING),
        wm = mm.createFramebuffer();
      mm.bindFramebuffer(Ym.READ_FRAMEBUFFER, wm), mm.framebufferTexture2D(Ym.READ_FRAMEBUFFER, Ym.COLOR_ATTACHMENT0, Ym.TEXTURE_2D, Tm, 0);
      try {
        let Tm = 0;
        for (; Tm < Am;) {
          const xm = hm + Tm,
            wm = xm % fm,
            Dm = Math.min(Am - Tm, fm - wm);
          mm.readPixels(wm, Math.floor(xm / fm), Dm, 1, Ym.RGBA_INTEGER, Ym.UNSIGNED_INT, am.subarray(4 * Tm, 4 * (Tm + Dm))), Tm += Dm
        }
      } finally {
        mm.bindFramebuffer(Ym.READ_FRAMEBUFFER, xm), mm.deleteFramebuffer(wm)
      }
      return am
    }

    function hT(mm, Tm, fm) {
      let hm = 0,
        Am = 0;
      for (let Dm = 0; Dm < Tm.bytes.length; Dm += Zm) {
        hm++;
        const mm = Math.min(Dm + Zm, Tm.bytes.length);
        om(Tm.bytes.subarray(Dm, mm)) !== om(fm.subarray(Dm, mm)) && Am++
      }
      const am = `${mm} ${Tm.bytes.length} B cpu ${om(Tm.bytes).toString(16)} gpu ${om(fm).toString(16)}, ${Am}/${hm} blocks differ${Tm.missed?`, ${Tm.missed} GPU-side writes uncopied`:""}`;
      if (0 === Am) return am;
      const {
        count: xm,
        offsets: wm
      } = function(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const hm = Math.min(mm.length, Tm.length);
        let Am = Math.abs(mm.length - Tm.length);
        const am = [];
        for (let xm = 0; xm < hm; xm++) mm[xm] !== Tm[xm] && (Am++, am.length < fm && am.push(xm));
        return {
          count: Am,
          offsets: am
        }
      }(Tm.bytes, fm);
      return lm([`${am}: ${xm} bytes differ`, ...wm.map((mm => `  +${mm}: cpu ${Om(Tm.bytes,mm)} | gpu ${Om(fm,mm)}`))].join("\n")), `${am}: ${xm} bytes differ, first at ${wm.join(", ")} (context in the saved file)`
    }

    function AT(mm) {
      if (0 === mm.vertices.length) return void sm(`decode probe (${mm.reason}): no terrain draw probed (${mm.draws.length} seen)`);
      const Tm = function(mm) {
          const Tm = new Map;
          for (const hm of mm) {
            const mm = Tm.get(hm.group);
            mm ? mm.push(hm) : Tm.set(hm.group, [hm])
          }
          const fm = {
            vertices: mm.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [hm, Am] of Tm) {
            const mm = new Map,
              Tm = Am.map((Tm => {
                const fm = Rm(Tm.record, Tm.slot),
                  hm = [Tm.gpu[0] - fm[0], Tm.gpu[1] - fm[1], Tm.gpu[2] - fm[2]],
                  Am = hm.map((mm => Math.round(64 * mm))).join(","),
                  am = mm.get(Am);
                return am ? am.count++ : mm.set(Am, {
                  count: 1,
                  offset: hm
                }), fm
              }));
            let am = [0, 0, 0],
              xm = 0;
            for (const fm of mm.values()) fm.count > xm && (xm = fm.count, am = fm.offset);
            fm.translations.set(hm, am), Am.forEach(((mm, hm) => {
              var Am;
              const xm = [Tm[hm][0] + am[0], Tm[hm][1] + am[1], Tm[hm][2] + am[2]];
              if (xm.every(((Tm, fm) => {
                  return hm = mm.gpu[fm], Am = Tm, Math.abs(hm - Am) <= Math.max(.001, 1e-6 * Math.abs(Am));
                  var hm, Am
                }))) return;
              fm.mismatches++, fm.byDirection[wm(mm.record[2])]++, fm.byDiagonal[Dm(mm.record[2])]++;
              const im = pm(mm.record);
              fm.byBand[im] = (null !== (Am = fm.byBand[im]) && void 0 !== Am ? Am : 0) + 1, fm.first.length < Em && fm.first.push({
                ...mm,
                expected: xm
              })
            }))
          }
          return fm
        }(mm.vertices),
        fm = Tm.byDirection.map(((mm, Tm) => mm ? `${xm[Tm]} ${mm}` : "")).filter(Boolean).join(" "),
        hm = Object.entries(Tm.byBand).map((mm => {
          let [Tm, fm] = mm;
          return `${Tm}: ${fm}`
        })).join(" ");
      if (sm(`decode probe (${mm.reason}): ${Tm.mismatches}/${Tm.vertices} vertices differ from the CPU decode over ${mm.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (Tm.mismatches ? ` by direction [${fm}] diagonal [0: ${Tm.byDiagonal[0]} 1: ${Tm.byDiagonal[1]}] extent [${hm}]` : "")), mm.fed.records > 0 || mm.fed.failed > 0) {
        sm(`decode probe input: ${mm.fed.differing}/${mm.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (mm.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (mm.fed.failed ? `; the feed failed on ${mm.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const Tm of mm.fed.first) sm(`  ${Tm}`)
      }
      for (const Am of Tm.first) {
        const [mm, Tm, fm] = Am.record;
        sm(`  mismatch part ${Am.group} r0 ${mm.toString(16)} r1 ${Tm.toString(16)} r2 ${fm.toString(16)} slot ${Am.slot} (${xm[wm(fm)]}): expected ${Am.expected.map(xT).join(",")} gpu ${Am.gpu.map(xT).join(",")}`)
      }
      lm(`decode probe translations: ${[...Tm.translations].map((mm=>{let[Tm,fm]=mm;return`${Tm}: ${fm.map(xT).join(",")}`})).join("; ")}`)
    }

    function aT(mm) {
      return mm.toString(16)
    }

    function xT(mm) {
      return Number.isInteger(mm) ? String(mm) : mm.toFixed(3)
    }

    function wT(mm) {
      return null !== Gm.pendingCheck ? Promise.resolve() : new Promise((Tm => {
        let fm = !1;
        const hm = {
          reason: mm,
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
        Gm.pendingCheck = hm;
        const Am = () => {
            Gm.pendingCheck = null;
            try {
              ! function(mm) {
                sm(`draw ranges (${mm.reason}): ${mm.terrainDraws} terrain draws in the frame, the first ${mm.draws.length} here`);
                for (const Tm of mm.draws) {
                  const mm = Tm.mo.slice(0, 8).map((mm => {
                      let [Tm, fm] = mm;
                      return `${Tm}+${fm}`
                    })).join(" "),
                    fm = Tm.mo.length > 8 ? ` (+${Tm.mo.length-8} ranges)` : "";
                  sm(`  ${bm(Tm.program)} ${Tm.program.terrain} ${Tm.call} ${mm}${fm} x${Tm.instances}${Tm.group>=0?` part ${Tm.group} chunk ${Tm.chunk}`:""} | ${Tm.attributes.join(" | ")}`)
                }
              }(hm), AT(hm);
              hm.draws.some((mm => "undefined" !== typeof WebGL2RenderingContext && mm.gl instanceof WebGL2RenderingContext)) || 0 === hm.draws.length ? function(mm) {
                const Tm = [],
                  fm = new Map;
                for (const hm of mm)
                  if ("undefined" !== typeof WebGL2RenderingContext && hm.gl instanceof WebGL2RenderingContext)
                    for (const mm of hm.pages) fm.set("buf" === mm.kind ? mm.buffer : mm.texture, {
                      page: mm,
                      gl: hm.gl
                    });
                for (const [hm, {
                    page: Am,
                    gl: am
                  }] of fm) {
                  const mm = em.get(hm);
                  if (!mm) {
                    Tm.push(`${Am.kind}#${Hm(hm)}: no CPU copy (${Gm.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === Am.kind) {
                    Tm.push(hT(`buf#${mm.id}`, mm, gm(am, Am.buffer, 0, mm.bytes.length)));
                    continue
                  }
                  const fm = fT(am, Am.texture, mm.width, 0, mm.width * mm.height),
                    xm = 16 === mm.texelBytes ? new Uint8Array(fm.buffer) : new Uint8Array(new Uint16Array(fm).buffer);
                  Tm.push(hT(`tex#${mm.id} (${16===mm.texelBytes?"records":"light"})`, mm, xm))
                }
                for (const hm of Tm) sm(`page readback ${hm}`)
              }(hm.draws) : sm("page readback: none on WebGL1 (no buffer readback)")
            } catch (mm) {
              sm(`check failed: ${String(mm)}`)
            }
            Tm()
          },
          am = () => {
            if (hm.draws.length > 0 && !fm) return fm = !0, void setTimeout(Am, 0);
            fm || requestAnimationFrame(am)
          };
        requestAnimationFrame(am), setTimeout((() => {
          fm || (fm = !0, Am())
        }), 5e3)
      }))
    }
    var DT = fm(4632);
    const iT = 20,
      RT = 24,
      pT = Reflect.apply;

    function ET(mm, Tm, fm) {
      if (!mm) return;
      const hm = mm[Tm];
      if ("function" === typeof hm) {
        const Am = fm(hm);
        mm[Tm] = Am, (0, DT.u)(Am, hm)
      }
    }
    let oT = !1;
    const OT = new WeakMap,
      YT = new WeakMap,
      qT = new WeakMap,
      jT = {
        gl: 0,
        lost: 0
      };
    let VT = {
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
      IT = {
        buffer: 0,
        texture: 0
      },
      KT = 0;

    function QT(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (mm instanceof ArrayBuffer) return new Uint8Array(mm, Tm, fm || void 0);
      if (!ArrayBuffer.isView(mm)) return null;
      const hm = "BYTES_PER_ELEMENT" in mm ? mm.BYTES_PER_ELEMENT : 1,
        Am = mm.byteOffset + Tm * hm,
        am = fm ? fm * hm : mm.byteLength - Tm * hm;
      return new Uint8Array(mm.buffer, Am, Math.max(0, am))
    }

    function nT(mm, Tm) {
      const fm = function(mm) {
        switch (mm) {
          case Ym.ARRAY_BUFFER:
            return Ym.ARRAY_BUFFER_BINDING;
          case Ym.ELEMENT_ARRAY_BUFFER:
            return Ym.ELEMENT_ARRAY_BUFFER_BINDING;
          case Ym.COPY_READ_BUFFER:
            return Ym.COPY_READ_BUFFER_BINDING;
          case Ym.COPY_WRITE_BUFFER:
            return Ym.COPY_WRITE_BUFFER_BINDING;
          case Ym.UNIFORM_BUFFER:
            return Ym.UNIFORM_BUFFER_BINDING;
          case Ym.PIXEL_UNPACK_BUFFER:
            return Ym.PIXEL_UNPACK_BUFFER_BINDING;
          case Ym.TRANSFORM_FEEDBACK_BUFFER:
            return Ym.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(Tm);
      return fm ? mm.getParameter(fm) : null
    }

    function JT(mm) {
      const Tm = em.get(mm);
      Tm && (Gm.shadowBytes -= Tm.bytes.length, em.delete(mm))
    }

    function cT(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      JT(mm), Gm.shadowBytes + Tm > zm ? Gm.uncopied++ : (Gm.shadowBytes += Tm, em.set(mm, {
        id: Hm(mm),
        bytes: new Uint8Array(Tm),
        width: fm,
        height: hm,
        texelBytes: Am,
        missed: 0
      }))
    }

    function zT(mm, Tm) {
      for (const fm of ["deleteBuffer", "deleteTexture"]) ET(mm, fm, (mm => function() {
        for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
        return fm[0] && JT(fm[0]), pT(mm, this, fm)
      }));
      ET(mm, "shaderSource", (mm => function() {
        for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
        return fm[0] && "string" === typeof fm[1] && OT.set(fm[0], fm[1]), pT(mm, this, fm)
      })), ET(mm, "attachShader", (mm => function() {
        for (var Tm, fm = arguments.length, hm = new Array(fm), Am = 0; Am < fm; Am++) hm[Am] = arguments[Am];
        const am = hm[0],
          xm = null !== (Tm = YT.get(am)) && void 0 !== Tm ? Tm : [];
        return xm.push(hm[1]), YT.set(am, xm), pT(mm, this, hm)
      })), ET(mm, "linkProgram", (mm => function() {
        for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
        const Am = pT(mm, this, fm);
        return Gm.inProbe || function(mm, Tm) {
          var fm, hm, Am;
          "undefined" !== typeof HTMLCanvasElement && mm.canvas instanceof HTMLCanvasElement && function(mm) {
            if (NT.has(mm)) return;
            NT.add(mm);
            for (const Tm of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) mm.addEventListener(Tm, (mm => {
              jT.lost < iT && (jT.lost++, sm(`${Tm}${"statusMessage"in mm?`: ${String(mm.statusMessage)}`:""}`))
            }))
          }(mm.canvas);
          Gm.context ??= mm;
          const am = null !== (fm = YT.get(Tm)) && void 0 !== fm ? fm : [];
          let xm = "",
            wm = "";
          for (const Rm of am) {
            var Dm;
            const mm = null !== (Dm = OT.get(Rm)) && void 0 !== Dm ? Dm : "";
            /\bgl_Position\b/.test(mm) ? xm = mm : wm = mm
          }
          const im = {
            id: Hm(Tm),
            name: null !== (hm = null === (Am = km.exec(xm)) || void 0 === Am ? void 0 : Am[1]) && void 0 !== hm ? hm : null,
            gl: mm,
            vertex: xm,
            fragment: wm,
            terrain: kT(xm),
            checked: !1,
            firstDraw: !1
          };
          if (qT.set(Tm, im), Sm.push([Tm, im]), null !== im.terrain) {
            const Tm = am.map((Tm => {
              var fm;
              return null !== (fm = mm.getShaderInfoLog(Tm)) && void 0 !== fm ? fm : ""
            })).filter((mm => "" !== mm.trim()));
            Tm.length > 0 && lm(`program ${bm(im)} (${im.terrain}) shader logs:\n${Mm(Tm.join("\n"))}`)
          }
        }(this, fm[0]), Am
      })), ET(mm, "bufferData", (mm => function() {
        for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
        const Am = pT(mm, this, fm);
        if (!Gm.inProbe) {
          const mm = nT(this, fm[0]);
          if (mm) {
            var am, xm, wm;
            const Tm = "number" === typeof fm[1] ? null : QT(fm[1], null !== (am = fm[3]) && void 0 !== am ? am : 0, null !== (xm = fm[4]) && void 0 !== xm ? xm : 0);
            var Dm;
            if (cT(mm, "number" === typeof fm[1] ? fm[1] : null !== (wm = null === Tm || void 0 === Tm ? void 0 : Tm.length) && void 0 !== wm ? wm : 0), Tm) null === (Dm = em.get(mm)) || void 0 === Dm || Dm.bytes.set(Tm)
          }
        }
        return Am
      })), ET(mm, "bufferSubData", (mm => function() {
        for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
        const Am = pT(mm, this, fm);
        if (!Gm.inProbe) {
          var am, xm;
          const mm = nT(this, fm[0]),
            Tm = mm ? em.get(mm) : void 0,
            hm = QT(fm[2], null !== (am = fm[3]) && void 0 !== am ? am : 0, null !== (xm = fm[4]) && void 0 !== xm ? xm : 0);
          if (Tm && hm) {
            const mm = fm[1];
            Tm.bytes.set(hm.subarray(0, Math.max(0, Tm.bytes.length - mm)), mm), ZT("buffer", Tm, mm, hm.length)
          }
        }
        return Am
      })), Tm && (ET(mm, "copyBufferSubData", (mm => function() {
        for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
        const Am = pT(mm, this, fm);
        if (!Gm.inProbe) {
          const [mm, Tm, hm, Am, am] = fm, xm = nT(this, mm), wm = nT(this, Tm), Dm = xm ? em.get(xm) : void 0, im = wm ? em.get(wm) : void 0;
          im && (Dm ? im.bytes.set(Dm.bytes.slice(hm, hm + am), Am) : im.missed++)
        }
        return Am
      })), ET(mm, "texStorage2D", (mm => function() {
        for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
        const Am = pT(mm, this, fm),
          [, , am, xm, wm] = fm;
        if (!Gm.inProbe && (am === Ym.RGBA32UI || am === Ym.RGBA16UI)) {
          const mm = this.getParameter(Ym.TEXTURE_BINDING_2D),
            Tm = am === Ym.RGBA32UI ? 16 : 8;
          mm && (Nm.set(mm, Tm), cT(mm, xm * wm * Tm, xm, wm, Tm))
        }
        return Am
      })), ET(mm, "texSubImage2D", (mm => function() {
        for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
        const Am = pT(mm, this, fm);
        return !Gm.inProbe && fm.length >= 9 && fm[0] === Ym.TEXTURE_2D && 0 === fm[1] && function(mm, Tm) {
          var fm;
          const hm = mm.getParameter(Ym.TEXTURE_BINDING_2D),
            Am = hm ? em.get(hm) : void 0;
          if (!Am) return;
          const [, , am, xm, wm, Dm] = Tm;
          let im = QT(Tm[8], null !== (fm = Tm[9]) && void 0 !== fm ? fm : 0);
          if (null === im && "number" === typeof Tm[8]) {
            const fm = nT(mm, Ym.PIXEL_UNPACK_BUFFER),
              hm = fm ? em.get(fm) : void 0;
            im = hm ? hm.bytes.subarray(Tm[8]) : null
          }
          if (null === im) return void Am.missed++;
          const Rm = mm.getParameter(Ym.UNPACK_ROW_LENGTH) || wm,
            pm = mm.getParameter(Ym.UNPACK_SKIP_ROWS),
            Em = mm.getParameter(Ym.UNPACK_SKIP_PIXELS),
            om = Am.texelBytes;
          for (let Om = 0; Om < Dm; Om++) {
            const mm = ((pm + Om) * Rm + Em) * om,
              Tm = ((xm + Om) * Am.width + am) * om;
            Am.bytes.set(im.subarray(mm, mm + wm * om), Tm)
          }
          ZT("texture", Am, (xm * Am.width + am) * om, wm * Dm * om)
        }(this, fm), Am
      })), ET(mm, "copyTexSubImage2D", (mm => function() {
        for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
        const Am = fm[0] === Ym.TEXTURE_2D ? this.getParameter(Ym.TEXTURE_BINDING_2D) : null,
          am = Am ? em.get(Am) : void 0;
        return am && am.missed++, pT(mm, this, fm)
      })));
      for (const fm of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) ET(mm, fm, (mm => function() {
        for (var Tm = arguments.length, hm = new Array(Tm), Am = 0; Am < Tm; Am++) hm[Am] = arguments[Am];
        const am = pT(mm, this, hm);
        return Gm.inProbe || ST(this, fm, hm), am
      }));
      ET(mm, "getExtension", (mm => function() {
        for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
        const Am = pT(mm, this, fm);
        return Am && "object" === typeof Am && function(mm, Tm, fm) {
          const hm = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(Tm in hm) || fm.bloxdRenderDebug) return;
          fm.bloxdRenderDebug = !0;
          for (const Am of hm[Tm]) {
            const Tm = fm[Am];
            "function" === typeof Tm && (fm[Am] = function() {
              for (var hm = arguments.length, am = new Array(hm), xm = 0; xm < hm; xm++) am[xm] = arguments[xm];
              const wm = pT(Tm, fm, am);
              return Gm.inProbe || ST(mm, Am, am), wm
            })
          }
        }(this, fm[0], Am), Am
      }))
    }

    function ZT(mm, Tm, fm, hm) {
      IT[mm] += hm, KT < 32 && Tm.bytes.length >= 1 << 20 && (KT++, lm(`upload ${mm} #${Tm.id} +${fm} ${hm} B`))
    }

    function kT(mm) {
      if (!mm.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(mm) || /in uvec3 _p2vs_location0\b/.test(mm) ? "inst" : "tex"
    }

    function bT(mm, Tm, fm) {
      var hm;
      if (fm.checked) return;
      fm.checked = !0;
      const Am = mm.getProgramParameter(Tm, Ym.LINK_STATUS),
        am = (null !== (hm = mm.getProgramInfoLog(Tm)) && void 0 !== hm ? hm : "").trim();
      var xm;
      null === fm.terrain && Am || (sm(`program ${bm(fm)} ${null!==(xm=fm.terrain)&&void 0!==xm?xm:"other"} link ${Am?"ok":"FAILED"}${am?`: ${Mm(am,300)}`:""}`), am && lm(`program ${bm(fm)} link log:\n${Mm(am)}`))
    }

    function ST(mm, Tm, fm) {
      var hm;
      const Am = mm.getParameter(Ym.CURRENT_PROGRAM),
        am = Am ? qT.get(Am) : void 0;
      if (!Am || !am) return;
      const xm = null !== (hm = am.terrain) && void 0 !== hm ? hm : "other",
        {
          mo: wm,
          instances: Dm
        } = function(mm, Tm) {
          switch (mm) {
            case "drawArrays":
              return {
                mo: [
                  [Tm[1], Tm[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                mo: [
                  [Tm[1], Tm[2]]
                ], instances: Tm[3]
              };
            case "drawElements":
              return {
                mo: [
                  [0, Tm[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                mo: [
                  [0, Tm[1]]
                ], instances: Tm[4]
              };
            case "multiDrawArraysWEBGL": {
              const mm = Tm[1],
                fm = Tm[3],
                hm = Tm[2],
                Am = Tm[4],
                am = [];
              for (let xm = 0; xm < Tm[5]; xm++) am.push([mm[hm + xm], fm[Am + xm]]);
              return {
                mo: am,
                instances: 1
              }
            }
            default:
              return {
                mo: [], instances: 0
              }
          }
        }(Tm, fm),
        im = "inst" === am.terrain ? Dm : wm.reduce(((mm, Tm) => {
          let [, fm] = Tm;
          return mm + fm
        }), 0) / 6;
      if (VT[xm].draws++, VT[xm].faces += im, null === am.terrain) return;
      if (Gm.context = mm, !am.firstDraw) {
        am.firstDraw = !0, bT(mm, Am, am), eT || (eT = !0, sm(function(mm) {
          var Tm;
          const fm = mm.getParameter(Ym.DEPTH_FUNC),
            hm = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let Am = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in mm && mm.getParameter(Ym.DRAW_FRAMEBUFFER_BINDING)) {
            const Tm = mm;
            Am = Tm.getFramebufferAttachmentParameter(Ym.DRAW_FRAMEBUFFER, Ym.DEPTH_ATTACHMENT, Ym.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(Tm.getFramebufferAttachmentParameter(Ym.DRAW_FRAMEBUFFER,Ym.DEPTH_ATTACHMENT,Ym.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(Tm.getFramebufferAttachmentParameter(Ym.DRAW_FRAMEBUFFER,Ym.DEPTH_ATTACHMENT,Ym.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const am = mm.getParameter(Ym.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(Tm=hm[fm])&&void 0!==Tm?Tm:`0x${fm.toString(16)}`} clear ${am}${516===fm||518===fm?" (reverse-Z)":""}, samples ${String(mm.getParameter(Ym.SAMPLES))}, ${Am}`
        }(mm)));
        const fm = mm.getError();
        fm !== Ym.NO_ERROR && jT.gl < iT && (jT.gl++, sm(`GL error 0x${fm.toString(16)} after program ${bm(am)}'s first terrain draw (${Tm})`))
      }
      const Rm = Gm.pendingCheck;
      null !== Rm && (Rm.terrainDraws++, Rm.draws.length < RT && um(mm, Am, am, Tm, wm, Dm))
    }
    let eT = !1;
    const NT = new WeakSet;
    var GT = fm(4448),
      XT = fm(4637);
    const PT = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let HT = !1;
    const yT = new WeakSet,
      CT = new WeakMap,
      rT = new WeakMap,
      sT = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let lT = 0,
      MT = !1,
      uT = null,
      BT = {
        draws: 0,
        faces: 0
      };

    function LT(mm) {
      const Tm = globalThis[mm];
      return null === Tm || void 0 === Tm ? void 0 : Tm.prototype
    }

    function vT(mm) {
      return mm && "function" === typeof mm[Symbol.iterator] ? [...mm].sort().join(" ") : ""
    }

    function tT(mm, Tm) {
      const fm = null !== mm && void 0 !== mm ? mm : {},
        hm = null !== Tm && void 0 !== Tm ? Tm : Object.keys(Object.getPrototypeOf(fm)).concat(Object.keys(fm));
      return [...new Set(hm)].filter((mm => "number" === typeof fm[mm])).map((mm => `${mm} ${String(fm[mm])}`)).join(", ")
    }

    function UT(mm, Tm) {
      var fm;
      const hm = null !== (fm = Tm.vertex) && void 0 !== fm ? fm : {};
      if (hm.module && yT.has(hm.module)) {
        var Am;
        const fm = String(null !== (Am = hm.entryPoint) && void 0 !== Am ? Am : "");
        if (fm.startsWith("vs_packed") && CT.set(mm, fm), !MT) {
          var am, xm, wm, Dm, im;
          MT = !0;
          const mm = null !== (am = Tm.depthStencil) && void 0 !== am ? am : {},
            hm = null !== (xm = Tm.multisample) && void 0 !== xm ? xm : {},
            Am = String(null !== (wm = mm.depthCompare) && void 0 !== wm ? wm : "");
          sm(`WebGPU terrain pipeline ${fm}: depth ${String(null!==(Dm=mm.format)&&void 0!==Dm?Dm:"none")} ${Am}${Am.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(im=hm.count)&&void 0!==im?im:1)}`)
        }
      }
    }

    function dT(mm) {
      ET(mm, "setPipeline", (mm => function() {
        for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
        return rT.set(this, fm[0]), pT(mm, this, fm)
      }));
      for (const Tm of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) ET(mm, Tm, (mm => function() {
        const fm = rT.get(this),
          hm = fm ? CT.get(fm) : void 0;
        for (var Am = arguments.length, am = new Array(Am), xm = 0; xm < Am; xm++) am[xm] = arguments[xm];
        return void 0 !== hm && gT(Tm, hm, am), pT(mm, this, am)
      }))
    }

    function gT(mm, Tm, fm) {
      var hm;
      (BT.draws++, "draw" === mm || "drawIndexed" === mm) && (BT.faces += fm[0] * (null !== (hm = fm[1]) && void 0 !== hm ? hm : 1) / 6);
      if (null !== uT && uT.length < RT) {
        const hm = ("draw" === mm ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === mm ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((Tm, hm) => {
          const Am = mm.endsWith("Indirect") ? fm[1] : fm[hm];
          return `${Tm} ${String(null!==Am&&void 0!==Am?Am:"instances"===Tm?1:0)}`
        }));
        uT.push(`  ${Tm} ${mm} ${hm.join(" ")}`)
      }
    }

    function WT() {
      if (HT || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      HT = !0, ET(LT("GPU"), "requestAdapter", (mm => function() {
        for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
        return pT(mm, this, fm).then((mm => {
          var Tm;
          mm ? function(mm) {
            var Tm;
            const fm = null !== (Tm = mm.info) && void 0 !== Tm ? Tm : {};
            sm(`WebGPU adapter ${["vendor","architecture","device","description"].map((mm=>{var Tm;return`${mm} "${String(null!==(Tm=fm[mm])&&void 0!==Tm?Tm:"")}"`})).join(" ")}${mm.isFallbackAdapter?" (fallback)":""}`), sm(`WebGPU adapter features ${vT(mm.features)}`), sm(`WebGPU adapter limits ${tT(mm.limits,PT)}`), lm(`WebGPU adapter all limits ${tT(mm.limits,null)}`)
          }(mm) : sm(`WebGPU requestAdapter(${JSON.stringify(null!==(Tm=fm[0])&&void 0!==Tm?Tm:{})}) gave none`);
          return mm
        }))
      })), ET(LT("GPUAdapter"), "requestDevice", (mm => function() {
        for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
        return pT(mm, this, fm).then((mm => (function(mm) {
          sm(`WebGPU device features ${vT(mm.features)}`), sm(`WebGPU device limits ${tT(mm.limits,PT)}`), mm.addEventListener("uncapturederror", (mm => {
            if (sT.uncaptured < iT) {
              var Tm, fm, hm;
              sT.uncaptured++;
              const Am = mm.error;
              sm(`WebGPU uncaptured ${null!==(Tm=null===Am||void 0===Am||null===(fm=Am.constructor)||void 0===fm?void 0:fm.name)&&void 0!==Tm?Tm:"error"}: ${Mm(String(null!==(hm=null===Am||void 0===Am?void 0:Am.message)&&void 0!==hm?hm:""),600)}`)
            }
          }));
          const Tm = mm.lost;
          null === Tm || void 0 === Tm || Tm.then((mm => {
            var Tm;
            sm(`WebGPU device lost (${String(mm.reason)}): ${Mm(String(null!==(Tm=mm.message)&&void 0!==Tm?Tm:""),600)}`)
          }))
        }(mm), mm)), (mm => {
          throw sm(`WebGPU requestDevice failed: ${String(mm)}`), mm
        }))
      }));
      const mm = LT("GPUDevice");
      ET(mm, "createShaderModule", (mm => function() {
        for (var Tm, fm, hm = arguments.length, Am = new Array(hm), am = 0; am < hm; am++) Am[am] = arguments[am];
        const xm = pT(mm, this, Am);
        return function(mm, Tm) {
          const fm = Tm.includes("decodeQuad");
          fm && yT.add(mm);
          const hm = mm.getCompilationInfo;
          null === hm || void 0 === hm || hm.call(mm).then((mm => {
            if (0 === mm.messages.length && !fm) return;
            const Tm = {};
            for (const fm of mm.messages) {
              var hm;
              Tm[String(fm.type)] = (null !== (hm = Tm[String(fm.type)]) && void 0 !== hm ? hm : 0) + 1
            }
            const Am = mm.messages.map((mm => `${String(mm.type)} ${String(mm.lineNum)}:${String(mm.linePos)} ${String(mm.message)}`)).join("\n");
            sT.compile < iT && (sT.compile++, sm(`WebGPU ${fm?"terrain ":""}shader module compiled: ${JSON.stringify(Tm)}${Am?` first: ${Mm(Am.split("\n")[0],300)}`:""}`)), Am && lm(`WebGPU shader module messages:\n${Mm(Am)}`)
          }))
        }(xm, String(null !== (Tm = (null !== (fm = Am[0]) && void 0 !== fm ? fm : {}).code) && void 0 !== Tm ? Tm : "")), xm
      })), ET(mm, "createRenderPipeline", (mm => function() {
        for (var Tm, fm = arguments.length, hm = new Array(fm), Am = 0; Am < fm; Am++) hm[Am] = arguments[Am];
        const am = pT(mm, this, hm);
        return UT(am, null !== (Tm = hm[0]) && void 0 !== Tm ? Tm : {}), am
      })), ET(mm, "createRenderPipelineAsync", (mm => function() {
        for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
        return pT(mm, this, fm).then((mm => {
          var Tm;
          return UT(mm, null !== (Tm = fm[0]) && void 0 !== Tm ? Tm : {}), mm
        }), (mm => {
          var Tm;
          throw function(mm, Tm) {
            var fm, hm, Am;
            if (sT.rejected >= iT) return;
            sT.rejected++;
            const {
              reason: am,
              message: xm
            } = null !== Tm && void 0 !== Tm ? Tm : {}, wm = String(null !== (fm = (null !== (hm = mm.vertex) && void 0 !== hm ? hm : {}).entryPoint) && void 0 !== fm ? fm : "");
            sm(`WebGPU pipeline "${String(null!==(Am=mm.label)&&void 0!==Am?Am:"")}" ${wm} rejected (${String(null!==am&&void 0!==am?am:"no reason")}): ${Mm(String(null!==xm&&void 0!==xm?xm:Tm),600)}`)
          }(null !== (Tm = fm[0]) && void 0 !== Tm ? Tm : {}, mm), mm
        }))
      })), ET(LT("GPUCanvasContext"), "configure", (mm => function() {
        for (var Tm, fm = arguments.length, hm = new Array(fm), Am = 0; Am < fm; Am++) hm[Am] = arguments[Am];
        const am = null !== (Tm = hm[0]) && void 0 !== Tm ? Tm : {};
        var xm, wm;
        lT++ < 3 && sm(`WebGPU canvas ${String(am.format)} ${String(null!==(xm=am.colorSpace)&&void 0!==xm?xm:"srgb")} alpha ${String(null!==(wm=am.alphaMode)&&void 0!==wm?wm:"opaque")}`);
        return pT(mm, this, hm)
      })), dT(LT("GPURenderPassEncoder")), dT(LT("GPURenderBundleEncoder"))
    }
    const FT = 1e4,
      mf = 6e4,
      Tf = 5e3,
      ff = 3e3,
      hf = 100;
    let Af = null,
      af = !1,
      xf = {
        ...GT.d
      },
      wf = !1,
      Df = null,
      Rf = 0,
      pf = () => {};
    const Ef = new Promise((mm => {
      pf = mm
    }));

    function of() {
      var mm;
      af || (af = !0, xf = Object.assign(window.bloxdRenderDebug ??= {
        ...GT.d
      }, {
        faceCull: "0" === (0, am.k)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (mm = (0, am.k)("adrenoProbe")) && void 0 !== mm ? mm : ""
      }), sm("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), oT || "undefined" === typeof window || (oT = !0, "undefined" !== typeof WebGL2RenderingContext && zT(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && zT(WebGLRenderingContext.prototype, !1)), WT(), (0, am.b)("renderProbe", (() => {
        If("console")
      })), jf(), setInterval(Qf, Tf))
    }

    function Of(mm) {
      var Tm, fm;
      of(), Af = null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.backend) && void 0 !== Tm ? Tm : null;
      const hm = `, renderer param ${null!==(fm=(0,am.k)("renderer"))&&void 0!==fm?fm:"none"}, faceCull ${"0"===xf.faceCull?"off (whole parts)":"on"}, adrenoProbe ${xf.adrenoProbe||"none"}`;
      sm(`${(0,XT.d)(mm)}${null===mm?"":hm}`)
    }

    function Yf() {
      const mm = performance.now(),
        Tm = qf(Ef, FT, mf).then((Tm => If(`${Math.round((performance.now()-mm)/1e3)} s after playable${Tm?"":", no terrain drawn yet"}`)));
      (0, Am.c)(sm, (async () => {
        await Tm, await Df
      }))
    }
    async function qf(mm, Tm, fm) {
      const Am = (0, hm.c)(fm).then((() => !1));
      return await (0, hm.c)(Tm), Promise.race([mm.then((() => !0)), Am])
    }

    function jf() {
      requestAnimationFrame((() => {
        Rf++, jf()
      }))
    }

    function Vf() {
      var mm, Tm, fm;
      if (wf) return;
      (wf = !0, sm(`renderer caps ${null!==(mm=xf.caps)&&void 0!==mm?mm:"(not noted)"}; terrain fetch ${null!==(Tm=xf.fetch)&&void 0!==Tm?Tm:"(not noted)"}`), xf.adrenoProbe) && sm(`adrenoProbe ${xf.adrenoProbe} asked; in force (storage fetch only): ${null!==(fm=xf.probe)&&void 0!==fm?fm:"(not noted)"}`);
      const hm = Gm.context;
      if (hm) {
        for (const mm of function(mm) {
            var Tm;
            const fm = [],
              hm = mm.getExtension("WEBGL_debug_renderer_info"),
              Am = hm ? mm.getParameter(hm.UNMASKED_VENDOR_WEBGL) : "(masked)",
              am = hm ? mm.getParameter(hm.UNMASKED_RENDERER_WEBGL) : "(masked)";
            fm.push(`GL ${String(mm.getParameter(mm.VERSION))} | ${String(mm.getParameter(mm.SHADING_LANGUAGE_VERSION))} | ${String(mm.getParameter(mm.VENDOR))} / ${String(mm.getParameter(mm.RENDERER))}`), fm.push(`GL unmasked ${Am} / ${am}`);
            const xm = [
              ["MAX_TEXTURE_SIZE", mm.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", mm.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", mm.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", mm.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", mm.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", mm.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", mm.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in mm && xm.push(["MAX_UNIFORM_BLOCK_SIZE", mm.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", mm.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", mm.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", mm.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), fm.push(`GL limits ${xm.map((Tm=>{let[fm,hm]=Tm;return`${fm} ${String(mm.getParameter(hm))}`})).join(", ")}`);
            const wm = (Tm, fm) => {
              const hm = mm.getShaderPrecisionFormat(Tm, mm.HIGH_FLOAT),
                Am = mm.getShaderPrecisionFormat(Tm, mm.HIGH_INT);
              return `${fm} highp float ${hm?`${hm.rangeMin}/${hm.rangeMax}/${hm.precision}`:"?"} int ${Am?`${Am.rangeMin}/${Am.rangeMax}/${Am.precision}`:"?"}`
            };
            fm.push(`GL precision ${wm(mm.VERTEX_SHADER,"VS")}, ${wm(mm.FRAGMENT_SHADER,"FS")}`);
            const Dm = mm.getContextAttributes();
            return fm.push(`GL context ${JSON.stringify(Dm)} drawingBuffer ${mm.drawingBufferWidth}x${mm.drawingBufferHeight}${"drawingBufferFormat"in mm?` format 0x${Number(mm.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in mm?` ${String(mm.drawingBufferColorSpace)}`:""}`), fm.push(`GL extensions ${(null!==(Tm=mm.getSupportedExtensions())&&void 0!==Tm?Tm:[]).join(" ")}`), fm
          }(hm)) sm(mm);
        ! function() {
          if (!Gm.context) return;
          let mm = 0,
            Tm = 0;
          for (const [fm, hm] of Sm) !hm.gl.isContextLost() && hm.gl.isProgram(fm) && (Tm++, bT(hm.gl, fm, hm), null !== hm.terrain && mm++);
          sm(`programs: ${Tm} live of ${Sm.length} linked, ${mm} packed terrain; CPU page copies ${Math.round(Gm.shadowBytes/1048576)} MiB (${Gm.uncopied} over budget)`)
        }()
      }
    }

    function If(mm) {
      return Df ??= async function(mm) {
        Vf(), "webgpu" === Af ? (Kf(), "1" === xf.slotCheck && sm("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), xf.slotCheck = "1", await
          function(mm) {
            if (null !== uT) return Promise.resolve();
            const Tm = [];
            return uT = Tm, new Promise((fm => {
              setTimeout((() => {
                uT = null, sm(`WebGPU draw ranges (${mm}): ${Tm.length} terrain draws recorded in a second (first ${RT}; bundles replay without new ones)`);
                for (const mm of Tm) sm(mm);
                fm()
              }), 1e3)
            }))
          }(mm), await async function() {
            if (await (0, GT.f)(xf, "slotCheck", ["1"], ff, hf), "1" === xf.slotCheck) return void sm(`slot check: no answer in ${ff} ms (only the storage fetch has one; a later answer logs on its own)`);
            Kf()
          }()) : await wT(mm);
        sm(`check (${mm}) done: bloxdDebug.save() downloads it all`)
      }(mm).catch((Tm => {
        sm(`check (${mm}) failed: ${String(Tm)}`)
      })).finally((() => {
        Df = null
      })), Df
    }

    function Kf() {
      void 0 !== xf.slotCheck && "1" !== xf.slotCheck && (sm(xf.slotCheck), delete xf.slotCheck)
    }

    function Qf() {
      const mm = mm => Rf ? (mm / Rf).toFixed(1) : "0",
        Tm = function() {
          const mm = BT;
          return BT = {
            draws: 0,
            faces: 0
          }, mm
        }(),
        fm = function() {
          const mm = VT;
          return VT = {
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
          }, mm
        }(),
        hm = function() {
          const mm = IT;
          return IT = {
            buffer: 0,
            texture: 0
          }, mm
        }();
      Kf(), ("webgpu" === Af ? Tm.draws : fm.inst.draws + fm.tex.draws) > 0 && pf();
      const Am = "webgpu" === Af ? [`terrain ${mm(Tm.draws)} draws ${mm(Tm.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((mm => fm[mm].draws > 0)).map((Tm => `${Tm} ${mm(fm[Tm].draws)} draws ${mm(fm[Tm].faces)} faces a frame`));
      sm(`${Rf} frames: ${Am.join(", ")||"no draws"}; uploaded ${Math.round(hm.buffer/1024)} KiB to buffers, ${Math.round(hm.texture/1024)} KiB to data textures`), Rf = 0
    }
  },
  4637: (mm, Tm, fm) => {
    function hm(mm) {
      if (null === mm) return "backend: none picked (no renderer build)";
      const Tm = mm.adapter ? `${mm.adapter.vendor}/${mm.adapter.architecture}` : "none";
      return `backend ${mm.backend}: reason ${mm.reason}, source ${mm.source}, adapter ${Tm}`
    }
    fm.d(Tm, {
      d: () => hm
    })
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);