export const id = 258;
export const ids = [258];
export const modules = {
  39683: (YY, rY, DY) => {
    DY.d(rY, {
      $b: () => ZY,
      $c: () => eY,
      $e: () => KD,
      $f: () => yD,
      Ab: () => Or,
      Af: () => rF,
      B: () => Gr,
      Bb: () => AY,
      Bc: () => Fr,
      Be: () => jD,
      C: () => sY,
      Cb: () => WY,
      Cc: () => ur,
      Cd: () => gY,
      D: () => Ar,
      Db: () => Er,
      Dc: () => BY,
      Df: () => xD,
      F: () => cY,
      Fe: () => fD,
      Ff: () => lD,
      Gd: () => vY,
      Gf: () => oD,
      Hb: () => PY,
      Hc: () => ar,
      Id: () => or,
      Ie: () => PD,
      If: () => nD,
      J: () => HY,
      Jd: () => kr,
      Jf: () => dD,
      Kb: () => YD,
      Kc: () => gr,
      Kf: () => JD,
      Le: () => ZD,
      Lf: () => mD,
      Mb: () => zY,
      Mf: () => QD,
      N: () => KY,
      Nd: () => wY,
      Nf: () => hD,
      O: () => Xr,
      Ob: () => LY,
      Oc: () => Dr,
      Od: () => sr,
      Oe: () => MD,
      Of: () => TD,
      P: () => iY,
      Pf: () => VD,
      Q: () => qY,
      Qb: () => UY,
      Qd: () => nr,
      Qf: () => kD,
      Rb: () => rr,
      Rc: () => NY,
      Re: () => zD,
      Rf: () => ED,
      T: () => IF,
      Td: () => wr,
      Te: () => XD,
      Tf: () => qD,
      V: () => tr,
      Vb: () => Qr,
      Vc: () => VY,
      Wd: () => Yr,
      X: () => nY,
      Xe: () => bD,
      Xf: () => sD,
      Y: () => Ur,
      Yb: () => GY,
      Yc: () => FY,
      Ye: () => wD,
      Zd: () => tY,
      Ze: () => AF,
      _: () => Lr,
      _e: () => eD,
      ae: () => XY,
      af: () => ND,
      b: () => IY,
      bd: () => Rr,
      cb: () => xY,
      cd: () => oY,
      d: () => RY,
      dc: () => Ir,
      de: () => SY,
      df: () => HD,
      eb: () => Pr,
      ed: () => QY,
      f: () => TY,
      fb: () => JY,
      gd: () => yY,
      ge: () => uY,
      gf: () => cD,
      h: () => dY,
      hc: () => EY,
      i: () => aD,
      if: () => BD,
      jb: () => FD,
      jc: () => mY,
      je: () => gD,
      kc: () => vr,
      kd: () => ID,
      lb: () => AD,
      le: () => DF,
      m: () => OD,
      mb: () => MY,
      md: () => RD,
      mf: () => FF,
      ne: () => WD,
      nf: () => LD,
      o: () => OY,
      oc: () => aY,
      od: () => lY,
      pe: () => SD,
      qb: () => DD,
      qc: () => pr,
      re: () => iD,
      rf: () => YF,
      s: () => br,
      sd: () => fY,
      tc: () => bY,
      te: () => GD,
      ub: () => rD,
      ud: () => CY,
      uf: () => UD,
      v: () => qr,
      vc: () => kY,
      vd: () => hY,
      wb: () => ir,
      we: () => pD,
      wf: () => tD,
      xc: () => xr,
      xd: () => jY,
      y: () => pY,
      yd: () => yr,
      ye: () => CD
    });
    const FY = -2147483648,
      AY = 12,
      IY = 12,
      RY = 4095,
      OY = {
        Lifeform: 1,
        Throwable: 2,
        Mesh: 3,
        Audio: 4,
        Item: 5
      },
      gY = {
        Alive: 1,
        Crouching: 2,
        OnGround: 4,
        InFluid: 8,
        Spectating: 16,
        AttemptingBreak: 32,
        Aiming: 64,
        FirstPerson: 128,
        Replay: 256,
        Breaking: 512,
        CursorAim: 1024,
        FreeCam: 2048,
        ZoomFirstPerson: 4096,
        JumpHeld: 8192,
        Flying: 16384,
        CanFly: 32768,
        PadSneakToggled: 65536,
        DropAhead: 131072,
        FreeCamMoves: 262144
      },
      aY = {
        None: 0,
        Entity: 1,
        Open: 2,
        Close: 3,
        Milk: 4,
        Shear: 5,
        Tame: 6,
        TameWith: 7,
        Feed: 8,
        Ride: 9
      },
      vY = {
        Off: 0,
        Key: 1,
        Touch: 2
      },
      uY = {
        Alive: 16
      },
      sY = 32,
      iY = {
        Stored: 1,
        Unloaded: 2,
        ResetAll: 4
      },
      yY = {
        opacity: 0,
        zIndex: 1,
        overlayColour: 2,
        canAttack: 3,
        canSee: 4,
        interactable: 5,
        interactionPrompt: 6,
        showDamageAmounts: 7,
        lockHeadToBody: 8,
        killfeedColour: 9,
        meshScaling: 10,
        colorInLobbyLeaderboard: 11,
        lobbyLeaderboardValues: 12,
        lobbyLeaderboardTags: 13,
        nameTagInfo: 14,
        hasPriorityNametag: 15,
        alwaysInInterest: 16,
        multilineTextBox: 17,
        ranks: 18,
        nameColour: 19,
        hideNameSeed: 20,
        _leaderboardAround: 21,
        _invincible: 22,
        _isAlive: 23,
        _invisibleEffect: 24,
        _glowingEffect: 25,
        _armourReductionSum: 26,
        _protectionEnchantSum: 27,
        _receivingDamageMultiplier: 28
      },
      QY = 4294967295,
      oY = 0,
      WY = 4294967295,
      EY = 4,
      mY = 123,
      VY = -2147483648,
      SY = {
        Off: 0,
        All: 1,
        Filter: 2
      },
      lY = 51,
      TY = 5,
      eY = 4294967295,
      NY = 4294967295,
      BY = 128,
      cY = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
      KY = 16,
      HY = 255,
      zY = {
        Off: 0,
        On: 1,
        Keep: 2
      },
      ZY = {
        AltVeto: 1,
        AltAction: 2,
        Click: 3,
        ChangeBlock: 4,
        DropItem: 5,
        Tick: 6,
        Message: 7,
        Create: 8,
        Director: 11
      },
      CY = {
        Hotbar: 256,
        Drop: 257
      },
      fY = {
        Down: 1,
        Next: 2,
        Stack: 4
      },
      jY = {
        Rate: 0,
        Gyro: 1
      },
      hY = {
        Active: 1,
        JumpHeld: 2,
        JumpPressed: 4,
        Running: 8,
        SprintHeld: 16,
        SneakHeld: 32,
        SneakHoldMode: 64,
        Peek: 128,
        EndToggle: 256
      },
      dY = {
        Prevent: 0,
        Allow: 1,
        PreventPlacement: 2
      },
      JY = {
        None: 0,
        Pose: 1,
        FaceMovement: 2,
        FaceCamera: 3,
        FaceCursor: 4
      },
      MY = {
        LookPointed: 1,
        Held: 2
      },
      wY = 3,
      bY = {
        Synced: 0,
        ChestOpened: 1,
        ChestClosed: 2,
        ChestRefreshed: 3,
        EnchantingTable: 4,
        HotbarRequest: 5,
        Scrolled: 6,
        NumberKey: 7,
        DropRequested: 8
      },
      XY = {
        ToggleMenu: 0,
        EditBoard: 1,
        EditCodeBlock: 2,
        ViewCodeBlock: 3,
        EditCustomLobbyBlock: 4,
        OpenIronChest: 5,
        EditNameTag: 6,
        EditBook: 7,
        CantChangeBlock: 8,
        MiddleBarStart: 9,
        MiddleBarStop: 10,
        AimingOverlay: 11,
        BottomMessage: 12,
        Hitmarker: 13,
        ShotsLeft: 14,
        Crosshair: 15,
        ChargeStage: 16,
        EmoteWheelClose: 17,
        BlockMined: 18
      },
      qY = {
        Alt: 1,
        Up: 2,
        HasPos: 4,
        AttackOnly: 8
      },
      pY = {
        Solid: 1,
        Fluid: 2,
        PlaceOver: 4
      },
      kY = {
        Stackable: 1
      },
      GY = {
        granule: 1,
        wood: 2,
        rock: 3,
        cuttable: 4
      },
      xY = {
        Detail: 1,
        RoomForOne: 2
      },
      nY = {
        HaveIngredients: 1,
        Listed: 2
      },
      PY = {
        HasOpts: 1
      },
      UY = {
        Flat: 0,
        Chevrons: 1,
        FurnaceFire: 2,
        FlatOpaque: 3,
        FlatOnTop: 4
      },
      LY = {
        Up: 1,
        Down: 2
      },
      tY = {
        TwoD: 1,
        Loop: 2
      },
      Yr = {
        StopAfter: 1
      },
      rr = {
        Anchor: 1,
        Visible: 2,
        UvOffset: 4,
        Visibility: 8,
        Scale: 16
      },
      Dr = {
        Pose: 1,
        Visible: 2
      },
      Fr = 255,
      Ar = 65535,
      Ir = 255,
      Rr = 65535,
      Or = ["standing", "sitting", "zombie", "gliding", "driving", "sleeping", "riding"],
      gr = ["", "Sheared", "Saddled", "Antlers", "skyblockHeldBoss"],
      ar = ["Box", "BloxdBlock", "Person", "Leaderboard", "ParticleEmitter"],
      vr = {
        Bytes: 16,
        Hidden: 2147483648,
        Max: 262144
      },
      ur = 4294967295,
      sr = 4294967295,
      ir = 255,
      yr = {
        PresetNone: 65535,
        HasBox: 1,
        Anchored: 1,
        MaxOpts: 4096,
        MaxBurst: 2e3,
        MaxPoints: 512,
        PointBytes: 16,
        MaxKey: 1073741823,
        MaxLiveKeys: 256
      },
      Qr = {
        critical: 123
      },
      or = 4294967295,
      Wr = {
        BYTES: 4,
        Zu: (YY, rY) => YY.getUint32(rY + 0, !0)
      },
      Er = {
        BYTES: 12,
        serverId: (YY, rY) => YY.getInt32(rY + 0, !0),
        index: (YY, rY) => YY.getUint32(rY + 4, !0),
        kind: (YY, rY) => YY.getUint16(rY + 8, !0)
      },
      mr = {
        BYTES: 20,
        pos: (YY, rY, DY) => YY.getInt32(rY + 0 + 4 * DY, !0),
        actual: (YY, rY) => YY.getUint32(rY + 12, !0),
        dataLen: (YY, rY) => YY.getUint32(rY + 16, !0)
      },
      Vr = {
        BYTES: 20,
        what: (YY, rY) => YY.getUint8(rY + 0),
        value: (YY, rY) => YY.getInt16(rY + 2, !0),
        pos: (YY, rY, DY) => YY.getInt32(rY + 4 + 4 * DY, !0),
        block: (YY, rY) => YY.getUint32(rY + 16, !0)
      },
      Sr = {
        BYTES: 4,
        item: (YY, rY) => YY.getUint16(rY + 0, !0),
        slot: (YY, rY) => YY.getUint8(rY + 2)
      },
      lr = {
        BYTES: 16,
        target: (YY, rY) => YY.getInt32(rY + 0, !0),
        damage: (YY, rY) => YY.getFloat32(rY + 4, !0),
        distance: (YY, rY) => YY.getFloat32(rY + 8, !0),
        crit: (YY, rY) => YY.getUint8(rY + 12)
      },
      Tr = {
        BYTES: 4,
        slot: (YY, rY) => YY.getUint16(rY + 0, !0)
      },
      er = {
        BYTES: 20,
        what: (YY, rY) => YY.getUint8(rY + 0),
        value: (YY, rY) => YY.getInt16(rY + 2, !0),
        pos: (YY, rY, DY) => YY.getInt32(rY + 4 + 4 * DY, !0),
        block: (YY, rY) => YY.getUint32(rY + 16, !0)
      },
      Nr = {
        BYTES: 12,
        serverId: (YY, rY) => YY.getInt32(rY + 0, !0),
        index: (YY, rY) => YY.getUint32(rY + 4, !0),
        what: (YY, rY) => YY.getUint16(rY + 8, !0)
      },
      Br = {
        BYTES: 24,
        cx: (YY, rY) => YY.getInt32(rY + 0, !0),
        cy: (YY, rY) => YY.getInt32(rY + 4, !0),
        cz: (YY, rY) => YY.getInt32(rY + 8, !0),
        slot: (YY, rY) => YY.getUint32(rY + 12, !0),
        generation: (YY, rY) => YY.getUint32(rY + 16, !0),
        flags: (YY, rY) => YY.getUint32(rY + 20, !0)
      },
      cr = {
        BYTES: 44,
        pos: (YY, rY, DY) => YY.getFloat64(rY + 0 + 8 * DY, !0),
        sound: (YY, rY) => YY.getUint16(rY + 24, !0),
        flags: (YY, rY) => YY.getUint16(rY + 26, !0),
        handle: (YY, rY) => YY.getUint32(rY + 28, !0),
        volume: (YY, rY) => YY.getFloat32(rY + 32, !0),
        rate: (YY, rY) => YY.getFloat32(rY + 36, !0),
        refDist: (YY, rY) => YY.getFloat32(rY + 40, !0)
      },
      Kr = {
        BYTES: 28,
        pos: (YY, rY, DY) => YY.getFloat64(rY + 0 + 8 * DY, !0),
        handle: (YY, rY) => YY.getUint32(rY + 24, !0)
      },
      Hr = {
        BYTES: 16,
        handle: (YY, rY) => YY.getUint32(rY + 0, !0),
        volume: (YY, rY) => YY.getFloat32(rY + 4, !0),
        rate: (YY, rY) => YY.getFloat32(rY + 8, !0),
        refDist: (YY, rY) => YY.getFloat32(rY + 12, !0)
      },
      zr = {
        BYTES: 12,
        handle: (YY, rY) => YY.getUint32(rY + 0, !0),
        to: (YY, rY) => YY.getFloat32(rY + 4, !0),
        ms: (YY, rY) => YY.getUint16(rY + 8, !0),
        flags: (YY, rY) => YY.getUint16(rY + 10, !0)
      },
      Zr = {
        BYTES: 4,
        handle: (YY, rY) => YY.getUint32(rY + 0, !0)
      },
      Cr = {
        BYTES: 4,
        reason: (YY, rY) => YY.getUint8(rY + 0),
        code: (YY, rY) => YY.getUint8(rY + 1)
      },
      fr = {
        BYTES: 4,
        key: (YY, rY) => YY.getUint8(rY + 0),
        tag: (YY, rY) => YY.getUint8(rY + 1)
      },
      jr = {
        BYTES: 16,
        save: (YY, rY) => YY.getUint32(rY + 0, !0),
        index: (YY, rY) => YY.getUint32(rY + 4, !0),
        ptr: (YY, rY) => YY.getUint32(rY + 8, !0),
        len: (YY, rY) => YY.getUint32(rY + 12, !0)
      },
      hr = {
        BYTES: 16,
        save: (YY, rY) => YY.getUint32(rY + 0, !0),
        kind: (YY, rY) => YY.getUint8(rY + 4),
        parts: (YY, rY) => YY.getUint32(rY + 8, !0),
        bytes: (YY, rY) => YY.getUint32(rY + 12, !0)
      },
      dr = {
        BYTES: 4,
        totalTicks: (YY, rY) => YY.getUint32(rY + 0, !0)
      },
      Jr = {
        BYTES: 24,
        what: (YY, rY) => YY.getUint8(rY + 0),
        int: (YY, rY) => YY.getInt32(rY + 4, !0),
        x: (YY, rY) => YY.getFloat64(rY + 8, !0),
        y: (YY, rY) => YY.getFloat64(rY + 16, !0)
      },
      Mr = {
        BYTES: 8,
        what: (YY, rY) => YY.getUint8(rY + 0),
        kind: (YY, rY) => YY.getUint8(rY + 1),
        save: (YY, rY) => YY.getUint32(rY + 4, !0)
      },
      wr = {
        BYTES: 4,
        vv: (YY, rY) => YY.getUint16(rY + 0, !0)
      },
      br = {
        BYTES: 360,
        eye: (YY, rY, DY) => YY.getFloat64(rY + 0 + 8 * DY, !0),
        localPos: (YY, rY, DY) => YY.getFloat64(rY + 24 + 8 * DY, !0),
        K8: (YY, rY, DY) => YY.getFloat64(rY + 48 + 8 * DY, !0),
        viewProj: (YY, rY, DY) => YY.getFloat32(rY + 72 + 4 * DY, !0),
        origin: (YY, rY, DY) => YY.getInt32(rY + 136 + 4 * DY, !0),
        heading: (YY, rY) => YY.getFloat32(rY + 148, !0),
        pitch: (YY, rY) => YY.getFloat32(rY + 152, !0),
        tanHalfFovX: (YY, rY) => YY.getFloat32(rY + 156, !0),
        tanHalfFovY: (YY, rY) => YY.getFloat32(rY + 160, !0),
        viewportCss: (YY, rY, DY) => YY.getFloat32(rY + 164 + 4 * DY, !0),
        localVel: (YY, rY, DY) => YY.getFloat32(rY + 172 + 4 * DY, !0),
        actionDir: (YY, rY, DY) => YY.getFloat32(rY + 184 + 4 * DY, !0),
        localId: (YY, rY) => YY.getInt32(rY + 196, !0),
        playerFlags: (YY, rY) => YY.getUint32(rY + 200, !0),
        targetBlock: (YY, rY, DY) => YY.getInt32(rY + 204 + 4 * DY, !0),
        targetAdjacent: (YY, rY, DY) => YY.getInt32(rY + 216 + 4 * DY, !0),
        targetBlockId: (YY, rY) => YY.getUint32(rY + 228, !0),
        targetNormal: (YY, rY, DY) => YY.getInt8(rY + 232 + 1 * DY),
        targetFlags: (YY, rY) => YY.getUint8(rY + 235),
        pickedEntity: (YY, rY) => YY.getInt32(rY + 236, !0),
        breakingPos: (YY, rY, DY) => YY.getInt32(rY + 240 + 4 * DY, !0),
        breakingProgress: (YY, rY) => YY.getFloat32(rY + 252, !0),
        RV: (YY, rY) => YY.getUint16(rY + 256, !0),
        selectedSlot: (YY, rY) => YY.getUint8(rY + 258),
        heldFlags: (YY, rY) => YY.getUint8(rY + 259),
        heldAttrVersion: (YY, rY) => YY.getUint32(rY + 260, !0),
        inventoryVersion: (YY, rY) => YY.getUint32(rY + 264, !0),
        effectsVersion: (YY, rY) => YY.getUint32(rY + 268, !0),
        entitiesVersion: (YY, rY) => YY.getUint32(rY + 272, !0),
        entRenderPtr: (YY, rY) => YY.getUint32(rY + 276, !0),
        entCapacity: (YY, rY) => YY.getUint32(rY + 280, !0),
        frameMs: (YY, rY) => YY.getFloat32(rY + 284, !0),
        fps: (YY, rY) => YY.getFloat32(rY + 288, !0),
        entVisPtr: (YY, rY) => YY.getUint32(rY + 292, !0),
        momentumFrac: (YY, rY) => YY.getFloat32(rY + 296, !0),
        chunkSlotsPtr: (YY, rY) => YY.getUint32(rY + 300, !0),
        chunkSlotsLen: (YY, rY) => YY.getUint32(rY + 304, !0),
        walkThroughPtr: (YY, rY) => YY.getUint32(rY + 308, !0),
        walkThroughLen: (YY, rY) => YY.getUint32(rY + 312, !0),
        audioViewPtr: (YY, rY) => YY.getUint32(rY + 316, !0),
        inventoryViewPtr: (YY, rY) => YY.getUint32(rY + 320, !0),
        eventOverflowGen: (YY, rY) => YY.getUint32(rY + 324, !0),
        eventOverflowMask: (YY, rY) => YY.getUint32(rY + 328, !0),
        promptEntity: (YY, rY) => YY.getInt32(rY + 332, !0),
        replayViewPtr: (YY, rY) => YY.getUint32(rY + 336, !0),
        slotIcon: (YY, rY) => YY.getUint32(rY + 340, !0),
        localDeaths: (YY, rY) => YY.getUint32(rY + 344, !0),
        cameraFar: (YY, rY) => YY.getFloat32(rY + 348, !0),
        gliderBoostFuel: (YY, rY) => YY.getUint32(rY + 352, !0),
        interactLabel: (YY, rY) => YY.getUint16(rY + 356, !0),
        interactIcon: (YY, rY) => YY.getUint16(rY + 358, !0)
      },
      Xr = {
        BYTES: 16,
        voxelsPtr: (YY, rY) => YY.getUint32(rY + 0, !0),
        version: (YY, rY) => YY.getUint32(rY + 4, !0),
        generation: (YY, rY) => YY.getUint32(rY + 8, !0),
        ja: (YY, rY) => YY.getUint32(rY + 12, !0)
      },
      qr = {
        BYTES: 56,
        listener: (YY, rY, DY) => YY.getFloat64(rY + 0 + 8 * DY, !0),
        forward: (YY, rY, DY) => YY.getFloat32(rY + 24 + 4 * DY, !0),
        up: (YY, rY, DY) => YY.getFloat32(rY + 36 + 4 * DY, !0),
        dropped: (YY, rY) => YY.getUint32(rY + 48, !0),
        unfollowed: (YY, rY) => YY.getUint32(rY + 52, !0)
      },
      pr = {
        BYTES: 8,
        item: (YY, rY) => YY.getUint16(rY + 0, !0),
        amount: (YY, rY) => YY.getUint16(rY + 2, !0),
        attrVersion: (YY, rY) => YY.getUint32(rY + 4, !0)
      },
      kr = {
        BYTES: 76,
        version: (YY, rY) => YY.getUint32(rY + 0, !0),
        state: (YY, rY) => YY.getUint8(rY + 4),
        cameraMode: (YY, rY) => YY.getUint8(rY + 5),
        Zu: (YY, rY) => YY.getUint32(rY + 8, !0),
        totalTicks: (YY, rY) => YY.getUint32(rY + 12, !0),
        speed: (YY, rY) => YY.getFloat32(rY + 16, !0),
        markIn: (YY, rY) => YY.getUint32(rY + 20, !0),
        markOut: (YY, rY) => YY.getUint32(rY + 24, !0),
        editVersion: (YY, rY) => YY.getUint32(rY + 28, !0),
        drops: (YY, rY, DY) => YY.getUint32(rY + 32 + 4 * DY, !0)
      },
      Gr = {
        BYTES: 6,
        flags: (YY, rY) => YY.getUint8(rY + 0),
        harvestType: (YY, rY) => YY.getUint8(rY + 1),
        harvestLevel: (YY, rY) => YY.getUint8(rY + 2),
        attachedTop: (YY, rY) => YY.getUint16(rY + 4, !0)
      },
      xr = {
        BYTES: 3,
        flags: (YY, rY) => YY.getUint8(rY + 0),
        harvests: (YY, rY) => YY.getUint8(rY + 1),
        level: (YY, rY) => YY.getUint8(rY + 2)
      },
      nr = {
        BYTES: 12,
        item: (YY, rY) => YY.getUint32(rY + 0, !0),
        amount: (YY, rY) => YY.getFloat64(rY + 4, !0)
      },
      Pr = {
        BYTES: 16,
        recipes: (YY, rY) => YY.getUint32(rY + 0, !0),
        ingredients: (YY, rY) => YY.getUint32(rY + 4, !0),
        craftAllTimes: (YY, rY) => YY.getUint32(rY + 8, !0),
        flags: (YY, rY) => YY.getUint32(rY + 12, !0)
      },
      Ur = {
        BYTES: 10,
        item: (YY, rY) => YY.getUint16(rY + 0, !0),
        recipe: (YY, rY) => YY.getUint16(rY + 2, !0),
        produces: (YY, rY) => YY.getUint16(rY + 4, !0),
        requires: (YY, rY) => YY.getUint16(rY + 6, !0),
        flags: (YY, rY) => YY.getUint8(rY + 8)
      },
      Lr = {
        BYTES: 4,
        amount: (YY, rY) => YY.getUint16(rY + 0, !0),
        items: (YY, rY) => YY.getUint16(rY + 2, !0)
      },
      tr = {
        BYTES: 8,
        amount: (YY, rY) => YY.getUint32(rY + 0, !0),
        item: (YY, rY) => YY.getUint16(rY + 4, !0),
        from: (YY, rY) => YY.getUint16(rY + 6, !0)
      },
      YD = {
        BYTES: 16,
        serverId: (YY, rY) => YY.getInt32(rY + 0, !0),
        len: (YY, rY) => YY.getUint32(rY + 4, !0),
        kind: (YY, rY) => YY.getUint16(rY + 8, !0),
        variation: (YY, rY) => YY.getUint16(rY + 10, !0),
        pose: (YY, rY) => YY.getUint8(rY + 12),
        meta: (YY, rY) => YY.getUint8(rY + 13),
        mesh: (YY, rY) => YY.getUint8(rY + 14),
        flags: (YY, rY) => YY.getUint8(rY + 15)
      },
      rD = {
        BYTES: 40,
        terrainOpaque: (YY, rY) => YY.getUint32(rY + 0, !0),
        terrainTransparent: (YY, rY) => YY.getUint32(rY + 4, !0),
        terrainPack: (YY, rY) => YY.getUint32(rY + 8, !0),
        earthSky: (YY, rY) => YY.getUint32(rY + 12, !0),
        skyMeshes: (YY, rY) => YY.getUint32(rY + 16, !0),
        regular: (YY, rY) => YY.getUint32(rY + 20, !0),
        thin: (YY, rY) => YY.getUint32(rY + 24, !0),
        line: (YY, rY) => YY.getUint32(rY + 28, !0),
        text: (YY, rY) => YY.getUint32(rY + 32, !0),
        particles: (YY, rY) => YY.getUint32(rY + 36, !0)
      },
      DD = {
        BYTES: 16,
        fov: (YY, rY) => YY.getFloat32(rY + 0, !0),
        baseFov: (YY, rY) => YY.getFloat32(rY + 4, !0),
        aspect: (YY, rY) => YY.getFloat32(rY + 8, !0),
        bodyHeading: (YY, rY) => YY.getFloat32(rY + 12, !0)
      },
      FD = {
        BYTES: 32,
        eye: (YY, rY, DY) => YY.getFloat64(rY + 0 + 8 * DY, !0),
        heading: (YY, rY) => YY.getFloat32(rY + 24, !0),
        pitch: (YY, rY) => YY.getFloat32(rY + 28, !0)
      },
      AD = {
        BYTES: 40,
        feet: (YY, rY, DY) => YY.getFloat64(rY + 0 + 8 * DY, !0),
        eyeHeight: (YY, rY) => YY.getFloat32(rY + 24, !0),
        heading: (YY, rY) => YY.getFloat32(rY + 28, !0),
        headingIsDrawn: (YY, rY) => YY.getUint32(rY + 32, !0)
      },
      ID = 32,
      RD = 63,
      OD = {
        TickEnd: 32,
        EntitySpawned: 33,
        EntityDespawned: 34,
        ChangeBlockFail: 39,
        ChangeBlockFailEnd: 46,
        InventoryEvent: 48,
        HeldItemChanged: 49,
        ShotDamage: 50,
        EnchantOffer: 51,
        UiEvent: 52,
        EntityInfoChanged: 53,
        ChunkSlot: 55,
        PlaySound: 40,
        SoundPos: 41,
        SoundSet: 42,
        SoundFade: 43,
        SoundStop: 44,
        SoundReset: 45,
        ReplayFailed: 56,
        ReplayOption: 57,
        ReplayFilePart: 58,
        ReplayFileReady: 59,
        ReplayOpened: 60,
        ReplayUiEvent: 61,
        RecorderEvent: 62
      };

    function gD(YY, rY, DY, FY, AY) {
      var IY, RY, OY, gY, aY, vY, uY, sY, iY, yY, QY, oY, WY, EY, mY, VY, SY, lY, TY, eY, NY, BY, cY, KY, HY;
      switch (YY) {
        case 32:
          return 4 === FY && (null === (IY = AY.tickEnd) || void 0 === IY || IY.call(AY, Wr.Zu(rY, DY)), !0);
        case 33:
          return 12 === FY && (null === (RY = AY.entitySpawned) || void 0 === RY || RY.call(AY, Er.serverId(rY, DY), Er.index(rY, DY), Er.kind(rY, DY)), !0);
        case 34:
          return 12 === FY && (null === (OY = AY.entityDespawned) || void 0 === OY || OY.call(AY, Er.serverId(rY, DY), Er.index(rY, DY), Er.kind(rY, DY)), !0);
        case 39:
          return !(FY < 20) && (null === (gY = AY.changeBlockFail) || void 0 === gY || gY.call(AY, mr.pos(rY, DY, 0), mr.pos(rY, DY, 1), mr.pos(rY, DY, 2), mr.actual(rY, DY), mr.dataLen(rY, DY), DY + 20, FY - 20), !0);
        case 46:
          return 0 === FY && (null === (aY = AY.changeBlockFailEnd) || void 0 === aY || aY.call(AY), !0);
        case 48:
          return 20 === FY && (null === (vY = AY.inventoryEvent) || void 0 === vY || vY.call(AY, Vr.what(rY, DY), Vr.value(rY, DY), Vr.pos(rY, DY, 0), Vr.pos(rY, DY, 1), Vr.pos(rY, DY, 2), Vr.block(rY, DY)), !0);
        case 49:
          return 4 === FY && (null === (uY = AY.heldItemChanged) || void 0 === uY || uY.call(AY, Sr.item(rY, DY), Sr.slot(rY, DY)), !0);
        case 50:
          return 16 === FY && (null === (sY = AY.shotDamage) || void 0 === sY || sY.call(AY, lr.target(rY, DY), lr.damage(rY, DY), lr.distance(rY, DY), lr.crit(rY, DY)), !0);
        case 51:
          return !(FY < 4) && (null === (iY = AY.enchantOffer) || void 0 === iY || iY.call(AY, Tr.slot(rY, DY), DY + 4, FY - 4), !0);
        case 52:
          return !(FY < 20) && (null === (yY = AY.uiEvent) || void 0 === yY || yY.call(AY, er.what(rY, DY), er.value(rY, DY), er.pos(rY, DY, 0), er.pos(rY, DY, 1), er.pos(rY, DY, 2), er.block(rY, DY), DY + 20, FY - 20), !0);
        case 53:
          return 12 === FY && (null === (QY = AY.entityInfoChanged) || void 0 === QY || QY.call(AY, Nr.serverId(rY, DY), Nr.index(rY, DY), Nr.what(rY, DY)), !0);
        case 55:
          return 24 === FY && (null === (oY = AY.chunkSlot) || void 0 === oY || oY.call(AY, Br.cx(rY, DY), Br.cy(rY, DY), Br.cz(rY, DY), Br.slot(rY, DY), Br.generation(rY, DY), Br.flags(rY, DY)), !0);
        case 40:
          return 44 === FY && (null === (WY = AY.playSound) || void 0 === WY || WY.call(AY, cr.pos(rY, DY, 0), cr.pos(rY, DY, 1), cr.pos(rY, DY, 2), cr.sound(rY, DY), cr.flags(rY, DY), cr.handle(rY, DY), cr.volume(rY, DY), cr.rate(rY, DY), cr.refDist(rY, DY)), !0);
        case 41:
          return 28 === FY && (null === (EY = AY.soundPos) || void 0 === EY || EY.call(AY, Kr.pos(rY, DY, 0), Kr.pos(rY, DY, 1), Kr.pos(rY, DY, 2), Kr.handle(rY, DY)), !0);
        case 42:
          return 16 === FY && (null === (mY = AY.soundSet) || void 0 === mY || mY.call(AY, Hr.handle(rY, DY), Hr.volume(rY, DY), Hr.rate(rY, DY), Hr.refDist(rY, DY)), !0);
        case 43:
          return 12 === FY && (null === (VY = AY.soundFade) || void 0 === VY || VY.call(AY, zr.handle(rY, DY), zr.to(rY, DY), zr.ms(rY, DY), zr.flags(rY, DY)), !0);
        case 44:
          return 4 === FY && (null === (SY = AY.soundStop) || void 0 === SY || SY.call(AY, Zr.handle(rY, DY)), !0);
        case 45:
          return 0 === FY && (null === (lY = AY.soundReset) || void 0 === lY || lY.call(AY), !0);
        case 56:
          return 4 === FY && (null === (TY = AY.replayFailed) || void 0 === TY || TY.call(AY, Cr.reason(rY, DY), Cr.code(rY, DY)), !0);
        case 57:
          return !(FY < 4) && (null === (eY = AY.replayOption) || void 0 === eY || eY.call(AY, fr.key(rY, DY), fr.tag(rY, DY), DY + 4, FY - 4), !0);
        case 58:
          return 16 === FY && (null === (NY = AY.replayFilePart) || void 0 === NY || NY.call(AY, jr.save(rY, DY), jr.index(rY, DY), jr.ptr(rY, DY), jr.len(rY, DY)), !0);
        case 59:
          return 16 === FY && (null === (BY = AY.replayFileReady) || void 0 === BY || BY.call(AY, hr.save(rY, DY), hr.kind(rY, DY), hr.parts(rY, DY), hr.bytes(rY, DY)), !0);
        case 60:
          return !(FY < 4) && (null === (cY = AY.replayOpened) || void 0 === cY || cY.call(AY, dr.totalTicks(rY, DY), DY + 4, FY - 4), !0);
        case 61:
          return !(FY < 24) && (null === (KY = AY.replayUiEvent) || void 0 === KY || KY.call(AY, Jr.what(rY, DY), Jr.int(rY, DY), Jr.x(rY, DY), Jr.y(rY, DY), DY + 24, FY - 24), !0);
        case 62:
          return 8 === FY && (null === (HY = AY.recorderEvent) || void 0 === HY || HY.call(AY, Mr.what(rY, DY), Mr.kind(rY, DY), Mr.save(rY, DY)), !0);
        default:
          return !1
      }
    }
    const aD = {
      SetChunkAddDistance: 2,
      WatchEntityInfo: 66,
      EventResync: 67,
      WatchPromptPick: 68,
      SetLocalDbId: 69,
      SetAltVeto: 128,
      EnchantOfferRequest: 130,
      ClearPickupDelay: 131,
      SyncOpMarker: 132,
      SetHooks: 133,
      SetPublicLobby: 144,
      ClickCodeBlock: 145,
      Send: 256,
      Leave: 257,
      SetPaused: 258,
      ParticleBurst: 320,
      ParticleStart: 321,
      ParticleUpdate: 322,
      ParticleStop: 323,
      ParticleEmitPoints: 324,
      ParticleStopAll: 325,
      InstancePool: 384,
      InstanceCommit: 385,
      GameMeshCreate: 386,
      GameMeshSet: 387,
      GameMeshDispose: 388,
      SetNametagOffset: 389,
      SetFacingTolerance: 390,
      SetGroundArrowStyle: 391,
      InstancePoolDispose: 392,
      MobModel: 393,
      MobModelSet: 394,
      MobModelDispose: 398,
      ThirdPersonFor: 448,
      FreecamMove: 450,
      ScriptedRelease: 451,
      SetZoom: 452,
      SwapZoom: 453,
      FreecamCmd: 454,
      SecondCentres: 455,
      SetCameraFar: 456,
      HighlightCell: 457,
      RecorderOption: 530,
      RecorderFlyingText: 531,
      RecorderPlayerKilled: 532,
      RecorderKillfeed: 533,
      Respawn: 576,
      BindCustomButtonKeys: 577,
      PressCustomButton: 578,
      PadMove: 579
    };
    let vD = new Uint8Array(0);

    function uD(YY) {
      return vD.buffer !== YY.buffer && (vD = new Uint8Array(YY.buffer)), vD
    }

    function sD(YY, rY, DY) {
      const FY = YY.Ei(66, rY, 4);
      if (FY < 0) return !1;
      return YY.view.setUint8(FY + 0, DY), !0
    }

    function iD(YY, rY, DY) {
      const FY = YY.Ei(67, rY, 4);
      if (FY < 0) return !1;
      return YY.view.setUint32(FY + 0, DY, !0), !0
    }

    function yD(YY, rY, DY) {
      const FY = YY.Ei(68, rY, 4);
      if (FY < 0) return !1;
      return YY.view.setUint8(FY + 0, DY), !0
    }

    function QD(YY, rY, DY, FY) {
      const AY = YY.Ei(69, rY, 4 + FY.length);
      if (AY < 0) return !1;
      const IY = YY.view;
      return IY.setUint8(AY + 0, DY), uD(IY).set(FY, IY.byteOffset + AY + 4), !0
    }

    function oD(YY, rY, DY, FY, AY) {
      const IY = YY.Ei(128, rY, 4 + AY.length);
      if (IY < 0) return !1;
      const RY = YY.view;
      return RY.setUint8(IY + 0, DY), RY.setUint16(IY + 2, FY, !0), uD(RY).set(AY, RY.byteOffset + IY + 4), !0
    }

    function WD(YY, rY, DY) {
      const FY = YY.Ei(131, rY, 4);
      if (FY < 0) return !1;
      return YY.view.setInt32(FY + 0, DY, !0), !0
    }

    function ED(YY, rY, DY) {
      const FY = YY.Ei(132, rY, 4);
      if (FY < 0) return !1;
      return YY.view.setUint32(FY + 0, DY, !0), !0
    }

    function mD(YY, rY, DY) {
      const FY = YY.Ei(133, rY, 4);
      if (FY < 0) return !1;
      return YY.view.setUint32(FY + 0, DY, !0), !0
    }

    function VD(YY, rY, DY) {
      const FY = YY.Ei(144, rY, 4);
      if (FY < 0) return !1;
      return YY.view.setUint8(FY + 0, DY), !0
    }

    function SD(YY, rY, DY, FY, AY) {
      const IY = YY.Ei(145, rY, 12);
      if (IY < 0) return !1;
      const RY = YY.view;
      return RY.setInt32(IY + 0, DY, !0), RY.setInt32(IY + 4, FY, !0), RY.setInt32(IY + 8, AY, !0), !0
    }

    function lD(YY, rY, DY, FY) {
      const AY = YY.Ei(256, rY, 4 + FY.length);
      if (AY < 0) return !1;
      const IY = YY.view;
      return IY.setUint16(AY + 0, DY, !0), uD(IY).set(FY, IY.byteOffset + AY + 4), !0
    }

    function TD(YY, rY, DY) {
      const FY = YY.Ei(258, rY, 4);
      if (FY < 0) return !1;
      return YY.view.setUint8(FY + 0, DY), !0
    }

    function eD(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
      const aY = YY.Ei(320, rY, 48 + gY.length);
      if (aY < 0) return !1;
      const vY = YY.view;
      vY.setUint32(aY + 0, DY, !0), vY.setUint16(aY + 4, FY, !0), vY.setUint16(aY + 6, AY, !0), vY.setUint32(aY + 8, IY, !0);
      for (let uY = 0; uY < 3; uY++) vY.setFloat64(aY + 12 + 8 * uY, RY[uY], !0);
      for (let uY = 0; uY < 3; uY++) vY.setFloat32(aY + 36 + 4 * uY, OY[uY], !0);
      return uD(vY).set(gY, vY.byteOffset + aY + 48), !0
    }

    function ND(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
      const aY = YY.Ei(321, rY, 48 + gY.length);
      if (aY < 0) return !1;
      const vY = YY.view;
      vY.setUint32(aY + 0, DY, !0), vY.setInt32(aY + 4, FY, !0), vY.setUint16(aY + 8, AY, !0), vY.setUint16(aY + 10, IY, !0);
      for (let uY = 0; uY < 3; uY++) vY.setFloat64(aY + 12 + 8 * uY, RY[uY], !0);
      for (let uY = 0; uY < 3; uY++) vY.setFloat32(aY + 36 + 4 * uY, OY[uY], !0);
      return uD(vY).set(gY, vY.byteOffset + aY + 48), !0
    }

    function BD(YY, rY, DY, FY, AY, IY, RY) {
      const OY = YY.Ei(322, rY, 44 + RY.length);
      if (OY < 0) return !1;
      const gY = YY.view;
      gY.setUint32(OY + 0, DY, !0), gY.setUint32(OY + 4, FY, !0);
      for (let aY = 0; aY < 3; aY++) gY.setFloat64(OY + 8 + 8 * aY, AY[aY], !0);
      for (let aY = 0; aY < 3; aY++) gY.setFloat32(OY + 32 + 4 * aY, IY[aY], !0);
      return uD(gY).set(RY, gY.byteOffset + OY + 44), !0
    }

    function cD(YY, rY, DY) {
      const FY = YY.Ei(323, rY, 4);
      if (FY < 0) return !1;
      return YY.view.setUint32(FY + 0, DY, !0), !0
    }

    function KD(YY, rY, DY, FY, AY, IY) {
      const RY = YY.Ei(324, rY, 32 + IY.length);
      if (RY < 0) return !1;
      const OY = YY.view;
      OY.setUint32(RY + 0, DY, !0), OY.setUint32(RY + 4, FY, !0);
      for (let gY = 0; gY < 3; gY++) OY.setFloat64(RY + 8 + 8 * gY, AY[gY], !0);
      return uD(OY).set(IY, OY.byteOffset + RY + 32), !0
    }

    function HD(YY, rY) {
      return !(YY.Ei(325, rY, 0) < 0)
    }

    function zD(YY, rY, DY, FY, AY, IY) {
      const RY = YY.Ei(384, rY, 16);
      if (RY < 0) return !1;
      const OY = YY.view;
      return OY.setUint32(RY + 0, DY, !0), OY.setUint32(RY + 4, FY, !0), OY.setFloat32(RY + 8, AY, !0), OY.setFloat32(RY + 12, IY, !0), !0
    }

    function ZD(YY, rY, DY, FY, AY, IY, RY) {
      const OY = YY.Ei(385, rY, 36 + RY.length);
      if (OY < 0) return !1;
      const gY = YY.view;
      gY.setUint32(OY + 0, DY, !0), gY.setUint32(OY + 4, FY, !0);
      for (let aY = 0; aY < 3; aY++) gY.setFloat64(OY + 8 + 8 * aY, AY[aY], !0);
      return gY.setUint32(OY + 32, IY, !0), uD(gY).set(RY, gY.byteOffset + OY + 36), !0
    }

    function CD(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
      const aY = YY.Ei(386, rY, 56 + gY.length);
      if (aY < 0) return !1;
      const vY = YY.view;
      vY.setUint32(aY + 0, DY, !0), vY.setUint8(aY + 4, FY);
      for (let uY = 0; uY < 4; uY++) vY.setFloat32(aY + 8 + 4 * uY, AY[uY], !0);
      for (let uY = 0; uY < 3; uY++) vY.setFloat64(aY + 24 + 8 * uY, IY[uY], !0);
      return vY.setUint32(aY + 48, RY, !0), vY.setUint32(aY + 52, OY, !0), uD(vY).set(gY, vY.byteOffset + aY + 56), !0
    }

    function fD(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
      const aY = YY.Ei(387, rY, 56);
      if (aY < 0) return !1;
      const vY = YY.view;
      vY.setUint32(aY + 0, DY, !0), vY.setUint16(aY + 4, FY, !0), vY.setUint8(aY + 6, AY);
      for (let uY = 0; uY < 3; uY++) vY.setFloat64(aY + 8 + 8 * uY, IY[uY], !0);
      for (let uY = 0; uY < 2; uY++) vY.setFloat32(aY + 32 + 4 * uY, RY[uY], !0);
      vY.setFloat32(aY + 40, OY, !0);
      for (let uY = 0; uY < 3; uY++) vY.setFloat32(aY + 44 + 4 * uY, gY[uY], !0);
      return !0
    }

    function jD(YY, rY, DY) {
      const FY = YY.Ei(388, rY, 4);
      if (FY < 0) return !1;
      return YY.view.setUint32(FY + 0, DY, !0), !0
    }

    function hD(YY, rY, DY, FY) {
      const AY = YY.Ei(389, rY, 8);
      if (AY < 0) return !1;
      const IY = YY.view;
      return IY.setInt32(AY + 0, DY, !0), IY.setFloat32(AY + 4, FY, !0), !0
    }

    function dD(YY, rY, DY, FY) {
      const AY = YY.Ei(390, rY, 8);
      if (AY < 0) return !1;
      const IY = YY.view;
      return IY.setInt32(AY + 0, DY, !0), IY.setFloat32(AY + 4, FY, !0), !0
    }

    function JD(YY, rY, DY, FY, AY, IY) {
      const RY = YY.Ei(391, rY, 12);
      if (RY < 0) return !1;
      const OY = YY.view;
      return OY.setFloat32(RY + 0, DY, !0), OY.setFloat32(RY + 4, FY, !0), OY.setUint8(RY + 8, AY), OY.setUint8(RY + 9, IY), !0
    }

    function MD(YY, rY, DY) {
      const FY = YY.Ei(392, rY, 4);
      if (FY < 0) return !1;
      return YY.view.setUint32(FY + 0, DY, !0), !0
    }

    function wD(YY, rY, DY, FY, AY) {
      const IY = YY.Ei(393, rY, 12);
      if (IY < 0) return !1;
      const RY = YY.view;
      return RY.setUint32(IY + 0, DY, !0), RY.setUint16(IY + 4, FY, !0), RY.setFloat32(IY + 8, AY, !0), !0
    }

    function bD(YY, rY, DY, FY, AY, IY, RY) {
      const OY = YY.Ei(394, rY, 36);
      if (OY < 0) return !1;
      const gY = YY.view;
      gY.setUint32(OY + 0, DY, !0), gY.setUint16(OY + 4, FY, !0), gY.setUint8(OY + 6, AY);
      for (let aY = 0; aY < 3; aY++) gY.setFloat64(OY + 8 + 8 * aY, IY[aY], !0);
      return gY.setFloat32(OY + 32, RY, !0), !0
    }

    function XD(YY, rY, DY) {
      const FY = YY.Ei(398, rY, 4);
      if (FY < 0) return !1;
      return YY.view.setUint32(FY + 0, DY, !0), !0
    }

    function qD(YY, rY, DY) {
      const FY = YY.Ei(448, rY, 4);
      if (FY < 0) return !1;
      return YY.view.setFloat32(FY + 0, DY, !0), !0
    }

    function pD(YY, rY, DY, FY) {
      const AY = YY.Ei(450, rY, 12);
      if (AY < 0) return !1;
      const IY = YY.view;
      for (let RY = 0; RY < 2; RY++) IY.setFloat32(AY + 0 + 4 * RY, DY[RY], !0);
      return IY.setUint8(AY + 8, FY), !0
    }

    function kD(YY, rY, DY, FY) {
      const AY = YY.Ei(452, rY, 8);
      if (AY < 0) return !1;
      const IY = YY.view;
      return IY.setFloat32(AY + 0, DY, !0), IY.setUint8(AY + 4, FY), !0
    }

    function GD(YY, rY, DY, FY, AY) {
      const IY = YY.Ei(454, rY, 4);
      if (IY < 0) return !1;
      const RY = YY.view;
      return RY.setUint8(IY + 0, DY), RY.setUint8(IY + 1, FY), RY.setUint8(IY + 2, AY), !0
    }

    function xD(YY, rY, DY, FY) {
      const AY = YY.Ei(455, rY, 40);
      if (AY < 0) return !1;
      const IY = YY.view;
      for (let RY = 0; RY < 9; RY++) IY.setInt32(AY + 0 + 4 * RY, DY[RY], !0);
      return IY.setUint32(AY + 36, FY, !0), !0
    }

    function nD(YY, rY, DY, FY) {
      const AY = YY.Ei(456, rY, 8);
      if (AY < 0) return !1;
      const IY = YY.view;
      return IY.setFloat32(AY + 0, DY, !0), IY.setUint8(AY + 4, FY), !0
    }

    function PD(YY, rY, DY, FY, AY) {
      const IY = YY.Ei(457, rY, 16);
      if (IY < 0) return !1;
      const RY = YY.view;
      for (let OY = 0; OY < 3; OY++) RY.setInt32(IY + 0 + 4 * OY, DY[OY], !0);
      for (let OY = 0; OY < 3; OY++) RY.setInt8(IY + 12 + 1 * OY, FY[OY]);
      return RY.setUint8(IY + 15, AY), !0
    }

    function UD(YY, rY, DY, FY) {
      const AY = YY.Ei(530, rY, 4 + FY.length);
      if (AY < 0) return !1;
      const IY = YY.view;
      return IY.setUint8(AY + 0, DY), uD(IY).set(FY, IY.byteOffset + AY + 4), !0
    }

    function LD(YY, rY, DY, FY, AY, IY) {
      const RY = YY.Ei(531, rY, 12 + IY.length);
      if (RY < 0) return !1;
      const OY = YY.view;
      return OY.setFloat32(RY + 0, DY, !0), OY.setFloat32(RY + 4, FY, !0), OY.setUint32(RY + 8, AY, !0), uD(OY).set(IY, OY.byteOffset + RY + 12), !0
    }

    function tD(YY, rY, DY, FY, AY, IY) {
      const RY = YY.Ei(532, rY, 12 + IY.length);
      if (RY < 0) return !1;
      const OY = YY.view;
      return OY.setInt32(RY + 0, DY, !0), OY.setInt32(RY + 4, FY, !0), OY.setUint32(RY + 8, AY, !0), uD(OY).set(IY, OY.byteOffset + RY + 12), !0
    }

    function YF(YY, rY, DY, FY, AY) {
      const IY = YY.Ei(533, rY, 8 + AY.length);
      if (IY < 0) return !1;
      const RY = YY.view;
      return RY.setInt32(IY + 0, DY, !0), RY.setInt32(IY + 4, FY, !0), uD(RY).set(AY, RY.byteOffset + IY + 8), !0
    }

    function rF(YY, rY) {
      return !(YY.Ei(576, rY, 0) < 0)
    }

    function DF(YY, rY, DY, FY, AY, IY) {
      const RY = YY.Ei(577, rY, 36 + IY.length);
      if (RY < 0) return !1;
      const OY = YY.view;
      OY.setUint8(RY + 0, DY);
      for (let gY = 0; gY < 16; gY++) OY.setUint8(RY + 4 + 1 * gY, FY[gY]);
      for (let gY = 0; gY < 16; gY++) OY.setUint8(RY + 20 + 1 * gY, AY[gY]);
      return uD(OY).set(IY, OY.byteOffset + RY + 36), !0
    }

    function FF(YY, rY, DY, FY) {
      const AY = YY.Ei(578, rY, 4 + FY.length);
      if (AY < 0) return !1;
      const IY = YY.view;
      return IY.setUint8(AY + 0, DY), uD(IY).set(FY, IY.byteOffset + AY + 4), !0
    }

    function AF(YY, rY, DY, FY, AY, IY, RY, OY) {
      const gY = YY.Ei(579, rY, 36);
      if (gY < 0) return !1;
      const aY = YY.view;
      return aY.setFloat64(gY + 0, DY, !0), aY.setFloat64(gY + 8, FY, !0), aY.setFloat64(gY + 16, AY, !0), aY.setFloat64(gY + 24, IY, !0), aY.setUint16(gY + 32, RY, !0), aY.setUint8(gY + 34, OY), !0
    }
    class IF {
      constructor(YY, rY) {
        this.core = YY, this.afterCall = rY
      }
      canModify(YY, rY, DY) {
        const FY = this.core.HAY(YY, rY, DY);
        return this.afterCall(), FY
      }
      terrainBlocked(YY, rY, DY, FY, AY) {
        const IY = this.core.SIY(YY, rY, DY, FY, AY);
        return this.afterCall(), IY
      }
      Rl(YY, rY, DY, FY) {
        const AY = this.core.Fi(YY, rY, DY, FY);
        return this.afterCall(), AY
      }
      blockData(YY, rY, DY) {
        const FY = this.core.cAY(YY, rY, DY);
        return this.afterCall(), FY
      }
      cameraSweep(YY, rY, DY, FY, AY, IY, RY) {
        const OY = this.core.NFY(YY, rY, DY, FY, AY, IY, RY);
        return this.afterCall(), OY
      }
      hasServerTarget(YY) {
        const rY = this.core.qAY(YY);
        return this.afterCall(), rY
      }
      entityInteractable(YY) {
        const rY = this.core.dAY(YY);
        return this.afterCall(), rY
      }
      entityCrouching(YY) {
        const rY = this.core.hAY(YY);
        return this.afterCall(), rY
      }
      predictServerPosition(YY, rY, DY, FY) {
        const AY = this.core.rIY(YY, rY, DY, FY);
        return this.afterCall(), AY
      }
      setOtherEntitySetting(YY, rY, DY) {
        const FY = this.core.zFY(YY, rY, DY);
        return this.afterCall(), FY
      }
      entityInfoBatch(YY) {
        const rY = this.core.fFY(YY);
        return this.afterCall(), rY
      }
      entityName(YY) {
        const rY = this.core.JAY(YY);
        return this.afterCall(), rY
      }
      hasEffect(YY, rY) {
        const DY = this.core.XAY(YY, rY);
        return this.afterCall(), DY
      }
      scratchPtr() {
        const YY = this.core.lFY();
        return this.afterCall(), YY
      }
      invSwap(YY, rY) {
        const DY = this.core.PAY(YY, rY);
        return this.afterCall(), DY
      }
      invMove(YY, rY, DY) {
        const FY = this.core.GAY(YY, rY, DY);
        return this.afterCall(), FY
      }
      invQuickMove(YY, rY, DY, FY) {
        const AY = this.core.xAY(YY, rY, DY, FY);
        return this.afterCall(), AY
      }
      invRemove(YY, rY, DY) {
        const FY = this.core.nAY(YY, rY, DY);
        return this.afterCall(), FY
      }
      invEnchant(YY, rY, DY, FY, AY) {
        const IY = this.core.kAY(YY, rY, DY, FY, AY);
        return this.afterCall(), IY
      }
      craft(YY, rY, DY) {
        const FY = this.core.craft(YY, rY, DY);
        return this.afterCall(), FY
      }
      salvage(YY, rY, DY) {
        const FY = this.core.salvage(YY, rY, DY);
        return this.afterCall(), FY
      }
      selectSlot(YY) {
        const rY = this.core.IIY(YY);
        return this.afterCall(), rY
      }
      closeChest() {
        const YY = this.core.zAY();
        return this.afterCall(), YY
      }
      itemAttributesBatch(YY) {
        const rY = this.core.CFY(YY);
        return this.afterCall(), rY
      }
      itemNames() {
        const YY = this.core.iV();
        return this.afterCall(), YY
      }
      blockProps() {
        const YY = this.core.KAY();
        return this.afterCall(), YY
      }
      itemProps() {
        const YY = this.core.UAY();
        return this.afterCall(), YY
      }
      salvageRecipe(YY) {
        const rY = this.core.hFY(YY);
        return this.afterCall(), rY
      }
      craftingView(YY, rY, DY) {
        const FY = this.core.ZFY(YY, rY, DY);
        return this.afterCall(), FY
      }
      directorView() {
        const YY = this.core.eFY();
        return this.afterCall(), YY
      }
      directorDefaultPose() {
        const YY = this.core.BFY();
        return this.afterCall(), YY
      }
      directorEntity(YY) {
        const rY = this.core.cFY(YY);
        return this.afterCall(), rY
      }
      directorPose(YY, rY, DY, FY, AY, IY) {
        const RY = this.core.KFY(YY, rY, DY, FY, AY, IY);
        return this.afterCall(), RY
      }
      passTimings(YY) {
        const rY = this.core.YIY(YY);
        return this.afterCall(), rY
      }
      drawCensus() {
        const YY = this.core.jAY();
        return this.afterCall(), YY
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);