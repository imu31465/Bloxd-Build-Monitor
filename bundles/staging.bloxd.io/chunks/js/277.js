export const id = 277;
export const ids = [277];
export const modules = {
  41250: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      f: () => JM,
      h: () => QM,
      j: () => nM
    });
    var OM = iM(41026),
      SM = iM(39711),
      jM = iM(41167),
      aM = iM(41072);
    class PM {
      get xG() {
        return this._isDisposed
      }
      constructor(MM, rM, iM) {
        let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          jM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          PM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          nM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          QM = arguments.length > 7 ? arguments[7] : void 0,
          zM = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, aM.c)(), MM && MM.Hk ? this._engine = MM.Hk().ph() : this._engine = MM, this._updatable = iM, this._instanced = PM, this._divisor = QM || 1, this._label = zM, rM instanceof OM.c ? (this._data = null, this._buffer = rM) : (this._data = rM, this._buffer = null), this.byteStride = nM ? SM : SM * Float32Array.BYTES_PER_ELEMENT, jM || this.create()
      }
      createVertexBuffer(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          aM = arguments.length > 6 ? arguments[6] : void 0;
        const PM = jM ? rM : rM * Float32Array.BYTES_PER_ELEMENT,
          QM = OM ? jM ? OM : OM * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new nM(this._engine, this, MM, this._updatable, !0, QM, void 0 === SM ? this._instanced : SM, PM, iM, void 0, void 0, !0, this._divisor || aM)
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
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !MM && this._buffer || (MM = MM || this._data, MM && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, MM), this._data = MM) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(MM, this._label), this._data = MM) : this._buffer = this._engine.createVertexBuffer(MM, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.vL > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.vL, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.vL, void 0, this._label));
          SM.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(MM) {
        this.create(MM)
      }
      updateDirectly(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, MM, OM ? rM : rM * Float32Array.BYTES_PER_ELEMENT, iM ? iM * this.byteStride : void 0), this._data = 0 === rM && void 0 === iM ? MM : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class nM {
      get xG() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(MM) {
        const rM = 0 != MM;
        this._instanceDivisor = MM, rM !== this._instanced && (this._instanced = rM, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const MM = this.getData();
        return MM ? Array.isArray(MM) ? MM.length / (this.byteStride / 4) - this.byteOffset / 4 : (MM.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(MM, rM, iM, OM, SM, aM, LM, mM, HM, hM) {
        let JM, dM = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          yM = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          lM = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          EM = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = MM, "object" === typeof OM && null !== OM ? (JM = OM.updatable ?? !1, SM = OM.postponeInternalCreation, aM = OM.stride, LM = OM.instanced, mM = OM.offset, HM = OM.size, hM = OM.type, dM = OM.normalized ?? !1, yM = OM.useBytes ?? !1, lM = OM.divisor ?? 1, EM = OM.takeBufferOwnership ?? !1, this._label = OM.label) : JM = !!OM, rM instanceof PM ? (this._buffer = rM, this._ownsBuffer = EM) : (this._buffer = new PM(MM, rM, JM, aM, SM, LM, yM, lM, this._label), this._ownsBuffer = !0), this.uniqueId = nM._Counter++, this._kind = iM, void 0 === hM) {
          const MM = this.getData();
          this.type = MM ? zM(MM) : nM.FLOAT
        } else this.type = hM;
        const UM = (0, jM.n)(this.type);
        yM ? (this._size = HM || (aM ? aM / UM : QM(iM)), this.byteStride = aM || this._buffer.byteStride || this._size * UM, this.byteOffset = mM || 0) : (this._size = HM || aM || QM(iM), this.byteStride = aM ? aM * UM : this._buffer.byteStride || this._size * UM, this.byteOffset = (mM || 0) * UM), this.normalized = dM, this._instanced = void 0 !== LM && LM, this._instanceDivisor = LM ? lM : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(MM) {
        switch (MM) {
          case nM.BYTE:
            return 0;
          case nM.UNSIGNED_BYTE:
            return 1;
          case nM.SHORT:
            return 2;
          case nM.UNSIGNED_SHORT:
            return 3;
          case nM.INT:
            return 4;
          case nM.UNSIGNED_INT:
            return 5;
          case nM.FLOAT:
            return 6;
          case nM.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${MM}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (nM._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(MM, rM) {
        const iM = this.getData();
        return iM ? (0, jM.m)(iM, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, MM, rM) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, jM.n)(this.type)
      }
      diM() {
        return this.byteOffset / (0, jM.n)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, jM.n)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(MM) {
        this._buffer.create(MM), this._alignBuffer()
      }
      update(MM) {
        this._buffer.update(MM), this._alignBuffer()
      }
      updateDirectly(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(MM, rM, void 0, iM), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(MM, rM) {
        (0, jM.h)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, MM, this.normalized, ((MM, iM) => {
          for (let OM = 0; OM < this._size; OM++) rM(MM[OM], iM + OM)
        }))
      }
      _alignBuffer() {}
    }

    function QM(MM) {
      switch (MM) {
        case nM.UVKind:
        case nM.UV2Kind:
        case nM.UV3Kind:
        case nM.UV4Kind:
        case nM.UV5Kind:
        case nM.UV6Kind:
          return 2;
        case nM.NormalKind:
        case nM.PositionKind:
          return 3;
        case nM.ColorKind:
        case nM.ColorInstanceKind:
        case nM.MatricesIndicesKind:
        case nM.MatricesIndicesExtraKind:
        case nM.MatricesWeightsKind:
        case nM.MatricesWeightsExtraKind:
        case nM.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + MM + "'")
      }
    }

    function zM(MM) {
      return MM instanceof Int8Array ? nM.BYTE : MM instanceof Uint8Array ? nM.UNSIGNED_BYTE : MM instanceof Int16Array ? nM.SHORT : MM instanceof Uint16Array ? nM.UNSIGNED_SHORT : MM instanceof Int32Array ? nM.INT : MM instanceof Uint32Array ? nM.UNSIGNED_INT : nM.FLOAT
    }

    function LM(MM) {
      return (0, jM.n)(MM)
    }

    function mM(MM, rM, iM, OM, SM, aM, PM, nM) {
      (0, jM.h)(MM, rM, iM, OM, SM, aM, PM, ((MM, rM) => {
        for (let iM = 0; iM < OM; iM++) nM(MM[iM], rM + iM)
      }))
    }

    function HM(MM, rM, iM, OM, SM, aM, PM, nM) {
      return (0, jM.m)(MM, rM, iM, OM, SM, aM, PM, nM)
    }
    nM._Counter = 0, nM.BYTE = 5120, nM.UNSIGNED_BYTE = 5121, nM.SHORT = 5122, nM.UNSIGNED_SHORT = 5123, nM.INT = 5124, nM.UNSIGNED_INT = 5125, nM.FLOAT = 5126, nM.HALF_FLOAT = 5131, nM.PositionKind = "position", nM.NormalKind = "normal", nM.TangentKind = "tangent", nM.UVKind = "uv", nM.UV2Kind = "uv2", nM.UV3Kind = "uv3", nM.UV4Kind = "uv4", nM.UV5Kind = "uv5", nM.UV6Kind = "uv6", nM.ColorKind = "color", nM.ColorInstanceKind = "instanceColor", nM.MatricesIndicesKind = "matricesIndices", nM.MatricesWeightsKind = "matricesWeights", nM.MatricesIndicesExtraKind = "matricesIndicesExtra", nM.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let hM = !1;

    function JM() {
      hM || (hM = !0, nM.DeduceStride = QM, nM.GetDataType = zM, nM.GetTypeByteLength = LM, nM.ForEach = mM, nM.GetFloatData = HM)
    }
  },
  41026: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM
    });
    class OM {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.vL = 0, this.is32Bits = !1, this.uniqueId = OM._Counter++
      }
    }
    OM._Counter = 0
  },
  41242: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM
    });
    var OM = iM(38040),
      SM = iM(41250);
    class jM {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || rM && !this.pickedMesh.isVerticesDataPresent(SM.j.NormalKind)) return null;
        let iM, jM = this.pickedMesh.hOM();
        0 === jM?.length && (jM = null);
        const aM = OM.l.sh[0],
          PM = OM.l.sh[1],
          nM = OM.l.sh[2];
        if (rM) {
          const MM = this.pickedMesh.getVerticesData(SM.j.NormalKind);
          let rM = jM ? OM.q.FromArrayToRef(MM, 3 * jM[3 * this.faceId], aM) : aM.iMM(MM[3 * this.faceId * 3], MM[3 * this.faceId * 3 + 1], MM[3 * this.faceId * 3 + 2]),
            QM = jM ? OM.q.FromArrayToRef(MM, 3 * jM[3 * this.faceId + 1], PM) : PM.iMM(MM[3 * (3 * this.faceId + 1)], MM[3 * (3 * this.faceId + 1) + 1], MM[3 * (3 * this.faceId + 1) + 2]),
            zM = jM ? OM.q.FromArrayToRef(MM, 3 * jM[3 * this.faceId + 2], nM) : nM.iMM(MM[3 * (3 * this.faceId + 2)], MM[3 * (3 * this.faceId + 2) + 1], MM[3 * (3 * this.faceId + 2) + 2]);
          rM = rM.scale(this.bu), QM = QM.scale(this.bv), zM = zM.scale(1 - this.bu - this.bv), iM = new OM.q(rM.x + QM.x + zM.x, rM.y + QM.y + zM.y, rM.z + QM.z + zM.z)
        } else {
          const MM = this.pickedMesh.getVerticesData(SM.j.PositionKind),
            rM = jM ? OM.q.FromArrayToRef(MM, 3 * jM[3 * this.faceId], aM) : aM.iMM(MM[3 * this.faceId * 3], MM[3 * this.faceId * 3 + 1], MM[3 * this.faceId * 3 + 2]),
            QM = jM ? OM.q.FromArrayToRef(MM, 3 * jM[3 * this.faceId + 1], PM) : PM.iMM(MM[3 * (3 * this.faceId + 1)], MM[3 * (3 * this.faceId + 1) + 1], MM[3 * (3 * this.faceId + 1) + 2]),
            zM = jM ? OM.q.FromArrayToRef(MM, 3 * jM[3 * this.faceId + 2], nM) : nM.iMM(MM[3 * (3 * this.faceId + 2)], MM[3 * (3 * this.faceId + 2) + 1], MM[3 * (3 * this.faceId + 2) + 2]),
            LM = rM.subtract(QM),
            mM = zM.subtract(QM);
          iM = OM.q.Cross(LM, mM)
        }
        const QM = (MM, rM) => {
          if (-1 !== this.thinInstanceIndex) {
            const iM = MM._thinInstanceDataStorage.matrixData,
              SM = this.thinInstanceIndex << 4;
            if (iM && iM.length > SM) {
              const MM = OM.l.Matrix[0];
              OM.d.FromArrayToRef(iM, SM, MM), OM.q.TransformNormalToRef(rM, MM, rM)
            }
          }
          let iM = MM.getWorldMatrix();
          MM.nonUniformScaling && (OM.l.Matrix[0].jR(iM), iM = OM.l.Matrix[0], iM.setTranslationFromFloats(0, 0, 0), iM.invert(), iM.transposeToRef(OM.l.Matrix[1]), iM = OM.l.Matrix[1]), OM.q.TransformNormalToRef(rM, iM, rM)
        };
        if (MM && QM(this.pickedMesh, iM), this.ray) {
          const rM = OM.l.sh[0].jR(iM);
          MM || QM(this.pickedMesh, rM), OM.q.Dot(rM, this.ray.direction) > 0 && iM.negateInPlace()
        }
        return iM.normalize(), iM
      }
      getTextureCoordinates() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SM.j.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(MM)) return null;
        const rM = this.pickedMesh.hOM();
        if (!rM) return null;
        const iM = this.pickedMesh.getVerticesData(MM);
        if (!iM) return null;
        let jM = OM.o.FromArray(iM, 2 * rM[3 * this.faceId]),
          aM = OM.o.FromArray(iM, 2 * rM[3 * this.faceId + 1]),
          PM = OM.o.FromArray(iM, 2 * rM[3 * this.faceId + 2]);
        return jM = jM.scale(this.bu), aM = aM.scale(this.bv), PM = PM.scale(1 - this.bu - this.bv), new OM.o(jM.x + aM.x + PM.x, jM.y + aM.y + PM.y)
      }
    }
  },
  41072: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM
    });
    var OM = iM(40949);
    let SM = !1;

    function jM() {
      SM || (SM = !0, OM.ThinEngine.prototype.updateDynamicIndexBuffer = function(MM, rM) {
        let iM;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(MM), iM = MM.is32Bits ? rM instanceof Uint32Array ? rM : new Uint32Array(rM) : rM instanceof Uint16Array ? rM : new Uint16Array(rM), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, iM, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, OM.ThinEngine.prototype.updateDynamicVertexBuffer = function(MM, rM, iM, OM) {
        this.bindArrayBuffer(MM), void 0 === iM && (iM = 0);
        const SM = rM.byteLength || rM.length;
        void 0 === OM || OM >= SM && 0 === iM ? rM instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, iM, new Float32Array(rM)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, iM, rM) : rM instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, iM, new Float32Array(rM).subarray(0, OM / 4)) : (rM = ArrayBuffer.isView(rM) ? new Uint8Array(rM.buffer, rM.byteOffset, OM) : new Uint8Array(rM, 0, OM), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, iM, rM)), this._resetVertexBufferBinding()
      })
    }
  },
  41040: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM
    });
    class OM {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          rM = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = rM, !MM && (MM = rM.createTexture(), !MM)) throw new Error("Unable to create webGL texture");
        this.set(MM)
      }
      setUsage() {}
      set(MM) {
        this._webGLTexture = MM
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(MM) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(MM)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const MM of this._MSAARenderBuffers) this._context.deleteRenderbuffer(MM);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[MM] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  41005: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => lM
    });
    var OM = iM(38068),
      SM = iM(40957),
      jM = iM(38064),
      aM = iM(39711),
      PM = iM(38056),
      nM = iM(41009);
    class QM {
      constructor() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, MM && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(MM) {
        this._zOffset !== MM && (this._zOffset = MM, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(MM) {
        this._zOffsetUnits !== MM && (this._zOffsetUnits = MM, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(MM) {
        this._cullFace !== MM && (this._cullFace = MM, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(MM) {
        this._cull !== MM && (this._cull = MM, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(MM) {
        this._depthFunc !== MM && (this._depthFunc = MM, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(MM) {
        this._depthMask !== MM && (this._depthMask = MM, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(MM) {
        this._depthTest !== MM && (this._depthTest = MM, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(MM) {
        this._frontFace !== MM && (this._frontFace = MM, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(MM) {
        this.isDirty && (this._isCullDirty && (this.cull ? MM.enable(MM.CULL_FACE) : MM.disable(MM.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (MM.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (MM.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? MM.enable(MM.DEPTH_TEST) : MM.disable(MM.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (MM.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (MM.enable(MM.POLYGON_OFFSET_FILL), MM.polygonOffset(this.zOffset, this.zOffsetUnits)) : MM.disable(MM.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (MM.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class zM {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(MM) {
        this._func !== MM && (this._func = MM, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(MM) {
        this._backFunc !== MM && (this._backFunc = MM, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(MM) {
        this._funcRef !== MM && (this._funcRef = MM, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(MM) {
        this._funcMask !== MM && (this._funcMask = MM, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(MM) {
        this._opStencilFail !== MM && (this._opStencilFail = MM, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(MM) {
        this._opDepthFail !== MM && (this._opDepthFail = MM, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(MM) {
        this._opStencilDepthPass !== MM && (this._opStencilDepthPass = MM, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(MM) {
        this._backOpStencilFail !== MM && (this._backOpStencilFail = MM, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(MM) {
        this._backOpDepthFail !== MM && (this._backOpDepthFail = MM, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(MM) {
        this._backOpStencilDepthPass !== MM && (this._backOpStencilDepthPass = MM, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(MM) {
        this._mask !== MM && (this._mask = MM, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(MM) {
        this._enabled !== MM && (this._enabled = MM, this._isStencilTestDirty = !0)
      }
      constructor() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, MM && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(MM) {
        if (!MM) return;
        const rM = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = rM ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = rM ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = rM ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = rM ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = rM ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = rM ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = rM ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = rM ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = rM ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = rM ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = rM ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = rM ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? MM.enable(MM.STENCIL_TEST) : MM.disable(MM.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (MM.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (MM.stencilFuncSeparate(MM.FRONT, this.func, this.funcRef, this.funcMask), MM.stencilFuncSeparate(MM.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (MM.stencilOpSeparate(MM.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), MM.stencilOpSeparate(MM.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class LM {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = LM.ALWAYS, this.opStencilFail = LM.KEEP, this.opDepthFail = LM.KEEP, this.opStencilDepthPass = LM.REPLACE, this.backFunc = LM.ALWAYS, this.backOpStencilFail = LM.KEEP, this.backOpDepthFail = LM.KEEP, this.backOpStencilDepthPass = LM.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(MM) {
        this.func = MM
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(MM) {
        this.backFunc = MM
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(MM) {
        this.funcRef = MM
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(MM) {
        this.funcMask = MM
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(MM) {
        this.opStencilFail = MM
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(MM) {
        this.opDepthFail = MM
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(MM) {
        this.opStencilDepthPass = MM
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(MM) {
        this.backOpStencilFail = MM
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(MM) {
        this.backOpDepthFail = MM
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(MM) {
        this.backOpStencilDepthPass = MM
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(MM) {
        this.mask = MM
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(MM) {
        this.enabled = MM
      }
    }
    LM.ALWAYS = 519, LM.KEEP = 7680, LM.REPLACE = 7681;
    var mM = iM(41012),
      HM = iM(40990),
      hM = iM(40939),
      JM = iM(40972),
      dM = iM(40981);

    function yM(MM, rM) {
      if (rM) {
        const {
          requestAnimationFrame: iM
        } = rM;
        if ("function" === typeof iM) return iM(MM)
      }
      if ((0, JM.l)()) {
        const {
          requestAnimationFrame: iM
        } = rM || window;
        if ("function" === typeof iM) return iM(MM)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(MM);
      return setTimeout(MM, 16)
    }
    class lM {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(MM) {
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
      get LOM() {
        return this._useReverseDepthBuffer
      }
      set LOM(MM) {
        MM !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = MM, this._depthCullingState.depthFunc = MM ? 518 : 515)
      }
      setColorWrite(MM) {
        MM !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = MM)
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
      _getGlobalDefines(MM) {
        if (MM) return this.isNDCHalfZRange ? MM.IS_NDC_HALF_ZRANGE = "" : delete MM.IS_NDC_HALF_ZRANGE, this.LOM ? MM.USE_REVERSE_DEPTHBUFFER = "" : delete MM.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? MM.USE_EXACT_SRGB_CONVERSIONS = "" : delete MM.USE_EXACT_SRGB_CONVERSIONS);
        {
          let MM = "";
          return this.isNDCHalfZRange && (MM += "#define IS_NDC_HALF_ZRANGE"), this.LOM && (MM && (MM += "\n"), MM += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (MM && (MM += "\n"), MM += "#define USE_EXACT_SRGB_CONVERSIONS"), MM
        }
      }
      _rebuildInternalTextures() {
        const MM = this._internalTexturesCache.slice();
        for (const rM of MM) rM._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const MM = this._renderTargetWrapperCache.slice();
        for (const rM of MM) rM.textures?.some((MM => 15 === MM.source)) || rM._rebuild()
      }
      _rebuildEffects() {
        for (const MM in this._compiledEffects) {
          const rM = this._compiledEffects[MM];
          rM._pipelineContext = null, rM._prepareEffect()
        }
        SM.c.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        aM.e.Warn(this.name + " context successfully restored."), this.Rh.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(MM) {
        setTimeout((() => {
          this._clearEmptyResources();
          const rM = this._depthCullingState.depthTest,
            iM = this._depthCullingState.depthFunc,
            OM = this._depthCullingState.depthMask,
            SM = this._stencilState.stencilTest;
          MM(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = rM, this._depthCullingState.depthFunc = iM, this._depthCullingState.depthMask = OM, this._stencilState.stencilTest = SM, this._flagContextRestored()
        }), 0)
      }
      get xG() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(MM) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(MM) {}
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
          const MM = new Uint8Array(4),
            rM = [MM, MM, MM, MM, MM, MM];
          this._emptyCubeTexture = this.createRawCubeTexture(rM, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(MM) {
        this._framebufferDimensionsObject = MM
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(MM) {
        if (!MM) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const rM = this._activeRenderLoops.indexOf(MM);
        rM >= 0 && (this._activeRenderLoops.splice(rM, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: MM
            } = this.customAnimationFrameRequester;
            MM && MM(this.customAnimationFrameRequester.Dh), delete this.customAnimationFrameRequester.Dh
          }
        } else if (0 !== this._frameHandler) {
          const MM = this._frameHandler;
          if (this._frameHandler = 0, (0, JM.l)()) {
            const {
              cancelAnimationFrame: rM
            } = this.getHostWindow() || window;
            if ("function" === typeof rM) return rM(MM)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(MM);
          return clearTimeout(MM)
        }
      }
      WU() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      EL() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(MM) {
        this._maxFPS = MM, void 0 !== MM && (this._minFrameTime = MM <= 0 ? Number.MAX_VALUE : 1e3 / MM)
      }
      _isOverFrameTime(MM) {
        if (!MM || void 0 === this._maxFPS) return !1;
        const rM = MM - this._lastFrameTime;
        return this._lastFrameTime = MM, this._renderAccumulator += rM, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(MM) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(MM)) {
          let MM = !0;
          (this.xG || !this.renderEvenInBackground && this._windowIsBackground) && (MM = !1), MM && (this.WU(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.EL())
        }
      }
      _renderLoop(MM) {
        this._processFrame(MM), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let MM = 0; MM < this._activeRenderLoops.length; MM++) {
          (0, this._activeRenderLoops[MM])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(MM, rM) {
        return yM(MM, rM)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.Dh = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.Dh) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(MM) {
        -1 === this._activeRenderLoops.indexOf(MM) && (this._activeRenderLoops.push(MM), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(MM) {
        this._depthCullingState.depthTest = MM
      }
      setZOffset(MM) {
        this._depthCullingState.zOffset = this.LOM ? -MM : MM
      }
      getZOffset() {
        const MM = this._depthCullingState.zOffset;
        return this.LOM ? -MM : MM
      }
      setZOffsetUnits(MM) {
        this._depthCullingState.zOffsetUnits = this.LOM ? -MM : MM
      }
      getZOffsetUnits() {
        const MM = this._depthCullingState.zOffsetUnits;
        return this.LOM ? -MM : MM
      }
      getHostWindow() {
        return (0, JM.l)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(MM) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const MM of this.scenes) MM._rebuildTextures();
        for (const MM of this._virtualScenes) MM._rebuildTextures()
      }
      _releaseRenderTargetWrapper(MM) {
        const rM = this._renderTargetWrapperCache.indexOf(MM); - 1 !== rM && this._renderTargetWrapperCache.splice(rM, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(MM, rM, iM) {
        const OM = rM || this.getRenderWidth(),
          SM = iM || this.getRenderHeight(),
          jM = MM.x || 0,
          aM = MM.y || 0;
        this._cachedViewport = MM, this._viewport(jM * OM, aM * SM, OM * MM.width, SM * MM.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(MM) {
        return new Path2D(MM)
      }
      get description() {
        let MM = this.name + this.version;
        return this._caps.parallelShaderCompile && (MM += " - Parallel shader compilation"), MM
      }
      _createTextureBase(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          PM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          nM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          QM = arguments.length > 7 ? arguments[7] : void 0,
          zM = arguments.length > 8 ? arguments[8] : void 0,
          LM = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          mM = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          HM = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          JM = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          dM = arguments.length > 13 ? arguments[13] : void 0,
          yM = arguments.length > 14 ? arguments[14] : void 0,
          EM = arguments.length > 15 ? arguments[15] : void 0;
        const UM = "data:" === (MM = MM || "").substring(0, 5),
          GM = "blob:" === MM.substring(0, 5),
          CM = UM && -1 !== MM.indexOf(";base64,"),
          eM = mM || new hM.c(this, 1);
        eM !== mM && (eM.label = MM.substring(0, 60));
        const bM = MM;
        !this._transformTextureUrl || CM || mM || LM || (MM = this._transformTextureUrl(MM)), bM !== MM && (eM._originalUrl = bM);
        const wM = MM.lastIndexOf(".");
        let tM = JM || (wM > -1 ? MM.substring(wM).toLowerCase() : "");
        tM.indexOf("?") > -1 && (tM = tM.split("?")[0]);
        const gM = lM.GetCompatibleTextureLoader(tM, dM);
        OM && OM.addPendingData(eM), eM.url = MM, eM.generateMipMaps = !rM, eM.samplingMode = SM, eM.invertY = iM, eM._useSRGBBuffer = this._getUseSRGBBuffer(!!EM, rM), this._doNotHandleContextLost || (eM._buffer = LM);
        let uM = null;
        PM && !mM && (uM = eM.onLoadedObservable.add(PM)), mM || this._internalTexturesCache.push(eM);
        const RM = (iM, mM) => {
          OM && OM.removePendingData(eM), MM === bM ? (uM && eM.onLoadedObservable.remove(uM), jM.c.UseFallbackTexture && MM !== jM.c.FallbackTexture && this._createTextureBase(jM.c.FallbackTexture, rM, eM.invertY, OM, SM, null, nM, QM, zM, LM, eM), iM = (iM || "Unknown error") + (jM.c.UseFallbackTexture ? " - Fallback texture was used" : ""), eM.onErrorObservable.notifyObservers({
            message: iM,
            exception: mM
          }), nM && nM(iM, mM)) : (aM.e.Warn(`Failed to load ${MM}, falling back to ${bM}`), this._createTextureBase(bM, rM, eM.invertY, OM, SM, PM, nM, QM, zM, LM, eM, HM, JM, dM, yM, EM))
        };
        if (gM) {
          const rM = async MM => {
            (await gM).loadData(MM, eM, ((MM, rM, iM, jM, aM, PM) => {
              PM ? RM("TextureLoader failed to load data") : QM(eM, tM, OM, {
                width: MM,
                height: rM
              }, eM.invertY, !iM, jM, (() => (aM(), !1)), SM)
            }), yM)
          };
          if (LM) {
            const MM = async MM => {
              try {
                await rM(MM)
              } catch (iM) {
                RM("Failed to parse texture data", iM)
              }
            };
            LM instanceof ArrayBuffer ? MM(new Uint8Array(LM)) : ArrayBuffer.isView(LM) ? MM(LM) : nM && nM("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(MM, (async MM => {
            try {
              await rM(new Uint8Array(MM))
            } catch (iM) {
              RM("Failed to parse texture data", iM)
            }
          }), void 0, OM ? OM.offlineProvider : void 0, !0, ((MM, rM) => {
            RM("Unable to load " + (MM && MM.responseURL, rM))
          }))
        } else {
          const iM = MM => {
            GM && !this._doNotHandleContextLost && (eM._buffer = MM), QM(eM, tM, OM, MM, eM.invertY, rM, !1, zM, SM)
          };
          !UM || CM ? LM && ("string" === typeof LM.decoding || LM.close) ? iM(LM) : lM._FileToolsLoadImage(MM || "", iM, RM, OM ? OM.offlineProvider : null, dM, eM.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof LM || LM instanceof ArrayBuffer || ArrayBuffer.isView(LM) || LM instanceof Blob ? lM._FileToolsLoadImage(LM, iM, RM, OM ? OM.offlineProvider : null, dM, eM.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : LM && iM(LM)
        }
        return eM
      }
      _rebuildBuffers() {
        for (const MM of this._uniformBuffers) MM._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, JM.g)() ? document : null
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
        for (const MM in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, MM) && (this._boundTexturesCache[MM] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(MM) {
        this._name = MM
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
      setHardwareScalingLevel(MM) {
        this._hardwareScalingLevel = MM, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(MM) {
        this._doNotHandleContextLost = MM
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(MM, rM, iM) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new QM, this._stencilStateComposer = new zM, this._stencilState = new LM, this._alphaState = new mM.e(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new OM.d, this.onCanvasFocusObservable = new OM.d, this.onNewSceneAddedObservable = new OM.d, this.onResizeObservable = new OM.d, this.onCanvasPointerOutObservable = new OM.d, this.onEffectErrorObservable = new OM.d, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new OM.d, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = MM => this._renderLoop(MM), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new OM.d, this.onAfterShaderCompilationObservable = new OM.d, this.onBeginFrameObservable = new OM.d, this.onEndFrameObservable = new OM.d, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new OM.d, this.Rh = new OM.d, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.Rk = new OM.d, this.onReleaseEffectsObservable = new OM.d, jM.c.Instances.push(this), this.startTime = nM.b.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, PM.b.SetMatrixPrecision(!!rM.useLargeWorldRendering || !!rM.useHighPrecisionMatrix), (0, JM.k)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), rM.antialias = MM ?? rM.antialias, rM.deterministicLockstep = rM.deterministicLockstep ?? !1, rM.lockstepMaxSteps = rM.lockstepMaxSteps ?? 4, rM.timeStep = rM.timeStep ?? 1 / 60, rM.stencil = rM.stencil ?? !0, this._audioContext = rM.audioEngineOptions?.audioContext ?? null, this._audioDestination = rM.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = rM.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!rM.doNotHandleContextLost, this._isStencilEnable = !!rM.stencil, this.useExactSrgbConversions = rM.useExactSrgbConversions ?? !1, this.canvasTabIndex = rM.canvasTabIndex ?? this.canvasTabIndex;
        const SM = (0, JM.l)() && window.devicePixelRatio || 1,
          aM = rM.limitDeviceRatio || SM;
        iM = iM || rM.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = iM, this._hardwareScalingLevel = iM ? 1 / Math.min(aM, SM) : 1, this._lastDevicePixelRatio = SM, this._creationOptions = rM
      }
      resize() {
        let MM, rM, iM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const MM = (0, JM.l)() && window.devicePixelRatio || 1,
            rM = this._lastDevicePixelRatio / MM;
          this._lastDevicePixelRatio = MM, this._hardwareScalingLevel *= rM
        }
        if ((0, JM.l)() && (0, JM.g)())
          if (this._renderingCanvas) {
            const iM = this._renderingCanvas.getBoundingClientRect?.();
            MM = this._renderingCanvas.clientWidth || iM?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, rM = this._renderingCanvas.clientHeight || iM?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else MM = window.innerWidth, rM = window.innerHeight;
        else MM = this._renderingCanvas ? this._renderingCanvas.width : 100, rM = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(MM / this._hardwareScalingLevel, rM / this._hardwareScalingLevel, iM)
      }
      setSize(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (MM |= 0, rM |= 0, !iM && this._renderingCanvas.width === MM && this._renderingCanvas.height === rM) return !1;
        if (this._renderingCanvas.width = MM, this._renderingCanvas.height = rM, this.scenes) {
          for (let MM = 0; MM < this.scenes.length; MM++) {
            const rM = this.scenes[MM];
            for (let MM = 0; MM < rM.cameras.length; MM++) {
              rM.cameras[MM]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM, LM) {
        throw (0, HM.n)("engine.rawTexture")
      }
      createRawCubeTexture(MM, rM, iM, OM, SM, jM, aM, PM) {
        throw (0, HM.n)("engine.rawTexture")
      }
      createRawTexture3D(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM) {
        throw (0, HM.n)("engine.rawTexture")
      }
      createRawTexture2DArray(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM, LM) {
        throw (0, HM.n)("engine.rawTexture")
      }
      _sharedInit(MM) {
        this._renderingCanvas = MM
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const MM = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== MM.indexOf("Mobile") || -1 !== MM.indexOf("Mac") && (0, JM.g)() && "ontouchend" in document
        }, this._checkForMobile(), (0, JM.l)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(MM) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(MM, !1)
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
      _createImageBitmapFromSource(MM, rM) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(MM, rM) {
        return createImageBitmap(MM, rM)
      }
      resizeImageBitmap(MM, rM, iM) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(MM) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(MM, rM) {
        if ("undefined" === typeof document) return new OffscreenCanvas(MM, rM);
        const iM = document.createElement("canvas");
        return iM.width = MM, iM.height = rM, iM
      }
      createCanvas(MM, rM) {
        return lM._CreateCanvas(MM, rM)
      }
      static _FileToolsLoadImage(MM, rM, iM, OM, SM, jM, aM) {
        if (!dM.c.loadImage) throw (0, HM.n)("FileTools");
        return dM.c.loadImage(MM, rM, iM, OM, SM, jM, aM)
      }
      _loadFile(MM, rM, iM, OM, SM, jM) {
        const aM = (0, dM.i)(MM, rM, iM, OM, SM, jM);
        return this._activeRequests.push(aM), aM.onCompleteObservable.add((() => {
          const MM = this._activeRequests.indexOf(aM); - 1 !== MM && this._activeRequests.splice(MM, 1)
        })), aM
      }
      static _FileToolsLoadFile(MM, rM, iM, OM, SM, jM) {
        if (dM.c.loadFile) return dM.c.loadFile(MM, rM, iM, OM, SM, jM);
        throw (0, HM.n)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), SM.c.ResetCache();
        for (const rM of this._activeRequests) rM.abort();
        this._boundRenderFunction = null, this.Rk.notifyObservers(this), this.Rk.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, JM.l)() && window.removeEventListener("resize", this._checkForMobile);
        const MM = jM.c.Instances.indexOf(this);
        MM >= 0 && jM.c.Instances.splice(MM, 1), jM.c.Instances.length || (jM.c.OnEnginesDisposedObservable.notifyObservers(this), jM.c.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(MM) {
        throw (0, HM.n)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(MM, rM) {
        for (let iM = 0; iM < jM.c.Instances.length; iM++) {
          const OM = jM.c.Instances[iM];
          for (let iM = 0; iM < OM.scenes.length; iM++) OM.scenes[iM].markAllMaterialsAsDirty(MM, rM)
        }
      }
      static GetCompatibleTextureLoader(MM, rM) {
        return null
      }
    }
    lM._RenderPassIdCounter = 0, lM._RescalePostProcessFactory = null, lM.CollisionsEpsilon = .001, lM.QueueNewFrame = yM
  },
  40964: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    class OM {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.ShadersRepository : OM.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.ShadersStore : OM.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.IncludesShadersStore : OM.IncludesShadersStoreWGSL
      }
    }
    OM.ShadersRepository = "src/Shaders/", OM.ShadersStore = {}, OM.IncludesShadersStore = {}, OM.ShadersRepositoryWGSL = "src/ShadersWGSL/", OM.ShadersStoreWGSL = {}, OM.IncludesShadersStoreWGSL = {}
  },
  40975: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => mM,
      g: () => EM,
      k: () => hM,
      n: () => HM,
      p: () => JM,
      q: () => lM,
      u: () => LM,
      v: () => QM,
      z: () => zM,
      A: () => nM,
      B: () => PM
    });
    class OM {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(MM) {
        MM && this.program && MM(this.program)
      }
      setEngine(MM) {
        this.engine = MM
      }
      _fillEffectInformation(MM, rM, iM, OM, SM, jM, aM, PM) {
        const nM = this.engine;
        if (nM.supportsUniformBuffers)
          for (const zM in rM) MM.bindUniformBlock(zM, rM[zM]);
        let QM;
        for (this.engine.getUniforms(this, iM).forEach(((MM, rM) => {
            OM[iM[rM]] = MM
          })), this._uniforms = OM, QM = 0; QM < SM.length; QM++) {
          null == MM.getUniform(SM[QM]) && (SM.splice(QM, 1), QM--)
        }
        SM.forEach(((MM, rM) => {
          jM[MM] = rM
        }));
        for (const zM of nM.getAttributes(this, aM)) PM.push(zM)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(MM, rM) {
        const iM = this._valueCache[MM],
          OM = rM.updateFlag;
        if (void 0 !== iM && iM === OM) return !1;
        const SM = rM.HOM();
        let jM = this._matrixValueCache[MM];
        if (void 0 !== iM && null !== iM && void 0 !== jM) {
          let rM = !0;
          for (let MM = 15; MM >= 0; MM--)
            if (jM[MM] !== SM[MM]) {
              rM = !1;
              break
            } if (rM) return this._valueCache[MM] = OM, !1
        }
        return void 0 === jM && (jM = this._matrixValueCache[MM] = new Float32Array(16)), jM.set(SM), this._valueCache[MM] = OM, !0
      }
      _cacheFloat2(MM, rM, iM) {
        let OM = this._valueCache[MM];
        if (!OM || 2 !== OM.length) return OM = [rM, iM], this._valueCache[MM] = OM, !0;
        let SM = !1;
        return OM[0] !== rM && (OM[0] = rM, SM = !0), OM[1] !== iM && (OM[1] = iM, SM = !0), SM
      }
      _cacheFloat3(MM, rM, iM, OM) {
        let SM = this._valueCache[MM];
        if (!SM || 3 !== SM.length) return SM = [rM, iM, OM], this._valueCache[MM] = SM, !0;
        let jM = !1;
        return SM[0] !== rM && (SM[0] = rM, jM = !0), SM[1] !== iM && (SM[1] = iM, jM = !0), SM[2] !== OM && (SM[2] = OM, jM = !0), jM
      }
      _cacheFloat4(MM, rM, iM, OM, SM) {
        let jM = this._valueCache[MM];
        if (!jM || 4 !== jM.length) return jM = [rM, iM, OM, SM], this._valueCache[MM] = jM, !0;
        let aM = !1;
        return jM[0] !== rM && (jM[0] = rM, aM = !0), jM[1] !== iM && (jM[1] = iM, aM = !0), jM[2] !== OM && (jM[2] = OM, aM = !0), jM[3] !== SM && (jM[3] = SM, aM = !0), aM
      }
      setInt(MM, rM) {
        const iM = this._valueCache[MM];
        void 0 !== iM && iM === rM || this.engine.setInt(this._uniforms[MM], rM) && (this._valueCache[MM] = rM)
      }
      setInt2(MM, rM, iM) {
        this._cacheFloat2(MM, rM, iM) && (this.engine.setInt2(this._uniforms[MM], rM, iM) || (this._valueCache[MM] = null))
      }
      setInt3(MM, rM, iM, OM) {
        this._cacheFloat3(MM, rM, iM, OM) && (this.engine.setInt3(this._uniforms[MM], rM, iM, OM) || (this._valueCache[MM] = null))
      }
      setInt4(MM, rM, iM, OM, SM) {
        this._cacheFloat4(MM, rM, iM, OM, SM) && (this.engine.setInt4(this._uniforms[MM], rM, iM, OM, SM) || (this._valueCache[MM] = null))
      }
      setIntArray(MM, rM) {
        this._valueCache[MM] = null, this.engine.setIntArray(this._uniforms[MM], rM)
      }
      setIntArray2(MM, rM) {
        this._valueCache[MM] = null, this.engine.setIntArray2(this._uniforms[MM], rM)
      }
      setIntArray3(MM, rM) {
        this._valueCache[MM] = null, this.engine.setIntArray3(this._uniforms[MM], rM)
      }
      setIntArray4(MM, rM) {
        this._valueCache[MM] = null, this.engine.setIntArray4(this._uniforms[MM], rM)
      }
      setUInt(MM, rM) {
        const iM = this._valueCache[MM];
        void 0 !== iM && iM === rM || this.engine.setUInt(this._uniforms[MM], rM) && (this._valueCache[MM] = rM)
      }
      setUInt2(MM, rM, iM) {
        this._cacheFloat2(MM, rM, iM) && (this.engine.setUInt2(this._uniforms[MM], rM, iM) || (this._valueCache[MM] = null))
      }
      setUInt3(MM, rM, iM, OM) {
        this._cacheFloat3(MM, rM, iM, OM) && (this.engine.setUInt3(this._uniforms[MM], rM, iM, OM) || (this._valueCache[MM] = null))
      }
      setUInt4(MM, rM, iM, OM, SM) {
        this._cacheFloat4(MM, rM, iM, OM, SM) && (this.engine.setUInt4(this._uniforms[MM], rM, iM, OM, SM) || (this._valueCache[MM] = null))
      }
      setUIntArray(MM, rM) {
        this._valueCache[MM] = null, this.engine.setUIntArray(this._uniforms[MM], rM)
      }
      setUIntArray2(MM, rM) {
        this._valueCache[MM] = null, this.engine.setUIntArray2(this._uniforms[MM], rM)
      }
      setUIntArray3(MM, rM) {
        this._valueCache[MM] = null, this.engine.setUIntArray3(this._uniforms[MM], rM)
      }
      setUIntArray4(MM, rM) {
        this._valueCache[MM] = null, this.engine.setUIntArray4(this._uniforms[MM], rM)
      }
      setArray(MM, rM) {
        this._valueCache[MM] = null, this.engine.setArray(this._uniforms[MM], rM)
      }
      setArray2(MM, rM) {
        this._valueCache[MM] = null, this.engine.setArray2(this._uniforms[MM], rM)
      }
      setArray3(MM, rM) {
        this._valueCache[MM] = null, this.engine.setArray3(this._uniforms[MM], rM)
      }
      setArray4(MM, rM) {
        this._valueCache[MM] = null, this.engine.setArray4(this._uniforms[MM], rM)
      }
      setMatrices(MM, rM) {
        rM && (this._valueCache[MM] = null, this.engine.setMatrices(this._uniforms[MM], rM))
      }
      setMatrix(MM, rM) {
        this._cacheMatrix(MM, rM) && (this.engine.setMatrices(this._uniforms[MM], rM.HOM()) || (this._valueCache[MM] = null))
      }
      setMatrix3x3(MM, rM) {
        this._valueCache[MM] = null, this.engine.setMatrix3x3(this._uniforms[MM], rM)
      }
      setMatrix2x2(MM, rM) {
        this._valueCache[MM] = null, this.engine.setMatrix2x2(this._uniforms[MM], rM)
      }
      setFloat(MM, rM) {
        const iM = this._valueCache[MM];
        void 0 !== iM && iM === rM || this.engine.setFloat(this._uniforms[MM], rM) && (this._valueCache[MM] = rM)
      }
      setVector2(MM, rM) {
        this._cacheFloat2(MM, rM.x, rM.y) && (this.engine.setFloat2(this._uniforms[MM], rM.x, rM.y) || (this._valueCache[MM] = null))
      }
      setFloat2(MM, rM, iM) {
        this._cacheFloat2(MM, rM, iM) && (this.engine.setFloat2(this._uniforms[MM], rM, iM) || (this._valueCache[MM] = null))
      }
      setVector3(MM, rM) {
        this._cacheFloat3(MM, rM.x, rM.y, rM.z) && (this.engine.setFloat3(this._uniforms[MM], rM.x, rM.y, rM.z) || (this._valueCache[MM] = null))
      }
      setFloat3(MM, rM, iM, OM) {
        this._cacheFloat3(MM, rM, iM, OM) && (this.engine.setFloat3(this._uniforms[MM], rM, iM, OM) || (this._valueCache[MM] = null))
      }
      setVector4(MM, rM) {
        this._cacheFloat4(MM, rM.x, rM.y, rM.z, rM.w) && (this.engine.setFloat4(this._uniforms[MM], rM.x, rM.y, rM.z, rM.w) || (this._valueCache[MM] = null))
      }
      setQuaternion(MM, rM) {
        this._cacheFloat4(MM, rM.x, rM.y, rM.z, rM.w) && (this.engine.setFloat4(this._uniforms[MM], rM.x, rM.y, rM.z, rM.w) || (this._valueCache[MM] = null))
      }
      setFloat4(MM, rM, iM, OM, SM) {
        this._cacheFloat4(MM, rM, iM, OM, SM) && (this.engine.setFloat4(this._uniforms[MM], rM, iM, OM, SM) || (this._valueCache[MM] = null))
      }
      setColor3(MM, rM) {
        this._cacheFloat3(MM, rM.r, rM.g, rM.b) && (this.engine.setFloat3(this._uniforms[MM], rM.r, rM.g, rM.b) || (this._valueCache[MM] = null))
      }
      setColor4(MM, rM, iM) {
        this._cacheFloat4(MM, rM.r, rM.g, rM.b, iM) && (this.engine.setFloat4(this._uniforms[MM], rM.r, rM.g, rM.b, iM) || (this._valueCache[MM] = null))
      }
      setDirectColor4(MM, rM) {
        this._cacheFloat4(MM, rM.r, rM.g, rM.b, rM.a) && (this.engine.setFloat4(this._uniforms[MM], rM.r, rM.g, rM.b, rM.a) || (this._valueCache[MM] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var SM = iM(40981);
    const jM = new WeakMap,
      aM = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function PM(MM) {
      let rM = jM.get(MM);
      if (!rM) {
        if (!MM) return aM;
        rM = {
          _webGLVersion: MM.TEXTURE_BINDING_3D ? 2 : 1,
          _context: MM,
          parallelShaderCompile: MM.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, jM.set(MM, rM)
      }
      return rM
    }

    function nM(MM) {
      jM.delete(MM)
    }

    function QM(MM, rM, iM, OM, SM, jM) {
      const aM = PM(OM);
      jM || (jM = aM._createShaderProgramInjection ?? mM);
      return jM(MM, yM(rM, "vertex", OM, aM._contextWasLost), yM(iM, "fragment", OM, aM._contextWasLost), OM, SM, aM.validateShaderPrograms)
    }

    function zM(MM, rM, iM, OM, SM) {
      let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        aM = arguments.length > 6 ? arguments[6] : void 0;
      const nM = PM(SM);
      aM || (aM = nM._createShaderProgramInjection ?? mM);
      const QM = nM._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return aM(MM, dM(rM, "vertex", OM, QM, SM, nM._contextWasLost), dM(iM, "fragment", OM, QM, SM, nM._contextWasLost), SM, jM, nM.validateShaderPrograms)
    }

    function LM(MM, rM) {
      const iM = new OM,
        SM = PM(MM);
      return SM.parallelShaderCompile && !SM.disableParallelShaderCompile && (iM.isParallelCompiled = !0), iM.context = SM._context, iM
    }

    function mM(MM, rM, iM, OM) {
      let SM = arguments.length > 5 ? arguments[5] : void 0;
      const jM = OM.createProgram();
      if (MM.program = jM, !jM) throw new Error("Unable to create program");
      return OM.attachShader(jM, rM), OM.attachShader(jM, iM), OM.linkProgram(jM), MM.context = OM, MM.vertexShader = rM, MM.fragmentShader = iM, MM.isParallelCompiled || hM(MM, OM, SM), jM
    }

    function HM(MM, rM, iM) {
      const OM = MM;
      if (OM._isDisposed) return !1;
      const SM = PM(rM);
      return !!(SM && SM.parallelShaderCompile && SM.parallelShaderCompile.COMPLETION_STATUS_KHR && OM.program && rM.getProgramParameter(OM.program, SM.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (hM(OM, rM, iM), !0)
    }

    function hM(MM, rM, iM) {
      const OM = MM.context,
        SM = MM.vertexShader,
        jM = MM.fragmentShader,
        aM = MM.program;
      if (!OM.getProgramParameter(aM, OM.LINK_STATUS)) {
        if (!rM.getShaderParameter(SM, rM.COMPILE_STATUS)) {
          const iM = rM.getShaderInfoLog(SM);
          if (iM) throw MM.vertexCompilationError = iM, new Error("VERTEX SHADER " + iM)
        }
        if (!rM.getShaderParameter(jM, rM.COMPILE_STATUS)) {
          const iM = rM.getShaderInfoLog(jM);
          if (iM) throw MM.fragmentCompilationError = iM, new Error("FRAGMENT SHADER " + iM)
        }
        const iM = OM.getProgramInfoLog(aM);
        if (iM) throw MM.programLinkError = iM, new Error(iM)
      }
      if (iM) {
        OM.validateProgram(aM);
        if (!OM.getProgramParameter(aM, OM.VALIDATE_STATUS)) {
          const rM = OM.getProgramInfoLog(aM);
          if (rM) throw MM.programValidationError = rM, new Error(rM)
        }
      }
      OM.deleteShader(SM), OM.deleteShader(jM), MM.vertexShader = void 0, MM.fragmentShader = void 0, MM.onCompiled && (MM.onCompiled(), MM.onCompiled = void 0)
    }

    function JM(MM, rM, iM, OM, SM, jM, aM, nM, LM) {
      let mM = arguments.length > 10 ? arguments[10] : void 0,
        HM = arguments.length > 11 ? arguments[11] : void 0,
        hM = arguments.length > 12 ? arguments[12] : void 0;
      const JM = PM(MM.context);
      HM || (HM = JM.createRawShaderProgramInjection ?? QM), hM || (hM = JM.createShaderProgramInjection ?? zM);
      const dM = MM;
      dM.program = OM ? HM(dM, rM, iM, dM.context, LM) : hM(dM, rM, iM, nM, dM.context, LM), dM.program.__SPECTOR_rebuildProgram = aM, mM()
    }

    function dM(MM, rM, iM, OM, jM, aM) {
      return yM((0, SM.e)(MM, iM, OM), rM, jM, aM)
    }

    function yM(MM, rM, iM, OM) {
      const SM = iM.createShader("vertex" === rM ? iM.VERTEX_SHADER : iM.FRAGMENT_SHADER);
      if (!SM) {
        let MM, SM = iM.NO_ERROR;
        for (;
          (MM = iM.getError()) !== iM.NO_ERROR;) SM = MM;
        throw new Error(`Something went wrong while creating a gl ${rM} shader object. gl error=${SM}, gl isContextLost=${iM.isContextLost()}, _contextWasLost=${OM}`)
      }
      return iM.shaderSource(SM, MM), iM.compileShader(SM), SM
    }

    function lM(MM, rM) {
      rM.useProgram(MM)
    }

    function EM(MM, rM) {
      const iM = MM;
      if (!iM.isParallelCompiled) return void rM(MM);
      const OM = iM.onCompiled;
      iM.onCompiled = () => {
        OM?.(), rM(MM)
      }
    }
  },
  40949: (MM, rM, iM) => {
    iM.d(rM, {
      ThinEngine: () => GM
    });
    var OM = iM(40957),
      SM = iM(40975),
      jM = iM(41005),
      aM = iM(41015),
      PM = iM(39711),
      nM = iM(40972);
    class QM {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(MM, rM, iM, OM, SM) {
        if (SM.drawBuffersExtensionDisabled) {
          const rM = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          MM = MM.replace(rM, "")
        }
        return MM
      }
    }
    const zM = /(flat\s)?\s*varying\s*.*/;
    class LM {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(MM) {
        return MM.replace("attribute", "in")
      }
      varyingCheck(MM, rM) {
        return zM.test(MM)
      }
      varyingProcessor(MM, rM) {
        return MM.replace("varying", rM ? "in" : "out")
      }
      postProcessor(MM, rM, iM) {
        const OM = -1 !== MM.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (MM = (MM = MM.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), iM) {
          const iM = -1 !== MM.search(/layout *\(location *= *0\) *out/g),
            SM = -1 !== rM.indexOf("#define DUAL_SOURCE_BLENDING"),
            jM = SM ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          SM && (MM = "#extension GL_EXT_blend_func_extended : require\n" + MM), MM = (MM = (MM = (MM = (MM = (MM = (MM = MM.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (OM || iM ? "" : jM) + "void main(")
        } else {
          rM.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (MM = "invariant gl_Position;\n" + MM);
          if (-1 !== rM.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + MM
        }
        return MM
      }
    }
    var mM = iM(41023),
      HM = iM(41034),
      hM = iM(41040),
      JM = iM(40939),
      dM = iM(40981),
      yM = iM(40967),
      lM = iM(41042),
      EM = iM(41012);
    class UM {}
    class GM extends jM.d {
      get name() {
        return this._name
      }
      set name(MM) {
        this._name = MM
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return OM.c.ShadersRepository
      }
      static set ShadersRepository(MM) {
        OM.c.ShadersRepository = MM
      }
      get supportsUniformBuffers() {
        return this.PJ > 1 && !this.disableUniformBuffers
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
      constructor(MM, rM, iM, OM) {
        if (iM = iM || {}, super(rM ?? iM.antialias, iM, OM), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !MM) return;
        let jM;
        if (MM.getContext) {
          if (jM = MM, void 0 === iM.preserveDrawingBuffer && (iM.preserveDrawingBuffer = !1), void 0 === iM.xrCompatible && (iM.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const MM = navigator.userAgent;
            for (const rM of GM.ExceptionList) {
              const OM = rM.key,
                SM = rM.targets;
              if (new RegExp(OM).test(MM)) {
                if (rM.capture && rM.captureConstraint) {
                  const iM = rM.capture,
                    OM = rM.captureConstraint,
                    SM = new RegExp(iM).exec(MM);
                  if (SM && SM.length > 0) {
                    if (parseInt(SM[SM.length - 1]) >= OM) continue
                  }
                }
                for (const MM of SM) switch (MM) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    iM.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, SM.A)(this._gl)
            } : (this._onContextLost = MM => {
              MM.preventDefault(), this._contextWasLost = !0, (0, SM.A)(this._gl), PM.e.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, jM.addEventListener("webglcontextrestored", this._onContextRestored, !1), iM.powerPreference = iM.powerPreference || "high-performance"), jM.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (iM.xrCompatible = !1), !iM.disableWebGL2Support) try {
            this._gl = jM.getContext("webgl2", iM) || jM.getContext("experimental-webgl2", iM), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (zM) {}
          if (!this._gl) {
            if (!jM) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = jM.getContext("webgl", iM) || jM.getContext("experimental-webgl", iM)
            } catch (zM) {
              throw new Error("WebGL not supported", {
                cause: zM
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = MM, jM = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const rM = this._gl.getContextAttributes();
          rM && (iM.stencil = rM.stencil)
        }
        this._sharedInit(jM), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== iM.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = iM.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let SM = 0; SM < this._caps.maxVertexAttribs; SM++) this._currentBufferPointers[SM] = new UM;
        this._shaderProcessor = this.PJ > 1 ? new LM : new QM;
        const aM = `Babylon.js v${GM.Version}`;
        PM.e.Log(aM + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", aM);
        const nM = (0, SM.B)(this._gl);
        nM.validateShaderPrograms = this.validateShaderPrograms, nM.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(MM) {
        return null
      }
      areAllEffectsReady() {
        for (const MM in this._compiledEffects) {
          if (!this._compiledEffects[MM].isReady()) return !1
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
        const MM = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != MM && (this._glRenderer = this._gl.getParameter(MM.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(MM.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const rM = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!rM, this._alphaState = new EM.e(this._caps.blendParametersPerTarget), rM && (this._gl.blendEquationSeparateIndexed = rM.blendEquationSeparateiOES.bind(rM), this._gl.blendEquationIndexed = rM.blendEquationiOES.bind(rM), this._gl.blendFuncSeparateIndexed = rM.blendFuncSeparateiOES.bind(rM), this._gl.blendFuncIndexed = rM.blendFunciOES.bind(rM), this._gl.colorMaskIndexed = rM.colorMaskiOES.bind(rM), this._gl.disableIndexed = rM.disableiOES.bind(rM), this._gl.enableIndexed = rM.enableiOES.bind(rM)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const MM = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== MM) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = MM.drawBuffersWEBGL.bind(MM), this._caps.maxDrawBuffers = this._gl.getParameter(MM.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let rM = 0; rM < 16; rM++) this._gl["COLOR_ATTACHMENT" + rM + "_WEBGL"] = MM["COLOR_ATTACHMENT" + rM + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const MM = this._gl.getExtension("WEBGL_depth_texture");
          null != MM && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = MM.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const MM = this._gl.getExtension("OES_vertex_array_object");
          null != MM && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = MM.createVertexArrayOES.bind(MM), this._gl.bindVertexArray = MM.bindVertexArrayOES.bind(MM), this._gl.deleteVertexArray = MM.deleteVertexArrayOES.bind(MM))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const MM = this._gl.getExtension("ANGLE_instanced_arrays");
          null != MM ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = MM.drawArraysInstancedANGLE.bind(MM), this._gl.drawElementsInstanced = MM.drawElementsInstancedANGLE.bind(MM), this._gl.vertexAttribDivisor = MM.vertexAttribDivisorANGLE.bind(MM)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const MM = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            rM = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (MM && rM && (this._caps.highPrecisionShaderSupported = 0 !== MM.precision && 0 !== rM.precision, this._caps.shaderFloatPrecision = Math.min(MM.precision, rM.precision)), !this._shouldUseHighPrecisionShader) {
            const MM = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              rM = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            MM && rM && (this._caps.shaderFloatPrecision = Math.min(MM.precision, rM.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const MM = this._gl.getExtension("EXT_blend_minmax");
          null != MM && (this._caps.blendMinMax = !0, this._gl.MAX = MM.MAX_EXT, this._gl.MIN = MM.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const MM = this._gl.getExtension("EXT_sRGB");
            null != MM && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: MM.SRGB_EXT,
              SRGB8: MM.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: MM.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const MM = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== MM && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && MM)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let iM = 0; iM < this._maxSimultaneousTextures; iM++) this._nextFreeTextureSlots.push(iM);
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
      get PJ() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const MM = this._workingCanvas.getContext("2d");
        MM && (this._workingContext = MM)
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
        const MM = this.getGlInfo();
        return MM && MM.renderer ? MM.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const jM = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = jM;
        let aM = 0;
        if (rM && MM) {
          let rM = !0;
          if (this._currentRenderTarget) {
            const iM = this._currentRenderTarget.texture?.format;
            if (void 0 !== iM && (0, lM.l)(iM)) {
              const iM = this._currentRenderTarget.texture?.type;
              void 0 !== iM && (0, lM.m)(iM) ? (GM._TempClearColorUint32[0] = 255 * MM.r, GM._TempClearColorUint32[1] = 255 * MM.g, GM._TempClearColorUint32[2] = 255 * MM.b, GM._TempClearColorUint32[3] = 255 * MM.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, GM._TempClearColorUint32), rM = !1) : (GM._TempClearColorInt32[0] = 255 * MM.r, GM._TempClearColorInt32[1] = 255 * MM.g, GM._TempClearColorInt32[2] = 255 * MM.b, GM._TempClearColorInt32[3] = 255 * MM.a, this._gl.clearBufferiv(this._gl.COLOR, 0, GM._TempClearColorInt32), rM = !1)
            }
          }
          rM && (this._gl.clearColor(MM.r, MM.g, MM.b, void 0 !== MM.a ? MM.a : 1), aM |= this._gl.COLOR_BUFFER_BIT)
        }
        iM && (this.LOM ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), aM |= this._gl.DEPTH_BUFFER_BIT), OM && (this._gl.clearStencil(SM), aM |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(aM)
      }
      _clearColorAttachment(MM, rM, iM, OM) {
        if ((0, lM.l)(iM)) {
          const iM = (0, lM.m)(OM),
            SM = iM ? GM._TempClearColorUint32 : GM._TempClearColorInt32;
          return SM[0] = rM.r, SM[1] = rM.g, SM[2] = rM.b, SM[3] = rM.a, void(iM ? this._gl.clearBufferuiv(this._gl.COLOR, MM, SM) : this._gl.clearBufferiv(this._gl.COLOR, MM, SM))
        }
        GM._TempClearColorFloat32[0] = rM.r, GM._TempClearColorFloat32[1] = rM.g, GM._TempClearColorFloat32[2] = rM.b, GM._TempClearColorFloat32[3] = rM.a, this._gl.clearBufferfv(this._gl.COLOR, MM, GM._TempClearColorFloat32)
      }
      _viewport(MM, rM, iM, OM) {
        MM === this._viewportCached.x && rM === this._viewportCached.y && iM === this._viewportCached.z && OM === this._viewportCached.w || (this._viewportCached.x = MM, this._viewportCached.y = rM, this._viewportCached.z = iM, this._viewportCached.w = OM, this._gl.viewport(MM, rM, iM, OM))
      }
      EL() {
        super.EL(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 ? arguments[2] : void 0,
          OM = arguments.length > 3 ? arguments[3] : void 0,
          SM = arguments.length > 4 ? arguments[4] : void 0,
          jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          aM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const nM = MM;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = MM, this._integerMRTAttachmentsMask = !MM.isMulti && MM.texture && (0, lM.l)(MM.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(nM._framebuffer);
        const QM = this._gl;
        MM.isMulti || (MM.is2DArray || MM.is3D ? (QM.framebufferTextureLayer(QM.FRAMEBUFFER, QM.COLOR_ATTACHMENT0, MM.texture._hardwareTexture?.underlyingResource, jM, aM), nM._currentLOD = jM) : MM.isCube ? QM.framebufferTexture2D(QM.FRAMEBUFFER, QM.COLOR_ATTACHMENT0, QM.TEXTURE_CUBE_MAP_POSITIVE_X + rM, MM.texture._hardwareTexture?.underlyingResource, jM) : nM._currentLOD !== jM && (QM.framebufferTexture2D(QM.FRAMEBUFFER, QM.COLOR_ATTACHMENT0, QM.TEXTURE_2D, MM.texture._hardwareTexture?.underlyingResource, jM), nM._currentLOD = jM));
        const zM = MM._depthStencilTexture;
        if (zM) {
          MM.is3D && (MM.texture.width === zM.width && MM.texture.height === zM.height && MM.texture.depth === zM.depth || PM.e.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const iM = MM._depthStencilTextureWithStencil ? QM.DEPTH_STENCIL_ATTACHMENT : QM.DEPTH_ATTACHMENT;
          MM.is2DArray || MM.is3D ? QM.framebufferTextureLayer(QM.FRAMEBUFFER, iM, zM._hardwareTexture?.underlyingResource, jM, aM) : MM.isCube ? QM.framebufferTexture2D(QM.FRAMEBUFFER, iM, QM.TEXTURE_CUBE_MAP_POSITIVE_X + rM, zM._hardwareTexture?.underlyingResource, jM) : QM.framebufferTexture2D(QM.FRAMEBUFFER, iM, QM.TEXTURE_2D, zM._hardwareTexture?.underlyingResource, jM)
        }
        nM._MSAAFramebuffer && this._bindUnboundFramebuffer(nM._MSAAFramebuffer), this._cachedViewport && !SM ? this.setViewport(this._cachedViewport, iM, OM) : (iM || (iM = MM.width, jM && (iM /= Math.pow(2, jM))), OM || (OM = MM.height, jM && (OM /= Math.pow(2, jM))), this._viewport(0, 0, iM, OM)), this.wipeCaches()
      }
      setStateCullFaceType(MM, rM) {
        const iM = this.cullBackFaces ?? MM ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== iM || rM) && (this._depthCullingState.cullFace = iM)
      }
      setState(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 ? arguments[2] : void 0,
          OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          SM = arguments.length > 4 ? arguments[4] : void 0,
          jM = arguments.length > 5 ? arguments[5] : void 0,
          aM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== MM || iM) && (this._depthCullingState.cull = MM), this.setStateCullFaceType(SM, iM), this.setZOffset(rM), this.setZOffsetUnits(aM);
        const PM = OM ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== PM || iM) && (this._depthCullingState.frontFace = PM), this._stencilStateComposer.stencilMaterial = jM
      }
      _resolveAndGenerateMipMapsFramebuffer(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        MM.disableAutomaticMSAAResolve || (MM.isMulti ? this.resolveMultiFramebuffer(MM) : this.resolveFramebuffer(MM)), rM || (MM.isMulti ? this.generateMipMapsMultiFramebuffer(MM) : this.generateMipMapsFramebuffer(MM))
      }
      _bindUnboundFramebuffer(MM) {
        this._currentFramebuffer !== MM && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, MM), this._currentFramebuffer = MM)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(MM) {
        const rM = this._getTextureTarget(MM);
        this._bindTextureDirectly(rM, MM, !0), this._gl.generateMipmap(rM), this._bindTextureDirectly(rM, null)
      }
      unBindFramebuffer(MM, rM, iM) {
        const OM = MM;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(MM, rM), iM && (OM._MSAAFramebuffer && this._bindUnboundFramebuffer(OM._framebuffer), iM()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(MM) {
        MM.isMulti || !MM.texture?.generateMipMaps || MM.isCube || this.generateMipmaps(MM.texture)
      }
      resolveFramebuffer(MM) {
        const rM = MM,
          iM = this._gl;
        if (!rM._MSAAFramebuffer || rM.isMulti) return;
        let OM = rM.resolveMSAAColors ? iM.COLOR_BUFFER_BIT : 0;
        OM |= rM._generateDepthBuffer && rM.resolveMSAADepth ? iM.DEPTH_BUFFER_BIT : 0, OM |= rM._generateStencilBuffer && rM.resolveMSAAStencil ? iM.STENCIL_BUFFER_BIT : 0, iM.bindFramebuffer(iM.READ_FRAMEBUFFER, rM._MSAAFramebuffer), iM.bindFramebuffer(iM.DRAW_FRAMEBUFFER, rM._framebuffer), iM.blitFramebuffer(0, 0, MM.width, MM.height, 0, 0, MM.width, MM.height, OM, iM.NEAREST)
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
      createVertexBuffer(MM, rM, iM) {
        return this._createVertexBuffer(MM, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(MM, rM) {
        const iM = this._gl.createBuffer();
        if (!iM) throw new Error("Unable to create vertex buffer");
        const OM = new mM.c(iM);
        return this.bindArrayBuffer(OM), "number" !== typeof MM ? MM instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(MM), rM), OM.vL = 4 * MM.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, MM, rM), OM.vL = MM.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(MM), rM), OM.vL = MM), this._resetVertexBufferBinding(), OM.references = 1, OM
      }
      createDynamicVertexBuffer(MM, rM) {
        return this._createVertexBuffer(MM, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(MM, rM, iM) {
        const OM = this._gl.createBuffer(),
          SM = new mM.c(OM);
        if (!OM) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(SM);
        const jM = this._normalizeIndexData(MM);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, jM, rM ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), SM.references = 1, SM.is32Bits = 4 === jM.BYTES_PER_ELEMENT, SM
      }
      _normalizeIndexData(MM) {
        if (2 === MM.BYTES_PER_ELEMENT) return MM;
        if (this._caps.uintIndices) {
          if (MM instanceof Uint32Array) return MM;
          for (let rM = 0; rM < MM.length; rM++)
            if (MM[rM] >= 65535) return new Uint32Array(MM);
          return new Uint16Array(MM)
        }
        return new Uint16Array(MM)
      }
      bindArrayBuffer(MM) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(MM, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(MM, rM, iM) {
        const OM = MM.program,
          SM = this._gl.getUniformBlockIndex(OM, rM);
        this._gl.uniformBlockBinding(OM, SM, iM)
      }
      bindIndexBuffer(MM) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(MM, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(MM, rM) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[rM] !== MM) && (this._gl.bindBuffer(rM, MM ? MM.underlyingResource : null), this._currentBoundBuffer[rM] = MM)
      }
      updateArrayBuffer(MM) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, MM)
      }
      _vertexAttribPointer(MM, rM, iM, OM, SM, jM, aM) {
        const PM = this._currentBufferPointers[rM];
        if (!PM) return;
        let nM = !1;
        PM.active ? (PM.buffer !== MM && (PM.buffer = MM, nM = !0), PM.size !== iM && (PM.size = iM, nM = !0), PM.type !== OM && (PM.type = OM, nM = !0), PM.normalized !== SM && (PM.normalized = SM, nM = !0), PM.stride !== jM && (PM.stride = jM, nM = !0), PM.offset !== aM && (PM.offset = aM, nM = !0)) : (nM = !0, PM.active = !0, PM.index = rM, PM.size = iM, PM.type = OM, PM.normalized = SM, PM.stride = jM, PM.offset = aM, PM.buffer = MM), (nM || this._vaoRecordInProgress) && (this.bindArrayBuffer(MM), OM === this._gl.UNSIGNED_INT || OM === this._gl.INT ? this._gl.vertexAttribIPointer(rM, iM, OM, jM, aM) : this._gl.vertexAttribPointer(rM, iM, OM, SM, jM, aM))
      }
      _bindIndexBufferWithCache(MM) {
        null != MM && this._cachedIndexBuffer !== MM && (this._cachedIndexBuffer = MM, this.bindIndexBuffer(MM), this._uintIndicesCurrentlySet = MM.is32Bits)
      }
      _bindVertexBuffersAttributes(MM, rM, iM) {
        const OM = rM.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let SM = 0; SM < OM.length; SM++) {
          const jM = rM.getAttributeLocation(SM);
          if (jM >= 0) {
            const rM = OM[SM];
            let aM = null;
            if (iM && (aM = iM[rM]), aM || (aM = MM[rM]), !aM) continue;
            this._gl.enableVertexAttribArray(jM), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[jM] = !0);
            const PM = aM.getBuffer();
            PM && (this._vertexAttribPointer(PM, jM, aM.getSize(), aM.type, aM.normalized, aM.byteStride, aM.byteOffset), aM.getIsInstanced() && (this._gl.vertexAttribDivisor(jM, aM.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(jM), this._currentInstanceBuffers.push(PM))))
          }
        }
      }
      recordVertexArrayObject(MM, rM, iM, OM) {
        const SM = this._gl.createVertexArray();
        if (!SM) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(SM), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(MM, iM, OM), this.bindIndexBuffer(rM), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), SM
      }
      bindVertexArrayObject(MM, rM) {
        this._cachedVertexArrayObject !== MM && (this._cachedVertexArrayObject = MM, this._gl.bindVertexArray(MM), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != rM && rM.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(MM, rM, iM, OM, SM) {
        if (this._cachedVertexBuffers !== MM || this._cachedEffectForVertexBuffers !== SM) {
          this._cachedVertexBuffers = MM, this._cachedEffectForVertexBuffers = SM;
          const rM = SM.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let jM = 0;
          for (let aM = 0; aM < rM; aM++)
            if (aM < iM.length) {
              const rM = SM.getAttributeLocation(aM);
              rM >= 0 && (this._gl.enableVertexAttribArray(rM), this._vertexAttribArraysEnabled[rM] = !0, this._vertexAttribPointer(MM, rM, iM[aM], this._gl.FLOAT, !1, OM, jM)), jM += 4 * iM[aM]
            }
        }
        this._bindIndexBufferWithCache(rM)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(MM, rM, iM, OM) {
        this._cachedVertexBuffers === MM && this._cachedEffectForVertexBuffers === iM || (this._cachedVertexBuffers = MM, this._cachedEffectForVertexBuffers = iM, this._bindVertexBuffersAttributes(MM, iM, OM)), this._bindIndexBufferWithCache(rM)
      }
      unbindInstanceAttributes() {
        let MM;
        for (let rM = 0, iM = this._currentInstanceLocations.length; rM < iM; rM++) {
          const iM = this._currentInstanceBuffers[rM];
          MM != iM && iM.references && (MM = iM, this.bindArrayBuffer(iM));
          const OM = this._currentInstanceLocations[rM];
          this._gl.vertexAttribDivisor(OM, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(MM) {
        this._gl.deleteVertexArray(MM)
      }
      _releaseBuffer(MM) {
        return MM.references--, 0 === MM.references && (this._deleteBuffer(MM), !0)
      }
      _deleteBuffer(MM) {
        this._gl.deleteBuffer(MM.underlyingResource)
      }
      updateAndBindInstancesBuffer(MM, rM, iM) {
        if (this.bindArrayBuffer(MM), rM && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, rM), void 0 !== iM[0].index) this.bindInstancesBuffer(MM, iM, !0);
        else
          for (let OM = 0; OM < 4; OM++) {
            const rM = iM[OM];
            this._vertexAttribArraysEnabled[rM] || (this._gl.enableVertexAttribArray(rM), this._vertexAttribArraysEnabled[rM] = !0), this._vertexAttribPointer(MM, rM, 4, this._gl.FLOAT, !1, 64, 16 * OM), this._gl.vertexAttribDivisor(rM, 1), this._currentInstanceLocations.push(rM), this._currentInstanceBuffers.push(MM)
          }
      }
      bindInstancesBuffer(MM, rM) {
        let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(MM);
        let OM = 0;
        if (iM)
          for (let SM = 0; SM < rM.length; SM++) {
            OM += 4 * rM[SM].attributeSize
          }
        for (let SM = 0; SM < rM.length; SM++) {
          const iM = rM[SM];
          void 0 === iM.index && (iM.index = this._currentEffect.getAttributeLocationByName(iM.attributeName)), iM.index < 0 || (this._vertexAttribArraysEnabled[iM.index] || (this._gl.enableVertexAttribArray(iM.index), this._vertexAttribArraysEnabled[iM.index] = !0), this._vertexAttribPointer(MM, iM.index, iM.attributeSize, iM.attributeType || this._gl.FLOAT, iM.normalized || !1, OM, iM.offset), this._gl.vertexAttribDivisor(iM.index, void 0 === iM.divisor ? 1 : iM.divisor), this._currentInstanceLocations.push(iM.index), this._currentInstanceBuffers.push(MM))
        }
      }
      disableInstanceAttributeByName(MM) {
        if (!this._currentEffect) return;
        const rM = this._currentEffect.getAttributeLocationByName(MM);
        this.disableInstanceAttribute(rM)
      }
      disableInstanceAttribute(MM) {
        let rM, iM = !1;
        for (; - 1 !== (rM = this._currentInstanceLocations.indexOf(MM));) this._currentInstanceLocations.splice(rM, 1), this._currentInstanceBuffers.splice(rM, 1), iM = !0;
        iM && (this._gl.vertexAttribDivisor(MM, 0), this.disableAttributeByIndex(MM))
      }
      disableAttributeByIndex(MM) {
        this._gl.disableVertexAttribArray(MM), this._vertexAttribArraysEnabled[MM] = !1, this._currentBufferPointers[MM].active = !1
      }
      draw(MM, rM, iM, OM) {
        this.drawElementsType(MM ? 0 : 1, rM, iM, OM)
      }
      drawPointClouds(MM, rM, iM) {
        this.drawArraysType(2, MM, rM, iM)
      }
      drawUnIndexed(MM, rM, iM, OM) {
        this.drawArraysType(MM ? 0 : 1, rM, iM, OM)
      }
      drawElementsType(MM, rM, iM, OM) {
        this.applyStates(), this._reportDrawCall();
        const SM = this._drawMode(MM),
          jM = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          aM = this._uintIndicesCurrentlySet ? 4 : 2;
        OM ? this._gl.drawElementsInstanced(SM, iM, jM, rM * aM, OM) : this._gl.drawElements(SM, iM, jM, rM * aM)
      }
      drawArraysType(MM, rM, iM, OM) {
        this.applyStates(), this._reportDrawCall();
        const SM = this._drawMode(MM);
        OM ? this._gl.drawArraysInstanced(SM, rM, iM, OM) : this._gl.drawArrays(SM, rM, iM)
      }
      _drawMode(MM) {
        switch (MM) {
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
      _releaseEffect(MM) {
        this._compiledEffects[MM._key] && delete this._compiledEffects[MM._key];
        const rM = MM.getPipelineContext();
        rM && this._deletePipelineContext(rM)
      }
      _deletePipelineContext(MM) {
        const rM = MM;
        rM && rM.program && (rM.program.__SPECTOR_rebuildProgram = null, (0, yM.i)(rM), this._gl && (this._currentProgram === rM.program && this._setProgram(null), this._gl.deleteProgram(rM.program)))
      }
      _getGlobalDefines(MM) {
        return (0, dM.f)(MM, this.isNDCHalfZRange, this.LOM, this.useExactSrgbConversions)
      }
      createEffect(MM, rM, iM, jM, aM, PM, nM, QM, zM) {
        let LM = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          mM = arguments.length > 10 ? arguments[10] : void 0;
        const HM = "string" === typeof MM ? MM : MM.vertexToken || MM.vertexSource || MM.vertexElement || MM.vertex,
          hM = "string" === typeof MM ? MM : MM.fragmentToken || MM.fragmentSource || MM.fragmentElement || MM.fragment,
          JM = this._getGlobalDefines(),
          dM = void 0 !== rM.attributes;
        let yM = aM ?? rM.defines ?? "";
        JM && (yM += JM);
        const lM = HM + "+" + hM + "@" + yM;
        if (this._compiledEffects[lM]) {
          const MM = this._compiledEffects[lM];
          return nM && MM.isReady() && nM(MM), MM._refCount++, MM
        }
        this._gl && (0, SM.B)(this._gl);
        const EM = new OM.c(MM, rM, dM ? this : iM, jM, this, aM, PM, nM, QM, zM, lM, rM.shaderLanguage ?? LM, rM.extraInitializationsAsync ?? mM);
        return this._compiledEffects[lM] = EM, EM
      }
      _getShaderSource(MM) {
        return this._gl.getShaderSource(MM)
      }
      createRawShaderProgram(MM, rM, iM, OM) {
        let jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const aM = (0, SM.B)(this._gl);
        return aM._contextWasLost = this._contextWasLost, aM.validateShaderPrograms = this.validateShaderPrograms, (0, SM.v)(MM, rM, iM, OM || this._gl, jM)
      }
      createShaderProgram(MM, rM, iM, OM, jM) {
        let aM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const PM = (0, SM.B)(this._gl);
        return PM._contextWasLost = this._contextWasLost, PM.validateShaderPrograms = this.validateShaderPrograms, (0, SM.z)(MM, rM, iM, OM, jM || this._gl, aM)
      }
      inlineShaderCode(MM) {
        return MM
      }
      createPipelineContext(MM) {
        if (this._gl) {
          (0, SM.B)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const rM = (0, SM.u)(this._gl, MM);
        return rM.engine = this, rM
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(MM) {
        return (0, SM.k)(MM, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(MM, rM, iM, OM, jM, aM, PM, nM, QM, zM, LM) {
        const mM = (0, SM.B)(this._gl);
        return mM._contextWasLost = this._contextWasLost, mM.validateShaderPrograms = this.validateShaderPrograms, mM._createShaderProgramInjection = this._createShaderProgram.bind(this), mM.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), mM.createShaderProgramInjection = this.createShaderProgram.bind(this), mM.loadFileInjection = this._loadFile.bind(this), (0, SM.p)(MM, rM, iM, OM, jM, aM, PM, nM, QM, zM, LM)
      }
      _createShaderProgram(MM, rM, iM, OM) {
        let jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, SM.d)(MM, rM, iM, OM, jM)
      }
      _isRenderingStateCompiled(MM) {
        return !this._isDisposed && (0, SM.n)(MM, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(MM, rM) {
        (0, SM.g)(MM, rM)
      }
      getUniforms(MM, rM) {
        const iM = new Array,
          OM = MM;
        for (let SM = 0; SM < rM.length; SM++) iM.push(this._gl.getUniformLocation(OM.program, rM[SM]));
        return iM
      }
      getAttributes(MM, rM) {
        const iM = [],
          OM = MM;
        for (let jM = 0; jM < rM.length; jM++) try {
          iM.push(this._gl.getAttribLocation(OM.program, rM[jM]))
        } catch (SM) {
          iM.push(-1)
        }
        return iM
      }
      enableEffect(MM) {
        (MM = null !== MM && (0, aM.e)(MM) ? MM.effect : MM) && MM !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(MM), this._currentEffect = MM, MM.onBind && MM.onBind(MM), MM._onBindObservable && MM._onBindObservable.notifyObservers(MM))
      }
      setInt(MM, rM) {
        return !!MM && (this._gl.uniform1i(MM, rM), !0)
      }
      setInt2(MM, rM, iM) {
        return !!MM && (this._gl.uniform2i(MM, rM, iM), !0)
      }
      setInt3(MM, rM, iM, OM) {
        return !!MM && (this._gl.uniform3i(MM, rM, iM, OM), !0)
      }
      setInt4(MM, rM, iM, OM, SM) {
        return !!MM && (this._gl.uniform4i(MM, rM, iM, OM, SM), !0)
      }
      setIntArray(MM, rM) {
        return !!MM && (this._gl.uniform1iv(MM, rM), !0)
      }
      setIntArray2(MM, rM) {
        return !(!MM || rM.length % 2 !== 0) && (this._gl.uniform2iv(MM, rM), !0)
      }
      setIntArray3(MM, rM) {
        return !(!MM || rM.length % 3 !== 0) && (this._gl.uniform3iv(MM, rM), !0)
      }
      setIntArray4(MM, rM) {
        return !(!MM || rM.length % 4 !== 0) && (this._gl.uniform4iv(MM, rM), !0)
      }
      setUInt(MM, rM) {
        return !!MM && (this._gl.uniform1ui(MM, rM), !0)
      }
      setUInt2(MM, rM, iM) {
        return !!MM && (this._gl.uniform2ui(MM, rM, iM), !0)
      }
      setUInt3(MM, rM, iM, OM) {
        return !!MM && (this._gl.uniform3ui(MM, rM, iM, OM), !0)
      }
      setUInt4(MM, rM, iM, OM, SM) {
        return !!MM && (this._gl.uniform4ui(MM, rM, iM, OM, SM), !0)
      }
      setUIntArray(MM, rM) {
        return !!MM && (this._gl.uniform1uiv(MM, rM), !0)
      }
      setUIntArray2(MM, rM) {
        return !(!MM || rM.length % 2 !== 0) && (this._gl.uniform2uiv(MM, rM), !0)
      }
      setUIntArray3(MM, rM) {
        return !(!MM || rM.length % 3 !== 0) && (this._gl.uniform3uiv(MM, rM), !0)
      }
      setUIntArray4(MM, rM) {
        return !(!MM || rM.length % 4 !== 0) && (this._gl.uniform4uiv(MM, rM), !0)
      }
      setArray(MM, rM) {
        return !!MM && (!(rM.length < 1) && (this._gl.uniform1fv(MM, rM), !0))
      }
      setArray2(MM, rM) {
        return !(!MM || rM.length % 2 !== 0) && (this._gl.uniform2fv(MM, rM), !0)
      }
      setArray3(MM, rM) {
        return !(!MM || rM.length % 3 !== 0) && (this._gl.uniform3fv(MM, rM), !0)
      }
      setArray4(MM, rM) {
        return !(!MM || rM.length % 4 !== 0) && (this._gl.uniform4fv(MM, rM), !0)
      }
      setMatrices(MM, rM) {
        return !!MM && (this._gl.uniformMatrix4fv(MM, !1, rM), !0)
      }
      setMatrix3x3(MM, rM) {
        return !!MM && (this._gl.uniformMatrix3fv(MM, !1, rM), !0)
      }
      setMatrix2x2(MM, rM) {
        return !!MM && (this._gl.uniformMatrix2fv(MM, !1, rM), !0)
      }
      setFloat(MM, rM) {
        return !!MM && (this._gl.uniform1f(MM, rM), !0)
      }
      setFloat2(MM, rM, iM) {
        return !!MM && (this._gl.uniform2f(MM, rM, iM), !0)
      }
      setFloat3(MM, rM, iM, OM) {
        return !!MM && (this._gl.uniform3f(MM, rM, iM, OM), !0)
      }
      setFloat4(MM, rM, iM, OM, SM) {
        return !!MM && (this._gl.uniform4f(MM, rM, iM, OM, SM), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const MM = this._colorWrite;
          this._gl.colorMask(MM, MM, MM, MM)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(MM) {
        this.preventCacheWipeBetweenFrames && !MM || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), MM && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(MM, rM) {
        const iM = this._gl;
        let OM = iM.NEAREST,
          SM = iM.NEAREST,
          jM = !1;
        switch (MM) {
          case 11:
            OM = iM.LINEAR, SM = rM ? iM.LINEAR_MIPMAP_NEAREST : iM.LINEAR;
            break;
          case 3:
            OM = iM.LINEAR, jM = !0, SM = rM ? iM.LINEAR_MIPMAP_LINEAR : iM.LINEAR;
            break;
          case 8:
            jM = !0, OM = iM.NEAREST, SM = rM ? iM.NEAREST_MIPMAP_LINEAR : iM.NEAREST;
            break;
          case 4:
            OM = iM.NEAREST, SM = rM ? iM.NEAREST_MIPMAP_NEAREST : iM.NEAREST;
            break;
          case 5:
            OM = iM.NEAREST, SM = rM ? iM.LINEAR_MIPMAP_NEAREST : iM.LINEAR;
            break;
          case 6:
            jM = !0, OM = iM.NEAREST, SM = rM ? iM.LINEAR_MIPMAP_LINEAR : iM.LINEAR;
            break;
          case 7:
            OM = iM.NEAREST, SM = iM.LINEAR;
            break;
          case 1:
            OM = iM.NEAREST, SM = iM.NEAREST;
            break;
          case 9:
            OM = iM.LINEAR, SM = rM ? iM.NEAREST_MIPMAP_NEAREST : iM.NEAREST;
            break;
          case 10:
            jM = !0, OM = iM.LINEAR, SM = rM ? iM.NEAREST_MIPMAP_LINEAR : iM.NEAREST;
            break;
          case 2:
            OM = iM.LINEAR, SM = iM.LINEAR;
            break;
          case 12:
            OM = iM.LINEAR, SM = iM.NEAREST
        }
        return {
          min: SM,
          mag: OM,
          hasMipMaps: jM
        }
      }
      _createTexture() {
        const MM = this._gl.createTexture();
        if (!MM) throw new Error("Unable to create texture");
        return MM
      }
      _createHardwareTexture() {
        return new hM.d(this._createTexture(), this._gl)
      }
      _createInternalTexture(MM, rM) {
        let iM, OM, SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          jM = !1,
          aM = 0,
          nM = 3,
          QM = 5,
          zM = !1,
          LM = 1,
          mM = !1,
          HM = 0,
          hM = !1;
        void 0 !== rM && "object" === typeof rM ? (iM = !!rM.generateMipMaps, jM = !!rM.createMipMaps, aM = void 0 === rM.type ? 0 : rM.type, nM = void 0 === rM.samplingMode ? 3 : rM.samplingMode, QM = void 0 === rM.format ? 5 : rM.format, zM = void 0 !== rM.useSRGBBuffer && rM.useSRGBBuffer, LM = rM.samples ?? 1, OM = rM.label, mM = !!rM.createMSAATexture, HM = rM.comparisonFunction || 0, hM = !!rM.isCube) : iM = !!rM, zM && (zM = this._caps.supportSRGBBuffers && (this.PJ > 1 || this.isWebGPU)), (1 !== aM || this._caps.textureFloatLinearFiltering) && (2 !== aM || this._caps.textureHalfFloatLinearFiltering) || (nM = 1), 1 !== aM || this._caps.textureFloat || (aM = 0, PM.e.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const dM = (0, lM.i)(QM),
          yM = (0, lM.e)(QM),
          EM = this._gl,
          UM = new JM.c(this, SM),
          GM = MM.width || MM,
          CM = MM.height || MM,
          eM = MM.depth || 0,
          bM = MM.layers || 0,
          wM = this._getSamplingParameters(nM, (iM || jM) && !dM),
          tM = 0 !== bM ? EM.TEXTURE_2D_ARRAY : 0 !== eM ? EM.TEXTURE_3D : hM ? EM.TEXTURE_CUBE_MAP : EM.TEXTURE_2D,
          gM = dM ? this._getInternalFormatFromDepthTextureFormat(QM, !0, yM) : this._getRGBABufferInternalSizedFormat(aM, QM, zM),
          uM = dM ? yM ? EM.DEPTH_STENCIL : EM.DEPTH_COMPONENT : this._getInternalFormat(QM),
          RM = dM ? this._getWebGLTextureTypeFromDepthTextureFormat(QM) : this._getWebGLTextureType(aM);
        if (this._bindTextureDirectly(tM, UM), 0 !== bM) UM.is2DArray = !0, EM.texImage3D(tM, 0, gM, GM, CM, bM, 0, uM, RM, null);
        else if (0 !== eM) UM.is3D = !0, EM.texImage3D(tM, 0, gM, GM, CM, eM, 0, uM, RM, null);
        else if (hM) {
          UM.isCube = !0;
          for (let MM = 0; MM < 6; MM++) EM.texImage2D(EM.TEXTURE_CUBE_MAP_POSITIVE_X + MM, 0, gM, GM, CM, 0, uM, RM, null)
        } else EM.texImage2D(tM, 0, gM, GM, CM, 0, uM, RM, null);
        if (EM.texParameteri(tM, EM.TEXTURE_MAG_FILTER, wM.mag), EM.texParameteri(tM, EM.TEXTURE_MIN_FILTER, wM.min), EM.texParameteri(tM, EM.TEXTURE_WRAP_S, EM.CLAMP_TO_EDGE), EM.texParameteri(tM, EM.TEXTURE_WRAP_T, EM.CLAMP_TO_EDGE), dM && this.PJ > 1 && (0 === HM ? (EM.texParameteri(tM, EM.TEXTURE_COMPARE_FUNC, 515), EM.texParameteri(tM, EM.TEXTURE_COMPARE_MODE, EM.NONE)) : (EM.texParameteri(tM, EM.TEXTURE_COMPARE_FUNC, HM), EM.texParameteri(tM, EM.TEXTURE_COMPARE_MODE, EM.COMPARE_REF_TO_TEXTURE))), (iM || jM) && this._gl.generateMipmap(tM), this._bindTextureDirectly(tM, null), UM._useSRGBBuffer = zM, UM.baseWidth = GM, UM.baseHeight = CM, UM.width = GM, UM.height = CM, UM.depth = bM || eM, UM.isReady = !0, UM.samples = LM, UM.generateMipMaps = iM, UM.samplingMode = nM, UM.type = aM, UM.format = QM, UM.label = OM, UM.comparisonFunction = HM, this._internalTexturesCache.push(UM), mM) {
          let MM;
          if (MM = (0, lM.i)(UM.format) ? this._setupFramebufferDepthAttachments((0, lM.e)(UM.format), 19 !== UM.format, UM.width, UM.height, LM, UM.format, !0) : this._createRenderBuffer(UM.width, UM.height, LM, -1, this._getRGBABufferInternalSizedFormat(UM.type, UM.format, UM._useSRGBBuffer), -1), !MM) throw new Error("Unable to create render buffer");
          UM._autoMSAAManagement = !0;
          let rM = UM._hardwareTexture;
          rM || (rM = UM._hardwareTexture = this._createHardwareTexture()), rM.addMSAARenderBuffer(MM)
        }
        return UM
      }
      _getUseSRGBBuffer(MM, rM) {
        return MM && this._caps.supportSRGBBuffers && (this.PJ > 1 || rM)
      }
      createTexture(MM, rM, iM, OM) {
        var SM = this;
        let jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          aM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          PM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          nM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          QM = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          zM = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          LM = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          mM = arguments.length > 11 ? arguments[11] : void 0,
          HM = arguments.length > 12 ? arguments[12] : void 0,
          hM = arguments.length > 13 ? arguments[13] : void 0,
          dM = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(MM, rM, iM, OM, jM, aM, PM, (function() {
          for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
          return SM._prepareWebGLTexture(...rM, zM)
        }), ((MM, rM, iM, SM, jM, aM) => {
          const PM = this._gl,
            nM = iM.width === MM && iM.height === rM;
          jM._creationFlags = hM ?? 0;
          const QM = this._getTexImageParametersForCreateTexture(jM.format, jM._useSRGBBuffer);
          if (nM) return PM.texImage2D(PM.TEXTURE_2D, 0, QM.internalFormat, QM.format, QM.type, iM), !1;
          const zM = this._caps.maxTextureSize;
          if (iM.width > zM || iM.height > zM || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = MM, this._workingCanvas.height = rM, this._workingContext.drawImage(iM, 0, 0, iM.width, iM.height, 0, 0, MM, rM), PM.texImage2D(PM.TEXTURE_2D, 0, QM.internalFormat, QM.format, QM.type, this._workingCanvas), jM.width = MM, jM.height = rM, !1);
          {
            const MM = new JM.c(this, 2);
            this._bindTextureDirectly(PM.TEXTURE_2D, MM, !0), PM.texImage2D(PM.TEXTURE_2D, 0, QM.internalFormat, QM.format, QM.type, iM), this._rescaleTexture(MM, jM, OM, QM.format, (() => {
              this._releaseTexture(MM), this._bindTextureDirectly(PM.TEXTURE_2D, jM, !0), aM()
            }))
          }
          return !0
        }), nM, QM, zM, LM, mM, HM, dM)
      }
      _getTexImageParametersForCreateTexture(MM, rM) {
        let iM, OM;
        return 1 === this.PJ ? (iM = this._getInternalFormat(MM, rM), OM = iM) : (iM = this._getInternalFormat(MM, !1), OM = this._getRGBABufferInternalSizedFormat(0, MM, rM)), {
          internalFormat: OM,
          format: iM,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(MM, rM, iM, OM, SM) {}
      _unpackFlipY(MM) {
        this._unpackFlipYCached !== MM && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, MM ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = MM))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(MM) {
        return MM.isCube ? this._gl.TEXTURE_CUBE_MAP : MM.is3D ? this._gl.TEXTURE_3D : MM.is2DArray || MM.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const OM = this._getTextureTarget(rM),
          SM = this._getSamplingParameters(MM, rM.useMipMaps || iM);
        this._setTextureParameterInteger(OM, this._gl.TEXTURE_MAG_FILTER, SM.mag, rM), this._setTextureParameterInteger(OM, this._gl.TEXTURE_MIN_FILTER, SM.min), iM && SM.hasMipMaps && (rM.generateMipMaps = !0, this._gl.generateMipmap(OM)), this._bindTextureDirectly(OM, null), rM.samplingMode = MM
      }
      updateTextureDimensions(MM, rM, iM) {}
      updateTextureWrappingMode(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const SM = this._getTextureTarget(MM);
        null !== rM && (this._setTextureParameterInteger(SM, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(rM), MM), MM._cachedWrapU = rM), null !== iM && (this._setTextureParameterInteger(SM, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(iM), MM), MM._cachedWrapV = iM), (MM.is2DArray || MM.is3D) && null !== OM && (this._setTextureParameterInteger(SM, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(OM), MM), MM._cachedWrapR = OM), this._bindTextureDirectly(SM, null)
      }
      _uploadCompressedDataToTextureDirectly(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          aM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const PM = this._gl;
        let nM = PM.TEXTURE_2D;
        if (MM.isCube && (nM = PM.TEXTURE_CUBE_MAP_POSITIVE_X + jM), MM._useSRGBBuffer) switch (rM) {
          case 37492:
          case 36196:
            this._caps.etc2 ? rM = PM.COMPRESSED_SRGB8_ETC2 : MM._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? rM = PM.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : MM._useSRGBBuffer = !1;
            break;
          case 36492:
            rM = PM.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            rM = PM.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            rM = PM.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            rM = PM.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            rM = PM.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            rM = PM.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            rM = PM.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            rM = PM.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            rM = PM.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            rM = PM.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            rM = PM.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            rM = PM.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            rM = PM.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            rM = PM.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            rM = PM.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? rM = PM.COMPRESSED_SRGB_S3TC_DXT1_EXT : MM._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? rM = PM.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : MM._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? rM = PM.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : MM._useSRGBBuffer = !1;
            break;
          default:
            MM._useSRGBBuffer = !1
        }
        if (MM.generateMipMaps) {
          const jM = MM._hardwareTexture;
          jM.memoryAllocated || (PM.texStorage2D(MM.isCube ? PM.TEXTURE_CUBE_MAP : PM.TEXTURE_2D, Math.floor(Math.log2(Math.max(iM, OM))) + 1, rM, MM.width, MM.height), jM.memoryAllocated = !0), this._gl.compressedTexSubImage2D(nM, aM, 0, 0, iM, OM, rM, SM)
        } else this._gl.compressedTexImage2D(nM, aM, rM, iM, OM, 0, SM)
      }
      _uploadDataToTextureDirectly(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          SM = arguments.length > 4 ? arguments[4] : void 0,
          jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const aM = this._gl,
          PM = this._getWebGLTextureType(MM.type),
          nM = this._getInternalFormat(MM.format),
          QM = void 0 === SM ? this._getRGBABufferInternalSizedFormat(MM.type, MM.format, MM._useSRGBBuffer) : this._getInternalFormat(SM, MM._useSRGBBuffer);
        this._unpackFlipY(MM.invertY);
        let zM = aM.TEXTURE_2D;
        MM.isCube && (zM = aM.TEXTURE_CUBE_MAP_POSITIVE_X + iM);
        const LM = Math.round(Math.log(MM.width) * Math.LOG2E),
          mM = Math.round(Math.log(MM.height) * Math.LOG2E),
          HM = jM ? MM.width : Math.pow(2, Math.max(LM - OM, 0)),
          hM = jM ? MM.height : Math.pow(2, Math.max(mM - OM, 0));
        aM.texImage2D(zM, OM, QM, HM, hM, 0, nM, PM, rM)
      }
      updateTextureData(MM, rM, iM, OM, SM, jM) {
        let aM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          PM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          nM = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const QM = this._gl,
          zM = this._getWebGLTextureType(MM.type),
          LM = this._getInternalFormat(MM.format);
        this._unpackFlipY(MM.invertY);
        let mM = QM.TEXTURE_2D,
          HM = QM.TEXTURE_2D;
        MM.isCube && (HM = QM.TEXTURE_CUBE_MAP_POSITIVE_X + aM, mM = QM.TEXTURE_CUBE_MAP), this._bindTextureDirectly(mM, MM, !0), QM.texSubImage2D(HM, PM, iM, OM, SM, jM, LM, zM, rM), nM && this._gl.generateMipmap(HM), this._bindTextureDirectly(mM, null)
      }
      _uploadArrayBufferViewToTexture(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const SM = this._gl,
          jM = MM.isCube ? SM.TEXTURE_CUBE_MAP : SM.TEXTURE_2D;
        this._bindTextureDirectly(jM, MM, !0), this._uploadDataToTextureDirectly(MM, rM, iM, OM), this._bindTextureDirectly(jM, null, !0)
      }
      _prepareWebGLTextureContinuation(MM, rM, iM, OM, SM) {
        const jM = this._gl;
        if (!jM) return;
        const aM = this._getSamplingParameters(SM, !iM);
        jM.texParameteri(jM.TEXTURE_2D, jM.TEXTURE_MAG_FILTER, aM.mag), jM.texParameteri(jM.TEXTURE_2D, jM.TEXTURE_MIN_FILTER, aM.min), iM || OM || jM.generateMipmap(jM.TEXTURE_2D), this._bindTextureDirectly(jM.TEXTURE_2D, null), rM && rM.removePendingData(MM), MM.onLoadedObservable.notifyObservers(MM), MM.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM) {
        const zM = this.getCaps().maxTextureSize,
          LM = Math.min(zM, this.needPOTTextures ? (0, HM.e)(OM.width, zM) : OM.width),
          mM = Math.min(zM, this.needPOTTextures ? (0, HM.e)(OM.height, zM) : OM.height),
          hM = this._gl;
        hM && (MM._hardwareTexture ? (this._bindTextureDirectly(hM.TEXTURE_2D, MM, !0), this._unpackFlipY(void 0 === SM || !!SM), MM.baseWidth = OM.width, MM.baseHeight = OM.height, MM.width = LM, MM.height = mM, MM.isReady = !0, MM.type = -1 !== MM.type ? MM.type : 0, MM.format = -1 !== MM.format ? MM.format : QM ?? (".jpg" !== rM || MM._useSRGBBuffer ? 5 : 4), PM(LM, mM, OM, rM, MM, (() => {
          this._prepareWebGLTextureContinuation(MM, iM, jM, aM, nM)
        })) || this._prepareWebGLTextureContinuation(MM, iM, jM, aM, nM)) : iM && iM.removePendingData(MM))
      }
      _getInternalFormatFromDepthTextureFormat(MM, rM, iM) {
        const OM = this._gl;
        if (!rM) return OM.STENCIL_INDEX8;
        let SM = iM ? OM.DEPTH_STENCIL : OM.DEPTH_COMPONENT;
        return this.PJ > 1 ? 15 === MM ? SM = OM.DEPTH_COMPONENT16 : 16 === MM ? SM = OM.DEPTH_COMPONENT24 : 17 === MM || 13 === MM ? SM = iM ? OM.DEPTH24_STENCIL8 : OM.DEPTH_COMPONENT24 : 14 === MM ? SM = OM.DEPTH_COMPONENT32F : 18 === MM && (SM = iM ? OM.DEPTH32F_STENCIL8 : OM.DEPTH_COMPONENT32F) : SM = OM.DEPTH_COMPONENT16, SM
      }
      _getWebGLTextureTypeFromDepthTextureFormat(MM) {
        const rM = this._gl;
        let iM = rM.UNSIGNED_INT;
        return 15 === MM ? iM = rM.UNSIGNED_SHORT : 17 === MM || 13 === MM ? iM = rM.UNSIGNED_INT_24_8 : 14 === MM ? iM = rM.FLOAT : 18 === MM ? iM = rM.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === MM && (iM = rM.UNSIGNED_BYTE), iM
      }
      _setupFramebufferDepthAttachments(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          jM = arguments.length > 5 ? arguments[5] : void 0,
          aM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const PM = this._gl;
        jM = jM ?? (MM ? 13 : 14);
        const nM = this._getInternalFormatFromDepthTextureFormat(jM, rM, MM);
        return MM && rM ? this._createRenderBuffer(iM, OM, SM, PM.DEPTH_STENCIL, nM, aM ? -1 : PM.DEPTH_STENCIL_ATTACHMENT) : rM ? this._createRenderBuffer(iM, OM, SM, nM, nM, aM ? -1 : PM.DEPTH_ATTACHMENT) : MM ? this._createRenderBuffer(iM, OM, SM, nM, nM, aM ? -1 : PM.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(MM, rM, iM, OM, SM, jM) {
        let aM = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const PM = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(PM, MM, rM, iM, OM, SM, jM, aM)
      }
      _updateRenderBuffer(MM, rM, iM, OM, SM, jM, aM) {
        let PM = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const nM = this._gl;
        return nM.bindRenderbuffer(nM.RENDERBUFFER, MM), OM > 1 && nM.renderbufferStorageMultisample ? nM.renderbufferStorageMultisample(nM.RENDERBUFFER, OM, jM, rM, iM) : nM.renderbufferStorage(nM.RENDERBUFFER, SM, rM, iM), -1 !== aM && nM.framebufferRenderbuffer(nM.FRAMEBUFFER, aM, nM.RENDERBUFFER, MM), PM && nM.bindRenderbuffer(nM.RENDERBUFFER, null), MM
      }
      _releaseTexture(MM) {
        this._deleteTexture(MM._hardwareTexture), this.unbindAllTextures();
        const rM = this._internalTexturesCache.indexOf(MM); - 1 !== rM && this._internalTexturesCache.splice(rM, 1), MM._lodTextureHigh && MM._lodTextureHigh.dispose(), MM._lodTextureMid && MM._lodTextureMid.dispose(), MM._lodTextureLow && MM._lodTextureLow.dispose(), MM._irradianceTexture && MM._irradianceTexture.dispose()
      }
      _deleteTexture(MM) {
        MM?.release()
      }
      _setProgram(MM) {
        this._currentProgram !== MM && ((0, SM.q)(MM, this._gl), this._currentProgram = MM)
      }
      bindSamplers(MM) {
        const rM = MM.getPipelineContext();
        this._setProgram(rM.program);
        const iM = MM.getSamplers();
        for (let OM = 0; OM < iM.length; OM++) {
          const rM = MM.getUniform(iM[OM]);
          rM && (this._boundUniforms[OM] = rM)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          SM = !1;
        const jM = rM && rM._associatedChannel > -1;
        iM && jM && (this._activeChannel = rM._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== rM || OM) {
          if (this._activateCurrentTexture(), rM && rM.isMultiview) throw PM.e.Error(["_bindTextureDirectly called with a multiview texture!", MM, rM]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(MM, rM?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = rM, rM && (rM._associatedChannel = this._activeChannel)
        } else iM && (SM = !0, this._activateCurrentTexture());
        return jM && !iM && this._bindSamplerUniformToChannel(rM._associatedChannel, this._activeChannel), SM
      }
      _bindTexture(MM, rM, iM) {
        if (void 0 === MM) return;
        rM && (rM._associatedChannel = MM), this._activeChannel = MM;
        const OM = rM ? this._getTextureTarget(rM) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(OM, rM)
      }
      unbindAllTextures() {
        for (let MM = 0; MM < this._maxSimultaneousTextures; MM++) this._activeChannel = MM, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.PJ > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(MM, rM, iM, OM) {
        void 0 !== MM && (rM && (this._boundUniforms[MM] = rM), this._setTexture(MM, iM))
      }
      _bindSamplerUniformToChannel(MM, rM) {
        const iM = this._boundUniforms[MM];
        iM && iM._currentState !== rM && (this._gl.uniform1i(iM, rM), iM._currentState = rM)
      }
      _getTextureWrapMode(MM) {
        switch (MM) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(MM, rM) {
        let iM, OM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          SM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!rM) return null != this._boundTexturesCache[MM] && (this._activeChannel = MM, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.PJ > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (rM.video) {
          this._activeChannel = MM;
          const iM = rM.getInternalTexture();
          iM && (iM._associatedChannel = MM), rM.update()
        } else if (4 === rM.delayLoadState) return rM.delayLoad(), !1;
        iM = SM ? rM.depthStencilTexture : rM.isReady() ? rM.getInternalTexture() : rM.isCube ? this.emptyCubeTexture : rM.is3D ? this.emptyTexture3D : rM.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !OM && iM && (iM._associatedChannel = MM);
        let jM = !0;
        this._boundTexturesCache[MM] === iM && (OM || this._bindSamplerUniformToChannel(iM._associatedChannel, MM), jM = !1), this._activeChannel = MM;
        const aM = this._getTextureTarget(iM);
        if (jM && this._bindTextureDirectly(aM, iM, OM), iM && !iM.isMultiview) {
          if (iM.isCube && iM._cachedCoordinatesMode !== rM.coordinatesMode) {
            iM._cachedCoordinatesMode = rM.coordinatesMode;
            const MM = 3 !== rM.coordinatesMode && 5 !== rM.coordinatesMode ? 1 : 0;
            rM.wrapU = MM, rM.wrapV = MM
          }
          iM._cachedWrapU !== rM.wrapU && (iM._cachedWrapU = rM.wrapU, this._setTextureParameterInteger(aM, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(rM.wrapU), iM)), iM._cachedWrapV !== rM.wrapV && (iM._cachedWrapV = rM.wrapV, this._setTextureParameterInteger(aM, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(rM.wrapV), iM)), iM.is3D && iM._cachedWrapR !== rM.wrapR && (iM._cachedWrapR = rM.wrapR, this._setTextureParameterInteger(aM, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(rM.wrapR), iM)), this._setAnisotropicLevel(aM, iM, rM.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(MM, rM, iM, OM) {
        if (void 0 !== MM && rM) {
          this._textureUnits && this._textureUnits.length === iM.length || (this._textureUnits = new Int32Array(iM.length));
          for (let rM = 0; rM < iM.length; rM++) {
            const OM = iM[rM].getInternalTexture();
            OM ? (this._textureUnits[rM] = MM + rM, OM._associatedChannel = MM + rM) : this._textureUnits[rM] = -1
          }
          this._gl.uniform1iv(rM, this._textureUnits);
          for (let MM = 0; MM < iM.length; MM++) this._setTexture(this._textureUnits[MM], iM[MM], !0)
        }
      }
      _setAnisotropicLevel(MM, rM, iM) {
        const OM = this._caps.textureAnisotropicFilterExtension;
        11 !== rM.samplingMode && 3 !== rM.samplingMode && 2 !== rM.samplingMode && (iM = 1), OM && rM._cachedAnisotropicFilteringLevel !== iM && (this._setTextureParameterFloat(MM, OM.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(iM, this._caps.maxAnisotropy), rM), rM._cachedAnisotropicFilteringLevel = iM)
      }
      _setTextureParameterFloat(MM, rM, iM, OM) {
        this._bindTextureDirectly(MM, OM, !0, !0), this._gl.texParameterf(MM, rM, iM)
      }
      _setTextureParameterInteger(MM, rM, iM, OM) {
        OM && this._bindTextureDirectly(MM, OM, !0, !0), this._gl.texParameteri(MM, rM, iM)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let MM = 0; MM < this._caps.maxVertexAttribs; MM++) this.disableAttributeByIndex(MM)
        } else
          for (let MM = 0, rM = this._vertexAttribArraysEnabled.length; MM < rM; MM++) MM >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[MM] || this.disableAttributeByIndex(MM)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, nM.l)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, SM.A)(this._gl)
      }
      attachContextLostEvent(MM) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", MM, !1)
      }
      attachContextRestoredEvent(MM) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", MM, !1)
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
      _canRenderToFramebuffer(MM) {
        const rM = this._gl;
        for (; rM.getError() !== rM.NO_ERROR;);
        let iM = !0;
        const OM = rM.createTexture();
        rM.bindTexture(rM.TEXTURE_2D, OM), rM.texImage2D(rM.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(MM), 1, 1, 0, rM.RGBA, this._getWebGLTextureType(MM), null), rM.texParameteri(rM.TEXTURE_2D, rM.TEXTURE_MIN_FILTER, rM.NEAREST), rM.texParameteri(rM.TEXTURE_2D, rM.TEXTURE_MAG_FILTER, rM.NEAREST);
        const SM = rM.createFramebuffer();
        rM.bindFramebuffer(rM.FRAMEBUFFER, SM), rM.framebufferTexture2D(rM.FRAMEBUFFER, rM.COLOR_ATTACHMENT0, rM.TEXTURE_2D, OM, 0);
        const jM = rM.checkFramebufferStatus(rM.FRAMEBUFFER);
        if (iM = iM && jM === rM.FRAMEBUFFER_COMPLETE, iM = iM && rM.getError() === rM.NO_ERROR, iM && (rM.clear(rM.COLOR_BUFFER_BIT), iM = iM && rM.getError() === rM.NO_ERROR), iM) {
          rM.bindFramebuffer(rM.FRAMEBUFFER, null);
          const MM = rM.RGBA,
            OM = rM.UNSIGNED_BYTE,
            SM = new Uint8Array(4);
          rM.readPixels(0, 0, 1, 1, MM, OM, SM), iM = iM && rM.getError() === rM.NO_ERROR
        }
        for (rM.deleteTexture(OM), rM.deleteFramebuffer(SM), rM.bindFramebuffer(rM.FRAMEBUFFER, null); !iM && rM.getError() !== rM.NO_ERROR;);
        return iM
      }
      _getWebGLTextureType(MM) {
        if (1 === this._webGLVersion) {
          switch (MM) {
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
        switch (MM) {
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
      _getInternalFormat(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = rM ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (MM) {
          case 0:
            iM = this._gl.ALPHA;
            break;
          case 1:
            iM = this._gl.LUMINANCE;
            break;
          case 2:
            iM = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            iM = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            iM = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            iM = rM ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            iM = rM ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (MM) {
          case 8:
            iM = this._gl.RED_INTEGER;
            break;
          case 9:
            iM = this._gl.RG_INTEGER;
            break;
          case 10:
            iM = this._gl.RGB_INTEGER;
            break;
          case 11:
            iM = this._gl.RGBA_INTEGER
        }
        return iM
      }
      _getRGBABufferInternalSizedFormat(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== rM) switch (rM) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return iM ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (MM) {
          case 3:
            switch (rM) {
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
            switch (rM) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return iM ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return iM ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (rM) {
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
            switch (rM) {
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
            switch (rM) {
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
            switch (rM) {
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
            switch (rM) {
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
            switch (rM) {
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
            switch (rM) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return iM ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(MM, rM, iM, OM) {
        let SM = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          jM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          aM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const nM = SM ? 4 : 3,
          QM = SM ? this._gl.RGBA : this._gl.RGB,
          zM = iM * OM * nM;
        if (aM) {
          if (aM.length < zM) return PM.e.Error(`Data buffer is too small to store the read pixels (${aM.length} should be more than ${zM})`), Promise.resolve(aM)
        } else aM = new Uint8Array(zM);
        return jM && this.flushFramebuffer(), this._gl.readPixels(MM, rM, iM, OM, QM, this._gl.UNSIGNED_BYTE, aM), Promise.resolve(aM)
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
          const MM = jM.d._CreateCanvas(1, 1),
            rM = MM.getContext("webgl") || MM.getContext("experimental-webgl");
          this._IsSupported = null != rM && !!globalThis.WebGLRenderingContext
        } catch (MM) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const MM = jM.d._CreateCanvas(1, 1),
            rM = MM.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || MM.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !rM
        } catch (MM) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    GM._TempClearColorUint32 = new Uint32Array(4), GM._TempClearColorInt32 = new Int32Array(4), GM._TempClearColorFloat32 = new Float32Array(4), GM.ExceptionList = [{
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
    }], GM._ConcatenateShader = dM.e, GM._IsSupported = null, GM._HasMajorPerformanceCaveat = null
  },
  41295: (MM, rM, iM) => {
    var OM;
    iM.d(rM, {
        c: () => SM
      }),
      function(MM) {
        MM[MM.PointerMove = 0] = "PointerMove", MM[MM.PointerDown = 1] = "PointerDown", MM[MM.PointerUp = 2] = "PointerUp"
      }(OM || (OM = {}));
    class SM {}
    SM.DOM_DELTA_PIXEL = 0, SM.DOM_DELTA_LINE = 1, SM.DOM_DELTA_PAGE = 2
  },
  41287: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM,
      c: () => jM,
      f: () => SM
    });
    class OM {}
    OM.KEYDOWN = 1, OM.KEYUP = 2;
    class SM {
      constructor(MM, rM) {
        this.type = MM, this.event = rM
      }
    }
    class jM extends SM {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(MM) {
        this.skipOnKeyboardObservable = MM
      }
      constructor(MM, rM) {
        super(MM, rM), this.type = MM, this.event = rM, this.skipOnKeyboardObservable = !1
      }
    }
  },
  41283: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM,
      g: () => aM,
      j: () => PM
    });
    var OM = iM(38040);
    class SM {}
    SM.POINTERDOWN = 1, SM.POINTERUP = 2, SM.POINTERMOVE = 4, SM.POINTERWHEEL = 8, SM.POINTERPICK = 16, SM.POINTERTAP = 32, SM.POINTERDOUBLETAP = 64;
    class jM {
      constructor(MM, rM) {
        this.type = MM, this.event = rM
      }
    }
    class aM extends jM {
      constructor(MM, rM, iM, SM) {
        super(MM, rM), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new OM.o(iM, SM)
      }
    }
    class PM extends jM {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(MM, rM), this._pickInfo = iM, this._inputManager = OM
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  41309: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM
    });
    class OM {
      static CompareLightsPriority(MM, rM) {
        return MM.shadowEnabled !== rM.shadowEnabled ? (rM.shadowEnabled ? 1 : 0) - (MM.shadowEnabled ? 1 : 0) : rM.renderPriority - MM.renderPriority
      }
    }
    OM.FALLOFF_DEFAULT = 0, OM.FALLOFF_PHYSICAL = 1, OM.FALLOFF_GLTF = 2, OM.FALLOFF_STANDARD = 3, OM.LIGHTMAP_DEFAULT = 0, OM.LIGHTMAP_SPECULAR = 1, OM.LIGHTMAP_SHADOWSONLY = 2, OM.INTENSITYMODE_AUTOMATIC = 0, OM.INTENSITYMODE_LUMINOUSPOWER = 1, OM.INTENSITYMODE_LUMINOUSINTENSITY = 2, OM.INTENSITYMODE_ILLUMINANCE = 3, OM.INTENSITYMODE_LUMINANCE = 4, OM.LIGHTTYPEID_POINTLIGHT = 0, OM.LIGHTTYPEID_DIRECTIONALLIGHT = 1, OM.LIGHTTYPEID_SPOTLIGHT = 2, OM.LIGHTTYPEID_HEMISPHERICLIGHT = 3, OM.LIGHTTYPEID_RECT_AREALIGHT = 4, OM.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  40939: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM
    });
    var OM, SM = iM(38068),
      jM = iM(40947);
    ! function(MM) {
      MM[MM.Unknown = 0] = "Unknown", MM[MM.Url = 1] = "Url", MM[MM.Temp = 2] = "Temp", MM[MM.Raw = 3] = "Raw", MM[MM.Dynamic = 4] = "Dynamic", MM[MM.RenderTarget = 5] = "RenderTarget", MM[MM.MultiRenderTarget = 6] = "MultiRenderTarget", MM[MM.Cube = 7] = "Cube", MM[MM.CubeRaw = 8] = "CubeRaw", MM[MM.CubePrefiltered = 9] = "CubePrefiltered", MM[MM.Raw3D = 10] = "Raw3D", MM[MM.Raw2DArray = 11] = "Raw2DArray", MM[MM.DepthStencil = 12] = "DepthStencil", MM[MM.CubeRawRGBD = 13] = "CubeRawRGBD", MM[MM.Depth = 14] = "Depth", MM[MM.External = 15] = "External"
    }(OM || (OM = {}));
    class aM extends jM.d {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(MM) {
        this._useMipMaps = MM
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(MM) {
        this._uniqueId = MM
      }
      ph() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new SM.d, this.onErrorObservable = new SM.d, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = MM, this._source = rM, this._uniqueId = aM._Counter++, iM || (this._hardwareTexture = MM._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, MM, rM, iM), this.width = MM, this.height = rM, this.depth = iM, this.baseWidth = MM, this.baseHeight = rM, this.baseDepth = iM, this._size = MM * rM * iM
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const MM = this.onRebuildCallback(this),
            rM = rM => {
              rM._swapAndDie(this, !1), this.isReady = MM.isReady
            };
          return void(MM.isAsync ? MM.proxy.then(rM) : rM(MM.proxy))
        }
        let MM;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(MM = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (MM => {
              MM._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (MM = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), MM._swapAndDie(this, !1), this._bufferViewArray)
              for (let MM = 0; MM < this._bufferViewArray.length; MM++) {
                const rM = this._bufferViewArray[MM];
                rM && this._engine.updateRawTexture(this, rM, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, MM)
              }
            this.isReady = !0;
            break;
          case 10:
            MM = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), MM._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (MM = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), MM._swapAndDie(this, !1), this._bufferViewArray)
              for (let MM = 0; MM < this._bufferViewArray.length; MM++) {
                const rM = this._bufferViewArray[MM];
                rM && this._engine.updateRawTexture2DArray(this, rM, this.format, this.invertY, this._compression, this.type, MM)
              }
            this.isReady = !0;
            break;
          case 4:
            MM = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), MM._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(MM = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              MM._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            MM = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), MM._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return MM = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (MM => {
              MM && MM._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(MM._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(MM._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), MM._hardwareTexture = this._hardwareTexture, MM._setUniqueId(aM._Counter++), rM && (MM._isRGBD = this._isRGBD), this._lodTextureHigh && (MM._lodTextureHigh && MM._lodTextureHigh.dispose(), MM._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (MM._lodTextureMid && MM._lodTextureMid.dispose(), MM._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (MM._lodTextureLow && MM._lodTextureLow.dispose(), MM._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (MM._irradianceTexture && MM._irradianceTexture.dispose(), MM._irradianceTexture = this._irradianceTexture);
        const iM = this._engine.getLoadedTexturesCache();
        let OM = iM.indexOf(this); - 1 !== OM && iM.splice(OM, 1), OM = iM.indexOf(MM), -1 === OM && iM.push(MM)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    aM._Counter = 0
  },
  41042: (MM, rM, iM) => {
    function OM(MM) {
      return 13 === MM || 14 === MM || 15 === MM || 16 === MM || 17 === MM || 18 === MM || 19 === MM
    }

    function SM(MM) {
      return 8 === MM || 9 === MM || 10 === MM || 11 === MM
    }

    function jM(MM) {
      return 0 === MM || 5 === MM || 7 === MM || 11 === MM
    }

    function aM(MM) {
      return 13 === MM || 17 === MM || 18 === MM || 19 === MM
    }
    iM.d(rM, {
      e: () => aM,
      i: () => OM,
      l: () => SM,
      m: () => jM
    })
  },
  40947: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM
    });
    class OM {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(MM) {
        this._cachedWrapU = MM
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(MM) {
        this._cachedWrapV = MM
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(MM) {
        this._cachedWrapR = MM
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(MM) {
        this._cachedAnisotropicFilteringLevel = MM
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(MM) {
        this._comparisonFunction = MM
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(MM) {
        this._useMipMaps = MM
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = MM, this._cachedWrapV = rM, this._cachedWrapR = iM, this._cachedAnisotropicFilteringLevel = OM, this.samplingMode = SM, this._comparisonFunction = jM, this
      }
      compareSampler(MM) {
        return this._cachedWrapU === MM._cachedWrapU && this._cachedWrapV === MM._cachedWrapV && this._cachedWrapR === MM._cachedWrapR && this._cachedAnisotropicFilteringLevel === MM._cachedAnisotropicFilteringLevel && this.samplingMode === MM.samplingMode && this._comparisonFunction === MM._comparisonFunction && this._useMipMaps === MM._useMipMaps
      }
    }
  },
  41228: (MM, rM, iM) => {
    function OM(MM) {
      MM.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    iM.d(rM, {
      c: () => OM
    })
  },
  41015: (MM, rM, iM) => {
    function OM(MM) {
      return void 0 === MM.getPipelineContext
    }
    iM.d(rM, {
      e: () => OM
    })
  },
  41424: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM
    });
    var OM = iM(41003);
    class SM {
      static GetEffect(MM) {
        return void 0 === MM.getPipelineContext ? MM.effect : MM
      }
      constructor(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = MM.createDrawContext(), rM && (this.materialContext = MM.createMaterialContext())
      }
      setEffect(MM, rM) {
        let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        iM || this.effect === MM || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = MM, void 0 !== rM && (this.defines = rM), iM && this.drawContext?.reset()
      }
      dispose() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const rM = this.effect;
          MM ? rM.dispose() : OM.c.SetImmediate((() => {
            rM.ph().onEndFrameObservable.addOnce((() => {
              rM.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  40967: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => LM,
      c: () => HM,
      g: () => QM,
      i: () => zM
    });
    var OM = iM(40972),
      SM = iM(40975),
      jM = iM(40964),
      aM = iM(39711),
      PM = iM(40998),
      nM = iM(40981);

    function QM(MM, rM) {
      return (0, SM.B)(rM).cachedPipelines[MM]
    }

    function zM(MM) {
      const rM = MM._name,
        iM = MM.context;
      if (rM && iM) {
        const MM = (0, SM.B)(iM),
          OM = MM.cachedPipelines[rM];
        OM?.dispose(), delete MM.cachedPipelines[rM]
      }
    }

    function LM(MM, rM, iM, SM, jM, aM, nM) {
      let QM, zM;
      const LM = (0, OM.l)() ? aM?.getHostDocument() : null;
      QM = "string" === typeof rM ? rM : "string" === typeof rM.vertexSource ? "source:" + rM.vertexSource : "string" === typeof rM.vertexElement ? LM?.getElementById(rM.vertexElement) || rM.vertexElement : rM.vertex || rM, zM = "string" === typeof rM ? rM : "string" === typeof rM.fragmentSource ? "source:" + rM.fragmentSource : "string" === typeof rM.fragmentElement ? LM?.getElementById(rM.fragmentElement) || rM.fragmentElement : rM.fragment || rM;
      const HM = [void 0, void 0],
        hM = () => {
          if (HM[0] && HM[1]) {
            const [OM, QM] = HM;
            (0, PM.c)(MM), (0, PM.h)(OM, MM, ((OM, zM) => {
              nM && (nM._vertexSourceCodeBeforeMigration = zM), iM && (OM = iM("vertex", OM)), MM.isFragment = !0, (0, PM.h)(QM, MM, ((aM, QM) => {
                nM && (nM._fragmentSourceCodeBeforeMigration = QM), iM && (aM = iM("fragment", aM));
                const zM = (0, PM.b)(OM, aM, MM);
                MM = null;
                const LM = function(MM, rM, iM, OM) {
                  if (iM) {
                    return {
                      vertexSourceCode: (1 === OM ? "//" : "") + "#define SHADER_NAME vertex:" + (iM.vertexElement || iM.vertex || iM.spectorName || iM) + "\n" + MM,
                      fragmentSourceCode: (1 === OM ? "//" : "") + "#define SHADER_NAME fragment:" + (iM.fragmentElement || iM.fragment || iM.spectorName || iM) + "\n" + rM
                    }
                  }
                  return {
                    vertexSourceCode: MM,
                    fragmentSourceCode: rM
                  }
                }(zM.vertexCode, zM.fragmentCode, rM, jM);
                SM?.(LM.vertexSourceCode, LM.fragmentSourceCode)
              }), aM)
            }), aM)
          }
        };
      mM(QM, "Vertex", "", (MM => {
        nM && (nM._rawVertexSourceCode = MM), HM[0] = MM, hM()
      }), jM), mM(zM, "Fragment", "Pixel", (MM => {
        nM && (nM._rawFragmentSourceCode = MM), HM[1] = MM, hM()
      }), jM)
    }

    function mM(MM, rM, iM, SM, aM, PM) {
      if ("undefined" !== typeof HTMLElement && MM instanceof HTMLElement) {
        return void SM((0, OM.c)(MM))
      }
      if ("source:" === MM.substring(0, 7)) return void SM(MM.substring(7));
      if ("base64:" === MM.substring(0, 7)) {
        return void SM(window.atob(MM.substring(7)))
      }
      const QM = jM.e.GetShadersStore(aM);
      if (QM[MM + rM + "Shader"]) return void SM(QM[MM + rM + "Shader"]);
      if (iM && QM[MM + iM + "Shader"]) return void SM(QM[MM + iM + "Shader"]);
      let zM;
      if (zM = "." === MM[0] || "/" === MM[0] || MM.indexOf("http") > -1 ? MM : jM.e.GetShadersRepository(aM) + MM, !(PM = PM || nM.i)) throw new Error("loadFileInjection is not defined");
      PM(zM + "." + rM.toLowerCase() + ".fx", SM)
    }
    const HM = (MM, rM, iM, OM) => {
      try {
        const jM = MM.context ? (0, SM.B)(MM.context) : null;
        jM && (jM.disableParallelShaderCompile = MM.disableParallelCompilation);
        const aM = MM.existingPipelineContext || rM(MM.shaderProcessingContext);
        return aM._name = MM.name, MM.name && jM && (jM.cachedPipelines[MM.name] = aM), iM(aM, MM.vertex, MM.fragment, !!MM.createAsRaw, "", "", MM.rebuildRebind, MM.defines, MM.transformFeedbackVaryings, "", (() => {
          OM(aM, (() => {
            MM.onRenderingStateCompiled?.(aM)
          }))
        })), aM
      } catch (jM) {
        throw aM.e.Error("Error compiling effect"), jM
      }
    }
  },
  40957: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => nM
    });
    var OM = iM(38068),
      SM = iM(39711),
      jM = iM(40964),
      aM = iM(40967),
      PM = iM(41003);
    class nM {
      static get ShadersRepository() {
        return jM.e.ShadersRepository
      }
      static set ShadersRepository(MM) {
        jM.e.ShadersRepository = MM
      }
      get xG() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new OM.d), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(MM, rM, iM) {
        let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          jM = arguments.length > 4 ? arguments[4] : void 0,
          PM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          QM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          zM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          LM = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          mM = arguments.length > 9 ? arguments[9] : void 0,
          HM = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          hM = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          JM = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new OM.d, this.onErrorObservable = new OM.d, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = MM, this._key = HM;
        const dM = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let yM;
        if (rM.attributes) {
          const MM = rM;
          if (this._engine = iM, this._attributesNames = MM.attributes, this._uniformsNames = MM.uniformsNames.concat(MM.samplers), this._samplerList = MM.samplers.slice(), this.defines = MM.defines, this.onError = MM.onError, this.onCompiled = MM.onCompiled, this._fallbacks = MM.fallbacks, this._indexParameters = MM.indexParameters, this._transformFeedbackVaryings = MM.transformFeedbackVaryings || null, this._multiTarget = !!MM.multiTarget, this._shaderLanguage = MM.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!MM.disableParallelShaderCompilation, MM.uniformBuffersNames) {
            this._uniformBuffersNamesList = MM.uniformBuffersNames.slice();
            for (let rM = 0; rM < MM.uniformBuffersNames.length; rM++) this._uniformBuffersNames[MM.uniformBuffersNames[rM]] = rM
          }
          this._processFinalCode = MM.processFinalCode ?? null, this._processCodeAfterIncludes = MM.processCodeAfterIncludes ?? void 0, JM = MM.extraInitializationsAsync, yM = MM.existingPipelineContext
        } else this._engine = jM, this.defines = null == PM ? "" : PM, this._uniformsNames = iM.concat(SM), this._samplerList = SM ? SM.slice() : [], this._attributesNames = rM, this._uniformBuffersNamesList = [], this._shaderLanguage = hM, this.onError = LM, this.onCompiled = zM, this._indexParameters = mM, this._fallbacks = QM;
        "WEBGL2" === this._engine.shaderPlatformName && (yM = (0, aM.g)(dM, this._engine._gl) ?? yM), this._attributeLocationByName = {}, this.uniqueId = nM._UniqueIdSeed++, yM ? (this._pipelineContext = yM, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, JM).catch((MM => {
          const rM = MM?.message ?? String(MM),
            iM = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${rM}`);
          MM && "string" === typeof MM.stack && (iM.stack = `${iM.message}\nCaused by: ${MM.stack}`), this._processCompilationErrors(iM)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.xG || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          OM = arguments.length > 3 ? arguments[3] : void 0;
        OM && await OM(), this._processingContext = iM || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const SM = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: MM ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: jM.e.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: jM.e.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          LOM: this._engine.LOM,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, aM.b)(SM, this.name, this._processFinalCode, ((MM, iM) => {
          this._vertexSourceCode = MM, this._fragmentSourceCode = iM, this._prepareEffect(rM)
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
        return !!this._engine.xG || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      ph() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(MM) {
        return this._attributes[MM]
      }
      getAttributeLocationByName(MM) {
        return this._attributeLocationByName[MM]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(MM) {
        return this._uniformsNames.indexOf(MM)
      }
      getUniform(MM) {
        return this._uniforms[MM]
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
        return await new Promise((MM => {
          this.executeWhenCompiled(MM)
        }))
      }
      executeWhenCompiled(MM) {
        this.isReady() ? MM(this) : (this.onCompileObservable.add((rM => {
          MM(rM)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(MM) {
        (0, PM.d)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (rM => {
          this._processCompilationErrors(rM, MM)
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
            LOM: this._engine.LOM,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(MM, rM, iM, OM) {
        this._isReady = !1, this._vertexSourceCodeOverride = MM, this._fragmentSourceCodeOverride = rM, this.onError = (MM, rM) => {
          OM && OM(rM)
        }, this.onCompiled = () => {
          const MM = this.ph().scenes;
          if (MM)
            for (let rM = 0; rM < MM.length; rM++) MM[rM].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(iM)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(MM) {
        if (this._pipelineContext = MM, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let rM = 0; rM < this._attributesNames.length; rM++) {
            const MM = this._attributesNames[rM];
            this._attributeLocationByName[MM] = this._attributes[rM]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), nM.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rM = this._pipelineContext;
        this._isReady = !1;
        try {
          const iM = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            OM = iM ? null : this.defines,
            SM = iM ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            jM = iM ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            PM = this._engine;
          this._pipelineContext = (0, aM.c)({
            existingPipelineContext: MM ? rM : null,
            vertex: SM,
            fragment: jM,
            context: "WEBGL2" === PM.shaderPlatformName || "WEBGL1" === PM.shaderPlatformName ? PM._gl : void 0,
            rebuildRebind: (MM, rM, iM, OM) => this._rebuildProgram(MM, rM, iM, OM),
            defines: OM,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: iM,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: iM => {
              rM && !MM && this._engine._deletePipelineContext(rM), iM && this._onRenderingStateCompiled(iM)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(rM)
        } catch (iM) {
          this._processCompilationErrors(iM, rM)
        }
      }
      _getShaderCodeAndErrorLine(MM, rM, iM) {
        const OM = iM ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let SM = null;
        if (rM && MM) {
          const jM = rM.match(OM);
          if (jM && 2 === jM.length) {
            const rM = parseInt(jM[1]),
              OM = MM.split("\n", -1);
            OM.length >= rM && (SM = `Offending line [${rM}] in ${iM?"fragment":"vertex"} code: ${OM[rM-1]}`)
          }
        }
        return [MM, SM]
      }
      _processCompilationErrors(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof MM?.stack ? MM.stack : MM?.message ?? String(MM);
        const iM = this._attributesNames,
          OM = this._fallbacks;
        if (SM.e.Error("Unable to compile effect:"), SM.e.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), SM.e.Error(`Attributes: ${iM.join(" ")}`), SM.e.Error("Defines:\n" + this.defines), nM.LogShaderCodeOnCompilationError) {
          let MM, rM = null,
            iM = null;
          this._pipelineContext?._getVertexShaderCode() && ([MM, rM] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), MM && (SM.e.Error("Vertex code:"), SM.e.Error(MM))), this._pipelineContext?._getFragmentShaderCode() && ([MM, iM] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), MM && (SM.e.Error("Fragment code:"), SM.e.Error(MM))), rM && SM.e.Error(rM), iM && SM.e.Error(iM)
        }
        SM.e.Error("Error: " + this._compilationError);
        const jM = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        rM && (this._pipelineContext = rM, this._isReady = !0, jM()), OM ? (this._pipelineContext = null, OM.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, SM.e.Error("Trying next fallback."), this.defines = OM.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, jM(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, rM || jM())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(MM, rM) {
        this._engine._bindTexture(this._samplers[MM], rM, MM)
      }
      setTexture(MM, rM) {
        this._engine.setTexture(this._samplers[MM], this._uniforms[MM], rM, MM)
      }
      setTextureArray(MM, rM) {
        const iM = MM + "Ex";
        if (-1 === this._samplerList.indexOf(iM + "0")) {
          const OM = this._samplerList.indexOf(MM);
          for (let MM = 1; MM < rM.length; MM++) {
            const rM = iM + (MM - 1).toString();
            this._samplerList.splice(OM + MM, 0, rM)
          }
          let SM = 0;
          for (const MM of this._samplerList) this._samplers[MM] = SM, SM += 1
        }
        this._engine.setTextureArray(this._samplers[MM], this._uniforms[MM], rM, MM)
      }
      bindUniformBuffer(MM, rM) {
        const iM = this._uniformBuffersNames[rM];
        void 0 === iM || nM._BaseCache[iM] === MM && this._engine._features.useUBOBindingCache || (nM._BaseCache[iM] = MM, this._engine.bindUniformBufferBase(MM, iM, rM))
      }
      bindUniformBlock(MM, rM) {
        this._engine.bindUniformBlock(this._pipelineContext, MM, rM)
      }
      setInt(MM, rM) {
        return this._pipelineContext.setInt(MM, rM), this
      }
      setInt2(MM, rM, iM) {
        return this._pipelineContext.setInt2(MM, rM, iM), this
      }
      setInt3(MM, rM, iM, OM) {
        return this._pipelineContext.setInt3(MM, rM, iM, OM), this
      }
      setInt4(MM, rM, iM, OM, SM) {
        return this._pipelineContext.setInt4(MM, rM, iM, OM, SM), this
      }
      setIntArray(MM, rM) {
        return this._pipelineContext.setIntArray(MM, rM), this
      }
      setIntArray2(MM, rM) {
        return this._pipelineContext.setIntArray2(MM, rM), this
      }
      setIntArray3(MM, rM) {
        return this._pipelineContext.setIntArray3(MM, rM), this
      }
      setIntArray4(MM, rM) {
        return this._pipelineContext.setIntArray4(MM, rM), this
      }
      setUInt(MM, rM) {
        return this._pipelineContext.setUInt(MM, rM), this
      }
      setUInt2(MM, rM, iM) {
        return this._pipelineContext.setUInt2(MM, rM, iM), this
      }
      setUInt3(MM, rM, iM, OM) {
        return this._pipelineContext.setUInt3(MM, rM, iM, OM), this
      }
      setUInt4(MM, rM, iM, OM, SM) {
        return this._pipelineContext.setUInt4(MM, rM, iM, OM, SM), this
      }
      setUIntArray(MM, rM) {
        return this._pipelineContext.setUIntArray(MM, rM), this
      }
      setUIntArray2(MM, rM) {
        return this._pipelineContext.setUIntArray2(MM, rM), this
      }
      setUIntArray3(MM, rM) {
        return this._pipelineContext.setUIntArray3(MM, rM), this
      }
      setUIntArray4(MM, rM) {
        return this._pipelineContext.setUIntArray4(MM, rM), this
      }
      setFloatArray(MM, rM) {
        return this._pipelineContext.setArray(MM, rM), this
      }
      setFloatArray2(MM, rM) {
        return this._pipelineContext.setArray2(MM, rM), this
      }
      setFloatArray3(MM, rM) {
        return this._pipelineContext.setArray3(MM, rM), this
      }
      setFloatArray4(MM, rM) {
        return this._pipelineContext.setArray4(MM, rM), this
      }
      setArray(MM, rM) {
        return this._pipelineContext.setArray(MM, rM), this
      }
      setArray2(MM, rM) {
        return this._pipelineContext.setArray2(MM, rM), this
      }
      setArray3(MM, rM) {
        return this._pipelineContext.setArray3(MM, rM), this
      }
      setArray4(MM, rM) {
        return this._pipelineContext.setArray4(MM, rM), this
      }
      setMatrices(MM, rM) {
        return this._pipelineContext.setMatrices(MM, rM), this
      }
      setMatrix(MM, rM) {
        return this._pipelineContext.setMatrix(MM, rM), this
      }
      setMatrix3x3(MM, rM) {
        return this._pipelineContext.setMatrix3x3(MM, rM), this
      }
      setMatrix2x2(MM, rM) {
        return this._pipelineContext.setMatrix2x2(MM, rM), this
      }
      setFloat(MM, rM) {
        return this._pipelineContext.setFloat(MM, rM), this
      }
      setBool(MM, rM) {
        return this._pipelineContext.setInt(MM, rM ? 1 : 0), this
      }
      setVector2(MM, rM) {
        return this._pipelineContext.setVector2(MM, rM), this
      }
      setFloat2(MM, rM, iM) {
        return this._pipelineContext.setFloat2(MM, rM, iM), this
      }
      setVector3(MM, rM) {
        return this._pipelineContext.setVector3(MM, rM), this
      }
      setFloat3(MM, rM, iM, OM) {
        return this._pipelineContext.setFloat3(MM, rM, iM, OM), this
      }
      setVector4(MM, rM) {
        return this._pipelineContext.setVector4(MM, rM), this
      }
      setQuaternion(MM, rM) {
        return this._pipelineContext.setQuaternion(MM, rM), this
      }
      setFloat4(MM, rM, iM, OM, SM) {
        return this._pipelineContext.setFloat4(MM, rM, iM, OM, SM), this
      }
      setColor3(MM, rM) {
        return this._pipelineContext.setColor3(MM, rM), this
      }
      setColor4(MM, rM, iM) {
        return this._pipelineContext.setColor4(MM, rM, iM), this
      }
      setDirectColor4(MM, rM) {
        return this._pipelineContext.setDirectColor4(MM, rM), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (nM.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, aM.i)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        rM && (jM.e.GetShadersStore(OM)[`${MM}PixelShader`] = rM), iM && (jM.e.GetShadersStore(OM)[`${MM}VertexShader`] = iM)
      }
      static ResetCache() {
        nM._BaseCache = {}
      }
    }
    nM.LogShaderCodeOnCompilationError = !0, nM.PersistentMode = !1, nM.AutomaticallyClearCodeCache = !1, nM._UniqueIdSeed = 0, nM._BaseCache = {}, nM.ShadersStore = jM.e.ShadersStore, nM.IncludesShadersStore = jM.e.IncludesShadersStore
  },
  41266: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => zM,
      e: () => eM,
      f: () => CM
    });
    var OM = iM(40957),
      SM = iM(38040),
      jM = iM(38083),
      aM = iM(41240);
    const PM = new SM.d,
      nM = new SM.d,
      QM = new SM.d,
      zM = {
        Hk: () => {},
        eyeAtCamera: !0
      };

    function LM(MM, rM, iM) {
      const OM = iM.HOM(),
        SM = rM.HOM();
      for (let jM = 0; jM < 16; jM++) OM[jM] = SM[jM];
      return OM[12] -= MM.x, OM[13] -= MM.y, OM[14] -= MM.z, iM.markAsUpdated(), iM
    }

    function mM(MM, rM, iM) {
      return (0, jM.f)(rM, nM), LM(MM, nM, QM), (0, jM.f)(QM, iM), iM
    }

    function HM(MM, rM, iM) {
      if (!zM.eyeAtCamera) return mM(MM, rM, iM);
      const OM = iM.HOM(),
        SM = rM.HOM();
      for (let jM = 0; jM < 16; jM++) OM[jM] = SM[jM];
      return OM[12] = 0, OM[13] = 0, OM[14] = 0, iM.markAsUpdated(), iM
    }

    function hM(MM, rM, iM, OM) {
      return (0, jM.p)(HM(MM, rM, OM), iM, OM), OM
    }

    function JM(MM, rM, iM, OM) {
      return (0, jM.f)(iM, nM), (0, jM.p)(rM, nM, QM), LM(MM, QM, nM), HM(MM, iM, QM), (0, jM.p)(nM, QM, OM), OM
    }

    function dM(MM, rM, iM, OM, SM, aM) {
      return (0, jM.f)(iM, nM), (0, jM.p)(rM, nM, QM), LM(MM, QM, nM), hM(MM, OM, SM, QM), (0, jM.p)(nM, QM, aM), aM
    }

    function yM(MM, rM) {
      const iM = zM.Hk();
      if (!iM || PM === rM) return rM;
      PM.updateFlag = rM.updateFlag;
      const OM = iM.floatingOriginOffset;
      switch (MM) {
        case "world":
          return LM(OM, rM, PM);
        case "view":
          return HM(OM, rM, PM);
        case "worldView":
          return JM(OM, rM, iM.getViewMatrix(), PM);
        case "viewProjection":
          return hM(OM, iM.getViewMatrix(), iM.getProjectionMatrix(), PM);
        case "worldViewProjection":
          return dM(OM, rM, iM.getTransformMatrix(), iM.getViewMatrix(), iM.getProjectionMatrix(), PM);
        default:
          if (MM.startsWith("u_")) {
            const SM = MM.toLowerCase();
            if (SM.startsWith("u_worldviewprojection")) return dM(OM, rM, iM.getTransformMatrix(), iM.getViewMatrix(), iM.getProjectionMatrix(), PM);
            if (SM.startsWith("u_viewprojection")) return hM(OM, iM.getViewMatrix(), iM.getProjectionMatrix(), PM);
            if (SM.startsWith("u_worldview")) return JM(OM, rM, iM.getViewMatrix(), PM);
            if (SM.startsWith("u_world")) return LM(OM, rM, PM);
            if (SM.startsWith("u_view")) return HM(OM, rM, PM)
          }
          return rM
      }
    }
    const lM = aM.b,
      EM = OM.c,
      UM = lM.prototype._updateMatrixForUniform,
      GM = OM.c.prototype.setMatrix;

    function CM() {
      OM.c.prototype.setMatrix = GM, EM._setMatrixOverride = void 0, lM.prototype._updateMatrixForUniform = UM, lM.prototype._updateMatrixForUniformOverride = void 0
    }

    function eM() {
      EM.prototype._setMatrixOverride = GM, EM.prototype.setMatrix = function(MM, rM) {
        return this._setMatrixOverride(MM, yM(MM, rM)), this
      }, lM.prototype._updateMatrixForUniformOverride = UM, lM.prototype._updateMatrixForUniform = function(MM, rM) {
        this._updateMatrixForUniformOverride(MM, yM(MM, rM))
      }
    }
  },
  41231: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM,
      i: () => SM
    });
    var OM = iM(41228);

    function SM(MM, rM) {
      rM.WHITEBALANCE && MM.push("whiteBalanceMatrix"), rM.EXPOSURE && MM.push("exposureLinear"), rM.CONTRAST && MM.push("contrast"), rM.COLORGRADING && MM.push("colorTransformSettings"), (rM.VIGNETTE || rM.DITHER) && MM.push("vInverseScreenSize"), rM.VIGNETTE && (MM.push("vignetteSettings1"), MM.push("vignetteSettings2")), rM.COLORCURVES && (0, OM.c)(MM), rM.DITHER && MM.push("ditherIntensity")
    }

    function jM(MM, rM) {
      rM.COLORGRADING && MM.push("txColorTransform")
    }
  },
  41220: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => uM,
      d: () => WM
    });
    var OM = iM(41099),
      SM = iM(41105),
      jM = iM(38068),
      aM = iM(38173),
      PM = iM(38074),
      nM = iM(38040);
    const QM = [
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
      zM = 1e6 / QM[QM.length - 1][0],
      LM = 150;

    function mM(MM, rM) {
      const iM = Number.isNaN(MM) ? zM : Math.max(MM, zM),
        OM = (0, PM.Clamp)(1e6 / iM, QM[0][0], QM[QM.length - 1][0]);
      let SM = 0,
        jM = QM.length - 1;
      for (; jM - SM > 1;) {
        const MM = SM + jM >> 1;
        QM[MM][0] <= OM ? SM = MM : jM = MM
      }
      const aM = SM,
        [mM, HM, hM, JM] = QM[aM],
        [dM, yM, lM, EM] = QM[aM + 1],
        UM = (OM - mM) / (dM - mM),
        GM = nM.o.Lerp(new nM.o(HM, hM), new nM.o(yM, lM), UM),
        CM = nM.o.Normalize(new nM.o(1, JM)),
        eM = nM.o.Normalize(new nM.o(1, EM)),
        bM = nM.o.Normalize(nM.o.Lerp(CM, eM, UM)),
        wM = (0, PM.Clamp)(rM, -150, LM);
      GM.kOM(bM.scale(wM / 3e3));
      const tM = 2 * GM.x - 8 * GM.y + 4,
        gM = 3 * GM.x / tM,
        uM = 2 * GM.y / tM;
      return new nM.q(gM / uM, 1, (1 - gM - uM) / uM)
    }
    const HM = nM.d.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      hM = nM.d.Invert(HM);

    function JM(MM, rM) {
      const iM = rM > 0 ? MM / rM : 10;
      return (0, PM.Clamp)(iM, .1, 10)
    }

    function dM(MM, rM) {
      const iM = nM.q.TransformNormal(MM, HM),
        OM = nM.q.TransformNormal(rM, HM),
        SM = nM.d.FromArray([JM(OM.x, iM.x), 0, 0, 0, 0, JM(OM.y, iM.y), 0, 0, 0, 0, JM(OM.z, iM.z), 0, 0, 0, 0, 1]);
      return HM.multiply(SM).multiply(hM)
    }
    const yM = new nM.q(.95047, 1, 1.08883),
      lM = nM.d.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(dM(yM, mM(6500, 0))),
      EM = nM.d.Invert(lM),
      UM = nM.q.TransformNormal(new nM.q(1, 1, 1), lM);
    var GM = iM(41121),
      CM = iM(41228);
    let eM = (() => {
      var MM;
      let rM, iM, jM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM = [],
        yM = [],
        lM = [],
        EM = [],
        UM = [],
        eM = [],
        bM = [],
        wM = [],
        tM = [],
        gM = [],
        uM = [],
        RM = [],
        pM = [],
        WM = [],
        sM = [],
        DM = [],
        kM = [],
        ZM = [],
        oM = [],
        fM = [],
        YM = [],
        NM = [],
        AM = [],
        xM = [];
      return MM = class {
        constructor() {
          this._dirty = !0, this._tempColor = new aM.h(0, 0, 0, 0), this._globalCurve = new aM.h(0, 0, 0, 0), this._highlightsCurve = new aM.h(0, 0, 0, 0), this._midtonesCurve = new aM.h(0, 0, 0, 0), this._shadowsCurve = new aM.h(0, 0, 0, 0), this._positiveCurve = new aM.h(0, 0, 0, 0), this._negativeCurve = new aM.h(0, 0, 0, 0), this._globalHue = (0, OM.m)(this, dM, 30), this._globalDensity = ((0, OM.m)(this, yM), (0, OM.m)(this, lM, 0)), this._globalSaturation = ((0, OM.m)(this, EM), (0, OM.m)(this, UM, 0)), this._globalExposure = ((0, OM.m)(this, eM), (0, OM.m)(this, bM, 0)), this._highlightsHue = ((0, OM.m)(this, wM), (0, OM.m)(this, tM, 30)), this._highlightsDensity = ((0, OM.m)(this, gM), (0, OM.m)(this, uM, 0)), this._highlightsSaturation = ((0, OM.m)(this, RM), (0, OM.m)(this, pM, 0)), this._highlightsExposure = ((0, OM.m)(this, WM), (0, OM.m)(this, sM, 0)), this._midtonesHue = ((0, OM.m)(this, DM), (0, OM.m)(this, kM, 30)), this._midtonesDensity = ((0, OM.m)(this, ZM), (0, OM.m)(this, oM, 0)), this._midtonesSaturation = ((0, OM.m)(this, fM), (0, OM.m)(this, YM, 0)), this._midtonesExposure = ((0, OM.m)(this, NM), (0, OM.m)(this, AM, 0)), this._shadowsHue = ((0, OM.m)(this, xM), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(MM) {
          this._globalHue = MM, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(MM) {
          this._globalDensity = MM, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(MM) {
          this._globalSaturation = MM, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(MM) {
          this._globalExposure = MM, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(MM) {
          this._highlightsHue = MM, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(MM) {
          this._highlightsDensity = MM, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(MM) {
          this._highlightsSaturation = MM, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(MM) {
          this._highlightsExposure = MM, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(MM) {
          this._midtonesHue = MM, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(MM) {
          this._midtonesDensity = MM, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(MM) {
          this._midtonesSaturation = MM, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(MM) {
          this._midtonesExposure = MM, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(MM) {
          this._shadowsHue = MM, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(MM) {
          this._shadowsDensity = MM, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(MM) {
          this._shadowsSaturation = MM, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(MM) {
          this._shadowsExposure = MM, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(rM, iM, OM, SM, jM) {
          null != rM && (rM = MM._Clamp(rM, 0, 360), iM = MM._Clamp(iM, -100, 100), OM = MM._Clamp(OM, -100, 100), SM = MM._Clamp(SM, -100, 100), iM = MM._ApplyColorGradingSliderNonlinear(iM), iM *= .5, SM = MM._ApplyColorGradingSliderNonlinear(SM), iM < 0 && (iM *= -1, rM = (rM + 180) % 360), MM._FromHSBToRef(rM, iM, 50 + .25 * SM, jM), jM.scaleToRef(2, jM), jM.a = 1 + .01 * OM)
        }
        static _ApplyColorGradingSliderNonlinear(MM) {
          MM /= 100;
          let rM = Math.abs(MM);
          return rM = Math.pow(rM, 2), MM < 0 && (rM *= -1), rM *= 100, rM
        }
        static _FromHSBToRef(rM, iM, OM, SM) {
          let jM = MM._Clamp(rM, 0, 360);
          const aM = MM._Clamp(iM / 100, 0, 1),
            PM = MM._Clamp(OM / 100, 0, 1);
          if (0 === aM) SM.r = PM, SM.g = PM, SM.b = PM;
          else {
            jM /= 60;
            const MM = Math.floor(jM),
              rM = jM - MM,
              iM = PM * (1 - aM),
              OM = PM * (1 - aM * rM),
              nM = PM * (1 - aM * (1 - rM));
            switch (MM) {
              case 0:
                SM.r = PM, SM.g = nM, SM.b = iM;
                break;
              case 1:
                SM.r = OM, SM.g = PM, SM.b = iM;
                break;
              case 2:
                SM.r = iM, SM.g = PM, SM.b = nM;
                break;
              case 3:
                SM.r = iM, SM.g = OM, SM.b = PM;
                break;
              case 4:
                SM.r = nM, SM.g = iM, SM.b = PM;
                break;
              default:
                SM.r = PM, SM.g = iM, SM.b = OM
            }
          }
          SM.a = 1
        }
        static _Clamp(MM, rM, iM) {
          return Math.min(Math.max(MM, rM), iM)
        }
        clone() {
          return GM.b.Clone((() => new MM), this)
        }
        serialize() {
          return GM.b.Serialize(this)
        }
        _bind(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), MM && (MM.setFloat4(rM, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), MM.setFloat4(iM, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), MM.setFloat4(OM, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const aM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rM = [(0, SM.L)()], iM = [(0, SM.L)()], jM = [(0, SM.L)()], PM = [(0, SM.L)()], nM = [(0, SM.L)()], QM = [(0, SM.L)()], zM = [(0, SM.L)()], LM = [(0, SM.L)()], mM = [(0, SM.L)()], HM = [(0, SM.L)()], hM = [(0, SM.L)()], JM = [(0, SM.L)()], (0, OM.i)(null, null, rM, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: MM => "_globalHue" in MM,
            get: MM => MM._globalHue,
            set: (MM, rM) => {
              MM._globalHue = rM
            }
          },
          metadata: aM
        }, dM, yM), (0, OM.i)(null, null, iM, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: MM => "_globalDensity" in MM,
            get: MM => MM._globalDensity,
            set: (MM, rM) => {
              MM._globalDensity = rM
            }
          },
          metadata: aM
        }, lM, EM), (0, OM.i)(null, null, jM, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: MM => "_globalSaturation" in MM,
            get: MM => MM._globalSaturation,
            set: (MM, rM) => {
              MM._globalSaturation = rM
            }
          },
          metadata: aM
        }, UM, eM), (0, OM.i)(null, null, PM, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: MM => "_globalExposure" in MM,
            get: MM => MM._globalExposure,
            set: (MM, rM) => {
              MM._globalExposure = rM
            }
          },
          metadata: aM
        }, bM, wM), (0, OM.i)(null, null, nM, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: MM => "_highlightsHue" in MM,
            get: MM => MM._highlightsHue,
            set: (MM, rM) => {
              MM._highlightsHue = rM
            }
          },
          metadata: aM
        }, tM, gM), (0, OM.i)(null, null, QM, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: MM => "_highlightsDensity" in MM,
            get: MM => MM._highlightsDensity,
            set: (MM, rM) => {
              MM._highlightsDensity = rM
            }
          },
          metadata: aM
        }, uM, RM), (0, OM.i)(null, null, zM, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: MM => "_highlightsSaturation" in MM,
            get: MM => MM._highlightsSaturation,
            set: (MM, rM) => {
              MM._highlightsSaturation = rM
            }
          },
          metadata: aM
        }, pM, WM), (0, OM.i)(null, null, LM, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: MM => "_highlightsExposure" in MM,
            get: MM => MM._highlightsExposure,
            set: (MM, rM) => {
              MM._highlightsExposure = rM
            }
          },
          metadata: aM
        }, sM, DM), (0, OM.i)(null, null, mM, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: MM => "_midtonesHue" in MM,
            get: MM => MM._midtonesHue,
            set: (MM, rM) => {
              MM._midtonesHue = rM
            }
          },
          metadata: aM
        }, kM, ZM), (0, OM.i)(null, null, HM, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: MM => "_midtonesDensity" in MM,
            get: MM => MM._midtonesDensity,
            set: (MM, rM) => {
              MM._midtonesDensity = rM
            }
          },
          metadata: aM
        }, oM, fM), (0, OM.i)(null, null, hM, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: MM => "_midtonesSaturation" in MM,
            get: MM => MM._midtonesSaturation,
            set: (MM, rM) => {
              MM._midtonesSaturation = rM
            }
          },
          metadata: aM
        }, YM, NM), (0, OM.i)(null, null, JM, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: MM => "_midtonesExposure" in MM,
            get: MM => MM._midtonesExposure,
            set: (MM, rM) => {
              MM._midtonesExposure = rM
            }
          },
          metadata: aM
        }, AM, xM), aM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: aM
        })
      })(), MM.PrepareUniforms = CM.c, MM
    })();

    function bM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      MM._bind(rM, iM, OM, SM)
    }
    var wM = iM(41034),
      tM = iM(41231),
      gM = iM(38085);
    let uM = (() => {
        var MM;
        let rM, iM, QM, HM, hM, JM, yM, CM, gM, uM, RM, pM, WM, sM, DM, kM, ZM, oM, fM, YM, NM, AM, xM, vM, FM, BM, XM, IM, KM = [],
          qM = [],
          TM = [],
          VM = [],
          cM = [],
          Mr = [],
          rr = [],
          ir = [],
          Or = [],
          Sr = [],
          jr = [],
          ar = [],
          Pr = [],
          nr = [],
          Qr = [],
          zr = [],
          Lr = [],
          mr = [],
          Hr = [],
          hr = [],
          Jr = [],
          dr = [],
          yr = [],
          lr = [],
          Er = [],
          Ur = [],
          Gr = [],
          Cr = [],
          er = [],
          br = [],
          wr = [],
          tr = [],
          gr = [],
          ur = [],
          Rr = [],
          pr = [],
          Wr = [],
          sr = [],
          Dr = [],
          kr = [],
          Zr = [],
          or = [],
          fr = [],
          Yr = [],
          Nr = [],
          Ar = [],
          xr = [],
          vr = [],
          Fr = [],
          Br = [],
          Xr = [],
          Ir = [],
          Kr = [],
          qr = [],
          Tr = [],
          Vr = [];
        return MM = class {
          constructor() {
            this.colorCurves = (0, OM.m)(this, KM, new eM), this._colorCurvesEnabled = ((0, OM.m)(this, qM), (0, OM.m)(this, TM, !1)), this._colorGradingTexture = ((0, OM.m)(this, VM), (0, OM.m)(this, cM, void 0)), this._colorGradingEnabled = ((0, OM.m)(this, Mr), (0, OM.m)(this, rr, !1)), this._colorGradingWithGreenDepth = ((0, OM.m)(this, ir), (0, OM.m)(this, Or, !0)), this._colorGradingBGR = ((0, OM.m)(this, Sr), (0, OM.m)(this, jr, !0)), this._exposure = ((0, OM.m)(this, ar), (0, OM.m)(this, Pr, 1)), this._toneMappingEnabled = ((0, OM.m)(this, nr), (0, OM.m)(this, Qr, !1)), this._toneMappingType = ((0, OM.m)(this, zr), (0, OM.m)(this, Lr, MM.TONEMAPPING_STANDARD)), this._contrast = ((0, OM.m)(this, mr), (0, OM.m)(this, Hr, 1)), this._whiteBalanceEnabled = ((0, OM.m)(this, hr), (0, OM.m)(this, Jr, !1)), this._temperature = ((0, OM.m)(this, dr), (0, OM.m)(this, yr, 6500)), this._tint = ((0, OM.m)(this, lr), (0, OM.m)(this, Er, 0)), this._whiteBalanceMatrix = ((0, OM.m)(this, Ur), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, OM.m)(this, Gr, 0), this.vignetteCenterX = ((0, OM.m)(this, Cr), (0, OM.m)(this, er, 0)), this.vignetteCenterY = ((0, OM.m)(this, br), (0, OM.m)(this, wr, 0)), this.vignetteWeight = ((0, OM.m)(this, tr), (0, OM.m)(this, gr, 1.5)), this.vignetteColor = ((0, OM.m)(this, ur), (0, OM.m)(this, Rr, new aM.h(0, 0, 0, 0))), this.vignetteCameraFov = ((0, OM.m)(this, pr), (0, OM.m)(this, Wr, .5)), this._vignetteBlendMode = ((0, OM.m)(this, sr), (0, OM.m)(this, Dr, MM.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, OM.m)(this, kr), (0, OM.m)(this, Zr, !1)), this._ditheringEnabled = ((0, OM.m)(this, or), (0, OM.m)(this, fr, !1)), this._ditheringIntensity = ((0, OM.m)(this, Yr), (0, OM.m)(this, Nr, 1 / 255)), this._skipFinalColorClamp = ((0, OM.m)(this, Ar), (0, OM.m)(this, xr, !1)), this._applyByPostProcess = ((0, OM.m)(this, vr), (0, OM.m)(this, Fr, !1)), this._isEnabled = ((0, OM.m)(this, Br), (0, OM.m)(this, Xr, !0)), this.outputTextureWidth = ((0, OM.m)(this, Ir), (0, OM.m)(this, Kr, 0)), this.outputTextureHeight = ((0, OM.m)(this, qr), (0, OM.m)(this, Tr, 0)), this.onUpdateParameters = ((0, OM.m)(this, Vr), new jM.d)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(MM) {
            this._colorCurvesEnabled !== MM && (this._colorCurvesEnabled = MM, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(MM) {
            this._colorGradingTexture !== MM && (this._colorGradingTexture = MM, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(MM) {
            this._colorGradingEnabled !== MM && (this._colorGradingEnabled = MM, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(MM) {
            this._colorGradingWithGreenDepth !== MM && (this._colorGradingWithGreenDepth = MM, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(MM) {
            this._colorGradingBGR !== MM && (this._colorGradingBGR = MM, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(MM) {
            this._exposure !== MM && (this._exposure = MM, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(MM) {
            this._toneMappingEnabled !== MM && (this._toneMappingEnabled = MM, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(MM) {
            this._toneMappingType !== MM && (this._toneMappingType = MM, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(MM) {
            this._contrast !== MM && (this._contrast = MM, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(MM) {
            this._whiteBalanceEnabled !== MM && (this._whiteBalanceEnabled = MM, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(MM) {
            MM = Number.isNaN(MM) ? zM : Math.max(MM, zM), this._temperature !== MM && (this._temperature = MM, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(MM) {
            MM = (0, PM.Clamp)(MM, -150, LM), this._tint !== MM && (this._tint = MM, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(MM, rM) {
              const iM = dM(mM(MM, rM), UM),
                OM = lM.multiply(iM).multiply(EM);
              return nM.d.GetAsMatrix3x3(OM)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(MM) {
            this.vignetteCenterY = MM
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(MM) {
            this.vignetteCenterX = MM
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(MM) {
            this._vignetteBlendMode !== MM && (this._vignetteBlendMode = MM, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(MM) {
            this._vignetteEnabled !== MM && (this._vignetteEnabled = MM, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(MM) {
            this._ditheringEnabled !== MM && (this._ditheringEnabled = MM, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(MM) {
            this._ditheringIntensity !== MM && (this._ditheringIntensity = MM, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(MM) {
            this._skipFinalColorClamp !== MM && (this._skipFinalColorClamp = MM, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(MM) {
            this._applyByPostProcess !== MM && (this._applyByPostProcess = MM, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(MM) {
            this._isEnabled !== MM && (this._isEnabled = MM, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(rM) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return rM.WHITEBALANCE = !1, rM.VIGNETTE = !1, rM.TONEMAPPING = 0, rM.CONTRAST = !1, rM.EXPOSURE = !1, rM.COLORCURVES = !1, rM.COLORGRADING = !1, rM.COLORGRADING3D = !1, rM.DITHER = !1, rM.IMAGEPROCESSING = !1, rM.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(rM.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (rM.WHITEBALANCE = this._whiteBalanceEnabled, rM.VIGNETTE = this.vignetteEnabled, rM.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === MM._VIGNETTEMODE_MULTIPLY, rM.VIGNETTEBLENDMODEOPAQUE = !rM.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case MM.TONEMAPPING_KHR_PBR_NEUTRAL:
                rM.TONEMAPPING = 3;
                break;
              case MM.TONEMAPPING_ACES:
                rM.TONEMAPPING = 2;
                break;
              default:
                rM.TONEMAPPING = 1
            } else rM.TONEMAPPING = 0;
            rM.CONTRAST = 1 !== this.contrast, rM.EXPOSURE = 1 !== this.exposure, rM.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, rM.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, rM.COLORGRADING ? rM.COLORGRADING3D = this.colorGradingTexture.is3D : rM.COLORGRADING3D = !1, rM.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, rM.SAMPLER3DBGRMAP = this.colorGradingBGR, rM.DITHER = this._ditheringEnabled, rM.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, rM.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, rM.IMAGEPROCESSING = rM.WHITEBALANCE || rM.VIGNETTE || !!rM.TONEMAPPING || rM.CONTRAST || rM.EXPOSURE || rM.COLORCURVES || rM.COLORGRADING || rM.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(MM, rM) {
            if (this._whiteBalanceEnabled && MM.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && bM(this.colorCurves, MM), this._vignetteEnabled || this._ditheringEnabled) {
              const iM = 1 / (this.outputTextureWidth || MM.ph().getRenderWidth()),
                OM = 1 / (this.outputTextureHeight || MM.ph().getRenderHeight());
              if (MM.setFloat2("vInverseScreenSize", iM, OM), this._ditheringEnabled && MM.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const SM = null != rM ? rM : OM / iM;
                let jM = Math.tan(.5 * this.vignetteCameraFov),
                  aM = jM * SM;
                const PM = Math.sqrt(aM * jM);
                aM = (0, wM.i)(aM, PM, this.vignetteStretch), jM = (0, wM.i)(jM, PM, this.vignetteStretch), MM.setFloat4("vignetteSettings1", aM, jM, -aM * this.vignetteCenterX, -jM * this.vignetteCenterY);
                const nM = -2 * this.vignetteWeight;
                MM.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, nM)
              }
            }
            if (MM.setFloat("exposureLinear", this.exposure), MM.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              MM.setTexture("txColorTransform", this.colorGradingTexture);
              const rM = this.colorGradingTexture.getSize().height;
              MM.setFloat4("colorTransformSettings", (rM - 1) / rM, .5 / rM, rM, this.colorGradingTexture.level)
            }
          }
          clone() {
            return GM.b.Clone((() => new MM), this)
          }
          serialize() {
            return GM.b.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const jM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          rM = [(0, SM.n)()], iM = [(0, SM.L)()], QM = [(0, SM.B)("colorGradingTexture")], HM = [(0, SM.L)()], hM = [(0, SM.L)()], JM = [(0, SM.L)()], yM = [(0, SM.L)()], CM = [(0, SM.L)()], gM = [(0, SM.L)()], uM = [(0, SM.L)()], RM = [(0, SM.L)()], pM = [(0, SM.L)()], WM = [(0, SM.L)()], sM = [(0, SM.L)()], DM = [(0, SM.L)()], kM = [(0, SM.L)()], ZM = [(0, SM.L)()], oM = [(0, SM.s)()], fM = [(0, SM.L)()], YM = [(0, SM.L)()], NM = [(0, SM.L)()], AM = [(0, SM.L)()], xM = [(0, SM.L)()], vM = [(0, SM.L)()], FM = [(0, SM.L)()], BM = [(0, SM.L)()], XM = [(0, SM.L)()], IM = [(0, SM.L)()], (0, OM.i)(null, null, rM, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: MM => "colorCurves" in MM,
              get: MM => MM.colorCurves,
              set: (MM, rM) => {
                MM.colorCurves = rM
              }
            },
            metadata: jM
          }, KM, qM), (0, OM.i)(null, null, iM, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: MM => "_colorCurvesEnabled" in MM,
              get: MM => MM._colorCurvesEnabled,
              set: (MM, rM) => {
                MM._colorCurvesEnabled = rM
              }
            },
            metadata: jM
          }, TM, VM), (0, OM.i)(null, null, QM, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "_colorGradingTexture" in MM,
              get: MM => MM._colorGradingTexture,
              set: (MM, rM) => {
                MM._colorGradingTexture = rM
              }
            },
            metadata: jM
          }, cM, Mr), (0, OM.i)(null, null, HM, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: MM => "_colorGradingEnabled" in MM,
              get: MM => MM._colorGradingEnabled,
              set: (MM, rM) => {
                MM._colorGradingEnabled = rM
              }
            },
            metadata: jM
          }, rr, ir), (0, OM.i)(null, null, hM, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: MM => "_colorGradingWithGreenDepth" in MM,
              get: MM => MM._colorGradingWithGreenDepth,
              set: (MM, rM) => {
                MM._colorGradingWithGreenDepth = rM
              }
            },
            metadata: jM
          }, Or, Sr), (0, OM.i)(null, null, JM, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: MM => "_colorGradingBGR" in MM,
              get: MM => MM._colorGradingBGR,
              set: (MM, rM) => {
                MM._colorGradingBGR = rM
              }
            },
            metadata: jM
          }, jr, ar), (0, OM.i)(null, null, yM, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: MM => "_exposure" in MM,
              get: MM => MM._exposure,
              set: (MM, rM) => {
                MM._exposure = rM
              }
            },
            metadata: jM
          }, Pr, nr), (0, OM.i)(null, null, CM, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: MM => "_toneMappingEnabled" in MM,
              get: MM => MM._toneMappingEnabled,
              set: (MM, rM) => {
                MM._toneMappingEnabled = rM
              }
            },
            metadata: jM
          }, Qr, zr), (0, OM.i)(null, null, gM, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: MM => "_toneMappingType" in MM,
              get: MM => MM._toneMappingType,
              set: (MM, rM) => {
                MM._toneMappingType = rM
              }
            },
            metadata: jM
          }, Lr, mr), (0, OM.i)(null, null, uM, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: MM => "_contrast" in MM,
              get: MM => MM._contrast,
              set: (MM, rM) => {
                MM._contrast = rM
              }
            },
            metadata: jM
          }, Hr, hr), (0, OM.i)(null, null, RM, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: MM => "_whiteBalanceEnabled" in MM,
              get: MM => MM._whiteBalanceEnabled,
              set: (MM, rM) => {
                MM._whiteBalanceEnabled = rM
              }
            },
            metadata: jM
          }, Jr, dr), (0, OM.i)(null, null, pM, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: MM => "_temperature" in MM,
              get: MM => MM._temperature,
              set: (MM, rM) => {
                MM._temperature = rM
              }
            },
            metadata: jM
          }, yr, lr), (0, OM.i)(null, null, WM, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: MM => "_tint" in MM,
              get: MM => MM._tint,
              set: (MM, rM) => {
                MM._tint = rM
              }
            },
            metadata: jM
          }, Er, Ur), (0, OM.i)(null, null, sM, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: MM => "vignetteStretch" in MM,
              get: MM => MM.vignetteStretch,
              set: (MM, rM) => {
                MM.vignetteStretch = rM
              }
            },
            metadata: jM
          }, Gr, Cr), (0, OM.i)(null, null, DM, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: MM => "vignetteCenterX" in MM,
              get: MM => MM.vignetteCenterX,
              set: (MM, rM) => {
                MM.vignetteCenterX = rM
              }
            },
            metadata: jM
          }, er, br), (0, OM.i)(null, null, kM, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: MM => "vignetteCenterY" in MM,
              get: MM => MM.vignetteCenterY,
              set: (MM, rM) => {
                MM.vignetteCenterY = rM
              }
            },
            metadata: jM
          }, wr, tr), (0, OM.i)(null, null, ZM, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: MM => "vignetteWeight" in MM,
              get: MM => MM.vignetteWeight,
              set: (MM, rM) => {
                MM.vignetteWeight = rM
              }
            },
            metadata: jM
          }, gr, ur), (0, OM.i)(null, null, oM, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: MM => "vignetteColor" in MM,
              get: MM => MM.vignetteColor,
              set: (MM, rM) => {
                MM.vignetteColor = rM
              }
            },
            metadata: jM
          }, Rr, pr), (0, OM.i)(null, null, fM, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: MM => "vignetteCameraFov" in MM,
              get: MM => MM.vignetteCameraFov,
              set: (MM, rM) => {
                MM.vignetteCameraFov = rM
              }
            },
            metadata: jM
          }, Wr, sr), (0, OM.i)(null, null, YM, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: MM => "_vignetteBlendMode" in MM,
              get: MM => MM._vignetteBlendMode,
              set: (MM, rM) => {
                MM._vignetteBlendMode = rM
              }
            },
            metadata: jM
          }, Dr, kr), (0, OM.i)(null, null, NM, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: MM => "_vignetteEnabled" in MM,
              get: MM => MM._vignetteEnabled,
              set: (MM, rM) => {
                MM._vignetteEnabled = rM
              }
            },
            metadata: jM
          }, Zr, or), (0, OM.i)(null, null, AM, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: MM => "_ditheringEnabled" in MM,
              get: MM => MM._ditheringEnabled,
              set: (MM, rM) => {
                MM._ditheringEnabled = rM
              }
            },
            metadata: jM
          }, fr, Yr), (0, OM.i)(null, null, xM, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: MM => "_ditheringIntensity" in MM,
              get: MM => MM._ditheringIntensity,
              set: (MM, rM) => {
                MM._ditheringIntensity = rM
              }
            },
            metadata: jM
          }, Nr, Ar), (0, OM.i)(null, null, vM, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: MM => "_skipFinalColorClamp" in MM,
              get: MM => MM._skipFinalColorClamp,
              set: (MM, rM) => {
                MM._skipFinalColorClamp = rM
              }
            },
            metadata: jM
          }, xr, vr), (0, OM.i)(null, null, FM, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: MM => "_applyByPostProcess" in MM,
              get: MM => MM._applyByPostProcess,
              set: (MM, rM) => {
                MM._applyByPostProcess = rM
              }
            },
            metadata: jM
          }, Fr, Br), (0, OM.i)(null, null, BM, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: MM => "_isEnabled" in MM,
              get: MM => MM._isEnabled,
              set: (MM, rM) => {
                MM._isEnabled = rM
              }
            },
            metadata: jM
          }, Xr, Ir), (0, OM.i)(null, null, XM, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: MM => "outputTextureWidth" in MM,
              get: MM => MM.outputTextureWidth,
              set: (MM, rM) => {
                MM.outputTextureWidth = rM
              }
            },
            metadata: jM
          }, Kr, qr), (0, OM.i)(null, null, IM, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: MM => "outputTextureHeight" in MM,
              get: MM => MM.outputTextureHeight,
              set: (MM, rM) => {
                MM.outputTextureHeight = rM
              }
            },
            metadata: jM
          }, Tr, Vr), jM && Object.defineProperty(MM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jM
          })
        })(), MM.TONEMAPPING_STANDARD = 0, MM.TONEMAPPING_ACES = 1, MM.TONEMAPPING_KHR_PBR_NEUTRAL = 2, MM.PrepareUniforms = tM.i, MM.PrepareSamplers = tM.e, MM._VIGNETTEMODE_MULTIPLY = 0, MM._VIGNETTEMODE_OPAQUE = 1, MM
      })(),
      RM = !1;

    function pM(MM) {
      const rM = GM.b.Parse((() => new uM), MM, null, null);
      return void 0 !== MM.vignetteCentreX && (rM.vignetteCenterX = MM.vignetteCentreX), void 0 !== MM.vignetteCentreY && (rM.vignetteCenterY = MM.vignetteCentreY), rM
    }

    function WM() {
      RM || (RM = !0, uM.Parse = pM, GM.b._ImageProcessingConfigurationParser = pM, (0, gM.e)("BABYLON.ImageProcessingConfiguration", uM))
    }
  },
  41240: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM
    });
    var OM = iM(39711),
      SM = iM(41205);
    class jM {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OM = arguments.length > 3 ? arguments[3] : void 0,
          SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          jM = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = MM, this._noUBO = !MM.supportsUniformBuffers || SM, this._dynamic = iM, this._name = OM ?? "no-name", this._data = rM || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === jM && this._engine._features.trackUbosInFrame || !0 === jM) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.p_ = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.p_ = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(MM) {
        let rM;
        if (rM = MM <= 2 ? MM : 4, this._uniformLocationPointer % rM !== 0) {
          const MM = this._uniformLocationPointer;
          this._uniformLocationPointer += rM - this._uniformLocationPointer % rM;
          const iM = this._uniformLocationPointer - MM;
          for (let rM = 0; rM < iM; rM++) this._data.push(0)
        }
      }
      addUniform(MM, rM) {
        let iM, OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (OM > 0 && "number" === typeof rM && (this._uniformArraySizes[MM] = {
            strideSize: rM,
            arraySize: OM
          }), void 0 === this._uniformLocations[MM] && (this._uniformNames.push(MM), !this._noUBO)) {
          if (OM > 0) {
            if (rM instanceof Array) throw "addUniform should not be use with Array in UBO: " + MM;
            if (this._fillAlignment(4), 16 == rM) rM *= OM;
            else {
              rM = rM * OM + (4 - rM) * OM
            }
            iM = [];
            for (let MM = 0; MM < rM; MM++) iM.push(0)
          } else {
            if (rM instanceof Array) iM = rM, rM = iM.length;
            else {
              iM = [];
              for (let MM = 0; MM < rM; MM++) iM.push(0)
            }
            this._fillAlignment(rM)
          }
          this._uniformSizes[MM] = rM, this._uniformLocations[MM] = this._uniformLocationPointer, this._uniformLocationPointer += rM;
          for (let MM = 0; MM < rM; MM++) this._data.push(iM[MM]);
          this._needSync = !0
        }
      }
      addMatrix(MM, rM) {
        this.addUniform(MM, Array.prototype.slice.call(rM.HOM()))
      }
      addFloat2(MM, rM, iM) {
        const OM = [rM, iM];
        this.addUniform(MM, OM)
      }
      addFloat3(MM, rM, iM, OM) {
        const SM = [rM, iM, OM];
        this.addUniform(MM, SM)
      }
      addColor3(MM, rM) {
        const iM = [rM.r, rM.g, rM.b];
        this.addUniform(MM, iM)
      }
      addColor4(MM, rM, iM) {
        const OM = [rM.r, rM.g, rM.b, iM];
        this.addUniform(MM, OM)
      }
      addVector3(MM, rM) {
        const iM = [rM.x, rM.y, rM.z];
        this.addUniform(MM, iM)
      }
      addMatrix3x3(MM) {
        this.addUniform(MM, 12)
      }
      addMatrix2x2(MM) {
        this.addUniform(MM, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const MM = [];
        let rM = 0;
        for (const iM in this._uniformLocations)
          if (MM.push(iM), 10 === ++rM) break;
        return MM.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const MM of this._ownerListsBySlot.values()) this._removeOwnerBacklink(MM);
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
      set name(MM) {
        this._name = MM
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(MM, rM) {
        for (let iM = 0; iM < MM.length; ++iM)
          if (MM[iM] !== rM[iM]) return !1;
        return !0
      }
      _copyBuffer(MM, rM) {
        for (let iM = 0; iM < MM.length; ++iM) rM[iM] = MM[iM]
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
      _updateOwnerKeyed(MM) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let rM = this._slotByOwner.get(MM);
        if (void 0 === rM && (rM = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(MM, rM), this._ownerCount++, MM._uniformBuffersWithOwnedSlot || (MM._uniformBuffersWithOwnedSlot = []), MM._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(rM, MM._uniformBuffersWithOwnedSlot)), this._slotGeneration[rM] === this._dataGeneration) return this._bufferIndex = rM, this._buffer = this._buffers[rM][0], this.bindUniformBuffer(), this._slotFrameId[rM] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const iM = this._buffers[rM][1];
        this._slotFrameId[rM] === this._currentFrameId && iM && !this._buffersEqual(this._bufferData, iM) && (rM = this._takeFreeSlot(!1)), this._bufferIndex = rM, this._buffer = this._buffers[rM][0], this.bindUniformBuffer();
        const OM = this._buffers[rM][1];
        OM && this._buffersEqual(this._bufferData, OM) || (OM && this._copyBuffer(this._bufferData, OM), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[rM] = this._currentFrameId, this._slotGeneration[rM] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(MM) {
        for (let iM = 0; iM < this._freeSlots.length; ++iM) {
          const rM = this._freeSlots[iM];
          if (this._slotFrameId[rM] !== this._currentFrameId) return MM && (this._freeSlots[iM] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), rM
        }
        this._rebuild();
        const rM = this._buffers.length - 1;
        return MM || this._freeSlots.push(rM), rM
      }
      _releaseOwnerSlot(MM) {
        const rM = this._slotByOwner?.get(MM);
        if (void 0 === rM) return;
        this._slotByOwner.delete(MM);
        const iM = this._ownerListsBySlot.get(rM);
        iM && (this._removeOwnerBacklink(iM), this._ownerListsBySlot.delete(rM)), this._ownerCount--, this._freeSlots.push(rM)
      }
      _removeOwnerBacklink(MM) {
        const rM = MM.indexOf(this); - 1 !== rM && (MM[rM] = MM[MM.length - 1], MM.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(MM, rM, iM) {
        this._checkNewFrame();
        let SM = this._uniformLocations[MM];
        if (void 0 === SM) {
          if (this._buffer) return void OM.e.Error("Cannot add an uniform after UBO has been created. uniformName=" + MM);
          this.addUniform(MM, iM), SM = this._uniformLocations[MM]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let MM = 0; MM < iM; MM++) this._bufferData[SM + MM] = rM[MM];
          this._dataGeneration++
        } else {
          let MM = !1;
          for (let OM = 0; OM < iM; OM++)(16 === iM && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[SM + OM] !== Math.fround(rM[OM])) && (MM = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[SM + OM] = rM[OM]);
          this._needSync = this._needSync || MM, MM && this._dataGeneration++
        }
      }
      updateUniformArray(MM, rM, iM) {
        this._checkNewFrame();
        const jM = this._uniformLocations[MM];
        if (void 0 === jM) return void OM.e.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const aM = this._uniformArraySizes[MM];
        if (this._dynamic) {
          for (let MM = 0; MM < iM; MM++) this._bufferData[jM + MM] = rM[MM];
          this._dataGeneration++
        } else {
          let MM = !1,
            OM = 0,
            PM = 0;
          for (let nM = 0; nM < iM; nM++)
            if (this._bufferData[jM + 4 * PM + OM] !== SM.e.FloatRound(rM[nM]) && (MM = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[jM + 4 * PM + OM] = rM[nM]), OM++, OM === aM.strideSize) {
              for (; OM < 4; OM++) this._bufferData[jM + 4 * PM + OM] = 0;
              OM = 0, PM++
            } this._needSync = this._needSync || MM, MM && this._dataGeneration++
        }
      }
      _cacheMatrix(MM, rM) {
        this._checkNewFrame();
        const iM = this._valueCache[MM],
          OM = rM.updateFlag;
        return (void 0 === iM || iM !== OM) && (this._valueCache[MM] = OM, !0)
      }
      _updateMatrix3x3ForUniform(MM, rM) {
        for (let iM = 0; iM < 3; iM++) jM._TempBuffer[4 * iM] = rM[3 * iM], jM._TempBuffer[4 * iM + 1] = rM[3 * iM + 1], jM._TempBuffer[4 * iM + 2] = rM[3 * iM + 2], jM._TempBuffer[4 * iM + 3] = 0;
        this.updateUniform(MM, jM._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(MM, rM) {
        this._currentEffect.setMatrix3x3(MM, rM)
      }
      _updateMatrix2x2ForEffect(MM, rM) {
        this._currentEffect.setMatrix2x2(MM, rM)
      }
      _updateMatrix2x2ForUniform(MM, rM) {
        for (let iM = 0; iM < 2; iM++) jM._TempBuffer[4 * iM] = rM[2 * iM], jM._TempBuffer[4 * iM + 1] = rM[2 * iM + 1], jM._TempBuffer[4 * iM + 2] = 0, jM._TempBuffer[4 * iM + 3] = 0;
        this.updateUniform(MM, jM._TempBuffer, 8)
      }
      _updateFloatForEffect(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(MM + iM, rM)
      }
      _updateFloatForUniform(MM, rM) {
        jM._TempBuffer[0] = rM, this.updateUniform(MM, jM._TempBuffer, 1)
      }
      _updateFloat2ForEffect(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(MM + OM, rM, iM)
      }
      _updateFloat2ForUniform(MM, rM, iM) {
        jM._TempBuffer[0] = rM, jM._TempBuffer[1] = iM, this.updateUniform(MM, jM._TempBuffer, 2)
      }
      _updateFloat3ForEffect(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(MM + SM, rM, iM, OM)
      }
      _updateFloat3ForUniform(MM, rM, iM, OM) {
        jM._TempBuffer[0] = rM, jM._TempBuffer[1] = iM, jM._TempBuffer[2] = OM, this.updateUniform(MM, jM._TempBuffer, 3)
      }
      _updateFloat4ForEffect(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(MM + jM, rM, iM, OM, SM)
      }
      _updateFloat4ForUniform(MM, rM, iM, OM, SM) {
        jM._TempBuffer[0] = rM, jM._TempBuffer[1] = iM, jM._TempBuffer[2] = OM, jM._TempBuffer[3] = SM, this.updateUniform(MM, jM._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[MM]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(MM + iM, rM);
            break;
          case 3:
            this._currentEffect.setFloatArray3(MM + iM, rM);
            break;
          case 4:
            this._currentEffect.setFloatArray4(MM + iM, rM);
            break;
          default:
            this._currentEffect.setFloatArray(MM + iM, rM)
        }
      }
      _updateFloatArrayForUniform(MM, rM) {
        this.updateUniformArray(MM, rM, rM.length)
      }
      _updateArrayForEffect(MM, rM) {
        this._currentEffect.setArray(MM, rM)
      }
      _updateArrayForUniform(MM, rM) {
        this.updateUniformArray(MM, rM, rM.length)
      }
      _updateIntArrayForEffect(MM, rM) {
        this._currentEffect.setIntArray(MM, rM)
      }
      _updateIntArrayForUniform(MM, rM) {
        jM._TempBufferInt32View.set(rM), this.updateUniformArray(MM, jM._TempBuffer, rM.length)
      }
      _updateUIntArrayForEffect(MM, rM) {
        this._currentEffect.setUIntArray(MM, rM)
      }
      _updateUIntArrayForUniform(MM, rM) {
        jM._TempBufferUInt32View.set(rM), this.updateUniformArray(MM, jM._TempBuffer, rM.length)
      }
      _updateMatrixForEffect(MM, rM) {
        this._currentEffect.setMatrix(MM, rM)
      }
      _updateMatrixForUniform(MM, rM) {
        this._cacheMatrix(MM, rM) && this.updateUniform(MM, rM.HOM(), 16)
      }
      _updateMatricesForEffect(MM, rM) {
        this._currentEffect.setMatrices(MM, rM)
      }
      _updateMatricesForUniform(MM, rM) {
        this.updateUniform(MM, rM, rM.length)
      }
      _updateVector3ForEffect(MM, rM) {
        this._currentEffect.setVector3(MM, rM)
      }
      _updateVector3ForUniform(MM, rM) {
        jM._TempBuffer[0] = rM.x, jM._TempBuffer[1] = rM.y, jM._TempBuffer[2] = rM.z, this.updateUniform(MM, jM._TempBuffer, 3)
      }
      _updateVector4ForEffect(MM, rM) {
        this._currentEffect.setVector4(MM, rM)
      }
      _updateVector4ForUniform(MM, rM) {
        jM._TempBuffer[0] = rM.x, jM._TempBuffer[1] = rM.y, jM._TempBuffer[2] = rM.z, jM._TempBuffer[3] = rM.w, this.updateUniform(MM, jM._TempBuffer, 4)
      }
      _updateColor3ForEffect(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(MM + iM, rM)
      }
      _updateColor3ForUniform(MM, rM) {
        jM._TempBuffer[0] = rM.r, jM._TempBuffer[1] = rM.g, jM._TempBuffer[2] = rM.b, this.updateUniform(MM, jM._TempBuffer, 3)
      }
      _updateColor4ForEffect(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(MM + OM, rM, iM)
      }
      _updateDirectColor4ForEffect(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(MM + iM, rM)
      }
      _updateColor4ForUniform(MM, rM, iM) {
        jM._TempBuffer[0] = rM.r, jM._TempBuffer[1] = rM.g, jM._TempBuffer[2] = rM.b, jM._TempBuffer[3] = iM, this.updateUniform(MM, jM._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(MM, rM) {
        jM._TempBuffer[0] = rM.r, jM._TempBuffer[1] = rM.g, jM._TempBuffer[2] = rM.b, jM._TempBuffer[3] = rM.a, this.updateUniform(MM, jM._TempBuffer, 4)
      }
      _updateIntForEffect(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(MM + iM, rM)
      }
      _updateIntForUniform(MM, rM) {
        jM._TempBufferInt32View[0] = rM, this.updateUniform(MM, jM._TempBuffer, 1)
      }
      _updateInt2ForEffect(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(MM + OM, rM, iM)
      }
      _updateInt2ForUniform(MM, rM, iM) {
        jM._TempBufferInt32View[0] = rM, jM._TempBufferInt32View[1] = iM, this.updateUniform(MM, jM._TempBuffer, 2)
      }
      _updateInt3ForEffect(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(MM + SM, rM, iM, OM)
      }
      _updateInt3ForUniform(MM, rM, iM, OM) {
        jM._TempBufferInt32View[0] = rM, jM._TempBufferInt32View[1] = iM, jM._TempBufferInt32View[2] = OM, this.updateUniform(MM, jM._TempBuffer, 3)
      }
      _updateInt4ForEffect(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(MM + jM, rM, iM, OM, SM)
      }
      _updateInt4ForUniform(MM, rM, iM, OM, SM) {
        jM._TempBufferInt32View[0] = rM, jM._TempBufferInt32View[1] = iM, jM._TempBufferInt32View[2] = OM, jM._TempBufferInt32View[3] = SM, this.updateUniform(MM, jM._TempBuffer, 4)
      }
      _updateUIntForEffect(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(MM + iM, rM)
      }
      _updateUIntForUniform(MM, rM) {
        jM._TempBufferUInt32View[0] = rM, this.updateUniform(MM, jM._TempBuffer, 1)
      }
      _updateUInt2ForEffect(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(MM + OM, rM, iM)
      }
      _updateUInt2ForUniform(MM, rM, iM) {
        jM._TempBufferUInt32View[0] = rM, jM._TempBufferUInt32View[1] = iM, this.updateUniform(MM, jM._TempBuffer, 2)
      }
      _updateUInt3ForEffect(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(MM + SM, rM, iM, OM)
      }
      _updateUInt3ForUniform(MM, rM, iM, OM) {
        jM._TempBufferUInt32View[0] = rM, jM._TempBufferUInt32View[1] = iM, jM._TempBufferUInt32View[2] = OM, this.updateUniform(MM, jM._TempBuffer, 3)
      }
      _updateUInt4ForEffect(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(MM + jM, rM, iM, OM, SM)
      }
      _updateUInt4ForUniform(MM, rM, iM, OM, SM) {
        jM._TempBufferUInt32View[0] = rM, jM._TempBufferUInt32View[1] = iM, jM._TempBufferUInt32View[2] = OM, jM._TempBufferUInt32View[3] = SM, this.updateUniform(MM, jM._TempBuffer, 4)
      }
      setTexture(MM, rM) {
        this._currentEffect.setTexture(MM, rM)
      }
      setTextureArray(MM, rM) {
        this._currentEffect.setTextureArray(MM, rM)
      }
      bindTexture(MM, rM) {
        this._currentEffect._bindTexture(MM, rM)
      }
      updateUniformDirectly(MM, rM) {
        this.updateUniform(MM, rM, rM.length), this.update()
      }
      bindToEffect(MM, rM) {
        this._currentEffect = MM, this._currentEffectName = rM
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(MM) {
        if (!this._buffers) return this._buffer === MM;
        for (let rM = 0; rM < this._buffers.length; ++rM) {
          if (this._buffers[rM][0] === MM) return this._bufferIndex = rM, this._buffer = MM, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[rM][1] && (this._bufferData.set(this._buffers[rM][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(MM) {
        return void 0 !== this._uniformLocations[MM]
      }
      dispose() {
        if (this._noUBO) return;
        const MM = this._engine._uniformBuffers,
          rM = MM.indexOf(this);
        if (-1 !== rM && (MM[rM] = MM[MM.length - 1], MM.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let MM = 0; MM < this._buffers.length; ++MM) {
            const rM = this._buffers[MM][0];
            this._engine._releaseBuffer(rM)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    jM._MAX_UNIFORM_SIZE = 256, jM._TempBuffer = new Float32Array(jM._MAX_UNIFORM_SIZE), jM._TempBufferInt32View = new Int32Array(jM._TempBuffer.buffer), jM._TempBufferUInt32View = new Uint32Array(jM._TempBuffer.buffer)
  },
  41023: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM
    });
    var OM = iM(41026);
    class SM extends OM.c {
      constructor(MM) {
        super(), this._buffer = MM
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  41109: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => nM,
      c: () => QM
    });
    const OM = "__bjs_serializable__",
      SM = new WeakMap;

    function jM(MM, rM) {
      return Object.prototype.hasOwnProperty.call(MM, rM)
    }
    const aM = function() {
      let MM = Symbol.metadata;
      return MM || (MM = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: MM
      })), MM
    }();

    function PM(MM) {
      return "function" === typeof MM ? MM : MM?.constructor
    }

    function nM(MM) {
      if (!MM) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(aM)}) polyfill must run before decorated classes are evaluated.`);
      return jM(MM, OM) || (MM[OM] = {}), MM[OM]
    }

    function QM(MM) {
      const rM = PM(MM),
        iM = rM ? rM[aM] : void 0;
      if (!iM) return {};
      const nM = SM.get(iM);
      if (nM) return nM;
      const QM = {},
        zM = [];
      let LM = iM;
      for (; LM;) zM.push(LM), LM = Object.getPrototypeOf(LM);
      for (const SM of zM)
        if (jM(SM, OM)) {
          const MM = SM[OM];
          for (const rM in MM) QM[rM] = MM[rM]
        } return SM.set(iM, QM), QM
    }
  },
  41105: (MM, rM, iM) => {
    iM.d(rM, {
      B: () => PM,
      F: () => zM,
      J: () => LM,
      L: () => aM,
      d: () => EM,
      g: () => jM,
      k: () => lM,
      n: () => HM,
      r: () => nM,
      s: () => hM,
      t: () => QM,
      u: () => dM,
      y: () => mM,
      z: () => JM
    });
    var OM = iM(41109);

    function SM(MM, rM) {
      return (iM, SM) => {
        if (!SM.metadata) return;
        const jM = String(SM.name),
          aM = (0, OM.b)(SM.metadata);
        aM[jM] || (aM[jM] = {
          type: MM,
          sourceName: rM
        })
      }
    }

    function jM(MM) {
      return function(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (iM, OM) => {
          const SM = rM || "_" + String(OM.name);
          return {
            init(MM) {
              return void 0 === MM && SM in this || (this[SM] = MM), MM
            },
            get() {
              return this[SM]
            },
            set(rM) {
              "function" === typeof this[SM]?.equals && this[SM].equals(rM) || this[SM] !== rM && (this[SM] = rM, this[MM]())
            }
          }
        }
      }(MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function aM(MM) {
      return SM(0, MM)
    }

    function PM(MM) {
      return SM(1, MM)
    }

    function nM(MM) {
      return SM(2, MM)
    }

    function QM(MM) {
      return SM(3, MM)
    }

    function zM(MM) {
      return SM(4, MM)
    }

    function LM(MM) {
      return SM(5, MM)
    }

    function mM(MM) {
      return SM(6, MM)
    }

    function HM(MM) {
      return SM(7, MM)
    }

    function hM(MM) {
      return SM(8, MM)
    }

    function JM(MM) {
      return SM(10, MM)
    }

    function dM(MM) {
      return SM(12, MM)
    }

    function yM(MM, rM, iM) {
      const OM = String(rM.name);
      let SM = null;
      const jM = function() {
        if (null === SM) {
          SM = MM, "undefined" !== typeof _native && _native[OM] && (SM = iM(_native[OM], MM));
          const aM = this && (rM.static ? this : Object.getPrototypeOf(this));
          aM?.[OM] === jM && (aM[OM] = SM)
        }
        for (var aM = arguments.length, PM = new Array(aM), nM = 0; nM < aM; nM++) PM[nM] = arguments[nM];
        return SM.apply(this, PM)
      };
      return jM
    }

    function lM(MM, rM) {
      return yM(MM, rM, (MM => MM))
    }

    function EM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (iM, OM) => {
        const SM = rM || "_" + String(OM.name);
        return {
          get() {
            return this[SM]?.value
          },
          set(rM) {
            "function" === typeof this[SM]?.value?.equals && this[SM].value.equals(rM) || this[SM].value !== rM && (this[SM].value = rM, this[MM]())
          }
        }
      }
    }
    lM.filter = function(MM) {
      return (rM, iM) => yM(rM, iM, ((rM, iM) => function() {
        for (var OM = arguments.length, SM = new Array(OM), jM = 0; jM < OM; jM++) SM[jM] = arguments[jM];
        return MM(...SM) ? rM(...SM) : iM.apply(this, SM)
      }))
    }
  },
  41121: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => QM
    });
    var OM = iM(40990),
      SM = iM(41124),
      jM = iM(38173),
      aM = iM(38040),
      PM = iM(41109);
    const nM = function(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const jM = MM();
      SM.d && SM.d.HasTags(rM) && SM.d.AddTagsTo(jM, SM.d.GetTags(rM, !0));
      const aM = (0, PM.c)(jM),
        nM = {};
      for (const SM in aM) {
        const MM = aM[SM],
          PM = rM[SM],
          zM = MM.type;
        if (void 0 !== PM && null !== PM && ("uniqueId" !== SM || QM.AllowLoadingUniqueId)) switch (zM) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof PM.slice ? jM[SM] = PM.slice() : jM[SM] = PM;
            break;
          case 1:
            OM.cloneTexturesOnlyOnce && nM[PM.uniqueId] ? jM[SM] = nM[PM.uniqueId] : (jM[SM] = iM || PM.isRenderTarget ? PM : PM.clone(), nM[PM.uniqueId] = jM[SM]);
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
            jM[SM] = iM ? PM : PM.clone()
        }
      }
      return jM
    };
    class QM {
      static AppendSerializedAnimations(MM, rM) {
        if (MM.animations) {
          rM.animations = [];
          for (let iM = 0; iM < MM.animations.length; iM++) {
            const OM = MM.animations[iM];
            rM.animations.push(OM.serialize())
          }
        }
      }
      static Serialize(MM, rM) {
        rM || (rM = {}), SM.d && (rM.tags = SM.d.GetTags(MM));
        const iM = (0, PM.c)(MM);
        for (const OM in iM) {
          const SM = iM[OM],
            jM = SM.sourceName || OM,
            aM = SM.type,
            PM = MM[OM];
          if (void 0 !== PM && null !== PM && ("uniqueId" !== OM || QM.AllowLoadingUniqueId)) switch (aM) {
            case 0:
              Array.isArray(PM) ? rM[jM] = PM.slice() : rM[jM] = PM;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              rM[jM] = PM.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              rM[jM] = PM.HOM();
              break;
            case 6:
            case 11:
              rM[jM] = PM.id
          }
        }
        return rM
      }
      static ParseProperties(MM, rM, iM, OM) {
        OM || (OM = "");
        const SM = (0, PM.c)(rM);
        for (const PM in SM) {
          const nM = SM[PM],
            zM = MM[nM.sourceName || PM],
            LM = nM.type;
          if (void 0 !== zM && null !== zM && ("uniqueId" !== PM || QM.AllowLoadingUniqueId)) {
            const MM = rM;
            switch (LM) {
              case 0:
                MM[PM] = zM;
                break;
              case 1:
                iM && (MM[PM] = QM._TextureParser(zM, iM, OM));
                break;
              case 2:
                MM[PM] = jM.d.FromArray(zM);
                break;
              case 3:
                MM[PM] = QM._FresnelParametersParser(zM);
                break;
              case 4:
                MM[PM] = aM.o.FromArray(zM);
                break;
              case 5:
                MM[PM] = aM.q.FromArray(zM);
                break;
              case 6:
                iM && (MM[PM] = iM.getLastMeshById(zM));
                break;
              case 7:
                MM[PM] = QM._ColorCurvesParser(zM);
                break;
              case 8:
                MM[PM] = jM.h.FromArray(zM);
                break;
              case 9:
                MM[PM] = QM._ImageProcessingConfigurationParser(zM);
                break;
              case 10:
                MM[PM] = aM.h.FromArray(zM);
                break;
              case 11:
                iM && (MM[PM] = iM.getCameraById(zM));
                break;
              case 12:
                MM[PM] = aM.d.FromArray(zM);
                break;
              case 13:
                MM[PM] = aM.u.FromArray(zM)
            }
          }
        }
      }
      static Parse(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const jM = MM();
        return SM.d && SM.d.AddTagsTo(jM, rM.tags), QM.ParseProperties(rM, jM, iM, OM), jM
      }
      static Clone(MM, rM) {
        return nM(MM, rM, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(MM, rM) {
        return nM(MM, rM, !0)
      }
    }
    QM.AllowLoadingUniqueId = !1, QM._ImageProcessingConfigurationParser = MM => {
      throw (0, OM.n)("ImageProcessingConfiguration")
    }, QM._FresnelParametersParser = MM => {
      throw (0, OM.n)("FresnelParameters")
    }, QM._ColorCurvesParser = MM => {
      throw (0, OM.n)("ColorCurves")
    }, QM._TextureParser = (MM, rM, iM) => {
      throw (0, OM.n)("Texture")
    }
  },
  41048: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM
    });
    var OM = iM(41009);
    class SM {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = SM.Enabled, this._lastSecValueCount++
      }
      addCount(MM, rM) {
        SM.Enabled && (this._current += MM, this._hasCurrentValue = !0, rM && this._fetchResult())
      }
      beginMonitoring() {
        SM.Enabled && (this._startMonitoringTime = OM.b.Now)
      }
      endMonitoring() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!SM.Enabled) return;
        MM && this.fetchNewFrame();
        const rM = OM.b.Now;
        this._current = rM - this._startMonitoringTime, this._hasCurrentValue = !0, MM && this._fetchResult()
      }
      EL() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const MM = OM.b.Now;
        MM - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = MM, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    SM.Enabled = !0
  },
  41213: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM,
      e: () => OM
    });
    class OM {
      constructor(MM) {
        this.length = 0, this.data = new Array(MM), this._id = OM._GlobalId++
      }
      push(MM) {
        this.data[this.length++] = MM, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(MM) {
        for (let rM = 0; rM < this.length; rM++) MM(this.data[rM])
      }
      sort(MM) {
        this.data.sort(MM)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(MM) {
        if (0 !== MM.length) {
          this.length + MM.length > this.data.length && (this.data.length = 2 * (this.length + MM.length));
          for (let rM = 0; rM < MM.length; rM++) this.data[this.length++] = (MM.data || MM)[rM]
        }
      }
      indexOf(MM) {
        const rM = this.data.indexOf(MM);
        return rM >= this.length ? -1 : rM
      }
      contains(MM) {
        return -1 !== this.indexOf(MM)
      }
    }
    OM._GlobalId = 0;
    class SM extends OM {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(MM) {
        super.push(MM), MM.__smartArrayFlags || (MM.__smartArrayFlags = {}), MM.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(MM) {
        return (!MM.__smartArrayFlags || MM.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(MM), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(MM) {
        if (0 !== MM.length) {
          this.length + MM.length > this.data.length && (this.data.length = 2 * (this.length + MM.length));
          for (let rM = 0; rM < MM.length; rM++) {
            const iM = (MM.data || MM)[rM];
            this.pushNoDuplicate(iM)
          }
        }
      }
    }
  },
  41124: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM
    });
    class OM {
      static Eval(MM, rM) {
        return "true" === (MM = MM.match(/\([^()]*\)/g) ? MM.replace(/\([^()]*\)/g, (MM => (MM = MM.slice(1, MM.length - 1), OM._HandleParenthesisContent(MM, rM)))) : OM._HandleParenthesisContent(MM, rM)) || "false" !== MM && OM.Eval(MM, rM)
      }
      static _HandleParenthesisContent(MM, rM) {
        let iM;
        rM = rM || (MM => "true" === MM);
        const SM = MM.split("||");
        for (const jM in SM)
          if (Object.prototype.hasOwnProperty.call(SM, jM)) {
            let MM = OM._SimplifyNegation(SM[jM].trim());
            const aM = MM.split("&&");
            if (aM.length > 1)
              for (let SM = 0; SM < aM.length; ++SM) {
                const jM = OM._SimplifyNegation(aM[SM].trim());
                if (iM = "true" !== jM && "false" !== jM ? "!" === jM[0] ? !rM(jM.substring(1)) : rM(jM) : "true" === jM, !iM) {
                  MM = "false";
                  break
                }
              }
            if (iM || "true" === MM) {
              iM = !0;
              break
            }
            iM = "true" !== MM && "false" !== MM ? "!" === MM[0] ? !rM(MM.substring(1)) : rM(MM) : "true" === MM
          } return iM ? "true" : "false"
      }
      static _SimplifyNegation(MM) {
        return "!true" === (MM = (MM = MM.replace(/^[\s!]+/, (MM => (MM = MM.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? MM = "false" : "!false" === MM && (MM = "true"), MM
      }
    }
    class SM {
      static EnableFor(MM) {
        MM._tags = MM._tags || {}, MM.hasTags = () => SM.HasTags(MM), MM.addTags = rM => SM.AddTagsTo(MM, rM), MM.removeTags = rM => SM.RemoveTagsFrom(MM, rM), MM.matchesTagsQuery = rM => SM.MatchesQuery(MM, rM)
      }
      static DisableFor(MM) {
        delete MM._tags, delete MM.hasTags, delete MM.addTags, delete MM.removeTags, delete MM.matchesTagsQuery
      }
      static HasTags(MM) {
        if (!MM._tags) return !1;
        const rM = MM._tags;
        for (const iM in rM)
          if (Object.prototype.hasOwnProperty.call(rM, iM)) return !0;
        return !1
      }
      static GetTags(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!MM._tags) return null;
        if (rM) {
          const rM = [];
          for (const iM in MM._tags) Object.prototype.hasOwnProperty.call(MM._tags, iM) && !0 === MM._tags[iM] && rM.push(iM);
          return rM.join(" ")
        }
        return MM._tags
      }
      static AddTagsTo(MM, rM) {
        if (!rM) return;
        if ("string" !== typeof rM) return;
        const iM = rM.split(" ");
        for (const OM of iM) SM._AddTagTo(MM, OM)
      }
      static _AddTagTo(MM, rM) {
        "" !== (rM = rM.trim()) && "true" !== rM && "false" !== rM && (rM.match(/[\s]/) || rM.match(/^([!]|([|]|[&]){2})/) || (SM.EnableFor(MM), MM._tags[rM] = !0))
      }
      static RemoveTagsFrom(MM, rM) {
        if (!SM.HasTags(MM)) return;
        const iM = rM.split(" ");
        for (const OM in iM) SM._RemoveTagFrom(MM, iM[OM])
      }
      static _RemoveTagFrom(MM, rM) {
        delete MM._tags[rM]
      }
      static MatchesQuery(MM, rM) {
        return void 0 === rM || ("" === rM ? SM.HasTags(MM) : OM.Eval(rM, (rM => SM.HasTags(MM) && MM._tags[rM])))
      }
    }
  },
  41258: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM
    });
    var OM = iM(41250),
      SM = iM(38068);
    class jM {
      constructor(MM) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new SM.d, this._scene = MM
      }
      _prepareBuffers() {
        if (this._vertexBuffers[OM.j.PositionKind]) return;
        const MM = [];
        MM.push(1, 1), MM.push(-1, 1), MM.push(-1, -1), MM.push(1, -1), this._vertexBuffers[OM.j.PositionKind] = new OM.j(this._scene.ph(), MM, OM.j.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const MM = [];
        MM.push(0), MM.push(1), MM.push(2), MM.push(0), MM.push(2), MM.push(3), this._indexBuffer = this._scene.ph().createIndexBuffer(MM)
      }
      _getActivePostProcesses(MM) {
        const rM = this._activePostProcesses;
        rM.length = 0;
        for (let iM = 0; iM < MM.length; iM++) {
          const OM = MM[iM];
          OM && rM.push(OM)
        }
        return rM
      }
      _rebuild() {
        const MM = this._vertexBuffers[OM.j.PositionKind];
        MM && (MM._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const iM = this._scene.activeCamera;
        return !!iM && (rM = rM || this._getActivePostProcesses(iM._postProcesses), !(!rM || 0 === rM.length || !this._scene.postProcessesEnabled) && (rM[0].activate(iM, MM, null !== rM && void 0 !== rM), !0))
      }
      directRender(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          aM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : MM.length;
        const PM = this._scene.ph();
        for (let nM = 0; nM < aM; nM++) {
          nM < MM.length - 1 ? MM[nM + 1].activate(this._scene.activeCamera || this._scene, rM?.texture) : (rM ? PM.bindFramebuffer(rM, OM, void 0, void 0, iM, SM) : jM || PM.restoreDefaultFramebuffer(), PM._debugInsertMarker?.(`post process ${MM[nM].name} output`));
          const aM = MM[nM],
            QM = aM.apply();
          QM && (aM.onBeforeRenderObservable.notifyObservers(QM), this._prepareBuffers(), PM.bindBuffers(this._vertexBuffers, this._indexBuffer, QM), PM.drawElementsType(0, 0, 6), aM.onAfterRenderObservable.notifyObservers(QM))
        }
        PM.setDepthBuffer(!0), PM.setDepthWrite(!0)
      }
      _finalizeFrame(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const jM = this._scene.activeCamera;
        if (!jM) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (OM = OM || this._getActivePostProcesses(jM._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const aM = this._scene.ph();
        for (let PM = 0, nM = OM.length; PM < nM; PM++) {
          const QM = OM[PM];
          if (PM < nM - 1 ? QM._outputTexture = OM[PM + 1].activate(jM, rM?.texture) : (rM ? (aM.bindFramebuffer(rM, iM, void 0, void 0, SM), QM._outputTexture = rM) : (aM.restoreDefaultFramebuffer(), QM._outputTexture = null), aM._debugInsertMarker?.(`post process ${OM[PM].name} output`)), MM) break;
          const zM = QM.apply();
          zM && (QM.onBeforeRenderObservable.notifyObservers(zM), this._prepareBuffers(), aM.bindBuffers(this._vertexBuffers, this._indexBuffer, zM), aM.drawElementsType(0, 0, 6), QM.onAfterRenderObservable.notifyObservers(zM))
        }
        aM.setDepthBuffer(!0), aM.setDepthWrite(!0), aM.setAlphaMode(0)
      }
      dispose() {
        const MM = this._vertexBuffers[OM.j.PositionKind];
        MM && (MM.dispose(), this._vertexBuffers[OM.j.PositionKind] = null), this._indexBuffer && (this._scene.ph()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  41274: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => QM
    });
    var OM = iM(41213),
      SM = iM(38040);
    const jM = [],
      aM = [];
    let PM = !1;

    function nM(MM, rM) {
      for (; MM.length < rM;) MM.push(void 0)
    }
    class QM {
      set opaqueSortCompareFn(MM) {
        this._opaqueSortCompareFn = MM || QM.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(MM) {
        this._alphaTestSortCompareFn = MM || QM.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(MM) {
        this._transparentSortCompareFn = MM || QM.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = MM, this._opaqueSubMeshes = new OM.e(256), this._transparentSubMeshes = new OM.e(256), this._alphaTestSubMeshes = new OM.e(256), this._depthOnlySubMeshes = new OM.e(256), this._particleSystems = new OM.e(256), this._spriteManagers = new OM.e(256), this._empty = !0, this._edgesRenderers = new OM.d(16), this.disableDepthPrePass = !1, this._scene = rM, this.opaqueSortCompareFn = iM, this.alphaTestSortCompareFn = SM, this.transparentSortCompareFn = jM
      }
      render(MM, rM, iM, OM) {
        let SM = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          jM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          aM = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          PM = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          nM = arguments.length > 8 ? arguments[8] : void 0;
        if (MM) return void MM(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const QM = this._scene.ph();
        SM && 0 !== this._depthOnlySubMeshes.length && (QM.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), QM.setColorWrite(!0)), jM && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), aM && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const zM = QM.getStencilBuffer();
        if (QM.setStencilBuffer(!1), rM && this._renderSprites(), iM && this._renderParticles(OM), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), PM && (nM || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (QM.setStencilBuffer(zM), nM) nM(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const MM = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            MM.length && this._renderTransparent(MM)
          } else this._renderTransparent(this._transparentSubMeshes);
          QM.setAlphaMode(0)
        }
        if (QM.setStencilBuffer(!1), jM && this._edgesRenderers.length) {
          for (let MM = 0; MM < this._edgesRenderers.length; MM++) this._edgesRenderers.data[MM].render();
          QM.setAlphaMode(0)
        }
        QM.setStencilBuffer(zM)
      }
      _renderOpaqueSorted(MM) {
        QM._RenderSorted(MM, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(MM) {
        QM._RenderSorted(MM, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(MM) {
        QM._RenderSorted(MM, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(MM, rM, iM, OM, jM) {
        let zM, LM = 0;
        const mM = iM ? iM.globalPosition : QM._ZeroVector;
        if (OM && rM !== QM.PainterSortCompare)
          for (; LM < MM.length; LM++) zM = MM.data[LM], zM._alphaIndex = zM.getMesh().alphaIndex, zM._distanceToCamera = SM.q.Distance(zM.aY().YOM.centerWorld, mM);
        const HM = MM.length;
        let hM = MM.data;
        const JM = HM !== hM.length && !PM;
        if (JM) {
          for (PM = !0, nM(aM, HM), LM = 0; LM < HM; LM++) aM[LM] = hM[LM];
          hM = aM
        } else HM !== hM.length && (hM = hM.slice(0, HM));
        try {
          rM && QM._StableSort(hM, HM, rM), QM._DrawSorted(hM, HM, OM, jM)
        } finally {
          JM && (aM.fill(void 0, 0, HM), PM = !1)
        }
      }
      static _DrawSorted(MM, rM, iM, OM) {
        let SM;
        const jM = MM[0].getMesh().Hk();
        for (let aM = 0; aM < rM; aM++) {
          if (SM = MM[aM], jM._activeMeshesFrozenButKeepClipping && !SM.isInFrustum(jM._frustumPlanes)) continue;
          let rM = !1;
          if (iM) {
            const MM = SM.Zh();
            if (MM && MM.needDepthPrePass && !OM) {
              rM = !0;
              const iM = MM.Hk().ph();
              iM.setColorWrite(!1), iM.setAlphaMode(0), SM.render(!1), iM.setColorWrite(!0)
            }
          }
          const PM = SM._renderingMesh;
          !rM && PM._renderRunFollower(SM, iM) || SM.render(iM)
        }
      }
      static _StableSort(MM, rM, iM) {
        for (let OM = 0; OM < rM; OM += 16) {
          const SM = Math.min(OM + 16, rM);
          for (let rM = OM + 1; rM < SM; rM++) {
            const SM = MM[rM];
            let jM = OM,
              aM = rM;
            for (; jM < aM;) {
              const rM = jM + aM >>> 1;
              iM(SM, MM[rM]) < 0 ? aM = rM : jM = rM + 1
            }
            for (let iM = rM; iM > jM; iM--) MM[iM] = MM[iM - 1];
            MM[jM] = SM
          }
        }
        if (!(rM <= 16)) {
          nM(jM, rM);
          try {
            let OM = MM,
              SM = jM;
            for (let MM = 16; MM < rM; MM *= 2) {
              for (let aM = 0; aM < rM; aM += 2 * MM) {
                const jM = Math.min(aM + MM, rM),
                  PM = Math.min(aM + 2 * MM, rM);
                let nM = aM,
                  QM = jM,
                  zM = aM;
                if (jM < PM && iM(OM[jM], OM[jM - 1]) < 0)
                  for (; nM < jM && QM < PM;) SM[zM++] = iM(OM[QM], OM[nM]) < 0 ? OM[QM++] : OM[nM++];
                for (; nM < jM;) SM[zM++] = OM[nM++];
                for (; QM < PM;) SM[zM++] = OM[QM++]
              }
              const jM = SM;
              SM = OM, OM = jM
            }
            if (OM !== MM)
              for (let iM = 0; iM < rM; iM++) MM[iM] = OM[iM]
          } finally {
            jM.fill(void 0, 0, rM)
          }
        }
      }
      static defaultTransparentSortCompare(MM, rM) {
        return MM._alphaIndex > rM._alphaIndex ? 1 : MM._alphaIndex < rM._alphaIndex ? -1 : QM.backToFrontSortCompare(MM, rM)
      }
      static backToFrontSortCompare(MM, rM) {
        return MM._distanceToCamera < rM._distanceToCamera ? 1 : MM._distanceToCamera > rM._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(MM, rM) {
        return MM._distanceToCamera < rM._distanceToCamera ? -1 : MM._distanceToCamera > rM._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(MM, rM) {
        const iM = MM.getMesh(),
          OM = rM.getMesh();
        return iM.material && OM.material ? iM.material.uniqueId - OM.material.uniqueId : iM.uniqueId - OM.uniqueId
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
      dispatch(MM, rM, iM) {
        void 0 === rM && (rM = MM.getMesh()), void 0 === iM && (iM = MM.Zh()), null !== iM && void 0 !== iM && (iM.needAlphaBlendingForMesh(rM) ? this._transparentSubMeshes.push(MM) : iM.needAlphaTestingForMesh(rM) ? (iM.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(MM), this._alphaTestSubMeshes.push(MM)) : (iM.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(MM), this._opaqueSubMeshes.push(MM)), rM._renderingGroup = this, rM._edgesRenderer && rM.isEnabled() && rM.isVisible && rM._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(rM._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(MM) {
        this._spriteManagers.push(MM), this._empty = !1
      }
      dispatchParticles(MM) {
        this._particleSystems.push(MM), this._empty = !1
      }
      _renderParticles(MM) {
        if (0 === this._particleSystems.length) return;
        const rM = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let iM = 0; iM < this._particleSystems.length; iM++) {
          const OM = this._particleSystems.data[iM];
          if (0 === (rM && rM.layerMask & OM.layerMask)) continue;
          const SM = OM.emitter;
          SM.position && MM && -1 === MM.indexOf(SM) || this._scene._activeParticles.addCount(OM.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const MM = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let rM = 0; rM < this._spriteManagers.length; rM++) {
          const iM = this._spriteManagers.data[rM];
          0 !== (MM && MM.layerMask & iM.layerMask) && iM.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    QM._ZeroVector = SM.q.Zero()
  },
  41269: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM
    });
    var OM = iM(41274);
    class SM {}
    class jM {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(MM) {
        this._disableDepthPrePass = MM;
        for (const rM of this._renderingGroups) rM.disableDepthPrePass = MM
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(MM) {
        MM !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = MM, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const MM of this._scene.meshes)
          if (MM.iG)
            for (const rM of MM.iG) rM._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const MM of this._scene.spriteManagers) MM._wasDispatched = !1;
        for (const MM of this._scene.aG) MM._wasDispatched = !1
      }
      constructor(MM) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new SM, this._maintainStateBetweenFrames = !1, this._scene = MM;
        for (let rM = jM.MIN_RENDERINGGROUPS; rM < jM.MAX_RENDERINGGROUPS; rM++) this._autoClearDepthStencil[rM] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(MM) {
        const rM = MM || 0;
        return this._prepareRenderingGroup(rM), this._renderingGroups[rM]
      }
      _clearDepthStencilBuffer() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.ph().clear(null, !1, MM, rM), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(MM, rM, iM, OM) {
        let SM = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          aM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          PM = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          nM = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          QM = arguments.length > 8 ? arguments[8] : void 0,
          zM = arguments.length > 9 ? arguments[9] : void 0;
        const LM = this._renderingGroupInfo;
        LM.YJ = this._scene, LM.camera = this._scene.activeCamera, LM.renderingManager = this;
        const mM = zM ?? this._scene.spriteManagers;
        if (mM && OM)
          for (let jM = 0; jM < mM.length; jM++) {
            const MM = mM[jM];
            this.dispatchSprites(MM)
          }
        for (let HM = jM.MIN_RENDERINGGROUPS; HM < jM.MAX_RENDERINGGROUPS; HM++) {
          this._depthStencilBufferAlreadyCleaned = HM === jM.MIN_RENDERINGGROUPS;
          const zM = this._renderingGroups[HM];
          if (!zM || zM._empty) continue;
          const mM = 1 << HM;
          if (LM.renderingGroupId = HM, this._scene.onBeforeRenderingGroupObservable.notifyObservers(LM, mM), jM.AUTOCLEAR) {
            const MM = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(HM) : this._autoClearDepthStencil[HM];
            MM && MM.autoClear && this._clearDepthStencilBuffer(MM.depth, MM.stencil)
          }
          for (let MM = 0, rM = this._scene._beforeRenderingGroupDrawStage; MM < rM.length; MM++) {
            rM[MM].action(HM)
          }
          zM.render(MM, OM, iM, rM, SM, aM, PM, nM, QM);
          for (let MM = 0, rM = this._scene._afterRenderingGroupDrawStage; MM < rM.length; MM++) {
            rM[MM].action(HM)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(LM, mM)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let MM = jM.MIN_RENDERINGGROUPS; MM < jM.MAX_RENDERINGGROUPS; MM++) {
            const rM = this._renderingGroups[MM];
            rM && rM.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let MM = jM.MIN_RENDERINGGROUPS; MM < jM.MAX_RENDERINGGROUPS; MM++) {
            const rM = this._renderingGroups[MM];
            rM && rM.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let MM = jM.MIN_RENDERINGGROUPS; MM < jM.MAX_RENDERINGGROUPS; MM++) {
          const rM = this._renderingGroups[MM];
          rM && rM.dispose()
        }
      }
      _prepareRenderingGroup(MM) {
        void 0 === this._renderingGroups[MM] && (this._renderingGroups[MM] = new OM.c(MM, this._scene, this._customOpaqueSortCompareFn[MM], this._customAlphaTestSortCompareFn[MM], this._customTransparentSortCompareFn[MM]), this._renderingGroups[MM].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(MM) {
        this.maintainStateBetweenFrames && MM._wasDispatched || (MM._wasDispatched = !0, this.getRenderingGroup(MM.renderingGroupId).dispatchSprites(MM))
      }
      dispatchParticles(MM) {
        this.maintainStateBetweenFrames && MM._wasDispatched || (MM._wasDispatched = !0, this.getRenderingGroup(MM.renderingGroupId).dispatchParticles(MM))
      }
      dispatch(MM, rM, iM) {
        void 0 === rM && (rM = MM.getMesh()), this.maintainStateBetweenFrames && MM._wasDispatched || (MM._wasDispatched = !0, this.getRenderingGroup(rM.renderingGroupId).dispatch(MM, rM, iM))
      }
      setRenderingOrder(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[MM] = rM, this._customAlphaTestSortCompareFn[MM] = iM, this._customTransparentSortCompareFn[MM] = OM, this._renderingGroups[MM]) {
          const rM = this._renderingGroups[MM];
          rM.opaqueSortCompareFn = this._customOpaqueSortCompareFn[MM], rM.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[MM], rM.transparentSortCompareFn = this._customTransparentSortCompareFn[MM]
        }
      }
      setRenderingAutoClearDepthStencil(MM, rM) {
        let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          OM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[MM] = {
          autoClear: rM,
          depth: iM,
          stencil: OM
        }
      }
      getAutoClearDepthStencilSetup(MM) {
        return this._autoClearDepthStencil[MM]
      }
    }
    jM.MAX_RENDERINGGROUPS = 4, jM.MIN_RENDERINGGROUPS = 0, jM.AUTOCLEAR = !0
  },
  41012: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    class OM {
      constructor(MM) {
        this._supportBlendParametersPerTarget = MM, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(MM) {
        this.setAlphaBlend(MM)
      }
      setAlphaBlend(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[rM] !== MM && (MM ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[rM] = MM, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(MM, rM, iM, OM) {
        this._blendConstants[0] === MM && this._blendConstants[1] === rM && this._blendConstants[2] === iM && this._blendConstants[3] === OM || (this._blendConstants[0] = MM, this._blendConstants[1] = rM, this._blendConstants[2] = iM, this._blendConstants[3] = OM, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(MM, rM, iM, OM) {
        const SM = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[SM + 0] === MM && this._blendFunctionParameters[SM + 1] === rM && this._blendFunctionParameters[SM + 2] === iM && this._blendFunctionParameters[SM + 3] === OM || (this._blendFunctionParameters[SM + 0] = MM, this._blendFunctionParameters[SM + 1] = rM, this._blendFunctionParameters[SM + 2] = iM, this._blendFunctionParameters[SM + 3] = OM, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(MM, rM) {
        const iM = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[iM + 0] === MM && this._blendEquationParameters[iM + 1] === rM || (this._blendEquationParameters[iM + 0] = MM, this._blendEquationParameters[iM + 1] = rM, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== rM && (this._numTargets = rM, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== iM && (this._blendDisabledTargetsMask = iM, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (MM.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === rM || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (rM > 1 && 0 !== iM && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & iM) ? MM.enable(MM.BLEND) : MM.disable(MM.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (MM.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (MM.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const OM = MM;
        if (this._isAlphaBlendDirty) {
          for (let SM = 0; SM < rM; SM++) {
            const rM = SM < this._numTargetEnabled ? SM : 0;
            this._alphaBlend[rM] && 0 === (iM & 1 << SM) ? OM.enableIndexed(MM.BLEND, SM) : OM.disableIndexed(MM.BLEND, SM)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let MM = 0; MM < rM; MM++) {
            const rM = MM < this._numTargetEnabled ? 4 * MM : 0;
            OM.blendFuncSeparateIndexed(MM, this._blendFunctionParameters[rM + 0], this._blendFunctionParameters[rM + 1], this._blendFunctionParameters[rM + 2], this._blendFunctionParameters[rM + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let MM = 0; MM < rM; MM++) {
            const rM = MM < this._numTargetEnabled ? 2 * MM : 0;
            OM.blendEquationSeparateIndexed(MM, this._blendEquationParameters[rM + 0], this._blendEquationParameters[rM + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(MM, rM) {
        let iM = 32774;
        switch (MM) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, rM);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, rM);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, rM);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, rM);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, rM);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, rM);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, rM);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, rM);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, rM);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, rM);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, rM);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, rM);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, rM);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, rM);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, rM);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, rM);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, rM), iM = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, rM), iM = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, rM);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, rM)
        }
        this.setAlphaEquationParameters(iM, iM, rM)
      }
    }
  },
  41302: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM
    });
    class OM {}
    OM._IsPickingAvailable = !1
  },
  41196: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => Pi,
      d: () => ji
    });
    var OM = iM(41205),
      SM = iM(41003),
      jM = iM(41009),
      aM = iM(38068),
      PM = iM(41213);
    class nM {
      constructor() {
        this._count = 0, this._data = {}
      }
      jR(MM) {
        this.clear(), MM.forEach(((MM, rM) => this.add(MM, rM)))
      }
      get(MM) {
        const rM = this._data[MM];
        if (void 0 !== rM) return rM
      }
      getOrAddWithFactory(MM, rM) {
        let iM = this.get(MM);
        return void 0 !== iM || (iM = rM(MM), iM && this.add(MM, iM)), iM
      }
      getOrAdd(MM, rM) {
        const iM = this.get(MM);
        return void 0 !== iM ? iM : (this.add(MM, rM), rM)
      }
      contains(MM) {
        return void 0 !== this._data[MM]
      }
      add(MM, rM) {
        return void 0 === this._data[MM] && (this._data[MM] = rM, ++this._count, !0)
      }
      set(MM, rM) {
        return void 0 !== this._data[MM] && (this._data[MM] = rM, !0)
      }
      getAndRemove(MM) {
        const rM = this.get(MM);
        return void 0 !== rM ? (delete this._data[MM], --this._count, rM) : null
      }
      remove(MM) {
        return !!this.contains(MM) && (delete this._data[MM], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(MM) {
        for (const rM in this._data) {
          MM(rM, this._data[rM])
        }
      }
      first(MM) {
        for (const rM in this._data) {
          const iM = MM(rM, this._data[rM]);
          if (iM) return iM
        }
        return null
      }
    }
    var QM = iM(41124),
      zM = iM(38040),
      LM = iM(41220),
      mM = iM(41240),
      HM = iM(41242);
    class hM {
      constructor(MM, rM, iM, OM, SM, jM) {
        this.source = MM, this.pointerX = rM, this.pointerY = iM, this.meshUnderPointer = OM, this.sourceEvent = SM, this.additionalData = jM
      }
      static CreateNew(MM, rM, iM) {
        const OM = MM.Hk();
        return new hM(MM, OM.pointerX, OM.pointerY, OM.meshUnderPointer || MM, rM, iM)
      }
      static CreateNewFromSprite(MM, rM, iM, OM) {
        return new hM(MM, rM.pointerX, rM.pointerY, rM.meshUnderPointer, iM, OM)
      }
      static CreateNewFromScene(MM, rM) {
        return new hM(null, MM.pointerX, MM.pointerY, MM.meshUnderPointer, rM)
      }
      static CreateNewFromPrimitive(MM, rM, iM, OM) {
        return new hM(MM, rM.x, rM.y, null, iM, OM)
      }
    }
    var JM = iM(41258),
      dM = iM(41266),
      yM = iM(41269),
      lM = iM(41278),
      EM = iM(40972),
      UM = iM(38064),
      GM = iM(40990),
      CM = iM(41283);
    class eM {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const MM in eM.Triggers)
          if (Object.prototype.hasOwnProperty.call(eM.Triggers, MM)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const MM in eM.Triggers)
          if (Object.prototype.hasOwnProperty.call(eM.Triggers, MM)) {
            const rM = parseInt(MM);
            if (rM >= 1 && rM <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(MM) {
        for (const rM in eM.Triggers)
          if (Object.prototype.hasOwnProperty.call(eM.Triggers, rM)) {
            if (parseInt(rM) === MM) return !0
          } return !1
      }
    }
    eM.Triggers = {};
    var bM, wM, tM, gM, uM, RM, pM, WM = iM(41287);
    ! function(MM) {
      MM[MM.Generic = 0] = "Generic", MM[MM.Keyboard = 1] = "Keyboard", MM[MM.Mouse = 2] = "Mouse", MM[MM.Touch = 3] = "Touch", MM[MM.DualShock = 4] = "DualShock", MM[MM.Xbox = 5] = "Xbox", MM[MM.Switch = 6] = "Switch", MM[MM.DualSense = 7] = "DualSense"
    }(bM || (bM = {})),
    function(MM) {
      MM[MM.Horizontal = 0] = "Horizontal", MM[MM.Vertical = 1] = "Vertical", MM[MM.LeftClick = 2] = "LeftClick", MM[MM.MiddleClick = 3] = "MiddleClick", MM[MM.RightClick = 4] = "RightClick", MM[MM.BrowserBack = 5] = "BrowserBack", MM[MM.BrowserForward = 6] = "BrowserForward", MM[MM.MouseWheelX = 7] = "MouseWheelX", MM[MM.MouseWheelY = 8] = "MouseWheelY", MM[MM.MouseWheelZ = 9] = "MouseWheelZ", MM[MM.Move = 12] = "Move"
    }(wM || (wM = {})),
    function(MM) {
      MM[MM.Horizontal = 0] = "Horizontal", MM[MM.Vertical = 1] = "Vertical", MM[MM.LeftClick = 2] = "LeftClick", MM[MM.MiddleClick = 3] = "MiddleClick", MM[MM.RightClick = 4] = "RightClick", MM[MM.BrowserBack = 5] = "BrowserBack", MM[MM.BrowserForward = 6] = "BrowserForward", MM[MM.MouseWheelX = 7] = "MouseWheelX", MM[MM.MouseWheelY = 8] = "MouseWheelY", MM[MM.MouseWheelZ = 9] = "MouseWheelZ", MM[MM.DeltaHorizontal = 10] = "DeltaHorizontal", MM[MM.DeltaVertical = 11] = "DeltaVertical"
    }(tM || (tM = {})),
    function(MM) {
      MM[MM.Cross = 0] = "Cross", MM[MM.Circle = 1] = "Circle", MM[MM.Square = 2] = "Square", MM[MM.Triangle = 3] = "Triangle", MM[MM.L1 = 4] = "L1", MM[MM.R1 = 5] = "R1", MM[MM.L2 = 6] = "L2", MM[MM.R2 = 7] = "R2", MM[MM.Share = 8] = "Share", MM[MM.Options = 9] = "Options", MM[MM.L3 = 10] = "L3", MM[MM.R3 = 11] = "R3", MM[MM.DPadUp = 12] = "DPadUp", MM[MM.DPadDown = 13] = "DPadDown", MM[MM.DPadLeft = 14] = "DPadLeft", MM[MM.DPadRight = 15] = "DPadRight", MM[MM.Home = 16] = "Home", MM[MM.TouchPad = 17] = "TouchPad", MM[MM.LStickXAxis = 18] = "LStickXAxis", MM[MM.LStickYAxis = 19] = "LStickYAxis", MM[MM.RStickXAxis = 20] = "RStickXAxis", MM[MM.RStickYAxis = 21] = "RStickYAxis"
    }(gM || (gM = {})),
    function(MM) {
      MM[MM.Cross = 0] = "Cross", MM[MM.Circle = 1] = "Circle", MM[MM.Square = 2] = "Square", MM[MM.Triangle = 3] = "Triangle", MM[MM.L1 = 4] = "L1", MM[MM.R1 = 5] = "R1", MM[MM.L2 = 6] = "L2", MM[MM.R2 = 7] = "R2", MM[MM.Create = 8] = "Create", MM[MM.Options = 9] = "Options", MM[MM.L3 = 10] = "L3", MM[MM.R3 = 11] = "R3", MM[MM.DPadUp = 12] = "DPadUp", MM[MM.DPadDown = 13] = "DPadDown", MM[MM.DPadLeft = 14] = "DPadLeft", MM[MM.DPadRight = 15] = "DPadRight", MM[MM.Home = 16] = "Home", MM[MM.TouchPad = 17] = "TouchPad", MM[MM.LStickXAxis = 18] = "LStickXAxis", MM[MM.LStickYAxis = 19] = "LStickYAxis", MM[MM.RStickXAxis = 20] = "RStickXAxis", MM[MM.RStickYAxis = 21] = "RStickYAxis"
    }(uM || (uM = {})),
    function(MM) {
      MM[MM.A = 0] = "A", MM[MM.B = 1] = "B", MM[MM.X = 2] = "X", MM[MM.Y = 3] = "Y", MM[MM.LB = 4] = "LB", MM[MM.RB = 5] = "RB", MM[MM.LT = 6] = "LT", MM[MM.RT = 7] = "RT", MM[MM.Back = 8] = "Back", MM[MM.Start = 9] = "Start", MM[MM.LS = 10] = "LS", MM[MM.RS = 11] = "RS", MM[MM.DPadUp = 12] = "DPadUp", MM[MM.DPadDown = 13] = "DPadDown", MM[MM.DPadLeft = 14] = "DPadLeft", MM[MM.DPadRight = 15] = "DPadRight", MM[MM.Home = 16] = "Home", MM[MM.LStickXAxis = 17] = "LStickXAxis", MM[MM.LStickYAxis = 18] = "LStickYAxis", MM[MM.RStickXAxis = 19] = "RStickXAxis", MM[MM.RStickYAxis = 20] = "RStickYAxis"
    }(RM || (RM = {})),
    function(MM) {
      MM[MM.B = 0] = "B", MM[MM.A = 1] = "A", MM[MM.Y = 2] = "Y", MM[MM.X = 3] = "X", MM[MM.L = 4] = "L", MM[MM.R = 5] = "R", MM[MM.ZL = 6] = "ZL", MM[MM.ZR = 7] = "ZR", MM[MM.Minus = 8] = "Minus", MM[MM.Plus = 9] = "Plus", MM[MM.LS = 10] = "LS", MM[MM.RS = 11] = "RS", MM[MM.DPadUp = 12] = "DPadUp", MM[MM.DPadDown = 13] = "DPadDown", MM[MM.DPadLeft = 14] = "DPadLeft", MM[MM.DPadRight = 15] = "DPadRight", MM[MM.Home = 16] = "Home", MM[MM.Capture = 17] = "Capture", MM[MM.LStickXAxis = 18] = "LStickXAxis", MM[MM.LStickYAxis = 19] = "LStickYAxis", MM[MM.RStickXAxis = 20] = "RStickXAxis", MM[MM.RStickYAxis = 21] = "RStickYAxis"
    }(pM || (pM = {}));
    var sM = iM(41295);
    class DM {
      static CreateDeviceEvent(MM, rM, iM, OM, SM, jM, aM) {
        switch (MM) {
          case bM.Keyboard:
            return this._CreateKeyboardEvent(iM, OM, SM, jM);
          case bM.Mouse:
            if (iM === wM.MouseWheelX || iM === wM.MouseWheelY || iM === wM.MouseWheelZ) return this._CreateWheelEvent(MM, rM, iM, OM, SM, jM);
          case bM.Touch:
            return this._CreatePointerEvent(MM, rM, iM, OM, SM, jM, aM);
          default:
            throw `Unable to generate event for device ${bM[MM]}`
        }
      }
      static _CreatePointerEvent(MM, rM, iM, OM, SM, jM, aM) {
        const PM = this._CreateMouseEvent(MM, rM, iM, OM, SM, jM);
        MM === bM.Mouse ? (PM.deviceType = bM.Mouse, PM.pointerId = 1, PM.pointerType = "mouse") : (PM.deviceType = bM.Touch, PM.pointerId = aM ?? rM, PM.pointerType = "touch");
        let nM = 0;
        return nM += SM.pollInput(MM, rM, wM.LeftClick), nM += 2 * SM.pollInput(MM, rM, wM.RightClick), nM += 4 * SM.pollInput(MM, rM, wM.MiddleClick), PM.buttons = nM, iM === wM.Move ? PM.type = "pointermove" : iM >= wM.LeftClick && iM <= wM.RightClick && (PM.type = 1 === OM ? "pointerdown" : "pointerup", PM.button = iM - 2), PM
      }
      static _CreateWheelEvent(MM, rM, iM, OM, SM, jM) {
        const aM = this._CreateMouseEvent(MM, rM, iM, OM, SM, jM);
        switch (aM.pointerId = 1, aM.type = "wheel", aM.deltaMode = sM.c.DOM_DELTA_PIXEL, aM.deltaX = 0, aM.deltaY = 0, aM.deltaZ = 0, iM) {
          case wM.MouseWheelX:
            aM.deltaX = OM;
            break;
          case wM.MouseWheelY:
            aM.deltaY = OM;
            break;
          case wM.MouseWheelZ:
            aM.deltaZ = OM
        }
        return aM
      }
      static _CreateMouseEvent(MM, rM, iM, OM, SM, jM) {
        const aM = this._CreateEvent(jM),
          PM = SM.pollInput(MM, rM, wM.Horizontal),
          nM = SM.pollInput(MM, rM, wM.Vertical);
        return jM ? (aM.movementX = 0, aM.movementY = 0, aM.offsetX = aM.movementX - jM.getBoundingClientRect().x, aM.offsetY = aM.movementY - jM.getBoundingClientRect().y) : (aM.movementX = SM.pollInput(MM, rM, 10), aM.movementY = SM.pollInput(MM, rM, 11), aM.offsetX = 0, aM.offsetY = 0), this._CheckNonCharacterKeys(aM, SM), aM.clientX = PM, aM.clientY = nM, aM.x = PM, aM.y = nM, aM.deviceType = MM, aM.deviceSlot = rM, aM.inputIndex = iM, aM
      }
      static _CreateKeyboardEvent(MM, rM, iM, OM) {
        const SM = this._CreateEvent(OM);
        return this._CheckNonCharacterKeys(SM, iM), SM.deviceType = bM.Keyboard, SM.deviceSlot = 0, SM.inputIndex = MM, SM.type = 1 === rM ? "keydown" : "keyup", SM.key = String.fromCharCode(MM), SM.keyCode = MM, SM
      }
      static _CheckNonCharacterKeys(MM, rM) {
        const iM = rM.isDeviceAvailable(bM.Keyboard),
          OM = iM && 1 === rM.pollInput(bM.Keyboard, 0, 18),
          SM = iM && 1 === rM.pollInput(bM.Keyboard, 0, 17),
          jM = iM && (1 === rM.pollInput(bM.Keyboard, 0, 91) || 1 === rM.pollInput(bM.Keyboard, 0, 92) || 1 === rM.pollInput(bM.Keyboard, 0, 93)),
          aM = iM && 1 === rM.pollInput(bM.Keyboard, 0, 16);
        MM.altKey = OM, MM.ctrlKey = SM, MM.metaKey = jM, MM.shiftKey = aM
      }
      static _CreateEvent(MM) {
        const rM = {
          preventDefault: () => {}
        };
        return rM.target = MM, rM
      }
    }
    class kM {
      constructor(MM, rM, iM) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(MM, rM, ((MM, rM, OM, SM) => {
          const jM = DM.CreateDeviceEvent(MM, rM, OM, SM, this);
          iM(MM, rM, jM)
        })) : this._createDummyNativeInput()
      }
      pollInput(MM, rM, iM) {
        return this._nativeInput.pollInput(MM, rM, iM)
      }
      isDeviceAvailable(MM) {
        return MM === bM.Mouse || MM === bM.Touch
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
    const ZM = Object.keys(wM).length / 2;
    class oM {
      constructor(MM, rM, iM, SM) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = OM.e.IsSafari(), this._usingMacOs = (0, EM.k)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = MM => {}, this._keyboardUpEvent = MM => {}, this._keyboardBlurEvent = MM => {}, this._pointerMoveEvent = MM => {}, this._pointerDownEvent = MM => {}, this._pointerUpEvent = MM => {}, this._pointerCancelEvent = MM => {}, this._pointerCancelTouch = MM => {}, this._pointerLeaveEvent = MM => {}, this._pointerWheelEvent = MM => {}, this._pointerBlurEvent = MM => {}, this._pointerMacOsChromeOutEvent = MM => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, EM.k)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, EM.k)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = MM => {}, this._gamepadDisconnectedEvent = MM => {}, this._eventPrefix = OM.e.GetPointerPrefix(MM), this._engine = MM, this._onDeviceConnected = rM, this._onDeviceDisconnected = iM, this._onInputChanged = SM, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(MM, rM, iM) {
        const SM = this._inputs[MM][rM];
        if (!SM) throw `Unable to find device ${bM[MM]}`;
        MM >= bM.DualShock && MM <= bM.DualSense && this._updateDevice(MM, rM, iM);
        const jM = SM[iM];
        if (void 0 === jM) throw `Unable to find input ${iM} for device ${bM[MM]} in slot ${rM}`;
        return iM === wM.Move && OM.e.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), jM
      }
      isDeviceAvailable(MM) {
        return void 0 !== this._inputs[MM]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const MM = this?._engine.getInputElement();
        if (MM && (!this._eventsAttached || this._elementToAttachTo !== MM)) {
          if (this._disableEvents(), this._inputs)
            for (const MM of this._inputs)
              if (MM)
                for (const rM in MM) {
                  const iM = MM[+rM];
                  if (iM)
                    for (let MM = 0; MM < iM.length; MM++) iM[MM] = 0
                }
          this._elementToAttachTo = MM, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const MM = navigator.getGamepads();
          for (const rM of MM) rM && this._addGamePad(rM)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(bM.Mouse, 0, 0, 0)
      }
      _addGamePad(MM) {
        const rM = this._getGamepadDeviceType(MM.id),
          iM = MM.index;
        this._gamepads = this._gamepads || new Array(MM.index + 1), this._registerDevice(rM, iM, MM.buttons.length + MM.axes.length), this._gamepads[iM] = rM
      }
      _addPointerDevice(MM, rM, iM, OM) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(MM, rM, ZM);
        const SM = this._inputs[MM][rM];
        SM[0] = iM, SM[1] = OM
      }
      _registerDevice(MM, rM, iM) {
        if (void 0 === rM) throw `Unable to register device ${bM[MM]} to undefined slot.`;
        if (this._inputs[MM] || (this._inputs[MM] = {}), !this._inputs[MM][rM]) {
          const OM = new Array(iM);
          OM.fill(0), this._inputs[MM][rM] = OM, this._onDeviceConnected(MM, rM)
        }
      }
      _unregisterDevice(MM, rM) {
        this._inputs[MM][rM] && (delete this._inputs[MM][rM], this._onDeviceDisconnected(MM, rM))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = MM => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(bM.Keyboard, 0, 255));
          const rM = this._inputs[bM.Keyboard][0];
          if (rM) {
            rM[MM.keyCode] = 1;
            const iM = MM;
            iM.inputIndex = MM.keyCode, this._usingMacOs && MM.metaKey && "Meta" !== MM.key && (this._metaKeys.includes(MM.keyCode) || this._metaKeys.push(MM.keyCode)), this._onInputChanged(bM.Keyboard, 0, iM)
          }
        }, this._keyboardUpEvent = MM => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(bM.Keyboard, 0, 255));
          const rM = this._inputs[bM.Keyboard][0];
          if (rM) {
            rM[MM.keyCode] = 0;
            const iM = MM;
            if (iM.inputIndex = MM.keyCode, this._usingMacOs && "Meta" === MM.key && this._metaKeys.length > 0) {
              for (const MM of this._metaKeys) {
                const iM = DM.CreateDeviceEvent(bM.Keyboard, 0, MM, 0, this, this._elementToAttachTo);
                rM[MM] = 0, this._onInputChanged(bM.Keyboard, 0, iM)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(bM.Keyboard, 0, iM)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const MM = this._inputs[bM.Keyboard][0];
            for (let rM = 0; rM < MM.length; rM++)
              if (0 !== MM[rM]) {
                MM[rM] = 0;
                const iM = DM.CreateDeviceEvent(bM.Keyboard, 0, rM, 0, this, this._elementToAttachTo);
                this._onInputChanged(bM.Keyboard, 0, iM)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, EM.k)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let OM = 0; OM < this._maxTouchPoints; OM++) this._activeTouchIds[OM] = -1;
        this._pointerMoveEvent = MM => {
          const rM = this._getPointerType(MM);
          let iM = rM === bM.Mouse ? 0 : this._activeTouchIds.indexOf(MM.pointerId);
          if (rM === bM.Touch && -1 === iM) {
            if (0 === MM.buttons) return;
            const SM = this._activeTouchIds.indexOf(-1);
            if (!(SM >= 0)) return void OM.e.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            iM = SM, this._activeTouchIds[SM] = MM.pointerId, this._onDeviceConnected(rM, iM)
          }
          this._inputs[rM] || (this._inputs[rM] = {}), this._inputs[rM][iM] || this._addPointerDevice(rM, iM, MM.clientX, MM.clientY);
          const SM = this._inputs[rM][iM];
          if (SM) {
            const OM = MM;
            OM.inputIndex = wM.Move, SM[wM.Horizontal] = MM.clientX, SM[wM.Vertical] = MM.clientY, rM === bM.Touch && 0 === SM[wM.LeftClick] && (SM[wM.LeftClick] = 1), void 0 === MM.pointerId && (MM.pointerId = this._mouseId), this._onInputChanged(rM, iM, OM), this._usingSafari || -1 === MM.button || (OM.inputIndex = MM.button + 2, SM[MM.button + 2] = SM[MM.button + 2] ? 0 : 1, this._onInputChanged(rM, iM, OM))
          }
        }, this._pointerDownEvent = MM => {
          const rM = this._getPointerType(MM);
          let iM = rM === bM.Mouse ? 0 : MM.pointerId;
          if (rM === bM.Touch) {
            let rM = this._activeTouchIds.indexOf(MM.pointerId);
            if (-1 === rM && (rM = this._activeTouchIds.indexOf(-1)), !(rM >= 0)) return void OM.e.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            iM = rM, this._activeTouchIds[rM] = MM.pointerId
          }
          this._inputs[rM] || (this._inputs[rM] = {}), this._inputs[rM][iM] ? rM === bM.Touch && this._onDeviceConnected(rM, iM) : this._addPointerDevice(rM, iM, MM.clientX, MM.clientY);
          const SM = this._inputs[rM][iM];
          if (SM) {
            const OM = SM[wM.Horizontal],
              aM = SM[wM.Vertical];
            if (rM === bM.Mouse) {
              if (void 0 === MM.pointerId && (MM.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (jM) {}
            } else if (MM.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(MM.pointerId)
            } catch (jM) {}
            SM[wM.Horizontal] = MM.clientX, SM[wM.Vertical] = MM.clientY, SM[MM.button + 2] = 1;
            const PM = MM;
            PM.inputIndex = MM.button + 2, this._onInputChanged(rM, iM, PM), OM === MM.clientX && aM === MM.clientY || (PM.inputIndex = wM.Move, this._onInputChanged(rM, iM, PM))
          }
        }, this._pointerUpEvent = MM => {
          const rM = this._getPointerType(MM),
            iM = rM === bM.Mouse ? 0 : this._activeTouchIds.indexOf(MM.pointerId);
          if (rM === bM.Touch) {
            if (-1 === iM) return;
            this._activeTouchIds[iM] = -1
          }
          const OM = this._inputs[rM]?.[iM];
          let SM = MM.button,
            jM = OM && 0 !== OM[SM + 2];
          if (!jM && this._isUsingFirefox && this._usingMacOs && OM && (SM = 2 === SM ? 0 : 2, jM = 0 !== OM[SM + 2]), jM) {
            const jM = OM[wM.Horizontal],
              aM = OM[wM.Vertical];
            OM[wM.Horizontal] = MM.clientX, OM[wM.Vertical] = MM.clientY, OM[SM + 2] = 0;
            const PM = MM;
            void 0 === MM.pointerId && (MM.pointerId = this._mouseId), jM === MM.clientX && aM === MM.clientY || (PM.inputIndex = wM.Move, this._onInputChanged(rM, iM, PM)), PM.inputIndex = SM + 2, rM === bM.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : MM.pointerId && this._elementToAttachTo.hasPointerCapture?.(MM.pointerId) && this._elementToAttachTo.releasePointerCapture(MM.pointerId), this._onInputChanged(rM, iM, PM), rM === bM.Touch && this._onDeviceDisconnected(rM, iM)
          }
        }, this._pointerCancelTouch = MM => {
          const rM = this._activeTouchIds.indexOf(MM);
          if (-1 === rM) return;
          this._elementToAttachTo.hasPointerCapture?.(MM) && this._elementToAttachTo.releasePointerCapture(MM), this._inputs[bM.Touch][rM][wM.LeftClick] = 0;
          const iM = DM.CreateDeviceEvent(bM.Touch, rM, wM.LeftClick, 0, this, this._elementToAttachTo, MM);
          this._onInputChanged(bM.Touch, rM, iM), this._activeTouchIds[rM] = -1, this._onDeviceDisconnected(bM.Touch, rM)
        }, this._pointerCancelEvent = MM => {
          if ("mouse" === MM.pointerType) {
            const MM = this._inputs[bM.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let rM = wM.LeftClick; rM <= wM.BrowserForward; rM++)
              if (1 === MM[rM]) {
                MM[rM] = 0;
                const iM = DM.CreateDeviceEvent(bM.Mouse, 0, rM, 0, this, this._elementToAttachTo);
                this._onInputChanged(bM.Mouse, 0, iM)
              }
          } else this._pointerCancelTouch(MM.pointerId)
        }, this._pointerLeaveEvent = MM => {
          "pen" === MM.pointerType && this._pointerCancelTouch(MM.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let MM = !1;
        const rM = function() {};
        try {
          const iM = Object.defineProperty({}, "passive", {
            get: function() {
              MM = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", rM, iM), this._elementToAttachTo.removeEventListener("test", rM, iM)
        } catch (iM) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(bM.Mouse)) {
            const MM = this._inputs[bM.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let rM = wM.LeftClick; rM <= wM.BrowserForward; rM++)
              if (1 === MM[rM]) {
                MM[rM] = 0;
                const iM = DM.CreateDeviceEvent(bM.Mouse, 0, rM, 0, this, this._elementToAttachTo);
                this._onInputChanged(bM.Mouse, 0, iM)
              }
          }
          if (this.isDeviceAvailable(bM.Touch)) {
            const MM = this._inputs[bM.Touch];
            for (let rM = 0; rM < this._activeTouchIds.length; rM++) {
              const iM = this._activeTouchIds[rM];
              if (this._elementToAttachTo.hasPointerCapture?.(iM) && this._elementToAttachTo.releasePointerCapture(iM), -1 !== iM && 1 === MM[rM]?.[wM.LeftClick]) {
                MM[rM][wM.LeftClick] = 0;
                const OM = DM.CreateDeviceEvent(bM.Touch, rM, wM.LeftClick, 0, this, this._elementToAttachTo, iM);
                this._onInputChanged(bM.Touch, rM, OM), this._activeTouchIds[rM] = -1, this._onDeviceDisconnected(bM.Touch, rM)
              }
            }
          }
        }, this._pointerWheelEvent = MM => {
          const rM = bM.Mouse;
          this._inputs[rM] || (this._inputs[rM] = []), this._inputs[rM][0] || (this._pointerActive = !0, this._registerDevice(rM, 0, ZM));
          const iM = this._inputs[rM][0];
          if (iM) {
            iM[wM.MouseWheelX] = MM.deltaX || 0, iM[wM.MouseWheelY] = MM.deltaY || MM.wheelDelta || 0, iM[wM.MouseWheelZ] = MM.deltaZ || 0;
            const OM = MM;
            void 0 === MM.pointerId && (MM.pointerId = this._mouseId), 0 !== iM[wM.MouseWheelX] && (OM.inputIndex = wM.MouseWheelX, this._onInputChanged(rM, 0, OM)), 0 !== iM[wM.MouseWheelY] && (OM.inputIndex = wM.MouseWheelY, this._onInputChanged(rM, 0, OM)), 0 !== iM[wM.MouseWheelZ] && (OM.inputIndex = wM.MouseWheelZ, this._onInputChanged(rM, 0, OM))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = MM => {
          MM.buttons > 1 && this._pointerCancelEvent(MM)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!MM && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(bM.Mouse)) {
            const MM = this._inputs[bM.Mouse][0];
            MM[wM.MouseWheelX] = 0, MM[wM.MouseWheelY] = 0, MM[wM.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = MM => {
          this._addGamePad(MM.gamepad)
        }, this._gamepadDisconnectedEvent = MM => {
          if (this._gamepads) {
            const rM = this._getGamepadDeviceType(MM.gamepad.id),
              iM = MM.gamepad.index;
            this._unregisterDevice(rM, iM), delete this._gamepads[iM]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(MM, rM, iM) {
        const OM = navigator.getGamepads()[rM];
        if (OM && MM === this._gamepads[rM]) {
          const SM = this._inputs[MM][rM];
          iM >= OM.buttons.length ? SM[iM] = OM.axes[iM - OM.buttons.length].valueOf() : SM[iM] = OM.buttons[iM].value
        }
      }
      _getGamepadDeviceType(MM) {
        return -1 !== MM.indexOf("054c") ? -1 !== MM.indexOf("0ce6") ? bM.DualSense : bM.DualShock : -1 !== MM.indexOf("Xbox One") || -1 !== MM.search("Xbox 360") || -1 !== MM.search("xinput") || -1 !== MM.indexOf("045e") && -1 === MM.indexOf("Surface Dock") ? bM.Xbox : -1 !== MM.indexOf("057e") ? bM.Switch : bM.Generic
      }
      _getPointerType(MM) {
        let rM = bM.Mouse;
        return ("touch" === MM.pointerType || "pen" === MM.pointerType || MM.touches) && (rM = bM.Touch), rM
      }
    }
    class fM {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = rM, this.deviceSlot = iM, this.onInputChangedObservable = new aM.d, this._deviceInputSystem = MM
      }
      getInput(MM) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, MM)
      }
    }
    class YM {
      constructor(MM) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = MM => {
          for (let rM = 0; rM < this._devices.length; rM++) {
            const iM = this._devices[rM];
            for (const OM in iM) {
              const iM = +OM;
              MM._addDevice(new fM(this._deviceInputSystem, rM, iM))
            }
          }
          this._registeredManagers.push(MM)
        }, this.unregisterManager = MM => {
          const rM = this._registeredManagers.indexOf(MM);
          rM > -1 && this._registeredManagers.splice(rM, 1)
        };
        const rM = Object.keys(bM).length / 2;
        this._devices = new Array(rM);
        const iM = (MM, rM) => {
            this._devices[MM] || (this._devices[MM] = new Array), this._devices[MM][rM] || (this._devices[MM][rM] = rM);
            for (const iM of this._registeredManagers) {
              const OM = new fM(this._deviceInputSystem, MM, rM);
              iM._addDevice(OM)
            }
          },
          OM = (MM, rM) => {
            this._devices[MM]?.[rM] && delete this._devices[MM][rM];
            for (const iM of this._registeredManagers) iM._removeDevice(MM, rM)
          },
          SM = (MM, rM, iM) => {
            if (iM)
              for (const OM of this._registeredManagers) OM._onInputChanged(MM, rM, iM)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new kM(iM, OM, SM) : this._deviceInputSystem = new oM(MM, iM, OM, SM)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class NM {
      getDeviceSource(MM, rM) {
        if (void 0 === rM) {
          if (void 0 === this._firstDevice[MM]) return null;
          rM = this._firstDevice[MM]
        }
        return this._devices[MM] && void 0 !== this._devices[MM][rM] ? this._devices[MM][rM] : null
      }
      getDeviceSources(MM) {
        return this._devices[MM] ? this._devices[MM].filter((MM => !!MM)) : []
      }
      constructor(MM) {
        const rM = Object.keys(bM).length / 2;
        this._devices = new Array(rM), this._firstDevice = new Array(rM), this._engine = MM, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new YM(MM)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new aM.d((MM => {
          for (const rM of this._devices)
            if (rM)
              for (const iM of rM) iM && this.onDeviceConnectedObservable.notifyObserver(MM, iM)
        })), this.onDeviceDisconnectedObservable = new aM.d, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = MM.Rk.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.Rk.remove(this._onDisposeObserver)
      }
      _addDevice(MM) {
        this._devices[MM.deviceType] || (this._devices[MM.deviceType] = []), this._devices[MM.deviceType][MM.deviceSlot] || (this._devices[MM.deviceType][MM.deviceSlot] = MM, this._updateFirstDevices(MM.deviceType)), this.onDeviceConnectedObservable.notifyObservers(MM)
      }
      _removeDevice(MM, rM) {
        const iM = this._devices[MM]?.[rM];
        this.onDeviceDisconnectedObservable.notifyObservers(iM), this._devices[MM]?.[rM] && delete this._devices[MM][rM], this._updateFirstDevices(MM)
      }
      _onInputChanged(MM, rM, iM) {
        this._devices[MM]?.[rM]?.onInputChangedObservable.notifyObservers(iM)
      }
      _updateFirstDevices(MM) {
        switch (MM) {
          case bM.Keyboard:
          case bM.Mouse:
            this._firstDevice[MM] = 0;
            break;
          case bM.Touch:
          case bM.DualSense:
          case bM.DualShock:
          case bM.Xbox:
          case bM.Switch:
          case bM.Generic: {
            delete this._firstDevice[MM];
            const rM = this._devices[MM];
            if (rM)
              for (let iM = 0; iM < rM.length; iM++)
                if (rM[iM]) {
                  this._firstDevice[MM] = iM;
                  break
                } break
          }
        }
      }
    }
    var AM = iM(41302);
    class xM {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get wa() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(MM) {
        this._singleClick = MM
      }
      set wa(MM) {
        this._doubleClick = MM
      }
      set hasSwiped(MM) {
        this._hasSwiped = MM
      }
      set ignore(MM) {
        this._ignore = MM
      }
    }
    class vM {
      constructor(MM) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new zM.o(0, 0), this._previousStartingPointerPosition = new zM.o(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = MM || UM.c.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(MM) {
        return this._meshUnderPointerId[MM] || null
      }
      get unTranslatedPointer() {
        return new zM.o(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(MM) {
        this._pointerX = MM
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(MM) {
        this._pointerY = MM
      }
      _updatePointerPosition(MM) {
        const rM = this._scene.ph().getInputElementClientRect();
        rM && (this._pointerX = MM.clientX - rM.left, this._pointerY = MM.clientY - rM.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(MM, rM) {
        const iM = this._scene,
          OM = iM.ph(),
          SM = OM.getInputElement();
        SM && (SM.tabIndex = OM.canvasTabIndex, iM.doNotHandleCursors || (SM.style.cursor = iM.defaultCursor)), this._setCursorAndPointerOverMesh(MM, rM, iM);
        for (const PM of iM._pointerMoveStage) {
          MM = MM || this._pickMove(rM);
          const iM = !!MM?.pickedMesh;
          MM = PM.action(this._unTranslatedPointerX, this._unTranslatedPointerY, MM, iM, SM)
        }
        const jM = rM.inputIndex >= wM.MouseWheelX && rM.inputIndex <= wM.MouseWheelZ ? CM.d.POINTERWHEEL : CM.d.POINTERMOVE;
        let aM;
        iM.onPointerMove && (MM = MM || this._pickMove(rM), iM.onPointerMove(rM, MM, jM)), MM ? (aM = new CM.j(jM, rM, MM), this._setRayOnPointerInfo(MM, rM)) : (aM = new CM.j(jM, rM, null, this), this._movePointerInfo = aM), iM.onPointerObservable.hasObservers() && iM.onPointerObservable.notifyObservers(aM, jM)
      }
      _setRayOnPointerInfo(MM, rM) {
        const iM = this._scene;
        MM && AM.b._IsPickingAvailable && (MM.ray || (MM.ray = iM.createPickingRay(rM.offsetX, rM.offsetY, zM.d.Identity(), iM.activeCamera)))
      }
      _addCameraPointerObserver(MM, rM) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(MM, rM)
      }
      _removeCameraPointerObserver(MM) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(MM)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(MM, rM, iM) {
        const OM = this._scene,
          SM = new CM.g(iM, rM, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return MM && (SM.originalPickingInfo = MM, SM.ray = MM.ray, "xr-near" === rM.pointerType && MM.originMesh && (SM.nearInteractionPickingInfo = MM)), OM.onPrePointerObservable.notifyObservers(SM, iM), !!SM.skipOnPointerObservable
      }
      _pickMove(MM) {
        const rM = this._scene,
          iM = rM.LH(this._unTranslatedPointerX, this._unTranslatedPointerY, rM.pointerMovePredicate, rM.pointerMoveFastCheck, rM.cameraToUseForPointers, rM.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(iM, MM, rM), iM
      }
      _updateMeshUnderPointer() {
        const MM = this._scene;
        if (!MM.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || MM.skipPointerMovePicking || !MM.cameraToUseForPointers && !MM.activeCamera) return;
        this._ensurePointerMovePredicate();
        const rM = this._pointerX,
          iM = this._pointerY,
          OM = this._unTranslatedPointerX,
          SM = this._unTranslatedPointerY;
        for (const jM of this._latestPointerMoveEvents.values()) this._pointerX = jM.pointerX, this._pointerY = jM.pointerY, this._unTranslatedPointerX = jM.unTranslatedPointerX, this._unTranslatedPointerY = jM.unTranslatedPointerY, this._pickMove(jM.event);
        this._pointerX = rM, this._pointerY = iM, this._unTranslatedPointerX = OM, this._unTranslatedPointerY = SM
      }
      _ensurePointerMovePredicate() {
        const MM = this._scene;
        MM.pointerMovePredicate || (MM.pointerMovePredicate = rM => (rM._isPointerMovePickable ?? rM.AJ) && rM.isVisible && rM.isReady() && rM.isEnabled() && (rM.enablePointerMoveEvents || MM.constantlyUpdateMeshUnderPointer || null !== rM._getActionManagerForTrigger()) && (!MM.cameraToUseForPointers || 0 !== (MM.cameraToUseForPointers.layerMask & rM.layerMask)))
      }
      _setCursorAndPointerOverMesh(MM, rM, iM) {
        const OM = iM.ph().getInputElement();
        if (MM?.pickedMesh) {
          if (this.setPointerOverMesh(MM.pickedMesh, rM.pointerId, MM, rM), !iM.doNotHandleCursors && OM && this._pointerOverMesh) {
            const MM = this._pointerOverMesh._getActionManagerForTrigger();
            MM && MM.hasPointerTriggers && (OM.style.cursor = MM.hoverCursor || iM.hoverCursor)
          }
        } else this.setPointerOverMesh(null, rM.pointerId, MM, rM)
      }
      simulatePointerMove(MM, rM) {
        const iM = new PointerEvent("pointermove", rM);
        iM.inputIndex = wM.Move, this._checkPrePointerObservable(MM, iM, CM.d.POINTERMOVE) || this._processPointerMove(MM, iM)
      }
      simulatePointerDown(MM, rM) {
        const iM = new PointerEvent("pointerdown", rM);
        iM.inputIndex = iM.button + 2, this._checkPrePointerObservable(MM, iM, CM.d.POINTERDOWN) || this._processPointerDown(MM, iM)
      }
      _processPointerDown(MM, rM) {
        const iM = this._scene;
        if (MM?.pickedMesh) {
          this._pickedDownMesh = MM.pickedMesh;
          const OM = MM.pickedMesh._getActionManagerForTrigger();
          if (OM) {
            if (OM.hasPickTriggers) switch (OM.processTrigger(5, new hM(MM.pickedMesh, iM.pointerX, iM.pointerY, MM.pickedMesh, rM, MM)), rM.button) {
              case 0:
                OM.processTrigger(2, new hM(MM.pickedMesh, iM.pointerX, iM.pointerY, MM.pickedMesh, rM, MM));
                break;
              case 1:
                OM.processTrigger(4, new hM(MM.pickedMesh, iM.pointerX, iM.pointerY, MM.pickedMesh, rM, MM));
                break;
              case 2:
                OM.processTrigger(3, new hM(MM.pickedMesh, iM.pointerX, iM.pointerY, MM.pickedMesh, rM, MM))
            }
            OM.hasSpecificTrigger(8) && window.setTimeout((() => {
              const MM = iM.LH(this._unTranslatedPointerX, this._unTranslatedPointerY, (MM => MM.AJ && MM.isVisible && MM.isReady() && MM.actionManager && MM.actionManager.hasSpecificTrigger(8) && MM === this._pickedDownMesh), !1, iM.cameraToUseForPointers);
              MM?.pickedMesh && OM && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > vM.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, OM.processTrigger(8, hM.CreateNew(MM.pickedMesh, rM)))
            }), vM.LongPressDelay)
          }
        } else
          for (const jM of iM._pointerDownStage) MM = jM.action(this._unTranslatedPointerX, this._unTranslatedPointerY, MM, rM, !1);
        let OM;
        const SM = CM.d.POINTERDOWN;
        MM ? (iM.onPointerDown && iM.onPointerDown(rM, MM, SM), OM = new CM.j(SM, rM, MM), this._setRayOnPointerInfo(MM, rM)) : OM = new CM.j(SM, rM, null, this), iM.onPointerObservable.hasObservers() && iM.onPointerObservable.notifyObservers(OM, SM)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(MM, rM, iM) {
        const OM = new PointerEvent("pointerup", rM);
        OM.inputIndex = wM.Move;
        const SM = new xM;
        iM ? SM.wa = !0 : SM.singleClick = !0, this._checkPrePointerObservable(MM, OM, CM.d.POINTERUP) || this._processPointerUp(MM, OM, SM)
      }
      _processPointerUp(MM, rM, iM) {
        const OM = this._scene;
        if (MM?.pickedMesh) {
          if (this._pickedUpMesh = MM.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (OM.onPointerPick && OM.onPointerPick(rM, MM), iM.singleClick && !iM.ignore && OM.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const iM = CM.d.POINTERPICK,
              SM = new CM.j(iM, rM, MM);
            this._setRayOnPointerInfo(MM, rM), OM.onPointerObservable.notifyObservers(SM, iM)
          }
          const SM = MM.pickedMesh._getActionManagerForTrigger();
          if (SM && !iM.ignore) {
            SM.processTrigger(7, hM.CreateNew(MM.pickedMesh, rM, MM)), !iM.hasSwiped && iM.singleClick && SM.processTrigger(1, hM.CreateNew(MM.pickedMesh, rM, MM));
            const OM = MM.pickedMesh._getActionManagerForTrigger(6);
            iM.wa && OM && OM.processTrigger(6, hM.CreateNew(MM.pickedMesh, rM, MM))
          }
        } else if (!iM.ignore)
          for (const SM of OM._pointerUpStage) MM = SM.action(this._unTranslatedPointerX, this._unTranslatedPointerY, MM, rM, iM.wa);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const MM = this._pickedDownMesh._getActionManagerForTrigger(16);
          MM && MM.processTrigger(16, hM.CreateNew(this._pickedDownMesh, rM))
        }
        if (!iM.ignore) {
          const SM = new CM.j(CM.d.POINTERUP, rM, MM);
          if (this._setRayOnPointerInfo(MM, rM), OM.onPointerObservable.notifyObservers(SM, CM.d.POINTERUP), OM.onPointerUp && OM.onPointerUp(rM, MM, CM.d.POINTERUP), !iM.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let SM = 0;
            if (iM.singleClick ? SM = CM.d.POINTERTAP : iM.wa && (SM = CM.d.POINTERDOUBLETAP), SM) {
              const iM = new CM.j(SM, rM, MM);
              OM.onPointerObservable.hasObservers() && OM.onPointerObservable.hasSpecificMask(SM) && OM.onPointerObservable.notifyObservers(iM, SM)
            }
          }
        }
      }
      isPointerCaptured() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[MM]
      }
      attachControl() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const SM = this._scene,
          jM = SM.ph();
        OM || (OM = jM.getInputElement()), this._alreadyAttached && this.detachControl(), OM && (this._alreadyAttachedTo = OM), this._deviceSourceManager = new NM(jM), this._initActionManager = MM => {
          if (!this._meshPickProceed) {
            const rM = SM.skipPointerUpPicking || 0 === SM._registeredActions && !this._checkForPicking() && !SM.onPointerUp ? null : SM.LH(this._unTranslatedPointerX, this._unTranslatedPointerY, SM.pointerUpPredicate, SM.pointerUpFastCheck, SM.cameraToUseForPointers, SM.pointerUpTrianglePredicate);
            this._currentPickResult = rM, rM && (MM = rM.hit && rM.pickedMesh ? rM.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return MM
        }, this._delayedSimpleClick = (MM, rM, iM) => {
          if ((Date.now() - this._previousStartingPointerTime > vM.DoubleClickDelay && !this._doubleClickOccured || MM !== this._previousButtonPressed) && (this._doubleClickOccured = !1, rM.singleClick = !0, rM.ignore = !1, this._delayedClicks[MM])) {
            const rM = this._delayedClicks[MM].evt,
              iM = CM.d.POINTERTAP,
              OM = new CM.j(iM, rM, this._currentPickResult);
            SM.onPointerObservable.hasObservers() && SM.onPointerObservable.hasSpecificMask(iM) && SM.onPointerObservable.notifyObservers(OM, iM), this._delayedClicks[MM] = null
          }
        }, this._initClickEvent = (MM, rM, iM, OM) => {
          const SM = new xM;
          this._currentPickResult = null;
          let jM = null,
            aM = MM.hasSpecificMask(CM.d.POINTERPICK) || rM.hasSpecificMask(CM.d.POINTERPICK) || MM.hasSpecificMask(CM.d.POINTERTAP) || rM.hasSpecificMask(CM.d.POINTERTAP) || MM.hasSpecificMask(CM.d.POINTERDOUBLETAP) || rM.hasSpecificMask(CM.d.POINTERDOUBLETAP);
          !aM && eM && (jM = this._initActionManager(jM, SM), jM && (aM = jM.hasPickTriggers));
          let PM = !1;
          if (aM = aM && !this._isMultiTouchGesture, aM) {
            const aM = iM.button;
            if (SM.hasSwiped = this._isPointerSwiping(), !SM.hasSwiped) {
              let nM = !vM.ExclusiveDoubleClickMode;
              if (nM || (nM = !MM.hasSpecificMask(CM.d.POINTERDOUBLETAP) && !rM.hasSpecificMask(CM.d.POINTERDOUBLETAP), nM && !eM.HasSpecificTrigger(6) && (jM = this._initActionManager(jM, SM), jM && (nM = !jM.hasSpecificTrigger(6)))), nM)(Date.now() - this._previousStartingPointerTime > vM.DoubleClickDelay || aM !== this._previousButtonPressed) && (SM.singleClick = !0, OM(SM, this._currentPickResult), PM = !0);
              else {
                const MM = {
                  evt: iM,
                  clickInfo: SM,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, aM, SM, OM), vM.DoubleClickDelay)
                };
                this._delayedClicks[aM] = MM
              }
              let QM = MM.hasSpecificMask(CM.d.POINTERDOUBLETAP) || rM.hasSpecificMask(CM.d.POINTERDOUBLETAP);
              !QM && eM.HasSpecificTrigger(6) && (jM = this._initActionManager(jM, SM), jM && (QM = jM.hasSpecificTrigger(6))), QM && (aM === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < vM.DoubleClickDelay && !this._doubleClickOccured ? (SM.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = aM, vM.ExclusiveDoubleClickMode ? (this._delayedClicks[aM] && (clearTimeout(this._delayedClicks[aM]?.timeoutId), this._delayedClicks[aM] = null), OM(SM, this._previousPickResult)) : OM(SM, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, SM.wa = !0, SM.ignore = !1, vM.ExclusiveDoubleClickMode && this._delayedClicks[aM] && (clearTimeout(this._delayedClicks[aM]?.timeoutId), this._delayedClicks[aM] = null), OM(SM, this._currentPickResult)), PM = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = aM))
            }
          }
          PM || OM(SM, this._currentPickResult)
        }, this._onPointerMove = MM => {
          if (this._updatePointerPosition(MM), this._latestPointerMoveEvents.set(MM.pointerId, {
              event: MM,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > vM.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > vM.DragMovementThreshold), jM.isPointerLock && jM._verifyPointerLock(), this._checkPrePointerObservable(null, MM, MM.inputIndex >= wM.MouseWheelX && MM.inputIndex <= wM.MouseWheelZ ? CM.d.POINTERWHEEL : CM.d.POINTERMOVE)) return;
          if (!SM.cameraToUseForPointers && !SM.activeCamera) return;
          if (SM.skipPointerMovePicking) return void this._processPointerMove(new HM.c, MM);
          this._ensurePointerMovePredicate();
          const rM = SM._registeredActions > 0 || SM.constantlyUpdateMeshUnderPointer ? this._pickMove(MM) : null;
          this._processPointerMove(rM, MM)
        }, this._onPointerDown = MM => {
          const rM = this._activePointerIds.indexOf(-1);
          if (-1 === rM ? this._activePointerIds.push(MM.pointerId) : this._activePointerIds[rM] = MM.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, vM.ExclusiveDoubleClickMode)
            for (let OM = 0; OM < this._delayedClicks.length; OM++)
              if (this._delayedClicks[OM])
                if (MM.button === OM) clearTimeout(this._delayedClicks[OM]?.timeoutId);
                else {
                  const MM = this._delayedClicks[OM].clickInfo;
                  this._doubleClickOccured = !1, MM.singleClick = !0, MM.ignore = !1;
                  const rM = this._delayedClicks[OM].evt,
                    iM = CM.d.POINTERTAP,
                    jM = new CM.j(iM, rM, this._currentPickResult);
                  SM.onPointerObservable.hasObservers() && SM.onPointerObservable.hasSpecificMask(iM) && SM.onPointerObservable.notifyObservers(jM, iM), this._delayedClicks[OM] = null
                } if (this._updatePointerPosition(MM), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = MM.button), SM.preventDefaultOnPointerDown && OM && (MM.preventDefault(), OM.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, MM, CM.d.POINTERDOWN)) return;
          if (!SM.cameraToUseForPointers && !SM.activeCamera) return;
          let iM;
          this._pointerCaptures[MM.pointerId] = !0, SM.pointerDownPredicate || (SM.pointerDownPredicate = MM => MM.AJ && MM.isVisible && MM.isReady() && MM.isEnabled() && (!SM.cameraToUseForPointers || 0 !== (SM.cameraToUseForPointers.layerMask & MM.layerMask))), this._pickedDownMesh = null, iM = SM.skipPointerDownPicking || 0 === SM._registeredActions && !this._checkForPicking() && !SM.onPointerDown ? new HM.c : SM.LH(this._unTranslatedPointerX, this._unTranslatedPointerY, SM.pointerDownPredicate, SM.pointerDownFastCheck, SM.cameraToUseForPointers, SM.pointerDownTrianglePredicate), this._processPointerDown(iM, MM)
        }, this._onPointerUp = MM => {
          const rM = this._activePointerIds.indexOf(MM.pointerId); - 1 !== rM && (this._activePointerIds[rM] = -1, this._activePointerIdsCount--, "touch" === MM.pointerType && this._latestPointerMoveEvents.delete(MM.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(MM), SM.preventDefaultOnPointerUp && OM && (MM.preventDefault(), OM.focus()), this._initClickEvent(SM.onPrePointerObservable, SM.onPointerObservable, MM, ((rM, iM) => {
            if (SM.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !rM.ignore)) {
              if (this._checkPrePointerObservable(null, MM, CM.d.POINTERUP)) return this._swipeButtonPressed === MM.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === MM.buttons && (this._pointerCaptures[MM.pointerId] = !1));
              rM.hasSwiped || (rM.singleClick && SM.onPrePointerObservable.hasSpecificMask(CM.d.POINTERTAP) && this._checkPrePointerObservable(null, MM, CM.d.POINTERTAP) && (this._skipPointerTap = !0), rM.wa && SM.onPrePointerObservable.hasSpecificMask(CM.d.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, MM, CM.d.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[MM.pointerId] ? (0 === MM.buttons && (this._pointerCaptures[MM.pointerId] = !1), (SM.cameraToUseForPointers || SM.activeCamera) && (SM.pointerUpPredicate || (SM.pointerUpPredicate = MM => MM.AJ && MM.isVisible && MM.isReady() && MM.isEnabled() && (!SM.cameraToUseForPointers || 0 !== (SM.cameraToUseForPointers.layerMask & MM.layerMask))), !this._meshPickProceed && (eM && eM.HasTriggers || this._checkForPicking() || SM.onPointerUp) && this._initActionManager(null, rM), iM || (iM = this._currentPickResult), this._processPointerUp(iM, MM, rM), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === MM.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === MM.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = MM => {
          const rM = WM.b.KEYDOWN;
          if (SM.onPreKeyboardObservable.hasObservers()) {
            const iM = new WM.c(rM, MM);
            if (SM.onPreKeyboardObservable.notifyObservers(iM, rM), iM.skipOnKeyboardObservable) return
          }
          if (SM.onKeyboardObservable.hasObservers()) {
            const iM = new WM.f(rM, MM);
            SM.onKeyboardObservable.notifyObservers(iM, rM)
          }
          SM.actionManager && SM.actionManager.processTrigger(14, hM.CreateNewFromScene(SM, MM))
        }, this._onKeyUp = MM => {
          const rM = WM.b.KEYUP;
          if (SM.onPreKeyboardObservable.hasObservers()) {
            const iM = new WM.c(rM, MM);
            if (SM.onPreKeyboardObservable.notifyObservers(iM, rM), iM.skipOnKeyboardObservable) return
          }
          if (SM.onKeyboardObservable.hasObservers()) {
            const iM = new WM.f(rM, MM);
            SM.onKeyboardObservable.notifyObservers(iM, rM)
          }
          SM.actionManager && SM.actionManager.processTrigger(15, hM.CreateNewFromScene(SM, MM))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((OM => {
          OM.deviceType === bM.Mouse ? OM.onInputChangedObservable.add((SM => {
            this._originMouseEvent = SM, SM.inputIndex === wM.LeftClick || SM.inputIndex === wM.MiddleClick || SM.inputIndex === wM.RightClick || SM.inputIndex === wM.BrowserBack || SM.inputIndex === wM.BrowserForward ? rM && 1 === OM.getInput(SM.inputIndex) ? this._onPointerDown(SM) : MM && 0 === OM.getInput(SM.inputIndex) && this._onPointerUp(SM) : iM && (SM.inputIndex === wM.Move ? this._onPointerMove(SM) : SM.inputIndex !== wM.MouseWheelX && SM.inputIndex !== wM.MouseWheelY && SM.inputIndex !== wM.MouseWheelZ || this._onPointerMove(SM))
          })) : OM.deviceType === bM.Touch ? OM.onInputChangedObservable.add((SM => {
            SM.inputIndex === wM.LeftClick && (rM && 1 === OM.getInput(SM.inputIndex) ? (this._onPointerDown(SM), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : MM && 0 === OM.getInput(SM.inputIndex) && (this._onPointerUp(SM), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), iM && SM.inputIndex === wM.Move && this._onPointerMove(SM)
          })) : OM.deviceType === bM.Keyboard && OM.onInputChangedObservable.add((MM => {
            "keydown" === MM.type ? this._onKeyDown(MM) : "keyup" === MM.type && this._onKeyUp(MM)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 ? arguments[2] : void 0,
          OM = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[rM] === MM && (!MM || !MM._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const SM = this._meshUnderPointerId[rM];
        let jM;
        SM && (jM = SM._getActionManagerForTrigger(10), jM && jM.processTrigger(10, new hM(SM, this._pointerX, this._pointerY, MM, OM, {
          pointerId: rM
        }))), MM ? (this._meshUnderPointerId[rM] = MM, this._pointerOverMesh = MM, jM = MM._getActionManagerForTrigger(9), jM && jM.processTrigger(9, new hM(MM, this._pointerX, this._pointerY, MM, OM, {
          pointerId: rM,
          pickResult: iM
        }))) : (delete this._meshUnderPointerId[rM], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: MM,
          pointerId: rM
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(MM) {
        this._pointerOverMesh === MM && (this._pointerOverMesh = null), this._pickedDownMesh === MM && (this._pickedDownMesh = null), this._pickedUpMesh === MM && (this._pickedUpMesh = null);
        for (const rM in this._meshUnderPointerId) this._meshUnderPointerId[rM] === MM && delete this._meshUnderPointerId[rM]
      }
    }
    vM.DragMovementThreshold = 10, vM.LongPressDelay = 500, vM.DoubleClickDelay = 300, vM.ExclusiveDoubleClickMode = !1;
    var FM = iM(41048),
      BM = iM(38173),
      XM = iM(38740);
    class IM {
      static get UniqueId() {
        const MM = this._UniqueIdCounter;
        return this._UniqueIdCounter++, MM
      }
    }
    IM._UniqueIdCounter = 1;
    var KM = iM(41145),
      qM = iM(41309),
      TM = iM(38048);
    class VM {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var cM, Mr, rr, ir, Or, Sr, jr, ar, Pr, nr, Qr, zr, Lr, mr, Hr, hr, Jr, dr, yr, lr, Er, Ur, Gr, Cr, er, br, wr, tr, gr, ur, Rr, pr, Wr, sr, Dr, kr, Zr, or, fr, Yr, Nr, Ar, xr, vr, Fr, Br, Xr, Ir, Kr, qr, Tr, Vr, cr, Mi = iM(39711),
      ri = iM(38085);
    const ii = new zM.u,
      Oi = new zM.u;
    var Si;
    ! function(MM) {
      MM[MM.BackwardCompatible = 0] = "BackwardCompatible", MM[MM.Intermediate = 1] = "Intermediate", MM[MM.Aggressive = 2] = "Aggressive"
    }(Si || (Si = {}));
    class ji {
      static DefaultMaterialFactory(MM) {
        throw (0, GM.n)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, GM.n)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(MM) {
        MM !== this._clearColor && (this._clearColor = MM, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(MM) {
        if (MM !== this._performancePriority) {
          switch (this._performancePriority = MM, MM) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(MM)
        }
      }
      set forceWireframe(MM) {
        this._forceWireframe !== MM && (this._forceWireframe = MM, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(MM) {
        this._skipFrustumClipping !== MM && (this._skipFrustumClipping = MM)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(MM) {
        this._forcePointsCloud !== MM && (this._forcePointsCloud = MM, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(MM) {
        this._environmentTexture !== MM && (this._environmentTexture = MM, this.onEnvironmentTextureChangedObservable.notifyObservers(MM), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let MM = [];
        MM = MM.concat(this.meshes), MM = MM.concat(this.lights), MM = MM.concat(this.cameras), MM = MM.concat(this.transformNodes);
        for (const rM of this.skeletons) MM = MM.concat(rM.bones);
        return MM
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(MM) {
        this._animationPropertiesOverride = MM
      }
      set onDispose(MM) {
        this._onDisposeObserver && this.Rk.remove(this._onDisposeObserver), this._onDisposeObserver = this.Rk.add(MM)
      }
      set beforeRender(MM) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), MM && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(MM))
      }
      set afterRender(MM) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), MM && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(MM))
      }
      set beforeCameraRender(MM) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(MM)
      }
      set afterCameraRender(MM) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(MM)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(MM) {
        this._pointerPickingConfiguration.pointerDownPredicate = MM
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(MM) {
        this._pointerPickingConfiguration.pointerUpPredicate = MM
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(MM) {
        this._pointerPickingConfiguration.pointerMovePredicate = MM
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(MM) {
        this._pointerPickingConfiguration.pointerDownFastCheck = MM
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(MM) {
        this._pointerPickingConfiguration.pointerUpFastCheck = MM
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(MM) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = MM
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(MM) {
        this._pointerPickingConfiguration.skipPointerMovePicking = MM
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(MM) {
        this._pointerPickingConfiguration.skipPointerDownPicking = MM
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(MM) {
        this._pointerPickingConfiguration.skipPointerUpPicking = MM
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return vM.DragMovementThreshold
      }
      static set DragMovementThreshold(MM) {
        vM.DragMovementThreshold = MM
      }
      static get LongPressDelay() {
        return vM.LongPressDelay
      }
      static set LongPressDelay(MM) {
        vM.LongPressDelay = MM
      }
      static get DoubleClickDelay() {
        return vM.DoubleClickDelay
      }
      static set DoubleClickDelay(MM) {
        vM.DoubleClickDelay = MM
      }
      static get ExclusiveDoubleClickMode() {
        return vM.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(MM) {
        vM.ExclusiveDoubleClickMode = MM
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? zM.q.ZeroReadOnly
      }
      bindEyePosition(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const OM = this._eyePosition,
          SM = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          jM = this.floatingOriginOffset,
          aM = ii.set(OM.x, OM.y, OM.z, SM ? -1 : 1),
          PM = aM.subtractFromFloatsToRef(jM.x, jM.y, jM.z, 0, Oi);
        return MM && (iM ? MM.setFloat3(rM, PM.x, PM.y, PM.z) : MM.setVector4(rM, PM)), aM
      }
      finalizeSceneUbo() {
        const MM = this.getSceneUniformBuffer(),
          rM = this.bindEyePosition(null),
          iM = this.floatingOriginOffset;
        return MM.updateFloat4("vEyePosition", rM.x - iM.x, rM.y - iM.y, rM.z - iM.z, rM.w), MM.update(), MM
      }
      set useRightHandedSystem(MM) {
        this._useRightHandedSystem !== MM && (this._useRightHandedSystem = MM, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(MM) {
        this._currentStepId = MM
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(MM) {
        this._fogEnabled !== MM && (this._fogEnabled = MM, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(MM) {
        this._fogMode !== MM && (this._fogMode = MM, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(MM) {
        this._shadowsEnabled !== MM && (this._shadowsEnabled = MM, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(MM) {
        this._lightsEnabled !== MM && (this._lightsEnabled = MM, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(MM) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), MM && (this._unObserveActiveCameras = (0, TM.j)(MM, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = MM
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(MM) {
        MM !== this._activeCamera && (this._activeCamera = MM, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return ji.DefaultMaterialFactory !== ji._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = ji.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(MM) {
        this._defaultMaterial = MM
      }
      set texturesEnabled(MM) {
        this._texturesEnabled !== MM && (this._texturesEnabled = MM, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(MM) {
        if (this._frameGraph) return this._frameGraph = MM, void(MM || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = MM, MM && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(MM) {
        this._skeletonsEnabled !== MM && (this._skeletonsEnabled = MM, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = ji.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const MM of this._transientComponents) MM.register();
          this._transientComponents.length = 0
        }
      }
      MOM(MM) {
        this._components.push(MM), this._transientComponents.push(MM);
        const rM = MM;
        rM.addFromContainer && rM.serialize && this._serializableComponents.push(rM)
      }
      _getComponent(MM) {
        for (const rM of this._components)
          if (rM.name === MM) return rM;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(MM, rM) {
        this._inputManager = new vM(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new BM.h(.2, .2, .3, 1), this.onClearColorChangedObservable = new aM.d, this.ambientColor = new BM.d(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new aM.d, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.aG = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.Rk = new aM.d, this._onDisposeObserver = null, this.onBeforeRenderObservable = new aM.d, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new aM.d, this.onAfterRenderCameraObservable = new aM.d, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new aM.d, this.onAfterAnimationsObservable = new aM.d, this.onBeforeDrawPhaseObservable = new aM.d, this.onAfterDrawPhaseObservable = new aM.d, this.onReadyObservable = new aM.d, this.onBeforeCameraRenderObservable = new aM.d, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new aM.d, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new aM.d, this.onAfterActiveMeshesEvaluationObservable = new aM.d, this.onBeforeParticlesRenderingObservable = new aM.d, this.onAfterParticlesRenderingObservable = new aM.d, this.onDataLoadedObservable = new aM.d, this.onNewCameraAddedObservable = new aM.d, this.onCameraRemovedObservable = new aM.d, this.onNewLightAddedObservable = new aM.d, this.onLightRemovedObservable = new aM.d, this.onNewGeometryAddedObservable = new aM.d, this.onGeometryRemovedObservable = new aM.d, this.onNewTransformNodeAddedObservable = new aM.d, this.onTransformNodeRemovedObservable = new aM.d, this.onNewMeshAddedObservable = new aM.d, this.onMeshRemovedObservable = new aM.d, this.onNewSkeletonAddedObservable = new aM.d, this.onSkeletonRemovedObservable = new aM.d, this.onNewParticleSystemAddedObservable = new aM.d, this.onParticleSystemRemovedObservable = new aM.d, this.onNewAnimationGroupAddedObservable = new aM.d, this.onAnimationGroupRemovedObservable = new aM.d, this.onNewMaterialAddedObservable = new aM.d, this.onNewMultiMaterialAddedObservable = new aM.d, this.onMaterialRemovedObservable = new aM.d, this.onMultiMaterialRemovedObservable = new aM.d, this.onNewTextureAddedObservable = new aM.d, this.onTextureRemovedObservable = new aM.d, this.onNewFrameGraphAddedObservable = new aM.d, this.onFrameGraphRemovedObservable = new aM.d, this.onNewObjectRendererAddedObservable = new aM.d, this.onObjectRendererRemovedObservable = new aM.d, this.onNewPostProcessAddedObservable = new aM.d, this.onPostProcessRemovedObservable = new aM.d, this.onNewEffectLayerAddedObservable = new aM.d, this.onEffectLayerRemovedObservable = new aM.d, this.onBeforeRenderTargetsRenderObservable = new aM.d, this.onAfterRenderTargetsRenderObservable = new aM.d, this.onBeforeStepObservable = new aM.d, this.onAfterStepObservable = new aM.d, this.onActiveCameraChanged = new aM.d, this.onActiveCamerasChanged = new aM.d, this.onBeforeRenderingGroupObservable = new aM.d, this.onAfterRenderingGroupObservable = new aM.d, this.onMeshImportedObservable = new aM.d, this.onAnimationFileImportedObservable = new aM.d, this.onEnvironmentTextureChangedObservable = new aM.d, this.onMeshUnderPointerUpdatedObservable = new aM.d, this._registeredForLateAnimationBindings = new PM.d(256), this._pointerPickingConfiguration = new VM, this.onPrePointerObservable = new aM.d, this.onPointerObservable = new aM.d, this.onPreKeyboardObservable = new aM.d, this.onKeyboardObservable = new aM.d, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = ji.FOGMODE_NONE, this.fogColor = new BM.d(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.FN = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new zM.q(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new PM.d(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new FM.e, this._activeIndices = new FM.e, this._activeParticles = new FM.e, this._activeBones = new FM.e, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new PM.e(256), this._processedMaterials = new PM.e(256), this._renderTargets = new PM.d(256), this._materialsRenderTargets = new PM.d(256), this._activeParticleSystems = new PM.e(256), this._activeSkeletons = new PM.d(32), this._softwareSkinnedMeshes = new PM.d(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = zM.d.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = lM.f.Create(), this._beforeClearStage = lM.f.Create(), this._beforeRenderTargetClearStage = lM.f.Create(), this._gatherRenderTargetsStage = lM.f.Create(), this._gatherActiveCameraRenderTargetsStage = lM.f.Create(), this._isReadyForMeshStage = lM.f.Create(), this._beforeEvaluateActiveMeshStage = lM.f.Create(), this._evaluateSubMeshStage = lM.f.Create(), this._preActiveMeshStage = lM.f.Create(), this._cameraDrawRenderTargetStage = lM.f.Create(), this._beforeCameraDrawStage = lM.f.Create(), this._beforeRenderTargetDrawStage = lM.f.Create(), this._beforeRenderingGroupDrawStage = lM.f.Create(), this._beforeRenderingMeshStage = lM.f.Create(), this._afterRenderingMeshStage = lM.f.Create(), this._afterRenderingGroupDrawStage = lM.f.Create(), this._afterCameraDrawStage = lM.f.Create(), this._afterCameraPostProcessStage = lM.f.Create(), this._afterRenderTargetDrawStage = lM.f.Create(), this._afterRenderTargetPostProcessStage = lM.f.Create(), this._afterRenderStage = lM.f.Create(), this._pointerMoveStage = lM.f.Create(), this._pointerDownStage = lM.f.Create(), this._pointerUpStage = lM.f.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new aM.d, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const iM = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...rM
        };
        this.defaultCameraLayerMask = iM.defaultCameraLayerMask, this.defaultRenderableLayerMask = iM.defaultRenderableLayerMask, MM = this._engine = MM || UM.c.LastCreatedEngine, iM.virtual ? MM._virtualScenes.push(this) : (UM.c._LastCreatedScene = this, MM.scenes.push(this)), (MM.getCreationOptions().useLargeWorldRendering || rM?.useFloatingOrigin) && ((0, dM.e)(), this._floatingOriginScene = this, dM.d.Hk = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new yM.b(this), JM.b && (this.postProcessManager = new JM.b(this)), (0, EM.l)() && this.attachControl(), this._createUbo(), LM.b && (this._imageProcessingConfiguration = new LM.b), this.setDefaultCandidateProviders(), iM.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = iM.useMaterialMeshMap, this.useClonedMeshMap = iM.useClonedMeshMap, rM && rM.virtual || MM.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(MM) {
        return this._defaultSubMeshCandidates.data = MM.iG, this._defaultSubMeshCandidates.length = MM.iG.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = MM => this._getDefaultSubMeshCandidates(MM), this.getIntersectingSubMeshCandidates = (MM, rM) => this._getDefaultSubMeshCandidates(MM), this.getCollidingSubMeshCandidates = (MM, rM) => this._getDefaultSubMeshCandidates(MM)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(MM) {
        this._inputManager.pointerX = MM
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(MM) {
        this._inputManager.pointerY = MM
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
      isCachedMaterialInvalid(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== rM || this._cachedMaterial !== MM || this._cachedVisibility !== iM
      }
      ph() {
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
      simulatePointerMove(MM, rM) {
        return this._inputManager.simulatePointerMove(MM, rM), this
      }
      simulatePointerDown(MM, rM) {
        return this._inputManager.simulatePointerDown(MM, rM), this
      }
      simulatePointerUp(MM, rM, iM) {
        return this._inputManager.simulatePointerUp(MM, rM, iM), this
      }
      isPointerCaptured() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(MM)
      }
      attachControl() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(MM, rM, iM)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let MM, rM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const iM = this.ph(),
          OM = iM.currentRenderPassId;
        iM.currentRenderPassId = this.activeCamera?.renderPassId ?? OM;
        let SM = !0;
        for (this._pendingData.length > 0 && (SM = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && SM && (SM = this.depthPeelingRenderer.isReady()), rM && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), MM = 0; MM < this.meshes.length; MM++) {
          const OM = this.meshes[MM];
          if (!OM.iG || 0 === OM.iG.length) continue;
          if (!OM.isReady(!0)) {
            SM = !1;
            continue
          }
          const jM = OM.hasThinInstances || "InstancedMesh" === OM.getClassName() || "InstancedLinesMesh" === OM.getClassName() || iM.getCaps().instancedArrays && OM.instances.length > 0;
          for (let MM = 0, rM = this._isReadyForMeshStage; MM < rM.length; MM++) {
            rM[MM].action(OM, jM) || (SM = !1)
          }
          if (!rM) continue;
          const aM = OM.material || this.defaultMaterial;
          if (aM)
            if (aM._storeEffectOnSubMeshes)
              for (const MM of OM.iG) {
                const rM = MM.Zh();
                rM && rM.hasRenderTargetTextures && null != rM.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(rM) && (this._processedMaterials.push(rM), this._materialsRenderTargets.concatWithNoDuplicate(rM.getRenderTargetTextures()))
              } else aM.hasRenderTargetTextures && null != aM.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(aM) && (this._processedMaterials.push(aM), this._materialsRenderTargets.concatWithNoDuplicate(aM.getRenderTargetTextures()))
        }
        if (rM) {
          for (MM = 0; MM < this._materialsRenderTargets.length; ++MM) {
            this._materialsRenderTargets.data[MM].isReadyForRendering() || (SM = !1)
          }
          for (MM = 0; MM < this.customRenderTargets.length; ++MM) {
            this.customRenderTargets[MM].isReadyForRendering() || (SM = !1)
          }
        }
        for (MM = 0; MM < this.geometries.length; MM++) {
          2 === this.geometries[MM].delayLoadState && (SM = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const jM of this.activeCameras) jM.isReady(!0) || (SM = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (SM = !1));
        for (const jM of this.aG) jM.isReady() || (SM = !1);
        if (this.proceduralTexturesEnabled)
          for (const jM of this.proceduralTextures) jM.isReady() || (SM = !1);
        if (this.layers)
          for (const jM of this.layers) jM.isReady() || (SM = !1);
        if (this.effectLayers)
          for (const jM of this.effectLayers) jM.isLayerReady() || (SM = !1);
        for (const jM of this._isReadyChecks) jM.isReady() || (SM = !1);
        return iM.areAllEffectsReady() || (SM = !1), iM.currentRenderPassId = OM, SM
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(MM) {
        this.onBeforeRenderObservable.add(MM)
      }
      unregisterBeforeRender(MM) {
        this.onBeforeRenderObservable.removeCallback(MM)
      }
      registerAfterRender(MM) {
        this.onAfterRenderObservable.add(MM)
      }
      unregisterAfterRender(MM) {
        this.onAfterRenderObservable.removeCallback(MM)
      }
      _executeOnceBeforeRender(MM) {
        const rM = () => {
          MM(), setTimeout((() => {
            this.unregisterBeforeRender(rM)
          }))
        };
        this.registerBeforeRender(rM)
      }
      executeOnceBeforeRender(MM, rM) {
        void 0 !== rM ? setTimeout((() => {
          this._executeOnceBeforeRender(MM)
        }), rM) : this._executeOnceBeforeRender(MM)
      }
      addPendingData(MM) {
        this._pendingData.push(MM)
      }
      removePendingData(MM) {
        const rM = this.isLoading,
          iM = this._pendingData.indexOf(MM); - 1 !== iM && this._pendingData.splice(iM, 1), rM && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(MM) {
        -1 === this._isReadyChecks.indexOf(MM) && this._isReadyChecks.push(MM)
      }
      removeIsReadyCheck(MM) {
        const rM = this._isReadyChecks.indexOf(MM); - 1 !== rM && this._isReadyChecks.splice(rM, 1)
      }
      executeWhenReady(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(MM), null === this._executeWhenReadyTimeoutId && this._checkIsReady(rM)
      }
      async whenReadyAsync() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((rM => {
          this.executeWhenReady((() => {
            rM()
          }), MM)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = jM.b.Now;
        else if (this.onReadyTimeoutDuration > 0 && jM.b.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(MM)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(MM)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = jM.b.Now
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
      setTransformMatrix(MM, rM, iM, OM) {
        this._multiviewSceneUboIsActive = !!(iM && OM && this._multiviewSceneUbo), this._viewUpdateFlag === MM.updateFlag && this._projectionUpdateFlag === rM.updateFlag || (this._viewUpdateFlag = MM.updateFlag, this._projectionUpdateFlag = rM.updateFlag, this._viewMatrix = MM, this._projectionMatrix = rM, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new zM.d), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? XM.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = XM.d.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(iM, OM) : this._sceneUbo.useUbo && (this._sceneUbo.p_("viewProjection", this._transformMatrix), this._sceneUbo.p_("view", this._viewMatrix), this._sceneUbo.p_("projection", this._projectionMatrix), this._sceneUbo.p_("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(MM, rM) {
        const iM = "boolean" === typeof rM ? rM : rM?.trackUBOsInFrame,
          OM = new mM.b(this._engine, void 0, !1, MM ?? "YJ", void 0, iM);
        return OM.addUniform("viewProjection", 16), OM.addUniform("view", 16), OM.addUniform("projection", 16), OM.addUniform("vEyePosition", 4), OM.addUniform("inverseProjection", 16), OM
      }
      setSceneUniformBuffer(MM) {
        this._sceneUbo = MM, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : zM.q.ZeroReadOnly
      }
      getUniqueId() {
        return IM.UniqueId
      }
      JOM(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(MM), MM._resyncLightSources(), MM.parent || MM._addToSceneRootNodes(), SM.c.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(MM)
          })), rM)) {
          const rM = MM.getChildMeshes();
          for (const MM of rM) this.JOM(MM)
        }
      }
      Fk(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const iM = this.meshes.indexOf(MM);
        if (-1 !== iM && (this.meshes.splice(iM, 1), MM.parent || MM._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(MM), this.onMeshRemovedObservable.notifyObservers(MM), rM) {
          const rM = MM.getChildMeshes();
          for (const MM of rM) this.Fk(MM)
        }
        return iM
      }
      addTransformNode(MM) {
        this._blockEntityCollection || MM.Hk() === this && -1 !== MM._indexInSceneTransformNodesArray || (MM._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(MM), MM.parent || MM._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(MM))
      }
      removeTransformNode(MM) {
        const rM = MM._indexInSceneTransformNodesArray;
        if (-1 !== rM) {
          if (rM !== this.transformNodes.length - 1) {
            const MM = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[rM] = MM, MM._indexInSceneTransformNodesArray = rM
          }
          MM._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), MM.parent || MM._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(MM), rM
      }
      removeSkeleton(MM) {
        const rM = this.skeletons.indexOf(MM);
        return -1 !== rM && (this.skeletons.splice(rM, 1), this.onSkeletonRemovedObservable.notifyObservers(MM), this._executeActiveContainerCleanup(this._activeSkeletons)), rM
      }
      removeMorphTargetManager(MM) {
        const rM = this.morphTargetManagers.indexOf(MM);
        return -1 !== rM && this.morphTargetManagers.splice(rM, 1), rM
      }
      removeLight(MM) {
        const rM = this.lights.indexOf(MM);
        if (-1 !== rM) {
          for (const rM of this.meshes) rM._removeLightSource(MM, !1);
          this.lights.splice(rM, 1), this.sortLightsByPriority(), MM.parent || MM._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(MM)
        }
        return rM
      }
      removeCamera(MM) {
        const rM = this.cameras.indexOf(MM);
        if (-1 !== rM && (this.cameras.splice(rM, 1), MM.parent || MM._removeFromSceneRootNodes()), this.activeCameras) {
          const rM = this.activeCameras.indexOf(MM); - 1 !== rM && this.activeCameras.splice(rM, 1)
        }
        return this.activeCamera === MM && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(MM), rM
      }
      removeParticleSystem(MM) {
        const rM = this.aG.indexOf(MM);
        return -1 !== rM && (this.aG.splice(rM, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(MM), rM
      }
      removeAnimation(MM) {
        const rM = this.animations.indexOf(MM);
        return -1 !== rM && this.animations.splice(rM, 1), rM
      }
      stopAnimation(MM, rM, iM) {}
      removeAnimationGroup(MM) {
        const rM = this.animationGroups.indexOf(MM);
        return -1 !== rM && this.animationGroups.splice(rM, 1), this.onAnimationGroupRemovedObservable.notifyObservers(MM), rM
      }
      removeMultiMaterial(MM) {
        const rM = this.multiMaterials.indexOf(MM);
        return -1 !== rM && this.multiMaterials.splice(rM, 1), this.onMultiMaterialRemovedObservable.notifyObservers(MM), rM
      }
      removeMaterial(MM) {
        const rM = MM._indexInSceneMaterialArray;
        if (-1 !== rM && rM < this.materials.length) {
          if (rM !== this.materials.length - 1) {
            const MM = this.materials[this.materials.length - 1];
            this.materials[rM] = MM, MM._indexInSceneMaterialArray = rM
          }
          MM._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(MM), rM
      }
      removeActionManager(MM) {
        const rM = this.actionManagers.indexOf(MM);
        return -1 !== rM && this.actionManagers.splice(rM, 1), rM
      }
      removeTexture(MM) {
        const rM = this.textures.indexOf(MM);
        return -1 !== rM && this.textures.splice(rM, 1), this.onTextureRemovedObservable.notifyObservers(MM), rM
      }
      removeFrameGraph(MM) {
        const rM = this.frameGraphs.indexOf(MM);
        return -1 !== rM && this.frameGraphs.splice(rM, 1), this.onFrameGraphRemovedObservable.notifyObservers(MM), rM
      }
      removeObjectRenderer(MM) {
        const rM = this.objectRenderers.indexOf(MM);
        return -1 !== rM && this.objectRenderers.splice(rM, 1), this.onObjectRendererRemovedObservable.notifyObservers(MM), rM
      }
      removePostProcess(MM) {
        const rM = this.postProcesses.indexOf(MM);
        return -1 !== rM && this.postProcesses.splice(rM, 1), this.onPostProcessRemovedObservable.notifyObservers(MM), rM
      }
      removeEffectLayer(MM) {
        const rM = this.effectLayers.indexOf(MM);
        return -1 !== rM && this.effectLayers.splice(rM, 1), this.onEffectLayerRemovedObservable.notifyObservers(MM), rM
      }
      addLight(MM) {
        if (!this._blockEntityCollection) {
          this.lights.push(MM), this.sortLightsByPriority(), MM.parent || MM._addToSceneRootNodes();
          for (const rM of this.meshes) - 1 === rM.lightSources.indexOf(MM) && (rM.lightSources.push(MM), rM._resyncLightSources());
          SM.c.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(MM)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(qM.b.CompareLightsPriority)
      }
      addCamera(MM) {
        this._blockEntityCollection || (this.cameras.push(MM), SM.c.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(MM)
        })), MM.parent || MM._addToSceneRootNodes())
      }
      addSkeleton(MM) {
        this._blockEntityCollection || (this.skeletons.push(MM), SM.c.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(MM)
        })))
      }
      addParticleSystem(MM) {
        this._blockEntityCollection || (this.aG.push(MM), SM.c.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(MM)
        })))
      }
      addAnimation(MM) {
        this._blockEntityCollection || this.animations.push(MM)
      }
      addAnimationGroup(MM) {
        this._blockEntityCollection || (this.animationGroups.push(MM), SM.c.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(MM)
        })))
      }
      addMultiMaterial(MM) {
        this._blockEntityCollection || (this.multiMaterials.push(MM), SM.c.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(MM)
        })))
      }
      addMaterial(MM) {
        this._blockEntityCollection || MM.Hk() === this && -1 !== MM._indexInSceneMaterialArray || (MM._indexInSceneMaterialArray = this.materials.length, this.materials.push(MM), SM.c.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(MM)
        })))
      }
      addMorphTargetManager(MM) {
        this._blockEntityCollection || this.morphTargetManagers.push(MM)
      }
      addGeometry(MM) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[MM.uniqueId] = this.geometries.length), this.geometries.push(MM))
      }
      addActionManager(MM) {
        this.actionManagers.push(MM)
      }
      addTexture(MM) {
        this._blockEntityCollection || (this.textures.push(MM), this.onNewTextureAddedObservable.notifyObservers(MM))
      }
      addFrameGraph(MM) {
        this.frameGraphs.push(MM), SM.c.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(MM)
        }))
      }
      addObjectRenderer(MM) {
        this.objectRenderers.push(MM), SM.c.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(MM)
        }))
      }
      addPostProcess(MM) {
        this._blockEntityCollection || (this.postProcesses.push(MM), SM.c.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(MM)
        })))
      }
      addEffectLayer(MM) {
        this._blockEntityCollection || (this.effectLayers.push(MM), SM.c.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(MM)
        })))
      }
      switchActiveCamera(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = MM, rM && MM.attachControl())
      }
      setActiveCameraById(MM) {
        const rM = this.getCameraById(MM);
        return rM ? (this.activeCamera = rM, rM) : null
      }
      setActiveCameraByName(MM) {
        const rM = this.getCameraByName(MM);
        return rM ? (this.activeCamera = rM, rM) : null
      }
      getAnimationGroupByName(MM) {
        for (let rM = 0; rM < this.animationGroups.length; rM++)
          if (this.animationGroups[rM].name === MM) return this.animationGroups[rM];
        return null
      }
      _getMaterial(MM, rM) {
        for (let iM = 0; iM < this.materials.length; iM++) {
          const MM = this.materials[iM];
          if (rM(MM)) return MM
        }
        if (MM)
          for (let iM = 0; iM < this.multiMaterials.length; iM++) {
            const MM = this.multiMaterials[iM];
            if (rM(MM)) return MM
          }
        return null
      }
      getMaterialByUniqueID(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(MM, rM)
      }
      getMaterialByUniqueId(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(rM, (rM => rM.uniqueId === MM))
      }
      getMaterialById(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(rM, (rM => rM.id === MM))
      }
      getMaterialByName(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(rM, (rM => rM.name === MM))
      }
      getLastMaterialById(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let iM = this.materials.length - 1; iM >= 0; iM--)
          if (this.materials[iM].id === MM) return this.materials[iM];
        if (rM)
          for (let iM = this.multiMaterials.length - 1; iM >= 0; iM--)
            if (this.multiMaterials[iM].id === MM) return this.multiMaterials[iM];
        return null
      }
      getTextureByUniqueId(MM) {
        for (let rM = 0; rM < this.textures.length; rM++)
          if (this.textures[rM].uniqueId === MM) return this.textures[rM];
        return null
      }
      getTextureByName(MM) {
        for (let rM = 0; rM < this.textures.length; rM++)
          if (this.textures[rM].name === MM) return this.textures[rM];
        return null
      }
      getCameraById(MM) {
        for (let rM = 0; rM < this.cameras.length; rM++)
          if (this.cameras[rM].id === MM) return this.cameras[rM];
        return null
      }
      getCameraByUniqueId(MM) {
        for (let rM = 0; rM < this.cameras.length; rM++)
          if (this.cameras[rM].uniqueId === MM) return this.cameras[rM];
        return null
      }
      getCameraByName(MM) {
        for (let rM = 0; rM < this.cameras.length; rM++)
          if (this.cameras[rM].name === MM) return this.cameras[rM];
        return null
      }
      getBoneById(MM) {
        for (let rM = 0; rM < this.skeletons.length; rM++) {
          const iM = this.skeletons[rM];
          for (let rM = 0; rM < iM.bones.length; rM++)
            if (iM.bones[rM].id === MM) return iM.bones[rM]
        }
        return null
      }
      getBoneByName(MM) {
        for (let rM = 0; rM < this.skeletons.length; rM++) {
          const iM = this.skeletons[rM];
          for (let rM = 0; rM < iM.bones.length; rM++)
            if (iM.bones[rM].name === MM) return iM.bones[rM]
        }
        return null
      }
      getLightByName(MM) {
        for (let rM = 0; rM < this.lights.length; rM++)
          if (this.lights[rM].name === MM) return this.lights[rM];
        return null
      }
      getLightById(MM) {
        for (let rM = 0; rM < this.lights.length; rM++)
          if (this.lights[rM].id === MM) return this.lights[rM];
        return null
      }
      getLightByUniqueId(MM) {
        for (let rM = 0; rM < this.lights.length; rM++)
          if (this.lights[rM].uniqueId === MM) return this.lights[rM];
        return null
      }
      getParticleSystemById(MM) {
        for (let rM = 0; rM < this.aG.length; rM++)
          if (this.aG[rM].id === MM) return this.aG[rM];
        return null
      }
      getGeometryById(MM) {
        for (let rM = 0; rM < this.geometries.length; rM++)
          if (this.geometries[rM].id === MM) return this.geometries[rM];
        return null
      }
      _getGeometryByUniqueId(MM) {
        if (this._geometriesByUniqueId) {
          const rM = this._geometriesByUniqueId[MM];
          if (void 0 !== rM) return this.geometries[rM]
        } else
          for (let rM = 0; rM < this.geometries.length; rM++)
            if (this.geometries[rM].uniqueId === MM) return this.geometries[rM];
        return null
      }
      getFrameGraphByName(MM) {
        for (let rM = 0; rM < this.frameGraphs.length; rM++)
          if (this.frameGraphs[rM].name === MM) return this.frameGraphs[rM];
        return null
      }
      pushGeometry(MM, rM) {
        return !(!rM && this._getGeometryByUniqueId(MM.uniqueId)) && (this.addGeometry(MM), SM.c.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(MM)
        })), !0)
      }
      removeGeometry(MM) {
        let rM;
        if (this._geometriesByUniqueId) {
          if (rM = this._geometriesByUniqueId[MM.uniqueId], void 0 === rM) return !1
        } else if (rM = this.geometries.indexOf(MM), rM < 0) return !1;
        if (rM !== this.geometries.length - 1) {
          const MM = this.geometries[this.geometries.length - 1];
          MM && (this.geometries[rM] = MM, this._geometriesByUniqueId && (this._geometriesByUniqueId[MM.uniqueId] = rM))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[MM.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(MM), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(MM) {
        for (let rM = 0; rM < this.meshes.length; rM++)
          if (this.meshes[rM].id === MM) return this.meshes[rM];
        return null
      }
      getMeshesById(MM) {
        return this.meshes.filter((function(rM) {
          return rM.id === MM
        }))
      }
      getTransformNodeById(MM) {
        for (let rM = 0; rM < this.transformNodes.length; rM++)
          if (this.transformNodes[rM].id === MM) return this.transformNodes[rM];
        return null
      }
      getTransformNodeByUniqueId(MM) {
        for (let rM = 0; rM < this.transformNodes.length; rM++)
          if (this.transformNodes[rM].uniqueId === MM) return this.transformNodes[rM];
        return null
      }
      getTransformNodesById(MM) {
        return this.transformNodes.filter((function(rM) {
          return rM.id === MM
        }))
      }
      getMeshByUniqueId(MM) {
        for (let rM = 0; rM < this.meshes.length; rM++)
          if (this.meshes[rM].uniqueId === MM) return this.meshes[rM];
        return null
      }
      getLastMeshById(MM) {
        for (let rM = this.meshes.length - 1; rM >= 0; rM--)
          if (this.meshes[rM].id === MM) return this.meshes[rM];
        return null
      }
      getLastTransformNodeById(MM) {
        for (let rM = this.transformNodes.length - 1; rM >= 0; rM--)
          if (this.transformNodes[rM].id === MM) return this.transformNodes[rM];
        return null
      }
      getLastEntryById(MM) {
        let rM;
        for (rM = this.meshes.length - 1; rM >= 0; rM--)
          if (this.meshes[rM].id === MM) return this.meshes[rM];
        for (rM = this.transformNodes.length - 1; rM >= 0; rM--)
          if (this.transformNodes[rM].id === MM) return this.transformNodes[rM];
        for (rM = this.cameras.length - 1; rM >= 0; rM--)
          if (this.cameras[rM].id === MM) return this.cameras[rM];
        for (rM = this.lights.length - 1; rM >= 0; rM--)
          if (this.lights[rM].id === MM) return this.lights[rM];
        for (rM = this.skeletons.length - 1; rM >= 0; rM--) {
          const iM = this.skeletons[rM];
          for (let rM = iM.bones.length - 1; rM >= 0; rM--)
            if (iM.bones[rM].id === MM) return iM.bones[rM]
        }
        return null
      }
      getNodeById(MM) {
        const rM = this.getMeshById(MM);
        if (rM) return rM;
        const iM = this.getTransformNodeById(MM);
        if (iM) return iM;
        const OM = this.getLightById(MM);
        if (OM) return OM;
        const SM = this.getCameraById(MM);
        if (SM) return SM;
        const jM = this.getBoneById(MM);
        return jM || null
      }
      getNodeByName(MM) {
        const rM = this.getMeshByName(MM);
        if (rM) return rM;
        const iM = this.getTransformNodeByName(MM);
        if (iM) return iM;
        const OM = this.getLightByName(MM);
        if (OM) return OM;
        const SM = this.getCameraByName(MM);
        if (SM) return SM;
        const jM = this.getBoneByName(MM);
        return jM || null
      }
      getMeshByName(MM) {
        for (let rM = 0; rM < this.meshes.length; rM++)
          if (this.meshes[rM].name === MM) return this.meshes[rM];
        return null
      }
      getTransformNodeByName(MM) {
        for (let rM = 0; rM < this.transformNodes.length; rM++)
          if (this.transformNodes[rM].name === MM) return this.transformNodes[rM];
        return null
      }
      getLastSkeletonById(MM) {
        for (let rM = this.skeletons.length - 1; rM >= 0; rM--)
          if (this.skeletons[rM].id === MM) return this.skeletons[rM];
        return null
      }
      getSkeletonByUniqueId(MM) {
        for (let rM = 0; rM < this.skeletons.length; rM++)
          if (this.skeletons[rM].uniqueId === MM) return this.skeletons[rM];
        return null
      }
      getSkeletonById(MM) {
        for (let rM = 0; rM < this.skeletons.length; rM++)
          if (this.skeletons[rM].id === MM) return this.skeletons[rM];
        return null
      }
      getSkeletonByName(MM) {
        for (let rM = 0; rM < this.skeletons.length; rM++)
          if (this.skeletons[rM].name === MM) return this.skeletons[rM];
        return null
      }
      getMorphTargetManagerById(MM) {
        for (let rM = 0; rM < this.morphTargetManagers.length; rM++)
          if (this.morphTargetManagers[rM].uniqueId === MM) return this.morphTargetManagers[rM];
        return null
      }
      getMorphTargetById(MM) {
        for (let rM = 0; rM < this.morphTargetManagers.length; ++rM) {
          const iM = this.morphTargetManagers[rM];
          for (let rM = 0; rM < iM.numTargets; ++rM) {
            const OM = iM.getTarget(rM);
            if (OM.id === MM) return OM
          }
        }
        return null
      }
      getMorphTargetByName(MM) {
        for (let rM = 0; rM < this.morphTargetManagers.length; ++rM) {
          const iM = this.morphTargetManagers[rM];
          for (let rM = 0; rM < iM.numTargets; ++rM) {
            const OM = iM.getTarget(rM);
            if (OM.name === MM) return OM
          }
        }
        return null
      }
      getPostProcessByName(MM) {
        for (let rM = 0; rM < this.postProcesses.length; ++rM) {
          const iM = this.postProcesses[rM];
          if (iM.name === MM) return iM
        }
        return null
      }
      isActiveMesh(MM) {
        return -1 !== this._activeMeshes.indexOf(MM)
      }
      get uid() {
        return this._uid || (this._uid = OM.e.RandomId()), this._uid
      }
      addExternalData(MM, rM) {
        return this._externalData || (this._externalData = new nM), this._externalData.add(MM, rM)
      }
      getExternalData(MM) {
        return this._externalData ? this._externalData.get(MM) : null
      }
      getOrAddExternalDataWithFactory(MM, rM) {
        return this._externalData || (this._externalData = new nM), this._externalData.getOrAddWithFactory(MM, rM)
      }
      removeExternalData(MM) {
        return this._externalData.remove(MM)
      }
      _evaluateSubMesh(MM, rM, iM, OM) {
        if (OM || MM.isInFrustum(this._frustumPlanes)) {
          for (let OM = 0, SM = this._evaluateSubMeshStage; OM < SM.length; OM++) {
            SM[OM].action(rM, MM)
          }
          const iM = MM.Zh();
          null !== iM && void 0 !== iM && (iM.hasRenderTargetTextures && null != iM.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(iM) && (this._processedMaterials.push(iM), this._materialsRenderTargets.concatWithNoDuplicate(iM.getRenderTargetTextures())), this._renderingManager.dispatch(MM, rM, iM))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(MM) {
        this._preventFreeActiveMeshesAndRenderingGroups !== MM && (MM && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = MM)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let MM = 0; MM < this.activeCameras.length; MM++) {
            const rM = this.activeCameras[MM];
            rM && rM._activeMeshes && rM._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let MM = 0; MM < this.textures.length; MM++) {
            const rM = this.textures[MM];
            rM && rM.renderList && rM.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rM = arguments.length > 1 ? arguments[1] : void 0,
          iM = arguments.length > 2 ? arguments[2] : void 0,
          OM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          jM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const aM = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const MM of aM) MM.objectRenderer._freezeActiveMeshes(OM);
          return this._freezeActiveMeshesCancel = (0, SM.d)((() => {
            let MM = !0,
              rM = !0;
            for (const iM of aM) MM && (MM = iM.objectRenderer._isFrozen), rM && (rM = null !== iM.objectRenderer._freezeActiveMeshesCancel);
            if (MM) return !0;
            if (!rM) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = jM, this._skipEvaluateActiveMeshesCompletely = MM, rM?.()
          }), ((MM, rM) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), rM) {
              const rM = "Scene: Timeout while waiting for meshes to be frozen.";
              iM ? iM(rM) : (Mi.e.Error(rM), MM && Mi.e.Error(MM))
            } else {
              const rM = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              iM ? iM(rM) : (Mi.e.Error(rM), MM && (Mi.e.Error(MM), MM.stack && Mi.e.Error(MM.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = jM, this._skipEvaluateActiveMeshesCompletely = MM, OM)
              for (let MM = 0; MM < this._activeMeshes.length; MM++) this._activeMeshes.data[MM]._freeze();
            rM && rM()
          } else iM && iM("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let MM = 0; MM < this.meshes.length; MM++) {
          const rM = this.meshes[MM];
          rM._internalAbstractMeshDataInfo && (rM._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const MM = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const rM of MM) rM.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let MM = 0; MM < this._activeMeshes.length; MM++) this._activeMeshes.data[MM]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(MM) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => MM.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const MM = this._activeMeshes.length;
            for (let rM = 0; rM < MM; rM++) {
              this._activeMeshes.data[rM].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const MM = this._activeParticleSystems.length;
            for (let rM = 0; rM < MM; rM++) this._activeParticleSystems.data[rM].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let SM = 0, jM = this._beforeEvaluateActiveMeshStage; SM < jM.length; SM++) {
          jM[SM].action()
        }
        const MM = this.getActiveMeshCandidates(),
          rM = MM.length,
          iM = FM.e.Enabled,
          OM = this.customLODSelector;
        for (let SM = 0; SM < rM; SM++) {
          const rM = MM.data[SM],
            jM = !OM && !rM.Wk && !rM._internalMeshDataInfo?._LODLevels.length;
          let aM, PM;
          if ((jM || (aM = rM._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), aM ? aM[1] = -1 : (aM = [rM, -1], rM._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, aM))), !rM.isBlocked) && (iM && this._totalVertices.addCount(rM.getTotalVertices(), !1), rM.isReady() && rM.isEnabled() && !rM.UL.hasAZeroComponent)) {
            if (rM.computeWorldMatrix(), rM.actionManager && rM.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(rM), jM) PM = rM;
            else if (PM = OM ? OM(rM, this.activeCamera) : rM.getLOD(this.activeCamera), aM[0] = PM, aM[1] = this._frameId, void 0 === PM || null === PM) continue;
            if (PM !== rM && 0 !== PM.billboardMode && PM.computeWorldMatrix(), rM._preActivate(), rM.isVisible && rM.visibility > 0 && 0 !== (rM.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || rM.Wh || rM.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(rM), this.activeCamera._activeMeshes.push(rM), PM !== rM && PM._activate(this._renderId, !1);
              for (let MM = 0, iM = this._preActiveMeshStage; MM < iM.length; MM++) {
                iM[MM].action(rM)
              }
              rM._activate(this._renderId, !1) && (rM.Wk ? rM._internalAbstractMeshDataInfo._actAsRegularMesh && (PM = rM) : PM._internalAbstractMeshDataInfo._onlyForInstances = !1, PM._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(rM, PM)), rM._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let MM = 0; MM < this.aG.length; MM++) {
            const rM = this.aG[MM];
            if (!rM.isStarted() || !rM.emitter) continue;
            const iM = rM.emitter;
            iM.position && !iM.isEnabled() || (this._activeParticleSystems.push(rM), rM.animate(), this._renderingManager.dispatchParticles(rM))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(MM) {
        this._skeletonsEnabled && MM.skeleton && (this._activeSkeletons.pushNoDuplicate(MM.skeleton) && (MM.skeleton.prepare(), this._activeBones.addCount(MM.skeleton.bones.length, !1)), MM.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(MM) && this.frameGraph && MM.applySkeleton(MM.skeleton))
      }
      _activeMesh(MM, rM) {
        this._prepareSkeleton(rM);
        let iM = MM.nSM || MM.Wk || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || rM.Wh;
        if (rM && rM.iG && rM.iG.length > 0) {
          const OM = this.getActiveSubMeshCandidates(rM),
            SM = OM.length;
          iM = iM || 1 === SM;
          for (let jM = 0; jM < SM; jM++) {
            const SM = OM.data[jM];
            this._evaluateSubMesh(SM, rM, MM, iM)
          }
        }
      }
      updateTransformMatrix(MM) {
        const rM = this.activeCamera;
        if (rM)
          if (rM._renderingMultiview) {
            const iM = rM._rigCameras[0],
              OM = rM._rigCameras[1];
            this.setTransformMatrix(iM.getViewMatrix(), iM.getProjectionMatrix(MM), OM.getViewMatrix(), OM.getProjectionMatrix(MM))
          } else this.setTransformMatrix(rM.getViewMatrix(), rM.getProjectionMatrix(MM))
      }
      _bindFrameBuffer(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (MM && MM._multiviewTexture ? MM._multiviewTexture._bindFrameBuffer() : MM && MM.outputRenderTarget ? MM.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), rM && this._clearFrameBuffer(MM)
      }
      _clearFrameBuffer(MM) {
        if (MM && MM._multiviewTexture);
        else if (MM && MM.outputRenderTarget && !MM._renderingMultiview) {
          const rM = MM.outputRenderTarget;
          rM.onClearObservable.hasObservers() ? rM.onClearObservable.notifyObservers(this._engine) : rM.skipInitialClear || MM.isRightCamera || (this.autoClear && this._engine.clear(rM.clearColor || this._clearColor, !rM._cleared, !0, !0), rM._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(MM, rM) {
        let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (MM && MM._skipRendering) return;
        const SM = this._engine;
        if (this._activeCamera = MM, !this.activeCamera) throw new Error("Active camera not set");
        if (SM.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && iM) {
          let rM = !0;
          MM._renderingMultiview && MM.outputRenderTarget && (rM = MM.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, MM.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), MM._renderingMultiview && MM.outputRenderTarget && (MM.outputRenderTarget.skipInitialClear = rM)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = MM.outputRenderTarget?.renderPassId ?? MM.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let OM = 0; OM < this._softwareSkinnedMeshes.length; OM++) {
          const MM = this._softwareSkinnedMeshes.data[OM];
          MM.applySkeleton(MM.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), MM.customRenderTargets && MM.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(MM.customRenderTargets), rM && rM.customRenderTargets && rM.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(rM.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let OM = 0, PM = this._gatherActiveCameraRenderTargetsStage; OM < PM.length; OM++) {
          PM[OM].action(this._renderTargets)
        }
        let jM = !1;
        if (this.renderTargetsEnabled) {
          let MM;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            OM.e.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const rM = this.getBoundingBoxRenderer?.();
            for (let iM = 0; iM < this._renderTargets.length; iM++) {
              const OM = this._renderTargets.data[iM];
              if (OM._shouldRender()) {
                this._renderId++;
                const iM = OM.activeCamera && OM.activeCamera !== this.activeCamera;
                rM && !MM && (MM = rM.renderList.length > 0 ? rM.renderList.data.slice() : [], MM.length = rM.renderList.length), OM.render(iM, this.dumpNextRenderTargets), jM = !0
              }
            }
            rM && MM && (rM.renderList.data = MM, rM.renderList.length = MM.length), OM.e.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const rM = this.getBoundingBoxRenderer?.();
            rM && !MM && (MM = rM.renderList.length > 0 ? rM.renderList.data.slice() : [], MM.length = rM.renderList.length);
            for (let MM = 0, iM = this._cameraDrawRenderTargetStage; MM < iM.length; MM++) {
              jM = iM[MM].action(this.activeCamera) || jM
            }
            rM && MM && (rM.renderList.data = MM, rM.renderList.length = MM.length)
          }
          this._intermediateRendering = !1
        }
        jM && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || MM._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let OM = 0, PM = this._beforeCameraDrawStage; OM < PM.length; OM++) {
          PM[OM].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const aM = SM.snapshotRendering && 1 === SM.snapshotRenderingMode;
        aM && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !aM), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let OM = 0, PM = this._afterCameraDrawStage; OM < PM.length; OM++) {
          PM[OM].action(this.activeCamera)
        }
        if (this.postProcessManager && !MM._multiviewTexture) {
          const rM = MM.outputRenderTarget ? MM.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(MM.isIntermediate, rM)
        }
        for (let OM = 0, PM = this._afterCameraPostProcessStage; OM < PM.length; OM++) {
          PM[OM].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === MM.cameraRigMode || MM._renderingMultiview) return MM._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(MM, void 0, rM), void this.onAfterRenderCameraObservable.notifyObservers(MM);
        if (MM._useMultiviewToSingleView) this._renderMultiviewToSingleView(MM);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(MM);
          for (let rM = 0; rM < MM._rigCameras.length; rM++) this._renderForCamera(MM._rigCameras[rM], MM)
        }
        this._activeCamera = MM, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(MM)
      }
      _checkIntersections() {
        for (let MM = 0; MM < this._meshesForIntersections.length; MM++) {
          const rM = this._meshesForIntersections.data[MM];
          if (rM.actionManager)
            for (let MM = 0; rM.actionManager && MM < rM.actionManager.actions.length; MM++) {
              const iM = rM.actionManager.actions[MM];
              if (12 === iM.trigger || 13 === iM.trigger) {
                const MM = iM.getTriggerParameter(),
                  OM = MM.mesh ? MM.mesh : MM,
                  SM = OM.iSM(rM, MM.usePreciseIntersection),
                  jM = rM._intersectionsInProgress.indexOf(OM);
                SM && -1 === jM ? 12 === iM.trigger ? (iM._executeCurrent(hM.CreateNew(rM, void 0, OM)), rM._intersectionsInProgress.push(OM)) : 13 === iM.trigger && rM._intersectionsInProgress.push(OM) : !SM && jM > -1 && (13 === iM.trigger && iM._executeCurrent(hM.CreateNew(rM, void 0, OM)), rM.actionManager.hasSpecificTrigger(13, (MM => {
                  const rM = MM.mesh ? MM.mesh : MM;
                  return OM === rM
                })) && 13 !== iM.trigger || rM._intersectionsInProgress.splice(jM, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(MM) {}
      _animate(MM) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let MM = Math.max(ji.MinDeltaTime, Math.min(this._engine.getDeltaTime(), ji.MaxDeltaTime)) + this._timeAccumulator;
          const rM = this._engine.getTimeStep(),
            iM = 1e3 / rM / 1e3;
          let OM = 0;
          const SM = this._engine.getLockstepMaxSteps();
          let jM = Math.floor(MM / rM);
          for (jM = Math.min(jM, SM); MM > 0 && OM < jM;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = rM * iM, this._animate(rM), this.onAfterAnimationsObservable.notifyObservers(this), this.FN && this._advancePhysicsEngineStep(rM), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, OM++, MM -= rM;
          this._timeAccumulator = MM < 0 ? 0 : MM
        } else {
          const MM = this.useConstantAnimationDeltaTime ? 16 : Math.max(ji.MinDeltaTime, Math.min(this._engine.getDeltaTime(), ji.MaxDeltaTime));
          this._animationRatio = .06 * MM, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.FN && this._advancePhysicsEngineStep(MM)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(MM) {
        if (MM?.outputRenderTarget && !MM?.isRigCamera && (MM.outputRenderTarget._cleared = !1), MM?.rigCameras?.length)
          for (let rM = 0; rM < MM.rigCameras.length; ++rM) {
            const iM = MM.rigCameras[rM].outputRenderTarget;
            iM && (iM._cleared = !1)
          }
      }
      resetDrawCache(MM) {
        if (this.meshes)
          for (const rM of this.meshes) rM.resetDrawCache(MM)
      }
      _renderWithFrameGraph() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          rM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, MM)
          for (const iM of this.cameras)
            if (iM.update(), 0 !== iM.cameraRigMode)
              for (let MM = 0; MM < iM._rigCameras.length; MM++) iM._rigCameras[MM].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(rM)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(MM) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const rM = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), OM.e.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let MM = 0; MM < this._renderTargets.length; MM++) {
            const iM = this._renderTargets.data[MM],
              OM = iM.activeCamera || rM;
            this._renderRenderTarget(iM, OM, !0, this.dumpNextRenderTargets)
          }
          OM.e.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let iM = 0, OM = this._beforeClearStage; iM < OM.length; iM++) {
          OM[iM].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const rM = this.getActiveMeshCandidates(),
            iM = rM.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let MM = 0; MM < iM; MM++) {
                const iM = rM.data[MM];
                iM._internalAbstractMeshDataInfo._wasActiveLastFrame && iM.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const MM = this._activeParticleSystems.length;
              for (let rM = 0; rM < MM; rM++) this._activeParticleSystems.data[rM].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let OM = 0; OM < iM; OM++) {
              const iM = rM.data[OM];
              iM._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, iM.isBlocked || (this._totalVertices.addCount(iM.getTotalVertices(), !1), iM.isReady() && iM.isEnabled() && !iM.UL.hasAZeroComponent && (iM.computeWorldMatrix(MM), iM.actionManager && iM.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(iM)))
            }
            if (this.particlesEnabled)
              for (let MM = 0; MM < this.aG.length; MM++) {
                const rM = this.aG[MM];
                if (!rM.isStarted() || !rM.emitter) continue;
                const iM = rM.emitter;
                iM.position && !iM.isEnabled() || (this._activeParticleSystems.push(rM), rM.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, MM._shouldRender()) {
          if (this._renderId++, this.activeCamera = rM, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), MM.render(iM, OM)
        }
        this._intermediateRendering = !1
      }
      render() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.xG) return;
        const iM = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(MM, rM)
        } finally {
          this._renderingMeshEvaluationDepth = iM
        }
      }
      _renderFrame(MM, rM) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), dM.d.Hk = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const iM of this.activeCameras) this._checkCameraRenderTarget(iM);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), rM || this.animate();
        for (let iM = 0, OM = this._beforeCameraUpdateStage; iM < OM.length; iM++) {
          OM[iM].action()
        }
        if (MM)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let iM = 0; iM < this.activeCameras.length; iM++) {
              const MM = this.activeCameras[iM];
              if (MM.update(), 0 !== MM.cameraRigMode)
                for (let rM = 0; rM < MM._rigCameras.length; rM++) MM._rigCameras[rM].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let iM = 0; iM < this.activeCamera._rigCameras.length; iM++) this.activeCamera._rigCameras[iM].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(MM, rM);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const MM = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            OM.e.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let rM = 0; rM < this.customRenderTargets.length; rM++) {
              const iM = this.customRenderTargets[rM],
                OM = iM.activeCamera || this.activeCamera;
              this._renderRenderTarget(iM, OM, MM !== OM, this.dumpNextRenderTargets)
            }
            OM.e.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = MM?.renderPassId ?? 0, this.activeCamera = MM, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let rM = 0, iM = this._beforeClearStage; rM < iM.length; rM++) {
            iM[rM].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let rM = 0, iM = this._gatherRenderTargetsStage; rM < iM.length; rM++) {
            iM[rM].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let rM = 0; rM < this.activeCameras.length; rM++) this._processSubCameras(this.activeCameras[rM], rM > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let iM = 0, OM = this._afterRenderStage; iM < OM.length; iM++) {
          OM[iM].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let MM = 0; MM < this._toBeDisposed.length; MM++) {
            const rM = this._toBeDisposed[MM];
            rM && rM.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let MM = 0; MM < this.materials.length; MM++) this.materials[MM].freeze()
      }
      unfreezeMaterials() {
        for (let MM = 0; MM < this.materials.length; MM++) this.materials[MM].unfreeze()
      }
      dispose() {
        if (this.xG) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, GM.c)(this.stopAllAnimations)) {
          for (const MM of this._activeAnimatables) MM.onAnimationEndObservable.clear(), MM.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const MM = this._activeRequests.slice();
        for (const jM of MM) jM.abort();
        this._activeRequests.length = 0;
        try {
          this.Rk.notifyObservers(this)
        } catch (SM) {
          Mi.e.Error("An error occurred while calling onDisposeObservable!", SM)
        }
        this.detachControl();
        const rM = this._engine.getInputElement?.();
        if (rM)
          for (let jM = 0; jM < this.cameras.length; jM++) this.cameras[jM].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (MM => MM.dispose(!0))), this._disposeList(this.transformNodes, (MM => MM.dispose(!0)));
        const iM = this.cameras;
        this._disposeList(iM), this._disposeList(this.aG), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let OM = this._engine.scenes.indexOf(this);
        if (OM > -1 && this._engine.scenes.splice(OM, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, dM.f)(), UM.c._LastCreatedScene === this) {
          UM.c._LastCreatedScene = null;
          let MM = UM.c.Instances.length - 1;
          for (; MM >= 0;) {
            const rM = UM.c.Instances[MM];
            if (rM.scenes.length > 0) {
              UM.c._LastCreatedScene = rM.scenes[this._engine.scenes.length - 1];
              break
            }
            MM--
          }
        }
        OM = this._engine._virtualScenes.indexOf(this), OM > -1 && this._engine._virtualScenes.splice(OM, 1), this._engine.wipeCaches(!0), this.Rk.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(MM, rM) {
        const iM = MM.slice(0);
        rM = rM ?? (MM => MM.dispose());
        for (const OM of iM) rM(OM);
        MM.length = 0
      }
      get xG() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let MM = 0; MM < this.meshes.length; MM++) {
          const rM = this.meshes[MM].geometry;
          rM && rM.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const MM of this.textures) {
          MM._buffer && (MM._buffer = null)
        }
      }
      getWorldExtends(MM) {
        const rM = new zM.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          iM = new zM.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        MM = MM || (() => !0);
        const OM = this.meshes.filter(MM);
        for (const SM of OM) {
          if (SM.computeWorldMatrix(!0), !SM.iG || 0 === SM.iG.length || SM.infiniteDistance) continue;
          const MM = SM.aY(),
            OM = MM.boundingBox.minimumWorld,
            jM = MM.boundingBox.maximumWorld;
          zM.q.CheckExtends(OM, rM, iM), zM.q.CheckExtends(jM, rM, iM)
        }
        return rM.x === Number.MAX_VALUE ? {
          min: zM.q.Zero(),
          max: zM.q.Zero()
        } : {
          min: rM,
          max: iM
        }
      }
      createPickingRay(MM, rM, iM, OM) {
        throw (0, GM.n)("Ray")
      }
      createPickingRayToRef(MM, rM, iM, OM, SM) {
        throw (0, GM.n)("Ray")
      }
      createPickingRayInCameraSpace(MM, rM, iM) {
        throw (0, GM.n)("Ray")
      }
      createPickingRayInCameraSpaceToRef(MM, rM, iM, OM) {
        throw (0, GM.n)("Ray")
      }
      LH(MM, rM, iM, OM, SM, jM) {
        const aM = (0, GM.n)("Ray", !0);
        return aM && Mi.e.Warn(aM), new HM.c
      }
      pickWithBoundingInfo(MM, rM, iM, OM, SM) {
        const jM = (0, GM.n)("Ray", !0);
        return jM && Mi.e.Warn(jM), new HM.c
      }
      pickWithRay(MM, rM, iM, OM) {
        throw (0, GM.n)("Ray")
      }
      multiPick(MM, rM, iM, OM, SM) {
        throw (0, GM.n)("Ray")
      }
      multiPickWithRay(MM, rM, iM) {
        throw (0, GM.n)("Ray")
      }
      setPointerOverMesh(MM, rM, iM) {
        this._inputManager.setPointerOverMesh(MM, rM, iM)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const MM of this.geometries) MM._rebuild();
        for (const MM of this.meshes) MM._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const MM of this._components) MM.rebuild();
        for (const MM of this.aG) MM.rebuild();
        if (this.spriteManagers)
          for (const MM of this.spriteManagers) MM.rebuild()
      }
      _rebuildTextures() {
        for (const MM of this.textures) MM._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(MM, rM, iM) {
        if (void 0 === rM) return MM;
        const OM = [];
        for (const SM in MM) {
          const jM = MM[SM];
          QM.d && QM.d.MatchesQuery(jM, rM) && (!iM || iM(jM)) && OM.push(jM)
        }
        return OM
      }
      getMeshesByTags(MM, rM) {
        return this._getByTags(this.meshes, MM, rM)
      }
      getCamerasByTags(MM, rM) {
        return this._getByTags(this.cameras, MM, rM)
      }
      getLightsByTags(MM, rM) {
        return this._getByTags(this.lights, MM, rM)
      }
      getMaterialByTags(MM, rM) {
        return this._getByTags(this.materials, MM, rM).concat(this._getByTags(this.multiMaterials, MM, rM))
      }
      getTransformNodesByTags(MM, rM) {
        return this._getByTags(this.transformNodes, MM, rM)
      }
      setRenderingOrder(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(MM, rM, iM, OM)
      }
      setRenderingAutoClearDepthStencil(MM, rM) {
        let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          OM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(MM, rM, iM, OM)
      }
      getAutoClearDepthStencilSetup(MM) {
        return this._renderingManager.getAutoClearDepthStencilSetup(MM)
      }
      _forceBlockMaterialDirtyMechanism(MM) {
        this._blockMaterialDirtyMechanism = MM
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(MM) {
        this._blockMaterialDirtyMechanism !== MM && (this._blockMaterialDirtyMechanism = MM, MM || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(MM, rM) {
        if (!this._blockMaterialDirtyMechanism)
          for (const iM of this.materials) rM && !rM(iM) || iM.FrM(MM)
      }
      _loadFile(MM, rM, iM, OM, SM, jM, aM) {
        const PM = (0, KM.n)(MM, rM, iM, OM ? this.offlineProvider : void 0, SM, jM, aM);
        return this._activeRequests.push(PM), PM.onCompleteObservable.add((MM => {
          this._activeRequests.splice(this._activeRequests.indexOf(MM), 1)
        })), PM
      }
      async _loadFileAsync(MM, rM, iM, OM, SM) {
        return await new Promise(((jM, aM) => {
          this._loadFile(MM, (MM => {
            jM(MM)
          }), rM, iM, OM, ((MM, rM) => {
            aM(rM)
          }), SM)
        }))
      }
      async _loadDelayedFileAsync(MM, rM, iM) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const OM = `${MM}|${rM?"binary":"string"}`;
        let SM = this._delayedFileRequests.get(OM);
        if (!SM) {
          SM = rM ? this._loadFileAsync(MM, void 0, iM, !0) : this._loadFileAsync(MM, void 0, iM, !1);
          const jM = SM;
          (async () => {
            try {
              await jM
            } catch {}
            this._delayedFileRequests?.delete(OM)
          })(), this._delayedFileRequests.set(OM, SM)
        }
        return await SM
      }
      _requestFile(MM, rM, iM, OM, SM, jM, aM) {
        const PM = (0, KM.w)(MM, rM, iM, OM ? this.offlineProvider : void 0, SM, jM, aM);
        return this._activeRequests.push(PM), PM.onCompleteObservable.add((MM => {
          this._activeRequests.splice(this._activeRequests.indexOf(MM), 1)
        })), PM
      }
      async _requestFileAsync(MM, rM, iM, OM, SM) {
        return await new Promise(((jM, aM) => {
          this._requestFile(MM, (MM => {
            jM(MM)
          }), rM, iM, OM, (MM => {
            aM(MM)
          }), SM)
        }))
      }
      _readFile(MM, rM, iM, OM, SM) {
        const jM = (0, KM.s)(MM, rM, iM, OM, SM);
        return this._activeRequests.push(jM), jM.onCompleteObservable.add((MM => {
          this._activeRequests.splice(this._activeRequests.indexOf(MM), 1)
        })), jM
      }
      async _readFileAsync(MM, rM, iM) {
        return await new Promise(((OM, SM) => {
          this._readFile(MM, (MM => {
            OM(MM)
          }), rM, iM, (MM => {
            SM(MM)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, GM.n)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(MM) {
        return this.setActiveCameraById(MM)
      }
      getMaterialByID(MM) {
        return this.getMaterialById(MM)
      }
      getLastMaterialByID(MM) {
        return this.getLastMaterialById(MM)
      }
      getTextureByUniqueID(MM) {
        return this.getTextureByUniqueId(MM)
      }
      getCameraByID(MM) {
        return this.getCameraById(MM)
      }
      getCameraByUniqueID(MM) {
        return this.getCameraByUniqueId(MM)
      }
      getBoneByID(MM) {
        return this.getBoneById(MM)
      }
      getLightByID(MM) {
        return this.getLightById(MM)
      }
      getLightByUniqueID(MM) {
        return this.getLightByUniqueId(MM)
      }
      getParticleSystemByID(MM) {
        return this.getParticleSystemById(MM)
      }
      getGeometryByID(MM) {
        return this.getGeometryById(MM)
      }
      getMeshByID(MM) {
        return this.getMeshById(MM)
      }
      getMeshByUniqueID(MM) {
        return this.getMeshByUniqueId(MM)
      }
      getLastMeshByID(MM) {
        return this.getLastMeshById(MM)
      }
      getMeshesByID(MM) {
        return this.getMeshesById(MM)
      }
      getTransformNodeByID(MM) {
        return this.getTransformNodeById(MM)
      }
      getTransformNodeByUniqueID(MM) {
        return this.getTransformNodeByUniqueId(MM)
      }
      getTransformNodesByID(MM) {
        return this.getTransformNodesById(MM)
      }
      getNodeByID(MM) {
        return this.getNodeById(MM)
      }
      getLastEntryByID(MM) {
        return this.getLastEntryById(MM)
      }
      getLastSkeletonByID(MM) {
        return this.getLastSkeletonById(MM)
      }
    }
    ji.FOGMODE_NONE = 0, ji.FOGMODE_EXP = 1, ji.FOGMODE_EXP2 = 2, ji.FOGMODE_LINEAR = 3, ji.MinDeltaTime = 1, ji.MaxDeltaTime = 1e3, ji._OriginalDefaultMaterialFactory = ji.DefaultMaterialFactory;
    let ai = !1;

    function Pi() {
      ai || (ai = !0, (0, ri.e)("BABYLON.Scene", ji))
    }(cM = ji.prototype).sortActiveAnimatables ?? (cM.sortActiveAnimatables = (0, GM.j)("Scene", "sortActiveAnimatables")), (Mr = ji.prototype).beginWeightedAnimation ?? (Mr.beginWeightedAnimation = (0, GM.j)("Scene", "beginWeightedAnimation")), (rr = ji.prototype).beginAnimation ?? (rr.beginAnimation = (0, GM.j)("Scene", "beginAnimation")), (ir = ji.prototype).beginHierarchyAnimation ?? (ir.beginHierarchyAnimation = (0, GM.j)("Scene", "beginHierarchyAnimation")), (Or = ji.prototype).beginDirectAnimation ?? (Or.beginDirectAnimation = (0, GM.j)("Scene", "beginDirectAnimation")), (Sr = ji.prototype).beginDirectHierarchyAnimation ?? (Sr.beginDirectHierarchyAnimation = (0, GM.j)("Scene", "beginDirectHierarchyAnimation")), (jr = ji.prototype).getAnimatableByTarget ?? (jr.getAnimatableByTarget = (0, GM.j)("Scene", "getAnimatableByTarget")), (ar = ji.prototype).getAllAnimatablesByTarget ?? (ar.getAllAnimatablesByTarget = (0, GM.j)("Scene", "getAllAnimatablesByTarget")), (Pr = ji.prototype).stopAllAnimations ?? (Pr.stopAllAnimations = (0, GM.j)("Scene", "stopAllAnimations")), (nr = ji.prototype).getSoundByName ?? (nr.getSoundByName = (0, GM.j)("Scene", "getSoundByName")), (Qr = ji.prototype).createOrUpdateSelectionOctree ?? (Qr.createOrUpdateSelectionOctree = (0, GM.j)("Scene", "createOrUpdateSelectionOctree")), (zr = ji.prototype).createDefaultLight ?? (zr.createDefaultLight = (0, GM.j)("Scene", "createDefaultLight")), (Lr = ji.prototype).createDefaultCamera ?? (Lr.createDefaultCamera = (0, GM.j)("Scene", "createDefaultCamera")), (mr = ji.prototype).createDefaultCameraOrLight ?? (mr.createDefaultCameraOrLight = (0, GM.j)("Scene", "createDefaultCameraOrLight")), (Hr = ji.prototype).createDefaultSkybox ?? (Hr.createDefaultSkybox = (0, GM.j)("Scene", "createDefaultSkybox")), (hr = ji.prototype).createDefaultEnvironment ?? (hr.createDefaultEnvironment = (0, GM.j)("Scene", "createDefaultEnvironment")), (Jr = ji.prototype).createDefaultVRExperience ?? (Jr.createDefaultVRExperience = (0, GM.j)("Scene", "createDefaultVRExperience")), (dr = ji.prototype).createDefaultXRExperienceAsync ?? (dr.createDefaultXRExperienceAsync = (0, GM.j)("Scene", "createDefaultXRExperienceAsync")), (yr = ji.prototype).getGlowLayerByName ?? (yr.getGlowLayerByName = (0, GM.j)("Scene", "getGlowLayerByName")), (lr = ji.prototype).getHighlightLayerByName ?? (lr.getHighlightLayerByName = (0, GM.j)("Scene", "getHighlightLayerByName")), (Er = ji.prototype).getSelectionOutlineLayerByName ?? (Er.getSelectionOutlineLayerByName = (0, GM.j)("Scene", "getSelectionOutlineLayerByName")), (Ur = ji.prototype).removeLensFlareSystem ?? (Ur.removeLensFlareSystem = (0, GM.j)("Scene", "removeLensFlareSystem")), (Gr = ji.prototype).addLensFlareSystem ?? (Gr.addLensFlareSystem = (0, GM.j)("Scene", "addLensFlareSystem")), (Cr = ji.prototype).getLensFlareSystemByName ?? (Cr.getLensFlareSystemByName = (0, GM.j)("Scene", "getLensFlareSystemByName")), (er = ji.prototype).getLensFlareSystemByID ?? (er.getLensFlareSystemByID = (0, GM.j)("Scene", "getLensFlareSystemByID")), (br = ji.prototype).getLensFlareSystemById ?? (br.getLensFlareSystemById = (0, GM.j)("Scene", "getLensFlareSystemById")), (wr = ji.prototype).getPhysicsEngine ?? (wr.getPhysicsEngine = (0, GM.j)("Scene", "getPhysicsEngine")), (tr = ji.prototype).enablePhysics ?? (tr.enablePhysics = (0, GM.j)("Scene", "enablePhysics")), (gr = ji.prototype).disablePhysicsEngine ?? (gr.disablePhysicsEngine = (0, GM.j)("Scene", "disablePhysicsEngine")), (ur = ji.prototype).isPhysicsEnabled ?? (ur.isPhysicsEnabled = (0, GM.j)("Scene", "isPhysicsEnabled")), (Rr = ji.prototype).deleteCompoundImpostor ?? (Rr.deleteCompoundImpostor = (0, GM.j)("Scene", "deleteCompoundImpostor")), (pr = ji.prototype).removeReflectionProbe ?? (pr.removeReflectionProbe = (0, GM.j)("Scene", "removeReflectionProbe")), (Wr = ji.prototype).addReflectionProbe ?? (Wr.addReflectionProbe = (0, GM.j)("Scene", "addReflectionProbe")), (sr = ji.prototype).getBoundingBoxRenderer ?? (sr.getBoundingBoxRenderer = (0, GM.j)("Scene", "getBoundingBoxRenderer")), (Dr = ji.prototype).enableDepthRenderer ?? (Dr.enableDepthRenderer = (0, GM.j)("Scene", "enableDepthRenderer")), (kr = ji.prototype).disableDepthRenderer ?? (kr.disableDepthRenderer = (0, GM.j)("Scene", "disableDepthRenderer")), (Zr = ji.prototype).enableFluidRenderer ?? (Zr.enableFluidRenderer = (0, GM.j)("Scene", "enableFluidRenderer")), (or = ji.prototype).disableFluidRenderer ?? (or.disableFluidRenderer = (0, GM.j)("Scene", "disableFluidRenderer")), (fr = ji.prototype).enableGeometryBufferRenderer ?? (fr.enableGeometryBufferRenderer = (0, GM.j)("Scene", "enableGeometryBufferRenderer")), (Yr = ji.prototype).disableGeometryBufferRenderer ?? (Yr.disableGeometryBufferRenderer = (0, GM.j)("Scene", "disableGeometryBufferRenderer")), (Nr = ji.prototype).enableIblCdfGenerator ?? (Nr.enableIblCdfGenerator = (0, GM.j)("Scene", "enableIblCdfGenerator")), (Ar = ji.prototype).disableIblCdfGenerator ?? (Ar.disableIblCdfGenerator = (0, GM.j)("Scene", "disableIblCdfGenerator")), (xr = ji.prototype).getOutlineRenderer ?? (xr.getOutlineRenderer = (0, GM.j)("Scene", "getOutlineRenderer")), (vr = ji.prototype).enablePrePassRenderer ?? (vr.enablePrePassRenderer = (0, GM.j)("Scene", "enablePrePassRenderer")), (Fr = ji.prototype).disablePrePassRenderer ?? (Fr.disablePrePassRenderer = (0, GM.j)("Scene", "disablePrePassRenderer")), (Br = ji.prototype).enableSubSurfaceForPrePass ?? (Br.enableSubSurfaceForPrePass = (0, GM.j)("Scene", "enableSubSurfaceForPrePass")), (Xr = ji.prototype).disableSubSurfaceForPrePass ?? (Xr.disableSubSurfaceForPrePass = (0, GM.j)("Scene", "disableSubSurfaceForPrePass")), (Ir = ji.prototype).pickSprite ?? (Ir.pickSprite = (0, GM.j)("Scene", "pickSprite")), (Kr = ji.prototype).pickSpriteWithRay ?? (Kr.pickSpriteWithRay = (0, GM.j)("Scene", "pickSpriteWithRay")), (qr = ji.prototype).multiPickSprite ?? (qr.multiPickSprite = (0, GM.j)("Scene", "multiPickSprite")), (Tr = ji.prototype).multiPickSpriteWithRay ?? (Tr.multiPickSpriteWithRay = (0, GM.j)("Scene", "multiPickSpriteWithRay")), (Vr = ji.prototype).setPointerOverSprite ?? (Vr.setPointerOverSprite = (0, GM.j)("Scene", "setPointerOverSprite")), (cr = ji.prototype).getPointerOverSprite ?? (cr.getPointerOverSprite = (0, GM.j)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(ji.prototype, "mainSoundTrack") || Object.defineProperty(ji.prototype, "mainSoundTrack", (0, GM.g)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(ji.prototype, "soundTracks") || Object.defineProperty(ji.prototype, "soundTracks", (0, GM.g)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(ji.prototype, "audioEnabled") || Object.defineProperty(ji.prototype, "audioEnabled", (0, GM.g)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(ji.prototype, "headphone") || Object.defineProperty(ji.prototype, "headphone", (0, GM.g)("Scene", "headphone")), Object.getOwnPropertyDescriptor(ji.prototype, "audioListenerPositionProvider") || Object.defineProperty(ji.prototype, "audioListenerPositionProvider", (0, GM.g)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(ji.prototype, "audioListenerRotationProvider") || Object.defineProperty(ji.prototype, "audioListenerRotationProvider", (0, GM.g)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(ji.prototype, "audioPositioningRefreshRate") || Object.defineProperty(ji.prototype, "audioPositioningRefreshRate", (0, GM.g)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(ji.prototype, "selectionOctree") || Object.defineProperty(ji.prototype, "selectionOctree", (0, GM.g)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(ji.prototype, "debugLayer") || Object.defineProperty(ji.prototype, "debugLayer", (0, GM.g)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(ji.prototype, "gamepadManager") || Object.defineProperty(ji.prototype, "gamepadManager", (0, GM.g)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(ji.prototype, "simplificationQueue") || Object.defineProperty(ji.prototype, "simplificationQueue", (0, GM.g)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(ji.prototype, "onBeforePhysicsObservable") || Object.defineProperty(ji.prototype, "onBeforePhysicsObservable", (0, GM.g)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(ji.prototype, "onAfterPhysicsObservable") || Object.defineProperty(ji.prototype, "onAfterPhysicsObservable", (0, GM.g)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(ji.prototype, "reflectionProbes") || Object.defineProperty(ji.prototype, "reflectionProbes", (0, GM.g)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(ji.prototype, "forceShowBoundingBoxes") || Object.defineProperty(ji.prototype, "forceShowBoundingBoxes", (0, GM.g)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(ji.prototype, "depthPeelingRenderer") || Object.defineProperty(ji.prototype, "depthPeelingRenderer", (0, GM.g)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(ji.prototype, "useOrderIndependentTransparency") || Object.defineProperty(ji.prototype, "useOrderIndependentTransparency", (0, GM.g)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(ji.prototype, "fluidRenderer") || Object.defineProperty(ji.prototype, "fluidRenderer", (0, GM.g)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(ji.prototype, "geometryBufferRenderer") || Object.defineProperty(ji.prototype, "geometryBufferRenderer", (0, GM.g)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(ji.prototype, "iblCdfGenerator") || Object.defineProperty(ji.prototype, "iblCdfGenerator", (0, GM.g)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(ji.prototype, "prePassRenderer") || Object.defineProperty(ji.prototype, "prePassRenderer", (0, GM.g)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(ji.prototype, "subSurfaceConfiguration") || Object.defineProperty(ji.prototype, "subSurfaceConfiguration", (0, GM.g)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(ji.prototype, "spriteManagers") || Object.defineProperty(ji.prototype, "spriteManagers", (0, GM.g)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(ji.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(ji.prototype, "onBeforeSpritesRenderingObservable", (0, GM.g)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(ji.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(ji.prototype, "onAfterSpritesRenderingObservable", (0, GM.g)("Scene", "onAfterSpritesRenderingObservable"))
  },
  41278: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM,
      f: () => SM
    });
    class OM {}
    OM.NAME_EFFECTLAYER = "EffectLayer", OM.NAME_LAYER = "Layer", OM.NAME_LENSFLARESYSTEM = "LensFlareSystem", OM.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", OM.NAME_PARTICLESYSTEM = "ParticleSystem", OM.NAME_GAMEPAD = "Gamepad", OM.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", OM.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", OM.NAME_PREPASSRENDERER = "PrePassRenderer", OM.NAME_DEPTHRENDERER = "DepthRenderer", OM.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", OM.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", OM.NAME_SPRITE = "Sprite", OM.NAME_SUBSURFACE = "SubSurface", OM.NAME_OUTLINERENDERER = "Outline", OM.NAME_PROCEDURALTEXTURE = "ProceduralTexture", OM.NAME_SHADOWGENERATOR = "ShadowGenerator", OM.NAME_OCTREE = "bOM", OM.NAME_PHYSICSENGINE = "PhysicsEngine", OM.NAME_AUDIO = "Audio", OM.NAME_FLUIDRENDERER = "FluidRenderer", OM.NAME_IBLCDFGENERATOR = "iblCDFGenerator", OM.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", OM.STEP_ISREADYFORMESH_EFFECTLAYER = 0, OM.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, OM.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, OM.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, OM.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, OM.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, OM.STEP_BEFORECAMERADRAW_PREPASS = 0, OM.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, OM.STEP_BEFORECAMERADRAW_LAYER = 2, OM.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, OM.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, OM.STEP_BEFORERENDERINGMESH_PREPASS = 0, OM.STEP_BEFORERENDERINGMESH_OUTLINE = 1, OM.STEP_AFTERRENDERINGMESH_PREPASS = 0, OM.STEP_AFTERRENDERINGMESH_OUTLINE = 1, OM.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, OM.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, OM.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, OM.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, OM.STEP_BEFORECLEAR_PREPASS = 1, OM.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, OM.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, OM.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, OM.STEP_AFTERCAMERADRAW_PREPASS = 0, OM.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, OM.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, OM.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, OM.STEP_AFTERCAMERADRAW_LAYER = 4, OM.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, OM.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, OM.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, OM.STEP_AFTERRENDER_AUDIO = 0, OM.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, OM.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, OM.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, OM.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, OM.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, OM.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, OM.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, OM.STEP_POINTERMOVE_SPRITE = 0, OM.STEP_POINTERDOWN_SPRITE = 0, OM.STEP_POINTERUP_SPRITE = 0;
    class SM extends Array {
      constructor(MM) {
        super(...MM)
      }
      static Create() {
        return Object.create(SM.prototype)
      }
      registerStep(MM, rM, iM) {
        let OM, SM = 0;
        for (; SM < this.length; SM++) {
          if (OM = this[SM].index, MM < OM) break
        }
        this.splice(SM, 0, {
          index: MM,
          component: rM,
          action: iM.bind(rM)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  41099: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      f: () => PM,
      i: () => OM,
      m: () => SM,
      p: () => jM
    });

    function OM(MM, rM, iM, OM, SM, jM) {
      function aM(MM) {
        if (void 0 !== MM && "function" !== typeof MM) throw new TypeError("Function expected");
        return MM
      }
      for (var PM, nM = OM.kind, QM = "getter" === nM ? "get" : "setter" === nM ? "set" : "value", zM = !rM && MM ? OM.static ? MM : MM.prototype : null, LM = rM || (zM ? Object.getOwnPropertyDescriptor(zM, OM.name) : {}), mM = !1, HM = iM.length - 1; HM >= 0; HM--) {
        var hM = {};
        for (var JM in OM) hM[JM] = "access" === JM ? {} : OM[JM];
        for (var JM in OM.access) hM.access[JM] = OM.access[JM];
        hM.addInitializer = function(MM) {
          if (mM) throw new TypeError("Cannot add initializers after decoration has completed");
          jM.push(aM(MM || null))
        };
        var dM = (0, iM[HM])("accessor" === nM ? {
          get: LM.get,
          set: LM.set
        } : LM[QM], hM);
        if ("accessor" === nM) {
          if (void 0 === dM) continue;
          if (null === dM || "object" !== typeof dM) throw new TypeError("Object expected");
          (PM = aM(dM.get)) && (LM.get = PM), (PM = aM(dM.set)) && (LM.set = PM), (PM = aM(dM.init)) && SM.unshift(PM)
        } else(PM = aM(dM)) && ("field" === nM ? SM.unshift(PM) : LM[QM] = PM)
      }
      zM && Object.defineProperty(zM, OM.name, LM), mM = !0
    }

    function SM(MM, rM, iM) {
      for (var OM = arguments.length > 2, SM = 0; SM < rM.length; SM++) iM = OM ? rM[SM].call(MM, iM) : rM[SM].call(MM);
      return OM ? iM : void 0
    }

    function jM(MM, rM, iM) {
      return "symbol" === typeof rM && (rM = rM.description ? "[".concat(rM.description, "]") : ""), Object.defineProperty(MM, "name", {
        configurable: !0,
        value: iM ? "".concat(iM, " ", rM) : rM
      })
    }
    Object.create;
    Object.create;

    function aM(MM, rM, iM, OM) {
      if ("a" === iM && !OM) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof rM ? MM !== rM || !OM : !rM.has(MM)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === iM ? OM : "a" === iM ? OM.call(MM) : OM ? OM.value : rM.get(MM)
    }

    function PM(MM, rM, iM, OM, SM) {
      if ("m" === OM) throw new TypeError("Private method is not writable");
      if ("a" === OM && !SM) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof rM ? MM !== rM || !SM : !rM.has(MM)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === OM ? SM.call(MM, iM) : SM ? SM.value = iM : rM.set(MM, iM), iM
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);