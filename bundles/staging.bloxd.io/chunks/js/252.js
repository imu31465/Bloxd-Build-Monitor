export const id = 252;
export const ids = [252];
export const modules = {
  40183: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => NS,
      e: () => jS,
      g: () => uS,
      h: () => qS
    });
    var tS = gS(39959),
      bS = gS(38687),
      XS = gS(40113),
      xS = gS(40010);
    class NS {
      get Ow() {
        return this._isDisposed
      }
      constructor(SS, HS, gS) {
        let bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          XS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          NS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          qS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          uS = arguments.length > 7 ? arguments[7] : void 0,
          IS = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, xS.e)(), SS && SS.lL ? this._engine = SS.lL().AK() : this._engine = SS, this._updatable = gS, this._instanced = NS, this._divisor = uS || 1, this._label = IS, HS instanceof tS.b ? (this._data = null, this._buffer = HS) : (this._data = HS, this._buffer = null), this.byteStride = qS ? bS : bS * Float32Array.BYTES_PER_ELEMENT, XS || this.create()
      }
      createVertexBuffer(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          xS = arguments.length > 6 ? arguments[6] : void 0;
        const NS = XS ? HS : HS * Float32Array.BYTES_PER_ELEMENT,
          uS = tS ? XS ? tS : tS * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new qS(this._engine, this, SS, this._updatable, !0, uS, void 0 === bS ? this._instanced : bS, NS, gS, void 0, void 0, !0, this._divisor || xS)
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
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !SS && this._buffer || (SS = SS || this._data, SS && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, SS), this._data = SS) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(SS, this._label), this._data = SS) : this._buffer = this._engine.createVertexBuffer(SS, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.hf > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.hf, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.hf, void 0, this._label));
          bS.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(SS) {
        this.create(SS)
      }
      updateDirectly(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, SS, tS ? HS : HS * Float32Array.BYTES_PER_ELEMENT, gS ? gS * this.byteStride : void 0), this._data = 0 === HS && void 0 === gS ? SS : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class qS {
      get Ow() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(SS) {
        const HS = 0 != SS;
        this._instanceDivisor = SS, HS !== this._instanced && (this._instanced = HS, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const SS = this.getData();
        return SS ? Array.isArray(SS) ? SS.length / (this.byteStride / 4) - this.byteOffset / 4 : (SS.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(SS, HS, gS, tS, bS, xS, fS, kS, aS, KS) {
        let jS, GS = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          CS = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          nS = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          PS = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = SS, "object" === typeof tS && null !== tS ? (jS = tS.updatable ?? !1, bS = tS.postponeInternalCreation, xS = tS.stride, fS = tS.instanced, kS = tS.offset, aS = tS.size, KS = tS.type, GS = tS.normalized ?? !1, CS = tS.useBytes ?? !1, nS = tS.divisor ?? 1, PS = tS.takeBufferOwnership ?? !1, this._label = tS.label) : jS = !!tS, HS instanceof NS ? (this._buffer = HS, this._ownsBuffer = PS) : (this._buffer = new NS(SS, HS, jS, xS, bS, fS, CS, nS, this._label), this._ownsBuffer = !0), this.uniqueId = qS._Counter++, this._kind = gS, void 0 === KS) {
          const SS = this.getData();
          this.type = SS ? IS(SS) : qS.FLOAT
        } else this.type = KS;
        const QS = (0, XS.m)(this.type);
        CS ? (this._size = aS || (xS ? xS / QS : uS(gS)), this.byteStride = xS || this._buffer.byteStride || this._size * QS, this.byteOffset = kS || 0) : (this._size = aS || xS || uS(gS), this.byteStride = xS ? xS * QS : this._buffer.byteStride || this._size * QS, this.byteOffset = (kS || 0) * QS), this.normalized = GS, this._instanced = void 0 !== fS && fS, this._instanceDivisor = fS ? nS : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(SS) {
        switch (SS) {
          case qS.BYTE:
            return 0;
          case qS.UNSIGNED_BYTE:
            return 1;
          case qS.SHORT:
            return 2;
          case qS.UNSIGNED_SHORT:
            return 3;
          case qS.INT:
            return 4;
          case qS.UNSIGNED_INT:
            return 5;
          case qS.FLOAT:
            return 6;
          case qS.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${SS}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (qS._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(SS, HS) {
        const gS = this.getData();
        return gS ? (0, XS.l)(gS, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, SS, HS) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, XS.m)(this.type)
      }
      SgS() {
        return this.byteOffset / (0, XS.m)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, XS.m)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(SS) {
        this._buffer.create(SS), this._alignBuffer()
      }
      update(SS) {
        this._buffer.update(SS), this._alignBuffer()
      }
      updateDirectly(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(SS, HS, void 0, gS), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(SS, HS) {
        (0, XS.g)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, SS, this.normalized, ((SS, gS) => {
          for (let tS = 0; tS < this._size; tS++) HS(SS[tS], gS + tS)
        }))
      }
      _alignBuffer() {}
    }

    function uS(SS) {
      switch (SS) {
        case qS.UVKind:
        case qS.UV2Kind:
        case qS.UV3Kind:
        case qS.UV4Kind:
        case qS.UV5Kind:
        case qS.UV6Kind:
          return 2;
        case qS.NormalKind:
        case qS.PositionKind:
          return 3;
        case qS.ColorKind:
        case qS.ColorInstanceKind:
        case qS.MatricesIndicesKind:
        case qS.MatricesIndicesExtraKind:
        case qS.MatricesWeightsKind:
        case qS.MatricesWeightsExtraKind:
        case qS.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + SS + "'")
      }
    }

    function IS(SS) {
      return SS instanceof Int8Array ? qS.BYTE : SS instanceof Uint8Array ? qS.UNSIGNED_BYTE : SS instanceof Int16Array ? qS.SHORT : SS instanceof Uint16Array ? qS.UNSIGNED_SHORT : SS instanceof Int32Array ? qS.INT : SS instanceof Uint32Array ? qS.UNSIGNED_INT : qS.FLOAT
    }

    function fS(SS) {
      return (0, XS.m)(SS)
    }

    function kS(SS, HS, gS, tS, bS, xS, NS, qS) {
      (0, XS.g)(SS, HS, gS, tS, bS, xS, NS, ((SS, HS) => {
        for (let gS = 0; gS < tS; gS++) qS(SS[gS], HS + gS)
      }))
    }

    function aS(SS, HS, gS, tS, bS, xS, NS, qS) {
      return (0, XS.l)(SS, HS, gS, tS, bS, xS, NS, qS)
    }
    qS._Counter = 0, qS.BYTE = 5120, qS.UNSIGNED_BYTE = 5121, qS.SHORT = 5122, qS.UNSIGNED_SHORT = 5123, qS.INT = 5124, qS.UNSIGNED_INT = 5125, qS.FLOAT = 5126, qS.HALF_FLOAT = 5131, qS.PositionKind = "position", qS.NormalKind = "normal", qS.TangentKind = "tangent", qS.UVKind = "uv", qS.UV2Kind = "uv2", qS.UV3Kind = "uv3", qS.UV4Kind = "uv4", qS.UV5Kind = "uv5", qS.UV6Kind = "uv6", qS.ColorKind = "color", qS.ColorInstanceKind = "instanceColor", qS.MatricesIndicesKind = "matricesIndices", qS.MatricesWeightsKind = "matricesWeights", qS.MatricesIndicesExtraKind = "matricesIndicesExtra", qS.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let KS = !1;

    function jS() {
      KS || (KS = !0, qS.DeduceStride = uS, qS.GetDataType = IS, qS.GetTypeByteLength = fS, qS.ForEach = kS, qS.GetFloatData = aS)
    }
  },
  39959: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    class tS {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.hf = 0, this.is32Bits = !1, this.uniqueId = tS._Counter++
      }
    }
    tS._Counter = 0
  },
  40176: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => XS
    });
    var tS = gS(37117),
      bS = gS(40183);
    class XS {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || HS && !this.pickedMesh.isVerticesDataPresent(bS.h.NormalKind)) return null;
        let gS, XS = this.pickedMesh.mgS();
        0 === XS?.length && (XS = null);
        const xS = tS.l.VK[0],
          NS = tS.l.VK[1],
          qS = tS.l.VK[2];
        if (HS) {
          const SS = this.pickedMesh.getVerticesData(bS.h.NormalKind);
          let HS = XS ? tS.n.FromArrayToRef(SS, 3 * XS[3 * this.faceId], xS) : xS.I5(SS[3 * this.faceId * 3], SS[3 * this.faceId * 3 + 1], SS[3 * this.faceId * 3 + 2]),
            uS = XS ? tS.n.FromArrayToRef(SS, 3 * XS[3 * this.faceId + 1], NS) : NS.I5(SS[3 * (3 * this.faceId + 1)], SS[3 * (3 * this.faceId + 1) + 1], SS[3 * (3 * this.faceId + 1) + 2]),
            IS = XS ? tS.n.FromArrayToRef(SS, 3 * XS[3 * this.faceId + 2], qS) : qS.I5(SS[3 * (3 * this.faceId + 2)], SS[3 * (3 * this.faceId + 2) + 1], SS[3 * (3 * this.faceId + 2) + 2]);
          HS = HS.scale(this.bu), uS = uS.scale(this.bv), IS = IS.scale(1 - this.bu - this.bv), gS = new tS.n(HS.x + uS.x + IS.x, HS.y + uS.y + IS.y, HS.z + uS.z + IS.z)
        } else {
          const SS = this.pickedMesh.getVerticesData(bS.h.PositionKind),
            HS = XS ? tS.n.FromArrayToRef(SS, 3 * XS[3 * this.faceId], xS) : xS.I5(SS[3 * this.faceId * 3], SS[3 * this.faceId * 3 + 1], SS[3 * this.faceId * 3 + 2]),
            uS = XS ? tS.n.FromArrayToRef(SS, 3 * XS[3 * this.faceId + 1], NS) : NS.I5(SS[3 * (3 * this.faceId + 1)], SS[3 * (3 * this.faceId + 1) + 1], SS[3 * (3 * this.faceId + 1) + 2]),
            IS = XS ? tS.n.FromArrayToRef(SS, 3 * XS[3 * this.faceId + 2], qS) : qS.I5(SS[3 * (3 * this.faceId + 2)], SS[3 * (3 * this.faceId + 2) + 1], SS[3 * (3 * this.faceId + 2) + 2]),
            fS = HS.subtract(uS),
            kS = IS.subtract(uS);
          gS = tS.n.Cross(fS, kS)
        }
        const uS = (SS, HS) => {
          if (-1 !== this.thinInstanceIndex) {
            const gS = SS._thinInstanceDataStorage.matrixData,
              bS = this.thinInstanceIndex << 4;
            if (gS && gS.length > bS) {
              const SS = tS.l.Matrix[0];
              tS.e.FromArrayToRef(gS, bS, SS), tS.n.TransformNormalToRef(HS, SS, HS)
            }
          }
          let gS = SS.getWorldMatrix();
          SS.nonUniformScaling && (tS.l.Matrix[0].dJ(gS), gS = tS.l.Matrix[0], gS.setTranslationFromFloats(0, 0, 0), gS.invert(), gS.transposeToRef(tS.l.Matrix[1]), gS = tS.l.Matrix[1]), tS.n.TransformNormalToRef(HS, gS, HS)
        };
        if (SS && uS(this.pickedMesh, gS), this.ray) {
          const HS = tS.l.VK[0].dJ(gS);
          SS || uS(this.pickedMesh, HS), tS.n.Dot(HS, this.ray.direction) > 0 && gS.negateInPlace()
        }
        return gS.normalize(), gS
      }
      getTextureCoordinates() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bS.h.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(SS)) return null;
        const HS = this.pickedMesh.mgS();
        if (!HS) return null;
        const gS = this.pickedMesh.getVerticesData(SS);
        if (!gS) return null;
        let XS = tS.m.FromArray(gS, 2 * HS[3 * this.faceId]),
          xS = tS.m.FromArray(gS, 2 * HS[3 * this.faceId + 1]),
          NS = tS.m.FromArray(gS, 2 * HS[3 * this.faceId + 2]);
        return XS = XS.scale(this.bu), xS = xS.scale(this.bv), NS = NS.scale(1 - this.bu - this.bv), new tS.m(XS.x + xS.x + NS.x, XS.y + xS.y + NS.y)
      }
    }
  },
  40010: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS
    });
    var tS = gS(39888);
    let bS = !1;

    function XS() {
      bS || (bS = !0, tS.ThinEngine.prototype.updateDynamicIndexBuffer = function(SS, HS) {
        let gS;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(SS), gS = SS.is32Bits ? HS instanceof Uint32Array ? HS : new Uint32Array(HS) : HS instanceof Uint16Array ? HS : new Uint16Array(HS), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, gS, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, tS.ThinEngine.prototype.updateDynamicVertexBuffer = function(SS, HS, gS, tS) {
        this.bindArrayBuffer(SS), void 0 === gS && (gS = 0);
        const bS = HS.byteLength || HS.length;
        void 0 === tS || tS >= bS && 0 === gS ? HS instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, gS, new Float32Array(HS)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, gS, HS) : HS instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, gS, new Float32Array(HS).subarray(0, tS / 4)) : (HS = ArrayBuffer.isView(HS) ? new Uint8Array(HS.buffer, HS.byteOffset, tS) : new Uint8Array(HS, 0, tS), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, gS, HS)), this._resetVertexBufferBinding()
      })
    }
  },
  39975: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS
    });
    class tS {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          HS = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = HS, !SS && (SS = HS.createTexture(), !SS)) throw new Error("Unable to create webGL texture");
        this.set(SS)
      }
      setUsage() {}
      set(SS) {
        this._webGLTexture = SS
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(SS) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(SS)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const SS of this._MSAARenderBuffers) this._context.deleteRenderbuffer(SS);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[SS] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  39939: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => nS
    });
    var tS = gS(37144),
      bS = gS(39890),
      XS = gS(37138),
      xS = gS(38687),
      NS = gS(37134),
      qS = gS(39946);
    class uS {
      constructor() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, SS && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(SS) {
        this._zOffset !== SS && (this._zOffset = SS, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(SS) {
        this._zOffsetUnits !== SS && (this._zOffsetUnits = SS, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(SS) {
        this._cullFace !== SS && (this._cullFace = SS, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(SS) {
        this._cull !== SS && (this._cull = SS, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(SS) {
        this._depthFunc !== SS && (this._depthFunc = SS, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(SS) {
        this._depthMask !== SS && (this._depthMask = SS, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(SS) {
        this._depthTest !== SS && (this._depthTest = SS, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(SS) {
        this._frontFace !== SS && (this._frontFace = SS, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(SS) {
        this.isDirty && (this._isCullDirty && (this.cull ? SS.enable(SS.CULL_FACE) : SS.disable(SS.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (SS.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (SS.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? SS.enable(SS.DEPTH_TEST) : SS.disable(SS.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (SS.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (SS.enable(SS.POLYGON_OFFSET_FILL), SS.polygonOffset(this.zOffset, this.zOffsetUnits)) : SS.disable(SS.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (SS.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class IS {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(SS) {
        this._func !== SS && (this._func = SS, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(SS) {
        this._backFunc !== SS && (this._backFunc = SS, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(SS) {
        this._funcRef !== SS && (this._funcRef = SS, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(SS) {
        this._funcMask !== SS && (this._funcMask = SS, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(SS) {
        this._opStencilFail !== SS && (this._opStencilFail = SS, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(SS) {
        this._opDepthFail !== SS && (this._opDepthFail = SS, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(SS) {
        this._opStencilDepthPass !== SS && (this._opStencilDepthPass = SS, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(SS) {
        this._backOpStencilFail !== SS && (this._backOpStencilFail = SS, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(SS) {
        this._backOpDepthFail !== SS && (this._backOpDepthFail = SS, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(SS) {
        this._backOpStencilDepthPass !== SS && (this._backOpStencilDepthPass = SS, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(SS) {
        this._mask !== SS && (this._mask = SS, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(SS) {
        this._enabled !== SS && (this._enabled = SS, this._isStencilTestDirty = !0)
      }
      constructor() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, SS && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(SS) {
        if (!SS) return;
        const HS = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = HS ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = HS ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = HS ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = HS ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = HS ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = HS ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = HS ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = HS ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = HS ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = HS ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = HS ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = HS ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? SS.enable(SS.STENCIL_TEST) : SS.disable(SS.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (SS.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (SS.stencilFuncSeparate(SS.FRONT, this.func, this.funcRef, this.funcMask), SS.stencilFuncSeparate(SS.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (SS.stencilOpSeparate(SS.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), SS.stencilOpSeparate(SS.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class fS {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = fS.ALWAYS, this.opStencilFail = fS.KEEP, this.opDepthFail = fS.KEEP, this.opStencilDepthPass = fS.REPLACE, this.backFunc = fS.ALWAYS, this.backOpStencilFail = fS.KEEP, this.backOpDepthFail = fS.KEEP, this.backOpStencilDepthPass = fS.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(SS) {
        this.func = SS
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(SS) {
        this.backFunc = SS
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(SS) {
        this.funcRef = SS
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(SS) {
        this.funcMask = SS
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(SS) {
        this.opStencilFail = SS
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(SS) {
        this.opDepthFail = SS
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(SS) {
        this.opStencilDepthPass = SS
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(SS) {
        this.backOpStencilFail = SS
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(SS) {
        this.backOpDepthFail = SS
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(SS) {
        this.backOpStencilDepthPass = SS
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(SS) {
        this.mask = SS
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(SS) {
        this.enabled = SS
      }
    }
    fS.ALWAYS = 519, fS.KEEP = 7680, fS.REPLACE = 7681;
    var kS = gS(39948),
      aS = gS(39926),
      KS = gS(39877),
      jS = gS(39913),
      GS = gS(39922);

    function CS(SS, HS) {
      if (HS) {
        const {
          requestAnimationFrame: gS
        } = HS;
        if ("function" === typeof gS) return gS(SS)
      }
      if ((0, jS.j)()) {
        const {
          requestAnimationFrame: gS
        } = HS || window;
        if ("function" === typeof gS) return gS(SS)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(SS);
      return setTimeout(SS, 16)
    }
    class nS {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(SS) {
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
      get RgS() {
        return this._useReverseDepthBuffer
      }
      set RgS(SS) {
        SS !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = SS, this._depthCullingState.depthFunc = SS ? 518 : 515)
      }
      setColorWrite(SS) {
        SS !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = SS)
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
      _getGlobalDefines(SS) {
        if (SS) return this.isNDCHalfZRange ? SS.IS_NDC_HALF_ZRANGE = "" : delete SS.IS_NDC_HALF_ZRANGE, this.RgS ? SS.USE_REVERSE_DEPTHBUFFER = "" : delete SS.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? SS.USE_EXACT_SRGB_CONVERSIONS = "" : delete SS.USE_EXACT_SRGB_CONVERSIONS);
        {
          let SS = "";
          return this.isNDCHalfZRange && (SS += "#define IS_NDC_HALF_ZRANGE"), this.RgS && (SS && (SS += "\n"), SS += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (SS && (SS += "\n"), SS += "#define USE_EXACT_SRGB_CONVERSIONS"), SS
        }
      }
      _rebuildInternalTextures() {
        const SS = this._internalTexturesCache.slice();
        for (const HS of SS) HS._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const SS = this._renderTargetWrapperCache.slice();
        for (const HS of SS) HS.textures?.some((SS => 15 === SS.source)) || HS._rebuild()
      }
      _rebuildEffects() {
        for (const SS in this._compiledEffects) {
          const HS = this._compiledEffects[SS];
          HS._pipelineContext = null, HS._prepareEffect()
        }
        bS.c.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        xS.b.Warn(this.name + " context successfully restored."), this.YK.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(SS) {
        setTimeout((() => {
          this._clearEmptyResources();
          const HS = this._depthCullingState.depthTest,
            gS = this._depthCullingState.depthFunc,
            tS = this._depthCullingState.depthMask,
            bS = this._stencilState.stencilTest;
          SS(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = HS, this._depthCullingState.depthFunc = gS, this._depthCullingState.depthMask = tS, this._stencilState.stencilTest = bS, this._flagContextRestored()
        }), 0)
      }
      get Ow() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(SS) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(SS) {}
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
          const SS = new Uint8Array(4),
            HS = [SS, SS, SS, SS, SS, SS];
          this._emptyCubeTexture = this.createRawCubeTexture(HS, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(SS) {
        this._framebufferDimensionsObject = SS
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(SS) {
        if (!SS) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const HS = this._activeRenderLoops.indexOf(SS);
        HS >= 0 && (this._activeRenderLoops.splice(HS, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: SS
            } = this.customAnimationFrameRequester;
            SS && SS(this.customAnimationFrameRequester.iK), delete this.customAnimationFrameRequester.iK
          }
        } else if (0 !== this._frameHandler) {
          const SS = this._frameHandler;
          if (this._frameHandler = 0, (0, jS.j)()) {
            const {
              cancelAnimationFrame: HS
            } = this.getHostWindow() || window;
            if ("function" === typeof HS) return HS(SS)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(SS);
          return clearTimeout(SS)
        }
      }
      qD() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      uD() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(SS) {
        this._maxFPS = SS, void 0 !== SS && (this._minFrameTime = SS <= 0 ? Number.MAX_VALUE : 1e3 / SS)
      }
      _isOverFrameTime(SS) {
        if (!SS || void 0 === this._maxFPS) return !1;
        const HS = SS - this._lastFrameTime;
        return this._lastFrameTime = SS, this._renderAccumulator += HS, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(SS) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(SS)) {
          let SS = !0;
          (this.Ow || !this.renderEvenInBackground && this._windowIsBackground) && (SS = !1), SS && (this.qD(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.uD())
        }
      }
      _renderLoop(SS) {
        this._processFrame(SS), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let SS = 0; SS < this._activeRenderLoops.length; SS++) {
          (0, this._activeRenderLoops[SS])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(SS, HS) {
        return CS(SS, HS)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.iK = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.iK) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(SS) {
        -1 === this._activeRenderLoops.indexOf(SS) && (this._activeRenderLoops.push(SS), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(SS) {
        this._depthCullingState.depthTest = SS
      }
      setZOffset(SS) {
        this._depthCullingState.zOffset = this.RgS ? -SS : SS
      }
      getZOffset() {
        const SS = this._depthCullingState.zOffset;
        return this.RgS ? -SS : SS
      }
      setZOffsetUnits(SS) {
        this._depthCullingState.zOffsetUnits = this.RgS ? -SS : SS
      }
      getZOffsetUnits() {
        const SS = this._depthCullingState.zOffsetUnits;
        return this.RgS ? -SS : SS
      }
      getHostWindow() {
        return (0, jS.j)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(SS) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const SS of this.scenes) SS._rebuildTextures();
        for (const SS of this._virtualScenes) SS._rebuildTextures()
      }
      _releaseRenderTargetWrapper(SS) {
        const HS = this._renderTargetWrapperCache.indexOf(SS); - 1 !== HS && this._renderTargetWrapperCache.splice(HS, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(SS, HS, gS) {
        const tS = HS || this.getRenderWidth(),
          bS = gS || this.getRenderHeight(),
          XS = SS.x || 0,
          xS = SS.y || 0;
        this._cachedViewport = SS, this._viewport(XS * tS, xS * bS, tS * SS.width, bS * SS.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(SS) {
        return new Path2D(SS)
      }
      get description() {
        let SS = this.name + this.version;
        return this._caps.parallelShaderCompile && (SS += " - Parallel shader compilation"), SS
      }
      _createTextureBase(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          NS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          qS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          uS = arguments.length > 7 ? arguments[7] : void 0,
          IS = arguments.length > 8 ? arguments[8] : void 0,
          fS = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          kS = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          aS = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          jS = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          GS = arguments.length > 13 ? arguments[13] : void 0,
          CS = arguments.length > 14 ? arguments[14] : void 0,
          PS = arguments.length > 15 ? arguments[15] : void 0;
        const QS = "data:" === (SS = SS || "").substring(0, 5),
          DS = "blob:" === SS.substring(0, 5),
          wS = QS && -1 !== SS.indexOf(";base64,"),
          hS = kS || new KS.e(this, 1);
        hS !== kS && (hS.label = SS.substring(0, 60));
        const ZS = SS;
        !this._transformTextureUrl || wS || kS || fS || (SS = this._transformTextureUrl(SS)), ZS !== SS && (hS._originalUrl = ZS);
        const JS = SS.lastIndexOf(".");
        let OS = jS || (JS > -1 ? SS.substring(JS).toLowerCase() : "");
        OS.indexOf("?") > -1 && (OS = OS.split("?")[0]);
        const dS = nS.GetCompatibleTextureLoader(OS, GS);
        tS && tS.addPendingData(hS), hS.url = SS, hS.generateMipMaps = !HS, hS.samplingMode = bS, hS.invertY = gS, hS._useSRGBBuffer = this._getUseSRGBBuffer(!!PS, HS), this._doNotHandleContextLost || (hS._buffer = fS);
        let cS = null;
        NS && !kS && (cS = hS.onLoadedObservable.add(NS)), kS || this._internalTexturesCache.push(hS);
        const vS = (gS, kS) => {
          tS && tS.removePendingData(hS), SS === ZS ? (cS && hS.onLoadedObservable.remove(cS), XS.d.UseFallbackTexture && SS !== XS.d.FallbackTexture && this._createTextureBase(XS.d.FallbackTexture, HS, hS.invertY, tS, bS, null, qS, uS, IS, fS, hS), gS = (gS || "Unknown error") + (XS.d.UseFallbackTexture ? " - Fallback texture was used" : ""), hS.onErrorObservable.notifyObservers({
            message: gS,
            exception: kS
          }), qS && qS(gS, kS)) : (xS.b.Warn(`Failed to load ${SS}, falling back to ${ZS}`), this._createTextureBase(ZS, HS, hS.invertY, tS, bS, NS, qS, uS, IS, fS, hS, aS, jS, GS, CS, PS))
        };
        if (dS) {
          const HS = async SS => {
            (await dS).loadData(SS, hS, ((SS, HS, gS, XS, xS, NS) => {
              NS ? vS("TextureLoader failed to load data") : uS(hS, OS, tS, {
                width: SS,
                height: HS
              }, hS.invertY, !gS, XS, (() => (xS(), !1)), bS)
            }), CS)
          };
          if (fS) {
            const SS = async SS => {
              try {
                await HS(SS)
              } catch (gS) {
                vS("Failed to parse texture data", gS)
              }
            };
            fS instanceof ArrayBuffer ? SS(new Uint8Array(fS)) : ArrayBuffer.isView(fS) ? SS(fS) : qS && qS("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(SS, (async SS => {
            try {
              await HS(new Uint8Array(SS))
            } catch (gS) {
              vS("Failed to parse texture data", gS)
            }
          }), void 0, tS ? tS.offlineProvider : void 0, !0, ((SS, HS) => {
            vS("Unable to load " + (SS && SS.responseURL, HS))
          }))
        } else {
          const gS = SS => {
            DS && !this._doNotHandleContextLost && (hS._buffer = SS), uS(hS, OS, tS, SS, hS.invertY, HS, !1, IS, bS)
          };
          !QS || wS ? fS && ("string" === typeof fS.decoding || fS.close) ? gS(fS) : nS._FileToolsLoadImage(SS || "", gS, vS, tS ? tS.offlineProvider : null, GS, hS.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof fS || fS instanceof ArrayBuffer || ArrayBuffer.isView(fS) || fS instanceof Blob ? nS._FileToolsLoadImage(fS, gS, vS, tS ? tS.offlineProvider : null, GS, hS.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : fS && gS(fS)
        }
        return hS
      }
      _rebuildBuffers() {
        for (const SS of this._uniformBuffers) SS._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, jS.f)() ? document : null
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
        for (const SS in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, SS) && (this._boundTexturesCache[SS] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(SS) {
        this._name = SS
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
      setHardwareScalingLevel(SS) {
        this._hardwareScalingLevel = SS, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(SS) {
        this._doNotHandleContextLost = SS
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(SS, HS, gS) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new uS, this._stencilStateComposer = new IS, this._stencilState = new fS, this._alphaState = new kS.c(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new tS.e, this.onCanvasFocusObservable = new tS.e, this.onNewSceneAddedObservable = new tS.e, this.onResizeObservable = new tS.e, this.onCanvasPointerOutObservable = new tS.e, this.onEffectErrorObservable = new tS.e, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new tS.e, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = SS => this._renderLoop(SS), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new tS.e, this.onAfterShaderCompilationObservable = new tS.e, this.onBeginFrameObservable = new tS.e, this.onEndFrameObservable = new tS.e, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new tS.e, this.YK = new tS.e, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.bY = new tS.e, this.onReleaseEffectsObservable = new tS.e, XS.d.Instances.push(this), this.startTime = qS.e.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, NS.d.SetMatrixPrecision(!!HS.useLargeWorldRendering || !!HS.useHighPrecisionMatrix), (0, jS.i)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), HS.antialias = SS ?? HS.antialias, HS.deterministicLockstep = HS.deterministicLockstep ?? !1, HS.lockstepMaxSteps = HS.lockstepMaxSteps ?? 4, HS.timeStep = HS.timeStep ?? 1 / 60, HS.stencil = HS.stencil ?? !0, this._audioContext = HS.audioEngineOptions?.audioContext ?? null, this._audioDestination = HS.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = HS.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!HS.doNotHandleContextLost, this._isStencilEnable = !!HS.stencil, this.useExactSrgbConversions = HS.useExactSrgbConversions ?? !1, this.canvasTabIndex = HS.canvasTabIndex ?? this.canvasTabIndex;
        const bS = (0, jS.j)() && window.devicePixelRatio || 1,
          xS = HS.limitDeviceRatio || bS;
        gS = gS || HS.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = gS, this._hardwareScalingLevel = gS ? 1 / Math.min(xS, bS) : 1, this._lastDevicePixelRatio = bS, this._creationOptions = HS
      }
      resize() {
        let SS, HS, gS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const SS = (0, jS.j)() && window.devicePixelRatio || 1,
            HS = this._lastDevicePixelRatio / SS;
          this._lastDevicePixelRatio = SS, this._hardwareScalingLevel *= HS
        }
        if ((0, jS.j)() && (0, jS.f)())
          if (this._renderingCanvas) {
            const gS = this._renderingCanvas.getBoundingClientRect?.();
            SS = this._renderingCanvas.clientWidth || gS?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, HS = this._renderingCanvas.clientHeight || gS?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else SS = window.innerWidth, HS = window.innerHeight;
        else SS = this._renderingCanvas ? this._renderingCanvas.width : 100, HS = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(SS / this._hardwareScalingLevel, HS / this._hardwareScalingLevel, gS)
      }
      setSize(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (SS |= 0, HS |= 0, !gS && this._renderingCanvas.width === SS && this._renderingCanvas.height === HS) return !1;
        if (this._renderingCanvas.width = SS, this._renderingCanvas.height = HS, this.scenes) {
          for (let SS = 0; SS < this.scenes.length; SS++) {
            const HS = this.scenes[SS];
            for (let SS = 0; SS < HS.cameras.length; SS++) {
              HS.cameras[SS]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS, IS, fS) {
        throw (0, aS.l)("engine.rawTexture")
      }
      createRawCubeTexture(SS, HS, gS, tS, bS, XS, xS, NS) {
        throw (0, aS.l)("engine.rawTexture")
      }
      createRawTexture3D(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS, IS) {
        throw (0, aS.l)("engine.rawTexture")
      }
      createRawTexture2DArray(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS, IS, fS) {
        throw (0, aS.l)("engine.rawTexture")
      }
      _sharedInit(SS) {
        this._renderingCanvas = SS
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const SS = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== SS.indexOf("Mobile") || -1 !== SS.indexOf("Mac") && (0, jS.f)() && "ontouchend" in document
        }, this._checkForMobile(), (0, jS.j)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(SS) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(SS, !1)
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
      _createImageBitmapFromSource(SS, HS) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(SS, HS) {
        return createImageBitmap(SS, HS)
      }
      resizeImageBitmap(SS, HS, gS) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(SS) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(SS, HS) {
        if ("undefined" === typeof document) return new OffscreenCanvas(SS, HS);
        const gS = document.createElement("canvas");
        return gS.width = SS, gS.height = HS, gS
      }
      createCanvas(SS, HS) {
        return nS._CreateCanvas(SS, HS)
      }
      static _FileToolsLoadImage(SS, HS, gS, tS, bS, XS, xS) {
        if (!GS.c.loadImage) throw (0, aS.l)("FileTools");
        return GS.c.loadImage(SS, HS, gS, tS, bS, XS, xS)
      }
      _loadFile(SS, HS, gS, tS, bS, XS) {
        const xS = (0, GS.j)(SS, HS, gS, tS, bS, XS);
        return this._activeRequests.push(xS), xS.onCompleteObservable.add((() => {
          const SS = this._activeRequests.indexOf(xS); - 1 !== SS && this._activeRequests.splice(SS, 1)
        })), xS
      }
      static _FileToolsLoadFile(SS, HS, gS, tS, bS, XS) {
        if (GS.c.loadFile) return GS.c.loadFile(SS, HS, gS, tS, bS, XS);
        throw (0, aS.l)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), bS.c.ResetCache();
        for (const HS of this._activeRequests) HS.abort();
        this._boundRenderFunction = null, this.bY.notifyObservers(this), this.bY.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, jS.j)() && window.removeEventListener("resize", this._checkForMobile);
        const SS = XS.d.Instances.indexOf(this);
        SS >= 0 && XS.d.Instances.splice(SS, 1), XS.d.Instances.length || (XS.d.OnEnginesDisposedObservable.notifyObservers(this), XS.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(SS) {
        throw (0, aS.l)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(SS, HS) {
        for (let gS = 0; gS < XS.d.Instances.length; gS++) {
          const tS = XS.d.Instances[gS];
          for (let gS = 0; gS < tS.scenes.length; gS++) tS.scenes[gS].markAllMaterialsAsDirty(SS, HS)
        }
      }
      static GetCompatibleTextureLoader(SS, HS) {
        return null
      }
    }
    nS._RenderPassIdCounter = 0, nS._RescalePostProcessFactory = null, nS.CollisionsEpsilon = .001, nS.QueueNewFrame = CS
  },
  39899: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS
    });
    class tS {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? tS.ShadersRepository : tS.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? tS.ShadersStore : tS.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? tS.IncludesShadersStore : tS.IncludesShadersStoreWGSL
      }
    }
    tS.ShadersRepository = "src/Shaders/", tS.ShadersStore = {}, tS.IncludesShadersStore = {}, tS.ShadersRepositoryWGSL = "src/ShadersWGSL/", tS.ShadersStoreWGSL = {}, tS.IncludesShadersStoreWGSL = {}
  },
  39916: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => kS,
      e: () => PS,
      i: () => KS,
      k: () => aS,
      l: () => jS,
      p: () => nS,
      s: () => fS,
      w: () => uS,
      A: () => IS,
      C: () => qS,
      G: () => NS
    });
    class tS {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(SS) {
        SS && this.program && SS(this.program)
      }
      setEngine(SS) {
        this.engine = SS
      }
      _fillEffectInformation(SS, HS, gS, tS, bS, XS, xS, NS) {
        const qS = this.engine;
        if (qS.supportsUniformBuffers)
          for (const IS in HS) SS.bindUniformBlock(IS, HS[IS]);
        let uS;
        for (this.engine.getUniforms(this, gS).forEach(((SS, HS) => {
            tS[gS[HS]] = SS
          })), this._uniforms = tS, uS = 0; uS < bS.length; uS++) {
          null == SS.getUniform(bS[uS]) && (bS.splice(uS, 1), uS--)
        }
        bS.forEach(((SS, HS) => {
          XS[SS] = HS
        }));
        for (const IS of qS.getAttributes(this, xS)) NS.push(IS)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(SS, HS) {
        const gS = this._valueCache[SS],
          tS = HS.updateFlag;
        if (void 0 !== gS && gS === tS) return !1;
        const bS = HS.lgS();
        let XS = this._matrixValueCache[SS];
        if (void 0 !== gS && null !== gS && void 0 !== XS) {
          let HS = !0;
          for (let SS = 15; SS >= 0; SS--)
            if (XS[SS] !== bS[SS]) {
              HS = !1;
              break
            } if (HS) return this._valueCache[SS] = tS, !1
        }
        return void 0 === XS && (XS = this._matrixValueCache[SS] = new Float32Array(16)), XS.set(bS), this._valueCache[SS] = tS, !0
      }
      _cacheFloat2(SS, HS, gS) {
        let tS = this._valueCache[SS];
        if (!tS || 2 !== tS.length) return tS = [HS, gS], this._valueCache[SS] = tS, !0;
        let bS = !1;
        return tS[0] !== HS && (tS[0] = HS, bS = !0), tS[1] !== gS && (tS[1] = gS, bS = !0), bS
      }
      _cacheFloat3(SS, HS, gS, tS) {
        let bS = this._valueCache[SS];
        if (!bS || 3 !== bS.length) return bS = [HS, gS, tS], this._valueCache[SS] = bS, !0;
        let XS = !1;
        return bS[0] !== HS && (bS[0] = HS, XS = !0), bS[1] !== gS && (bS[1] = gS, XS = !0), bS[2] !== tS && (bS[2] = tS, XS = !0), XS
      }
      _cacheFloat4(SS, HS, gS, tS, bS) {
        let XS = this._valueCache[SS];
        if (!XS || 4 !== XS.length) return XS = [HS, gS, tS, bS], this._valueCache[SS] = XS, !0;
        let xS = !1;
        return XS[0] !== HS && (XS[0] = HS, xS = !0), XS[1] !== gS && (XS[1] = gS, xS = !0), XS[2] !== tS && (XS[2] = tS, xS = !0), XS[3] !== bS && (XS[3] = bS, xS = !0), xS
      }
      setInt(SS, HS) {
        const gS = this._valueCache[SS];
        void 0 !== gS && gS === HS || this.engine.setInt(this._uniforms[SS], HS) && (this._valueCache[SS] = HS)
      }
      setInt2(SS, HS, gS) {
        this._cacheFloat2(SS, HS, gS) && (this.engine.setInt2(this._uniforms[SS], HS, gS) || (this._valueCache[SS] = null))
      }
      setInt3(SS, HS, gS, tS) {
        this._cacheFloat3(SS, HS, gS, tS) && (this.engine.setInt3(this._uniforms[SS], HS, gS, tS) || (this._valueCache[SS] = null))
      }
      setInt4(SS, HS, gS, tS, bS) {
        this._cacheFloat4(SS, HS, gS, tS, bS) && (this.engine.setInt4(this._uniforms[SS], HS, gS, tS, bS) || (this._valueCache[SS] = null))
      }
      setIntArray(SS, HS) {
        this._valueCache[SS] = null, this.engine.setIntArray(this._uniforms[SS], HS)
      }
      setIntArray2(SS, HS) {
        this._valueCache[SS] = null, this.engine.setIntArray2(this._uniforms[SS], HS)
      }
      setIntArray3(SS, HS) {
        this._valueCache[SS] = null, this.engine.setIntArray3(this._uniforms[SS], HS)
      }
      setIntArray4(SS, HS) {
        this._valueCache[SS] = null, this.engine.setIntArray4(this._uniforms[SS], HS)
      }
      setUInt(SS, HS) {
        const gS = this._valueCache[SS];
        void 0 !== gS && gS === HS || this.engine.setUInt(this._uniforms[SS], HS) && (this._valueCache[SS] = HS)
      }
      setUInt2(SS, HS, gS) {
        this._cacheFloat2(SS, HS, gS) && (this.engine.setUInt2(this._uniforms[SS], HS, gS) || (this._valueCache[SS] = null))
      }
      setUInt3(SS, HS, gS, tS) {
        this._cacheFloat3(SS, HS, gS, tS) && (this.engine.setUInt3(this._uniforms[SS], HS, gS, tS) || (this._valueCache[SS] = null))
      }
      setUInt4(SS, HS, gS, tS, bS) {
        this._cacheFloat4(SS, HS, gS, tS, bS) && (this.engine.setUInt4(this._uniforms[SS], HS, gS, tS, bS) || (this._valueCache[SS] = null))
      }
      setUIntArray(SS, HS) {
        this._valueCache[SS] = null, this.engine.setUIntArray(this._uniforms[SS], HS)
      }
      setUIntArray2(SS, HS) {
        this._valueCache[SS] = null, this.engine.setUIntArray2(this._uniforms[SS], HS)
      }
      setUIntArray3(SS, HS) {
        this._valueCache[SS] = null, this.engine.setUIntArray3(this._uniforms[SS], HS)
      }
      setUIntArray4(SS, HS) {
        this._valueCache[SS] = null, this.engine.setUIntArray4(this._uniforms[SS], HS)
      }
      setArray(SS, HS) {
        this._valueCache[SS] = null, this.engine.setArray(this._uniforms[SS], HS)
      }
      setArray2(SS, HS) {
        this._valueCache[SS] = null, this.engine.setArray2(this._uniforms[SS], HS)
      }
      setArray3(SS, HS) {
        this._valueCache[SS] = null, this.engine.setArray3(this._uniforms[SS], HS)
      }
      setArray4(SS, HS) {
        this._valueCache[SS] = null, this.engine.setArray4(this._uniforms[SS], HS)
      }
      setMatrices(SS, HS) {
        HS && (this._valueCache[SS] = null, this.engine.setMatrices(this._uniforms[SS], HS))
      }
      setMatrix(SS, HS) {
        this._cacheMatrix(SS, HS) && (this.engine.setMatrices(this._uniforms[SS], HS.lgS()) || (this._valueCache[SS] = null))
      }
      setMatrix3x3(SS, HS) {
        this._valueCache[SS] = null, this.engine.setMatrix3x3(this._uniforms[SS], HS)
      }
      setMatrix2x2(SS, HS) {
        this._valueCache[SS] = null, this.engine.setMatrix2x2(this._uniforms[SS], HS)
      }
      setFloat(SS, HS) {
        const gS = this._valueCache[SS];
        void 0 !== gS && gS === HS || this.engine.setFloat(this._uniforms[SS], HS) && (this._valueCache[SS] = HS)
      }
      setVector2(SS, HS) {
        this._cacheFloat2(SS, HS.x, HS.y) && (this.engine.setFloat2(this._uniforms[SS], HS.x, HS.y) || (this._valueCache[SS] = null))
      }
      setFloat2(SS, HS, gS) {
        this._cacheFloat2(SS, HS, gS) && (this.engine.setFloat2(this._uniforms[SS], HS, gS) || (this._valueCache[SS] = null))
      }
      setVector3(SS, HS) {
        this._cacheFloat3(SS, HS.x, HS.y, HS.z) && (this.engine.setFloat3(this._uniforms[SS], HS.x, HS.y, HS.z) || (this._valueCache[SS] = null))
      }
      setFloat3(SS, HS, gS, tS) {
        this._cacheFloat3(SS, HS, gS, tS) && (this.engine.setFloat3(this._uniforms[SS], HS, gS, tS) || (this._valueCache[SS] = null))
      }
      setVector4(SS, HS) {
        this._cacheFloat4(SS, HS.x, HS.y, HS.z, HS.w) && (this.engine.setFloat4(this._uniforms[SS], HS.x, HS.y, HS.z, HS.w) || (this._valueCache[SS] = null))
      }
      setQuaternion(SS, HS) {
        this._cacheFloat4(SS, HS.x, HS.y, HS.z, HS.w) && (this.engine.setFloat4(this._uniforms[SS], HS.x, HS.y, HS.z, HS.w) || (this._valueCache[SS] = null))
      }
      setFloat4(SS, HS, gS, tS, bS) {
        this._cacheFloat4(SS, HS, gS, tS, bS) && (this.engine.setFloat4(this._uniforms[SS], HS, gS, tS, bS) || (this._valueCache[SS] = null))
      }
      setColor3(SS, HS) {
        this._cacheFloat3(SS, HS.r, HS.g, HS.b) && (this.engine.setFloat3(this._uniforms[SS], HS.r, HS.g, HS.b) || (this._valueCache[SS] = null))
      }
      setColor4(SS, HS, gS) {
        this._cacheFloat4(SS, HS.r, HS.g, HS.b, gS) && (this.engine.setFloat4(this._uniforms[SS], HS.r, HS.g, HS.b, gS) || (this._valueCache[SS] = null))
      }
      setDirectColor4(SS, HS) {
        this._cacheFloat4(SS, HS.r, HS.g, HS.b, HS.a) && (this.engine.setFloat4(this._uniforms[SS], HS.r, HS.g, HS.b, HS.a) || (this._valueCache[SS] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var bS = gS(39922);
    const XS = new WeakMap,
      xS = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function NS(SS) {
      let HS = XS.get(SS);
      if (!HS) {
        if (!SS) return xS;
        HS = {
          _webGLVersion: SS.TEXTURE_BINDING_3D ? 2 : 1,
          _context: SS,
          parallelShaderCompile: SS.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, XS.set(SS, HS)
      }
      return HS
    }

    function qS(SS) {
      XS.delete(SS)
    }

    function uS(SS, HS, gS, tS, bS, XS) {
      const xS = NS(tS);
      XS || (XS = xS._createShaderProgramInjection ?? kS);
      return XS(SS, CS(HS, "vertex", tS, xS._contextWasLost), CS(gS, "fragment", tS, xS._contextWasLost), tS, bS, xS.validateShaderPrograms)
    }

    function IS(SS, HS, gS, tS, bS) {
      let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        xS = arguments.length > 6 ? arguments[6] : void 0;
      const qS = NS(bS);
      xS || (xS = qS._createShaderProgramInjection ?? kS);
      const uS = qS._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return xS(SS, GS(HS, "vertex", tS, uS, bS, qS._contextWasLost), GS(gS, "fragment", tS, uS, bS, qS._contextWasLost), bS, XS, qS.validateShaderPrograms)
    }

    function fS(SS, HS) {
      const gS = new tS,
        bS = NS(SS);
      return bS.parallelShaderCompile && !bS.disableParallelShaderCompile && (gS.isParallelCompiled = !0), gS.context = bS._context, gS
    }

    function kS(SS, HS, gS, tS) {
      let bS = arguments.length > 5 ? arguments[5] : void 0;
      const XS = tS.createProgram();
      if (SS.program = XS, !XS) throw new Error("Unable to create program");
      return tS.attachShader(XS, HS), tS.attachShader(XS, gS), tS.linkProgram(XS), SS.context = tS, SS.vertexShader = HS, SS.fragmentShader = gS, SS.isParallelCompiled || KS(SS, tS, bS), XS
    }

    function aS(SS, HS, gS) {
      const tS = SS;
      if (tS._isDisposed) return !1;
      const bS = NS(HS);
      return !!(bS && bS.parallelShaderCompile && bS.parallelShaderCompile.COMPLETION_STATUS_KHR && tS.program && HS.getProgramParameter(tS.program, bS.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (KS(tS, HS, gS), !0)
    }

    function KS(SS, HS, gS) {
      const tS = SS.context,
        bS = SS.vertexShader,
        XS = SS.fragmentShader,
        xS = SS.program;
      if (!tS.getProgramParameter(xS, tS.LINK_STATUS)) {
        if (!HS.getShaderParameter(bS, HS.COMPILE_STATUS)) {
          const gS = HS.getShaderInfoLog(bS);
          if (gS) throw SS.vertexCompilationError = gS, new Error("VERTEX SHADER " + gS)
        }
        if (!HS.getShaderParameter(XS, HS.COMPILE_STATUS)) {
          const gS = HS.getShaderInfoLog(XS);
          if (gS) throw SS.fragmentCompilationError = gS, new Error("FRAGMENT SHADER " + gS)
        }
        const gS = tS.getProgramInfoLog(xS);
        if (gS) throw SS.programLinkError = gS, new Error(gS)
      }
      if (gS) {
        tS.validateProgram(xS);
        if (!tS.getProgramParameter(xS, tS.VALIDATE_STATUS)) {
          const HS = tS.getProgramInfoLog(xS);
          if (HS) throw SS.programValidationError = HS, new Error(HS)
        }
      }
      tS.deleteShader(bS), tS.deleteShader(XS), SS.vertexShader = void 0, SS.fragmentShader = void 0, SS.onCompiled && (SS.onCompiled(), SS.onCompiled = void 0)
    }

    function jS(SS, HS, gS, tS, bS, XS, xS, qS, fS) {
      let kS = arguments.length > 10 ? arguments[10] : void 0,
        aS = arguments.length > 11 ? arguments[11] : void 0,
        KS = arguments.length > 12 ? arguments[12] : void 0;
      const jS = NS(SS.context);
      aS || (aS = jS.createRawShaderProgramInjection ?? uS), KS || (KS = jS.createShaderProgramInjection ?? IS);
      const GS = SS;
      GS.program = tS ? aS(GS, HS, gS, GS.context, fS) : KS(GS, HS, gS, qS, GS.context, fS), GS.program.__SPECTOR_rebuildProgram = xS, kS()
    }

    function GS(SS, HS, gS, tS, XS, xS) {
      return CS((0, bS.e)(SS, gS, tS), HS, XS, xS)
    }

    function CS(SS, HS, gS, tS) {
      const bS = gS.createShader("vertex" === HS ? gS.VERTEX_SHADER : gS.FRAGMENT_SHADER);
      if (!bS) {
        let SS, bS = gS.NO_ERROR;
        for (;
          (SS = gS.getError()) !== gS.NO_ERROR;) bS = SS;
        throw new Error(`Something went wrong while creating a gl ${HS} shader object. gl error=${bS}, gl isContextLost=${gS.isContextLost()}, _contextWasLost=${tS}`)
      }
      return gS.shaderSource(bS, SS), gS.compileShader(bS), bS
    }

    function nS(SS, HS) {
      HS.useProgram(SS)
    }

    function PS(SS, HS) {
      const gS = SS;
      if (!gS.isParallelCompiled) return void HS(SS);
      const tS = gS.onCompiled;
      gS.onCompiled = () => {
        tS?.(), HS(SS)
      }
    }
  },
  39888: (SS, HS, gS) => {
    gS.d(HS, {
      ThinEngine: () => DS
    });
    var tS = gS(39890),
      bS = gS(39916),
      XS = gS(39939),
      xS = gS(39950),
      NS = gS(38687),
      qS = gS(39913);
    class uS {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(SS, HS, gS, tS, bS) {
        if (bS.drawBuffersExtensionDisabled) {
          const HS = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          SS = SS.replace(HS, "")
        }
        return SS
      }
    }
    const IS = /(flat\s)?\s*varying\s*.*/;
    class fS {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(SS) {
        return SS.replace("attribute", "in")
      }
      varyingCheck(SS, HS) {
        return IS.test(SS)
      }
      varyingProcessor(SS, HS) {
        return SS.replace("varying", HS ? "in" : "out")
      }
      postProcessor(SS, HS, gS) {
        const tS = -1 !== SS.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (SS = (SS = SS.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), gS) {
          const gS = -1 !== SS.search(/layout *\(location *= *0\) *out/g),
            bS = -1 !== HS.indexOf("#define DUAL_SOURCE_BLENDING"),
            XS = bS ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          bS && (SS = "#extension GL_EXT_blend_func_extended : require\n" + SS), SS = (SS = (SS = (SS = (SS = (SS = (SS = SS.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (tS || gS ? "" : XS) + "void main(")
        } else {
          HS.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (SS = "invariant gl_Position;\n" + SS);
          if (-1 !== HS.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + SS
        }
        return SS
      }
    }
    var kS = gS(39956),
      aS = gS(39968),
      KS = gS(39975),
      jS = gS(39877),
      GS = gS(39922),
      CS = gS(39906),
      nS = gS(39978),
      PS = gS(39948);
    class QS {}
    class DS extends XS.b {
      get name() {
        return this._name
      }
      set name(SS) {
        this._name = SS
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return tS.c.ShadersRepository
      }
      static set ShadersRepository(SS) {
        tS.c.ShadersRepository = SS
      }
      get supportsUniformBuffers() {
        return this.uj > 1 && !this.disableUniformBuffers
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
      constructor(SS, HS, gS, tS) {
        if (gS = gS || {}, super(HS ?? gS.antialias, gS, tS), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !SS) return;
        let XS;
        if (SS.getContext) {
          if (XS = SS, void 0 === gS.preserveDrawingBuffer && (gS.preserveDrawingBuffer = !1), void 0 === gS.xrCompatible && (gS.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const SS = navigator.userAgent;
            for (const HS of DS.ExceptionList) {
              const tS = HS.key,
                bS = HS.targets;
              if (new RegExp(tS).test(SS)) {
                if (HS.capture && HS.captureConstraint) {
                  const gS = HS.capture,
                    tS = HS.captureConstraint,
                    bS = new RegExp(gS).exec(SS);
                  if (bS && bS.length > 0) {
                    if (parseInt(bS[bS.length - 1]) >= tS) continue
                  }
                }
                for (const SS of bS) switch (SS) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    gS.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, bS.C)(this._gl)
            } : (this._onContextLost = SS => {
              SS.preventDefault(), this._contextWasLost = !0, (0, bS.C)(this._gl), NS.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, XS.addEventListener("webglcontextrestored", this._onContextRestored, !1), gS.powerPreference = gS.powerPreference || "high-performance"), XS.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (gS.xrCompatible = !1), !gS.disableWebGL2Support) try {
            this._gl = XS.getContext("webgl2", gS) || XS.getContext("experimental-webgl2", gS), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (IS) {}
          if (!this._gl) {
            if (!XS) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = XS.getContext("webgl", gS) || XS.getContext("experimental-webgl", gS)
            } catch (IS) {
              throw new Error("WebGL not supported", {
                cause: IS
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = SS, XS = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const HS = this._gl.getContextAttributes();
          HS && (gS.stencil = HS.stencil)
        }
        this._sharedInit(XS), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== gS.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = gS.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let bS = 0; bS < this._caps.maxVertexAttribs; bS++) this._currentBufferPointers[bS] = new QS;
        this._shaderProcessor = this.uj > 1 ? new fS : new uS;
        const xS = `Babylon.js v${DS.Version}`;
        NS.b.Log(xS + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", xS);
        const qS = (0, bS.G)(this._gl);
        qS.validateShaderPrograms = this.validateShaderPrograms, qS.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(SS) {
        return null
      }
      areAllEffectsReady() {
        for (const SS in this._compiledEffects) {
          if (!this._compiledEffects[SS].isReady()) return !1
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
        const SS = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != SS && (this._glRenderer = this._gl.getParameter(SS.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(SS.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const HS = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!HS, this._alphaState = new PS.c(this._caps.blendParametersPerTarget), HS && (this._gl.blendEquationSeparateIndexed = HS.blendEquationSeparateiOES.bind(HS), this._gl.blendEquationIndexed = HS.blendEquationiOES.bind(HS), this._gl.blendFuncSeparateIndexed = HS.blendFuncSeparateiOES.bind(HS), this._gl.blendFuncIndexed = HS.blendFunciOES.bind(HS), this._gl.colorMaskIndexed = HS.colorMaskiOES.bind(HS), this._gl.disableIndexed = HS.disableiOES.bind(HS), this._gl.enableIndexed = HS.enableiOES.bind(HS)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const SS = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== SS) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = SS.drawBuffersWEBGL.bind(SS), this._caps.maxDrawBuffers = this._gl.getParameter(SS.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let HS = 0; HS < 16; HS++) this._gl["COLOR_ATTACHMENT" + HS + "_WEBGL"] = SS["COLOR_ATTACHMENT" + HS + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const SS = this._gl.getExtension("WEBGL_depth_texture");
          null != SS && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = SS.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const SS = this._gl.getExtension("OES_vertex_array_object");
          null != SS && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = SS.createVertexArrayOES.bind(SS), this._gl.bindVertexArray = SS.bindVertexArrayOES.bind(SS), this._gl.deleteVertexArray = SS.deleteVertexArrayOES.bind(SS))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const SS = this._gl.getExtension("ANGLE_instanced_arrays");
          null != SS ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = SS.drawArraysInstancedANGLE.bind(SS), this._gl.drawElementsInstanced = SS.drawElementsInstancedANGLE.bind(SS), this._gl.vertexAttribDivisor = SS.vertexAttribDivisorANGLE.bind(SS)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const SS = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            HS = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (SS && HS && (this._caps.highPrecisionShaderSupported = 0 !== SS.precision && 0 !== HS.precision, this._caps.shaderFloatPrecision = Math.min(SS.precision, HS.precision)), !this._shouldUseHighPrecisionShader) {
            const SS = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              HS = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            SS && HS && (this._caps.shaderFloatPrecision = Math.min(SS.precision, HS.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const SS = this._gl.getExtension("EXT_blend_minmax");
          null != SS && (this._caps.blendMinMax = !0, this._gl.MAX = SS.MAX_EXT, this._gl.MIN = SS.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const SS = this._gl.getExtension("EXT_sRGB");
            null != SS && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: SS.SRGB_EXT,
              SRGB8: SS.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: SS.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const SS = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== SS && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && SS)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let gS = 0; gS < this._maxSimultaneousTextures; gS++) this._nextFreeTextureSlots.push(gS);
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
      get uj() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const SS = this._workingCanvas.getContext("2d");
        SS && (this._workingContext = SS)
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
        const SS = this.getGlInfo();
        return SS && SS.renderer ? SS.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const XS = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = XS;
        let xS = 0;
        if (HS && SS) {
          let HS = !0;
          if (this._currentRenderTarget) {
            const gS = this._currentRenderTarget.texture?.format;
            if (void 0 !== gS && (0, nS.g)(gS)) {
              const gS = this._currentRenderTarget.texture?.type;
              void 0 !== gS && (0, nS.j)(gS) ? (DS._TempClearColorUint32[0] = 255 * SS.r, DS._TempClearColorUint32[1] = 255 * SS.g, DS._TempClearColorUint32[2] = 255 * SS.b, DS._TempClearColorUint32[3] = 255 * SS.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, DS._TempClearColorUint32), HS = !1) : (DS._TempClearColorInt32[0] = 255 * SS.r, DS._TempClearColorInt32[1] = 255 * SS.g, DS._TempClearColorInt32[2] = 255 * SS.b, DS._TempClearColorInt32[3] = 255 * SS.a, this._gl.clearBufferiv(this._gl.COLOR, 0, DS._TempClearColorInt32), HS = !1)
            }
          }
          HS && (this._gl.clearColor(SS.r, SS.g, SS.b, void 0 !== SS.a ? SS.a : 1), xS |= this._gl.COLOR_BUFFER_BIT)
        }
        gS && (this.RgS ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), xS |= this._gl.DEPTH_BUFFER_BIT), tS && (this._gl.clearStencil(bS), xS |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(xS)
      }
      _clearColorAttachment(SS, HS, gS, tS) {
        if ((0, nS.g)(gS)) {
          const gS = (0, nS.j)(tS),
            bS = gS ? DS._TempClearColorUint32 : DS._TempClearColorInt32;
          return bS[0] = HS.r, bS[1] = HS.g, bS[2] = HS.b, bS[3] = HS.a, void(gS ? this._gl.clearBufferuiv(this._gl.COLOR, SS, bS) : this._gl.clearBufferiv(this._gl.COLOR, SS, bS))
        }
        DS._TempClearColorFloat32[0] = HS.r, DS._TempClearColorFloat32[1] = HS.g, DS._TempClearColorFloat32[2] = HS.b, DS._TempClearColorFloat32[3] = HS.a, this._gl.clearBufferfv(this._gl.COLOR, SS, DS._TempClearColorFloat32)
      }
      _viewport(SS, HS, gS, tS) {
        SS === this._viewportCached.x && HS === this._viewportCached.y && gS === this._viewportCached.z && tS === this._viewportCached.w || (this._viewportCached.x = SS, this._viewportCached.y = HS, this._viewportCached.z = gS, this._viewportCached.w = tS, this._gl.viewport(SS, HS, gS, tS))
      }
      uD() {
        super.uD(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 ? arguments[2] : void 0,
          tS = arguments.length > 3 ? arguments[3] : void 0,
          bS = arguments.length > 4 ? arguments[4] : void 0,
          XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          xS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const qS = SS;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = SS, this._integerMRTAttachmentsMask = !SS.isMulti && SS.texture && (0, nS.g)(SS.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(qS._framebuffer);
        const uS = this._gl;
        SS.isMulti || (SS.is2DArray || SS.is3D ? (uS.framebufferTextureLayer(uS.FRAMEBUFFER, uS.COLOR_ATTACHMENT0, SS.texture._hardwareTexture?.underlyingResource, XS, xS), qS._currentLOD = XS) : SS.isCube ? uS.framebufferTexture2D(uS.FRAMEBUFFER, uS.COLOR_ATTACHMENT0, uS.TEXTURE_CUBE_MAP_POSITIVE_X + HS, SS.texture._hardwareTexture?.underlyingResource, XS) : qS._currentLOD !== XS && (uS.framebufferTexture2D(uS.FRAMEBUFFER, uS.COLOR_ATTACHMENT0, uS.TEXTURE_2D, SS.texture._hardwareTexture?.underlyingResource, XS), qS._currentLOD = XS));
        const IS = SS._depthStencilTexture;
        if (IS) {
          SS.is3D && (SS.texture.width === IS.width && SS.texture.height === IS.height && SS.texture.depth === IS.depth || NS.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const gS = SS._depthStencilTextureWithStencil ? uS.DEPTH_STENCIL_ATTACHMENT : uS.DEPTH_ATTACHMENT;
          SS.is2DArray || SS.is3D ? uS.framebufferTextureLayer(uS.FRAMEBUFFER, gS, IS._hardwareTexture?.underlyingResource, XS, xS) : SS.isCube ? uS.framebufferTexture2D(uS.FRAMEBUFFER, gS, uS.TEXTURE_CUBE_MAP_POSITIVE_X + HS, IS._hardwareTexture?.underlyingResource, XS) : uS.framebufferTexture2D(uS.FRAMEBUFFER, gS, uS.TEXTURE_2D, IS._hardwareTexture?.underlyingResource, XS)
        }
        qS._MSAAFramebuffer && this._bindUnboundFramebuffer(qS._MSAAFramebuffer), this._cachedViewport && !bS ? this.setViewport(this._cachedViewport, gS, tS) : (gS || (gS = SS.width, XS && (gS /= Math.pow(2, XS))), tS || (tS = SS.height, XS && (tS /= Math.pow(2, XS))), this._viewport(0, 0, gS, tS)), this.wipeCaches()
      }
      setStateCullFaceType(SS, HS) {
        const gS = this.cullBackFaces ?? SS ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== gS || HS) && (this._depthCullingState.cullFace = gS)
      }
      setState(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 ? arguments[2] : void 0,
          tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          bS = arguments.length > 4 ? arguments[4] : void 0,
          XS = arguments.length > 5 ? arguments[5] : void 0,
          xS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== SS || gS) && (this._depthCullingState.cull = SS), this.setStateCullFaceType(bS, gS), this.setZOffset(HS), this.setZOffsetUnits(xS);
        const NS = tS ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== NS || gS) && (this._depthCullingState.frontFace = NS), this._stencilStateComposer.stencilMaterial = XS
      }
      _resolveAndGenerateMipMapsFramebuffer(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        SS.disableAutomaticMSAAResolve || (SS.isMulti ? this.resolveMultiFramebuffer(SS) : this.resolveFramebuffer(SS)), HS || (SS.isMulti ? this.generateMipMapsMultiFramebuffer(SS) : this.generateMipMapsFramebuffer(SS))
      }
      _bindUnboundFramebuffer(SS) {
        this._currentFramebuffer !== SS && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, SS), this._currentFramebuffer = SS)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(SS) {
        const HS = this._getTextureTarget(SS);
        this._bindTextureDirectly(HS, SS, !0), this._gl.generateMipmap(HS), this._bindTextureDirectly(HS, null)
      }
      unBindFramebuffer(SS, HS, gS) {
        const tS = SS;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(SS, HS), gS && (tS._MSAAFramebuffer && this._bindUnboundFramebuffer(tS._framebuffer), gS()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(SS) {
        SS.isMulti || !SS.texture?.generateMipMaps || SS.isCube || this.generateMipmaps(SS.texture)
      }
      resolveFramebuffer(SS) {
        const HS = SS,
          gS = this._gl;
        if (!HS._MSAAFramebuffer || HS.isMulti) return;
        let tS = HS.resolveMSAAColors ? gS.COLOR_BUFFER_BIT : 0;
        tS |= HS._generateDepthBuffer && HS.resolveMSAADepth ? gS.DEPTH_BUFFER_BIT : 0, tS |= HS._generateStencilBuffer && HS.resolveMSAAStencil ? gS.STENCIL_BUFFER_BIT : 0, gS.bindFramebuffer(gS.READ_FRAMEBUFFER, HS._MSAAFramebuffer), gS.bindFramebuffer(gS.DRAW_FRAMEBUFFER, HS._framebuffer), gS.blitFramebuffer(0, 0, SS.width, SS.height, 0, 0, SS.width, SS.height, tS, gS.NEAREST)
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
      createVertexBuffer(SS, HS, gS) {
        return this._createVertexBuffer(SS, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(SS, HS) {
        const gS = this._gl.createBuffer();
        if (!gS) throw new Error("Unable to create vertex buffer");
        const tS = new kS.c(gS);
        return this.bindArrayBuffer(tS), "number" !== typeof SS ? SS instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(SS), HS), tS.hf = 4 * SS.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, SS, HS), tS.hf = SS.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(SS), HS), tS.hf = SS), this._resetVertexBufferBinding(), tS.references = 1, tS
      }
      createDynamicVertexBuffer(SS, HS) {
        return this._createVertexBuffer(SS, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(SS, HS, gS) {
        const tS = this._gl.createBuffer(),
          bS = new kS.c(tS);
        if (!tS) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(bS);
        const XS = this._normalizeIndexData(SS);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, XS, HS ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), bS.references = 1, bS.is32Bits = 4 === XS.BYTES_PER_ELEMENT, bS
      }
      _normalizeIndexData(SS) {
        if (2 === SS.BYTES_PER_ELEMENT) return SS;
        if (this._caps.uintIndices) {
          if (SS instanceof Uint32Array) return SS;
          for (let HS = 0; HS < SS.length; HS++)
            if (SS[HS] >= 65535) return new Uint32Array(SS);
          return new Uint16Array(SS)
        }
        return new Uint16Array(SS)
      }
      bindArrayBuffer(SS) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(SS, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(SS, HS, gS) {
        const tS = SS.program,
          bS = this._gl.getUniformBlockIndex(tS, HS);
        this._gl.uniformBlockBinding(tS, bS, gS)
      }
      bindIndexBuffer(SS) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(SS, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(SS, HS) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[HS] !== SS) && (this._gl.bindBuffer(HS, SS ? SS.underlyingResource : null), this._currentBoundBuffer[HS] = SS)
      }
      updateArrayBuffer(SS) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, SS)
      }
      _vertexAttribPointer(SS, HS, gS, tS, bS, XS, xS) {
        const NS = this._currentBufferPointers[HS];
        if (!NS) return;
        let qS = !1;
        NS.active ? (NS.buffer !== SS && (NS.buffer = SS, qS = !0), NS.size !== gS && (NS.size = gS, qS = !0), NS.type !== tS && (NS.type = tS, qS = !0), NS.normalized !== bS && (NS.normalized = bS, qS = !0), NS.stride !== XS && (NS.stride = XS, qS = !0), NS.offset !== xS && (NS.offset = xS, qS = !0)) : (qS = !0, NS.active = !0, NS.index = HS, NS.size = gS, NS.type = tS, NS.normalized = bS, NS.stride = XS, NS.offset = xS, NS.buffer = SS), (qS || this._vaoRecordInProgress) && (this.bindArrayBuffer(SS), tS === this._gl.UNSIGNED_INT || tS === this._gl.INT ? this._gl.vertexAttribIPointer(HS, gS, tS, XS, xS) : this._gl.vertexAttribPointer(HS, gS, tS, bS, XS, xS))
      }
      _bindIndexBufferWithCache(SS) {
        null != SS && this._cachedIndexBuffer !== SS && (this._cachedIndexBuffer = SS, this.bindIndexBuffer(SS), this._uintIndicesCurrentlySet = SS.is32Bits)
      }
      _bindVertexBuffersAttributes(SS, HS, gS) {
        const tS = HS.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let bS = 0; bS < tS.length; bS++) {
          const XS = HS.getAttributeLocation(bS);
          if (XS >= 0) {
            const HS = tS[bS];
            let xS = null;
            if (gS && (xS = gS[HS]), xS || (xS = SS[HS]), !xS) continue;
            this._gl.enableVertexAttribArray(XS), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[XS] = !0);
            const NS = xS.getBuffer();
            NS && (this._vertexAttribPointer(NS, XS, xS.getSize(), xS.type, xS.normalized, xS.byteStride, xS.byteOffset), xS.getIsInstanced() && (this._gl.vertexAttribDivisor(XS, xS.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(XS), this._currentInstanceBuffers.push(NS))))
          }
        }
      }
      recordVertexArrayObject(SS, HS, gS, tS) {
        const bS = this._gl.createVertexArray();
        if (!bS) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(bS), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(SS, gS, tS), this.bindIndexBuffer(HS), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), bS
      }
      bindVertexArrayObject(SS, HS) {
        this._cachedVertexArrayObject !== SS && (this._cachedVertexArrayObject = SS, this._gl.bindVertexArray(SS), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != HS && HS.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(SS, HS, gS, tS, bS) {
        if (this._cachedVertexBuffers !== SS || this._cachedEffectForVertexBuffers !== bS) {
          this._cachedVertexBuffers = SS, this._cachedEffectForVertexBuffers = bS;
          const HS = bS.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let XS = 0;
          for (let xS = 0; xS < HS; xS++)
            if (xS < gS.length) {
              const HS = bS.getAttributeLocation(xS);
              HS >= 0 && (this._gl.enableVertexAttribArray(HS), this._vertexAttribArraysEnabled[HS] = !0, this._vertexAttribPointer(SS, HS, gS[xS], this._gl.FLOAT, !1, tS, XS)), XS += 4 * gS[xS]
            }
        }
        this._bindIndexBufferWithCache(HS)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(SS, HS, gS, tS) {
        this._cachedVertexBuffers === SS && this._cachedEffectForVertexBuffers === gS || (this._cachedVertexBuffers = SS, this._cachedEffectForVertexBuffers = gS, this._bindVertexBuffersAttributes(SS, gS, tS)), this._bindIndexBufferWithCache(HS)
      }
      unbindInstanceAttributes() {
        let SS;
        for (let HS = 0, gS = this._currentInstanceLocations.length; HS < gS; HS++) {
          const gS = this._currentInstanceBuffers[HS];
          SS != gS && gS.references && (SS = gS, this.bindArrayBuffer(gS));
          const tS = this._currentInstanceLocations[HS];
          this._gl.vertexAttribDivisor(tS, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(SS) {
        this._gl.deleteVertexArray(SS)
      }
      _releaseBuffer(SS) {
        return SS.references--, 0 === SS.references && (this._deleteBuffer(SS), !0)
      }
      _deleteBuffer(SS) {
        this._gl.deleteBuffer(SS.underlyingResource)
      }
      updateAndBindInstancesBuffer(SS, HS, gS) {
        if (this.bindArrayBuffer(SS), HS && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, HS), void 0 !== gS[0].index) this.bindInstancesBuffer(SS, gS, !0);
        else
          for (let tS = 0; tS < 4; tS++) {
            const HS = gS[tS];
            this._vertexAttribArraysEnabled[HS] || (this._gl.enableVertexAttribArray(HS), this._vertexAttribArraysEnabled[HS] = !0), this._vertexAttribPointer(SS, HS, 4, this._gl.FLOAT, !1, 64, 16 * tS), this._gl.vertexAttribDivisor(HS, 1), this._currentInstanceLocations.push(HS), this._currentInstanceBuffers.push(SS)
          }
      }
      bindInstancesBuffer(SS, HS) {
        let gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(SS);
        let tS = 0;
        if (gS)
          for (let bS = 0; bS < HS.length; bS++) {
            tS += 4 * HS[bS].attributeSize
          }
        for (let bS = 0; bS < HS.length; bS++) {
          const gS = HS[bS];
          void 0 === gS.index && (gS.index = this._currentEffect.getAttributeLocationByName(gS.attributeName)), gS.index < 0 || (this._vertexAttribArraysEnabled[gS.index] || (this._gl.enableVertexAttribArray(gS.index), this._vertexAttribArraysEnabled[gS.index] = !0), this._vertexAttribPointer(SS, gS.index, gS.attributeSize, gS.attributeType || this._gl.FLOAT, gS.normalized || !1, tS, gS.offset), this._gl.vertexAttribDivisor(gS.index, void 0 === gS.divisor ? 1 : gS.divisor), this._currentInstanceLocations.push(gS.index), this._currentInstanceBuffers.push(SS))
        }
      }
      disableInstanceAttributeByName(SS) {
        if (!this._currentEffect) return;
        const HS = this._currentEffect.getAttributeLocationByName(SS);
        this.disableInstanceAttribute(HS)
      }
      disableInstanceAttribute(SS) {
        let HS, gS = !1;
        for (; - 1 !== (HS = this._currentInstanceLocations.indexOf(SS));) this._currentInstanceLocations.splice(HS, 1), this._currentInstanceBuffers.splice(HS, 1), gS = !0;
        gS && (this._gl.vertexAttribDivisor(SS, 0), this.disableAttributeByIndex(SS))
      }
      disableAttributeByIndex(SS) {
        this._gl.disableVertexAttribArray(SS), this._vertexAttribArraysEnabled[SS] = !1, this._currentBufferPointers[SS].active = !1
      }
      draw(SS, HS, gS, tS) {
        this.drawElementsType(SS ? 0 : 1, HS, gS, tS)
      }
      drawPointClouds(SS, HS, gS) {
        this.drawArraysType(2, SS, HS, gS)
      }
      drawUnIndexed(SS, HS, gS, tS) {
        this.drawArraysType(SS ? 0 : 1, HS, gS, tS)
      }
      drawElementsType(SS, HS, gS, tS) {
        this.applyStates(), this._reportDrawCall();
        const bS = this._drawMode(SS),
          XS = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          xS = this._uintIndicesCurrentlySet ? 4 : 2;
        tS ? this._gl.drawElementsInstanced(bS, gS, XS, HS * xS, tS) : this._gl.drawElements(bS, gS, XS, HS * xS)
      }
      drawArraysType(SS, HS, gS, tS) {
        this.applyStates(), this._reportDrawCall();
        const bS = this._drawMode(SS);
        tS ? this._gl.drawArraysInstanced(bS, HS, gS, tS) : this._gl.drawArrays(bS, HS, gS)
      }
      _drawMode(SS) {
        switch (SS) {
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
      _releaseEffect(SS) {
        this._compiledEffects[SS._key] && delete this._compiledEffects[SS._key];
        const HS = SS.getPipelineContext();
        HS && this._deletePipelineContext(HS)
      }
      _deletePipelineContext(SS) {
        const HS = SS;
        HS && HS.program && (HS.program.__SPECTOR_rebuildProgram = null, (0, CS.k)(HS), this._gl && (this._currentProgram === HS.program && this._setProgram(null), this._gl.deleteProgram(HS.program)))
      }
      _getGlobalDefines(SS) {
        return (0, GS.g)(SS, this.isNDCHalfZRange, this.RgS, this.useExactSrgbConversions)
      }
      createEffect(SS, HS, gS, XS, xS, NS, qS, uS, IS) {
        let fS = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          kS = arguments.length > 10 ? arguments[10] : void 0;
        const aS = "string" === typeof SS ? SS : SS.vertexToken || SS.vertexSource || SS.vertexElement || SS.vertex,
          KS = "string" === typeof SS ? SS : SS.fragmentToken || SS.fragmentSource || SS.fragmentElement || SS.fragment,
          jS = this._getGlobalDefines(),
          GS = void 0 !== HS.attributes;
        let CS = xS ?? HS.defines ?? "";
        jS && (CS += jS);
        const nS = aS + "+" + KS + "@" + CS;
        if (this._compiledEffects[nS]) {
          const SS = this._compiledEffects[nS];
          return qS && SS.isReady() && qS(SS), SS._refCount++, SS
        }
        this._gl && (0, bS.G)(this._gl);
        const PS = new tS.c(SS, HS, GS ? this : gS, XS, this, xS, NS, qS, uS, IS, nS, HS.shaderLanguage ?? fS, HS.extraInitializationsAsync ?? kS);
        return this._compiledEffects[nS] = PS, PS
      }
      _getShaderSource(SS) {
        return this._gl.getShaderSource(SS)
      }
      createRawShaderProgram(SS, HS, gS, tS) {
        let XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const xS = (0, bS.G)(this._gl);
        return xS._contextWasLost = this._contextWasLost, xS.validateShaderPrograms = this.validateShaderPrograms, (0, bS.w)(SS, HS, gS, tS || this._gl, XS)
      }
      createShaderProgram(SS, HS, gS, tS, XS) {
        let xS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const NS = (0, bS.G)(this._gl);
        return NS._contextWasLost = this._contextWasLost, NS.validateShaderPrograms = this.validateShaderPrograms, (0, bS.A)(SS, HS, gS, tS, XS || this._gl, xS)
      }
      inlineShaderCode(SS) {
        return SS
      }
      createPipelineContext(SS) {
        if (this._gl) {
          (0, bS.G)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const HS = (0, bS.s)(this._gl, SS);
        return HS.engine = this, HS
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(SS) {
        return (0, bS.i)(SS, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(SS, HS, gS, tS, XS, xS, NS, qS, uS, IS, fS) {
        const kS = (0, bS.G)(this._gl);
        return kS._contextWasLost = this._contextWasLost, kS.validateShaderPrograms = this.validateShaderPrograms, kS._createShaderProgramInjection = this._createShaderProgram.bind(this), kS.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), kS.createShaderProgramInjection = this.createShaderProgram.bind(this), kS.loadFileInjection = this._loadFile.bind(this), (0, bS.l)(SS, HS, gS, tS, XS, xS, NS, qS, uS, IS, fS)
      }
      _createShaderProgram(SS, HS, gS, tS) {
        let XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, bS.d)(SS, HS, gS, tS, XS)
      }
      _isRenderingStateCompiled(SS) {
        return !this._isDisposed && (0, bS.k)(SS, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(SS, HS) {
        (0, bS.e)(SS, HS)
      }
      getUniforms(SS, HS) {
        const gS = new Array,
          tS = SS;
        for (let bS = 0; bS < HS.length; bS++) gS.push(this._gl.getUniformLocation(tS.program, HS[bS]));
        return gS
      }
      getAttributes(SS, HS) {
        const gS = [],
          tS = SS;
        for (let XS = 0; XS < HS.length; XS++) try {
          gS.push(this._gl.getAttribLocation(tS.program, HS[XS]))
        } catch (bS) {
          gS.push(-1)
        }
        return gS
      }
      enableEffect(SS) {
        (SS = null !== SS && (0, xS.b)(SS) ? SS.effect : SS) && SS !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(SS), this._currentEffect = SS, SS.onBind && SS.onBind(SS), SS._onBindObservable && SS._onBindObservable.notifyObservers(SS))
      }
      setInt(SS, HS) {
        return !!SS && (this._gl.uniform1i(SS, HS), !0)
      }
      setInt2(SS, HS, gS) {
        return !!SS && (this._gl.uniform2i(SS, HS, gS), !0)
      }
      setInt3(SS, HS, gS, tS) {
        return !!SS && (this._gl.uniform3i(SS, HS, gS, tS), !0)
      }
      setInt4(SS, HS, gS, tS, bS) {
        return !!SS && (this._gl.uniform4i(SS, HS, gS, tS, bS), !0)
      }
      setIntArray(SS, HS) {
        return !!SS && (this._gl.uniform1iv(SS, HS), !0)
      }
      setIntArray2(SS, HS) {
        return !(!SS || HS.length % 2 !== 0) && (this._gl.uniform2iv(SS, HS), !0)
      }
      setIntArray3(SS, HS) {
        return !(!SS || HS.length % 3 !== 0) && (this._gl.uniform3iv(SS, HS), !0)
      }
      setIntArray4(SS, HS) {
        return !(!SS || HS.length % 4 !== 0) && (this._gl.uniform4iv(SS, HS), !0)
      }
      setUInt(SS, HS) {
        return !!SS && (this._gl.uniform1ui(SS, HS), !0)
      }
      setUInt2(SS, HS, gS) {
        return !!SS && (this._gl.uniform2ui(SS, HS, gS), !0)
      }
      setUInt3(SS, HS, gS, tS) {
        return !!SS && (this._gl.uniform3ui(SS, HS, gS, tS), !0)
      }
      setUInt4(SS, HS, gS, tS, bS) {
        return !!SS && (this._gl.uniform4ui(SS, HS, gS, tS, bS), !0)
      }
      setUIntArray(SS, HS) {
        return !!SS && (this._gl.uniform1uiv(SS, HS), !0)
      }
      setUIntArray2(SS, HS) {
        return !(!SS || HS.length % 2 !== 0) && (this._gl.uniform2uiv(SS, HS), !0)
      }
      setUIntArray3(SS, HS) {
        return !(!SS || HS.length % 3 !== 0) && (this._gl.uniform3uiv(SS, HS), !0)
      }
      setUIntArray4(SS, HS) {
        return !(!SS || HS.length % 4 !== 0) && (this._gl.uniform4uiv(SS, HS), !0)
      }
      setArray(SS, HS) {
        return !!SS && (!(HS.length < 1) && (this._gl.uniform1fv(SS, HS), !0))
      }
      setArray2(SS, HS) {
        return !(!SS || HS.length % 2 !== 0) && (this._gl.uniform2fv(SS, HS), !0)
      }
      setArray3(SS, HS) {
        return !(!SS || HS.length % 3 !== 0) && (this._gl.uniform3fv(SS, HS), !0)
      }
      setArray4(SS, HS) {
        return !(!SS || HS.length % 4 !== 0) && (this._gl.uniform4fv(SS, HS), !0)
      }
      setMatrices(SS, HS) {
        return !!SS && (this._gl.uniformMatrix4fv(SS, !1, HS), !0)
      }
      setMatrix3x3(SS, HS) {
        return !!SS && (this._gl.uniformMatrix3fv(SS, !1, HS), !0)
      }
      setMatrix2x2(SS, HS) {
        return !!SS && (this._gl.uniformMatrix2fv(SS, !1, HS), !0)
      }
      setFloat(SS, HS) {
        return !!SS && (this._gl.uniform1f(SS, HS), !0)
      }
      setFloat2(SS, HS, gS) {
        return !!SS && (this._gl.uniform2f(SS, HS, gS), !0)
      }
      setFloat3(SS, HS, gS, tS) {
        return !!SS && (this._gl.uniform3f(SS, HS, gS, tS), !0)
      }
      setFloat4(SS, HS, gS, tS, bS) {
        return !!SS && (this._gl.uniform4f(SS, HS, gS, tS, bS), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const SS = this._colorWrite;
          this._gl.colorMask(SS, SS, SS, SS)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(SS) {
        this.preventCacheWipeBetweenFrames && !SS || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), SS && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(SS, HS) {
        const gS = this._gl;
        let tS = gS.NEAREST,
          bS = gS.NEAREST,
          XS = !1;
        switch (SS) {
          case 11:
            tS = gS.LINEAR, bS = HS ? gS.LINEAR_MIPMAP_NEAREST : gS.LINEAR;
            break;
          case 3:
            tS = gS.LINEAR, XS = !0, bS = HS ? gS.LINEAR_MIPMAP_LINEAR : gS.LINEAR;
            break;
          case 8:
            XS = !0, tS = gS.NEAREST, bS = HS ? gS.NEAREST_MIPMAP_LINEAR : gS.NEAREST;
            break;
          case 4:
            tS = gS.NEAREST, bS = HS ? gS.NEAREST_MIPMAP_NEAREST : gS.NEAREST;
            break;
          case 5:
            tS = gS.NEAREST, bS = HS ? gS.LINEAR_MIPMAP_NEAREST : gS.LINEAR;
            break;
          case 6:
            XS = !0, tS = gS.NEAREST, bS = HS ? gS.LINEAR_MIPMAP_LINEAR : gS.LINEAR;
            break;
          case 7:
            tS = gS.NEAREST, bS = gS.LINEAR;
            break;
          case 1:
            tS = gS.NEAREST, bS = gS.NEAREST;
            break;
          case 9:
            tS = gS.LINEAR, bS = HS ? gS.NEAREST_MIPMAP_NEAREST : gS.NEAREST;
            break;
          case 10:
            XS = !0, tS = gS.LINEAR, bS = HS ? gS.NEAREST_MIPMAP_LINEAR : gS.NEAREST;
            break;
          case 2:
            tS = gS.LINEAR, bS = gS.LINEAR;
            break;
          case 12:
            tS = gS.LINEAR, bS = gS.NEAREST
        }
        return {
          min: bS,
          mag: tS,
          hasMipMaps: XS
        }
      }
      _createTexture() {
        const SS = this._gl.createTexture();
        if (!SS) throw new Error("Unable to create texture");
        return SS
      }
      _createHardwareTexture() {
        return new KS.c(this._createTexture(), this._gl)
      }
      _createInternalTexture(SS, HS) {
        let gS, tS, bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          XS = !1,
          xS = 0,
          qS = 3,
          uS = 5,
          IS = !1,
          fS = 1,
          kS = !1,
          aS = 0,
          KS = !1;
        void 0 !== HS && "object" === typeof HS ? (gS = !!HS.generateMipMaps, XS = !!HS.createMipMaps, xS = void 0 === HS.type ? 0 : HS.type, qS = void 0 === HS.samplingMode ? 3 : HS.samplingMode, uS = void 0 === HS.format ? 5 : HS.format, IS = void 0 !== HS.useSRGBBuffer && HS.useSRGBBuffer, fS = HS.samples ?? 1, tS = HS.label, kS = !!HS.createMSAATexture, aS = HS.comparisonFunction || 0, KS = !!HS.isCube) : gS = !!HS, IS && (IS = this._caps.supportSRGBBuffers && (this.uj > 1 || this.isWebGPU)), (1 !== xS || this._caps.textureFloatLinearFiltering) && (2 !== xS || this._caps.textureHalfFloatLinearFiltering) || (qS = 1), 1 !== xS || this._caps.textureFloat || (xS = 0, NS.b.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const GS = (0, nS.e)(uS),
          CS = (0, nS.b)(uS),
          PS = this._gl,
          QS = new jS.e(this, bS),
          DS = SS.width || SS,
          wS = SS.height || SS,
          hS = SS.depth || 0,
          ZS = SS.layers || 0,
          JS = this._getSamplingParameters(qS, (gS || XS) && !GS),
          OS = 0 !== ZS ? PS.TEXTURE_2D_ARRAY : 0 !== hS ? PS.TEXTURE_3D : KS ? PS.TEXTURE_CUBE_MAP : PS.TEXTURE_2D,
          dS = GS ? this._getInternalFormatFromDepthTextureFormat(uS, !0, CS) : this._getRGBABufferInternalSizedFormat(xS, uS, IS),
          cS = GS ? CS ? PS.DEPTH_STENCIL : PS.DEPTH_COMPONENT : this._getInternalFormat(uS),
          vS = GS ? this._getWebGLTextureTypeFromDepthTextureFormat(uS) : this._getWebGLTextureType(xS);
        if (this._bindTextureDirectly(OS, QS), 0 !== ZS) QS.is2DArray = !0, PS.texImage3D(OS, 0, dS, DS, wS, ZS, 0, cS, vS, null);
        else if (0 !== hS) QS.is3D = !0, PS.texImage3D(OS, 0, dS, DS, wS, hS, 0, cS, vS, null);
        else if (KS) {
          QS.isCube = !0;
          for (let SS = 0; SS < 6; SS++) PS.texImage2D(PS.TEXTURE_CUBE_MAP_POSITIVE_X + SS, 0, dS, DS, wS, 0, cS, vS, null)
        } else PS.texImage2D(OS, 0, dS, DS, wS, 0, cS, vS, null);
        if (PS.texParameteri(OS, PS.TEXTURE_MAG_FILTER, JS.mag), PS.texParameteri(OS, PS.TEXTURE_MIN_FILTER, JS.min), PS.texParameteri(OS, PS.TEXTURE_WRAP_S, PS.CLAMP_TO_EDGE), PS.texParameteri(OS, PS.TEXTURE_WRAP_T, PS.CLAMP_TO_EDGE), GS && this.uj > 1 && (0 === aS ? (PS.texParameteri(OS, PS.TEXTURE_COMPARE_FUNC, 515), PS.texParameteri(OS, PS.TEXTURE_COMPARE_MODE, PS.NONE)) : (PS.texParameteri(OS, PS.TEXTURE_COMPARE_FUNC, aS), PS.texParameteri(OS, PS.TEXTURE_COMPARE_MODE, PS.COMPARE_REF_TO_TEXTURE))), (gS || XS) && this._gl.generateMipmap(OS), this._bindTextureDirectly(OS, null), QS._useSRGBBuffer = IS, QS.baseWidth = DS, QS.baseHeight = wS, QS.width = DS, QS.height = wS, QS.depth = ZS || hS, QS.isReady = !0, QS.samples = fS, QS.generateMipMaps = gS, QS.samplingMode = qS, QS.type = xS, QS.format = uS, QS.label = tS, QS.comparisonFunction = aS, this._internalTexturesCache.push(QS), kS) {
          let SS;
          if (SS = (0, nS.e)(QS.format) ? this._setupFramebufferDepthAttachments((0, nS.b)(QS.format), 19 !== QS.format, QS.width, QS.height, fS, QS.format, !0) : this._createRenderBuffer(QS.width, QS.height, fS, -1, this._getRGBABufferInternalSizedFormat(QS.type, QS.format, QS._useSRGBBuffer), -1), !SS) throw new Error("Unable to create render buffer");
          QS._autoMSAAManagement = !0;
          let HS = QS._hardwareTexture;
          HS || (HS = QS._hardwareTexture = this._createHardwareTexture()), HS.addMSAARenderBuffer(SS)
        }
        return QS
      }
      _getUseSRGBBuffer(SS, HS) {
        return SS && this._caps.supportSRGBBuffers && (this.uj > 1 || HS)
      }
      createTexture(SS, HS, gS, tS) {
        var bS = this;
        let XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          xS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          NS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          qS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          uS = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          IS = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          fS = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          kS = arguments.length > 11 ? arguments[11] : void 0,
          aS = arguments.length > 12 ? arguments[12] : void 0,
          KS = arguments.length > 13 ? arguments[13] : void 0,
          GS = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(SS, HS, gS, tS, XS, xS, NS, (function() {
          for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
          return bS._prepareWebGLTexture(...HS, IS)
        }), ((SS, HS, gS, bS, XS, xS) => {
          const NS = this._gl,
            qS = gS.width === SS && gS.height === HS;
          XS._creationFlags = KS ?? 0;
          const uS = this._getTexImageParametersForCreateTexture(XS.format, XS._useSRGBBuffer);
          if (qS) return NS.texImage2D(NS.TEXTURE_2D, 0, uS.internalFormat, uS.format, uS.type, gS), !1;
          const IS = this._caps.maxTextureSize;
          if (gS.width > IS || gS.height > IS || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = SS, this._workingCanvas.height = HS, this._workingContext.drawImage(gS, 0, 0, gS.width, gS.height, 0, 0, SS, HS), NS.texImage2D(NS.TEXTURE_2D, 0, uS.internalFormat, uS.format, uS.type, this._workingCanvas), XS.width = SS, XS.height = HS, !1);
          {
            const SS = new jS.e(this, 2);
            this._bindTextureDirectly(NS.TEXTURE_2D, SS, !0), NS.texImage2D(NS.TEXTURE_2D, 0, uS.internalFormat, uS.format, uS.type, gS), this._rescaleTexture(SS, XS, tS, uS.format, (() => {
              this._releaseTexture(SS), this._bindTextureDirectly(NS.TEXTURE_2D, XS, !0), xS()
            }))
          }
          return !0
        }), qS, uS, IS, fS, kS, aS, GS)
      }
      _getTexImageParametersForCreateTexture(SS, HS) {
        let gS, tS;
        return 1 === this.uj ? (gS = this._getInternalFormat(SS, HS), tS = gS) : (gS = this._getInternalFormat(SS, !1), tS = this._getRGBABufferInternalSizedFormat(0, SS, HS)), {
          internalFormat: tS,
          format: gS,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(SS, HS, gS, tS, bS) {}
      _unpackFlipY(SS) {
        this._unpackFlipYCached !== SS && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, SS ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = SS))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(SS) {
        return SS.isCube ? this._gl.TEXTURE_CUBE_MAP : SS.is3D ? this._gl.TEXTURE_3D : SS.is2DArray || SS.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tS = this._getTextureTarget(HS),
          bS = this._getSamplingParameters(SS, HS.useMipMaps || gS);
        this._setTextureParameterInteger(tS, this._gl.TEXTURE_MAG_FILTER, bS.mag, HS), this._setTextureParameterInteger(tS, this._gl.TEXTURE_MIN_FILTER, bS.min), gS && bS.hasMipMaps && (HS.generateMipMaps = !0, this._gl.generateMipmap(tS)), this._bindTextureDirectly(tS, null), HS.samplingMode = SS
      }
      updateTextureDimensions(SS, HS, gS) {}
      updateTextureWrappingMode(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const bS = this._getTextureTarget(SS);
        null !== HS && (this._setTextureParameterInteger(bS, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(HS), SS), SS._cachedWrapU = HS), null !== gS && (this._setTextureParameterInteger(bS, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(gS), SS), SS._cachedWrapV = gS), (SS.is2DArray || SS.is3D) && null !== tS && (this._setTextureParameterInteger(bS, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(tS), SS), SS._cachedWrapR = tS), this._bindTextureDirectly(bS, null)
      }
      _uploadCompressedDataToTextureDirectly(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          xS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const NS = this._gl;
        let qS = NS.TEXTURE_2D;
        if (SS.isCube && (qS = NS.TEXTURE_CUBE_MAP_POSITIVE_X + XS), SS._useSRGBBuffer) switch (HS) {
          case 37492:
          case 36196:
            this._caps.etc2 ? HS = NS.COMPRESSED_SRGB8_ETC2 : SS._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? HS = NS.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : SS._useSRGBBuffer = !1;
            break;
          case 36492:
            HS = NS.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            HS = NS.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            HS = NS.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            HS = NS.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            HS = NS.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            HS = NS.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            HS = NS.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            HS = NS.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            HS = NS.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            HS = NS.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            HS = NS.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            HS = NS.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            HS = NS.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            HS = NS.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            HS = NS.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? HS = NS.COMPRESSED_SRGB_S3TC_DXT1_EXT : SS._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? HS = NS.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : SS._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? HS = NS.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : SS._useSRGBBuffer = !1;
            break;
          default:
            SS._useSRGBBuffer = !1
        }
        if (SS.generateMipMaps) {
          const XS = SS._hardwareTexture;
          XS.memoryAllocated || (NS.texStorage2D(SS.isCube ? NS.TEXTURE_CUBE_MAP : NS.TEXTURE_2D, Math.floor(Math.log2(Math.max(gS, tS))) + 1, HS, SS.width, SS.height), XS.memoryAllocated = !0), this._gl.compressedTexSubImage2D(qS, xS, 0, 0, gS, tS, HS, bS)
        } else this._gl.compressedTexImage2D(qS, xS, HS, gS, tS, 0, bS)
      }
      _uploadDataToTextureDirectly(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          bS = arguments.length > 4 ? arguments[4] : void 0,
          XS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const xS = this._gl,
          NS = this._getWebGLTextureType(SS.type),
          qS = this._getInternalFormat(SS.format),
          uS = void 0 === bS ? this._getRGBABufferInternalSizedFormat(SS.type, SS.format, SS._useSRGBBuffer) : this._getInternalFormat(bS, SS._useSRGBBuffer);
        this._unpackFlipY(SS.invertY);
        let IS = xS.TEXTURE_2D;
        SS.isCube && (IS = xS.TEXTURE_CUBE_MAP_POSITIVE_X + gS);
        const fS = Math.round(Math.log(SS.width) * Math.LOG2E),
          kS = Math.round(Math.log(SS.height) * Math.LOG2E),
          aS = XS ? SS.width : Math.pow(2, Math.max(fS - tS, 0)),
          KS = XS ? SS.height : Math.pow(2, Math.max(kS - tS, 0));
        xS.texImage2D(IS, tS, uS, aS, KS, 0, qS, NS, HS)
      }
      updateTextureData(SS, HS, gS, tS, bS, XS) {
        let xS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          NS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          qS = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const uS = this._gl,
          IS = this._getWebGLTextureType(SS.type),
          fS = this._getInternalFormat(SS.format);
        this._unpackFlipY(SS.invertY);
        let kS = uS.TEXTURE_2D,
          aS = uS.TEXTURE_2D;
        SS.isCube && (aS = uS.TEXTURE_CUBE_MAP_POSITIVE_X + xS, kS = uS.TEXTURE_CUBE_MAP), this._bindTextureDirectly(kS, SS, !0), uS.texSubImage2D(aS, NS, gS, tS, bS, XS, fS, IS, HS), qS && this._gl.generateMipmap(aS), this._bindTextureDirectly(kS, null)
      }
      _uploadArrayBufferViewToTexture(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const bS = this._gl,
          XS = SS.isCube ? bS.TEXTURE_CUBE_MAP : bS.TEXTURE_2D;
        this._bindTextureDirectly(XS, SS, !0), this._uploadDataToTextureDirectly(SS, HS, gS, tS), this._bindTextureDirectly(XS, null, !0)
      }
      _prepareWebGLTextureContinuation(SS, HS, gS, tS, bS) {
        const XS = this._gl;
        if (!XS) return;
        const xS = this._getSamplingParameters(bS, !gS);
        XS.texParameteri(XS.TEXTURE_2D, XS.TEXTURE_MAG_FILTER, xS.mag), XS.texParameteri(XS.TEXTURE_2D, XS.TEXTURE_MIN_FILTER, xS.min), gS || tS || XS.generateMipmap(XS.TEXTURE_2D), this._bindTextureDirectly(XS.TEXTURE_2D, null), HS && HS.removePendingData(SS), SS.onLoadedObservable.notifyObservers(SS), SS.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS) {
        const IS = this.getCaps().maxTextureSize,
          fS = Math.min(IS, this.needPOTTextures ? (0, aS.g)(tS.width, IS) : tS.width),
          kS = Math.min(IS, this.needPOTTextures ? (0, aS.g)(tS.height, IS) : tS.height),
          KS = this._gl;
        KS && (SS._hardwareTexture ? (this._bindTextureDirectly(KS.TEXTURE_2D, SS, !0), this._unpackFlipY(void 0 === bS || !!bS), SS.baseWidth = tS.width, SS.baseHeight = tS.height, SS.width = fS, SS.height = kS, SS.isReady = !0, SS.type = -1 !== SS.type ? SS.type : 0, SS.format = -1 !== SS.format ? SS.format : uS ?? (".jpg" !== HS || SS._useSRGBBuffer ? 5 : 4), NS(fS, kS, tS, HS, SS, (() => {
          this._prepareWebGLTextureContinuation(SS, gS, XS, xS, qS)
        })) || this._prepareWebGLTextureContinuation(SS, gS, XS, xS, qS)) : gS && gS.removePendingData(SS))
      }
      _getInternalFormatFromDepthTextureFormat(SS, HS, gS) {
        const tS = this._gl;
        if (!HS) return tS.STENCIL_INDEX8;
        let bS = gS ? tS.DEPTH_STENCIL : tS.DEPTH_COMPONENT;
        return this.uj > 1 ? 15 === SS ? bS = tS.DEPTH_COMPONENT16 : 16 === SS ? bS = tS.DEPTH_COMPONENT24 : 17 === SS || 13 === SS ? bS = gS ? tS.DEPTH24_STENCIL8 : tS.DEPTH_COMPONENT24 : 14 === SS ? bS = tS.DEPTH_COMPONENT32F : 18 === SS && (bS = gS ? tS.DEPTH32F_STENCIL8 : tS.DEPTH_COMPONENT32F) : bS = tS.DEPTH_COMPONENT16, bS
      }
      _getWebGLTextureTypeFromDepthTextureFormat(SS) {
        const HS = this._gl;
        let gS = HS.UNSIGNED_INT;
        return 15 === SS ? gS = HS.UNSIGNED_SHORT : 17 === SS || 13 === SS ? gS = HS.UNSIGNED_INT_24_8 : 14 === SS ? gS = HS.FLOAT : 18 === SS ? gS = HS.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === SS && (gS = HS.UNSIGNED_BYTE), gS
      }
      _setupFramebufferDepthAttachments(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          XS = arguments.length > 5 ? arguments[5] : void 0,
          xS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const NS = this._gl;
        XS = XS ?? (SS ? 13 : 14);
        const qS = this._getInternalFormatFromDepthTextureFormat(XS, HS, SS);
        return SS && HS ? this._createRenderBuffer(gS, tS, bS, NS.DEPTH_STENCIL, qS, xS ? -1 : NS.DEPTH_STENCIL_ATTACHMENT) : HS ? this._createRenderBuffer(gS, tS, bS, qS, qS, xS ? -1 : NS.DEPTH_ATTACHMENT) : SS ? this._createRenderBuffer(gS, tS, bS, qS, qS, xS ? -1 : NS.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(SS, HS, gS, tS, bS, XS) {
        let xS = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const NS = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(NS, SS, HS, gS, tS, bS, XS, xS)
      }
      _updateRenderBuffer(SS, HS, gS, tS, bS, XS, xS) {
        let NS = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const qS = this._gl;
        return qS.bindRenderbuffer(qS.RENDERBUFFER, SS), tS > 1 && qS.renderbufferStorageMultisample ? qS.renderbufferStorageMultisample(qS.RENDERBUFFER, tS, XS, HS, gS) : qS.renderbufferStorage(qS.RENDERBUFFER, bS, HS, gS), -1 !== xS && qS.framebufferRenderbuffer(qS.FRAMEBUFFER, xS, qS.RENDERBUFFER, SS), NS && qS.bindRenderbuffer(qS.RENDERBUFFER, null), SS
      }
      _releaseTexture(SS) {
        this._deleteTexture(SS._hardwareTexture), this.unbindAllTextures();
        const HS = this._internalTexturesCache.indexOf(SS); - 1 !== HS && this._internalTexturesCache.splice(HS, 1), SS._lodTextureHigh && SS._lodTextureHigh.dispose(), SS._lodTextureMid && SS._lodTextureMid.dispose(), SS._lodTextureLow && SS._lodTextureLow.dispose(), SS._irradianceTexture && SS._irradianceTexture.dispose()
      }
      _deleteTexture(SS) {
        SS?.release()
      }
      _setProgram(SS) {
        this._currentProgram !== SS && ((0, bS.p)(SS, this._gl), this._currentProgram = SS)
      }
      bindSamplers(SS) {
        const HS = SS.getPipelineContext();
        this._setProgram(HS.program);
        const gS = SS.getSamplers();
        for (let tS = 0; tS < gS.length; tS++) {
          const HS = SS.getUniform(gS[tS]);
          HS && (this._boundUniforms[tS] = HS)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          bS = !1;
        const XS = HS && HS._associatedChannel > -1;
        gS && XS && (this._activeChannel = HS._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== HS || tS) {
          if (this._activateCurrentTexture(), HS && HS.isMultiview) throw NS.b.Error(["_bindTextureDirectly called with a multiview texture!", SS, HS]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(SS, HS?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = HS, HS && (HS._associatedChannel = this._activeChannel)
        } else gS && (bS = !0, this._activateCurrentTexture());
        return XS && !gS && this._bindSamplerUniformToChannel(HS._associatedChannel, this._activeChannel), bS
      }
      _bindTexture(SS, HS, gS) {
        if (void 0 === SS) return;
        HS && (HS._associatedChannel = SS), this._activeChannel = SS;
        const tS = HS ? this._getTextureTarget(HS) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(tS, HS)
      }
      unbindAllTextures() {
        for (let SS = 0; SS < this._maxSimultaneousTextures; SS++) this._activeChannel = SS, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.uj > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(SS, HS, gS, tS) {
        void 0 !== SS && (HS && (this._boundUniforms[SS] = HS), this._setTexture(SS, gS))
      }
      _bindSamplerUniformToChannel(SS, HS) {
        const gS = this._boundUniforms[SS];
        gS && gS._currentState !== HS && (this._gl.uniform1i(gS, HS), gS._currentState = HS)
      }
      _getTextureWrapMode(SS) {
        switch (SS) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(SS, HS) {
        let gS, tS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          bS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!HS) return null != this._boundTexturesCache[SS] && (this._activeChannel = SS, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.uj > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (HS.video) {
          this._activeChannel = SS;
          const gS = HS.getInternalTexture();
          gS && (gS._associatedChannel = SS), HS.update()
        } else if (4 === HS.delayLoadState) return HS.delayLoad(), !1;
        gS = bS ? HS.depthStencilTexture : HS.isReady() ? HS.getInternalTexture() : HS.isCube ? this.emptyCubeTexture : HS.is3D ? this.emptyTexture3D : HS.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !tS && gS && (gS._associatedChannel = SS);
        let XS = !0;
        this._boundTexturesCache[SS] === gS && (tS || this._bindSamplerUniformToChannel(gS._associatedChannel, SS), XS = !1), this._activeChannel = SS;
        const xS = this._getTextureTarget(gS);
        if (XS && this._bindTextureDirectly(xS, gS, tS), gS && !gS.isMultiview) {
          if (gS.isCube && gS._cachedCoordinatesMode !== HS.coordinatesMode) {
            gS._cachedCoordinatesMode = HS.coordinatesMode;
            const SS = 3 !== HS.coordinatesMode && 5 !== HS.coordinatesMode ? 1 : 0;
            HS.wrapU = SS, HS.wrapV = SS
          }
          gS._cachedWrapU !== HS.wrapU && (gS._cachedWrapU = HS.wrapU, this._setTextureParameterInteger(xS, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(HS.wrapU), gS)), gS._cachedWrapV !== HS.wrapV && (gS._cachedWrapV = HS.wrapV, this._setTextureParameterInteger(xS, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(HS.wrapV), gS)), gS.is3D && gS._cachedWrapR !== HS.wrapR && (gS._cachedWrapR = HS.wrapR, this._setTextureParameterInteger(xS, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(HS.wrapR), gS)), this._setAnisotropicLevel(xS, gS, HS.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(SS, HS, gS, tS) {
        if (void 0 !== SS && HS) {
          this._textureUnits && this._textureUnits.length === gS.length || (this._textureUnits = new Int32Array(gS.length));
          for (let HS = 0; HS < gS.length; HS++) {
            const tS = gS[HS].getInternalTexture();
            tS ? (this._textureUnits[HS] = SS + HS, tS._associatedChannel = SS + HS) : this._textureUnits[HS] = -1
          }
          this._gl.uniform1iv(HS, this._textureUnits);
          for (let SS = 0; SS < gS.length; SS++) this._setTexture(this._textureUnits[SS], gS[SS], !0)
        }
      }
      _setAnisotropicLevel(SS, HS, gS) {
        const tS = this._caps.textureAnisotropicFilterExtension;
        11 !== HS.samplingMode && 3 !== HS.samplingMode && 2 !== HS.samplingMode && (gS = 1), tS && HS._cachedAnisotropicFilteringLevel !== gS && (this._setTextureParameterFloat(SS, tS.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(gS, this._caps.maxAnisotropy), HS), HS._cachedAnisotropicFilteringLevel = gS)
      }
      _setTextureParameterFloat(SS, HS, gS, tS) {
        this._bindTextureDirectly(SS, tS, !0, !0), this._gl.texParameterf(SS, HS, gS)
      }
      _setTextureParameterInteger(SS, HS, gS, tS) {
        tS && this._bindTextureDirectly(SS, tS, !0, !0), this._gl.texParameteri(SS, HS, gS)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let SS = 0; SS < this._caps.maxVertexAttribs; SS++) this.disableAttributeByIndex(SS)
        } else
          for (let SS = 0, HS = this._vertexAttribArraysEnabled.length; SS < HS; SS++) SS >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[SS] || this.disableAttributeByIndex(SS)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, qS.j)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, bS.C)(this._gl)
      }
      attachContextLostEvent(SS) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", SS, !1)
      }
      attachContextRestoredEvent(SS) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", SS, !1)
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
      _canRenderToFramebuffer(SS) {
        const HS = this._gl;
        for (; HS.getError() !== HS.NO_ERROR;);
        let gS = !0;
        const tS = HS.createTexture();
        HS.bindTexture(HS.TEXTURE_2D, tS), HS.texImage2D(HS.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(SS), 1, 1, 0, HS.RGBA, this._getWebGLTextureType(SS), null), HS.texParameteri(HS.TEXTURE_2D, HS.TEXTURE_MIN_FILTER, HS.NEAREST), HS.texParameteri(HS.TEXTURE_2D, HS.TEXTURE_MAG_FILTER, HS.NEAREST);
        const bS = HS.createFramebuffer();
        HS.bindFramebuffer(HS.FRAMEBUFFER, bS), HS.framebufferTexture2D(HS.FRAMEBUFFER, HS.COLOR_ATTACHMENT0, HS.TEXTURE_2D, tS, 0);
        const XS = HS.checkFramebufferStatus(HS.FRAMEBUFFER);
        if (gS = gS && XS === HS.FRAMEBUFFER_COMPLETE, gS = gS && HS.getError() === HS.NO_ERROR, gS && (HS.clear(HS.COLOR_BUFFER_BIT), gS = gS && HS.getError() === HS.NO_ERROR), gS) {
          HS.bindFramebuffer(HS.FRAMEBUFFER, null);
          const SS = HS.RGBA,
            tS = HS.UNSIGNED_BYTE,
            bS = new Uint8Array(4);
          HS.readPixels(0, 0, 1, 1, SS, tS, bS), gS = gS && HS.getError() === HS.NO_ERROR
        }
        for (HS.deleteTexture(tS), HS.deleteFramebuffer(bS), HS.bindFramebuffer(HS.FRAMEBUFFER, null); !gS && HS.getError() !== HS.NO_ERROR;);
        return gS
      }
      _getWebGLTextureType(SS) {
        if (1 === this._webGLVersion) {
          switch (SS) {
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
        switch (SS) {
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
      _getInternalFormat(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = HS ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (SS) {
          case 0:
            gS = this._gl.ALPHA;
            break;
          case 1:
            gS = this._gl.LUMINANCE;
            break;
          case 2:
            gS = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            gS = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            gS = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            gS = HS ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            gS = HS ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (SS) {
          case 8:
            gS = this._gl.RED_INTEGER;
            break;
          case 9:
            gS = this._gl.RG_INTEGER;
            break;
          case 10:
            gS = this._gl.RGB_INTEGER;
            break;
          case 11:
            gS = this._gl.RGBA_INTEGER
        }
        return gS
      }
      _getRGBABufferInternalSizedFormat(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== HS) switch (HS) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return gS ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (SS) {
          case 3:
            switch (HS) {
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
            switch (HS) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return gS ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return gS ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (HS) {
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
            switch (HS) {
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
            switch (HS) {
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
            switch (HS) {
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
            switch (HS) {
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
            switch (HS) {
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
            switch (HS) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return gS ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(SS, HS, gS, tS) {
        let bS = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          XS = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          xS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const qS = bS ? 4 : 3,
          uS = bS ? this._gl.RGBA : this._gl.RGB,
          IS = gS * tS * qS;
        if (xS) {
          if (xS.length < IS) return NS.b.Error(`Data buffer is too small to store the read pixels (${xS.length} should be more than ${IS})`), Promise.resolve(xS)
        } else xS = new Uint8Array(IS);
        return XS && this.flushFramebuffer(), this._gl.readPixels(SS, HS, gS, tS, uS, this._gl.UNSIGNED_BYTE, xS), Promise.resolve(xS)
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
          const SS = XS.b._CreateCanvas(1, 1),
            HS = SS.getContext("webgl") || SS.getContext("experimental-webgl");
          this._IsSupported = null != HS && !!globalThis.WebGLRenderingContext
        } catch (SS) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const SS = XS.b._CreateCanvas(1, 1),
            HS = SS.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || SS.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !HS
        } catch (SS) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    DS._TempClearColorUint32 = new Uint32Array(4), DS._TempClearColorInt32 = new Int32Array(4), DS._TempClearColorFloat32 = new Float32Array(4), DS.ExceptionList = [{
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
    }], DS._ConcatenateShader = GS.e, DS._IsSupported = null, DS._HasMajorPerformanceCaveat = null
  },
  40223: (SS, HS, gS) => {
    var tS;
    gS.d(HS, {
        e: () => bS
      }),
      function(SS) {
        SS[SS.PointerMove = 0] = "PointerMove", SS[SS.PointerDown = 1] = "PointerDown", SS[SS.PointerUp = 2] = "PointerUp"
      }(tS || (tS = {}));
    class bS {}
    bS.DOM_DELTA_PIXEL = 0, bS.DOM_DELTA_LINE = 1, bS.DOM_DELTA_PAGE = 2
  },
  40221: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS,
      f: () => XS,
      g: () => bS
    });
    class tS {}
    tS.KEYDOWN = 1, tS.KEYUP = 2;
    class bS {
      constructor(SS, HS) {
        this.type = SS, this.event = HS
      }
    }
    class XS extends bS {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(SS) {
        this.skipOnKeyboardObservable = SS
      }
      constructor(SS, HS) {
        super(SS, HS), this.type = SS, this.event = HS, this.skipOnKeyboardObservable = !1
      }
    }
  },
  40218: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS,
      h: () => xS,
      l: () => NS
    });
    var tS = gS(37117);
    class bS {}
    bS.POINTERDOWN = 1, bS.POINTERUP = 2, bS.POINTERMOVE = 4, bS.POINTERWHEEL = 8, bS.POINTERPICK = 16, bS.POINTERTAP = 32, bS.POINTERDOUBLETAP = 64;
    class XS {
      constructor(SS, HS) {
        this.type = SS, this.event = HS
      }
    }
    class xS extends XS {
      constructor(SS, HS, gS, bS) {
        super(SS, HS), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new tS.m(gS, bS)
      }
    }
    class NS extends XS {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(SS, HS), this._pickInfo = gS, this._inputManager = tS
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  40229: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS
    });
    class tS {
      static CompareLightsPriority(SS, HS) {
        return SS.shadowEnabled !== HS.shadowEnabled ? (HS.shadowEnabled ? 1 : 0) - (SS.shadowEnabled ? 1 : 0) : HS.renderPriority - SS.renderPriority
      }
    }
    tS.FALLOFF_DEFAULT = 0, tS.FALLOFF_PHYSICAL = 1, tS.FALLOFF_GLTF = 2, tS.FALLOFF_STANDARD = 3, tS.LIGHTMAP_DEFAULT = 0, tS.LIGHTMAP_SPECULAR = 1, tS.LIGHTMAP_SHADOWSONLY = 2, tS.INTENSITYMODE_AUTOMATIC = 0, tS.INTENSITYMODE_LUMINOUSPOWER = 1, tS.INTENSITYMODE_LUMINOUSINTENSITY = 2, tS.INTENSITYMODE_ILLUMINANCE = 3, tS.INTENSITYMODE_LUMINANCE = 4, tS.LIGHTTYPEID_POINTLIGHT = 0, tS.LIGHTTYPEID_DIRECTIONALLIGHT = 1, tS.LIGHTTYPEID_SPOTLIGHT = 2, tS.LIGHTTYPEID_HEMISPHERICLIGHT = 3, tS.LIGHTTYPEID_RECT_AREALIGHT = 4, tS.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39877: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    var tS, bS = gS(37144),
      XS = gS(39881);
    ! function(SS) {
      SS[SS.Unknown = 0] = "Unknown", SS[SS.Url = 1] = "Url", SS[SS.Temp = 2] = "Temp", SS[SS.Raw = 3] = "Raw", SS[SS.Dynamic = 4] = "Dynamic", SS[SS.RenderTarget = 5] = "RenderTarget", SS[SS.MultiRenderTarget = 6] = "MultiRenderTarget", SS[SS.Cube = 7] = "Cube", SS[SS.CubeRaw = 8] = "CubeRaw", SS[SS.CubePrefiltered = 9] = "CubePrefiltered", SS[SS.Raw3D = 10] = "Raw3D", SS[SS.Raw2DArray = 11] = "Raw2DArray", SS[SS.DepthStencil = 12] = "DepthStencil", SS[SS.CubeRawRGBD = 13] = "CubeRawRGBD", SS[SS.Depth = 14] = "Depth", SS[SS.External = 15] = "External"
    }(tS || (tS = {}));
    class xS extends XS.d {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(SS) {
        this._useMipMaps = SS
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(SS) {
        this._uniqueId = SS
      }
      AK() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new bS.e, this.onErrorObservable = new bS.e, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = SS, this._source = HS, this._uniqueId = xS._Counter++, gS || (this._hardwareTexture = SS._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, SS, HS, gS), this.width = SS, this.height = HS, this.depth = gS, this.baseWidth = SS, this.baseHeight = HS, this.baseDepth = gS, this._size = SS * HS * gS
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const SS = this.onRebuildCallback(this),
            HS = HS => {
              HS._swapAndDie(this, !1), this.isReady = SS.isReady
            };
          return void(SS.isAsync ? SS.proxy.then(HS) : HS(SS.proxy))
        }
        let SS;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(SS = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (SS => {
              SS._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (SS = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), SS._swapAndDie(this, !1), this._bufferViewArray)
              for (let SS = 0; SS < this._bufferViewArray.length; SS++) {
                const HS = this._bufferViewArray[SS];
                HS && this._engine.updateRawTexture(this, HS, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, SS)
              }
            this.isReady = !0;
            break;
          case 10:
            SS = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), SS._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (SS = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), SS._swapAndDie(this, !1), this._bufferViewArray)
              for (let SS = 0; SS < this._bufferViewArray.length; SS++) {
                const HS = this._bufferViewArray[SS];
                HS && this._engine.updateRawTexture2DArray(this, HS, this.format, this.invertY, this._compression, this.type, SS)
              }
            this.isReady = !0;
            break;
          case 4:
            SS = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), SS._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(SS = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              SS._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            SS = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), SS._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return SS = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (SS => {
              SS && SS._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(SS._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(SS._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), SS._hardwareTexture = this._hardwareTexture, SS._setUniqueId(xS._Counter++), HS && (SS._isRGBD = this._isRGBD), this._lodTextureHigh && (SS._lodTextureHigh && SS._lodTextureHigh.dispose(), SS._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (SS._lodTextureMid && SS._lodTextureMid.dispose(), SS._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (SS._lodTextureLow && SS._lodTextureLow.dispose(), SS._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (SS._irradianceTexture && SS._irradianceTexture.dispose(), SS._irradianceTexture = this._irradianceTexture);
        const gS = this._engine.getLoadedTexturesCache();
        let tS = gS.indexOf(this); - 1 !== tS && gS.splice(tS, 1), tS = gS.indexOf(SS), -1 === tS && gS.push(SS)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    xS._Counter = 0
  },
  39978: (SS, HS, gS) => {
    function tS(SS) {
      return 13 === SS || 14 === SS || 15 === SS || 16 === SS || 17 === SS || 18 === SS || 19 === SS
    }

    function bS(SS) {
      return 8 === SS || 9 === SS || 10 === SS || 11 === SS
    }

    function XS(SS) {
      return 0 === SS || 5 === SS || 7 === SS || 11 === SS
    }

    function xS(SS) {
      return 13 === SS || 17 === SS || 18 === SS || 19 === SS
    }
    gS.d(HS, {
      b: () => xS,
      e: () => tS,
      g: () => bS,
      j: () => XS
    })
  },
  39881: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS
    });
    class tS {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(SS) {
        this._cachedWrapU = SS
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(SS) {
        this._cachedWrapV = SS
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(SS) {
        this._cachedWrapR = SS
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(SS) {
        this._cachedAnisotropicFilteringLevel = SS
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(SS) {
        this._comparisonFunction = SS
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(SS) {
        this._useMipMaps = SS
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = SS, this._cachedWrapV = HS, this._cachedWrapR = gS, this._cachedAnisotropicFilteringLevel = tS, this.samplingMode = bS, this._comparisonFunction = XS, this
      }
      compareSampler(SS) {
        return this._cachedWrapU === SS._cachedWrapU && this._cachedWrapV === SS._cachedWrapV && this._cachedWrapR === SS._cachedWrapR && this._cachedAnisotropicFilteringLevel === SS._cachedAnisotropicFilteringLevel && this.samplingMode === SS.samplingMode && this._comparisonFunction === SS._comparisonFunction && this._useMipMaps === SS._useMipMaps
      }
    }
  },
  40159: (SS, HS, gS) => {
    function tS(SS) {
      SS.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    gS.d(HS, {
      d: () => tS
    })
  },
  39950: (SS, HS, gS) => {
    function tS(SS) {
      return void 0 === SS.getPipelineContext
    }
    gS.d(HS, {
      b: () => tS
    })
  },
  40364: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS
    });
    var tS = gS(39937);
    class bS {
      static GetEffect(SS) {
        return void 0 === SS.getPipelineContext ? SS.effect : SS
      }
      constructor(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = SS.createDrawContext(), HS && (this.materialContext = SS.createMaterialContext())
      }
      setEffect(SS, HS) {
        let gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        gS || this.effect === SS || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = SS, void 0 !== HS && (this.defines = HS), gS && this.drawContext?.reset()
      }
      dispose() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const HS = this.effect;
          SS ? HS.dispose() : tS.e.SetImmediate((() => {
            HS.AK().onEndFrameObservable.addOnce((() => {
              HS.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39906: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => fS,
      g: () => aS,
      i: () => uS,
      k: () => IS
    });
    var tS = gS(39913),
      bS = gS(39916),
      XS = gS(39899),
      xS = gS(38687),
      NS = gS(39930),
      qS = gS(39922);

    function uS(SS, HS) {
      return (0, bS.G)(HS).cachedPipelines[SS]
    }

    function IS(SS) {
      const HS = SS._name,
        gS = SS.context;
      if (HS && gS) {
        const SS = (0, bS.G)(gS),
          tS = SS.cachedPipelines[HS];
        tS?.dispose(), delete SS.cachedPipelines[HS]
      }
    }

    function fS(SS, HS, gS, bS, XS, xS, qS) {
      let uS, IS;
      const fS = (0, tS.j)() ? xS?.getHostDocument() : null;
      uS = "string" === typeof HS ? HS : "string" === typeof HS.vertexSource ? "source:" + HS.vertexSource : "string" === typeof HS.vertexElement ? fS?.getElementById(HS.vertexElement) || HS.vertexElement : HS.vertex || HS, IS = "string" === typeof HS ? HS : "string" === typeof HS.fragmentSource ? "source:" + HS.fragmentSource : "string" === typeof HS.fragmentElement ? fS?.getElementById(HS.fragmentElement) || HS.fragmentElement : HS.fragment || HS;
      const aS = [void 0, void 0],
        KS = () => {
          if (aS[0] && aS[1]) {
            const [tS, uS] = aS;
            (0, NS.f)(SS), (0, NS.l)(tS, SS, ((tS, IS) => {
              qS && (qS._vertexSourceCodeBeforeMigration = IS), gS && (tS = gS("vertex", tS)), SS.isFragment = !0, (0, NS.l)(uS, SS, ((xS, uS) => {
                qS && (qS._fragmentSourceCodeBeforeMigration = uS), gS && (xS = gS("fragment", xS));
                const IS = (0, NS.c)(tS, xS, SS);
                SS = null;
                const fS = function(SS, HS, gS, tS) {
                  if (gS) {
                    return {
                      vertexSourceCode: (1 === tS ? "//" : "") + "#define SHADER_NAME vertex:" + (gS.vertexElement || gS.vertex || gS.spectorName || gS) + "\n" + SS,
                      fragmentSourceCode: (1 === tS ? "//" : "") + "#define SHADER_NAME fragment:" + (gS.fragmentElement || gS.fragment || gS.spectorName || gS) + "\n" + HS
                    }
                  }
                  return {
                    vertexSourceCode: SS,
                    fragmentSourceCode: HS
                  }
                }(IS.vertexCode, IS.fragmentCode, HS, XS);
                bS?.(fS.vertexSourceCode, fS.fragmentSourceCode)
              }), xS)
            }), xS)
          }
        };
      kS(uS, "Vertex", "", (SS => {
        qS && (qS._rawVertexSourceCode = SS), aS[0] = SS, KS()
      }), XS), kS(IS, "Fragment", "Pixel", (SS => {
        qS && (qS._rawFragmentSourceCode = SS), aS[1] = SS, KS()
      }), XS)
    }

    function kS(SS, HS, gS, bS, xS, NS) {
      if ("undefined" !== typeof HTMLElement && SS instanceof HTMLElement) {
        return void bS((0, tS.b)(SS))
      }
      if ("source:" === SS.substring(0, 7)) return void bS(SS.substring(7));
      if ("base64:" === SS.substring(0, 7)) {
        return void bS(window.atob(SS.substring(7)))
      }
      const uS = XS.c.GetShadersStore(xS);
      if (uS[SS + HS + "Shader"]) return void bS(uS[SS + HS + "Shader"]);
      if (gS && uS[SS + gS + "Shader"]) return void bS(uS[SS + gS + "Shader"]);
      let IS;
      if (IS = "." === SS[0] || "/" === SS[0] || SS.indexOf("http") > -1 ? SS : XS.c.GetShadersRepository(xS) + SS, !(NS = NS || qS.j)) throw new Error("loadFileInjection is not defined");
      NS(IS + "." + HS.toLowerCase() + ".fx", bS)
    }
    const aS = (SS, HS, gS, tS) => {
      try {
        const XS = SS.context ? (0, bS.G)(SS.context) : null;
        XS && (XS.disableParallelShaderCompile = SS.disableParallelCompilation);
        const xS = SS.existingPipelineContext || HS(SS.shaderProcessingContext);
        return xS._name = SS.name, SS.name && XS && (XS.cachedPipelines[SS.name] = xS), gS(xS, SS.vertex, SS.fragment, !!SS.createAsRaw, "", "", SS.rebuildRebind, SS.defines, SS.transformFeedbackVaryings, "", (() => {
          tS(xS, (() => {
            SS.onRenderingStateCompiled?.(xS)
          }))
        })), xS
      } catch (XS) {
        throw xS.b.Error("Error compiling effect"), XS
      }
    }
  },
  39890: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => qS
    });
    var tS = gS(37144),
      bS = gS(38687),
      XS = gS(39899),
      xS = gS(39906),
      NS = gS(39937);
    class qS {
      static get ShadersRepository() {
        return XS.c.ShadersRepository
      }
      static set ShadersRepository(SS) {
        XS.c.ShadersRepository = SS
      }
      get Ow() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new tS.e), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(SS, HS, gS) {
        let bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          XS = arguments.length > 4 ? arguments[4] : void 0,
          NS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          uS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          IS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          fS = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          kS = arguments.length > 9 ? arguments[9] : void 0,
          aS = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          KS = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          jS = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new tS.e, this.onErrorObservable = new tS.e, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = SS, this._key = aS;
        const GS = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let CS;
        if (HS.attributes) {
          const SS = HS;
          if (this._engine = gS, this._attributesNames = SS.attributes, this._uniformsNames = SS.uniformsNames.concat(SS.samplers), this._samplerList = SS.samplers.slice(), this.defines = SS.defines, this.onError = SS.onError, this.onCompiled = SS.onCompiled, this._fallbacks = SS.fallbacks, this._indexParameters = SS.indexParameters, this._transformFeedbackVaryings = SS.transformFeedbackVaryings || null, this._multiTarget = !!SS.multiTarget, this._shaderLanguage = SS.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!SS.disableParallelShaderCompilation, SS.uniformBuffersNames) {
            this._uniformBuffersNamesList = SS.uniformBuffersNames.slice();
            for (let HS = 0; HS < SS.uniformBuffersNames.length; HS++) this._uniformBuffersNames[SS.uniformBuffersNames[HS]] = HS
          }
          this._processFinalCode = SS.processFinalCode ?? null, this._processCodeAfterIncludes = SS.processCodeAfterIncludes ?? void 0, jS = SS.extraInitializationsAsync, CS = SS.existingPipelineContext
        } else this._engine = XS, this.defines = null == NS ? "" : NS, this._uniformsNames = gS.concat(bS), this._samplerList = bS ? bS.slice() : [], this._attributesNames = HS, this._uniformBuffersNamesList = [], this._shaderLanguage = KS, this.onError = fS, this.onCompiled = IS, this._indexParameters = kS, this._fallbacks = uS;
        "WEBGL2" === this._engine.shaderPlatformName && (CS = (0, xS.i)(GS, this._engine._gl) ?? CS), this._attributeLocationByName = {}, this.uniqueId = qS._UniqueIdSeed++, CS ? (this._pipelineContext = CS, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, jS).catch((SS => {
          const HS = SS?.message ?? String(SS),
            gS = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${HS}`);
          SS && "string" === typeof SS.stack && (gS.stack = `${gS.message}\nCaused by: ${SS.stack}`), this._processCompilationErrors(gS)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.Ow || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tS = arguments.length > 3 ? arguments[3] : void 0;
        tS && await tS(), this._processingContext = gS || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const bS = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: SS ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: XS.c.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: XS.c.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          RgS: this._engine.RgS,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, xS.c)(bS, this.name, this._processFinalCode, ((SS, gS) => {
          this._vertexSourceCode = SS, this._fragmentSourceCode = gS, this._prepareEffect(HS)
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
        return !!this._engine.Ow || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      AK() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(SS) {
        return this._attributes[SS]
      }
      getAttributeLocationByName(SS) {
        return this._attributeLocationByName[SS]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(SS) {
        return this._uniformsNames.indexOf(SS)
      }
      getUniform(SS) {
        return this._uniforms[SS]
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
        return await new Promise((SS => {
          this.executeWhenCompiled(SS)
        }))
      }
      executeWhenCompiled(SS) {
        this.isReady() ? SS(this) : (this.onCompileObservable.add((HS => {
          SS(HS)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(SS) {
        (0, NS.g)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (HS => {
          this._processCompilationErrors(HS, SS)
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
            RgS: this._engine.RgS,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(SS, HS, gS, tS) {
        this._isReady = !1, this._vertexSourceCodeOverride = SS, this._fragmentSourceCodeOverride = HS, this.onError = (SS, HS) => {
          tS && tS(HS)
        }, this.onCompiled = () => {
          const SS = this.AK().scenes;
          if (SS)
            for (let HS = 0; HS < SS.length; HS++) SS[HS].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(gS)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(SS) {
        if (this._pipelineContext = SS, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let HS = 0; HS < this._attributesNames.length; HS++) {
            const SS = this._attributesNames[HS];
            this._attributeLocationByName[SS] = this._attributes[HS]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), qS.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const HS = this._pipelineContext;
        this._isReady = !1;
        try {
          const gS = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            tS = gS ? null : this.defines,
            bS = gS ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            XS = gS ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            NS = this._engine;
          this._pipelineContext = (0, xS.g)({
            existingPipelineContext: SS ? HS : null,
            vertex: bS,
            fragment: XS,
            context: "WEBGL2" === NS.shaderPlatformName || "WEBGL1" === NS.shaderPlatformName ? NS._gl : void 0,
            rebuildRebind: (SS, HS, gS, tS) => this._rebuildProgram(SS, HS, gS, tS),
            defines: tS,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: gS,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: gS => {
              HS && !SS && this._engine._deletePipelineContext(HS), gS && this._onRenderingStateCompiled(gS)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(HS)
        } catch (gS) {
          this._processCompilationErrors(gS, HS)
        }
      }
      _getShaderCodeAndErrorLine(SS, HS, gS) {
        const tS = gS ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let bS = null;
        if (HS && SS) {
          const XS = HS.match(tS);
          if (XS && 2 === XS.length) {
            const HS = parseInt(XS[1]),
              tS = SS.split("\n", -1);
            tS.length >= HS && (bS = `Offending line [${HS}] in ${gS?"fragment":"vertex"} code: ${tS[HS-1]}`)
          }
        }
        return [SS, bS]
      }
      _processCompilationErrors(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof SS?.stack ? SS.stack : SS?.message ?? String(SS);
        const gS = this._attributesNames,
          tS = this._fallbacks;
        if (bS.b.Error("Unable to compile effect:"), bS.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), bS.b.Error(`Attributes: ${gS.join(" ")}`), bS.b.Error("Defines:\n" + this.defines), qS.LogShaderCodeOnCompilationError) {
          let SS, HS = null,
            gS = null;
          this._pipelineContext?._getVertexShaderCode() && ([SS, HS] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), SS && (bS.b.Error("Vertex code:"), bS.b.Error(SS))), this._pipelineContext?._getFragmentShaderCode() && ([SS, gS] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), SS && (bS.b.Error("Fragment code:"), bS.b.Error(SS))), HS && bS.b.Error(HS), gS && bS.b.Error(gS)
        }
        bS.b.Error("Error: " + this._compilationError);
        const XS = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        HS && (this._pipelineContext = HS, this._isReady = !0, XS()), tS ? (this._pipelineContext = null, tS.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, bS.b.Error("Trying next fallback."), this.defines = tS.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, XS(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, HS || XS())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(SS, HS) {
        this._engine._bindTexture(this._samplers[SS], HS, SS)
      }
      setTexture(SS, HS) {
        this._engine.setTexture(this._samplers[SS], this._uniforms[SS], HS, SS)
      }
      setTextureArray(SS, HS) {
        const gS = SS + "Ex";
        if (-1 === this._samplerList.indexOf(gS + "0")) {
          const tS = this._samplerList.indexOf(SS);
          for (let SS = 1; SS < HS.length; SS++) {
            const HS = gS + (SS - 1).toString();
            this._samplerList.splice(tS + SS, 0, HS)
          }
          let bS = 0;
          for (const SS of this._samplerList) this._samplers[SS] = bS, bS += 1
        }
        this._engine.setTextureArray(this._samplers[SS], this._uniforms[SS], HS, SS)
      }
      bindUniformBuffer(SS, HS) {
        const gS = this._uniformBuffersNames[HS];
        void 0 === gS || qS._BaseCache[gS] === SS && this._engine._features.useUBOBindingCache || (qS._BaseCache[gS] = SS, this._engine.bindUniformBufferBase(SS, gS, HS))
      }
      bindUniformBlock(SS, HS) {
        this._engine.bindUniformBlock(this._pipelineContext, SS, HS)
      }
      setInt(SS, HS) {
        return this._pipelineContext.setInt(SS, HS), this
      }
      setInt2(SS, HS, gS) {
        return this._pipelineContext.setInt2(SS, HS, gS), this
      }
      setInt3(SS, HS, gS, tS) {
        return this._pipelineContext.setInt3(SS, HS, gS, tS), this
      }
      setInt4(SS, HS, gS, tS, bS) {
        return this._pipelineContext.setInt4(SS, HS, gS, tS, bS), this
      }
      setIntArray(SS, HS) {
        return this._pipelineContext.setIntArray(SS, HS), this
      }
      setIntArray2(SS, HS) {
        return this._pipelineContext.setIntArray2(SS, HS), this
      }
      setIntArray3(SS, HS) {
        return this._pipelineContext.setIntArray3(SS, HS), this
      }
      setIntArray4(SS, HS) {
        return this._pipelineContext.setIntArray4(SS, HS), this
      }
      setUInt(SS, HS) {
        return this._pipelineContext.setUInt(SS, HS), this
      }
      setUInt2(SS, HS, gS) {
        return this._pipelineContext.setUInt2(SS, HS, gS), this
      }
      setUInt3(SS, HS, gS, tS) {
        return this._pipelineContext.setUInt3(SS, HS, gS, tS), this
      }
      setUInt4(SS, HS, gS, tS, bS) {
        return this._pipelineContext.setUInt4(SS, HS, gS, tS, bS), this
      }
      setUIntArray(SS, HS) {
        return this._pipelineContext.setUIntArray(SS, HS), this
      }
      setUIntArray2(SS, HS) {
        return this._pipelineContext.setUIntArray2(SS, HS), this
      }
      setUIntArray3(SS, HS) {
        return this._pipelineContext.setUIntArray3(SS, HS), this
      }
      setUIntArray4(SS, HS) {
        return this._pipelineContext.setUIntArray4(SS, HS), this
      }
      setFloatArray(SS, HS) {
        return this._pipelineContext.setArray(SS, HS), this
      }
      setFloatArray2(SS, HS) {
        return this._pipelineContext.setArray2(SS, HS), this
      }
      setFloatArray3(SS, HS) {
        return this._pipelineContext.setArray3(SS, HS), this
      }
      setFloatArray4(SS, HS) {
        return this._pipelineContext.setArray4(SS, HS), this
      }
      setArray(SS, HS) {
        return this._pipelineContext.setArray(SS, HS), this
      }
      setArray2(SS, HS) {
        return this._pipelineContext.setArray2(SS, HS), this
      }
      setArray3(SS, HS) {
        return this._pipelineContext.setArray3(SS, HS), this
      }
      setArray4(SS, HS) {
        return this._pipelineContext.setArray4(SS, HS), this
      }
      setMatrices(SS, HS) {
        return this._pipelineContext.setMatrices(SS, HS), this
      }
      setMatrix(SS, HS) {
        return this._pipelineContext.setMatrix(SS, HS), this
      }
      setMatrix3x3(SS, HS) {
        return this._pipelineContext.setMatrix3x3(SS, HS), this
      }
      setMatrix2x2(SS, HS) {
        return this._pipelineContext.setMatrix2x2(SS, HS), this
      }
      setFloat(SS, HS) {
        return this._pipelineContext.setFloat(SS, HS), this
      }
      setBool(SS, HS) {
        return this._pipelineContext.setInt(SS, HS ? 1 : 0), this
      }
      setVector2(SS, HS) {
        return this._pipelineContext.setVector2(SS, HS), this
      }
      setFloat2(SS, HS, gS) {
        return this._pipelineContext.setFloat2(SS, HS, gS), this
      }
      setVector3(SS, HS) {
        return this._pipelineContext.setVector3(SS, HS), this
      }
      setFloat3(SS, HS, gS, tS) {
        return this._pipelineContext.setFloat3(SS, HS, gS, tS), this
      }
      setVector4(SS, HS) {
        return this._pipelineContext.setVector4(SS, HS), this
      }
      setQuaternion(SS, HS) {
        return this._pipelineContext.setQuaternion(SS, HS), this
      }
      setFloat4(SS, HS, gS, tS, bS) {
        return this._pipelineContext.setFloat4(SS, HS, gS, tS, bS), this
      }
      setColor3(SS, HS) {
        return this._pipelineContext.setColor3(SS, HS), this
      }
      setColor4(SS, HS, gS) {
        return this._pipelineContext.setColor4(SS, HS, gS), this
      }
      setDirectColor4(SS, HS) {
        return this._pipelineContext.setDirectColor4(SS, HS), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (qS.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, xS.k)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        HS && (XS.c.GetShadersStore(tS)[`${SS}PixelShader`] = HS), gS && (XS.c.GetShadersStore(tS)[`${SS}VertexShader`] = gS)
      }
      static ResetCache() {
        qS._BaseCache = {}
      }
    }
    qS.LogShaderCodeOnCompilationError = !0, qS.PersistentMode = !1, qS.AutomaticallyClearCodeCache = !1, qS._UniqueIdSeed = 0, qS._BaseCache = {}, qS.ShadersStore = XS.c.ShadersStore, qS.IncludesShadersStore = XS.c.IncludesShadersStore
  },
  40192: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => IS,
      i: () => hS,
      m: () => wS
    });
    var tS = gS(39890),
      bS = gS(37117),
      XS = gS(37157),
      xS = gS(40169);
    const NS = new bS.e,
      qS = new bS.e,
      uS = new bS.e,
      IS = {
        lL: () => {},
        eyeAtCamera: !0
      };

    function fS(SS, HS, gS) {
      const tS = gS.lgS(),
        bS = HS.lgS();
      for (let XS = 0; XS < 16; XS++) tS[XS] = bS[XS];
      return tS[12] -= SS.x, tS[13] -= SS.y, tS[14] -= SS.z, gS.markAsUpdated(), gS
    }

    function kS(SS, HS, gS) {
      return (0, XS.h)(HS, qS), fS(SS, qS, uS), (0, XS.h)(uS, gS), gS
    }

    function aS(SS, HS, gS) {
      if (!IS.eyeAtCamera) return kS(SS, HS, gS);
      const tS = gS.lgS(),
        bS = HS.lgS();
      for (let XS = 0; XS < 16; XS++) tS[XS] = bS[XS];
      return tS[12] = 0, tS[13] = 0, tS[14] = 0, gS.markAsUpdated(), gS
    }

    function KS(SS, HS, gS, tS) {
      return (0, XS.n)(aS(SS, HS, tS), gS, tS), tS
    }

    function jS(SS, HS, gS, tS) {
      return (0, XS.h)(gS, qS), (0, XS.n)(HS, qS, uS), fS(SS, uS, qS), aS(SS, gS, uS), (0, XS.n)(qS, uS, tS), tS
    }

    function GS(SS, HS, gS, tS, bS, xS) {
      return (0, XS.h)(gS, qS), (0, XS.n)(HS, qS, uS), fS(SS, uS, qS), KS(SS, tS, bS, uS), (0, XS.n)(qS, uS, xS), xS
    }

    function CS(SS, HS) {
      const gS = IS.lL();
      if (!gS || NS === HS) return HS;
      NS.updateFlag = HS.updateFlag;
      const tS = gS.floatingOriginOffset;
      switch (SS) {
        case "world":
          return fS(tS, HS, NS);
        case "view":
          return aS(tS, HS, NS);
        case "worldView":
          return jS(tS, HS, gS.getViewMatrix(), NS);
        case "viewProjection":
          return KS(tS, gS.getViewMatrix(), gS.getProjectionMatrix(), NS);
        case "worldViewProjection":
          return GS(tS, HS, gS.getTransformMatrix(), gS.getViewMatrix(), gS.getProjectionMatrix(), NS);
        default:
          if (SS.startsWith("u_")) {
            const bS = SS.toLowerCase();
            if (bS.startsWith("u_worldviewprojection")) return GS(tS, HS, gS.getTransformMatrix(), gS.getViewMatrix(), gS.getProjectionMatrix(), NS);
            if (bS.startsWith("u_viewprojection")) return KS(tS, gS.getViewMatrix(), gS.getProjectionMatrix(), NS);
            if (bS.startsWith("u_worldview")) return jS(tS, HS, gS.getViewMatrix(), NS);
            if (bS.startsWith("u_world")) return fS(tS, HS, NS);
            if (bS.startsWith("u_view")) return aS(tS, HS, NS)
          }
          return HS
      }
    }
    const nS = xS.c,
      PS = tS.c,
      QS = nS.prototype._updateMatrixForUniform,
      DS = tS.c.prototype.setMatrix;

    function wS() {
      tS.c.prototype.setMatrix = DS, PS._setMatrixOverride = void 0, nS.prototype._updateMatrixForUniform = QS, nS.prototype._updateMatrixForUniformOverride = void 0
    }

    function hS() {
      PS.prototype._setMatrixOverride = DS, PS.prototype.setMatrix = function(SS, HS) {
        return this._setMatrixOverride(SS, CS(SS, HS)), this
      }, nS.prototype._updateMatrixForUniformOverride = QS, nS.prototype._updateMatrixForUniform = function(SS, HS) {
        this._updateMatrixForUniformOverride(SS, CS(SS, HS))
      }
    }
  },
  40163: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS,
      e: () => bS
    });
    var tS = gS(40159);

    function bS(SS, HS) {
      HS.WHITEBALANCE && SS.push("whiteBalanceMatrix"), HS.EXPOSURE && SS.push("exposureLinear"), HS.CONTRAST && SS.push("contrast"), HS.COLORGRADING && SS.push("colorTransformSettings"), (HS.VIGNETTE || HS.DITHER) && SS.push("vInverseScreenSize"), HS.VIGNETTE && (SS.push("vignetteSettings1"), SS.push("vignetteSettings2")), HS.COLORCURVES && (0, tS.d)(SS), HS.DITHER && SS.push("ditherIntensity")
    }

    function XS(SS, HS) {
      HS.COLORGRADING && SS.push("txColorTransform")
    }
  },
  40152: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => cS,
      h: () => LS
    });
    var tS = gS(40041),
      bS = gS(40048),
      XS = gS(37144),
      xS = gS(37300),
      NS = gS(37149),
      qS = gS(37117);
    const uS = [
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
      IS = 1e6 / uS[uS.length - 1][0],
      fS = 150;

    function kS(SS, HS) {
      const gS = Number.isNaN(SS) ? IS : Math.max(SS, IS),
        tS = (0, NS.Clamp)(1e6 / gS, uS[0][0], uS[uS.length - 1][0]);
      let bS = 0,
        XS = uS.length - 1;
      for (; XS - bS > 1;) {
        const SS = bS + XS >> 1;
        uS[SS][0] <= tS ? bS = SS : XS = SS
      }
      const xS = bS,
        [kS, aS, KS, jS] = uS[xS],
        [GS, CS, nS, PS] = uS[xS + 1],
        QS = (tS - kS) / (GS - kS),
        DS = qS.m.Lerp(new qS.m(aS, KS), new qS.m(CS, nS), QS),
        wS = qS.m.Normalize(new qS.m(1, jS)),
        hS = qS.m.Normalize(new qS.m(1, PS)),
        ZS = qS.m.Normalize(qS.m.Lerp(wS, hS, QS)),
        JS = (0, NS.Clamp)(HS, -150, fS);
      DS.GtS(ZS.scale(JS / 3e3));
      const OS = 2 * DS.x - 8 * DS.y + 4,
        dS = 3 * DS.x / OS,
        cS = 2 * DS.y / OS;
      return new qS.n(dS / cS, 1, (1 - dS - cS) / cS)
    }
    const aS = qS.e.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      KS = qS.e.Invert(aS);

    function jS(SS, HS) {
      const gS = HS > 0 ? SS / HS : 10;
      return (0, NS.Clamp)(gS, .1, 10)
    }

    function GS(SS, HS) {
      const gS = qS.n.TransformNormal(SS, aS),
        tS = qS.n.TransformNormal(HS, aS),
        bS = qS.e.FromArray([jS(tS.x, gS.x), 0, 0, 0, 0, jS(tS.y, gS.y), 0, 0, 0, 0, jS(tS.z, gS.z), 0, 0, 0, 0, 1]);
      return aS.multiply(bS).multiply(KS)
    }
    const CS = new qS.n(.95047, 1, 1.08883),
      nS = qS.e.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(GS(CS, kS(6500, 0))),
      PS = qS.e.Invert(nS),
      QS = qS.n.TransformNormal(new qS.n(1, 1, 1), nS);
    var DS = gS(40068),
      wS = gS(40159);
    let hS = (() => {
      var SS;
      let HS, gS, XS, NS, qS, uS, IS, fS, kS, aS, KS, jS, GS = [],
        CS = [],
        nS = [],
        PS = [],
        QS = [],
        hS = [],
        ZS = [],
        JS = [],
        OS = [],
        dS = [],
        cS = [],
        vS = [],
        ES = [],
        LS = [],
        YS = [],
        AS = [],
        yS = [],
        VS = [],
        iS = [],
        WS = [],
        zS = [],
        US = [],
        pS = [],
        sS = [];
      return SS = class {
        constructor() {
          this._dirty = !0, this._tempColor = new xS.c(0, 0, 0, 0), this._globalCurve = new xS.c(0, 0, 0, 0), this._highlightsCurve = new xS.c(0, 0, 0, 0), this._midtonesCurve = new xS.c(0, 0, 0, 0), this._shadowsCurve = new xS.c(0, 0, 0, 0), this._positiveCurve = new xS.c(0, 0, 0, 0), this._negativeCurve = new xS.c(0, 0, 0, 0), this._globalHue = (0, tS.k)(this, GS, 30), this._globalDensity = ((0, tS.k)(this, CS), (0, tS.k)(this, nS, 0)), this._globalSaturation = ((0, tS.k)(this, PS), (0, tS.k)(this, QS, 0)), this._globalExposure = ((0, tS.k)(this, hS), (0, tS.k)(this, ZS, 0)), this._highlightsHue = ((0, tS.k)(this, JS), (0, tS.k)(this, OS, 30)), this._highlightsDensity = ((0, tS.k)(this, dS), (0, tS.k)(this, cS, 0)), this._highlightsSaturation = ((0, tS.k)(this, vS), (0, tS.k)(this, ES, 0)), this._highlightsExposure = ((0, tS.k)(this, LS), (0, tS.k)(this, YS, 0)), this._midtonesHue = ((0, tS.k)(this, AS), (0, tS.k)(this, yS, 30)), this._midtonesDensity = ((0, tS.k)(this, VS), (0, tS.k)(this, iS, 0)), this._midtonesSaturation = ((0, tS.k)(this, WS), (0, tS.k)(this, zS, 0)), this._midtonesExposure = ((0, tS.k)(this, US), (0, tS.k)(this, pS, 0)), this._shadowsHue = ((0, tS.k)(this, sS), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(SS) {
          this._globalHue = SS, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(SS) {
          this._globalDensity = SS, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(SS) {
          this._globalSaturation = SS, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(SS) {
          this._globalExposure = SS, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(SS) {
          this._highlightsHue = SS, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(SS) {
          this._highlightsDensity = SS, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(SS) {
          this._highlightsSaturation = SS, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(SS) {
          this._highlightsExposure = SS, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(SS) {
          this._midtonesHue = SS, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(SS) {
          this._midtonesDensity = SS, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(SS) {
          this._midtonesSaturation = SS, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(SS) {
          this._midtonesExposure = SS, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(SS) {
          this._shadowsHue = SS, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(SS) {
          this._shadowsDensity = SS, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(SS) {
          this._shadowsSaturation = SS, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(SS) {
          this._shadowsExposure = SS, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(HS, gS, tS, bS, XS) {
          null != HS && (HS = SS._Clamp(HS, 0, 360), gS = SS._Clamp(gS, -100, 100), tS = SS._Clamp(tS, -100, 100), bS = SS._Clamp(bS, -100, 100), gS = SS._ApplyColorGradingSliderNonlinear(gS), gS *= .5, bS = SS._ApplyColorGradingSliderNonlinear(bS), gS < 0 && (gS *= -1, HS = (HS + 180) % 360), SS._FromHSBToRef(HS, gS, 50 + .25 * bS, XS), XS.scaleToRef(2, XS), XS.a = 1 + .01 * tS)
        }
        static _ApplyColorGradingSliderNonlinear(SS) {
          SS /= 100;
          let HS = Math.abs(SS);
          return HS = Math.pow(HS, 2), SS < 0 && (HS *= -1), HS *= 100, HS
        }
        static _FromHSBToRef(HS, gS, tS, bS) {
          let XS = SS._Clamp(HS, 0, 360);
          const xS = SS._Clamp(gS / 100, 0, 1),
            NS = SS._Clamp(tS / 100, 0, 1);
          if (0 === xS) bS.r = NS, bS.g = NS, bS.b = NS;
          else {
            XS /= 60;
            const SS = Math.floor(XS),
              HS = XS - SS,
              gS = NS * (1 - xS),
              tS = NS * (1 - xS * HS),
              qS = NS * (1 - xS * (1 - HS));
            switch (SS) {
              case 0:
                bS.r = NS, bS.g = qS, bS.b = gS;
                break;
              case 1:
                bS.r = tS, bS.g = NS, bS.b = gS;
                break;
              case 2:
                bS.r = gS, bS.g = NS, bS.b = qS;
                break;
              case 3:
                bS.r = gS, bS.g = tS, bS.b = NS;
                break;
              case 4:
                bS.r = qS, bS.g = gS, bS.b = NS;
                break;
              default:
                bS.r = NS, bS.g = gS, bS.b = tS
            }
          }
          bS.a = 1
        }
        static _Clamp(SS, HS, gS) {
          return Math.min(Math.max(SS, HS), gS)
        }
        clone() {
          return DS.b.Clone((() => new SS), this)
        }
        serialize() {
          return DS.b.Serialize(this)
        }
        _bind(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), SS && (SS.setFloat4(HS, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), SS.setFloat4(gS, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), SS.setFloat4(tS, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const xS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        HS = [(0, bS.M)()], gS = [(0, bS.M)()], XS = [(0, bS.M)()], NS = [(0, bS.M)()], qS = [(0, bS.M)()], uS = [(0, bS.M)()], IS = [(0, bS.M)()], fS = [(0, bS.M)()], kS = [(0, bS.M)()], aS = [(0, bS.M)()], KS = [(0, bS.M)()], jS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: SS => "_globalHue" in SS,
            get: SS => SS._globalHue,
            set: (SS, HS) => {
              SS._globalHue = HS
            }
          },
          metadata: xS
        }, GS, CS), (0, tS.j)(null, null, gS, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: SS => "_globalDensity" in SS,
            get: SS => SS._globalDensity,
            set: (SS, HS) => {
              SS._globalDensity = HS
            }
          },
          metadata: xS
        }, nS, PS), (0, tS.j)(null, null, XS, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: SS => "_globalSaturation" in SS,
            get: SS => SS._globalSaturation,
            set: (SS, HS) => {
              SS._globalSaturation = HS
            }
          },
          metadata: xS
        }, QS, hS), (0, tS.j)(null, null, NS, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: SS => "_globalExposure" in SS,
            get: SS => SS._globalExposure,
            set: (SS, HS) => {
              SS._globalExposure = HS
            }
          },
          metadata: xS
        }, ZS, JS), (0, tS.j)(null, null, qS, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: SS => "_highlightsHue" in SS,
            get: SS => SS._highlightsHue,
            set: (SS, HS) => {
              SS._highlightsHue = HS
            }
          },
          metadata: xS
        }, OS, dS), (0, tS.j)(null, null, uS, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: SS => "_highlightsDensity" in SS,
            get: SS => SS._highlightsDensity,
            set: (SS, HS) => {
              SS._highlightsDensity = HS
            }
          },
          metadata: xS
        }, cS, vS), (0, tS.j)(null, null, IS, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: SS => "_highlightsSaturation" in SS,
            get: SS => SS._highlightsSaturation,
            set: (SS, HS) => {
              SS._highlightsSaturation = HS
            }
          },
          metadata: xS
        }, ES, LS), (0, tS.j)(null, null, fS, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: SS => "_highlightsExposure" in SS,
            get: SS => SS._highlightsExposure,
            set: (SS, HS) => {
              SS._highlightsExposure = HS
            }
          },
          metadata: xS
        }, YS, AS), (0, tS.j)(null, null, kS, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: SS => "_midtonesHue" in SS,
            get: SS => SS._midtonesHue,
            set: (SS, HS) => {
              SS._midtonesHue = HS
            }
          },
          metadata: xS
        }, yS, VS), (0, tS.j)(null, null, aS, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: SS => "_midtonesDensity" in SS,
            get: SS => SS._midtonesDensity,
            set: (SS, HS) => {
              SS._midtonesDensity = HS
            }
          },
          metadata: xS
        }, iS, WS), (0, tS.j)(null, null, KS, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: SS => "_midtonesSaturation" in SS,
            get: SS => SS._midtonesSaturation,
            set: (SS, HS) => {
              SS._midtonesSaturation = HS
            }
          },
          metadata: xS
        }, zS, US), (0, tS.j)(null, null, jS, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: SS => "_midtonesExposure" in SS,
            get: SS => SS._midtonesExposure,
            set: (SS, HS) => {
              SS._midtonesExposure = HS
            }
          },
          metadata: xS
        }, pS, sS), xS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: xS
        })
      })(), SS.PrepareUniforms = wS.d, SS
    })();

    function ZS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      SS._bind(HS, gS, tS, bS)
    }
    var JS = gS(39968),
      OS = gS(40163),
      dS = gS(37164);
    let cS = (() => {
        var SS;
        let HS, gS, uS, aS, KS, jS, CS, wS, dS, cS, vS, ES, LS, YS, AS, yS, VS, iS, WS, zS, US, pS, sS, BS, MS, FS, RS, TS, oS = [],
          lS = [],
          mS = [],
          eS = [],
          rS = [],
          SH = [],
          HH = [],
          gH = [],
          tH = [],
          bH = [],
          XH = [],
          xH = [],
          NH = [],
          qH = [],
          uH = [],
          IH = [],
          fH = [],
          kH = [],
          aH = [],
          KH = [],
          jH = [],
          GH = [],
          CH = [],
          nH = [],
          PH = [],
          QH = [],
          DH = [],
          wH = [],
          hH = [],
          ZH = [],
          JH = [],
          OH = [],
          dH = [],
          cH = [],
          vH = [],
          EH = [],
          LH = [],
          YH = [],
          AH = [],
          yH = [],
          VH = [],
          iH = [],
          WH = [],
          zH = [],
          UH = [],
          pH = [],
          sH = [],
          BH = [],
          MH = [],
          FH = [],
          RH = [],
          TH = [],
          oH = [],
          lH = [],
          mH = [],
          eH = [];
        return SS = class {
          constructor() {
            this.colorCurves = (0, tS.k)(this, oS, new hS), this._colorCurvesEnabled = ((0, tS.k)(this, lS), (0, tS.k)(this, mS, !1)), this._colorGradingTexture = ((0, tS.k)(this, eS), (0, tS.k)(this, rS, void 0)), this._colorGradingEnabled = ((0, tS.k)(this, SH), (0, tS.k)(this, HH, !1)), this._colorGradingWithGreenDepth = ((0, tS.k)(this, gH), (0, tS.k)(this, tH, !0)), this._colorGradingBGR = ((0, tS.k)(this, bH), (0, tS.k)(this, XH, !0)), this._exposure = ((0, tS.k)(this, xH), (0, tS.k)(this, NH, 1)), this._toneMappingEnabled = ((0, tS.k)(this, qH), (0, tS.k)(this, uH, !1)), this._toneMappingType = ((0, tS.k)(this, IH), (0, tS.k)(this, fH, SS.TONEMAPPING_STANDARD)), this._contrast = ((0, tS.k)(this, kH), (0, tS.k)(this, aH, 1)), this._whiteBalanceEnabled = ((0, tS.k)(this, KH), (0, tS.k)(this, jH, !1)), this._temperature = ((0, tS.k)(this, GH), (0, tS.k)(this, CH, 6500)), this._tint = ((0, tS.k)(this, nH), (0, tS.k)(this, PH, 0)), this._whiteBalanceMatrix = ((0, tS.k)(this, QH), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, tS.k)(this, DH, 0), this.vignetteCenterX = ((0, tS.k)(this, wH), (0, tS.k)(this, hH, 0)), this.vignetteCenterY = ((0, tS.k)(this, ZH), (0, tS.k)(this, JH, 0)), this.vignetteWeight = ((0, tS.k)(this, OH), (0, tS.k)(this, dH, 1.5)), this.vignetteColor = ((0, tS.k)(this, cH), (0, tS.k)(this, vH, new xS.c(0, 0, 0, 0))), this.vignetteCameraFov = ((0, tS.k)(this, EH), (0, tS.k)(this, LH, .5)), this._vignetteBlendMode = ((0, tS.k)(this, YH), (0, tS.k)(this, AH, SS.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, tS.k)(this, yH), (0, tS.k)(this, VH, !1)), this._ditheringEnabled = ((0, tS.k)(this, iH), (0, tS.k)(this, WH, !1)), this._ditheringIntensity = ((0, tS.k)(this, zH), (0, tS.k)(this, UH, 1 / 255)), this._skipFinalColorClamp = ((0, tS.k)(this, pH), (0, tS.k)(this, sH, !1)), this._applyByPostProcess = ((0, tS.k)(this, BH), (0, tS.k)(this, MH, !1)), this._isEnabled = ((0, tS.k)(this, FH), (0, tS.k)(this, RH, !0)), this.outputTextureWidth = ((0, tS.k)(this, TH), (0, tS.k)(this, oH, 0)), this.outputTextureHeight = ((0, tS.k)(this, lH), (0, tS.k)(this, mH, 0)), this.onUpdateParameters = ((0, tS.k)(this, eH), new XS.e)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(SS) {
            this._colorCurvesEnabled !== SS && (this._colorCurvesEnabled = SS, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(SS) {
            this._colorGradingTexture !== SS && (this._colorGradingTexture = SS, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(SS) {
            this._colorGradingEnabled !== SS && (this._colorGradingEnabled = SS, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(SS) {
            this._colorGradingWithGreenDepth !== SS && (this._colorGradingWithGreenDepth = SS, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(SS) {
            this._colorGradingBGR !== SS && (this._colorGradingBGR = SS, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(SS) {
            this._exposure !== SS && (this._exposure = SS, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(SS) {
            this._toneMappingEnabled !== SS && (this._toneMappingEnabled = SS, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(SS) {
            this._toneMappingType !== SS && (this._toneMappingType = SS, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(SS) {
            this._contrast !== SS && (this._contrast = SS, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(SS) {
            this._whiteBalanceEnabled !== SS && (this._whiteBalanceEnabled = SS, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(SS) {
            SS = Number.isNaN(SS) ? IS : Math.max(SS, IS), this._temperature !== SS && (this._temperature = SS, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(SS) {
            SS = (0, NS.Clamp)(SS, -150, fS), this._tint !== SS && (this._tint = SS, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(SS, HS) {
              const gS = GS(kS(SS, HS), QS),
                tS = nS.multiply(gS).multiply(PS);
              return qS.e.GetAsMatrix3x3(tS)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(SS) {
            this.vignetteCenterY = SS
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(SS) {
            this.vignetteCenterX = SS
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(SS) {
            this._vignetteBlendMode !== SS && (this._vignetteBlendMode = SS, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(SS) {
            this._vignetteEnabled !== SS && (this._vignetteEnabled = SS, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(SS) {
            this._ditheringEnabled !== SS && (this._ditheringEnabled = SS, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(SS) {
            this._ditheringIntensity !== SS && (this._ditheringIntensity = SS, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(SS) {
            this._skipFinalColorClamp !== SS && (this._skipFinalColorClamp = SS, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(SS) {
            this._applyByPostProcess !== SS && (this._applyByPostProcess = SS, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(SS) {
            this._isEnabled !== SS && (this._isEnabled = SS, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(HS) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return HS.WHITEBALANCE = !1, HS.VIGNETTE = !1, HS.TONEMAPPING = 0, HS.CONTRAST = !1, HS.EXPOSURE = !1, HS.COLORCURVES = !1, HS.COLORGRADING = !1, HS.COLORGRADING3D = !1, HS.DITHER = !1, HS.IMAGEPROCESSING = !1, HS.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(HS.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (HS.WHITEBALANCE = this._whiteBalanceEnabled, HS.VIGNETTE = this.vignetteEnabled, HS.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === SS._VIGNETTEMODE_MULTIPLY, HS.VIGNETTEBLENDMODEOPAQUE = !HS.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case SS.TONEMAPPING_KHR_PBR_NEUTRAL:
                HS.TONEMAPPING = 3;
                break;
              case SS.TONEMAPPING_ACES:
                HS.TONEMAPPING = 2;
                break;
              default:
                HS.TONEMAPPING = 1
            } else HS.TONEMAPPING = 0;
            HS.CONTRAST = 1 !== this.contrast, HS.EXPOSURE = 1 !== this.exposure, HS.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, HS.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, HS.COLORGRADING ? HS.COLORGRADING3D = this.colorGradingTexture.is3D : HS.COLORGRADING3D = !1, HS.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, HS.SAMPLER3DBGRMAP = this.colorGradingBGR, HS.DITHER = this._ditheringEnabled, HS.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, HS.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, HS.IMAGEPROCESSING = HS.WHITEBALANCE || HS.VIGNETTE || !!HS.TONEMAPPING || HS.CONTRAST || HS.EXPOSURE || HS.COLORCURVES || HS.COLORGRADING || HS.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(SS, HS) {
            if (this._whiteBalanceEnabled && SS.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && ZS(this.colorCurves, SS), this._vignetteEnabled || this._ditheringEnabled) {
              const gS = 1 / (this.outputTextureWidth || SS.AK().getRenderWidth()),
                tS = 1 / (this.outputTextureHeight || SS.AK().getRenderHeight());
              if (SS.setFloat2("vInverseScreenSize", gS, tS), this._ditheringEnabled && SS.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const bS = null != HS ? HS : tS / gS;
                let XS = Math.tan(.5 * this.vignetteCameraFov),
                  xS = XS * bS;
                const NS = Math.sqrt(xS * XS);
                xS = (0, JS.m)(xS, NS, this.vignetteStretch), XS = (0, JS.m)(XS, NS, this.vignetteStretch), SS.setFloat4("vignetteSettings1", xS, XS, -xS * this.vignetteCenterX, -XS * this.vignetteCenterY);
                const qS = -2 * this.vignetteWeight;
                SS.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, qS)
              }
            }
            if (SS.setFloat("exposureLinear", this.exposure), SS.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              SS.setTexture("txColorTransform", this.colorGradingTexture);
              const HS = this.colorGradingTexture.getSize().height;
              SS.setFloat4("colorTransformSettings", (HS - 1) / HS, .5 / HS, HS, this.colorGradingTexture.level)
            }
          }
          clone() {
            return DS.b.Clone((() => new SS), this)
          }
          serialize() {
            return DS.b.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const XS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          HS = [(0, bS.j)()], gS = [(0, bS.M)()], uS = [(0, bS.B)("colorGradingTexture")], aS = [(0, bS.M)()], KS = [(0, bS.M)()], jS = [(0, bS.M)()], CS = [(0, bS.M)()], wS = [(0, bS.M)()], dS = [(0, bS.M)()], cS = [(0, bS.M)()], vS = [(0, bS.M)()], ES = [(0, bS.M)()], LS = [(0, bS.M)()], YS = [(0, bS.M)()], AS = [(0, bS.M)()], yS = [(0, bS.M)()], VS = [(0, bS.M)()], iS = [(0, bS.m)()], WS = [(0, bS.M)()], zS = [(0, bS.M)()], US = [(0, bS.M)()], pS = [(0, bS.M)()], sS = [(0, bS.M)()], BS = [(0, bS.M)()], MS = [(0, bS.M)()], FS = [(0, bS.M)()], RS = [(0, bS.M)()], TS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: SS => "colorCurves" in SS,
              get: SS => SS.colorCurves,
              set: (SS, HS) => {
                SS.colorCurves = HS
              }
            },
            metadata: XS
          }, oS, lS), (0, tS.j)(null, null, gS, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: SS => "_colorCurvesEnabled" in SS,
              get: SS => SS._colorCurvesEnabled,
              set: (SS, HS) => {
                SS._colorCurvesEnabled = HS
              }
            },
            metadata: XS
          }, mS, eS), (0, tS.j)(null, null, uS, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "_colorGradingTexture" in SS,
              get: SS => SS._colorGradingTexture,
              set: (SS, HS) => {
                SS._colorGradingTexture = HS
              }
            },
            metadata: XS
          }, rS, SH), (0, tS.j)(null, null, aS, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: SS => "_colorGradingEnabled" in SS,
              get: SS => SS._colorGradingEnabled,
              set: (SS, HS) => {
                SS._colorGradingEnabled = HS
              }
            },
            metadata: XS
          }, HH, gH), (0, tS.j)(null, null, KS, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: SS => "_colorGradingWithGreenDepth" in SS,
              get: SS => SS._colorGradingWithGreenDepth,
              set: (SS, HS) => {
                SS._colorGradingWithGreenDepth = HS
              }
            },
            metadata: XS
          }, tH, bH), (0, tS.j)(null, null, jS, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: SS => "_colorGradingBGR" in SS,
              get: SS => SS._colorGradingBGR,
              set: (SS, HS) => {
                SS._colorGradingBGR = HS
              }
            },
            metadata: XS
          }, XH, xH), (0, tS.j)(null, null, CS, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: SS => "_exposure" in SS,
              get: SS => SS._exposure,
              set: (SS, HS) => {
                SS._exposure = HS
              }
            },
            metadata: XS
          }, NH, qH), (0, tS.j)(null, null, wS, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: SS => "_toneMappingEnabled" in SS,
              get: SS => SS._toneMappingEnabled,
              set: (SS, HS) => {
                SS._toneMappingEnabled = HS
              }
            },
            metadata: XS
          }, uH, IH), (0, tS.j)(null, null, dS, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: SS => "_toneMappingType" in SS,
              get: SS => SS._toneMappingType,
              set: (SS, HS) => {
                SS._toneMappingType = HS
              }
            },
            metadata: XS
          }, fH, kH), (0, tS.j)(null, null, cS, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: SS => "_contrast" in SS,
              get: SS => SS._contrast,
              set: (SS, HS) => {
                SS._contrast = HS
              }
            },
            metadata: XS
          }, aH, KH), (0, tS.j)(null, null, vS, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: SS => "_whiteBalanceEnabled" in SS,
              get: SS => SS._whiteBalanceEnabled,
              set: (SS, HS) => {
                SS._whiteBalanceEnabled = HS
              }
            },
            metadata: XS
          }, jH, GH), (0, tS.j)(null, null, ES, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: SS => "_temperature" in SS,
              get: SS => SS._temperature,
              set: (SS, HS) => {
                SS._temperature = HS
              }
            },
            metadata: XS
          }, CH, nH), (0, tS.j)(null, null, LS, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: SS => "_tint" in SS,
              get: SS => SS._tint,
              set: (SS, HS) => {
                SS._tint = HS
              }
            },
            metadata: XS
          }, PH, QH), (0, tS.j)(null, null, YS, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: SS => "vignetteStretch" in SS,
              get: SS => SS.vignetteStretch,
              set: (SS, HS) => {
                SS.vignetteStretch = HS
              }
            },
            metadata: XS
          }, DH, wH), (0, tS.j)(null, null, AS, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: SS => "vignetteCenterX" in SS,
              get: SS => SS.vignetteCenterX,
              set: (SS, HS) => {
                SS.vignetteCenterX = HS
              }
            },
            metadata: XS
          }, hH, ZH), (0, tS.j)(null, null, yS, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: SS => "vignetteCenterY" in SS,
              get: SS => SS.vignetteCenterY,
              set: (SS, HS) => {
                SS.vignetteCenterY = HS
              }
            },
            metadata: XS
          }, JH, OH), (0, tS.j)(null, null, VS, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: SS => "vignetteWeight" in SS,
              get: SS => SS.vignetteWeight,
              set: (SS, HS) => {
                SS.vignetteWeight = HS
              }
            },
            metadata: XS
          }, dH, cH), (0, tS.j)(null, null, iS, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: SS => "vignetteColor" in SS,
              get: SS => SS.vignetteColor,
              set: (SS, HS) => {
                SS.vignetteColor = HS
              }
            },
            metadata: XS
          }, vH, EH), (0, tS.j)(null, null, WS, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: SS => "vignetteCameraFov" in SS,
              get: SS => SS.vignetteCameraFov,
              set: (SS, HS) => {
                SS.vignetteCameraFov = HS
              }
            },
            metadata: XS
          }, LH, YH), (0, tS.j)(null, null, zS, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: SS => "_vignetteBlendMode" in SS,
              get: SS => SS._vignetteBlendMode,
              set: (SS, HS) => {
                SS._vignetteBlendMode = HS
              }
            },
            metadata: XS
          }, AH, yH), (0, tS.j)(null, null, US, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: SS => "_vignetteEnabled" in SS,
              get: SS => SS._vignetteEnabled,
              set: (SS, HS) => {
                SS._vignetteEnabled = HS
              }
            },
            metadata: XS
          }, VH, iH), (0, tS.j)(null, null, pS, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: SS => "_ditheringEnabled" in SS,
              get: SS => SS._ditheringEnabled,
              set: (SS, HS) => {
                SS._ditheringEnabled = HS
              }
            },
            metadata: XS
          }, WH, zH), (0, tS.j)(null, null, sS, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: SS => "_ditheringIntensity" in SS,
              get: SS => SS._ditheringIntensity,
              set: (SS, HS) => {
                SS._ditheringIntensity = HS
              }
            },
            metadata: XS
          }, UH, pH), (0, tS.j)(null, null, BS, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: SS => "_skipFinalColorClamp" in SS,
              get: SS => SS._skipFinalColorClamp,
              set: (SS, HS) => {
                SS._skipFinalColorClamp = HS
              }
            },
            metadata: XS
          }, sH, BH), (0, tS.j)(null, null, MS, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: SS => "_applyByPostProcess" in SS,
              get: SS => SS._applyByPostProcess,
              set: (SS, HS) => {
                SS._applyByPostProcess = HS
              }
            },
            metadata: XS
          }, MH, FH), (0, tS.j)(null, null, FS, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: SS => "_isEnabled" in SS,
              get: SS => SS._isEnabled,
              set: (SS, HS) => {
                SS._isEnabled = HS
              }
            },
            metadata: XS
          }, RH, TH), (0, tS.j)(null, null, RS, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: SS => "outputTextureWidth" in SS,
              get: SS => SS.outputTextureWidth,
              set: (SS, HS) => {
                SS.outputTextureWidth = HS
              }
            },
            metadata: XS
          }, oH, lH), (0, tS.j)(null, null, TS, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: SS => "outputTextureHeight" in SS,
              get: SS => SS.outputTextureHeight,
              set: (SS, HS) => {
                SS.outputTextureHeight = HS
              }
            },
            metadata: XS
          }, mH, eH), XS && Object.defineProperty(SS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: XS
          })
        })(), SS.TONEMAPPING_STANDARD = 0, SS.TONEMAPPING_ACES = 1, SS.TONEMAPPING_KHR_PBR_NEUTRAL = 2, SS.PrepareUniforms = OS.e, SS.PrepareSamplers = OS.d, SS._VIGNETTEMODE_MULTIPLY = 0, SS._VIGNETTEMODE_OPAQUE = 1, SS
      })(),
      vS = !1;

    function ES(SS) {
      const HS = DS.b.Parse((() => new cS), SS, null, null);
      return void 0 !== SS.vignetteCentreX && (HS.vignetteCenterX = SS.vignetteCentreX), void 0 !== SS.vignetteCentreY && (HS.vignetteCenterY = SS.vignetteCentreY), HS
    }

    function LS() {
      vS || (vS = !0, cS.Parse = ES, DS.b._ImageProcessingConfigurationParser = ES, (0, dS.f)("BABYLON.ImageProcessingConfiguration", cS))
    }
  },
  40169: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => XS
    });
    var tS = gS(38687),
      bS = gS(40133);
    class XS {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tS = arguments.length > 3 ? arguments[3] : void 0,
          bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          XS = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = SS, this._noUBO = !SS.supportsUniformBuffers || bS, this._dynamic = gS, this._name = tS ?? "no-name", this._data = HS || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === XS && this._engine._features.trackUbosInFrame || !0 === XS) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.J7 = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.J7 = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(SS) {
        let HS;
        if (HS = SS <= 2 ? SS : 4, this._uniformLocationPointer % HS !== 0) {
          const SS = this._uniformLocationPointer;
          this._uniformLocationPointer += HS - this._uniformLocationPointer % HS;
          const gS = this._uniformLocationPointer - SS;
          for (let HS = 0; HS < gS; HS++) this._data.push(0)
        }
      }
      addUniform(SS, HS) {
        let gS, tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (tS > 0 && "number" === typeof HS && (this._uniformArraySizes[SS] = {
            strideSize: HS,
            arraySize: tS
          }), void 0 === this._uniformLocations[SS] && (this._uniformNames.push(SS), !this._noUBO)) {
          if (tS > 0) {
            if (HS instanceof Array) throw "addUniform should not be use with Array in UBO: " + SS;
            if (this._fillAlignment(4), 16 == HS) HS *= tS;
            else {
              HS = HS * tS + (4 - HS) * tS
            }
            gS = [];
            for (let SS = 0; SS < HS; SS++) gS.push(0)
          } else {
            if (HS instanceof Array) gS = HS, HS = gS.length;
            else {
              gS = [];
              for (let SS = 0; SS < HS; SS++) gS.push(0)
            }
            this._fillAlignment(HS)
          }
          this._uniformSizes[SS] = HS, this._uniformLocations[SS] = this._uniformLocationPointer, this._uniformLocationPointer += HS;
          for (let SS = 0; SS < HS; SS++) this._data.push(gS[SS]);
          this._needSync = !0
        }
      }
      addMatrix(SS, HS) {
        this.addUniform(SS, Array.prototype.slice.call(HS.lgS()))
      }
      addFloat2(SS, HS, gS) {
        const tS = [HS, gS];
        this.addUniform(SS, tS)
      }
      addFloat3(SS, HS, gS, tS) {
        const bS = [HS, gS, tS];
        this.addUniform(SS, bS)
      }
      addColor3(SS, HS) {
        const gS = [HS.r, HS.g, HS.b];
        this.addUniform(SS, gS)
      }
      addColor4(SS, HS, gS) {
        const tS = [HS.r, HS.g, HS.b, gS];
        this.addUniform(SS, tS)
      }
      addVector3(SS, HS) {
        const gS = [HS.x, HS.y, HS.z];
        this.addUniform(SS, gS)
      }
      addMatrix3x3(SS) {
        this.addUniform(SS, 12)
      }
      addMatrix2x2(SS) {
        this.addUniform(SS, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const SS = [];
        let HS = 0;
        for (const gS in this._uniformLocations)
          if (SS.push(gS), 10 === ++HS) break;
        return SS.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const SS of this._ownerListsBySlot.values()) this._removeOwnerBacklink(SS);
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
      set name(SS) {
        this._name = SS
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(SS, HS) {
        for (let gS = 0; gS < SS.length; ++gS)
          if (SS[gS] !== HS[gS]) return !1;
        return !0
      }
      _copyBuffer(SS, HS) {
        for (let gS = 0; gS < SS.length; ++gS) HS[gS] = SS[gS]
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
      _updateOwnerKeyed(SS) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let HS = this._slotByOwner.get(SS);
        if (void 0 === HS && (HS = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(SS, HS), this._ownerCount++, SS._uniformBuffersWithOwnedSlot || (SS._uniformBuffersWithOwnedSlot = []), SS._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(HS, SS._uniformBuffersWithOwnedSlot)), this._slotGeneration[HS] === this._dataGeneration) return this._bufferIndex = HS, this._buffer = this._buffers[HS][0], this.bindUniformBuffer(), this._slotFrameId[HS] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const gS = this._buffers[HS][1];
        this._slotFrameId[HS] === this._currentFrameId && gS && !this._buffersEqual(this._bufferData, gS) && (HS = this._takeFreeSlot(!1)), this._bufferIndex = HS, this._buffer = this._buffers[HS][0], this.bindUniformBuffer();
        const tS = this._buffers[HS][1];
        tS && this._buffersEqual(this._bufferData, tS) || (tS && this._copyBuffer(this._bufferData, tS), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[HS] = this._currentFrameId, this._slotGeneration[HS] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(SS) {
        for (let gS = 0; gS < this._freeSlots.length; ++gS) {
          const HS = this._freeSlots[gS];
          if (this._slotFrameId[HS] !== this._currentFrameId) return SS && (this._freeSlots[gS] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), HS
        }
        this._rebuild();
        const HS = this._buffers.length - 1;
        return SS || this._freeSlots.push(HS), HS
      }
      _releaseOwnerSlot(SS) {
        const HS = this._slotByOwner?.get(SS);
        if (void 0 === HS) return;
        this._slotByOwner.delete(SS);
        const gS = this._ownerListsBySlot.get(HS);
        gS && (this._removeOwnerBacklink(gS), this._ownerListsBySlot.delete(HS)), this._ownerCount--, this._freeSlots.push(HS)
      }
      _removeOwnerBacklink(SS) {
        const HS = SS.indexOf(this); - 1 !== HS && (SS[HS] = SS[SS.length - 1], SS.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(SS, HS, gS) {
        this._checkNewFrame();
        let bS = this._uniformLocations[SS];
        if (void 0 === bS) {
          if (this._buffer) return void tS.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + SS);
          this.addUniform(SS, gS), bS = this._uniformLocations[SS]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let SS = 0; SS < gS; SS++) this._bufferData[bS + SS] = HS[SS];
          this._dataGeneration++
        } else {
          let SS = !1;
          for (let tS = 0; tS < gS; tS++)(16 === gS && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[bS + tS] !== Math.fround(HS[tS])) && (SS = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[bS + tS] = HS[tS]);
          this._needSync = this._needSync || SS, SS && this._dataGeneration++
        }
      }
      updateUniformArray(SS, HS, gS) {
        this._checkNewFrame();
        const XS = this._uniformLocations[SS];
        if (void 0 === XS) return void tS.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const xS = this._uniformArraySizes[SS];
        if (this._dynamic) {
          for (let SS = 0; SS < gS; SS++) this._bufferData[XS + SS] = HS[SS];
          this._dataGeneration++
        } else {
          let SS = !1,
            tS = 0,
            NS = 0;
          for (let qS = 0; qS < gS; qS++)
            if (this._bufferData[XS + 4 * NS + tS] !== bS.k.FloatRound(HS[qS]) && (SS = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[XS + 4 * NS + tS] = HS[qS]), tS++, tS === xS.strideSize) {
              for (; tS < 4; tS++) this._bufferData[XS + 4 * NS + tS] = 0;
              tS = 0, NS++
            } this._needSync = this._needSync || SS, SS && this._dataGeneration++
        }
      }
      _cacheMatrix(SS, HS) {
        this._checkNewFrame();
        const gS = this._valueCache[SS],
          tS = HS.updateFlag;
        return (void 0 === gS || gS !== tS) && (this._valueCache[SS] = tS, !0)
      }
      _updateMatrix3x3ForUniform(SS, HS) {
        for (let gS = 0; gS < 3; gS++) XS._TempBuffer[4 * gS] = HS[3 * gS], XS._TempBuffer[4 * gS + 1] = HS[3 * gS + 1], XS._TempBuffer[4 * gS + 2] = HS[3 * gS + 2], XS._TempBuffer[4 * gS + 3] = 0;
        this.updateUniform(SS, XS._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(SS, HS) {
        this._currentEffect.setMatrix3x3(SS, HS)
      }
      _updateMatrix2x2ForEffect(SS, HS) {
        this._currentEffect.setMatrix2x2(SS, HS)
      }
      _updateMatrix2x2ForUniform(SS, HS) {
        for (let gS = 0; gS < 2; gS++) XS._TempBuffer[4 * gS] = HS[2 * gS], XS._TempBuffer[4 * gS + 1] = HS[2 * gS + 1], XS._TempBuffer[4 * gS + 2] = 0, XS._TempBuffer[4 * gS + 3] = 0;
        this.updateUniform(SS, XS._TempBuffer, 8)
      }
      _updateFloatForEffect(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(SS + gS, HS)
      }
      _updateFloatForUniform(SS, HS) {
        XS._TempBuffer[0] = HS, this.updateUniform(SS, XS._TempBuffer, 1)
      }
      _updateFloat2ForEffect(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(SS + tS, HS, gS)
      }
      _updateFloat2ForUniform(SS, HS, gS) {
        XS._TempBuffer[0] = HS, XS._TempBuffer[1] = gS, this.updateUniform(SS, XS._TempBuffer, 2)
      }
      _updateFloat3ForEffect(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(SS + bS, HS, gS, tS)
      }
      _updateFloat3ForUniform(SS, HS, gS, tS) {
        XS._TempBuffer[0] = HS, XS._TempBuffer[1] = gS, XS._TempBuffer[2] = tS, this.updateUniform(SS, XS._TempBuffer, 3)
      }
      _updateFloat4ForEffect(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(SS + XS, HS, gS, tS, bS)
      }
      _updateFloat4ForUniform(SS, HS, gS, tS, bS) {
        XS._TempBuffer[0] = HS, XS._TempBuffer[1] = gS, XS._TempBuffer[2] = tS, XS._TempBuffer[3] = bS, this.updateUniform(SS, XS._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[SS]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(SS + gS, HS);
            break;
          case 3:
            this._currentEffect.setFloatArray3(SS + gS, HS);
            break;
          case 4:
            this._currentEffect.setFloatArray4(SS + gS, HS);
            break;
          default:
            this._currentEffect.setFloatArray(SS + gS, HS)
        }
      }
      _updateFloatArrayForUniform(SS, HS) {
        this.updateUniformArray(SS, HS, HS.length)
      }
      _updateArrayForEffect(SS, HS) {
        this._currentEffect.setArray(SS, HS)
      }
      _updateArrayForUniform(SS, HS) {
        this.updateUniformArray(SS, HS, HS.length)
      }
      _updateIntArrayForEffect(SS, HS) {
        this._currentEffect.setIntArray(SS, HS)
      }
      _updateIntArrayForUniform(SS, HS) {
        XS._TempBufferInt32View.set(HS), this.updateUniformArray(SS, XS._TempBuffer, HS.length)
      }
      _updateUIntArrayForEffect(SS, HS) {
        this._currentEffect.setUIntArray(SS, HS)
      }
      _updateUIntArrayForUniform(SS, HS) {
        XS._TempBufferUInt32View.set(HS), this.updateUniformArray(SS, XS._TempBuffer, HS.length)
      }
      _updateMatrixForEffect(SS, HS) {
        this._currentEffect.setMatrix(SS, HS)
      }
      _updateMatrixForUniform(SS, HS) {
        this._cacheMatrix(SS, HS) && this.updateUniform(SS, HS.lgS(), 16)
      }
      _updateMatricesForEffect(SS, HS) {
        this._currentEffect.setMatrices(SS, HS)
      }
      _updateMatricesForUniform(SS, HS) {
        this.updateUniform(SS, HS, HS.length)
      }
      _updateVector3ForEffect(SS, HS) {
        this._currentEffect.setVector3(SS, HS)
      }
      _updateVector3ForUniform(SS, HS) {
        XS._TempBuffer[0] = HS.x, XS._TempBuffer[1] = HS.y, XS._TempBuffer[2] = HS.z, this.updateUniform(SS, XS._TempBuffer, 3)
      }
      _updateVector4ForEffect(SS, HS) {
        this._currentEffect.setVector4(SS, HS)
      }
      _updateVector4ForUniform(SS, HS) {
        XS._TempBuffer[0] = HS.x, XS._TempBuffer[1] = HS.y, XS._TempBuffer[2] = HS.z, XS._TempBuffer[3] = HS.w, this.updateUniform(SS, XS._TempBuffer, 4)
      }
      _updateColor3ForEffect(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(SS + gS, HS)
      }
      _updateColor3ForUniform(SS, HS) {
        XS._TempBuffer[0] = HS.r, XS._TempBuffer[1] = HS.g, XS._TempBuffer[2] = HS.b, this.updateUniform(SS, XS._TempBuffer, 3)
      }
      _updateColor4ForEffect(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(SS + tS, HS, gS)
      }
      _updateDirectColor4ForEffect(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(SS + gS, HS)
      }
      _updateColor4ForUniform(SS, HS, gS) {
        XS._TempBuffer[0] = HS.r, XS._TempBuffer[1] = HS.g, XS._TempBuffer[2] = HS.b, XS._TempBuffer[3] = gS, this.updateUniform(SS, XS._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(SS, HS) {
        XS._TempBuffer[0] = HS.r, XS._TempBuffer[1] = HS.g, XS._TempBuffer[2] = HS.b, XS._TempBuffer[3] = HS.a, this.updateUniform(SS, XS._TempBuffer, 4)
      }
      _updateIntForEffect(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(SS + gS, HS)
      }
      _updateIntForUniform(SS, HS) {
        XS._TempBufferInt32View[0] = HS, this.updateUniform(SS, XS._TempBuffer, 1)
      }
      _updateInt2ForEffect(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(SS + tS, HS, gS)
      }
      _updateInt2ForUniform(SS, HS, gS) {
        XS._TempBufferInt32View[0] = HS, XS._TempBufferInt32View[1] = gS, this.updateUniform(SS, XS._TempBuffer, 2)
      }
      _updateInt3ForEffect(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(SS + bS, HS, gS, tS)
      }
      _updateInt3ForUniform(SS, HS, gS, tS) {
        XS._TempBufferInt32View[0] = HS, XS._TempBufferInt32View[1] = gS, XS._TempBufferInt32View[2] = tS, this.updateUniform(SS, XS._TempBuffer, 3)
      }
      _updateInt4ForEffect(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(SS + XS, HS, gS, tS, bS)
      }
      _updateInt4ForUniform(SS, HS, gS, tS, bS) {
        XS._TempBufferInt32View[0] = HS, XS._TempBufferInt32View[1] = gS, XS._TempBufferInt32View[2] = tS, XS._TempBufferInt32View[3] = bS, this.updateUniform(SS, XS._TempBuffer, 4)
      }
      _updateUIntForEffect(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(SS + gS, HS)
      }
      _updateUIntForUniform(SS, HS) {
        XS._TempBufferUInt32View[0] = HS, this.updateUniform(SS, XS._TempBuffer, 1)
      }
      _updateUInt2ForEffect(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(SS + tS, HS, gS)
      }
      _updateUInt2ForUniform(SS, HS, gS) {
        XS._TempBufferUInt32View[0] = HS, XS._TempBufferUInt32View[1] = gS, this.updateUniform(SS, XS._TempBuffer, 2)
      }
      _updateUInt3ForEffect(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(SS + bS, HS, gS, tS)
      }
      _updateUInt3ForUniform(SS, HS, gS, tS) {
        XS._TempBufferUInt32View[0] = HS, XS._TempBufferUInt32View[1] = gS, XS._TempBufferUInt32View[2] = tS, this.updateUniform(SS, XS._TempBuffer, 3)
      }
      _updateUInt4ForEffect(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(SS + XS, HS, gS, tS, bS)
      }
      _updateUInt4ForUniform(SS, HS, gS, tS, bS) {
        XS._TempBufferUInt32View[0] = HS, XS._TempBufferUInt32View[1] = gS, XS._TempBufferUInt32View[2] = tS, XS._TempBufferUInt32View[3] = bS, this.updateUniform(SS, XS._TempBuffer, 4)
      }
      setTexture(SS, HS) {
        this._currentEffect.setTexture(SS, HS)
      }
      setTextureArray(SS, HS) {
        this._currentEffect.setTextureArray(SS, HS)
      }
      bindTexture(SS, HS) {
        this._currentEffect._bindTexture(SS, HS)
      }
      updateUniformDirectly(SS, HS) {
        this.updateUniform(SS, HS, HS.length), this.update()
      }
      bindToEffect(SS, HS) {
        this._currentEffect = SS, this._currentEffectName = HS
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(SS) {
        if (!this._buffers) return this._buffer === SS;
        for (let HS = 0; HS < this._buffers.length; ++HS) {
          if (this._buffers[HS][0] === SS) return this._bufferIndex = HS, this._buffer = SS, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[HS][1] && (this._bufferData.set(this._buffers[HS][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(SS) {
        return void 0 !== this._uniformLocations[SS]
      }
      dispose() {
        if (this._noUBO) return;
        const SS = this._engine._uniformBuffers,
          HS = SS.indexOf(this);
        if (-1 !== HS && (SS[HS] = SS[SS.length - 1], SS.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let SS = 0; SS < this._buffers.length; ++SS) {
            const HS = this._buffers[SS][0];
            this._engine._releaseBuffer(HS)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    XS._MAX_UNIFORM_SIZE = 256, XS._TempBuffer = new Float32Array(XS._MAX_UNIFORM_SIZE), XS._TempBufferInt32View = new Int32Array(XS._TempBuffer.buffer), XS._TempBufferUInt32View = new Uint32Array(XS._TempBuffer.buffer)
  },
  39956: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => bS
    });
    var tS = gS(39959);
    class bS extends tS.b {
      constructor(SS) {
        super(), this._buffer = SS
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  40056: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => qS,
      e: () => uS
    });
    const tS = "__bjs_serializable__",
      bS = new WeakMap;

    function XS(SS, HS) {
      return Object.prototype.hasOwnProperty.call(SS, HS)
    }
    const xS = function() {
      let SS = Symbol.metadata;
      return SS || (SS = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: SS
      })), SS
    }();

    function NS(SS) {
      return "function" === typeof SS ? SS : SS?.constructor
    }

    function qS(SS) {
      if (!SS) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(xS)}) polyfill must run before decorated classes are evaluated.`);
      return XS(SS, tS) || (SS[tS] = {}), SS[tS]
    }

    function uS(SS) {
      const HS = NS(SS),
        gS = HS ? HS[xS] : void 0;
      if (!gS) return {};
      const qS = bS.get(gS);
      if (qS) return qS;
      const uS = {},
        IS = [];
      let fS = gS;
      for (; fS;) IS.push(fS), fS = Object.getPrototypeOf(fS);
      for (const bS of IS)
        if (XS(bS, tS)) {
          const SS = bS[tS];
          for (const HS in SS) uS[HS] = SS[HS]
        } return bS.set(gS, uS), uS
    }
  },
  40048: (SS, HS, gS) => {
    gS.d(HS, {
      B: () => NS,
      E: () => IS,
      I: () => fS,
      M: () => xS,
      b: () => PS,
      d: () => XS,
      h: () => nS,
      j: () => aS,
      k: () => qS,
      m: () => KS,
      p: () => uS,
      r: () => GS,
      t: () => kS,
      x: () => jS
    });
    var tS = gS(40056);

    function bS(SS, HS) {
      return (gS, bS) => {
        if (!bS.metadata) return;
        const XS = String(bS.name),
          xS = (0, tS.b)(bS.metadata);
        xS[XS] || (xS[XS] = {
          type: SS,
          sourceName: HS
        })
      }
    }

    function XS(SS) {
      return function(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (gS, tS) => {
          const bS = HS || "_" + String(tS.name);
          return {
            init(SS) {
              return void 0 === SS && bS in this || (this[bS] = SS), SS
            },
            get() {
              return this[bS]
            },
            set(HS) {
              "function" === typeof this[bS]?.equals && this[bS].equals(HS) || this[bS] !== HS && (this[bS] = HS, this[SS]())
            }
          }
        }
      }(SS, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function xS(SS) {
      return bS(0, SS)
    }

    function NS(SS) {
      return bS(1, SS)
    }

    function qS(SS) {
      return bS(2, SS)
    }

    function uS(SS) {
      return bS(3, SS)
    }

    function IS(SS) {
      return bS(4, SS)
    }

    function fS(SS) {
      return bS(5, SS)
    }

    function kS(SS) {
      return bS(6, SS)
    }

    function aS(SS) {
      return bS(7, SS)
    }

    function KS(SS) {
      return bS(8, SS)
    }

    function jS(SS) {
      return bS(10, SS)
    }

    function GS(SS) {
      return bS(12, SS)
    }

    function CS(SS, HS, gS) {
      const tS = String(HS.name);
      let bS = null;
      const XS = function() {
        if (null === bS) {
          bS = SS, "undefined" !== typeof _native && _native[tS] && (bS = gS(_native[tS], SS));
          const xS = this && (HS.static ? this : Object.getPrototypeOf(this));
          xS?.[tS] === XS && (xS[tS] = bS)
        }
        for (var xS = arguments.length, NS = new Array(xS), qS = 0; qS < xS; qS++) NS[qS] = arguments[qS];
        return bS.apply(this, NS)
      };
      return XS
    }

    function nS(SS, HS) {
      return CS(SS, HS, (SS => SS))
    }

    function PS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (gS, tS) => {
        const bS = HS || "_" + String(tS.name);
        return {
          get() {
            return this[bS]?.value
          },
          set(HS) {
            "function" === typeof this[bS]?.value?.equals && this[bS].value.equals(HS) || this[bS].value !== HS && (this[bS].value = HS, this[SS]())
          }
        }
      }
    }
    nS.filter = function(SS) {
      return (HS, gS) => CS(HS, gS, ((HS, gS) => function() {
        for (var tS = arguments.length, bS = new Array(tS), XS = 0; XS < tS; XS++) bS[XS] = arguments[XS];
        return SS(...bS) ? HS(...bS) : gS.apply(this, bS)
      }))
    }
  },
  40068: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => uS
    });
    var tS = gS(39926),
      bS = gS(40077),
      XS = gS(37300),
      xS = gS(37117),
      NS = gS(40056);
    const qS = function(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const XS = SS();
      bS.d && bS.d.HasTags(HS) && bS.d.AddTagsTo(XS, bS.d.GetTags(HS, !0));
      const xS = (0, NS.e)(XS),
        qS = {};
      for (const bS in xS) {
        const SS = xS[bS],
          NS = HS[bS],
          IS = SS.type;
        if (void 0 !== NS && null !== NS && ("uniqueId" !== bS || uS.AllowLoadingUniqueId)) switch (IS) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof NS.slice ? XS[bS] = NS.slice() : XS[bS] = NS;
            break;
          case 1:
            tS.cloneTexturesOnlyOnce && qS[NS.uniqueId] ? XS[bS] = qS[NS.uniqueId] : (XS[bS] = gS || NS.isRenderTarget ? NS : NS.clone(), qS[NS.uniqueId] = XS[bS]);
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
            XS[bS] = gS ? NS : NS.clone()
        }
      }
      return XS
    };
    class uS {
      static AppendSerializedAnimations(SS, HS) {
        if (SS.animations) {
          HS.animations = [];
          for (let gS = 0; gS < SS.animations.length; gS++) {
            const tS = SS.animations[gS];
            HS.animations.push(tS.serialize())
          }
        }
      }
      static Serialize(SS, HS) {
        HS || (HS = {}), bS.d && (HS.tags = bS.d.GetTags(SS));
        const gS = (0, NS.e)(SS);
        for (const tS in gS) {
          const bS = gS[tS],
            XS = bS.sourceName || tS,
            xS = bS.type,
            NS = SS[tS];
          if (void 0 !== NS && null !== NS && ("uniqueId" !== tS || uS.AllowLoadingUniqueId)) switch (xS) {
            case 0:
              Array.isArray(NS) ? HS[XS] = NS.slice() : HS[XS] = NS;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              HS[XS] = NS.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              HS[XS] = NS.lgS();
              break;
            case 6:
            case 11:
              HS[XS] = NS.id
          }
        }
        return HS
      }
      static ParseProperties(SS, HS, gS, tS) {
        tS || (tS = "");
        const bS = (0, NS.e)(HS);
        for (const NS in bS) {
          const qS = bS[NS],
            IS = SS[qS.sourceName || NS],
            fS = qS.type;
          if (void 0 !== IS && null !== IS && ("uniqueId" !== NS || uS.AllowLoadingUniqueId)) {
            const SS = HS;
            switch (fS) {
              case 0:
                SS[NS] = IS;
                break;
              case 1:
                gS && (SS[NS] = uS._TextureParser(IS, gS, tS));
                break;
              case 2:
                SS[NS] = XS.b.FromArray(IS);
                break;
              case 3:
                SS[NS] = uS._FresnelParametersParser(IS);
                break;
              case 4:
                SS[NS] = xS.m.FromArray(IS);
                break;
              case 5:
                SS[NS] = xS.n.FromArray(IS);
                break;
              case 6:
                gS && (SS[NS] = gS.getLastMeshById(IS));
                break;
              case 7:
                SS[NS] = uS._ColorCurvesParser(IS);
                break;
              case 8:
                SS[NS] = XS.c.FromArray(IS);
                break;
              case 9:
                SS[NS] = uS._ImageProcessingConfigurationParser(IS);
                break;
              case 10:
                SS[NS] = xS.i.FromArray(IS);
                break;
              case 11:
                gS && (SS[NS] = gS.getCameraById(IS));
                break;
              case 12:
                SS[NS] = xS.e.FromArray(IS);
                break;
              case 13:
                SS[NS] = xS.r.FromArray(IS)
            }
          }
        }
      }
      static Parse(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const XS = SS();
        return bS.d && bS.d.AddTagsTo(XS, HS.tags), uS.ParseProperties(HS, XS, gS, tS), XS
      }
      static Clone(SS, HS) {
        return qS(SS, HS, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(SS, HS) {
        return qS(SS, HS, !0)
      }
    }
    uS.AllowLoadingUniqueId = !1, uS._ImageProcessingConfigurationParser = SS => {
      throw (0, tS.l)("ImageProcessingConfiguration")
    }, uS._FresnelParametersParser = SS => {
      throw (0, tS.l)("FresnelParameters")
    }, uS._ColorCurvesParser = SS => {
      throw (0, tS.l)("ColorCurves")
    }, uS._TextureParser = (SS, HS, gS) => {
      throw (0, tS.l)("Texture")
    }
  },
  39987: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => bS
    });
    var tS = gS(39946);
    class bS {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = bS.Enabled, this._lastSecValueCount++
      }
      addCount(SS, HS) {
        bS.Enabled && (this._current += SS, this._hasCurrentValue = !0, HS && this._fetchResult())
      }
      beginMonitoring() {
        bS.Enabled && (this._startMonitoringTime = tS.e.Now)
      }
      endMonitoring() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!bS.Enabled) return;
        SS && this.fetchNewFrame();
        const HS = tS.e.Now;
        this._current = HS - this._startMonitoringTime, this._hasCurrentValue = !0, SS && this._fetchResult()
      }
      uD() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const SS = tS.e.Now;
        SS - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = SS, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    bS.Enabled = !0
  },
  40144: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS,
      f: () => tS
    });
    class tS {
      constructor(SS) {
        this.length = 0, this.data = new Array(SS), this._id = tS._GlobalId++
      }
      push(SS) {
        this.data[this.length++] = SS, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(SS) {
        for (let HS = 0; HS < this.length; HS++) SS(this.data[HS])
      }
      sort(SS) {
        this.data.sort(SS)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(SS) {
        if (0 !== SS.length) {
          this.length + SS.length > this.data.length && (this.data.length = 2 * (this.length + SS.length));
          for (let HS = 0; HS < SS.length; HS++) this.data[this.length++] = (SS.data || SS)[HS]
        }
      }
      indexOf(SS) {
        const HS = this.data.indexOf(SS);
        return HS >= this.length ? -1 : HS
      }
      contains(SS) {
        return -1 !== this.indexOf(SS)
      }
    }
    tS._GlobalId = 0;
    class bS extends tS {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(SS) {
        super.push(SS), SS.__smartArrayFlags || (SS.__smartArrayFlags = {}), SS.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(SS) {
        return (!SS.__smartArrayFlags || SS.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(SS), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(SS) {
        if (0 !== SS.length) {
          this.length + SS.length > this.data.length && (this.data.length = 2 * (this.length + SS.length));
          for (let HS = 0; HS < SS.length; HS++) {
            const gS = (SS.data || SS)[HS];
            this.pushNoDuplicate(gS)
          }
        }
      }
    }
  },
  40077: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS
    });
    class tS {
      static Eval(SS, HS) {
        return "true" === (SS = SS.match(/\([^()]*\)/g) ? SS.replace(/\([^()]*\)/g, (SS => (SS = SS.slice(1, SS.length - 1), tS._HandleParenthesisContent(SS, HS)))) : tS._HandleParenthesisContent(SS, HS)) || "false" !== SS && tS.Eval(SS, HS)
      }
      static _HandleParenthesisContent(SS, HS) {
        let gS;
        HS = HS || (SS => "true" === SS);
        const bS = SS.split("||");
        for (const XS in bS)
          if (Object.prototype.hasOwnProperty.call(bS, XS)) {
            let SS = tS._SimplifyNegation(bS[XS].trim());
            const xS = SS.split("&&");
            if (xS.length > 1)
              for (let bS = 0; bS < xS.length; ++bS) {
                const XS = tS._SimplifyNegation(xS[bS].trim());
                if (gS = "true" !== XS && "false" !== XS ? "!" === XS[0] ? !HS(XS.substring(1)) : HS(XS) : "true" === XS, !gS) {
                  SS = "false";
                  break
                }
              }
            if (gS || "true" === SS) {
              gS = !0;
              break
            }
            gS = "true" !== SS && "false" !== SS ? "!" === SS[0] ? !HS(SS.substring(1)) : HS(SS) : "true" === SS
          } return gS ? "true" : "false"
      }
      static _SimplifyNegation(SS) {
        return "!true" === (SS = (SS = SS.replace(/^[\s!]+/, (SS => (SS = SS.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? SS = "false" : "!false" === SS && (SS = "true"), SS
      }
    }
    class bS {
      static EnableFor(SS) {
        SS._tags = SS._tags || {}, SS.hasTags = () => bS.HasTags(SS), SS.addTags = HS => bS.AddTagsTo(SS, HS), SS.removeTags = HS => bS.RemoveTagsFrom(SS, HS), SS.matchesTagsQuery = HS => bS.MatchesQuery(SS, HS)
      }
      static DisableFor(SS) {
        delete SS._tags, delete SS.hasTags, delete SS.addTags, delete SS.removeTags, delete SS.matchesTagsQuery
      }
      static HasTags(SS) {
        if (!SS._tags) return !1;
        const HS = SS._tags;
        for (const gS in HS)
          if (Object.prototype.hasOwnProperty.call(HS, gS)) return !0;
        return !1
      }
      static GetTags(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!SS._tags) return null;
        if (HS) {
          const HS = [];
          for (const gS in SS._tags) Object.prototype.hasOwnProperty.call(SS._tags, gS) && !0 === SS._tags[gS] && HS.push(gS);
          return HS.join(" ")
        }
        return SS._tags
      }
      static AddTagsTo(SS, HS) {
        if (!HS) return;
        if ("string" !== typeof HS) return;
        const gS = HS.split(" ");
        for (const tS of gS) bS._AddTagTo(SS, tS)
      }
      static _AddTagTo(SS, HS) {
        "" !== (HS = HS.trim()) && "true" !== HS && "false" !== HS && (HS.match(/[\s]/) || HS.match(/^([!]|([|]|[&]){2})/) || (bS.EnableFor(SS), SS._tags[HS] = !0))
      }
      static RemoveTagsFrom(SS, HS) {
        if (!bS.HasTags(SS)) return;
        const gS = HS.split(" ");
        for (const tS in gS) bS._RemoveTagFrom(SS, gS[tS])
      }
      static _RemoveTagFrom(SS, HS) {
        delete SS._tags[HS]
      }
      static MatchesQuery(SS, HS) {
        return void 0 === HS || ("" === HS ? bS.HasTags(SS) : tS.Eval(HS, (HS => bS.HasTags(SS) && SS._tags[HS])))
      }
    }
  },
  40189: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS
    });
    var tS = gS(40183),
      bS = gS(37144);
    class XS {
      constructor(SS) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new bS.e, this._scene = SS
      }
      _prepareBuffers() {
        if (this._vertexBuffers[tS.h.PositionKind]) return;
        const SS = [];
        SS.push(1, 1), SS.push(-1, 1), SS.push(-1, -1), SS.push(1, -1), this._vertexBuffers[tS.h.PositionKind] = new tS.h(this._scene.AK(), SS, tS.h.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const SS = [];
        SS.push(0), SS.push(1), SS.push(2), SS.push(0), SS.push(2), SS.push(3), this._indexBuffer = this._scene.AK().createIndexBuffer(SS)
      }
      _getActivePostProcesses(SS) {
        const HS = this._activePostProcesses;
        HS.length = 0;
        for (let gS = 0; gS < SS.length; gS++) {
          const tS = SS[gS];
          tS && HS.push(tS)
        }
        return HS
      }
      _rebuild() {
        const SS = this._vertexBuffers[tS.h.PositionKind];
        SS && (SS._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gS = this._scene.activeCamera;
        return !!gS && (HS = HS || this._getActivePostProcesses(gS._postProcesses), !(!HS || 0 === HS.length || !this._scene.postProcessesEnabled) && (HS[0].activate(gS, SS, null !== HS && void 0 !== HS), !0))
      }
      directRender(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          XS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          xS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : SS.length;
        const NS = this._scene.AK();
        for (let qS = 0; qS < xS; qS++) {
          qS < SS.length - 1 ? SS[qS + 1].activate(this._scene.activeCamera || this._scene, HS?.texture) : (HS ? NS.bindFramebuffer(HS, tS, void 0, void 0, gS, bS) : XS || NS.restoreDefaultFramebuffer(), NS._debugInsertMarker?.(`post process ${SS[qS].name} output`));
          const xS = SS[qS],
            uS = xS.apply();
          uS && (xS.onBeforeRenderObservable.notifyObservers(uS), this._prepareBuffers(), NS.bindBuffers(this._vertexBuffers, this._indexBuffer, uS), NS.drawElementsType(0, 0, 6), xS.onAfterRenderObservable.notifyObservers(uS))
        }
        NS.setDepthBuffer(!0), NS.setDepthWrite(!0)
      }
      _finalizeFrame(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const XS = this._scene.activeCamera;
        if (!XS) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (tS = tS || this._getActivePostProcesses(XS._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const xS = this._scene.AK();
        for (let NS = 0, qS = tS.length; NS < qS; NS++) {
          const uS = tS[NS];
          if (NS < qS - 1 ? uS._outputTexture = tS[NS + 1].activate(XS, HS?.texture) : (HS ? (xS.bindFramebuffer(HS, gS, void 0, void 0, bS), uS._outputTexture = HS) : (xS.restoreDefaultFramebuffer(), uS._outputTexture = null), xS._debugInsertMarker?.(`post process ${tS[NS].name} output`)), SS) break;
          const IS = uS.apply();
          IS && (uS.onBeforeRenderObservable.notifyObservers(IS), this._prepareBuffers(), xS.bindBuffers(this._vertexBuffers, this._indexBuffer, IS), xS.drawElementsType(0, 0, 6), uS.onAfterRenderObservable.notifyObservers(IS))
        }
        xS.setDepthBuffer(!0), xS.setDepthWrite(!0), xS.setAlphaMode(0)
      }
      dispose() {
        const SS = this._vertexBuffers[tS.h.PositionKind];
        SS && (SS.dispose(), this._vertexBuffers[tS.h.PositionKind] = null), this._indexBuffer && (this._scene.AK()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  40204: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => uS
    });
    var tS = gS(40144),
      bS = gS(37117);
    const XS = [],
      xS = [];
    let NS = !1;

    function qS(SS, HS) {
      for (; SS.length < HS;) SS.push(void 0)
    }
    class uS {
      set opaqueSortCompareFn(SS) {
        this._opaqueSortCompareFn = SS || uS.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(SS) {
        this._alphaTestSortCompareFn = SS || uS.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(SS) {
        this._transparentSortCompareFn = SS || uS.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = SS, this._opaqueSubMeshes = new tS.f(256), this._transparentSubMeshes = new tS.f(256), this._alphaTestSubMeshes = new tS.f(256), this._depthOnlySubMeshes = new tS.f(256), this._particleSystems = new tS.f(256), this._spriteManagers = new tS.f(256), this._empty = !0, this._edgesRenderers = new tS.b(16), this.disableDepthPrePass = !1, this._scene = HS, this.opaqueSortCompareFn = gS, this.alphaTestSortCompareFn = bS, this.transparentSortCompareFn = XS
      }
      render(SS, HS, gS, tS) {
        let bS = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          XS = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          xS = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          NS = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          qS = arguments.length > 8 ? arguments[8] : void 0;
        if (SS) return void SS(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const uS = this._scene.AK();
        bS && 0 !== this._depthOnlySubMeshes.length && (uS.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), uS.setColorWrite(!0)), XS && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), xS && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const IS = uS.getStencilBuffer();
        if (uS.setStencilBuffer(!1), HS && this._renderSprites(), gS && this._renderParticles(tS), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), NS && (qS || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (uS.setStencilBuffer(IS), qS) qS(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const SS = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            SS.length && this._renderTransparent(SS)
          } else this._renderTransparent(this._transparentSubMeshes);
          uS.setAlphaMode(0)
        }
        if (uS.setStencilBuffer(!1), XS && this._edgesRenderers.length) {
          for (let SS = 0; SS < this._edgesRenderers.length; SS++) this._edgesRenderers.data[SS].render();
          uS.setAlphaMode(0)
        }
        uS.setStencilBuffer(IS)
      }
      _renderOpaqueSorted(SS) {
        uS._RenderSorted(SS, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(SS) {
        uS._RenderSorted(SS, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(SS) {
        uS._RenderSorted(SS, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(SS, HS, gS, tS, XS) {
        let IS, fS = 0;
        const kS = gS ? gS.globalPosition : uS._ZeroVector;
        if (tS && HS !== uS.PainterSortCompare)
          for (; fS < SS.length; fS++) IS = SS.data[fS], IS._alphaIndex = IS.getMesh().alphaIndex, IS._distanceToCamera = bS.n.Distance(IS.hA().QtS.centerWorld, kS);
        const aS = SS.length;
        let KS = SS.data;
        const jS = aS !== KS.length && !NS;
        if (jS) {
          for (NS = !0, qS(xS, aS), fS = 0; fS < aS; fS++) xS[fS] = KS[fS];
          KS = xS
        } else aS !== KS.length && (KS = KS.slice(0, aS));
        try {
          HS && uS._StableSort(KS, aS, HS), uS._DrawSorted(KS, aS, tS, XS)
        } finally {
          jS && (xS.fill(void 0, 0, aS), NS = !1)
        }
      }
      static _DrawSorted(SS, HS, gS, tS) {
        let bS;
        const XS = SS[0].getMesh().lL();
        for (let xS = 0; xS < HS; xS++) {
          if (bS = SS[xS], XS._activeMeshesFrozenButKeepClipping && !bS.isInFrustum(XS._frustumPlanes)) continue;
          let HS = !1;
          if (gS) {
            const SS = bS.zK();
            if (SS && SS.needDepthPrePass && !tS) {
              HS = !0;
              const gS = SS.lL().AK();
              gS.setColorWrite(!1), gS.setAlphaMode(0), bS.render(!1), gS.setColorWrite(!0)
            }
          }
          const NS = bS._renderingMesh;
          !HS && NS._renderRunFollower(bS, gS) || bS.render(gS)
        }
      }
      static _StableSort(SS, HS, gS) {
        for (let tS = 0; tS < HS; tS += 16) {
          const bS = Math.min(tS + 16, HS);
          for (let HS = tS + 1; HS < bS; HS++) {
            const bS = SS[HS];
            let XS = tS,
              xS = HS;
            for (; XS < xS;) {
              const HS = XS + xS >>> 1;
              gS(bS, SS[HS]) < 0 ? xS = HS : XS = HS + 1
            }
            for (let gS = HS; gS > XS; gS--) SS[gS] = SS[gS - 1];
            SS[XS] = bS
          }
        }
        if (!(HS <= 16)) {
          qS(XS, HS);
          try {
            let tS = SS,
              bS = XS;
            for (let SS = 16; SS < HS; SS *= 2) {
              for (let xS = 0; xS < HS; xS += 2 * SS) {
                const XS = Math.min(xS + SS, HS),
                  NS = Math.min(xS + 2 * SS, HS);
                let qS = xS,
                  uS = XS,
                  IS = xS;
                if (XS < NS && gS(tS[XS], tS[XS - 1]) < 0)
                  for (; qS < XS && uS < NS;) bS[IS++] = gS(tS[uS], tS[qS]) < 0 ? tS[uS++] : tS[qS++];
                for (; qS < XS;) bS[IS++] = tS[qS++];
                for (; uS < NS;) bS[IS++] = tS[uS++]
              }
              const XS = bS;
              bS = tS, tS = XS
            }
            if (tS !== SS)
              for (let gS = 0; gS < HS; gS++) SS[gS] = tS[gS]
          } finally {
            XS.fill(void 0, 0, HS)
          }
        }
      }
      static defaultTransparentSortCompare(SS, HS) {
        return SS._alphaIndex > HS._alphaIndex ? 1 : SS._alphaIndex < HS._alphaIndex ? -1 : uS.backToFrontSortCompare(SS, HS)
      }
      static backToFrontSortCompare(SS, HS) {
        return SS._distanceToCamera < HS._distanceToCamera ? 1 : SS._distanceToCamera > HS._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(SS, HS) {
        return SS._distanceToCamera < HS._distanceToCamera ? -1 : SS._distanceToCamera > HS._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(SS, HS) {
        const gS = SS.getMesh(),
          tS = HS.getMesh();
        return gS.material && tS.material ? gS.material.uniqueId - tS.material.uniqueId : gS.uniqueId - tS.uniqueId
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
      dispatch(SS, HS, gS) {
        void 0 === HS && (HS = SS.getMesh()), void 0 === gS && (gS = SS.zK()), null !== gS && void 0 !== gS && (gS.needAlphaBlendingForMesh(HS) ? this._transparentSubMeshes.push(SS) : gS.needAlphaTestingForMesh(HS) ? (gS.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(SS), this._alphaTestSubMeshes.push(SS)) : (gS.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(SS), this._opaqueSubMeshes.push(SS)), HS._renderingGroup = this, HS._edgesRenderer && HS.isEnabled() && HS.isVisible && HS._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(HS._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(SS) {
        this._spriteManagers.push(SS), this._empty = !1
      }
      dispatchParticles(SS) {
        this._particleSystems.push(SS), this._empty = !1
      }
      _renderParticles(SS) {
        if (0 === this._particleSystems.length) return;
        const HS = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let gS = 0; gS < this._particleSystems.length; gS++) {
          const tS = this._particleSystems.data[gS];
          if (0 === (HS && HS.layerMask & tS.layerMask)) continue;
          const bS = tS.emitter;
          bS.position && SS && -1 === SS.indexOf(bS) || this._scene._activeParticles.addCount(tS.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const SS = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let HS = 0; HS < this._spriteManagers.length; HS++) {
          const gS = this._spriteManagers.data[HS];
          0 !== (SS && SS.layerMask & gS.layerMask) && gS.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    uS._ZeroVector = bS.n.Zero()
  },
  40196: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => XS
    });
    var tS = gS(40204);
    class bS {}
    class XS {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(SS) {
        this._disableDepthPrePass = SS;
        for (const HS of this._renderingGroups) HS.disableDepthPrePass = SS
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(SS) {
        SS !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = SS, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const SS of this._scene.meshes)
          if (SS.dD)
            for (const HS of SS.dD) HS._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const SS of this._scene.spriteManagers) SS._wasDispatched = !1;
        for (const SS of this._scene.zD) SS._wasDispatched = !1
      }
      constructor(SS) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new bS, this._maintainStateBetweenFrames = !1, this._scene = SS;
        for (let HS = XS.MIN_RENDERINGGROUPS; HS < XS.MAX_RENDERINGGROUPS; HS++) this._autoClearDepthStencil[HS] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(SS) {
        const HS = SS || 0;
        return this._prepareRenderingGroup(HS), this._renderingGroups[HS]
      }
      _clearDepthStencilBuffer() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.AK().clear(null, !1, SS, HS), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(SS, HS, gS, tS) {
        let bS = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          xS = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          NS = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          qS = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          uS = arguments.length > 8 ? arguments[8] : void 0,
          IS = arguments.length > 9 ? arguments[9] : void 0;
        const fS = this._renderingGroupInfo;
        fS.Bj = this._scene, fS.camera = this._scene.activeCamera, fS.renderingManager = this;
        const kS = IS ?? this._scene.spriteManagers;
        if (kS && tS)
          for (let XS = 0; XS < kS.length; XS++) {
            const SS = kS[XS];
            this.dispatchSprites(SS)
          }
        for (let aS = XS.MIN_RENDERINGGROUPS; aS < XS.MAX_RENDERINGGROUPS; aS++) {
          this._depthStencilBufferAlreadyCleaned = aS === XS.MIN_RENDERINGGROUPS;
          const IS = this._renderingGroups[aS];
          if (!IS || IS._empty) continue;
          const kS = 1 << aS;
          if (fS.renderingGroupId = aS, this._scene.onBeforeRenderingGroupObservable.notifyObservers(fS, kS), XS.AUTOCLEAR) {
            const SS = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(aS) : this._autoClearDepthStencil[aS];
            SS && SS.autoClear && this._clearDepthStencilBuffer(SS.depth, SS.stencil)
          }
          for (let SS = 0, HS = this._scene._beforeRenderingGroupDrawStage; SS < HS.length; SS++) {
            HS[SS].action(aS)
          }
          IS.render(SS, tS, gS, HS, bS, xS, NS, qS, uS);
          for (let SS = 0, HS = this._scene._afterRenderingGroupDrawStage; SS < HS.length; SS++) {
            HS[SS].action(aS)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(fS, kS)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let SS = XS.MIN_RENDERINGGROUPS; SS < XS.MAX_RENDERINGGROUPS; SS++) {
            const HS = this._renderingGroups[SS];
            HS && HS.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let SS = XS.MIN_RENDERINGGROUPS; SS < XS.MAX_RENDERINGGROUPS; SS++) {
            const HS = this._renderingGroups[SS];
            HS && HS.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let SS = XS.MIN_RENDERINGGROUPS; SS < XS.MAX_RENDERINGGROUPS; SS++) {
          const HS = this._renderingGroups[SS];
          HS && HS.dispose()
        }
      }
      _prepareRenderingGroup(SS) {
        void 0 === this._renderingGroups[SS] && (this._renderingGroups[SS] = new tS.e(SS, this._scene, this._customOpaqueSortCompareFn[SS], this._customAlphaTestSortCompareFn[SS], this._customTransparentSortCompareFn[SS]), this._renderingGroups[SS].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(SS) {
        this.maintainStateBetweenFrames && SS._wasDispatched || (SS._wasDispatched = !0, this.getRenderingGroup(SS.renderingGroupId).dispatchSprites(SS))
      }
      dispatchParticles(SS) {
        this.maintainStateBetweenFrames && SS._wasDispatched || (SS._wasDispatched = !0, this.getRenderingGroup(SS.renderingGroupId).dispatchParticles(SS))
      }
      dispatch(SS, HS, gS) {
        void 0 === HS && (HS = SS.getMesh()), this.maintainStateBetweenFrames && SS._wasDispatched || (SS._wasDispatched = !0, this.getRenderingGroup(HS.renderingGroupId).dispatch(SS, HS, gS))
      }
      setRenderingOrder(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[SS] = HS, this._customAlphaTestSortCompareFn[SS] = gS, this._customTransparentSortCompareFn[SS] = tS, this._renderingGroups[SS]) {
          const HS = this._renderingGroups[SS];
          HS.opaqueSortCompareFn = this._customOpaqueSortCompareFn[SS], HS.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[SS], HS.transparentSortCompareFn = this._customTransparentSortCompareFn[SS]
        }
      }
      setRenderingAutoClearDepthStencil(SS, HS) {
        let gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          tS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[SS] = {
          autoClear: HS,
          depth: gS,
          stencil: tS
        }
      }
      getAutoClearDepthStencilSetup(SS) {
        return this._autoClearDepthStencil[SS]
      }
    }
    XS.MAX_RENDERINGGROUPS = 4, XS.MIN_RENDERINGGROUPS = 0, XS.AUTOCLEAR = !0
  },
  39948: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS
    });
    class tS {
      constructor(SS) {
        this._supportBlendParametersPerTarget = SS, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(SS) {
        this.setAlphaBlend(SS)
      }
      setAlphaBlend(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[HS] !== SS && (SS ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[HS] = SS, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(SS, HS, gS, tS) {
        this._blendConstants[0] === SS && this._blendConstants[1] === HS && this._blendConstants[2] === gS && this._blendConstants[3] === tS || (this._blendConstants[0] = SS, this._blendConstants[1] = HS, this._blendConstants[2] = gS, this._blendConstants[3] = tS, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(SS, HS, gS, tS) {
        const bS = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[bS + 0] === SS && this._blendFunctionParameters[bS + 1] === HS && this._blendFunctionParameters[bS + 2] === gS && this._blendFunctionParameters[bS + 3] === tS || (this._blendFunctionParameters[bS + 0] = SS, this._blendFunctionParameters[bS + 1] = HS, this._blendFunctionParameters[bS + 2] = gS, this._blendFunctionParameters[bS + 3] = tS, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(SS, HS) {
        const gS = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[gS + 0] === SS && this._blendEquationParameters[gS + 1] === HS || (this._blendEquationParameters[gS + 0] = SS, this._blendEquationParameters[gS + 1] = HS, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== HS && (this._numTargets = HS, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== gS && (this._blendDisabledTargetsMask = gS, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (SS.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === HS || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (HS > 1 && 0 !== gS && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & gS) ? SS.enable(SS.BLEND) : SS.disable(SS.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (SS.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (SS.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const tS = SS;
        if (this._isAlphaBlendDirty) {
          for (let bS = 0; bS < HS; bS++) {
            const HS = bS < this._numTargetEnabled ? bS : 0;
            this._alphaBlend[HS] && 0 === (gS & 1 << bS) ? tS.enableIndexed(SS.BLEND, bS) : tS.disableIndexed(SS.BLEND, bS)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let SS = 0; SS < HS; SS++) {
            const HS = SS < this._numTargetEnabled ? 4 * SS : 0;
            tS.blendFuncSeparateIndexed(SS, this._blendFunctionParameters[HS + 0], this._blendFunctionParameters[HS + 1], this._blendFunctionParameters[HS + 2], this._blendFunctionParameters[HS + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let SS = 0; SS < HS; SS++) {
            const HS = SS < this._numTargetEnabled ? 2 * SS : 0;
            tS.blendEquationSeparateIndexed(SS, this._blendEquationParameters[HS + 0], this._blendEquationParameters[HS + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(SS, HS) {
        let gS = 32774;
        switch (SS) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, HS);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, HS);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, HS);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, HS);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, HS);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, HS);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, HS);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, HS);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, HS);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, HS);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, HS);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, HS);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, HS);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, HS);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, HS);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, HS);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, HS), gS = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, HS), gS = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, HS);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, HS)
        }
        this.setAlphaEquationParameters(gS, gS, HS)
      }
    }
  },
  40227: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS
    });
    class tS {}
    tS._IsPickingAvailable = !1
  },
  40131: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => Ng,
      i: () => Xg
    });
    var tS = gS(40133),
      bS = gS(39937),
      XS = gS(39946),
      xS = gS(37144),
      NS = gS(40144);
    class qS {
      constructor() {
        this._count = 0, this._data = {}
      }
      dJ(SS) {
        this.clear(), SS.forEach(((SS, HS) => this.add(SS, HS)))
      }
      get(SS) {
        const HS = this._data[SS];
        if (void 0 !== HS) return HS
      }
      getOrAddWithFactory(SS, HS) {
        let gS = this.get(SS);
        return void 0 !== gS || (gS = HS(SS), gS && this.add(SS, gS)), gS
      }
      getOrAdd(SS, HS) {
        const gS = this.get(SS);
        return void 0 !== gS ? gS : (this.add(SS, HS), HS)
      }
      contains(SS) {
        return void 0 !== this._data[SS]
      }
      add(SS, HS) {
        return void 0 === this._data[SS] && (this._data[SS] = HS, ++this._count, !0)
      }
      set(SS, HS) {
        return void 0 !== this._data[SS] && (this._data[SS] = HS, !0)
      }
      getAndRemove(SS) {
        const HS = this.get(SS);
        return void 0 !== HS ? (delete this._data[SS], --this._count, HS) : null
      }
      remove(SS) {
        return !!this.contains(SS) && (delete this._data[SS], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(SS) {
        for (const HS in this._data) {
          SS(HS, this._data[HS])
        }
      }
      first(SS) {
        for (const HS in this._data) {
          const gS = SS(HS, this._data[HS]);
          if (gS) return gS
        }
        return null
      }
    }
    var uS = gS(40077),
      IS = gS(37117),
      fS = gS(40152),
      kS = gS(40169),
      aS = gS(40176);
    class KS {
      constructor(SS, HS, gS, tS, bS, XS) {
        this.source = SS, this.pointerX = HS, this.pointerY = gS, this.meshUnderPointer = tS, this.sourceEvent = bS, this.additionalData = XS
      }
      static CreateNew(SS, HS, gS) {
        const tS = SS.lL();
        return new KS(SS, tS.pointerX, tS.pointerY, tS.meshUnderPointer || SS, HS, gS)
      }
      static CreateNewFromSprite(SS, HS, gS, tS) {
        return new KS(SS, HS.pointerX, HS.pointerY, HS.meshUnderPointer, gS, tS)
      }
      static CreateNewFromScene(SS, HS) {
        return new KS(null, SS.pointerX, SS.pointerY, SS.meshUnderPointer, HS)
      }
      static CreateNewFromPrimitive(SS, HS, gS, tS) {
        return new KS(SS, HS.x, HS.y, null, gS, tS)
      }
    }
    var jS = gS(40189),
      GS = gS(40192),
      CS = gS(40196),
      nS = gS(40213),
      PS = gS(39913),
      QS = gS(37138),
      DS = gS(39926),
      wS = gS(40218);
    class hS {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const SS in hS.Triggers)
          if (Object.prototype.hasOwnProperty.call(hS.Triggers, SS)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const SS in hS.Triggers)
          if (Object.prototype.hasOwnProperty.call(hS.Triggers, SS)) {
            const HS = parseInt(SS);
            if (HS >= 1 && HS <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(SS) {
        for (const HS in hS.Triggers)
          if (Object.prototype.hasOwnProperty.call(hS.Triggers, HS)) {
            if (parseInt(HS) === SS) return !0
          } return !1
      }
    }
    hS.Triggers = {};
    var ZS, JS, OS, dS, cS, vS, ES, LS = gS(40221);
    ! function(SS) {
      SS[SS.Generic = 0] = "Generic", SS[SS.Keyboard = 1] = "Keyboard", SS[SS.Mouse = 2] = "Mouse", SS[SS.Touch = 3] = "Touch", SS[SS.DualShock = 4] = "DualShock", SS[SS.Xbox = 5] = "Xbox", SS[SS.Switch = 6] = "Switch", SS[SS.DualSense = 7] = "DualSense"
    }(ZS || (ZS = {})),
    function(SS) {
      SS[SS.Horizontal = 0] = "Horizontal", SS[SS.Vertical = 1] = "Vertical", SS[SS.LeftClick = 2] = "LeftClick", SS[SS.MiddleClick = 3] = "MiddleClick", SS[SS.RightClick = 4] = "RightClick", SS[SS.BrowserBack = 5] = "BrowserBack", SS[SS.BrowserForward = 6] = "BrowserForward", SS[SS.MouseWheelX = 7] = "MouseWheelX", SS[SS.MouseWheelY = 8] = "MouseWheelY", SS[SS.MouseWheelZ = 9] = "MouseWheelZ", SS[SS.Move = 12] = "Move"
    }(JS || (JS = {})),
    function(SS) {
      SS[SS.Horizontal = 0] = "Horizontal", SS[SS.Vertical = 1] = "Vertical", SS[SS.LeftClick = 2] = "LeftClick", SS[SS.MiddleClick = 3] = "MiddleClick", SS[SS.RightClick = 4] = "RightClick", SS[SS.BrowserBack = 5] = "BrowserBack", SS[SS.BrowserForward = 6] = "BrowserForward", SS[SS.MouseWheelX = 7] = "MouseWheelX", SS[SS.MouseWheelY = 8] = "MouseWheelY", SS[SS.MouseWheelZ = 9] = "MouseWheelZ", SS[SS.DeltaHorizontal = 10] = "DeltaHorizontal", SS[SS.DeltaVertical = 11] = "DeltaVertical"
    }(OS || (OS = {})),
    function(SS) {
      SS[SS.Cross = 0] = "Cross", SS[SS.Circle = 1] = "Circle", SS[SS.Square = 2] = "Square", SS[SS.Triangle = 3] = "Triangle", SS[SS.L1 = 4] = "L1", SS[SS.R1 = 5] = "R1", SS[SS.L2 = 6] = "L2", SS[SS.R2 = 7] = "R2", SS[SS.Share = 8] = "Share", SS[SS.Options = 9] = "Options", SS[SS.L3 = 10] = "L3", SS[SS.R3 = 11] = "R3", SS[SS.DPadUp = 12] = "DPadUp", SS[SS.DPadDown = 13] = "DPadDown", SS[SS.DPadLeft = 14] = "DPadLeft", SS[SS.DPadRight = 15] = "DPadRight", SS[SS.Home = 16] = "Home", SS[SS.TouchPad = 17] = "TouchPad", SS[SS.LStickXAxis = 18] = "LStickXAxis", SS[SS.LStickYAxis = 19] = "LStickYAxis", SS[SS.RStickXAxis = 20] = "RStickXAxis", SS[SS.RStickYAxis = 21] = "RStickYAxis"
    }(dS || (dS = {})),
    function(SS) {
      SS[SS.Cross = 0] = "Cross", SS[SS.Circle = 1] = "Circle", SS[SS.Square = 2] = "Square", SS[SS.Triangle = 3] = "Triangle", SS[SS.L1 = 4] = "L1", SS[SS.R1 = 5] = "R1", SS[SS.L2 = 6] = "L2", SS[SS.R2 = 7] = "R2", SS[SS.Create = 8] = "Create", SS[SS.Options = 9] = "Options", SS[SS.L3 = 10] = "L3", SS[SS.R3 = 11] = "R3", SS[SS.DPadUp = 12] = "DPadUp", SS[SS.DPadDown = 13] = "DPadDown", SS[SS.DPadLeft = 14] = "DPadLeft", SS[SS.DPadRight = 15] = "DPadRight", SS[SS.Home = 16] = "Home", SS[SS.TouchPad = 17] = "TouchPad", SS[SS.LStickXAxis = 18] = "LStickXAxis", SS[SS.LStickYAxis = 19] = "LStickYAxis", SS[SS.RStickXAxis = 20] = "RStickXAxis", SS[SS.RStickYAxis = 21] = "RStickYAxis"
    }(cS || (cS = {})),
    function(SS) {
      SS[SS.A = 0] = "A", SS[SS.B = 1] = "B", SS[SS.X = 2] = "X", SS[SS.Y = 3] = "Y", SS[SS.LB = 4] = "LB", SS[SS.RB = 5] = "RB", SS[SS.LT = 6] = "LT", SS[SS.RT = 7] = "RT", SS[SS.Back = 8] = "Back", SS[SS.Start = 9] = "Start", SS[SS.LS = 10] = "LS", SS[SS.RS = 11] = "RS", SS[SS.DPadUp = 12] = "DPadUp", SS[SS.DPadDown = 13] = "DPadDown", SS[SS.DPadLeft = 14] = "DPadLeft", SS[SS.DPadRight = 15] = "DPadRight", SS[SS.Home = 16] = "Home", SS[SS.LStickXAxis = 17] = "LStickXAxis", SS[SS.LStickYAxis = 18] = "LStickYAxis", SS[SS.RStickXAxis = 19] = "RStickXAxis", SS[SS.RStickYAxis = 20] = "RStickYAxis"
    }(vS || (vS = {})),
    function(SS) {
      SS[SS.B = 0] = "B", SS[SS.A = 1] = "A", SS[SS.Y = 2] = "Y", SS[SS.X = 3] = "X", SS[SS.L = 4] = "L", SS[SS.R = 5] = "R", SS[SS.ZL = 6] = "ZL", SS[SS.ZR = 7] = "ZR", SS[SS.Minus = 8] = "Minus", SS[SS.Plus = 9] = "Plus", SS[SS.LS = 10] = "LS", SS[SS.RS = 11] = "RS", SS[SS.DPadUp = 12] = "DPadUp", SS[SS.DPadDown = 13] = "DPadDown", SS[SS.DPadLeft = 14] = "DPadLeft", SS[SS.DPadRight = 15] = "DPadRight", SS[SS.Home = 16] = "Home", SS[SS.Capture = 17] = "Capture", SS[SS.LStickXAxis = 18] = "LStickXAxis", SS[SS.LStickYAxis = 19] = "LStickYAxis", SS[SS.RStickXAxis = 20] = "RStickXAxis", SS[SS.RStickYAxis = 21] = "RStickYAxis"
    }(ES || (ES = {}));
    var YS = gS(40223);
    class AS {
      static CreateDeviceEvent(SS, HS, gS, tS, bS, XS, xS) {
        switch (SS) {
          case ZS.Keyboard:
            return this._CreateKeyboardEvent(gS, tS, bS, XS);
          case ZS.Mouse:
            if (gS === JS.MouseWheelX || gS === JS.MouseWheelY || gS === JS.MouseWheelZ) return this._CreateWheelEvent(SS, HS, gS, tS, bS, XS);
          case ZS.Touch:
            return this._CreatePointerEvent(SS, HS, gS, tS, bS, XS, xS);
          default:
            throw `Unable to generate event for device ${ZS[SS]}`
        }
      }
      static _CreatePointerEvent(SS, HS, gS, tS, bS, XS, xS) {
        const NS = this._CreateMouseEvent(SS, HS, gS, tS, bS, XS);
        SS === ZS.Mouse ? (NS.deviceType = ZS.Mouse, NS.pointerId = 1, NS.pointerType = "mouse") : (NS.deviceType = ZS.Touch, NS.pointerId = xS ?? HS, NS.pointerType = "touch");
        let qS = 0;
        return qS += bS.pollInput(SS, HS, JS.LeftClick), qS += 2 * bS.pollInput(SS, HS, JS.RightClick), qS += 4 * bS.pollInput(SS, HS, JS.MiddleClick), NS.buttons = qS, gS === JS.Move ? NS.type = "pointermove" : gS >= JS.LeftClick && gS <= JS.RightClick && (NS.type = 1 === tS ? "pointerdown" : "pointerup", NS.button = gS - 2), NS
      }
      static _CreateWheelEvent(SS, HS, gS, tS, bS, XS) {
        const xS = this._CreateMouseEvent(SS, HS, gS, tS, bS, XS);
        switch (xS.pointerId = 1, xS.type = "wheel", xS.deltaMode = YS.e.DOM_DELTA_PIXEL, xS.deltaX = 0, xS.deltaY = 0, xS.deltaZ = 0, gS) {
          case JS.MouseWheelX:
            xS.deltaX = tS;
            break;
          case JS.MouseWheelY:
            xS.deltaY = tS;
            break;
          case JS.MouseWheelZ:
            xS.deltaZ = tS
        }
        return xS
      }
      static _CreateMouseEvent(SS, HS, gS, tS, bS, XS) {
        const xS = this._CreateEvent(XS),
          NS = bS.pollInput(SS, HS, JS.Horizontal),
          qS = bS.pollInput(SS, HS, JS.Vertical);
        return XS ? (xS.movementX = 0, xS.movementY = 0, xS.offsetX = xS.movementX - XS.getBoundingClientRect().x, xS.offsetY = xS.movementY - XS.getBoundingClientRect().y) : (xS.movementX = bS.pollInput(SS, HS, 10), xS.movementY = bS.pollInput(SS, HS, 11), xS.offsetX = 0, xS.offsetY = 0), this._CheckNonCharacterKeys(xS, bS), xS.clientX = NS, xS.clientY = qS, xS.x = NS, xS.y = qS, xS.deviceType = SS, xS.deviceSlot = HS, xS.inputIndex = gS, xS
      }
      static _CreateKeyboardEvent(SS, HS, gS, tS) {
        const bS = this._CreateEvent(tS);
        return this._CheckNonCharacterKeys(bS, gS), bS.deviceType = ZS.Keyboard, bS.deviceSlot = 0, bS.inputIndex = SS, bS.type = 1 === HS ? "keydown" : "keyup", bS.key = String.fromCharCode(SS), bS.keyCode = SS, bS
      }
      static _CheckNonCharacterKeys(SS, HS) {
        const gS = HS.isDeviceAvailable(ZS.Keyboard),
          tS = gS && 1 === HS.pollInput(ZS.Keyboard, 0, 18),
          bS = gS && 1 === HS.pollInput(ZS.Keyboard, 0, 17),
          XS = gS && (1 === HS.pollInput(ZS.Keyboard, 0, 91) || 1 === HS.pollInput(ZS.Keyboard, 0, 92) || 1 === HS.pollInput(ZS.Keyboard, 0, 93)),
          xS = gS && 1 === HS.pollInput(ZS.Keyboard, 0, 16);
        SS.altKey = tS, SS.ctrlKey = bS, SS.metaKey = XS, SS.shiftKey = xS
      }
      static _CreateEvent(SS) {
        const HS = {
          preventDefault: () => {}
        };
        return HS.target = SS, HS
      }
    }
    class yS {
      constructor(SS, HS, gS) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(SS, HS, ((SS, HS, tS, bS) => {
          const XS = AS.CreateDeviceEvent(SS, HS, tS, bS, this);
          gS(SS, HS, XS)
        })) : this._createDummyNativeInput()
      }
      pollInput(SS, HS, gS) {
        return this._nativeInput.pollInput(SS, HS, gS)
      }
      isDeviceAvailable(SS) {
        return SS === ZS.Mouse || SS === ZS.Touch
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
    const VS = Object.keys(JS).length / 2;
    class iS {
      constructor(SS, HS, gS, bS) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = tS.k.IsSafari(), this._usingMacOs = (0, PS.i)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = SS => {}, this._keyboardUpEvent = SS => {}, this._keyboardBlurEvent = SS => {}, this._pointerMoveEvent = SS => {}, this._pointerDownEvent = SS => {}, this._pointerUpEvent = SS => {}, this._pointerCancelEvent = SS => {}, this._pointerCancelTouch = SS => {}, this._pointerLeaveEvent = SS => {}, this._pointerWheelEvent = SS => {}, this._pointerBlurEvent = SS => {}, this._pointerMacOsChromeOutEvent = SS => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, PS.i)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, PS.i)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = SS => {}, this._gamepadDisconnectedEvent = SS => {}, this._eventPrefix = tS.k.GetPointerPrefix(SS), this._engine = SS, this._onDeviceConnected = HS, this._onDeviceDisconnected = gS, this._onInputChanged = bS, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(SS, HS, gS) {
        const bS = this._inputs[SS][HS];
        if (!bS) throw `Unable to find device ${ZS[SS]}`;
        SS >= ZS.DualShock && SS <= ZS.DualSense && this._updateDevice(SS, HS, gS);
        const XS = bS[gS];
        if (void 0 === XS) throw `Unable to find input ${gS} for device ${ZS[SS]} in slot ${HS}`;
        return gS === JS.Move && tS.k.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), XS
      }
      isDeviceAvailable(SS) {
        return void 0 !== this._inputs[SS]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const SS = this?._engine.getInputElement();
        if (SS && (!this._eventsAttached || this._elementToAttachTo !== SS)) {
          if (this._disableEvents(), this._inputs)
            for (const SS of this._inputs)
              if (SS)
                for (const HS in SS) {
                  const gS = SS[+HS];
                  if (gS)
                    for (let SS = 0; SS < gS.length; SS++) gS[SS] = 0
                }
          this._elementToAttachTo = SS, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const SS = navigator.getGamepads();
          for (const HS of SS) HS && this._addGamePad(HS)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(ZS.Mouse, 0, 0, 0)
      }
      _addGamePad(SS) {
        const HS = this._getGamepadDeviceType(SS.id),
          gS = SS.index;
        this._gamepads = this._gamepads || new Array(SS.index + 1), this._registerDevice(HS, gS, SS.buttons.length + SS.axes.length), this._gamepads[gS] = HS
      }
      _addPointerDevice(SS, HS, gS, tS) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(SS, HS, VS);
        const bS = this._inputs[SS][HS];
        bS[0] = gS, bS[1] = tS
      }
      _registerDevice(SS, HS, gS) {
        if (void 0 === HS) throw `Unable to register device ${ZS[SS]} to undefined slot.`;
        if (this._inputs[SS] || (this._inputs[SS] = {}), !this._inputs[SS][HS]) {
          const tS = new Array(gS);
          tS.fill(0), this._inputs[SS][HS] = tS, this._onDeviceConnected(SS, HS)
        }
      }
      _unregisterDevice(SS, HS) {
        this._inputs[SS][HS] && (delete this._inputs[SS][HS], this._onDeviceDisconnected(SS, HS))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = SS => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(ZS.Keyboard, 0, 255));
          const HS = this._inputs[ZS.Keyboard][0];
          if (HS) {
            HS[SS.keyCode] = 1;
            const gS = SS;
            gS.inputIndex = SS.keyCode, this._usingMacOs && SS.metaKey && "Meta" !== SS.key && (this._metaKeys.includes(SS.keyCode) || this._metaKeys.push(SS.keyCode)), this._onInputChanged(ZS.Keyboard, 0, gS)
          }
        }, this._keyboardUpEvent = SS => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(ZS.Keyboard, 0, 255));
          const HS = this._inputs[ZS.Keyboard][0];
          if (HS) {
            HS[SS.keyCode] = 0;
            const gS = SS;
            if (gS.inputIndex = SS.keyCode, this._usingMacOs && "Meta" === SS.key && this._metaKeys.length > 0) {
              for (const SS of this._metaKeys) {
                const gS = AS.CreateDeviceEvent(ZS.Keyboard, 0, SS, 0, this, this._elementToAttachTo);
                HS[SS] = 0, this._onInputChanged(ZS.Keyboard, 0, gS)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(ZS.Keyboard, 0, gS)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const SS = this._inputs[ZS.Keyboard][0];
            for (let HS = 0; HS < SS.length; HS++)
              if (0 !== SS[HS]) {
                SS[HS] = 0;
                const gS = AS.CreateDeviceEvent(ZS.Keyboard, 0, HS, 0, this, this._elementToAttachTo);
                this._onInputChanged(ZS.Keyboard, 0, gS)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, PS.i)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let tS = 0; tS < this._maxTouchPoints; tS++) this._activeTouchIds[tS] = -1;
        this._pointerMoveEvent = SS => {
          const HS = this._getPointerType(SS);
          let gS = HS === ZS.Mouse ? 0 : this._activeTouchIds.indexOf(SS.pointerId);
          if (HS === ZS.Touch && -1 === gS) {
            if (0 === SS.buttons) return;
            const bS = this._activeTouchIds.indexOf(-1);
            if (!(bS >= 0)) return void tS.k.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            gS = bS, this._activeTouchIds[bS] = SS.pointerId, this._onDeviceConnected(HS, gS)
          }
          this._inputs[HS] || (this._inputs[HS] = {}), this._inputs[HS][gS] || this._addPointerDevice(HS, gS, SS.clientX, SS.clientY);
          const bS = this._inputs[HS][gS];
          if (bS) {
            const tS = SS;
            tS.inputIndex = JS.Move, bS[JS.Horizontal] = SS.clientX, bS[JS.Vertical] = SS.clientY, HS === ZS.Touch && 0 === bS[JS.LeftClick] && (bS[JS.LeftClick] = 1), void 0 === SS.pointerId && (SS.pointerId = this._mouseId), this._onInputChanged(HS, gS, tS), this._usingSafari || -1 === SS.button || (tS.inputIndex = SS.button + 2, bS[SS.button + 2] = bS[SS.button + 2] ? 0 : 1, this._onInputChanged(HS, gS, tS))
          }
        }, this._pointerDownEvent = SS => {
          const HS = this._getPointerType(SS);
          let gS = HS === ZS.Mouse ? 0 : SS.pointerId;
          if (HS === ZS.Touch) {
            let HS = this._activeTouchIds.indexOf(SS.pointerId);
            if (-1 === HS && (HS = this._activeTouchIds.indexOf(-1)), !(HS >= 0)) return void tS.k.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            gS = HS, this._activeTouchIds[HS] = SS.pointerId
          }
          this._inputs[HS] || (this._inputs[HS] = {}), this._inputs[HS][gS] ? HS === ZS.Touch && this._onDeviceConnected(HS, gS) : this._addPointerDevice(HS, gS, SS.clientX, SS.clientY);
          const bS = this._inputs[HS][gS];
          if (bS) {
            const tS = bS[JS.Horizontal],
              xS = bS[JS.Vertical];
            if (HS === ZS.Mouse) {
              if (void 0 === SS.pointerId && (SS.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (XS) {}
            } else if (SS.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(SS.pointerId)
            } catch (XS) {}
            bS[JS.Horizontal] = SS.clientX, bS[JS.Vertical] = SS.clientY, bS[SS.button + 2] = 1;
            const NS = SS;
            NS.inputIndex = SS.button + 2, this._onInputChanged(HS, gS, NS), tS === SS.clientX && xS === SS.clientY || (NS.inputIndex = JS.Move, this._onInputChanged(HS, gS, NS))
          }
        }, this._pointerUpEvent = SS => {
          const HS = this._getPointerType(SS),
            gS = HS === ZS.Mouse ? 0 : this._activeTouchIds.indexOf(SS.pointerId);
          if (HS === ZS.Touch) {
            if (-1 === gS) return;
            this._activeTouchIds[gS] = -1
          }
          const tS = this._inputs[HS]?.[gS];
          let bS = SS.button,
            XS = tS && 0 !== tS[bS + 2];
          if (!XS && this._isUsingFirefox && this._usingMacOs && tS && (bS = 2 === bS ? 0 : 2, XS = 0 !== tS[bS + 2]), XS) {
            const XS = tS[JS.Horizontal],
              xS = tS[JS.Vertical];
            tS[JS.Horizontal] = SS.clientX, tS[JS.Vertical] = SS.clientY, tS[bS + 2] = 0;
            const NS = SS;
            void 0 === SS.pointerId && (SS.pointerId = this._mouseId), XS === SS.clientX && xS === SS.clientY || (NS.inputIndex = JS.Move, this._onInputChanged(HS, gS, NS)), NS.inputIndex = bS + 2, HS === ZS.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : SS.pointerId && this._elementToAttachTo.hasPointerCapture?.(SS.pointerId) && this._elementToAttachTo.releasePointerCapture(SS.pointerId), this._onInputChanged(HS, gS, NS), HS === ZS.Touch && this._onDeviceDisconnected(HS, gS)
          }
        }, this._pointerCancelTouch = SS => {
          const HS = this._activeTouchIds.indexOf(SS);
          if (-1 === HS) return;
          this._elementToAttachTo.hasPointerCapture?.(SS) && this._elementToAttachTo.releasePointerCapture(SS), this._inputs[ZS.Touch][HS][JS.LeftClick] = 0;
          const gS = AS.CreateDeviceEvent(ZS.Touch, HS, JS.LeftClick, 0, this, this._elementToAttachTo, SS);
          this._onInputChanged(ZS.Touch, HS, gS), this._activeTouchIds[HS] = -1, this._onDeviceDisconnected(ZS.Touch, HS)
        }, this._pointerCancelEvent = SS => {
          if ("mouse" === SS.pointerType) {
            const SS = this._inputs[ZS.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let HS = JS.LeftClick; HS <= JS.BrowserForward; HS++)
              if (1 === SS[HS]) {
                SS[HS] = 0;
                const gS = AS.CreateDeviceEvent(ZS.Mouse, 0, HS, 0, this, this._elementToAttachTo);
                this._onInputChanged(ZS.Mouse, 0, gS)
              }
          } else this._pointerCancelTouch(SS.pointerId)
        }, this._pointerLeaveEvent = SS => {
          "pen" === SS.pointerType && this._pointerCancelTouch(SS.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let SS = !1;
        const HS = function() {};
        try {
          const gS = Object.defineProperty({}, "passive", {
            get: function() {
              SS = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", HS, gS), this._elementToAttachTo.removeEventListener("test", HS, gS)
        } catch (gS) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(ZS.Mouse)) {
            const SS = this._inputs[ZS.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let HS = JS.LeftClick; HS <= JS.BrowserForward; HS++)
              if (1 === SS[HS]) {
                SS[HS] = 0;
                const gS = AS.CreateDeviceEvent(ZS.Mouse, 0, HS, 0, this, this._elementToAttachTo);
                this._onInputChanged(ZS.Mouse, 0, gS)
              }
          }
          if (this.isDeviceAvailable(ZS.Touch)) {
            const SS = this._inputs[ZS.Touch];
            for (let HS = 0; HS < this._activeTouchIds.length; HS++) {
              const gS = this._activeTouchIds[HS];
              if (this._elementToAttachTo.hasPointerCapture?.(gS) && this._elementToAttachTo.releasePointerCapture(gS), -1 !== gS && 1 === SS[HS]?.[JS.LeftClick]) {
                SS[HS][JS.LeftClick] = 0;
                const tS = AS.CreateDeviceEvent(ZS.Touch, HS, JS.LeftClick, 0, this, this._elementToAttachTo, gS);
                this._onInputChanged(ZS.Touch, HS, tS), this._activeTouchIds[HS] = -1, this._onDeviceDisconnected(ZS.Touch, HS)
              }
            }
          }
        }, this._pointerWheelEvent = SS => {
          const HS = ZS.Mouse;
          this._inputs[HS] || (this._inputs[HS] = []), this._inputs[HS][0] || (this._pointerActive = !0, this._registerDevice(HS, 0, VS));
          const gS = this._inputs[HS][0];
          if (gS) {
            gS[JS.MouseWheelX] = SS.deltaX || 0, gS[JS.MouseWheelY] = SS.deltaY || SS.wheelDelta || 0, gS[JS.MouseWheelZ] = SS.deltaZ || 0;
            const tS = SS;
            void 0 === SS.pointerId && (SS.pointerId = this._mouseId), 0 !== gS[JS.MouseWheelX] && (tS.inputIndex = JS.MouseWheelX, this._onInputChanged(HS, 0, tS)), 0 !== gS[JS.MouseWheelY] && (tS.inputIndex = JS.MouseWheelY, this._onInputChanged(HS, 0, tS)), 0 !== gS[JS.MouseWheelZ] && (tS.inputIndex = JS.MouseWheelZ, this._onInputChanged(HS, 0, tS))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = SS => {
          SS.buttons > 1 && this._pointerCancelEvent(SS)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!SS && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(ZS.Mouse)) {
            const SS = this._inputs[ZS.Mouse][0];
            SS[JS.MouseWheelX] = 0, SS[JS.MouseWheelY] = 0, SS[JS.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = SS => {
          this._addGamePad(SS.gamepad)
        }, this._gamepadDisconnectedEvent = SS => {
          if (this._gamepads) {
            const HS = this._getGamepadDeviceType(SS.gamepad.id),
              gS = SS.gamepad.index;
            this._unregisterDevice(HS, gS), delete this._gamepads[gS]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(SS, HS, gS) {
        const tS = navigator.getGamepads()[HS];
        if (tS && SS === this._gamepads[HS]) {
          const bS = this._inputs[SS][HS];
          gS >= tS.buttons.length ? bS[gS] = tS.axes[gS - tS.buttons.length].valueOf() : bS[gS] = tS.buttons[gS].value
        }
      }
      _getGamepadDeviceType(SS) {
        return -1 !== SS.indexOf("054c") ? -1 !== SS.indexOf("0ce6") ? ZS.DualSense : ZS.DualShock : -1 !== SS.indexOf("Xbox One") || -1 !== SS.search("Xbox 360") || -1 !== SS.search("xinput") || -1 !== SS.indexOf("045e") && -1 === SS.indexOf("Surface Dock") ? ZS.Xbox : -1 !== SS.indexOf("057e") ? ZS.Switch : ZS.Generic
      }
      _getPointerType(SS) {
        let HS = ZS.Mouse;
        return ("touch" === SS.pointerType || "pen" === SS.pointerType || SS.touches) && (HS = ZS.Touch), HS
      }
    }
    class WS {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = HS, this.deviceSlot = gS, this.onInputChangedObservable = new xS.e, this._deviceInputSystem = SS
      }
      getInput(SS) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, SS)
      }
    }
    class zS {
      constructor(SS) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = SS => {
          for (let HS = 0; HS < this._devices.length; HS++) {
            const gS = this._devices[HS];
            for (const tS in gS) {
              const gS = +tS;
              SS._addDevice(new WS(this._deviceInputSystem, HS, gS))
            }
          }
          this._registeredManagers.push(SS)
        }, this.unregisterManager = SS => {
          const HS = this._registeredManagers.indexOf(SS);
          HS > -1 && this._registeredManagers.splice(HS, 1)
        };
        const HS = Object.keys(ZS).length / 2;
        this._devices = new Array(HS);
        const gS = (SS, HS) => {
            this._devices[SS] || (this._devices[SS] = new Array), this._devices[SS][HS] || (this._devices[SS][HS] = HS);
            for (const gS of this._registeredManagers) {
              const tS = new WS(this._deviceInputSystem, SS, HS);
              gS._addDevice(tS)
            }
          },
          tS = (SS, HS) => {
            this._devices[SS]?.[HS] && delete this._devices[SS][HS];
            for (const gS of this._registeredManagers) gS._removeDevice(SS, HS)
          },
          bS = (SS, HS, gS) => {
            if (gS)
              for (const tS of this._registeredManagers) tS._onInputChanged(SS, HS, gS)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new yS(gS, tS, bS) : this._deviceInputSystem = new iS(SS, gS, tS, bS)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class US {
      getDeviceSource(SS, HS) {
        if (void 0 === HS) {
          if (void 0 === this._firstDevice[SS]) return null;
          HS = this._firstDevice[SS]
        }
        return this._devices[SS] && void 0 !== this._devices[SS][HS] ? this._devices[SS][HS] : null
      }
      getDeviceSources(SS) {
        return this._devices[SS] ? this._devices[SS].filter((SS => !!SS)) : []
      }
      constructor(SS) {
        const HS = Object.keys(ZS).length / 2;
        this._devices = new Array(HS), this._firstDevice = new Array(HS), this._engine = SS, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new zS(SS)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new xS.e((SS => {
          for (const HS of this._devices)
            if (HS)
              for (const gS of HS) gS && this.onDeviceConnectedObservable.notifyObserver(SS, gS)
        })), this.onDeviceDisconnectedObservable = new xS.e, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = SS.bY.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.bY.remove(this._onDisposeObserver)
      }
      _addDevice(SS) {
        this._devices[SS.deviceType] || (this._devices[SS.deviceType] = []), this._devices[SS.deviceType][SS.deviceSlot] || (this._devices[SS.deviceType][SS.deviceSlot] = SS, this._updateFirstDevices(SS.deviceType)), this.onDeviceConnectedObservable.notifyObservers(SS)
      }
      _removeDevice(SS, HS) {
        const gS = this._devices[SS]?.[HS];
        this.onDeviceDisconnectedObservable.notifyObservers(gS), this._devices[SS]?.[HS] && delete this._devices[SS][HS], this._updateFirstDevices(SS)
      }
      _onInputChanged(SS, HS, gS) {
        this._devices[SS]?.[HS]?.onInputChangedObservable.notifyObservers(gS)
      }
      _updateFirstDevices(SS) {
        switch (SS) {
          case ZS.Keyboard:
          case ZS.Mouse:
            this._firstDevice[SS] = 0;
            break;
          case ZS.Touch:
          case ZS.DualSense:
          case ZS.DualShock:
          case ZS.Xbox:
          case ZS.Switch:
          case ZS.Generic: {
            delete this._firstDevice[SS];
            const HS = this._devices[SS];
            if (HS)
              for (let gS = 0; gS < HS.length; gS++)
                if (HS[gS]) {
                  this._firstDevice[SS] = gS;
                  break
                } break
          }
        }
      }
    }
    var pS = gS(40227);
    class sS {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get NI() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(SS) {
        this._singleClick = SS
      }
      set NI(SS) {
        this._doubleClick = SS
      }
      set hasSwiped(SS) {
        this._hasSwiped = SS
      }
      set ignore(SS) {
        this._ignore = SS
      }
    }
    class BS {
      constructor(SS) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new IS.m(0, 0), this._previousStartingPointerPosition = new IS.m(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = SS || QS.d.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(SS) {
        return this._meshUnderPointerId[SS] || null
      }
      get unTranslatedPointer() {
        return new IS.m(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(SS) {
        this._pointerX = SS
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(SS) {
        this._pointerY = SS
      }
      _updatePointerPosition(SS) {
        const HS = this._scene.AK().getInputElementClientRect();
        HS && (this._pointerX = SS.clientX - HS.left, this._pointerY = SS.clientY - HS.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(SS, HS) {
        const gS = this._scene,
          tS = gS.AK(),
          bS = tS.getInputElement();
        bS && (bS.tabIndex = tS.canvasTabIndex, gS.doNotHandleCursors || (bS.style.cursor = gS.defaultCursor)), this._setCursorAndPointerOverMesh(SS, HS, gS);
        for (const NS of gS._pointerMoveStage) {
          SS = SS || this._pickMove(HS);
          const gS = !!SS?.pickedMesh;
          SS = NS.action(this._unTranslatedPointerX, this._unTranslatedPointerY, SS, gS, bS)
        }
        const XS = HS.inputIndex >= JS.MouseWheelX && HS.inputIndex <= JS.MouseWheelZ ? wS.d.POINTERWHEEL : wS.d.POINTERMOVE;
        let xS;
        gS.onPointerMove && (SS = SS || this._pickMove(HS), gS.onPointerMove(HS, SS, XS)), SS ? (xS = new wS.l(XS, HS, SS), this._setRayOnPointerInfo(SS, HS)) : (xS = new wS.l(XS, HS, null, this), this._movePointerInfo = xS), gS.onPointerObservable.hasObservers() && gS.onPointerObservable.notifyObservers(xS, XS)
      }
      _setRayOnPointerInfo(SS, HS) {
        const gS = this._scene;
        SS && pS.e._IsPickingAvailable && (SS.ray || (SS.ray = gS.createPickingRay(HS.offsetX, HS.offsetY, IS.e.Identity(), gS.activeCamera)))
      }
      _addCameraPointerObserver(SS, HS) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(SS, HS)
      }
      _removeCameraPointerObserver(SS) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(SS)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(SS, HS, gS) {
        const tS = this._scene,
          bS = new wS.h(gS, HS, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return SS && (bS.originalPickingInfo = SS, bS.ray = SS.ray, "xr-near" === HS.pointerType && SS.originMesh && (bS.nearInteractionPickingInfo = SS)), tS.onPrePointerObservable.notifyObservers(bS, gS), !!bS.skipOnPointerObservable
      }
      _pickMove(SS) {
        const HS = this._scene,
          gS = HS.Sa(this._unTranslatedPointerX, this._unTranslatedPointerY, HS.pointerMovePredicate, HS.pointerMoveFastCheck, HS.cameraToUseForPointers, HS.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(gS, SS, HS), gS
      }
      _updateMeshUnderPointer() {
        const SS = this._scene;
        if (!SS.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || SS.skipPointerMovePicking || !SS.cameraToUseForPointers && !SS.activeCamera) return;
        this._ensurePointerMovePredicate();
        const HS = this._pointerX,
          gS = this._pointerY,
          tS = this._unTranslatedPointerX,
          bS = this._unTranslatedPointerY;
        for (const XS of this._latestPointerMoveEvents.values()) this._pointerX = XS.pointerX, this._pointerY = XS.pointerY, this._unTranslatedPointerX = XS.unTranslatedPointerX, this._unTranslatedPointerY = XS.unTranslatedPointerY, this._pickMove(XS.event);
        this._pointerX = HS, this._pointerY = gS, this._unTranslatedPointerX = tS, this._unTranslatedPointerY = bS
      }
      _ensurePointerMovePredicate() {
        const SS = this._scene;
        SS.pointerMovePredicate || (SS.pointerMovePredicate = HS => (HS._isPointerMovePickable ?? HS.Fj) && HS.isVisible && HS.isReady() && HS.isEnabled() && (HS.enablePointerMoveEvents || SS.constantlyUpdateMeshUnderPointer || null !== HS._getActionManagerForTrigger()) && (!SS.cameraToUseForPointers || 0 !== (SS.cameraToUseForPointers.layerMask & HS.layerMask)))
      }
      _setCursorAndPointerOverMesh(SS, HS, gS) {
        const tS = gS.AK().getInputElement();
        if (SS?.pickedMesh) {
          if (this.setPointerOverMesh(SS.pickedMesh, HS.pointerId, SS, HS), !gS.doNotHandleCursors && tS && this._pointerOverMesh) {
            const SS = this._pointerOverMesh._getActionManagerForTrigger();
            SS && SS.hasPointerTriggers && (tS.style.cursor = SS.hoverCursor || gS.hoverCursor)
          }
        } else this.setPointerOverMesh(null, HS.pointerId, SS, HS)
      }
      simulatePointerMove(SS, HS) {
        const gS = new PointerEvent("pointermove", HS);
        gS.inputIndex = JS.Move, this._checkPrePointerObservable(SS, gS, wS.d.POINTERMOVE) || this._processPointerMove(SS, gS)
      }
      simulatePointerDown(SS, HS) {
        const gS = new PointerEvent("pointerdown", HS);
        gS.inputIndex = gS.button + 2, this._checkPrePointerObservable(SS, gS, wS.d.POINTERDOWN) || this._processPointerDown(SS, gS)
      }
      _processPointerDown(SS, HS) {
        const gS = this._scene;
        if (SS?.pickedMesh) {
          this._pickedDownMesh = SS.pickedMesh;
          const tS = SS.pickedMesh._getActionManagerForTrigger();
          if (tS) {
            if (tS.hasPickTriggers) switch (tS.processTrigger(5, new KS(SS.pickedMesh, gS.pointerX, gS.pointerY, SS.pickedMesh, HS, SS)), HS.button) {
              case 0:
                tS.processTrigger(2, new KS(SS.pickedMesh, gS.pointerX, gS.pointerY, SS.pickedMesh, HS, SS));
                break;
              case 1:
                tS.processTrigger(4, new KS(SS.pickedMesh, gS.pointerX, gS.pointerY, SS.pickedMesh, HS, SS));
                break;
              case 2:
                tS.processTrigger(3, new KS(SS.pickedMesh, gS.pointerX, gS.pointerY, SS.pickedMesh, HS, SS))
            }
            tS.hasSpecificTrigger(8) && window.setTimeout((() => {
              const SS = gS.Sa(this._unTranslatedPointerX, this._unTranslatedPointerY, (SS => SS.Fj && SS.isVisible && SS.isReady() && SS.actionManager && SS.actionManager.hasSpecificTrigger(8) && SS === this._pickedDownMesh), !1, gS.cameraToUseForPointers);
              SS?.pickedMesh && tS && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > BS.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, tS.processTrigger(8, KS.CreateNew(SS.pickedMesh, HS)))
            }), BS.LongPressDelay)
          }
        } else
          for (const XS of gS._pointerDownStage) SS = XS.action(this._unTranslatedPointerX, this._unTranslatedPointerY, SS, HS, !1);
        let tS;
        const bS = wS.d.POINTERDOWN;
        SS ? (gS.onPointerDown && gS.onPointerDown(HS, SS, bS), tS = new wS.l(bS, HS, SS), this._setRayOnPointerInfo(SS, HS)) : tS = new wS.l(bS, HS, null, this), gS.onPointerObservable.hasObservers() && gS.onPointerObservable.notifyObservers(tS, bS)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(SS, HS, gS) {
        const tS = new PointerEvent("pointerup", HS);
        tS.inputIndex = JS.Move;
        const bS = new sS;
        gS ? bS.NI = !0 : bS.singleClick = !0, this._checkPrePointerObservable(SS, tS, wS.d.POINTERUP) || this._processPointerUp(SS, tS, bS)
      }
      _processPointerUp(SS, HS, gS) {
        const tS = this._scene;
        if (SS?.pickedMesh) {
          if (this._pickedUpMesh = SS.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (tS.onPointerPick && tS.onPointerPick(HS, SS), gS.singleClick && !gS.ignore && tS.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const gS = wS.d.POINTERPICK,
              bS = new wS.l(gS, HS, SS);
            this._setRayOnPointerInfo(SS, HS), tS.onPointerObservable.notifyObservers(bS, gS)
          }
          const bS = SS.pickedMesh._getActionManagerForTrigger();
          if (bS && !gS.ignore) {
            bS.processTrigger(7, KS.CreateNew(SS.pickedMesh, HS, SS)), !gS.hasSwiped && gS.singleClick && bS.processTrigger(1, KS.CreateNew(SS.pickedMesh, HS, SS));
            const tS = SS.pickedMesh._getActionManagerForTrigger(6);
            gS.NI && tS && tS.processTrigger(6, KS.CreateNew(SS.pickedMesh, HS, SS))
          }
        } else if (!gS.ignore)
          for (const bS of tS._pointerUpStage) SS = bS.action(this._unTranslatedPointerX, this._unTranslatedPointerY, SS, HS, gS.NI);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const SS = this._pickedDownMesh._getActionManagerForTrigger(16);
          SS && SS.processTrigger(16, KS.CreateNew(this._pickedDownMesh, HS))
        }
        if (!gS.ignore) {
          const bS = new wS.l(wS.d.POINTERUP, HS, SS);
          if (this._setRayOnPointerInfo(SS, HS), tS.onPointerObservable.notifyObservers(bS, wS.d.POINTERUP), tS.onPointerUp && tS.onPointerUp(HS, SS, wS.d.POINTERUP), !gS.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let bS = 0;
            if (gS.singleClick ? bS = wS.d.POINTERTAP : gS.NI && (bS = wS.d.POINTERDOUBLETAP), bS) {
              const gS = new wS.l(bS, HS, SS);
              tS.onPointerObservable.hasObservers() && tS.onPointerObservable.hasSpecificMask(bS) && tS.onPointerObservable.notifyObservers(gS, bS)
            }
          }
        }
      }
      isPointerCaptured() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[SS]
      }
      attachControl() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const bS = this._scene,
          XS = bS.AK();
        tS || (tS = XS.getInputElement()), this._alreadyAttached && this.detachControl(), tS && (this._alreadyAttachedTo = tS), this._deviceSourceManager = new US(XS), this._initActionManager = SS => {
          if (!this._meshPickProceed) {
            const HS = bS.skipPointerUpPicking || 0 === bS._registeredActions && !this._checkForPicking() && !bS.onPointerUp ? null : bS.Sa(this._unTranslatedPointerX, this._unTranslatedPointerY, bS.pointerUpPredicate, bS.pointerUpFastCheck, bS.cameraToUseForPointers, bS.pointerUpTrianglePredicate);
            this._currentPickResult = HS, HS && (SS = HS.hit && HS.pickedMesh ? HS.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return SS
        }, this._delayedSimpleClick = (SS, HS, gS) => {
          if ((Date.now() - this._previousStartingPointerTime > BS.DoubleClickDelay && !this._doubleClickOccured || SS !== this._previousButtonPressed) && (this._doubleClickOccured = !1, HS.singleClick = !0, HS.ignore = !1, this._delayedClicks[SS])) {
            const HS = this._delayedClicks[SS].evt,
              gS = wS.d.POINTERTAP,
              tS = new wS.l(gS, HS, this._currentPickResult);
            bS.onPointerObservable.hasObservers() && bS.onPointerObservable.hasSpecificMask(gS) && bS.onPointerObservable.notifyObservers(tS, gS), this._delayedClicks[SS] = null
          }
        }, this._initClickEvent = (SS, HS, gS, tS) => {
          const bS = new sS;
          this._currentPickResult = null;
          let XS = null,
            xS = SS.hasSpecificMask(wS.d.POINTERPICK) || HS.hasSpecificMask(wS.d.POINTERPICK) || SS.hasSpecificMask(wS.d.POINTERTAP) || HS.hasSpecificMask(wS.d.POINTERTAP) || SS.hasSpecificMask(wS.d.POINTERDOUBLETAP) || HS.hasSpecificMask(wS.d.POINTERDOUBLETAP);
          !xS && hS && (XS = this._initActionManager(XS, bS), XS && (xS = XS.hasPickTriggers));
          let NS = !1;
          if (xS = xS && !this._isMultiTouchGesture, xS) {
            const xS = gS.button;
            if (bS.hasSwiped = this._isPointerSwiping(), !bS.hasSwiped) {
              let qS = !BS.ExclusiveDoubleClickMode;
              if (qS || (qS = !SS.hasSpecificMask(wS.d.POINTERDOUBLETAP) && !HS.hasSpecificMask(wS.d.POINTERDOUBLETAP), qS && !hS.HasSpecificTrigger(6) && (XS = this._initActionManager(XS, bS), XS && (qS = !XS.hasSpecificTrigger(6)))), qS)(Date.now() - this._previousStartingPointerTime > BS.DoubleClickDelay || xS !== this._previousButtonPressed) && (bS.singleClick = !0, tS(bS, this._currentPickResult), NS = !0);
              else {
                const SS = {
                  evt: gS,
                  clickInfo: bS,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, xS, bS, tS), BS.DoubleClickDelay)
                };
                this._delayedClicks[xS] = SS
              }
              let uS = SS.hasSpecificMask(wS.d.POINTERDOUBLETAP) || HS.hasSpecificMask(wS.d.POINTERDOUBLETAP);
              !uS && hS.HasSpecificTrigger(6) && (XS = this._initActionManager(XS, bS), XS && (uS = XS.hasSpecificTrigger(6))), uS && (xS === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < BS.DoubleClickDelay && !this._doubleClickOccured ? (bS.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = xS, BS.ExclusiveDoubleClickMode ? (this._delayedClicks[xS] && (clearTimeout(this._delayedClicks[xS]?.timeoutId), this._delayedClicks[xS] = null), tS(bS, this._previousPickResult)) : tS(bS, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, bS.NI = !0, bS.ignore = !1, BS.ExclusiveDoubleClickMode && this._delayedClicks[xS] && (clearTimeout(this._delayedClicks[xS]?.timeoutId), this._delayedClicks[xS] = null), tS(bS, this._currentPickResult)), NS = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = xS))
            }
          }
          NS || tS(bS, this._currentPickResult)
        }, this._onPointerMove = SS => {
          if (this._updatePointerPosition(SS), this._latestPointerMoveEvents.set(SS.pointerId, {
              event: SS,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > BS.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > BS.DragMovementThreshold), XS.isPointerLock && XS._verifyPointerLock(), this._checkPrePointerObservable(null, SS, SS.inputIndex >= JS.MouseWheelX && SS.inputIndex <= JS.MouseWheelZ ? wS.d.POINTERWHEEL : wS.d.POINTERMOVE)) return;
          if (!bS.cameraToUseForPointers && !bS.activeCamera) return;
          if (bS.skipPointerMovePicking) return void this._processPointerMove(new aS.c, SS);
          this._ensurePointerMovePredicate();
          const HS = bS._registeredActions > 0 || bS.constantlyUpdateMeshUnderPointer ? this._pickMove(SS) : null;
          this._processPointerMove(HS, SS)
        }, this._onPointerDown = SS => {
          const HS = this._activePointerIds.indexOf(-1);
          if (-1 === HS ? this._activePointerIds.push(SS.pointerId) : this._activePointerIds[HS] = SS.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, BS.ExclusiveDoubleClickMode)
            for (let tS = 0; tS < this._delayedClicks.length; tS++)
              if (this._delayedClicks[tS])
                if (SS.button === tS) clearTimeout(this._delayedClicks[tS]?.timeoutId);
                else {
                  const SS = this._delayedClicks[tS].clickInfo;
                  this._doubleClickOccured = !1, SS.singleClick = !0, SS.ignore = !1;
                  const HS = this._delayedClicks[tS].evt,
                    gS = wS.d.POINTERTAP,
                    XS = new wS.l(gS, HS, this._currentPickResult);
                  bS.onPointerObservable.hasObservers() && bS.onPointerObservable.hasSpecificMask(gS) && bS.onPointerObservable.notifyObservers(XS, gS), this._delayedClicks[tS] = null
                } if (this._updatePointerPosition(SS), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = SS.button), bS.preventDefaultOnPointerDown && tS && (SS.preventDefault(), tS.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, SS, wS.d.POINTERDOWN)) return;
          if (!bS.cameraToUseForPointers && !bS.activeCamera) return;
          let gS;
          this._pointerCaptures[SS.pointerId] = !0, bS.pointerDownPredicate || (bS.pointerDownPredicate = SS => SS.Fj && SS.isVisible && SS.isReady() && SS.isEnabled() && (!bS.cameraToUseForPointers || 0 !== (bS.cameraToUseForPointers.layerMask & SS.layerMask))), this._pickedDownMesh = null, gS = bS.skipPointerDownPicking || 0 === bS._registeredActions && !this._checkForPicking() && !bS.onPointerDown ? new aS.c : bS.Sa(this._unTranslatedPointerX, this._unTranslatedPointerY, bS.pointerDownPredicate, bS.pointerDownFastCheck, bS.cameraToUseForPointers, bS.pointerDownTrianglePredicate), this._processPointerDown(gS, SS)
        }, this._onPointerUp = SS => {
          const HS = this._activePointerIds.indexOf(SS.pointerId); - 1 !== HS && (this._activePointerIds[HS] = -1, this._activePointerIdsCount--, "touch" === SS.pointerType && this._latestPointerMoveEvents.delete(SS.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(SS), bS.preventDefaultOnPointerUp && tS && (SS.preventDefault(), tS.focus()), this._initClickEvent(bS.onPrePointerObservable, bS.onPointerObservable, SS, ((HS, gS) => {
            if (bS.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !HS.ignore)) {
              if (this._checkPrePointerObservable(null, SS, wS.d.POINTERUP)) return this._swipeButtonPressed === SS.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === SS.buttons && (this._pointerCaptures[SS.pointerId] = !1));
              HS.hasSwiped || (HS.singleClick && bS.onPrePointerObservable.hasSpecificMask(wS.d.POINTERTAP) && this._checkPrePointerObservable(null, SS, wS.d.POINTERTAP) && (this._skipPointerTap = !0), HS.NI && bS.onPrePointerObservable.hasSpecificMask(wS.d.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, SS, wS.d.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[SS.pointerId] ? (0 === SS.buttons && (this._pointerCaptures[SS.pointerId] = !1), (bS.cameraToUseForPointers || bS.activeCamera) && (bS.pointerUpPredicate || (bS.pointerUpPredicate = SS => SS.Fj && SS.isVisible && SS.isReady() && SS.isEnabled() && (!bS.cameraToUseForPointers || 0 !== (bS.cameraToUseForPointers.layerMask & SS.layerMask))), !this._meshPickProceed && (hS && hS.HasTriggers || this._checkForPicking() || bS.onPointerUp) && this._initActionManager(null, HS), gS || (gS = this._currentPickResult), this._processPointerUp(gS, SS, HS), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === SS.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === SS.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = SS => {
          const HS = LS.b.KEYDOWN;
          if (bS.onPreKeyboardObservable.hasObservers()) {
            const gS = new LS.f(HS, SS);
            if (bS.onPreKeyboardObservable.notifyObservers(gS, HS), gS.skipOnKeyboardObservable) return
          }
          if (bS.onKeyboardObservable.hasObservers()) {
            const gS = new LS.g(HS, SS);
            bS.onKeyboardObservable.notifyObservers(gS, HS)
          }
          bS.actionManager && bS.actionManager.processTrigger(14, KS.CreateNewFromScene(bS, SS))
        }, this._onKeyUp = SS => {
          const HS = LS.b.KEYUP;
          if (bS.onPreKeyboardObservable.hasObservers()) {
            const gS = new LS.f(HS, SS);
            if (bS.onPreKeyboardObservable.notifyObservers(gS, HS), gS.skipOnKeyboardObservable) return
          }
          if (bS.onKeyboardObservable.hasObservers()) {
            const gS = new LS.g(HS, SS);
            bS.onKeyboardObservable.notifyObservers(gS, HS)
          }
          bS.actionManager && bS.actionManager.processTrigger(15, KS.CreateNewFromScene(bS, SS))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((tS => {
          tS.deviceType === ZS.Mouse ? tS.onInputChangedObservable.add((bS => {
            this._originMouseEvent = bS, bS.inputIndex === JS.LeftClick || bS.inputIndex === JS.MiddleClick || bS.inputIndex === JS.RightClick || bS.inputIndex === JS.BrowserBack || bS.inputIndex === JS.BrowserForward ? HS && 1 === tS.getInput(bS.inputIndex) ? this._onPointerDown(bS) : SS && 0 === tS.getInput(bS.inputIndex) && this._onPointerUp(bS) : gS && (bS.inputIndex === JS.Move ? this._onPointerMove(bS) : bS.inputIndex !== JS.MouseWheelX && bS.inputIndex !== JS.MouseWheelY && bS.inputIndex !== JS.MouseWheelZ || this._onPointerMove(bS))
          })) : tS.deviceType === ZS.Touch ? tS.onInputChangedObservable.add((bS => {
            bS.inputIndex === JS.LeftClick && (HS && 1 === tS.getInput(bS.inputIndex) ? (this._onPointerDown(bS), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : SS && 0 === tS.getInput(bS.inputIndex) && (this._onPointerUp(bS), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), gS && bS.inputIndex === JS.Move && this._onPointerMove(bS)
          })) : tS.deviceType === ZS.Keyboard && tS.onInputChangedObservable.add((SS => {
            "keydown" === SS.type ? this._onKeyDown(SS) : "keyup" === SS.type && this._onKeyUp(SS)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 ? arguments[2] : void 0,
          tS = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[HS] === SS && (!SS || !SS._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const bS = this._meshUnderPointerId[HS];
        let XS;
        bS && (XS = bS._getActionManagerForTrigger(10), XS && XS.processTrigger(10, new KS(bS, this._pointerX, this._pointerY, SS, tS, {
          pointerId: HS
        }))), SS ? (this._meshUnderPointerId[HS] = SS, this._pointerOverMesh = SS, XS = SS._getActionManagerForTrigger(9), XS && XS.processTrigger(9, new KS(SS, this._pointerX, this._pointerY, SS, tS, {
          pointerId: HS,
          pickResult: gS
        }))) : (delete this._meshUnderPointerId[HS], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: SS,
          pointerId: HS
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(SS) {
        this._pointerOverMesh === SS && (this._pointerOverMesh = null), this._pickedDownMesh === SS && (this._pickedDownMesh = null), this._pickedUpMesh === SS && (this._pickedUpMesh = null);
        for (const HS in this._meshUnderPointerId) this._meshUnderPointerId[HS] === SS && delete this._meshUnderPointerId[HS]
      }
    }
    BS.DragMovementThreshold = 10, BS.LongPressDelay = 500, BS.DoubleClickDelay = 300, BS.ExclusiveDoubleClickMode = !1;
    var MS = gS(39987),
      FS = gS(37300),
      RS = gS(37783);
    class TS {
      static get UniqueId() {
        const SS = this._UniqueIdCounter;
        return this._UniqueIdCounter++, SS
      }
    }
    TS._UniqueIdCounter = 1;
    var oS = gS(40087),
      lS = gS(40229),
      mS = gS(37129);
    class eS {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var rS, SH, HH, gH, tH, bH, XH, xH, NH, qH, uH, IH, fH, kH, aH, KH, jH, GH, CH, nH, PH, QH, DH, wH, hH, ZH, JH, OH, dH, cH, vH, EH, LH, YH, AH, yH, VH, iH, WH, zH, UH, pH, sH, BH, MH, FH, RH, TH, oH, lH, mH, eH, rH, Sg = gS(38687),
      Hg = gS(37164);
    const gg = new IS.r,
      tg = new IS.r;
    var bg;
    ! function(SS) {
      SS[SS.BackwardCompatible = 0] = "BackwardCompatible", SS[SS.Intermediate = 1] = "Intermediate", SS[SS.Aggressive = 2] = "Aggressive"
    }(bg || (bg = {}));
    class Xg {
      static DefaultMaterialFactory(SS) {
        throw (0, DS.l)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, DS.l)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(SS) {
        SS !== this._clearColor && (this._clearColor = SS, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(SS) {
        if (SS !== this._performancePriority) {
          switch (this._performancePriority = SS, SS) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(SS)
        }
      }
      set forceWireframe(SS) {
        this._forceWireframe !== SS && (this._forceWireframe = SS, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(SS) {
        this._skipFrustumClipping !== SS && (this._skipFrustumClipping = SS)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(SS) {
        this._forcePointsCloud !== SS && (this._forcePointsCloud = SS, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(SS) {
        this._environmentTexture !== SS && (this._environmentTexture = SS, this.onEnvironmentTextureChangedObservable.notifyObservers(SS), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let SS = [];
        SS = SS.concat(this.meshes), SS = SS.concat(this.lights), SS = SS.concat(this.cameras), SS = SS.concat(this.transformNodes);
        for (const HS of this.skeletons) SS = SS.concat(HS.bones);
        return SS
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(SS) {
        this._animationPropertiesOverride = SS
      }
      set onDispose(SS) {
        this._onDisposeObserver && this.bY.remove(this._onDisposeObserver), this._onDisposeObserver = this.bY.add(SS)
      }
      set beforeRender(SS) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), SS && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(SS))
      }
      set afterRender(SS) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), SS && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(SS))
      }
      set beforeCameraRender(SS) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(SS)
      }
      set afterCameraRender(SS) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(SS)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(SS) {
        this._pointerPickingConfiguration.pointerDownPredicate = SS
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(SS) {
        this._pointerPickingConfiguration.pointerUpPredicate = SS
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(SS) {
        this._pointerPickingConfiguration.pointerMovePredicate = SS
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(SS) {
        this._pointerPickingConfiguration.pointerDownFastCheck = SS
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(SS) {
        this._pointerPickingConfiguration.pointerUpFastCheck = SS
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(SS) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = SS
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(SS) {
        this._pointerPickingConfiguration.skipPointerMovePicking = SS
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(SS) {
        this._pointerPickingConfiguration.skipPointerDownPicking = SS
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(SS) {
        this._pointerPickingConfiguration.skipPointerUpPicking = SS
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return BS.DragMovementThreshold
      }
      static set DragMovementThreshold(SS) {
        BS.DragMovementThreshold = SS
      }
      static get LongPressDelay() {
        return BS.LongPressDelay
      }
      static set LongPressDelay(SS) {
        BS.LongPressDelay = SS
      }
      static get DoubleClickDelay() {
        return BS.DoubleClickDelay
      }
      static set DoubleClickDelay(SS) {
        BS.DoubleClickDelay = SS
      }
      static get ExclusiveDoubleClickMode() {
        return BS.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(SS) {
        BS.ExclusiveDoubleClickMode = SS
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? IS.n.ZeroReadOnly
      }
      bindEyePosition(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tS = this._eyePosition,
          bS = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          XS = this.floatingOriginOffset,
          xS = gg.set(tS.x, tS.y, tS.z, bS ? -1 : 1),
          NS = xS.subtractFromFloatsToRef(XS.x, XS.y, XS.z, 0, tg);
        return SS && (gS ? SS.setFloat3(HS, NS.x, NS.y, NS.z) : SS.setVector4(HS, NS)), xS
      }
      finalizeSceneUbo() {
        const SS = this.getSceneUniformBuffer(),
          HS = this.bindEyePosition(null),
          gS = this.floatingOriginOffset;
        return SS.updateFloat4("vEyePosition", HS.x - gS.x, HS.y - gS.y, HS.z - gS.z, HS.w), SS.update(), SS
      }
      set useRightHandedSystem(SS) {
        this._useRightHandedSystem !== SS && (this._useRightHandedSystem = SS, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(SS) {
        this._currentStepId = SS
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(SS) {
        this._fogEnabled !== SS && (this._fogEnabled = SS, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(SS) {
        this._fogMode !== SS && (this._fogMode = SS, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(SS) {
        this._shadowsEnabled !== SS && (this._shadowsEnabled = SS, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(SS) {
        this._lightsEnabled !== SS && (this._lightsEnabled = SS, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(SS) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), SS && (this._unObserveActiveCameras = (0, mS.k)(SS, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = SS
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(SS) {
        SS !== this._activeCamera && (this._activeCamera = SS, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return Xg.DefaultMaterialFactory !== Xg._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = Xg.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(SS) {
        this._defaultMaterial = SS
      }
      set texturesEnabled(SS) {
        this._texturesEnabled !== SS && (this._texturesEnabled = SS, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(SS) {
        if (this._frameGraph) return this._frameGraph = SS, void(SS || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = SS, SS && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(SS) {
        this._skeletonsEnabled !== SS && (this._skeletonsEnabled = SS, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = Xg.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const SS of this._transientComponents) SS.register();
          this._transientComponents.length = 0
        }
      }
      igS(SS) {
        this._components.push(SS), this._transientComponents.push(SS);
        const HS = SS;
        HS.addFromContainer && HS.serialize && this._serializableComponents.push(HS)
      }
      _getComponent(SS) {
        for (const HS of this._components)
          if (HS.name === SS) return HS;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(SS, HS) {
        this._inputManager = new BS(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new FS.c(.2, .2, .3, 1), this.onClearColorChangedObservable = new xS.e, this.ambientColor = new FS.b(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new xS.e, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.zD = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.bY = new xS.e, this._onDisposeObserver = null, this.onBeforeRenderObservable = new xS.e, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new xS.e, this.onAfterRenderCameraObservable = new xS.e, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new xS.e, this.onAfterAnimationsObservable = new xS.e, this.onBeforeDrawPhaseObservable = new xS.e, this.onAfterDrawPhaseObservable = new xS.e, this.onReadyObservable = new xS.e, this.onBeforeCameraRenderObservable = new xS.e, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new xS.e, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new xS.e, this.onAfterActiveMeshesEvaluationObservable = new xS.e, this.onBeforeParticlesRenderingObservable = new xS.e, this.onAfterParticlesRenderingObservable = new xS.e, this.onDataLoadedObservable = new xS.e, this.onNewCameraAddedObservable = new xS.e, this.onCameraRemovedObservable = new xS.e, this.onNewLightAddedObservable = new xS.e, this.onLightRemovedObservable = new xS.e, this.onNewGeometryAddedObservable = new xS.e, this.onGeometryRemovedObservable = new xS.e, this.onNewTransformNodeAddedObservable = new xS.e, this.onTransformNodeRemovedObservable = new xS.e, this.onNewMeshAddedObservable = new xS.e, this.onMeshRemovedObservable = new xS.e, this.onNewSkeletonAddedObservable = new xS.e, this.onSkeletonRemovedObservable = new xS.e, this.onNewParticleSystemAddedObservable = new xS.e, this.onParticleSystemRemovedObservable = new xS.e, this.onNewAnimationGroupAddedObservable = new xS.e, this.onAnimationGroupRemovedObservable = new xS.e, this.onNewMaterialAddedObservable = new xS.e, this.onNewMultiMaterialAddedObservable = new xS.e, this.onMaterialRemovedObservable = new xS.e, this.onMultiMaterialRemovedObservable = new xS.e, this.onNewTextureAddedObservable = new xS.e, this.onTextureRemovedObservable = new xS.e, this.onNewFrameGraphAddedObservable = new xS.e, this.onFrameGraphRemovedObservable = new xS.e, this.onNewObjectRendererAddedObservable = new xS.e, this.onObjectRendererRemovedObservable = new xS.e, this.onNewPostProcessAddedObservable = new xS.e, this.onPostProcessRemovedObservable = new xS.e, this.onNewEffectLayerAddedObservable = new xS.e, this.onEffectLayerRemovedObservable = new xS.e, this.onBeforeRenderTargetsRenderObservable = new xS.e, this.onAfterRenderTargetsRenderObservable = new xS.e, this.onBeforeStepObservable = new xS.e, this.onAfterStepObservable = new xS.e, this.onActiveCameraChanged = new xS.e, this.onActiveCamerasChanged = new xS.e, this.onBeforeRenderingGroupObservable = new xS.e, this.onAfterRenderingGroupObservable = new xS.e, this.onMeshImportedObservable = new xS.e, this.onAnimationFileImportedObservable = new xS.e, this.onEnvironmentTextureChangedObservable = new xS.e, this.onMeshUnderPointerUpdatedObservable = new xS.e, this._registeredForLateAnimationBindings = new NS.b(256), this._pointerPickingConfiguration = new eS, this.onPrePointerObservable = new xS.e, this.onPointerObservable = new xS.e, this.onPreKeyboardObservable = new xS.e, this.onKeyboardObservable = new xS.e, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = Xg.FOGMODE_NONE, this.fogColor = new FS.b(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.VV = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new IS.n(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new NS.b(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new MS.c, this._activeIndices = new MS.c, this._activeParticles = new MS.c, this._activeBones = new MS.c, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new NS.f(256), this._processedMaterials = new NS.f(256), this._renderTargets = new NS.b(256), this._materialsRenderTargets = new NS.b(256), this._activeParticleSystems = new NS.f(256), this._activeSkeletons = new NS.b(32), this._softwareSkinnedMeshes = new NS.b(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = IS.e.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = nS.h.Create(), this._beforeClearStage = nS.h.Create(), this._beforeRenderTargetClearStage = nS.h.Create(), this._gatherRenderTargetsStage = nS.h.Create(), this._gatherActiveCameraRenderTargetsStage = nS.h.Create(), this._isReadyForMeshStage = nS.h.Create(), this._beforeEvaluateActiveMeshStage = nS.h.Create(), this._evaluateSubMeshStage = nS.h.Create(), this._preActiveMeshStage = nS.h.Create(), this._cameraDrawRenderTargetStage = nS.h.Create(), this._beforeCameraDrawStage = nS.h.Create(), this._beforeRenderTargetDrawStage = nS.h.Create(), this._beforeRenderingGroupDrawStage = nS.h.Create(), this._beforeRenderingMeshStage = nS.h.Create(), this._afterRenderingMeshStage = nS.h.Create(), this._afterRenderingGroupDrawStage = nS.h.Create(), this._afterCameraDrawStage = nS.h.Create(), this._afterCameraPostProcessStage = nS.h.Create(), this._afterRenderTargetDrawStage = nS.h.Create(), this._afterRenderTargetPostProcessStage = nS.h.Create(), this._afterRenderStage = nS.h.Create(), this._pointerMoveStage = nS.h.Create(), this._pointerDownStage = nS.h.Create(), this._pointerUpStage = nS.h.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new xS.e, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const gS = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...HS
        };
        this.defaultCameraLayerMask = gS.defaultCameraLayerMask, this.defaultRenderableLayerMask = gS.defaultRenderableLayerMask, SS = this._engine = SS || QS.d.LastCreatedEngine, gS.virtual ? SS._virtualScenes.push(this) : (QS.d._LastCreatedScene = this, SS.scenes.push(this)), (SS.getCreationOptions().useLargeWorldRendering || HS?.useFloatingOrigin) && ((0, GS.i)(), this._floatingOriginScene = this, GS.e.lL = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new CS.c(this), jS.d && (this.postProcessManager = new jS.d(this)), (0, PS.j)() && this.attachControl(), this._createUbo(), fS.d && (this._imageProcessingConfiguration = new fS.d), this.setDefaultCandidateProviders(), gS.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = gS.useMaterialMeshMap, this.useClonedMeshMap = gS.useClonedMeshMap, HS && HS.virtual || SS.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(SS) {
        return this._defaultSubMeshCandidates.data = SS.dD, this._defaultSubMeshCandidates.length = SS.dD.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = SS => this._getDefaultSubMeshCandidates(SS), this.getIntersectingSubMeshCandidates = (SS, HS) => this._getDefaultSubMeshCandidates(SS), this.getCollidingSubMeshCandidates = (SS, HS) => this._getDefaultSubMeshCandidates(SS)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(SS) {
        this._inputManager.pointerX = SS
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(SS) {
        this._inputManager.pointerY = SS
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
      isCachedMaterialInvalid(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== HS || this._cachedMaterial !== SS || this._cachedVisibility !== gS
      }
      AK() {
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
      simulatePointerMove(SS, HS) {
        return this._inputManager.simulatePointerMove(SS, HS), this
      }
      simulatePointerDown(SS, HS) {
        return this._inputManager.simulatePointerDown(SS, HS), this
      }
      simulatePointerUp(SS, HS, gS) {
        return this._inputManager.simulatePointerUp(SS, HS, gS), this
      }
      isPointerCaptured() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(SS)
      }
      attachControl() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(SS, HS, gS)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let SS, HS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const gS = this.AK(),
          tS = gS.currentRenderPassId;
        gS.currentRenderPassId = this.activeCamera?.renderPassId ?? tS;
        let bS = !0;
        for (this._pendingData.length > 0 && (bS = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && bS && (bS = this.depthPeelingRenderer.isReady()), HS && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), SS = 0; SS < this.meshes.length; SS++) {
          const tS = this.meshes[SS];
          if (!tS.dD || 0 === tS.dD.length) continue;
          if (!tS.isReady(!0)) {
            bS = !1;
            continue
          }
          const XS = tS.hasThinInstances || "InstancedMesh" === tS.getClassName() || "InstancedLinesMesh" === tS.getClassName() || gS.getCaps().instancedArrays && tS.instances.length > 0;
          for (let SS = 0, HS = this._isReadyForMeshStage; SS < HS.length; SS++) {
            HS[SS].action(tS, XS) || (bS = !1)
          }
          if (!HS) continue;
          const xS = tS.material || this.defaultMaterial;
          if (xS)
            if (xS._storeEffectOnSubMeshes)
              for (const SS of tS.dD) {
                const HS = SS.zK();
                HS && HS.hasRenderTargetTextures && null != HS.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(HS) && (this._processedMaterials.push(HS), this._materialsRenderTargets.concatWithNoDuplicate(HS.getRenderTargetTextures()))
              } else xS.hasRenderTargetTextures && null != xS.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(xS) && (this._processedMaterials.push(xS), this._materialsRenderTargets.concatWithNoDuplicate(xS.getRenderTargetTextures()))
        }
        if (HS) {
          for (SS = 0; SS < this._materialsRenderTargets.length; ++SS) {
            this._materialsRenderTargets.data[SS].isReadyForRendering() || (bS = !1)
          }
          for (SS = 0; SS < this.customRenderTargets.length; ++SS) {
            this.customRenderTargets[SS].isReadyForRendering() || (bS = !1)
          }
        }
        for (SS = 0; SS < this.geometries.length; SS++) {
          2 === this.geometries[SS].delayLoadState && (bS = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const XS of this.activeCameras) XS.isReady(!0) || (bS = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (bS = !1));
        for (const XS of this.zD) XS.isReady() || (bS = !1);
        if (this.proceduralTexturesEnabled)
          for (const XS of this.proceduralTextures) XS.isReady() || (bS = !1);
        if (this.layers)
          for (const XS of this.layers) XS.isReady() || (bS = !1);
        if (this.effectLayers)
          for (const XS of this.effectLayers) XS.isLayerReady() || (bS = !1);
        for (const XS of this._isReadyChecks) XS.isReady() || (bS = !1);
        return gS.areAllEffectsReady() || (bS = !1), gS.currentRenderPassId = tS, bS
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(SS) {
        this.onBeforeRenderObservable.add(SS)
      }
      unregisterBeforeRender(SS) {
        this.onBeforeRenderObservable.removeCallback(SS)
      }
      registerAfterRender(SS) {
        this.onAfterRenderObservable.add(SS)
      }
      unregisterAfterRender(SS) {
        this.onAfterRenderObservable.removeCallback(SS)
      }
      _executeOnceBeforeRender(SS) {
        const HS = () => {
          SS(), setTimeout((() => {
            this.unregisterBeforeRender(HS)
          }))
        };
        this.registerBeforeRender(HS)
      }
      executeOnceBeforeRender(SS, HS) {
        void 0 !== HS ? setTimeout((() => {
          this._executeOnceBeforeRender(SS)
        }), HS) : this._executeOnceBeforeRender(SS)
      }
      addPendingData(SS) {
        this._pendingData.push(SS)
      }
      removePendingData(SS) {
        const HS = this.isLoading,
          gS = this._pendingData.indexOf(SS); - 1 !== gS && this._pendingData.splice(gS, 1), HS && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(SS) {
        -1 === this._isReadyChecks.indexOf(SS) && this._isReadyChecks.push(SS)
      }
      removeIsReadyCheck(SS) {
        const HS = this._isReadyChecks.indexOf(SS); - 1 !== HS && this._isReadyChecks.splice(HS, 1)
      }
      executeWhenReady(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(SS), null === this._executeWhenReadyTimeoutId && this._checkIsReady(HS)
      }
      async whenReadyAsync() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((HS => {
          this.executeWhenReady((() => {
            HS()
          }), SS)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = XS.e.Now;
        else if (this.onReadyTimeoutDuration > 0 && XS.e.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(SS)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(SS)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = XS.e.Now
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
      setTransformMatrix(SS, HS, gS, tS) {
        this._multiviewSceneUboIsActive = !!(gS && tS && this._multiviewSceneUbo), this._viewUpdateFlag === SS.updateFlag && this._projectionUpdateFlag === HS.updateFlag || (this._viewUpdateFlag = SS.updateFlag, this._projectionUpdateFlag = HS.updateFlag, this._viewMatrix = SS, this._projectionMatrix = HS, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new IS.e), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? RS.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = RS.d.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(gS, tS) : this._sceneUbo.useUbo && (this._sceneUbo.J7("viewProjection", this._transformMatrix), this._sceneUbo.J7("view", this._viewMatrix), this._sceneUbo.J7("projection", this._projectionMatrix), this._sceneUbo.J7("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(SS, HS) {
        const gS = "boolean" === typeof HS ? HS : HS?.trackUBOsInFrame,
          tS = new kS.c(this._engine, void 0, !1, SS ?? "Bj", void 0, gS);
        return tS.addUniform("viewProjection", 16), tS.addUniform("view", 16), tS.addUniform("projection", 16), tS.addUniform("vEyePosition", 4), tS.addUniform("inverseProjection", 16), tS
      }
      setSceneUniformBuffer(SS) {
        this._sceneUbo = SS, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : IS.n.ZeroReadOnly
      }
      getUniqueId() {
        return TS.UniqueId
      }
      egS(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(SS), SS._resyncLightSources(), SS.parent || SS._addToSceneRootNodes(), bS.e.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(SS)
          })), HS)) {
          const HS = SS.getChildMeshes();
          for (const SS of HS) this.egS(SS)
        }
      }
      ZY(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gS = this.meshes.indexOf(SS);
        if (-1 !== gS && (this.meshes.splice(gS, 1), SS.parent || SS._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(SS), this.onMeshRemovedObservable.notifyObservers(SS), HS) {
          const HS = SS.getChildMeshes();
          for (const SS of HS) this.ZY(SS)
        }
        return gS
      }
      addTransformNode(SS) {
        this._blockEntityCollection || SS.lL() === this && -1 !== SS._indexInSceneTransformNodesArray || (SS._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(SS), SS.parent || SS._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(SS))
      }
      removeTransformNode(SS) {
        const HS = SS._indexInSceneTransformNodesArray;
        if (-1 !== HS) {
          if (HS !== this.transformNodes.length - 1) {
            const SS = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[HS] = SS, SS._indexInSceneTransformNodesArray = HS
          }
          SS._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), SS.parent || SS._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(SS), HS
      }
      removeSkeleton(SS) {
        const HS = this.skeletons.indexOf(SS);
        return -1 !== HS && (this.skeletons.splice(HS, 1), this.onSkeletonRemovedObservable.notifyObservers(SS), this._executeActiveContainerCleanup(this._activeSkeletons)), HS
      }
      removeMorphTargetManager(SS) {
        const HS = this.morphTargetManagers.indexOf(SS);
        return -1 !== HS && this.morphTargetManagers.splice(HS, 1), HS
      }
      removeLight(SS) {
        const HS = this.lights.indexOf(SS);
        if (-1 !== HS) {
          for (const HS of this.meshes) HS._removeLightSource(SS, !1);
          this.lights.splice(HS, 1), this.sortLightsByPriority(), SS.parent || SS._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(SS)
        }
        return HS
      }
      removeCamera(SS) {
        const HS = this.cameras.indexOf(SS);
        if (-1 !== HS && (this.cameras.splice(HS, 1), SS.parent || SS._removeFromSceneRootNodes()), this.activeCameras) {
          const HS = this.activeCameras.indexOf(SS); - 1 !== HS && this.activeCameras.splice(HS, 1)
        }
        return this.activeCamera === SS && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(SS), HS
      }
      removeParticleSystem(SS) {
        const HS = this.zD.indexOf(SS);
        return -1 !== HS && (this.zD.splice(HS, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(SS), HS
      }
      removeAnimation(SS) {
        const HS = this.animations.indexOf(SS);
        return -1 !== HS && this.animations.splice(HS, 1), HS
      }
      stopAnimation(SS, HS, gS) {}
      removeAnimationGroup(SS) {
        const HS = this.animationGroups.indexOf(SS);
        return -1 !== HS && this.animationGroups.splice(HS, 1), this.onAnimationGroupRemovedObservable.notifyObservers(SS), HS
      }
      removeMultiMaterial(SS) {
        const HS = this.multiMaterials.indexOf(SS);
        return -1 !== HS && this.multiMaterials.splice(HS, 1), this.onMultiMaterialRemovedObservable.notifyObservers(SS), HS
      }
      removeMaterial(SS) {
        const HS = SS._indexInSceneMaterialArray;
        if (-1 !== HS && HS < this.materials.length) {
          if (HS !== this.materials.length - 1) {
            const SS = this.materials[this.materials.length - 1];
            this.materials[HS] = SS, SS._indexInSceneMaterialArray = HS
          }
          SS._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(SS), HS
      }
      removeActionManager(SS) {
        const HS = this.actionManagers.indexOf(SS);
        return -1 !== HS && this.actionManagers.splice(HS, 1), HS
      }
      removeTexture(SS) {
        const HS = this.textures.indexOf(SS);
        return -1 !== HS && this.textures.splice(HS, 1), this.onTextureRemovedObservable.notifyObservers(SS), HS
      }
      removeFrameGraph(SS) {
        const HS = this.frameGraphs.indexOf(SS);
        return -1 !== HS && this.frameGraphs.splice(HS, 1), this.onFrameGraphRemovedObservable.notifyObservers(SS), HS
      }
      removeObjectRenderer(SS) {
        const HS = this.objectRenderers.indexOf(SS);
        return -1 !== HS && this.objectRenderers.splice(HS, 1), this.onObjectRendererRemovedObservable.notifyObservers(SS), HS
      }
      removePostProcess(SS) {
        const HS = this.postProcesses.indexOf(SS);
        return -1 !== HS && this.postProcesses.splice(HS, 1), this.onPostProcessRemovedObservable.notifyObservers(SS), HS
      }
      removeEffectLayer(SS) {
        const HS = this.effectLayers.indexOf(SS);
        return -1 !== HS && this.effectLayers.splice(HS, 1), this.onEffectLayerRemovedObservable.notifyObservers(SS), HS
      }
      addLight(SS) {
        if (!this._blockEntityCollection) {
          this.lights.push(SS), this.sortLightsByPriority(), SS.parent || SS._addToSceneRootNodes();
          for (const HS of this.meshes) - 1 === HS.lightSources.indexOf(SS) && (HS.lightSources.push(SS), HS._resyncLightSources());
          bS.e.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(SS)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(lS.e.CompareLightsPriority)
      }
      addCamera(SS) {
        this._blockEntityCollection || (this.cameras.push(SS), bS.e.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(SS)
        })), SS.parent || SS._addToSceneRootNodes())
      }
      addSkeleton(SS) {
        this._blockEntityCollection || (this.skeletons.push(SS), bS.e.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(SS)
        })))
      }
      addParticleSystem(SS) {
        this._blockEntityCollection || (this.zD.push(SS), bS.e.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(SS)
        })))
      }
      addAnimation(SS) {
        this._blockEntityCollection || this.animations.push(SS)
      }
      addAnimationGroup(SS) {
        this._blockEntityCollection || (this.animationGroups.push(SS), bS.e.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(SS)
        })))
      }
      addMultiMaterial(SS) {
        this._blockEntityCollection || (this.multiMaterials.push(SS), bS.e.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(SS)
        })))
      }
      addMaterial(SS) {
        this._blockEntityCollection || SS.lL() === this && -1 !== SS._indexInSceneMaterialArray || (SS._indexInSceneMaterialArray = this.materials.length, this.materials.push(SS), bS.e.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(SS)
        })))
      }
      addMorphTargetManager(SS) {
        this._blockEntityCollection || this.morphTargetManagers.push(SS)
      }
      addGeometry(SS) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[SS.uniqueId] = this.geometries.length), this.geometries.push(SS))
      }
      addActionManager(SS) {
        this.actionManagers.push(SS)
      }
      addTexture(SS) {
        this._blockEntityCollection || (this.textures.push(SS), this.onNewTextureAddedObservable.notifyObservers(SS))
      }
      addFrameGraph(SS) {
        this.frameGraphs.push(SS), bS.e.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(SS)
        }))
      }
      addObjectRenderer(SS) {
        this.objectRenderers.push(SS), bS.e.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(SS)
        }))
      }
      addPostProcess(SS) {
        this._blockEntityCollection || (this.postProcesses.push(SS), bS.e.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(SS)
        })))
      }
      addEffectLayer(SS) {
        this._blockEntityCollection || (this.effectLayers.push(SS), bS.e.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(SS)
        })))
      }
      switchActiveCamera(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = SS, HS && SS.attachControl())
      }
      setActiveCameraById(SS) {
        const HS = this.getCameraById(SS);
        return HS ? (this.activeCamera = HS, HS) : null
      }
      setActiveCameraByName(SS) {
        const HS = this.getCameraByName(SS);
        return HS ? (this.activeCamera = HS, HS) : null
      }
      getAnimationGroupByName(SS) {
        for (let HS = 0; HS < this.animationGroups.length; HS++)
          if (this.animationGroups[HS].name === SS) return this.animationGroups[HS];
        return null
      }
      _getMaterial(SS, HS) {
        for (let gS = 0; gS < this.materials.length; gS++) {
          const SS = this.materials[gS];
          if (HS(SS)) return SS
        }
        if (SS)
          for (let gS = 0; gS < this.multiMaterials.length; gS++) {
            const SS = this.multiMaterials[gS];
            if (HS(SS)) return SS
          }
        return null
      }
      getMaterialByUniqueID(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(SS, HS)
      }
      getMaterialByUniqueId(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(HS, (HS => HS.uniqueId === SS))
      }
      getMaterialById(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(HS, (HS => HS.id === SS))
      }
      getMaterialByName(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(HS, (HS => HS.name === SS))
      }
      getLastMaterialById(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let gS = this.materials.length - 1; gS >= 0; gS--)
          if (this.materials[gS].id === SS) return this.materials[gS];
        if (HS)
          for (let gS = this.multiMaterials.length - 1; gS >= 0; gS--)
            if (this.multiMaterials[gS].id === SS) return this.multiMaterials[gS];
        return null
      }
      getTextureByUniqueId(SS) {
        for (let HS = 0; HS < this.textures.length; HS++)
          if (this.textures[HS].uniqueId === SS) return this.textures[HS];
        return null
      }
      getTextureByName(SS) {
        for (let HS = 0; HS < this.textures.length; HS++)
          if (this.textures[HS].name === SS) return this.textures[HS];
        return null
      }
      getCameraById(SS) {
        for (let HS = 0; HS < this.cameras.length; HS++)
          if (this.cameras[HS].id === SS) return this.cameras[HS];
        return null
      }
      getCameraByUniqueId(SS) {
        for (let HS = 0; HS < this.cameras.length; HS++)
          if (this.cameras[HS].uniqueId === SS) return this.cameras[HS];
        return null
      }
      getCameraByName(SS) {
        for (let HS = 0; HS < this.cameras.length; HS++)
          if (this.cameras[HS].name === SS) return this.cameras[HS];
        return null
      }
      getBoneById(SS) {
        for (let HS = 0; HS < this.skeletons.length; HS++) {
          const gS = this.skeletons[HS];
          for (let HS = 0; HS < gS.bones.length; HS++)
            if (gS.bones[HS].id === SS) return gS.bones[HS]
        }
        return null
      }
      getBoneByName(SS) {
        for (let HS = 0; HS < this.skeletons.length; HS++) {
          const gS = this.skeletons[HS];
          for (let HS = 0; HS < gS.bones.length; HS++)
            if (gS.bones[HS].name === SS) return gS.bones[HS]
        }
        return null
      }
      getLightByName(SS) {
        for (let HS = 0; HS < this.lights.length; HS++)
          if (this.lights[HS].name === SS) return this.lights[HS];
        return null
      }
      getLightById(SS) {
        for (let HS = 0; HS < this.lights.length; HS++)
          if (this.lights[HS].id === SS) return this.lights[HS];
        return null
      }
      getLightByUniqueId(SS) {
        for (let HS = 0; HS < this.lights.length; HS++)
          if (this.lights[HS].uniqueId === SS) return this.lights[HS];
        return null
      }
      getParticleSystemById(SS) {
        for (let HS = 0; HS < this.zD.length; HS++)
          if (this.zD[HS].id === SS) return this.zD[HS];
        return null
      }
      getGeometryById(SS) {
        for (let HS = 0; HS < this.geometries.length; HS++)
          if (this.geometries[HS].id === SS) return this.geometries[HS];
        return null
      }
      _getGeometryByUniqueId(SS) {
        if (this._geometriesByUniqueId) {
          const HS = this._geometriesByUniqueId[SS];
          if (void 0 !== HS) return this.geometries[HS]
        } else
          for (let HS = 0; HS < this.geometries.length; HS++)
            if (this.geometries[HS].uniqueId === SS) return this.geometries[HS];
        return null
      }
      getFrameGraphByName(SS) {
        for (let HS = 0; HS < this.frameGraphs.length; HS++)
          if (this.frameGraphs[HS].name === SS) return this.frameGraphs[HS];
        return null
      }
      pushGeometry(SS, HS) {
        return !(!HS && this._getGeometryByUniqueId(SS.uniqueId)) && (this.addGeometry(SS), bS.e.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(SS)
        })), !0)
      }
      removeGeometry(SS) {
        let HS;
        if (this._geometriesByUniqueId) {
          if (HS = this._geometriesByUniqueId[SS.uniqueId], void 0 === HS) return !1
        } else if (HS = this.geometries.indexOf(SS), HS < 0) return !1;
        if (HS !== this.geometries.length - 1) {
          const SS = this.geometries[this.geometries.length - 1];
          SS && (this.geometries[HS] = SS, this._geometriesByUniqueId && (this._geometriesByUniqueId[SS.uniqueId] = HS))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[SS.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(SS), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(SS) {
        for (let HS = 0; HS < this.meshes.length; HS++)
          if (this.meshes[HS].id === SS) return this.meshes[HS];
        return null
      }
      getMeshesById(SS) {
        return this.meshes.filter((function(HS) {
          return HS.id === SS
        }))
      }
      getTransformNodeById(SS) {
        for (let HS = 0; HS < this.transformNodes.length; HS++)
          if (this.transformNodes[HS].id === SS) return this.transformNodes[HS];
        return null
      }
      getTransformNodeByUniqueId(SS) {
        for (let HS = 0; HS < this.transformNodes.length; HS++)
          if (this.transformNodes[HS].uniqueId === SS) return this.transformNodes[HS];
        return null
      }
      getTransformNodesById(SS) {
        return this.transformNodes.filter((function(HS) {
          return HS.id === SS
        }))
      }
      getMeshByUniqueId(SS) {
        for (let HS = 0; HS < this.meshes.length; HS++)
          if (this.meshes[HS].uniqueId === SS) return this.meshes[HS];
        return null
      }
      getLastMeshById(SS) {
        for (let HS = this.meshes.length - 1; HS >= 0; HS--)
          if (this.meshes[HS].id === SS) return this.meshes[HS];
        return null
      }
      getLastTransformNodeById(SS) {
        for (let HS = this.transformNodes.length - 1; HS >= 0; HS--)
          if (this.transformNodes[HS].id === SS) return this.transformNodes[HS];
        return null
      }
      getLastEntryById(SS) {
        let HS;
        for (HS = this.meshes.length - 1; HS >= 0; HS--)
          if (this.meshes[HS].id === SS) return this.meshes[HS];
        for (HS = this.transformNodes.length - 1; HS >= 0; HS--)
          if (this.transformNodes[HS].id === SS) return this.transformNodes[HS];
        for (HS = this.cameras.length - 1; HS >= 0; HS--)
          if (this.cameras[HS].id === SS) return this.cameras[HS];
        for (HS = this.lights.length - 1; HS >= 0; HS--)
          if (this.lights[HS].id === SS) return this.lights[HS];
        for (HS = this.skeletons.length - 1; HS >= 0; HS--) {
          const gS = this.skeletons[HS];
          for (let HS = gS.bones.length - 1; HS >= 0; HS--)
            if (gS.bones[HS].id === SS) return gS.bones[HS]
        }
        return null
      }
      getNodeById(SS) {
        const HS = this.getMeshById(SS);
        if (HS) return HS;
        const gS = this.getTransformNodeById(SS);
        if (gS) return gS;
        const tS = this.getLightById(SS);
        if (tS) return tS;
        const bS = this.getCameraById(SS);
        if (bS) return bS;
        const XS = this.getBoneById(SS);
        return XS || null
      }
      getNodeByName(SS) {
        const HS = this.getMeshByName(SS);
        if (HS) return HS;
        const gS = this.getTransformNodeByName(SS);
        if (gS) return gS;
        const tS = this.getLightByName(SS);
        if (tS) return tS;
        const bS = this.getCameraByName(SS);
        if (bS) return bS;
        const XS = this.getBoneByName(SS);
        return XS || null
      }
      getMeshByName(SS) {
        for (let HS = 0; HS < this.meshes.length; HS++)
          if (this.meshes[HS].name === SS) return this.meshes[HS];
        return null
      }
      getTransformNodeByName(SS) {
        for (let HS = 0; HS < this.transformNodes.length; HS++)
          if (this.transformNodes[HS].name === SS) return this.transformNodes[HS];
        return null
      }
      getLastSkeletonById(SS) {
        for (let HS = this.skeletons.length - 1; HS >= 0; HS--)
          if (this.skeletons[HS].id === SS) return this.skeletons[HS];
        return null
      }
      getSkeletonByUniqueId(SS) {
        for (let HS = 0; HS < this.skeletons.length; HS++)
          if (this.skeletons[HS].uniqueId === SS) return this.skeletons[HS];
        return null
      }
      getSkeletonById(SS) {
        for (let HS = 0; HS < this.skeletons.length; HS++)
          if (this.skeletons[HS].id === SS) return this.skeletons[HS];
        return null
      }
      getSkeletonByName(SS) {
        for (let HS = 0; HS < this.skeletons.length; HS++)
          if (this.skeletons[HS].name === SS) return this.skeletons[HS];
        return null
      }
      getMorphTargetManagerById(SS) {
        for (let HS = 0; HS < this.morphTargetManagers.length; HS++)
          if (this.morphTargetManagers[HS].uniqueId === SS) return this.morphTargetManagers[HS];
        return null
      }
      getMorphTargetById(SS) {
        for (let HS = 0; HS < this.morphTargetManagers.length; ++HS) {
          const gS = this.morphTargetManagers[HS];
          for (let HS = 0; HS < gS.numTargets; ++HS) {
            const tS = gS.getTarget(HS);
            if (tS.id === SS) return tS
          }
        }
        return null
      }
      getMorphTargetByName(SS) {
        for (let HS = 0; HS < this.morphTargetManagers.length; ++HS) {
          const gS = this.morphTargetManagers[HS];
          for (let HS = 0; HS < gS.numTargets; ++HS) {
            const tS = gS.getTarget(HS);
            if (tS.name === SS) return tS
          }
        }
        return null
      }
      getPostProcessByName(SS) {
        for (let HS = 0; HS < this.postProcesses.length; ++HS) {
          const gS = this.postProcesses[HS];
          if (gS.name === SS) return gS
        }
        return null
      }
      isActiveMesh(SS) {
        return -1 !== this._activeMeshes.indexOf(SS)
      }
      get uid() {
        return this._uid || (this._uid = tS.k.RandomId()), this._uid
      }
      addExternalData(SS, HS) {
        return this._externalData || (this._externalData = new qS), this._externalData.add(SS, HS)
      }
      getExternalData(SS) {
        return this._externalData ? this._externalData.get(SS) : null
      }
      getOrAddExternalDataWithFactory(SS, HS) {
        return this._externalData || (this._externalData = new qS), this._externalData.getOrAddWithFactory(SS, HS)
      }
      removeExternalData(SS) {
        return this._externalData.remove(SS)
      }
      _evaluateSubMesh(SS, HS, gS, tS) {
        if (tS || SS.isInFrustum(this._frustumPlanes)) {
          for (let tS = 0, bS = this._evaluateSubMeshStage; tS < bS.length; tS++) {
            bS[tS].action(HS, SS)
          }
          const gS = SS.zK();
          null !== gS && void 0 !== gS && (gS.hasRenderTargetTextures && null != gS.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(gS) && (this._processedMaterials.push(gS), this._materialsRenderTargets.concatWithNoDuplicate(gS.getRenderTargetTextures())), this._renderingManager.dispatch(SS, HS, gS))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(SS) {
        this._preventFreeActiveMeshesAndRenderingGroups !== SS && (SS && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = SS)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let SS = 0; SS < this.activeCameras.length; SS++) {
            const HS = this.activeCameras[SS];
            HS && HS._activeMeshes && HS._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let SS = 0; SS < this.textures.length; SS++) {
            const HS = this.textures[SS];
            HS && HS.renderList && HS.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          HS = arguments.length > 1 ? arguments[1] : void 0,
          gS = arguments.length > 2 ? arguments[2] : void 0,
          tS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          XS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const xS = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const SS of xS) SS.objectRenderer._freezeActiveMeshes(tS);
          return this._freezeActiveMeshesCancel = (0, bS.g)((() => {
            let SS = !0,
              HS = !0;
            for (const gS of xS) SS && (SS = gS.objectRenderer._isFrozen), HS && (HS = null !== gS.objectRenderer._freezeActiveMeshesCancel);
            if (SS) return !0;
            if (!HS) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = XS, this._skipEvaluateActiveMeshesCompletely = SS, HS?.()
          }), ((SS, HS) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), HS) {
              const HS = "Scene: Timeout while waiting for meshes to be frozen.";
              gS ? gS(HS) : (Sg.b.Error(HS), SS && Sg.b.Error(SS))
            } else {
              const HS = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              gS ? gS(HS) : (Sg.b.Error(HS), SS && (Sg.b.Error(SS), SS.stack && Sg.b.Error(SS.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = XS, this._skipEvaluateActiveMeshesCompletely = SS, tS)
              for (let SS = 0; SS < this._activeMeshes.length; SS++) this._activeMeshes.data[SS]._freeze();
            HS && HS()
          } else gS && gS("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let SS = 0; SS < this.meshes.length; SS++) {
          const HS = this.meshes[SS];
          HS._internalAbstractMeshDataInfo && (HS._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const SS = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const HS of SS) HS.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let SS = 0; SS < this._activeMeshes.length; SS++) this._activeMeshes.data[SS]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(SS) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => SS.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const SS = this._activeMeshes.length;
            for (let HS = 0; HS < SS; HS++) {
              this._activeMeshes.data[HS].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const SS = this._activeParticleSystems.length;
            for (let HS = 0; HS < SS; HS++) this._activeParticleSystems.data[HS].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let bS = 0, XS = this._beforeEvaluateActiveMeshStage; bS < XS.length; bS++) {
          XS[bS].action()
        }
        const SS = this.getActiveMeshCandidates(),
          HS = SS.length,
          gS = MS.c.Enabled,
          tS = this.customLODSelector;
        for (let bS = 0; bS < HS; bS++) {
          const HS = SS.data[bS],
            XS = !tS && !HS.qY && !HS._internalMeshDataInfo?._LODLevels.length;
          let xS, NS;
          if ((XS || (xS = HS._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), xS ? xS[1] = -1 : (xS = [HS, -1], HS._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, xS))), !HS.isBlocked) && (gS && this._totalVertices.addCount(HS.getTotalVertices(), !1), HS.isReady() && HS.isEnabled() && !HS.nf.hasAZeroComponent)) {
            if (HS.computeWorldMatrix(), HS.actionManager && HS.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(HS), XS) NS = HS;
            else if (NS = tS ? tS(HS, this.activeCamera) : HS.getLOD(this.activeCamera), xS[0] = NS, xS[1] = this._frameId, void 0 === NS || null === NS) continue;
            if (NS !== HS && 0 !== NS.billboardMode && NS.computeWorldMatrix(), HS._preActivate(), HS.isVisible && HS.visibility > 0 && 0 !== (HS.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || HS.yK || HS.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(HS), this.activeCamera._activeMeshes.push(HS), NS !== HS && NS._activate(this._renderId, !1);
              for (let SS = 0, gS = this._preActiveMeshStage; SS < gS.length; SS++) {
                gS[SS].action(HS)
              }
              HS._activate(this._renderId, !1) && (HS.qY ? HS._internalAbstractMeshDataInfo._actAsRegularMesh && (NS = HS) : NS._internalAbstractMeshDataInfo._onlyForInstances = !1, NS._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(HS, NS)), HS._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let SS = 0; SS < this.zD.length; SS++) {
            const HS = this.zD[SS];
            if (!HS.isStarted() || !HS.emitter) continue;
            const gS = HS.emitter;
            gS.position && !gS.isEnabled() || (this._activeParticleSystems.push(HS), HS.animate(), this._renderingManager.dispatchParticles(HS))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(SS) {
        this._skeletonsEnabled && SS.skeleton && (this._activeSkeletons.pushNoDuplicate(SS.skeleton) && (SS.skeleton.prepare(), this._activeBones.addCount(SS.skeleton.bones.length, !1)), SS.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(SS) && this.frameGraph && SS.applySkeleton(SS.skeleton))
      }
      _activeMesh(SS, HS) {
        this._prepareSkeleton(HS);
        let gS = SS.BtS || SS.qY || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || HS.yK;
        if (HS && HS.dD && HS.dD.length > 0) {
          const tS = this.getActiveSubMeshCandidates(HS),
            bS = tS.length;
          gS = gS || 1 === bS;
          for (let XS = 0; XS < bS; XS++) {
            const bS = tS.data[XS];
            this._evaluateSubMesh(bS, HS, SS, gS)
          }
        }
      }
      updateTransformMatrix(SS) {
        const HS = this.activeCamera;
        if (HS)
          if (HS._renderingMultiview) {
            const gS = HS._rigCameras[0],
              tS = HS._rigCameras[1];
            this.setTransformMatrix(gS.getViewMatrix(), gS.getProjectionMatrix(SS), tS.getViewMatrix(), tS.getProjectionMatrix(SS))
          } else this.setTransformMatrix(HS.getViewMatrix(), HS.getProjectionMatrix(SS))
      }
      _bindFrameBuffer(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (SS && SS._multiviewTexture ? SS._multiviewTexture._bindFrameBuffer() : SS && SS.outputRenderTarget ? SS.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), HS && this._clearFrameBuffer(SS)
      }
      _clearFrameBuffer(SS) {
        if (SS && SS._multiviewTexture);
        else if (SS && SS.outputRenderTarget && !SS._renderingMultiview) {
          const HS = SS.outputRenderTarget;
          HS.onClearObservable.hasObservers() ? HS.onClearObservable.notifyObservers(this._engine) : HS.skipInitialClear || SS.isRightCamera || (this.autoClear && this._engine.clear(HS.clearColor || this._clearColor, !HS._cleared, !0, !0), HS._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(SS, HS) {
        let gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (SS && SS._skipRendering) return;
        const bS = this._engine;
        if (this._activeCamera = SS, !this.activeCamera) throw new Error("Active camera not set");
        if (bS.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && gS) {
          let HS = !0;
          SS._renderingMultiview && SS.outputRenderTarget && (HS = SS.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, SS.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), SS._renderingMultiview && SS.outputRenderTarget && (SS.outputRenderTarget.skipInitialClear = HS)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = SS.outputRenderTarget?.renderPassId ?? SS.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let tS = 0; tS < this._softwareSkinnedMeshes.length; tS++) {
          const SS = this._softwareSkinnedMeshes.data[tS];
          SS.applySkeleton(SS.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), SS.customRenderTargets && SS.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(SS.customRenderTargets), HS && HS.customRenderTargets && HS.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(HS.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let tS = 0, NS = this._gatherActiveCameraRenderTargetsStage; tS < NS.length; tS++) {
          NS[tS].action(this._renderTargets)
        }
        let XS = !1;
        if (this.renderTargetsEnabled) {
          let SS;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            tS.k.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const HS = this.getBoundingBoxRenderer?.();
            for (let gS = 0; gS < this._renderTargets.length; gS++) {
              const tS = this._renderTargets.data[gS];
              if (tS._shouldRender()) {
                this._renderId++;
                const gS = tS.activeCamera && tS.activeCamera !== this.activeCamera;
                HS && !SS && (SS = HS.renderList.length > 0 ? HS.renderList.data.slice() : [], SS.length = HS.renderList.length), tS.render(gS, this.dumpNextRenderTargets), XS = !0
              }
            }
            HS && SS && (HS.renderList.data = SS, HS.renderList.length = SS.length), tS.k.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const HS = this.getBoundingBoxRenderer?.();
            HS && !SS && (SS = HS.renderList.length > 0 ? HS.renderList.data.slice() : [], SS.length = HS.renderList.length);
            for (let SS = 0, gS = this._cameraDrawRenderTargetStage; SS < gS.length; SS++) {
              XS = gS[SS].action(this.activeCamera) || XS
            }
            HS && SS && (HS.renderList.data = SS, HS.renderList.length = SS.length)
          }
          this._intermediateRendering = !1
        }
        XS && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || SS._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let tS = 0, NS = this._beforeCameraDrawStage; tS < NS.length; tS++) {
          NS[tS].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const xS = bS.snapshotRendering && 1 === bS.snapshotRenderingMode;
        xS && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !xS), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let tS = 0, NS = this._afterCameraDrawStage; tS < NS.length; tS++) {
          NS[tS].action(this.activeCamera)
        }
        if (this.postProcessManager && !SS._multiviewTexture) {
          const HS = SS.outputRenderTarget ? SS.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(SS.isIntermediate, HS)
        }
        for (let tS = 0, NS = this._afterCameraPostProcessStage; tS < NS.length; tS++) {
          NS[tS].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === SS.cameraRigMode || SS._renderingMultiview) return SS._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(SS, void 0, HS), void this.onAfterRenderCameraObservable.notifyObservers(SS);
        if (SS._useMultiviewToSingleView) this._renderMultiviewToSingleView(SS);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(SS);
          for (let HS = 0; HS < SS._rigCameras.length; HS++) this._renderForCamera(SS._rigCameras[HS], SS)
        }
        this._activeCamera = SS, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(SS)
      }
      _checkIntersections() {
        for (let SS = 0; SS < this._meshesForIntersections.length; SS++) {
          const HS = this._meshesForIntersections.data[SS];
          if (HS.actionManager)
            for (let SS = 0; HS.actionManager && SS < HS.actionManager.actions.length; SS++) {
              const gS = HS.actionManager.actions[SS];
              if (12 === gS.trigger || 13 === gS.trigger) {
                const SS = gS.getTriggerParameter(),
                  tS = SS.mesh ? SS.mesh : SS,
                  bS = tS.itS(HS, SS.usePreciseIntersection),
                  XS = HS._intersectionsInProgress.indexOf(tS);
                bS && -1 === XS ? 12 === gS.trigger ? (gS._executeCurrent(KS.CreateNew(HS, void 0, tS)), HS._intersectionsInProgress.push(tS)) : 13 === gS.trigger && HS._intersectionsInProgress.push(tS) : !bS && XS > -1 && (13 === gS.trigger && gS._executeCurrent(KS.CreateNew(HS, void 0, tS)), HS.actionManager.hasSpecificTrigger(13, (SS => {
                  const HS = SS.mesh ? SS.mesh : SS;
                  return tS === HS
                })) && 13 !== gS.trigger || HS._intersectionsInProgress.splice(XS, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(SS) {}
      _animate(SS) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let SS = Math.max(Xg.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Xg.MaxDeltaTime)) + this._timeAccumulator;
          const HS = this._engine.getTimeStep(),
            gS = 1e3 / HS / 1e3;
          let tS = 0;
          const bS = this._engine.getLockstepMaxSteps();
          let XS = Math.floor(SS / HS);
          for (XS = Math.min(XS, bS); SS > 0 && tS < XS;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = HS * gS, this._animate(HS), this.onAfterAnimationsObservable.notifyObservers(this), this.VV && this._advancePhysicsEngineStep(HS), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, tS++, SS -= HS;
          this._timeAccumulator = SS < 0 ? 0 : SS
        } else {
          const SS = this.useConstantAnimationDeltaTime ? 16 : Math.max(Xg.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Xg.MaxDeltaTime));
          this._animationRatio = .06 * SS, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.VV && this._advancePhysicsEngineStep(SS)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(SS) {
        if (SS?.outputRenderTarget && !SS?.isRigCamera && (SS.outputRenderTarget._cleared = !1), SS?.rigCameras?.length)
          for (let HS = 0; HS < SS.rigCameras.length; ++HS) {
            const gS = SS.rigCameras[HS].outputRenderTarget;
            gS && (gS._cleared = !1)
          }
      }
      resetDrawCache(SS) {
        if (this.meshes)
          for (const HS of this.meshes) HS.resetDrawCache(SS)
      }
      _renderWithFrameGraph() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          HS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, SS)
          for (const gS of this.cameras)
            if (gS.update(), 0 !== gS.cameraRigMode)
              for (let SS = 0; SS < gS._rigCameras.length; SS++) gS._rigCameras[SS].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(HS)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(SS) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const HS = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), tS.k.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let SS = 0; SS < this._renderTargets.length; SS++) {
            const gS = this._renderTargets.data[SS],
              tS = gS.activeCamera || HS;
            this._renderRenderTarget(gS, tS, !0, this.dumpNextRenderTargets)
          }
          tS.k.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let gS = 0, tS = this._beforeClearStage; gS < tS.length; gS++) {
          tS[gS].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const HS = this.getActiveMeshCandidates(),
            gS = HS.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let SS = 0; SS < gS; SS++) {
                const gS = HS.data[SS];
                gS._internalAbstractMeshDataInfo._wasActiveLastFrame && gS.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const SS = this._activeParticleSystems.length;
              for (let HS = 0; HS < SS; HS++) this._activeParticleSystems.data[HS].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let tS = 0; tS < gS; tS++) {
              const gS = HS.data[tS];
              gS._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, gS.isBlocked || (this._totalVertices.addCount(gS.getTotalVertices(), !1), gS.isReady() && gS.isEnabled() && !gS.nf.hasAZeroComponent && (gS.computeWorldMatrix(SS), gS.actionManager && gS.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(gS)))
            }
            if (this.particlesEnabled)
              for (let SS = 0; SS < this.zD.length; SS++) {
                const HS = this.zD[SS];
                if (!HS.isStarted() || !HS.emitter) continue;
                const gS = HS.emitter;
                gS.position && !gS.isEnabled() || (this._activeParticleSystems.push(HS), HS.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, SS._shouldRender()) {
          if (this._renderId++, this.activeCamera = HS, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), SS.render(gS, tS)
        }
        this._intermediateRendering = !1
      }
      render() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.Ow) return;
        const gS = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(SS, HS)
        } finally {
          this._renderingMeshEvaluationDepth = gS
        }
      }
      _renderFrame(SS, HS) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), GS.e.lL = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const gS of this.activeCameras) this._checkCameraRenderTarget(gS);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), HS || this.animate();
        for (let gS = 0, tS = this._beforeCameraUpdateStage; gS < tS.length; gS++) {
          tS[gS].action()
        }
        if (SS)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let gS = 0; gS < this.activeCameras.length; gS++) {
              const SS = this.activeCameras[gS];
              if (SS.update(), 0 !== SS.cameraRigMode)
                for (let HS = 0; HS < SS._rigCameras.length; HS++) SS._rigCameras[HS].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let gS = 0; gS < this.activeCamera._rigCameras.length; gS++) this.activeCamera._rigCameras[gS].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(SS, HS);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const SS = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            tS.k.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let HS = 0; HS < this.customRenderTargets.length; HS++) {
              const gS = this.customRenderTargets[HS],
                tS = gS.activeCamera || this.activeCamera;
              this._renderRenderTarget(gS, tS, SS !== tS, this.dumpNextRenderTargets)
            }
            tS.k.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = SS?.renderPassId ?? 0, this.activeCamera = SS, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let HS = 0, gS = this._beforeClearStage; HS < gS.length; HS++) {
            gS[HS].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let HS = 0, gS = this._gatherRenderTargetsStage; HS < gS.length; HS++) {
            gS[HS].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let HS = 0; HS < this.activeCameras.length; HS++) this._processSubCameras(this.activeCameras[HS], HS > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let gS = 0, tS = this._afterRenderStage; gS < tS.length; gS++) {
          tS[gS].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let SS = 0; SS < this._toBeDisposed.length; SS++) {
            const HS = this._toBeDisposed[SS];
            HS && HS.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let SS = 0; SS < this.materials.length; SS++) this.materials[SS].freeze()
      }
      unfreezeMaterials() {
        for (let SS = 0; SS < this.materials.length; SS++) this.materials[SS].unfreeze()
      }
      dispose() {
        if (this.Ow) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, DS.c)(this.stopAllAnimations)) {
          for (const SS of this._activeAnimatables) SS.onAnimationEndObservable.clear(), SS.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const SS = this._activeRequests.slice();
        for (const XS of SS) XS.abort();
        this._activeRequests.length = 0;
        try {
          this.bY.notifyObservers(this)
        } catch (bS) {
          Sg.b.Error("An error occurred while calling onDisposeObservable!", bS)
        }
        this.detachControl();
        const HS = this._engine.getInputElement?.();
        if (HS)
          for (let XS = 0; XS < this.cameras.length; XS++) this.cameras[XS].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (SS => SS.dispose(!0))), this._disposeList(this.transformNodes, (SS => SS.dispose(!0)));
        const gS = this.cameras;
        this._disposeList(gS), this._disposeList(this.zD), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let tS = this._engine.scenes.indexOf(this);
        if (tS > -1 && this._engine.scenes.splice(tS, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, GS.m)(), QS.d._LastCreatedScene === this) {
          QS.d._LastCreatedScene = null;
          let SS = QS.d.Instances.length - 1;
          for (; SS >= 0;) {
            const HS = QS.d.Instances[SS];
            if (HS.scenes.length > 0) {
              QS.d._LastCreatedScene = HS.scenes[this._engine.scenes.length - 1];
              break
            }
            SS--
          }
        }
        tS = this._engine._virtualScenes.indexOf(this), tS > -1 && this._engine._virtualScenes.splice(tS, 1), this._engine.wipeCaches(!0), this.bY.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(SS, HS) {
        const gS = SS.slice(0);
        HS = HS ?? (SS => SS.dispose());
        for (const tS of gS) HS(tS);
        SS.length = 0
      }
      get Ow() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let SS = 0; SS < this.meshes.length; SS++) {
          const HS = this.meshes[SS].geometry;
          HS && HS.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const SS of this.textures) {
          SS._buffer && (SS._buffer = null)
        }
      }
      getWorldExtends(SS) {
        const HS = new IS.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          gS = new IS.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        SS = SS || (() => !0);
        const tS = this.meshes.filter(SS);
        for (const bS of tS) {
          if (bS.computeWorldMatrix(!0), !bS.dD || 0 === bS.dD.length || bS.infiniteDistance) continue;
          const SS = bS.hA(),
            tS = SS.boundingBox.minimumWorld,
            XS = SS.boundingBox.maximumWorld;
          IS.n.CheckExtends(tS, HS, gS), IS.n.CheckExtends(XS, HS, gS)
        }
        return HS.x === Number.MAX_VALUE ? {
          min: IS.n.Zero(),
          max: IS.n.Zero()
        } : {
          min: HS,
          max: gS
        }
      }
      createPickingRay(SS, HS, gS, tS) {
        throw (0, DS.l)("Ray")
      }
      createPickingRayToRef(SS, HS, gS, tS, bS) {
        throw (0, DS.l)("Ray")
      }
      createPickingRayInCameraSpace(SS, HS, gS) {
        throw (0, DS.l)("Ray")
      }
      createPickingRayInCameraSpaceToRef(SS, HS, gS, tS) {
        throw (0, DS.l)("Ray")
      }
      Sa(SS, HS, gS, tS, bS, XS) {
        const xS = (0, DS.l)("Ray", !0);
        return xS && Sg.b.Warn(xS), new aS.c
      }
      pickWithBoundingInfo(SS, HS, gS, tS, bS) {
        const XS = (0, DS.l)("Ray", !0);
        return XS && Sg.b.Warn(XS), new aS.c
      }
      pickWithRay(SS, HS, gS, tS) {
        throw (0, DS.l)("Ray")
      }
      multiPick(SS, HS, gS, tS, bS) {
        throw (0, DS.l)("Ray")
      }
      multiPickWithRay(SS, HS, gS) {
        throw (0, DS.l)("Ray")
      }
      setPointerOverMesh(SS, HS, gS) {
        this._inputManager.setPointerOverMesh(SS, HS, gS)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const SS of this.geometries) SS._rebuild();
        for (const SS of this.meshes) SS._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const SS of this._components) SS.rebuild();
        for (const SS of this.zD) SS.rebuild();
        if (this.spriteManagers)
          for (const SS of this.spriteManagers) SS.rebuild()
      }
      _rebuildTextures() {
        for (const SS of this.textures) SS._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(SS, HS, gS) {
        if (void 0 === HS) return SS;
        const tS = [];
        for (const bS in SS) {
          const XS = SS[bS];
          uS.d && uS.d.MatchesQuery(XS, HS) && (!gS || gS(XS)) && tS.push(XS)
        }
        return tS
      }
      getMeshesByTags(SS, HS) {
        return this._getByTags(this.meshes, SS, HS)
      }
      getCamerasByTags(SS, HS) {
        return this._getByTags(this.cameras, SS, HS)
      }
      getLightsByTags(SS, HS) {
        return this._getByTags(this.lights, SS, HS)
      }
      getMaterialByTags(SS, HS) {
        return this._getByTags(this.materials, SS, HS).concat(this._getByTags(this.multiMaterials, SS, HS))
      }
      getTransformNodesByTags(SS, HS) {
        return this._getByTags(this.transformNodes, SS, HS)
      }
      setRenderingOrder(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(SS, HS, gS, tS)
      }
      setRenderingAutoClearDepthStencil(SS, HS) {
        let gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          tS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(SS, HS, gS, tS)
      }
      getAutoClearDepthStencilSetup(SS) {
        return this._renderingManager.getAutoClearDepthStencilSetup(SS)
      }
      _forceBlockMaterialDirtyMechanism(SS) {
        this._blockMaterialDirtyMechanism = SS
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(SS) {
        this._blockMaterialDirtyMechanism !== SS && (this._blockMaterialDirtyMechanism = SS, SS || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(SS, HS) {
        if (!this._blockMaterialDirtyMechanism)
          for (const gS of this.materials) HS && !HS(gS) || gS.OHS(SS)
      }
      _loadFile(SS, HS, gS, tS, bS, XS, xS) {
        const NS = (0, oS.k)(SS, HS, gS, tS ? this.offlineProvider : void 0, bS, XS, xS);
        return this._activeRequests.push(NS), NS.onCompleteObservable.add((SS => {
          this._activeRequests.splice(this._activeRequests.indexOf(SS), 1)
        })), NS
      }
      async _loadFileAsync(SS, HS, gS, tS, bS) {
        return await new Promise(((XS, xS) => {
          this._loadFile(SS, (SS => {
            XS(SS)
          }), HS, gS, tS, ((SS, HS) => {
            xS(HS)
          }), bS)
        }))
      }
      async _loadDelayedFileAsync(SS, HS, gS) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const tS = `${SS}|${HS?"binary":"string"}`;
        let bS = this._delayedFileRequests.get(tS);
        if (!bS) {
          bS = HS ? this._loadFileAsync(SS, void 0, gS, !0) : this._loadFileAsync(SS, void 0, gS, !1);
          const XS = bS;
          (async () => {
            try {
              await XS
            } catch {}
            this._delayedFileRequests?.delete(tS)
          })(), this._delayedFileRequests.set(tS, bS)
        }
        return await bS
      }
      _requestFile(SS, HS, gS, tS, bS, XS, xS) {
        const NS = (0, oS.z)(SS, HS, gS, tS ? this.offlineProvider : void 0, bS, XS, xS);
        return this._activeRequests.push(NS), NS.onCompleteObservable.add((SS => {
          this._activeRequests.splice(this._activeRequests.indexOf(SS), 1)
        })), NS
      }
      async _requestFileAsync(SS, HS, gS, tS, bS) {
        return await new Promise(((XS, xS) => {
          this._requestFile(SS, (SS => {
            XS(SS)
          }), HS, gS, tS, (SS => {
            xS(SS)
          }), bS)
        }))
      }
      _readFile(SS, HS, gS, tS, bS) {
        const XS = (0, oS.r)(SS, HS, gS, tS, bS);
        return this._activeRequests.push(XS), XS.onCompleteObservable.add((SS => {
          this._activeRequests.splice(this._activeRequests.indexOf(SS), 1)
        })), XS
      }
      async _readFileAsync(SS, HS, gS) {
        return await new Promise(((tS, bS) => {
          this._readFile(SS, (SS => {
            tS(SS)
          }), HS, gS, (SS => {
            bS(SS)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, DS.l)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(SS) {
        return this.setActiveCameraById(SS)
      }
      getMaterialByID(SS) {
        return this.getMaterialById(SS)
      }
      getLastMaterialByID(SS) {
        return this.getLastMaterialById(SS)
      }
      getTextureByUniqueID(SS) {
        return this.getTextureByUniqueId(SS)
      }
      getCameraByID(SS) {
        return this.getCameraById(SS)
      }
      getCameraByUniqueID(SS) {
        return this.getCameraByUniqueId(SS)
      }
      getBoneByID(SS) {
        return this.getBoneById(SS)
      }
      getLightByID(SS) {
        return this.getLightById(SS)
      }
      getLightByUniqueID(SS) {
        return this.getLightByUniqueId(SS)
      }
      getParticleSystemByID(SS) {
        return this.getParticleSystemById(SS)
      }
      getGeometryByID(SS) {
        return this.getGeometryById(SS)
      }
      getMeshByID(SS) {
        return this.getMeshById(SS)
      }
      getMeshByUniqueID(SS) {
        return this.getMeshByUniqueId(SS)
      }
      getLastMeshByID(SS) {
        return this.getLastMeshById(SS)
      }
      getMeshesByID(SS) {
        return this.getMeshesById(SS)
      }
      getTransformNodeByID(SS) {
        return this.getTransformNodeById(SS)
      }
      getTransformNodeByUniqueID(SS) {
        return this.getTransformNodeByUniqueId(SS)
      }
      getTransformNodesByID(SS) {
        return this.getTransformNodesById(SS)
      }
      getNodeByID(SS) {
        return this.getNodeById(SS)
      }
      getLastEntryByID(SS) {
        return this.getLastEntryById(SS)
      }
      getLastSkeletonByID(SS) {
        return this.getLastSkeletonById(SS)
      }
    }
    Xg.FOGMODE_NONE = 0, Xg.FOGMODE_EXP = 1, Xg.FOGMODE_EXP2 = 2, Xg.FOGMODE_LINEAR = 3, Xg.MinDeltaTime = 1, Xg.MaxDeltaTime = 1e3, Xg._OriginalDefaultMaterialFactory = Xg.DefaultMaterialFactory;
    let xg = !1;

    function Ng() {
      xg || (xg = !0, (0, Hg.f)("BABYLON.Scene", Xg))
    }(rS = Xg.prototype).sortActiveAnimatables ?? (rS.sortActiveAnimatables = (0, DS.i)("Scene", "sortActiveAnimatables")), (SH = Xg.prototype).beginWeightedAnimation ?? (SH.beginWeightedAnimation = (0, DS.i)("Scene", "beginWeightedAnimation")), (HH = Xg.prototype).beginAnimation ?? (HH.beginAnimation = (0, DS.i)("Scene", "beginAnimation")), (gH = Xg.prototype).beginHierarchyAnimation ?? (gH.beginHierarchyAnimation = (0, DS.i)("Scene", "beginHierarchyAnimation")), (tH = Xg.prototype).beginDirectAnimation ?? (tH.beginDirectAnimation = (0, DS.i)("Scene", "beginDirectAnimation")), (bH = Xg.prototype).beginDirectHierarchyAnimation ?? (bH.beginDirectHierarchyAnimation = (0, DS.i)("Scene", "beginDirectHierarchyAnimation")), (XH = Xg.prototype).getAnimatableByTarget ?? (XH.getAnimatableByTarget = (0, DS.i)("Scene", "getAnimatableByTarget")), (xH = Xg.prototype).getAllAnimatablesByTarget ?? (xH.getAllAnimatablesByTarget = (0, DS.i)("Scene", "getAllAnimatablesByTarget")), (NH = Xg.prototype).stopAllAnimations ?? (NH.stopAllAnimations = (0, DS.i)("Scene", "stopAllAnimations")), (qH = Xg.prototype).getSoundByName ?? (qH.getSoundByName = (0, DS.i)("Scene", "getSoundByName")), (uH = Xg.prototype).createOrUpdateSelectionOctree ?? (uH.createOrUpdateSelectionOctree = (0, DS.i)("Scene", "createOrUpdateSelectionOctree")), (IH = Xg.prototype).createDefaultLight ?? (IH.createDefaultLight = (0, DS.i)("Scene", "createDefaultLight")), (fH = Xg.prototype).createDefaultCamera ?? (fH.createDefaultCamera = (0, DS.i)("Scene", "createDefaultCamera")), (kH = Xg.prototype).createDefaultCameraOrLight ?? (kH.createDefaultCameraOrLight = (0, DS.i)("Scene", "createDefaultCameraOrLight")), (aH = Xg.prototype).createDefaultSkybox ?? (aH.createDefaultSkybox = (0, DS.i)("Scene", "createDefaultSkybox")), (KH = Xg.prototype).createDefaultEnvironment ?? (KH.createDefaultEnvironment = (0, DS.i)("Scene", "createDefaultEnvironment")), (jH = Xg.prototype).createDefaultVRExperience ?? (jH.createDefaultVRExperience = (0, DS.i)("Scene", "createDefaultVRExperience")), (GH = Xg.prototype).createDefaultXRExperienceAsync ?? (GH.createDefaultXRExperienceAsync = (0, DS.i)("Scene", "createDefaultXRExperienceAsync")), (CH = Xg.prototype).getGlowLayerByName ?? (CH.getGlowLayerByName = (0, DS.i)("Scene", "getGlowLayerByName")), (nH = Xg.prototype).getHighlightLayerByName ?? (nH.getHighlightLayerByName = (0, DS.i)("Scene", "getHighlightLayerByName")), (PH = Xg.prototype).getSelectionOutlineLayerByName ?? (PH.getSelectionOutlineLayerByName = (0, DS.i)("Scene", "getSelectionOutlineLayerByName")), (QH = Xg.prototype).removeLensFlareSystem ?? (QH.removeLensFlareSystem = (0, DS.i)("Scene", "removeLensFlareSystem")), (DH = Xg.prototype).addLensFlareSystem ?? (DH.addLensFlareSystem = (0, DS.i)("Scene", "addLensFlareSystem")), (wH = Xg.prototype).getLensFlareSystemByName ?? (wH.getLensFlareSystemByName = (0, DS.i)("Scene", "getLensFlareSystemByName")), (hH = Xg.prototype).getLensFlareSystemByID ?? (hH.getLensFlareSystemByID = (0, DS.i)("Scene", "getLensFlareSystemByID")), (ZH = Xg.prototype).getLensFlareSystemById ?? (ZH.getLensFlareSystemById = (0, DS.i)("Scene", "getLensFlareSystemById")), (JH = Xg.prototype).getPhysicsEngine ?? (JH.getPhysicsEngine = (0, DS.i)("Scene", "getPhysicsEngine")), (OH = Xg.prototype).enablePhysics ?? (OH.enablePhysics = (0, DS.i)("Scene", "enablePhysics")), (dH = Xg.prototype).disablePhysicsEngine ?? (dH.disablePhysicsEngine = (0, DS.i)("Scene", "disablePhysicsEngine")), (cH = Xg.prototype).isPhysicsEnabled ?? (cH.isPhysicsEnabled = (0, DS.i)("Scene", "isPhysicsEnabled")), (vH = Xg.prototype).deleteCompoundImpostor ?? (vH.deleteCompoundImpostor = (0, DS.i)("Scene", "deleteCompoundImpostor")), (EH = Xg.prototype).removeReflectionProbe ?? (EH.removeReflectionProbe = (0, DS.i)("Scene", "removeReflectionProbe")), (LH = Xg.prototype).addReflectionProbe ?? (LH.addReflectionProbe = (0, DS.i)("Scene", "addReflectionProbe")), (YH = Xg.prototype).getBoundingBoxRenderer ?? (YH.getBoundingBoxRenderer = (0, DS.i)("Scene", "getBoundingBoxRenderer")), (AH = Xg.prototype).enableDepthRenderer ?? (AH.enableDepthRenderer = (0, DS.i)("Scene", "enableDepthRenderer")), (yH = Xg.prototype).disableDepthRenderer ?? (yH.disableDepthRenderer = (0, DS.i)("Scene", "disableDepthRenderer")), (VH = Xg.prototype).enableFluidRenderer ?? (VH.enableFluidRenderer = (0, DS.i)("Scene", "enableFluidRenderer")), (iH = Xg.prototype).disableFluidRenderer ?? (iH.disableFluidRenderer = (0, DS.i)("Scene", "disableFluidRenderer")), (WH = Xg.prototype).enableGeometryBufferRenderer ?? (WH.enableGeometryBufferRenderer = (0, DS.i)("Scene", "enableGeometryBufferRenderer")), (zH = Xg.prototype).disableGeometryBufferRenderer ?? (zH.disableGeometryBufferRenderer = (0, DS.i)("Scene", "disableGeometryBufferRenderer")), (UH = Xg.prototype).enableIblCdfGenerator ?? (UH.enableIblCdfGenerator = (0, DS.i)("Scene", "enableIblCdfGenerator")), (pH = Xg.prototype).disableIblCdfGenerator ?? (pH.disableIblCdfGenerator = (0, DS.i)("Scene", "disableIblCdfGenerator")), (sH = Xg.prototype).getOutlineRenderer ?? (sH.getOutlineRenderer = (0, DS.i)("Scene", "getOutlineRenderer")), (BH = Xg.prototype).enablePrePassRenderer ?? (BH.enablePrePassRenderer = (0, DS.i)("Scene", "enablePrePassRenderer")), (MH = Xg.prototype).disablePrePassRenderer ?? (MH.disablePrePassRenderer = (0, DS.i)("Scene", "disablePrePassRenderer")), (FH = Xg.prototype).enableSubSurfaceForPrePass ?? (FH.enableSubSurfaceForPrePass = (0, DS.i)("Scene", "enableSubSurfaceForPrePass")), (RH = Xg.prototype).disableSubSurfaceForPrePass ?? (RH.disableSubSurfaceForPrePass = (0, DS.i)("Scene", "disableSubSurfaceForPrePass")), (TH = Xg.prototype).pickSprite ?? (TH.pickSprite = (0, DS.i)("Scene", "pickSprite")), (oH = Xg.prototype).pickSpriteWithRay ?? (oH.pickSpriteWithRay = (0, DS.i)("Scene", "pickSpriteWithRay")), (lH = Xg.prototype).multiPickSprite ?? (lH.multiPickSprite = (0, DS.i)("Scene", "multiPickSprite")), (mH = Xg.prototype).multiPickSpriteWithRay ?? (mH.multiPickSpriteWithRay = (0, DS.i)("Scene", "multiPickSpriteWithRay")), (eH = Xg.prototype).setPointerOverSprite ?? (eH.setPointerOverSprite = (0, DS.i)("Scene", "setPointerOverSprite")), (rH = Xg.prototype).getPointerOverSprite ?? (rH.getPointerOverSprite = (0, DS.i)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(Xg.prototype, "mainSoundTrack") || Object.defineProperty(Xg.prototype, "mainSoundTrack", (0, DS.f)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(Xg.prototype, "soundTracks") || Object.defineProperty(Xg.prototype, "soundTracks", (0, DS.f)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(Xg.prototype, "audioEnabled") || Object.defineProperty(Xg.prototype, "audioEnabled", (0, DS.f)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(Xg.prototype, "headphone") || Object.defineProperty(Xg.prototype, "headphone", (0, DS.f)("Scene", "headphone")), Object.getOwnPropertyDescriptor(Xg.prototype, "audioListenerPositionProvider") || Object.defineProperty(Xg.prototype, "audioListenerPositionProvider", (0, DS.f)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(Xg.prototype, "audioListenerRotationProvider") || Object.defineProperty(Xg.prototype, "audioListenerRotationProvider", (0, DS.f)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(Xg.prototype, "audioPositioningRefreshRate") || Object.defineProperty(Xg.prototype, "audioPositioningRefreshRate", (0, DS.f)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(Xg.prototype, "selectionOctree") || Object.defineProperty(Xg.prototype, "selectionOctree", (0, DS.f)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(Xg.prototype, "debugLayer") || Object.defineProperty(Xg.prototype, "debugLayer", (0, DS.f)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(Xg.prototype, "gamepadManager") || Object.defineProperty(Xg.prototype, "gamepadManager", (0, DS.f)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(Xg.prototype, "simplificationQueue") || Object.defineProperty(Xg.prototype, "simplificationQueue", (0, DS.f)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(Xg.prototype, "onBeforePhysicsObservable") || Object.defineProperty(Xg.prototype, "onBeforePhysicsObservable", (0, DS.f)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(Xg.prototype, "onAfterPhysicsObservable") || Object.defineProperty(Xg.prototype, "onAfterPhysicsObservable", (0, DS.f)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(Xg.prototype, "reflectionProbes") || Object.defineProperty(Xg.prototype, "reflectionProbes", (0, DS.f)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(Xg.prototype, "forceShowBoundingBoxes") || Object.defineProperty(Xg.prototype, "forceShowBoundingBoxes", (0, DS.f)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(Xg.prototype, "depthPeelingRenderer") || Object.defineProperty(Xg.prototype, "depthPeelingRenderer", (0, DS.f)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(Xg.prototype, "useOrderIndependentTransparency") || Object.defineProperty(Xg.prototype, "useOrderIndependentTransparency", (0, DS.f)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(Xg.prototype, "fluidRenderer") || Object.defineProperty(Xg.prototype, "fluidRenderer", (0, DS.f)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(Xg.prototype, "geometryBufferRenderer") || Object.defineProperty(Xg.prototype, "geometryBufferRenderer", (0, DS.f)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(Xg.prototype, "iblCdfGenerator") || Object.defineProperty(Xg.prototype, "iblCdfGenerator", (0, DS.f)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(Xg.prototype, "prePassRenderer") || Object.defineProperty(Xg.prototype, "prePassRenderer", (0, DS.f)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(Xg.prototype, "subSurfaceConfiguration") || Object.defineProperty(Xg.prototype, "subSurfaceConfiguration", (0, DS.f)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(Xg.prototype, "spriteManagers") || Object.defineProperty(Xg.prototype, "spriteManagers", (0, DS.f)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(Xg.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(Xg.prototype, "onBeforeSpritesRenderingObservable", (0, DS.f)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(Xg.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(Xg.prototype, "onAfterSpritesRenderingObservable", (0, DS.f)("Scene", "onAfterSpritesRenderingObservable"))
  },
  40213: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS,
      h: () => bS
    });
    class tS {}
    tS.NAME_EFFECTLAYER = "EffectLayer", tS.NAME_LAYER = "Layer", tS.NAME_LENSFLARESYSTEM = "LensFlareSystem", tS.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", tS.NAME_PARTICLESYSTEM = "ParticleSystem", tS.NAME_GAMEPAD = "Gamepad", tS.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", tS.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", tS.NAME_PREPASSRENDERER = "PrePassRenderer", tS.NAME_DEPTHRENDERER = "DepthRenderer", tS.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", tS.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", tS.NAME_SPRITE = "Sprite", tS.NAME_SUBSURFACE = "SubSurface", tS.NAME_OUTLINERENDERER = "Outline", tS.NAME_PROCEDURALTEXTURE = "ProceduralTexture", tS.NAME_SHADOWGENERATOR = "ShadowGenerator", tS.NAME_OCTREE = "NtS", tS.NAME_PHYSICSENGINE = "PhysicsEngine", tS.NAME_AUDIO = "Audio", tS.NAME_FLUIDRENDERER = "FluidRenderer", tS.NAME_IBLCDFGENERATOR = "iblCDFGenerator", tS.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", tS.STEP_ISREADYFORMESH_EFFECTLAYER = 0, tS.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, tS.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, tS.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, tS.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, tS.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, tS.STEP_BEFORECAMERADRAW_PREPASS = 0, tS.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, tS.STEP_BEFORECAMERADRAW_LAYER = 2, tS.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, tS.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, tS.STEP_BEFORERENDERINGMESH_PREPASS = 0, tS.STEP_BEFORERENDERINGMESH_OUTLINE = 1, tS.STEP_AFTERRENDERINGMESH_PREPASS = 0, tS.STEP_AFTERRENDERINGMESH_OUTLINE = 1, tS.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, tS.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, tS.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, tS.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, tS.STEP_BEFORECLEAR_PREPASS = 1, tS.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, tS.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, tS.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, tS.STEP_AFTERCAMERADRAW_PREPASS = 0, tS.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, tS.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, tS.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, tS.STEP_AFTERCAMERADRAW_LAYER = 4, tS.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, tS.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, tS.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, tS.STEP_AFTERRENDER_AUDIO = 0, tS.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, tS.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, tS.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, tS.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, tS.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, tS.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, tS.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, tS.STEP_POINTERMOVE_SPRITE = 0, tS.STEP_POINTERDOWN_SPRITE = 0, tS.STEP_POINTERUP_SPRITE = 0;
    class bS extends Array {
      constructor(SS) {
        super(...SS)
      }
      static Create() {
        return Object.create(bS.prototype)
      }
      registerStep(SS, HS, gS) {
        let tS, bS = 0;
        for (; bS < this.length; bS++) {
          if (tS = this[bS].index, SS < tS) break
        }
        this.splice(bS, 0, {
          index: SS,
          component: HS,
          action: gS.bind(HS)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  40041: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS,
      h: () => NS,
      j: () => tS,
      k: () => bS,
      l: () => XS
    });

    function tS(SS, HS, gS, tS, bS, XS) {
      function xS(SS) {
        if (void 0 !== SS && "function" !== typeof SS) throw new TypeError("Function expected");
        return SS
      }
      for (var NS, qS = tS.kind, uS = "getter" === qS ? "get" : "setter" === qS ? "set" : "value", IS = !HS && SS ? tS.static ? SS : SS.prototype : null, fS = HS || (IS ? Object.getOwnPropertyDescriptor(IS, tS.name) : {}), kS = !1, aS = gS.length - 1; aS >= 0; aS--) {
        var KS = {};
        for (var jS in tS) KS[jS] = "access" === jS ? {} : tS[jS];
        for (var jS in tS.access) KS.access[jS] = tS.access[jS];
        KS.addInitializer = function(SS) {
          if (kS) throw new TypeError("Cannot add initializers after decoration has completed");
          XS.push(xS(SS || null))
        };
        var GS = (0, gS[aS])("accessor" === qS ? {
          get: fS.get,
          set: fS.set
        } : fS[uS], KS);
        if ("accessor" === qS) {
          if (void 0 === GS) continue;
          if (null === GS || "object" !== typeof GS) throw new TypeError("Object expected");
          (NS = xS(GS.get)) && (fS.get = NS), (NS = xS(GS.set)) && (fS.set = NS), (NS = xS(GS.init)) && bS.unshift(NS)
        } else(NS = xS(GS)) && ("field" === qS ? bS.unshift(NS) : fS[uS] = NS)
      }
      IS && Object.defineProperty(IS, tS.name, fS), kS = !0
    }

    function bS(SS, HS, gS) {
      for (var tS = arguments.length > 2, bS = 0; bS < HS.length; bS++) gS = tS ? HS[bS].call(SS, gS) : HS[bS].call(SS);
      return tS ? gS : void 0
    }

    function XS(SS, HS, gS) {
      return "symbol" === typeof HS && (HS = HS.description ? "[".concat(HS.description, "]") : ""), Object.defineProperty(SS, "name", {
        configurable: !0,
        value: gS ? "".concat(gS, " ", HS) : HS
      })
    }
    Object.create;
    Object.create;

    function xS(SS, HS, gS, tS) {
      if ("a" === gS && !tS) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof HS ? SS !== HS || !tS : !HS.has(SS)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === gS ? tS : "a" === gS ? tS.call(SS) : tS ? tS.value : HS.get(SS)
    }

    function NS(SS, HS, gS, tS, bS) {
      if ("m" === tS) throw new TypeError("Private method is not writable");
      if ("a" === tS && !bS) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof HS ? SS !== HS || !bS : !HS.has(SS)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === tS ? bS.call(SS, gS) : bS ? bS.value = gS : HS.set(SS, gS), gS
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);