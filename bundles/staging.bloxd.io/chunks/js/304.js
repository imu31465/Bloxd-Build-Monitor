export const id = 304;
export const ids = [304];
export const modules = {
  41514: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => NC,
      i: () => PC,
      j: () => MC,
      n: () => gC,
      q: () => RC,
      s: () => GC
    });
    var QC = ZC(41459);
    var wC = "Babylon Lite v1.32.0",
      bC = ZC(41519);

    function nC(CC) {
      return "clientWidth" in CC
    }
    var fC = 1;

    function oC(CC, zC, ZC) {
      const oC = zC.getContext("webgpu");
      oC || (0, QC.b)(54), nC(zC) && zC.setAttribute("data-engine", wC);
      const qC = ZC?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        FC = ZC?.srgb ? (WC = qC).endsWith("-srgb") ? WC : `${WC}-srgb` : qC;
      var WC;
      const NC = ZC?.alphaMode ?? "opaque";
      oC.configure({
        device: CC._device,
        format: qC,
        alphaMode: NC,
        viewFormats: [FC]
      });
      const MC = 1 === ZC?.msaaSamples ? 1 : 4,
        gC = (0, bC.e)({
          lbl: "swapchain",
          format: FC,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return gC._eager = !0, {
        engine: CC,
        canvas: zC,
        format: FC,
        msaaSamples: MC,
        scRT: gC,
        maxDevicePixelRatio: ZC?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: fC++,
        _context: oC,
        _configureFormat: qC,
        _alphaMode: NC,
        _renderingContexts: []
      }
    }

    function qC(CC) {
      const zC = CC._context.getCurrentTexture(),
        ZC = CC.scRT;
      ZC._colorTexture = zC, ZC._colorView = zC.createView({
        format: CC.format
      }), ZC._width = zC.width, ZC._height = zC.height
    }

    function FC(CC) {
      const zC = CC.canvas;
      if (!nC(zC)) return;
      const ZC = CC._w ?? zC.clientWidth,
        QC = CC._h ?? zC.clientHeight;
      if (!(ZC > 0 && QC > 0)) return;
      const wC = Math.min(globalThis.devicePixelRatio || 1, CC.maxDevicePixelRatio);
      WC(CC, ZC * wC | 0, QC * wC | 0)
    }

    function WC(CC, zC, ZC) {
      const QC = CC.canvas,
        wC = 0 | zC,
        bC = 0 | ZC;
      if (wC > 0 && bC > 0 && (wC !== QC.width || bC !== QC.height)) {
        QC.width = wC, QC.height = bC, CC.scRT._width = wC, CC.scRT._height = bC;
        for (const zC of CC._renderingContexts) zC._resize?.()
      }
    }
    var NC = 0;

    function MC(CC, zC) {
      return -1 !== CC._renderingContexts.indexOf(zC)
    }

    function gC(CC, zC) {
      return -1 === CC._renderingContexts.indexOf(zC) && (CC._renderingContexts.push(zC), !0)
    }
    var SC = null;
    var pC = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function PC(CC, zC) {
      const bC = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...SC ? SC() : {}
      });
      bC || (0, QC.b)(47);
      const nC = SC?.deviceFeatures?.(bC, zC) ?? function(CC) {
          return pC.filter((zC => CC.features.has(zC)))
        }(bC),
        fC = await bC.requestDevice({
          requiredFeatures: nC,
          requiredLimits: zC?.requiredLimits
        });
      console.log(`${wC} - WebGPU engine`);
      const WC = !!zC?.useHighPrecisionMatrix,
        NC = !!zC?.useFloatingOrigin;
      if (NC && !WC && (0, QC.b)(48), WC) {
        const {
          allocateF64Mat4: CC
        } = await ZC.e(357).then((() => ZC(61010)));
        0
      }
      let MC, gC, PC, GC;
      if (NC) {
        const [{
          wrapRenderableForFO: CC,
          lightFoVersion: zC,
          applyLightFoOffset: QC
        }, {
          makePackMeshWorld: wC
        }] = await Promise.all([ZC.e(358).then((() => ZC(61016))), ZC.e(359).then((() => ZC(61019)))]);
        MC = CC, gC = wC, PC = zC, GC = QC
      }
      const RC = {
          _device: fC
        },
        AC = [RC];
      return Object.assign(RC, {
        engine: RC,
        surfaces: AC,
        _surfaces: AC,
        _device: fC,
        _options: zC,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: WC,
        useFloatingOrigin: NC,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: MC,
        _makePackMeshWorld: gC,
        _lightFoVersion: PC,
        _applyLightFoOffset: GC
      }, oC(RC, CC, zC)), FC(RC), qC(RC), RC
    }

    function GC(CC, zC, ZC) {
      WC(CC, zC, ZC)
    }

    function RC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CC.surfaces;
      if (ZC !== CC.surfaces)
        for (let wC = ZC.length; wC--;) ZC[wC].engine !== CC && (0, QC.b)(49);
      AC(CC, zC, ZC)
    }

    function AC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : CC._surfaces,
        QC = 0;
      for (let bC = ZC.length; bC--;) QC += ZC[bC]._renderingContexts.length;
      if (!QC) return CC.drawCallCount = 0, CC._flushGpuRetirements?.(CC);
      const wC = CC._device.createCommandEncoder({
        label: "frame"
      });
      CC._currentEncoder = wC, CC._currentDelta = zC;
      try {
        CC._gpuTimerBegin?.(wC), QC = 0;
        for (let CC = 0; CC < ZC.length; CC++) {
          const zC = ZC[CC];
          zC._capturePreFrame?.(zC), qC(zC);
          const wC = zC._renderingContexts;
          for (let CC = 0; CC < wC.length; CC++) {
            const zC = wC[CC];
            zC._update(), QC += zC._drawCallsPre + zC._record()
          }
        }
        const zC = CC._currentEncoder;
        for (let CC = 0; CC < ZC.length; CC++) {
          const QC = ZC[CC];
          QC._captureService?.(QC, zC)
        }
        CC._gpuTimerEnd?.(zC), CC._cbs[0] = zC.finish(), CC._device.queue.submit(CC._cbs), CC._flushGpuRetirements?.(CC), CC.drawCallCount = QC, CC._gpuTimerResolve?.()
      } finally {
        CC._currentEncoder = void 0
      }
    }
  },
  41462: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => wC,
      g: () => bC,
      k: () => QC
    });
    var QC = globalThis.GPUTextureUsage,
      wC = globalThis.GPUBufferUsage,
      bC = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41540: (CC, zC, ZC) => {
    function QC(CC) {
      wC(CC.splice(0))
    }

    function wC(CC) {
      for (const ZC of CC) try {
        ZC()
      } catch (zC) {
        console.error("GPU resource retirement failed.", zC)
      }
    }

    function bC(CC, zC) {
      CC._flushGpuRetirements ??= nC, (CC._retirements ??= []).push(zC)
    }

    function nC(CC) {
      const zC = CC._retirements;
      if (!zC) return;
      CC._retirements = null;
      const ZC = CC._retiring ??= new Set;
      ZC.add(zC), queueMicrotask((() => {
        CC._device.queue.onSubmittedWorkDone().then((() => {
          ZC.delete(zC), QC(zC)
        })).catch((() => {}))
      }))
    }
    ZC.d(zC, {
      b: () => bC
    })
  },
  41519: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC,
      g: () => nC,
      h: () => fC
    });
    var QC = ZC(41462);

    function wC(CC) {
      const zC = CC.size;
      return "canvas" in zC ? zC.canvas : zC
    }

    function bC(CC) {
      return {
        _descriptor: CC,
        _resolveSize: wC,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function nC(CC, zC) {
      if (CC._eager) return void CC._syncEager?.(zC);
      fC(CC);
      const ZC = CC._descriptor,
        {
          width: bC,
          height: nC
        } = (CC._resolveSize ?? wC)(ZC);
      CC._width = bC, CC._height = nC;
      const oC = zC._device;
      ZC.format && (CC._colorTexture = oC.createTexture({
        label: ZC.lbl,
        size: {
          width: bC,
          height: nC
        },
        format: ZC.format,
        sampleCount: ZC.samples,
        usage: QC.k.RENDER_ATTACHMENT | QC.k.TEXTURE_BINDING | QC.k.COPY_SRC | QC.k.COPY_DST
      }), CC._colorView = CC._colorTexture.createView()), ZC.dFormat && (CC._depthTexture = oC.createTexture({
        label: ZC.lbl,
        size: {
          width: bC,
          height: nC
        },
        format: ZC.dFormat,
        sampleCount: ZC.samples,
        usage: QC.k.RENDER_ATTACHMENT | QC.k.TEXTURE_BINDING
      }), CC._depthView = CC._depthTexture.createView())
    }

    function fC(CC) {
      if (!CC || CC._eager && !CC._disposeAttachments) return;
      const zC = CC._colorTexture,
        ZC = CC._depthTexture;
      if (CC._colorTexture = CC._depthTexture = null, CC._colorView = CC._depthView = null, CC._width = CC._height = 0, CC._disposeAttachments) CC._disposeAttachments(zC, ZC);
      else try {
        zC?.destroy()
      } finally {
        !1 !== CC._ownsDepthTexture && ZC?.destroy()
      }
    }
  },
  41532: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC,
      g: () => wC,
      k: () => bC
    });
    var QC = Float32Array,
      wC = Float64Array,
      bC = Uint32Array
  },
  41543: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC
    });
    var QC = 16
  },
  41459: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC
    });
    var QC = null;

    function wC(CC) {
      for (var zC = arguments.length, ZC = new Array(zC > 1 ? zC - 1 : 0), wC = 1; wC < zC; wC++) ZC[wC - 1] = arguments[wC];
      const bC = new Error(QC?.(CC, ZC) ?? `#${CC}`);
      throw bC.lite = ZC, bC
    }
  },
  41494: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC
    });
    var QC = ZC(41476);

    function wC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const ZC = zC.compare,
        wC = zC.lodMinClamp ?? 0,
        bC = zC.lodMaxClamp ?? 32,
        nC = void 0 !== ZC || 0 !== wC || 32 !== bC ? `${ZC??""}:${wC}:${bC}` : "";
      return (0, QC.b)(CC, zC, nC)
    }
  },
  41470: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC
    });
    var QC = null;

    function wC(CC) {
      const zC = QC ??= new WeakMap;
      zC.set(CC, (zC.get(CC) ?? 0) + 1)
    }

    function bC(CC) {
      wC(CC.texture)
    }
  },
  41476: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => fC
    });
    var QC = null,
      wC = "nearest",
      bC = "clamp-to-edge",
      nC = {
        minFilter: wC,
        magFilter: wC,
        mipmapFilter: wC,
        addressModeU: bC,
        addressModeV: bC,
        addressModeW: bC,
        maxAnisotropy: 1
      };

    function fC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const wC = CC._device,
        bC = QC ??= new WeakMap;
      let fC = bC.get(wC);
      fC || bC.set(wC, fC = new Map);
      let oC = ZC;
      for (const QC in nC) {
        const CC = QC;
        oC += `:${zC[CC]??nC[CC]}`
      }
      let qC = fC.get(oC);
      return qC || fC.set(oC, qC = wC.createSampler(zC)), qC
    }
  },
  41525: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => cC,
      d: () => sC
    });
    var QC = ZC(41519),
      wC = ZC(41514);

    function bC(CC, zC) {
      zC._passes.length = 0, CC._currentProcessedTask = zC;
      try {
        zC.record()
      } finally {
        CC._currentProcessedTask = null
      }
    }
    var nC = ZC(41532);

    function fC(CC) {
      const zC = CC.worldMatrixVersion;
      if (CC._viewVer === zC) return CC._viewCache;
      const ZC = CC._viewCache,
        QC = CC.worldMatrix,
        wC = CC._useFloatingOrigin,
        bC = wC ? 0 : QC[12],
        nC = wC ? 0 : QC[13],
        fC = wC ? 0 : QC[14];
      return ZC[0] = QC[0], ZC[1] = QC[4], ZC[2] = QC[8], ZC[3] = 0, ZC[4] = QC[1], ZC[5] = QC[5], ZC[6] = QC[9], ZC[7] = 0, ZC[8] = QC[2], ZC[9] = QC[6], ZC[10] = QC[10], ZC[11] = 0, ZC[12] = -(QC[0] * bC + QC[1] * nC + QC[2] * fC), ZC[13] = -(QC[4] * bC + QC[5] * nC + QC[6] * fC), ZC[14] = -(QC[8] * bC + QC[9] * nC + QC[10] * fC), ZC[15] = 1, CC._viewVer = zC, ZC
    }
    var oC = null;

    function qC(CC) {
      return CC._projFov === CC.fov && CC._projNear === CC.nearPlane && CC._projFar === CC.farPlane || (CC._projFov = CC.fov, CC._projNear = CC.nearPlane, CC._projFar = CC.farPlane, CC._projRev = (CC._projRev ?? 0) + 1), CC.worldMatrixVersion + (CC._projRev ?? 0)
    }

    function FC(CC, zC) {
      const ZC = qC(CC);
      if (CC._projVer === ZC && CC._projAspect === zC) return CC._projCache;
      const QC = CC._projCache;
      return null !== oC && CC.ortho ? oC(CC, zC, QC) : function(CC, zC, ZC, QC, wC) {
        const bC = 1 / Math.tan(.5 * zC),
          nC = wC - QC;
        CC[0] = bC / ZC, CC[5] = bC, CC[10] = -QC / nC, CC[11] = 1, CC[14] = wC * QC / nC
      }(QC, CC.fov, zC, CC.nearPlane, CC.farPlane), CC._projVer = ZC, CC._projAspect = zC, QC
    }
    var WC = ZC(41462);

    function NC(CC, zC, ZC) {
      return CC._device.createBuffer({
        label: ZC,
        size: (QC = zC, wC = 16, Math.ceil(QC / wC) * wC),
        usage: WC.e.UNIFORM | WC.e.COPY_DST
      });
      var QC, wC
    }
    var MC = ZC(41540),
      gC = null;

    function SC(CC) {
      const zC = CC._device,
        ZC = gC ??= new WeakMap;
      let QC = ZC.get(zC);
      return QC || (QC = zC.createBindGroupLayout({
        label: "sS",
        entries: [{
          binding: 0,
          visibility: WC.g.VERTEX | WC.g.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: WC.g.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), ZC.set(zC, QC)), QC
    }

    function pC(CC, zC, ZC) {
      const QC = CC._device,
        wC = NC(CC, zC.byteLength, ZC);
      try {
        QC.queue.writeBuffer(wC, 0, zC.buffer, zC.byteOffset, zC.byteLength)
      } catch (bC) {
        throw wC.destroy(), bC
      }
      return wC
    }
    var PC = ZC(41543),
      GC = new nC.k(1),
      RC = new nC.c(GC.buffer);

    function AC(CC) {
      let zC = 0;
      for (const ZC of CC) zC += ZC._lightVersion ?? 0;
      return zC
    }

    function xC(CC, zC) {
      CC.fill(0);
      let ZC = 0;
      for (const QC of zC) {
        if (ZC >= PC.b) break;
        QC._writeLightUbo && (QC._writeLightUbo(CC, 4 + 16 * ZC), ZC++)
      }
      GC[0] = ZC, CC[0] = RC[0]
    }

    function JC(CC, zC) {
      let ZC = zC._lightGpuState;
      const QC = 16 + 16 * PC.b * 4;
      if (ZC && ZC._byteSize === QC) return ZC;
      const wC = !ZC;
      ZC?._buffer.destroy();
      const bC = new nC.c(QC / 4);
      return xC(bC, zC.lights), CC._applyLightFoOffset?.(bC, zC), ZC = {
        _buffer: pC(CC, bC),
        _scratch: bC,
        Gs: AC(zC.lights) + (CC._lightFoVersion?.(zC) ?? 0),
        _listVersion: zC._lightListVersion ?? 0,
        _lightCount: zC.lights.length,
        _byteSize: QC
      }, zC._lightGpuState = ZC, wC && zC._disposables.push((() => {
        zC._lightGpuState?._buffer.destroy(), zC._lightGpuState = void 0
      })), ZC
    }

    function IC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const wC = zC;
      if (0 === QC && 16 === wC.length) return void CC.set(wC, ZC);
      const bC = QC,
        nC = ZC;
      CC[nC + 0] = wC[bC + 0], CC[nC + 1] = wC[bC + 1], CC[nC + 2] = wC[bC + 2], CC[nC + 3] = wC[bC + 3], CC[nC + 4] = wC[bC + 4], CC[nC + 5] = wC[bC + 5], CC[nC + 6] = wC[bC + 6], CC[nC + 7] = wC[bC + 7], CC[nC + 8] = wC[bC + 8], CC[nC + 9] = wC[bC + 9], CC[nC + 10] = wC[bC + 10], CC[nC + 11] = wC[bC + 11], CC[nC + 12] = wC[bC + 12], CC[nC + 13] = wC[bC + 13], CC[nC + 14] = wC[bC + 14], CC[nC + 15] = wC[bC + 15]
    }

    function iC(CC, zC, ZC, QC, wC) {
      CC.fill(0);
      const bC = function(CC, zC) {
          const ZC = qC(CC);
          if (CC._vpVer === ZC && CC._vpAspect === zC) return CC._vpCache;
          const QC = CC._vpCache;
          return function(CC, zC, ZC, QC, wC, bC) {
            const nC = ZC[QC],
              fC = ZC[QC + 1],
              oC = ZC[QC + 2],
              qC = ZC[QC + 3],
              FC = ZC[QC + 4],
              WC = ZC[QC + 5],
              NC = ZC[QC + 6],
              MC = ZC[QC + 7],
              gC = ZC[QC + 8],
              SC = ZC[QC + 9],
              pC = ZC[QC + 10],
              PC = ZC[QC + 11],
              GC = ZC[QC + 12],
              RC = ZC[QC + 13],
              AC = ZC[QC + 14],
              xC = ZC[QC + 15];
            let JC = wC[bC],
              IC = wC[bC + 1],
              iC = wC[bC + 2],
              vC = wC[bC + 3];
            CC[zC] = nC * JC + FC * IC + gC * iC + GC * vC, CC[zC + 1] = fC * JC + WC * IC + SC * iC + RC * vC, CC[zC + 2] = oC * JC + NC * IC + pC * iC + AC * vC, CC[zC + 3] = qC * JC + MC * IC + PC * iC + xC * vC, JC = wC[bC + 4], IC = wC[bC + 5], iC = wC[bC + 6], vC = wC[bC + 7], CC[zC + 4] = nC * JC + FC * IC + gC * iC + GC * vC, CC[zC + 5] = fC * JC + WC * IC + SC * iC + RC * vC, CC[zC + 6] = oC * JC + NC * IC + pC * iC + AC * vC, CC[zC + 7] = qC * JC + MC * IC + PC * iC + xC * vC, JC = wC[bC + 8], IC = wC[bC + 9], iC = wC[bC + 10], vC = wC[bC + 11], CC[zC + 8] = nC * JC + FC * IC + gC * iC + GC * vC, CC[zC + 9] = fC * JC + WC * IC + SC * iC + RC * vC, CC[zC + 10] = oC * JC + NC * IC + pC * iC + AC * vC, CC[zC + 11] = qC * JC + MC * IC + PC * iC + xC * vC, JC = wC[bC + 12], IC = wC[bC + 13], iC = wC[bC + 14], vC = wC[bC + 15], CC[zC + 12] = nC * JC + FC * IC + gC * iC + GC * vC, CC[zC + 13] = fC * JC + WC * IC + SC * iC + RC * vC, CC[zC + 14] = oC * JC + NC * IC + pC * iC + AC * vC, CC[zC + 15] = qC * JC + MC * IC + PC * iC + xC * vC
          }(QC, 0, FC(CC, zC), 0, fC(CC), 0), CC._vpVer = ZC, CC._vpAspect = zC, QC
        }(QC, wC),
        nC = fC(QC),
        oC = QC.worldMatrix;
      IC(CC, bC, 0), IC(CC, nC, 16), zC.useFloatingOrigin ? (CC[32] = 0, CC[33] = 0, CC[34] = 0) : (CC[32] = oC[12], CC[33] = oC[13], CC[34] = oC[14]), CC[87] = zC.canvas.width;
      const WC = ZC.imageProcessing;
      CC[76] = WC.exposure, CC[77] = WC.contrast, CC[78] = ZC._envTextures?.lodGenerationScale ?? .8, CC[79] = +WC.toneMappingEnabled, CC[37] = zC.canvas.height
    }

    function vC(CC, zC) {
      return {
        _renderables: CC,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: zC
      }
    }

    function eC(CC, zC, ZC) {
      CC.clr ??= !0;
      const wC = CC.rt._descriptor,
        bC = CC.depth?._descriptor,
        oC = {
          _colorFormat: wC.format,
          _depthStencilFormat: bC?.dFormat ?? wC.dFormat,
          _depthCompare: wC.depthCompare ?? bC?.depthCompare,
          _sampleCount: wC.samples
        },
        FC = {
          loadOp: "clear",
          storeOp: "store"
        },
        WC = {
          ...vC([], -1),
          name: CC.name,
          _config: CC,
          _ownsTargets: !CC.sharedRt,
          engine: zC,
          sS: ZC,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [FC]
          },
          _colorAttachment: FC,
          _sceneUBO: NC(zC, 368),
          _suData: new nC.c(92),
          _sceneUboCacheKey: [],
          _targetSignature: oC,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (WC._disposed) throw new Error("RenderTask has been disposed.");
            WC._recordExplicit ? WC._recordExplicit(WC, !0) : YC(WC, !1 !== CC.autoMirror ? ZC._renderables.slice() : WC._renderables, !0)
          },
          execute: () => function(CC, zC, ZC) {
            if (!1 === CC.enabled) return 0;
            const QC = CC.sS;
            ! function(CC, zC, ZC) {
              const QC = CC.sS;
              !1 !== CC._config.autoMirror && CC._lastVersion !== QC._renderableVersion && YC(CC, QC._renderables.slice());
              mC(CC, zC);
              const wC = CC._updateContext,
                bC = CC._config.cam ?? QC.camera;
              ZC._colorFormat && (CC._config._skipClusteredLights || QC._clusteredLightUpdater?.(bC, wC.targetWidth, wC.targetHeight), function(CC, zC) {
                const ZC = JC(CC, zC),
                  QC = AC(zC.lights) + (CC._lightFoVersion?.(zC) ?? 0),
                  wC = zC._lightListVersion ?? 0;
                QC === ZC.Gs && wC === ZC._listVersion && zC.lights.length === ZC._lightCount || (ZC.Gs = QC, ZC._listVersion = wC, ZC._lightCount = zC.lights.length, xC(ZC._scratch, zC.lights), CC._applyLightFoOffset?.(ZC._scratch, zC), CC._device.queue.writeBuffer(ZC._buffer, 0, ZC._scratch)), ZC._buffer
              }(zC, QC));
              (function(CC, zC, ZC, QC) {
                if (!QC) return;
                const wC = QC.viewport,
                  bC = CC._config.rt,
                  nC = (CC._config.cs ? zC.canvas.width / zC.canvas.height : bC._width / bC._height) * (wC ? wC.width / wC.height : 1),
                  fC = ZC.fog,
                  oC = ZC.imageProcessing,
                  FC = qC(QC),
                  WC = ZC._envTextures,
                  NC = CC._sceneUboCacheKey;
                if (NC[0] === QC && NC[1] === fC && NC[2] === FC && NC[3] === nC && NC[4] === oC.exposure && NC[5] === oC.contrast && NC[6] === WC) return;
                NC[0] = QC, NC[1] = fC, NC[2] = FC, NC[3] = nC, NC[4] = oC.exposure, NC[5] = oC.contrast, NC[6] = WC;
                const MC = CC._suData;
                iC(MC, zC, ZC, QC, nC);
                const gC = ZC._sceneUboContributors;
                if (gC)
                  for (const qC of gC) qC(MC, ZC);
                zC._device.queue.writeBuffer(CC._sceneUBO, 0, MC)
              })(CC, zC, QC, bC), wC.zV = bC, CC._batchState?._reset(), HC(CC._opaqueBindings, wC), HC(CC._directBindings, wC), HC(CC._transparentBindings, wC), CC._batchState?._flush(zC),
                function(CC, zC) {
                  const ZC = CC._transparentBindings;
                  if (ZC.length <= 1 || !zC) return;
                  const QC = fC(zC);
                  for (const wC of ZC) {
                    const CC = wC.renderable._worldCenter;
                    wC._sortDistance = CC ? CC[0] * QC[2] + CC[1] * QC[6] + CC[2] * QC[10] + QC[14] : 0
                  }
                  ZC.sort(hC)
                }(CC, bC)
            }(CC, zC, ZC);
            const wC = CC._colorAttachment,
              bC = CC._config;
            bC.rt._colorView && (bC.rt === QC.surface.scRT && (wC.view = bC.rt._colorView), wC.resolveTarget = bC.rst?._colorView ?? void 0, wC.clearValue = bC.clrColor ?? QC.clearColor, wC.loadOp = bC.clr ? "clear" : "load");
            if (CC._executeWithTransmission) return CC._executeWithTransmission(ZC._sampleCount);
            const nC = zC._currentEncoder.beginRenderPass(CC._renderPassDescriptor),
              oC = dC(CC, nC);
            return nC.end(), oC
          }(WC, zC, oC),
          dispose() {
            if (WC._disposed) return;
            WC._disposed = !0;
            const zC = WC._pendingMeshes;
            zC && (zC.length = 0);
            for (const CC of WC._renderables) WC._retireRenderable?.(WC.engine, CC);
            WC._passes.length = WC._opaqueBindings.length = WC._directBindings.length = 0, WC._transparentBindings.length = WC._renderables.length = WC._ob.length = 0, WC._ownsTargets && ((0, QC.h)(CC.rt), (0, QC.h)(CC.rst)), CC.depth?._eager || (0, QC.h)(CC.depth);
            const ZC = WC._sceneUBO;
            (0, MC.b)(WC.engine, (() => ZC.destroy())), WC._batchState?._release(WC.engine), WC._batchState = void 0
          }
        };
      return WC
    }

    function hC(CC, zC) {
      return zC._sortDistance - CC._sortDistance || CC.renderable.order - zC.renderable.order
    }

    function KC(CC, zC) {
      return CC.renderable.order - zC.renderable.order
    }

    function YC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CC._renderables,
        ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        wC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        bC = arguments.length > 4 ? arguments[4] : void 0;
      const nC = CC._config,
        fC = nC.rt,
        oC = CC._batchState,
        qC = vC(zC, CC.sS._renderableVersion);
      if (ZC) {
        const zC = (zC, ZC) => {
          zC && (ZC || CC._ownsTargets || zC._eager) && (0, QC.g)(zC, CC.engine)
        };
        zC(fC), fC._descriptor.samples > 1 && zC(nC.rst), zC(nC.depth, !0)
      }
      const {
        _opaqueBindings: FC,
        _directBindings: WC,
        _transparentBindings: NC
      } = qC;
      try {
        for (const ZC of zC) {
          const zC = ZC.bind(CC.engine, CC._targetSignature);
          qC._batchState = CC._targetSignature._collectBatches?.(qC._batchState, zC), ZC.isTransparent || ZC._transmissive ? NC.push(zC) : ZC._direct ? WC.push(zC) : FC.push(zC)
        }
        FC.sort(KC), WC.sort(KC), ZC && mC(CC, CC.engine, !1)
      } catch (MC) {
        throw qC._batchState?._release(void 0, bC ?? [oC]), MC
      }
      return ZC && (! function(CC, zC) {
        const ZC = CC._config,
          QC = CC._colorAttachment;
        QC.view = zC._colorView, CC._renderPassDescriptor.colorAttachments = zC._colorView ? [QC] : [];
        const wC = ZC.depth ?? zC,
          bC = wC._depthView;
        let nC;
        if (bC) {
          const CC = wC._descriptor,
            zC = (ZC.depth ? wC._eager : !1 === ZC.depthClear) ? "load" : "clear";
          nC = {
            view: bC,
            depthClearValue: CC.depthClearValue ?? 0,
            depthLoadOp: zC,
            depthStoreOp: "store"
          }, CC.dFormat?.includes("stencil") && (nC.stencilClearValue = 0, nC.stencilLoadOp = zC, nC.stencilStoreOp = "store")
        }
        CC._renderPassDescriptor.depthStencilAttachment = nC
      }(CC, fC), CC._updateContext.targetWidth = fC._width, CC._updateContext.targetHeight = fC._height), wC && (Object.assign(CC, qC), oC?._release(CC.engine, [qC._batchState])), qC
    }

    function dC(CC, zC) {
      const ZC = CC.engine,
        QC = CC._config,
        bC = QC.rt,
        nC = CC.sS,
        fC = CC._opaqueBindings,
        oC = CC._ob,
        qC = CC._sceneBG;
      if (function(CC, zC, ZC, QC) {
          const wC = zC?.viewport;
          if (!wC) return;
          const bC = Math.floor(wC.x * ZC),
            nC = Math.floor((1 - wC.y - wC.height) * QC),
            fC = Math.ceil((wC.x + wC.width) * ZC) - bC,
            oC = Math.ceil((1 - wC.y) * QC) - nC;
          CC.setViewport(bC, nC, fC, oC, 0, 1), CC.setScissorRect(bC, nC, fC, oC)
        }(zC, QC.cam ?? nC.camera, bC._width, bC._height), zC.setBindGroup(0, qC), CC._lastVis !== wC.e || !oC.length) {
        const zC = bC._descriptor,
          QC = ZC._device.createRenderBundleEncoder({
            colorFormats: zC.format ? [zC.format] : [],
            depthStencilFormat: CC._targetSignature._depthStencilFormat,
            sampleCount: zC.samples
          });
        QC.setBindGroup(0, qC), EC(QC, fC, ZC), oC[0] = QC.finish(), CC._lastVis = wC.e
      }
      let FC = fC.length;
      return zC.executeBundles(oC), zC.setBindGroup(0, qC), FC += EC(zC, CC._directBindings, ZC), FC += EC(zC, CC._transparentBindings, ZC), FC
    }

    function mC(CC, zC) {
      let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const QC = JC(zC, CC.sS)._buffer;
      if (QC === CC._lightsUBO) return;
      const wC = zC._device.createBindGroup({
        layout: SC(zC),
        entries: [{
          binding: 0,
          resource: {
            buffer: CC._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: QC
          }
        }]
      });
      CC._lightsUBO = QC, CC._sceneBG = wC, ZC && (CC._ob = [])
    }

    function HC(CC, zC) {
      for (const ZC of CC) ZC.update?.(zC)
    }

    function EC(CC, zC, ZC) {
      let QC = null,
        wC = 0;
      for (const bC of zC) {
        const zC = bC.renderable.mesh;
        zC && !1 === zC.visible || (bC.pipeline !== QC && (CC.setPipeline(bC.pipeline), QC = bC.pipeline), wC += bC.draw(CC, ZC))
      }
      return wC
    }

    function lC(CC) {
      const zC = CC._materialSwapQueue;
      if (!zC[0] || CC._runtimeBuilds?.w) return;
      let QC, wC, bC;
      const nC = CC._renderables;
      for (const ZC of zC) {
        const zC = ZC.material;
        if (!zC) continue;
        const fC = ZC._runtimeThinBuild;
        if (fC) {
          wC = fC(CC, ZC, wC);
          continue
        }
        const oC = CC._groups.get(zC._buildGroup),
          qC = oC?.r;
        if (!qC) {
          (bC ??= []).push(ZC);
          continue
        }
        if (oC._w?.(ZC)) {
          (bC ??= []).push([ZC, zC]);
          continue
        }
        const FC = CC._meshDisposables.get(ZC);
        FC && (CC._meshDisposables.delete(ZC), (0, MC.b)(CC.surface.engine, (() => FC.forEach((CC => CC())))));
        const WC = oC.o;
        let NC;
        for (let CC = nC.length; CC--;) nC[CC].mesh === ZC && (NC = nC.splice(CC, 1)[0]);
        zC._csmGen = -~zC._csmGen;
        const gC = qC(CC, ZC);
        if (WC) {
          const CC = WC.indexOf(NC);
          CC < 0 ? WC.push(gC) : WC[CC] = gC
        }
        QC = nC.push(gC)
      }
      if (QC && (nC.sort(((CC, zC) => CC.order - zC.order)), CC._renderableVersion++, CC._materialEpoch++), zC.length = 0, !bC) return wC;
      const fC = bC;
      return ZC.e(363).then((() => ZC(61035))).then((zC => {
        let {
          C: ZC
        } = zC;
        return ZC(CC, fC, wC)
      }), (zC => {
        const ZC = CC._runtimeBuilds;
        ZC ? ZC._x(zC) : console.error(zC)
      }))
    }
    var XC = null;

    function cC(CC, zC) {
      const ZC = CC.engine,
        wC = {
          _kind: "sS",
          surface: CC,
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
            ZC.useFloatingOrigin && wC.camera && !wC.camera._useFloatingOrigin && (wC.camera._useFloatingOrigin = !0, wC.camera._viewVer = -1, wC.camera._vpVer = -1);
            const CC = wC.fixedDeltaMs > 0 ? wC.fixedDeltaMs : ZC._currentDelta,
              zC = ZC._currentEncoder;
            let QC = 0;
            for (const ZC of wC._beforeRender) ZC(CC);
            wC._materialSwapQueue.length && lC(wC);
            for (const bC of wC._prePasses) QC += bC.execute(zC, ZC);
            for (const bC of wC._uniformUpdaters) bC.update(ZC);
            wC._drawCallsPre = QC
          },
          _record: () => wC._frameGraph.execute(),
          _resize() {
            wC._frameGraph.build()
          }
        },
        nC = function() {
          const CC = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let zC = 0; zC < CC._tasks.length; zC++) bC(CC, CC._tasks[zC]);
              for (const zC of CC._tasks)
                for (const CC of zC._passes) CC._initialize()
            },
            execute() {
              let zC = 0;
              for (const ZC of CC._tasks)
                if (!1 !== ZC.executionEnabled)
                  if (ZC.execute) zC += ZC.execute();
                  else
                    for (const CC of ZC._passes) zC += CC._execute();
              return zC
            },
            dispose() {
              for (const zC of CC._tasks) zC.dispose();
              CC._tasks.length = 0, CC._currentProcessedTask = null
            }
          };
          return CC
        }();
      if (wC._frameGraph = nC, !1 !== zC?.defaultRenderTask) {
        const zC = CC.msaaSamples > 1,
          bC = zC ? (0, QC.e)({
            lbl: "scene-color",
            format: CC.format,
            dFormat: "depth24plus-stencil8",
            samples: CC.msaaSamples,
            size: CC
          }) : CC.scRT,
          fC = zC ? void 0 : (0, QC.e)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: CC
          });
        ! function(CC, zC) {
          CC._tasks.push(zC)
        }(nC, eC({
          name: "sS",
          rt: bC,
          rst: zC ? CC.scRT : void 0,
          depth: fC
        }, ZC, wC))
      }
      return wC._disposables.push((() => nC.dispose())), wC
    }
    async function uC(CC) {
      const zC = CC;
      for (zC._built || (zC._materialSwapQueue.length = 0); zC._deferredBuilders.length;) {
        const CC = zC._deferredBuilders.splice(0);
        await Promise.all(CC.map((CC => CC())))
      }
      await lC(zC), XC?.get(zC)?.() || (zC._runtimeBuilds?._e(), zC._renderableVersion++, zC._built = !0), await (zC._rebuildHook?.(zC))
    }
    var rC = null;
    async function sC(CC) {
      const zC = CC,
        QC = zC.surface;
      (0, wC.j)(QC, zC) || (await uC(CC), zC._renderables.sort(TC), await Promise.all(zC._frameGraph._tasks.map((CC => CC._preload?.()))), rC && await rC(zC), zC._frameGraph.build(), QC._renderingContexts[0] && (await ZC.e(361).then((() => ZC(61027)))).configureSwapchainOverlayScene(QC, zC), XC?.get(zC)?.() || (0, wC.n)(QC, zC))
    }
    var TC = (CC, zC) => CC.order - zC.order
  },
  41507: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => qC,
      g: () => FC
    });
    var QC = ZC(41459),
      wC = ZC(41462),
      bC = ZC(41470),
      nC = ZC(41476),
      fC = ZC(41479),
      oC = ZC(41487);

    function qC(CC, zC, ZC) {
      let fC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (zC < 1 || ZC < 1) && (0, QC.b)(676, zC, ZC);
      const qC = CC._device,
        FC = fC.mipMaps ?? !1,
        WC = fC.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        NC = FC ? (0, oC.e)(zC, ZC) : 1,
        MC = qC.createTexture({
          size: {
            width: zC,
            height: ZC
          },
          format: WC,
          mipLevelCount: NC,
          usage: wC.k.TEXTURE_BINDING | wC.k.COPY_DST | wC.k.RENDER_ATTACHMENT
        }),
        gC = {
          addressModeU: fC.addressModeU ?? "clamp-to-edge",
          addressModeV: fC.addressModeV ?? "clamp-to-edge",
          minFilter: fC.minFilter ?? "linear",
          magFilter: fC.magFilter ?? "linear",
          mipmapFilter: FC ? "linear" : "nearest"
        },
        SC = (0, nC.b)(CC, gC),
        pC = {
          texture: MC,
          view: MC.createView(),
          sampler: SC,
          width: zC,
          height: ZC
        };
      return (0, bC.d)(pC), CC._dlr && CC._dlr.t(pC, {
        kind: "dynamic",
        width: zC,
        height: ZC,
        format: WC,
        levels: NC,
        samplerDesc: gC,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), pC
    }

    function FC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const wC = QC.invertY ?? !0,
        bC = QC.premultiplyAlpha ?? !1;
      CC._device.queue.copyExternalImageToTexture({
        source: ZC,
        flipY: wC
      }, {
        texture: zC.texture,
        premultipliedAlpha: bC
      }, [zC.width, zC.height]);
      const nC = zC._recoverySource;
      nC && "dynamic" === nC.kind && (nC.source = ZC, nC.flipY = wC, nC.premultipliedAlpha = bC), zC.texture.mipLevelCount > 1 && (0, fC.generateMipmaps)(CC, zC.texture)
    }
  },
  41498: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => oC
    });
    var QC = ZC(41459),
      wC = ZC(41462),
      bC = ZC(41470),
      nC = ZC(41476),
      fC = ZC(41487);
    async function oC(CC, zC) {
      let oC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [qC, FC] = function(CC) {
        const zC = CC,
          ZC = [
            [zC.displayWidth, zC.displayHeight],
            [zC.videoWidth, zC.videoHeight],
            [zC.naturalWidth, zC.naturalHeight],
            [zC.width, zC.height]
          ];
        for (const [QC, wC] of ZC)
          if (void 0 !== QC && void 0 !== wC && Number.isInteger(QC) && Number.isInteger(wC) && QC > 0 && wC > 0) return [QC, wC];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(zC), [WC, NC] = function(CC, zC, ZC) {
        if (void 0 === ZC) return [CC, zC];
        if (!Number.isInteger(ZC) || ZC < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${ZC})`);
        if (Math.max(CC, zC) <= ZC) return [CC, zC];
        const QC = ZC / Math.max(CC, zC);
        return CC >= zC ? [ZC, Math.max(1, Math.round(zC * QC))] : [Math.max(1, Math.round(CC * QC)), ZC]
      }(qC, FC, oC.maxDimension), MC = oC.mipMaps ?? !0, gC = oC.premultiplyAlpha ?? !1;
      let SC = zC,
        pC = null;
      const PC = {
        texture: null
      };
      try {
        WC === qC && NC === FC || (pC = await createImageBitmap(zC, {
          resizeWidth: WC,
          resizeHeight: NC,
          resizeQuality: "high",
          premultiplyAlpha: gC ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), SC = pC);
        const GC = CC._device,
          RC = oC.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          AC = MC ? (0, fC.e)(WC, NC) : 1,
          xC = AC > 1 ? (await Promise.resolve().then((() => ZC(41479)))).generateMipmaps : null,
          JC = {
            addressModeU: oC.addressModeU ?? "repeat",
            addressModeV: oC.addressModeV ?? "repeat",
            minFilter: oC.minFilter ?? "linear",
            magFilter: oC.magFilter ?? "linear",
            mipmapFilter: MC ? "linear" : "nearest"
          };
        JC.maxAnisotropy = "linear" === JC.minFilter && "linear" === JC.magFilter && "linear" === JC.mipmapFilter ? 4 : 1;
        const IC = oC.invertY ?? !0,
          iC = async zC => {
            let ZC;
            GC.pushErrorScope("validation"), GC.pushErrorScope("out-of-memory");
            let bC = null;
            try {
              const ZC = PC.texture = GC.createTexture({
                size: {
                  width: WC,
                  height: NC
                },
                format: RC,
                mipLevelCount: AC,
                usage: wC.k.TEXTURE_BINDING | wC.k.COPY_DST | wC.k.RENDER_ATTACHMENT
              });
              GC.queue.copyExternalImageToTexture({
                source: zC,
                flipY: IC
              }, {
                texture: ZC,
                premultipliedAlpha: gC
              }, {
                width: WC,
                height: NC
              }), xC && xC(CC, ZC), bC = (0, nC.b)(CC, JC)
            } catch (MC) {
              ZC = MC
            }
            const [fC, oC] = await Promise.all([GC.popErrorScope(), GC.popErrorScope()]);
            if (ZC) throw ZC;
            const qC = oC ?? fC;
            if (qC) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${qC.message}`, {
              cause: qC
            });
            const FC = PC.texture;
            return FC && bC || (0, QC.b)(677), {
              texture: FC,
              view: FC.createView(),
              sampler: bC,
              width: WC,
              height: NC
            }
          }, vC = await (CC._dlr?.x(SC, WC, NC, RC, AC, JC, IC, gC, iC)) ?? await iC(SC);
        return (0, bC.d)(vC), vC
      } catch (GC) {
        throw PC.texture?.destroy(), GC
      } finally {
        pC?.close()
      }
    }
  },
  41479: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      generateMipmaps: () => MC,
      recordMipmaps: () => gC
    });
    var QC = ZC(41462),
      wC = ZC(41476),
      bC = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var nC = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      fC = null,
      oC = null,
      qC = null,
      FC = null,
      WC = null;

    function NC(CC) {
      const zC = CC._device;
      zC !== WC && (fC?.clear(), fC = null, oC = null, qC = null, FC = null, WC = null, WC = zC), oC ??= zC.createShaderModule({
        code: nC
      }), qC ??= function(CC) {
        return (0, wC.b)(CC, bC)
      }(CC), FC ??= zC.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: QC.g.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: QC.g.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function MC(CC, zC, ZC) {
      const QC = CC._device,
        wC = QC.createCommandEncoder();
      gC(CC, zC, wC, ZC), QC.queue.submit([wC.finish()])
    }

    function gC(CC, zC, ZC, QC) {
      if (zC.mipLevelCount <= 1) return;
      const wC = CC._device,
        bC = function(CC, zC) {
          const ZC = CC._device;
          NC(CC), fC ??= new Map;
          let QC = fC.get(zC);
          return QC || (QC = ZC.createRenderPipeline({
            layout: ZC.createPipelineLayout({
              bindGroupLayouts: [FC]
            }),
            vertex: {
              module: oC,
              entryPoint: "vs"
            },
            fragment: {
              module: oC,
              entryPoint: "fs",
              targets: [{
                format: zC
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), fC.set(zC, QC)), QC
        }(CC, zC.format),
        nC = null != QC ? {
          dimension: "2d",
          baseArrayLayer: QC,
          arrayLayerCount: 1
        } : {};
      for (let fC = 1; fC < zC.mipLevelCount; fC++) {
        const CC = zC.createView({
            baseMipLevel: fC - 1,
            mipLevelCount: 1,
            ...nC
          }),
          QC = zC.createView({
            baseMipLevel: fC,
            mipLevelCount: 1,
            ...nC
          }),
          oC = wC.createBindGroup({
            layout: FC,
            entries: [{
              binding: 0,
              resource: CC
            }, {
              binding: 1,
              resource: qC
            }]
          }),
          WC = ZC.beginRenderPass({
            colorAttachments: [{
              view: QC,
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
        WC.setPipeline(bC), WC.setBindGroup(0, oC), WC.draw(3), WC.end()
      }
    }
  },
  41487: (CC, zC, ZC) => {
    function QC(CC, zC) {
      return Math.floor(Math.log2(Math.max(CC, zC))) + 1
    }
    ZC.d(zC, {
      e: () => QC
    })
  },
  41457: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => qC,
      d: () => FC
    });
    var QC = ZC(41459),
      wC = ZC(41462),
      bC = ZC(41470),
      nC = ZC(41476),
      fC = ZC(41479),
      oC = ZC(41487);

    function qC(CC, zC, ZC, fC) {
      let qC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (zC < 1 || ZC < 1 || fC < 1) && (0, QC.b)(722, zC, ZC, fC);
      const FC = CC._device,
        WC = qC.mipMaps ?? !0,
        NC = qC.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        MC = FC.createTexture({
          size: {
            width: zC,
            height: ZC,
            depthOrArrayLayers: fC
          },
          dimension: "2d",
          format: NC,
          mipLevelCount: WC ? (0, oC.e)(zC, ZC) : 1,
          usage: wC.k.TEXTURE_BINDING | wC.k.COPY_DST | wC.k.RENDER_ATTACHMENT
        }),
        gC = (0, nC.b)(CC, {
          addressModeU: qC.addressModeU ?? "repeat",
          addressModeV: qC.addressModeV ?? "repeat",
          minFilter: qC.minFilter ?? "linear",
          magFilter: qC.magFilter ?? "linear",
          mipmapFilter: WC ? "linear" : "nearest"
        }),
        SC = {
          texture: MC,
          view: MC.createView({
            dimension: "2d-array"
          }),
          sampler: gC,
          width: zC,
          height: ZC,
          layers: fC
        };
      return (0, bC.d)(SC), SC
    }

    function FC(CC, zC, ZC, wC) {
      let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (ZC < 0 || ZC >= zC.layers || (0 | ZC) !== ZC) && (0, QC.b)(723, zC.layers, ZC);
      const nC = bC.invertY ?? !0,
        oC = bC.premultiplyAlpha ?? !1;
      CC._device.queue.copyExternalImageToTexture({
        source: wC,
        flipY: nC
      }, {
        texture: zC.texture,
        origin: [0, 0, ZC],
        premultipliedAlpha: oC
      }, [zC.width, zC.height, 1]), zC.texture.mipLevelCount > 1 && (0, fC.generateMipmaps)(CC, zC.texture, ZC)
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);