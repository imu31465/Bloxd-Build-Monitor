export const id = 256;
export const ids = [256];
export const modules = {
  40188: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => vB,
      f: () => gB,
      h: () => cB,
      i: () => kB
    });
    var TB = ZB(39984),
      JB = ZB(38718),
      oB = ZB(40129),
      GB = ZB(40025);
    class vB {
      get mC() {
        return this._isDisposed
      }
      constructor(BB, IB, ZB) {
        let JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          oB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          vB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          kB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          cB = arguments.length > 7 ? arguments[7] : void 0,
          nB = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, GB.c)(), BB && BB.JR ? this._engine = BB.JR().PN() : this._engine = BB, this._updatable = ZB, this._instanced = vB, this._divisor = cB || 1, this._label = nB, IB instanceof TB.d ? (this._data = null, this._buffer = IB) : (this._data = IB, this._buffer = null), this.byteStride = kB ? JB : JB * Float32Array.BYTES_PER_ELEMENT, oB || this.create()
      }
      createVertexBuffer(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          GB = arguments.length > 6 ? arguments[6] : void 0;
        const vB = oB ? IB : IB * Float32Array.BYTES_PER_ELEMENT,
          cB = TB ? oB ? TB : TB * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new kB(this._engine, this, BB, this._updatable, !0, cB, void 0 === JB ? this._instanced : JB, vB, ZB, void 0, void 0, !0, this._divisor || GB)
      }
      isUpdatable() {
        return this._updatable
      }
      getData() {
        return this._data
      }
      getBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / Float32Array.BYTES_PER_ELEMENT
      }
      create() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !BB && this._buffer || (BB = BB || this._data, BB && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, BB), this._data = BB) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(BB, this._label), this._data = BB) : this._buffer = this._engine.createVertexBuffer(BB, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.ah > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.ah, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.ah, void 0, this._label));
          JB.d.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(BB) {
        this.create(BB)
      }
      updateDirectly(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, BB, TB ? IB : IB * Float32Array.BYTES_PER_ELEMENT, ZB ? ZB * this.byteStride : void 0), this._data = 0 === IB && void 0 === ZB ? BB : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class kB {
      get mC() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(BB) {
        const IB = 0 != BB;
        this._instanceDivisor = BB, IB !== this._instanced && (this._instanced = IB, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const BB = this.getData();
        return BB ? Array.isArray(BB) ? BB.length / (this.byteStride / 4) - this.byteOffset / 4 : (BB.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(BB, IB, ZB, TB, JB, GB, hB, zB, FB, NB) {
        let gB, qB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          yB = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          UB = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          WB = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = BB, "object" === typeof TB && null !== TB ? (gB = TB.updatable ?? !1, JB = TB.postponeInternalCreation, GB = TB.stride, hB = TB.instanced, zB = TB.offset, FB = TB.size, NB = TB.type, qB = TB.normalized ?? !1, yB = TB.useBytes ?? !1, UB = TB.divisor ?? 1, WB = TB.takeBufferOwnership ?? !1, this._label = TB.label) : gB = !!TB, IB instanceof vB ? (this._buffer = IB, this._ownsBuffer = WB) : (this._buffer = new vB(BB, IB, gB, GB, JB, hB, yB, UB, this._label), this._ownsBuffer = !0), this.uniqueId = kB._Counter++, this._kind = ZB, void 0 === NB) {
          const BB = this.getData();
          this.type = BB ? nB(BB) : kB.FLOAT
        } else this.type = NB;
        const dB = (0, oB.q)(this.type);
        yB ? (this._size = FB || (GB ? GB / dB : cB(ZB)), this.byteStride = GB || this._buffer.byteStride || this._size * dB, this.byteOffset = zB || 0) : (this._size = FB || GB || cB(ZB), this.byteStride = GB ? GB * dB : this._buffer.byteStride || this._size * dB, this.byteOffset = (zB || 0) * dB), this.normalized = qB, this._instanced = void 0 !== hB && hB, this._instanceDivisor = hB ? UB : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(BB) {
        switch (BB) {
          case kB.BYTE:
            return 0;
          case kB.UNSIGNED_BYTE:
            return 1;
          case kB.SHORT:
            return 2;
          case kB.UNSIGNED_SHORT:
            return 3;
          case kB.INT:
            return 4;
          case kB.UNSIGNED_INT:
            return 5;
          case kB.FLOAT:
            return 6;
          case kB.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${BB}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (kB._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
      }
      _rebuild() {
        this._buffer?._rebuild()
      }
      getKind() {
        return this._kind
      }
      isUpdatable() {
        return this._buffer.isUpdatable()
      }
      getData() {
        return this._buffer.getData()
      }
      getFloatData(BB, IB) {
        const ZB = this.getData();
        return ZB ? (0, oB.p)(ZB, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, BB, IB) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, oB.q)(this.type)
      }
      PZB() {
        return this.byteOffset / (0, oB.q)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, oB.q)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(BB) {
        this._buffer.create(BB), this._alignBuffer()
      }
      update(BB) {
        this._buffer.update(BB), this._alignBuffer()
      }
      updateDirectly(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(BB, IB, void 0, ZB), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(BB, IB) {
        (0, oB.j)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, BB, this.normalized, ((BB, ZB) => {
          for (let TB = 0; TB < this._size; TB++) IB(BB[TB], ZB + TB)
        }))
      }
      _alignBuffer() {}
    }

    function cB(BB) {
      switch (BB) {
        case kB.UVKind:
        case kB.UV2Kind:
        case kB.UV3Kind:
        case kB.UV4Kind:
        case kB.UV5Kind:
        case kB.UV6Kind:
          return 2;
        case kB.NormalKind:
        case kB.PositionKind:
          return 3;
        case kB.ColorKind:
        case kB.ColorInstanceKind:
        case kB.MatricesIndicesKind:
        case kB.MatricesIndicesExtraKind:
        case kB.MatricesWeightsKind:
        case kB.MatricesWeightsExtraKind:
        case kB.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + BB + "'")
      }
    }

    function nB(BB) {
      return BB instanceof Int8Array ? kB.BYTE : BB instanceof Uint8Array ? kB.UNSIGNED_BYTE : BB instanceof Int16Array ? kB.SHORT : BB instanceof Uint16Array ? kB.UNSIGNED_SHORT : BB instanceof Int32Array ? kB.INT : BB instanceof Uint32Array ? kB.UNSIGNED_INT : kB.FLOAT
    }

    function hB(BB) {
      return (0, oB.q)(BB)
    }

    function zB(BB, IB, ZB, TB, JB, GB, vB, kB) {
      (0, oB.j)(BB, IB, ZB, TB, JB, GB, vB, ((BB, IB) => {
        for (let ZB = 0; ZB < TB; ZB++) kB(BB[ZB], IB + ZB)
      }))
    }

    function FB(BB, IB, ZB, TB, JB, GB, vB, kB) {
      return (0, oB.p)(BB, IB, ZB, TB, JB, GB, vB, kB)
    }
    kB._Counter = 0, kB.BYTE = 5120, kB.UNSIGNED_BYTE = 5121, kB.SHORT = 5122, kB.UNSIGNED_SHORT = 5123, kB.INT = 5124, kB.UNSIGNED_INT = 5125, kB.FLOAT = 5126, kB.HALF_FLOAT = 5131, kB.PositionKind = "position", kB.NormalKind = "normal", kB.TangentKind = "tangent", kB.UVKind = "uv", kB.UV2Kind = "uv2", kB.UV3Kind = "uv3", kB.UV4Kind = "uv4", kB.UV5Kind = "uv5", kB.UV6Kind = "uv6", kB.ColorKind = "color", kB.ColorInstanceKind = "instanceColor", kB.MatricesIndicesKind = "matricesIndices", kB.MatricesWeightsKind = "matricesWeights", kB.MatricesIndicesExtraKind = "matricesIndicesExtra", kB.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let NB = !1;

    function gB() {
      NB || (NB = !0, kB.DeduceStride = cB, kB.GetDataType = nB, kB.GetTypeByteLength = hB, kB.ForEach = zB, kB.GetFloatData = FB)
    }
  },
  39984: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB
    });
    class TB {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.ah = 0, this.is32Bits = !1, this.uniqueId = TB._Counter++
      }
    }
    TB._Counter = 0
  },
  40185: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB
    });
    var TB = ZB(37120),
      JB = ZB(40188);
    class oB {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || IB && !this.pickedMesh.isVerticesDataPresent(JB.i.NormalKind)) return null;
        let ZB, oB = this.pickedMesh.MTB();
        0 === oB?.length && (oB = null);
        const GB = TB.m.rN[0],
          vB = TB.m.rN[1],
          kB = TB.m.rN[2];
        if (IB) {
          const BB = this.pickedMesh.getVerticesData(JB.i.NormalKind);
          let IB = oB ? TB.s.FromArrayToRef(BB, 3 * oB[3 * this.faceId], GB) : GB.cBB(BB[3 * this.faceId * 3], BB[3 * this.faceId * 3 + 1], BB[3 * this.faceId * 3 + 2]),
            cB = oB ? TB.s.FromArrayToRef(BB, 3 * oB[3 * this.faceId + 1], vB) : vB.cBB(BB[3 * (3 * this.faceId + 1)], BB[3 * (3 * this.faceId + 1) + 1], BB[3 * (3 * this.faceId + 1) + 2]),
            nB = oB ? TB.s.FromArrayToRef(BB, 3 * oB[3 * this.faceId + 2], kB) : kB.cBB(BB[3 * (3 * this.faceId + 2)], BB[3 * (3 * this.faceId + 2) + 1], BB[3 * (3 * this.faceId + 2) + 2]);
          IB = IB.scale(this.bu), cB = cB.scale(this.bv), nB = nB.scale(1 - this.bu - this.bv), ZB = new TB.s(IB.x + cB.x + nB.x, IB.y + cB.y + nB.y, IB.z + cB.z + nB.z)
        } else {
          const BB = this.pickedMesh.getVerticesData(JB.i.PositionKind),
            IB = oB ? TB.s.FromArrayToRef(BB, 3 * oB[3 * this.faceId], GB) : GB.cBB(BB[3 * this.faceId * 3], BB[3 * this.faceId * 3 + 1], BB[3 * this.faceId * 3 + 2]),
            cB = oB ? TB.s.FromArrayToRef(BB, 3 * oB[3 * this.faceId + 1], vB) : vB.cBB(BB[3 * (3 * this.faceId + 1)], BB[3 * (3 * this.faceId + 1) + 1], BB[3 * (3 * this.faceId + 1) + 2]),
            nB = oB ? TB.s.FromArrayToRef(BB, 3 * oB[3 * this.faceId + 2], kB) : kB.cBB(BB[3 * (3 * this.faceId + 2)], BB[3 * (3 * this.faceId + 2) + 1], BB[3 * (3 * this.faceId + 2) + 2]),
            hB = IB.subtract(cB),
            zB = nB.subtract(cB);
          ZB = TB.s.Cross(hB, zB)
        }
        const cB = (BB, IB) => {
          if (-1 !== this.thinInstanceIndex) {
            const ZB = BB._thinInstanceDataStorage.matrixData,
              JB = this.thinInstanceIndex << 4;
            if (ZB && ZB.length > JB) {
              const BB = TB.m.Matrix[0];
              TB.b.FromArrayToRef(ZB, JB, BB), TB.s.TransformNormalToRef(IB, BB, IB)
            }
          }
          let ZB = BB.getWorldMatrix();
          BB.nonUniformScaling && (TB.m.Matrix[0].TY(ZB), ZB = TB.m.Matrix[0], ZB.setTranslationFromFloats(0, 0, 0), ZB.invert(), ZB.transposeToRef(TB.m.Matrix[1]), ZB = TB.m.Matrix[1]), TB.s.TransformNormalToRef(IB, ZB, IB)
        };
        if (BB && cB(this.pickedMesh, ZB), this.ray) {
          const IB = TB.m.rN[0].TY(ZB);
          BB || cB(this.pickedMesh, IB), TB.s.Dot(IB, this.ray.direction) > 0 && ZB.negateInPlace()
        }
        return ZB.normalize(), ZB
      }
      getTextureCoordinates() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JB.i.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(BB)) return null;
        const IB = this.pickedMesh.MTB();
        if (!IB) return null;
        const ZB = this.pickedMesh.getVerticesData(BB);
        if (!ZB) return null;
        let oB = TB.p.FromArray(ZB, 2 * IB[3 * this.faceId]),
          GB = TB.p.FromArray(ZB, 2 * IB[3 * this.faceId + 1]),
          vB = TB.p.FromArray(ZB, 2 * IB[3 * this.faceId + 2]);
        return oB = oB.scale(this.bu), GB = GB.scale(this.bv), vB = vB.scale(1 - this.bu - this.bv), new TB.p(oB.x + GB.x + vB.x, oB.y + GB.y + vB.y)
      }
    }
  },
  40025: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => oB
    });
    var TB = ZB(39895);
    let JB = !1;

    function oB() {
      JB || (JB = !0, TB.ThinEngine.prototype.updateDynamicIndexBuffer = function(BB, IB) {
        let ZB;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(BB), ZB = BB.is32Bits ? IB instanceof Uint32Array ? IB : new Uint32Array(IB) : IB instanceof Uint16Array ? IB : new Uint16Array(IB), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, ZB, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, TB.ThinEngine.prototype.updateDynamicVertexBuffer = function(BB, IB, ZB, TB) {
        this.bindArrayBuffer(BB), void 0 === ZB && (ZB = 0);
        const JB = IB.byteLength || IB.length;
        void 0 === TB || TB >= JB && 0 === ZB ? IB instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZB, new Float32Array(IB)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZB, IB) : IB instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZB, new Float32Array(IB).subarray(0, TB / 4)) : (IB = ArrayBuffer.isView(IB) ? new Uint8Array(IB.buffer, IB.byteOffset, TB) : new Uint8Array(IB, 0, TB), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZB, IB)), this._resetVertexBufferBinding()
      })
    }
  },
  39995: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB
    });
    class TB {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          IB = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = IB, !BB && (BB = IB.createTexture(), !BB)) throw new Error("Unable to create webGL texture");
        this.set(BB)
      }
      setUsage() {}
      set(BB) {
        this._webGLTexture = BB
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(BB) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(BB)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const BB of this._MSAARenderBuffers) this._context.deleteRenderbuffer(BB);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[BB] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  39951: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => UB
    });
    var TB = ZB(37153),
      JB = ZB(39902),
      oB = ZB(37147),
      GB = ZB(38718),
      vB = ZB(37138),
      kB = ZB(39959);
    class cB {
      constructor() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, BB && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(BB) {
        this._zOffset !== BB && (this._zOffset = BB, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(BB) {
        this._zOffsetUnits !== BB && (this._zOffsetUnits = BB, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(BB) {
        this._cullFace !== BB && (this._cullFace = BB, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(BB) {
        this._cull !== BB && (this._cull = BB, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(BB) {
        this._depthFunc !== BB && (this._depthFunc = BB, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(BB) {
        this._depthMask !== BB && (this._depthMask = BB, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(BB) {
        this._depthTest !== BB && (this._depthTest = BB, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(BB) {
        this._frontFace !== BB && (this._frontFace = BB, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(BB) {
        this.isDirty && (this._isCullDirty && (this.cull ? BB.enable(BB.CULL_FACE) : BB.disable(BB.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (BB.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (BB.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? BB.enable(BB.DEPTH_TEST) : BB.disable(BB.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (BB.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (BB.enable(BB.POLYGON_OFFSET_FILL), BB.polygonOffset(this.zOffset, this.zOffsetUnits)) : BB.disable(BB.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (BB.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class nB {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(BB) {
        this._func !== BB && (this._func = BB, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(BB) {
        this._backFunc !== BB && (this._backFunc = BB, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(BB) {
        this._funcRef !== BB && (this._funcRef = BB, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(BB) {
        this._funcMask !== BB && (this._funcMask = BB, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(BB) {
        this._opStencilFail !== BB && (this._opStencilFail = BB, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(BB) {
        this._opDepthFail !== BB && (this._opDepthFail = BB, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(BB) {
        this._opStencilDepthPass !== BB && (this._opStencilDepthPass = BB, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(BB) {
        this._backOpStencilFail !== BB && (this._backOpStencilFail = BB, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(BB) {
        this._backOpDepthFail !== BB && (this._backOpDepthFail = BB, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(BB) {
        this._backOpStencilDepthPass !== BB && (this._backOpStencilDepthPass = BB, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(BB) {
        this._mask !== BB && (this._mask = BB, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(BB) {
        this._enabled !== BB && (this._enabled = BB, this._isStencilTestDirty = !0)
      }
      constructor() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, BB && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(BB) {
        if (!BB) return;
        const IB = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = IB ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = IB ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = IB ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = IB ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = IB ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = IB ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = IB ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = IB ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = IB ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = IB ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = IB ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = IB ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? BB.enable(BB.STENCIL_TEST) : BB.disable(BB.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (BB.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (BB.stencilFuncSeparate(BB.FRONT, this.func, this.funcRef, this.funcMask), BB.stencilFuncSeparate(BB.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (BB.stencilOpSeparate(BB.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), BB.stencilOpSeparate(BB.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class hB {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = hB.ALWAYS, this.opStencilFail = hB.KEEP, this.opDepthFail = hB.KEEP, this.opStencilDepthPass = hB.REPLACE, this.backFunc = hB.ALWAYS, this.backOpStencilFail = hB.KEEP, this.backOpDepthFail = hB.KEEP, this.backOpStencilDepthPass = hB.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(BB) {
        this.func = BB
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(BB) {
        this.backFunc = BB
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(BB) {
        this.funcRef = BB
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(BB) {
        this.funcMask = BB
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(BB) {
        this.opStencilFail = BB
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(BB) {
        this.opDepthFail = BB
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(BB) {
        this.opStencilDepthPass = BB
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(BB) {
        this.backOpStencilFail = BB
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(BB) {
        this.backOpDepthFail = BB
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(BB) {
        this.backOpStencilDepthPass = BB
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(BB) {
        this.mask = BB
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(BB) {
        this.enabled = BB
      }
    }
    hB.ALWAYS = 519, hB.KEEP = 7680, hB.REPLACE = 7681;
    var zB = ZB(39967),
      FB = ZB(39931),
      NB = ZB(39885),
      gB = ZB(39912),
      qB = ZB(39926);

    function yB(BB, IB) {
      if (IB) {
        const {
          requestAnimationFrame: ZB
        } = IB;
        if ("function" === typeof ZB) return ZB(BB)
      }
      if ((0, gB.l)()) {
        const {
          requestAnimationFrame: ZB
        } = IB || window;
        if ("function" === typeof ZB) return ZB(BB)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(BB);
      return setTimeout(BB, 16)
    }
    class UB {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(BB) {
        return this._shaderProcessor
      }
      _resetAlphaMode() {
        this._alphaMode.fill(-1), this._alphaEquation.fill(-1)
      }
      get shaderPlatformName() {
        return this._shaderPlatformName
      }
      _clearEmptyResources() {
        this._emptyTexture = null, this._emptyCubeTexture = null, this._emptyTexture3D = null, this._emptyTexture2DArray = null
      }
      get iTB() {
        return this._useReverseDepthBuffer
      }
      set iTB(BB) {
        BB !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = BB, this._depthCullingState.depthFunc = BB ? 518 : 515)
      }
      setColorWrite(BB) {
        BB !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = BB)
      }
      getColorWrite() {
        return this._colorWrite
      }
      get depthCullingState() {
        return this._depthCullingState
      }
      get alphaState() {
        return this._alphaState
      }
      get stencilState() {
        return this._stencilState
      }
      get stencilStateComposer() {
        return this._stencilStateComposer
      }
      _getGlobalDefines(BB) {
        if (BB) return this.isNDCHalfZRange ? BB.IS_NDC_HALF_ZRANGE = "" : delete BB.IS_NDC_HALF_ZRANGE, this.iTB ? BB.USE_REVERSE_DEPTHBUFFER = "" : delete BB.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? BB.USE_EXACT_SRGB_CONVERSIONS = "" : delete BB.USE_EXACT_SRGB_CONVERSIONS);
        {
          let BB = "";
          return this.isNDCHalfZRange && (BB += "#define IS_NDC_HALF_ZRANGE"), this.iTB && (BB && (BB += "\n"), BB += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (BB && (BB += "\n"), BB += "#define USE_EXACT_SRGB_CONVERSIONS"), BB
        }
      }
      _rebuildInternalTextures() {
        const BB = this._internalTexturesCache.slice();
        for (const IB of BB) IB._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const BB = this._renderTargetWrapperCache.slice();
        for (const IB of BB) IB.textures?.some((BB => 15 === BB.source)) || IB._rebuild()
      }
      _rebuildEffects() {
        for (const BB in this._compiledEffects) {
          const IB = this._compiledEffects[BB];
          IB._pipelineContext = null, IB._prepareEffect()
        }
        JB.d.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        GB.d.Warn(this.name + " context successfully restored."), this.jN.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(BB) {
        setTimeout((() => {
          this._clearEmptyResources();
          const IB = this._depthCullingState.depthTest,
            ZB = this._depthCullingState.depthFunc,
            TB = this._depthCullingState.depthMask,
            JB = this._stencilState.stencilTest;
          BB(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = IB, this._depthCullingState.depthFunc = ZB, this._depthCullingState.depthMask = TB, this._stencilState.stencilTest = JB, this._flagContextRestored()
        }), 0)
      }
      get mC() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(BB) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(BB) {}
      getClassName() {
        return "AbstractEngine"
      }
      get emptyTexture() {
        return this._emptyTexture || (this._emptyTexture = this.createRawTexture(new Uint8Array(4), 1, 1, 5, !1, !1, 1)), this._emptyTexture
      }
      get emptyTexture3D() {
        return this._emptyTexture3D || (this._emptyTexture3D = this.createRawTexture3D(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture3D
      }
      get emptyTexture2DArray() {
        return this._emptyTexture2DArray || (this._emptyTexture2DArray = this.createRawTexture2DArray(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture2DArray
      }
      get emptyCubeTexture() {
        if (!this._emptyCubeTexture) {
          const BB = new Uint8Array(4),
            IB = [BB, BB, BB, BB, BB, BB];
          this._emptyCubeTexture = this.createRawCubeTexture(IB, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(BB) {
        this._framebufferDimensionsObject = BB
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(BB) {
        if (!BB) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const IB = this._activeRenderLoops.indexOf(BB);
        IB >= 0 && (this._activeRenderLoops.splice(IB, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: BB
            } = this.customAnimationFrameRequester;
            BB && BB(this.customAnimationFrameRequester.mN), delete this.customAnimationFrameRequester.mN
          }
        } else if (0 !== this._frameHandler) {
          const BB = this._frameHandler;
          if (this._frameHandler = 0, (0, gB.l)()) {
            const {
              cancelAnimationFrame: IB
            } = this.getHostWindow() || window;
            if ("function" === typeof IB) return IB(BB)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(BB);
          return clearTimeout(BB)
        }
      }
      dW() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      OW() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(BB) {
        this._maxFPS = BB, void 0 !== BB && (this._minFrameTime = BB <= 0 ? Number.MAX_VALUE : 1e3 / BB)
      }
      _isOverFrameTime(BB) {
        if (!BB || void 0 === this._maxFPS) return !1;
        const IB = BB - this._lastFrameTime;
        return this._lastFrameTime = BB, this._renderAccumulator += IB, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(BB) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(BB)) {
          let BB = !0;
          (this.mC || !this.renderEvenInBackground && this._windowIsBackground) && (BB = !1), BB && (this.dW(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.OW())
        }
      }
      _renderLoop(BB) {
        this._processFrame(BB), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let BB = 0; BB < this._activeRenderLoops.length; BB++) {
          (0, this._activeRenderLoops[BB])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(BB, IB) {
        return yB(BB, IB)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.mN = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.mN) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(BB) {
        -1 === this._activeRenderLoops.indexOf(BB) && (this._activeRenderLoops.push(BB), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(BB) {
        this._depthCullingState.depthTest = BB
      }
      setZOffset(BB) {
        this._depthCullingState.zOffset = this.iTB ? -BB : BB
      }
      getZOffset() {
        const BB = this._depthCullingState.zOffset;
        return this.iTB ? -BB : BB
      }
      setZOffsetUnits(BB) {
        this._depthCullingState.zOffsetUnits = this.iTB ? -BB : BB
      }
      getZOffsetUnits() {
        const BB = this._depthCullingState.zOffsetUnits;
        return this.iTB ? -BB : BB
      }
      getHostWindow() {
        return (0, gB.l)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(BB) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const BB of this.scenes) BB._rebuildTextures();
        for (const BB of this._virtualScenes) BB._rebuildTextures()
      }
      _releaseRenderTargetWrapper(BB) {
        const IB = this._renderTargetWrapperCache.indexOf(BB); - 1 !== IB && this._renderTargetWrapperCache.splice(IB, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(BB, IB, ZB) {
        const TB = IB || this.getRenderWidth(),
          JB = ZB || this.getRenderHeight(),
          oB = BB.x || 0,
          GB = BB.y || 0;
        this._cachedViewport = BB, this._viewport(oB * TB, GB * JB, TB * BB.width, JB * BB.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(BB) {
        return new Path2D(BB)
      }
      get description() {
        let BB = this.name + this.version;
        return this._caps.parallelShaderCompile && (BB += " - Parallel shader compilation"), BB
      }
      _createTextureBase(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          vB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          kB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          cB = arguments.length > 7 ? arguments[7] : void 0,
          nB = arguments.length > 8 ? arguments[8] : void 0,
          hB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          zB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          FB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          gB = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          qB = arguments.length > 13 ? arguments[13] : void 0,
          yB = arguments.length > 14 ? arguments[14] : void 0,
          WB = arguments.length > 15 ? arguments[15] : void 0;
        const dB = "data:" === (BB = BB || "").substring(0, 5),
          CB = "blob:" === BB.substring(0, 5),
          QB = dB && -1 !== BB.indexOf(";base64,"),
          sB = zB || new NB.b(this, 1);
        sB !== zB && (sB.label = BB.substring(0, 60));
        const wB = BB;
        !this._transformTextureUrl || QB || zB || hB || (BB = this._transformTextureUrl(BB)), wB !== BB && (sB._originalUrl = wB);
        const OB = BB.lastIndexOf(".");
        let YB = gB || (OB > -1 ? BB.substring(OB).toLowerCase() : "");
        YB.indexOf("?") > -1 && (YB = YB.split("?")[0]);
        const iB = UB.GetCompatibleTextureLoader(YB, qB);
        TB && TB.addPendingData(sB), sB.url = BB, sB.generateMipMaps = !IB, sB.samplingMode = JB, sB.invertY = ZB, sB._useSRGBBuffer = this._getUseSRGBBuffer(!!WB, IB), this._doNotHandleContextLost || (sB._buffer = hB);
        let pB = null;
        vB && !zB && (pB = sB.onLoadedObservable.add(vB)), zB || this._internalTexturesCache.push(sB);
        const aB = (ZB, zB) => {
          TB && TB.removePendingData(sB), BB === wB ? (pB && sB.onLoadedObservable.remove(pB), oB.e.UseFallbackTexture && BB !== oB.e.FallbackTexture && this._createTextureBase(oB.e.FallbackTexture, IB, sB.invertY, TB, JB, null, kB, cB, nB, hB, sB), ZB = (ZB || "Unknown error") + (oB.e.UseFallbackTexture ? " - Fallback texture was used" : ""), sB.onErrorObservable.notifyObservers({
            message: ZB,
            exception: zB
          }), kB && kB(ZB, zB)) : (GB.d.Warn(`Failed to load ${BB}, falling back to ${wB}`), this._createTextureBase(wB, IB, sB.invertY, TB, JB, vB, kB, cB, nB, hB, sB, FB, gB, qB, yB, WB))
        };
        if (iB) {
          const IB = async BB => {
            (await iB).loadData(BB, sB, ((BB, IB, ZB, oB, GB, vB) => {
              vB ? aB("TextureLoader failed to load data") : cB(sB, YB, TB, {
                width: BB,
                height: IB
              }, sB.invertY, !ZB, oB, (() => (GB(), !1)), JB)
            }), yB)
          };
          if (hB) {
            const BB = async BB => {
              try {
                await IB(BB)
              } catch (ZB) {
                aB("Failed to parse texture data", ZB)
              }
            };
            hB instanceof ArrayBuffer ? BB(new Uint8Array(hB)) : ArrayBuffer.isView(hB) ? BB(hB) : kB && kB("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(BB, (async BB => {
            try {
              await IB(new Uint8Array(BB))
            } catch (ZB) {
              aB("Failed to parse texture data", ZB)
            }
          }), void 0, TB ? TB.offlineProvider : void 0, !0, ((BB, IB) => {
            aB("Unable to load " + (BB && BB.responseURL, IB))
          }))
        } else {
          const ZB = BB => {
            CB && !this._doNotHandleContextLost && (sB._buffer = BB), cB(sB, YB, TB, BB, sB.invertY, IB, !1, nB, JB)
          };
          !dB || QB ? hB && ("string" === typeof hB.decoding || hB.close) ? ZB(hB) : UB._FileToolsLoadImage(BB || "", ZB, aB, TB ? TB.offlineProvider : null, qB, sB.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof hB || hB instanceof ArrayBuffer || ArrayBuffer.isView(hB) || hB instanceof Blob ? UB._FileToolsLoadImage(hB, ZB, aB, TB ? TB.offlineProvider : null, qB, sB.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : hB && ZB(hB)
        }
        return sB
      }
      _rebuildBuffers() {
        for (const BB of this._uniformBuffers) BB._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, gB.g)() ? document : null
      }
      getLoadedTexturesCache() {
        return this._internalTexturesCache
      }
      clearInternalTexturesCache() {
        this._internalTexturesCache.length = 0
      }
      getCaps() {
        return this._caps
      }
      resetTextureCache() {
        for (const BB in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, BB) && (this._boundTexturesCache[BB] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(BB) {
        this._name = BB
      }
      static get NpmPackage() {
        return "babylonjs@9.28.0"
      }
      static get Version() {
        return "9.28.0"
      }
      getRenderingCanvas() {
        return this._renderingCanvas
      }
      getAudioContext() {
        return this._audioContext
      }
      getAudioDestination() {
        return this._audioDestination
      }
      setHardwareScalingLevel(BB) {
        this._hardwareScalingLevel = BB, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(BB) {
        this._doNotHandleContextLost = BB
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(BB, IB, ZB) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new cB, this._stencilStateComposer = new nB, this._stencilState = new hB, this._alphaState = new zB.c(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new TB.b, this.onCanvasFocusObservable = new TB.b, this.onNewSceneAddedObservable = new TB.b, this.onResizeObservable = new TB.b, this.onCanvasPointerOutObservable = new TB.b, this.onEffectErrorObservable = new TB.b, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new TB.b, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = BB => this._renderLoop(BB), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new TB.b, this.onAfterShaderCompilationObservable = new TB.b, this.onBeginFrameObservable = new TB.b, this.onEndFrameObservable = new TB.b, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new TB.b, this.jN = new TB.b, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.oR = new TB.b, this.onReleaseEffectsObservable = new TB.b, oB.e.Instances.push(this), this.startTime = kB.c.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, vB.b.SetMatrixPrecision(!!IB.useLargeWorldRendering || !!IB.useHighPrecisionMatrix), (0, gB.h)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), IB.antialias = BB ?? IB.antialias, IB.deterministicLockstep = IB.deterministicLockstep ?? !1, IB.lockstepMaxSteps = IB.lockstepMaxSteps ?? 4, IB.timeStep = IB.timeStep ?? 1 / 60, IB.stencil = IB.stencil ?? !0, this._audioContext = IB.audioEngineOptions?.audioContext ?? null, this._audioDestination = IB.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = IB.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!IB.doNotHandleContextLost, this._isStencilEnable = !!IB.stencil, this.useExactSrgbConversions = IB.useExactSrgbConversions ?? !1, this.canvasTabIndex = IB.canvasTabIndex ?? this.canvasTabIndex;
        const JB = (0, gB.l)() && window.devicePixelRatio || 1,
          GB = IB.limitDeviceRatio || JB;
        ZB = ZB || IB.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = ZB, this._hardwareScalingLevel = ZB ? 1 / Math.min(GB, JB) : 1, this._lastDevicePixelRatio = JB, this._creationOptions = IB
      }
      resize() {
        let BB, IB, ZB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const BB = (0, gB.l)() && window.devicePixelRatio || 1,
            IB = this._lastDevicePixelRatio / BB;
          this._lastDevicePixelRatio = BB, this._hardwareScalingLevel *= IB
        }
        if ((0, gB.l)() && (0, gB.g)())
          if (this._renderingCanvas) {
            const ZB = this._renderingCanvas.getBoundingClientRect?.();
            BB = this._renderingCanvas.clientWidth || ZB?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, IB = this._renderingCanvas.clientHeight || ZB?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else BB = window.innerWidth, IB = window.innerHeight;
        else BB = this._renderingCanvas ? this._renderingCanvas.width : 100, IB = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(BB / this._hardwareScalingLevel, IB / this._hardwareScalingLevel, ZB)
      }
      setSize(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (BB |= 0, IB |= 0, !ZB && this._renderingCanvas.width === BB && this._renderingCanvas.height === IB) return !1;
        if (this._renderingCanvas.width = BB, this._renderingCanvas.height = IB, this.scenes) {
          for (let BB = 0; BB < this.scenes.length; BB++) {
            const IB = this.scenes[BB];
            for (let BB = 0; BB < IB.cameras.length; BB++) {
              IB.cameras[BB]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB, hB) {
        throw (0, FB.m)("engine.rawTexture")
      }
      createRawCubeTexture(BB, IB, ZB, TB, JB, oB, GB, vB) {
        throw (0, FB.m)("engine.rawTexture")
      }
      createRawTexture3D(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB) {
        throw (0, FB.m)("engine.rawTexture")
      }
      createRawTexture2DArray(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB, hB) {
        throw (0, FB.m)("engine.rawTexture")
      }
      _sharedInit(BB) {
        this._renderingCanvas = BB
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const BB = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== BB.indexOf("Mobile") || -1 !== BB.indexOf("Mac") && (0, gB.g)() && "ontouchend" in document
        }, this._checkForMobile(), (0, gB.l)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(BB) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(BB, !1)
      }
      getFps() {
        return this._fps
      }
      getDeltaTime() {
        return this._deltaTime
      }
      isDeterministicLockStep() {
        return this._deterministicLockstep
      }
      getLockstepMaxSteps() {
        return this._lockstepMaxSteps
      }
      getTimeStep() {
        return 1e3 * this._timeStep
      }
      _createImageBitmapFromSource(BB, IB) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(BB, IB) {
        return createImageBitmap(BB, IB)
      }
      resizeImageBitmap(BB, IB, ZB) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(BB) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(BB, IB) {
        if ("undefined" === typeof document) return new OffscreenCanvas(BB, IB);
        const ZB = document.createElement("canvas");
        return ZB.width = BB, ZB.height = IB, ZB
      }
      createCanvas(BB, IB) {
        return UB._CreateCanvas(BB, IB)
      }
      static _FileToolsLoadImage(BB, IB, ZB, TB, JB, oB, GB) {
        if (!qB.c.loadImage) throw (0, FB.m)("FileTools");
        return qB.c.loadImage(BB, IB, ZB, TB, JB, oB, GB)
      }
      _loadFile(BB, IB, ZB, TB, JB, oB) {
        const GB = (0, qB.k)(BB, IB, ZB, TB, JB, oB);
        return this._activeRequests.push(GB), GB.onCompleteObservable.add((() => {
          const BB = this._activeRequests.indexOf(GB); - 1 !== BB && this._activeRequests.splice(BB, 1)
        })), GB
      }
      static _FileToolsLoadFile(BB, IB, ZB, TB, JB, oB) {
        if (qB.c.loadFile) return qB.c.loadFile(BB, IB, ZB, TB, JB, oB);
        throw (0, FB.m)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), JB.d.ResetCache();
        for (const IB of this._activeRequests) IB.abort();
        this._boundRenderFunction = null, this.oR.notifyObservers(this), this.oR.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, gB.l)() && window.removeEventListener("resize", this._checkForMobile);
        const BB = oB.e.Instances.indexOf(this);
        BB >= 0 && oB.e.Instances.splice(BB, 1), oB.e.Instances.length || (oB.e.OnEnginesDisposedObservable.notifyObservers(this), oB.e.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(BB) {
        throw (0, FB.m)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(BB, IB) {
        for (let ZB = 0; ZB < oB.e.Instances.length; ZB++) {
          const TB = oB.e.Instances[ZB];
          for (let ZB = 0; ZB < TB.scenes.length; ZB++) TB.scenes[ZB].markAllMaterialsAsDirty(BB, IB)
        }
      }
      static GetCompatibleTextureLoader(BB, IB) {
        return null
      }
    }
    UB._RenderPassIdCounter = 0, UB._RescalePostProcessFactory = null, UB.CollisionsEpsilon = .001, UB.QueueNewFrame = yB
  },
  39905: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB
    });
    class TB {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? TB.ShadersRepository : TB.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? TB.ShadersStore : TB.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? TB.IncludesShadersStore : TB.IncludesShadersStoreWGSL
      }
    }
    TB.ShadersRepository = "src/Shaders/", TB.ShadersStore = {}, TB.IncludesShadersStore = {}, TB.ShadersRepositoryWGSL = "src/ShadersWGSL/", TB.ShadersStoreWGSL = {}, TB.IncludesShadersStoreWGSL = {}
  },
  39917: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => zB,
      d: () => WB,
      e: () => NB,
      i: () => FB,
      l: () => gB,
      o: () => UB,
      s: () => hB,
      u: () => cB,
      w: () => nB,
      y: () => kB,
      C: () => vB
    });
    class TB {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(BB) {
        BB && this.program && BB(this.program)
      }
      setEngine(BB) {
        this.engine = BB
      }
      _fillEffectInformation(BB, IB, ZB, TB, JB, oB, GB, vB) {
        const kB = this.engine;
        if (kB.supportsUniformBuffers)
          for (const nB in IB) BB.bindUniformBlock(nB, IB[nB]);
        let cB;
        for (this.engine.getUniforms(this, ZB).forEach(((BB, IB) => {
            TB[ZB[IB]] = BB
          })), this._uniforms = TB, cB = 0; cB < JB.length; cB++) {
          null == BB.getUniform(JB[cB]) && (JB.splice(cB, 1), cB--)
        }
        JB.forEach(((BB, IB) => {
          oB[BB] = IB
        }));
        for (const nB of kB.getAttributes(this, GB)) vB.push(nB)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(BB, IB) {
        const ZB = this._valueCache[BB],
          TB = IB.updateFlag;
        if (void 0 !== ZB && ZB === TB) return !1;
        const JB = IB.HTB();
        let oB = this._matrixValueCache[BB];
        if (void 0 !== ZB && null !== ZB && void 0 !== oB) {
          let IB = !0;
          for (let BB = 15; BB >= 0; BB--)
            if (oB[BB] !== JB[BB]) {
              IB = !1;
              break
            } if (IB) return this._valueCache[BB] = TB, !1
        }
        return void 0 === oB && (oB = this._matrixValueCache[BB] = new Float32Array(16)), oB.set(JB), this._valueCache[BB] = TB, !0
      }
      _cacheFloat2(BB, IB, ZB) {
        let TB = this._valueCache[BB];
        if (!TB || 2 !== TB.length) return TB = [IB, ZB], this._valueCache[BB] = TB, !0;
        let JB = !1;
        return TB[0] !== IB && (TB[0] = IB, JB = !0), TB[1] !== ZB && (TB[1] = ZB, JB = !0), JB
      }
      _cacheFloat3(BB, IB, ZB, TB) {
        let JB = this._valueCache[BB];
        if (!JB || 3 !== JB.length) return JB = [IB, ZB, TB], this._valueCache[BB] = JB, !0;
        let oB = !1;
        return JB[0] !== IB && (JB[0] = IB, oB = !0), JB[1] !== ZB && (JB[1] = ZB, oB = !0), JB[2] !== TB && (JB[2] = TB, oB = !0), oB
      }
      _cacheFloat4(BB, IB, ZB, TB, JB) {
        let oB = this._valueCache[BB];
        if (!oB || 4 !== oB.length) return oB = [IB, ZB, TB, JB], this._valueCache[BB] = oB, !0;
        let GB = !1;
        return oB[0] !== IB && (oB[0] = IB, GB = !0), oB[1] !== ZB && (oB[1] = ZB, GB = !0), oB[2] !== TB && (oB[2] = TB, GB = !0), oB[3] !== JB && (oB[3] = JB, GB = !0), GB
      }
      setInt(BB, IB) {
        const ZB = this._valueCache[BB];
        void 0 !== ZB && ZB === IB || this.engine.setInt(this._uniforms[BB], IB) && (this._valueCache[BB] = IB)
      }
      setInt2(BB, IB, ZB) {
        this._cacheFloat2(BB, IB, ZB) && (this.engine.setInt2(this._uniforms[BB], IB, ZB) || (this._valueCache[BB] = null))
      }
      setInt3(BB, IB, ZB, TB) {
        this._cacheFloat3(BB, IB, ZB, TB) && (this.engine.setInt3(this._uniforms[BB], IB, ZB, TB) || (this._valueCache[BB] = null))
      }
      setInt4(BB, IB, ZB, TB, JB) {
        this._cacheFloat4(BB, IB, ZB, TB, JB) && (this.engine.setInt4(this._uniforms[BB], IB, ZB, TB, JB) || (this._valueCache[BB] = null))
      }
      setIntArray(BB, IB) {
        this._valueCache[BB] = null, this.engine.setIntArray(this._uniforms[BB], IB)
      }
      setIntArray2(BB, IB) {
        this._valueCache[BB] = null, this.engine.setIntArray2(this._uniforms[BB], IB)
      }
      setIntArray3(BB, IB) {
        this._valueCache[BB] = null, this.engine.setIntArray3(this._uniforms[BB], IB)
      }
      setIntArray4(BB, IB) {
        this._valueCache[BB] = null, this.engine.setIntArray4(this._uniforms[BB], IB)
      }
      setUInt(BB, IB) {
        const ZB = this._valueCache[BB];
        void 0 !== ZB && ZB === IB || this.engine.setUInt(this._uniforms[BB], IB) && (this._valueCache[BB] = IB)
      }
      setUInt2(BB, IB, ZB) {
        this._cacheFloat2(BB, IB, ZB) && (this.engine.setUInt2(this._uniforms[BB], IB, ZB) || (this._valueCache[BB] = null))
      }
      setUInt3(BB, IB, ZB, TB) {
        this._cacheFloat3(BB, IB, ZB, TB) && (this.engine.setUInt3(this._uniforms[BB], IB, ZB, TB) || (this._valueCache[BB] = null))
      }
      setUInt4(BB, IB, ZB, TB, JB) {
        this._cacheFloat4(BB, IB, ZB, TB, JB) && (this.engine.setUInt4(this._uniforms[BB], IB, ZB, TB, JB) || (this._valueCache[BB] = null))
      }
      setUIntArray(BB, IB) {
        this._valueCache[BB] = null, this.engine.setUIntArray(this._uniforms[BB], IB)
      }
      setUIntArray2(BB, IB) {
        this._valueCache[BB] = null, this.engine.setUIntArray2(this._uniforms[BB], IB)
      }
      setUIntArray3(BB, IB) {
        this._valueCache[BB] = null, this.engine.setUIntArray3(this._uniforms[BB], IB)
      }
      setUIntArray4(BB, IB) {
        this._valueCache[BB] = null, this.engine.setUIntArray4(this._uniforms[BB], IB)
      }
      setArray(BB, IB) {
        this._valueCache[BB] = null, this.engine.setArray(this._uniforms[BB], IB)
      }
      setArray2(BB, IB) {
        this._valueCache[BB] = null, this.engine.setArray2(this._uniforms[BB], IB)
      }
      setArray3(BB, IB) {
        this._valueCache[BB] = null, this.engine.setArray3(this._uniforms[BB], IB)
      }
      setArray4(BB, IB) {
        this._valueCache[BB] = null, this.engine.setArray4(this._uniforms[BB], IB)
      }
      setMatrices(BB, IB) {
        IB && (this._valueCache[BB] = null, this.engine.setMatrices(this._uniforms[BB], IB))
      }
      setMatrix(BB, IB) {
        this._cacheMatrix(BB, IB) && (this.engine.setMatrices(this._uniforms[BB], IB.HTB()) || (this._valueCache[BB] = null))
      }
      setMatrix3x3(BB, IB) {
        this._valueCache[BB] = null, this.engine.setMatrix3x3(this._uniforms[BB], IB)
      }
      setMatrix2x2(BB, IB) {
        this._valueCache[BB] = null, this.engine.setMatrix2x2(this._uniforms[BB], IB)
      }
      setFloat(BB, IB) {
        const ZB = this._valueCache[BB];
        void 0 !== ZB && ZB === IB || this.engine.setFloat(this._uniforms[BB], IB) && (this._valueCache[BB] = IB)
      }
      setVector2(BB, IB) {
        this._cacheFloat2(BB, IB.x, IB.y) && (this.engine.setFloat2(this._uniforms[BB], IB.x, IB.y) || (this._valueCache[BB] = null))
      }
      setFloat2(BB, IB, ZB) {
        this._cacheFloat2(BB, IB, ZB) && (this.engine.setFloat2(this._uniforms[BB], IB, ZB) || (this._valueCache[BB] = null))
      }
      setVector3(BB, IB) {
        this._cacheFloat3(BB, IB.x, IB.y, IB.z) && (this.engine.setFloat3(this._uniforms[BB], IB.x, IB.y, IB.z) || (this._valueCache[BB] = null))
      }
      setFloat3(BB, IB, ZB, TB) {
        this._cacheFloat3(BB, IB, ZB, TB) && (this.engine.setFloat3(this._uniforms[BB], IB, ZB, TB) || (this._valueCache[BB] = null))
      }
      setVector4(BB, IB) {
        this._cacheFloat4(BB, IB.x, IB.y, IB.z, IB.w) && (this.engine.setFloat4(this._uniforms[BB], IB.x, IB.y, IB.z, IB.w) || (this._valueCache[BB] = null))
      }
      setQuaternion(BB, IB) {
        this._cacheFloat4(BB, IB.x, IB.y, IB.z, IB.w) && (this.engine.setFloat4(this._uniforms[BB], IB.x, IB.y, IB.z, IB.w) || (this._valueCache[BB] = null))
      }
      setFloat4(BB, IB, ZB, TB, JB) {
        this._cacheFloat4(BB, IB, ZB, TB, JB) && (this.engine.setFloat4(this._uniforms[BB], IB, ZB, TB, JB) || (this._valueCache[BB] = null))
      }
      setColor3(BB, IB) {
        this._cacheFloat3(BB, IB.r, IB.g, IB.b) && (this.engine.setFloat3(this._uniforms[BB], IB.r, IB.g, IB.b) || (this._valueCache[BB] = null))
      }
      setColor4(BB, IB, ZB) {
        this._cacheFloat4(BB, IB.r, IB.g, IB.b, ZB) && (this.engine.setFloat4(this._uniforms[BB], IB.r, IB.g, IB.b, ZB) || (this._valueCache[BB] = null))
      }
      setDirectColor4(BB, IB) {
        this._cacheFloat4(BB, IB.r, IB.g, IB.b, IB.a) && (this.engine.setFloat4(this._uniforms[BB], IB.r, IB.g, IB.b, IB.a) || (this._valueCache[BB] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var JB = ZB(39926);
    const oB = new WeakMap,
      GB = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function vB(BB) {
      let IB = oB.get(BB);
      if (!IB) {
        if (!BB) return GB;
        IB = {
          _webGLVersion: BB.TEXTURE_BINDING_3D ? 2 : 1,
          _context: BB,
          parallelShaderCompile: BB.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, oB.set(BB, IB)
      }
      return IB
    }

    function kB(BB) {
      oB.delete(BB)
    }

    function cB(BB, IB, ZB, TB, JB, oB) {
      const GB = vB(TB);
      oB || (oB = GB._createShaderProgramInjection ?? zB);
      return oB(BB, yB(IB, "vertex", TB, GB._contextWasLost), yB(ZB, "fragment", TB, GB._contextWasLost), TB, JB, GB.validateShaderPrograms)
    }

    function nB(BB, IB, ZB, TB, JB) {
      let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        GB = arguments.length > 6 ? arguments[6] : void 0;
      const kB = vB(JB);
      GB || (GB = kB._createShaderProgramInjection ?? zB);
      const cB = kB._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return GB(BB, qB(IB, "vertex", TB, cB, JB, kB._contextWasLost), qB(ZB, "fragment", TB, cB, JB, kB._contextWasLost), JB, oB, kB.validateShaderPrograms)
    }

    function hB(BB, IB) {
      const ZB = new TB,
        JB = vB(BB);
      return JB.parallelShaderCompile && !JB.disableParallelShaderCompile && (ZB.isParallelCompiled = !0), ZB.context = JB._context, ZB
    }

    function zB(BB, IB, ZB, TB) {
      let JB = arguments.length > 5 ? arguments[5] : void 0;
      const oB = TB.createProgram();
      if (BB.program = oB, !oB) throw new Error("Unable to create program");
      return TB.attachShader(oB, IB), TB.attachShader(oB, ZB), TB.linkProgram(oB), BB.context = TB, BB.vertexShader = IB, BB.fragmentShader = ZB, BB.isParallelCompiled || NB(BB, TB, JB), oB
    }

    function FB(BB, IB, ZB) {
      const TB = BB;
      if (TB._isDisposed) return !1;
      const JB = vB(IB);
      return !!(JB && JB.parallelShaderCompile && JB.parallelShaderCompile.COMPLETION_STATUS_KHR && TB.program && IB.getProgramParameter(TB.program, JB.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (NB(TB, IB, ZB), !0)
    }

    function NB(BB, IB, ZB) {
      const TB = BB.context,
        JB = BB.vertexShader,
        oB = BB.fragmentShader,
        GB = BB.program;
      if (!TB.getProgramParameter(GB, TB.LINK_STATUS)) {
        if (!IB.getShaderParameter(JB, IB.COMPILE_STATUS)) {
          const ZB = IB.getShaderInfoLog(JB);
          if (ZB) throw BB.vertexCompilationError = ZB, new Error("VERTEX SHADER " + ZB)
        }
        if (!IB.getShaderParameter(oB, IB.COMPILE_STATUS)) {
          const ZB = IB.getShaderInfoLog(oB);
          if (ZB) throw BB.fragmentCompilationError = ZB, new Error("FRAGMENT SHADER " + ZB)
        }
        const ZB = TB.getProgramInfoLog(GB);
        if (ZB) throw BB.programLinkError = ZB, new Error(ZB)
      }
      if (ZB) {
        TB.validateProgram(GB);
        if (!TB.getProgramParameter(GB, TB.VALIDATE_STATUS)) {
          const IB = TB.getProgramInfoLog(GB);
          if (IB) throw BB.programValidationError = IB, new Error(IB)
        }
      }
      TB.deleteShader(JB), TB.deleteShader(oB), BB.vertexShader = void 0, BB.fragmentShader = void 0, BB.onCompiled && (BB.onCompiled(), BB.onCompiled = void 0)
    }

    function gB(BB, IB, ZB, TB, JB, oB, GB, kB, hB) {
      let zB = arguments.length > 10 ? arguments[10] : void 0,
        FB = arguments.length > 11 ? arguments[11] : void 0,
        NB = arguments.length > 12 ? arguments[12] : void 0;
      const gB = vB(BB.context);
      FB || (FB = gB.createRawShaderProgramInjection ?? cB), NB || (NB = gB.createShaderProgramInjection ?? nB);
      const qB = BB;
      qB.program = TB ? FB(qB, IB, ZB, qB.context, hB) : NB(qB, IB, ZB, kB, qB.context, hB), qB.program.__SPECTOR_rebuildProgram = GB, zB()
    }

    function qB(BB, IB, ZB, TB, oB, GB) {
      return yB((0, JB.g)(BB, ZB, TB), IB, oB, GB)
    }

    function yB(BB, IB, ZB, TB) {
      const JB = ZB.createShader("vertex" === IB ? ZB.VERTEX_SHADER : ZB.FRAGMENT_SHADER);
      if (!JB) {
        let BB, JB = ZB.NO_ERROR;
        for (;
          (BB = ZB.getError()) !== ZB.NO_ERROR;) JB = BB;
        throw new Error(`Something went wrong while creating a gl ${IB} shader object. gl error=${JB}, gl isContextLost=${ZB.isContextLost()}, _contextWasLost=${TB}`)
      }
      return ZB.shaderSource(JB, BB), ZB.compileShader(JB), JB
    }

    function UB(BB, IB) {
      IB.useProgram(BB)
    }

    function WB(BB, IB) {
      const ZB = BB;
      if (!ZB.isParallelCompiled) return void IB(BB);
      const TB = ZB.onCompiled;
      ZB.onCompiled = () => {
        TB?.(), IB(BB)
      }
    }
  },
  39895: (BB, IB, ZB) => {
    ZB.d(IB, {
      ThinEngine: () => CB
    });
    var TB = ZB(39902),
      JB = ZB(39917),
      oB = ZB(39951),
      GB = ZB(39973),
      vB = ZB(38718),
      kB = ZB(39912);
    class cB {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(BB, IB, ZB, TB, JB) {
        if (JB.drawBuffersExtensionDisabled) {
          const IB = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          BB = BB.replace(IB, "")
        }
        return BB
      }
    }
    const nB = /(flat\s)?\s*varying\s*.*/;
    class hB {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(BB) {
        return BB.replace("attribute", "in")
      }
      varyingCheck(BB, IB) {
        return nB.test(BB)
      }
      varyingProcessor(BB, IB) {
        return BB.replace("varying", IB ? "in" : "out")
      }
      postProcessor(BB, IB, ZB) {
        const TB = -1 !== BB.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (BB = (BB = BB.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), ZB) {
          const ZB = -1 !== BB.search(/layout *\(location *= *0\) *out/g),
            JB = -1 !== IB.indexOf("#define DUAL_SOURCE_BLENDING"),
            oB = JB ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          JB && (BB = "#extension GL_EXT_blend_func_extended : require\n" + BB), BB = (BB = (BB = (BB = (BB = (BB = (BB = BB.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (TB || ZB ? "" : oB) + "void main(")
        } else {
          IB.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (BB = "invariant gl_Position;\n" + BB);
          if (-1 !== IB.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + BB
        }
        return BB
      }
    }
    var zB = ZB(39976),
      FB = ZB(39993),
      NB = ZB(39995),
      gB = ZB(39885),
      qB = ZB(39926),
      yB = ZB(39908),
      UB = ZB(40003),
      WB = ZB(39967);
    class dB {}
    class CB extends oB.c {
      get name() {
        return this._name
      }
      set name(BB) {
        this._name = BB
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return TB.d.ShadersRepository
      }
      static set ShadersRepository(BB) {
        TB.d.ShadersRepository = BB
      }
      get supportsUniformBuffers() {
        return this.cg > 1 && !this.disableUniformBuffers
      }
      get needPOTTextures() {
        return this._webGLVersion < 2 || this.forcePOTTextures
      }
      get _supportsHardwareTextureRescaling() {
        return !1
      }
      snapshotRenderingReset() {
        this.snapshotRendering = !1
      }
      constructor(BB, IB, ZB, TB) {
        if (ZB = ZB || {}, super(IB ?? ZB.antialias, ZB, TB), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !BB) return;
        let oB;
        if (BB.getContext) {
          if (oB = BB, void 0 === ZB.preserveDrawingBuffer && (ZB.preserveDrawingBuffer = !1), void 0 === ZB.xrCompatible && (ZB.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const BB = navigator.userAgent;
            for (const IB of CB.ExceptionList) {
              const TB = IB.key,
                JB = IB.targets;
              if (new RegExp(TB).test(BB)) {
                if (IB.capture && IB.captureConstraint) {
                  const ZB = IB.capture,
                    TB = IB.captureConstraint,
                    JB = new RegExp(ZB).exec(BB);
                  if (JB && JB.length > 0) {
                    if (parseInt(JB[JB.length - 1]) >= TB) continue
                  }
                }
                for (const BB of JB) switch (BB) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    ZB.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, JB.y)(this._gl)
            } : (this._onContextLost = BB => {
              BB.preventDefault(), this._contextWasLost = !0, (0, JB.y)(this._gl), vB.d.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, oB.addEventListener("webglcontextrestored", this._onContextRestored, !1), ZB.powerPreference = ZB.powerPreference || "high-performance"), oB.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (ZB.xrCompatible = !1), !ZB.disableWebGL2Support) try {
            this._gl = oB.getContext("webgl2", ZB) || oB.getContext("experimental-webgl2", ZB), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (nB) {}
          if (!this._gl) {
            if (!oB) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = oB.getContext("webgl", ZB) || oB.getContext("experimental-webgl", ZB)
            } catch (nB) {
              throw new Error("WebGL not supported", {
                cause: nB
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = BB, oB = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const IB = this._gl.getContextAttributes();
          IB && (ZB.stencil = IB.stencil)
        }
        this._sharedInit(oB), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== ZB.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = ZB.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let JB = 0; JB < this._caps.maxVertexAttribs; JB++) this._currentBufferPointers[JB] = new dB;
        this._shaderProcessor = this.cg > 1 ? new hB : new cB;
        const GB = `Babylon.js v${CB.Version}`;
        vB.d.Log(GB + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", GB);
        const kB = (0, JB.C)(this._gl);
        kB.validateShaderPrograms = this.validateShaderPrograms, kB.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(BB) {
        return null
      }
      areAllEffectsReady() {
        for (const BB in this._compiledEffects) {
          if (!this._compiledEffects[BB].isReady()) return !1
        }
        return !0
      }
      _initGLContext() {
        this._caps = {
          maxTexturesImageUnits: this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),
          maxCombinedTexturesImageUnits: this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
          maxVertexTextureImageUnits: this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
          maxTextureSize: this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),
          maxSamples: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_SAMPLES) : 1,
          maxCubemapTextureSize: this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),
          maxRenderTextureSize: this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),
          maxVertexAttribs: this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),
          maxVaryingVectors: this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),
          maxFragmentUniformVectors: this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),
          maxVertexUniformVectors: this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),
          shaderFloatPrecision: 0,
          parallelShaderCompile: this._gl.getExtension("KHR_parallel_shader_compile") || void 0,
          standardDerivatives: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_standard_derivatives"),
          maxAnisotropy: 1,
          astc: this._gl.getExtension("WEBGL_compressed_texture_astc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_astc"),
          bptc: this._gl.getExtension("EXT_texture_compression_bptc") || this._gl.getExtension("WEBKIT_EXT_texture_compression_bptc"),
          s3tc: this._gl.getExtension("WEBGL_compressed_texture_s3tc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),
          s3tc_srgb: this._gl.getExtension("WEBGL_compressed_texture_s3tc_srgb") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc_srgb"),
          pvrtc: this._gl.getExtension("WEBGL_compressed_texture_pvrtc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
          etc1: this._gl.getExtension("WEBGL_compressed_texture_etc1") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc1"),
          etc2: this._gl.getExtension("WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBGL_compressed_texture_es3_0"),
          textureAnisotropicFilterExtension: this._gl.getExtension("EXT_texture_filter_anisotropic") || this._gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this._gl.getExtension("MOZ_EXT_texture_filter_anisotropic"),
          uintIndices: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_element_index_uint"),
          fragmentDepthSupported: this._webGLVersion > 1 || null !== this._gl.getExtension("EXT_frag_depth"),
          highPrecisionShaderSupported: !1,
          timerQuery: this._gl.getExtension("EXT_disjoint_timer_query_webgl2") || this._gl.getExtension("EXT_disjoint_timer_query"),
          supportOcclusionQuery: this._webGLVersion > 1,
          canUseTimestampForTimerQuery: !1,
          drawBuffersExtension: !1,
          maxMSAASamples: 1,
          colorBufferFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_float")),
          blendFloat: null !== this._gl.getExtension("EXT_float_blend"),
          supportFloatTexturesResolve: !1,
          rg11b10ufColorRenderable: !1,
          colorBufferHalfFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_half_float")),
          textureFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_float")),
          textureHalfFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_half_float")),
          textureHalfFloatRender: !1,
          textureFloatLinearFiltering: !1,
          textureFloatRender: !1,
          textureHalfFloatLinearFiltering: !1,
          vertexArrayObject: !1,
          instancedArrays: !1,
          textureLOD: !!(this._webGLVersion > 1 || this._gl.getExtension("EXT_shader_texture_lod")),
          texelFetch: 1 !== this._webGLVersion,
          blendMinMax: !1,
          multiview: this._gl.getExtension("OVR_multiview2"),
          oculusMultiview: this._gl.getExtension("OCULUS_multiview"),
          depthTextureExtension: !1,
          canUseGLInstanceID: this._webGLVersion > 1,
          canUseGLVertexID: this._webGLVersion > 1,
          supportComputeShaders: !1,
          supportSRGBBuffers: !1,
          supportTransformFeedbacks: this._webGLVersion > 1,
          textureMaxLevel: this._webGLVersion > 1,
          texture2DArrayMaxLayerCount: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_ARRAY_TEXTURE_LAYERS) : 128,
          disableMorphTargetTexture: !1,
          textureNorm16: !!this._gl.getExtension("EXT_texture_norm16"),
          blendParametersPerTarget: !1,
          dualSourceBlending: !1,
          supportReadWriteStorageTextures: !1
        }, this._caps.supportFloatTexturesResolve = this._caps.colorBufferFloat, this._caps.rg11b10ufColorRenderable = this._caps.colorBufferFloat, this._glVersion = this._gl.getParameter(this._gl.VERSION);
        const BB = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != BB && (this._glRenderer = this._gl.getParameter(BB.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(BB.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const IB = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!IB, this._alphaState = new WB.c(this._caps.blendParametersPerTarget), IB && (this._gl.blendEquationSeparateIndexed = IB.blendEquationSeparateiOES.bind(IB), this._gl.blendEquationIndexed = IB.blendEquationiOES.bind(IB), this._gl.blendFuncSeparateIndexed = IB.blendFuncSeparateiOES.bind(IB), this._gl.blendFuncIndexed = IB.blendFunciOES.bind(IB), this._gl.colorMaskIndexed = IB.colorMaskiOES.bind(IB), this._gl.disableIndexed = IB.disableiOES.bind(IB), this._gl.enableIndexed = IB.enableiOES.bind(IB)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const BB = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== BB) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = BB.drawBuffersWEBGL.bind(BB), this._caps.maxDrawBuffers = this._gl.getParameter(BB.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let IB = 0; IB < 16; IB++) this._gl["COLOR_ATTACHMENT" + IB + "_WEBGL"] = BB["COLOR_ATTACHMENT" + IB + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const BB = this._gl.getExtension("WEBGL_depth_texture");
          null != BB && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = BB.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const BB = this._gl.getExtension("OES_vertex_array_object");
          null != BB && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = BB.createVertexArrayOES.bind(BB), this._gl.bindVertexArray = BB.bindVertexArrayOES.bind(BB), this._gl.deleteVertexArray = BB.deleteVertexArrayOES.bind(BB))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const BB = this._gl.getExtension("ANGLE_instanced_arrays");
          null != BB ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = BB.drawArraysInstancedANGLE.bind(BB), this._gl.drawElementsInstanced = BB.drawElementsInstancedANGLE.bind(BB), this._gl.vertexAttribDivisor = BB.vertexAttribDivisorANGLE.bind(BB)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const BB = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            IB = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (BB && IB && (this._caps.highPrecisionShaderSupported = 0 !== BB.precision && 0 !== IB.precision, this._caps.shaderFloatPrecision = Math.min(BB.precision, IB.precision)), !this._shouldUseHighPrecisionShader) {
            const BB = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              IB = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            BB && IB && (this._caps.shaderFloatPrecision = Math.min(BB.precision, IB.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const BB = this._gl.getExtension("EXT_blend_minmax");
          null != BB && (this._caps.blendMinMax = !0, this._gl.MAX = BB.MAX_EXT, this._gl.MIN = BB.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const BB = this._gl.getExtension("EXT_sRGB");
            null != BB && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: BB.SRGB_EXT,
              SRGB8: BB.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: BB.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const BB = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== BB && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && BB)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let ZB = 0; ZB < this._maxSimultaneousTextures; ZB++) this._nextFreeTextureSlots.push(ZB);
        "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0)
      }
      _initFeatures() {
        this._features = {
          forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
          supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
          supportDepthStencilTexture: 1 !== this._webGLVersion,
          supportShadowSamplers: 1 !== this._webGLVersion,
          uniformBufferHardCheckMatrix: !1,
          allowTexturePrefiltering: 1 !== this._webGLVersion,
          trackUbosInFrame: !1,
          checkUbosContentBeforeUpload: !1,
          supportCSM: 1 !== this._webGLVersion,
          basisNeedsPOT: 1 === this._webGLVersion,
          support3DTextures: 1 !== this._webGLVersion,
          needTypeSuffixInShaderConstants: 1 !== this._webGLVersion,
          supportMSAA: 1 !== this._webGLVersion,
          supportSSAO2: 1 !== this._webGLVersion,
          supportIBLShadows: 1 !== this._webGLVersion,
          supportExtendedTextureFormats: 1 !== this._webGLVersion,
          supportSwitchCaseInShader: 1 !== this._webGLVersion,
          supportSyncTextureRead: !0,
          needsInvertingBitmap: !0,
          useUBOBindingCache: !0,
          needShaderCodeInlining: !1,
          needToAlwaysBindUniformBuffers: !1,
          supportRenderPasses: !1,
          supportSpriteInstancing: !0,
          forceVertexBufferStrideAndOffsetMultiple4Bytes: !1,
          _checkNonFloatVertexBuffersDontRecreatePipelineContext: !1
        }
      }
      get cg() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const BB = this._workingCanvas.getContext("2d");
        BB && (this._workingContext = BB)
      }
      getInfo() {
        return this.getGlInfo()
      }
      getGlInfo() {
        return {
          vendor: this._glVendor,
          renderer: this._glRenderer,
          version: this._glVersion
        }
      }
      extractDriverInfo() {
        const BB = this.getGlInfo();
        return BB && BB.renderer ? BB.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const oB = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = oB;
        let GB = 0;
        if (IB && BB) {
          let IB = !0;
          if (this._currentRenderTarget) {
            const ZB = this._currentRenderTarget.texture?.format;
            if (void 0 !== ZB && (0, UB.g)(ZB)) {
              const ZB = this._currentRenderTarget.texture?.type;
              void 0 !== ZB && (0, UB.i)(ZB) ? (CB._TempClearColorUint32[0] = 255 * BB.r, CB._TempClearColorUint32[1] = 255 * BB.g, CB._TempClearColorUint32[2] = 255 * BB.b, CB._TempClearColorUint32[3] = 255 * BB.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, CB._TempClearColorUint32), IB = !1) : (CB._TempClearColorInt32[0] = 255 * BB.r, CB._TempClearColorInt32[1] = 255 * BB.g, CB._TempClearColorInt32[2] = 255 * BB.b, CB._TempClearColorInt32[3] = 255 * BB.a, this._gl.clearBufferiv(this._gl.COLOR, 0, CB._TempClearColorInt32), IB = !1)
            }
          }
          IB && (this._gl.clearColor(BB.r, BB.g, BB.b, void 0 !== BB.a ? BB.a : 1), GB |= this._gl.COLOR_BUFFER_BIT)
        }
        ZB && (this.iTB ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), GB |= this._gl.DEPTH_BUFFER_BIT), TB && (this._gl.clearStencil(JB), GB |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(GB)
      }
      _clearColorAttachment(BB, IB, ZB, TB) {
        if ((0, UB.g)(ZB)) {
          const ZB = (0, UB.i)(TB),
            JB = ZB ? CB._TempClearColorUint32 : CB._TempClearColorInt32;
          return JB[0] = IB.r, JB[1] = IB.g, JB[2] = IB.b, JB[3] = IB.a, void(ZB ? this._gl.clearBufferuiv(this._gl.COLOR, BB, JB) : this._gl.clearBufferiv(this._gl.COLOR, BB, JB))
        }
        CB._TempClearColorFloat32[0] = IB.r, CB._TempClearColorFloat32[1] = IB.g, CB._TempClearColorFloat32[2] = IB.b, CB._TempClearColorFloat32[3] = IB.a, this._gl.clearBufferfv(this._gl.COLOR, BB, CB._TempClearColorFloat32)
      }
      _viewport(BB, IB, ZB, TB) {
        BB === this._viewportCached.x && IB === this._viewportCached.y && ZB === this._viewportCached.z && TB === this._viewportCached.w || (this._viewportCached.x = BB, this._viewportCached.y = IB, this._viewportCached.z = ZB, this._viewportCached.w = TB, this._gl.viewport(BB, IB, ZB, TB))
      }
      OW() {
        super.OW(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0,
          TB = arguments.length > 3 ? arguments[3] : void 0,
          JB = arguments.length > 4 ? arguments[4] : void 0,
          oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          GB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const kB = BB;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = BB, this._integerMRTAttachmentsMask = !BB.isMulti && BB.texture && (0, UB.g)(BB.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(kB._framebuffer);
        const cB = this._gl;
        BB.isMulti || (BB.is2DArray || BB.is3D ? (cB.framebufferTextureLayer(cB.FRAMEBUFFER, cB.COLOR_ATTACHMENT0, BB.texture._hardwareTexture?.underlyingResource, oB, GB), kB._currentLOD = oB) : BB.isCube ? cB.framebufferTexture2D(cB.FRAMEBUFFER, cB.COLOR_ATTACHMENT0, cB.TEXTURE_CUBE_MAP_POSITIVE_X + IB, BB.texture._hardwareTexture?.underlyingResource, oB) : kB._currentLOD !== oB && (cB.framebufferTexture2D(cB.FRAMEBUFFER, cB.COLOR_ATTACHMENT0, cB.TEXTURE_2D, BB.texture._hardwareTexture?.underlyingResource, oB), kB._currentLOD = oB));
        const nB = BB._depthStencilTexture;
        if (nB) {
          BB.is3D && (BB.texture.width === nB.width && BB.texture.height === nB.height && BB.texture.depth === nB.depth || vB.d.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const ZB = BB._depthStencilTextureWithStencil ? cB.DEPTH_STENCIL_ATTACHMENT : cB.DEPTH_ATTACHMENT;
          BB.is2DArray || BB.is3D ? cB.framebufferTextureLayer(cB.FRAMEBUFFER, ZB, nB._hardwareTexture?.underlyingResource, oB, GB) : BB.isCube ? cB.framebufferTexture2D(cB.FRAMEBUFFER, ZB, cB.TEXTURE_CUBE_MAP_POSITIVE_X + IB, nB._hardwareTexture?.underlyingResource, oB) : cB.framebufferTexture2D(cB.FRAMEBUFFER, ZB, cB.TEXTURE_2D, nB._hardwareTexture?.underlyingResource, oB)
        }
        kB._MSAAFramebuffer && this._bindUnboundFramebuffer(kB._MSAAFramebuffer), this._cachedViewport && !JB ? this.setViewport(this._cachedViewport, ZB, TB) : (ZB || (ZB = BB.width, oB && (ZB /= Math.pow(2, oB))), TB || (TB = BB.height, oB && (TB /= Math.pow(2, oB))), this._viewport(0, 0, ZB, TB)), this.wipeCaches()
      }
      setStateCullFaceType(BB, IB) {
        const ZB = this.cullBackFaces ?? BB ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== ZB || IB) && (this._depthCullingState.cullFace = ZB)
      }
      setState(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0,
          TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          JB = arguments.length > 4 ? arguments[4] : void 0,
          oB = arguments.length > 5 ? arguments[5] : void 0,
          GB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== BB || ZB) && (this._depthCullingState.cull = BB), this.setStateCullFaceType(JB, ZB), this.setZOffset(IB), this.setZOffsetUnits(GB);
        const vB = TB ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== vB || ZB) && (this._depthCullingState.frontFace = vB), this._stencilStateComposer.stencilMaterial = oB
      }
      _resolveAndGenerateMipMapsFramebuffer(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        BB.disableAutomaticMSAAResolve || (BB.isMulti ? this.resolveMultiFramebuffer(BB) : this.resolveFramebuffer(BB)), IB || (BB.isMulti ? this.generateMipMapsMultiFramebuffer(BB) : this.generateMipMapsFramebuffer(BB))
      }
      _bindUnboundFramebuffer(BB) {
        this._currentFramebuffer !== BB && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, BB), this._currentFramebuffer = BB)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(BB) {
        const IB = this._getTextureTarget(BB);
        this._bindTextureDirectly(IB, BB, !0), this._gl.generateMipmap(IB), this._bindTextureDirectly(IB, null)
      }
      unBindFramebuffer(BB, IB, ZB) {
        const TB = BB;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(BB, IB), ZB && (TB._MSAAFramebuffer && this._bindUnboundFramebuffer(TB._framebuffer), ZB()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(BB) {
        BB.isMulti || !BB.texture?.generateMipMaps || BB.isCube || this.generateMipmaps(BB.texture)
      }
      resolveFramebuffer(BB) {
        const IB = BB,
          ZB = this._gl;
        if (!IB._MSAAFramebuffer || IB.isMulti) return;
        let TB = IB.resolveMSAAColors ? ZB.COLOR_BUFFER_BIT : 0;
        TB |= IB._generateDepthBuffer && IB.resolveMSAADepth ? ZB.DEPTH_BUFFER_BIT : 0, TB |= IB._generateStencilBuffer && IB.resolveMSAAStencil ? ZB.STENCIL_BUFFER_BIT : 0, ZB.bindFramebuffer(ZB.READ_FRAMEBUFFER, IB._MSAAFramebuffer), ZB.bindFramebuffer(ZB.DRAW_FRAMEBUFFER, IB._framebuffer), ZB.blitFramebuffer(0, 0, BB.width, BB.height, 0, 0, BB.width, BB.height, TB, ZB.NEAREST)
      }
      flushFramebuffer() {
        this._gl.flush()
      }
      restoreDefaultFramebuffer() {
        this._currentRenderTarget ? this.unBindFramebuffer(this._currentRenderTarget) : this._bindUnboundFramebuffer(null), this._cachedViewport && this.setViewport(this._cachedViewport), this.wipeCaches()
      }
      _resetVertexBufferBinding() {
        this.bindArrayBuffer(null), this._cachedVertexBuffers = null
      }
      createVertexBuffer(BB, IB, ZB) {
        return this._createVertexBuffer(BB, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(BB, IB) {
        const ZB = this._gl.createBuffer();
        if (!ZB) throw new Error("Unable to create vertex buffer");
        const TB = new zB.d(ZB);
        return this.bindArrayBuffer(TB), "number" !== typeof BB ? BB instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(BB), IB), TB.ah = 4 * BB.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, BB, IB), TB.ah = BB.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(BB), IB), TB.ah = BB), this._resetVertexBufferBinding(), TB.references = 1, TB
      }
      createDynamicVertexBuffer(BB, IB) {
        return this._createVertexBuffer(BB, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(BB, IB, ZB) {
        const TB = this._gl.createBuffer(),
          JB = new zB.d(TB);
        if (!TB) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(JB);
        const oB = this._normalizeIndexData(BB);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, oB, IB ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), JB.references = 1, JB.is32Bits = 4 === oB.BYTES_PER_ELEMENT, JB
      }
      _normalizeIndexData(BB) {
        if (2 === BB.BYTES_PER_ELEMENT) return BB;
        if (this._caps.uintIndices) {
          if (BB instanceof Uint32Array) return BB;
          for (let IB = 0; IB < BB.length; IB++)
            if (BB[IB] >= 65535) return new Uint32Array(BB);
          return new Uint16Array(BB)
        }
        return new Uint16Array(BB)
      }
      bindArrayBuffer(BB) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(BB, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(BB, IB, ZB) {
        const TB = BB.program,
          JB = this._gl.getUniformBlockIndex(TB, IB);
        this._gl.uniformBlockBinding(TB, JB, ZB)
      }
      bindIndexBuffer(BB) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(BB, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(BB, IB) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[IB] !== BB) && (this._gl.bindBuffer(IB, BB ? BB.underlyingResource : null), this._currentBoundBuffer[IB] = BB)
      }
      updateArrayBuffer(BB) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, BB)
      }
      _vertexAttribPointer(BB, IB, ZB, TB, JB, oB, GB) {
        const vB = this._currentBufferPointers[IB];
        if (!vB) return;
        let kB = !1;
        vB.active ? (vB.buffer !== BB && (vB.buffer = BB, kB = !0), vB.size !== ZB && (vB.size = ZB, kB = !0), vB.type !== TB && (vB.type = TB, kB = !0), vB.normalized !== JB && (vB.normalized = JB, kB = !0), vB.stride !== oB && (vB.stride = oB, kB = !0), vB.offset !== GB && (vB.offset = GB, kB = !0)) : (kB = !0, vB.active = !0, vB.index = IB, vB.size = ZB, vB.type = TB, vB.normalized = JB, vB.stride = oB, vB.offset = GB, vB.buffer = BB), (kB || this._vaoRecordInProgress) && (this.bindArrayBuffer(BB), TB === this._gl.UNSIGNED_INT || TB === this._gl.INT ? this._gl.vertexAttribIPointer(IB, ZB, TB, oB, GB) : this._gl.vertexAttribPointer(IB, ZB, TB, JB, oB, GB))
      }
      _bindIndexBufferWithCache(BB) {
        null != BB && this._cachedIndexBuffer !== BB && (this._cachedIndexBuffer = BB, this.bindIndexBuffer(BB), this._uintIndicesCurrentlySet = BB.is32Bits)
      }
      _bindVertexBuffersAttributes(BB, IB, ZB) {
        const TB = IB.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let JB = 0; JB < TB.length; JB++) {
          const oB = IB.getAttributeLocation(JB);
          if (oB >= 0) {
            const IB = TB[JB];
            let GB = null;
            if (ZB && (GB = ZB[IB]), GB || (GB = BB[IB]), !GB) continue;
            this._gl.enableVertexAttribArray(oB), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[oB] = !0);
            const vB = GB.getBuffer();
            vB && (this._vertexAttribPointer(vB, oB, GB.getSize(), GB.type, GB.normalized, GB.byteStride, GB.byteOffset), GB.getIsInstanced() && (this._gl.vertexAttribDivisor(oB, GB.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(oB), this._currentInstanceBuffers.push(vB))))
          }
        }
      }
      recordVertexArrayObject(BB, IB, ZB, TB) {
        const JB = this._gl.createVertexArray();
        if (!JB) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(JB), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(BB, ZB, TB), this.bindIndexBuffer(IB), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), JB
      }
      bindVertexArrayObject(BB, IB) {
        this._cachedVertexArrayObject !== BB && (this._cachedVertexArrayObject = BB, this._gl.bindVertexArray(BB), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != IB && IB.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(BB, IB, ZB, TB, JB) {
        if (this._cachedVertexBuffers !== BB || this._cachedEffectForVertexBuffers !== JB) {
          this._cachedVertexBuffers = BB, this._cachedEffectForVertexBuffers = JB;
          const IB = JB.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let oB = 0;
          for (let GB = 0; GB < IB; GB++)
            if (GB < ZB.length) {
              const IB = JB.getAttributeLocation(GB);
              IB >= 0 && (this._gl.enableVertexAttribArray(IB), this._vertexAttribArraysEnabled[IB] = !0, this._vertexAttribPointer(BB, IB, ZB[GB], this._gl.FLOAT, !1, TB, oB)), oB += 4 * ZB[GB]
            }
        }
        this._bindIndexBufferWithCache(IB)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(BB, IB, ZB, TB) {
        this._cachedVertexBuffers === BB && this._cachedEffectForVertexBuffers === ZB || (this._cachedVertexBuffers = BB, this._cachedEffectForVertexBuffers = ZB, this._bindVertexBuffersAttributes(BB, ZB, TB)), this._bindIndexBufferWithCache(IB)
      }
      unbindInstanceAttributes() {
        let BB;
        for (let IB = 0, ZB = this._currentInstanceLocations.length; IB < ZB; IB++) {
          const ZB = this._currentInstanceBuffers[IB];
          BB != ZB && ZB.references && (BB = ZB, this.bindArrayBuffer(ZB));
          const TB = this._currentInstanceLocations[IB];
          this._gl.vertexAttribDivisor(TB, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(BB) {
        this._gl.deleteVertexArray(BB)
      }
      _releaseBuffer(BB) {
        return BB.references--, 0 === BB.references && (this._deleteBuffer(BB), !0)
      }
      _deleteBuffer(BB) {
        this._gl.deleteBuffer(BB.underlyingResource)
      }
      updateAndBindInstancesBuffer(BB, IB, ZB) {
        if (this.bindArrayBuffer(BB), IB && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, IB), void 0 !== ZB[0].index) this.bindInstancesBuffer(BB, ZB, !0);
        else
          for (let TB = 0; TB < 4; TB++) {
            const IB = ZB[TB];
            this._vertexAttribArraysEnabled[IB] || (this._gl.enableVertexAttribArray(IB), this._vertexAttribArraysEnabled[IB] = !0), this._vertexAttribPointer(BB, IB, 4, this._gl.FLOAT, !1, 64, 16 * TB), this._gl.vertexAttribDivisor(IB, 1), this._currentInstanceLocations.push(IB), this._currentInstanceBuffers.push(BB)
          }
      }
      bindInstancesBuffer(BB, IB) {
        let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(BB);
        let TB = 0;
        if (ZB)
          for (let JB = 0; JB < IB.length; JB++) {
            TB += 4 * IB[JB].attributeSize
          }
        for (let JB = 0; JB < IB.length; JB++) {
          const ZB = IB[JB];
          void 0 === ZB.index && (ZB.index = this._currentEffect.getAttributeLocationByName(ZB.attributeName)), ZB.index < 0 || (this._vertexAttribArraysEnabled[ZB.index] || (this._gl.enableVertexAttribArray(ZB.index), this._vertexAttribArraysEnabled[ZB.index] = !0), this._vertexAttribPointer(BB, ZB.index, ZB.attributeSize, ZB.attributeType || this._gl.FLOAT, ZB.normalized || !1, TB, ZB.offset), this._gl.vertexAttribDivisor(ZB.index, void 0 === ZB.divisor ? 1 : ZB.divisor), this._currentInstanceLocations.push(ZB.index), this._currentInstanceBuffers.push(BB))
        }
      }
      disableInstanceAttributeByName(BB) {
        if (!this._currentEffect) return;
        const IB = this._currentEffect.getAttributeLocationByName(BB);
        this.disableInstanceAttribute(IB)
      }
      disableInstanceAttribute(BB) {
        let IB, ZB = !1;
        for (; - 1 !== (IB = this._currentInstanceLocations.indexOf(BB));) this._currentInstanceLocations.splice(IB, 1), this._currentInstanceBuffers.splice(IB, 1), ZB = !0;
        ZB && (this._gl.vertexAttribDivisor(BB, 0), this.disableAttributeByIndex(BB))
      }
      disableAttributeByIndex(BB) {
        this._gl.disableVertexAttribArray(BB), this._vertexAttribArraysEnabled[BB] = !1, this._currentBufferPointers[BB].active = !1
      }
      draw(BB, IB, ZB, TB) {
        this.drawElementsType(BB ? 0 : 1, IB, ZB, TB)
      }
      drawPointClouds(BB, IB, ZB) {
        this.drawArraysType(2, BB, IB, ZB)
      }
      drawUnIndexed(BB, IB, ZB, TB) {
        this.drawArraysType(BB ? 0 : 1, IB, ZB, TB)
      }
      drawElementsType(BB, IB, ZB, TB) {
        this.applyStates(), this._reportDrawCall();
        const JB = this._drawMode(BB),
          oB = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          GB = this._uintIndicesCurrentlySet ? 4 : 2;
        TB ? this._gl.drawElementsInstanced(JB, ZB, oB, IB * GB, TB) : this._gl.drawElements(JB, ZB, oB, IB * GB)
      }
      drawArraysType(BB, IB, ZB, TB) {
        this.applyStates(), this._reportDrawCall();
        const JB = this._drawMode(BB);
        TB ? this._gl.drawArraysInstanced(JB, IB, ZB, TB) : this._gl.drawArrays(JB, IB, ZB)
      }
      _drawMode(BB) {
        switch (BB) {
          case 0:
          default:
            return this._gl.TRIANGLES;
          case 2:
          case 3:
            return this._gl.POINTS;
          case 1:
          case 4:
            return this._gl.LINES;
          case 5:
            return this._gl.LINE_LOOP;
          case 6:
            return this._gl.LINE_STRIP;
          case 7:
            return this._gl.TRIANGLE_STRIP;
          case 8:
            return this._gl.TRIANGLE_FAN
        }
      }
      _releaseEffect(BB) {
        this._compiledEffects[BB._key] && delete this._compiledEffects[BB._key];
        const IB = BB.getPipelineContext();
        IB && this._deletePipelineContext(IB)
      }
      _deletePipelineContext(BB) {
        const IB = BB;
        IB && IB.program && (IB.program.__SPECTOR_rebuildProgram = null, (0, yB.m)(IB), this._gl && (this._currentProgram === IB.program && this._setProgram(null), this._gl.deleteProgram(IB.program)))
      }
      _getGlobalDefines(BB) {
        return (0, qB.j)(BB, this.isNDCHalfZRange, this.iTB, this.useExactSrgbConversions)
      }
      createEffect(BB, IB, ZB, oB, GB, vB, kB, cB, nB) {
        let hB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          zB = arguments.length > 10 ? arguments[10] : void 0;
        const FB = "string" === typeof BB ? BB : BB.vertexToken || BB.vertexSource || BB.vertexElement || BB.vertex,
          NB = "string" === typeof BB ? BB : BB.fragmentToken || BB.fragmentSource || BB.fragmentElement || BB.fragment,
          gB = this._getGlobalDefines(),
          qB = void 0 !== IB.attributes;
        let yB = GB ?? IB.defines ?? "";
        gB && (yB += gB);
        const UB = FB + "+" + NB + "@" + yB;
        if (this._compiledEffects[UB]) {
          const BB = this._compiledEffects[UB];
          return kB && BB.isReady() && kB(BB), BB._refCount++, BB
        }
        this._gl && (0, JB.C)(this._gl);
        const WB = new TB.d(BB, IB, qB ? this : ZB, oB, this, GB, vB, kB, cB, nB, UB, IB.shaderLanguage ?? hB, IB.extraInitializationsAsync ?? zB);
        return this._compiledEffects[UB] = WB, WB
      }
      _getShaderSource(BB) {
        return this._gl.getShaderSource(BB)
      }
      createRawShaderProgram(BB, IB, ZB, TB) {
        let oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const GB = (0, JB.C)(this._gl);
        return GB._contextWasLost = this._contextWasLost, GB.validateShaderPrograms = this.validateShaderPrograms, (0, JB.u)(BB, IB, ZB, TB || this._gl, oB)
      }
      createShaderProgram(BB, IB, ZB, TB, oB) {
        let GB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const vB = (0, JB.C)(this._gl);
        return vB._contextWasLost = this._contextWasLost, vB.validateShaderPrograms = this.validateShaderPrograms, (0, JB.w)(BB, IB, ZB, TB, oB || this._gl, GB)
      }
      inlineShaderCode(BB) {
        return BB
      }
      createPipelineContext(BB) {
        if (this._gl) {
          (0, JB.C)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const IB = (0, JB.s)(this._gl, BB);
        return IB.engine = this, IB
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(BB) {
        return (0, JB.e)(BB, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(BB, IB, ZB, TB, oB, GB, vB, kB, cB, nB, hB) {
        const zB = (0, JB.C)(this._gl);
        return zB._contextWasLost = this._contextWasLost, zB.validateShaderPrograms = this.validateShaderPrograms, zB._createShaderProgramInjection = this._createShaderProgram.bind(this), zB.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), zB.createShaderProgramInjection = this.createShaderProgram.bind(this), zB.loadFileInjection = this._loadFile.bind(this), (0, JB.l)(BB, IB, ZB, TB, oB, GB, vB, kB, cB, nB, hB)
      }
      _createShaderProgram(BB, IB, ZB, TB) {
        let oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, JB.b)(BB, IB, ZB, TB, oB)
      }
      _isRenderingStateCompiled(BB) {
        return !this._isDisposed && (0, JB.i)(BB, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(BB, IB) {
        (0, JB.d)(BB, IB)
      }
      getUniforms(BB, IB) {
        const ZB = new Array,
          TB = BB;
        for (let JB = 0; JB < IB.length; JB++) ZB.push(this._gl.getUniformLocation(TB.program, IB[JB]));
        return ZB
      }
      getAttributes(BB, IB) {
        const ZB = [],
          TB = BB;
        for (let oB = 0; oB < IB.length; oB++) try {
          ZB.push(this._gl.getAttribLocation(TB.program, IB[oB]))
        } catch (JB) {
          ZB.push(-1)
        }
        return ZB
      }
      enableEffect(BB) {
        (BB = null !== BB && (0, GB.b)(BB) ? BB.effect : BB) && BB !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(BB), this._currentEffect = BB, BB.onBind && BB.onBind(BB), BB._onBindObservable && BB._onBindObservable.notifyObservers(BB))
      }
      setInt(BB, IB) {
        return !!BB && (this._gl.uniform1i(BB, IB), !0)
      }
      setInt2(BB, IB, ZB) {
        return !!BB && (this._gl.uniform2i(BB, IB, ZB), !0)
      }
      setInt3(BB, IB, ZB, TB) {
        return !!BB && (this._gl.uniform3i(BB, IB, ZB, TB), !0)
      }
      setInt4(BB, IB, ZB, TB, JB) {
        return !!BB && (this._gl.uniform4i(BB, IB, ZB, TB, JB), !0)
      }
      setIntArray(BB, IB) {
        return !!BB && (this._gl.uniform1iv(BB, IB), !0)
      }
      setIntArray2(BB, IB) {
        return !(!BB || IB.length % 2 !== 0) && (this._gl.uniform2iv(BB, IB), !0)
      }
      setIntArray3(BB, IB) {
        return !(!BB || IB.length % 3 !== 0) && (this._gl.uniform3iv(BB, IB), !0)
      }
      setIntArray4(BB, IB) {
        return !(!BB || IB.length % 4 !== 0) && (this._gl.uniform4iv(BB, IB), !0)
      }
      setUInt(BB, IB) {
        return !!BB && (this._gl.uniform1ui(BB, IB), !0)
      }
      setUInt2(BB, IB, ZB) {
        return !!BB && (this._gl.uniform2ui(BB, IB, ZB), !0)
      }
      setUInt3(BB, IB, ZB, TB) {
        return !!BB && (this._gl.uniform3ui(BB, IB, ZB, TB), !0)
      }
      setUInt4(BB, IB, ZB, TB, JB) {
        return !!BB && (this._gl.uniform4ui(BB, IB, ZB, TB, JB), !0)
      }
      setUIntArray(BB, IB) {
        return !!BB && (this._gl.uniform1uiv(BB, IB), !0)
      }
      setUIntArray2(BB, IB) {
        return !(!BB || IB.length % 2 !== 0) && (this._gl.uniform2uiv(BB, IB), !0)
      }
      setUIntArray3(BB, IB) {
        return !(!BB || IB.length % 3 !== 0) && (this._gl.uniform3uiv(BB, IB), !0)
      }
      setUIntArray4(BB, IB) {
        return !(!BB || IB.length % 4 !== 0) && (this._gl.uniform4uiv(BB, IB), !0)
      }
      setArray(BB, IB) {
        return !!BB && (!(IB.length < 1) && (this._gl.uniform1fv(BB, IB), !0))
      }
      setArray2(BB, IB) {
        return !(!BB || IB.length % 2 !== 0) && (this._gl.uniform2fv(BB, IB), !0)
      }
      setArray3(BB, IB) {
        return !(!BB || IB.length % 3 !== 0) && (this._gl.uniform3fv(BB, IB), !0)
      }
      setArray4(BB, IB) {
        return !(!BB || IB.length % 4 !== 0) && (this._gl.uniform4fv(BB, IB), !0)
      }
      setMatrices(BB, IB) {
        return !!BB && (this._gl.uniformMatrix4fv(BB, !1, IB), !0)
      }
      setMatrix3x3(BB, IB) {
        return !!BB && (this._gl.uniformMatrix3fv(BB, !1, IB), !0)
      }
      setMatrix2x2(BB, IB) {
        return !!BB && (this._gl.uniformMatrix2fv(BB, !1, IB), !0)
      }
      setFloat(BB, IB) {
        return !!BB && (this._gl.uniform1f(BB, IB), !0)
      }
      setFloat2(BB, IB, ZB) {
        return !!BB && (this._gl.uniform2f(BB, IB, ZB), !0)
      }
      setFloat3(BB, IB, ZB, TB) {
        return !!BB && (this._gl.uniform3f(BB, IB, ZB, TB), !0)
      }
      setFloat4(BB, IB, ZB, TB, JB) {
        return !!BB && (this._gl.uniform4f(BB, IB, ZB, TB, JB), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const BB = this._colorWrite;
          this._gl.colorMask(BB, BB, BB, BB)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(BB) {
        this.preventCacheWipeBetweenFrames && !BB || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), BB && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(BB, IB) {
        const ZB = this._gl;
        let TB = ZB.NEAREST,
          JB = ZB.NEAREST,
          oB = !1;
        switch (BB) {
          case 11:
            TB = ZB.LINEAR, JB = IB ? ZB.LINEAR_MIPMAP_NEAREST : ZB.LINEAR;
            break;
          case 3:
            TB = ZB.LINEAR, oB = !0, JB = IB ? ZB.LINEAR_MIPMAP_LINEAR : ZB.LINEAR;
            break;
          case 8:
            oB = !0, TB = ZB.NEAREST, JB = IB ? ZB.NEAREST_MIPMAP_LINEAR : ZB.NEAREST;
            break;
          case 4:
            TB = ZB.NEAREST, JB = IB ? ZB.NEAREST_MIPMAP_NEAREST : ZB.NEAREST;
            break;
          case 5:
            TB = ZB.NEAREST, JB = IB ? ZB.LINEAR_MIPMAP_NEAREST : ZB.LINEAR;
            break;
          case 6:
            oB = !0, TB = ZB.NEAREST, JB = IB ? ZB.LINEAR_MIPMAP_LINEAR : ZB.LINEAR;
            break;
          case 7:
            TB = ZB.NEAREST, JB = ZB.LINEAR;
            break;
          case 1:
            TB = ZB.NEAREST, JB = ZB.NEAREST;
            break;
          case 9:
            TB = ZB.LINEAR, JB = IB ? ZB.NEAREST_MIPMAP_NEAREST : ZB.NEAREST;
            break;
          case 10:
            oB = !0, TB = ZB.LINEAR, JB = IB ? ZB.NEAREST_MIPMAP_LINEAR : ZB.NEAREST;
            break;
          case 2:
            TB = ZB.LINEAR, JB = ZB.LINEAR;
            break;
          case 12:
            TB = ZB.LINEAR, JB = ZB.NEAREST
        }
        return {
          min: JB,
          mag: TB,
          hasMipMaps: oB
        }
      }
      _createTexture() {
        const BB = this._gl.createTexture();
        if (!BB) throw new Error("Unable to create texture");
        return BB
      }
      _createHardwareTexture() {
        return new NB.c(this._createTexture(), this._gl)
      }
      _createInternalTexture(BB, IB) {
        let ZB, TB, JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          oB = !1,
          GB = 0,
          kB = 3,
          cB = 5,
          nB = !1,
          hB = 1,
          zB = !1,
          FB = 0,
          NB = !1;
        void 0 !== IB && "object" === typeof IB ? (ZB = !!IB.generateMipMaps, oB = !!IB.createMipMaps, GB = void 0 === IB.type ? 0 : IB.type, kB = void 0 === IB.samplingMode ? 3 : IB.samplingMode, cB = void 0 === IB.format ? 5 : IB.format, nB = void 0 !== IB.useSRGBBuffer && IB.useSRGBBuffer, hB = IB.samples ?? 1, TB = IB.label, zB = !!IB.createMSAATexture, FB = IB.comparisonFunction || 0, NB = !!IB.isCube) : ZB = !!IB, nB && (nB = this._caps.supportSRGBBuffers && (this.cg > 1 || this.isWebGPU)), (1 !== GB || this._caps.textureFloatLinearFiltering) && (2 !== GB || this._caps.textureHalfFloatLinearFiltering) || (kB = 1), 1 !== GB || this._caps.textureFloat || (GB = 0, vB.d.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const qB = (0, UB.e)(cB),
          yB = (0, UB.c)(cB),
          WB = this._gl,
          dB = new gB.b(this, JB),
          CB = BB.width || BB,
          QB = BB.height || BB,
          sB = BB.depth || 0,
          wB = BB.layers || 0,
          OB = this._getSamplingParameters(kB, (ZB || oB) && !qB),
          YB = 0 !== wB ? WB.TEXTURE_2D_ARRAY : 0 !== sB ? WB.TEXTURE_3D : NB ? WB.TEXTURE_CUBE_MAP : WB.TEXTURE_2D,
          iB = qB ? this._getInternalFormatFromDepthTextureFormat(cB, !0, yB) : this._getRGBABufferInternalSizedFormat(GB, cB, nB),
          pB = qB ? yB ? WB.DEPTH_STENCIL : WB.DEPTH_COMPONENT : this._getInternalFormat(cB),
          aB = qB ? this._getWebGLTextureTypeFromDepthTextureFormat(cB) : this._getWebGLTextureType(GB);
        if (this._bindTextureDirectly(YB, dB), 0 !== wB) dB.is2DArray = !0, WB.texImage3D(YB, 0, iB, CB, QB, wB, 0, pB, aB, null);
        else if (0 !== sB) dB.is3D = !0, WB.texImage3D(YB, 0, iB, CB, QB, sB, 0, pB, aB, null);
        else if (NB) {
          dB.isCube = !0;
          for (let BB = 0; BB < 6; BB++) WB.texImage2D(WB.TEXTURE_CUBE_MAP_POSITIVE_X + BB, 0, iB, CB, QB, 0, pB, aB, null)
        } else WB.texImage2D(YB, 0, iB, CB, QB, 0, pB, aB, null);
        if (WB.texParameteri(YB, WB.TEXTURE_MAG_FILTER, OB.mag), WB.texParameteri(YB, WB.TEXTURE_MIN_FILTER, OB.min), WB.texParameteri(YB, WB.TEXTURE_WRAP_S, WB.CLAMP_TO_EDGE), WB.texParameteri(YB, WB.TEXTURE_WRAP_T, WB.CLAMP_TO_EDGE), qB && this.cg > 1 && (0 === FB ? (WB.texParameteri(YB, WB.TEXTURE_COMPARE_FUNC, 515), WB.texParameteri(YB, WB.TEXTURE_COMPARE_MODE, WB.NONE)) : (WB.texParameteri(YB, WB.TEXTURE_COMPARE_FUNC, FB), WB.texParameteri(YB, WB.TEXTURE_COMPARE_MODE, WB.COMPARE_REF_TO_TEXTURE))), (ZB || oB) && this._gl.generateMipmap(YB), this._bindTextureDirectly(YB, null), dB._useSRGBBuffer = nB, dB.baseWidth = CB, dB.baseHeight = QB, dB.width = CB, dB.height = QB, dB.depth = wB || sB, dB.isReady = !0, dB.samples = hB, dB.generateMipMaps = ZB, dB.samplingMode = kB, dB.type = GB, dB.format = cB, dB.label = TB, dB.comparisonFunction = FB, this._internalTexturesCache.push(dB), zB) {
          let BB;
          if (BB = (0, UB.e)(dB.format) ? this._setupFramebufferDepthAttachments((0, UB.c)(dB.format), 19 !== dB.format, dB.width, dB.height, hB, dB.format, !0) : this._createRenderBuffer(dB.width, dB.height, hB, -1, this._getRGBABufferInternalSizedFormat(dB.type, dB.format, dB._useSRGBBuffer), -1), !BB) throw new Error("Unable to create render buffer");
          dB._autoMSAAManagement = !0;
          let IB = dB._hardwareTexture;
          IB || (IB = dB._hardwareTexture = this._createHardwareTexture()), IB.addMSAARenderBuffer(BB)
        }
        return dB
      }
      _getUseSRGBBuffer(BB, IB) {
        return BB && this._caps.supportSRGBBuffers && (this.cg > 1 || IB)
      }
      createTexture(BB, IB, ZB, TB) {
        var JB = this;
        let oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          GB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          vB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          kB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          cB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          nB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          hB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          zB = arguments.length > 11 ? arguments[11] : void 0,
          FB = arguments.length > 12 ? arguments[12] : void 0,
          NB = arguments.length > 13 ? arguments[13] : void 0,
          qB = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(BB, IB, ZB, TB, oB, GB, vB, (function() {
          for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
          return JB._prepareWebGLTexture(...IB, nB)
        }), ((BB, IB, ZB, JB, oB, GB) => {
          const vB = this._gl,
            kB = ZB.width === BB && ZB.height === IB;
          oB._creationFlags = NB ?? 0;
          const cB = this._getTexImageParametersForCreateTexture(oB.format, oB._useSRGBBuffer);
          if (kB) return vB.texImage2D(vB.TEXTURE_2D, 0, cB.internalFormat, cB.format, cB.type, ZB), !1;
          const nB = this._caps.maxTextureSize;
          if (ZB.width > nB || ZB.height > nB || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = BB, this._workingCanvas.height = IB, this._workingContext.drawImage(ZB, 0, 0, ZB.width, ZB.height, 0, 0, BB, IB), vB.texImage2D(vB.TEXTURE_2D, 0, cB.internalFormat, cB.format, cB.type, this._workingCanvas), oB.width = BB, oB.height = IB, !1);
          {
            const BB = new gB.b(this, 2);
            this._bindTextureDirectly(vB.TEXTURE_2D, BB, !0), vB.texImage2D(vB.TEXTURE_2D, 0, cB.internalFormat, cB.format, cB.type, ZB), this._rescaleTexture(BB, oB, TB, cB.format, (() => {
              this._releaseTexture(BB), this._bindTextureDirectly(vB.TEXTURE_2D, oB, !0), GB()
            }))
          }
          return !0
        }), kB, cB, nB, hB, zB, FB, qB)
      }
      _getTexImageParametersForCreateTexture(BB, IB) {
        let ZB, TB;
        return 1 === this.cg ? (ZB = this._getInternalFormat(BB, IB), TB = ZB) : (ZB = this._getInternalFormat(BB, !1), TB = this._getRGBABufferInternalSizedFormat(0, BB, IB)), {
          internalFormat: TB,
          format: ZB,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(BB, IB, ZB, TB, JB) {}
      _unpackFlipY(BB) {
        this._unpackFlipYCached !== BB && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, BB ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = BB))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(BB) {
        return BB.isCube ? this._gl.TEXTURE_CUBE_MAP : BB.is3D ? this._gl.TEXTURE_3D : BB.is2DArray || BB.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const TB = this._getTextureTarget(IB),
          JB = this._getSamplingParameters(BB, IB.useMipMaps || ZB);
        this._setTextureParameterInteger(TB, this._gl.TEXTURE_MAG_FILTER, JB.mag, IB), this._setTextureParameterInteger(TB, this._gl.TEXTURE_MIN_FILTER, JB.min), ZB && JB.hasMipMaps && (IB.generateMipMaps = !0, this._gl.generateMipmap(TB)), this._bindTextureDirectly(TB, null), IB.samplingMode = BB
      }
      updateTextureDimensions(BB, IB, ZB) {}
      updateTextureWrappingMode(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const JB = this._getTextureTarget(BB);
        null !== IB && (this._setTextureParameterInteger(JB, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(IB), BB), BB._cachedWrapU = IB), null !== ZB && (this._setTextureParameterInteger(JB, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(ZB), BB), BB._cachedWrapV = ZB), (BB.is2DArray || BB.is3D) && null !== TB && (this._setTextureParameterInteger(JB, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(TB), BB), BB._cachedWrapR = TB), this._bindTextureDirectly(JB, null)
      }
      _uploadCompressedDataToTextureDirectly(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          GB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const vB = this._gl;
        let kB = vB.TEXTURE_2D;
        if (BB.isCube && (kB = vB.TEXTURE_CUBE_MAP_POSITIVE_X + oB), BB._useSRGBBuffer) switch (IB) {
          case 37492:
          case 36196:
            this._caps.etc2 ? IB = vB.COMPRESSED_SRGB8_ETC2 : BB._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? IB = vB.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : BB._useSRGBBuffer = !1;
            break;
          case 36492:
            IB = vB.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            IB = vB.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            IB = vB.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            IB = vB.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            IB = vB.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            IB = vB.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            IB = vB.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            IB = vB.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            IB = vB.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            IB = vB.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            IB = vB.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            IB = vB.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            IB = vB.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            IB = vB.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            IB = vB.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? IB = vB.COMPRESSED_SRGB_S3TC_DXT1_EXT : BB._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? IB = vB.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : BB._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? IB = vB.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : BB._useSRGBBuffer = !1;
            break;
          default:
            BB._useSRGBBuffer = !1
        }
        if (BB.generateMipMaps) {
          const oB = BB._hardwareTexture;
          oB.memoryAllocated || (vB.texStorage2D(BB.isCube ? vB.TEXTURE_CUBE_MAP : vB.TEXTURE_2D, Math.floor(Math.log2(Math.max(ZB, TB))) + 1, IB, BB.width, BB.height), oB.memoryAllocated = !0), this._gl.compressedTexSubImage2D(kB, GB, 0, 0, ZB, TB, IB, JB)
        } else this._gl.compressedTexImage2D(kB, GB, IB, ZB, TB, 0, JB)
      }
      _uploadDataToTextureDirectly(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          JB = arguments.length > 4 ? arguments[4] : void 0,
          oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const GB = this._gl,
          vB = this._getWebGLTextureType(BB.type),
          kB = this._getInternalFormat(BB.format),
          cB = void 0 === JB ? this._getRGBABufferInternalSizedFormat(BB.type, BB.format, BB._useSRGBBuffer) : this._getInternalFormat(JB, BB._useSRGBBuffer);
        this._unpackFlipY(BB.invertY);
        let nB = GB.TEXTURE_2D;
        BB.isCube && (nB = GB.TEXTURE_CUBE_MAP_POSITIVE_X + ZB);
        const hB = Math.round(Math.log(BB.width) * Math.LOG2E),
          zB = Math.round(Math.log(BB.height) * Math.LOG2E),
          FB = oB ? BB.width : Math.pow(2, Math.max(hB - TB, 0)),
          NB = oB ? BB.height : Math.pow(2, Math.max(zB - TB, 0));
        GB.texImage2D(nB, TB, cB, FB, NB, 0, kB, vB, IB)
      }
      updateTextureData(BB, IB, ZB, TB, JB, oB) {
        let GB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          vB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          kB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const cB = this._gl,
          nB = this._getWebGLTextureType(BB.type),
          hB = this._getInternalFormat(BB.format);
        this._unpackFlipY(BB.invertY);
        let zB = cB.TEXTURE_2D,
          FB = cB.TEXTURE_2D;
        BB.isCube && (FB = cB.TEXTURE_CUBE_MAP_POSITIVE_X + GB, zB = cB.TEXTURE_CUBE_MAP), this._bindTextureDirectly(zB, BB, !0), cB.texSubImage2D(FB, vB, ZB, TB, JB, oB, hB, nB, IB), kB && this._gl.generateMipmap(FB), this._bindTextureDirectly(zB, null)
      }
      _uploadArrayBufferViewToTexture(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const JB = this._gl,
          oB = BB.isCube ? JB.TEXTURE_CUBE_MAP : JB.TEXTURE_2D;
        this._bindTextureDirectly(oB, BB, !0), this._uploadDataToTextureDirectly(BB, IB, ZB, TB), this._bindTextureDirectly(oB, null, !0)
      }
      _prepareWebGLTextureContinuation(BB, IB, ZB, TB, JB) {
        const oB = this._gl;
        if (!oB) return;
        const GB = this._getSamplingParameters(JB, !ZB);
        oB.texParameteri(oB.TEXTURE_2D, oB.TEXTURE_MAG_FILTER, GB.mag), oB.texParameteri(oB.TEXTURE_2D, oB.TEXTURE_MIN_FILTER, GB.min), ZB || TB || oB.generateMipmap(oB.TEXTURE_2D), this._bindTextureDirectly(oB.TEXTURE_2D, null), IB && IB.removePendingData(BB), BB.onLoadedObservable.notifyObservers(BB), BB.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB) {
        const nB = this.getCaps().maxTextureSize,
          hB = Math.min(nB, this.needPOTTextures ? (0, FB.f)(TB.width, nB) : TB.width),
          zB = Math.min(nB, this.needPOTTextures ? (0, FB.f)(TB.height, nB) : TB.height),
          NB = this._gl;
        NB && (BB._hardwareTexture ? (this._bindTextureDirectly(NB.TEXTURE_2D, BB, !0), this._unpackFlipY(void 0 === JB || !!JB), BB.baseWidth = TB.width, BB.baseHeight = TB.height, BB.width = hB, BB.height = zB, BB.isReady = !0, BB.type = -1 !== BB.type ? BB.type : 0, BB.format = -1 !== BB.format ? BB.format : cB ?? (".jpg" !== IB || BB._useSRGBBuffer ? 5 : 4), vB(hB, zB, TB, IB, BB, (() => {
          this._prepareWebGLTextureContinuation(BB, ZB, oB, GB, kB)
        })) || this._prepareWebGLTextureContinuation(BB, ZB, oB, GB, kB)) : ZB && ZB.removePendingData(BB))
      }
      _getInternalFormatFromDepthTextureFormat(BB, IB, ZB) {
        const TB = this._gl;
        if (!IB) return TB.STENCIL_INDEX8;
        let JB = ZB ? TB.DEPTH_STENCIL : TB.DEPTH_COMPONENT;
        return this.cg > 1 ? 15 === BB ? JB = TB.DEPTH_COMPONENT16 : 16 === BB ? JB = TB.DEPTH_COMPONENT24 : 17 === BB || 13 === BB ? JB = ZB ? TB.DEPTH24_STENCIL8 : TB.DEPTH_COMPONENT24 : 14 === BB ? JB = TB.DEPTH_COMPONENT32F : 18 === BB && (JB = ZB ? TB.DEPTH32F_STENCIL8 : TB.DEPTH_COMPONENT32F) : JB = TB.DEPTH_COMPONENT16, JB
      }
      _getWebGLTextureTypeFromDepthTextureFormat(BB) {
        const IB = this._gl;
        let ZB = IB.UNSIGNED_INT;
        return 15 === BB ? ZB = IB.UNSIGNED_SHORT : 17 === BB || 13 === BB ? ZB = IB.UNSIGNED_INT_24_8 : 14 === BB ? ZB = IB.FLOAT : 18 === BB ? ZB = IB.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === BB && (ZB = IB.UNSIGNED_BYTE), ZB
      }
      _setupFramebufferDepthAttachments(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          oB = arguments.length > 5 ? arguments[5] : void 0,
          GB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const vB = this._gl;
        oB = oB ?? (BB ? 13 : 14);
        const kB = this._getInternalFormatFromDepthTextureFormat(oB, IB, BB);
        return BB && IB ? this._createRenderBuffer(ZB, TB, JB, vB.DEPTH_STENCIL, kB, GB ? -1 : vB.DEPTH_STENCIL_ATTACHMENT) : IB ? this._createRenderBuffer(ZB, TB, JB, kB, kB, GB ? -1 : vB.DEPTH_ATTACHMENT) : BB ? this._createRenderBuffer(ZB, TB, JB, kB, kB, GB ? -1 : vB.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(BB, IB, ZB, TB, JB, oB) {
        let GB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const vB = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(vB, BB, IB, ZB, TB, JB, oB, GB)
      }
      _updateRenderBuffer(BB, IB, ZB, TB, JB, oB, GB) {
        let vB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const kB = this._gl;
        return kB.bindRenderbuffer(kB.RENDERBUFFER, BB), TB > 1 && kB.renderbufferStorageMultisample ? kB.renderbufferStorageMultisample(kB.RENDERBUFFER, TB, oB, IB, ZB) : kB.renderbufferStorage(kB.RENDERBUFFER, JB, IB, ZB), -1 !== GB && kB.framebufferRenderbuffer(kB.FRAMEBUFFER, GB, kB.RENDERBUFFER, BB), vB && kB.bindRenderbuffer(kB.RENDERBUFFER, null), BB
      }
      _releaseTexture(BB) {
        this._deleteTexture(BB._hardwareTexture), this.unbindAllTextures();
        const IB = this._internalTexturesCache.indexOf(BB); - 1 !== IB && this._internalTexturesCache.splice(IB, 1), BB._lodTextureHigh && BB._lodTextureHigh.dispose(), BB._lodTextureMid && BB._lodTextureMid.dispose(), BB._lodTextureLow && BB._lodTextureLow.dispose(), BB._irradianceTexture && BB._irradianceTexture.dispose()
      }
      _deleteTexture(BB) {
        BB?.release()
      }
      _setProgram(BB) {
        this._currentProgram !== BB && ((0, JB.o)(BB, this._gl), this._currentProgram = BB)
      }
      bindSamplers(BB) {
        const IB = BB.getPipelineContext();
        this._setProgram(IB.program);
        const ZB = BB.getSamplers();
        for (let TB = 0; TB < ZB.length; TB++) {
          const IB = BB.getUniform(ZB[TB]);
          IB && (this._boundUniforms[TB] = IB)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          JB = !1;
        const oB = IB && IB._associatedChannel > -1;
        ZB && oB && (this._activeChannel = IB._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== IB || TB) {
          if (this._activateCurrentTexture(), IB && IB.isMultiview) throw vB.d.Error(["_bindTextureDirectly called with a multiview texture!", BB, IB]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(BB, IB?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = IB, IB && (IB._associatedChannel = this._activeChannel)
        } else ZB && (JB = !0, this._activateCurrentTexture());
        return oB && !ZB && this._bindSamplerUniformToChannel(IB._associatedChannel, this._activeChannel), JB
      }
      _bindTexture(BB, IB, ZB) {
        if (void 0 === BB) return;
        IB && (IB._associatedChannel = BB), this._activeChannel = BB;
        const TB = IB ? this._getTextureTarget(IB) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(TB, IB)
      }
      unbindAllTextures() {
        for (let BB = 0; BB < this._maxSimultaneousTextures; BB++) this._activeChannel = BB, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.cg > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(BB, IB, ZB, TB) {
        void 0 !== BB && (IB && (this._boundUniforms[BB] = IB), this._setTexture(BB, ZB))
      }
      _bindSamplerUniformToChannel(BB, IB) {
        const ZB = this._boundUniforms[BB];
        ZB && ZB._currentState !== IB && (this._gl.uniform1i(ZB, IB), ZB._currentState = IB)
      }
      _getTextureWrapMode(BB) {
        switch (BB) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(BB, IB) {
        let ZB, TB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!IB) return null != this._boundTexturesCache[BB] && (this._activeChannel = BB, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.cg > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (IB.video) {
          this._activeChannel = BB;
          const ZB = IB.getInternalTexture();
          ZB && (ZB._associatedChannel = BB), IB.update()
        } else if (4 === IB.delayLoadState) return IB.delayLoad(), !1;
        ZB = JB ? IB.depthStencilTexture : IB.isReady() ? IB.getInternalTexture() : IB.isCube ? this.emptyCubeTexture : IB.is3D ? this.emptyTexture3D : IB.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !TB && ZB && (ZB._associatedChannel = BB);
        let oB = !0;
        this._boundTexturesCache[BB] === ZB && (TB || this._bindSamplerUniformToChannel(ZB._associatedChannel, BB), oB = !1), this._activeChannel = BB;
        const GB = this._getTextureTarget(ZB);
        if (oB && this._bindTextureDirectly(GB, ZB, TB), ZB && !ZB.isMultiview) {
          if (ZB.isCube && ZB._cachedCoordinatesMode !== IB.coordinatesMode) {
            ZB._cachedCoordinatesMode = IB.coordinatesMode;
            const BB = 3 !== IB.coordinatesMode && 5 !== IB.coordinatesMode ? 1 : 0;
            IB.wrapU = BB, IB.wrapV = BB
          }
          ZB._cachedWrapU !== IB.wrapU && (ZB._cachedWrapU = IB.wrapU, this._setTextureParameterInteger(GB, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(IB.wrapU), ZB)), ZB._cachedWrapV !== IB.wrapV && (ZB._cachedWrapV = IB.wrapV, this._setTextureParameterInteger(GB, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(IB.wrapV), ZB)), ZB.is3D && ZB._cachedWrapR !== IB.wrapR && (ZB._cachedWrapR = IB.wrapR, this._setTextureParameterInteger(GB, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(IB.wrapR), ZB)), this._setAnisotropicLevel(GB, ZB, IB.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(BB, IB, ZB, TB) {
        if (void 0 !== BB && IB) {
          this._textureUnits && this._textureUnits.length === ZB.length || (this._textureUnits = new Int32Array(ZB.length));
          for (let IB = 0; IB < ZB.length; IB++) {
            const TB = ZB[IB].getInternalTexture();
            TB ? (this._textureUnits[IB] = BB + IB, TB._associatedChannel = BB + IB) : this._textureUnits[IB] = -1
          }
          this._gl.uniform1iv(IB, this._textureUnits);
          for (let BB = 0; BB < ZB.length; BB++) this._setTexture(this._textureUnits[BB], ZB[BB], !0)
        }
      }
      _setAnisotropicLevel(BB, IB, ZB) {
        const TB = this._caps.textureAnisotropicFilterExtension;
        11 !== IB.samplingMode && 3 !== IB.samplingMode && 2 !== IB.samplingMode && (ZB = 1), TB && IB._cachedAnisotropicFilteringLevel !== ZB && (this._setTextureParameterFloat(BB, TB.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(ZB, this._caps.maxAnisotropy), IB), IB._cachedAnisotropicFilteringLevel = ZB)
      }
      _setTextureParameterFloat(BB, IB, ZB, TB) {
        this._bindTextureDirectly(BB, TB, !0, !0), this._gl.texParameterf(BB, IB, ZB)
      }
      _setTextureParameterInteger(BB, IB, ZB, TB) {
        TB && this._bindTextureDirectly(BB, TB, !0, !0), this._gl.texParameteri(BB, IB, ZB)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let BB = 0; BB < this._caps.maxVertexAttribs; BB++) this.disableAttributeByIndex(BB)
        } else
          for (let BB = 0, IB = this._vertexAttribArraysEnabled.length; BB < IB; BB++) BB >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[BB] || this.disableAttributeByIndex(BB)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, kB.l)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, JB.y)(this._gl)
      }
      attachContextLostEvent(BB) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", BB, !1)
      }
      attachContextRestoredEvent(BB) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", BB, !1)
      }
      getError() {
        return this._gl.getError()
      }
      _canRenderToFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(1)
      }
      _canRenderToHalfFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(2)
      }
      _canRenderToFramebuffer(BB) {
        const IB = this._gl;
        for (; IB.getError() !== IB.NO_ERROR;);
        let ZB = !0;
        const TB = IB.createTexture();
        IB.bindTexture(IB.TEXTURE_2D, TB), IB.texImage2D(IB.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(BB), 1, 1, 0, IB.RGBA, this._getWebGLTextureType(BB), null), IB.texParameteri(IB.TEXTURE_2D, IB.TEXTURE_MIN_FILTER, IB.NEAREST), IB.texParameteri(IB.TEXTURE_2D, IB.TEXTURE_MAG_FILTER, IB.NEAREST);
        const JB = IB.createFramebuffer();
        IB.bindFramebuffer(IB.FRAMEBUFFER, JB), IB.framebufferTexture2D(IB.FRAMEBUFFER, IB.COLOR_ATTACHMENT0, IB.TEXTURE_2D, TB, 0);
        const oB = IB.checkFramebufferStatus(IB.FRAMEBUFFER);
        if (ZB = ZB && oB === IB.FRAMEBUFFER_COMPLETE, ZB = ZB && IB.getError() === IB.NO_ERROR, ZB && (IB.clear(IB.COLOR_BUFFER_BIT), ZB = ZB && IB.getError() === IB.NO_ERROR), ZB) {
          IB.bindFramebuffer(IB.FRAMEBUFFER, null);
          const BB = IB.RGBA,
            TB = IB.UNSIGNED_BYTE,
            JB = new Uint8Array(4);
          IB.readPixels(0, 0, 1, 1, BB, TB, JB), ZB = ZB && IB.getError() === IB.NO_ERROR
        }
        for (IB.deleteTexture(TB), IB.deleteFramebuffer(JB), IB.bindFramebuffer(IB.FRAMEBUFFER, null); !ZB && IB.getError() !== IB.NO_ERROR;);
        return ZB
      }
      _getWebGLTextureType(BB) {
        if (1 === this._webGLVersion) {
          switch (BB) {
            case 1:
              return this._gl.FLOAT;
            case 2:
              return this._gl.HALF_FLOAT_OES;
            case 0:
              return this._gl.UNSIGNED_BYTE;
            case 8:
              return this._gl.UNSIGNED_SHORT_4_4_4_4;
            case 9:
              return this._gl.UNSIGNED_SHORT_5_5_5_1;
            case 10:
              return this._gl.UNSIGNED_SHORT_5_6_5
          }
          return this._gl.UNSIGNED_BYTE
        }
        switch (BB) {
          case 3:
            return this._gl.BYTE;
          case 0:
            return this._gl.UNSIGNED_BYTE;
          case 4:
            return this._gl.SHORT;
          case 5:
            return this._gl.UNSIGNED_SHORT;
          case 6:
            return this._gl.INT;
          case 7:
            return this._gl.UNSIGNED_INT;
          case 1:
            return this._gl.FLOAT;
          case 2:
            return this._gl.HALF_FLOAT;
          case 8:
            return this._gl.UNSIGNED_SHORT_4_4_4_4;
          case 9:
            return this._gl.UNSIGNED_SHORT_5_5_5_1;
          case 10:
            return this._gl.UNSIGNED_SHORT_5_6_5;
          case 11:
            return this._gl.UNSIGNED_INT_2_10_10_10_REV;
          case 12:
            return this._gl.UNSIGNED_INT_24_8;
          case 13:
            return this._gl.UNSIGNED_INT_10F_11F_11F_REV;
          case 14:
            return this._gl.UNSIGNED_INT_5_9_9_9_REV;
          case 15:
            return this._gl.FLOAT_32_UNSIGNED_INT_24_8_REV
        }
        return this._gl.UNSIGNED_BYTE
      }
      _getInternalFormat(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = IB ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (BB) {
          case 0:
            ZB = this._gl.ALPHA;
            break;
          case 1:
            ZB = this._gl.LUMINANCE;
            break;
          case 2:
            ZB = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            ZB = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            ZB = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            ZB = IB ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            ZB = IB ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (BB) {
          case 8:
            ZB = this._gl.RED_INTEGER;
            break;
          case 9:
            ZB = this._gl.RG_INTEGER;
            break;
          case 10:
            ZB = this._gl.RGB_INTEGER;
            break;
          case 11:
            ZB = this._gl.RGBA_INTEGER
        }
        return ZB
      }
      _getRGBABufferInternalSizedFormat(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== IB) switch (IB) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return ZB ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (BB) {
          case 3:
            switch (IB) {
              case 6:
                return this._gl.R8_SNORM;
              case 7:
                return this._gl.RG8_SNORM;
              case 4:
                return this._gl.RGB8_SNORM;
              case 8:
                return this._gl.R8I;
              case 9:
                return this._gl.RG8I;
              case 10:
                return this._gl.RGB8I;
              case 11:
                return this._gl.RGBA8I;
              default:
                return this._gl.RGBA8_SNORM
            }
          case 0:
            switch (IB) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return ZB ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return ZB ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
              case 8:
                return this._gl.R8UI;
              case 9:
                return this._gl.RG8UI;
              case 10:
                return this._gl.RGB8UI;
              case 11:
                return this._gl.RGBA8UI;
              case 0:
                return this._gl.ALPHA;
              case 1:
                return this._gl.LUMINANCE;
              case 2:
                return this._gl.LUMINANCE_ALPHA;
              default:
                return this._gl.RGBA8
            }
          case 4:
            switch (IB) {
              case 8:
                return this._gl.R16I;
              case 36760:
                return this._gl.R16_SNORM_EXT;
              case 36761:
                return this._gl.RG16_SNORM_EXT;
              case 36762:
                return this._gl.RGB16_SNORM_EXT;
              case 36763:
                return this._gl.RGBA16_SNORM_EXT;
              case 9:
                return this._gl.RG16I;
              case 10:
                return this._gl.RGB16I;
              default:
                return this._gl.RGBA16I
            }
          case 5:
            switch (IB) {
              case 8:
                return this._gl.R16UI;
              case 33322:
                return this._gl.R16_EXT;
              case 33324:
                return this._gl.RG16_EXT;
              case 32852:
                return this._gl.RGB16_EXT;
              case 32859:
                return this._gl.RGBA16_EXT;
              case 9:
                return this._gl.RG16UI;
              case 10:
                return this._gl.RGB16UI;
              default:
                return this._gl.RGBA16UI
            }
          case 6:
            switch (IB) {
              case 8:
                return this._gl.R32I;
              case 9:
                return this._gl.RG32I;
              case 10:
                return this._gl.RGB32I;
              default:
                return this._gl.RGBA32I
            }
          case 7:
            switch (IB) {
              case 8:
                return this._gl.R32UI;
              case 9:
                return this._gl.RG32UI;
              case 10:
                return this._gl.RGB32UI;
              default:
                return this._gl.RGBA32UI
            }
          case 1:
            switch (IB) {
              case 6:
                return this._gl.R32F;
              case 7:
                return this._gl.RG32F;
              case 4:
                return this._gl.RGB32F;
              default:
                return this._gl.RGBA32F
            }
          case 2:
            switch (IB) {
              case 6:
                return this._gl.R16F;
              case 7:
                return this._gl.RG16F;
              case 4:
                return this._gl.RGB16F;
              default:
                return this._gl.RGBA16F
            }
          case 10:
            return this._gl.RGB565;
          case 13:
            return this._gl.R11F_G11F_B10F;
          case 14:
            return this._gl.RGB9_E5;
          case 8:
            return this._gl.RGBA4;
          case 9:
            return this._gl.RGB5_A1;
          case 11:
            switch (IB) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return ZB ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(BB, IB, ZB, TB) {
        let JB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          oB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          GB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const kB = JB ? 4 : 3,
          cB = JB ? this._gl.RGBA : this._gl.RGB,
          nB = ZB * TB * kB;
        if (GB) {
          if (GB.length < nB) return vB.d.Error(`Data buffer is too small to store the read pixels (${GB.length} should be more than ${nB})`), Promise.resolve(GB)
        } else GB = new Uint8Array(nB);
        return oB && this.flushFramebuffer(), this._gl.readPixels(BB, IB, ZB, TB, cB, this._gl.UNSIGNED_BYTE, GB), Promise.resolve(GB)
      }
      static get IsSupportedAsync() {
        return Promise.resolve(this.isSupported())
      }
      static get IsSupported() {
        return this.isSupported()
      }
      static isSupported() {
        if (null !== this._HasMajorPerformanceCaveat) return !this._HasMajorPerformanceCaveat;
        if (null === this._IsSupported) try {
          const BB = oB.c._CreateCanvas(1, 1),
            IB = BB.getContext("webgl") || BB.getContext("experimental-webgl");
          this._IsSupported = null != IB && !!globalThis.WebGLRenderingContext
        } catch (BB) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const BB = oB.c._CreateCanvas(1, 1),
            IB = BB.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || BB.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !IB
        } catch (BB) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    CB._TempClearColorUint32 = new Uint32Array(4), CB._TempClearColorInt32 = new Int32Array(4), CB._TempClearColorFloat32 = new Float32Array(4), CB.ExceptionList = [{
      key: "Chrome/63.0",
      capture: "63\\.0\\.3239\\.(\\d+)",
      captureConstraint: 108,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/58",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/59",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/72.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/73.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/74.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/71",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/72",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/12\\d\\..+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: ".*AppleWebKit.*(15.4).*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }, {
      key: ".*(15.4).*AppleWebKit.*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }], CB._ConcatenateShader = qB.g, CB._IsSupported = null, CB._HasMajorPerformanceCaveat = null
  },
  40232: (BB, IB, ZB) => {
    var TB;
    ZB.d(IB, {
        d: () => JB
      }),
      function(BB) {
        BB[BB.PointerMove = 0] = "PointerMove", BB[BB.PointerDown = 1] = "PointerDown", BB[BB.PointerUp = 2] = "PointerUp"
      }(TB || (TB = {}));
    class JB {}
    JB.DOM_DELTA_PIXEL = 0, JB.DOM_DELTA_LINE = 1, JB.DOM_DELTA_PAGE = 2
  },
  40226: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB,
      e: () => oB,
      h: () => JB
    });
    class TB {}
    TB.KEYDOWN = 1, TB.KEYUP = 2;
    class JB {
      constructor(BB, IB) {
        this.type = BB, this.event = IB
      }
    }
    class oB extends JB {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(BB) {
        this.skipOnKeyboardObservable = BB
      }
      constructor(BB, IB) {
        super(BB, IB), this.type = BB, this.event = IB, this.skipOnKeyboardObservable = !1
      }
    }
  },
  40224: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB,
      g: () => GB,
      i: () => vB
    });
    var TB = ZB(37120);
    class JB {}
    JB.POINTERDOWN = 1, JB.POINTERUP = 2, JB.POINTERMOVE = 4, JB.POINTERWHEEL = 8, JB.POINTERPICK = 16, JB.POINTERTAP = 32, JB.POINTERDOUBLETAP = 64;
    class oB {
      constructor(BB, IB) {
        this.type = BB, this.event = IB
      }
    }
    class GB extends oB {
      constructor(BB, IB, ZB, JB) {
        super(BB, IB), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new TB.p(ZB, JB)
      }
    }
    class vB extends oB {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(BB, IB), this._pickInfo = ZB, this._inputManager = TB
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  40245: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB
    });
    class TB {
      static CompareLightsPriority(BB, IB) {
        return BB.shadowEnabled !== IB.shadowEnabled ? (IB.shadowEnabled ? 1 : 0) - (BB.shadowEnabled ? 1 : 0) : IB.renderPriority - BB.renderPriority
      }
    }
    TB.FALLOFF_DEFAULT = 0, TB.FALLOFF_PHYSICAL = 1, TB.FALLOFF_GLTF = 2, TB.FALLOFF_STANDARD = 3, TB.LIGHTMAP_DEFAULT = 0, TB.LIGHTMAP_SPECULAR = 1, TB.LIGHTMAP_SHADOWSONLY = 2, TB.INTENSITYMODE_AUTOMATIC = 0, TB.INTENSITYMODE_LUMINOUSPOWER = 1, TB.INTENSITYMODE_LUMINOUSINTENSITY = 2, TB.INTENSITYMODE_ILLUMINANCE = 3, TB.INTENSITYMODE_LUMINANCE = 4, TB.LIGHTTYPEID_POINTLIGHT = 0, TB.LIGHTTYPEID_DIRECTIONALLIGHT = 1, TB.LIGHTTYPEID_SPOTLIGHT = 2, TB.LIGHTTYPEID_HEMISPHERICLIGHT = 3, TB.LIGHTTYPEID_RECT_AREALIGHT = 4, TB.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39885: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB
    });
    var TB, JB = ZB(37153),
      oB = ZB(39887);
    ! function(BB) {
      BB[BB.Unknown = 0] = "Unknown", BB[BB.Url = 1] = "Url", BB[BB.Temp = 2] = "Temp", BB[BB.Raw = 3] = "Raw", BB[BB.Dynamic = 4] = "Dynamic", BB[BB.RenderTarget = 5] = "RenderTarget", BB[BB.MultiRenderTarget = 6] = "MultiRenderTarget", BB[BB.Cube = 7] = "Cube", BB[BB.CubeRaw = 8] = "CubeRaw", BB[BB.CubePrefiltered = 9] = "CubePrefiltered", BB[BB.Raw3D = 10] = "Raw3D", BB[BB.Raw2DArray = 11] = "Raw2DArray", BB[BB.DepthStencil = 12] = "DepthStencil", BB[BB.CubeRawRGBD = 13] = "CubeRawRGBD", BB[BB.Depth = 14] = "Depth", BB[BB.External = 15] = "External"
    }(TB || (TB = {}));
    class GB extends oB.b {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(BB) {
        this._useMipMaps = BB
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(BB) {
        this._uniqueId = BB
      }
      PN() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new JB.b, this.onErrorObservable = new JB.b, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = BB, this._source = IB, this._uniqueId = GB._Counter++, ZB || (this._hardwareTexture = BB._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, BB, IB, ZB), this.width = BB, this.height = IB, this.depth = ZB, this.baseWidth = BB, this.baseHeight = IB, this.baseDepth = ZB, this._size = BB * IB * ZB
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const BB = this.onRebuildCallback(this),
            IB = IB => {
              IB._swapAndDie(this, !1), this.isReady = BB.isReady
            };
          return void(BB.isAsync ? BB.proxy.then(IB) : IB(BB.proxy))
        }
        let BB;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(BB = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (BB => {
              BB._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (BB = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), BB._swapAndDie(this, !1), this._bufferViewArray)
              for (let BB = 0; BB < this._bufferViewArray.length; BB++) {
                const IB = this._bufferViewArray[BB];
                IB && this._engine.updateRawTexture(this, IB, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, BB)
              }
            this.isReady = !0;
            break;
          case 10:
            BB = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), BB._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (BB = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), BB._swapAndDie(this, !1), this._bufferViewArray)
              for (let BB = 0; BB < this._bufferViewArray.length; BB++) {
                const IB = this._bufferViewArray[BB];
                IB && this._engine.updateRawTexture2DArray(this, IB, this.format, this.invertY, this._compression, this.type, BB)
              }
            this.isReady = !0;
            break;
          case 4:
            BB = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), BB._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(BB = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              BB._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            BB = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), BB._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return BB = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (BB => {
              BB && BB._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(BB._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(BB._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), BB._hardwareTexture = this._hardwareTexture, BB._setUniqueId(GB._Counter++), IB && (BB._isRGBD = this._isRGBD), this._lodTextureHigh && (BB._lodTextureHigh && BB._lodTextureHigh.dispose(), BB._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (BB._lodTextureMid && BB._lodTextureMid.dispose(), BB._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (BB._lodTextureLow && BB._lodTextureLow.dispose(), BB._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (BB._irradianceTexture && BB._irradianceTexture.dispose(), BB._irradianceTexture = this._irradianceTexture);
        const ZB = this._engine.getLoadedTexturesCache();
        let TB = ZB.indexOf(this); - 1 !== TB && ZB.splice(TB, 1), TB = ZB.indexOf(BB), -1 === TB && ZB.push(BB)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    GB._Counter = 0
  },
  40003: (BB, IB, ZB) => {
    function TB(BB) {
      return 13 === BB || 14 === BB || 15 === BB || 16 === BB || 17 === BB || 18 === BB || 19 === BB
    }

    function JB(BB) {
      return 8 === BB || 9 === BB || 10 === BB || 11 === BB
    }

    function oB(BB) {
      return 0 === BB || 5 === BB || 7 === BB || 11 === BB
    }

    function GB(BB) {
      return 13 === BB || 17 === BB || 18 === BB || 19 === BB
    }
    ZB.d(IB, {
      c: () => GB,
      e: () => TB,
      g: () => JB,
      i: () => oB
    })
  },
  39887: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB
    });
    class TB {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(BB) {
        this._cachedWrapU = BB
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(BB) {
        this._cachedWrapV = BB
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(BB) {
        this._cachedWrapR = BB
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(BB) {
        this._cachedAnisotropicFilteringLevel = BB
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(BB) {
        this._comparisonFunction = BB
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(BB) {
        this._useMipMaps = BB
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = BB, this._cachedWrapV = IB, this._cachedWrapR = ZB, this._cachedAnisotropicFilteringLevel = TB, this.samplingMode = JB, this._comparisonFunction = oB, this
      }
      compareSampler(BB) {
        return this._cachedWrapU === BB._cachedWrapU && this._cachedWrapV === BB._cachedWrapV && this._cachedWrapR === BB._cachedWrapR && this._cachedAnisotropicFilteringLevel === BB._cachedAnisotropicFilteringLevel && this.samplingMode === BB.samplingMode && this._comparisonFunction === BB._comparisonFunction && this._useMipMaps === BB._useMipMaps
      }
    }
  },
  40170: (BB, IB, ZB) => {
    function TB(BB) {
      BB.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    ZB.d(IB, {
      d: () => TB
    })
  },
  39973: (BB, IB, ZB) => {
    function TB(BB) {
      return void 0 === BB.getPipelineContext
    }
    ZB.d(IB, {
      b: () => TB
    })
  },
  40369: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB
    });
    var TB = ZB(39943);
    class JB {
      static GetEffect(BB) {
        return void 0 === BB.getPipelineContext ? BB.effect : BB
      }
      constructor(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = BB.createDrawContext(), IB && (this.materialContext = BB.createMaterialContext())
      }
      setEffect(BB, IB) {
        let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        ZB || this.effect === BB || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = BB, void 0 !== IB && (this.defines = IB), ZB && this.drawContext?.reset()
      }
      dispose() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const IB = this.effect;
          BB ? IB.dispose() : TB.b.SetImmediate((() => {
            IB.PN().onEndFrameObservable.addOnce((() => {
              IB.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39908: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => hB,
      h: () => FB,
      l: () => cB,
      m: () => nB
    });
    var TB = ZB(39912),
      JB = ZB(39917),
      oB = ZB(39905),
      GB = ZB(38718),
      vB = ZB(39939),
      kB = ZB(39926);

    function cB(BB, IB) {
      return (0, JB.C)(IB).cachedPipelines[BB]
    }

    function nB(BB) {
      const IB = BB._name,
        ZB = BB.context;
      if (IB && ZB) {
        const BB = (0, JB.C)(ZB),
          TB = BB.cachedPipelines[IB];
        TB?.dispose(), delete BB.cachedPipelines[IB]
      }
    }

    function hB(BB, IB, ZB, JB, oB, GB, kB) {
      let cB, nB;
      const hB = (0, TB.l)() ? GB?.getHostDocument() : null;
      cB = "string" === typeof IB ? IB : "string" === typeof IB.vertexSource ? "source:" + IB.vertexSource : "string" === typeof IB.vertexElement ? hB?.getElementById(IB.vertexElement) || IB.vertexElement : IB.vertex || IB, nB = "string" === typeof IB ? IB : "string" === typeof IB.fragmentSource ? "source:" + IB.fragmentSource : "string" === typeof IB.fragmentElement ? hB?.getElementById(IB.fragmentElement) || IB.fragmentElement : IB.fragment || IB;
      const FB = [void 0, void 0],
        NB = () => {
          if (FB[0] && FB[1]) {
            const [TB, cB] = FB;
            (0, vB.i)(BB), (0, vB.l)(TB, BB, ((TB, nB) => {
              kB && (kB._vertexSourceCodeBeforeMigration = nB), ZB && (TB = ZB("vertex", TB)), BB.isFragment = !0, (0, vB.l)(cB, BB, ((GB, cB) => {
                kB && (kB._fragmentSourceCodeBeforeMigration = cB), ZB && (GB = ZB("fragment", GB));
                const nB = (0, vB.e)(TB, GB, BB);
                BB = null;
                const hB = function(BB, IB, ZB, TB) {
                  if (ZB) {
                    return {
                      vertexSourceCode: (1 === TB ? "//" : "") + "#define SHADER_NAME vertex:" + (ZB.vertexElement || ZB.vertex || ZB.spectorName || ZB) + "\n" + BB,
                      fragmentSourceCode: (1 === TB ? "//" : "") + "#define SHADER_NAME fragment:" + (ZB.fragmentElement || ZB.fragment || ZB.spectorName || ZB) + "\n" + IB
                    }
                  }
                  return {
                    vertexSourceCode: BB,
                    fragmentSourceCode: IB
                  }
                }(nB.vertexCode, nB.fragmentCode, IB, oB);
                JB?.(hB.vertexSourceCode, hB.fragmentSourceCode)
              }), GB)
            }), GB)
          }
        };
      zB(cB, "Vertex", "", (BB => {
        kB && (kB._rawVertexSourceCode = BB), FB[0] = BB, NB()
      }), oB), zB(nB, "Fragment", "Pixel", (BB => {
        kB && (kB._rawFragmentSourceCode = BB), FB[1] = BB, NB()
      }), oB)
    }

    function zB(BB, IB, ZB, JB, GB, vB) {
      if ("undefined" !== typeof HTMLElement && BB instanceof HTMLElement) {
        return void JB((0, TB.c)(BB))
      }
      if ("source:" === BB.substring(0, 7)) return void JB(BB.substring(7));
      if ("base64:" === BB.substring(0, 7)) {
        return void JB(window.atob(BB.substring(7)))
      }
      const cB = oB.c.GetShadersStore(GB);
      if (cB[BB + IB + "Shader"]) return void JB(cB[BB + IB + "Shader"]);
      if (ZB && cB[BB + ZB + "Shader"]) return void JB(cB[BB + ZB + "Shader"]);
      let nB;
      if (nB = "." === BB[0] || "/" === BB[0] || BB.indexOf("http") > -1 ? BB : oB.c.GetShadersRepository(GB) + BB, !(vB = vB || kB.k)) throw new Error("loadFileInjection is not defined");
      vB(nB + "." + IB.toLowerCase() + ".fx", JB)
    }
    const FB = (BB, IB, ZB, TB) => {
      try {
        const oB = BB.context ? (0, JB.C)(BB.context) : null;
        oB && (oB.disableParallelShaderCompile = BB.disableParallelCompilation);
        const GB = BB.existingPipelineContext || IB(BB.shaderProcessingContext);
        return GB._name = BB.name, BB.name && oB && (oB.cachedPipelines[BB.name] = GB), ZB(GB, BB.vertex, BB.fragment, !!BB.createAsRaw, "", "", BB.rebuildRebind, BB.defines, BB.transformFeedbackVaryings, "", (() => {
          TB(GB, (() => {
            BB.onRenderingStateCompiled?.(GB)
          }))
        })), GB
      } catch (oB) {
        throw GB.d.Error("Error compiling effect"), oB
      }
    }
  },
  39902: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => kB
    });
    var TB = ZB(37153),
      JB = ZB(38718),
      oB = ZB(39905),
      GB = ZB(39908),
      vB = ZB(39943);
    class kB {
      static get ShadersRepository() {
        return oB.c.ShadersRepository
      }
      static set ShadersRepository(BB) {
        oB.c.ShadersRepository = BB
      }
      get mC() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new TB.b), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(BB, IB, ZB) {
        let JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          oB = arguments.length > 4 ? arguments[4] : void 0,
          vB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          cB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          nB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          hB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          zB = arguments.length > 9 ? arguments[9] : void 0,
          FB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          NB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          gB = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new TB.b, this.onErrorObservable = new TB.b, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = BB, this._key = FB;
        const qB = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let yB;
        if (IB.attributes) {
          const BB = IB;
          if (this._engine = ZB, this._attributesNames = BB.attributes, this._uniformsNames = BB.uniformsNames.concat(BB.samplers), this._samplerList = BB.samplers.slice(), this.defines = BB.defines, this.onError = BB.onError, this.onCompiled = BB.onCompiled, this._fallbacks = BB.fallbacks, this._indexParameters = BB.indexParameters, this._transformFeedbackVaryings = BB.transformFeedbackVaryings || null, this._multiTarget = !!BB.multiTarget, this._shaderLanguage = BB.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!BB.disableParallelShaderCompilation, BB.uniformBuffersNames) {
            this._uniformBuffersNamesList = BB.uniformBuffersNames.slice();
            for (let IB = 0; IB < BB.uniformBuffersNames.length; IB++) this._uniformBuffersNames[BB.uniformBuffersNames[IB]] = IB
          }
          this._processFinalCode = BB.processFinalCode ?? null, this._processCodeAfterIncludes = BB.processCodeAfterIncludes ?? void 0, gB = BB.extraInitializationsAsync, yB = BB.existingPipelineContext
        } else this._engine = oB, this.defines = null == vB ? "" : vB, this._uniformsNames = ZB.concat(JB), this._samplerList = JB ? JB.slice() : [], this._attributesNames = IB, this._uniformBuffersNamesList = [], this._shaderLanguage = NB, this.onError = hB, this.onCompiled = nB, this._indexParameters = zB, this._fallbacks = cB;
        "WEBGL2" === this._engine.shaderPlatformName && (yB = (0, GB.l)(qB, this._engine._gl) ?? yB), this._attributeLocationByName = {}, this.uniqueId = kB._UniqueIdSeed++, yB ? (this._pipelineContext = yB, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, gB).catch((BB => {
          const IB = BB?.message ?? String(BB),
            ZB = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${IB}`);
          BB && "string" === typeof BB.stack && (ZB.stack = `${ZB.message}\nCaused by: ${BB.stack}`), this._processCompilationErrors(ZB)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.mC || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          TB = arguments.length > 3 ? arguments[3] : void 0;
        TB && await TB(), this._processingContext = ZB || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const JB = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: BB ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: oB.c.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: oB.c.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          iTB: this._engine.iTB,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, GB.e)(JB, this.name, this._processFinalCode, ((BB, ZB) => {
          this._vertexSourceCode = BB, this._fragmentSourceCode = ZB, this._prepareEffect(IB)
        }), this._shaderLanguage, this._engine, this)
      }
      get key() {
        return this._key
      }
      isReady() {
        try {
          return this._isReadyInternal()
        } catch {
          return !1
        }
      }
      _isReadyInternal() {
        return !!this._engine.mC || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      PN() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(BB) {
        return this._attributes[BB]
      }
      getAttributeLocationByName(BB) {
        return this._attributeLocationByName[BB]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(BB) {
        return this._uniformsNames.indexOf(BB)
      }
      getUniform(BB) {
        return this._uniforms[BB]
      }
      getSamplers() {
        return this._samplerList
      }
      getUniformNames() {
        return this._uniformsNames
      }
      getUniformBuffersNames() {
        return this._uniformBuffersNamesList
      }
      getIndexParameters() {
        return this._indexParameters
      }
      getCompilationError() {
        return this._compilationError
      }
      allFallbacksProcessed() {
        return this._allFallbacksProcessed
      }
      async whenCompiledAsync() {
        return await new Promise((BB => {
          this.executeWhenCompiled(BB)
        }))
      }
      executeWhenCompiled(BB) {
        this.isReady() ? BB(this) : (this.onCompileObservable.add((IB => {
          BB(IB)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(BB) {
        (0, vB.f)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (IB => {
          this._processCompilationErrors(IB, BB)
        }), 16, 12e4, !0, ` - Effect: ${"string"===typeof this.name?this.name:this.key}`)
      }
      get vertexSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._vertexSourceCodeOverride : this._pipelineContext?._getVertexShaderCode() ?? this._vertexSourceCode
      }
      get fragmentSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._fragmentSourceCodeOverride : this._pipelineContext?._getFragmentShaderCode() ?? this._fragmentSourceCode
      }
      get vertexSourceCodeBeforeMigration() {
        return this._vertexSourceCodeBeforeMigration
      }
      get fragmentSourceCodeBeforeMigration() {
        return this._fragmentSourceCodeBeforeMigration
      }
      get rawVertexSourceCode() {
        return this._rawVertexSourceCode
      }
      get rawFragmentSourceCode() {
        return this._rawFragmentSourceCode
      }
      getPipelineGenerationOptions() {
        return {
          platformName: this._engine.shaderPlatformName,
          shaderLanguage: this._shaderLanguage,
          shaderNameOrContent: this.name,
          key: this._key,
          defines: this.defines.split("\n"),
          addGlobalDefines: !1,
          extendedProcessingOptions: {
            indexParameters: this._indexParameters,
            isNDCHalfZRange: this._engine.isNDCHalfZRange,
            iTB: this._engine.iTB,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(BB, IB, ZB, TB) {
        this._isReady = !1, this._vertexSourceCodeOverride = BB, this._fragmentSourceCodeOverride = IB, this.onError = (BB, IB) => {
          TB && TB(IB)
        }, this.onCompiled = () => {
          const BB = this.PN().scenes;
          if (BB)
            for (let IB = 0; IB < BB.length; IB++) BB[IB].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(ZB)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(BB) {
        if (this._pipelineContext = BB, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let IB = 0; IB < this._attributesNames.length; IB++) {
            const BB = this._attributesNames[IB];
            this._attributeLocationByName[BB] = this._attributes[IB]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), kB.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const IB = this._pipelineContext;
        this._isReady = !1;
        try {
          const ZB = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            TB = ZB ? null : this.defines,
            JB = ZB ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            oB = ZB ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            vB = this._engine;
          this._pipelineContext = (0, GB.h)({
            existingPipelineContext: BB ? IB : null,
            vertex: JB,
            fragment: oB,
            context: "WEBGL2" === vB.shaderPlatformName || "WEBGL1" === vB.shaderPlatformName ? vB._gl : void 0,
            rebuildRebind: (BB, IB, ZB, TB) => this._rebuildProgram(BB, IB, ZB, TB),
            defines: TB,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: ZB,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: ZB => {
              IB && !BB && this._engine._deletePipelineContext(IB), ZB && this._onRenderingStateCompiled(ZB)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(IB)
        } catch (ZB) {
          this._processCompilationErrors(ZB, IB)
        }
      }
      _getShaderCodeAndErrorLine(BB, IB, ZB) {
        const TB = ZB ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let JB = null;
        if (IB && BB) {
          const oB = IB.match(TB);
          if (oB && 2 === oB.length) {
            const IB = parseInt(oB[1]),
              TB = BB.split("\n", -1);
            TB.length >= IB && (JB = `Offending line [${IB}] in ${ZB?"fragment":"vertex"} code: ${TB[IB-1]}`)
          }
        }
        return [BB, JB]
      }
      _processCompilationErrors(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof BB?.stack ? BB.stack : BB?.message ?? String(BB);
        const ZB = this._attributesNames,
          TB = this._fallbacks;
        if (JB.d.Error("Unable to compile effect:"), JB.d.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), JB.d.Error(`Attributes: ${ZB.join(" ")}`), JB.d.Error("Defines:\n" + this.defines), kB.LogShaderCodeOnCompilationError) {
          let BB, IB = null,
            ZB = null;
          this._pipelineContext?._getVertexShaderCode() && ([BB, IB] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), BB && (JB.d.Error("Vertex code:"), JB.d.Error(BB))), this._pipelineContext?._getFragmentShaderCode() && ([BB, ZB] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), BB && (JB.d.Error("Fragment code:"), JB.d.Error(BB))), IB && JB.d.Error(IB), ZB && JB.d.Error(ZB)
        }
        JB.d.Error("Error: " + this._compilationError);
        const oB = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        IB && (this._pipelineContext = IB, this._isReady = !0, oB()), TB ? (this._pipelineContext = null, TB.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, JB.d.Error("Trying next fallback."), this.defines = TB.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, oB(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, IB || oB())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(BB, IB) {
        this._engine._bindTexture(this._samplers[BB], IB, BB)
      }
      setTexture(BB, IB) {
        this._engine.setTexture(this._samplers[BB], this._uniforms[BB], IB, BB)
      }
      setTextureArray(BB, IB) {
        const ZB = BB + "Ex";
        if (-1 === this._samplerList.indexOf(ZB + "0")) {
          const TB = this._samplerList.indexOf(BB);
          for (let BB = 1; BB < IB.length; BB++) {
            const IB = ZB + (BB - 1).toString();
            this._samplerList.splice(TB + BB, 0, IB)
          }
          let JB = 0;
          for (const BB of this._samplerList) this._samplers[BB] = JB, JB += 1
        }
        this._engine.setTextureArray(this._samplers[BB], this._uniforms[BB], IB, BB)
      }
      bindUniformBuffer(BB, IB) {
        const ZB = this._uniformBuffersNames[IB];
        void 0 === ZB || kB._BaseCache[ZB] === BB && this._engine._features.useUBOBindingCache || (kB._BaseCache[ZB] = BB, this._engine.bindUniformBufferBase(BB, ZB, IB))
      }
      bindUniformBlock(BB, IB) {
        this._engine.bindUniformBlock(this._pipelineContext, BB, IB)
      }
      setInt(BB, IB) {
        return this._pipelineContext.setInt(BB, IB), this
      }
      setInt2(BB, IB, ZB) {
        return this._pipelineContext.setInt2(BB, IB, ZB), this
      }
      setInt3(BB, IB, ZB, TB) {
        return this._pipelineContext.setInt3(BB, IB, ZB, TB), this
      }
      setInt4(BB, IB, ZB, TB, JB) {
        return this._pipelineContext.setInt4(BB, IB, ZB, TB, JB), this
      }
      setIntArray(BB, IB) {
        return this._pipelineContext.setIntArray(BB, IB), this
      }
      setIntArray2(BB, IB) {
        return this._pipelineContext.setIntArray2(BB, IB), this
      }
      setIntArray3(BB, IB) {
        return this._pipelineContext.setIntArray3(BB, IB), this
      }
      setIntArray4(BB, IB) {
        return this._pipelineContext.setIntArray4(BB, IB), this
      }
      setUInt(BB, IB) {
        return this._pipelineContext.setUInt(BB, IB), this
      }
      setUInt2(BB, IB, ZB) {
        return this._pipelineContext.setUInt2(BB, IB, ZB), this
      }
      setUInt3(BB, IB, ZB, TB) {
        return this._pipelineContext.setUInt3(BB, IB, ZB, TB), this
      }
      setUInt4(BB, IB, ZB, TB, JB) {
        return this._pipelineContext.setUInt4(BB, IB, ZB, TB, JB), this
      }
      setUIntArray(BB, IB) {
        return this._pipelineContext.setUIntArray(BB, IB), this
      }
      setUIntArray2(BB, IB) {
        return this._pipelineContext.setUIntArray2(BB, IB), this
      }
      setUIntArray3(BB, IB) {
        return this._pipelineContext.setUIntArray3(BB, IB), this
      }
      setUIntArray4(BB, IB) {
        return this._pipelineContext.setUIntArray4(BB, IB), this
      }
      setFloatArray(BB, IB) {
        return this._pipelineContext.setArray(BB, IB), this
      }
      setFloatArray2(BB, IB) {
        return this._pipelineContext.setArray2(BB, IB), this
      }
      setFloatArray3(BB, IB) {
        return this._pipelineContext.setArray3(BB, IB), this
      }
      setFloatArray4(BB, IB) {
        return this._pipelineContext.setArray4(BB, IB), this
      }
      setArray(BB, IB) {
        return this._pipelineContext.setArray(BB, IB), this
      }
      setArray2(BB, IB) {
        return this._pipelineContext.setArray2(BB, IB), this
      }
      setArray3(BB, IB) {
        return this._pipelineContext.setArray3(BB, IB), this
      }
      setArray4(BB, IB) {
        return this._pipelineContext.setArray4(BB, IB), this
      }
      setMatrices(BB, IB) {
        return this._pipelineContext.setMatrices(BB, IB), this
      }
      setMatrix(BB, IB) {
        return this._pipelineContext.setMatrix(BB, IB), this
      }
      setMatrix3x3(BB, IB) {
        return this._pipelineContext.setMatrix3x3(BB, IB), this
      }
      setMatrix2x2(BB, IB) {
        return this._pipelineContext.setMatrix2x2(BB, IB), this
      }
      setFloat(BB, IB) {
        return this._pipelineContext.setFloat(BB, IB), this
      }
      setBool(BB, IB) {
        return this._pipelineContext.setInt(BB, IB ? 1 : 0), this
      }
      setVector2(BB, IB) {
        return this._pipelineContext.setVector2(BB, IB), this
      }
      setFloat2(BB, IB, ZB) {
        return this._pipelineContext.setFloat2(BB, IB, ZB), this
      }
      setVector3(BB, IB) {
        return this._pipelineContext.setVector3(BB, IB), this
      }
      setFloat3(BB, IB, ZB, TB) {
        return this._pipelineContext.setFloat3(BB, IB, ZB, TB), this
      }
      setVector4(BB, IB) {
        return this._pipelineContext.setVector4(BB, IB), this
      }
      setQuaternion(BB, IB) {
        return this._pipelineContext.setQuaternion(BB, IB), this
      }
      setFloat4(BB, IB, ZB, TB, JB) {
        return this._pipelineContext.setFloat4(BB, IB, ZB, TB, JB), this
      }
      setColor3(BB, IB) {
        return this._pipelineContext.setColor3(BB, IB), this
      }
      setColor4(BB, IB, ZB) {
        return this._pipelineContext.setColor4(BB, IB, ZB), this
      }
      setDirectColor4(BB, IB) {
        return this._pipelineContext.setDirectColor4(BB, IB), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (kB.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, GB.m)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        IB && (oB.c.GetShadersStore(TB)[`${BB}PixelShader`] = IB), ZB && (oB.c.GetShadersStore(TB)[`${BB}VertexShader`] = ZB)
      }
      static ResetCache() {
        kB._BaseCache = {}
      }
    }
    kB.LogShaderCodeOnCompilationError = !0, kB.PersistentMode = !1, kB.AutomaticallyClearCodeCache = !1, kB._UniqueIdSeed = 0, kB._BaseCache = {}, kB.ShadersStore = oB.c.ShadersStore, kB.IncludesShadersStore = oB.c.IncludesShadersStore
  },
  40193: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => nB,
      g: () => sB,
      j: () => QB
    });
    var TB = ZB(39902),
      JB = ZB(37120),
      oB = ZB(37166),
      GB = ZB(40177);
    const vB = new JB.b,
      kB = new JB.b,
      cB = new JB.b,
      nB = {
        JR: () => {},
        eyeAtCamera: !0
      };

    function hB(BB, IB, ZB) {
      const TB = ZB.HTB(),
        JB = IB.HTB();
      for (let oB = 0; oB < 16; oB++) TB[oB] = JB[oB];
      return TB[12] -= BB.x, TB[13] -= BB.y, TB[14] -= BB.z, ZB.markAsUpdated(), ZB
    }

    function zB(BB, IB, ZB) {
      return (0, oB.f)(IB, kB), hB(BB, kB, cB), (0, oB.f)(cB, ZB), ZB
    }

    function FB(BB, IB, ZB) {
      if (!nB.eyeAtCamera) return zB(BB, IB, ZB);
      const TB = ZB.HTB(),
        JB = IB.HTB();
      for (let oB = 0; oB < 16; oB++) TB[oB] = JB[oB];
      return TB[12] = 0, TB[13] = 0, TB[14] = 0, ZB.markAsUpdated(), ZB
    }

    function NB(BB, IB, ZB, TB) {
      return (0, oB.n)(FB(BB, IB, TB), ZB, TB), TB
    }

    function gB(BB, IB, ZB, TB) {
      return (0, oB.f)(ZB, kB), (0, oB.n)(IB, kB, cB), hB(BB, cB, kB), FB(BB, ZB, cB), (0, oB.n)(kB, cB, TB), TB
    }

    function qB(BB, IB, ZB, TB, JB, GB) {
      return (0, oB.f)(ZB, kB), (0, oB.n)(IB, kB, cB), hB(BB, cB, kB), NB(BB, TB, JB, cB), (0, oB.n)(kB, cB, GB), GB
    }

    function yB(BB, IB) {
      const ZB = nB.JR();
      if (!ZB || vB === IB) return IB;
      vB.updateFlag = IB.updateFlag;
      const TB = ZB.floatingOriginOffset;
      switch (BB) {
        case "world":
          return hB(TB, IB, vB);
        case "view":
          return FB(TB, IB, vB);
        case "worldView":
          return gB(TB, IB, ZB.getViewMatrix(), vB);
        case "viewProjection":
          return NB(TB, ZB.getViewMatrix(), ZB.getProjectionMatrix(), vB);
        case "worldViewProjection":
          return qB(TB, IB, ZB.getTransformMatrix(), ZB.getViewMatrix(), ZB.getProjectionMatrix(), vB);
        default:
          if (BB.startsWith("u_")) {
            const JB = BB.toLowerCase();
            if (JB.startsWith("u_worldviewprojection")) return qB(TB, IB, ZB.getTransformMatrix(), ZB.getViewMatrix(), ZB.getProjectionMatrix(), vB);
            if (JB.startsWith("u_viewprojection")) return NB(TB, ZB.getViewMatrix(), ZB.getProjectionMatrix(), vB);
            if (JB.startsWith("u_worldview")) return gB(TB, IB, ZB.getViewMatrix(), vB);
            if (JB.startsWith("u_world")) return hB(TB, IB, vB);
            if (JB.startsWith("u_view")) return FB(TB, IB, vB)
          }
          return IB
      }
    }
    const UB = GB.d,
      WB = TB.d,
      dB = UB.prototype._updateMatrixForUniform,
      CB = TB.d.prototype.setMatrix;

    function QB() {
      TB.d.prototype.setMatrix = CB, WB._setMatrixOverride = void 0, UB.prototype._updateMatrixForUniform = dB, UB.prototype._updateMatrixForUniformOverride = void 0
    }

    function sB() {
      WB.prototype._setMatrixOverride = CB, WB.prototype.setMatrix = function(BB, IB) {
        return this._setMatrixOverride(BB, yB(BB, IB)), this
      }, UB.prototype._updateMatrixForUniformOverride = dB, UB.prototype._updateMatrixForUniform = function(BB, IB) {
        this._updateMatrixForUniformOverride(BB, yB(BB, IB))
      }
    }
  },
  40172: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => oB,
      e: () => JB
    });
    var TB = ZB(40170);

    function JB(BB, IB) {
      IB.WHITEBALANCE && BB.push("whiteBalanceMatrix"), IB.EXPOSURE && BB.push("exposureLinear"), IB.CONTRAST && BB.push("contrast"), IB.COLORGRADING && BB.push("colorTransformSettings"), (IB.VIGNETTE || IB.DITHER) && BB.push("vInverseScreenSize"), IB.VIGNETTE && (BB.push("vignetteSettings1"), BB.push("vignetteSettings2")), IB.COLORCURVES && (0, TB.d)(BB), IB.DITHER && BB.push("ditherIntensity")
    }

    function oB(BB, IB) {
      IB.COLORGRADING && BB.push("txColorTransform")
    }
  },
  40166: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => pB,
      d: () => MB
    });
    var TB = ZB(40061),
      JB = ZB(40065),
      oB = ZB(37153),
      GB = ZB(37311),
      vB = ZB(37158),
      kB = ZB(37120);
    const cB = [
        [0, .18006, .26352, -.24341],
        [10, .18066, .26589, -.25479],
        [20, .18133, .26846, -.26876],
        [30, .18208, .27119, -.28539],
        [40, .18293, .27407, -.3047],
        [50, .18388, .27709, -.32675],
        [60, .18494, .28021, -.35156],
        [70, .18611, .28342, -.37915],
        [80, .1874, .28668, -.40955],
        [90, .1888, .28997, -.44278],
        [100, .19032, .29326, -.47888],
        [125, .19462, .30141, -.58204],
        [150, .19962, .30921, -.70471],
        [175, .20525, .31647, -.84901],
        [200, .21142, .32312, -1.0182],
        [225, .21807, .32909, -1.2168],
        [250, .22511, .33439, -1.4512],
        [275, .23247, .33904, -1.7298],
        [300, .2401, .34308, -2.0637],
        [325, .24792, .34655, -2.4681],
        [350, .25591, .34951, -2.9641],
        [375, .264, .352, -3.5814],
        [400, .27218, .35407, -4.3633],
        [425, .28039, .35577, -5.3762],
        [450, .28863, .35714, -6.7262],
        [475, .29685, .35823, -8.5955],
        [500, .30505, .35907, -11.324],
        [525, .3132, .35968, -15.628],
        [550, .32129, .36011, -23.325],
        [575, .32931, .36038, -40.77],
        [600, .33724, .36051, -116.45]
      ],
      nB = 1e6 / cB[cB.length - 1][0],
      hB = 150;

    function zB(BB, IB) {
      const ZB = Number.isNaN(BB) ? nB : Math.max(BB, nB),
        TB = (0, vB.Clamp)(1e6 / ZB, cB[0][0], cB[cB.length - 1][0]);
      let JB = 0,
        oB = cB.length - 1;
      for (; oB - JB > 1;) {
        const BB = JB + oB >> 1;
        cB[BB][0] <= TB ? JB = BB : oB = BB
      }
      const GB = JB,
        [zB, FB, NB, gB] = cB[GB],
        [qB, yB, UB, WB] = cB[GB + 1],
        dB = (TB - zB) / (qB - zB),
        CB = kB.p.Lerp(new kB.p(FB, NB), new kB.p(yB, UB), dB),
        QB = kB.p.Normalize(new kB.p(1, gB)),
        sB = kB.p.Normalize(new kB.p(1, WB)),
        wB = kB.p.Normalize(kB.p.Lerp(QB, sB, dB)),
        OB = (0, vB.Clamp)(IB, -150, hB);
      CB.VTB(wB.scale(OB / 3e3));
      const YB = 2 * CB.x - 8 * CB.y + 4,
        iB = 3 * CB.x / YB,
        pB = 2 * CB.y / YB;
      return new kB.s(iB / pB, 1, (1 - iB - pB) / pB)
    }
    const FB = kB.b.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      NB = kB.b.Invert(FB);

    function gB(BB, IB) {
      const ZB = IB > 0 ? BB / IB : 10;
      return (0, vB.Clamp)(ZB, .1, 10)
    }

    function qB(BB, IB) {
      const ZB = kB.s.TransformNormal(BB, FB),
        TB = kB.s.TransformNormal(IB, FB),
        JB = kB.b.FromArray([gB(TB.x, ZB.x), 0, 0, 0, 0, gB(TB.y, ZB.y), 0, 0, 0, 0, gB(TB.z, ZB.z), 0, 0, 0, 0, 1]);
      return FB.multiply(JB).multiply(NB)
    }
    const yB = new kB.s(.95047, 1, 1.08883),
      UB = kB.b.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(qB(yB, zB(6500, 0))),
      WB = kB.b.Invert(UB),
      dB = kB.s.TransformNormal(new kB.s(1, 1, 1), UB);
    var CB = ZB(40085),
      QB = ZB(40170);
    let sB = (() => {
      var BB;
      let IB, ZB, oB, vB, kB, cB, nB, hB, zB, FB, NB, gB, qB = [],
        yB = [],
        UB = [],
        WB = [],
        dB = [],
        sB = [],
        wB = [],
        OB = [],
        YB = [],
        iB = [],
        pB = [],
        aB = [],
        HB = [],
        MB = [],
        jB = [],
        PB = [],
        RB = [],
        rB = [],
        mB = [],
        XB = [],
        LB = [],
        eB = [],
        uB = [],
        fB = [];
      return BB = class {
        constructor() {
          this._dirty = !0, this._tempColor = new GB.g(0, 0, 0, 0), this._globalCurve = new GB.g(0, 0, 0, 0), this._highlightsCurve = new GB.g(0, 0, 0, 0), this._midtonesCurve = new GB.g(0, 0, 0, 0), this._shadowsCurve = new GB.g(0, 0, 0, 0), this._positiveCurve = new GB.g(0, 0, 0, 0), this._negativeCurve = new GB.g(0, 0, 0, 0), this._globalHue = (0, TB.l)(this, qB, 30), this._globalDensity = ((0, TB.l)(this, yB), (0, TB.l)(this, UB, 0)), this._globalSaturation = ((0, TB.l)(this, WB), (0, TB.l)(this, dB, 0)), this._globalExposure = ((0, TB.l)(this, sB), (0, TB.l)(this, wB, 0)), this._highlightsHue = ((0, TB.l)(this, OB), (0, TB.l)(this, YB, 30)), this._highlightsDensity = ((0, TB.l)(this, iB), (0, TB.l)(this, pB, 0)), this._highlightsSaturation = ((0, TB.l)(this, aB), (0, TB.l)(this, HB, 0)), this._highlightsExposure = ((0, TB.l)(this, MB), (0, TB.l)(this, jB, 0)), this._midtonesHue = ((0, TB.l)(this, PB), (0, TB.l)(this, RB, 30)), this._midtonesDensity = ((0, TB.l)(this, rB), (0, TB.l)(this, mB, 0)), this._midtonesSaturation = ((0, TB.l)(this, XB), (0, TB.l)(this, LB, 0)), this._midtonesExposure = ((0, TB.l)(this, eB), (0, TB.l)(this, uB, 0)), this._shadowsHue = ((0, TB.l)(this, fB), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(BB) {
          this._globalHue = BB, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(BB) {
          this._globalDensity = BB, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(BB) {
          this._globalSaturation = BB, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(BB) {
          this._globalExposure = BB, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(BB) {
          this._highlightsHue = BB, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(BB) {
          this._highlightsDensity = BB, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(BB) {
          this._highlightsSaturation = BB, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(BB) {
          this._highlightsExposure = BB, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(BB) {
          this._midtonesHue = BB, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(BB) {
          this._midtonesDensity = BB, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(BB) {
          this._midtonesSaturation = BB, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(BB) {
          this._midtonesExposure = BB, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(BB) {
          this._shadowsHue = BB, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(BB) {
          this._shadowsDensity = BB, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(BB) {
          this._shadowsSaturation = BB, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(BB) {
          this._shadowsExposure = BB, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(IB, ZB, TB, JB, oB) {
          null != IB && (IB = BB._Clamp(IB, 0, 360), ZB = BB._Clamp(ZB, -100, 100), TB = BB._Clamp(TB, -100, 100), JB = BB._Clamp(JB, -100, 100), ZB = BB._ApplyColorGradingSliderNonlinear(ZB), ZB *= .5, JB = BB._ApplyColorGradingSliderNonlinear(JB), ZB < 0 && (ZB *= -1, IB = (IB + 180) % 360), BB._FromHSBToRef(IB, ZB, 50 + .25 * JB, oB), oB.scaleToRef(2, oB), oB.a = 1 + .01 * TB)
        }
        static _ApplyColorGradingSliderNonlinear(BB) {
          BB /= 100;
          let IB = Math.abs(BB);
          return IB = Math.pow(IB, 2), BB < 0 && (IB *= -1), IB *= 100, IB
        }
        static _FromHSBToRef(IB, ZB, TB, JB) {
          let oB = BB._Clamp(IB, 0, 360);
          const GB = BB._Clamp(ZB / 100, 0, 1),
            vB = BB._Clamp(TB / 100, 0, 1);
          if (0 === GB) JB.r = vB, JB.g = vB, JB.b = vB;
          else {
            oB /= 60;
            const BB = Math.floor(oB),
              IB = oB - BB,
              ZB = vB * (1 - GB),
              TB = vB * (1 - GB * IB),
              kB = vB * (1 - GB * (1 - IB));
            switch (BB) {
              case 0:
                JB.r = vB, JB.g = kB, JB.b = ZB;
                break;
              case 1:
                JB.r = TB, JB.g = vB, JB.b = ZB;
                break;
              case 2:
                JB.r = ZB, JB.g = vB, JB.b = kB;
                break;
              case 3:
                JB.r = ZB, JB.g = TB, JB.b = vB;
                break;
              case 4:
                JB.r = kB, JB.g = ZB, JB.b = vB;
                break;
              default:
                JB.r = vB, JB.g = ZB, JB.b = TB
            }
          }
          JB.a = 1
        }
        static _Clamp(BB, IB, ZB) {
          return Math.min(Math.max(BB, IB), ZB)
        }
        clone() {
          return CB.b.Clone((() => new BB), this)
        }
        serialize() {
          return CB.b.Serialize(this)
        }
        _bind(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), BB && (BB.setFloat4(IB, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), BB.setFloat4(ZB, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), BB.setFloat4(TB, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const GB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IB = [(0, JB.C)()], ZB = [(0, JB.C)()], oB = [(0, JB.C)()], vB = [(0, JB.C)()], kB = [(0, JB.C)()], cB = [(0, JB.C)()], nB = [(0, JB.C)()], hB = [(0, JB.C)()], zB = [(0, JB.C)()], FB = [(0, JB.C)()], NB = [(0, JB.C)()], gB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: BB => "_globalHue" in BB,
            get: BB => BB._globalHue,
            set: (BB, IB) => {
              BB._globalHue = IB
            }
          },
          metadata: GB
        }, qB, yB), (0, TB.j)(null, null, ZB, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "_globalDensity" in BB,
            get: BB => BB._globalDensity,
            set: (BB, IB) => {
              BB._globalDensity = IB
            }
          },
          metadata: GB
        }, UB, WB), (0, TB.j)(null, null, oB, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: BB => "_globalSaturation" in BB,
            get: BB => BB._globalSaturation,
            set: (BB, IB) => {
              BB._globalSaturation = IB
            }
          },
          metadata: GB
        }, dB, sB), (0, TB.j)(null, null, vB, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: BB => "_globalExposure" in BB,
            get: BB => BB._globalExposure,
            set: (BB, IB) => {
              BB._globalExposure = IB
            }
          },
          metadata: GB
        }, wB, OB), (0, TB.j)(null, null, kB, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: BB => "_highlightsHue" in BB,
            get: BB => BB._highlightsHue,
            set: (BB, IB) => {
              BB._highlightsHue = IB
            }
          },
          metadata: GB
        }, YB, iB), (0, TB.j)(null, null, cB, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "_highlightsDensity" in BB,
            get: BB => BB._highlightsDensity,
            set: (BB, IB) => {
              BB._highlightsDensity = IB
            }
          },
          metadata: GB
        }, pB, aB), (0, TB.j)(null, null, nB, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: BB => "_highlightsSaturation" in BB,
            get: BB => BB._highlightsSaturation,
            set: (BB, IB) => {
              BB._highlightsSaturation = IB
            }
          },
          metadata: GB
        }, HB, MB), (0, TB.j)(null, null, hB, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: BB => "_highlightsExposure" in BB,
            get: BB => BB._highlightsExposure,
            set: (BB, IB) => {
              BB._highlightsExposure = IB
            }
          },
          metadata: GB
        }, jB, PB), (0, TB.j)(null, null, zB, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: BB => "_midtonesHue" in BB,
            get: BB => BB._midtonesHue,
            set: (BB, IB) => {
              BB._midtonesHue = IB
            }
          },
          metadata: GB
        }, RB, rB), (0, TB.j)(null, null, FB, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "_midtonesDensity" in BB,
            get: BB => BB._midtonesDensity,
            set: (BB, IB) => {
              BB._midtonesDensity = IB
            }
          },
          metadata: GB
        }, mB, XB), (0, TB.j)(null, null, NB, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: BB => "_midtonesSaturation" in BB,
            get: BB => BB._midtonesSaturation,
            set: (BB, IB) => {
              BB._midtonesSaturation = IB
            }
          },
          metadata: GB
        }, LB, eB), (0, TB.j)(null, null, gB, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: BB => "_midtonesExposure" in BB,
            get: BB => BB._midtonesExposure,
            set: (BB, IB) => {
              BB._midtonesExposure = IB
            }
          },
          metadata: GB
        }, uB, fB), GB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: GB
        })
      })(), BB.PrepareUniforms = QB.d, BB
    })();

    function wB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      BB._bind(IB, ZB, TB, JB)
    }
    var OB = ZB(39993),
      YB = ZB(40172),
      iB = ZB(37170);
    let pB = (() => {
        var BB;
        let IB, ZB, cB, FB, NB, gB, yB, QB, iB, pB, aB, HB, MB, jB, PB, RB, rB, mB, XB, LB, eB, uB, fB, lB, AB, tB, bB, xB, EB = [],
          DB = [],
          KB = [],
          VB = [],
          SB = [],
          BI = [],
          II = [],
          ZI = [],
          TI = [],
          JI = [],
          oI = [],
          GI = [],
          vI = [],
          kI = [],
          cI = [],
          nI = [],
          hI = [],
          zI = [],
          FI = [],
          NI = [],
          gI = [],
          qI = [],
          yI = [],
          UI = [],
          WI = [],
          dI = [],
          CI = [],
          QI = [],
          sI = [],
          wI = [],
          OI = [],
          YI = [],
          iI = [],
          pI = [],
          aI = [],
          HI = [],
          MI = [],
          jI = [],
          PI = [],
          RI = [],
          rI = [],
          mI = [],
          XI = [],
          LI = [],
          eI = [],
          uI = [],
          fI = [],
          lI = [],
          AI = [],
          tI = [],
          bI = [],
          xI = [],
          EI = [],
          DI = [],
          KI = [],
          VI = [];
        return BB = class {
          constructor() {
            this.colorCurves = (0, TB.l)(this, EB, new sB), this._colorCurvesEnabled = ((0, TB.l)(this, DB), (0, TB.l)(this, KB, !1)), this._colorGradingTexture = ((0, TB.l)(this, VB), (0, TB.l)(this, SB, void 0)), this._colorGradingEnabled = ((0, TB.l)(this, BI), (0, TB.l)(this, II, !1)), this._colorGradingWithGreenDepth = ((0, TB.l)(this, ZI), (0, TB.l)(this, TI, !0)), this._colorGradingBGR = ((0, TB.l)(this, JI), (0, TB.l)(this, oI, !0)), this._exposure = ((0, TB.l)(this, GI), (0, TB.l)(this, vI, 1)), this._toneMappingEnabled = ((0, TB.l)(this, kI), (0, TB.l)(this, cI, !1)), this._toneMappingType = ((0, TB.l)(this, nI), (0, TB.l)(this, hI, BB.TONEMAPPING_STANDARD)), this._contrast = ((0, TB.l)(this, zI), (0, TB.l)(this, FI, 1)), this._whiteBalanceEnabled = ((0, TB.l)(this, NI), (0, TB.l)(this, gI, !1)), this._temperature = ((0, TB.l)(this, qI), (0, TB.l)(this, yI, 6500)), this._tint = ((0, TB.l)(this, UI), (0, TB.l)(this, WI, 0)), this._whiteBalanceMatrix = ((0, TB.l)(this, dI), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, TB.l)(this, CI, 0), this.vignetteCenterX = ((0, TB.l)(this, QI), (0, TB.l)(this, sI, 0)), this.vignetteCenterY = ((0, TB.l)(this, wI), (0, TB.l)(this, OI, 0)), this.vignetteWeight = ((0, TB.l)(this, YI), (0, TB.l)(this, iI, 1.5)), this.vignetteColor = ((0, TB.l)(this, pI), (0, TB.l)(this, aI, new GB.g(0, 0, 0, 0))), this.vignetteCameraFov = ((0, TB.l)(this, HI), (0, TB.l)(this, MI, .5)), this._vignetteBlendMode = ((0, TB.l)(this, jI), (0, TB.l)(this, PI, BB.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, TB.l)(this, RI), (0, TB.l)(this, rI, !1)), this._ditheringEnabled = ((0, TB.l)(this, mI), (0, TB.l)(this, XI, !1)), this._ditheringIntensity = ((0, TB.l)(this, LI), (0, TB.l)(this, eI, 1 / 255)), this._skipFinalColorClamp = ((0, TB.l)(this, uI), (0, TB.l)(this, fI, !1)), this._applyByPostProcess = ((0, TB.l)(this, lI), (0, TB.l)(this, AI, !1)), this._isEnabled = ((0, TB.l)(this, tI), (0, TB.l)(this, bI, !0)), this.outputTextureWidth = ((0, TB.l)(this, xI), (0, TB.l)(this, EI, 0)), this.outputTextureHeight = ((0, TB.l)(this, DI), (0, TB.l)(this, KI, 0)), this.onUpdateParameters = ((0, TB.l)(this, VI), new oB.b)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(BB) {
            this._colorCurvesEnabled !== BB && (this._colorCurvesEnabled = BB, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(BB) {
            this._colorGradingTexture !== BB && (this._colorGradingTexture = BB, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(BB) {
            this._colorGradingEnabled !== BB && (this._colorGradingEnabled = BB, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(BB) {
            this._colorGradingWithGreenDepth !== BB && (this._colorGradingWithGreenDepth = BB, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(BB) {
            this._colorGradingBGR !== BB && (this._colorGradingBGR = BB, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(BB) {
            this._exposure !== BB && (this._exposure = BB, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(BB) {
            this._toneMappingEnabled !== BB && (this._toneMappingEnabled = BB, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(BB) {
            this._toneMappingType !== BB && (this._toneMappingType = BB, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(BB) {
            this._contrast !== BB && (this._contrast = BB, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(BB) {
            this._whiteBalanceEnabled !== BB && (this._whiteBalanceEnabled = BB, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(BB) {
            BB = Number.isNaN(BB) ? nB : Math.max(BB, nB), this._temperature !== BB && (this._temperature = BB, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(BB) {
            BB = (0, vB.Clamp)(BB, -150, hB), this._tint !== BB && (this._tint = BB, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(BB, IB) {
              const ZB = qB(zB(BB, IB), dB),
                TB = UB.multiply(ZB).multiply(WB);
              return kB.b.GetAsMatrix3x3(TB)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(BB) {
            this.vignetteCenterY = BB
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(BB) {
            this.vignetteCenterX = BB
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(BB) {
            this._vignetteBlendMode !== BB && (this._vignetteBlendMode = BB, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(BB) {
            this._vignetteEnabled !== BB && (this._vignetteEnabled = BB, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(BB) {
            this._ditheringEnabled !== BB && (this._ditheringEnabled = BB, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(BB) {
            this._ditheringIntensity !== BB && (this._ditheringIntensity = BB, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(BB) {
            this._skipFinalColorClamp !== BB && (this._skipFinalColorClamp = BB, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(BB) {
            this._applyByPostProcess !== BB && (this._applyByPostProcess = BB, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(BB) {
            this._isEnabled !== BB && (this._isEnabled = BB, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(IB) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return IB.WHITEBALANCE = !1, IB.VIGNETTE = !1, IB.TONEMAPPING = 0, IB.CONTRAST = !1, IB.EXPOSURE = !1, IB.COLORCURVES = !1, IB.COLORGRADING = !1, IB.COLORGRADING3D = !1, IB.DITHER = !1, IB.IMAGEPROCESSING = !1, IB.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(IB.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (IB.WHITEBALANCE = this._whiteBalanceEnabled, IB.VIGNETTE = this.vignetteEnabled, IB.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === BB._VIGNETTEMODE_MULTIPLY, IB.VIGNETTEBLENDMODEOPAQUE = !IB.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case BB.TONEMAPPING_KHR_PBR_NEUTRAL:
                IB.TONEMAPPING = 3;
                break;
              case BB.TONEMAPPING_ACES:
                IB.TONEMAPPING = 2;
                break;
              default:
                IB.TONEMAPPING = 1
            } else IB.TONEMAPPING = 0;
            IB.CONTRAST = 1 !== this.contrast, IB.EXPOSURE = 1 !== this.exposure, IB.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, IB.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, IB.COLORGRADING ? IB.COLORGRADING3D = this.colorGradingTexture.is3D : IB.COLORGRADING3D = !1, IB.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, IB.SAMPLER3DBGRMAP = this.colorGradingBGR, IB.DITHER = this._ditheringEnabled, IB.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, IB.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, IB.IMAGEPROCESSING = IB.WHITEBALANCE || IB.VIGNETTE || !!IB.TONEMAPPING || IB.CONTRAST || IB.EXPOSURE || IB.COLORCURVES || IB.COLORGRADING || IB.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(BB, IB) {
            if (this._whiteBalanceEnabled && BB.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && wB(this.colorCurves, BB), this._vignetteEnabled || this._ditheringEnabled) {
              const ZB = 1 / (this.outputTextureWidth || BB.PN().getRenderWidth()),
                TB = 1 / (this.outputTextureHeight || BB.PN().getRenderHeight());
              if (BB.setFloat2("vInverseScreenSize", ZB, TB), this._ditheringEnabled && BB.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const JB = null != IB ? IB : TB / ZB;
                let oB = Math.tan(.5 * this.vignetteCameraFov),
                  GB = oB * JB;
                const vB = Math.sqrt(GB * oB);
                GB = (0, OB.m)(GB, vB, this.vignetteStretch), oB = (0, OB.m)(oB, vB, this.vignetteStretch), BB.setFloat4("vignetteSettings1", GB, oB, -GB * this.vignetteCenterX, -oB * this.vignetteCenterY);
                const kB = -2 * this.vignetteWeight;
                BB.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, kB)
              }
            }
            if (BB.setFloat("exposureLinear", this.exposure), BB.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              BB.setTexture("txColorTransform", this.colorGradingTexture);
              const IB = this.colorGradingTexture.getSize().height;
              BB.setFloat4("colorTransformSettings", (IB - 1) / IB, .5 / IB, IB, this.colorGradingTexture.level)
            }
          }
          clone() {
            return CB.b.Clone((() => new BB), this)
          }
          serialize() {
            return CB.b.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          IB = [(0, JB.i)()], ZB = [(0, JB.C)()], cB = [(0, JB.v)("colorGradingTexture")], FB = [(0, JB.C)()], NB = [(0, JB.C)()], gB = [(0, JB.C)()], yB = [(0, JB.C)()], QB = [(0, JB.C)()], iB = [(0, JB.C)()], pB = [(0, JB.C)()], aB = [(0, JB.C)()], HB = [(0, JB.C)()], MB = [(0, JB.C)()], jB = [(0, JB.C)()], PB = [(0, JB.C)()], RB = [(0, JB.C)()], rB = [(0, JB.C)()], mB = [(0, JB.m)()], XB = [(0, JB.C)()], LB = [(0, JB.C)()], eB = [(0, JB.C)()], uB = [(0, JB.C)()], fB = [(0, JB.C)()], lB = [(0, JB.C)()], AB = [(0, JB.C)()], tB = [(0, JB.C)()], bB = [(0, JB.C)()], xB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: BB => "colorCurves" in BB,
              get: BB => BB.colorCurves,
              set: (BB, IB) => {
                BB.colorCurves = IB
              }
            },
            metadata: oB
          }, EB, DB), (0, TB.j)(null, null, ZB, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_colorCurvesEnabled" in BB,
              get: BB => BB._colorCurvesEnabled,
              set: (BB, IB) => {
                BB._colorCurvesEnabled = IB
              }
            },
            metadata: oB
          }, KB, VB), (0, TB.j)(null, null, cB, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_colorGradingTexture" in BB,
              get: BB => BB._colorGradingTexture,
              set: (BB, IB) => {
                BB._colorGradingTexture = IB
              }
            },
            metadata: oB
          }, SB, BI), (0, TB.j)(null, null, FB, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_colorGradingEnabled" in BB,
              get: BB => BB._colorGradingEnabled,
              set: (BB, IB) => {
                BB._colorGradingEnabled = IB
              }
            },
            metadata: oB
          }, II, ZI), (0, TB.j)(null, null, NB, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: BB => "_colorGradingWithGreenDepth" in BB,
              get: BB => BB._colorGradingWithGreenDepth,
              set: (BB, IB) => {
                BB._colorGradingWithGreenDepth = IB
              }
            },
            metadata: oB
          }, TI, JI), (0, TB.j)(null, null, gB, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: BB => "_colorGradingBGR" in BB,
              get: BB => BB._colorGradingBGR,
              set: (BB, IB) => {
                BB._colorGradingBGR = IB
              }
            },
            metadata: oB
          }, oI, GI), (0, TB.j)(null, null, yB, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: BB => "_exposure" in BB,
              get: BB => BB._exposure,
              set: (BB, IB) => {
                BB._exposure = IB
              }
            },
            metadata: oB
          }, vI, kI), (0, TB.j)(null, null, QB, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_toneMappingEnabled" in BB,
              get: BB => BB._toneMappingEnabled,
              set: (BB, IB) => {
                BB._toneMappingEnabled = IB
              }
            },
            metadata: oB
          }, cI, nI), (0, TB.j)(null, null, iB, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: BB => "_toneMappingType" in BB,
              get: BB => BB._toneMappingType,
              set: (BB, IB) => {
                BB._toneMappingType = IB
              }
            },
            metadata: oB
          }, hI, zI), (0, TB.j)(null, null, pB, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: BB => "_contrast" in BB,
              get: BB => BB._contrast,
              set: (BB, IB) => {
                BB._contrast = IB
              }
            },
            metadata: oB
          }, FI, NI), (0, TB.j)(null, null, aB, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_whiteBalanceEnabled" in BB,
              get: BB => BB._whiteBalanceEnabled,
              set: (BB, IB) => {
                BB._whiteBalanceEnabled = IB
              }
            },
            metadata: oB
          }, gI, qI), (0, TB.j)(null, null, HB, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: BB => "_temperature" in BB,
              get: BB => BB._temperature,
              set: (BB, IB) => {
                BB._temperature = IB
              }
            },
            metadata: oB
          }, yI, UI), (0, TB.j)(null, null, MB, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: BB => "_tint" in BB,
              get: BB => BB._tint,
              set: (BB, IB) => {
                BB._tint = IB
              }
            },
            metadata: oB
          }, WI, dI), (0, TB.j)(null, null, jB, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteStretch" in BB,
              get: BB => BB.vignetteStretch,
              set: (BB, IB) => {
                BB.vignetteStretch = IB
              }
            },
            metadata: oB
          }, CI, QI), (0, TB.j)(null, null, PB, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteCenterX" in BB,
              get: BB => BB.vignetteCenterX,
              set: (BB, IB) => {
                BB.vignetteCenterX = IB
              }
            },
            metadata: oB
          }, sI, wI), (0, TB.j)(null, null, RB, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteCenterY" in BB,
              get: BB => BB.vignetteCenterY,
              set: (BB, IB) => {
                BB.vignetteCenterY = IB
              }
            },
            metadata: oB
          }, OI, YI), (0, TB.j)(null, null, rB, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteWeight" in BB,
              get: BB => BB.vignetteWeight,
              set: (BB, IB) => {
                BB.vignetteWeight = IB
              }
            },
            metadata: oB
          }, iI, pI), (0, TB.j)(null, null, mB, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteColor" in BB,
              get: BB => BB.vignetteColor,
              set: (BB, IB) => {
                BB.vignetteColor = IB
              }
            },
            metadata: oB
          }, aI, HI), (0, TB.j)(null, null, XB, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteCameraFov" in BB,
              get: BB => BB.vignetteCameraFov,
              set: (BB, IB) => {
                BB.vignetteCameraFov = IB
              }
            },
            metadata: oB
          }, MI, jI), (0, TB.j)(null, null, LB, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "_vignetteBlendMode" in BB,
              get: BB => BB._vignetteBlendMode,
              set: (BB, IB) => {
                BB._vignetteBlendMode = IB
              }
            },
            metadata: oB
          }, PI, RI), (0, TB.j)(null, null, eB, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_vignetteEnabled" in BB,
              get: BB => BB._vignetteEnabled,
              set: (BB, IB) => {
                BB._vignetteEnabled = IB
              }
            },
            metadata: oB
          }, rI, mI), (0, TB.j)(null, null, uB, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_ditheringEnabled" in BB,
              get: BB => BB._ditheringEnabled,
              set: (BB, IB) => {
                BB._ditheringEnabled = IB
              }
            },
            metadata: oB
          }, XI, LI), (0, TB.j)(null, null, fB, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: BB => "_ditheringIntensity" in BB,
              get: BB => BB._ditheringIntensity,
              set: (BB, IB) => {
                BB._ditheringIntensity = IB
              }
            },
            metadata: oB
          }, eI, uI), (0, TB.j)(null, null, lB, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: BB => "_skipFinalColorClamp" in BB,
              get: BB => BB._skipFinalColorClamp,
              set: (BB, IB) => {
                BB._skipFinalColorClamp = IB
              }
            },
            metadata: oB
          }, fI, lI), (0, TB.j)(null, null, AB, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: BB => "_applyByPostProcess" in BB,
              get: BB => BB._applyByPostProcess,
              set: (BB, IB) => {
                BB._applyByPostProcess = IB
              }
            },
            metadata: oB
          }, AI, tI), (0, TB.j)(null, null, tB, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_isEnabled" in BB,
              get: BB => BB._isEnabled,
              set: (BB, IB) => {
                BB._isEnabled = IB
              }
            },
            metadata: oB
          }, bI, xI), (0, TB.j)(null, null, bB, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: BB => "outputTextureWidth" in BB,
              get: BB => BB.outputTextureWidth,
              set: (BB, IB) => {
                BB.outputTextureWidth = IB
              }
            },
            metadata: oB
          }, EI, DI), (0, TB.j)(null, null, xB, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "outputTextureHeight" in BB,
              get: BB => BB.outputTextureHeight,
              set: (BB, IB) => {
                BB.outputTextureHeight = IB
              }
            },
            metadata: oB
          }, KI, VI), oB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oB
          })
        })(), BB.TONEMAPPING_STANDARD = 0, BB.TONEMAPPING_ACES = 1, BB.TONEMAPPING_KHR_PBR_NEUTRAL = 2, BB.PrepareUniforms = YB.e, BB.PrepareSamplers = YB.c, BB._VIGNETTEMODE_MULTIPLY = 0, BB._VIGNETTEMODE_OPAQUE = 1, BB
      })(),
      aB = !1;

    function HB(BB) {
      const IB = CB.b.Parse((() => new pB), BB, null, null);
      return void 0 !== BB.vignetteCentreX && (IB.vignetteCenterX = BB.vignetteCentreX), void 0 !== BB.vignetteCentreY && (IB.vignetteCenterY = BB.vignetteCentreY), IB
    }

    function MB() {
      aB || (aB = !0, pB.Parse = HB, CB.b._ImageProcessingConfigurationParser = HB, (0, iB.i)("BABYLON.ImageProcessingConfiguration", pB))
    }
  },
  40177: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB
    });
    var TB = ZB(38718),
      JB = ZB(40152);
    class oB {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          TB = arguments.length > 3 ? arguments[3] : void 0,
          JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          oB = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = BB, this._noUBO = !BB.supportsUniformBuffers || JB, this._dynamic = ZB, this._name = TB ?? "no-name", this._data = IB || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === oB && this._engine._features.trackUbosInFrame || !0 === oB) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.T6 = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.T6 = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
      }
      get useUbo() {
        return !this._noUBO
      }
      get isSync() {
        return !this._needSync
      }
      isDynamic() {
        return this._dynamic
      }
      getData() {
        return this._bufferData
      }
      getBuffer() {
        return this._buffer
      }
      getUniformNames() {
        return this._uniformNames
      }
      _fillAlignment(BB) {
        let IB;
        if (IB = BB <= 2 ? BB : 4, this._uniformLocationPointer % IB !== 0) {
          const BB = this._uniformLocationPointer;
          this._uniformLocationPointer += IB - this._uniformLocationPointer % IB;
          const ZB = this._uniformLocationPointer - BB;
          for (let IB = 0; IB < ZB; IB++) this._data.push(0)
        }
      }
      addUniform(BB, IB) {
        let ZB, TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (TB > 0 && "number" === typeof IB && (this._uniformArraySizes[BB] = {
            strideSize: IB,
            arraySize: TB
          }), void 0 === this._uniformLocations[BB] && (this._uniformNames.push(BB), !this._noUBO)) {
          if (TB > 0) {
            if (IB instanceof Array) throw "addUniform should not be use with Array in UBO: " + BB;
            if (this._fillAlignment(4), 16 == IB) IB *= TB;
            else {
              IB = IB * TB + (4 - IB) * TB
            }
            ZB = [];
            for (let BB = 0; BB < IB; BB++) ZB.push(0)
          } else {
            if (IB instanceof Array) ZB = IB, IB = ZB.length;
            else {
              ZB = [];
              for (let BB = 0; BB < IB; BB++) ZB.push(0)
            }
            this._fillAlignment(IB)
          }
          this._uniformSizes[BB] = IB, this._uniformLocations[BB] = this._uniformLocationPointer, this._uniformLocationPointer += IB;
          for (let BB = 0; BB < IB; BB++) this._data.push(ZB[BB]);
          this._needSync = !0
        }
      }
      addMatrix(BB, IB) {
        this.addUniform(BB, Array.prototype.slice.call(IB.HTB()))
      }
      addFloat2(BB, IB, ZB) {
        const TB = [IB, ZB];
        this.addUniform(BB, TB)
      }
      addFloat3(BB, IB, ZB, TB) {
        const JB = [IB, ZB, TB];
        this.addUniform(BB, JB)
      }
      addColor3(BB, IB) {
        const ZB = [IB.r, IB.g, IB.b];
        this.addUniform(BB, ZB)
      }
      addColor4(BB, IB, ZB) {
        const TB = [IB.r, IB.g, IB.b, ZB];
        this.addUniform(BB, TB)
      }
      addVector3(BB, IB) {
        const ZB = [IB.x, IB.y, IB.z];
        this.addUniform(BB, ZB)
      }
      addMatrix3x3(BB) {
        this.addUniform(BB, 12)
      }
      addMatrix2x2(BB) {
        this.addUniform(BB, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const BB = [];
        let IB = 0;
        for (const ZB in this._uniformLocations)
          if (BB.push(ZB), 10 === ++IB) break;
        return BB.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const BB of this._ownerListsBySlot.values()) this._removeOwnerBacklink(BB);
        this._ownerListsBySlot = new Map, this._slotByOwner = new WeakMap, this._slotFrameId = [], this._ownerCount = 0, this._freeSlots = [], this._slotGeneration = []
      }
      get _numBuffers() {
        return this._buffers.length
      }
      get _indexBuffer() {
        return this._bufferIndex
      }
      get name() {
        return this._name
      }
      set name(BB) {
        this._name = BB
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(BB, IB) {
        for (let ZB = 0; ZB < BB.length; ++ZB)
          if (BB[ZB] !== IB[ZB]) return !1;
        return !0
      }
      _copyBuffer(BB, IB) {
        for (let ZB = 0; ZB < BB.length; ++ZB) IB[ZB] = BB[ZB]
      }
      update() {
        if (!this._noUBO)
          if (this.bindUniformBuffer(), this._buffer)
            if (this._dynamic || this._needSync) {
              if (this._buffers && this._buffers.length > 1 && this._buffers[this._bufferIndex][1]) {
                if (this._buffersEqual(this._bufferData, this._buffers[this._bufferIndex][1])) return this._needSync = !1, void(this._createBufferOnWrite = this._trackUBOsInFrame);
                this._copyBuffer(this._bufferData, this._buffers[this._bufferIndex][1])
              }
              this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData), this._needSync = !1, this._createBufferOnWrite = this._trackUBOsInFrame
            } else this._createBufferOnWrite = this._trackUBOsInFrame;
        else this.create()
      }
      _updateOwnerKeyed(BB) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let IB = this._slotByOwner.get(BB);
        if (void 0 === IB && (IB = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(BB, IB), this._ownerCount++, BB._uniformBuffersWithOwnedSlot || (BB._uniformBuffersWithOwnedSlot = []), BB._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(IB, BB._uniformBuffersWithOwnedSlot)), this._slotGeneration[IB] === this._dataGeneration) return this._bufferIndex = IB, this._buffer = this._buffers[IB][0], this.bindUniformBuffer(), this._slotFrameId[IB] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const ZB = this._buffers[IB][1];
        this._slotFrameId[IB] === this._currentFrameId && ZB && !this._buffersEqual(this._bufferData, ZB) && (IB = this._takeFreeSlot(!1)), this._bufferIndex = IB, this._buffer = this._buffers[IB][0], this.bindUniformBuffer();
        const TB = this._buffers[IB][1];
        TB && this._buffersEqual(this._bufferData, TB) || (TB && this._copyBuffer(this._bufferData, TB), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[IB] = this._currentFrameId, this._slotGeneration[IB] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(BB) {
        for (let ZB = 0; ZB < this._freeSlots.length; ++ZB) {
          const IB = this._freeSlots[ZB];
          if (this._slotFrameId[IB] !== this._currentFrameId) return BB && (this._freeSlots[ZB] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), IB
        }
        this._rebuild();
        const IB = this._buffers.length - 1;
        return BB || this._freeSlots.push(IB), IB
      }
      _releaseOwnerSlot(BB) {
        const IB = this._slotByOwner?.get(BB);
        if (void 0 === IB) return;
        this._slotByOwner.delete(BB);
        const ZB = this._ownerListsBySlot.get(IB);
        ZB && (this._removeOwnerBacklink(ZB), this._ownerListsBySlot.delete(IB)), this._ownerCount--, this._freeSlots.push(IB)
      }
      _removeOwnerBacklink(BB) {
        const IB = BB.indexOf(this); - 1 !== IB && (BB[IB] = BB[BB.length - 1], BB.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(BB, IB, ZB) {
        this._checkNewFrame();
        let JB = this._uniformLocations[BB];
        if (void 0 === JB) {
          if (this._buffer) return void TB.d.Error("Cannot add an uniform after UBO has been created. uniformName=" + BB);
          this.addUniform(BB, ZB), JB = this._uniformLocations[BB]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let BB = 0; BB < ZB; BB++) this._bufferData[JB + BB] = IB[BB];
          this._dataGeneration++
        } else {
          let BB = !1;
          for (let TB = 0; TB < ZB; TB++)(16 === ZB && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[JB + TB] !== Math.fround(IB[TB])) && (BB = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[JB + TB] = IB[TB]);
          this._needSync = this._needSync || BB, BB && this._dataGeneration++
        }
      }
      updateUniformArray(BB, IB, ZB) {
        this._checkNewFrame();
        const oB = this._uniformLocations[BB];
        if (void 0 === oB) return void TB.d.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const GB = this._uniformArraySizes[BB];
        if (this._dynamic) {
          for (let BB = 0; BB < ZB; BB++) this._bufferData[oB + BB] = IB[BB];
          this._dataGeneration++
        } else {
          let BB = !1,
            TB = 0,
            vB = 0;
          for (let kB = 0; kB < ZB; kB++)
            if (this._bufferData[oB + 4 * vB + TB] !== JB.j.FloatRound(IB[kB]) && (BB = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[oB + 4 * vB + TB] = IB[kB]), TB++, TB === GB.strideSize) {
              for (; TB < 4; TB++) this._bufferData[oB + 4 * vB + TB] = 0;
              TB = 0, vB++
            } this._needSync = this._needSync || BB, BB && this._dataGeneration++
        }
      }
      _cacheMatrix(BB, IB) {
        this._checkNewFrame();
        const ZB = this._valueCache[BB],
          TB = IB.updateFlag;
        return (void 0 === ZB || ZB !== TB) && (this._valueCache[BB] = TB, !0)
      }
      _updateMatrix3x3ForUniform(BB, IB) {
        for (let ZB = 0; ZB < 3; ZB++) oB._TempBuffer[4 * ZB] = IB[3 * ZB], oB._TempBuffer[4 * ZB + 1] = IB[3 * ZB + 1], oB._TempBuffer[4 * ZB + 2] = IB[3 * ZB + 2], oB._TempBuffer[4 * ZB + 3] = 0;
        this.updateUniform(BB, oB._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(BB, IB) {
        this._currentEffect.setMatrix3x3(BB, IB)
      }
      _updateMatrix2x2ForEffect(BB, IB) {
        this._currentEffect.setMatrix2x2(BB, IB)
      }
      _updateMatrix2x2ForUniform(BB, IB) {
        for (let ZB = 0; ZB < 2; ZB++) oB._TempBuffer[4 * ZB] = IB[2 * ZB], oB._TempBuffer[4 * ZB + 1] = IB[2 * ZB + 1], oB._TempBuffer[4 * ZB + 2] = 0, oB._TempBuffer[4 * ZB + 3] = 0;
        this.updateUniform(BB, oB._TempBuffer, 8)
      }
      _updateFloatForEffect(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(BB + ZB, IB)
      }
      _updateFloatForUniform(BB, IB) {
        oB._TempBuffer[0] = IB, this.updateUniform(BB, oB._TempBuffer, 1)
      }
      _updateFloat2ForEffect(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(BB + TB, IB, ZB)
      }
      _updateFloat2ForUniform(BB, IB, ZB) {
        oB._TempBuffer[0] = IB, oB._TempBuffer[1] = ZB, this.updateUniform(BB, oB._TempBuffer, 2)
      }
      _updateFloat3ForEffect(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(BB + JB, IB, ZB, TB)
      }
      _updateFloat3ForUniform(BB, IB, ZB, TB) {
        oB._TempBuffer[0] = IB, oB._TempBuffer[1] = ZB, oB._TempBuffer[2] = TB, this.updateUniform(BB, oB._TempBuffer, 3)
      }
      _updateFloat4ForEffect(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(BB + oB, IB, ZB, TB, JB)
      }
      _updateFloat4ForUniform(BB, IB, ZB, TB, JB) {
        oB._TempBuffer[0] = IB, oB._TempBuffer[1] = ZB, oB._TempBuffer[2] = TB, oB._TempBuffer[3] = JB, this.updateUniform(BB, oB._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[BB]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(BB + ZB, IB);
            break;
          case 3:
            this._currentEffect.setFloatArray3(BB + ZB, IB);
            break;
          case 4:
            this._currentEffect.setFloatArray4(BB + ZB, IB);
            break;
          default:
            this._currentEffect.setFloatArray(BB + ZB, IB)
        }
      }
      _updateFloatArrayForUniform(BB, IB) {
        this.updateUniformArray(BB, IB, IB.length)
      }
      _updateArrayForEffect(BB, IB) {
        this._currentEffect.setArray(BB, IB)
      }
      _updateArrayForUniform(BB, IB) {
        this.updateUniformArray(BB, IB, IB.length)
      }
      _updateIntArrayForEffect(BB, IB) {
        this._currentEffect.setIntArray(BB, IB)
      }
      _updateIntArrayForUniform(BB, IB) {
        oB._TempBufferInt32View.set(IB), this.updateUniformArray(BB, oB._TempBuffer, IB.length)
      }
      _updateUIntArrayForEffect(BB, IB) {
        this._currentEffect.setUIntArray(BB, IB)
      }
      _updateUIntArrayForUniform(BB, IB) {
        oB._TempBufferUInt32View.set(IB), this.updateUniformArray(BB, oB._TempBuffer, IB.length)
      }
      _updateMatrixForEffect(BB, IB) {
        this._currentEffect.setMatrix(BB, IB)
      }
      _updateMatrixForUniform(BB, IB) {
        this._cacheMatrix(BB, IB) && this.updateUniform(BB, IB.HTB(), 16)
      }
      _updateMatricesForEffect(BB, IB) {
        this._currentEffect.setMatrices(BB, IB)
      }
      _updateMatricesForUniform(BB, IB) {
        this.updateUniform(BB, IB, IB.length)
      }
      _updateVector3ForEffect(BB, IB) {
        this._currentEffect.setVector3(BB, IB)
      }
      _updateVector3ForUniform(BB, IB) {
        oB._TempBuffer[0] = IB.x, oB._TempBuffer[1] = IB.y, oB._TempBuffer[2] = IB.z, this.updateUniform(BB, oB._TempBuffer, 3)
      }
      _updateVector4ForEffect(BB, IB) {
        this._currentEffect.setVector4(BB, IB)
      }
      _updateVector4ForUniform(BB, IB) {
        oB._TempBuffer[0] = IB.x, oB._TempBuffer[1] = IB.y, oB._TempBuffer[2] = IB.z, oB._TempBuffer[3] = IB.w, this.updateUniform(BB, oB._TempBuffer, 4)
      }
      _updateColor3ForEffect(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(BB + ZB, IB)
      }
      _updateColor3ForUniform(BB, IB) {
        oB._TempBuffer[0] = IB.r, oB._TempBuffer[1] = IB.g, oB._TempBuffer[2] = IB.b, this.updateUniform(BB, oB._TempBuffer, 3)
      }
      _updateColor4ForEffect(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(BB + TB, IB, ZB)
      }
      _updateDirectColor4ForEffect(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(BB + ZB, IB)
      }
      _updateColor4ForUniform(BB, IB, ZB) {
        oB._TempBuffer[0] = IB.r, oB._TempBuffer[1] = IB.g, oB._TempBuffer[2] = IB.b, oB._TempBuffer[3] = ZB, this.updateUniform(BB, oB._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(BB, IB) {
        oB._TempBuffer[0] = IB.r, oB._TempBuffer[1] = IB.g, oB._TempBuffer[2] = IB.b, oB._TempBuffer[3] = IB.a, this.updateUniform(BB, oB._TempBuffer, 4)
      }
      _updateIntForEffect(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(BB + ZB, IB)
      }
      _updateIntForUniform(BB, IB) {
        oB._TempBufferInt32View[0] = IB, this.updateUniform(BB, oB._TempBuffer, 1)
      }
      _updateInt2ForEffect(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(BB + TB, IB, ZB)
      }
      _updateInt2ForUniform(BB, IB, ZB) {
        oB._TempBufferInt32View[0] = IB, oB._TempBufferInt32View[1] = ZB, this.updateUniform(BB, oB._TempBuffer, 2)
      }
      _updateInt3ForEffect(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(BB + JB, IB, ZB, TB)
      }
      _updateInt3ForUniform(BB, IB, ZB, TB) {
        oB._TempBufferInt32View[0] = IB, oB._TempBufferInt32View[1] = ZB, oB._TempBufferInt32View[2] = TB, this.updateUniform(BB, oB._TempBuffer, 3)
      }
      _updateInt4ForEffect(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(BB + oB, IB, ZB, TB, JB)
      }
      _updateInt4ForUniform(BB, IB, ZB, TB, JB) {
        oB._TempBufferInt32View[0] = IB, oB._TempBufferInt32View[1] = ZB, oB._TempBufferInt32View[2] = TB, oB._TempBufferInt32View[3] = JB, this.updateUniform(BB, oB._TempBuffer, 4)
      }
      _updateUIntForEffect(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(BB + ZB, IB)
      }
      _updateUIntForUniform(BB, IB) {
        oB._TempBufferUInt32View[0] = IB, this.updateUniform(BB, oB._TempBuffer, 1)
      }
      _updateUInt2ForEffect(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(BB + TB, IB, ZB)
      }
      _updateUInt2ForUniform(BB, IB, ZB) {
        oB._TempBufferUInt32View[0] = IB, oB._TempBufferUInt32View[1] = ZB, this.updateUniform(BB, oB._TempBuffer, 2)
      }
      _updateUInt3ForEffect(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(BB + JB, IB, ZB, TB)
      }
      _updateUInt3ForUniform(BB, IB, ZB, TB) {
        oB._TempBufferUInt32View[0] = IB, oB._TempBufferUInt32View[1] = ZB, oB._TempBufferUInt32View[2] = TB, this.updateUniform(BB, oB._TempBuffer, 3)
      }
      _updateUInt4ForEffect(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(BB + oB, IB, ZB, TB, JB)
      }
      _updateUInt4ForUniform(BB, IB, ZB, TB, JB) {
        oB._TempBufferUInt32View[0] = IB, oB._TempBufferUInt32View[1] = ZB, oB._TempBufferUInt32View[2] = TB, oB._TempBufferUInt32View[3] = JB, this.updateUniform(BB, oB._TempBuffer, 4)
      }
      setTexture(BB, IB) {
        this._currentEffect.setTexture(BB, IB)
      }
      setTextureArray(BB, IB) {
        this._currentEffect.setTextureArray(BB, IB)
      }
      bindTexture(BB, IB) {
        this._currentEffect._bindTexture(BB, IB)
      }
      updateUniformDirectly(BB, IB) {
        this.updateUniform(BB, IB, IB.length), this.update()
      }
      bindToEffect(BB, IB) {
        this._currentEffect = BB, this._currentEffectName = IB
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(BB) {
        if (!this._buffers) return this._buffer === BB;
        for (let IB = 0; IB < this._buffers.length; ++IB) {
          if (this._buffers[IB][0] === BB) return this._bufferIndex = IB, this._buffer = BB, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[IB][1] && (this._bufferData.set(this._buffers[IB][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(BB) {
        return void 0 !== this._uniformLocations[BB]
      }
      dispose() {
        if (this._noUBO) return;
        const BB = this._engine._uniformBuffers,
          IB = BB.indexOf(this);
        if (-1 !== IB && (BB[IB] = BB[BB.length - 1], BB.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let BB = 0; BB < this._buffers.length; ++BB) {
            const IB = this._buffers[BB][0];
            this._engine._releaseBuffer(IB)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    oB._MAX_UNIFORM_SIZE = 256, oB._TempBuffer = new Float32Array(oB._MAX_UNIFORM_SIZE), oB._TempBufferInt32View = new Int32Array(oB._TempBuffer.buffer), oB._TempBufferUInt32View = new Uint32Array(oB._TempBuffer.buffer)
  },
  39976: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB
    });
    var TB = ZB(39984);
    class JB extends TB.d {
      constructor(BB) {
        super(), this._buffer = BB
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  40071: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => kB,
      f: () => cB
    });
    const TB = "__bjs_serializable__",
      JB = new WeakMap;

    function oB(BB, IB) {
      return Object.prototype.hasOwnProperty.call(BB, IB)
    }
    const GB = function() {
      let BB = Symbol.metadata;
      return BB || (BB = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: BB
      })), BB
    }();

    function vB(BB) {
      return "function" === typeof BB ? BB : BB?.constructor
    }

    function kB(BB) {
      if (!BB) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(GB)}) polyfill must run before decorated classes are evaluated.`);
      return oB(BB, TB) || (BB[TB] = {}), BB[TB]
    }

    function cB(BB) {
      const IB = vB(BB),
        ZB = IB ? IB[GB] : void 0;
      if (!ZB) return {};
      const kB = JB.get(ZB);
      if (kB) return kB;
      const cB = {},
        nB = [];
      let hB = ZB;
      for (; hB;) nB.push(hB), hB = Object.getPrototypeOf(hB);
      for (const JB of nB)
        if (oB(JB, TB)) {
          const BB = JB[TB];
          for (const IB in BB) cB[IB] = BB[IB]
        } return JB.set(ZB, cB), cB
    }
  },
  40065: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => hB,
      C: () => GB,
      d: () => WB,
      e: () => oB,
      h: () => UB,
      i: () => FB,
      l: () => kB,
      m: () => NB,
      o: () => cB,
      p: () => qB,
      q: () => zB,
      s: () => gB,
      v: () => vB,
      x: () => nB
    });
    var TB = ZB(40071);

    function JB(BB, IB) {
      return (ZB, JB) => {
        if (!JB.metadata) return;
        const oB = String(JB.name),
          GB = (0, TB.c)(JB.metadata);
        GB[oB] || (GB[oB] = {
          type: BB,
          sourceName: IB
        })
      }
    }

    function oB(BB) {
      return function(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (ZB, TB) => {
          const JB = IB || "_" + String(TB.name);
          return {
            init(BB) {
              return void 0 === BB && JB in this || (this[JB] = BB), BB
            },
            get() {
              return this[JB]
            },
            set(IB) {
              "function" === typeof this[JB]?.equals && this[JB].equals(IB) || this[JB] !== IB && (this[JB] = IB, this[BB]())
            }
          }
        }
      }(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function GB(BB) {
      return JB(0, BB)
    }

    function vB(BB) {
      return JB(1, BB)
    }

    function kB(BB) {
      return JB(2, BB)
    }

    function cB(BB) {
      return JB(3, BB)
    }

    function nB(BB) {
      return JB(4, BB)
    }

    function hB(BB) {
      return JB(5, BB)
    }

    function zB(BB) {
      return JB(6, BB)
    }

    function FB(BB) {
      return JB(7, BB)
    }

    function NB(BB) {
      return JB(8, BB)
    }

    function gB(BB) {
      return JB(10, BB)
    }

    function qB(BB) {
      return JB(12, BB)
    }

    function yB(BB, IB, ZB) {
      const TB = String(IB.name);
      let JB = null;
      const oB = function() {
        if (null === JB) {
          JB = BB, "undefined" !== typeof _native && _native[TB] && (JB = ZB(_native[TB], BB));
          const GB = this && (IB.static ? this : Object.getPrototypeOf(this));
          GB?.[TB] === oB && (GB[TB] = JB)
        }
        for (var GB = arguments.length, vB = new Array(GB), kB = 0; kB < GB; kB++) vB[kB] = arguments[kB];
        return JB.apply(this, vB)
      };
      return oB
    }

    function UB(BB, IB) {
      return yB(BB, IB, (BB => BB))
    }

    function WB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (ZB, TB) => {
        const JB = IB || "_" + String(TB.name);
        return {
          get() {
            return this[JB]?.value
          },
          set(IB) {
            "function" === typeof this[JB]?.value?.equals && this[JB].value.equals(IB) || this[JB].value !== IB && (this[JB].value = IB, this[BB]())
          }
        }
      }
    }
    UB.filter = function(BB) {
      return (IB, ZB) => yB(IB, ZB, ((IB, ZB) => function() {
        for (var TB = arguments.length, JB = new Array(TB), oB = 0; oB < TB; oB++) JB[oB] = arguments[oB];
        return BB(...JB) ? IB(...JB) : ZB.apply(this, JB)
      }))
    }
  },
  40085: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => cB
    });
    var TB = ZB(39931),
      JB = ZB(40092),
      oB = ZB(37311),
      GB = ZB(37120),
      vB = ZB(40071);
    const kB = function(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const oB = BB();
      JB.b && JB.b.HasTags(IB) && JB.b.AddTagsTo(oB, JB.b.GetTags(IB, !0));
      const GB = (0, vB.f)(oB),
        kB = {};
      for (const JB in GB) {
        const BB = GB[JB],
          vB = IB[JB],
          nB = BB.type;
        if (void 0 !== vB && null !== vB && ("uniqueId" !== JB || cB.AllowLoadingUniqueId)) switch (nB) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof vB.slice ? oB[JB] = vB.slice() : oB[JB] = vB;
            break;
          case 1:
            TB.cloneTexturesOnlyOnce && kB[vB.uniqueId] ? oB[JB] = kB[vB.uniqueId] : (oB[JB] = ZB || vB.isRenderTarget ? vB : vB.clone(), kB[vB.uniqueId] = oB[JB]);
            break;
          case 2:
          case 3:
          case 4:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12:
          case 13:
            oB[JB] = ZB ? vB : vB.clone()
        }
      }
      return oB
    };
    class cB {
      static AppendSerializedAnimations(BB, IB) {
        if (BB.animations) {
          IB.animations = [];
          for (let ZB = 0; ZB < BB.animations.length; ZB++) {
            const TB = BB.animations[ZB];
            IB.animations.push(TB.serialize())
          }
        }
      }
      static Serialize(BB, IB) {
        IB || (IB = {}), JB.b && (IB.tags = JB.b.GetTags(BB));
        const ZB = (0, vB.f)(BB);
        for (const TB in ZB) {
          const JB = ZB[TB],
            oB = JB.sourceName || TB,
            GB = JB.type,
            vB = BB[TB];
          if (void 0 !== vB && null !== vB && ("uniqueId" !== TB || cB.AllowLoadingUniqueId)) switch (GB) {
            case 0:
              Array.isArray(vB) ? IB[oB] = vB.slice() : IB[oB] = vB;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              IB[oB] = vB.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              IB[oB] = vB.HTB();
              break;
            case 6:
            case 11:
              IB[oB] = vB.id
          }
        }
        return IB
      }
      static ParseProperties(BB, IB, ZB, TB) {
        TB || (TB = "");
        const JB = (0, vB.f)(IB);
        for (const vB in JB) {
          const kB = JB[vB],
            nB = BB[kB.sourceName || vB],
            hB = kB.type;
          if (void 0 !== nB && null !== nB && ("uniqueId" !== vB || cB.AllowLoadingUniqueId)) {
            const BB = IB;
            switch (hB) {
              case 0:
                BB[vB] = nB;
                break;
              case 1:
                ZB && (BB[vB] = cB._TextureParser(nB, ZB, TB));
                break;
              case 2:
                BB[vB] = oB.c.FromArray(nB);
                break;
              case 3:
                BB[vB] = cB._FresnelParametersParser(nB);
                break;
              case 4:
                BB[vB] = GB.p.FromArray(nB);
                break;
              case 5:
                BB[vB] = GB.s.FromArray(nB);
                break;
              case 6:
                ZB && (BB[vB] = ZB.getLastMeshById(nB));
                break;
              case 7:
                BB[vB] = cB._ColorCurvesParser(nB);
                break;
              case 8:
                BB[vB] = oB.g.FromArray(nB);
                break;
              case 9:
                BB[vB] = cB._ImageProcessingConfigurationParser(nB);
                break;
              case 10:
                BB[vB] = GB.f.FromArray(nB);
                break;
              case 11:
                ZB && (BB[vB] = ZB.getCameraById(nB));
                break;
              case 12:
                BB[vB] = GB.b.FromArray(nB);
                break;
              case 13:
                BB[vB] = GB.t.FromArray(nB)
            }
          }
        }
      }
      static Parse(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const oB = BB();
        return JB.b && JB.b.AddTagsTo(oB, IB.tags), cB.ParseProperties(IB, oB, ZB, TB), oB
      }
      static Clone(BB, IB) {
        return kB(BB, IB, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(BB, IB) {
        return kB(BB, IB, !0)
      }
    }
    cB.AllowLoadingUniqueId = !1, cB._ImageProcessingConfigurationParser = BB => {
      throw (0, TB.m)("ImageProcessingConfiguration")
    }, cB._FresnelParametersParser = BB => {
      throw (0, TB.m)("FresnelParameters")
    }, cB._ColorCurvesParser = BB => {
      throw (0, TB.m)("ColorCurves")
    }, cB._TextureParser = (BB, IB, ZB) => {
      throw (0, TB.m)("Texture")
    }
  },
  40010: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB
    });
    var TB = ZB(39959);
    class JB {
      get min() {
        return this._min
      }
      get max() {
        return this._max
      }
      get average() {
        return this._average
      }
      get lastSecAverage() {
        return this._lastSecAverage
      }
      get current() {
        return this._current
      }
      get total() {
        return this._totalAccumulated
      }
      get count() {
        return this._totalValueCount
      }
      constructor() {
        this._startMonitoringTime = 0, this._min = 0, this._max = 0, this._hasResult = !1, this._hasCurrentValue = !1, this._average = 0, this._lastSecAverage = 0, this._current = 0, this._totalValueCount = 0, this._totalAccumulated = 0, this._lastSecAccumulated = 0, this._lastSecTime = 0, this._lastSecValueCount = 0
      }
      fetchNewFrame() {
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = JB.Enabled, this._lastSecValueCount++
      }
      addCount(BB, IB) {
        JB.Enabled && (this._current += BB, this._hasCurrentValue = !0, IB && this._fetchResult())
      }
      beginMonitoring() {
        JB.Enabled && (this._startMonitoringTime = TB.c.Now)
      }
      endMonitoring() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!JB.Enabled) return;
        BB && this.fetchNewFrame();
        const IB = TB.c.Now;
        this._current = IB - this._startMonitoringTime, this._hasCurrentValue = !0, BB && this._fetchResult()
      }
      OW() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const BB = TB.c.Now;
        BB - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = BB, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    JB.Enabled = !0
  },
  40163: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      g: () => TB
    });
    class TB {
      constructor(BB) {
        this.length = 0, this.data = new Array(BB), this._id = TB._GlobalId++
      }
      push(BB) {
        this.data[this.length++] = BB, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(BB) {
        for (let IB = 0; IB < this.length; IB++) BB(this.data[IB])
      }
      sort(BB) {
        this.data.sort(BB)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(BB) {
        if (0 !== BB.length) {
          this.length + BB.length > this.data.length && (this.data.length = 2 * (this.length + BB.length));
          for (let IB = 0; IB < BB.length; IB++) this.data[this.length++] = (BB.data || BB)[IB]
        }
      }
      indexOf(BB) {
        const IB = this.data.indexOf(BB);
        return IB >= this.length ? -1 : IB
      }
      contains(BB) {
        return -1 !== this.indexOf(BB)
      }
    }
    TB._GlobalId = 0;
    class JB extends TB {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(BB) {
        super.push(BB), BB.__smartArrayFlags || (BB.__smartArrayFlags = {}), BB.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(BB) {
        return (!BB.__smartArrayFlags || BB.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(BB), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(BB) {
        if (0 !== BB.length) {
          this.length + BB.length > this.data.length && (this.data.length = 2 * (this.length + BB.length));
          for (let IB = 0; IB < BB.length; IB++) {
            const ZB = (BB.data || BB)[IB];
            this.pushNoDuplicate(ZB)
          }
        }
      }
    }
  },
  40092: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => JB
    });
    class TB {
      static Eval(BB, IB) {
        return "true" === (BB = BB.match(/\([^()]*\)/g) ? BB.replace(/\([^()]*\)/g, (BB => (BB = BB.slice(1, BB.length - 1), TB._HandleParenthesisContent(BB, IB)))) : TB._HandleParenthesisContent(BB, IB)) || "false" !== BB && TB.Eval(BB, IB)
      }
      static _HandleParenthesisContent(BB, IB) {
        let ZB;
        IB = IB || (BB => "true" === BB);
        const JB = BB.split("||");
        for (const oB in JB)
          if (Object.prototype.hasOwnProperty.call(JB, oB)) {
            let BB = TB._SimplifyNegation(JB[oB].trim());
            const GB = BB.split("&&");
            if (GB.length > 1)
              for (let JB = 0; JB < GB.length; ++JB) {
                const oB = TB._SimplifyNegation(GB[JB].trim());
                if (ZB = "true" !== oB && "false" !== oB ? "!" === oB[0] ? !IB(oB.substring(1)) : IB(oB) : "true" === oB, !ZB) {
                  BB = "false";
                  break
                }
              }
            if (ZB || "true" === BB) {
              ZB = !0;
              break
            }
            ZB = "true" !== BB && "false" !== BB ? "!" === BB[0] ? !IB(BB.substring(1)) : IB(BB) : "true" === BB
          } return ZB ? "true" : "false"
      }
      static _SimplifyNegation(BB) {
        return "!true" === (BB = (BB = BB.replace(/^[\s!]+/, (BB => (BB = BB.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? BB = "false" : "!false" === BB && (BB = "true"), BB
      }
    }
    class JB {
      static EnableFor(BB) {
        BB._tags = BB._tags || {}, BB.hasTags = () => JB.HasTags(BB), BB.addTags = IB => JB.AddTagsTo(BB, IB), BB.removeTags = IB => JB.RemoveTagsFrom(BB, IB), BB.matchesTagsQuery = IB => JB.MatchesQuery(BB, IB)
      }
      static DisableFor(BB) {
        delete BB._tags, delete BB.hasTags, delete BB.addTags, delete BB.removeTags, delete BB.matchesTagsQuery
      }
      static HasTags(BB) {
        if (!BB._tags) return !1;
        const IB = BB._tags;
        for (const ZB in IB)
          if (Object.prototype.hasOwnProperty.call(IB, ZB)) return !0;
        return !1
      }
      static GetTags(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!BB._tags) return null;
        if (IB) {
          const IB = [];
          for (const ZB in BB._tags) Object.prototype.hasOwnProperty.call(BB._tags, ZB) && !0 === BB._tags[ZB] && IB.push(ZB);
          return IB.join(" ")
        }
        return BB._tags
      }
      static AddTagsTo(BB, IB) {
        if (!IB) return;
        if ("string" !== typeof IB) return;
        const ZB = IB.split(" ");
        for (const TB of ZB) JB._AddTagTo(BB, TB)
      }
      static _AddTagTo(BB, IB) {
        "" !== (IB = IB.trim()) && "true" !== IB && "false" !== IB && (IB.match(/[\s]/) || IB.match(/^([!]|([|]|[&]){2})/) || (JB.EnableFor(BB), BB._tags[IB] = !0))
      }
      static RemoveTagsFrom(BB, IB) {
        if (!JB.HasTags(BB)) return;
        const ZB = IB.split(" ");
        for (const TB in ZB) JB._RemoveTagFrom(BB, ZB[TB])
      }
      static _RemoveTagFrom(BB, IB) {
        delete BB._tags[IB]
      }
      static MatchesQuery(BB, IB) {
        return void 0 === IB || ("" === IB ? JB.HasTags(BB) : TB.Eval(IB, (IB => JB.HasTags(BB) && BB._tags[IB])))
      }
    }
  },
  40190: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB
    });
    var TB = ZB(40188),
      JB = ZB(37153);
    class oB {
      constructor(BB) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new JB.b, this._scene = BB
      }
      _prepareBuffers() {
        if (this._vertexBuffers[TB.i.PositionKind]) return;
        const BB = [];
        BB.push(1, 1), BB.push(-1, 1), BB.push(-1, -1), BB.push(1, -1), this._vertexBuffers[TB.i.PositionKind] = new TB.i(this._scene.PN(), BB, TB.i.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const BB = [];
        BB.push(0), BB.push(1), BB.push(2), BB.push(0), BB.push(2), BB.push(3), this._indexBuffer = this._scene.PN().createIndexBuffer(BB)
      }
      _getActivePostProcesses(BB) {
        const IB = this._activePostProcesses;
        IB.length = 0;
        for (let ZB = 0; ZB < BB.length; ZB++) {
          const TB = BB[ZB];
          TB && IB.push(TB)
        }
        return IB
      }
      _rebuild() {
        const BB = this._vertexBuffers[TB.i.PositionKind];
        BB && (BB._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZB = this._scene.activeCamera;
        return !!ZB && (IB = IB || this._getActivePostProcesses(ZB._postProcesses), !(!IB || 0 === IB.length || !this._scene.postProcessesEnabled) && (IB[0].activate(ZB, BB, null !== IB && void 0 !== IB), !0))
      }
      directRender(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          GB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : BB.length;
        const vB = this._scene.PN();
        for (let kB = 0; kB < GB; kB++) {
          kB < BB.length - 1 ? BB[kB + 1].activate(this._scene.activeCamera || this._scene, IB?.texture) : (IB ? vB.bindFramebuffer(IB, TB, void 0, void 0, ZB, JB) : oB || vB.restoreDefaultFramebuffer(), vB._debugInsertMarker?.(`post process ${BB[kB].name} output`));
          const GB = BB[kB],
            cB = GB.apply();
          cB && (GB.onBeforeRenderObservable.notifyObservers(cB), this._prepareBuffers(), vB.bindBuffers(this._vertexBuffers, this._indexBuffer, cB), vB.drawElementsType(0, 0, 6), GB.onAfterRenderObservable.notifyObservers(cB))
        }
        vB.setDepthBuffer(!0), vB.setDepthWrite(!0)
      }
      _finalizeFrame(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const oB = this._scene.activeCamera;
        if (!oB) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (TB = TB || this._getActivePostProcesses(oB._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const GB = this._scene.PN();
        for (let vB = 0, kB = TB.length; vB < kB; vB++) {
          const cB = TB[vB];
          if (vB < kB - 1 ? cB._outputTexture = TB[vB + 1].activate(oB, IB?.texture) : (IB ? (GB.bindFramebuffer(IB, ZB, void 0, void 0, JB), cB._outputTexture = IB) : (GB.restoreDefaultFramebuffer(), cB._outputTexture = null), GB._debugInsertMarker?.(`post process ${TB[vB].name} output`)), BB) break;
          const nB = cB.apply();
          nB && (cB.onBeforeRenderObservable.notifyObservers(nB), this._prepareBuffers(), GB.bindBuffers(this._vertexBuffers, this._indexBuffer, nB), GB.drawElementsType(0, 0, 6), cB.onAfterRenderObservable.notifyObservers(nB))
        }
        GB.setDepthBuffer(!0), GB.setDepthWrite(!0), GB.setAlphaMode(0)
      }
      dispose() {
        const BB = this._vertexBuffers[TB.i.PositionKind];
        BB && (BB.dispose(), this._vertexBuffers[TB.i.PositionKind] = null), this._indexBuffer && (this._scene.PN()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  40207: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => cB
    });
    var TB = ZB(40163),
      JB = ZB(37120);
    const oB = [],
      GB = [];
    let vB = !1;

    function kB(BB, IB) {
      for (; BB.length < IB;) BB.push(void 0)
    }
    class cB {
      set opaqueSortCompareFn(BB) {
        this._opaqueSortCompareFn = BB || cB.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(BB) {
        this._alphaTestSortCompareFn = BB || cB.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(BB) {
        this._transparentSortCompareFn = BB || cB.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = BB, this._opaqueSubMeshes = new TB.g(256), this._transparentSubMeshes = new TB.g(256), this._alphaTestSubMeshes = new TB.g(256), this._depthOnlySubMeshes = new TB.g(256), this._particleSystems = new TB.g(256), this._spriteManagers = new TB.g(256), this._empty = !0, this._edgesRenderers = new TB.c(16), this.disableDepthPrePass = !1, this._scene = IB, this.opaqueSortCompareFn = ZB, this.alphaTestSortCompareFn = JB, this.transparentSortCompareFn = oB
      }
      render(BB, IB, ZB, TB) {
        let JB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          oB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          GB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          vB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          kB = arguments.length > 8 ? arguments[8] : void 0;
        if (BB) return void BB(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const cB = this._scene.PN();
        JB && 0 !== this._depthOnlySubMeshes.length && (cB.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), cB.setColorWrite(!0)), oB && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), GB && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const nB = cB.getStencilBuffer();
        if (cB.setStencilBuffer(!1), IB && this._renderSprites(), ZB && this._renderParticles(TB), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), vB && (kB || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (cB.setStencilBuffer(nB), kB) kB(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const BB = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            BB.length && this._renderTransparent(BB)
          } else this._renderTransparent(this._transparentSubMeshes);
          cB.setAlphaMode(0)
        }
        if (cB.setStencilBuffer(!1), oB && this._edgesRenderers.length) {
          for (let BB = 0; BB < this._edgesRenderers.length; BB++) this._edgesRenderers.data[BB].render();
          cB.setAlphaMode(0)
        }
        cB.setStencilBuffer(nB)
      }
      _renderOpaqueSorted(BB) {
        cB._RenderSorted(BB, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(BB) {
        cB._RenderSorted(BB, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(BB) {
        cB._RenderSorted(BB, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(BB, IB, ZB, TB, oB) {
        let nB, hB = 0;
        const zB = ZB ? ZB.globalPosition : cB._ZeroVector;
        if (TB && IB !== cB.PainterSortCompare)
          for (; hB < BB.length; hB++) nB = BB.data[hB], nB._alphaIndex = nB.getMesh().alphaIndex, nB._distanceToCamera = JB.s.Distance(nB.qm().ZJB.centerWorld, zB);
        const FB = BB.length;
        let NB = BB.data;
        const gB = FB !== NB.length && !vB;
        if (gB) {
          for (vB = !0, kB(GB, FB), hB = 0; hB < FB; hB++) GB[hB] = NB[hB];
          NB = GB
        } else FB !== NB.length && (NB = NB.slice(0, FB));
        try {
          IB && cB._StableSort(NB, FB, IB), cB._DrawSorted(NB, FB, TB, oB)
        } finally {
          gB && (GB.fill(void 0, 0, FB), vB = !1)
        }
      }
      static _DrawSorted(BB, IB, ZB, TB) {
        let JB;
        const oB = BB[0].getMesh().JR();
        for (let GB = 0; GB < IB; GB++) {
          if (JB = BB[GB], oB._activeMeshesFrozenButKeepClipping && !JB.isInFrustum(oB._frustumPlanes)) continue;
          let IB = !1;
          if (ZB) {
            const BB = JB.LN();
            if (BB && BB.needDepthPrePass && !TB) {
              IB = !0;
              const ZB = BB.JR().PN();
              ZB.setColorWrite(!1), ZB.setAlphaMode(0), JB.render(!1), ZB.setColorWrite(!0)
            }
          }
          const vB = JB._renderingMesh;
          !IB && vB._renderRunFollower(JB, ZB) || JB.render(ZB)
        }
      }
      static _StableSort(BB, IB, ZB) {
        for (let TB = 0; TB < IB; TB += 16) {
          const JB = Math.min(TB + 16, IB);
          for (let IB = TB + 1; IB < JB; IB++) {
            const JB = BB[IB];
            let oB = TB,
              GB = IB;
            for (; oB < GB;) {
              const IB = oB + GB >>> 1;
              ZB(JB, BB[IB]) < 0 ? GB = IB : oB = IB + 1
            }
            for (let ZB = IB; ZB > oB; ZB--) BB[ZB] = BB[ZB - 1];
            BB[oB] = JB
          }
        }
        if (!(IB <= 16)) {
          kB(oB, IB);
          try {
            let TB = BB,
              JB = oB;
            for (let BB = 16; BB < IB; BB *= 2) {
              for (let GB = 0; GB < IB; GB += 2 * BB) {
                const oB = Math.min(GB + BB, IB),
                  vB = Math.min(GB + 2 * BB, IB);
                let kB = GB,
                  cB = oB,
                  nB = GB;
                if (oB < vB && ZB(TB[oB], TB[oB - 1]) < 0)
                  for (; kB < oB && cB < vB;) JB[nB++] = ZB(TB[cB], TB[kB]) < 0 ? TB[cB++] : TB[kB++];
                for (; kB < oB;) JB[nB++] = TB[kB++];
                for (; cB < vB;) JB[nB++] = TB[cB++]
              }
              const oB = JB;
              JB = TB, TB = oB
            }
            if (TB !== BB)
              for (let ZB = 0; ZB < IB; ZB++) BB[ZB] = TB[ZB]
          } finally {
            oB.fill(void 0, 0, IB)
          }
        }
      }
      static defaultTransparentSortCompare(BB, IB) {
        return BB._alphaIndex > IB._alphaIndex ? 1 : BB._alphaIndex < IB._alphaIndex ? -1 : cB.backToFrontSortCompare(BB, IB)
      }
      static backToFrontSortCompare(BB, IB) {
        return BB._distanceToCamera < IB._distanceToCamera ? 1 : BB._distanceToCamera > IB._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(BB, IB) {
        return BB._distanceToCamera < IB._distanceToCamera ? -1 : BB._distanceToCamera > IB._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(BB, IB) {
        const ZB = BB.getMesh(),
          TB = IB.getMesh();
        return ZB.material && TB.material ? ZB.material.uniqueId - TB.material.uniqueId : ZB.uniqueId - TB.uniqueId
      }
      prepare() {
        this._opaqueSubMeshes.reset(), this._transparentSubMeshes.reset(), this._alphaTestSubMeshes.reset(), this._depthOnlySubMeshes.reset(), this._particleSystems.reset(), this.prepareSprites(), this._edgesRenderers.reset(), this._empty = !0
      }
      prepareSprites() {
        this._spriteManagers.reset()
      }
      dispose() {
        this._opaqueSubMeshes.dispose(), this._transparentSubMeshes.dispose(), this._alphaTestSubMeshes.dispose(), this._depthOnlySubMeshes.dispose(), this._particleSystems.dispose(), this._spriteManagers.dispose(), this._edgesRenderers.dispose()
      }
      dispatch(BB, IB, ZB) {
        void 0 === IB && (IB = BB.getMesh()), void 0 === ZB && (ZB = BB.LN()), null !== ZB && void 0 !== ZB && (ZB.needAlphaBlendingForMesh(IB) ? this._transparentSubMeshes.push(BB) : ZB.needAlphaTestingForMesh(IB) ? (ZB.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(BB), this._alphaTestSubMeshes.push(BB)) : (ZB.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(BB), this._opaqueSubMeshes.push(BB)), IB._renderingGroup = this, IB._edgesRenderer && IB.isEnabled() && IB.isVisible && IB._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(IB._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(BB) {
        this._spriteManagers.push(BB), this._empty = !1
      }
      dispatchParticles(BB) {
        this._particleSystems.push(BB), this._empty = !1
      }
      _renderParticles(BB) {
        if (0 === this._particleSystems.length) return;
        const IB = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let ZB = 0; ZB < this._particleSystems.length; ZB++) {
          const TB = this._particleSystems.data[ZB];
          if (0 === (IB && IB.layerMask & TB.layerMask)) continue;
          const JB = TB.emitter;
          JB.position && BB && -1 === BB.indexOf(JB) || this._scene._activeParticles.addCount(TB.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const BB = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let IB = 0; IB < this._spriteManagers.length; IB++) {
          const ZB = this._spriteManagers.data[IB];
          0 !== (BB && BB.layerMask & ZB.layerMask) && ZB.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    cB._ZeroVector = JB.s.Zero()
  },
  40202: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB
    });
    var TB = ZB(40207);
    class JB {}
    class oB {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(BB) {
        this._disableDepthPrePass = BB;
        for (const IB of this._renderingGroups) IB.disableDepthPrePass = BB
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(BB) {
        BB !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = BB, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const BB of this._scene.meshes)
          if (BB.EW)
            for (const IB of BB.EW) IB._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const BB of this._scene.spriteManagers) BB._wasDispatched = !1;
        for (const BB of this._scene.DW) BB._wasDispatched = !1
      }
      constructor(BB) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new JB, this._maintainStateBetweenFrames = !1, this._scene = BB;
        for (let IB = oB.MIN_RENDERINGGROUPS; IB < oB.MAX_RENDERINGGROUPS; IB++) this._autoClearDepthStencil[IB] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(BB) {
        const IB = BB || 0;
        return this._prepareRenderingGroup(IB), this._renderingGroups[IB]
      }
      _clearDepthStencilBuffer() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.PN().clear(null, !1, BB, IB), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(BB, IB, ZB, TB) {
        let JB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          GB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          vB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          kB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          cB = arguments.length > 8 ? arguments[8] : void 0,
          nB = arguments.length > 9 ? arguments[9] : void 0;
        const hB = this._renderingGroupInfo;
        hB.lg = this._scene, hB.camera = this._scene.activeCamera, hB.renderingManager = this;
        const zB = nB ?? this._scene.spriteManagers;
        if (zB && TB)
          for (let oB = 0; oB < zB.length; oB++) {
            const BB = zB[oB];
            this.dispatchSprites(BB)
          }
        for (let FB = oB.MIN_RENDERINGGROUPS; FB < oB.MAX_RENDERINGGROUPS; FB++) {
          this._depthStencilBufferAlreadyCleaned = FB === oB.MIN_RENDERINGGROUPS;
          const nB = this._renderingGroups[FB];
          if (!nB || nB._empty) continue;
          const zB = 1 << FB;
          if (hB.renderingGroupId = FB, this._scene.onBeforeRenderingGroupObservable.notifyObservers(hB, zB), oB.AUTOCLEAR) {
            const BB = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(FB) : this._autoClearDepthStencil[FB];
            BB && BB.autoClear && this._clearDepthStencilBuffer(BB.depth, BB.stencil)
          }
          for (let BB = 0, IB = this._scene._beforeRenderingGroupDrawStage; BB < IB.length; BB++) {
            IB[BB].action(FB)
          }
          nB.render(BB, TB, ZB, IB, JB, GB, vB, kB, cB);
          for (let BB = 0, IB = this._scene._afterRenderingGroupDrawStage; BB < IB.length; BB++) {
            IB[BB].action(FB)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(hB, zB)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let BB = oB.MIN_RENDERINGGROUPS; BB < oB.MAX_RENDERINGGROUPS; BB++) {
            const IB = this._renderingGroups[BB];
            IB && IB.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let BB = oB.MIN_RENDERINGGROUPS; BB < oB.MAX_RENDERINGGROUPS; BB++) {
            const IB = this._renderingGroups[BB];
            IB && IB.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let BB = oB.MIN_RENDERINGGROUPS; BB < oB.MAX_RENDERINGGROUPS; BB++) {
          const IB = this._renderingGroups[BB];
          IB && IB.dispose()
        }
      }
      _prepareRenderingGroup(BB) {
        void 0 === this._renderingGroups[BB] && (this._renderingGroups[BB] = new TB.c(BB, this._scene, this._customOpaqueSortCompareFn[BB], this._customAlphaTestSortCompareFn[BB], this._customTransparentSortCompareFn[BB]), this._renderingGroups[BB].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(BB) {
        this.maintainStateBetweenFrames && BB._wasDispatched || (BB._wasDispatched = !0, this.getRenderingGroup(BB.renderingGroupId).dispatchSprites(BB))
      }
      dispatchParticles(BB) {
        this.maintainStateBetweenFrames && BB._wasDispatched || (BB._wasDispatched = !0, this.getRenderingGroup(BB.renderingGroupId).dispatchParticles(BB))
      }
      dispatch(BB, IB, ZB) {
        void 0 === IB && (IB = BB.getMesh()), this.maintainStateBetweenFrames && BB._wasDispatched || (BB._wasDispatched = !0, this.getRenderingGroup(IB.renderingGroupId).dispatch(BB, IB, ZB))
      }
      setRenderingOrder(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[BB] = IB, this._customAlphaTestSortCompareFn[BB] = ZB, this._customTransparentSortCompareFn[BB] = TB, this._renderingGroups[BB]) {
          const IB = this._renderingGroups[BB];
          IB.opaqueSortCompareFn = this._customOpaqueSortCompareFn[BB], IB.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[BB], IB.transparentSortCompareFn = this._customTransparentSortCompareFn[BB]
        }
      }
      setRenderingAutoClearDepthStencil(BB, IB) {
        let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          TB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[BB] = {
          autoClear: IB,
          depth: ZB,
          stencil: TB
        }
      }
      getAutoClearDepthStencilSetup(BB) {
        return this._autoClearDepthStencil[BB]
      }
    }
    oB.MAX_RENDERINGGROUPS = 4, oB.MIN_RENDERINGGROUPS = 0, oB.AUTOCLEAR = !0
  },
  39967: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB
    });
    class TB {
      constructor(BB) {
        this._supportBlendParametersPerTarget = BB, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(BB) {
        this.setAlphaBlend(BB)
      }
      setAlphaBlend(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[IB] !== BB && (BB ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[IB] = BB, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(BB, IB, ZB, TB) {
        this._blendConstants[0] === BB && this._blendConstants[1] === IB && this._blendConstants[2] === ZB && this._blendConstants[3] === TB || (this._blendConstants[0] = BB, this._blendConstants[1] = IB, this._blendConstants[2] = ZB, this._blendConstants[3] = TB, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(BB, IB, ZB, TB) {
        const JB = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[JB + 0] === BB && this._blendFunctionParameters[JB + 1] === IB && this._blendFunctionParameters[JB + 2] === ZB && this._blendFunctionParameters[JB + 3] === TB || (this._blendFunctionParameters[JB + 0] = BB, this._blendFunctionParameters[JB + 1] = IB, this._blendFunctionParameters[JB + 2] = ZB, this._blendFunctionParameters[JB + 3] = TB, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(BB, IB) {
        const ZB = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[ZB + 0] === BB && this._blendEquationParameters[ZB + 1] === IB || (this._blendEquationParameters[ZB + 0] = BB, this._blendEquationParameters[ZB + 1] = IB, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== IB && (this._numTargets = IB, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== ZB && (this._blendDisabledTargetsMask = ZB, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (BB.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === IB || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (IB > 1 && 0 !== ZB && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & ZB) ? BB.enable(BB.BLEND) : BB.disable(BB.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (BB.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (BB.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const TB = BB;
        if (this._isAlphaBlendDirty) {
          for (let JB = 0; JB < IB; JB++) {
            const IB = JB < this._numTargetEnabled ? JB : 0;
            this._alphaBlend[IB] && 0 === (ZB & 1 << JB) ? TB.enableIndexed(BB.BLEND, JB) : TB.disableIndexed(BB.BLEND, JB)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let BB = 0; BB < IB; BB++) {
            const IB = BB < this._numTargetEnabled ? 4 * BB : 0;
            TB.blendFuncSeparateIndexed(BB, this._blendFunctionParameters[IB + 0], this._blendFunctionParameters[IB + 1], this._blendFunctionParameters[IB + 2], this._blendFunctionParameters[IB + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let BB = 0; BB < IB; BB++) {
            const IB = BB < this._numTargetEnabled ? 2 * BB : 0;
            TB.blendEquationSeparateIndexed(BB, this._blendEquationParameters[IB + 0], this._blendEquationParameters[IB + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(BB, IB) {
        let ZB = 32774;
        switch (BB) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, IB);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, IB);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, IB);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, IB);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, IB);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, IB);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, IB);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, IB);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, IB);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, IB);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, IB);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, IB);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, IB);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, IB);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, IB);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, IB);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, IB), ZB = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, IB), ZB = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, IB);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, IB)
        }
        this.setAlphaEquationParameters(ZB, ZB, IB)
      }
    }
  },
  40239: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB
    });
    class TB {}
    TB._IsPickingAvailable = !1
  },
  40148: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => vZ,
      e: () => oZ
    });
    var TB = ZB(40152),
      JB = ZB(39943),
      oB = ZB(39959),
      GB = ZB(37153),
      vB = ZB(40163);
    class kB {
      constructor() {
        this._count = 0, this._data = {}
      }
      TY(BB) {
        this.clear(), BB.forEach(((BB, IB) => this.add(BB, IB)))
      }
      get(BB) {
        const IB = this._data[BB];
        if (void 0 !== IB) return IB
      }
      getOrAddWithFactory(BB, IB) {
        let ZB = this.get(BB);
        return void 0 !== ZB || (ZB = IB(BB), ZB && this.add(BB, ZB)), ZB
      }
      getOrAdd(BB, IB) {
        const ZB = this.get(BB);
        return void 0 !== ZB ? ZB : (this.add(BB, IB), IB)
      }
      contains(BB) {
        return void 0 !== this._data[BB]
      }
      add(BB, IB) {
        return void 0 === this._data[BB] && (this._data[BB] = IB, ++this._count, !0)
      }
      set(BB, IB) {
        return void 0 !== this._data[BB] && (this._data[BB] = IB, !0)
      }
      getAndRemove(BB) {
        const IB = this.get(BB);
        return void 0 !== IB ? (delete this._data[BB], --this._count, IB) : null
      }
      remove(BB) {
        return !!this.contains(BB) && (delete this._data[BB], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(BB) {
        for (const IB in this._data) {
          BB(IB, this._data[IB])
        }
      }
      first(BB) {
        for (const IB in this._data) {
          const ZB = BB(IB, this._data[IB]);
          if (ZB) return ZB
        }
        return null
      }
    }
    var cB = ZB(40092),
      nB = ZB(37120),
      hB = ZB(40166),
      zB = ZB(40177),
      FB = ZB(40185);
    class NB {
      constructor(BB, IB, ZB, TB, JB, oB) {
        this.source = BB, this.pointerX = IB, this.pointerY = ZB, this.meshUnderPointer = TB, this.sourceEvent = JB, this.additionalData = oB
      }
      static CreateNew(BB, IB, ZB) {
        const TB = BB.JR();
        return new NB(BB, TB.pointerX, TB.pointerY, TB.meshUnderPointer || BB, IB, ZB)
      }
      static CreateNewFromSprite(BB, IB, ZB, TB) {
        return new NB(BB, IB.pointerX, IB.pointerY, IB.meshUnderPointer, ZB, TB)
      }
      static CreateNewFromScene(BB, IB) {
        return new NB(null, BB.pointerX, BB.pointerY, BB.meshUnderPointer, IB)
      }
      static CreateNewFromPrimitive(BB, IB, ZB, TB) {
        return new NB(BB, IB.x, IB.y, null, ZB, TB)
      }
    }
    var gB = ZB(40190),
      qB = ZB(40193),
      yB = ZB(40202),
      UB = ZB(40215),
      WB = ZB(39912),
      dB = ZB(37147),
      CB = ZB(39931),
      QB = ZB(40224);
    class sB {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const BB in sB.Triggers)
          if (Object.prototype.hasOwnProperty.call(sB.Triggers, BB)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const BB in sB.Triggers)
          if (Object.prototype.hasOwnProperty.call(sB.Triggers, BB)) {
            const IB = parseInt(BB);
            if (IB >= 1 && IB <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(BB) {
        for (const IB in sB.Triggers)
          if (Object.prototype.hasOwnProperty.call(sB.Triggers, IB)) {
            if (parseInt(IB) === BB) return !0
          } return !1
      }
    }
    sB.Triggers = {};
    var wB, OB, YB, iB, pB, aB, HB, MB = ZB(40226);
    ! function(BB) {
      BB[BB.Generic = 0] = "Generic", BB[BB.Keyboard = 1] = "Keyboard", BB[BB.Mouse = 2] = "Mouse", BB[BB.Touch = 3] = "Touch", BB[BB.DualShock = 4] = "DualShock", BB[BB.Xbox = 5] = "Xbox", BB[BB.Switch = 6] = "Switch", BB[BB.DualSense = 7] = "DualSense"
    }(wB || (wB = {})),
    function(BB) {
      BB[BB.Horizontal = 0] = "Horizontal", BB[BB.Vertical = 1] = "Vertical", BB[BB.LeftClick = 2] = "LeftClick", BB[BB.MiddleClick = 3] = "MiddleClick", BB[BB.RightClick = 4] = "RightClick", BB[BB.BrowserBack = 5] = "BrowserBack", BB[BB.BrowserForward = 6] = "BrowserForward", BB[BB.MouseWheelX = 7] = "MouseWheelX", BB[BB.MouseWheelY = 8] = "MouseWheelY", BB[BB.MouseWheelZ = 9] = "MouseWheelZ", BB[BB.Move = 12] = "Move"
    }(OB || (OB = {})),
    function(BB) {
      BB[BB.Horizontal = 0] = "Horizontal", BB[BB.Vertical = 1] = "Vertical", BB[BB.LeftClick = 2] = "LeftClick", BB[BB.MiddleClick = 3] = "MiddleClick", BB[BB.RightClick = 4] = "RightClick", BB[BB.BrowserBack = 5] = "BrowserBack", BB[BB.BrowserForward = 6] = "BrowserForward", BB[BB.MouseWheelX = 7] = "MouseWheelX", BB[BB.MouseWheelY = 8] = "MouseWheelY", BB[BB.MouseWheelZ = 9] = "MouseWheelZ", BB[BB.DeltaHorizontal = 10] = "DeltaHorizontal", BB[BB.DeltaVertical = 11] = "DeltaVertical"
    }(YB || (YB = {})),
    function(BB) {
      BB[BB.Cross = 0] = "Cross", BB[BB.Circle = 1] = "Circle", BB[BB.Square = 2] = "Square", BB[BB.Triangle = 3] = "Triangle", BB[BB.L1 = 4] = "L1", BB[BB.R1 = 5] = "R1", BB[BB.L2 = 6] = "L2", BB[BB.R2 = 7] = "R2", BB[BB.Share = 8] = "Share", BB[BB.Options = 9] = "Options", BB[BB.L3 = 10] = "L3", BB[BB.R3 = 11] = "R3", BB[BB.DPadUp = 12] = "DPadUp", BB[BB.DPadDown = 13] = "DPadDown", BB[BB.DPadLeft = 14] = "DPadLeft", BB[BB.DPadRight = 15] = "DPadRight", BB[BB.Home = 16] = "Home", BB[BB.TouchPad = 17] = "TouchPad", BB[BB.LStickXAxis = 18] = "LStickXAxis", BB[BB.LStickYAxis = 19] = "LStickYAxis", BB[BB.RStickXAxis = 20] = "RStickXAxis", BB[BB.RStickYAxis = 21] = "RStickYAxis"
    }(iB || (iB = {})),
    function(BB) {
      BB[BB.Cross = 0] = "Cross", BB[BB.Circle = 1] = "Circle", BB[BB.Square = 2] = "Square", BB[BB.Triangle = 3] = "Triangle", BB[BB.L1 = 4] = "L1", BB[BB.R1 = 5] = "R1", BB[BB.L2 = 6] = "L2", BB[BB.R2 = 7] = "R2", BB[BB.Create = 8] = "Create", BB[BB.Options = 9] = "Options", BB[BB.L3 = 10] = "L3", BB[BB.R3 = 11] = "R3", BB[BB.DPadUp = 12] = "DPadUp", BB[BB.DPadDown = 13] = "DPadDown", BB[BB.DPadLeft = 14] = "DPadLeft", BB[BB.DPadRight = 15] = "DPadRight", BB[BB.Home = 16] = "Home", BB[BB.TouchPad = 17] = "TouchPad", BB[BB.LStickXAxis = 18] = "LStickXAxis", BB[BB.LStickYAxis = 19] = "LStickYAxis", BB[BB.RStickXAxis = 20] = "RStickXAxis", BB[BB.RStickYAxis = 21] = "RStickYAxis"
    }(pB || (pB = {})),
    function(BB) {
      BB[BB.A = 0] = "A", BB[BB.B = 1] = "B", BB[BB.X = 2] = "X", BB[BB.Y = 3] = "Y", BB[BB.LB = 4] = "LB", BB[BB.RB = 5] = "RB", BB[BB.LT = 6] = "LT", BB[BB.RT = 7] = "RT", BB[BB.Back = 8] = "Back", BB[BB.Start = 9] = "Start", BB[BB.LS = 10] = "LS", BB[BB.RS = 11] = "RS", BB[BB.DPadUp = 12] = "DPadUp", BB[BB.DPadDown = 13] = "DPadDown", BB[BB.DPadLeft = 14] = "DPadLeft", BB[BB.DPadRight = 15] = "DPadRight", BB[BB.Home = 16] = "Home", BB[BB.LStickXAxis = 17] = "LStickXAxis", BB[BB.LStickYAxis = 18] = "LStickYAxis", BB[BB.RStickXAxis = 19] = "RStickXAxis", BB[BB.RStickYAxis = 20] = "RStickYAxis"
    }(aB || (aB = {})),
    function(BB) {
      BB[BB.B = 0] = "B", BB[BB.A = 1] = "A", BB[BB.Y = 2] = "Y", BB[BB.X = 3] = "X", BB[BB.L = 4] = "L", BB[BB.R = 5] = "R", BB[BB.ZL = 6] = "ZL", BB[BB.ZR = 7] = "ZR", BB[BB.Minus = 8] = "Minus", BB[BB.Plus = 9] = "Plus", BB[BB.LS = 10] = "LS", BB[BB.RS = 11] = "RS", BB[BB.DPadUp = 12] = "DPadUp", BB[BB.DPadDown = 13] = "DPadDown", BB[BB.DPadLeft = 14] = "DPadLeft", BB[BB.DPadRight = 15] = "DPadRight", BB[BB.Home = 16] = "Home", BB[BB.Capture = 17] = "Capture", BB[BB.LStickXAxis = 18] = "LStickXAxis", BB[BB.LStickYAxis = 19] = "LStickYAxis", BB[BB.RStickXAxis = 20] = "RStickXAxis", BB[BB.RStickYAxis = 21] = "RStickYAxis"
    }(HB || (HB = {}));
    var jB = ZB(40232);
    class PB {
      static CreateDeviceEvent(BB, IB, ZB, TB, JB, oB, GB) {
        switch (BB) {
          case wB.Keyboard:
            return this._CreateKeyboardEvent(ZB, TB, JB, oB);
          case wB.Mouse:
            if (ZB === OB.MouseWheelX || ZB === OB.MouseWheelY || ZB === OB.MouseWheelZ) return this._CreateWheelEvent(BB, IB, ZB, TB, JB, oB);
          case wB.Touch:
            return this._CreatePointerEvent(BB, IB, ZB, TB, JB, oB, GB);
          default:
            throw `Unable to generate event for device ${wB[BB]}`
        }
      }
      static _CreatePointerEvent(BB, IB, ZB, TB, JB, oB, GB) {
        const vB = this._CreateMouseEvent(BB, IB, ZB, TB, JB, oB);
        BB === wB.Mouse ? (vB.deviceType = wB.Mouse, vB.pointerId = 1, vB.pointerType = "mouse") : (vB.deviceType = wB.Touch, vB.pointerId = GB ?? IB, vB.pointerType = "touch");
        let kB = 0;
        return kB += JB.pollInput(BB, IB, OB.LeftClick), kB += 2 * JB.pollInput(BB, IB, OB.RightClick), kB += 4 * JB.pollInput(BB, IB, OB.MiddleClick), vB.buttons = kB, ZB === OB.Move ? vB.type = "pointermove" : ZB >= OB.LeftClick && ZB <= OB.RightClick && (vB.type = 1 === TB ? "pointerdown" : "pointerup", vB.button = ZB - 2), vB
      }
      static _CreateWheelEvent(BB, IB, ZB, TB, JB, oB) {
        const GB = this._CreateMouseEvent(BB, IB, ZB, TB, JB, oB);
        switch (GB.pointerId = 1, GB.type = "wheel", GB.deltaMode = jB.d.DOM_DELTA_PIXEL, GB.deltaX = 0, GB.deltaY = 0, GB.deltaZ = 0, ZB) {
          case OB.MouseWheelX:
            GB.deltaX = TB;
            break;
          case OB.MouseWheelY:
            GB.deltaY = TB;
            break;
          case OB.MouseWheelZ:
            GB.deltaZ = TB
        }
        return GB
      }
      static _CreateMouseEvent(BB, IB, ZB, TB, JB, oB) {
        const GB = this._CreateEvent(oB),
          vB = JB.pollInput(BB, IB, OB.Horizontal),
          kB = JB.pollInput(BB, IB, OB.Vertical);
        return oB ? (GB.movementX = 0, GB.movementY = 0, GB.offsetX = GB.movementX - oB.getBoundingClientRect().x, GB.offsetY = GB.movementY - oB.getBoundingClientRect().y) : (GB.movementX = JB.pollInput(BB, IB, 10), GB.movementY = JB.pollInput(BB, IB, 11), GB.offsetX = 0, GB.offsetY = 0), this._CheckNonCharacterKeys(GB, JB), GB.clientX = vB, GB.clientY = kB, GB.x = vB, GB.y = kB, GB.deviceType = BB, GB.deviceSlot = IB, GB.inputIndex = ZB, GB
      }
      static _CreateKeyboardEvent(BB, IB, ZB, TB) {
        const JB = this._CreateEvent(TB);
        return this._CheckNonCharacterKeys(JB, ZB), JB.deviceType = wB.Keyboard, JB.deviceSlot = 0, JB.inputIndex = BB, JB.type = 1 === IB ? "keydown" : "keyup", JB.key = String.fromCharCode(BB), JB.keyCode = BB, JB
      }
      static _CheckNonCharacterKeys(BB, IB) {
        const ZB = IB.isDeviceAvailable(wB.Keyboard),
          TB = ZB && 1 === IB.pollInput(wB.Keyboard, 0, 18),
          JB = ZB && 1 === IB.pollInput(wB.Keyboard, 0, 17),
          oB = ZB && (1 === IB.pollInput(wB.Keyboard, 0, 91) || 1 === IB.pollInput(wB.Keyboard, 0, 92) || 1 === IB.pollInput(wB.Keyboard, 0, 93)),
          GB = ZB && 1 === IB.pollInput(wB.Keyboard, 0, 16);
        BB.altKey = TB, BB.ctrlKey = JB, BB.metaKey = oB, BB.shiftKey = GB
      }
      static _CreateEvent(BB) {
        const IB = {
          preventDefault: () => {}
        };
        return IB.target = BB, IB
      }
    }
    class RB {
      constructor(BB, IB, ZB) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(BB, IB, ((BB, IB, TB, JB) => {
          const oB = PB.CreateDeviceEvent(BB, IB, TB, JB, this);
          ZB(BB, IB, oB)
        })) : this._createDummyNativeInput()
      }
      pollInput(BB, IB, ZB) {
        return this._nativeInput.pollInput(BB, IB, ZB)
      }
      isDeviceAvailable(BB) {
        return BB === wB.Mouse || BB === wB.Touch
      }
      dispose() {
        this._nativeInput.dispose()
      }
      _createDummyNativeInput() {
        return {
          pollInput: () => 0,
          isDeviceAvailable: () => !1,
          dispose: () => {}
        }
      }
    }
    const rB = Object.keys(OB).length / 2;
    class mB {
      constructor(BB, IB, ZB, JB) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = TB.j.IsSafari(), this._usingMacOs = (0, WB.h)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = BB => {}, this._keyboardUpEvent = BB => {}, this._keyboardBlurEvent = BB => {}, this._pointerMoveEvent = BB => {}, this._pointerDownEvent = BB => {}, this._pointerUpEvent = BB => {}, this._pointerCancelEvent = BB => {}, this._pointerCancelTouch = BB => {}, this._pointerLeaveEvent = BB => {}, this._pointerWheelEvent = BB => {}, this._pointerBlurEvent = BB => {}, this._pointerMacOsChromeOutEvent = BB => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, WB.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, WB.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = BB => {}, this._gamepadDisconnectedEvent = BB => {}, this._eventPrefix = TB.j.GetPointerPrefix(BB), this._engine = BB, this._onDeviceConnected = IB, this._onDeviceDisconnected = ZB, this._onInputChanged = JB, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(BB, IB, ZB) {
        const JB = this._inputs[BB][IB];
        if (!JB) throw `Unable to find device ${wB[BB]}`;
        BB >= wB.DualShock && BB <= wB.DualSense && this._updateDevice(BB, IB, ZB);
        const oB = JB[ZB];
        if (void 0 === oB) throw `Unable to find input ${ZB} for device ${wB[BB]} in slot ${IB}`;
        return ZB === OB.Move && TB.j.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), oB
      }
      isDeviceAvailable(BB) {
        return void 0 !== this._inputs[BB]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const BB = this?._engine.getInputElement();
        if (BB && (!this._eventsAttached || this._elementToAttachTo !== BB)) {
          if (this._disableEvents(), this._inputs)
            for (const BB of this._inputs)
              if (BB)
                for (const IB in BB) {
                  const ZB = BB[+IB];
                  if (ZB)
                    for (let BB = 0; BB < ZB.length; BB++) ZB[BB] = 0
                }
          this._elementToAttachTo = BB, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const BB = navigator.getGamepads();
          for (const IB of BB) IB && this._addGamePad(IB)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(wB.Mouse, 0, 0, 0)
      }
      _addGamePad(BB) {
        const IB = this._getGamepadDeviceType(BB.id),
          ZB = BB.index;
        this._gamepads = this._gamepads || new Array(BB.index + 1), this._registerDevice(IB, ZB, BB.buttons.length + BB.axes.length), this._gamepads[ZB] = IB
      }
      _addPointerDevice(BB, IB, ZB, TB) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(BB, IB, rB);
        const JB = this._inputs[BB][IB];
        JB[0] = ZB, JB[1] = TB
      }
      _registerDevice(BB, IB, ZB) {
        if (void 0 === IB) throw `Unable to register device ${wB[BB]} to undefined slot.`;
        if (this._inputs[BB] || (this._inputs[BB] = {}), !this._inputs[BB][IB]) {
          const TB = new Array(ZB);
          TB.fill(0), this._inputs[BB][IB] = TB, this._onDeviceConnected(BB, IB)
        }
      }
      _unregisterDevice(BB, IB) {
        this._inputs[BB][IB] && (delete this._inputs[BB][IB], this._onDeviceDisconnected(BB, IB))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = BB => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(wB.Keyboard, 0, 255));
          const IB = this._inputs[wB.Keyboard][0];
          if (IB) {
            IB[BB.keyCode] = 1;
            const ZB = BB;
            ZB.inputIndex = BB.keyCode, this._usingMacOs && BB.metaKey && "Meta" !== BB.key && (this._metaKeys.includes(BB.keyCode) || this._metaKeys.push(BB.keyCode)), this._onInputChanged(wB.Keyboard, 0, ZB)
          }
        }, this._keyboardUpEvent = BB => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(wB.Keyboard, 0, 255));
          const IB = this._inputs[wB.Keyboard][0];
          if (IB) {
            IB[BB.keyCode] = 0;
            const ZB = BB;
            if (ZB.inputIndex = BB.keyCode, this._usingMacOs && "Meta" === BB.key && this._metaKeys.length > 0) {
              for (const BB of this._metaKeys) {
                const ZB = PB.CreateDeviceEvent(wB.Keyboard, 0, BB, 0, this, this._elementToAttachTo);
                IB[BB] = 0, this._onInputChanged(wB.Keyboard, 0, ZB)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(wB.Keyboard, 0, ZB)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const BB = this._inputs[wB.Keyboard][0];
            for (let IB = 0; IB < BB.length; IB++)
              if (0 !== BB[IB]) {
                BB[IB] = 0;
                const ZB = PB.CreateDeviceEvent(wB.Keyboard, 0, IB, 0, this, this._elementToAttachTo);
                this._onInputChanged(wB.Keyboard, 0, ZB)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, WB.h)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let TB = 0; TB < this._maxTouchPoints; TB++) this._activeTouchIds[TB] = -1;
        this._pointerMoveEvent = BB => {
          const IB = this._getPointerType(BB);
          let ZB = IB === wB.Mouse ? 0 : this._activeTouchIds.indexOf(BB.pointerId);
          if (IB === wB.Touch && -1 === ZB) {
            if (0 === BB.buttons) return;
            const JB = this._activeTouchIds.indexOf(-1);
            if (!(JB >= 0)) return void TB.j.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            ZB = JB, this._activeTouchIds[JB] = BB.pointerId, this._onDeviceConnected(IB, ZB)
          }
          this._inputs[IB] || (this._inputs[IB] = {}), this._inputs[IB][ZB] || this._addPointerDevice(IB, ZB, BB.clientX, BB.clientY);
          const JB = this._inputs[IB][ZB];
          if (JB) {
            const TB = BB;
            TB.inputIndex = OB.Move, JB[OB.Horizontal] = BB.clientX, JB[OB.Vertical] = BB.clientY, IB === wB.Touch && 0 === JB[OB.LeftClick] && (JB[OB.LeftClick] = 1), void 0 === BB.pointerId && (BB.pointerId = this._mouseId), this._onInputChanged(IB, ZB, TB), this._usingSafari || -1 === BB.button || (TB.inputIndex = BB.button + 2, JB[BB.button + 2] = JB[BB.button + 2] ? 0 : 1, this._onInputChanged(IB, ZB, TB))
          }
        }, this._pointerDownEvent = BB => {
          const IB = this._getPointerType(BB);
          let ZB = IB === wB.Mouse ? 0 : BB.pointerId;
          if (IB === wB.Touch) {
            let IB = this._activeTouchIds.indexOf(BB.pointerId);
            if (-1 === IB && (IB = this._activeTouchIds.indexOf(-1)), !(IB >= 0)) return void TB.j.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            ZB = IB, this._activeTouchIds[IB] = BB.pointerId
          }
          this._inputs[IB] || (this._inputs[IB] = {}), this._inputs[IB][ZB] ? IB === wB.Touch && this._onDeviceConnected(IB, ZB) : this._addPointerDevice(IB, ZB, BB.clientX, BB.clientY);
          const JB = this._inputs[IB][ZB];
          if (JB) {
            const TB = JB[OB.Horizontal],
              GB = JB[OB.Vertical];
            if (IB === wB.Mouse) {
              if (void 0 === BB.pointerId && (BB.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (oB) {}
            } else if (BB.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(BB.pointerId)
            } catch (oB) {}
            JB[OB.Horizontal] = BB.clientX, JB[OB.Vertical] = BB.clientY, JB[BB.button + 2] = 1;
            const vB = BB;
            vB.inputIndex = BB.button + 2, this._onInputChanged(IB, ZB, vB), TB === BB.clientX && GB === BB.clientY || (vB.inputIndex = OB.Move, this._onInputChanged(IB, ZB, vB))
          }
        }, this._pointerUpEvent = BB => {
          const IB = this._getPointerType(BB),
            ZB = IB === wB.Mouse ? 0 : this._activeTouchIds.indexOf(BB.pointerId);
          if (IB === wB.Touch) {
            if (-1 === ZB) return;
            this._activeTouchIds[ZB] = -1
          }
          const TB = this._inputs[IB]?.[ZB];
          let JB = BB.button,
            oB = TB && 0 !== TB[JB + 2];
          if (!oB && this._isUsingFirefox && this._usingMacOs && TB && (JB = 2 === JB ? 0 : 2, oB = 0 !== TB[JB + 2]), oB) {
            const oB = TB[OB.Horizontal],
              GB = TB[OB.Vertical];
            TB[OB.Horizontal] = BB.clientX, TB[OB.Vertical] = BB.clientY, TB[JB + 2] = 0;
            const vB = BB;
            void 0 === BB.pointerId && (BB.pointerId = this._mouseId), oB === BB.clientX && GB === BB.clientY || (vB.inputIndex = OB.Move, this._onInputChanged(IB, ZB, vB)), vB.inputIndex = JB + 2, IB === wB.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : BB.pointerId && this._elementToAttachTo.hasPointerCapture?.(BB.pointerId) && this._elementToAttachTo.releasePointerCapture(BB.pointerId), this._onInputChanged(IB, ZB, vB), IB === wB.Touch && this._onDeviceDisconnected(IB, ZB)
          }
        }, this._pointerCancelTouch = BB => {
          const IB = this._activeTouchIds.indexOf(BB);
          if (-1 === IB) return;
          this._elementToAttachTo.hasPointerCapture?.(BB) && this._elementToAttachTo.releasePointerCapture(BB), this._inputs[wB.Touch][IB][OB.LeftClick] = 0;
          const ZB = PB.CreateDeviceEvent(wB.Touch, IB, OB.LeftClick, 0, this, this._elementToAttachTo, BB);
          this._onInputChanged(wB.Touch, IB, ZB), this._activeTouchIds[IB] = -1, this._onDeviceDisconnected(wB.Touch, IB)
        }, this._pointerCancelEvent = BB => {
          if ("mouse" === BB.pointerType) {
            const BB = this._inputs[wB.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let IB = OB.LeftClick; IB <= OB.BrowserForward; IB++)
              if (1 === BB[IB]) {
                BB[IB] = 0;
                const ZB = PB.CreateDeviceEvent(wB.Mouse, 0, IB, 0, this, this._elementToAttachTo);
                this._onInputChanged(wB.Mouse, 0, ZB)
              }
          } else this._pointerCancelTouch(BB.pointerId)
        }, this._pointerLeaveEvent = BB => {
          "pen" === BB.pointerType && this._pointerCancelTouch(BB.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let BB = !1;
        const IB = function() {};
        try {
          const ZB = Object.defineProperty({}, "passive", {
            get: function() {
              BB = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", IB, ZB), this._elementToAttachTo.removeEventListener("test", IB, ZB)
        } catch (ZB) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(wB.Mouse)) {
            const BB = this._inputs[wB.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let IB = OB.LeftClick; IB <= OB.BrowserForward; IB++)
              if (1 === BB[IB]) {
                BB[IB] = 0;
                const ZB = PB.CreateDeviceEvent(wB.Mouse, 0, IB, 0, this, this._elementToAttachTo);
                this._onInputChanged(wB.Mouse, 0, ZB)
              }
          }
          if (this.isDeviceAvailable(wB.Touch)) {
            const BB = this._inputs[wB.Touch];
            for (let IB = 0; IB < this._activeTouchIds.length; IB++) {
              const ZB = this._activeTouchIds[IB];
              if (this._elementToAttachTo.hasPointerCapture?.(ZB) && this._elementToAttachTo.releasePointerCapture(ZB), -1 !== ZB && 1 === BB[IB]?.[OB.LeftClick]) {
                BB[IB][OB.LeftClick] = 0;
                const TB = PB.CreateDeviceEvent(wB.Touch, IB, OB.LeftClick, 0, this, this._elementToAttachTo, ZB);
                this._onInputChanged(wB.Touch, IB, TB), this._activeTouchIds[IB] = -1, this._onDeviceDisconnected(wB.Touch, IB)
              }
            }
          }
        }, this._pointerWheelEvent = BB => {
          const IB = wB.Mouse;
          this._inputs[IB] || (this._inputs[IB] = []), this._inputs[IB][0] || (this._pointerActive = !0, this._registerDevice(IB, 0, rB));
          const ZB = this._inputs[IB][0];
          if (ZB) {
            ZB[OB.MouseWheelX] = BB.deltaX || 0, ZB[OB.MouseWheelY] = BB.deltaY || BB.wheelDelta || 0, ZB[OB.MouseWheelZ] = BB.deltaZ || 0;
            const TB = BB;
            void 0 === BB.pointerId && (BB.pointerId = this._mouseId), 0 !== ZB[OB.MouseWheelX] && (TB.inputIndex = OB.MouseWheelX, this._onInputChanged(IB, 0, TB)), 0 !== ZB[OB.MouseWheelY] && (TB.inputIndex = OB.MouseWheelY, this._onInputChanged(IB, 0, TB)), 0 !== ZB[OB.MouseWheelZ] && (TB.inputIndex = OB.MouseWheelZ, this._onInputChanged(IB, 0, TB))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = BB => {
          BB.buttons > 1 && this._pointerCancelEvent(BB)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!BB && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(wB.Mouse)) {
            const BB = this._inputs[wB.Mouse][0];
            BB[OB.MouseWheelX] = 0, BB[OB.MouseWheelY] = 0, BB[OB.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = BB => {
          this._addGamePad(BB.gamepad)
        }, this._gamepadDisconnectedEvent = BB => {
          if (this._gamepads) {
            const IB = this._getGamepadDeviceType(BB.gamepad.id),
              ZB = BB.gamepad.index;
            this._unregisterDevice(IB, ZB), delete this._gamepads[ZB]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(BB, IB, ZB) {
        const TB = navigator.getGamepads()[IB];
        if (TB && BB === this._gamepads[IB]) {
          const JB = this._inputs[BB][IB];
          ZB >= TB.buttons.length ? JB[ZB] = TB.axes[ZB - TB.buttons.length].valueOf() : JB[ZB] = TB.buttons[ZB].value
        }
      }
      _getGamepadDeviceType(BB) {
        return -1 !== BB.indexOf("054c") ? -1 !== BB.indexOf("0ce6") ? wB.DualSense : wB.DualShock : -1 !== BB.indexOf("Xbox One") || -1 !== BB.search("Xbox 360") || -1 !== BB.search("xinput") || -1 !== BB.indexOf("045e") && -1 === BB.indexOf("Surface Dock") ? wB.Xbox : -1 !== BB.indexOf("057e") ? wB.Switch : wB.Generic
      }
      _getPointerType(BB) {
        let IB = wB.Mouse;
        return ("touch" === BB.pointerType || "pen" === BB.pointerType || BB.touches) && (IB = wB.Touch), IB
      }
    }
    class XB {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = IB, this.deviceSlot = ZB, this.onInputChangedObservable = new GB.b, this._deviceInputSystem = BB
      }
      getInput(BB) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, BB)
      }
    }
    class LB {
      constructor(BB) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = BB => {
          for (let IB = 0; IB < this._devices.length; IB++) {
            const ZB = this._devices[IB];
            for (const TB in ZB) {
              const ZB = +TB;
              BB._addDevice(new XB(this._deviceInputSystem, IB, ZB))
            }
          }
          this._registeredManagers.push(BB)
        }, this.unregisterManager = BB => {
          const IB = this._registeredManagers.indexOf(BB);
          IB > -1 && this._registeredManagers.splice(IB, 1)
        };
        const IB = Object.keys(wB).length / 2;
        this._devices = new Array(IB);
        const ZB = (BB, IB) => {
            this._devices[BB] || (this._devices[BB] = new Array), this._devices[BB][IB] || (this._devices[BB][IB] = IB);
            for (const ZB of this._registeredManagers) {
              const TB = new XB(this._deviceInputSystem, BB, IB);
              ZB._addDevice(TB)
            }
          },
          TB = (BB, IB) => {
            this._devices[BB]?.[IB] && delete this._devices[BB][IB];
            for (const ZB of this._registeredManagers) ZB._removeDevice(BB, IB)
          },
          JB = (BB, IB, ZB) => {
            if (ZB)
              for (const TB of this._registeredManagers) TB._onInputChanged(BB, IB, ZB)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new RB(ZB, TB, JB) : this._deviceInputSystem = new mB(BB, ZB, TB, JB)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class eB {
      getDeviceSource(BB, IB) {
        if (void 0 === IB) {
          if (void 0 === this._firstDevice[BB]) return null;
          IB = this._firstDevice[BB]
        }
        return this._devices[BB] && void 0 !== this._devices[BB][IB] ? this._devices[BB][IB] : null
      }
      getDeviceSources(BB) {
        return this._devices[BB] ? this._devices[BB].filter((BB => !!BB)) : []
      }
      constructor(BB) {
        const IB = Object.keys(wB).length / 2;
        this._devices = new Array(IB), this._firstDevice = new Array(IB), this._engine = BB, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new LB(BB)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new GB.b((BB => {
          for (const IB of this._devices)
            if (IB)
              for (const ZB of IB) ZB && this.onDeviceConnectedObservable.notifyObserver(BB, ZB)
        })), this.onDeviceDisconnectedObservable = new GB.b, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = BB.oR.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.oR.remove(this._onDisposeObserver)
      }
      _addDevice(BB) {
        this._devices[BB.deviceType] || (this._devices[BB.deviceType] = []), this._devices[BB.deviceType][BB.deviceSlot] || (this._devices[BB.deviceType][BB.deviceSlot] = BB, this._updateFirstDevices(BB.deviceType)), this.onDeviceConnectedObservable.notifyObservers(BB)
      }
      _removeDevice(BB, IB) {
        const ZB = this._devices[BB]?.[IB];
        this.onDeviceDisconnectedObservable.notifyObservers(ZB), this._devices[BB]?.[IB] && delete this._devices[BB][IB], this._updateFirstDevices(BB)
      }
      _onInputChanged(BB, IB, ZB) {
        this._devices[BB]?.[IB]?.onInputChangedObservable.notifyObservers(ZB)
      }
      _updateFirstDevices(BB) {
        switch (BB) {
          case wB.Keyboard:
          case wB.Mouse:
            this._firstDevice[BB] = 0;
            break;
          case wB.Touch:
          case wB.DualSense:
          case wB.DualShock:
          case wB.Xbox:
          case wB.Switch:
          case wB.Generic: {
            delete this._firstDevice[BB];
            const IB = this._devices[BB];
            if (IB)
              for (let ZB = 0; ZB < IB.length; ZB++)
                if (IB[ZB]) {
                  this._firstDevice[BB] = ZB;
                  break
                } break
          }
        }
      }
    }
    var uB = ZB(40239);
    class fB {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get Dn() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(BB) {
        this._singleClick = BB
      }
      set Dn(BB) {
        this._doubleClick = BB
      }
      set hasSwiped(BB) {
        this._hasSwiped = BB
      }
      set ignore(BB) {
        this._ignore = BB
      }
    }
    class lB {
      constructor(BB) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new nB.p(0, 0), this._previousStartingPointerPosition = new nB.p(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = BB || dB.e.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(BB) {
        return this._meshUnderPointerId[BB] || null
      }
      get unTranslatedPointer() {
        return new nB.p(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(BB) {
        this._pointerX = BB
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(BB) {
        this._pointerY = BB
      }
      _updatePointerPosition(BB) {
        const IB = this._scene.PN().getInputElementClientRect();
        IB && (this._pointerX = BB.clientX - IB.left, this._pointerY = BB.clientY - IB.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(BB, IB) {
        const ZB = this._scene,
          TB = ZB.PN(),
          JB = TB.getInputElement();
        JB && (JB.tabIndex = TB.canvasTabIndex, ZB.doNotHandleCursors || (JB.style.cursor = ZB.defaultCursor)), this._setCursorAndPointerOverMesh(BB, IB, ZB);
        for (const vB of ZB._pointerMoveStage) {
          BB = BB || this._pickMove(IB);
          const ZB = !!BB?.pickedMesh;
          BB = vB.action(this._unTranslatedPointerX, this._unTranslatedPointerY, BB, ZB, JB)
        }
        const oB = IB.inputIndex >= OB.MouseWheelX && IB.inputIndex <= OB.MouseWheelZ ? QB.d.POINTERWHEEL : QB.d.POINTERMOVE;
        let GB;
        ZB.onPointerMove && (BB = BB || this._pickMove(IB), ZB.onPointerMove(IB, BB, oB)), BB ? (GB = new QB.i(oB, IB, BB), this._setRayOnPointerInfo(BB, IB)) : (GB = new QB.i(oB, IB, null, this), this._movePointerInfo = GB), ZB.onPointerObservable.hasObservers() && ZB.onPointerObservable.notifyObservers(GB, oB)
      }
      _setRayOnPointerInfo(BB, IB) {
        const ZB = this._scene;
        BB && uB.d._IsPickingAvailable && (BB.ray || (BB.ray = ZB.createPickingRay(IB.offsetX, IB.offsetY, nB.b.Identity(), ZB.activeCamera)))
      }
      _addCameraPointerObserver(BB, IB) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(BB, IB)
      }
      _removeCameraPointerObserver(BB) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(BB)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(BB, IB, ZB) {
        const TB = this._scene,
          JB = new QB.g(ZB, IB, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return BB && (JB.originalPickingInfo = BB, JB.ray = BB.ray, "xr-near" === IB.pointerType && BB.originMesh && (JB.nearInteractionPickingInfo = BB)), TB.onPrePointerObservable.notifyObservers(JB, ZB), !!JB.skipOnPointerObservable
      }
      _pickMove(BB) {
        const IB = this._scene,
          ZB = IB.TF(this._unTranslatedPointerX, this._unTranslatedPointerY, IB.pointerMovePredicate, IB.pointerMoveFastCheck, IB.cameraToUseForPointers, IB.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(ZB, BB, IB), ZB
      }
      _updateMeshUnderPointer() {
        const BB = this._scene;
        if (!BB.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || BB.skipPointerMovePicking || !BB.cameraToUseForPointers && !BB.activeCamera) return;
        this._ensurePointerMovePredicate();
        const IB = this._pointerX,
          ZB = this._pointerY,
          TB = this._unTranslatedPointerX,
          JB = this._unTranslatedPointerY;
        for (const oB of this._latestPointerMoveEvents.values()) this._pointerX = oB.pointerX, this._pointerY = oB.pointerY, this._unTranslatedPointerX = oB.unTranslatedPointerX, this._unTranslatedPointerY = oB.unTranslatedPointerY, this._pickMove(oB.event);
        this._pointerX = IB, this._pointerY = ZB, this._unTranslatedPointerX = TB, this._unTranslatedPointerY = JB
      }
      _ensurePointerMovePredicate() {
        const BB = this._scene;
        BB.pointerMovePredicate || (BB.pointerMovePredicate = IB => (IB._isPointerMovePickable ?? IB.tg) && IB.isVisible && IB.isReady() && IB.isEnabled() && (IB.enablePointerMoveEvents || BB.constantlyUpdateMeshUnderPointer || null !== IB._getActionManagerForTrigger()) && (!BB.cameraToUseForPointers || 0 !== (BB.cameraToUseForPointers.layerMask & IB.layerMask)))
      }
      _setCursorAndPointerOverMesh(BB, IB, ZB) {
        const TB = ZB.PN().getInputElement();
        if (BB?.pickedMesh) {
          if (this.setPointerOverMesh(BB.pickedMesh, IB.pointerId, BB, IB), !ZB.doNotHandleCursors && TB && this._pointerOverMesh) {
            const BB = this._pointerOverMesh._getActionManagerForTrigger();
            BB && BB.hasPointerTriggers && (TB.style.cursor = BB.hoverCursor || ZB.hoverCursor)
          }
        } else this.setPointerOverMesh(null, IB.pointerId, BB, IB)
      }
      simulatePointerMove(BB, IB) {
        const ZB = new PointerEvent("pointermove", IB);
        ZB.inputIndex = OB.Move, this._checkPrePointerObservable(BB, ZB, QB.d.POINTERMOVE) || this._processPointerMove(BB, ZB)
      }
      simulatePointerDown(BB, IB) {
        const ZB = new PointerEvent("pointerdown", IB);
        ZB.inputIndex = ZB.button + 2, this._checkPrePointerObservable(BB, ZB, QB.d.POINTERDOWN) || this._processPointerDown(BB, ZB)
      }
      _processPointerDown(BB, IB) {
        const ZB = this._scene;
        if (BB?.pickedMesh) {
          this._pickedDownMesh = BB.pickedMesh;
          const TB = BB.pickedMesh._getActionManagerForTrigger();
          if (TB) {
            if (TB.hasPickTriggers) switch (TB.processTrigger(5, new NB(BB.pickedMesh, ZB.pointerX, ZB.pointerY, BB.pickedMesh, IB, BB)), IB.button) {
              case 0:
                TB.processTrigger(2, new NB(BB.pickedMesh, ZB.pointerX, ZB.pointerY, BB.pickedMesh, IB, BB));
                break;
              case 1:
                TB.processTrigger(4, new NB(BB.pickedMesh, ZB.pointerX, ZB.pointerY, BB.pickedMesh, IB, BB));
                break;
              case 2:
                TB.processTrigger(3, new NB(BB.pickedMesh, ZB.pointerX, ZB.pointerY, BB.pickedMesh, IB, BB))
            }
            TB.hasSpecificTrigger(8) && window.setTimeout((() => {
              const BB = ZB.TF(this._unTranslatedPointerX, this._unTranslatedPointerY, (BB => BB.tg && BB.isVisible && BB.isReady() && BB.actionManager && BB.actionManager.hasSpecificTrigger(8) && BB === this._pickedDownMesh), !1, ZB.cameraToUseForPointers);
              BB?.pickedMesh && TB && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > lB.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, TB.processTrigger(8, NB.CreateNew(BB.pickedMesh, IB)))
            }), lB.LongPressDelay)
          }
        } else
          for (const oB of ZB._pointerDownStage) BB = oB.action(this._unTranslatedPointerX, this._unTranslatedPointerY, BB, IB, !1);
        let TB;
        const JB = QB.d.POINTERDOWN;
        BB ? (ZB.onPointerDown && ZB.onPointerDown(IB, BB, JB), TB = new QB.i(JB, IB, BB), this._setRayOnPointerInfo(BB, IB)) : TB = new QB.i(JB, IB, null, this), ZB.onPointerObservable.hasObservers() && ZB.onPointerObservable.notifyObservers(TB, JB)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(BB, IB, ZB) {
        const TB = new PointerEvent("pointerup", IB);
        TB.inputIndex = OB.Move;
        const JB = new fB;
        ZB ? JB.Dn = !0 : JB.singleClick = !0, this._checkPrePointerObservable(BB, TB, QB.d.POINTERUP) || this._processPointerUp(BB, TB, JB)
      }
      _processPointerUp(BB, IB, ZB) {
        const TB = this._scene;
        if (BB?.pickedMesh) {
          if (this._pickedUpMesh = BB.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (TB.onPointerPick && TB.onPointerPick(IB, BB), ZB.singleClick && !ZB.ignore && TB.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const ZB = QB.d.POINTERPICK,
              JB = new QB.i(ZB, IB, BB);
            this._setRayOnPointerInfo(BB, IB), TB.onPointerObservable.notifyObservers(JB, ZB)
          }
          const JB = BB.pickedMesh._getActionManagerForTrigger();
          if (JB && !ZB.ignore) {
            JB.processTrigger(7, NB.CreateNew(BB.pickedMesh, IB, BB)), !ZB.hasSwiped && ZB.singleClick && JB.processTrigger(1, NB.CreateNew(BB.pickedMesh, IB, BB));
            const TB = BB.pickedMesh._getActionManagerForTrigger(6);
            ZB.Dn && TB && TB.processTrigger(6, NB.CreateNew(BB.pickedMesh, IB, BB))
          }
        } else if (!ZB.ignore)
          for (const JB of TB._pointerUpStage) BB = JB.action(this._unTranslatedPointerX, this._unTranslatedPointerY, BB, IB, ZB.Dn);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const BB = this._pickedDownMesh._getActionManagerForTrigger(16);
          BB && BB.processTrigger(16, NB.CreateNew(this._pickedDownMesh, IB))
        }
        if (!ZB.ignore) {
          const JB = new QB.i(QB.d.POINTERUP, IB, BB);
          if (this._setRayOnPointerInfo(BB, IB), TB.onPointerObservable.notifyObservers(JB, QB.d.POINTERUP), TB.onPointerUp && TB.onPointerUp(IB, BB, QB.d.POINTERUP), !ZB.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let JB = 0;
            if (ZB.singleClick ? JB = QB.d.POINTERTAP : ZB.Dn && (JB = QB.d.POINTERDOUBLETAP), JB) {
              const ZB = new QB.i(JB, IB, BB);
              TB.onPointerObservable.hasObservers() && TB.onPointerObservable.hasSpecificMask(JB) && TB.onPointerObservable.notifyObservers(ZB, JB)
            }
          }
        }
      }
      isPointerCaptured() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[BB]
      }
      attachControl() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const JB = this._scene,
          oB = JB.PN();
        TB || (TB = oB.getInputElement()), this._alreadyAttached && this.detachControl(), TB && (this._alreadyAttachedTo = TB), this._deviceSourceManager = new eB(oB), this._initActionManager = BB => {
          if (!this._meshPickProceed) {
            const IB = JB.skipPointerUpPicking || 0 === JB._registeredActions && !this._checkForPicking() && !JB.onPointerUp ? null : JB.TF(this._unTranslatedPointerX, this._unTranslatedPointerY, JB.pointerUpPredicate, JB.pointerUpFastCheck, JB.cameraToUseForPointers, JB.pointerUpTrianglePredicate);
            this._currentPickResult = IB, IB && (BB = IB.hit && IB.pickedMesh ? IB.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return BB
        }, this._delayedSimpleClick = (BB, IB, ZB) => {
          if ((Date.now() - this._previousStartingPointerTime > lB.DoubleClickDelay && !this._doubleClickOccured || BB !== this._previousButtonPressed) && (this._doubleClickOccured = !1, IB.singleClick = !0, IB.ignore = !1, this._delayedClicks[BB])) {
            const IB = this._delayedClicks[BB].evt,
              ZB = QB.d.POINTERTAP,
              TB = new QB.i(ZB, IB, this._currentPickResult);
            JB.onPointerObservable.hasObservers() && JB.onPointerObservable.hasSpecificMask(ZB) && JB.onPointerObservable.notifyObservers(TB, ZB), this._delayedClicks[BB] = null
          }
        }, this._initClickEvent = (BB, IB, ZB, TB) => {
          const JB = new fB;
          this._currentPickResult = null;
          let oB = null,
            GB = BB.hasSpecificMask(QB.d.POINTERPICK) || IB.hasSpecificMask(QB.d.POINTERPICK) || BB.hasSpecificMask(QB.d.POINTERTAP) || IB.hasSpecificMask(QB.d.POINTERTAP) || BB.hasSpecificMask(QB.d.POINTERDOUBLETAP) || IB.hasSpecificMask(QB.d.POINTERDOUBLETAP);
          !GB && sB && (oB = this._initActionManager(oB, JB), oB && (GB = oB.hasPickTriggers));
          let vB = !1;
          if (GB = GB && !this._isMultiTouchGesture, GB) {
            const GB = ZB.button;
            if (JB.hasSwiped = this._isPointerSwiping(), !JB.hasSwiped) {
              let kB = !lB.ExclusiveDoubleClickMode;
              if (kB || (kB = !BB.hasSpecificMask(QB.d.POINTERDOUBLETAP) && !IB.hasSpecificMask(QB.d.POINTERDOUBLETAP), kB && !sB.HasSpecificTrigger(6) && (oB = this._initActionManager(oB, JB), oB && (kB = !oB.hasSpecificTrigger(6)))), kB)(Date.now() - this._previousStartingPointerTime > lB.DoubleClickDelay || GB !== this._previousButtonPressed) && (JB.singleClick = !0, TB(JB, this._currentPickResult), vB = !0);
              else {
                const BB = {
                  evt: ZB,
                  clickInfo: JB,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, GB, JB, TB), lB.DoubleClickDelay)
                };
                this._delayedClicks[GB] = BB
              }
              let cB = BB.hasSpecificMask(QB.d.POINTERDOUBLETAP) || IB.hasSpecificMask(QB.d.POINTERDOUBLETAP);
              !cB && sB.HasSpecificTrigger(6) && (oB = this._initActionManager(oB, JB), oB && (cB = oB.hasSpecificTrigger(6))), cB && (GB === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < lB.DoubleClickDelay && !this._doubleClickOccured ? (JB.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = GB, lB.ExclusiveDoubleClickMode ? (this._delayedClicks[GB] && (clearTimeout(this._delayedClicks[GB]?.timeoutId), this._delayedClicks[GB] = null), TB(JB, this._previousPickResult)) : TB(JB, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, JB.Dn = !0, JB.ignore = !1, lB.ExclusiveDoubleClickMode && this._delayedClicks[GB] && (clearTimeout(this._delayedClicks[GB]?.timeoutId), this._delayedClicks[GB] = null), TB(JB, this._currentPickResult)), vB = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = GB))
            }
          }
          vB || TB(JB, this._currentPickResult)
        }, this._onPointerMove = BB => {
          if (this._updatePointerPosition(BB), this._latestPointerMoveEvents.set(BB.pointerId, {
              event: BB,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > lB.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > lB.DragMovementThreshold), oB.isPointerLock && oB._verifyPointerLock(), this._checkPrePointerObservable(null, BB, BB.inputIndex >= OB.MouseWheelX && BB.inputIndex <= OB.MouseWheelZ ? QB.d.POINTERWHEEL : QB.d.POINTERMOVE)) return;
          if (!JB.cameraToUseForPointers && !JB.activeCamera) return;
          if (JB.skipPointerMovePicking) return void this._processPointerMove(new FB.e, BB);
          this._ensurePointerMovePredicate();
          const IB = JB._registeredActions > 0 || JB.constantlyUpdateMeshUnderPointer ? this._pickMove(BB) : null;
          this._processPointerMove(IB, BB)
        }, this._onPointerDown = BB => {
          const IB = this._activePointerIds.indexOf(-1);
          if (-1 === IB ? this._activePointerIds.push(BB.pointerId) : this._activePointerIds[IB] = BB.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, lB.ExclusiveDoubleClickMode)
            for (let TB = 0; TB < this._delayedClicks.length; TB++)
              if (this._delayedClicks[TB])
                if (BB.button === TB) clearTimeout(this._delayedClicks[TB]?.timeoutId);
                else {
                  const BB = this._delayedClicks[TB].clickInfo;
                  this._doubleClickOccured = !1, BB.singleClick = !0, BB.ignore = !1;
                  const IB = this._delayedClicks[TB].evt,
                    ZB = QB.d.POINTERTAP,
                    oB = new QB.i(ZB, IB, this._currentPickResult);
                  JB.onPointerObservable.hasObservers() && JB.onPointerObservable.hasSpecificMask(ZB) && JB.onPointerObservable.notifyObservers(oB, ZB), this._delayedClicks[TB] = null
                } if (this._updatePointerPosition(BB), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = BB.button), JB.preventDefaultOnPointerDown && TB && (BB.preventDefault(), TB.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, BB, QB.d.POINTERDOWN)) return;
          if (!JB.cameraToUseForPointers && !JB.activeCamera) return;
          let ZB;
          this._pointerCaptures[BB.pointerId] = !0, JB.pointerDownPredicate || (JB.pointerDownPredicate = BB => BB.tg && BB.isVisible && BB.isReady() && BB.isEnabled() && (!JB.cameraToUseForPointers || 0 !== (JB.cameraToUseForPointers.layerMask & BB.layerMask))), this._pickedDownMesh = null, ZB = JB.skipPointerDownPicking || 0 === JB._registeredActions && !this._checkForPicking() && !JB.onPointerDown ? new FB.e : JB.TF(this._unTranslatedPointerX, this._unTranslatedPointerY, JB.pointerDownPredicate, JB.pointerDownFastCheck, JB.cameraToUseForPointers, JB.pointerDownTrianglePredicate), this._processPointerDown(ZB, BB)
        }, this._onPointerUp = BB => {
          const IB = this._activePointerIds.indexOf(BB.pointerId); - 1 !== IB && (this._activePointerIds[IB] = -1, this._activePointerIdsCount--, "touch" === BB.pointerType && this._latestPointerMoveEvents.delete(BB.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(BB), JB.preventDefaultOnPointerUp && TB && (BB.preventDefault(), TB.focus()), this._initClickEvent(JB.onPrePointerObservable, JB.onPointerObservable, BB, ((IB, ZB) => {
            if (JB.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !IB.ignore)) {
              if (this._checkPrePointerObservable(null, BB, QB.d.POINTERUP)) return this._swipeButtonPressed === BB.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === BB.buttons && (this._pointerCaptures[BB.pointerId] = !1));
              IB.hasSwiped || (IB.singleClick && JB.onPrePointerObservable.hasSpecificMask(QB.d.POINTERTAP) && this._checkPrePointerObservable(null, BB, QB.d.POINTERTAP) && (this._skipPointerTap = !0), IB.Dn && JB.onPrePointerObservable.hasSpecificMask(QB.d.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, BB, QB.d.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[BB.pointerId] ? (0 === BB.buttons && (this._pointerCaptures[BB.pointerId] = !1), (JB.cameraToUseForPointers || JB.activeCamera) && (JB.pointerUpPredicate || (JB.pointerUpPredicate = BB => BB.tg && BB.isVisible && BB.isReady() && BB.isEnabled() && (!JB.cameraToUseForPointers || 0 !== (JB.cameraToUseForPointers.layerMask & BB.layerMask))), !this._meshPickProceed && (sB && sB.HasTriggers || this._checkForPicking() || JB.onPointerUp) && this._initActionManager(null, IB), ZB || (ZB = this._currentPickResult), this._processPointerUp(ZB, BB, IB), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === BB.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === BB.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = BB => {
          const IB = MB.b.KEYDOWN;
          if (JB.onPreKeyboardObservable.hasObservers()) {
            const ZB = new MB.e(IB, BB);
            if (JB.onPreKeyboardObservable.notifyObservers(ZB, IB), ZB.skipOnKeyboardObservable) return
          }
          if (JB.onKeyboardObservable.hasObservers()) {
            const ZB = new MB.h(IB, BB);
            JB.onKeyboardObservable.notifyObservers(ZB, IB)
          }
          JB.actionManager && JB.actionManager.processTrigger(14, NB.CreateNewFromScene(JB, BB))
        }, this._onKeyUp = BB => {
          const IB = MB.b.KEYUP;
          if (JB.onPreKeyboardObservable.hasObservers()) {
            const ZB = new MB.e(IB, BB);
            if (JB.onPreKeyboardObservable.notifyObservers(ZB, IB), ZB.skipOnKeyboardObservable) return
          }
          if (JB.onKeyboardObservable.hasObservers()) {
            const ZB = new MB.h(IB, BB);
            JB.onKeyboardObservable.notifyObservers(ZB, IB)
          }
          JB.actionManager && JB.actionManager.processTrigger(15, NB.CreateNewFromScene(JB, BB))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((TB => {
          TB.deviceType === wB.Mouse ? TB.onInputChangedObservable.add((JB => {
            this._originMouseEvent = JB, JB.inputIndex === OB.LeftClick || JB.inputIndex === OB.MiddleClick || JB.inputIndex === OB.RightClick || JB.inputIndex === OB.BrowserBack || JB.inputIndex === OB.BrowserForward ? IB && 1 === TB.getInput(JB.inputIndex) ? this._onPointerDown(JB) : BB && 0 === TB.getInput(JB.inputIndex) && this._onPointerUp(JB) : ZB && (JB.inputIndex === OB.Move ? this._onPointerMove(JB) : JB.inputIndex !== OB.MouseWheelX && JB.inputIndex !== OB.MouseWheelY && JB.inputIndex !== OB.MouseWheelZ || this._onPointerMove(JB))
          })) : TB.deviceType === wB.Touch ? TB.onInputChangedObservable.add((JB => {
            JB.inputIndex === OB.LeftClick && (IB && 1 === TB.getInput(JB.inputIndex) ? (this._onPointerDown(JB), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : BB && 0 === TB.getInput(JB.inputIndex) && (this._onPointerUp(JB), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), ZB && JB.inputIndex === OB.Move && this._onPointerMove(JB)
          })) : TB.deviceType === wB.Keyboard && TB.onInputChangedObservable.add((BB => {
            "keydown" === BB.type ? this._onKeyDown(BB) : "keyup" === BB.type && this._onKeyUp(BB)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0,
          TB = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[IB] === BB && (!BB || !BB._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const JB = this._meshUnderPointerId[IB];
        let oB;
        JB && (oB = JB._getActionManagerForTrigger(10), oB && oB.processTrigger(10, new NB(JB, this._pointerX, this._pointerY, BB, TB, {
          pointerId: IB
        }))), BB ? (this._meshUnderPointerId[IB] = BB, this._pointerOverMesh = BB, oB = BB._getActionManagerForTrigger(9), oB && oB.processTrigger(9, new NB(BB, this._pointerX, this._pointerY, BB, TB, {
          pointerId: IB,
          pickResult: ZB
        }))) : (delete this._meshUnderPointerId[IB], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: BB,
          pointerId: IB
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(BB) {
        this._pointerOverMesh === BB && (this._pointerOverMesh = null), this._pickedDownMesh === BB && (this._pickedDownMesh = null), this._pickedUpMesh === BB && (this._pickedUpMesh = null);
        for (const IB in this._meshUnderPointerId) this._meshUnderPointerId[IB] === BB && delete this._meshUnderPointerId[IB]
      }
    }
    lB.DragMovementThreshold = 10, lB.LongPressDelay = 500, lB.DoubleClickDelay = 300, lB.ExclusiveDoubleClickMode = !1;
    var AB = ZB(40010),
      tB = ZB(37311),
      bB = ZB(37819);
    class xB {
      static get UniqueId() {
        const BB = this._UniqueIdCounter;
        return this._UniqueIdCounter++, BB
      }
    }
    xB._UniqueIdCounter = 1;
    var EB = ZB(40110),
      DB = ZB(40245),
      KB = ZB(37131);
    class VB {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var SB, BI, II, ZI, TI, JI, oI, GI, vI, kI, cI, nI, hI, zI, FI, NI, gI, qI, yI, UI, WI, dI, CI, QI, sI, wI, OI, YI, iI, pI, aI, HI, MI, jI, PI, RI, rI, mI, XI, LI, eI, uI, fI, lI, AI, tI, bI, xI, EI, DI, KI, VI, SI, BZ = ZB(38718),
      IZ = ZB(37170);
    const ZZ = new nB.t,
      TZ = new nB.t;
    var JZ;
    ! function(BB) {
      BB[BB.BackwardCompatible = 0] = "BackwardCompatible", BB[BB.Intermediate = 1] = "Intermediate", BB[BB.Aggressive = 2] = "Aggressive"
    }(JZ || (JZ = {}));
    class oZ {
      static DefaultMaterialFactory(BB) {
        throw (0, CB.m)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, CB.m)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(BB) {
        BB !== this._clearColor && (this._clearColor = BB, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(BB) {
        if (BB !== this._performancePriority) {
          switch (this._performancePriority = BB, BB) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(BB)
        }
      }
      set forceWireframe(BB) {
        this._forceWireframe !== BB && (this._forceWireframe = BB, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(BB) {
        this._skipFrustumClipping !== BB && (this._skipFrustumClipping = BB)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(BB) {
        this._forcePointsCloud !== BB && (this._forcePointsCloud = BB, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(BB) {
        this._environmentTexture !== BB && (this._environmentTexture = BB, this.onEnvironmentTextureChangedObservable.notifyObservers(BB), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let BB = [];
        BB = BB.concat(this.meshes), BB = BB.concat(this.lights), BB = BB.concat(this.cameras), BB = BB.concat(this.transformNodes);
        for (const IB of this.skeletons) BB = BB.concat(IB.bones);
        return BB
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(BB) {
        this._animationPropertiesOverride = BB
      }
      set onDispose(BB) {
        this._onDisposeObserver && this.oR.remove(this._onDisposeObserver), this._onDisposeObserver = this.oR.add(BB)
      }
      set beforeRender(BB) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), BB && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(BB))
      }
      set afterRender(BB) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), BB && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(BB))
      }
      set beforeCameraRender(BB) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(BB)
      }
      set afterCameraRender(BB) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(BB)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(BB) {
        this._pointerPickingConfiguration.pointerDownPredicate = BB
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(BB) {
        this._pointerPickingConfiguration.pointerUpPredicate = BB
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(BB) {
        this._pointerPickingConfiguration.pointerMovePredicate = BB
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(BB) {
        this._pointerPickingConfiguration.pointerDownFastCheck = BB
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(BB) {
        this._pointerPickingConfiguration.pointerUpFastCheck = BB
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(BB) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = BB
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(BB) {
        this._pointerPickingConfiguration.skipPointerMovePicking = BB
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(BB) {
        this._pointerPickingConfiguration.skipPointerDownPicking = BB
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(BB) {
        this._pointerPickingConfiguration.skipPointerUpPicking = BB
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return lB.DragMovementThreshold
      }
      static set DragMovementThreshold(BB) {
        lB.DragMovementThreshold = BB
      }
      static get LongPressDelay() {
        return lB.LongPressDelay
      }
      static set LongPressDelay(BB) {
        lB.LongPressDelay = BB
      }
      static get DoubleClickDelay() {
        return lB.DoubleClickDelay
      }
      static set DoubleClickDelay(BB) {
        lB.DoubleClickDelay = BB
      }
      static get ExclusiveDoubleClickMode() {
        return lB.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(BB) {
        lB.ExclusiveDoubleClickMode = BB
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? nB.s.ZeroReadOnly
      }
      bindEyePosition(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const TB = this._eyePosition,
          JB = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          oB = this.floatingOriginOffset,
          GB = ZZ.set(TB.x, TB.y, TB.z, JB ? -1 : 1),
          vB = GB.subtractFromFloatsToRef(oB.x, oB.y, oB.z, 0, TZ);
        return BB && (ZB ? BB.setFloat3(IB, vB.x, vB.y, vB.z) : BB.setVector4(IB, vB)), GB
      }
      finalizeSceneUbo() {
        const BB = this.getSceneUniformBuffer(),
          IB = this.bindEyePosition(null),
          ZB = this.floatingOriginOffset;
        return BB.updateFloat4("vEyePosition", IB.x - ZB.x, IB.y - ZB.y, IB.z - ZB.z, IB.w), BB.update(), BB
      }
      set useRightHandedSystem(BB) {
        this._useRightHandedSystem !== BB && (this._useRightHandedSystem = BB, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(BB) {
        this._currentStepId = BB
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(BB) {
        this._fogEnabled !== BB && (this._fogEnabled = BB, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(BB) {
        this._fogMode !== BB && (this._fogMode = BB, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(BB) {
        this._shadowsEnabled !== BB && (this._shadowsEnabled = BB, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(BB) {
        this._lightsEnabled !== BB && (this._lightsEnabled = BB, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(BB) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), BB && (this._unObserveActiveCameras = (0, KB.g)(BB, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = BB
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(BB) {
        BB !== this._activeCamera && (this._activeCamera = BB, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return oZ.DefaultMaterialFactory !== oZ._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = oZ.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(BB) {
        this._defaultMaterial = BB
      }
      set texturesEnabled(BB) {
        this._texturesEnabled !== BB && (this._texturesEnabled = BB, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(BB) {
        if (this._frameGraph) return this._frameGraph = BB, void(BB || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = BB, BB && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(BB) {
        this._skeletonsEnabled !== BB && (this._skeletonsEnabled = BB, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = oZ.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const BB of this._transientComponents) BB.register();
          this._transientComponents.length = 0
        }
      }
      yTB(BB) {
        this._components.push(BB), this._transientComponents.push(BB);
        const IB = BB;
        IB.addFromContainer && IB.serialize && this._serializableComponents.push(IB)
      }
      _getComponent(BB) {
        for (const IB of this._components)
          if (IB.name === BB) return IB;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(BB, IB) {
        this._inputManager = new lB(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new tB.g(.2, .2, .3, 1), this.onClearColorChangedObservable = new GB.b, this.ambientColor = new tB.c(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new GB.b, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.DW = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.oR = new GB.b, this._onDisposeObserver = null, this.onBeforeRenderObservable = new GB.b, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new GB.b, this.onAfterRenderCameraObservable = new GB.b, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new GB.b, this.onAfterAnimationsObservable = new GB.b, this.onBeforeDrawPhaseObservable = new GB.b, this.onAfterDrawPhaseObservable = new GB.b, this.onReadyObservable = new GB.b, this.onBeforeCameraRenderObservable = new GB.b, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new GB.b, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new GB.b, this.onAfterActiveMeshesEvaluationObservable = new GB.b, this.onBeforeParticlesRenderingObservable = new GB.b, this.onAfterParticlesRenderingObservable = new GB.b, this.onDataLoadedObservable = new GB.b, this.onNewCameraAddedObservable = new GB.b, this.onCameraRemovedObservable = new GB.b, this.onNewLightAddedObservable = new GB.b, this.onLightRemovedObservable = new GB.b, this.onNewGeometryAddedObservable = new GB.b, this.onGeometryRemovedObservable = new GB.b, this.onNewTransformNodeAddedObservable = new GB.b, this.onTransformNodeRemovedObservable = new GB.b, this.onNewMeshAddedObservable = new GB.b, this.onMeshRemovedObservable = new GB.b, this.onNewSkeletonAddedObservable = new GB.b, this.onSkeletonRemovedObservable = new GB.b, this.onNewParticleSystemAddedObservable = new GB.b, this.onParticleSystemRemovedObservable = new GB.b, this.onNewAnimationGroupAddedObservable = new GB.b, this.onAnimationGroupRemovedObservable = new GB.b, this.onNewMaterialAddedObservable = new GB.b, this.onNewMultiMaterialAddedObservable = new GB.b, this.onMaterialRemovedObservable = new GB.b, this.onMultiMaterialRemovedObservable = new GB.b, this.onNewTextureAddedObservable = new GB.b, this.onTextureRemovedObservable = new GB.b, this.onNewFrameGraphAddedObservable = new GB.b, this.onFrameGraphRemovedObservable = new GB.b, this.onNewObjectRendererAddedObservable = new GB.b, this.onObjectRendererRemovedObservable = new GB.b, this.onNewPostProcessAddedObservable = new GB.b, this.onPostProcessRemovedObservable = new GB.b, this.onNewEffectLayerAddedObservable = new GB.b, this.onEffectLayerRemovedObservable = new GB.b, this.onBeforeRenderTargetsRenderObservable = new GB.b, this.onAfterRenderTargetsRenderObservable = new GB.b, this.onBeforeStepObservable = new GB.b, this.onAfterStepObservable = new GB.b, this.onActiveCameraChanged = new GB.b, this.onActiveCamerasChanged = new GB.b, this.onBeforeRenderingGroupObservable = new GB.b, this.onAfterRenderingGroupObservable = new GB.b, this.onMeshImportedObservable = new GB.b, this.onAnimationFileImportedObservable = new GB.b, this.onEnvironmentTextureChangedObservable = new GB.b, this.onMeshUnderPointerUpdatedObservable = new GB.b, this._registeredForLateAnimationBindings = new vB.c(256), this._pointerPickingConfiguration = new VB, this.onPrePointerObservable = new GB.b, this.onPointerObservable = new GB.b, this.onPreKeyboardObservable = new GB.b, this.onKeyboardObservable = new GB.b, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = oZ.FOGMODE_NONE, this.fogColor = new tB.c(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.Gl = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new nB.s(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new vB.c(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new AB.c, this._activeIndices = new AB.c, this._activeParticles = new AB.c, this._activeBones = new AB.c, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new vB.g(256), this._processedMaterials = new vB.g(256), this._renderTargets = new vB.c(256), this._materialsRenderTargets = new vB.c(256), this._activeParticleSystems = new vB.g(256), this._activeSkeletons = new vB.c(32), this._softwareSkinnedMeshes = new vB.c(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = nB.b.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = UB.d.Create(), this._beforeClearStage = UB.d.Create(), this._beforeRenderTargetClearStage = UB.d.Create(), this._gatherRenderTargetsStage = UB.d.Create(), this._gatherActiveCameraRenderTargetsStage = UB.d.Create(), this._isReadyForMeshStage = UB.d.Create(), this._beforeEvaluateActiveMeshStage = UB.d.Create(), this._evaluateSubMeshStage = UB.d.Create(), this._preActiveMeshStage = UB.d.Create(), this._cameraDrawRenderTargetStage = UB.d.Create(), this._beforeCameraDrawStage = UB.d.Create(), this._beforeRenderTargetDrawStage = UB.d.Create(), this._beforeRenderingGroupDrawStage = UB.d.Create(), this._beforeRenderingMeshStage = UB.d.Create(), this._afterRenderingMeshStage = UB.d.Create(), this._afterRenderingGroupDrawStage = UB.d.Create(), this._afterCameraDrawStage = UB.d.Create(), this._afterCameraPostProcessStage = UB.d.Create(), this._afterRenderTargetDrawStage = UB.d.Create(), this._afterRenderTargetPostProcessStage = UB.d.Create(), this._afterRenderStage = UB.d.Create(), this._pointerMoveStage = UB.d.Create(), this._pointerDownStage = UB.d.Create(), this._pointerUpStage = UB.d.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new GB.b, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const ZB = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...IB
        };
        this.defaultCameraLayerMask = ZB.defaultCameraLayerMask, this.defaultRenderableLayerMask = ZB.defaultRenderableLayerMask, BB = this._engine = BB || dB.e.LastCreatedEngine, ZB.virtual ? BB._virtualScenes.push(this) : (dB.e._LastCreatedScene = this, BB.scenes.push(this)), (BB.getCreationOptions().useLargeWorldRendering || IB?.useFloatingOrigin) && ((0, qB.g)(), this._floatingOriginScene = this, qB.c.JR = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new yB.e(this), gB.b && (this.postProcessManager = new gB.b(this)), (0, WB.l)() && this.attachControl(), this._createUbo(), hB.b && (this._imageProcessingConfiguration = new hB.b), this.setDefaultCandidateProviders(), ZB.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = ZB.useMaterialMeshMap, this.useClonedMeshMap = ZB.useClonedMeshMap, IB && IB.virtual || BB.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(BB) {
        return this._defaultSubMeshCandidates.data = BB.EW, this._defaultSubMeshCandidates.length = BB.EW.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = BB => this._getDefaultSubMeshCandidates(BB), this.getIntersectingSubMeshCandidates = (BB, IB) => this._getDefaultSubMeshCandidates(BB), this.getCollidingSubMeshCandidates = (BB, IB) => this._getDefaultSubMeshCandidates(BB)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(BB) {
        this._inputManager.pointerX = BB
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(BB) {
        this._inputManager.pointerY = BB
      }
      getCachedMaterial() {
        return this._cachedMaterial
      }
      getCachedEffect() {
        return this._cachedEffect
      }
      getCachedVisibility() {
        return this._cachedVisibility
      }
      isCachedMaterialInvalid(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== IB || this._cachedMaterial !== BB || this._cachedVisibility !== ZB
      }
      PN() {
        return this._engine
      }
      getTotalVertices() {
        return this._totalVertices.current
      }
      get totalVerticesPerfCounter() {
        return this._totalVertices
      }
      getActiveIndices() {
        return this._activeIndices.current
      }
      get totalActiveIndicesPerfCounter() {
        return this._activeIndices
      }
      getActiveParticles() {
        return this._activeParticles.current
      }
      get activeParticlesPerfCounter() {
        return this._activeParticles
      }
      getActiveBones() {
        return this._activeBones.current
      }
      get activeBonesPerfCounter() {
        return this._activeBones
      }
      getActiveMeshes() {
        return this._activeMeshes
      }
      getAnimationRatio() {
        return void 0 !== this._animationRatio ? this._animationRatio : 1
      }
      getRenderId() {
        return this._renderId
      }
      getFrameId() {
        return this._frameId
      }
      incrementRenderId() {
        this._renderId++
      }
      _createUbo() {
        this.setSceneUniformBuffer(this.createSceneUniformBuffer())
      }
      simulatePointerMove(BB, IB) {
        return this._inputManager.simulatePointerMove(BB, IB), this
      }
      simulatePointerDown(BB, IB) {
        return this._inputManager.simulatePointerDown(BB, IB), this
      }
      simulatePointerUp(BB, IB, ZB) {
        return this._inputManager.simulatePointerUp(BB, IB, ZB), this
      }
      isPointerCaptured() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(BB)
      }
      attachControl() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(BB, IB, ZB)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let BB, IB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const ZB = this.PN(),
          TB = ZB.currentRenderPassId;
        ZB.currentRenderPassId = this.activeCamera?.renderPassId ?? TB;
        let JB = !0;
        for (this._pendingData.length > 0 && (JB = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && JB && (JB = this.depthPeelingRenderer.isReady()), IB && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), BB = 0; BB < this.meshes.length; BB++) {
          const TB = this.meshes[BB];
          if (!TB.EW || 0 === TB.EW.length) continue;
          if (!TB.isReady(!0)) {
            JB = !1;
            continue
          }
          const oB = TB.hasThinInstances || "InstancedMesh" === TB.getClassName() || "InstancedLinesMesh" === TB.getClassName() || ZB.getCaps().instancedArrays && TB.instances.length > 0;
          for (let BB = 0, IB = this._isReadyForMeshStage; BB < IB.length; BB++) {
            IB[BB].action(TB, oB) || (JB = !1)
          }
          if (!IB) continue;
          const GB = TB.material || this.defaultMaterial;
          if (GB)
            if (GB._storeEffectOnSubMeshes)
              for (const BB of TB.EW) {
                const IB = BB.LN();
                IB && IB.hasRenderTargetTextures && null != IB.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(IB) && (this._processedMaterials.push(IB), this._materialsRenderTargets.concatWithNoDuplicate(IB.getRenderTargetTextures()))
              } else GB.hasRenderTargetTextures && null != GB.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(GB) && (this._processedMaterials.push(GB), this._materialsRenderTargets.concatWithNoDuplicate(GB.getRenderTargetTextures()))
        }
        if (IB) {
          for (BB = 0; BB < this._materialsRenderTargets.length; ++BB) {
            this._materialsRenderTargets.data[BB].isReadyForRendering() || (JB = !1)
          }
          for (BB = 0; BB < this.customRenderTargets.length; ++BB) {
            this.customRenderTargets[BB].isReadyForRendering() || (JB = !1)
          }
        }
        for (BB = 0; BB < this.geometries.length; BB++) {
          2 === this.geometries[BB].delayLoadState && (JB = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const oB of this.activeCameras) oB.isReady(!0) || (JB = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (JB = !1));
        for (const oB of this.DW) oB.isReady() || (JB = !1);
        if (this.proceduralTexturesEnabled)
          for (const oB of this.proceduralTextures) oB.isReady() || (JB = !1);
        if (this.layers)
          for (const oB of this.layers) oB.isReady() || (JB = !1);
        if (this.effectLayers)
          for (const oB of this.effectLayers) oB.isLayerReady() || (JB = !1);
        for (const oB of this._isReadyChecks) oB.isReady() || (JB = !1);
        return ZB.areAllEffectsReady() || (JB = !1), ZB.currentRenderPassId = TB, JB
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(BB) {
        this.onBeforeRenderObservable.add(BB)
      }
      unregisterBeforeRender(BB) {
        this.onBeforeRenderObservable.removeCallback(BB)
      }
      registerAfterRender(BB) {
        this.onAfterRenderObservable.add(BB)
      }
      unregisterAfterRender(BB) {
        this.onAfterRenderObservable.removeCallback(BB)
      }
      _executeOnceBeforeRender(BB) {
        const IB = () => {
          BB(), setTimeout((() => {
            this.unregisterBeforeRender(IB)
          }))
        };
        this.registerBeforeRender(IB)
      }
      executeOnceBeforeRender(BB, IB) {
        void 0 !== IB ? setTimeout((() => {
          this._executeOnceBeforeRender(BB)
        }), IB) : this._executeOnceBeforeRender(BB)
      }
      addPendingData(BB) {
        this._pendingData.push(BB)
      }
      removePendingData(BB) {
        const IB = this.isLoading,
          ZB = this._pendingData.indexOf(BB); - 1 !== ZB && this._pendingData.splice(ZB, 1), IB && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(BB) {
        -1 === this._isReadyChecks.indexOf(BB) && this._isReadyChecks.push(BB)
      }
      removeIsReadyCheck(BB) {
        const IB = this._isReadyChecks.indexOf(BB); - 1 !== IB && this._isReadyChecks.splice(IB, 1)
      }
      executeWhenReady(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(BB), null === this._executeWhenReadyTimeoutId && this._checkIsReady(IB)
      }
      async whenReadyAsync() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((IB => {
          this.executeWhenReady((() => {
            IB()
          }), BB)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = oB.c.Now;
        else if (this.onReadyTimeoutDuration > 0 && oB.c.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(BB)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(BB)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = oB.c.Now
      }
      getViewMatrix() {
        return this._viewMatrix
      }
      getProjectionMatrix() {
        return this._projectionMatrix
      }
      getInverseProjectionMatrix() {
        return this._inverseProjectionMatrix
      }
      getTransformMatrix() {
        return this._transformMatrix
      }
      setTransformMatrix(BB, IB, ZB, TB) {
        this._multiviewSceneUboIsActive = !!(ZB && TB && this._multiviewSceneUbo), this._viewUpdateFlag === BB.updateFlag && this._projectionUpdateFlag === IB.updateFlag || (this._viewUpdateFlag = BB.updateFlag, this._projectionUpdateFlag = IB.updateFlag, this._viewMatrix = BB, this._projectionMatrix = IB, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new nB.b), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? bB.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = bB.d.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(ZB, TB) : this._sceneUbo.useUbo && (this._sceneUbo.T6("viewProjection", this._transformMatrix), this._sceneUbo.T6("view", this._viewMatrix), this._sceneUbo.T6("projection", this._projectionMatrix), this._sceneUbo.T6("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(BB, IB) {
        const ZB = "boolean" === typeof IB ? IB : IB?.trackUBOsInFrame,
          TB = new zB.d(this._engine, void 0, !1, BB ?? "lg", void 0, ZB);
        return TB.addUniform("viewProjection", 16), TB.addUniform("view", 16), TB.addUniform("projection", 16), TB.addUniform("vEyePosition", 4), TB.addUniform("inverseProjection", 16), TB
      }
      setSceneUniformBuffer(BB) {
        this._sceneUbo = BB, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : nB.s.ZeroReadOnly
      }
      getUniqueId() {
        return xB.UniqueId
      }
      jTB(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(BB), BB._resyncLightSources(), BB.parent || BB._addToSceneRootNodes(), JB.b.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(BB)
          })), IB)) {
          const IB = BB.getChildMeshes();
          for (const BB of IB) this.jTB(BB)
        }
      }
      jR(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZB = this.meshes.indexOf(BB);
        if (-1 !== ZB && (this.meshes.splice(ZB, 1), BB.parent || BB._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(BB), this.onMeshRemovedObservable.notifyObservers(BB), IB) {
          const IB = BB.getChildMeshes();
          for (const BB of IB) this.jR(BB)
        }
        return ZB
      }
      addTransformNode(BB) {
        this._blockEntityCollection || BB.JR() === this && -1 !== BB._indexInSceneTransformNodesArray || (BB._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(BB), BB.parent || BB._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(BB))
      }
      removeTransformNode(BB) {
        const IB = BB._indexInSceneTransformNodesArray;
        if (-1 !== IB) {
          if (IB !== this.transformNodes.length - 1) {
            const BB = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[IB] = BB, BB._indexInSceneTransformNodesArray = IB
          }
          BB._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), BB.parent || BB._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(BB), IB
      }
      removeSkeleton(BB) {
        const IB = this.skeletons.indexOf(BB);
        return -1 !== IB && (this.skeletons.splice(IB, 1), this.onSkeletonRemovedObservable.notifyObservers(BB), this._executeActiveContainerCleanup(this._activeSkeletons)), IB
      }
      removeMorphTargetManager(BB) {
        const IB = this.morphTargetManagers.indexOf(BB);
        return -1 !== IB && this.morphTargetManagers.splice(IB, 1), IB
      }
      removeLight(BB) {
        const IB = this.lights.indexOf(BB);
        if (-1 !== IB) {
          for (const IB of this.meshes) IB._removeLightSource(BB, !1);
          this.lights.splice(IB, 1), this.sortLightsByPriority(), BB.parent || BB._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(BB)
        }
        return IB
      }
      removeCamera(BB) {
        const IB = this.cameras.indexOf(BB);
        if (-1 !== IB && (this.cameras.splice(IB, 1), BB.parent || BB._removeFromSceneRootNodes()), this.activeCameras) {
          const IB = this.activeCameras.indexOf(BB); - 1 !== IB && this.activeCameras.splice(IB, 1)
        }
        return this.activeCamera === BB && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(BB), IB
      }
      removeParticleSystem(BB) {
        const IB = this.DW.indexOf(BB);
        return -1 !== IB && (this.DW.splice(IB, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(BB), IB
      }
      removeAnimation(BB) {
        const IB = this.animations.indexOf(BB);
        return -1 !== IB && this.animations.splice(IB, 1), IB
      }
      stopAnimation(BB, IB, ZB) {}
      removeAnimationGroup(BB) {
        const IB = this.animationGroups.indexOf(BB);
        return -1 !== IB && this.animationGroups.splice(IB, 1), this.onAnimationGroupRemovedObservable.notifyObservers(BB), IB
      }
      removeMultiMaterial(BB) {
        const IB = this.multiMaterials.indexOf(BB);
        return -1 !== IB && this.multiMaterials.splice(IB, 1), this.onMultiMaterialRemovedObservable.notifyObservers(BB), IB
      }
      removeMaterial(BB) {
        const IB = BB._indexInSceneMaterialArray;
        if (-1 !== IB && IB < this.materials.length) {
          if (IB !== this.materials.length - 1) {
            const BB = this.materials[this.materials.length - 1];
            this.materials[IB] = BB, BB._indexInSceneMaterialArray = IB
          }
          BB._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(BB), IB
      }
      removeActionManager(BB) {
        const IB = this.actionManagers.indexOf(BB);
        return -1 !== IB && this.actionManagers.splice(IB, 1), IB
      }
      removeTexture(BB) {
        const IB = this.textures.indexOf(BB);
        return -1 !== IB && this.textures.splice(IB, 1), this.onTextureRemovedObservable.notifyObservers(BB), IB
      }
      removeFrameGraph(BB) {
        const IB = this.frameGraphs.indexOf(BB);
        return -1 !== IB && this.frameGraphs.splice(IB, 1), this.onFrameGraphRemovedObservable.notifyObservers(BB), IB
      }
      removeObjectRenderer(BB) {
        const IB = this.objectRenderers.indexOf(BB);
        return -1 !== IB && this.objectRenderers.splice(IB, 1), this.onObjectRendererRemovedObservable.notifyObservers(BB), IB
      }
      removePostProcess(BB) {
        const IB = this.postProcesses.indexOf(BB);
        return -1 !== IB && this.postProcesses.splice(IB, 1), this.onPostProcessRemovedObservable.notifyObservers(BB), IB
      }
      removeEffectLayer(BB) {
        const IB = this.effectLayers.indexOf(BB);
        return -1 !== IB && this.effectLayers.splice(IB, 1), this.onEffectLayerRemovedObservable.notifyObservers(BB), IB
      }
      addLight(BB) {
        if (!this._blockEntityCollection) {
          this.lights.push(BB), this.sortLightsByPriority(), BB.parent || BB._addToSceneRootNodes();
          for (const IB of this.meshes) - 1 === IB.lightSources.indexOf(BB) && (IB.lightSources.push(BB), IB._resyncLightSources());
          JB.b.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(BB)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(DB.d.CompareLightsPriority)
      }
      addCamera(BB) {
        this._blockEntityCollection || (this.cameras.push(BB), JB.b.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(BB)
        })), BB.parent || BB._addToSceneRootNodes())
      }
      addSkeleton(BB) {
        this._blockEntityCollection || (this.skeletons.push(BB), JB.b.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(BB)
        })))
      }
      addParticleSystem(BB) {
        this._blockEntityCollection || (this.DW.push(BB), JB.b.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(BB)
        })))
      }
      addAnimation(BB) {
        this._blockEntityCollection || this.animations.push(BB)
      }
      addAnimationGroup(BB) {
        this._blockEntityCollection || (this.animationGroups.push(BB), JB.b.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(BB)
        })))
      }
      addMultiMaterial(BB) {
        this._blockEntityCollection || (this.multiMaterials.push(BB), JB.b.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(BB)
        })))
      }
      addMaterial(BB) {
        this._blockEntityCollection || BB.JR() === this && -1 !== BB._indexInSceneMaterialArray || (BB._indexInSceneMaterialArray = this.materials.length, this.materials.push(BB), JB.b.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(BB)
        })))
      }
      addMorphTargetManager(BB) {
        this._blockEntityCollection || this.morphTargetManagers.push(BB)
      }
      addGeometry(BB) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[BB.uniqueId] = this.geometries.length), this.geometries.push(BB))
      }
      addActionManager(BB) {
        this.actionManagers.push(BB)
      }
      addTexture(BB) {
        this._blockEntityCollection || (this.textures.push(BB), this.onNewTextureAddedObservable.notifyObservers(BB))
      }
      addFrameGraph(BB) {
        this.frameGraphs.push(BB), JB.b.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(BB)
        }))
      }
      addObjectRenderer(BB) {
        this.objectRenderers.push(BB), JB.b.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(BB)
        }))
      }
      addPostProcess(BB) {
        this._blockEntityCollection || (this.postProcesses.push(BB), JB.b.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(BB)
        })))
      }
      addEffectLayer(BB) {
        this._blockEntityCollection || (this.effectLayers.push(BB), JB.b.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(BB)
        })))
      }
      switchActiveCamera(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = BB, IB && BB.attachControl())
      }
      setActiveCameraById(BB) {
        const IB = this.getCameraById(BB);
        return IB ? (this.activeCamera = IB, IB) : null
      }
      setActiveCameraByName(BB) {
        const IB = this.getCameraByName(BB);
        return IB ? (this.activeCamera = IB, IB) : null
      }
      getAnimationGroupByName(BB) {
        for (let IB = 0; IB < this.animationGroups.length; IB++)
          if (this.animationGroups[IB].name === BB) return this.animationGroups[IB];
        return null
      }
      _getMaterial(BB, IB) {
        for (let ZB = 0; ZB < this.materials.length; ZB++) {
          const BB = this.materials[ZB];
          if (IB(BB)) return BB
        }
        if (BB)
          for (let ZB = 0; ZB < this.multiMaterials.length; ZB++) {
            const BB = this.multiMaterials[ZB];
            if (IB(BB)) return BB
          }
        return null
      }
      getMaterialByUniqueID(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(BB, IB)
      }
      getMaterialByUniqueId(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(IB, (IB => IB.uniqueId === BB))
      }
      getMaterialById(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(IB, (IB => IB.id === BB))
      }
      getMaterialByName(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(IB, (IB => IB.name === BB))
      }
      getLastMaterialById(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let ZB = this.materials.length - 1; ZB >= 0; ZB--)
          if (this.materials[ZB].id === BB) return this.materials[ZB];
        if (IB)
          for (let ZB = this.multiMaterials.length - 1; ZB >= 0; ZB--)
            if (this.multiMaterials[ZB].id === BB) return this.multiMaterials[ZB];
        return null
      }
      getTextureByUniqueId(BB) {
        for (let IB = 0; IB < this.textures.length; IB++)
          if (this.textures[IB].uniqueId === BB) return this.textures[IB];
        return null
      }
      getTextureByName(BB) {
        for (let IB = 0; IB < this.textures.length; IB++)
          if (this.textures[IB].name === BB) return this.textures[IB];
        return null
      }
      getCameraById(BB) {
        for (let IB = 0; IB < this.cameras.length; IB++)
          if (this.cameras[IB].id === BB) return this.cameras[IB];
        return null
      }
      getCameraByUniqueId(BB) {
        for (let IB = 0; IB < this.cameras.length; IB++)
          if (this.cameras[IB].uniqueId === BB) return this.cameras[IB];
        return null
      }
      getCameraByName(BB) {
        for (let IB = 0; IB < this.cameras.length; IB++)
          if (this.cameras[IB].name === BB) return this.cameras[IB];
        return null
      }
      getBoneById(BB) {
        for (let IB = 0; IB < this.skeletons.length; IB++) {
          const ZB = this.skeletons[IB];
          for (let IB = 0; IB < ZB.bones.length; IB++)
            if (ZB.bones[IB].id === BB) return ZB.bones[IB]
        }
        return null
      }
      getBoneByName(BB) {
        for (let IB = 0; IB < this.skeletons.length; IB++) {
          const ZB = this.skeletons[IB];
          for (let IB = 0; IB < ZB.bones.length; IB++)
            if (ZB.bones[IB].name === BB) return ZB.bones[IB]
        }
        return null
      }
      getLightByName(BB) {
        for (let IB = 0; IB < this.lights.length; IB++)
          if (this.lights[IB].name === BB) return this.lights[IB];
        return null
      }
      getLightById(BB) {
        for (let IB = 0; IB < this.lights.length; IB++)
          if (this.lights[IB].id === BB) return this.lights[IB];
        return null
      }
      getLightByUniqueId(BB) {
        for (let IB = 0; IB < this.lights.length; IB++)
          if (this.lights[IB].uniqueId === BB) return this.lights[IB];
        return null
      }
      getParticleSystemById(BB) {
        for (let IB = 0; IB < this.DW.length; IB++)
          if (this.DW[IB].id === BB) return this.DW[IB];
        return null
      }
      getGeometryById(BB) {
        for (let IB = 0; IB < this.geometries.length; IB++)
          if (this.geometries[IB].id === BB) return this.geometries[IB];
        return null
      }
      _getGeometryByUniqueId(BB) {
        if (this._geometriesByUniqueId) {
          const IB = this._geometriesByUniqueId[BB];
          if (void 0 !== IB) return this.geometries[IB]
        } else
          for (let IB = 0; IB < this.geometries.length; IB++)
            if (this.geometries[IB].uniqueId === BB) return this.geometries[IB];
        return null
      }
      getFrameGraphByName(BB) {
        for (let IB = 0; IB < this.frameGraphs.length; IB++)
          if (this.frameGraphs[IB].name === BB) return this.frameGraphs[IB];
        return null
      }
      pushGeometry(BB, IB) {
        return !(!IB && this._getGeometryByUniqueId(BB.uniqueId)) && (this.addGeometry(BB), JB.b.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(BB)
        })), !0)
      }
      removeGeometry(BB) {
        let IB;
        if (this._geometriesByUniqueId) {
          if (IB = this._geometriesByUniqueId[BB.uniqueId], void 0 === IB) return !1
        } else if (IB = this.geometries.indexOf(BB), IB < 0) return !1;
        if (IB !== this.geometries.length - 1) {
          const BB = this.geometries[this.geometries.length - 1];
          BB && (this.geometries[IB] = BB, this._geometriesByUniqueId && (this._geometriesByUniqueId[BB.uniqueId] = IB))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[BB.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(BB), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(BB) {
        for (let IB = 0; IB < this.meshes.length; IB++)
          if (this.meshes[IB].id === BB) return this.meshes[IB];
        return null
      }
      getMeshesById(BB) {
        return this.meshes.filter((function(IB) {
          return IB.id === BB
        }))
      }
      getTransformNodeById(BB) {
        for (let IB = 0; IB < this.transformNodes.length; IB++)
          if (this.transformNodes[IB].id === BB) return this.transformNodes[IB];
        return null
      }
      getTransformNodeByUniqueId(BB) {
        for (let IB = 0; IB < this.transformNodes.length; IB++)
          if (this.transformNodes[IB].uniqueId === BB) return this.transformNodes[IB];
        return null
      }
      getTransformNodesById(BB) {
        return this.transformNodes.filter((function(IB) {
          return IB.id === BB
        }))
      }
      getMeshByUniqueId(BB) {
        for (let IB = 0; IB < this.meshes.length; IB++)
          if (this.meshes[IB].uniqueId === BB) return this.meshes[IB];
        return null
      }
      getLastMeshById(BB) {
        for (let IB = this.meshes.length - 1; IB >= 0; IB--)
          if (this.meshes[IB].id === BB) return this.meshes[IB];
        return null
      }
      getLastTransformNodeById(BB) {
        for (let IB = this.transformNodes.length - 1; IB >= 0; IB--)
          if (this.transformNodes[IB].id === BB) return this.transformNodes[IB];
        return null
      }
      getLastEntryById(BB) {
        let IB;
        for (IB = this.meshes.length - 1; IB >= 0; IB--)
          if (this.meshes[IB].id === BB) return this.meshes[IB];
        for (IB = this.transformNodes.length - 1; IB >= 0; IB--)
          if (this.transformNodes[IB].id === BB) return this.transformNodes[IB];
        for (IB = this.cameras.length - 1; IB >= 0; IB--)
          if (this.cameras[IB].id === BB) return this.cameras[IB];
        for (IB = this.lights.length - 1; IB >= 0; IB--)
          if (this.lights[IB].id === BB) return this.lights[IB];
        for (IB = this.skeletons.length - 1; IB >= 0; IB--) {
          const ZB = this.skeletons[IB];
          for (let IB = ZB.bones.length - 1; IB >= 0; IB--)
            if (ZB.bones[IB].id === BB) return ZB.bones[IB]
        }
        return null
      }
      getNodeById(BB) {
        const IB = this.getMeshById(BB);
        if (IB) return IB;
        const ZB = this.getTransformNodeById(BB);
        if (ZB) return ZB;
        const TB = this.getLightById(BB);
        if (TB) return TB;
        const JB = this.getCameraById(BB);
        if (JB) return JB;
        const oB = this.getBoneById(BB);
        return oB || null
      }
      getNodeByName(BB) {
        const IB = this.getMeshByName(BB);
        if (IB) return IB;
        const ZB = this.getTransformNodeByName(BB);
        if (ZB) return ZB;
        const TB = this.getLightByName(BB);
        if (TB) return TB;
        const JB = this.getCameraByName(BB);
        if (JB) return JB;
        const oB = this.getBoneByName(BB);
        return oB || null
      }
      getMeshByName(BB) {
        for (let IB = 0; IB < this.meshes.length; IB++)
          if (this.meshes[IB].name === BB) return this.meshes[IB];
        return null
      }
      getTransformNodeByName(BB) {
        for (let IB = 0; IB < this.transformNodes.length; IB++)
          if (this.transformNodes[IB].name === BB) return this.transformNodes[IB];
        return null
      }
      getLastSkeletonById(BB) {
        for (let IB = this.skeletons.length - 1; IB >= 0; IB--)
          if (this.skeletons[IB].id === BB) return this.skeletons[IB];
        return null
      }
      getSkeletonByUniqueId(BB) {
        for (let IB = 0; IB < this.skeletons.length; IB++)
          if (this.skeletons[IB].uniqueId === BB) return this.skeletons[IB];
        return null
      }
      getSkeletonById(BB) {
        for (let IB = 0; IB < this.skeletons.length; IB++)
          if (this.skeletons[IB].id === BB) return this.skeletons[IB];
        return null
      }
      getSkeletonByName(BB) {
        for (let IB = 0; IB < this.skeletons.length; IB++)
          if (this.skeletons[IB].name === BB) return this.skeletons[IB];
        return null
      }
      getMorphTargetManagerById(BB) {
        for (let IB = 0; IB < this.morphTargetManagers.length; IB++)
          if (this.morphTargetManagers[IB].uniqueId === BB) return this.morphTargetManagers[IB];
        return null
      }
      getMorphTargetById(BB) {
        for (let IB = 0; IB < this.morphTargetManagers.length; ++IB) {
          const ZB = this.morphTargetManagers[IB];
          for (let IB = 0; IB < ZB.numTargets; ++IB) {
            const TB = ZB.getTarget(IB);
            if (TB.id === BB) return TB
          }
        }
        return null
      }
      getMorphTargetByName(BB) {
        for (let IB = 0; IB < this.morphTargetManagers.length; ++IB) {
          const ZB = this.morphTargetManagers[IB];
          for (let IB = 0; IB < ZB.numTargets; ++IB) {
            const TB = ZB.getTarget(IB);
            if (TB.name === BB) return TB
          }
        }
        return null
      }
      getPostProcessByName(BB) {
        for (let IB = 0; IB < this.postProcesses.length; ++IB) {
          const ZB = this.postProcesses[IB];
          if (ZB.name === BB) return ZB
        }
        return null
      }
      isActiveMesh(BB) {
        return -1 !== this._activeMeshes.indexOf(BB)
      }
      get uid() {
        return this._uid || (this._uid = TB.j.RandomId()), this._uid
      }
      addExternalData(BB, IB) {
        return this._externalData || (this._externalData = new kB), this._externalData.add(BB, IB)
      }
      getExternalData(BB) {
        return this._externalData ? this._externalData.get(BB) : null
      }
      getOrAddExternalDataWithFactory(BB, IB) {
        return this._externalData || (this._externalData = new kB), this._externalData.getOrAddWithFactory(BB, IB)
      }
      removeExternalData(BB) {
        return this._externalData.remove(BB)
      }
      _evaluateSubMesh(BB, IB, ZB, TB) {
        if (TB || BB.isInFrustum(this._frustumPlanes)) {
          for (let TB = 0, JB = this._evaluateSubMeshStage; TB < JB.length; TB++) {
            JB[TB].action(IB, BB)
          }
          const ZB = BB.LN();
          null !== ZB && void 0 !== ZB && (ZB.hasRenderTargetTextures && null != ZB.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(ZB) && (this._processedMaterials.push(ZB), this._materialsRenderTargets.concatWithNoDuplicate(ZB.getRenderTargetTextures())), this._renderingManager.dispatch(BB, IB, ZB))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(BB) {
        this._preventFreeActiveMeshesAndRenderingGroups !== BB && (BB && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = BB)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let BB = 0; BB < this.activeCameras.length; BB++) {
            const IB = this.activeCameras[BB];
            IB && IB._activeMeshes && IB._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let BB = 0; BB < this.textures.length; BB++) {
            const IB = this.textures[BB];
            IB && IB.renderList && IB.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          IB = arguments.length > 1 ? arguments[1] : void 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0,
          TB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          oB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const GB = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const BB of GB) BB.objectRenderer._freezeActiveMeshes(TB);
          return this._freezeActiveMeshesCancel = (0, JB.f)((() => {
            let BB = !0,
              IB = !0;
            for (const ZB of GB) BB && (BB = ZB.objectRenderer._isFrozen), IB && (IB = null !== ZB.objectRenderer._freezeActiveMeshesCancel);
            if (BB) return !0;
            if (!IB) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = oB, this._skipEvaluateActiveMeshesCompletely = BB, IB?.()
          }), ((BB, IB) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), IB) {
              const IB = "Scene: Timeout while waiting for meshes to be frozen.";
              ZB ? ZB(IB) : (BZ.d.Error(IB), BB && BZ.d.Error(BB))
            } else {
              const IB = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              ZB ? ZB(IB) : (BZ.d.Error(IB), BB && (BZ.d.Error(BB), BB.stack && BZ.d.Error(BB.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = oB, this._skipEvaluateActiveMeshesCompletely = BB, TB)
              for (let BB = 0; BB < this._activeMeshes.length; BB++) this._activeMeshes.data[BB]._freeze();
            IB && IB()
          } else ZB && ZB("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let BB = 0; BB < this.meshes.length; BB++) {
          const IB = this.meshes[BB];
          IB._internalAbstractMeshDataInfo && (IB._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const BB = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const IB of BB) IB.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let BB = 0; BB < this._activeMeshes.length; BB++) this._activeMeshes.data[BB]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(BB) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => BB.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const BB = this._activeMeshes.length;
            for (let IB = 0; IB < BB; IB++) {
              this._activeMeshes.data[IB].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const BB = this._activeParticleSystems.length;
            for (let IB = 0; IB < BB; IB++) this._activeParticleSystems.data[IB].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let JB = 0, oB = this._beforeEvaluateActiveMeshStage; JB < oB.length; JB++) {
          oB[JB].action()
        }
        const BB = this.getActiveMeshCandidates(),
          IB = BB.length,
          ZB = AB.c.Enabled,
          TB = this.customLODSelector;
        for (let JB = 0; JB < IB; JB++) {
          const IB = BB.data[JB],
            oB = !TB && !IB.vR && !IB._internalMeshDataInfo?._LODLevels.length;
          let GB, vB;
          if ((oB || (GB = IB._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), GB ? GB[1] = -1 : (GB = [IB, -1], IB._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, GB))), !IB.isBlocked) && (ZB && this._totalVertices.addCount(IB.getTotalVertices(), !1), IB.isReady() && IB.isEnabled() && !IB.ek.hasAZeroComponent)) {
            if (IB.computeWorldMatrix(), IB.actionManager && IB.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(IB), oB) vB = IB;
            else if (vB = TB ? TB(IB, this.activeCamera) : IB.getLOD(this.activeCamera), GB[0] = vB, GB[1] = this._frameId, void 0 === vB || null === vB) continue;
            if (vB !== IB && 0 !== vB.billboardMode && vB.computeWorldMatrix(), IB._preActivate(), IB.isVisible && IB.visibility > 0 && 0 !== (IB.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || IB.RN || IB.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(IB), this.activeCamera._activeMeshes.push(IB), vB !== IB && vB._activate(this._renderId, !1);
              for (let BB = 0, ZB = this._preActiveMeshStage; BB < ZB.length; BB++) {
                ZB[BB].action(IB)
              }
              IB._activate(this._renderId, !1) && (IB.vR ? IB._internalAbstractMeshDataInfo._actAsRegularMesh && (vB = IB) : vB._internalAbstractMeshDataInfo._onlyForInstances = !1, vB._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(IB, vB)), IB._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let BB = 0; BB < this.DW.length; BB++) {
            const IB = this.DW[BB];
            if (!IB.isStarted() || !IB.emitter) continue;
            const ZB = IB.emitter;
            ZB.position && !ZB.isEnabled() || (this._activeParticleSystems.push(IB), IB.animate(), this._renderingManager.dispatchParticles(IB))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(BB) {
        this._skeletonsEnabled && BB.skeleton && (this._activeSkeletons.pushNoDuplicate(BB.skeleton) && (BB.skeleton.prepare(), this._activeBones.addCount(BB.skeleton.bones.length, !1)), BB.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(BB) && this.frameGraph && BB.applySkeleton(BB.skeleton))
      }
      _activeMesh(BB, IB) {
        this._prepareSkeleton(IB);
        let ZB = BB.sJB || BB.vR || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || IB.RN;
        if (IB && IB.EW && IB.EW.length > 0) {
          const TB = this.getActiveSubMeshCandidates(IB),
            JB = TB.length;
          ZB = ZB || 1 === JB;
          for (let oB = 0; oB < JB; oB++) {
            const JB = TB.data[oB];
            this._evaluateSubMesh(JB, IB, BB, ZB)
          }
        }
      }
      updateTransformMatrix(BB) {
        const IB = this.activeCamera;
        if (IB)
          if (IB._renderingMultiview) {
            const ZB = IB._rigCameras[0],
              TB = IB._rigCameras[1];
            this.setTransformMatrix(ZB.getViewMatrix(), ZB.getProjectionMatrix(BB), TB.getViewMatrix(), TB.getProjectionMatrix(BB))
          } else this.setTransformMatrix(IB.getViewMatrix(), IB.getProjectionMatrix(BB))
      }
      _bindFrameBuffer(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (BB && BB._multiviewTexture ? BB._multiviewTexture._bindFrameBuffer() : BB && BB.outputRenderTarget ? BB.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), IB && this._clearFrameBuffer(BB)
      }
      _clearFrameBuffer(BB) {
        if (BB && BB._multiviewTexture);
        else if (BB && BB.outputRenderTarget && !BB._renderingMultiview) {
          const IB = BB.outputRenderTarget;
          IB.onClearObservable.hasObservers() ? IB.onClearObservable.notifyObservers(this._engine) : IB.skipInitialClear || BB.isRightCamera || (this.autoClear && this._engine.clear(IB.clearColor || this._clearColor, !IB._cleared, !0, !0), IB._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(BB, IB) {
        let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (BB && BB._skipRendering) return;
        const JB = this._engine;
        if (this._activeCamera = BB, !this.activeCamera) throw new Error("Active camera not set");
        if (JB.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && ZB) {
          let IB = !0;
          BB._renderingMultiview && BB.outputRenderTarget && (IB = BB.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, BB.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), BB._renderingMultiview && BB.outputRenderTarget && (BB.outputRenderTarget.skipInitialClear = IB)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = BB.outputRenderTarget?.renderPassId ?? BB.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let TB = 0; TB < this._softwareSkinnedMeshes.length; TB++) {
          const BB = this._softwareSkinnedMeshes.data[TB];
          BB.applySkeleton(BB.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), BB.customRenderTargets && BB.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(BB.customRenderTargets), IB && IB.customRenderTargets && IB.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(IB.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let TB = 0, vB = this._gatherActiveCameraRenderTargetsStage; TB < vB.length; TB++) {
          vB[TB].action(this._renderTargets)
        }
        let oB = !1;
        if (this.renderTargetsEnabled) {
          let BB;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            TB.j.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const IB = this.getBoundingBoxRenderer?.();
            for (let ZB = 0; ZB < this._renderTargets.length; ZB++) {
              const TB = this._renderTargets.data[ZB];
              if (TB._shouldRender()) {
                this._renderId++;
                const ZB = TB.activeCamera && TB.activeCamera !== this.activeCamera;
                IB && !BB && (BB = IB.renderList.length > 0 ? IB.renderList.data.slice() : [], BB.length = IB.renderList.length), TB.render(ZB, this.dumpNextRenderTargets), oB = !0
              }
            }
            IB && BB && (IB.renderList.data = BB, IB.renderList.length = BB.length), TB.j.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const IB = this.getBoundingBoxRenderer?.();
            IB && !BB && (BB = IB.renderList.length > 0 ? IB.renderList.data.slice() : [], BB.length = IB.renderList.length);
            for (let BB = 0, ZB = this._cameraDrawRenderTargetStage; BB < ZB.length; BB++) {
              oB = ZB[BB].action(this.activeCamera) || oB
            }
            IB && BB && (IB.renderList.data = BB, IB.renderList.length = BB.length)
          }
          this._intermediateRendering = !1
        }
        oB && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || BB._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let TB = 0, vB = this._beforeCameraDrawStage; TB < vB.length; TB++) {
          vB[TB].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const GB = JB.snapshotRendering && 1 === JB.snapshotRenderingMode;
        GB && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !GB), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let TB = 0, vB = this._afterCameraDrawStage; TB < vB.length; TB++) {
          vB[TB].action(this.activeCamera)
        }
        if (this.postProcessManager && !BB._multiviewTexture) {
          const IB = BB.outputRenderTarget ? BB.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(BB.isIntermediate, IB)
        }
        for (let TB = 0, vB = this._afterCameraPostProcessStage; TB < vB.length; TB++) {
          vB[TB].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === BB.cameraRigMode || BB._renderingMultiview) return BB._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(BB, void 0, IB), void this.onAfterRenderCameraObservable.notifyObservers(BB);
        if (BB._useMultiviewToSingleView) this._renderMultiviewToSingleView(BB);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(BB);
          for (let IB = 0; IB < BB._rigCameras.length; IB++) this._renderForCamera(BB._rigCameras[IB], BB)
        }
        this._activeCamera = BB, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(BB)
      }
      _checkIntersections() {
        for (let BB = 0; BB < this._meshesForIntersections.length; BB++) {
          const IB = this._meshesForIntersections.data[BB];
          if (IB.actionManager)
            for (let BB = 0; IB.actionManager && BB < IB.actionManager.actions.length; BB++) {
              const ZB = IB.actionManager.actions[BB];
              if (12 === ZB.trigger || 13 === ZB.trigger) {
                const BB = ZB.getTriggerParameter(),
                  TB = BB.mesh ? BB.mesh : BB,
                  JB = TB.yJB(IB, BB.usePreciseIntersection),
                  oB = IB._intersectionsInProgress.indexOf(TB);
                JB && -1 === oB ? 12 === ZB.trigger ? (ZB._executeCurrent(NB.CreateNew(IB, void 0, TB)), IB._intersectionsInProgress.push(TB)) : 13 === ZB.trigger && IB._intersectionsInProgress.push(TB) : !JB && oB > -1 && (13 === ZB.trigger && ZB._executeCurrent(NB.CreateNew(IB, void 0, TB)), IB.actionManager.hasSpecificTrigger(13, (BB => {
                  const IB = BB.mesh ? BB.mesh : BB;
                  return TB === IB
                })) && 13 !== ZB.trigger || IB._intersectionsInProgress.splice(oB, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(BB) {}
      _animate(BB) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let BB = Math.max(oZ.MinDeltaTime, Math.min(this._engine.getDeltaTime(), oZ.MaxDeltaTime)) + this._timeAccumulator;
          const IB = this._engine.getTimeStep(),
            ZB = 1e3 / IB / 1e3;
          let TB = 0;
          const JB = this._engine.getLockstepMaxSteps();
          let oB = Math.floor(BB / IB);
          for (oB = Math.min(oB, JB); BB > 0 && TB < oB;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = IB * ZB, this._animate(IB), this.onAfterAnimationsObservable.notifyObservers(this), this.Gl && this._advancePhysicsEngineStep(IB), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, TB++, BB -= IB;
          this._timeAccumulator = BB < 0 ? 0 : BB
        } else {
          const BB = this.useConstantAnimationDeltaTime ? 16 : Math.max(oZ.MinDeltaTime, Math.min(this._engine.getDeltaTime(), oZ.MaxDeltaTime));
          this._animationRatio = .06 * BB, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.Gl && this._advancePhysicsEngineStep(BB)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(BB) {
        if (BB?.outputRenderTarget && !BB?.isRigCamera && (BB.outputRenderTarget._cleared = !1), BB?.rigCameras?.length)
          for (let IB = 0; IB < BB.rigCameras.length; ++IB) {
            const ZB = BB.rigCameras[IB].outputRenderTarget;
            ZB && (ZB._cleared = !1)
          }
      }
      resetDrawCache(BB) {
        if (this.meshes)
          for (const IB of this.meshes) IB.resetDrawCache(BB)
      }
      _renderWithFrameGraph() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          IB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, BB)
          for (const ZB of this.cameras)
            if (ZB.update(), 0 !== ZB.cameraRigMode)
              for (let BB = 0; BB < ZB._rigCameras.length; BB++) ZB._rigCameras[BB].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(IB)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(BB) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const IB = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), TB.j.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let BB = 0; BB < this._renderTargets.length; BB++) {
            const ZB = this._renderTargets.data[BB],
              TB = ZB.activeCamera || IB;
            this._renderRenderTarget(ZB, TB, !0, this.dumpNextRenderTargets)
          }
          TB.j.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let ZB = 0, TB = this._beforeClearStage; ZB < TB.length; ZB++) {
          TB[ZB].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const IB = this.getActiveMeshCandidates(),
            ZB = IB.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let BB = 0; BB < ZB; BB++) {
                const ZB = IB.data[BB];
                ZB._internalAbstractMeshDataInfo._wasActiveLastFrame && ZB.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const BB = this._activeParticleSystems.length;
              for (let IB = 0; IB < BB; IB++) this._activeParticleSystems.data[IB].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let TB = 0; TB < ZB; TB++) {
              const ZB = IB.data[TB];
              ZB._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, ZB.isBlocked || (this._totalVertices.addCount(ZB.getTotalVertices(), !1), ZB.isReady() && ZB.isEnabled() && !ZB.ek.hasAZeroComponent && (ZB.computeWorldMatrix(BB), ZB.actionManager && ZB.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(ZB)))
            }
            if (this.particlesEnabled)
              for (let BB = 0; BB < this.DW.length; BB++) {
                const IB = this.DW[BB];
                if (!IB.isStarted() || !IB.emitter) continue;
                const ZB = IB.emitter;
                ZB.position && !ZB.isEnabled() || (this._activeParticleSystems.push(IB), IB.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, BB._shouldRender()) {
          if (this._renderId++, this.activeCamera = IB, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), BB.render(ZB, TB)
        }
        this._intermediateRendering = !1
      }
      render() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.mC) return;
        const ZB = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(BB, IB)
        } finally {
          this._renderingMeshEvaluationDepth = ZB
        }
      }
      _renderFrame(BB, IB) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), qB.c.JR = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const ZB of this.activeCameras) this._checkCameraRenderTarget(ZB);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), IB || this.animate();
        for (let ZB = 0, TB = this._beforeCameraUpdateStage; ZB < TB.length; ZB++) {
          TB[ZB].action()
        }
        if (BB)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let ZB = 0; ZB < this.activeCameras.length; ZB++) {
              const BB = this.activeCameras[ZB];
              if (BB.update(), 0 !== BB.cameraRigMode)
                for (let IB = 0; IB < BB._rigCameras.length; IB++) BB._rigCameras[IB].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let ZB = 0; ZB < this.activeCamera._rigCameras.length; ZB++) this.activeCamera._rigCameras[ZB].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(BB, IB);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const BB = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            TB.j.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let IB = 0; IB < this.customRenderTargets.length; IB++) {
              const ZB = this.customRenderTargets[IB],
                TB = ZB.activeCamera || this.activeCamera;
              this._renderRenderTarget(ZB, TB, BB !== TB, this.dumpNextRenderTargets)
            }
            TB.j.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = BB?.renderPassId ?? 0, this.activeCamera = BB, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let IB = 0, ZB = this._beforeClearStage; IB < ZB.length; IB++) {
            ZB[IB].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let IB = 0, ZB = this._gatherRenderTargetsStage; IB < ZB.length; IB++) {
            ZB[IB].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let IB = 0; IB < this.activeCameras.length; IB++) this._processSubCameras(this.activeCameras[IB], IB > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let ZB = 0, TB = this._afterRenderStage; ZB < TB.length; ZB++) {
          TB[ZB].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let BB = 0; BB < this._toBeDisposed.length; BB++) {
            const IB = this._toBeDisposed[BB];
            IB && IB.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let BB = 0; BB < this.materials.length; BB++) this.materials[BB].freeze()
      }
      unfreezeMaterials() {
        for (let BB = 0; BB < this.materials.length; BB++) this.materials[BB].unfreeze()
      }
      dispose() {
        if (this.mC) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, CB.c)(this.stopAllAnimations)) {
          for (const BB of this._activeAnimatables) BB.onAnimationEndObservable.clear(), BB.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const BB = this._activeRequests.slice();
        for (const oB of BB) oB.abort();
        this._activeRequests.length = 0;
        try {
          this.oR.notifyObservers(this)
        } catch (JB) {
          BZ.d.Error("An error occurred while calling onDisposeObservable!", JB)
        }
        this.detachControl();
        const IB = this._engine.getInputElement?.();
        if (IB)
          for (let oB = 0; oB < this.cameras.length; oB++) this.cameras[oB].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (BB => BB.dispose(!0))), this._disposeList(this.transformNodes, (BB => BB.dispose(!0)));
        const ZB = this.cameras;
        this._disposeList(ZB), this._disposeList(this.DW), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let TB = this._engine.scenes.indexOf(this);
        if (TB > -1 && this._engine.scenes.splice(TB, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, qB.j)(), dB.e._LastCreatedScene === this) {
          dB.e._LastCreatedScene = null;
          let BB = dB.e.Instances.length - 1;
          for (; BB >= 0;) {
            const IB = dB.e.Instances[BB];
            if (IB.scenes.length > 0) {
              dB.e._LastCreatedScene = IB.scenes[this._engine.scenes.length - 1];
              break
            }
            BB--
          }
        }
        TB = this._engine._virtualScenes.indexOf(this), TB > -1 && this._engine._virtualScenes.splice(TB, 1), this._engine.wipeCaches(!0), this.oR.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(BB, IB) {
        const ZB = BB.slice(0);
        IB = IB ?? (BB => BB.dispose());
        for (const TB of ZB) IB(TB);
        BB.length = 0
      }
      get mC() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let BB = 0; BB < this.meshes.length; BB++) {
          const IB = this.meshes[BB].geometry;
          IB && IB.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const BB of this.textures) {
          BB._buffer && (BB._buffer = null)
        }
      }
      getWorldExtends(BB) {
        const IB = new nB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          ZB = new nB.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        BB = BB || (() => !0);
        const TB = this.meshes.filter(BB);
        for (const JB of TB) {
          if (JB.computeWorldMatrix(!0), !JB.EW || 0 === JB.EW.length || JB.infiniteDistance) continue;
          const BB = JB.qm(),
            TB = BB.boundingBox.minimumWorld,
            oB = BB.boundingBox.maximumWorld;
          nB.s.CheckExtends(TB, IB, ZB), nB.s.CheckExtends(oB, IB, ZB)
        }
        return IB.x === Number.MAX_VALUE ? {
          min: nB.s.Zero(),
          max: nB.s.Zero()
        } : {
          min: IB,
          max: ZB
        }
      }
      createPickingRay(BB, IB, ZB, TB) {
        throw (0, CB.m)("Ray")
      }
      createPickingRayToRef(BB, IB, ZB, TB, JB) {
        throw (0, CB.m)("Ray")
      }
      createPickingRayInCameraSpace(BB, IB, ZB) {
        throw (0, CB.m)("Ray")
      }
      createPickingRayInCameraSpaceToRef(BB, IB, ZB, TB) {
        throw (0, CB.m)("Ray")
      }
      TF(BB, IB, ZB, TB, JB, oB) {
        const GB = (0, CB.m)("Ray", !0);
        return GB && BZ.d.Warn(GB), new FB.e
      }
      pickWithBoundingInfo(BB, IB, ZB, TB, JB) {
        const oB = (0, CB.m)("Ray", !0);
        return oB && BZ.d.Warn(oB), new FB.e
      }
      pickWithRay(BB, IB, ZB, TB) {
        throw (0, CB.m)("Ray")
      }
      multiPick(BB, IB, ZB, TB, JB) {
        throw (0, CB.m)("Ray")
      }
      multiPickWithRay(BB, IB, ZB) {
        throw (0, CB.m)("Ray")
      }
      setPointerOverMesh(BB, IB, ZB) {
        this._inputManager.setPointerOverMesh(BB, IB, ZB)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const BB of this.geometries) BB._rebuild();
        for (const BB of this.meshes) BB._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const BB of this._components) BB.rebuild();
        for (const BB of this.DW) BB.rebuild();
        if (this.spriteManagers)
          for (const BB of this.spriteManagers) BB.rebuild()
      }
      _rebuildTextures() {
        for (const BB of this.textures) BB._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(BB, IB, ZB) {
        if (void 0 === IB) return BB;
        const TB = [];
        for (const JB in BB) {
          const oB = BB[JB];
          cB.b && cB.b.MatchesQuery(oB, IB) && (!ZB || ZB(oB)) && TB.push(oB)
        }
        return TB
      }
      getMeshesByTags(BB, IB) {
        return this._getByTags(this.meshes, BB, IB)
      }
      getCamerasByTags(BB, IB) {
        return this._getByTags(this.cameras, BB, IB)
      }
      getLightsByTags(BB, IB) {
        return this._getByTags(this.lights, BB, IB)
      }
      getMaterialByTags(BB, IB) {
        return this._getByTags(this.materials, BB, IB).concat(this._getByTags(this.multiMaterials, BB, IB))
      }
      getTransformNodesByTags(BB, IB) {
        return this._getByTags(this.transformNodes, BB, IB)
      }
      setRenderingOrder(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(BB, IB, ZB, TB)
      }
      setRenderingAutoClearDepthStencil(BB, IB) {
        let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          TB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(BB, IB, ZB, TB)
      }
      getAutoClearDepthStencilSetup(BB) {
        return this._renderingManager.getAutoClearDepthStencilSetup(BB)
      }
      _forceBlockMaterialDirtyMechanism(BB) {
        this._blockMaterialDirtyMechanism = BB
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(BB) {
        this._blockMaterialDirtyMechanism !== BB && (this._blockMaterialDirtyMechanism = BB, BB || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(BB, IB) {
        if (!this._blockMaterialDirtyMechanism)
          for (const ZB of this.materials) IB && !IB(ZB) || ZB.GZB(BB)
      }
      _loadFile(BB, IB, ZB, TB, JB, oB, GB) {
        const vB = (0, EB.j)(BB, IB, ZB, TB ? this.offlineProvider : void 0, JB, oB, GB);
        return this._activeRequests.push(vB), vB.onCompleteObservable.add((BB => {
          this._activeRequests.splice(this._activeRequests.indexOf(BB), 1)
        })), vB
      }
      async _loadFileAsync(BB, IB, ZB, TB, JB) {
        return await new Promise(((oB, GB) => {
          this._loadFile(BB, (BB => {
            oB(BB)
          }), IB, ZB, TB, ((BB, IB) => {
            GB(IB)
          }), JB)
        }))
      }
      async _loadDelayedFileAsync(BB, IB, ZB) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const TB = `${BB}|${IB?"binary":"string"}`;
        let JB = this._delayedFileRequests.get(TB);
        if (!JB) {
          JB = IB ? this._loadFileAsync(BB, void 0, ZB, !0) : this._loadFileAsync(BB, void 0, ZB, !1);
          const oB = JB;
          (async () => {
            try {
              await oB
            } catch {}
            this._delayedFileRequests?.delete(TB)
          })(), this._delayedFileRequests.set(TB, JB)
        }
        return await JB
      }
      _requestFile(BB, IB, ZB, TB, JB, oB, GB) {
        const vB = (0, EB.r)(BB, IB, ZB, TB ? this.offlineProvider : void 0, JB, oB, GB);
        return this._activeRequests.push(vB), vB.onCompleteObservable.add((BB => {
          this._activeRequests.splice(this._activeRequests.indexOf(BB), 1)
        })), vB
      }
      async _requestFileAsync(BB, IB, ZB, TB, JB) {
        return await new Promise(((oB, GB) => {
          this._requestFile(BB, (BB => {
            oB(BB)
          }), IB, ZB, TB, (BB => {
            GB(BB)
          }), JB)
        }))
      }
      _readFile(BB, IB, ZB, TB, JB) {
        const oB = (0, EB.m)(BB, IB, ZB, TB, JB);
        return this._activeRequests.push(oB), oB.onCompleteObservable.add((BB => {
          this._activeRequests.splice(this._activeRequests.indexOf(BB), 1)
        })), oB
      }
      async _readFileAsync(BB, IB, ZB) {
        return await new Promise(((TB, JB) => {
          this._readFile(BB, (BB => {
            TB(BB)
          }), IB, ZB, (BB => {
            JB(BB)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, CB.m)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(BB) {
        return this.setActiveCameraById(BB)
      }
      getMaterialByID(BB) {
        return this.getMaterialById(BB)
      }
      getLastMaterialByID(BB) {
        return this.getLastMaterialById(BB)
      }
      getTextureByUniqueID(BB) {
        return this.getTextureByUniqueId(BB)
      }
      getCameraByID(BB) {
        return this.getCameraById(BB)
      }
      getCameraByUniqueID(BB) {
        return this.getCameraByUniqueId(BB)
      }
      getBoneByID(BB) {
        return this.getBoneById(BB)
      }
      getLightByID(BB) {
        return this.getLightById(BB)
      }
      getLightByUniqueID(BB) {
        return this.getLightByUniqueId(BB)
      }
      getParticleSystemByID(BB) {
        return this.getParticleSystemById(BB)
      }
      getGeometryByID(BB) {
        return this.getGeometryById(BB)
      }
      getMeshByID(BB) {
        return this.getMeshById(BB)
      }
      getMeshByUniqueID(BB) {
        return this.getMeshByUniqueId(BB)
      }
      getLastMeshByID(BB) {
        return this.getLastMeshById(BB)
      }
      getMeshesByID(BB) {
        return this.getMeshesById(BB)
      }
      getTransformNodeByID(BB) {
        return this.getTransformNodeById(BB)
      }
      getTransformNodeByUniqueID(BB) {
        return this.getTransformNodeByUniqueId(BB)
      }
      getTransformNodesByID(BB) {
        return this.getTransformNodesById(BB)
      }
      getNodeByID(BB) {
        return this.getNodeById(BB)
      }
      getLastEntryByID(BB) {
        return this.getLastEntryById(BB)
      }
      getLastSkeletonByID(BB) {
        return this.getLastSkeletonById(BB)
      }
    }
    oZ.FOGMODE_NONE = 0, oZ.FOGMODE_EXP = 1, oZ.FOGMODE_EXP2 = 2, oZ.FOGMODE_LINEAR = 3, oZ.MinDeltaTime = 1, oZ.MaxDeltaTime = 1e3, oZ._OriginalDefaultMaterialFactory = oZ.DefaultMaterialFactory;
    let GZ = !1;

    function vZ() {
      GZ || (GZ = !0, (0, IZ.i)("BABYLON.Scene", oZ))
    }(SB = oZ.prototype).sortActiveAnimatables ?? (SB.sortActiveAnimatables = (0, CB.j)("Scene", "sortActiveAnimatables")), (BI = oZ.prototype).beginWeightedAnimation ?? (BI.beginWeightedAnimation = (0, CB.j)("Scene", "beginWeightedAnimation")), (II = oZ.prototype).beginAnimation ?? (II.beginAnimation = (0, CB.j)("Scene", "beginAnimation")), (ZI = oZ.prototype).beginHierarchyAnimation ?? (ZI.beginHierarchyAnimation = (0, CB.j)("Scene", "beginHierarchyAnimation")), (TI = oZ.prototype).beginDirectAnimation ?? (TI.beginDirectAnimation = (0, CB.j)("Scene", "beginDirectAnimation")), (JI = oZ.prototype).beginDirectHierarchyAnimation ?? (JI.beginDirectHierarchyAnimation = (0, CB.j)("Scene", "beginDirectHierarchyAnimation")), (oI = oZ.prototype).getAnimatableByTarget ?? (oI.getAnimatableByTarget = (0, CB.j)("Scene", "getAnimatableByTarget")), (GI = oZ.prototype).getAllAnimatablesByTarget ?? (GI.getAllAnimatablesByTarget = (0, CB.j)("Scene", "getAllAnimatablesByTarget")), (vI = oZ.prototype).stopAllAnimations ?? (vI.stopAllAnimations = (0, CB.j)("Scene", "stopAllAnimations")), (kI = oZ.prototype).getSoundByName ?? (kI.getSoundByName = (0, CB.j)("Scene", "getSoundByName")), (cI = oZ.prototype).createOrUpdateSelectionOctree ?? (cI.createOrUpdateSelectionOctree = (0, CB.j)("Scene", "createOrUpdateSelectionOctree")), (nI = oZ.prototype).createDefaultLight ?? (nI.createDefaultLight = (0, CB.j)("Scene", "createDefaultLight")), (hI = oZ.prototype).createDefaultCamera ?? (hI.createDefaultCamera = (0, CB.j)("Scene", "createDefaultCamera")), (zI = oZ.prototype).createDefaultCameraOrLight ?? (zI.createDefaultCameraOrLight = (0, CB.j)("Scene", "createDefaultCameraOrLight")), (FI = oZ.prototype).createDefaultSkybox ?? (FI.createDefaultSkybox = (0, CB.j)("Scene", "createDefaultSkybox")), (NI = oZ.prototype).createDefaultEnvironment ?? (NI.createDefaultEnvironment = (0, CB.j)("Scene", "createDefaultEnvironment")), (gI = oZ.prototype).createDefaultVRExperience ?? (gI.createDefaultVRExperience = (0, CB.j)("Scene", "createDefaultVRExperience")), (qI = oZ.prototype).createDefaultXRExperienceAsync ?? (qI.createDefaultXRExperienceAsync = (0, CB.j)("Scene", "createDefaultXRExperienceAsync")), (yI = oZ.prototype).getGlowLayerByName ?? (yI.getGlowLayerByName = (0, CB.j)("Scene", "getGlowLayerByName")), (UI = oZ.prototype).getHighlightLayerByName ?? (UI.getHighlightLayerByName = (0, CB.j)("Scene", "getHighlightLayerByName")), (WI = oZ.prototype).getSelectionOutlineLayerByName ?? (WI.getSelectionOutlineLayerByName = (0, CB.j)("Scene", "getSelectionOutlineLayerByName")), (dI = oZ.prototype).removeLensFlareSystem ?? (dI.removeLensFlareSystem = (0, CB.j)("Scene", "removeLensFlareSystem")), (CI = oZ.prototype).addLensFlareSystem ?? (CI.addLensFlareSystem = (0, CB.j)("Scene", "addLensFlareSystem")), (QI = oZ.prototype).getLensFlareSystemByName ?? (QI.getLensFlareSystemByName = (0, CB.j)("Scene", "getLensFlareSystemByName")), (sI = oZ.prototype).getLensFlareSystemByID ?? (sI.getLensFlareSystemByID = (0, CB.j)("Scene", "getLensFlareSystemByID")), (wI = oZ.prototype).getLensFlareSystemById ?? (wI.getLensFlareSystemById = (0, CB.j)("Scene", "getLensFlareSystemById")), (OI = oZ.prototype).getPhysicsEngine ?? (OI.getPhysicsEngine = (0, CB.j)("Scene", "getPhysicsEngine")), (YI = oZ.prototype).enablePhysics ?? (YI.enablePhysics = (0, CB.j)("Scene", "enablePhysics")), (iI = oZ.prototype).disablePhysicsEngine ?? (iI.disablePhysicsEngine = (0, CB.j)("Scene", "disablePhysicsEngine")), (pI = oZ.prototype).isPhysicsEnabled ?? (pI.isPhysicsEnabled = (0, CB.j)("Scene", "isPhysicsEnabled")), (aI = oZ.prototype).deleteCompoundImpostor ?? (aI.deleteCompoundImpostor = (0, CB.j)("Scene", "deleteCompoundImpostor")), (HI = oZ.prototype).removeReflectionProbe ?? (HI.removeReflectionProbe = (0, CB.j)("Scene", "removeReflectionProbe")), (MI = oZ.prototype).addReflectionProbe ?? (MI.addReflectionProbe = (0, CB.j)("Scene", "addReflectionProbe")), (jI = oZ.prototype).getBoundingBoxRenderer ?? (jI.getBoundingBoxRenderer = (0, CB.j)("Scene", "getBoundingBoxRenderer")), (PI = oZ.prototype).enableDepthRenderer ?? (PI.enableDepthRenderer = (0, CB.j)("Scene", "enableDepthRenderer")), (RI = oZ.prototype).disableDepthRenderer ?? (RI.disableDepthRenderer = (0, CB.j)("Scene", "disableDepthRenderer")), (rI = oZ.prototype).enableFluidRenderer ?? (rI.enableFluidRenderer = (0, CB.j)("Scene", "enableFluidRenderer")), (mI = oZ.prototype).disableFluidRenderer ?? (mI.disableFluidRenderer = (0, CB.j)("Scene", "disableFluidRenderer")), (XI = oZ.prototype).enableGeometryBufferRenderer ?? (XI.enableGeometryBufferRenderer = (0, CB.j)("Scene", "enableGeometryBufferRenderer")), (LI = oZ.prototype).disableGeometryBufferRenderer ?? (LI.disableGeometryBufferRenderer = (0, CB.j)("Scene", "disableGeometryBufferRenderer")), (eI = oZ.prototype).enableIblCdfGenerator ?? (eI.enableIblCdfGenerator = (0, CB.j)("Scene", "enableIblCdfGenerator")), (uI = oZ.prototype).disableIblCdfGenerator ?? (uI.disableIblCdfGenerator = (0, CB.j)("Scene", "disableIblCdfGenerator")), (fI = oZ.prototype).getOutlineRenderer ?? (fI.getOutlineRenderer = (0, CB.j)("Scene", "getOutlineRenderer")), (lI = oZ.prototype).enablePrePassRenderer ?? (lI.enablePrePassRenderer = (0, CB.j)("Scene", "enablePrePassRenderer")), (AI = oZ.prototype).disablePrePassRenderer ?? (AI.disablePrePassRenderer = (0, CB.j)("Scene", "disablePrePassRenderer")), (tI = oZ.prototype).enableSubSurfaceForPrePass ?? (tI.enableSubSurfaceForPrePass = (0, CB.j)("Scene", "enableSubSurfaceForPrePass")), (bI = oZ.prototype).disableSubSurfaceForPrePass ?? (bI.disableSubSurfaceForPrePass = (0, CB.j)("Scene", "disableSubSurfaceForPrePass")), (xI = oZ.prototype).pickSprite ?? (xI.pickSprite = (0, CB.j)("Scene", "pickSprite")), (EI = oZ.prototype).pickSpriteWithRay ?? (EI.pickSpriteWithRay = (0, CB.j)("Scene", "pickSpriteWithRay")), (DI = oZ.prototype).multiPickSprite ?? (DI.multiPickSprite = (0, CB.j)("Scene", "multiPickSprite")), (KI = oZ.prototype).multiPickSpriteWithRay ?? (KI.multiPickSpriteWithRay = (0, CB.j)("Scene", "multiPickSpriteWithRay")), (VI = oZ.prototype).setPointerOverSprite ?? (VI.setPointerOverSprite = (0, CB.j)("Scene", "setPointerOverSprite")), (SI = oZ.prototype).getPointerOverSprite ?? (SI.getPointerOverSprite = (0, CB.j)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(oZ.prototype, "mainSoundTrack") || Object.defineProperty(oZ.prototype, "mainSoundTrack", (0, CB.g)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(oZ.prototype, "soundTracks") || Object.defineProperty(oZ.prototype, "soundTracks", (0, CB.g)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(oZ.prototype, "audioEnabled") || Object.defineProperty(oZ.prototype, "audioEnabled", (0, CB.g)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(oZ.prototype, "headphone") || Object.defineProperty(oZ.prototype, "headphone", (0, CB.g)("Scene", "headphone")), Object.getOwnPropertyDescriptor(oZ.prototype, "audioListenerPositionProvider") || Object.defineProperty(oZ.prototype, "audioListenerPositionProvider", (0, CB.g)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(oZ.prototype, "audioListenerRotationProvider") || Object.defineProperty(oZ.prototype, "audioListenerRotationProvider", (0, CB.g)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(oZ.prototype, "audioPositioningRefreshRate") || Object.defineProperty(oZ.prototype, "audioPositioningRefreshRate", (0, CB.g)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(oZ.prototype, "selectionOctree") || Object.defineProperty(oZ.prototype, "selectionOctree", (0, CB.g)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(oZ.prototype, "debugLayer") || Object.defineProperty(oZ.prototype, "debugLayer", (0, CB.g)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(oZ.prototype, "gamepadManager") || Object.defineProperty(oZ.prototype, "gamepadManager", (0, CB.g)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(oZ.prototype, "simplificationQueue") || Object.defineProperty(oZ.prototype, "simplificationQueue", (0, CB.g)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(oZ.prototype, "onBeforePhysicsObservable") || Object.defineProperty(oZ.prototype, "onBeforePhysicsObservable", (0, CB.g)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(oZ.prototype, "onAfterPhysicsObservable") || Object.defineProperty(oZ.prototype, "onAfterPhysicsObservable", (0, CB.g)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(oZ.prototype, "reflectionProbes") || Object.defineProperty(oZ.prototype, "reflectionProbes", (0, CB.g)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(oZ.prototype, "forceShowBoundingBoxes") || Object.defineProperty(oZ.prototype, "forceShowBoundingBoxes", (0, CB.g)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(oZ.prototype, "depthPeelingRenderer") || Object.defineProperty(oZ.prototype, "depthPeelingRenderer", (0, CB.g)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(oZ.prototype, "useOrderIndependentTransparency") || Object.defineProperty(oZ.prototype, "useOrderIndependentTransparency", (0, CB.g)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(oZ.prototype, "fluidRenderer") || Object.defineProperty(oZ.prototype, "fluidRenderer", (0, CB.g)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(oZ.prototype, "geometryBufferRenderer") || Object.defineProperty(oZ.prototype, "geometryBufferRenderer", (0, CB.g)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(oZ.prototype, "iblCdfGenerator") || Object.defineProperty(oZ.prototype, "iblCdfGenerator", (0, CB.g)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(oZ.prototype, "prePassRenderer") || Object.defineProperty(oZ.prototype, "prePassRenderer", (0, CB.g)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(oZ.prototype, "subSurfaceConfiguration") || Object.defineProperty(oZ.prototype, "subSurfaceConfiguration", (0, CB.g)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(oZ.prototype, "spriteManagers") || Object.defineProperty(oZ.prototype, "spriteManagers", (0, CB.g)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(oZ.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(oZ.prototype, "onBeforeSpritesRenderingObservable", (0, CB.g)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(oZ.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(oZ.prototype, "onAfterSpritesRenderingObservable", (0, CB.g)("Scene", "onAfterSpritesRenderingObservable"))
  },
  40215: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB,
      d: () => JB
    });
    class TB {}
    TB.NAME_EFFECTLAYER = "EffectLayer", TB.NAME_LAYER = "Layer", TB.NAME_LENSFLARESYSTEM = "LensFlareSystem", TB.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", TB.NAME_PARTICLESYSTEM = "ParticleSystem", TB.NAME_GAMEPAD = "Gamepad", TB.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", TB.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", TB.NAME_PREPASSRENDERER = "PrePassRenderer", TB.NAME_DEPTHRENDERER = "DepthRenderer", TB.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", TB.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", TB.NAME_SPRITE = "Sprite", TB.NAME_SUBSURFACE = "SubSurface", TB.NAME_OUTLINERENDERER = "Outline", TB.NAME_PROCEDURALTEXTURE = "ProceduralTexture", TB.NAME_SHADOWGENERATOR = "ShadowGenerator", TB.NAME_OCTREE = "uTB", TB.NAME_PHYSICSENGINE = "PhysicsEngine", TB.NAME_AUDIO = "Audio", TB.NAME_FLUIDRENDERER = "FluidRenderer", TB.NAME_IBLCDFGENERATOR = "iblCDFGenerator", TB.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", TB.STEP_ISREADYFORMESH_EFFECTLAYER = 0, TB.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, TB.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, TB.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, TB.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, TB.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, TB.STEP_BEFORECAMERADRAW_PREPASS = 0, TB.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, TB.STEP_BEFORECAMERADRAW_LAYER = 2, TB.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, TB.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, TB.STEP_BEFORERENDERINGMESH_PREPASS = 0, TB.STEP_BEFORERENDERINGMESH_OUTLINE = 1, TB.STEP_AFTERRENDERINGMESH_PREPASS = 0, TB.STEP_AFTERRENDERINGMESH_OUTLINE = 1, TB.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, TB.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, TB.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, TB.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, TB.STEP_BEFORECLEAR_PREPASS = 1, TB.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, TB.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, TB.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, TB.STEP_AFTERCAMERADRAW_PREPASS = 0, TB.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, TB.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, TB.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, TB.STEP_AFTERCAMERADRAW_LAYER = 4, TB.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, TB.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, TB.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, TB.STEP_AFTERRENDER_AUDIO = 0, TB.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, TB.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, TB.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, TB.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, TB.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, TB.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, TB.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, TB.STEP_POINTERMOVE_SPRITE = 0, TB.STEP_POINTERDOWN_SPRITE = 0, TB.STEP_POINTERUP_SPRITE = 0;
    class JB extends Array {
      constructor(BB) {
        super(...BB)
      }
      static Create() {
        return Object.create(JB.prototype)
      }
      registerStep(BB, IB, ZB) {
        let TB, JB = 0;
        for (; JB < this.length; JB++) {
          if (TB = this[JB].index, BB < TB) break
        }
        this.splice(JB, 0, {
          index: BB,
          component: IB,
          action: ZB.bind(IB)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  40061: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB,
      f: () => vB,
      j: () => TB,
      l: () => JB,
      p: () => oB
    });

    function TB(BB, IB, ZB, TB, JB, oB) {
      function GB(BB) {
        if (void 0 !== BB && "function" !== typeof BB) throw new TypeError("Function expected");
        return BB
      }
      for (var vB, kB = TB.kind, cB = "getter" === kB ? "get" : "setter" === kB ? "set" : "value", nB = !IB && BB ? TB.static ? BB : BB.prototype : null, hB = IB || (nB ? Object.getOwnPropertyDescriptor(nB, TB.name) : {}), zB = !1, FB = ZB.length - 1; FB >= 0; FB--) {
        var NB = {};
        for (var gB in TB) NB[gB] = "access" === gB ? {} : TB[gB];
        for (var gB in TB.access) NB.access[gB] = TB.access[gB];
        NB.addInitializer = function(BB) {
          if (zB) throw new TypeError("Cannot add initializers after decoration has completed");
          oB.push(GB(BB || null))
        };
        var qB = (0, ZB[FB])("accessor" === kB ? {
          get: hB.get,
          set: hB.set
        } : hB[cB], NB);
        if ("accessor" === kB) {
          if (void 0 === qB) continue;
          if (null === qB || "object" !== typeof qB) throw new TypeError("Object expected");
          (vB = GB(qB.get)) && (hB.get = vB), (vB = GB(qB.set)) && (hB.set = vB), (vB = GB(qB.init)) && JB.unshift(vB)
        } else(vB = GB(qB)) && ("field" === kB ? JB.unshift(vB) : hB[cB] = vB)
      }
      nB && Object.defineProperty(nB, TB.name, hB), zB = !0
    }

    function JB(BB, IB, ZB) {
      for (var TB = arguments.length > 2, JB = 0; JB < IB.length; JB++) ZB = TB ? IB[JB].call(BB, ZB) : IB[JB].call(BB);
      return TB ? ZB : void 0
    }

    function oB(BB, IB, ZB) {
      return "symbol" === typeof IB && (IB = IB.description ? "[".concat(IB.description, "]") : ""), Object.defineProperty(BB, "name", {
        configurable: !0,
        value: ZB ? "".concat(ZB, " ", IB) : IB
      })
    }
    Object.create;
    Object.create;

    function GB(BB, IB, ZB, TB) {
      if ("a" === ZB && !TB) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof IB ? BB !== IB || !TB : !IB.has(BB)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === ZB ? TB : "a" === ZB ? TB.call(BB) : TB ? TB.value : IB.get(BB)
    }

    function vB(BB, IB, ZB, TB, JB) {
      if ("m" === TB) throw new TypeError("Private method is not writable");
      if ("a" === TB && !JB) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof IB ? BB !== IB || !JB : !IB.has(BB)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === TB ? JB.call(BB, ZB) : JB ? JB.value = ZB : IB.set(BB, ZB), ZB
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);