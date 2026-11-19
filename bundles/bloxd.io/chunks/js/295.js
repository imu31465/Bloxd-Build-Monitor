export const id = 295;
export const ids = [295];
export const modules = {
  40790: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => yD,
      g: () => vD,
      k: () => MD,
      o: () => tD,
      p: () => gD,
      s: () => ND
    });
    var ID = cD(40737);
    var pD = "Babylon Lite v1.32.0",
      iD = cD(40798);

    function fD(DD) {
      return "clientWidth" in DD
    }
    var bD = 1;

    function QD(DD, CD, cD) {
      const QD = CD.getContext("webgpu");
      QD || (0, ID.d)(54), fD(CD) && CD.setAttribute("data-engine", pD);
      const wD = cD?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        SD = cD?.srgb ? (BD = wD).endsWith("-srgb") ? BD : `${BD}-srgb` : wD;
      var BD;
      const yD = cD?.alphaMode ?? "opaque";
      QD.configure({
        device: DD._device,
        format: wD,
        alphaMode: yD,
        viewFormats: [SD]
      });
      const MD = 1 === cD?.msaaSamples ? 1 : 4,
        tD = (0, iD.e)({
          lbl: "swapchain",
          format: SD,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return tD._eager = !0, {
        engine: DD,
        canvas: CD,
        format: SD,
        msaaSamples: MD,
        scRT: tD,
        maxDevicePixelRatio: cD?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: bD++,
        _context: QD,
        _configureFormat: wD,
        _alphaMode: yD,
        _renderingContexts: []
      }
    }

    function wD(DD) {
      const CD = DD._context.getCurrentTexture(),
        cD = DD.scRT;
      cD._colorTexture = CD, cD._colorView = CD.createView({
        format: DD.format
      }), cD._width = CD.width, cD._height = CD.height
    }

    function SD(DD) {
      const CD = DD.canvas;
      if (!fD(CD)) return;
      const cD = DD._w ?? CD.clientWidth,
        ID = DD._h ?? CD.clientHeight;
      if (!(cD > 0 && ID > 0)) return;
      const pD = Math.min(globalThis.devicePixelRatio || 1, DD.maxDevicePixelRatio);
      BD(DD, cD * pD | 0, ID * pD | 0)
    }

    function BD(DD, CD, cD) {
      const ID = DD.canvas,
        pD = 0 | CD,
        iD = 0 | cD;
      if (pD > 0 && iD > 0 && (pD !== ID.width || iD !== ID.height)) {
        ID.width = pD, ID.height = iD, DD.scRT._width = pD, DD.scRT._height = iD;
        for (const CD of DD._renderingContexts) CD._resize?.()
      }
    }
    var yD = 0;

    function MD(DD, CD) {
      return -1 !== DD._renderingContexts.indexOf(CD)
    }

    function tD(DD, CD) {
      return -1 === DD._renderingContexts.indexOf(CD) && (DD._renderingContexts.push(CD), !0)
    }
    var ZD = null;
    var oD = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function vD(DD, CD) {
      const iD = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...ZD ? ZD() : {}
      });
      iD || (0, ID.d)(47);
      const fD = ZD?.deviceFeatures?.(iD, CD) ?? function(DD) {
          return oD.filter((CD => DD.features.has(CD)))
        }(iD),
        bD = await iD.requestDevice({
          requiredFeatures: fD,
          requiredLimits: CD?.requiredLimits
        });
      console.log(`${pD} - WebGPU engine`);
      const BD = !!CD?.useHighPrecisionMatrix,
        yD = !!CD?.useFloatingOrigin;
      if (yD && !BD && (0, ID.d)(48), BD) {
        const {
          allocateF64Mat4: DD
        } = await cD.e(349).then((() => cD(60476)));
        0
      }
      let MD, tD, vD, ND;
      if (yD) {
        const [{
          wrapRenderableForFO: DD,
          lightFoVersion: CD,
          applyLightFoOffset: ID
        }, {
          makePackMeshWorld: pD
        }] = await Promise.all([cD.e(350).then((() => cD(60483))), cD.e(351).then((() => cD(60490)))]);
        MD = DD, tD = pD, vD = CD, ND = ID
      }
      const gD = {
          _device: bD
        },
        XD = [gD];
      return Object.assign(gD, {
        engine: gD,
        surfaces: XD,
        _surfaces: XD,
        _device: bD,
        _options: CD,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: BD,
        useFloatingOrigin: yD,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: MD,
        _makePackMeshWorld: tD,
        _lightFoVersion: vD,
        _applyLightFoOffset: ND
      }, QD(gD, DD, CD)), SD(gD), wD(gD), gD
    }

    function ND(DD, CD, cD) {
      BD(DD, CD, cD)
    }

    function gD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DD.surfaces;
      if (cD !== DD.surfaces)
        for (let pD = cD.length; pD--;) cD[pD].engine !== DD && (0, ID.d)(49);
      XD(DD, CD, cD)
    }

    function XD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : DD._surfaces,
        ID = 0;
      for (let iD = cD.length; iD--;) ID += cD[iD]._renderingContexts.length;
      if (!ID) return DD.drawCallCount = 0, DD._flushGpuRetirements?.(DD);
      const pD = DD._device.createCommandEncoder({
        label: "frame"
      });
      DD._currentEncoder = pD, DD._currentDelta = CD;
      try {
        DD._gpuTimerBegin?.(pD), ID = 0;
        for (let DD = 0; DD < cD.length; DD++) {
          const CD = cD[DD];
          CD._capturePreFrame?.(CD), wD(CD);
          const pD = CD._renderingContexts;
          for (let DD = 0; DD < pD.length; DD++) {
            const CD = pD[DD];
            CD._update(), ID += CD._drawCallsPre + CD._record()
          }
        }
        const CD = DD._currentEncoder;
        for (let DD = 0; DD < cD.length; DD++) {
          const ID = cD[DD];
          ID._captureService?.(ID, CD)
        }
        DD._gpuTimerEnd?.(CD), DD._cbs[0] = CD.finish(), DD._device.queue.submit(DD._cbs), DD._flushGpuRetirements?.(DD), DD.drawCallCount = ID, DD._gpuTimerResolve?.()
      } finally {
        DD._currentEncoder = void 0
      }
    }
  },
  40745: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD,
      h: () => iD,
      i: () => ID
    });
    var ID = globalThis.GPUTextureUsage,
      pD = globalThis.GPUBufferUsage,
      iD = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  40823: (DD, CD, cD) => {
    function ID(DD) {
      pD(DD.splice(0))
    }

    function pD(DD) {
      for (const cD of DD) try {
        cD()
      } catch (CD) {
        console.error("GPU resource retirement failed.", CD)
      }
    }

    function iD(DD, CD) {
      DD._flushGpuRetirements ??= fD, (DD._retirements ??= []).push(CD)
    }

    function fD(DD) {
      const CD = DD._retirements;
      if (!CD) return;
      DD._retirements = null;
      const cD = DD._retiring ??= new Set;
      cD.add(CD), queueMicrotask((() => {
        DD._device.queue.onSubmittedWorkDone().then((() => {
          cD.delete(CD), ID(CD)
        })).catch((() => {}))
      }))
    }
    cD.d(CD, {
      e: () => iD
    })
  },
  40798: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD,
      h: () => fD,
      i: () => bD
    });
    var ID = cD(40745);

    function pD(DD) {
      const CD = DD.size;
      return "canvas" in CD ? CD.canvas : CD
    }

    function iD(DD) {
      return {
        _descriptor: DD,
        _resolveSize: pD,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function fD(DD, CD) {
      if (DD._eager) return void DD._syncEager?.(CD);
      bD(DD);
      const cD = DD._descriptor,
        {
          width: iD,
          height: fD
        } = (DD._resolveSize ?? pD)(cD);
      DD._width = iD, DD._height = fD;
      const QD = CD._device;
      cD.format && (DD._colorTexture = QD.createTexture({
        label: cD.lbl,
        size: {
          width: iD,
          height: fD
        },
        format: cD.format,
        sampleCount: cD.samples,
        usage: ID.i.RENDER_ATTACHMENT | ID.i.TEXTURE_BINDING | ID.i.COPY_SRC | ID.i.COPY_DST
      }), DD._colorView = DD._colorTexture.createView()), cD.dFormat && (DD._depthTexture = QD.createTexture({
        label: cD.lbl,
        size: {
          width: iD,
          height: fD
        },
        format: cD.dFormat,
        sampleCount: cD.samples,
        usage: ID.i.RENDER_ATTACHMENT | ID.i.TEXTURE_BINDING
      }), DD._depthView = DD._depthTexture.createView())
    }

    function bD(DD) {
      if (!DD || DD._eager && !DD._disposeAttachments) return;
      const CD = DD._colorTexture,
        cD = DD._depthTexture;
      if (DD._colorTexture = DD._depthTexture = null, DD._colorView = DD._depthView = null, DD._width = DD._height = 0, DD._disposeAttachments) DD._disposeAttachments(CD, cD);
      else try {
        CD?.destroy()
      } finally {
        !1 !== DD._ownsDepthTexture && cD?.destroy()
      }
    }
  },
  40814: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID,
      f: () => pD,
      h: () => iD
    });
    var ID = Float32Array,
      pD = Float64Array,
      iD = Uint32Array
  },
  40830: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => ID
    });
    var ID = 16
  },
  40737: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => pD
    });
    var ID = null;

    function pD(DD) {
      for (var CD = arguments.length, cD = new Array(CD > 1 ? CD - 1 : 0), pD = 1; pD < CD; pD++) cD[pD - 1] = arguments[pD];
      const iD = new Error(ID?.(DD, cD) ?? `#${DD}`);
      throw iD.lite = cD, iD
    }
  },
  40774: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => pD
    });
    var ID = cD(40755);

    function pD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const cD = CD.compare,
        pD = CD.lodMinClamp ?? 0,
        iD = CD.lodMaxClamp ?? 32,
        fD = void 0 !== cD || 0 !== pD || 32 !== iD ? `${cD??""}:${pD}:${iD}` : "";
      return (0, ID.c)(DD, CD, fD)
    }
  },
  40753: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD
    });
    var ID = null;

    function pD(DD) {
      const CD = ID ??= new WeakMap;
      CD.set(DD, (CD.get(DD) ?? 0) + 1)
    }

    function iD(DD) {
      pD(DD.texture)
    }
  },
  40755: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => bD
    });
    var ID = null,
      pD = "nearest",
      iD = "clamp-to-edge",
      fD = {
        minFilter: pD,
        magFilter: pD,
        mipmapFilter: pD,
        addressModeU: iD,
        addressModeV: iD,
        addressModeW: iD,
        maxAnisotropy: 1
      };

    function bD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const pD = DD._device,
        iD = ID ??= new WeakMap;
      let bD = iD.get(pD);
      bD || iD.set(pD, bD = new Map);
      let QD = cD;
      for (const ID in fD) {
        const DD = ID;
        QD += `:${CD[DD]??fD[DD]}`
      }
      let wD = bD.get(QD);
      return wD || bD.set(QD, wD = pD.createSampler(CD)), wD
    }
  },
  40806: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => LD,
      g: () => RD
    });
    var ID = cD(40798),
      pD = cD(40790);

    function iD(DD, CD) {
      CD._passes.length = 0, DD._currentProcessedTask = CD;
      try {
        CD.record()
      } finally {
        DD._currentProcessedTask = null
      }
    }
    var fD = cD(40814);

    function bD(DD) {
      const CD = DD.worldMatrixVersion;
      if (DD._viewVer === CD) return DD._viewCache;
      const cD = DD._viewCache,
        ID = DD.worldMatrix,
        pD = DD._useFloatingOrigin,
        iD = pD ? 0 : ID[12],
        fD = pD ? 0 : ID[13],
        bD = pD ? 0 : ID[14];
      return cD[0] = ID[0], cD[1] = ID[4], cD[2] = ID[8], cD[3] = 0, cD[4] = ID[1], cD[5] = ID[5], cD[6] = ID[9], cD[7] = 0, cD[8] = ID[2], cD[9] = ID[6], cD[10] = ID[10], cD[11] = 0, cD[12] = -(ID[0] * iD + ID[1] * fD + ID[2] * bD), cD[13] = -(ID[4] * iD + ID[5] * fD + ID[6] * bD), cD[14] = -(ID[8] * iD + ID[9] * fD + ID[10] * bD), cD[15] = 1, DD._viewVer = CD, cD
    }
    var QD = null;

    function wD(DD) {
      return DD._projFov === DD.fov && DD._projNear === DD.nearPlane && DD._projFar === DD.farPlane || (DD._projFov = DD.fov, DD._projNear = DD.nearPlane, DD._projFar = DD.farPlane, DD._projRev = (DD._projRev ?? 0) + 1), DD.worldMatrixVersion + (DD._projRev ?? 0)
    }

    function SD(DD, CD) {
      const cD = wD(DD);
      if (DD._projVer === cD && DD._projAspect === CD) return DD._projCache;
      const ID = DD._projCache;
      return null !== QD && DD.ortho ? QD(DD, CD, ID) : function(DD, CD, cD, ID, pD) {
        const iD = 1 / Math.tan(.5 * CD),
          fD = pD - ID;
        DD[0] = iD / cD, DD[5] = iD, DD[10] = -ID / fD, DD[11] = 1, DD[14] = pD * ID / fD
      }(ID, DD.fov, CD, DD.nearPlane, DD.farPlane), DD._projVer = cD, DD._projAspect = CD, ID
    }
    var BD = cD(40745);

    function yD(DD, CD, cD) {
      return DD._device.createBuffer({
        label: cD,
        size: (ID = CD, pD = 16, Math.ceil(ID / pD) * pD),
        usage: BD.e.UNIFORM | BD.e.COPY_DST
      });
      var ID, pD
    }
    var MD = cD(40823),
      tD = null;

    function ZD(DD) {
      const CD = DD._device,
        cD = tD ??= new WeakMap;
      let ID = cD.get(CD);
      return ID || (ID = CD.createBindGroupLayout({
        label: "wo",
        entries: [{
          binding: 0,
          visibility: BD.h.VERTEX | BD.h.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: BD.h.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), cD.set(CD, ID)), ID
    }

    function oD(DD, CD, cD) {
      const ID = DD._device,
        pD = yD(DD, CD.byteLength, cD);
      try {
        ID.queue.writeBuffer(pD, 0, CD.buffer, CD.byteOffset, CD.byteLength)
      } catch (iD) {
        throw pD.destroy(), iD
      }
      return pD
    }
    var vD = cD(40830),
      ND = new fD.h(1),
      gD = new fD.e(ND.buffer);

    function XD(DD) {
      let CD = 0;
      for (const cD of DD) CD += cD._lightVersion ?? 0;
      return CD
    }

    function mD(DD, CD) {
      DD.fill(0);
      let cD = 0;
      for (const ID of CD) {
        if (cD >= vD.b) break;
        ID._writeLightUbo && (ID._writeLightUbo(DD, 4 + 16 * cD), cD++)
      }
      ND[0] = cD, DD[0] = gD[0]
    }

    function nD(DD, CD) {
      let cD = CD._lightGpuState;
      const ID = 16 + 16 * vD.b * 4;
      if (cD && cD._byteSize === ID) return cD;
      const pD = !cD;
      cD?._buffer.destroy();
      const iD = new fD.e(ID / 4);
      return mD(iD, CD.lights), DD._applyLightFoOffset?.(iD, CD), cD = {
        _buffer: oD(DD, iD),
        _scratch: iD,
        lV: XD(CD.lights) + (DD._lightFoVersion?.(CD) ?? 0),
        _listVersion: CD._lightListVersion ?? 0,
        _lightCount: CD.lights.length,
        _byteSize: ID
      }, CD._lightGpuState = cD, pD && CD._disposables.push((() => {
        CD._lightGpuState?._buffer.destroy(), CD._lightGpuState = void 0
      })), cD
    }

    function OD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const pD = CD;
      if (0 === ID && 16 === pD.length) return void DD.set(pD, cD);
      const iD = ID,
        fD = cD;
      DD[fD + 0] = pD[iD + 0], DD[fD + 1] = pD[iD + 1], DD[fD + 2] = pD[iD + 2], DD[fD + 3] = pD[iD + 3], DD[fD + 4] = pD[iD + 4], DD[fD + 5] = pD[iD + 5], DD[fD + 6] = pD[iD + 6], DD[fD + 7] = pD[iD + 7], DD[fD + 8] = pD[iD + 8], DD[fD + 9] = pD[iD + 9], DD[fD + 10] = pD[iD + 10], DD[fD + 11] = pD[iD + 11], DD[fD + 12] = pD[iD + 12], DD[fD + 13] = pD[iD + 13], DD[fD + 14] = pD[iD + 14], DD[fD + 15] = pD[iD + 15]
    }

    function PD(DD, CD, cD, ID, pD) {
      DD.fill(0);
      const iD = function(DD, CD) {
          const cD = wD(DD);
          if (DD._vpVer === cD && DD._vpAspect === CD) return DD._vpCache;
          const ID = DD._vpCache;
          return function(DD, CD, cD, ID, pD, iD) {
            const fD = cD[ID],
              bD = cD[ID + 1],
              QD = cD[ID + 2],
              wD = cD[ID + 3],
              SD = cD[ID + 4],
              BD = cD[ID + 5],
              yD = cD[ID + 6],
              MD = cD[ID + 7],
              tD = cD[ID + 8],
              ZD = cD[ID + 9],
              oD = cD[ID + 10],
              vD = cD[ID + 11],
              ND = cD[ID + 12],
              gD = cD[ID + 13],
              XD = cD[ID + 14],
              mD = cD[ID + 15];
            let nD = pD[iD],
              OD = pD[iD + 1],
              PD = pD[iD + 2],
              HD = pD[iD + 3];
            DD[CD] = fD * nD + SD * OD + tD * PD + ND * HD, DD[CD + 1] = bD * nD + BD * OD + ZD * PD + gD * HD, DD[CD + 2] = QD * nD + yD * OD + oD * PD + XD * HD, DD[CD + 3] = wD * nD + MD * OD + vD * PD + mD * HD, nD = pD[iD + 4], OD = pD[iD + 5], PD = pD[iD + 6], HD = pD[iD + 7], DD[CD + 4] = fD * nD + SD * OD + tD * PD + ND * HD, DD[CD + 5] = bD * nD + BD * OD + ZD * PD + gD * HD, DD[CD + 6] = QD * nD + yD * OD + oD * PD + XD * HD, DD[CD + 7] = wD * nD + MD * OD + vD * PD + mD * HD, nD = pD[iD + 8], OD = pD[iD + 9], PD = pD[iD + 10], HD = pD[iD + 11], DD[CD + 8] = fD * nD + SD * OD + tD * PD + ND * HD, DD[CD + 9] = bD * nD + BD * OD + ZD * PD + gD * HD, DD[CD + 10] = QD * nD + yD * OD + oD * PD + XD * HD, DD[CD + 11] = wD * nD + MD * OD + vD * PD + mD * HD, nD = pD[iD + 12], OD = pD[iD + 13], PD = pD[iD + 14], HD = pD[iD + 15], DD[CD + 12] = fD * nD + SD * OD + tD * PD + ND * HD, DD[CD + 13] = bD * nD + BD * OD + ZD * PD + gD * HD, DD[CD + 14] = QD * nD + yD * OD + oD * PD + XD * HD, DD[CD + 15] = wD * nD + MD * OD + vD * PD + mD * HD
          }(ID, 0, SD(DD, CD), 0, bD(DD), 0), DD._vpVer = cD, DD._vpAspect = CD, ID
        }(ID, pD),
        fD = bD(ID),
        QD = ID.worldMatrix;
      OD(DD, iD, 0), OD(DD, fD, 16), CD.useFloatingOrigin ? (DD[32] = 0, DD[33] = 0, DD[34] = 0) : (DD[32] = QD[12], DD[33] = QD[13], DD[34] = QD[14]), DD[87] = CD.canvas.width;
      const BD = cD.imageProcessing;
      DD[76] = BD.exposure, DD[77] = BD.contrast, DD[78] = cD._envTextures?.lodGenerationScale ?? .8, DD[79] = +BD.toneMappingEnabled, DD[37] = CD.canvas.height
    }

    function HD(DD, CD) {
      return {
        _renderables: DD,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: CD
      }
    }

    function UD(DD, CD, cD) {
      DD.clr ??= !0;
      const pD = DD.rt._descriptor,
        iD = DD.depth?._descriptor,
        QD = {
          _colorFormat: pD.format,
          _depthStencilFormat: iD?.dFormat ?? pD.dFormat,
          _depthCompare: pD.depthCompare ?? iD?.depthCompare,
          _sampleCount: pD.samples
        },
        SD = {
          loadOp: "clear",
          storeOp: "store"
        },
        BD = {
          ...HD([], -1),
          name: DD.name,
          _config: DD,
          _ownsTargets: !DD.sharedRt,
          engine: CD,
          wo: cD,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [SD]
          },
          _colorAttachment: SD,
          _sceneUBO: yD(CD, 368),
          _suData: new fD.e(92),
          _sceneUboCacheKey: [],
          _targetSignature: QD,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (BD._disposed) throw new Error("RenderTask has been disposed.");
            BD._recordExplicit ? BD._recordExplicit(BD, !0) : JD(BD, !1 !== DD.autoMirror ? cD._renderables.slice() : BD._renderables, !0)
          },
          execute: () => function(DD, CD, cD) {
            if (!1 === DD.enabled) return 0;
            const ID = DD.wo;
            ! function(DD, CD, cD) {
              const ID = DD.wo;
              !1 !== DD._config.autoMirror && DD._lastVersion !== ID._renderableVersion && JD(DD, ID._renderables.slice());
              aD(DD, CD);
              const pD = DD._updateContext,
                iD = DD._config.cam ?? ID.camera;
              cD._colorFormat && (DD._config._skipClusteredLights || ID._clusteredLightUpdater?.(iD, pD.targetWidth, pD.targetHeight), function(DD, CD) {
                const cD = nD(DD, CD),
                  ID = XD(CD.lights) + (DD._lightFoVersion?.(CD) ?? 0),
                  pD = CD._lightListVersion ?? 0;
                ID === cD.lV && pD === cD._listVersion && CD.lights.length === cD._lightCount || (cD.lV = ID, cD._listVersion = pD, cD._lightCount = CD.lights.length, mD(cD._scratch, CD.lights), DD._applyLightFoOffset?.(cD._scratch, CD), DD._device.queue.writeBuffer(cD._buffer, 0, cD._scratch)), cD._buffer
              }(CD, ID));
              (function(DD, CD, cD, ID) {
                if (!ID) return;
                const pD = ID.viewport,
                  iD = DD._config.rt,
                  fD = (DD._config.cs ? CD.canvas.width / CD.canvas.height : iD._width / iD._height) * (pD ? pD.width / pD.height : 1),
                  bD = cD.fog,
                  QD = cD.imageProcessing,
                  SD = wD(ID),
                  BD = cD._envTextures,
                  yD = DD._sceneUboCacheKey;
                if (yD[0] === ID && yD[1] === bD && yD[2] === SD && yD[3] === fD && yD[4] === QD.exposure && yD[5] === QD.contrast && yD[6] === BD) return;
                yD[0] = ID, yD[1] = bD, yD[2] = SD, yD[3] = fD, yD[4] = QD.exposure, yD[5] = QD.contrast, yD[6] = BD;
                const MD = DD._suData;
                PD(MD, CD, cD, ID, fD);
                const tD = cD._sceneUboContributors;
                if (tD)
                  for (const wD of tD) wD(MD, cD);
                CD._device.queue.writeBuffer(DD._sceneUBO, 0, MD)
              })(DD, CD, ID, iD), pD.FY = iD, DD._batchState?._reset(), VD(DD._opaqueBindings, pD), VD(DD._directBindings, pD), VD(DD._transparentBindings, pD), DD._batchState?._flush(CD),
                function(DD, CD) {
                  const cD = DD._transparentBindings;
                  if (cD.length <= 1 || !CD) return;
                  const ID = bD(CD);
                  for (const pD of cD) {
                    const DD = pD.renderable._worldCenter;
                    pD._sortDistance = DD ? DD[0] * ID[2] + DD[1] * ID[6] + DD[2] * ID[10] + ID[14] : 0
                  }
                  cD.sort(xD)
                }(DD, iD)
            }(DD, CD, cD);
            const pD = DD._colorAttachment,
              iD = DD._config;
            iD.rt._colorView && (iD.rt === ID.surface.scRT && (pD.view = iD.rt._colorView), pD.resolveTarget = iD.rst?._colorView ?? void 0, pD.clearValue = iD.clrColor ?? ID.clearColor, pD.loadOp = iD.clr ? "clear" : "load");
            if (DD._executeWithTransmission) return DD._executeWithTransmission(cD._sampleCount);
            const fD = CD._currentEncoder.beginRenderPass(DD._renderPassDescriptor),
              QD = KD(DD, fD);
            return fD.end(), QD
          }(BD, CD, QD),
          dispose() {
            if (BD._disposed) return;
            BD._disposed = !0;
            const CD = BD._pendingMeshes;
            CD && (CD.length = 0);
            for (const DD of BD._renderables) BD._retireRenderable?.(BD.engine, DD);
            BD._passes.length = BD._opaqueBindings.length = BD._directBindings.length = 0, BD._transparentBindings.length = BD._renderables.length = BD._ob.length = 0, BD._ownsTargets && ((0, ID.i)(DD.rt), (0, ID.i)(DD.rst)), DD.depth?._eager || (0, ID.i)(DD.depth);
            const cD = BD._sceneUBO;
            (0, MD.e)(BD.engine, (() => cD.destroy())), BD._batchState?._release(BD.engine), BD._batchState = void 0
          }
        };
      return BD
    }

    function xD(DD, CD) {
      return CD._sortDistance - DD._sortDistance || DD.renderable.order - CD.renderable.order
    }

    function qD(DD, CD) {
      return DD.renderable.order - CD.renderable.order
    }

    function JD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DD._renderables,
        cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        iD = arguments.length > 4 ? arguments[4] : void 0;
      const fD = DD._config,
        bD = fD.rt,
        QD = DD._batchState,
        wD = HD(CD, DD.wo._renderableVersion);
      if (cD) {
        const CD = (CD, cD) => {
          CD && (cD || DD._ownsTargets || CD._eager) && (0, ID.h)(CD, DD.engine)
        };
        CD(bD), bD._descriptor.samples > 1 && CD(fD.rst), CD(fD.depth, !0)
      }
      const {
        _opaqueBindings: SD,
        _directBindings: BD,
        _transparentBindings: yD
      } = wD;
      try {
        for (const cD of CD) {
          const CD = cD.bind(DD.engine, DD._targetSignature);
          wD._batchState = DD._targetSignature._collectBatches?.(wD._batchState, CD), cD.isTransparent || cD._transmissive ? yD.push(CD) : cD._direct ? BD.push(CD) : SD.push(CD)
        }
        SD.sort(qD), BD.sort(qD), cD && aD(DD, DD.engine, !1)
      } catch (MD) {
        throw wD._batchState?._release(void 0, iD ?? [QD]), MD
      }
      return cD && (! function(DD, CD) {
        const cD = DD._config,
          ID = DD._colorAttachment;
        ID.view = CD._colorView, DD._renderPassDescriptor.colorAttachments = CD._colorView ? [ID] : [];
        const pD = cD.depth ?? CD,
          iD = pD._depthView;
        let fD;
        if (iD) {
          const DD = pD._descriptor,
            CD = (cD.depth ? pD._eager : !1 === cD.depthClear) ? "load" : "clear";
          fD = {
            view: iD,
            depthClearValue: DD.depthClearValue ?? 0,
            depthLoadOp: CD,
            depthStoreOp: "store"
          }, DD.dFormat?.includes("stencil") && (fD.stencilClearValue = 0, fD.stencilLoadOp = CD, fD.stencilStoreOp = "store")
        }
        DD._renderPassDescriptor.depthStencilAttachment = fD
      }(DD, bD), DD._updateContext.targetWidth = bD._width, DD._updateContext.targetHeight = bD._height), pD && (Object.assign(DD, wD), QD?._release(DD.engine, [wD._batchState])), wD
    }

    function KD(DD, CD) {
      const cD = DD.engine,
        ID = DD._config,
        iD = ID.rt,
        fD = DD.wo,
        bD = DD._opaqueBindings,
        QD = DD._ob,
        wD = DD._sceneBG;
      if (function(DD, CD, cD, ID) {
          const pD = CD?.viewport;
          if (!pD) return;
          const iD = Math.floor(pD.x * cD),
            fD = Math.floor((1 - pD.y - pD.height) * ID),
            bD = Math.ceil((pD.x + pD.width) * cD) - iD,
            QD = Math.ceil((1 - pD.y) * ID) - fD;
          DD.setViewport(iD, fD, bD, QD, 0, 1), DD.setScissorRect(iD, fD, bD, QD)
        }(CD, ID.cam ?? fD.camera, iD._width, iD._height), CD.setBindGroup(0, wD), DD._lastVis !== pD.d || !QD.length) {
        const CD = iD._descriptor,
          ID = cD._device.createRenderBundleEncoder({
            colorFormats: CD.format ? [CD.format] : [],
            depthStencilFormat: DD._targetSignature._depthStencilFormat,
            sampleCount: CD.samples
          });
        ID.setBindGroup(0, wD), zD(ID, bD, cD), QD[0] = ID.finish(), DD._lastVis = pD.d
      }
      let SD = bD.length;
      return CD.executeBundles(QD), CD.setBindGroup(0, wD), SD += zD(CD, DD._directBindings, cD), SD += zD(CD, DD._transparentBindings, cD), SD
    }

    function aD(DD, CD) {
      let cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const ID = nD(CD, DD.wo)._buffer;
      if (ID === DD._lightsUBO) return;
      const pD = CD._device.createBindGroup({
        layout: ZD(CD),
        entries: [{
          binding: 0,
          resource: {
            buffer: DD._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: ID
          }
        }]
      });
      DD._lightsUBO = ID, DD._sceneBG = pD, cD && (DD._ob = [])
    }

    function VD(DD, CD) {
      for (const cD of DD) cD.update?.(CD)
    }

    function zD(DD, CD, cD) {
      let ID = null,
        pD = 0;
      for (const iD of CD) {
        const CD = iD.renderable.mesh;
        CD && !1 === CD.visible || (iD.pipeline !== ID && (DD.setPipeline(iD.pipeline), ID = iD.pipeline), pD += iD.draw(DD, cD))
      }
      return pD
    }

    function jD(DD) {
      const CD = DD._materialSwapQueue;
      if (!CD[0] || DD._runtimeBuilds?.w) return;
      let ID, pD, iD;
      const fD = DD._renderables;
      for (const cD of CD) {
        const CD = cD.material;
        if (!CD) continue;
        const bD = cD._runtimeThinBuild;
        if (bD) {
          pD = bD(DD, cD, pD);
          continue
        }
        const QD = DD._groups.get(CD._buildGroup),
          wD = QD?.r;
        if (!wD) {
          (iD ??= []).push(cD);
          continue
        }
        if (QD._w?.(cD)) {
          (iD ??= []).push([cD, CD]);
          continue
        }
        const SD = DD._meshDisposables.get(cD);
        SD && (DD._meshDisposables.delete(cD), (0, MD.e)(DD.surface.engine, (() => SD.forEach((DD => DD())))));
        const BD = QD.o;
        let yD;
        for (let DD = fD.length; DD--;) fD[DD].mesh === cD && (yD = fD.splice(DD, 1)[0]);
        CD._csmGen = -~CD._csmGen;
        const tD = wD(DD, cD);
        if (BD) {
          const DD = BD.indexOf(yD);
          DD < 0 ? BD.push(tD) : BD[DD] = tD
        }
        ID = fD.push(tD)
      }
      if (ID && (fD.sort(((DD, CD) => DD.order - CD.order)), DD._renderableVersion++, DD._materialEpoch++), CD.length = 0, !iD) return pD;
      const bD = iD;
      return cD.e(355).then((() => cD(60508))).then((CD => {
        let {
          C: cD
        } = CD;
        return cD(DD, bD, pD)
      }), (CD => {
        const cD = DD._runtimeBuilds;
        cD ? cD._x(CD) : console.error(CD)
      }))
    }
    var lD = null;

    function LD(DD, CD) {
      const cD = DD.engine,
        pD = {
          _kind: "wo",
          surface: DD,
          clearColor: {
            r: .2,
            g: .2,
            b: .3,
            a: 1
          },
          camera: null,
          lights: [],
          meshes: [],
          animationGroups: [],
          fog: null,
          clipPlane: null,
          shadowGenerators: [],
          imageProcessing: {
            exposure: 1,
            contrast: 1,
            toneMappingEnabled: !1
          },
          _renderables: [],
          _prePasses: [],
          _pickSources: [],
          _uniformUpdaters: [],
          fixedDeltaMs: 0,
          _beforeRender: [],
          _deferredBuilders: [],
          _groups: new Map,
          _disposables: [],
          _meshDisposables: new Map,
          _materialSwapQueue: [],
          _renderableVersion: 0,
          _materialEpoch: 0,
          _built: !1,
          _drawCallsPre: 0,
          _update() {
            cD.useFloatingOrigin && pD.camera && !pD.camera._useFloatingOrigin && (pD.camera._useFloatingOrigin = !0, pD.camera._viewVer = -1, pD.camera._vpVer = -1);
            const DD = pD.fixedDeltaMs > 0 ? pD.fixedDeltaMs : cD._currentDelta,
              CD = cD._currentEncoder;
            let ID = 0;
            for (const cD of pD._beforeRender) cD(DD);
            pD._materialSwapQueue.length && jD(pD);
            for (const iD of pD._prePasses) ID += iD.execute(CD, cD);
            for (const iD of pD._uniformUpdaters) iD.update(cD);
            pD._drawCallsPre = ID
          },
          _record: () => pD._frameGraph.execute(),
          _resize() {
            pD._frameGraph.build()
          }
        },
        fD = function() {
          const DD = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let CD = 0; CD < DD._tasks.length; CD++) iD(DD, DD._tasks[CD]);
              for (const CD of DD._tasks)
                for (const DD of CD._passes) DD._initialize()
            },
            execute() {
              let CD = 0;
              for (const cD of DD._tasks)
                if (!1 !== cD.executionEnabled)
                  if (cD.execute) CD += cD.execute();
                  else
                    for (const DD of cD._passes) CD += DD._execute();
              return CD
            },
            dispose() {
              for (const CD of DD._tasks) CD.dispose();
              DD._tasks.length = 0, DD._currentProcessedTask = null
            }
          };
          return DD
        }();
      if (pD._frameGraph = fD, !1 !== CD?.defaultRenderTask) {
        const CD = DD.msaaSamples > 1,
          iD = CD ? (0, ID.e)({
            lbl: "scene-color",
            format: DD.format,
            dFormat: "depth24plus-stencil8",
            samples: DD.msaaSamples,
            size: DD
          }) : DD.scRT,
          bD = CD ? void 0 : (0, ID.e)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: DD
          });
        ! function(DD, CD) {
          DD._tasks.push(CD)
        }(fD, UD({
          name: "wo",
          rt: iD,
          rst: CD ? DD.scRT : void 0,
          depth: bD
        }, cD, pD))
      }
      return pD._disposables.push((() => fD.dispose())), pD
    }
    async function TD(DD) {
      const CD = DD;
      for (CD._built || (CD._materialSwapQueue.length = 0); CD._deferredBuilders.length;) {
        const DD = CD._deferredBuilders.splice(0);
        await Promise.all(DD.map((DD => DD())))
      }
      await jD(CD), lD?.get(CD)?.() || (CD._runtimeBuilds?._e(), CD._renderableVersion++, CD._built = !0), await (CD._rebuildHook?.(CD))
    }
    var GD = null;
    async function RD(DD) {
      const CD = DD,
        ID = CD.surface;
      (0, pD.k)(ID, CD) || (await TD(DD), CD._renderables.sort(kD), await Promise.all(CD._frameGraph._tasks.map((DD => DD._preload?.()))), GD && await GD(CD), CD._frameGraph.build(), ID._renderingContexts[0] && (await cD.e(353).then((() => cD(60498)))).configureSwapchainOverlayScene(ID, CD), lD?.get(CD)?.() || (0, pD.o)(ID, CD))
    }
    var kD = (DD, CD) => DD.order - CD.order
  },
  40788: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => wD,
      g: () => SD
    });
    var ID = cD(40737),
      pD = cD(40745),
      iD = cD(40753),
      fD = cD(40755),
      bD = cD(40764),
      QD = cD(40767);

    function wD(DD, CD, cD) {
      let bD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (CD < 1 || cD < 1) && (0, ID.d)(676, CD, cD);
      const wD = DD._device,
        SD = bD.mipMaps ?? !1,
        BD = bD.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        yD = SD ? (0, QD.d)(CD, cD) : 1,
        MD = wD.createTexture({
          size: {
            width: CD,
            height: cD
          },
          format: BD,
          mipLevelCount: yD,
          usage: pD.i.TEXTURE_BINDING | pD.i.COPY_DST | pD.i.RENDER_ATTACHMENT
        }),
        tD = {
          addressModeU: bD.addressModeU ?? "clamp-to-edge",
          addressModeV: bD.addressModeV ?? "clamp-to-edge",
          minFilter: bD.minFilter ?? "linear",
          magFilter: bD.magFilter ?? "linear",
          mipmapFilter: SD ? "linear" : "nearest"
        },
        ZD = (0, fD.c)(DD, tD),
        oD = {
          texture: MD,
          view: MD.createView(),
          sampler: ZD,
          width: CD,
          height: cD
        };
      return (0, iD.e)(oD), DD._dlr && DD._dlr.t(oD, {
        kind: "dynamic",
        width: CD,
        height: cD,
        format: BD,
        levels: yD,
        samplerDesc: tD,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), oD
    }

    function SD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const pD = ID.invertY ?? !0,
        iD = ID.premultiplyAlpha ?? !1;
      DD._device.queue.copyExternalImageToTexture({
        source: cD,
        flipY: pD
      }, {
        texture: CD.texture,
        premultipliedAlpha: iD
      }, [CD.width, CD.height]);
      const fD = CD._recoverySource;
      fD && "dynamic" === fD.kind && (fD.source = cD, fD.flipY = pD, fD.premultipliedAlpha = iD), CD.texture.mipLevelCount > 1 && (0, bD.generateMipmaps)(DD, CD.texture)
    }
  },
  40779: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => QD
    });
    var ID = cD(40737),
      pD = cD(40745),
      iD = cD(40753),
      fD = cD(40755),
      bD = cD(40767);
    async function QD(DD, CD) {
      let QD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [wD, SD] = function(DD) {
        const CD = DD,
          cD = [
            [CD.displayWidth, CD.displayHeight],
            [CD.videoWidth, CD.videoHeight],
            [CD.naturalWidth, CD.naturalHeight],
            [CD.width, CD.height]
          ];
        for (const [ID, pD] of cD)
          if (void 0 !== ID && void 0 !== pD && Number.isInteger(ID) && Number.isInteger(pD) && ID > 0 && pD > 0) return [ID, pD];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(CD), [BD, yD] = function(DD, CD, cD) {
        if (void 0 === cD) return [DD, CD];
        if (!Number.isInteger(cD) || cD < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${cD})`);
        if (Math.max(DD, CD) <= cD) return [DD, CD];
        const ID = cD / Math.max(DD, CD);
        return DD >= CD ? [cD, Math.max(1, Math.round(CD * ID))] : [Math.max(1, Math.round(DD * ID)), cD]
      }(wD, SD, QD.maxDimension), MD = QD.mipMaps ?? !0, tD = QD.premultiplyAlpha ?? !1;
      let ZD = CD,
        oD = null;
      const vD = {
        texture: null
      };
      try {
        BD === wD && yD === SD || (oD = await createImageBitmap(CD, {
          resizeWidth: BD,
          resizeHeight: yD,
          resizeQuality: "high",
          premultiplyAlpha: tD ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), ZD = oD);
        const ND = DD._device,
          gD = QD.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          XD = MD ? (0, bD.d)(BD, yD) : 1,
          mD = XD > 1 ? (await Promise.resolve().then((() => cD(40764)))).generateMipmaps : null,
          nD = {
            addressModeU: QD.addressModeU ?? "repeat",
            addressModeV: QD.addressModeV ?? "repeat",
            minFilter: QD.minFilter ?? "linear",
            magFilter: QD.magFilter ?? "linear",
            mipmapFilter: MD ? "linear" : "nearest"
          };
        nD.maxAnisotropy = "linear" === nD.minFilter && "linear" === nD.magFilter && "linear" === nD.mipmapFilter ? 4 : 1;
        const OD = QD.invertY ?? !0,
          PD = async CD => {
            let cD;
            ND.pushErrorScope("validation"), ND.pushErrorScope("out-of-memory");
            let iD = null;
            try {
              const cD = vD.texture = ND.createTexture({
                size: {
                  width: BD,
                  height: yD
                },
                format: gD,
                mipLevelCount: XD,
                usage: pD.i.TEXTURE_BINDING | pD.i.COPY_DST | pD.i.RENDER_ATTACHMENT
              });
              ND.queue.copyExternalImageToTexture({
                source: CD,
                flipY: OD
              }, {
                texture: cD,
                premultipliedAlpha: tD
              }, {
                width: BD,
                height: yD
              }), mD && mD(DD, cD), iD = (0, fD.c)(DD, nD)
            } catch (MD) {
              cD = MD
            }
            const [bD, QD] = await Promise.all([ND.popErrorScope(), ND.popErrorScope()]);
            if (cD) throw cD;
            const wD = QD ?? bD;
            if (wD) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${wD.message}`, {
              cause: wD
            });
            const SD = vD.texture;
            return SD && iD || (0, ID.d)(677), {
              texture: SD,
              view: SD.createView(),
              sampler: iD,
              width: BD,
              height: yD
            }
          }, HD = await (DD._dlr?.x(ZD, BD, yD, gD, XD, nD, OD, tD, PD)) ?? await PD(ZD);
        return (0, iD.e)(HD), HD
      } catch (ND) {
        throw vD.texture?.destroy(), ND
      } finally {
        oD?.close()
      }
    }
  },
  40764: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      generateMipmaps: () => MD,
      recordMipmaps: () => tD
    });
    var ID = cD(40745),
      pD = cD(40755),
      iD = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var fD = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      bD = null,
      QD = null,
      wD = null,
      SD = null,
      BD = null;

    function yD(DD) {
      const CD = DD._device;
      CD !== BD && (bD?.clear(), bD = null, QD = null, wD = null, SD = null, BD = null, BD = CD), QD ??= CD.createShaderModule({
        code: fD
      }), wD ??= function(DD) {
        return (0, pD.c)(DD, iD)
      }(DD), SD ??= CD.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: ID.h.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: ID.h.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function MD(DD, CD, cD) {
      const ID = DD._device,
        pD = ID.createCommandEncoder();
      tD(DD, CD, pD, cD), ID.queue.submit([pD.finish()])
    }

    function tD(DD, CD, cD, ID) {
      if (CD.mipLevelCount <= 1) return;
      const pD = DD._device,
        iD = function(DD, CD) {
          const cD = DD._device;
          yD(DD), bD ??= new Map;
          let ID = bD.get(CD);
          return ID || (ID = cD.createRenderPipeline({
            layout: cD.createPipelineLayout({
              bindGroupLayouts: [SD]
            }),
            vertex: {
              module: QD,
              entryPoint: "vs"
            },
            fragment: {
              module: QD,
              entryPoint: "fs",
              targets: [{
                format: CD
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), bD.set(CD, ID)), ID
        }(DD, CD.format),
        fD = null != ID ? {
          dimension: "2d",
          baseArrayLayer: ID,
          arrayLayerCount: 1
        } : {};
      for (let bD = 1; bD < CD.mipLevelCount; bD++) {
        const DD = CD.createView({
            baseMipLevel: bD - 1,
            mipLevelCount: 1,
            ...fD
          }),
          ID = CD.createView({
            baseMipLevel: bD,
            mipLevelCount: 1,
            ...fD
          }),
          QD = pD.createBindGroup({
            layout: SD,
            entries: [{
              binding: 0,
              resource: DD
            }, {
              binding: 1,
              resource: wD
            }]
          }),
          BD = cD.beginRenderPass({
            colorAttachments: [{
              view: ID,
              loadOp: "clear",
              storeOp: "store",
              clearValue: {
                r: 0,
                g: 0,
                b: 0,
                a: 0
              }
            }]
          });
        BD.setPipeline(iD), BD.setBindGroup(0, QD), BD.draw(3), BD.end()
      }
    }
  },
  40767: (DD, CD, cD) => {
    function ID(DD, CD) {
      return Math.floor(Math.log2(Math.max(DD, CD))) + 1
    }
    cD.d(CD, {
      d: () => ID
    })
  },
  40730: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => wD,
      g: () => SD
    });
    var ID = cD(40737),
      pD = cD(40745),
      iD = cD(40753),
      fD = cD(40755),
      bD = cD(40764),
      QD = cD(40767);

    function wD(DD, CD, cD, bD) {
      let wD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (CD < 1 || cD < 1 || bD < 1) && (0, ID.d)(722, CD, cD, bD);
      const SD = DD._device,
        BD = wD.mipMaps ?? !0,
        yD = wD.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        MD = SD.createTexture({
          size: {
            width: CD,
            height: cD,
            depthOrArrayLayers: bD
          },
          dimension: "2d",
          format: yD,
          mipLevelCount: BD ? (0, QD.d)(CD, cD) : 1,
          usage: pD.i.TEXTURE_BINDING | pD.i.COPY_DST | pD.i.RENDER_ATTACHMENT
        }),
        tD = (0, fD.c)(DD, {
          addressModeU: wD.addressModeU ?? "repeat",
          addressModeV: wD.addressModeV ?? "repeat",
          minFilter: wD.minFilter ?? "linear",
          magFilter: wD.magFilter ?? "linear",
          mipmapFilter: BD ? "linear" : "nearest"
        }),
        ZD = {
          texture: MD,
          view: MD.createView({
            dimension: "2d-array"
          }),
          sampler: tD,
          width: CD,
          height: cD,
          layers: bD
        };
      return (0, iD.e)(ZD), ZD
    }

    function SD(DD, CD, cD, pD) {
      let iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (cD < 0 || cD >= CD.layers || (0 | cD) !== cD) && (0, ID.d)(723, CD.layers, cD);
      const fD = iD.invertY ?? !0,
        QD = iD.premultiplyAlpha ?? !1;
      DD._device.queue.copyExternalImageToTexture({
        source: pD,
        flipY: fD
      }, {
        texture: CD.texture,
        origin: [0, 0, cD],
        premultipliedAlpha: QD
      }, [CD.width, CD.height, 1]), CD.texture.mipLevelCount > 1 && (0, bD.generateMipmaps)(DD, CD.texture, cD)
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);