export const id = 47;
export const ids = [47];
export const modules = {
  4492: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => SD
    });
    var ID = cD(16),
      pD = cD(20),
      iD = cD(1284),
      fD = cD(2727);
    const bD = 3e4,
      QD = 1e3;

    function wD() {
      return "visible" === document.visibilityState && "inGame" === ID.d.get("gameState") && (0, iD.r)()
    }

    function SD(DD, CD) {
      (0, fD.q)() || function(DD, CD, cD) {
        let ID = 0;
        const pD = setInterval((() => {
          CD() && (ID += QD, ID >= DD && (clearInterval(pD), cD()))
        }), QD)
      }(bD, wD, (() => {
        CD().then((() => {
          DD(`saved for the player after ${bD/1e3} s of play`), (0, fD.w)(), pD.i.Uo("chat", {
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
  4483: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      installRenderDebug: () => Bc,
      renderDebugPlayable: () => Mc,
      startRenderDebug: () => yc,
      waitForDraw: () => tc
    });
    var ID = cD(1793),
      pD = cD(4492),
      iD = cD(2727);
    const fD = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function bD(DD) {
      return 7 & DD
    }

    function QD(DD) {
      return DD >>> 11 & 1
    }

    function wD(DD) {
      return [1 + (DD >>> 18 & 63), 1 + (DD >>> 24 & 63)]
    }

    function SD(DD, CD) {
      const [cD, , ID] = DD, pD = bD(ID), iD = function(DD, CD, cD) {
        return CD + (1 === (22 >>> DD & 1) ? 4 - cD : cD) & 3
      }(pD, QD(ID), CD), fD = pD >>> 1, [SD, BD] = wD(cD), yD = 1 === iD || 2 === iD ? SD : 0, MD = iD >= 2 ? BD : 0, tD = [63 & cD, cD >>> 6 & 63, cD >>> 12 & 63];
      return tD[2 === fD ? 0 : 2] += yD, tD[1 === fD ? 0 : 1] += MD, tD
    }

    function BD(DD) {
      const CD = Math.max(...wD(DD[0]));
      return 1 === CD ? "1" : CD <= 4 ? "2-4" : CD <= 16 ? "5-16" : "17-64"
    }
    const yD = 16;

    function MD(DD) {
      let CD = 2166136261;
      for (let cD = 0; cD < DD.length; cD++) CD = Math.imul(CD ^ DD[cD], 16777619);
      return CD >>> 0
    }

    function tD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const ID = Math.max(0, CD - cD),
        pD = Math.min(DD.length, CD + cD),
        iD = [];
      for (let fD = ID; fD < pD; fD++) {
        const cD = DD[fD].toString(16).padStart(2, "0");
        iD.push(fD === CD ? `[${cD}]` : cD)
      }
      return iD.join(" ")
    }
    const ZD = {
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
      oD = "_vs2fs_location0",
      vD = 0,
      ND = 4,
      gD = 6,
      XD = [0, 1, 2, 0, 2, 3],
      mD = 2048,
      nD = 4,
      OD = 256,
      PD = 64,
      HD = 268435456,
      UD = 65536,
      xD = /^#version [^\n]*\/\/ program (\S+)$/m;

    function qD(DD) {
      return null === DD.name ? `#${DD.id}` : `#${DD.id} ${DD.name}`
    }
    const JD = [],
      KD = new WeakMap,
      aD = new WeakMap,
      VD = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let zD = 1;
    const jD = new WeakMap;

    function lD(DD) {
      if (null === DD) return 0;
      let CD = jD.get(DD);
      return void 0 === CD && (CD = zD++, jD.set(DD, CD)), CD
    }
    class LD {
      constructor(DD, CD) {
        this.print = DD, this.now = CD, this.shown = 0, this.Lb = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.uM = [], this.dropped = 0
      }
      line(DD) {
        const CD = this.now();
        if (CD - this.second >= 1e3 && (this.second = CD, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.Lb++, void this.store(DD);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${DD} (the last line here: the rest go to bloxdDebug.save())` : DD)
      }
      keep(DD) {
        this.sections++, this.store(DD)
      }
      store(DD) {
        this.uM.push(`${new Date(Date.now()).toISOString()} ${DD}`), this.uM.length > 2e4 && (this.uM.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.Lb} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.uM].join("\n")
      }
    }
    let TD = null;

    function GD() {
      if (null === TD) {
        const DD = new LD((DD => {
          (0, iD.j)("render", DD)
        }), (() => performance.now()));
        (0, iD.h)("render", (() => DD.dump())), TD = DD
      }
      return TD
    }

    function RD(DD) {
      GD().line(DD)
    }

    function kD(DD) {
      GD().keep(DD)
    }

    function dD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return DD.length <= CD ? DD : `${DD.slice(0,CD)}... (${DD.length-CD} more characters)`
    }

    function YD(DD, CD, cD, ID, pD, iD) {
      const fD = VD.pendingCheck;
      if (null === fD) return;
      const bD = "undefined" !== typeof WebGL2RenderingContext && DD instanceof WebGL2RenderingContext,
        QD = {
          gl: DD,
          program: cD,
          call: ID,
          df: pD,
          instances: iD,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (fD.draws.push(QD), bD) try {
        const ID = function(DD) {
          const CD = [],
            cD = new Map,
            ID = Math.min(16, DD.getParameter(ZD.MAX_VERTEX_ATTRIBS));
          for (let pD = 0; pD < ID; pD++) {
            if (!DD.getVertexAttrib(pD, ZD.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const ID = DD.getVertexAttrib(pD, ZD.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              iD = DD.getVertexAttribOffset(pD, ZD.VERTEX_ATTRIB_ARRAY_POINTER),
              fD = DD.getVertexAttrib(pD, ZD.VERTEX_ATTRIB_ARRAY_STRIDE),
              bD = DD.getVertexAttrib(pD, ZD.VERTEX_ATTRIB_ARRAY_SIZE),
              QD = DD.getVertexAttrib(pD, ZD.VERTEX_ATTRIB_ARRAY_TYPE),
              wD = "VERTEX_ATTRIB_ARRAY_INTEGER" in DD && DD.getVertexAttrib(pD, ZD.VERTEX_ATTRIB_ARRAY_INTEGER),
              SD = "VERTEX_ATTRIB_ARRAY_DIVISOR" in DD ? DD.getVertexAttrib(pD, ZD.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            cD.set(pD, {
              buffer: ID,
              offset: iD,
              stride: fD
            }), CD.push(`@${pD} buf#${lD(ID)} +${iD} stride ${fD} ${bD}x0x${QD.toString(16)}${wD?" int":""} div ${SD}`)
          }
          return {
            lines: CD,
            byLocation: cD
          }
        }(DD);
        if (QD.attributes = ID.lines, "inst" === cD.terrain) {
          const {
            group: pD,
            chunk: bD
          } = function(DD, CD, cD) {
            const ID = CD.get(gD),
              pD = DD.getVertexAttrib(gD, ZD.CURRENT_VERTEX_ATTRIB),
              iD = ID ? `+${ID.offset}` : pD ? Array.from(pD).slice(0, 3).join(",") : "?";
            let fD = cD.groups.get(iD);
            return void 0 === fD && (fD = cD.groups.size, cD.groups.set(iD, fD)), {
              group: fD,
              chunk: iD
            }
          }(DD, ID.byLocation, fD);
          QD.group = pD, QD.chunk = bD;
          for (const DD of [vD, ND]) {
            var wD;
            const CD = null === (wD = ID.byLocation.get(DD)) || void 0 === wD ? void 0 : wD.buffer;
            CD && QD.pages.push({
              kind: "buf",
              buffer: CD
            })
          }! function(DD, CD, cD, ID, pD, iD, fD) {
            const bD = ID.get(vD),
              QD = fD.parts.get(iD);
            if (void 0 === QD && fD.parts.size >= nD) return;
            const wD = Math.min(pD, PD, OD - (null !== QD && void 0 !== QD ? QD : 0));
            if (null === bD || void 0 === bD || !bD.buffer || wD <= 0) return;
            const SD = WD(DD, CD, cD);
            if (!SD) return;
            const BD = bD.stride || 12,
              yD = hD(DD, bD.buffer, bD.offset, (wD - 1) * BD + 12),
              MD = new DataView(yD.buffer),
              tD = function(DD, CD) {
                const cD = function(DD) {
                    const CD = FD.get(DD);
                    if (void 0 !== CD && (null === CD || DD.isProgram(CD))) return CD;
                    VD.inProbe = !0;
                    let cD = null;
                    try {
                      cD = sD(DD, rD, AD, "fed", "the record feed")
                    } finally {
                      VD.inProbe = !1
                    }
                    return FD.set(DD, cD), cD
                  }(DD),
                  ID = cD ? uD(DD, cD, CD, (() => {
                    DD.drawArraysInstanced(ZD.POINTS, 0, 1, CD)
                  }), "decode probe input (the record feed)") : null;
                return ID ? new Uint32Array(ID.buffer) : null
              }(DD, wD);
            tD || fD.fed.failed++;
            const oD = uD(DD, SD, 4 * wD, (() => {
              DD.drawArraysInstanced(ZD.POINTS, 0, 4, wD)
            }));
            if (!oD) return;
            fD.parts.set(iD, (null !== QD && void 0 !== QD ? QD : 0) + wD);
            for (let ZD = 0; ZD < wD; ZD++) {
              const DD = ZD * BD,
                CD = [MD.getUint32(DD, !0), MD.getUint32(DD + 4, !0), MD.getUint32(DD + 8, !0)],
                cD = tD ? [tD[3 * ZD], tD[3 * ZD + 1], tD[3 * ZD + 2]] : CD;
              tD && (fD.fed.records++, cD.some(((DD, cD) => DD !== CD[cD])) && (fD.fed.differing++, fD.fed.first.length < 8 && fD.fed.first.push(`part ${iD} instance ${ZD}: fed ${cD.map(pC).join(" ")} buffer ${CD.map(pC).join(" ")}`)));
              for (let ID = 0; ID < 4; ID++) {
                const DD = 3 * (4 * ZD + ID);
                fD.vertices.push({
                  record: cD,
                  slot: ID,
                  group: iD,
                  gpu: [oD[DD], oD[DD + 1], oD[DD + 2]]
                })
              }
            }
          }(DD, CD, cD, ID.byLocation, iD, pD, fD)
        } else {
          const ID = DC(DD, CD, 16),
            iD = DC(DD, CD, 8);
          for (const DD of [ID, iD]) DD && QD.pages.push({
            kind: "tex",
            texture: DD
          });
          ID && function(DD, CD, cD, ID, pD, iD) {
            if (iD.parts.size >= nD) return;
            const fD = WD(DD, CD, cD);
            if (!fD) return;
            let bD = 6 * OD;
            const QD = [];
            for (const [MD, tD] of pD) {
              const DD = Math.min(tD, bD, Math.max(6, 6 * Math.floor(OD / pD.length)));
              DD > 0 && (QD.push([MD, DD]), bD -= DD)
            }
            const wD = QD.reduce(((DD, CD) => {
                let [, cD] = CD;
                return DD + cD
              }), 0),
              SD = uD(DD, fD, wD, (() => {
                for (const [CD, cD] of QD) DD.drawArrays(ZD.POINTS, CD, cD)
              }));
            if (!SD) return;
            let BD = 0;
            for (const [MD, tD] of QD) {
              const CD = Math.floor(MD / 6),
                cD = Math.floor((MD + tD - 1) / 6) - CD + 1,
                pD = CC(DD, ID, mD, CD, cD);
              for (let DD = MD; DD < MD + tD; DD++, BD++) {
                var yD;
                const cD = 4 * (Math.floor(DD / 6) - CD),
                  ID = [pD[cD], pD[cD + 1], pD[cD + 2]];
                iD.parts.set(pD[cD + 3], (null !== (yD = iD.parts.get(pD[cD + 3])) && void 0 !== yD ? yD : 0) + (DD % 6 === 0 ? 1 : 0)), iD.vertices.push({
                  record: ID,
                  slot: XD[DD % 6],
                  group: pD[cD + 3],
                  gpu: [SD[3 * BD], SD[3 * BD + 1], SD[3 * BD + 2]]
                })
              }
            }
          }(DD, CD, cD, ID, pD, fD)
        }
      } catch (SD) {
        RD(`decode probe failed on program ${qD(cD)}: ${String(SD)}`)
      }
    }

    function WD(DD, CD, cD) {
      if (void 0 !== cD.probe) return cD.probe && ED(DD, CD, cD.probe), cD.probe;
      cD.probe = null, VD.inProbe = !0;
      try {
        cD.probe = function(DD, CD) {
          return sD(DD, CD.vertex, CD.fragment, oD, `program ${qD(CD)}'s twin`)
        }(DD, cD)
      } finally {
        VD.inProbe = !1
      }
      return cD.probe && ED(DD, CD, cD.probe), cD.probe
    }

    function sD(DD, CD, cD, ID, pD) {
      const iD = [DD.createShader(ZD.VERTEX_SHADER), DD.createShader(ZD.FRAGMENT_SHADER)],
        fD = DD.createProgram();
      if (!fD || !iD[0] || !iD[1]) return null;
      DD.shaderSource(iD[0], CD), DD.shaderSource(iD[1], cD);
      for (const QD of iD) DD.compileShader(QD), DD.attachShader(fD, QD);
      DD.transformFeedbackVaryings(fD, [ID], ZD.INTERLEAVED_ATTRIBS), DD.linkProgram(fD);
      for (const QD of iD) DD.deleteShader(QD);
      var bD;
      return DD.getProgramParameter(fD, ZD.LINK_STATUS) ? fD : (RD(`decode probe: ${pD} failed to link: ${dD(null!==(bD=DD.getProgramInfoLog(fD))&&void 0!==bD?bD:"",300)}`), DD.deleteProgram(fD), null)
    }

    function ED(DD, CD, cD) {
      const ID = DD.getProgramParameter(CD, ZD.ACTIVE_UNIFORM_BLOCKS);
      for (let bD = 0; bD < ID; bD++) {
        const ID = DD.getActiveUniformBlockName(CD, bD),
          pD = null === ID ? ZD.INVALID_INDEX : DD.getUniformBlockIndex(cD, ID);
        pD !== ZD.INVALID_INDEX && DD.uniformBlockBinding(cD, pD, DD.getActiveUniformBlockParameter(CD, bD, ZD.UNIFORM_BLOCK_BINDING))
      }
      const pD = DD.getParameter(ZD.CURRENT_PROGRAM);
      DD.useProgram(cD);
      const iD = DD.getProgramParameter(CD, ZD.ACTIVE_UNIFORMS),
        fD = DD.getActiveUniforms(CD, [...Array(iD).keys()], ZD.UNIFORM_BLOCK_INDEX);
      for (let bD = 0; bD < iD; bD++) {
        const ID = DD.getActiveUniform(CD, bD);
        if (!ID || -1 !== fD[bD]) continue;
        const pD = ID.name.replace(/\[0\]$/, "");
        for (let iD = 0; iD < ID.size; iD++) {
          const fD = ID.size > 1 ? `${pD}[${iD}]` : ID.name,
            bD = DD.getUniformLocation(CD, fD),
            QD = DD.getUniformLocation(cD, fD);
          bD && QD && eD(DD, QD, ID.type, DD.getUniform(CD, bD))
        }
      }
      DD.useProgram(pD)
    }

    function eD(DD, CD, cD, ID) {
      const pD = ArrayBuffer.isView(ID) ? Array.from(ID) : [Number(ID)];
      switch (cD) {
        case ZD.FLOAT:
          return void DD.uniform1f(CD, pD[0]);
        case ZD.FLOAT_VEC2:
          return void DD.uniform2fv(CD, pD);
        case ZD.FLOAT_VEC3:
          return void DD.uniform3fv(CD, pD);
        case ZD.FLOAT_VEC4:
          return void DD.uniform4fv(CD, pD);
        case ZD.FLOAT_MAT3:
          return void DD.uniformMatrix3fv(CD, !1, pD);
        case ZD.FLOAT_MAT4:
          return void DD.uniformMatrix4fv(CD, !1, pD);
        case ZD.UNSIGNED_INT:
          return void DD.uniform1ui(CD, pD[0]);
        case ZD.UNSIGNED_INT_VEC2:
          return void DD.uniform2uiv(CD, pD);
        case ZD.UNSIGNED_INT_VEC3:
          return void DD.uniform3uiv(CD, pD);
        case ZD.UNSIGNED_INT_VEC4:
          return void DD.uniform4uiv(CD, pD);
        case ZD.INT_VEC2:
          return void DD.uniform2iv(CD, pD);
        case ZD.INT_VEC3:
          return void DD.uniform3iv(CD, pD);
        case ZD.INT_VEC4:
          return void DD.uniform4iv(CD, pD);
        default:
          DD.uniform1i(CD, pD[0])
      }
    }

    function uD(DD, CD, cD, ID) {
      let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const iD = DD.getParameter(ZD.CURRENT_PROGRAM),
        fD = DD.getParameter(ZD.TRANSFORM_FEEDBACK_BINDING),
        bD = DD.getParameter(ZD.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        QD = DD.getParameter(ZD.COPY_READ_BUFFER_BINDING),
        wD = DD.isEnabled(ZD.RASTERIZER_DISCARD),
        SD = DD.createTransformFeedback(),
        BD = DD.createBuffer();
      VD.inProbe = !0;
      try {
        const iD = DD.getError();
        iD !== ZD.NO_ERROR && RD(`GL error 0x${iD.toString(16)} pending before the decode probe (the renderer's)`), DD.useProgram(CD), DD.bindTransformFeedback(ZD.TRANSFORM_FEEDBACK, SD), DD.bindBuffer(ZD.TRANSFORM_FEEDBACK_BUFFER, BD), DD.bufferData(ZD.TRANSFORM_FEEDBACK_BUFFER, 12 * cD, ZD.STREAM_READ), DD.bindBufferBase(ZD.TRANSFORM_FEEDBACK_BUFFER, 0, BD), DD.enable(ZD.RASTERIZER_DISCARD), DD.beginTransformFeedback(ZD.POINTS), ID(), DD.endTransformFeedback(), DD.bindBufferBase(ZD.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const fD = DD.getError();
        if (fD !== ZD.NO_ERROR) return RD(`${pD}: GL error 0x${fD.toString(16)} on the feedback draw`), null;
        const bD = new Float32Array(3 * cD);
        return DD.bindBuffer(ZD.COPY_READ_BUFFER, BD), DD.getBufferSubData(ZD.COPY_READ_BUFFER, 0, bD), bD
      } finally {
        wD || DD.disable(ZD.RASTERIZER_DISCARD), DD.bindTransformFeedback(ZD.TRANSFORM_FEEDBACK, fD), DD.bindBuffer(ZD.TRANSFORM_FEEDBACK_BUFFER, bD), DD.bindBuffer(ZD.COPY_READ_BUFFER, QD), DD.deleteTransformFeedback(SD), DD.deleteBuffer(BD), DD.useProgram(iD), VD.inProbe = !1
      }
    }

    function hD(DD, CD, cD, ID) {
      const pD = DD.getParameter(ZD.COPY_READ_BUFFER_BINDING),
        iD = new Uint8Array(ID);
      return DD.bindBuffer(ZD.COPY_READ_BUFFER, CD), DD.getBufferSubData(ZD.COPY_READ_BUFFER, cD, iD), DD.bindBuffer(ZD.COPY_READ_BUFFER, pD), iD
    }
    const rD = `#version 300 es\nlayout(location = ${vD}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      AD = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      FD = new WeakMap;

    function DC(DD, CD, cD) {
      const ID = DD.getProgramParameter(CD, ZD.ACTIVE_UNIFORMS),
        pD = DD.getParameter(ZD.ACTIVE_TEXTURE);
      try {
        for (let pD = 0; pD < ID; pD++) {
          const ID = DD.getActiveUniform(CD, pD);
          if ((null === ID || void 0 === ID ? void 0 : ID.type) !== ZD.UNSIGNED_INT_SAMPLER_2D) continue;
          const iD = DD.getUniformLocation(CD, ID.name),
            fD = iD ? DD.getUniform(CD, iD) : -1;
          if (fD < 0) continue;
          DD.activeTexture(ZD.TEXTURE0 + fD);
          const bD = DD.getParameter(ZD.TEXTURE_BINDING_2D);
          if (bD && aD.get(bD) === cD) return bD
        }
        return null
      } finally {
        DD.activeTexture(pD)
      }
    }

    function CC(DD, CD, cD, ID, pD) {
      const iD = new Uint32Array(4 * pD),
        fD = DD.getParameter(ZD.READ_FRAMEBUFFER_BINDING),
        bD = DD.createFramebuffer();
      DD.bindFramebuffer(ZD.READ_FRAMEBUFFER, bD), DD.framebufferTexture2D(ZD.READ_FRAMEBUFFER, ZD.COLOR_ATTACHMENT0, ZD.TEXTURE_2D, CD, 0);
      try {
        let CD = 0;
        for (; CD < pD;) {
          const fD = ID + CD,
            bD = fD % cD,
            QD = Math.min(pD - CD, cD - bD);
          DD.readPixels(bD, Math.floor(fD / cD), QD, 1, ZD.RGBA_INTEGER, ZD.UNSIGNED_INT, iD.subarray(4 * CD, 4 * (CD + QD))), CD += QD
        }
      } finally {
        DD.bindFramebuffer(ZD.READ_FRAMEBUFFER, fD), DD.deleteFramebuffer(bD)
      }
      return iD
    }

    function cC(DD, CD, cD) {
      let ID = 0,
        pD = 0;
      for (let QD = 0; QD < CD.bytes.length; QD += UD) {
        ID++;
        const DD = Math.min(QD + UD, CD.bytes.length);
        MD(CD.bytes.subarray(QD, DD)) !== MD(cD.subarray(QD, DD)) && pD++
      }
      const iD = `${DD} ${CD.bytes.length} B cpu ${MD(CD.bytes).toString(16)} gpu ${MD(cD).toString(16)}, ${pD}/${ID} blocks differ${CD.missed?`, ${CD.missed} GPU-side writes uncopied`:""}`;
      if (0 === pD) return iD;
      const {
        count: fD,
        offsets: bD
      } = function(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const ID = Math.min(DD.length, CD.length);
        let pD = Math.abs(DD.length - CD.length);
        const iD = [];
        for (let fD = 0; fD < ID; fD++) DD[fD] !== CD[fD] && (pD++, iD.length < cD && iD.push(fD));
        return {
          count: pD,
          offsets: iD
        }
      }(CD.bytes, cD);
      return kD([`${iD}: ${fD} bytes differ`, ...bD.map((DD => `  +${DD}: cpu ${tD(CD.bytes,DD)} | gpu ${tD(cD,DD)}`))].join("\n")), `${iD}: ${fD} bytes differ, first at ${bD.join(", ")} (context in the saved file)`
    }

    function IC(DD) {
      if (0 === DD.vertices.length) return void RD(`decode probe (${DD.reason}): no terrain draw probed (${DD.draws.length} seen)`);
      const CD = function(DD) {
          const CD = new Map;
          for (const ID of DD) {
            const DD = CD.get(ID.group);
            DD ? DD.push(ID) : CD.set(ID.group, [ID])
          }
          const cD = {
            vertices: DD.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [ID, pD] of CD) {
            const DD = new Map,
              CD = pD.map((CD => {
                const cD = SD(CD.record, CD.slot),
                  ID = [CD.gpu[0] - cD[0], CD.gpu[1] - cD[1], CD.gpu[2] - cD[2]],
                  pD = ID.map((DD => Math.round(64 * DD))).join(","),
                  iD = DD.get(pD);
                return iD ? iD.count++ : DD.set(pD, {
                  count: 1,
                  offset: ID
                }), cD
              }));
            let iD = [0, 0, 0],
              fD = 0;
            for (const cD of DD.values()) cD.count > fD && (fD = cD.count, iD = cD.offset);
            cD.translations.set(ID, iD), pD.forEach(((DD, ID) => {
              var pD;
              const fD = [CD[ID][0] + iD[0], CD[ID][1] + iD[1], CD[ID][2] + iD[2]];
              if (fD.every(((CD, cD) => {
                  return ID = DD.gpu[cD], pD = CD, Math.abs(ID - pD) <= Math.max(.001, 1e-6 * Math.abs(pD));
                  var ID, pD
                }))) return;
              cD.mismatches++, cD.byDirection[bD(DD.record[2])]++, cD.byDiagonal[QD(DD.record[2])]++;
              const wD = BD(DD.record);
              cD.byBand[wD] = (null !== (pD = cD.byBand[wD]) && void 0 !== pD ? pD : 0) + 1, cD.first.length < yD && cD.first.push({
                ...DD,
                expected: fD
              })
            }))
          }
          return cD
        }(DD.vertices),
        cD = CD.byDirection.map(((DD, CD) => DD ? `${fD[CD]} ${DD}` : "")).filter(Boolean).join(" "),
        ID = Object.entries(CD.byBand).map((DD => {
          let [CD, cD] = DD;
          return `${CD}: ${cD}`
        })).join(" ");
      if (RD(`decode probe (${DD.reason}): ${CD.mismatches}/${CD.vertices} vertices differ from the CPU decode over ${DD.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (CD.mismatches ? ` by direction [${cD}] diagonal [0: ${CD.byDiagonal[0]} 1: ${CD.byDiagonal[1]}] extent [${ID}]` : "")), DD.fed.records > 0 || DD.fed.failed > 0) {
        RD(`decode probe input: ${DD.fed.differing}/${DD.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (DD.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (DD.fed.failed ? `; the feed failed on ${DD.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const CD of DD.fed.first) RD(`  ${CD}`)
      }
      for (const pD of CD.first) {
        const [DD, CD, cD] = pD.record;
        RD(`  mismatch part ${pD.group} r0 ${DD.toString(16)} r1 ${CD.toString(16)} r2 ${cD.toString(16)} slot ${pD.slot} (${fD[bD(cD)]}): expected ${pD.expected.map(iC).join(",")} gpu ${pD.gpu.map(iC).join(",")}`)
      }
      kD(`decode probe translations: ${[...CD.translations].map((DD=>{let[CD,cD]=DD;return`${CD}: ${cD.map(iC).join(",")}`})).join("; ")}`)
    }

    function pC(DD) {
      return DD.toString(16)
    }

    function iC(DD) {
      return Number.isInteger(DD) ? String(DD) : DD.toFixed(3)
    }

    function fC(DD) {
      return null !== VD.pendingCheck ? Promise.resolve() : new Promise((CD => {
        let cD = !1;
        const ID = {
          reason: DD,
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
        VD.pendingCheck = ID;
        const pD = () => {
            VD.pendingCheck = null;
            try {
              ! function(DD) {
                RD(`draw ranges (${DD.reason}): ${DD.terrainDraws} terrain draws in the frame, the first ${DD.draws.length} here`);
                for (const CD of DD.draws) {
                  const DD = CD.df.slice(0, 8).map((DD => {
                      let [CD, cD] = DD;
                      return `${CD}+${cD}`
                    })).join(" "),
                    cD = CD.df.length > 8 ? ` (+${CD.df.length-8} ranges)` : "";
                  RD(`  ${qD(CD.program)} ${CD.program.terrain} ${CD.call} ${DD}${cD} x${CD.instances}${CD.group>=0?` part ${CD.group} chunk ${CD.chunk}`:""} | ${CD.attributes.join(" | ")}`)
                }
              }(ID), IC(ID);
              ID.draws.some((DD => "undefined" !== typeof WebGL2RenderingContext && DD.gl instanceof WebGL2RenderingContext)) || 0 === ID.draws.length ? function(DD) {
                const CD = [],
                  cD = new Map;
                for (const ID of DD)
                  if ("undefined" !== typeof WebGL2RenderingContext && ID.gl instanceof WebGL2RenderingContext)
                    for (const DD of ID.pages) cD.set("buf" === DD.kind ? DD.buffer : DD.texture, {
                      page: DD,
                      gl: ID.gl
                    });
                for (const [ID, {
                    page: pD,
                    gl: iD
                  }] of cD) {
                  const DD = KD.get(ID);
                  if (!DD) {
                    CD.push(`${pD.kind}#${lD(ID)}: no CPU copy (${VD.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === pD.kind) {
                    CD.push(cC(`buf#${DD.id}`, DD, hD(iD, pD.buffer, 0, DD.bytes.length)));
                    continue
                  }
                  const cD = CC(iD, pD.texture, DD.width, 0, DD.width * DD.height),
                    fD = 16 === DD.texelBytes ? new Uint8Array(cD.buffer) : new Uint8Array(new Uint16Array(cD).buffer);
                  CD.push(cC(`tex#${DD.id} (${16===DD.texelBytes?"records":"light"})`, DD, fD))
                }
                for (const ID of CD) RD(`page readback ${ID}`)
              }(ID.draws) : RD("page readback: none on WebGL1 (no buffer readback)")
            } catch (DD) {
              RD(`check failed: ${String(DD)}`)
            }
            CD()
          },
          iD = () => {
            if (ID.draws.length > 0 && !cD) return cD = !0, void setTimeout(pD, 0);
            cD || requestAnimationFrame(iD)
          };
        requestAnimationFrame(iD), setTimeout((() => {
          cD || (cD = !0, pD())
        }), 5e3)
      }))
    }
    var bC = cD(4495);
    const QC = 20,
      wC = 24,
      SC = Reflect.apply;

    function BC(DD, CD, cD) {
      if (!DD) return;
      const ID = DD[CD];
      if ("function" === typeof ID) {
        const pD = cD(ID);
        DD[CD] = pD, (0, bC.x)(pD, ID)
      }
    }
    let yC = !1;
    const MC = new WeakMap,
      tC = new WeakMap,
      ZC = new WeakMap,
      oC = {
        gl: 0,
        lost: 0
      };
    let vC = {
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
      NC = {
        buffer: 0,
        texture: 0
      },
      gC = 0;

    function XC(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (DD instanceof ArrayBuffer) return new Uint8Array(DD, CD, cD || void 0);
      if (!ArrayBuffer.isView(DD)) return null;
      const ID = "BYTES_PER_ELEMENT" in DD ? DD.BYTES_PER_ELEMENT : 1,
        pD = DD.byteOffset + CD * ID,
        iD = cD ? cD * ID : DD.byteLength - CD * ID;
      return new Uint8Array(DD.buffer, pD, Math.max(0, iD))
    }

    function mC(DD, CD) {
      const cD = function(DD) {
        switch (DD) {
          case ZD.ARRAY_BUFFER:
            return ZD.ARRAY_BUFFER_BINDING;
          case ZD.ELEMENT_ARRAY_BUFFER:
            return ZD.ELEMENT_ARRAY_BUFFER_BINDING;
          case ZD.COPY_READ_BUFFER:
            return ZD.COPY_READ_BUFFER_BINDING;
          case ZD.COPY_WRITE_BUFFER:
            return ZD.COPY_WRITE_BUFFER_BINDING;
          case ZD.UNIFORM_BUFFER:
            return ZD.UNIFORM_BUFFER_BINDING;
          case ZD.PIXEL_UNPACK_BUFFER:
            return ZD.PIXEL_UNPACK_BUFFER_BINDING;
          case ZD.TRANSFORM_FEEDBACK_BUFFER:
            return ZD.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(CD);
      return cD ? DD.getParameter(cD) : null
    }

    function nC(DD) {
      const CD = KD.get(DD);
      CD && (VD.shadowBytes -= CD.bytes.length, KD.delete(DD))
    }

    function OC(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      nC(DD), VD.shadowBytes + CD > HD ? VD.uncopied++ : (VD.shadowBytes += CD, KD.set(DD, {
        id: lD(DD),
        bytes: new Uint8Array(CD),
        width: cD,
        height: ID,
        texelBytes: pD,
        missed: 0
      }))
    }

    function PC(DD, CD) {
      for (const cD of ["deleteBuffer", "deleteTexture"]) BC(DD, cD, (DD => function() {
        for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
        return cD[0] && nC(cD[0]), SC(DD, this, cD)
      }));
      BC(DD, "shaderSource", (DD => function() {
        for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
        return cD[0] && "string" === typeof cD[1] && MC.set(cD[0], cD[1]), SC(DD, this, cD)
      })), BC(DD, "attachShader", (DD => function() {
        for (var CD, cD = arguments.length, ID = new Array(cD), pD = 0; pD < cD; pD++) ID[pD] = arguments[pD];
        const iD = ID[0],
          fD = null !== (CD = tC.get(iD)) && void 0 !== CD ? CD : [];
        return fD.push(ID[1]), tC.set(iD, fD), SC(DD, this, ID)
      })), BC(DD, "linkProgram", (DD => function() {
        for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
        const pD = SC(DD, this, cD);
        return VD.inProbe || function(DD, CD) {
          var cD, ID, pD;
          "undefined" !== typeof HTMLCanvasElement && DD.canvas instanceof HTMLCanvasElement && function(DD) {
            if (KC.has(DD)) return;
            KC.add(DD);
            for (const CD of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) DD.addEventListener(CD, (DD => {
              oC.lost < QC && (oC.lost++, RD(`${CD}${"statusMessage"in DD?`: ${String(DD.statusMessage)}`:""}`))
            }))
          }(DD.canvas);
          VD.context ??= DD;
          const iD = null !== (cD = tC.get(CD)) && void 0 !== cD ? cD : [];
          let fD = "",
            bD = "";
          for (const SD of iD) {
            var QD;
            const DD = null !== (QD = MC.get(SD)) && void 0 !== QD ? QD : "";
            /\bgl_Position\b/.test(DD) ? fD = DD : bD = DD
          }
          const wD = {
            id: lD(CD),
            name: null !== (ID = null === (pD = xD.exec(fD)) || void 0 === pD ? void 0 : pD[1]) && void 0 !== ID ? ID : null,
            gl: DD,
            vertex: fD,
            fragment: bD,
            terrain: UC(fD),
            checked: !1,
            firstDraw: !1
          };
          if (ZC.set(CD, wD), JD.push([CD, wD]), null !== wD.terrain) {
            const CD = iD.map((CD => {
              var cD;
              return null !== (cD = DD.getShaderInfoLog(CD)) && void 0 !== cD ? cD : ""
            })).filter((DD => "" !== DD.trim()));
            CD.length > 0 && kD(`program ${qD(wD)} (${wD.terrain}) shader logs:\n${dD(CD.join("\n"))}`)
          }
        }(this, cD[0]), pD
      })), BC(DD, "bufferData", (DD => function() {
        for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
        const pD = SC(DD, this, cD);
        if (!VD.inProbe) {
          const DD = mC(this, cD[0]);
          if (DD) {
            var iD, fD, bD;
            const CD = "number" === typeof cD[1] ? null : XC(cD[1], null !== (iD = cD[3]) && void 0 !== iD ? iD : 0, null !== (fD = cD[4]) && void 0 !== fD ? fD : 0);
            var QD;
            if (OC(DD, "number" === typeof cD[1] ? cD[1] : null !== (bD = null === CD || void 0 === CD ? void 0 : CD.length) && void 0 !== bD ? bD : 0), CD) null === (QD = KD.get(DD)) || void 0 === QD || QD.bytes.set(CD)
          }
        }
        return pD
      })), BC(DD, "bufferSubData", (DD => function() {
        for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
        const pD = SC(DD, this, cD);
        if (!VD.inProbe) {
          var iD, fD;
          const DD = mC(this, cD[0]),
            CD = DD ? KD.get(DD) : void 0,
            ID = XC(cD[2], null !== (iD = cD[3]) && void 0 !== iD ? iD : 0, null !== (fD = cD[4]) && void 0 !== fD ? fD : 0);
          if (CD && ID) {
            const DD = cD[1];
            CD.bytes.set(ID.subarray(0, Math.max(0, CD.bytes.length - DD)), DD), HC("buffer", CD, DD, ID.length)
          }
        }
        return pD
      })), CD && (BC(DD, "copyBufferSubData", (DD => function() {
        for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
        const pD = SC(DD, this, cD);
        if (!VD.inProbe) {
          const [DD, CD, ID, pD, iD] = cD, fD = mC(this, DD), bD = mC(this, CD), QD = fD ? KD.get(fD) : void 0, wD = bD ? KD.get(bD) : void 0;
          wD && (QD ? wD.bytes.set(QD.bytes.slice(ID, ID + iD), pD) : wD.missed++)
        }
        return pD
      })), BC(DD, "texStorage2D", (DD => function() {
        for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
        const pD = SC(DD, this, cD),
          [, , iD, fD, bD] = cD;
        if (!VD.inProbe && (iD === ZD.RGBA32UI || iD === ZD.RGBA16UI)) {
          const DD = this.getParameter(ZD.TEXTURE_BINDING_2D),
            CD = iD === ZD.RGBA32UI ? 16 : 8;
          DD && (aD.set(DD, CD), OC(DD, fD * bD * CD, fD, bD, CD))
        }
        return pD
      })), BC(DD, "texSubImage2D", (DD => function() {
        for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
        const pD = SC(DD, this, cD);
        return !VD.inProbe && cD.length >= 9 && cD[0] === ZD.TEXTURE_2D && 0 === cD[1] && function(DD, CD) {
          var cD;
          const ID = DD.getParameter(ZD.TEXTURE_BINDING_2D),
            pD = ID ? KD.get(ID) : void 0;
          if (!pD) return;
          const [, , iD, fD, bD, QD] = CD;
          let wD = XC(CD[8], null !== (cD = CD[9]) && void 0 !== cD ? cD : 0);
          if (null === wD && "number" === typeof CD[8]) {
            const cD = mC(DD, ZD.PIXEL_UNPACK_BUFFER),
              ID = cD ? KD.get(cD) : void 0;
            wD = ID ? ID.bytes.subarray(CD[8]) : null
          }
          if (null === wD) return void pD.missed++;
          const SD = DD.getParameter(ZD.UNPACK_ROW_LENGTH) || bD,
            BD = DD.getParameter(ZD.UNPACK_SKIP_ROWS),
            yD = DD.getParameter(ZD.UNPACK_SKIP_PIXELS),
            MD = pD.texelBytes;
          for (let tD = 0; tD < QD; tD++) {
            const DD = ((BD + tD) * SD + yD) * MD,
              CD = ((fD + tD) * pD.width + iD) * MD;
            pD.bytes.set(wD.subarray(DD, DD + bD * MD), CD)
          }
          HC("texture", pD, (fD * pD.width + iD) * MD, bD * QD * MD)
        }(this, cD), pD
      })), BC(DD, "copyTexSubImage2D", (DD => function() {
        for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
        const pD = cD[0] === ZD.TEXTURE_2D ? this.getParameter(ZD.TEXTURE_BINDING_2D) : null,
          iD = pD ? KD.get(pD) : void 0;
        return iD && iD.missed++, SC(DD, this, cD)
      })));
      for (const cD of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) BC(DD, cD, (DD => function() {
        for (var CD = arguments.length, ID = new Array(CD), pD = 0; pD < CD; pD++) ID[pD] = arguments[pD];
        const iD = SC(DD, this, ID);
        return VD.inProbe || qC(this, cD, ID), iD
      }));
      BC(DD, "getExtension", (DD => function() {
        for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
        const pD = SC(DD, this, cD);
        return pD && "object" === typeof pD && function(DD, CD, cD) {
          const ID = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(CD in ID) || cD.bloxdRenderDebug) return;
          cD.bloxdRenderDebug = !0;
          for (const pD of ID[CD]) {
            const CD = cD[pD];
            "function" === typeof CD && (cD[pD] = function() {
              for (var ID = arguments.length, iD = new Array(ID), fD = 0; fD < ID; fD++) iD[fD] = arguments[fD];
              const bD = SC(CD, cD, iD);
              return VD.inProbe || qC(DD, pD, iD), bD
            })
          }
        }(this, cD[0], pD), pD
      }))
    }

    function HC(DD, CD, cD, ID) {
      NC[DD] += ID, gC < 32 && CD.bytes.length >= 1 << 20 && (gC++, kD(`upload ${DD} #${CD.id} +${cD} ${ID} B`))
    }

    function UC(DD) {
      if (!DD.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(DD) || /in uvec3 _p2vs_location0\b/.test(DD) ? "inst" : "tex"
    }

    function xC(DD, CD, cD) {
      var ID;
      if (cD.checked) return;
      cD.checked = !0;
      const pD = DD.getProgramParameter(CD, ZD.LINK_STATUS),
        iD = (null !== (ID = DD.getProgramInfoLog(CD)) && void 0 !== ID ? ID : "").trim();
      var fD;
      null === cD.terrain && pD || (RD(`program ${qD(cD)} ${null!==(fD=cD.terrain)&&void 0!==fD?fD:"other"} link ${pD?"ok":"FAILED"}${iD?`: ${dD(iD,300)}`:""}`), iD && kD(`program ${qD(cD)} link log:\n${dD(iD)}`))
    }

    function qC(DD, CD, cD) {
      var ID;
      const pD = DD.getParameter(ZD.CURRENT_PROGRAM),
        iD = pD ? ZC.get(pD) : void 0;
      if (!pD || !iD) return;
      const fD = null !== (ID = iD.terrain) && void 0 !== ID ? ID : "other",
        {
          df: bD,
          instances: QD
        } = function(DD, CD) {
          switch (DD) {
            case "drawArrays":
              return {
                df: [
                  [CD[1], CD[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                df: [
                  [CD[1], CD[2]]
                ], instances: CD[3]
              };
            case "drawElements":
              return {
                df: [
                  [0, CD[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                df: [
                  [0, CD[1]]
                ], instances: CD[4]
              };
            case "multiDrawArraysWEBGL": {
              const DD = CD[1],
                cD = CD[3],
                ID = CD[2],
                pD = CD[4],
                iD = [];
              for (let fD = 0; fD < CD[5]; fD++) iD.push([DD[ID + fD], cD[pD + fD]]);
              return {
                df: iD,
                instances: 1
              }
            }
            default:
              return {
                df: [], instances: 0
              }
          }
        }(CD, cD),
        wD = "inst" === iD.terrain ? QD : bD.reduce(((DD, CD) => {
          let [, cD] = CD;
          return DD + cD
        }), 0) / 6;
      if (vC[fD].draws++, vC[fD].faces += wD, null === iD.terrain) return;
      if (VD.context = DD, !iD.firstDraw) {
        iD.firstDraw = !0, xC(DD, pD, iD), JC || (JC = !0, RD(function(DD) {
          var CD;
          const cD = DD.getParameter(ZD.DEPTH_FUNC),
            ID = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let pD = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in DD && DD.getParameter(ZD.DRAW_FRAMEBUFFER_BINDING)) {
            const CD = DD;
            pD = CD.getFramebufferAttachmentParameter(ZD.DRAW_FRAMEBUFFER, ZD.DEPTH_ATTACHMENT, ZD.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(CD.getFramebufferAttachmentParameter(ZD.DRAW_FRAMEBUFFER,ZD.DEPTH_ATTACHMENT,ZD.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(CD.getFramebufferAttachmentParameter(ZD.DRAW_FRAMEBUFFER,ZD.DEPTH_ATTACHMENT,ZD.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const iD = DD.getParameter(ZD.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(CD=ID[cD])&&void 0!==CD?CD:`0x${cD.toString(16)}`} clear ${iD}${516===cD||518===cD?" (reverse-Z)":""}, samples ${String(DD.getParameter(ZD.SAMPLES))}, ${pD}`
        }(DD)));
        const cD = DD.getError();
        cD !== ZD.NO_ERROR && oC.gl < QC && (oC.gl++, RD(`GL error 0x${cD.toString(16)} after program ${qD(iD)}'s first terrain draw (${CD})`))
      }
      const SD = VD.pendingCheck;
      null !== SD && (SD.terrainDraws++, SD.draws.length < wC && YD(DD, pD, iD, CD, bD, QD))
    }
    let JC = !1;
    const KC = new WeakSet;
    var aC = cD(4310),
      VC = cD(4498);
    const zC = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let jC = !1;
    const lC = new WeakSet,
      LC = new WeakMap,
      TC = new WeakMap,
      GC = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let RC = 0,
      kC = !1,
      dC = null,
      YC = {
        draws: 0,
        faces: 0
      };

    function WC(DD) {
      const CD = globalThis[DD];
      return null === CD || void 0 === CD ? void 0 : CD.prototype
    }

    function sC(DD) {
      return DD && "function" === typeof DD[Symbol.iterator] ? [...DD].sort().join(" ") : ""
    }

    function EC(DD, CD) {
      const cD = null !== DD && void 0 !== DD ? DD : {},
        ID = null !== CD && void 0 !== CD ? CD : Object.keys(Object.getPrototypeOf(cD)).concat(Object.keys(cD));
      return [...new Set(ID)].filter((DD => "number" === typeof cD[DD])).map((DD => `${DD} ${String(cD[DD])}`)).join(", ")
    }

    function eC(DD, CD) {
      var cD;
      const ID = null !== (cD = CD.vertex) && void 0 !== cD ? cD : {};
      if (ID.module && lC.has(ID.module)) {
        var pD;
        const cD = String(null !== (pD = ID.entryPoint) && void 0 !== pD ? pD : "");
        if (cD.startsWith("vs_packed") && LC.set(DD, cD), !kC) {
          var iD, fD, bD, QD, wD;
          kC = !0;
          const DD = null !== (iD = CD.depthStencil) && void 0 !== iD ? iD : {},
            ID = null !== (fD = CD.multisample) && void 0 !== fD ? fD : {},
            pD = String(null !== (bD = DD.depthCompare) && void 0 !== bD ? bD : "");
          RD(`WebGPU terrain pipeline ${cD}: depth ${String(null!==(QD=DD.format)&&void 0!==QD?QD:"none")} ${pD}${pD.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(wD=ID.count)&&void 0!==wD?wD:1)}`)
        }
      }
    }

    function uC(DD) {
      BC(DD, "setPipeline", (DD => function() {
        for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
        return TC.set(this, cD[0]), SC(DD, this, cD)
      }));
      for (const CD of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) BC(DD, CD, (DD => function() {
        const cD = TC.get(this),
          ID = cD ? LC.get(cD) : void 0;
        for (var pD = arguments.length, iD = new Array(pD), fD = 0; fD < pD; fD++) iD[fD] = arguments[fD];
        return void 0 !== ID && hC(CD, ID, iD), SC(DD, this, iD)
      }))
    }

    function hC(DD, CD, cD) {
      var ID;
      (YC.draws++, "draw" === DD || "drawIndexed" === DD) && (YC.faces += cD[0] * (null !== (ID = cD[1]) && void 0 !== ID ? ID : 1) / 6);
      if (null !== dC && dC.length < wC) {
        const ID = ("draw" === DD ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === DD ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((CD, ID) => {
          const pD = DD.endsWith("Indirect") ? cD[1] : cD[ID];
          return `${CD} ${String(null!==pD&&void 0!==pD?pD:"instances"===CD?1:0)}`
        }));
        dC.push(`  ${CD} ${DD} ${ID.join(" ")}`)
      }
    }

    function rC() {
      if (jC || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      jC = !0, BC(WC("GPU"), "requestAdapter", (DD => function() {
        for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
        return SC(DD, this, cD).then((DD => {
          var CD;
          DD ? function(DD) {
            var CD;
            const cD = null !== (CD = DD.info) && void 0 !== CD ? CD : {};
            RD(`WebGPU adapter ${["vendor","architecture","device","description"].map((DD=>{var CD;return`${DD} "${String(null!==(CD=cD[DD])&&void 0!==CD?CD:"")}"`})).join(" ")}${DD.isFallbackAdapter?" (fallback)":""}`), RD(`WebGPU adapter features ${sC(DD.features)}`), RD(`WebGPU adapter limits ${EC(DD.limits,zC)}`), kD(`WebGPU adapter all limits ${EC(DD.limits,null)}`)
          }(DD) : RD(`WebGPU requestAdapter(${JSON.stringify(null!==(CD=cD[0])&&void 0!==CD?CD:{})}) gave none`);
          return DD
        }))
      })), BC(WC("GPUAdapter"), "requestDevice", (DD => function() {
        for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
        return SC(DD, this, cD).then((DD => (function(DD) {
          RD(`WebGPU device features ${sC(DD.features)}`), RD(`WebGPU device limits ${EC(DD.limits,zC)}`), DD.addEventListener("uncapturederror", (DD => {
            if (GC.uncaptured < QC) {
              var CD, cD, ID;
              GC.uncaptured++;
              const pD = DD.error;
              RD(`WebGPU uncaptured ${null!==(CD=null===pD||void 0===pD||null===(cD=pD.constructor)||void 0===cD?void 0:cD.name)&&void 0!==CD?CD:"error"}: ${dD(String(null!==(ID=null===pD||void 0===pD?void 0:pD.message)&&void 0!==ID?ID:""),600)}`)
            }
          }));
          const CD = DD.lost;
          null === CD || void 0 === CD || CD.then((DD => {
            var CD;
            RD(`WebGPU device lost (${String(DD.reason)}): ${dD(String(null!==(CD=DD.message)&&void 0!==CD?CD:""),600)}`)
          }))
        }(DD), DD)), (DD => {
          throw RD(`WebGPU requestDevice failed: ${String(DD)}`), DD
        }))
      }));
      const DD = WC("GPUDevice");
      BC(DD, "createShaderModule", (DD => function() {
        for (var CD, cD, ID = arguments.length, pD = new Array(ID), iD = 0; iD < ID; iD++) pD[iD] = arguments[iD];
        const fD = SC(DD, this, pD);
        return function(DD, CD) {
          const cD = CD.includes("decodeQuad");
          cD && lC.add(DD);
          const ID = DD.getCompilationInfo;
          null === ID || void 0 === ID || ID.call(DD).then((DD => {
            if (0 === DD.messages.length && !cD) return;
            const CD = {};
            for (const cD of DD.messages) {
              var ID;
              CD[String(cD.type)] = (null !== (ID = CD[String(cD.type)]) && void 0 !== ID ? ID : 0) + 1
            }
            const pD = DD.messages.map((DD => `${String(DD.type)} ${String(DD.lineNum)}:${String(DD.linePos)} ${String(DD.message)}`)).join("\n");
            GC.compile < QC && (GC.compile++, RD(`WebGPU ${cD?"terrain ":""}shader module compiled: ${JSON.stringify(CD)}${pD?` first: ${dD(pD.split("\n")[0],300)}`:""}`)), pD && kD(`WebGPU shader module messages:\n${dD(pD)}`)
          }))
        }(fD, String(null !== (CD = (null !== (cD = pD[0]) && void 0 !== cD ? cD : {}).code) && void 0 !== CD ? CD : "")), fD
      })), BC(DD, "createRenderPipeline", (DD => function() {
        for (var CD, cD = arguments.length, ID = new Array(cD), pD = 0; pD < cD; pD++) ID[pD] = arguments[pD];
        const iD = SC(DD, this, ID);
        return eC(iD, null !== (CD = ID[0]) && void 0 !== CD ? CD : {}), iD
      })), BC(DD, "createRenderPipelineAsync", (DD => function() {
        for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
        return SC(DD, this, cD).then((DD => {
          var CD;
          return eC(DD, null !== (CD = cD[0]) && void 0 !== CD ? CD : {}), DD
        }), (DD => {
          var CD;
          throw function(DD, CD) {
            var cD, ID, pD;
            if (GC.rejected >= QC) return;
            GC.rejected++;
            const {
              reason: iD,
              message: fD
            } = null !== CD && void 0 !== CD ? CD : {}, bD = String(null !== (cD = (null !== (ID = DD.vertex) && void 0 !== ID ? ID : {}).entryPoint) && void 0 !== cD ? cD : "");
            RD(`WebGPU pipeline "${String(null!==(pD=DD.label)&&void 0!==pD?pD:"")}" ${bD} rejected (${String(null!==iD&&void 0!==iD?iD:"no reason")}): ${dD(String(null!==fD&&void 0!==fD?fD:CD),600)}`)
          }(null !== (CD = cD[0]) && void 0 !== CD ? CD : {}, DD), DD
        }))
      })), BC(WC("GPUCanvasContext"), "configure", (DD => function() {
        for (var CD, cD = arguments.length, ID = new Array(cD), pD = 0; pD < cD; pD++) ID[pD] = arguments[pD];
        const iD = null !== (CD = ID[0]) && void 0 !== CD ? CD : {};
        var fD, bD;
        RC++ < 3 && RD(`WebGPU canvas ${String(iD.format)} ${String(null!==(fD=iD.colorSpace)&&void 0!==fD?fD:"srgb")} alpha ${String(null!==(bD=iD.alphaMode)&&void 0!==bD?bD:"opaque")}`);
        return SC(DD, this, ID)
      })), uC(WC("GPURenderPassEncoder")), uC(WC("GPURenderBundleEncoder"))
    }
    const AC = 1e4,
      FC = 6e4,
      Dc = 5e3,
      Cc = 3e3,
      cc = 100;
    let Ic = null,
      pc = !1,
      ic = {
        ...aC.b
      },
      fc = !1,
      bc = null,
      Qc = 0,
      wc = () => {};
    const Sc = new Promise((DD => {
      wc = DD
    }));

    function Bc() {
      var DD;
      pc || (pc = !0, ic = Object.assign(window.bloxdRenderDebug ??= {
        ...aC.b
      }, {
        faceCull: "0" === (0, iD.n)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (DD = (0, iD.n)("adrenoProbe")) && void 0 !== DD ? DD : ""
      }), RD("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), yC || "undefined" === typeof window || (yC = !0, "undefined" !== typeof WebGL2RenderingContext && PC(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && PC(WebGLRenderingContext.prototype, !1)), rC(), (0, iD.b)("renderProbe", (() => {
        vc("console")
      })), Zc(), setInterval(gc, Dc))
    }

    function yc(DD) {
      var CD, cD;
      Bc(), Ic = null !== (CD = null === DD || void 0 === DD ? void 0 : DD.backend) && void 0 !== CD ? CD : null;
      const ID = `, renderer param ${null!==(cD=(0,iD.n)("renderer"))&&void 0!==cD?cD:"none"}, faceCull ${"0"===ic.faceCull?"off (whole parts)":"on"}, adrenoProbe ${ic.adrenoProbe||"none"}`;
      RD(`${(0,VC.e)(DD)}${null===DD?"":ID}`)
    }

    function Mc() {
      const DD = performance.now(),
        CD = tc(Sc, AC, FC).then((CD => vc(`${Math.round((performance.now()-DD)/1e3)} s after playable${CD?"":", no terrain drawn yet"}`)));
      (0, pD.d)(RD, (async () => {
        await CD, await bc
      }))
    }
    async function tc(DD, CD, cD) {
      const pD = (0, ID.d)(cD).then((() => !1));
      return await (0, ID.d)(CD), Promise.race([DD.then((() => !0)), pD])
    }

    function Zc() {
      requestAnimationFrame((() => {
        Qc++, Zc()
      }))
    }

    function oc() {
      var DD, CD, cD;
      if (fc) return;
      (fc = !0, RD(`renderer caps ${null!==(DD=ic.caps)&&void 0!==DD?DD:"(not noted)"}; terrain fetch ${null!==(CD=ic.fetch)&&void 0!==CD?CD:"(not noted)"}`), ic.adrenoProbe) && RD(`adrenoProbe ${ic.adrenoProbe} asked; in force (storage fetch only): ${null!==(cD=ic.probe)&&void 0!==cD?cD:"(not noted)"}`);
      const ID = VD.context;
      if (ID) {
        for (const DD of function(DD) {
            var CD;
            const cD = [],
              ID = DD.getExtension("WEBGL_debug_renderer_info"),
              pD = ID ? DD.getParameter(ID.UNMASKED_VENDOR_WEBGL) : "(masked)",
              iD = ID ? DD.getParameter(ID.UNMASKED_RENDERER_WEBGL) : "(masked)";
            cD.push(`GL ${String(DD.getParameter(DD.VERSION))} | ${String(DD.getParameter(DD.SHADING_LANGUAGE_VERSION))} | ${String(DD.getParameter(DD.VENDOR))} / ${String(DD.getParameter(DD.RENDERER))}`), cD.push(`GL unmasked ${pD} / ${iD}`);
            const fD = [
              ["MAX_TEXTURE_SIZE", DD.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", DD.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", DD.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", DD.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", DD.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", DD.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", DD.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in DD && fD.push(["MAX_UNIFORM_BLOCK_SIZE", DD.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", DD.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", DD.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", DD.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), cD.push(`GL limits ${fD.map((CD=>{let[cD,ID]=CD;return`${cD} ${String(DD.getParameter(ID))}`})).join(", ")}`);
            const bD = (CD, cD) => {
              const ID = DD.getShaderPrecisionFormat(CD, DD.HIGH_FLOAT),
                pD = DD.getShaderPrecisionFormat(CD, DD.HIGH_INT);
              return `${cD} highp float ${ID?`${ID.rangeMin}/${ID.rangeMax}/${ID.precision}`:"?"} int ${pD?`${pD.rangeMin}/${pD.rangeMax}/${pD.precision}`:"?"}`
            };
            cD.push(`GL precision ${bD(DD.VERTEX_SHADER,"VS")}, ${bD(DD.FRAGMENT_SHADER,"FS")}`);
            const QD = DD.getContextAttributes();
            return cD.push(`GL context ${JSON.stringify(QD)} drawingBuffer ${DD.drawingBufferWidth}x${DD.drawingBufferHeight}${"drawingBufferFormat"in DD?` format 0x${Number(DD.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in DD?` ${String(DD.drawingBufferColorSpace)}`:""}`), cD.push(`GL extensions ${(null!==(CD=DD.getSupportedExtensions())&&void 0!==CD?CD:[]).join(" ")}`), cD
          }(ID)) RD(DD);
        ! function() {
          if (!VD.context) return;
          let DD = 0,
            CD = 0;
          for (const [cD, ID] of JD) !ID.gl.isContextLost() && ID.gl.isProgram(cD) && (CD++, xC(ID.gl, cD, ID), null !== ID.terrain && DD++);
          RD(`programs: ${CD} live of ${JD.length} linked, ${DD} packed terrain; CPU page copies ${Math.round(VD.shadowBytes/1048576)} MiB (${VD.uncopied} over budget)`)
        }()
      }
    }

    function vc(DD) {
      return bc ??= async function(DD) {
        oc(), "webgpu" === Ic ? (Nc(), "1" === ic.slotCheck && RD("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), ic.slotCheck = "1", await
          function(DD) {
            if (null !== dC) return Promise.resolve();
            const CD = [];
            return dC = CD, new Promise((cD => {
              setTimeout((() => {
                dC = null, RD(`WebGPU draw ranges (${DD}): ${CD.length} terrain draws recorded in a second (first ${wC}; bundles replay without new ones)`);
                for (const DD of CD) RD(DD);
                cD()
              }), 1e3)
            }))
          }(DD), await async function() {
            for (let DD = 0;
              "1" === ic.slotCheck && DD < Cc; DD += cc) await (0, ID.d)(cc);
            if ("1" === ic.slotCheck) return void RD(`slot check: no answer in ${Cc} ms (only the storage fetch has one; a later answer logs on its own)`);
            Nc()
          }()) : await fC(DD);
        RD(`check (${DD}) done: bloxdDebug.save() downloads it all`)
      }(DD).catch((CD => {
        RD(`check (${DD}) failed: ${String(CD)}`)
      })).finally((() => {
        bc = null
      })), bc
    }

    function Nc() {
      void 0 !== ic.slotCheck && "1" !== ic.slotCheck && (RD(ic.slotCheck), delete ic.slotCheck)
    }

    function gc() {
      const DD = DD => Qc ? (DD / Qc).toFixed(1) : "0",
        CD = function() {
          const DD = YC;
          return YC = {
            draws: 0,
            faces: 0
          }, DD
        }(),
        cD = function() {
          const DD = vC;
          return vC = {
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
          }, DD
        }(),
        ID = function() {
          const DD = NC;
          return NC = {
            buffer: 0,
            texture: 0
          }, DD
        }();
      Nc(), ("webgpu" === Ic ? CD.draws : cD.inst.draws + cD.tex.draws) > 0 && wc();
      const pD = "webgpu" === Ic ? [`terrain ${DD(CD.draws)} draws ${DD(CD.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((DD => cD[DD].draws > 0)).map((CD => `${CD} ${DD(cD[CD].draws)} draws ${DD(cD[CD].faces)} faces a frame`));
      RD(`${Qc} frames: ${pD.join(", ")||"no draws"}; uploaded ${Math.round(ID.buffer/1024)} KiB to buffers, ${Math.round(ID.texture/1024)} KiB to data textures`), Qc = 0
    }
  },
  4498: (DD, CD, cD) => {
    function ID(DD) {
      if (null === DD) return "backend: none picked (no renderer build)";
      const CD = DD.adapter ? `${DD.adapter.vendor}/${DD.adapter.architecture}` : "none";
      return `backend ${DD.backend}: reason ${DD.reason}, source ${DD.source}, adapter ${CD}`
    }
    cD.d(CD, {
      e: () => ID
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);