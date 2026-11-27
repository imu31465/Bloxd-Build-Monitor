export const id = 56;
export const ids = [56];
export const modules = {
  5144: (ee, ie, He) => {
    He.d(ie, {
      e: () => oe
    });
    var ye = He(18),
      be = He(27),
      Me = He(1246),
      Ke = He(3037);
    const Ue = 3e4,
      Fe = 1e3;

    function Je() {
      return "visible" === document.visibilityState && "inGame" === ye.e.get("gameState") && (0, Me.x)()
    }

    function oe(ee, ie) {
      (0, Ke.r)() || function(ee, ie, He) {
        let ye = 0;
        const be = setInterval((() => {
          ie() && (ye += Fe, ye >= ee && (clearInterval(be), He()))
        }), Fe)
      }(Ue, Je, (() => {
        ie().then((() => {
          ee(`saved for the player after ${Ue/1e3} s of play`), (0, Ke.B)(), be.h.yR("chat", {
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
  5138: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      installRenderDebug: () => qH,
      renderDebugPlayable: () => TH,
      startRenderDebug: () => fH,
      waitForDraw: () => pH
    });
    var ye = He(1862),
      be = He(5144),
      Me = He(3037);
    const Ke = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function Ue(ee) {
      return 7 & ee
    }

    function Fe(ee) {
      return ee >>> 11 & 1
    }

    function Je(ee) {
      return [1 + (ee >>> 18 & 63), 1 + (ee >>> 24 & 63)]
    }

    function oe(ee, ie) {
      const [He, , ye] = ee, be = Ue(ye), Me = function(ee, ie, He) {
        return ie + (1 === (22 >>> ee & 1) ? 4 - He : He) & 3
      }(be, Fe(ye), ie), Ke = be >>> 1, [oe, Re] = Je(He), ke = 1 === Me || 2 === Me ? oe : 0, qe = Me >= 2 ? Re : 0, fe = [63 & He, He >>> 6 & 63, He >>> 12 & 63];
      return fe[2 === Ke ? 0 : 2] += ke, fe[1 === Ke ? 0 : 1] += qe, fe
    }

    function Re(ee) {
      const ie = Math.max(...Je(ee[0]));
      return 1 === ie ? "1" : ie <= 4 ? "2-4" : ie <= 16 ? "5-16" : "17-64"
    }
    const ke = 16;

    function qe(ee) {
      let ie = 2166136261;
      for (let He = 0; He < ee.length; He++) ie = Math.imul(ie ^ ee[He], 16777619);
      return ie >>> 0
    }

    function fe(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const ye = Math.max(0, ie - He),
        be = Math.min(ee.length, ie + He),
        Me = [];
      for (let Ke = ye; Ke < be; Ke++) {
        const He = ee[Ke].toString(16).padStart(2, "0");
        Me.push(Ke === ie ? `[${He}]` : He)
      }
      return Me.join(" ")
    }
    const Te = {
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
      pe = "_vs2fs_location0";
    const Xe = 0,
      ze = 4,
      Be = 6,
      Ee = [0, 1, 2, 0, 2, 3],
      ge = 2048,
      Oe = 4,
      de = 256,
      We = 64,
      te = 268435456,
      Ze = 65536,
      we = /^#version [^\n]*\/\/ program (\S+)$/m;

    function De(ee) {
      return null === ee.name ? `#${ee.id}` : `#${ee.id} ${ee.name}`
    }
    const Pe = [],
      Ae = new WeakMap,
      Ye = new WeakMap,
      Ve = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let ae = 1;
    const ce = new WeakMap;

    function xe(ee) {
      if (null === ee) return 0;
      let ie = ce.get(ee);
      return void 0 === ie && (ie = ae++, ce.set(ee, ie)), ie
    }
    class Le {
      constructor(ee, ie) {
        this.print = ee, this.now = ie, this.shown = 0, this.lJ = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.KR = [], this.dropped = 0
      }
      line(ee) {
        const ie = this.now();
        if (ie - this.second >= 1e3 && (this.second = ie, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.lJ++, void this.store(ee);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${ee} (the last line here: the rest go to bloxdDebug.save())` : ee)
      }
      keep(ee) {
        this.sections++, this.store(ee)
      }
      store(ee) {
        this.KR.push(`${new Date(Date.now()).toISOString()} ${ee}`), this.KR.length > 2e4 && (this.KR.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.lJ} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.KR].join("\n")
      }
    }
    let Ce = null;

    function ve() {
      if (null === Ce) {
        const ee = new Le((ee => {
          (0, Me.m)("render", ee)
        }), (() => performance.now()));
        (0, Me.i)("render", (() => ee.dump())), Ce = ee
      }
      return Ce
    }

    function ue(ee) {
      ve().line(ee)
    }

    function me(ee) {
      ve().keep(ee)
    }

    function le(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return ee.length <= ie ? ee : `${ee.slice(0,ie)}... (${ee.length-ie} more characters)`
    }

    function Se(ee, ie, He, ye, be, Me) {
      const Ke = Ve.pendingCheck;
      if (null === Ke) return;
      const Ue = "undefined" !== typeof WebGL2RenderingContext && ee instanceof WebGL2RenderingContext,
        Fe = {
          gl: ee,
          program: He,
          call: ye,
          zp: be,
          instances: Me,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (Ke.draws.push(Fe), Ue) try {
        const ye = function(ee) {
          const ie = [],
            He = new Map,
            ye = Math.min(16, ee.getParameter(Te.MAX_VERTEX_ATTRIBS));
          for (let be = 0; be < ye; be++) {
            if (!ee.getVertexAttrib(be, Te.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const ye = ee.getVertexAttrib(be, Te.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              Me = ee.getVertexAttribOffset(be, Te.VERTEX_ATTRIB_ARRAY_POINTER),
              Ke = ee.getVertexAttrib(be, Te.VERTEX_ATTRIB_ARRAY_STRIDE),
              Ue = ee.getVertexAttrib(be, Te.VERTEX_ATTRIB_ARRAY_SIZE),
              Fe = ee.getVertexAttrib(be, Te.VERTEX_ATTRIB_ARRAY_TYPE),
              Je = "VERTEX_ATTRIB_ARRAY_INTEGER" in ee && ee.getVertexAttrib(be, Te.VERTEX_ATTRIB_ARRAY_INTEGER),
              oe = "VERTEX_ATTRIB_ARRAY_DIVISOR" in ee ? ee.getVertexAttrib(be, Te.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            He.set(be, {
              buffer: ye,
              offset: Me,
              stride: Ke
            }), ie.push(`@${be} buf#${xe(ye)} +${Me} stride ${Ke} ${Ue}x0x${Fe.toString(16)}${Je?" int":""} div ${oe}`)
          }
          return {
            lines: ie,
            byLocation: He
          }
        }(ee);
        if (Fe.attributes = ye.lines, "inst" === He.terrain) {
          const {
            group: be,
            chunk: Ue
          } = function(ee, ie, He) {
            const ye = ie.get(Be),
              be = ee.getVertexAttrib(Be, Te.CURRENT_VERTEX_ATTRIB),
              Me = ye ? `+${ye.offset}` : be ? Array.from(be).slice(0, 3).join(",") : "?";
            let Ke = He.groups.get(Me);
            return void 0 === Ke && (Ke = He.groups.size, He.groups.set(Me, Ke)), {
              group: Ke,
              chunk: Me
            }
          }(ee, ye.byLocation, Ke);
          Fe.group = be, Fe.chunk = Ue;
          for (const ee of [Xe, ze]) {
            var Je;
            const ie = null === (Je = ye.byLocation.get(ee)) || void 0 === Je ? void 0 : Je.buffer;
            ie && Fe.pages.push({
              kind: "buf",
              buffer: ie
            })
          }! function(ee, ie, He, ye, be, Me, Ke) {
            const Ue = ye.get(Xe),
              Fe = Ke.parts.get(Me);
            if (void 0 === Fe && Ke.parts.size >= Oe) return;
            const Je = Math.min(be, We, de - (null !== Fe && void 0 !== Fe ? Fe : 0));
            if (null === Ue || void 0 === Ue || !Ue.buffer || Je <= 0) return;
            const oe = ne(ee, ie, He);
            if (!oe) return;
            const Re = Ue.stride || 12,
              ke = Ne(ee, Ue.buffer, Ue.offset, (Je - 1) * Re + 12),
              qe = new DataView(ke.buffer),
              fe = function(ee, ie) {
                const He = function(ee) {
                    const ie = Qe.get(ee);
                    if (void 0 !== ie && (null === ie || ee.isProgram(ie))) return ie;
                    Ve.inProbe = !0;
                    let He = null;
                    try {
                      He = je(ee, Ge, re, "fed", "the record feed")
                    } finally {
                      Ve.inProbe = !1
                    }
                    return Qe.set(ee, He), He
                  }(ee),
                  ye = He ? he(ee, He, ie, (() => {
                    ee.drawArraysInstanced(Te.POINTS, 0, 1, ie)
                  }), "decode probe input (the record feed)") : null;
                return ye ? new Uint32Array(ye.buffer) : null
              }(ee, Je);
            fe || Ke.fed.failed++;
            const pe = he(ee, oe, 4 * Je, (() => {
              ee.drawArraysInstanced(Te.POINTS, 0, 4, Je)
            }));
            if (!pe) return;
            Ke.parts.set(Me, (null !== Fe && void 0 !== Fe ? Fe : 0) + Je);
            for (let Te = 0; Te < Je; Te++) {
              const ee = Te * Re,
                ie = [qe.getUint32(ee, !0), qe.getUint32(ee + 4, !0), qe.getUint32(ee + 8, !0)],
                He = fe ? [fe[3 * Te], fe[3 * Te + 1], fe[3 * Te + 2]] : ie;
              fe && (Ke.fed.records++, He.some(((ee, He) => ee !== ie[He])) && (Ke.fed.differing++, Ke.fed.first.length < 8 && Ke.fed.first.push(`part ${Me} instance ${Te}: fed ${He.map(bi).join(" ")} buffer ${ie.map(bi).join(" ")}`)));
              for (let ye = 0; ye < 4; ye++) {
                const ee = 3 * (4 * Te + ye);
                Ke.vertices.push({
                  record: He,
                  slot: ye,
                  group: Me,
                  gpu: [pe[ee], pe[ee + 1], pe[ee + 2]]
                })
              }
            }
          }(ee, ie, He, ye.byLocation, Me, be, Ke)
        } else {
          const ye = ei(ee, ie, 16),
            Me = ei(ee, ie, 8);
          for (const ee of [ye, Me]) ee && Fe.pages.push({
            kind: "tex",
            texture: ee
          });
          ye && function(ee, ie, He, ye, be, Me) {
            if (Me.parts.size >= Oe) return;
            const Ke = ne(ee, ie, He);
            if (!Ke) return;
            let Ue = 6 * de;
            const Fe = [];
            for (const [qe, fe] of be) {
              const ee = Math.min(fe, Ue, Math.max(6, 6 * Math.floor(de / be.length)));
              ee > 0 && (Fe.push([qe, ee]), Ue -= ee)
            }
            const Je = Fe.reduce(((ee, ie) => {
                let [, He] = ie;
                return ee + He
              }), 0),
              oe = he(ee, Ke, Je, (() => {
                for (const [ie, He] of Fe) ee.drawArrays(Te.POINTS, ie, He)
              }));
            if (!oe) return;
            let Re = 0;
            for (const [qe, fe] of Fe) {
              const ie = Math.floor(qe / 6),
                He = Math.floor((qe + fe - 1) / 6) - ie + 1,
                be = ii(ee, ye, ge, ie, He);
              for (let ee = qe; ee < qe + fe; ee++, Re++) {
                var ke;
                const He = 4 * (Math.floor(ee / 6) - ie),
                  ye = [be[He], be[He + 1], be[He + 2]];
                Me.parts.set(be[He + 3], (null !== (ke = Me.parts.get(be[He + 3])) && void 0 !== ke ? ke : 0) + (ee % 6 === 0 ? 1 : 0)), Me.vertices.push({
                  record: ye,
                  slot: Ee[ee % 6],
                  group: be[He + 3],
                  gpu: [oe[3 * Re], oe[3 * Re + 1], oe[3 * Re + 2]]
                })
              }
            }
          }(ee, ie, He, ye, be, Ke)
        }
      } catch (oe) {
        ue(`decode probe failed on program ${De(He)}: ${String(oe)}`)
      }
    }

    function ne(ee, ie, He) {
      if (void 0 !== He.probe) return He.probe && se(ee, ie, He.probe), He.probe;
      He.probe = null, Ve.inProbe = !0;
      try {
        He.probe = function(ee, ie) {
          return je(ee, (He = ie.vertex, He.replace(`\nvec3 ${pe} = vec3(0);\n`, `\nout vec3 ${pe};\n`)), ie.fragment, pe, `program ${De(ie)}'s twin`);
          var He
        }(ee, He)
      } finally {
        Ve.inProbe = !1
      }
      return He.probe && se(ee, ie, He.probe), He.probe
    }

    function je(ee, ie, He, ye, be) {
      const Me = [ee.createShader(Te.VERTEX_SHADER), ee.createShader(Te.FRAGMENT_SHADER)],
        Ke = ee.createProgram();
      if (!Ke || !Me[0] || !Me[1]) return null;
      ee.shaderSource(Me[0], ie), ee.shaderSource(Me[1], He);
      for (const Fe of Me) ee.compileShader(Fe), ee.attachShader(Ke, Fe);
      ee.transformFeedbackVaryings(Ke, [ye], Te.INTERLEAVED_ATTRIBS), ee.linkProgram(Ke);
      for (const Fe of Me) ee.deleteShader(Fe);
      var Ue;
      return ee.getProgramParameter(Ke, Te.LINK_STATUS) ? Ke : (ue(`decode probe: ${be} failed to link: ${le(null!==(Ue=ee.getProgramInfoLog(Ke))&&void 0!==Ue?Ue:"",300)}`), ee.deleteProgram(Ke), null)
    }

    function se(ee, ie, He) {
      const ye = ee.getProgramParameter(ie, Te.ACTIVE_UNIFORM_BLOCKS);
      for (let Ue = 0; Ue < ye; Ue++) {
        const ye = ee.getActiveUniformBlockName(ie, Ue),
          be = null === ye ? Te.INVALID_INDEX : ee.getUniformBlockIndex(He, ye);
        be !== Te.INVALID_INDEX && ee.uniformBlockBinding(He, be, ee.getActiveUniformBlockParameter(ie, Ue, Te.UNIFORM_BLOCK_BINDING))
      }
      const be = ee.getParameter(Te.CURRENT_PROGRAM);
      ee.useProgram(He);
      const Me = ee.getProgramParameter(ie, Te.ACTIVE_UNIFORMS),
        Ke = ee.getActiveUniforms(ie, [...Array(Me).keys()], Te.UNIFORM_BLOCK_INDEX);
      for (let Ue = 0; Ue < Me; Ue++) {
        const ye = ee.getActiveUniform(ie, Ue);
        if (!ye || -1 !== Ke[Ue]) continue;
        const be = ye.name.replace(/\[0\]$/, "");
        for (let Me = 0; Me < ye.size; Me++) {
          const Ke = ye.size > 1 ? `${be}[${Me}]` : ye.name,
            Ue = ee.getUniformLocation(ie, Ke),
            Fe = ee.getUniformLocation(He, Ke);
          Ue && Fe && Ie(ee, Fe, ye.type, ee.getUniform(ie, Ue))
        }
      }
      ee.useProgram(be)
    }

    function Ie(ee, ie, He, ye) {
      const be = ArrayBuffer.isView(ye) ? Array.from(ye) : [Number(ye)];
      switch (He) {
        case Te.FLOAT:
          return void ee.uniform1f(ie, be[0]);
        case Te.FLOAT_VEC2:
          return void ee.uniform2fv(ie, be);
        case Te.FLOAT_VEC3:
          return void ee.uniform3fv(ie, be);
        case Te.FLOAT_VEC4:
          return void ee.uniform4fv(ie, be);
        case Te.FLOAT_MAT3:
          return void ee.uniformMatrix3fv(ie, !1, be);
        case Te.FLOAT_MAT4:
          return void ee.uniformMatrix4fv(ie, !1, be);
        case Te.UNSIGNED_INT:
          return void ee.uniform1ui(ie, be[0]);
        case Te.UNSIGNED_INT_VEC2:
          return void ee.uniform2uiv(ie, be);
        case Te.UNSIGNED_INT_VEC3:
          return void ee.uniform3uiv(ie, be);
        case Te.UNSIGNED_INT_VEC4:
          return void ee.uniform4uiv(ie, be);
        case Te.INT_VEC2:
          return void ee.uniform2iv(ie, be);
        case Te.INT_VEC3:
          return void ee.uniform3iv(ie, be);
        case Te.INT_VEC4:
          return void ee.uniform4iv(ie, be);
        default:
          ee.uniform1i(ie, be[0])
      }
    }

    function he(ee, ie, He, ye) {
      let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const Me = ee.getParameter(Te.CURRENT_PROGRAM),
        Ke = ee.getParameter(Te.TRANSFORM_FEEDBACK_BINDING),
        Ue = ee.getParameter(Te.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        Fe = ee.getParameter(Te.COPY_READ_BUFFER_BINDING),
        Je = ee.isEnabled(Te.RASTERIZER_DISCARD),
        oe = ee.createTransformFeedback(),
        Re = ee.createBuffer();
      Ve.inProbe = !0;
      try {
        const Me = ee.getError();
        Me !== Te.NO_ERROR && ue(`GL error 0x${Me.toString(16)} pending before the decode probe (the renderer's)`), ee.useProgram(ie), ee.bindTransformFeedback(Te.TRANSFORM_FEEDBACK, oe), ee.bindBuffer(Te.TRANSFORM_FEEDBACK_BUFFER, Re), ee.bufferData(Te.TRANSFORM_FEEDBACK_BUFFER, 12 * He, Te.STREAM_READ), ee.bindBufferBase(Te.TRANSFORM_FEEDBACK_BUFFER, 0, Re), ee.enable(Te.RASTERIZER_DISCARD), ee.beginTransformFeedback(Te.POINTS), ye(), ee.endTransformFeedback(), ee.bindBufferBase(Te.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const Ke = ee.getError();
        if (Ke !== Te.NO_ERROR) return ue(`${be}: GL error 0x${Ke.toString(16)} on the feedback draw`), null;
        const Ue = new Float32Array(3 * He);
        return ee.bindBuffer(Te.COPY_READ_BUFFER, Re), ee.getBufferSubData(Te.COPY_READ_BUFFER, 0, Ue), Ue
      } finally {
        Je || ee.disable(Te.RASTERIZER_DISCARD), ee.bindTransformFeedback(Te.TRANSFORM_FEEDBACK, Ke), ee.bindBuffer(Te.TRANSFORM_FEEDBACK_BUFFER, Ue), ee.bindBuffer(Te.COPY_READ_BUFFER, Fe), ee.deleteTransformFeedback(oe), ee.deleteBuffer(Re), ee.useProgram(Me), Ve.inProbe = !1
      }
    }

    function Ne(ee, ie, He, ye) {
      const be = ee.getParameter(Te.COPY_READ_BUFFER_BINDING),
        Me = new Uint8Array(ye);
      return ee.bindBuffer(Te.COPY_READ_BUFFER, ie), ee.getBufferSubData(Te.COPY_READ_BUFFER, He, Me), ee.bindBuffer(Te.COPY_READ_BUFFER, be), Me
    }
    const Ge = `#version 300 es\nlayout(location = ${Xe}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      re = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      Qe = new WeakMap;

    function ei(ee, ie, He) {
      const ye = ee.getProgramParameter(ie, Te.ACTIVE_UNIFORMS),
        be = ee.getParameter(Te.ACTIVE_TEXTURE);
      try {
        for (let be = 0; be < ye; be++) {
          const ye = ee.getActiveUniform(ie, be);
          if ((null === ye || void 0 === ye ? void 0 : ye.type) !== Te.UNSIGNED_INT_SAMPLER_2D) continue;
          const Me = ee.getUniformLocation(ie, ye.name),
            Ke = Me ? ee.getUniform(ie, Me) : -1;
          if (Ke < 0) continue;
          ee.activeTexture(Te.TEXTURE0 + Ke);
          const Ue = ee.getParameter(Te.TEXTURE_BINDING_2D);
          if (Ue && Ye.get(Ue) === He) return Ue
        }
        return null
      } finally {
        ee.activeTexture(be)
      }
    }

    function ii(ee, ie, He, ye, be) {
      const Me = new Uint32Array(4 * be),
        Ke = ee.getParameter(Te.READ_FRAMEBUFFER_BINDING),
        Ue = ee.createFramebuffer();
      ee.bindFramebuffer(Te.READ_FRAMEBUFFER, Ue), ee.framebufferTexture2D(Te.READ_FRAMEBUFFER, Te.COLOR_ATTACHMENT0, Te.TEXTURE_2D, ie, 0);
      try {
        let ie = 0;
        for (; ie < be;) {
          const Ke = ye + ie,
            Ue = Ke % He,
            Fe = Math.min(be - ie, He - Ue);
          ee.readPixels(Ue, Math.floor(Ke / He), Fe, 1, Te.RGBA_INTEGER, Te.UNSIGNED_INT, Me.subarray(4 * ie, 4 * (ie + Fe))), ie += Fe
        }
      } finally {
        ee.bindFramebuffer(Te.READ_FRAMEBUFFER, Ke), ee.deleteFramebuffer(Ue)
      }
      return Me
    }

    function Hi(ee, ie, He) {
      let ye = 0,
        be = 0;
      for (let Fe = 0; Fe < ie.bytes.length; Fe += Ze) {
        ye++;
        const ee = Math.min(Fe + Ze, ie.bytes.length);
        qe(ie.bytes.subarray(Fe, ee)) !== qe(He.subarray(Fe, ee)) && be++
      }
      const Me = `${ee} ${ie.bytes.length} B cpu ${qe(ie.bytes).toString(16)} gpu ${qe(He).toString(16)}, ${be}/${ye} blocks differ${ie.missed?`, ${ie.missed} GPU-side writes uncopied`:""}`;
      if (0 === be) return Me;
      const {
        count: Ke,
        offsets: Ue
      } = function(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const ye = Math.min(ee.length, ie.length);
        let be = Math.abs(ee.length - ie.length);
        const Me = [];
        for (let Ke = 0; Ke < ye; Ke++) ee[Ke] !== ie[Ke] && (be++, Me.length < He && Me.push(Ke));
        return {
          count: be,
          offsets: Me
        }
      }(ie.bytes, He);
      return me([`${Me}: ${Ke} bytes differ`, ...Ue.map((ee => `  +${ee}: cpu ${fe(ie.bytes,ee)} | gpu ${fe(He,ee)}`))].join("\n")), `${Me}: ${Ke} bytes differ, first at ${Ue.join(", ")} (context in the saved file)`
    }

    function yi(ee) {
      if (0 === ee.vertices.length) return void ue(`decode probe (${ee.reason}): no terrain draw probed (${ee.draws.length} seen)`);
      const ie = function(ee) {
          const ie = new Map;
          for (const ye of ee) {
            const ee = ie.get(ye.group);
            ee ? ee.push(ye) : ie.set(ye.group, [ye])
          }
          const He = {
            vertices: ee.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [ye, be] of ie) {
            const ee = new Map,
              ie = be.map((ie => {
                const He = oe(ie.record, ie.slot),
                  ye = [ie.gpu[0] - He[0], ie.gpu[1] - He[1], ie.gpu[2] - He[2]],
                  be = ye.map((ee => Math.round(64 * ee))).join(","),
                  Me = ee.get(be);
                return Me ? Me.count++ : ee.set(be, {
                  count: 1,
                  offset: ye
                }), He
              }));
            let Me = [0, 0, 0],
              Ke = 0;
            for (const He of ee.values()) He.count > Ke && (Ke = He.count, Me = He.offset);
            He.translations.set(ye, Me), be.forEach(((ee, ye) => {
              var be;
              const Ke = [ie[ye][0] + Me[0], ie[ye][1] + Me[1], ie[ye][2] + Me[2]];
              if (Ke.every(((ie, He) => {
                  return ye = ee.gpu[He], be = ie, Math.abs(ye - be) <= Math.max(.001, 1e-6 * Math.abs(be));
                  var ye, be
                }))) return;
              He.mismatches++, He.byDirection[Ue(ee.record[2])]++, He.byDiagonal[Fe(ee.record[2])]++;
              const Je = Re(ee.record);
              He.byBand[Je] = (null !== (be = He.byBand[Je]) && void 0 !== be ? be : 0) + 1, He.first.length < ke && He.first.push({
                ...ee,
                expected: Ke
              })
            }))
          }
          return He
        }(ee.vertices),
        He = ie.byDirection.map(((ee, ie) => ee ? `${Ke[ie]} ${ee}` : "")).filter(Boolean).join(" "),
        ye = Object.entries(ie.byBand).map((ee => {
          let [ie, He] = ee;
          return `${ie}: ${He}`
        })).join(" ");
      if (ue(`decode probe (${ee.reason}): ${ie.mismatches}/${ie.vertices} vertices differ from the CPU decode over ${ee.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (ie.mismatches ? ` by direction [${He}] diagonal [0: ${ie.byDiagonal[0]} 1: ${ie.byDiagonal[1]}] extent [${ye}]` : "")), ee.fed.records > 0 || ee.fed.failed > 0) {
        ue(`decode probe input: ${ee.fed.differing}/${ee.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (ee.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (ee.fed.failed ? `; the feed failed on ${ee.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const ie of ee.fed.first) ue(`  ${ie}`)
      }
      for (const be of ie.first) {
        const [ee, ie, He] = be.record;
        ue(`  mismatch part ${be.group} r0 ${ee.toString(16)} r1 ${ie.toString(16)} r2 ${He.toString(16)} slot ${be.slot} (${Ke[Ue(He)]}): expected ${be.expected.map(Mi).join(",")} gpu ${be.gpu.map(Mi).join(",")}`)
      }
      me(`decode probe translations: ${[...ie.translations].map((ee=>{let[ie,He]=ee;return`${ie}: ${He.map(Mi).join(",")}`})).join("; ")}`)
    }

    function bi(ee) {
      return ee.toString(16)
    }

    function Mi(ee) {
      return Number.isInteger(ee) ? String(ee) : ee.toFixed(3)
    }

    function Ki(ee) {
      return null !== Ve.pendingCheck ? Promise.resolve() : new Promise((ie => {
        let He = !1;
        const ye = {
          reason: ee,
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
        Ve.pendingCheck = ye;
        const be = () => {
            Ve.pendingCheck = null;
            try {
              ! function(ee) {
                ue(`draw ranges (${ee.reason}): ${ee.terrainDraws} terrain draws in the frame, the first ${ee.draws.length} here`);
                for (const ie of ee.draws) {
                  const ee = ie.zp.slice(0, 8).map((ee => {
                      let [ie, He] = ee;
                      return `${ie}+${He}`
                    })).join(" "),
                    He = ie.zp.length > 8 ? ` (+${ie.zp.length-8} ranges)` : "";
                  ue(`  ${De(ie.program)} ${ie.program.terrain} ${ie.call} ${ee}${He} x${ie.instances}${ie.group>=0?` part ${ie.group} chunk ${ie.chunk}`:""} | ${ie.attributes.join(" | ")}`)
                }
              }(ye), yi(ye);
              ye.draws.some((ee => "undefined" !== typeof WebGL2RenderingContext && ee.gl instanceof WebGL2RenderingContext)) || 0 === ye.draws.length ? function(ee) {
                const ie = [],
                  He = new Map;
                for (const ye of ee)
                  if ("undefined" !== typeof WebGL2RenderingContext && ye.gl instanceof WebGL2RenderingContext)
                    for (const ee of ye.pages) He.set("buf" === ee.kind ? ee.buffer : ee.texture, {
                      page: ee,
                      gl: ye.gl
                    });
                for (const [ye, {
                    page: be,
                    gl: Me
                  }] of He) {
                  const ee = Ae.get(ye);
                  if (!ee) {
                    ie.push(`${be.kind}#${xe(ye)}: no CPU copy (${Ve.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === be.kind) {
                    ie.push(Hi(`buf#${ee.id}`, ee, Ne(Me, be.buffer, 0, ee.bytes.length)));
                    continue
                  }
                  const He = ii(Me, be.texture, ee.width, 0, ee.width * ee.height),
                    Ke = 16 === ee.texelBytes ? new Uint8Array(He.buffer) : new Uint8Array(new Uint16Array(He).buffer);
                  ie.push(Hi(`tex#${ee.id} (${16===ee.texelBytes?"records":"light"})`, ee, Ke))
                }
                for (const ye of ie) ue(`page readback ${ye}`)
              }(ye.draws) : ue("page readback: none on WebGL1 (no buffer readback)")
            } catch (ee) {
              ue(`check failed: ${String(ee)}`)
            }
            ie()
          },
          Me = () => {
            if (ye.draws.length > 0 && !He) return He = !0, void setTimeout(be, 0);
            He || requestAnimationFrame(Me)
          };
        requestAnimationFrame(Me), setTimeout((() => {
          He || (He = !0, be())
        }), 5e3)
      }))
    }
    var Ui = He(5153);
    const Fi = 20,
      Ji = 24,
      oi = Reflect.apply;

    function Ri(ee, ie, He) {
      if (!ee) return;
      const ye = ee[ie];
      if ("function" === typeof ye) {
        const be = He(ye);
        ee[ie] = be, (0, Ui.z)(be, ye)
      }
    }
    let ki = !1;
    const qi = new WeakMap,
      fi = new WeakMap,
      Ti = new WeakMap,
      Xi = {
        gl: 0,
        lost: 0
      };
    let zi = {
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
      Bi = {
        buffer: 0,
        texture: 0
      },
      Ei = 0;

    function gi(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (ee instanceof ArrayBuffer) return new Uint8Array(ee, ie, He || void 0);
      if (!ArrayBuffer.isView(ee)) return null;
      const ye = "BYTES_PER_ELEMENT" in ee ? ee.BYTES_PER_ELEMENT : 1,
        be = ee.byteOffset + ie * ye,
        Me = He ? He * ye : ee.byteLength - ie * ye;
      return new Uint8Array(ee.buffer, be, Math.max(0, Me))
    }

    function Oi(ee, ie) {
      const He = function(ee) {
        switch (ee) {
          case Te.ARRAY_BUFFER:
            return Te.ARRAY_BUFFER_BINDING;
          case Te.ELEMENT_ARRAY_BUFFER:
            return Te.ELEMENT_ARRAY_BUFFER_BINDING;
          case Te.COPY_READ_BUFFER:
            return Te.COPY_READ_BUFFER_BINDING;
          case Te.COPY_WRITE_BUFFER:
            return Te.COPY_WRITE_BUFFER_BINDING;
          case Te.UNIFORM_BUFFER:
            return Te.UNIFORM_BUFFER_BINDING;
          case Te.PIXEL_UNPACK_BUFFER:
            return Te.PIXEL_UNPACK_BUFFER_BINDING;
          case Te.TRANSFORM_FEEDBACK_BUFFER:
            return Te.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(ie);
      return He ? ee.getParameter(He) : null
    }

    function di(ee) {
      const ie = Ae.get(ee);
      ie && (Ve.shadowBytes -= ie.bytes.length, Ae.delete(ee))
    }

    function Wi(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      di(ee), Ve.shadowBytes + ie > te ? Ve.uncopied++ : (Ve.shadowBytes += ie, Ae.set(ee, {
        id: xe(ee),
        bytes: new Uint8Array(ie),
        width: He,
        height: ye,
        texelBytes: be,
        missed: 0
      }))
    }

    function ti(ee, ie) {
      for (const He of ["deleteBuffer", "deleteTexture"]) Ri(ee, He, (ee => function() {
        for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
        return He[0] && di(He[0]), oi(ee, this, He)
      }));
      Ri(ee, "shaderSource", (ee => function() {
        for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
        return He[0] && "string" === typeof He[1] && qi.set(He[0], He[1]), oi(ee, this, He)
      })), Ri(ee, "attachShader", (ee => function() {
        for (var ie, He = arguments.length, ye = new Array(He), be = 0; be < He; be++) ye[be] = arguments[be];
        const Me = ye[0],
          Ke = null !== (ie = fi.get(Me)) && void 0 !== ie ? ie : [];
        return Ke.push(ye[1]), fi.set(Me, Ke), oi(ee, this, ye)
      })), Ri(ee, "linkProgram", (ee => function() {
        for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
        const be = oi(ee, this, He);
        return Ve.inProbe || function(ee, ie) {
          var He, ye, be;
          "undefined" !== typeof HTMLCanvasElement && ee.canvas instanceof HTMLCanvasElement && function(ee) {
            if (Yi.has(ee)) return;
            Yi.add(ee);
            for (const ie of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) ee.addEventListener(ie, (ee => {
              Xi.lost < Fi && (Xi.lost++, ue(`${ie}${"statusMessage"in ee?`: ${String(ee.statusMessage)}`:""}`))
            }))
          }(ee.canvas);
          Ve.context ??= ee;
          const Me = null !== (He = fi.get(ie)) && void 0 !== He ? He : [];
          let Ke = "",
            Ue = "";
          for (const oe of Me) {
            var Fe;
            const ee = null !== (Fe = qi.get(oe)) && void 0 !== Fe ? Fe : "";
            /\bgl_Position\b/.test(ee) ? Ke = ee : Ue = ee
          }
          const Je = {
            id: xe(ie),
            name: null !== (ye = null === (be = we.exec(Ke)) || void 0 === be ? void 0 : be[1]) && void 0 !== ye ? ye : null,
            gl: ee,
            vertex: Ke,
            fragment: Ue,
            terrain: wi(Ke),
            checked: !1,
            firstDraw: !1
          };
          if (Ti.set(ie, Je), Pe.push([ie, Je]), null !== Je.terrain) {
            const ie = Me.map((ie => {
              var He;
              return null !== (He = ee.getShaderInfoLog(ie)) && void 0 !== He ? He : ""
            })).filter((ee => "" !== ee.trim()));
            ie.length > 0 && me(`program ${De(Je)} (${Je.terrain}) shader logs:\n${le(ie.join("\n"))}`)
          }
        }(this, He[0]), be
      })), Ri(ee, "bufferData", (ee => function() {
        for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
        const be = oi(ee, this, He);
        if (!Ve.inProbe) {
          const ee = Oi(this, He[0]);
          if (ee) {
            var Me, Ke, Ue;
            const ie = "number" === typeof He[1] ? null : gi(He[1], null !== (Me = He[3]) && void 0 !== Me ? Me : 0, null !== (Ke = He[4]) && void 0 !== Ke ? Ke : 0);
            var Fe;
            if (Wi(ee, "number" === typeof He[1] ? He[1] : null !== (Ue = null === ie || void 0 === ie ? void 0 : ie.length) && void 0 !== Ue ? Ue : 0), ie) null === (Fe = Ae.get(ee)) || void 0 === Fe || Fe.bytes.set(ie)
          }
        }
        return be
      })), Ri(ee, "bufferSubData", (ee => function() {
        for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
        const be = oi(ee, this, He);
        if (!Ve.inProbe) {
          var Me, Ke;
          const ee = Oi(this, He[0]),
            ie = ee ? Ae.get(ee) : void 0,
            ye = gi(He[2], null !== (Me = He[3]) && void 0 !== Me ? Me : 0, null !== (Ke = He[4]) && void 0 !== Ke ? Ke : 0);
          if (ie && ye) {
            const ee = He[1];
            ie.bytes.set(ye.subarray(0, Math.max(0, ie.bytes.length - ee)), ee), Zi("buffer", ie, ee, ye.length)
          }
        }
        return be
      })), ie && (Ri(ee, "copyBufferSubData", (ee => function() {
        for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
        const be = oi(ee, this, He);
        if (!Ve.inProbe) {
          const [ee, ie, ye, be, Me] = He, Ke = Oi(this, ee), Ue = Oi(this, ie), Fe = Ke ? Ae.get(Ke) : void 0, Je = Ue ? Ae.get(Ue) : void 0;
          Je && (Fe ? Je.bytes.set(Fe.bytes.slice(ye, ye + Me), be) : Je.missed++)
        }
        return be
      })), Ri(ee, "texStorage2D", (ee => function() {
        for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
        const be = oi(ee, this, He),
          [, , Me, Ke, Ue] = He;
        if (!Ve.inProbe && (Me === Te.RGBA32UI || Me === Te.RGBA16UI)) {
          const ee = this.getParameter(Te.TEXTURE_BINDING_2D),
            ie = Me === Te.RGBA32UI ? 16 : 8;
          ee && (Ye.set(ee, ie), Wi(ee, Ke * Ue * ie, Ke, Ue, ie))
        }
        return be
      })), Ri(ee, "texSubImage2D", (ee => function() {
        for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
        const be = oi(ee, this, He);
        return !Ve.inProbe && He.length >= 9 && He[0] === Te.TEXTURE_2D && 0 === He[1] && function(ee, ie) {
          var He;
          const ye = ee.getParameter(Te.TEXTURE_BINDING_2D),
            be = ye ? Ae.get(ye) : void 0;
          if (!be) return;
          const [, , Me, Ke, Ue, Fe] = ie;
          let Je = gi(ie[8], null !== (He = ie[9]) && void 0 !== He ? He : 0);
          if (null === Je && "number" === typeof ie[8]) {
            const He = Oi(ee, Te.PIXEL_UNPACK_BUFFER),
              ye = He ? Ae.get(He) : void 0;
            Je = ye ? ye.bytes.subarray(ie[8]) : null
          }
          if (null === Je) return void be.missed++;
          const oe = ee.getParameter(Te.UNPACK_ROW_LENGTH) || Ue,
            Re = ee.getParameter(Te.UNPACK_SKIP_ROWS),
            ke = ee.getParameter(Te.UNPACK_SKIP_PIXELS),
            qe = be.texelBytes;
          for (let fe = 0; fe < Fe; fe++) {
            const ee = ((Re + fe) * oe + ke) * qe,
              ie = ((Ke + fe) * be.width + Me) * qe;
            be.bytes.set(Je.subarray(ee, ee + Ue * qe), ie)
          }
          Zi("texture", be, (Ke * be.width + Me) * qe, Ue * Fe * qe)
        }(this, He), be
      })), Ri(ee, "copyTexSubImage2D", (ee => function() {
        for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
        const be = He[0] === Te.TEXTURE_2D ? this.getParameter(Te.TEXTURE_BINDING_2D) : null,
          Me = be ? Ae.get(be) : void 0;
        return Me && Me.missed++, oi(ee, this, He)
      })));
      for (const He of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) Ri(ee, He, (ee => function() {
        for (var ie = arguments.length, ye = new Array(ie), be = 0; be < ie; be++) ye[be] = arguments[be];
        const Me = oi(ee, this, ye);
        return Ve.inProbe || Pi(this, He, ye), Me
      }));
      Ri(ee, "getExtension", (ee => function() {
        for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
        const be = oi(ee, this, He);
        return be && "object" === typeof be && function(ee, ie, He) {
          const ye = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(ie in ye) || He.bloxdRenderDebug) return;
          He.bloxdRenderDebug = !0;
          for (const be of ye[ie]) {
            const ie = He[be];
            "function" === typeof ie && (He[be] = function() {
              for (var ye = arguments.length, Me = new Array(ye), Ke = 0; Ke < ye; Ke++) Me[Ke] = arguments[Ke];
              const Ue = oi(ie, He, Me);
              return Ve.inProbe || Pi(ee, be, Me), Ue
            })
          }
        }(this, He[0], be), be
      }))
    }

    function Zi(ee, ie, He, ye) {
      Bi[ee] += ye, Ei < 32 && ie.bytes.length >= 1 << 20 && (Ei++, me(`upload ${ee} #${ie.id} +${He} ${ye} B`))
    }

    function wi(ee) {
      if (!ee.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(ee) || /in uvec3 _p2vs_location0\b/.test(ee) ? "inst" : "tex"
    }

    function Di(ee, ie, He) {
      var ye;
      if (He.checked) return;
      He.checked = !0;
      const be = ee.getProgramParameter(ie, Te.LINK_STATUS),
        Me = (null !== (ye = ee.getProgramInfoLog(ie)) && void 0 !== ye ? ye : "").trim();
      var Ke;
      null === He.terrain && be || (ue(`program ${De(He)} ${null!==(Ke=He.terrain)&&void 0!==Ke?Ke:"other"} link ${be?"ok":"FAILED"}${Me?`: ${le(Me,300)}`:""}`), Me && me(`program ${De(He)} link log:\n${le(Me)}`))
    }

    function Pi(ee, ie, He) {
      var ye;
      const be = ee.getParameter(Te.CURRENT_PROGRAM),
        Me = be ? Ti.get(be) : void 0;
      if (!be || !Me) return;
      const Ke = null !== (ye = Me.terrain) && void 0 !== ye ? ye : "other",
        {
          zp: Ue,
          instances: Fe
        } = function(ee, ie) {
          switch (ee) {
            case "drawArrays":
              return {
                zp: [
                  [ie[1], ie[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                zp: [
                  [ie[1], ie[2]]
                ], instances: ie[3]
              };
            case "drawElements":
              return {
                zp: [
                  [0, ie[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                zp: [
                  [0, ie[1]]
                ], instances: ie[4]
              };
            case "multiDrawArraysWEBGL": {
              const ee = ie[1],
                He = ie[3],
                ye = ie[2],
                be = ie[4],
                Me = [];
              for (let Ke = 0; Ke < ie[5]; Ke++) Me.push([ee[ye + Ke], He[be + Ke]]);
              return {
                zp: Me,
                instances: 1
              }
            }
            default:
              return {
                zp: [], instances: 0
              }
          }
        }(ie, He),
        Je = "inst" === Me.terrain ? Fe : Ue.reduce(((ee, ie) => {
          let [, He] = ie;
          return ee + He
        }), 0) / 6;
      if (zi[Ke].draws++, zi[Ke].faces += Je, null === Me.terrain) return;
      if (Ve.context = ee, !Me.firstDraw) {
        Me.firstDraw = !0, Di(ee, be, Me), Ai || (Ai = !0, ue(function(ee) {
          var ie;
          const He = ee.getParameter(Te.DEPTH_FUNC),
            ye = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let be = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in ee && ee.getParameter(Te.DRAW_FRAMEBUFFER_BINDING)) {
            const ie = ee;
            be = ie.getFramebufferAttachmentParameter(Te.DRAW_FRAMEBUFFER, Te.DEPTH_ATTACHMENT, Te.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(ie.getFramebufferAttachmentParameter(Te.DRAW_FRAMEBUFFER,Te.DEPTH_ATTACHMENT,Te.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(ie.getFramebufferAttachmentParameter(Te.DRAW_FRAMEBUFFER,Te.DEPTH_ATTACHMENT,Te.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const Me = ee.getParameter(Te.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(ie=ye[He])&&void 0!==ie?ie:`0x${He.toString(16)}`} clear ${Me}${516===He||518===He?" (reverse-Z)":""}, samples ${String(ee.getParameter(Te.SAMPLES))}, ${be}`
        }(ee)));
        const He = ee.getError();
        He !== Te.NO_ERROR && Xi.gl < Fi && (Xi.gl++, ue(`GL error 0x${He.toString(16)} after program ${De(Me)}'s first terrain draw (${ie})`))
      }
      const oe = Ve.pendingCheck;
      null !== oe && (oe.terrainDraws++, oe.draws.length < Ji && Se(ee, be, Me, ie, Ue, Fe))
    }
    let Ai = !1;
    const Yi = new WeakSet;
    var Vi = He(4896),
      ai = He(5160);
    const ci = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let xi = !1;
    const Li = new WeakSet,
      Ci = new WeakMap,
      vi = new WeakMap,
      ui = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let mi = 0,
      li = !1,
      Si = null,
      ni = {
        draws: 0,
        faces: 0
      };

    function ji(ee) {
      const ie = globalThis[ee];
      return null === ie || void 0 === ie ? void 0 : ie.prototype
    }

    function si(ee) {
      return ee && "function" === typeof ee[Symbol.iterator] ? [...ee].sort().join(" ") : ""
    }

    function Ii(ee, ie) {
      const He = null !== ee && void 0 !== ee ? ee : {},
        ye = null !== ie && void 0 !== ie ? ie : Object.keys(Object.getPrototypeOf(He)).concat(Object.keys(He));
      return [...new Set(ye)].filter((ee => "number" === typeof He[ee])).map((ee => `${ee} ${String(He[ee])}`)).join(", ")
    }

    function Ni(ee, ie) {
      var He;
      const ye = null !== (He = ie.vertex) && void 0 !== He ? He : {};
      if (ye.module && Li.has(ye.module)) {
        var be;
        const He = String(null !== (be = ye.entryPoint) && void 0 !== be ? be : "");
        if (He.startsWith("vs_packed") && Ci.set(ee, He), !li) {
          var Me, Ke, Ue, Fe, Je;
          li = !0;
          const ee = null !== (Me = ie.depthStencil) && void 0 !== Me ? Me : {},
            ye = null !== (Ke = ie.multisample) && void 0 !== Ke ? Ke : {},
            be = String(null !== (Ue = ee.depthCompare) && void 0 !== Ue ? Ue : "");
          ue(`WebGPU terrain pipeline ${He}: depth ${String(null!==(Fe=ee.format)&&void 0!==Fe?Fe:"none")} ${be}${be.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(Je=ye.count)&&void 0!==Je?Je:1)}`)
        }
      }
    }

    function Gi(ee) {
      Ri(ee, "setPipeline", (ee => function() {
        for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
        return vi.set(this, He[0]), oi(ee, this, He)
      }));
      for (const ie of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) Ri(ee, ie, (ee => function() {
        const He = vi.get(this),
          ye = He ? Ci.get(He) : void 0;
        for (var be = arguments.length, Me = new Array(be), Ke = 0; Ke < be; Ke++) Me[Ke] = arguments[Ke];
        return void 0 !== ye && ri(ie, ye, Me), oi(ee, this, Me)
      }))
    }

    function ri(ee, ie, He) {
      var ye;
      (ni.draws++, "draw" === ee || "drawIndexed" === ee) && (ni.faces += He[0] * (null !== (ye = He[1]) && void 0 !== ye ? ye : 1) / 6);
      if (null !== Si && Si.length < Ji) {
        const ye = ("draw" === ee ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === ee ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((ie, ye) => {
          const be = ee.endsWith("Indirect") ? He[1] : He[ye];
          return `${ie} ${String(null!==be&&void 0!==be?be:"instances"===ie?1:0)}`
        }));
        Si.push(`  ${ie} ${ee} ${ye.join(" ")}`)
      }
    }

    function Qi() {
      if (xi || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      xi = !0, Ri(ji("GPU"), "requestAdapter", (ee => function() {
        for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
        return oi(ee, this, He).then((ee => {
          var ie;
          ee ? function(ee) {
            var ie;
            const He = null !== (ie = ee.info) && void 0 !== ie ? ie : {};
            ue(`WebGPU adapter ${["vendor","architecture","device","description"].map((ee=>{var ie;return`${ee} "${String(null!==(ie=He[ee])&&void 0!==ie?ie:"")}"`})).join(" ")}${ee.isFallbackAdapter?" (fallback)":""}`), ue(`WebGPU adapter features ${si(ee.features)}`), ue(`WebGPU adapter limits ${Ii(ee.limits,ci)}`), me(`WebGPU adapter all limits ${Ii(ee.limits,null)}`)
          }(ee) : ue(`WebGPU requestAdapter(${JSON.stringify(null!==(ie=He[0])&&void 0!==ie?ie:{})}) gave none`);
          return ee
        }))
      })), Ri(ji("GPUAdapter"), "requestDevice", (ee => function() {
        for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
        return oi(ee, this, He).then((ee => (function(ee) {
          ue(`WebGPU device features ${si(ee.features)}`), ue(`WebGPU device limits ${Ii(ee.limits,ci)}`), ee.addEventListener("uncapturederror", (ee => {
            if (ui.uncaptured < Fi) {
              var ie, He, ye;
              ui.uncaptured++;
              const be = ee.error;
              ue(`WebGPU uncaptured ${null!==(ie=null===be||void 0===be||null===(He=be.constructor)||void 0===He?void 0:He.name)&&void 0!==ie?ie:"error"}: ${le(String(null!==(ye=null===be||void 0===be?void 0:be.message)&&void 0!==ye?ye:""),600)}`)
            }
          }));
          const ie = ee.lost;
          null === ie || void 0 === ie || ie.then((ee => {
            var ie;
            ue(`WebGPU device lost (${String(ee.reason)}): ${le(String(null!==(ie=ee.message)&&void 0!==ie?ie:""),600)}`)
          }))
        }(ee), ee)), (ee => {
          throw ue(`WebGPU requestDevice failed: ${String(ee)}`), ee
        }))
      }));
      const ee = ji("GPUDevice");
      Ri(ee, "createShaderModule", (ee => function() {
        for (var ie, He, ye = arguments.length, be = new Array(ye), Me = 0; Me < ye; Me++) be[Me] = arguments[Me];
        const Ke = oi(ee, this, be);
        return function(ee, ie) {
          const He = ie.includes("decodeQuad");
          He && Li.add(ee);
          const ye = ee.getCompilationInfo;
          null === ye || void 0 === ye || ye.call(ee).then((ee => {
            if (0 === ee.messages.length && !He) return;
            const ie = {};
            for (const He of ee.messages) {
              var ye;
              ie[String(He.type)] = (null !== (ye = ie[String(He.type)]) && void 0 !== ye ? ye : 0) + 1
            }
            const be = ee.messages.map((ee => `${String(ee.type)} ${String(ee.lineNum)}:${String(ee.linePos)} ${String(ee.message)}`)).join("\n");
            ui.compile < Fi && (ui.compile++, ue(`WebGPU ${He?"terrain ":""}shader module compiled: ${JSON.stringify(ie)}${be?` first: ${le(be.split("\n")[0],300)}`:""}`)), be && me(`WebGPU shader module messages:\n${le(be)}`)
          }))
        }(Ke, String(null !== (ie = (null !== (He = be[0]) && void 0 !== He ? He : {}).code) && void 0 !== ie ? ie : "")), Ke
      })), Ri(ee, "createRenderPipeline", (ee => function() {
        for (var ie, He = arguments.length, ye = new Array(He), be = 0; be < He; be++) ye[be] = arguments[be];
        const Me = oi(ee, this, ye);
        return Ni(Me, null !== (ie = ye[0]) && void 0 !== ie ? ie : {}), Me
      })), Ri(ee, "createRenderPipelineAsync", (ee => function() {
        for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
        return oi(ee, this, He).then((ee => {
          var ie;
          return Ni(ee, null !== (ie = He[0]) && void 0 !== ie ? ie : {}), ee
        }), (ee => {
          var ie;
          throw function(ee, ie) {
            var He, ye, be;
            if (ui.rejected >= Fi) return;
            ui.rejected++;
            const {
              reason: Me,
              message: Ke
            } = null !== ie && void 0 !== ie ? ie : {}, Ue = String(null !== (He = (null !== (ye = ee.vertex) && void 0 !== ye ? ye : {}).entryPoint) && void 0 !== He ? He : "");
            ue(`WebGPU pipeline "${String(null!==(be=ee.label)&&void 0!==be?be:"")}" ${Ue} rejected (${String(null!==Me&&void 0!==Me?Me:"no reason")}): ${le(String(null!==Ke&&void 0!==Ke?Ke:ie),600)}`)
          }(null !== (ie = He[0]) && void 0 !== ie ? ie : {}, ee), ee
        }))
      })), Ri(ji("GPUCanvasContext"), "configure", (ee => function() {
        for (var ie, He = arguments.length, ye = new Array(He), be = 0; be < He; be++) ye[be] = arguments[be];
        const Me = null !== (ie = ye[0]) && void 0 !== ie ? ie : {};
        var Ke, Ue;
        mi++ < 3 && ue(`WebGPU canvas ${String(Me.format)} ${String(null!==(Ke=Me.colorSpace)&&void 0!==Ke?Ke:"srgb")} alpha ${String(null!==(Ue=Me.alphaMode)&&void 0!==Ue?Ue:"opaque")}`);
        return oi(ee, this, ye)
      })), Gi(ji("GPURenderPassEncoder")), Gi(ji("GPURenderBundleEncoder"))
    }
    const eH = 1e4,
      iH = 6e4,
      HH = 5e3,
      yH = 3e3,
      bH = 100;
    let MH = null,
      KH = !1,
      UH = {
        ...Vi.b
      },
      FH = !1,
      JH = null,
      oH = 0,
      RH = () => {};
    const kH = new Promise((ee => {
      RH = ee
    }));

    function qH() {
      var ee;
      KH || (KH = !0, UH = Object.assign(window.bloxdRenderDebug ??= {
        ...Vi.b
      }, {
        faceCull: "0" === (0, Me.n)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (ee = (0, Me.n)("adrenoProbe")) && void 0 !== ee ? ee : ""
      }), ue("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), ki || "undefined" === typeof window || (ki = !0, "undefined" !== typeof WebGL2RenderingContext && ti(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && ti(WebGLRenderingContext.prototype, !1)), Qi(), (0, Me.c)("renderProbe", (() => {
        BH("console")
      })), XH(), setInterval(gH, HH))
    }

    function fH(ee) {
      var ie, He;
      qH(), MH = null !== (ie = null === ee || void 0 === ee ? void 0 : ee.backend) && void 0 !== ie ? ie : null;
      const ye = `, renderer param ${null!==(He=(0,Me.n)("renderer"))&&void 0!==He?He:"none"}, faceCull ${"0"===UH.faceCull?"off (whole parts)":"on"}, adrenoProbe ${UH.adrenoProbe||"none"}`;
      ue(`${(0,ai.e)(ee)}${null===ee?"":ye}`)
    }

    function TH() {
      const ee = performance.now(),
        ie = pH(kH, eH, iH).then((ie => BH(`${Math.round((performance.now()-ee)/1e3)} s after playable${ie?"":", no terrain drawn yet"}`)));
      (0, be.e)(ue, (async () => {
        await ie, await JH
      }))
    }
    async function pH(ee, ie, He) {
      const be = (0, ye.e)(He).then((() => !1));
      return await (0, ye.e)(ie), Promise.race([ee.then((() => !0)), be])
    }

    function XH() {
      requestAnimationFrame((() => {
        oH++, XH()
      }))
    }

    function zH() {
      var ee, ie, He;
      if (FH) return;
      (FH = !0, ue(`renderer caps ${null!==(ee=UH.caps)&&void 0!==ee?ee:"(not noted)"}; terrain fetch ${null!==(ie=UH.fetch)&&void 0!==ie?ie:"(not noted)"}`), UH.adrenoProbe) && ue(`adrenoProbe ${UH.adrenoProbe} asked; in force (storage fetch only): ${null!==(He=UH.probe)&&void 0!==He?He:"(not noted)"}`);
      const ye = Ve.context;
      if (ye) {
        for (const ee of function(ee) {
            var ie;
            const He = [],
              ye = ee.getExtension("WEBGL_debug_renderer_info"),
              be = ye ? ee.getParameter(ye.UNMASKED_VENDOR_WEBGL) : "(masked)",
              Me = ye ? ee.getParameter(ye.UNMASKED_RENDERER_WEBGL) : "(masked)";
            He.push(`GL ${String(ee.getParameter(ee.VERSION))} | ${String(ee.getParameter(ee.SHADING_LANGUAGE_VERSION))} | ${String(ee.getParameter(ee.VENDOR))} / ${String(ee.getParameter(ee.RENDERER))}`), He.push(`GL unmasked ${be} / ${Me}`);
            const Ke = [
              ["MAX_TEXTURE_SIZE", ee.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", ee.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", ee.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", ee.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", ee.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", ee.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", ee.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in ee && Ke.push(["MAX_UNIFORM_BLOCK_SIZE", ee.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", ee.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", ee.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", ee.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), He.push(`GL limits ${Ke.map((ie=>{let[He,ye]=ie;return`${He} ${String(ee.getParameter(ye))}`})).join(", ")}`);
            const Ue = (ie, He) => {
              const ye = ee.getShaderPrecisionFormat(ie, ee.HIGH_FLOAT),
                be = ee.getShaderPrecisionFormat(ie, ee.HIGH_INT);
              return `${He} highp float ${ye?`${ye.rangeMin}/${ye.rangeMax}/${ye.precision}`:"?"} int ${be?`${be.rangeMin}/${be.rangeMax}/${be.precision}`:"?"}`
            };
            He.push(`GL precision ${Ue(ee.VERTEX_SHADER,"VS")}, ${Ue(ee.FRAGMENT_SHADER,"FS")}`);
            const Fe = ee.getContextAttributes();
            return He.push(`GL context ${JSON.stringify(Fe)} drawingBuffer ${ee.drawingBufferWidth}x${ee.drawingBufferHeight}${"drawingBufferFormat"in ee?` format 0x${Number(ee.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in ee?` ${String(ee.drawingBufferColorSpace)}`:""}`), He.push(`GL extensions ${(null!==(ie=ee.getSupportedExtensions())&&void 0!==ie?ie:[]).join(" ")}`), He
          }(ye)) ue(ee);
        ! function() {
          if (!Ve.context) return;
          let ee = 0,
            ie = 0;
          for (const [He, ye] of Pe) !ye.gl.isContextLost() && ye.gl.isProgram(He) && (ie++, Di(ye.gl, He, ye), null !== ye.terrain && ee++);
          ue(`programs: ${ie} live of ${Pe.length} linked, ${ee} packed terrain; CPU page copies ${Math.round(Ve.shadowBytes/1048576)} MiB (${Ve.uncopied} over budget)`)
        }()
      }
    }

    function BH(ee) {
      return JH ??= async function(ee) {
        zH(), "webgpu" === MH ? (EH(), "1" === UH.slotCheck && ue("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), UH.slotCheck = "1", await
          function(ee) {
            if (null !== Si) return Promise.resolve();
            const ie = [];
            return Si = ie, new Promise((He => {
              setTimeout((() => {
                Si = null, ue(`WebGPU draw ranges (${ee}): ${ie.length} terrain draws recorded in a second (first ${Ji}; bundles replay without new ones)`);
                for (const ee of ie) ue(ee);
                He()
              }), 1e3)
            }))
          }(ee), await async function() {
            if (await (0, Vi.f)(UH, "slotCheck", ["1"], yH, bH), "1" === UH.slotCheck) return void ue(`slot check: no answer in ${yH} ms (only the storage fetch has one; a later answer logs on its own)`);
            EH()
          }()) : await Ki(ee);
        ue(`check (${ee}) done: bloxdDebug.save() downloads it all`)
      }(ee).catch((ie => {
        ue(`check (${ee}) failed: ${String(ie)}`)
      })).finally((() => {
        JH = null
      })), JH
    }

    function EH() {
      void 0 !== UH.slotCheck && "1" !== UH.slotCheck && (ue(UH.slotCheck), delete UH.slotCheck)
    }

    function gH() {
      const ee = ee => oH ? (ee / oH).toFixed(1) : "0",
        ie = function() {
          const ee = ni;
          return ni = {
            draws: 0,
            faces: 0
          }, ee
        }(),
        He = function() {
          const ee = zi;
          return zi = {
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
          }, ee
        }(),
        ye = function() {
          const ee = Bi;
          return Bi = {
            buffer: 0,
            texture: 0
          }, ee
        }();
      EH(), ("webgpu" === MH ? ie.draws : He.inst.draws + He.tex.draws) > 0 && RH();
      const be = "webgpu" === MH ? [`terrain ${ee(ie.draws)} draws ${ee(ie.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((ee => He[ee].draws > 0)).map((ie => `${ie} ${ee(He[ie].draws)} draws ${ee(He[ie].faces)} faces a frame`));
      ue(`${oH} frames: ${be.join(", ")||"no draws"}; uploaded ${Math.round(ye.buffer/1024)} KiB to buffers, ${Math.round(ye.texture/1024)} KiB to data textures`), oH = 0
    }
  },
  5160: (ee, ie, He) => {
    function ye(ee) {
      if (null === ee) return "backend: none picked (no renderer build)";
      const ie = ee.adapter ? `${ee.adapter.vendor}/${ee.adapter.architecture}` : "none";
      return `backend ${ee.backend}: reason ${ee.reason}, source ${ee.source}, adapter ${ie}`
    }
    He.d(ie, {
      e: () => ye
    })
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);